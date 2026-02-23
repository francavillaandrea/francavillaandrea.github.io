"use client";

import Link from "next/link";
import dynamic from "next/dynamic";
import { ReactNode, useEffect, useState } from "react";
import { ScrollProgress } from "./scroll-progress";

const ThemeSwitcher = dynamic(
    () => import("./theme-switcher").then((mod) => mod.ThemeSwitcher),
    { ssr: false }
);

type NavKey = "home" | "me" | "hobby" | "games" | "contact";
type HobbyKey = "moto" | "musica" | "sport";

type SiteLayoutProps = {
    current: NavKey;
    currentHobby?: HobbyKey;
    title: string;
    subtitle?: string;
    eyebrow?: string;
    children: ReactNode;
};

export function SiteLayout({ current, currentHobby, title, subtitle, eyebrow, children }: SiteLayoutProps) {
    const hobbyActive = current === "hobby" || Boolean(currentHobby);
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [isScrolled, setIsScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 20);
        };
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <>
            <header className={`main-header sticky-top ${isScrolled ? "scrolled" : ""}`}>
                <div className="container">
                    <nav className="header-inline">
                        <Link className="brand text-decoration-none" href="/" onClick={() => setIsMenuOpen(false)}>
                            <span className="brand-dot" />
                            <span className="brand-first">Andrea</span>
                            <span className="brand-last">Francavilla</span>
                        </Link>

                        <div className="header-nav d-none d-lg-flex align-items-center gap-1">
                            <Link className={`nav-pill ${current === "home" ? "active" : ""}`} href="/">
                                Home
                            </Link>
                            <Link className={`nav-pill ${current === "me" ? "active" : ""}`} href="/me">
                                Profilo
                            </Link>
                            <div className="nav-dropdown-wrapper position-relative">
                                <Link className={`nav-pill ${hobbyActive ? "active" : ""}`} href="/hobby">
                                    Hobby
                                    <i className="bi bi-chevron-down nav-pill-chevron" aria-hidden="true"></i>
                                </Link>
                                <div className="nav-dropdown-menu">
                                    <p className="nav-dropdown-title mb-1">Sezioni Hobby</p>
                                    <Link className={`nav-subpill ${currentHobby === "moto" ? "active" : ""}`} href="/hobby/moto">
                                        <i className="bi bi-bicycle nav-subpill-icon" aria-hidden="true"></i>
                                        Moto
                                    </Link>
                                    <Link className={`nav-subpill ${currentHobby === "musica" ? "active" : ""}`} href="/hobby/musica">
                                        <i className="bi bi-music-note-beamed nav-subpill-icon" aria-hidden="true"></i>
                                        Musica
                                    </Link>
                                    <Link className={`nav-subpill ${currentHobby === "sport" ? "active" : ""}`} href="/hobby/sport">
                                        <i className="bi bi-trophy nav-subpill-icon" aria-hidden="true"></i>
                                        Sport
                                    </Link>
                                </div>
                            </div>
                            <Link className={`nav-pill ${current === "contact" ? "active" : ""}`} href="/contact">
                                Contatti
                            </Link>
                        </div>

                        <div className="header-actions d-flex align-items-center gap-2">
                            <div className="d-none d-sm-block">
                                <ThemeSwitcher />
                            </div>
                            <button
                                type="button"
                                className="btn btn-sm btn-outline-secondary d-lg-none mobile-menu-toggle"
                                aria-label={isMenuOpen ? "Chiudi menu" : "Apri menu"}
                                aria-expanded={isMenuOpen}
                                onClick={() => setIsMenuOpen((prev) => !prev)}
                            >
                                <i className={`bi ${isMenuOpen ? "bi-x" : "bi-list"}`}></i>
                            </button>
                        </div>
                    </nav>

                    {/* Mobile Menu */}
                    <nav className={`nav-links-wrap d-lg-none ${isMenuOpen ? "open" : ""}`} aria-label="Navigazione principale">
                        <div className="mobile-theme-switch d-sm-none">
                            <ThemeSwitcher />
                        </div>
                        <ul className="nav-links-list">
                            <li>
                                <Link className={`nav-pill ${current === "home" ? "active" : ""}`} href="/" onClick={() => setIsMenuOpen(false)}>
                                    Home
                                </Link>
                            </li>
                            <li>
                                <Link className={`nav-pill ${current === "me" ? "active" : ""}`} href="/me" onClick={() => setIsMenuOpen(false)}>
                                    Profilo
                                </Link>
                            </li>
                            <li>
                                <Link className={`nav-pill ${hobbyActive ? "active" : ""}`} href="/hobby" onClick={() => setIsMenuOpen(false)}>
                                    Hobby
                                </Link>
                            </li>
                            <li>
                                <Link className={`nav-pill ${current === "contact" ? "active" : ""}`} href="/contact" onClick={() => setIsMenuOpen(false)}>
                                    Contatti
                                </Link>
                            </li>
                        </ul>

                        <ul className="nav-links-list nav-sublist">
                            <li>
                                <Link className={`nav-subpill ${currentHobby === "moto" ? "active" : ""}`} href="/hobby/moto" onClick={() => setIsMenuOpen(false)}>
                                    <i className="bi bi-bicycle nav-subpill-icon" aria-hidden="true"></i>
                                    Moto
                                </Link>
                            </li>
                            <li>
                                <Link className={`nav-subpill ${currentHobby === "musica" ? "active" : ""}`} href="/hobby/musica" onClick={() => setIsMenuOpen(false)}>
                                    <i className="bi bi-music-note-beamed nav-subpill-icon" aria-hidden="true"></i>
                                    Musica
                                </Link>
                            </li>
                            <li>
                                <Link className={`nav-subpill ${currentHobby === "sport" ? "active" : ""}`} href="/hobby/sport" onClick={() => setIsMenuOpen(false)}>
                                    <i className="bi bi-trophy nav-subpill-icon" aria-hidden="true"></i>
                                    Sport
                                </Link>
                            </li>
                        </ul>
                    </nav>
                </div>
            </header>

            <ScrollProgress />

            <main className="flex-grow-1">
                <div className="container py-5">
                    <div className="row justify-content-center">
                        <div className="col-12 col-xl-10">
                            <section className="page-heading text-center mb-5">
                                {eyebrow ? <p className="text-uppercase small page-eyebrow mb-2">{eyebrow}</p> : null}
                                <h1 className="mb-3">{title}</h1>
                                {subtitle ? <p className="lead mb-0 page-subtitle">{subtitle}</p> : null}
                            </section>
                            {children}
                        </div>
                    </div>
                </div>
            </main>

            <footer className="site-footer" role="contentinfo">
                <div className="container">
                    <div className="row g-4">
                        <div className="col-12 col-md-6 col-lg-4">
                            <h3 className="h6 mb-3">Andrea Francavilla</h3>
                            <p className="small text-muted mb-3">
                                Sviluppatore junior orientato a frontend, logica applicata e progetti web interattivi.
                                Student di Informatica presso IIS Vallauri di Fossano.
                            </p>
                            <div className="d-flex align-items-center gap-3">
                                <a
                                    href="https://www.instagram.com/andrea.francavilla/"
                                    className="footer-link"
                                    target="_blank"
                                    rel="noreferrer"
                                    aria-label="Visita il profilo Instagram di Andrea Francavilla"
                                >
                                    <i className="bi bi-instagram fs-5" aria-hidden="true"></i>
                                </a>
                                <a
                                    href="https://github.com/francavillaandrea"
                                    className="footer-link"
                                    target="_blank"
                                    rel="noreferrer"
                                    aria-label="Visita il profilo GitHub di Andrea Francavilla"
                                >
                                    <i className="bi bi-github fs-5" aria-hidden="true"></i>
                                </a>
                                <a
                                    href="mailto:a.francavilla.3537@vallauri.edu"
                                    className="footer-link"
                                    aria-label="Invia una email a Andrea Francavilla"
                                >
                                    <i className="bi bi-envelope-fill fs-5" aria-hidden="true"></i>
                                </a>
                            </div>
                        </div>

                        <div className="col-12 col-md-6 col-lg-4">
                            <h3 className="h6 mb-3">Navigazione</h3>
                            <ul className="list-unstyled small mb-0">
                                <li className="mb-2">
                                    <Link href="/" className="text-muted text-decoration-none footer-nav-link">
                                        Home
                                    </Link>
                                </li>
                                <li className="mb-2">
                                    <Link href="/me" className="text-muted text-decoration-none footer-nav-link">
                                        Profilo
                                    </Link>
                                </li>
                                <li className="mb-2">
                                    <Link href="/hobby" className="text-muted text-decoration-none footer-nav-link">
                                        Hobby
                                    </Link>
                                </li>
                                <li className="mb-2">
                                    <Link href="/contact" className="text-muted text-decoration-none footer-nav-link">
                                        Contatti
                                    </Link>
                                </li>
                            </ul>
                        </div>

                        <div className="col-12 col-md-6 col-lg-4">
                            <h3 className="h6 mb-3">Competenze</h3>
                            <div className="d-flex flex-wrap gap-2 mb-3">
                                <span className="badge text-bg-secondary small">React</span>
                                <span className="badge text-bg-secondary small">Next.js</span>
                                <span className="badge text-bg-secondary small">TypeScript</span>
                                <span className="badge text-bg-secondary small">Tailwind CSS</span>
                                <span className="badge text-bg-secondary small">JavaScript</span>
                                <span className="badge text-bg-secondary small">HTML/CSS</span>
                            </div>
                            <p className="small text-muted mb-0">
                                In costante apprendimento e crescita professionale.
                            </p>
                        </div>
                    </div>

                    <div className="footer-divider my-4"></div>

                    <div className="footer-shell">
                        <p className="mb-0 small text-muted">
                            © {new Date().getFullYear()} Andrea Francavilla. Tutti i diritti riservati.
                        </p>
                        <p className="mb-0 small text-muted">
                            Realizzato con <i className="bi bi-heart-fill text-danger"></i> usando Next.js e React
                        </p>
                    </div>
                </div>
            </footer>
        </>
    );
}
