"use client";

import { gameCategories } from "@/app/data/games";

type SortMode = "title-asc" | "title-desc" | "quick-play" | "difficulty";

type GamesToolbarProps = {
  query: string;
  category: (typeof gameCategories)[number];
  sortMode: SortMode;
  onlyFavorites: boolean;
  onQueryChange: (value: string) => void;
  onCategoryChange: (value: (typeof gameCategories)[number]) => void;
  onSortModeChange: (value: SortMode) => void;
  onOnlyFavoritesChange: (value: boolean) => void;
  onReset: () => void;
};

export function GamesToolbar({
  query,
  category,
  sortMode,
  onlyFavorites,
  onQueryChange,
  onCategoryChange,
  onSortModeChange,
  onOnlyFavoritesChange,
  onReset,
}: GamesToolbarProps) {
  return (
    <div className="card bg-body-tertiary mb-4 games-toolbar">
      <div className="card-body p-3 p-md-4">
        <div className="row g-3 align-items-end">
          <div className="col-12 col-lg-5">
            <label htmlFor="search" className="form-label small">
              Cerca gioco
            </label>
            <input
              id="search"
              className="form-control form-control-sm"
              placeholder="Es. 2048, Snake, Puzzle..."
              value={query}
              onChange={(event) => onQueryChange(event.target.value)}
            />
          </div>
          <div className="col-6 col-lg-2">
            <label htmlFor="category" className="form-label small">
              Categoria
            </label>
            <select
              id="category"
              className="form-select form-select-sm"
              value={category}
              onChange={(event) => onCategoryChange(event.target.value as (typeof gameCategories)[number])}
            >
              {gameCategories.map((cat) => (
                <option key={cat} value={cat}>
                  {cat}
                </option>
              ))}
            </select>
          </div>
          <div className="col-6 col-lg-3">
            <label htmlFor="sort" className="form-label small">
              Ordina per
            </label>
            <select
              id="sort"
              className="form-select form-select-sm"
              value={sortMode}
              onChange={(event) => onSortModeChange(event.target.value as SortMode)}
            >
              <option value="title-asc">Titolo (A-Z)</option>
              <option value="title-desc">Titolo (Z-A)</option>
              <option value="quick-play">Partite rapide</option>
              <option value="difficulty">Difficolta</option>
            </select>
          </div>
          <div className="col-12 col-lg-2 d-flex justify-content-lg-end">
            <button type="button" className="btn btn-outline-secondary btn-sm w-100" onClick={onReset}>
              Reset
            </button>
          </div>
        </div>

        <div className="form-check mt-3">
          <input
            className="form-check-input"
            type="checkbox"
            id="favoritesOnly"
            checked={onlyFavorites}
            onChange={(event) => onOnlyFavoritesChange(event.target.checked)}
          />
          <label className="form-check-label small" htmlFor="favoritesOnly">
            Mostra solo preferiti
          </label>
        </div>
      </div>
    </div>
  );
}
