"use client";

import { SiteLayout } from "../components/site-layout";
import { Timeline } from "../components/ui/aceternity/timeline";

const profileInfo = [
    { label: "Nome", value: "Andrea Francavilla" },
    { label: "Età", value: "17 anni" },
    { label: "Residenza", value: "Carrù, Italia" },
    { label: "Ruolo", value: "Studente di Informatica" },
];

const timeline = [
    {
        title: "Percorso scolastico",
        text: "Frequento l'IIS Vallauri di Fossano, indirizzo informatico, dove sto consolidando basi di sviluppo software e progettazione web.",
    },
    {
        title: "Approccio al lavoro",
        text: "Mi concentro su progetti concreti, con attenzione al dettaglio tecnico e a una presentazione professionale dei risultati.",
    },
    {
        title: "Obiettivo",
        text: "Crescere come frontend developer, costruendo prodotti digitali usabili, performanti e pronti al rilascio online.",
    },
];

export default function MePage() {
    return (
        <SiteLayout current="me" title="Profilo Professionale" eyebrow="Me" subtitle="Chi sono, come lavoro e dove voglio arrivare.">
            <div className="row g-4 align-items-stretch">
                <div className="col-12 col-lg-4">
                    <article className="card section-card h-100">
                        <div className="card-body text-center">
                            <img 
                                src="/assets/img/Pfp.jpg" 
                                alt="Andrea Francavilla - Profilo professionale" 
                                className="profile-image rounded-4 mb-3"
                                loading="lazy"
                                width="320"
                                height="320"
                            />
                            <h2 className="h5 mb-2">Andrea Francavilla</h2>
                            <p className="text-muted mb-0">Junior Developer</p>
                        </div>
                    </article>
                </div>

                <div className="col-12 col-lg-8">
                    <article className="card section-card h-100">
                        <div className="card-body">
                            <p className="section-kicker mb-2">Dati principali</p>
                            <div className="row g-3">
                                {profileInfo.map((item) => (
                                    <div className="col-12 col-md-6" key={item.label}>
                                        <div className="quick-stat h-100">
                                            <p className="mb-1 fw-semibold">{item.label}</p>
                                            <p className="mb-0 text-muted">{item.value}</p>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </article>
                </div>
            </div>

            <div className="card section-card mt-4">
                <div className="card-body">
                    <p className="section-kicker mb-2">Visione</p>
                    <h2 className="h4 mb-3">Percorso e mindset</h2>
                    <Timeline
                        items={timeline.map((item) => ({
                            title: item.title,
                            description: item.text,
                            icon: <i className="bi bi-arrow-right-circle-fill" />,
                        }))}
                    />
                </div>
            </div>
        </SiteLayout>
    );
}
