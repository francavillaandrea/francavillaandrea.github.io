"use client";

import { useEffect, useState } from "react";

type ThemeMode = "light" | "dark" | "system";

function applyTheme(mode: ThemeMode) {
    if (typeof window === "undefined") return;
    const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
    const resolvedTheme = mode === "system" ? (prefersDark ? "dark" : "light") : mode;
    document.documentElement.setAttribute("data-theme", resolvedTheme);
    document.documentElement.setAttribute("data-bs-theme", resolvedTheme);
    document.documentElement.classList.toggle("dark", resolvedTheme === "dark");
}

export function ThemeSwitcher() {
    const [mode, setMode] = useState<ThemeMode>(() => {
        if (typeof window === "undefined") {
            return "system";
        }
        const saved = localStorage.getItem("portfolio-theme");
        return saved === "light" || saved === "dark" || saved === "system" ? saved : "system";
    });

    useEffect(() => {
        applyTheme(mode);
        localStorage.setItem("portfolio-theme", mode);
    }, [mode]);

    useEffect(() => {
        const mediaQuery = window.matchMedia("(prefers-color-scheme: dark)");
        const onChange = () => {
            if (mode === "system") {
                applyTheme("system");
            }
        };

        mediaQuery.addEventListener("change", onChange);
        return () => mediaQuery.removeEventListener("change", onChange);
    }, [mode]);

    const updateMode = (nextMode: ThemeMode) => {
        setMode(nextMode);
    };

    return (
        <div className="mode-switch d-flex gap-1" role="group" aria-label="Selettore tema">
            <button
                className={`btn btn-outline-secondary btn-sm ${mode === "light" ? "active" : ""}`}
                onClick={() => updateMode("light")}
                aria-label="Tema chiaro"
                type="button"
            >
                <i className="bi bi-sun-fill"></i>
            </button>
            <button
                className={`btn btn-outline-secondary btn-sm ${mode === "dark" ? "active" : ""}`}
                onClick={() => updateMode("dark")}
                aria-label="Tema scuro"
                type="button"
            >
                <i className="bi bi-moon-stars-fill"></i>
            </button>
            <button
                className={`btn btn-outline-secondary btn-sm ${mode === "system" ? "active" : ""}`}
                onClick={() => updateMode("system")}
                aria-label="Tema di sistema"
                type="button"
            >
                <i className="bi bi-circle-half"></i>
            </button>
        </div>
    );
}
