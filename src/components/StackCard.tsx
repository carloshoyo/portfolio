import { useState } from "react";
import type { Stack } from "../app/Proyectos";

// Convierte un hex (#RGB o #RRGGBB) en [r, g, b], expandiendo el formato corto.
function toRgb(color: string): [number, number, number] {
    let hex = color.replace('#', '');
    if (hex.length === 3) hex = hex.split('').map((c) => c + c).join('');
    return [
        parseInt(hex.slice(0, 2), 16),
        parseInt(hex.slice(2, 4), 16),
        parseInt(hex.slice(4, 6), 16),
    ];
}

// Añade un canal alfa (0..1) a un color hex: #RGB o #RRGGBB -> #RRGGBBAA.
function conAlpha(color: string, alpha: number) {
    const [r, g, b] = toRgb(color);
    const a = Math.round(alpha * 255);
    return `#${[r, g, b, a].map((v) => v.toString(16).padStart(2, '0')).join('')}`;
}

// Mezcla el color hacia el blanco por `t` (0..1). En oscuro sube el brillo para
// que colores oscuros (p. ej. el negro de Expo) no se pierdan sobre el fondo.
function aclarar(color: string, t: number) {
    const [r, g, b] = toRgb(color);
    const mix = (v: number) => Math.round(v + (255 - v) * t);
    return `#${[mix(r), mix(g), mix(b)].map((v) => v.toString(16).padStart(2, '0')).join('')}`;
}

export function StackCard({tech, theme = 'light'}: {tech: Stack, theme?: string}) {
    // Hover con colores dinámicos: no puede ser `hover:` de Tailwind, se controla
    // con estado + style inline.
    const [hover, setHover] = useState(false);
    const oscuro = theme === 'dark';

    // En oscuro aclaramos los colores y subimos la opacidad del fondo para que
    // los chips resalten sobre #161616.
    const ajustar = (c: string) => (oscuro ? aclarar(c, 0.4) : c);

    // reposo: gradiente "to right" al 20% (25% en oscuro)
    // hover:  gradiente "to bottom right" repitiendo el primer color, al 40% (50% en oscuro)
    const base = tech.coloresBackground.map(ajustar);
    const alpha = hover ? (oscuro ? 0.5 : 0.4) : (oscuro ? 0.25 : 0.2);
    const paradas = (hover ? [...base, base[0]] : base).map((c) => conAlpha(c, alpha));
    const direccion = hover ? 'to bottom right' : 'to right';
    const background = `linear-gradient(${direccion}, ${paradas.join(', ')})`;

    const colorTexto = ajustar(tech.coloresTexto[0]);

    return (
        <div
            onMouseEnter={() => setHover(true)}
            onMouseLeave={() => setHover(false)}
            className="flex flex-row p-2 w-full rounded-full items-center justify-center gap-3 transition duration-200"
            style={{ background }}
        >
            <img src={tech.icono} alt={tech.nombre} className="w-6 h-6" />
            <p className="text-sm md:text-md lg:text-lg" style={{ color: colorTexto }}>{tech.nombre}</p>
        </div>
    )
}
