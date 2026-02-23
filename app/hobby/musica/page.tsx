import { SiteLayout } from "../../components/site-layout";

const artists = [
    { src: "/assets/img/Carti.jpg", alt: "Playboi Carti" },
    { src: "/assets/img/sfera.jpg", alt: "Sfera Ebbasta" },
    { src: "/assets/img/caparezza.jpg", alt: "Caparezza" },
    { src: "/assets/img/travis.jpg", alt: "Travis Scott" },
    { src: "/assets/img/kid yugi.jpg", alt: "Kid Yugi" },
    { src: "/assets/img/fabri fibra.jpg", alt: "Fabri Fibra" },
];

const genres = ["Trap", "Hip-Hop", "Rap", "Drill"];

export default function MusicaPage() {
    return (
        <SiteLayout current="hobby" currentHobby="musica" title="Musica: ritmo e identità" eyebrow="Hobby" subtitle="Una passione quotidiana che impatta energia, focus e creatività.">
            <div className="card section-card mb-4">
                <div className="card-body">
                    <div className="row g-3 mb-4 music-gallery">
                        {artists.map((artist) => (
                            <div className="col-6 col-md-4" key={artist.src}>
                                <img src={artist.src} alt={artist.alt} className="music-uniform-photo" />
                            </div>
                        ))}
                    </div>

                    <h2 className="h4 mb-3">Il mio rapporto con la musica</h2>
                    <p className="mb-3 text-muted">
                        La musica è parte della mia routine: mi accompagna nello studio, nella guida, nell'allenamento e nei momenti di
                        relax. Influenza in modo concreto il mio stato mentale e la mia produttività.
                    </p>
                    <p className="mb-0 text-muted">
                        Seguo sia la scena internazionale sia quella italiana, cercando sonorità e testi che trasmettano energia,
                        autenticità e visione.
                    </p>
                </div>
            </div>

            <div className="card section-card mb-4">
                <div className="card-body">
                    <h2 className="h4 mb-3">Generi preferiti</h2>
                    <div className="d-flex flex-wrap gap-2">
                        {genres.map((genre) => (
                            <span key={genre} className="badge text-bg-danger">
                                {genre}
                            </span>
                        ))}
                    </div>
                </div>
            </div>

            <div className="card section-card">
                <div className="card-body">
                    <h2 className="h4 mb-3">Playlist personale</h2>
                    <p className="text-muted mb-3">
                        Mantengo playlist diverse per studio, allenamento e momenti di focus intenso.
                    </p>
                    <a
                        href="https://open.spotify.com/user/31hvixinzjvp76gbi7kvise5vdoa?si=f837be01cd124b42"
                        target="_blank"
                        rel="noreferrer"
                        className="btn btn-success d-inline-flex align-items-center gap-2"
                    >
                        <i className="bi bi-spotify"></i>
                        Seguimi su Spotify
                    </a>
                </div>
            </div>
        </SiteLayout>
    );
}
