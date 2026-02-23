import { SiteLayout } from "../../components/site-layout";

const specs = [
    { icon: "bi-gear", label: "Motore", value: "Monocilindrico 2 tempi" },
    { icon: "bi-speedometer2", label: "Cilindrata", value: "50 cc" },
    { icon: "bi-droplet-half", label: "Raffreddamento", value: "A liquido" },
    { icon: "bi-lightning-charge", label: "Potenza", value: "3 CV" },
    { icon: "bi-box", label: "Peso", value: "85 kg a secco" },
];

export default function MotoPage() {
    return (
        <SiteLayout current="hobby" currentHobby="moto" title="Moto: tecnica e passione" eyebrow="Hobby" subtitle="Dal primo enduro alla manutenzione pratica: il lato piu tecnico delle mie passioni.">
            <div className="moto-page">
                <div className="card section-card mb-4 mx-auto moto-hero-card">
                    <img src="/assets/img/Beta2.jpg" className="moto-hero-photo" alt="Beta RR 50" />
                </div>

                <div className="card section-card mb-4">
                    <div className="card-body">
                        <h2 className="h4 mb-3">Beta RR 50</h2>
                        <p className="mb-0 text-muted">
                            La Beta RR 50 e stata la mia prima moto: leggera, affidabile e perfetta per entrare nel mondo enduro.
                            Oltre alla guida, mi ha portato ad approfondire meccanica, manutenzione e cura del mezzo.
                        </p>
                    </div>
                </div>

                <div className="row g-3 mb-4">
                    <div className="col-12 col-md-4">
                        <img src="/assets/img/Beta3.jpg" className="moto-uniform-photo" alt="Beta vista laterale" />
                    </div>
                    <div className="col-12 col-md-4">
                        <img src="/assets/img/Beta4.jpg" className="moto-uniform-photo" alt="Beta dettaglio" />
                    </div>
                    <div className="col-12 col-md-4">
                        <img src="/assets/img/Beta5.jpg" className="moto-uniform-photo" alt="Beta posteriore" />
                    </div>
                </div>

                <div className="card section-card mb-4">
                    <div className="card-body">
                        <h2 className="h4 mb-3">Scheda tecnica essenziale</h2>
                        <div className="row g-3">
                            {specs.map((spec) => (
                                <div className="col-12 col-md-6" key={spec.label}>
                                    <div className="quick-stat h-100">
                                        <p className="mb-1 fw-semibold">
                                            <i className={`bi ${spec.icon} me-2 text-danger`}></i>
                                            {spec.label}
                                        </p>
                                        <p className="mb-0 text-muted">{spec.value}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>

                <div className="card section-card mb-4">
                    <div className="card-body">
                        <h2 className="h4 mb-3">Esperienza e crescita</h2>
                        <p className="text-muted mb-3">
                            Dalla prima guida a 15 anni, la moto e diventata uno spazio di apprendimento pratico: attenzione ai dettagli,
                            gestione degli imprevisti e capacita di migliorare costantemente.
                        </p>
                        <p className="text-muted mb-0">
                            Anche la componente familiare e importante: la passione condivisa con mio padre mi ha trasmesso cultura tecnica
                            e rispetto per ogni aspetto della guida.
                        </p>
                    </div>
                </div>

                <div className="card section-card">
                    <div className="card-body">
                        <h2 className="h4 mb-3">Ispirazioni di famiglia</h2>
                        <div className="row g-4">
                            <div className="col-12 col-lg-6">
                                <img src="/assets/img/vtr1000.jpg" className="moto-uniform-photo" alt="Honda VTR 1000" />
                                <h3 className="h6 mt-2 mb-1">Honda VTR 1000</h3>
                                <p className="mb-0 text-muted">Una sportiva iconica, riferimento tecnico e stilistico nella mia crescita.</p>
                            </div>
                            <div className="col-12 col-lg-6">
                                <img src="/assets/img/Freccia.jpg" className="moto-uniform-photo" alt="Cagiva Freccia C12R" />
                                <h3 className="h6 mt-2 mb-1">Cagiva Freccia C12R</h3>
                                <p className="mb-0 text-muted">Moto storica di famiglia che rappresenta l&apos;origine di questa passione.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </SiteLayout>
    );
}
