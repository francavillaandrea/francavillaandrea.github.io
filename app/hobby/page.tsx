"use client";

import { SiteLayout } from "../components/site-layout";
import { CardHoverEffect } from "../components/ui/aceternity/card-hover-effect";

const hobbies = [
    {
        href: "/hobby/moto",
        title: "Moto",
        description: "Tecnica, adrenalina e manutenzione: una passione che unisce pratica e precisione.",
        icon: <i className="bi bi-bicycle" style={{ fontSize: "2.5rem", color: "#dc3545" }} />,
    },
    {
        href: "/hobby/musica",
        title: "Musica",
        description: "Colonna sonora quotidiana che influenza energia, concentrazione e creatività.",
        icon: <i className="bi bi-music-note-beamed" style={{ fontSize: "2.5rem", color: "#dc3545" }} />,
    },
    {
        href: "/hobby/sport",
        title: "Sport",
        description: "Disciplina personale, equilibrio mentale e miglioramento costante.",
        icon: <i className="bi bi-trophy" style={{ fontSize: "2.5rem", color: "#dc3545" }} />,
    },
];

export default function HobbyPage() {
    return (
        <SiteLayout current="hobby" title="Lifestyle & Passioni" eyebrow="Hobby" subtitle="Tre aree che completano il mio percorso personale e professionale.">
            <CardHoverEffect items={hobbies} className="hobby-cards grid-cols-1 md:grid-cols-2 lg:grid-cols-3" />
        </SiteLayout>
    );
}
