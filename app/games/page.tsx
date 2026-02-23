"use client";

import { useEffect, useMemo, useState } from "react";
import { GamesGrid } from "../components/games/games-grid";
import { GamesToolbar } from "../components/games/games-toolbar";
import { SiteLayout } from "../components/site-layout";
import { gameCategories, games } from "../data/games";

type SortMode = "title-asc" | "title-desc" | "quick-play" | "difficulty";

export default function GamesPage() {
    const [query, setQuery] = useState("");
    const [category, setCategory] = useState<(typeof gameCategories)[number]>("Tutti");
    const [sortMode, setSortMode] = useState<SortMode>("title-asc");
    const [onlyFavorites, setOnlyFavorites] = useState(false);
    const [favorites, setFavorites] = useState<string[]>(() => {
        if (typeof window === "undefined") return [];
        const stored = localStorage.getItem("favorite-games");
        if (!stored) return [];
        try {
            const parsed = JSON.parse(stored);
            return Array.isArray(parsed) ? parsed.filter((v) => typeof v === "string") : [];
        } catch {
            return [];
        }
    });

    useEffect(() => {
        localStorage.setItem("favorite-games", JSON.stringify(favorites));
    }, [favorites]);

    const filteredGames = useMemo(() => {
        const normalizedQuery = query.trim().toLowerCase();
        const base = games.filter((game) => {
            const matchQuery =
                normalizedQuery.length === 0 ||
                game.title.toLowerCase().includes(normalizedQuery) ||
                game.description.toLowerCase().includes(normalizedQuery);
            const matchCategory = category === "Tutti" || game.category === category;
            const matchFavorites = !onlyFavorites || favorites.includes(game.slug);
            return matchQuery && matchCategory && matchFavorites;
        });

        if (sortMode === "title-asc") {
            return [...base].sort((a, b) => a.title.localeCompare(b.title, "it"));
        }
        if (sortMode === "title-desc") {
            return [...base].sort((a, b) => b.title.localeCompare(a.title, "it"));
        }
        if (sortMode === "quick-play") {
            return [...base].sort((a, b) => a.estimatedMinutes - b.estimatedMinutes);
        }
        if (sortMode === "difficulty") {
            const difficultyOrder: Record<string, number> = { Facile: 1, Media: 2, Difficile: 3 };
            return [...base].sort((a, b) => difficultyOrder[a.difficulty] - difficultyOrder[b.difficulty]);
        }

        return [...base].sort((a, b) => a.title.localeCompare(b.title, "it"));
    }, [category, favorites, onlyFavorites, query, sortMode]);

    const toggleFavorite = (slug: string) => {
        setFavorites((current) =>
            current.includes(slug) ? current.filter((item) => item !== slug) : [...current, slug],
        );
    };

    const resetFilters = () => {
        setQuery("");
        setCategory("Tutti");
        setSortMode("title-asc");
        setOnlyFavorites(false);
    };

    return (
        <SiteLayout
            current="games"
            title="I Miei Giochi"
            eyebrow="Giochi"
            subtitle="Una collezione di giochi sviluppati durante il mio percorso di studi"
        >
            <GamesToolbar
                query={query}
                category={category}
                sortMode={sortMode}
                onlyFavorites={onlyFavorites}
                onQueryChange={setQuery}
                onCategoryChange={setCategory}
                onSortModeChange={setSortMode}
                onOnlyFavoritesChange={setOnlyFavorites}
                onReset={resetFilters}
            />

            <p className="text-muted">Risultati: {filteredGames.length}</p>

            <GamesGrid games={filteredGames} favorites={favorites} onToggleFavorite={toggleFavorite} onReset={resetFilters} />
        </SiteLayout>
    );
}
