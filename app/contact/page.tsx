"use client";

import { ContactForm } from "../components/contact-form";
import { SiteLayout } from "../components/site-layout";
import { motion } from "framer-motion";

const contacts = [
    {
        icon: "bi-envelope-fill",
        label: "Email",
        value: "a.francavilla.3537@vallauri.edu",
        href: "mailto:a.francavilla.3537@vallauri.edu",
    },
    {
        icon: "bi-instagram",
        label: "Instagram",
        value: "@andrea.francavilla",
        href: "https://www.instagram.com/andrea.francavilla/",
    },
    {
        icon: "bi-github",
        label: "GitHub",
        value: "francavillaandrea",
        href: "https://github.com/francavillaandrea",
    },
];

export default function ContactPage() {
    return (
        <SiteLayout current="contact" title="Contattami" eyebrow="Contact" subtitle="Parliamo di collaborazioni, idee o opportunità.">
            <div className="row g-4">
                <motion.div
                    className="col-12 col-lg-5"
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5 }}
                >
                    <article className="card section-card h-100">
                        <div className="card-body">
                            <p className="section-kicker mb-2">Canali</p>
                            <h2 className="h4 mb-3">Informazioni di contatto</h2>

                            <div className="d-grid gap-3">
                                {contacts.map((item, idx) => (
                                    <motion.a
                                        key={item.label}
                                        href={item.href}
                                        className="contact-link"
                                        target={item.href.startsWith("http") ? "_blank" : undefined}
                                        rel={item.href.startsWith("http") ? "noreferrer" : undefined}
                                        initial={{ opacity: 0, y: 20 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        transition={{ delay: idx * 0.1 }}
                                        whileHover={{ scale: 1.02 }}
                                    >
                                        <i className={`bi ${item.icon}`}></i>
                                        <div>
                                            <p className="mb-0 fw-semibold">{item.label}</p>
                                            <p className="mb-0 small text-muted">{item.value}</p>
                                        </div>
                                    </motion.a>
                                ))}
                            </div>
                        </div>
                    </article>
                </motion.div>

                <motion.div
                    className="col-12 col-lg-7"
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5, delay: 0.2 }}
                >
                    <article className="card section-card h-100">
                        <div className="card-body">
                            <p className="section-kicker mb-2">Messaggio</p>
                            <h2 className="h4 mb-3">Scrivimi direttamente</h2>
                            <ContactForm />
                        </div>
                    </article>
                </motion.div>
            </div>
        </SiteLayout>
    );
}
