"use client";

import { useMemo, useState } from "react";

type Skill = {
    id: string;
    icon: string;
    title: string;
    summary: string;
    level: number;
    tags: string[];
    details: string[];
    ctaLabel?: string;
    ctaHref?: string;
};

const skills: Skill[] = [
    {
        id: "frontend",
        icon: "bi-window-stack",
        title: "Frontend Development",
        summary: "Interfacce responsive, accessibili e orientate all'esperienza utente.",
        level: 78,
        tags: ["HTML", "CSS", "JavaScript", "React"],
        details: [
            "Creazione di pagine responsive con layout fluidi.",
            "Componentizzazione e riuso con React.",
            "Gestione tema chiaro/scuro e cura della coerenza visuale.",
        ],
    },
    {
        id: "programming",
        icon: "bi-file-earmark-code",
        title: "Programmazione",
        summary: "Basi solide su linguaggi C-like e buona capacità di problem solving.",
        level: 72,
        tags: ["C", "C++", "C#", "Python"],
        details: [
            "Buona padronanza di C e strutture dati fondamentali.",
            "Conoscenze pratiche di C# e orientamento agli oggetti.",
            "Automazioni e utility in Python per attività scolastiche.",
        ],
    },
    {
        id: "cli",
        icon: "bi-terminal",
        title: "Command Line",
        summary: "Uso quotidiano del terminale per sviluppo e organizzazione progetti.",
        level: 66,
        tags: ["Bash", "PowerShell", "Git", "CLI Tools"],
        details: [
            "Gestione file, processi e comandi di scripting.",
            "Workflow Git per versione e collaborazione.",
            "Debug rapido con strumenti da terminale.",
        ],
    },
    {
        id: "projects",
        icon: "bi-controller",
        title: "Project Building",
        summary: "Sviluppo di progetti web completi e pubblicabili con focus su qualità e usabilità.",
        level: 80,
        tags: ["Web Apps", "UI", "UX", "Deployment-ready"],
        details: [
            "Realizzazione di applicazioni web moderne con React e Next.js.",
            "Architettura di pagine portfolio con routing e componenti riutilizzabili.",
            "Ottimizzazione contenuti, performance e flusso di navigazione.",
        ],
        ctaLabel: "Scarica progetto ToDo",
        ctaHref: "/assets/projects/todoList.zip",
    },
];

export function SkillsShowcase() {
    const [selectedId, setSelectedId] = useState(skills[0].id);
    const selectedSkill = useMemo(() => skills.find((skill) => skill.id === selectedId) ?? skills[0], [selectedId]);

    return (
        <section className="skills-showcase mb-5">
            <div className="row g-4 align-items-stretch">
                <div className="col-12 col-lg-5">
                    <div className="card section-card h-100">
                        <div className="card-body">
                            <p className="section-kicker mb-2">Competenze</p>
                            <h2 className="h4 mb-3">Stack tecnico</h2>
                            <div className="d-grid gap-2">
                                {skills.map((skill) => (
                                    <button
                                        key={skill.id}
                                        type="button"
                                        className={`skill-selector ${selectedId === skill.id ? "active" : ""}`}
                                        onClick={() => setSelectedId(skill.id)}
                                    >
                                        <span className="d-flex align-items-center gap-2 flex-wrap">
                                            <i className={`bi ${skill.icon}`}></i>
                                            <span className="text-truncate">{skill.title}</span>
                                        </span>
                                        <span className="ms-auto">{skill.level}%</span>
                                    </button>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>

                <div className="col-12 col-lg-7">
                    <div className="card section-card h-100">
                        <div className="card-body d-flex flex-column">
                            <p className="section-kicker mb-2">Dettaglio</p>
                            <h3 className="h4 mb-2">{selectedSkill.title}</h3>
                            <p className="text-muted mb-4">{selectedSkill.summary}</p>

                            <div className="progress mb-3" role="progressbar" aria-label="Livello competenza" aria-valuenow={selectedSkill.level} aria-valuemin={0} aria-valuemax={100}>
                                <div className="progress-bar" style={{ width: `${selectedSkill.level}%` }} />
                            </div>

                            <div className="d-flex flex-wrap gap-2 mb-4">
                                {selectedSkill.tags.map((tag) => (
                                    <span className="badge skill-tag" key={tag}>
                                        {tag}
                                    </span>
                                ))}
                            </div>

                            <ul className="mb-0">
                                {selectedSkill.details.map((detail) => (
                                    <li key={detail} className="mb-2">
                                        {detail}
                                    </li>
                                ))}
                            </ul>

                            {selectedSkill.ctaHref && selectedSkill.ctaLabel ? (
                                <a href={selectedSkill.ctaHref} className="btn btn-danger mt-3 align-self-start">
                                    {selectedSkill.ctaLabel}
                                </a>
                            ) : null}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
