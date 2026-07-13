export type Theme = 'light' | 'dark';

// Debe coincidir con el breakpoint `md` de Tailwind (768px) y con el que
// decide si el toggle de la Navbar es visible.
export const MOBILE_QUERY = '(max-width: 767px)';
export const DARK_QUERY = '(prefers-color-scheme: dark)';

function storedTheme(): Theme | null {
    try {
        const value = localStorage.getItem('theme');
        return value === 'dark' || value === 'light' ? value : null;
    } catch {
        // localStorage puede lanzar en modo incógnito.
        return null;
    }
}

function systemTheme(): Theme {
    return window.matchMedia(DARK_QUERY).matches ? 'dark' : 'light';
}

/**
 * En móvil el tema lo dicta el sistema y la elección guardada se ignora.
 * En escritorio manda la elección explícita del usuario, con el sistema
 * como valor por defecto.
 *
 * OJO: esta regla está duplicada en el script inline de index.html, que se
 * ejecuta antes del primer pintado para evitar el flash. Si la cambias aquí,
 * cámbiala también allí.
 */
export function resolveTheme(): Theme {
    if (window.matchMedia(MOBILE_QUERY).matches) {
        return systemTheme();
    }
    return storedTheme() ?? systemTheme();
}

export function persistTheme(theme: Theme) {
    try {
        localStorage.setItem('theme', theme);
    } catch {
        // Sin persistencia, el tema simplemente vuelve al del sistema al recargar.
    }
}
