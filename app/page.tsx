"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { SkillsShowcase } from "./components/home/skills-showcase";
import { SiteLayout } from "./components/site-layout";
import { TextGenerateEffect } from "./components/ui/aceternity/text-generate-effect";
import { CardHoverEffect } from "./components/ui/aceternity/card-hover-effect";
import { Sparkles } from "./components/ui/aceternity/sparkles";
import { InfiniteMovingCards } from "./components/ui/aceternity/infinite-moving-cards";

const technologies = [
    { title: "React", icon: <i className="bi bi-code-square" /> },
    { title: "Next.js", icon: <i className="bi bi-lightning-charge" /> },
    { title: "TypeScript", icon: <i className="bi bi-filetype-tsx" /> },
    { title: "Tailwind CSS", icon: <i className="bi bi-palette" /> },
    { title: "JavaScript", icon: <i className="bi bi-filetype-js" /> },
    { title: "HTML/CSS", icon: <i className="bi bi-filetype-html" /> },
];

const highlights = [
    {
        icon: <i className="bi bi-layers" style={{ fontSize: "2.5rem", color: "#dc3545" }} />,
        title: "Sviluppo Web",
        description: "Progetti frontend strutturati con attenzione a usabilità, performance e design responsive.",
        href: "/me",
    },
    {
        icon: <i className="bi bi-code-slash" style={{ fontSize: "2.5rem", color: "#dc3545" }} />,
        title: "Programmazione",
        description: "Competenze in linguaggi C-like, Python e sviluppo di soluzioni software efficienti.",
        href: "/me",
    },
    {
        icon: <i className="bi bi-rocket-takeoff" style={{ fontSize: "2.5rem", color: "#dc3545" }} />,
        title: "Crescita Continua",
        description: "Percorso tecnico in costante evoluzione con studio pratico e focus su progetti reali.",
        href: "/me",
    },
];

const quickStats = [
    { value: "4+", label: "Aree tecniche principali", icon: "bi-stack" },
    { value: "100%", label: "Curiosita tecnica", icon: "bi-lightbulb-fill" },
    { value: "2026", label: "Portfolio aggiornato", icon: "bi-calendar-check" },
];

export default function Home() {
    return (
        <SiteLayout
            current="home"
            title="Portfolio Professionale"
            eyebrow="Andrea Francavilla"
            subtitle="Sviluppatore junior orientato a frontend, logica applicata e progetti web interattivi."
        >
            {/* Hero Section */}
            <section className="hero-section mb-5 position-relative overflow-hidden">
                <Sparkles
                    id="hero-sparkles"
                    className="opacity-20"
                    particleColor="#dc3545"
                    minSize={0.5}
                    maxSize={2}
                    particleDensity={120}
                />
                <div className="row g-4 align-items-center position-relative z-10">
                    <motion.div
                        className="col-12 col-lg-5 text-center"
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.6 }}
                    >
                        <div className="hero-avatar-wrapper position-relative d-inline-block">
                            <img
                                src="/assets/img/Beta.jpg"
                                alt="Andrea Francavilla - Sviluppatore Web"
                                className="hero-avatar rounded-circle"
                                loading="eager"
                                width="320"
                                height="320"
                            />
                            <div className="hero-avatar-glow"></div>
                        </div>
                    </motion.div>
                    <motion.div
                        className="col-12 col-lg-7"
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                    >
                        <p className="section-kicker mb-2">Benvenuto</p>
                        <div className="mb-3">
                            <TextGenerateEffect
                                words="Costruisco esperienze web chiare, veloci e concrete."
                                className="display-5 fw-bold"
                            />
                        </div>
                        <p className="mb-4 text-muted lead">
                            Questo portfolio raccoglie i miei progetti, il mio percorso e le aree su cui sto investendo
                            per crescere come sviluppatore. Esplora le mie competenze, scopri i miei hobby e contattami per collaborazioni.
                        </p>
                        <div className="d-flex flex-wrap gap-3 hero-cta-group">
                            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                                <Link href="/me" className="btn btn-danger btn-lg px-4">
                                    <i className="bi bi-person-circle me-2"></i>
                                    Scopri il profilo
                                </Link>
                            </motion.div>
                            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                                <Link href="/hobby" className="btn btn-outline-light btn-lg px-4">
                                    <i className="bi bi-heart me-2"></i>
                                    I miei hobby
                                </Link>
                            </motion.div>
                            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                                <Link href="/contact" className="btn btn-outline-light btn-lg px-4">
                                    <i className="bi bi-envelope me-2"></i>
                                    Contattami
                                </Link>
                            </motion.div>
                        </div>
                    </motion.div>
                </div>
            </section>

            {/* Stats Section */}
            <motion.section
                className="stats-section mb-5"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
            >
                <div className="row g-4">
                    {quickStats.map((stat, idx) => (
                        <motion.div
                            key={stat.label}
                            className="col-12 col-md-4"
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: idx * 0.1 }}
                        >
                            <div className="quick-stat-enhanced h-100">
                                <div className="quick-stat-icon mb-3">
                                    <i className={`bi ${stat.icon}`}></i>
                                </div>
                                <p className="quick-stat-number mb-2">{stat.value}</p>
                                <p className="text-muted mb-0 small">{stat.label}</p>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </motion.section>

            {/* Technologies Section */}
            <motion.section
                className="technologies-section mb-5"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
            >
                <div className="text-center mb-4">
                    <p className="section-kicker mb-2">Tecnologie</p>
                    <h2 className="h3 mb-3">Stack tecnologico</h2>
                </div>
                <InfiniteMovingCards
                    items={technologies}
                    direction="left"
                    speed="normal"
                    pauseOnHover={true}
                    className="mb-4"
                />
            </motion.section>

            {/* Skills Showcase */}
            <motion.section
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
            >
                <SkillsShowcase />
            </motion.section>

            {/* Highlights Section */}
            <motion.section
                className="mb-5"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
            >
                <div className="text-center mb-4">
                    <p className="section-kicker mb-2">Focus</p>
                    <h2 className="h3 mb-3">Le mie aree di competenza</h2>
                </div>
                <CardHoverEffect items={highlights} className="competence-cards grid-cols-1 md:grid-cols-2 lg:grid-cols-3" />
            </motion.section>
        </SiteLayout>
    );
}
