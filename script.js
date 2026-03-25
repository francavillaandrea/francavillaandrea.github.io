document.addEventListener('DOMContentLoaded', () => {

    function setTheme(mode = 'auto') {
        const userMode = localStorage.getItem('bs-theme');
        const sysLight = window.matchMedia('(prefers-color-scheme: light)').matches;

        let theme;

        if (mode == 'light') theme = 'light';
        else if (mode == 'dark') theme = 'dark';
        else {
            // system
            theme = sysLight ? 'light' : 'dark';
        }

        // Salvataggio
        if (mode == 'system') {
            localStorage.removeItem('bs-theme');
        } else {
            localStorage.setItem('bs-theme', mode);
        }

        // Overlay animazione
        const overlay = document.createElement('div');
        overlay.style.position = 'fixed';
        overlay.style.inset = '0';
        overlay.style.backgroundColor = theme == 'dark' ? '#0a0a0a' : '#FFFEEF';
        overlay.style.opacity = '0';
        overlay.style.zIndex = '9999';
        overlay.style.pointerEvents = 'none';
        document.body.appendChild(overlay);

        let opacity = 0;

        const fadeIn = setInterval(() => {
            opacity += 0.1;
            overlay.style.opacity = opacity;

            if (opacity >= 1) {
                clearInterval(fadeIn);

                // Applica tema
                document.documentElement.setAttribute('data-bs-theme', theme);

                if (theme == 'dark') {
                    document.documentElement.style.setProperty('--bs-body-bg', '#0a0a0a');
                    document.documentElement.style.setProperty('--bs-body-color', '#ffffff');
                } else {
                    document.documentElement.style.setProperty('--bs-body-bg', '#FFFEEF');
                    document.documentElement.style.setProperty('--bs-body-color', '#000000');
                }

                // Fade out
                setTimeout(() => {
                    const fadeOut = setInterval(() => {
                        opacity -= 0.1;
                        overlay.style.opacity = opacity;

                        if (opacity <= 0) {
                            clearInterval(fadeOut);
                            overlay.remove();
                        }
                    }, 20);
                }, 100);
            }
        }, 20);

        // Stato attivo bottoni
        document.querySelectorAll('.mode-switch .btn').forEach(btn => btn.classList.remove('active'));

        if (mode == 'light') document.getElementById('btnLight').classList.add('active');
        if (mode == 'dark') document.getElementById('btnDark').classList.add('active');
        if (mode == 'system') document.getElementById('btnSystem').classList.add('active');
    }

    // Click bottoni
    document.getElementById('btnLight').addEventListener('click', () => setTheme('light'));
    document.getElementById('btnDark').addEventListener('click', () => setTheme('dark'));
    document.getElementById('btnSystem').addEventListener('click', () => setTheme('system'));

    // Init tema
    const saved = localStorage.getItem('bs-theme');
    setTheme(saved ? saved : 'system');

    // Cambio automatico sistema
    window.matchMedia('(prefers-color-scheme: light)')
        .addEventListener('change', () => {
            if (!localStorage.getItem('bs-theme')) {
                setTheme('system');
            }
        });

    // Smooth scroll + progress bar
    document.documentElement.style.scrollBehavior = 'smooth';

    const progressBar = document.querySelector('.scroll-progress');

    window.addEventListener('scroll', () => {
        const scrollTop = window.scrollY;
        const scrollHeight = document.documentElement.scrollHeight - window.innerHeight;
        const scrolled = (scrollTop / scrollHeight) * 100;

        progressBar.style.width = scrolled + '%';
        progressBar.style.display = scrolled > 0 ? 'block' : 'none';
    });

    // Scroll top navbar
    document.querySelector('.navbar-brand').addEventListener('click', (e) => {
        e.preventDefault();
        window.scrollTo({ top: 0, behavior: 'smooth' });
    });

});
