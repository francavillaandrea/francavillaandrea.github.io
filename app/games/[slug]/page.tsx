import Link from "next/link";
import { notFound } from "next/navigation";
import { SiteLayout } from "../../components/site-layout";
import { games } from "../../data/games";

type Props = {
  params: Promise<{ slug: string }>;
};

export const dynamicParams = false;

export function generateStaticParams() {
  return games.map((game) => ({ slug: game.slug }));
}

export default async function GamePlayPage({ params }: Props) {
  const { slug } = await params;
  const gameIndex = games.findIndex((item) => item.slug === slug);
  const game = games[gameIndex];

  if (!game) {
    notFound();
  }

  const prevGame = games[(gameIndex - 1 + games.length) % games.length];
  const nextGame = games[(gameIndex + 1) % games.length];

  return (
    <SiteLayout current="games" eyebrow="Game Player" title={game.title} subtitle={game.description}>
      <div className="card bg-body-tertiary">
        <div className="card-body">
          <div className="d-flex justify-content-between align-items-center mb-3 flex-wrap gap-2 game-meta-row">
            <p className="mb-0 game-meta-text">
              Categoria: <strong>{game.category}</strong> | Difficolta: <strong>{game.difficulty}</strong> | Tempo: <strong>~{game.estimatedMinutes} min</strong>
            </p>
            <div className="d-flex gap-2 game-meta-actions">
              <Link href="/games" className="btn btn-outline-secondary btn-sm">
                Torna ai giochi
              </Link>
              <a href={game.path} target="_blank" rel="noreferrer" className="btn btn-danger btn-sm">
                Apri originale
              </a>
            </div>
          </div>

          <iframe
            src={game.path}
            title={`Gioco ${game.title}`}
            className="game-frame"
            loading="lazy"
            allowFullScreen
          />

          <div className="d-flex justify-content-between flex-wrap gap-2 mt-3 game-nav-row">
            <Link href={`/games/${prevGame.slug}`} className="btn btn-outline-danger btn-sm">
              <i className="bi bi-arrow-left me-1"></i>
              {prevGame.title}
            </Link>
            <Link href={`/games/${nextGame.slug}`} className="btn btn-outline-danger btn-sm">
              {nextGame.title}
              <i className="bi bi-arrow-right ms-1"></i>
            </Link>
          </div>
        </div>
      </div>
    </SiteLayout>
  );
}
