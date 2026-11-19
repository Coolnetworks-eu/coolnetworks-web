const cta = (label = 'Solicitar diagnóstico de IA') => ({
    title: label,
    text: 'Analizamos tus procesos y te decimos dónde la IA aporta valor real y dónde no merece la pena.',
    primary: { label, to: '/diagnosticos/ia-360' },
    secondary: { label: 'Hablar con especialista', to: '/empresa/contacto' },
});

const method = {
    type: 'steps',
    title: 'Cómo trabajamos',
    items: [
        { title: 'Analizamos', text: 'Procesos, datos disponibles, herramientas y restricciones de seguridad.' },
        { title: 'Priorizamos', text: 'Casos de uso por impacto, viabilidad y riesgo.' },
        { title: 'Probamos', text: 'Piloto acotado con criterios de éxito medibles.' },
        { title: 'Implantamos', text: 'Puesta en producción con gobierno, permisos y trazabilidad.' },
        { title: 'Mejoramos', text: 'Medición, ajuste y formación del equipo.' },
    ],
};

const related = [
    { label: 'Inteligencia Artificial', to: '/inteligencia-artificial' },
    { label: 'Gobierno y seguridad de IA', to: '/ia/gobierno' },
];

export const aiExtraPages = {
    '/ia/smart-helpdesk': {
        title: 'Smart Helpdesk | Freshdesk + IA + base de conocimiento',
        description: 'Smart Helpdesk. Automatización de tickets con IA, clasificación automática, priorización, respuestas sugeridas y asistencia a técnicos.',
        kicker: 'Inteligencia Artificial',
        h1: 'Coolnetworks Smart Helpdesk',
        lead: 'El soporte técnico genera datos suficientes para automatizar buena parte de su clasificación y para responder mejor y antes.',
        sections: [
            {
                type: 'text',
                title: '¿Qué es y qué problema resuelve?',
                body: [
                    'En un servicio de soporte, buena parte del tiempo se consume clasificando, priorizando y buscando información que ya existe en tickets anteriores.',
                    'Aplicamos IA sobre la herramienta de ticketing para reducir ese tiempo y mejorar la consistencia de las respuestas, manteniendo la decisión final en el técnico.',
                ],
            },
            {
                type: 'grid',
                title: 'Qué incluye',
                items: [
                    { title: 'Clasificación de tickets', text: 'Categoría, servicio afectado y equipo asignado.' },
                    { title: 'Priorización', text: 'Urgencia e impacto según reglas de negocio y acuerdos de servicio.' },
                    { title: 'Respuestas sugeridas', text: 'Borradores basados en histórico y procedimientos aprobados.' },
                    { title: 'Base de conocimiento', text: 'Consulta en lenguaje natural sobre documentación interna autorizada.' },
                    { title: 'Detección de recurrencias', text: 'Identificación de incidencias repetidas y de su causa raíz.' },
                    { title: 'Informes', text: 'Análisis de volumen, tiempos y temas para decidir mejoras.' },
                ],
            },
            method,
            {
                type: 'faq',
                title: 'Preguntas frecuentes',
                items: [
                    { q: '¿Sustituye a los técnicos?', a: 'No. Reduce trabajo repetitivo y aporta contexto; la resolución y la validación siguen siendo humanas.' },
                    { q: '¿Sirve con Freshdesk?', a: 'Sí, y con otras herramientas de ticketing que permitan integración por API.' },
                ],
            },
        ],
        cta: { title: 'Solicitar demo Smart Helpdesk', text: 'Te mostramos cómo clasifica, prioriza y sugiere respuestas sobre tu base de conocimiento.', primary: { label: 'Solicitar demo Smart Helpdesk', to: '/diagnosticos/ia-360' }, secondary: { label: 'Hablar con especialista', to: '/empresa/contacto' } },
        related: [
            { label: 'Inteligencia Artificial', to: '/inteligencia-artificial' },
            { label: 'Soporte a clientes', to: '/soporte' },
        ],
    },
};
