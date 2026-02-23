"use client";

import Link from "next/link";
import { Game } from "@/app/data/games";

type GamesGridProps = {
  games: Game[];
  favorites: string[];
  onToggleFavorite: (slug: string) => void;
  onReset: () => void;
};

function difficultyBadgeClass(difficulty: Game["difficulty"]) {
  if (difficulty === "Facile") return "text-bg-success";
  if (difficulty === "Media") return "text-bg-warning";
  return "text-bg-danger";
}

export function GamesGrid({ games, favorites, onToggleFavorite, onReset }: GamesGridProps) {
  if (games.length === 0) {
    return (
      <div className="card bg-body-tertiary border-danger-subtle">
        <div className="card-body text-center py-5">
          <i className="bi bi-emoji-frown display-5 text-danger"></i>
          <h2 className="h4 mt-3">Nessun gioco trovato</h2>
          <p className="text-muted mb-4">Prova a cambiare ricerca, categoria o filtro preferiti.</p>
          <button type="button" className="btn btn-danger" onClick={onReset}>
            Ripristina filtri
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="row g-3 g-md-4">
      {games.map((game) => {
        const isFavorite = favorites.includes(game.slug);
        return (
          <div className="col-12 col-sm-6 col-xl-4" key={game.slug}>
            <div className="card bg-body-tertiary h-100 game-card">
              <div className="card-body d-flex flex-column p-3 p-md-4">
                <div className="d-flex justify-content-between align-items-start mb-2 mb-md-3">
                  <span className={`badge ${difficultyBadgeClass(game.difficulty)}`}>{game.difficulty}</span>
                  <button
                    type="button"
                    className={`btn btn-sm ${isFavorite ? "btn-danger" : "btn-outline-danger"}`}
                    aria-label={`${isFavorite ? "Rimuovi" : "Aggiungi"} ${game.title} ai preferiti`}
                    onClick={() => onToggleFavorite(game.slug)}
                  >
                    <i className="bi bi-heart-fill"></i>
                  </button>
                </div>

                <div className="text-center mb-2 mb-md-3">
                  <i className={`bi ${game.icon} display-6 display-md-5 text-danger`}></i>
                </div>

                <h2 className="h5 h6-md text-center mb-2">{game.title}</h2>
                <p className="text-center text-muted small mb-2 mb-md-3">
                  {game.category} • ~{game.estimatedMinutes} min
                </p>
                <p className="flex-grow-1 small text-muted mb-2 mb-md-3">{game.description}</p>

                <div className="d-flex flex-column flex-sm-row gap-2 mt-auto">
                  <a href={game.path} target="_blank" rel="noreferrer" className="btn btn-outline-danger btn-sm flex-fill">
                    Originale
                  </a>
                  <Link href={`/games/${game.slug}`} className="btn btn-danger btn-sm flex-fill">
                    Gioca
                  </Link>
                </div>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}
