const diagnosisCta = {
    title: '¿Quieres saber cómo está realmente tu empresa?',
    text: 'Solicita un diagnóstico inicial. Revisamos tu situación, te explicamos los riesgos que vemos y te proponemos un plan priorizado.',
    primary: { label: 'Solicitar diagnóstico', to: '/diagnosticos' },
    secondary: { label: 'Hablar con especialista', to: '/empresa/contacto' },
};

const serviceAnswers = (a) => ({
    type: 'faq',
    title: 'Preguntas frecuentes',
    items: a,
});

export const servicesPages = {
    '/it': {
        title: 'Servicios IT para empresas | Soporte, infraestructura, continuidad',
        description:
            'Externaliza tu departamento IT. Soporte 24/7, Microsoft 365, servidores, redes, backups, monitorización y continuidad de negocio.',
        kicker: 'Servicios IT',
        h1: 'Servicios IT gestionados para empresas',
        lead: 'Gestionamos, mantenemos y modernizamos la tecnología de tu empresa para que el equipo trabaje sin interrupciones y la dirección tenga visibilidad real de lo que ocurre.',
        image: 'infra',
        sections: [
            {
                type: 'text',
                title: '¿Qué es y para quién es?',
                body: [
                    'Nuestro servicio IT gestionado sustituye o refuerza al departamento de sistemas interno. Nos ocupamos de la operación diaria (usuarios, dispositivos, incidencias), de la infraestructura (servidores, red, copias) y del plan de mejora a medio plazo.',
                    'Está pensado para empresas de 10 a 250 empleados que ya dependen de su tecnología para producir o facturar y que no quieren depender de soluciones puntuales cuando algo se rompe.',
                ],
            },
            {
                type: 'grid',
                title: 'Qué incluye',
                intro: 'Ajustamos el alcance a tu realidad. Estos son los bloques habituales de trabajo.',
                items: [
                    { title: 'Soporte IT y helpdesk', text: 'Punto único de contacto para usuarios, con registro y seguimiento de cada incidencia.' },
                    { title: 'Administración de usuarios', text: 'Altas, bajas, permisos, buzones y ciclo de vida completo de las cuentas.' },
                    { title: 'Microsoft 365', text: 'Configuración, licenciamiento, Exchange, Teams, SharePoint y políticas de seguridad.' },
                    { title: 'Gestión de dispositivos', text: 'Equipos, portátiles y móviles: inventario, despliegue, políticas y actualizaciones.' },
                    { title: 'Servidores', text: 'Administración, actualizaciones, capacidad y mantenimiento preventivo.' },
                    { title: 'Redes, VPN y firewalls', text: 'Segmentación, wifi, accesos remotos y publicación segura de servicios.' },
                    { title: 'Copias de seguridad', text: 'Diseño de la política, verificación periódica y pruebas de restauración.' },
                    { title: 'Monitorización', text: 'Vigilancia de servidores, servicios y avisos antes de que el usuario lo note.' },
                    { title: 'Mantenimiento y soporte remoto', text: 'Tareas planificadas, parcheo y resolución remota o presencial cuando hace falta.' },
                    { title: 'Gestión de incidencias y proveedores', text: 'Coordinamos operadores, fabricantes y software de terceros por ti.' },
                    { title: 'Inventario IT', text: 'Activos, licencias y contratos documentados y actualizados.' },
                    { title: 'Continuidad y recuperación', text: 'Planes de continuidad de negocio y procedimientos de recuperación ante desastres.' },
                ],
            },
            {
                type: 'steps',
                title: 'Cómo trabajamos',
                items: [
                    { title: 'Analizamos', text: 'Inventario, revisión técnica y entrevistas con responsables.' },
                    { title: 'Priorizamos', text: 'Plan por impacto y riesgo, no por catálogo de producto.' },
                    { title: 'Implantamos', text: 'Ejecución por fases, documentada y sin parar la operación.' },
                    { title: 'Protegemos', text: 'Seguridad, copias y monitorización sobre lo implantado.' },
                    { title: 'Mejoramos', text: 'Revisiones periódicas y evolución continua.' },
                ],
            },
            {
                type: 'links',
                title: 'Áreas de servicio IT',
                items: [
                    { label: 'Soporte IT y helpdesk', to: '/it/soporte', text: 'Atención a usuarios y gestión de incidencias.' },
                    { label: 'Infraestructura y redes', to: '/it/infraestructura', text: 'Servidores, red, VPN y firewalls.' },
                    { label: 'Continuidad de negocio', to: '/it/continuidad', text: 'Copias, recuperación y planes de contingencia.' },
                    { label: 'Microsoft 365', to: '/it/microsoft-365', text: 'Productividad y seguridad en el entorno Microsoft.' },
                ],
            },
            serviceAnswers([
                { q: '¿Cuánto dura la puesta en marcha?', a: 'La toma de control habitual (inventario, accesos, documentación y monitorización) suele completarse en 2 a 4 semanas según tamaño y estado de la documentación previa.' },
                { q: '¿Qué necesitamos que nos proporciones?', a: 'Accesos administrativos, contacto de proveedores actuales, listado de sedes y usuarios, y una persona de referencia en tu empresa para validar decisiones.' },
                { q: '¿Qué obtengo al final?', a: 'Infraestructura documentada, incidencias trazables, copias verificadas, monitorización activa y un plan de mejora priorizado con responsables y plazos.' },
                { q: '¿Sustituís al informático interno?', a: 'Podemos asumir todo el servicio o trabajar como apoyo especializado del equipo interno. Ambos modelos son habituales.' },
            ]),
        ],
        cta: {
            title: 'Externaliza tu departamento IT',
            text: 'Solicita una revisión de tu infraestructura y te explicamos qué encontramos, qué priorizaríamos y con qué esfuerzo.',
            primary: { label: 'Revisar infraestructura', to: '/diagnosticos/it' },
            secondary: { label: 'Externalizar IT', to: '/empresa/contacto' },
        },
    },

    '/it/soporte': {
        title: 'Soporte IT y helpdesk para empresas | Coolnetworks',
        description: 'Soporte IT y helpdesk gestionado: punto único de contacto, gestión de incidencias, administración de usuarios y soporte remoto o presencial en Zaragoza.',
        kicker: 'Servicios IT',
        h1: 'Soporte IT y helpdesk',
        lead: 'Un único punto de contacto para que las incidencias dejen de resolverse por favores, mensajes sueltos o llamadas directas.',
        sections: [
            { type: 'text', title: '¿Qué problema resuelve?', body: ['Cuando el soporte no está estructurado, nadie sabe cuántas incidencias hay, qué se repite ni cuánto tiempo pierde el equipo. El helpdesk gestionado convierte esa dispersión en un proceso medible.'] },
            {
                type: 'grid',
                title: 'Qué incluye',
                items: [
                    { title: 'Mesa de ayuda', text: 'Recepción, clasificación y priorización de incidencias y peticiones.' },
                    { title: 'Soporte remoto', text: 'Resolución en remoto de la mayoría de casos, con intervención presencial cuando es necesaria.' },
                    { title: 'Gestión de usuarios', text: 'Altas, bajas, cambios de puesto, permisos y buzones.' },
                    { title: 'Puesto de trabajo', text: 'Preparación de equipos, software base, impresoras y periféricos.' },
                    { title: 'Escalado técnico', text: 'Acceso directo a especialistas de sistemas, red y seguridad.' },
                    { title: 'Informes', text: 'Volumen, tipología y tiempos, con recomendaciones de mejora.' },
                ],
            },
            serviceAnswers([
                { q: '¿Cómo se abren las incidencias?', a: 'Por correo, teléfono o portal de soporte. Cada solicitud queda registrada con su histórico.' },
                { q: '¿Qué diferencia este servicio?', a: 'No cerramos tickets sin analizar la causa: si una incidencia se repite, la llevamos al plan de mejora en lugar de repetir la misma solución.' },
            ]),
        ],
        cta: diagnosisCta,
        related: [
            { label: 'Servicios IT', to: '/it' },
            { label: 'Soporte a clientes', to: '/soporte' },
        ],
    },

    '/it/infraestructura': {
        title: 'Infraestructura IT, servidores y redes para empresas | Coolnetworks',
        description: 'Diseño y administración de infraestructura IT: servidores, virtualización, redes, wifi, segmentación, VPN y firewalls para empresas industriales y PYMES.',
        kicker: 'Servicios IT',
        h1: 'Infraestructura, servidores y redes',
        lead: 'Infraestructura ordenada, documentada y dimensionada para lo que tu empresa necesita hoy y en los próximos años.',
        image: 'infra',
        sections: [
            { type: 'text', title: '¿Qué es?', body: ['Diseñamos, administramos y evolucionamos la base técnica de tu empresa: servidores y virtualización, almacenamiento, red cableada y wifi, segmentación, accesos remotos y publicación de servicios.'] },
            {
                type: 'grid',
                title: 'Qué incluye',
                items: [
                    { title: 'Servidores y virtualización', text: 'Dimensionado, actualizaciones, capacidad y mantenimiento.' },
                    { title: 'Red y wifi', text: 'Electrónica de red, VLAN, calidad de servicio y cobertura.' },
                    { title: 'Segmentación', text: 'Separación de entornos de oficina, producción, invitados e IoT.' },
                    { title: 'VPN y acceso remoto', text: 'Accesos seguros para empleados, sedes y proveedores.' },
                    { title: 'Firewalls', text: 'Reglas revisadas, publicación controlada y registro de tráfico.' },
                    { title: 'Documentación', text: 'Esquemas, direccionamiento y procedimientos actualizados.' },
                ],
            },
            serviceAnswers([
                { q: '¿Cuánto dura un proyecto de infraestructura?', a: 'Una revisión completa suele ocupar entre 2 y 4 semanas; la ejecución depende del alcance y se planifica por fases para no interrumpir la producción.' },
                { q: '¿Trabajáis en entornos industriales?', a: 'Sí. Es habitual segmentar red de oficina y red de planta, con criterios distintos de disponibilidad y mantenimiento.' },
            ]),
        ],
        cta: diagnosisCta,
        related: [
            { label: 'Ciberseguridad', to: '/ciberseguridad' },
            { label: 'Sector industria', to: '/sectores/industria' },
        ],
    },

    '/it/continuidad': {
        title: 'Continuidad de negocio y recuperación ante desastres | Coolnetworks',
        description: 'Planes de continuidad de negocio y recuperación ante desastres: copias verificadas, RTO y RPO realistas, procedimientos probados y responsables definidos.',
        kicker: 'Servicios IT',
        h1: 'Continuidad de negocio y recuperación ante desastres',
        lead: 'Tener copias no es lo mismo que poder recuperarse. Trabajamos con tiempos objetivo, procedimientos y pruebas reales.',
        sections: [
            { type: 'text', title: '¿Qué problema resuelve?', body: ['Muchas empresas descubren el estado real de sus copias el día que las necesitan. Definimos qué procesos son críticos, cuánto tiempo pueden estar parados y qué pérdida de datos es aceptable, y construimos la solución a partir de ahí.'] },
            {
                type: 'list',
                title: 'Qué incluye',
                items: [
                    'Identificación de procesos y sistemas críticos',
                    'Definición de RTO y RPO por sistema',
                    'Diseño de la política de copias (local, remota, inmutable)',
                    'Verificación periódica y pruebas de restauración documentadas',
                    'Procedimientos de recuperación paso a paso',
                    'Plan de continuidad con roles y comunicación',
                    'Revisión anual del plan',
                ],
            },
            serviceAnswers([
                { q: '¿Qué obtengo?', a: 'Un plan escrito, copias verificadas, pruebas de restauración con evidencias y un procedimiento que cualquier técnico autorizado puede seguir.' },
                { q: '¿Sirve para auditorías?', a: 'Sí. La documentación y las evidencias generadas son directamente reutilizables en preparaciones para ISO 27001, TISAX o ENS.' },
            ]),
        ],
        cta: diagnosisCta,
        related: [
            { label: 'Auditorías y compliance', to: '/compliance' },
            { label: 'Recuperación de incidentes', to: '/ciberseguridad/hardening' },
        ],
    },

    '/it/microsoft-365': {
        title: 'Microsoft 365 para empresas: gestión y seguridad | Coolnetworks',
        description: 'Implantación, administración y securización de Microsoft 365: Exchange, Teams, SharePoint, OneDrive, MFA, políticas de acceso y gestión de licencias.',
        kicker: 'Servicios IT',
        h1: 'Microsoft 365: gestión y seguridad',
        lead: 'Microsoft 365 bien configurado mejora la productividad; mal configurado abre la puerta a la mayoría de incidentes de correo e identidad.',
        sections: [
            { type: 'text', title: '¿Qué es?', body: ['Nos encargamos del entorno Microsoft 365 completo: identidades, correo, colaboración, dispositivos y las políticas de seguridad que lo protegen.'] },
            {
                type: 'grid',
                title: 'Qué incluye',
                items: [
                    { title: 'Implantación y migración', text: 'Correo, ficheros y colaboración con plan de migración por fases.' },
                    { title: 'Identidades y MFA', text: 'Doble factor, acceso condicional y revisión de privilegios.' },
                    { title: 'Colaboración', text: 'Teams, SharePoint y OneDrive con estructura y permisos definidos.' },
                    { title: 'Protección de correo', text: 'Antiphishing, reglas, SPF, DKIM y DMARC.' },
                    { title: 'Dispositivos', text: 'Políticas de cumplimiento y cifrado en equipos gestionados.' },
                    { title: 'Licenciamiento', text: 'Revisión de licencias y ajuste al uso real.' },
                ],
            },
            serviceAnswers([
                { q: '¿Podéis revisar un tenant existente?', a: 'Sí. Hacemos una revisión de configuración y seguridad y entregamos un informe con hallazgos priorizados.' },
                { q: '¿Cuánto dura una migración?', a: 'Para una empresa de 30-80 usuarios, entre 3 y 6 semanas incluyendo pruebas y acompañamiento posterior.' },
            ]),
        ],
        cta: diagnosisCta,
        related: [
            { label: 'Microsoft 365 Security', to: '/ciberseguridad' },
            { label: 'Servicios IT', to: '/it' },
        ],
    },

    '/ciberseguridad': {
        title: 'Ciberseguridad empresarial | Auditorías, hardening, SIEM, pentesting',
        description: 'Protege tu empresa. Auditorías de seguridad, análisis de vulnerabilidades, hardening, endpoint security, SIEM, monitoreo y recuperación ante incidentes.',
        kicker: 'Ciberseguridad',
        h1: 'Ciberseguridad gestionada para empresas',
        lead: 'Reducimos la superficie de exposición de tu empresa con medidas concretas, priorizadas por riesgo real y sostenibles en el tiempo.',
        image: 'hero',
        sections: [
            {
                type: 'text',
                title: '¿Qué es y para quién es?',
                body: [
                    'Trabajamos la seguridad como un proceso: primero medimos dónde estás, después corregimos lo que más expone al negocio y por último vigilamos y mejoramos.',
                    'Es un servicio para empresas que manejan información sensible de clientes, propiedad industrial o datos de producción, y para organizaciones que deben responder ante clientes, auditores o aseguradoras.',
                ],
            },
            {
                type: 'grid',
                title: 'Qué incluye',
                items: [
                    { title: 'Auditorías de seguridad', text: 'Revisión técnica y organizativa con informe priorizado.' },
                    { title: 'Análisis de vulnerabilidades', text: 'Descubrimiento, clasificación y seguimiento de la corrección.' },
                    { title: 'Hardening', text: 'Configuración segura de servidores, red, puestos y servicios cloud.' },
                    { title: 'Seguridad endpoint', text: 'Protección avanzada, cifrado y control de dispositivos.' },
                    { title: 'Firewall perimetral', text: 'Reglas revisadas, filtrado y control de publicaciones.' },
                    { title: 'MFA e identidades', text: 'Doble factor, gestión de privilegios y ciclo de vida de cuentas.' },
                    { title: 'Microsoft 365 Security', text: 'Acceso condicional, protección de correo y datos.' },
                    { title: 'Seguridad de servidores', text: 'Parcheo, segmentación y control de accesos administrativos.' },
                    { title: 'SIEM y gestión de logs', text: 'Centralización, correlación y retención de registros.' },
                    { title: 'Monitorización continua', text: 'Detección temprana y avisos accionables.' },
                    { title: 'Copias y recuperación', text: 'Copias resistentes a ransomware y recuperación probada.' },
                    { title: 'Evaluación de riesgos', text: 'Metodología documentada, riesgos tratados y aceptados.' },
                    { title: 'Planes de continuidad', text: 'Contingencia, roles y comunicación de crisis.' },
                    { title: 'Concienciación', text: 'Formación práctica y simulaciones de phishing.' },
                    { title: 'Pentesting', text: 'Pruebas de intrusión con alcance acordado y reporte técnico.' },
                    { title: 'Planes de mejora', text: 'Hoja de ruta con esfuerzo, prioridad y responsables.' },
                ],
            },
            {
                type: 'links',
                title: 'Especialidades',
                items: [
                    { label: 'Auditorías de seguridad', to: '/ciberseguridad/auditorias', text: 'Dónde estás y qué expone tu negocio.' },
                    { label: 'Vulnerabilidades', to: '/ciberseguridad/vulnerabilidades', text: 'Análisis y priorización por riesgo.' },
                    { label: 'Hardening', to: '/ciberseguridad/hardening', text: 'Configuración segura de sistemas y servicios.' },
                    { label: 'Endpoint security', to: '/ciberseguridad/endpoint', text: 'Protección del puesto de trabajo y dispositivos.' },
                    { label: 'SIEM y monitorización', to: '/ciberseguridad/siem', text: 'Visibilidad, logs y detección.' },
                    { label: 'Pentesting', to: '/ciberseguridad/pentesting', text: 'Pruebas de penetración controladas.' },
                ],
            },
            serviceAnswers([
                { q: '¿Cuánto dura un diagnóstico de ciberseguridad?', a: 'Entre 1 y 3 semanas según tamaño y número de sedes, incluyendo entrevistas, revisión técnica e informe.' },
                { q: '¿Qué necesitáis del cliente?', a: 'Accesos de lectura a los sistemas relevantes, inventario disponible y disponibilidad de las personas que operan la tecnología.' },
                { q: '¿Qué obtengo?', a: 'Un informe con hallazgos, riesgo asociado y un plan de acción priorizado en quick wins y proyectos.' },
            ]),
        ],
        cta: {
            title: 'Solicitar diagnóstico de ciberseguridad',
            text: 'Empezamos midiendo. Con datos sobre la mesa, las decisiones de inversión en seguridad dejan de ser una intuición.',
            primary: { label: 'Solicitar diagnóstico de ciberseguridad', to: '/diagnosticos/ciberseguridad' },
            secondary: { label: 'Hablar con especialista', to: '/empresa/contacto' },
        },
    },

    '/ciberseguridad/auditorias': {
        title: 'Auditorías de seguridad informática para empresas | Coolnetworks',
        description: 'Auditoría de seguridad informática: revisión técnica y organizativa, análisis de vulnerabilidades, evaluación de riesgos e informe con plan de mejora priorizado.',
        kicker: 'Ciberseguridad',
        h1: 'Auditorías de seguridad',
        lead: 'Una foto honesta del estado de tu seguridad, sin discurso comercial y con prioridades claras.',
        sections: [
            { type: 'text', title: '¿Qué es?', body: ['Revisamos infraestructura, identidades, puesto de trabajo, copias, red, cloud y procesos de gestión. Cruzamos hallazgos técnicos con impacto de negocio para ordenar la corrección.'] },
            { type: 'list', title: 'Qué revisamos', items: ['Perímetro y servicios publicados', 'Identidades, privilegios y MFA', 'Servidores, parcheo y configuración', 'Puesto de trabajo y dispositivos móviles', 'Copias de seguridad y capacidad de restauración', 'Segmentación de red y accesos remotos', 'Microsoft 365 y servicios cloud', 'Procedimientos, documentación y responsables'] },
            { type: 'steps', title: 'Proceso', items: [{ title: 'Alcance', text: 'Definimos sistemas, sedes y límites del trabajo.' }, { title: 'Recogida', text: 'Entrevistas, revisión de configuración y pruebas técnicas.' }, { title: 'Análisis', text: 'Clasificación por riesgo y esfuerzo de corrección.' }, { title: 'Informe', text: 'Documento técnico y resumen para dirección.' }, { title: 'Plan', text: 'Hoja de ruta priorizada y acompañamiento.' }] },
            serviceAnswers([{ q: '¿Interrumpe la operación?', a: 'No. Las pruebas potencialmente intrusivas se acuerdan previamente y se planifican en ventanas controladas.' }, { q: '¿Con qué frecuencia conviene repetirla?', a: 'Como referencia, una revisión anual y verificaciones parciales tras cambios relevantes de infraestructura.' }]),
        ],
        cta: { title: 'Solicitar diagnóstico de ciberseguridad', text: 'Cuéntanos tu situación y definimos juntos el alcance adecuado.', primary: { label: 'Solicitar diagnóstico', to: '/diagnosticos/ciberseguridad' }, secondary: { label: 'Hablar con especialista', to: '/empresa/contacto' } },
    },

    '/ciberseguridad/hardening': {
        title: 'Hardening de sistemas, servidores y red | Coolnetworks',
        description: 'Hardening de servidores, puestos de trabajo, red y servicios cloud: configuración segura, reducción de superficie de ataque y control de accesos administrativos.',
        kicker: 'Ciberseguridad',
        h1: 'Hardening de sistemas y servicios',
        lead: 'La mayoría de incidentes no explotan tecnología exótica: aprovechan configuraciones por defecto.',
        sections: [
            { type: 'text', title: '¿Qué problema resuelve?', body: ['Reducimos la superficie de ataque cerrando servicios innecesarios, corrigiendo configuraciones por defecto, limitando privilegios y aplicando líneas base de configuración segura verificables.'] },
            { type: 'list', title: 'Ámbitos de trabajo', items: ['Servidores Windows y Linux', 'Directorio activo e identidades', 'Puesto de trabajo y cifrado de disco', 'Electrónica de red y wifi', 'Firewall y accesos remotos', 'Microsoft 365 y servicios cloud', 'Cuentas administrativas y acceso privilegiado'] },
            serviceAnswers([{ q: '¿Qué obtengo?', a: 'Líneas base documentadas, cambios aplicados con control de versiones y evidencias reutilizables en auditoría.' }, { q: '¿Cuánto dura?', a: 'Un ciclo de hardening habitual se ejecuta en 3 a 8 semanas por fases, priorizando lo que más expone.' }]),
        ],
        cta: diagnosisCta,
    },

    '/ciberseguridad/endpoint': {
        title: 'Endpoint security: protección del puesto de trabajo | Coolnetworks',
        description: 'Seguridad de endpoint para empresas: protección avanzada frente a ransomware, cifrado, control de dispositivos, parcheo y respuesta ante detecciones.',
        kicker: 'Ciberseguridad',
        h1: 'Endpoint security',
        lead: 'El puesto de trabajo sigue siendo la vía de entrada más común. Lo protegemos y lo mantenemos vigilado.',
        sections: [
            { type: 'text', title: '¿Qué es?', body: ['Desplegamos y gestionamos protección avanzada en equipos y servidores, con políticas homogéneas, cifrado, control de dispositivos externos y seguimiento de las detecciones hasta su cierre.'] },
            { type: 'grid', title: 'Qué incluye', items: [{ title: 'Protección avanzada', text: 'Detección de comportamiento y contención de amenazas.' }, { title: 'Cifrado', text: 'Cifrado de disco y custodia de claves de recuperación.' }, { title: 'Control de dispositivos', text: 'Políticas para USB y periféricos.' }, { title: 'Gestión de parches', text: 'Sistema operativo y aplicaciones de terceros.' }, { title: 'Seguimiento', text: 'Revisión de alertas y acciones correctivas.' }, { title: 'Informes', text: 'Estado de cobertura y detecciones por periodo.' }] },
            serviceAnswers([{ q: '¿Sirve contra ransomware?', a: 'Reduce mucho la probabilidad y el impacto, pero la combinación necesaria incluye copias resistentes, segmentación y control de identidades.' }]),
        ],
        cta: diagnosisCta,
    },

    '/ciberseguridad/siem': {
        title: 'SIEM, gestión de logs y monitorización de seguridad | Coolnetworks',
        description: 'SIEM y monitorización de seguridad: centralización de logs, correlación de eventos, retención, alertas accionables y revisión periódica.',
        kicker: 'Ciberseguridad',
        h1: 'SIEM y monitorización de seguridad',
        lead: 'Sin registros centralizados no hay investigación posible. Con ellos, cada alerta se puede explicar.',
        sections: [
            { type: 'text', title: '¿Qué es?', body: ['Centralizamos los registros de servidores, red, identidades y servicios cloud, definimos reglas de correlación útiles para tu entorno y revisamos las alertas con criterio, evitando el ruido que nadie atiende.'] },
            { type: 'list', title: 'Qué incluye', items: ['Inventario de fuentes de log', 'Centralización y normalización', 'Reglas de correlación y casos de uso', 'Política de retención', 'Alertas accionables y escalado', 'Revisión periódica e informes', 'Soporte a investigación forense básica'] },
            serviceAnswers([{ q: '¿Es viable en una PYME?', a: 'Sí, empezando por un conjunto reducido de fuentes críticas y casos de uso concretos, en lugar de intentar recogerlo todo desde el primer día.' }]),
        ],
        cta: diagnosisCta,
    },

    '/ciberseguridad/vulnerabilidades': {
        title: 'Análisis de vulnerabilidades y gestión de riesgos | Coolnetworks',
        description: 'Análisis de vulnerabilidades para empresas: escaneo, priorización por riesgo, plan de remediación y verificación de correcciones.',
        kicker: 'Ciberseguridad',
        h1: 'Análisis de vulnerabilidades',
        lead: 'Detectamos debilidades técnicas y las ordenamos por riesgo real, no por volumen de alertas.',
        sections: [
            { type: 'text', title: '¿Qué es?', body: ['Combinamos escaneo automatizado y revisión manual para identificar vulnerabilidades en sistemas, servicios publicados y configuraciones. Priorizamos por explotabilidad e impacto de negocio.'] },
            { type: 'list', title: 'Qué incluye', items: ['Inventario de activos en alcance', 'Escaneo interno y externo', 'Validación de falsos positivos', 'Priorización por riesgo e impacto', 'Plan de remediación con responsables', 'Reescaneo de verificación'] },
            serviceAnswers([{ q: '¿Con qué frecuencia conviene hacerlo?', a: 'Como referencia, un ciclo completo trimestral o semestral, y revisiones puntuales tras cambios relevantes.' }, { q: '¿Qué obtengo?', a: 'Informe técnico, resumen ejecutivo y plan de corrección priorizado.' }]),
        ],
        cta: { title: 'Solicitar diagnóstico de ciberseguridad', text: 'Definimos el alcance adecuado a tu exposición real.', primary: { label: 'Solicitar diagnóstico', to: '/diagnosticos/ciberseguridad' }, secondary: { label: 'Hablar con especialista', to: '/empresa/contacto' } },
    },

    '/ciberseguridad/pentesting': {
        title: 'Pentesting y pruebas de penetración | Coolnetworks',
        description: 'Pentesting para empresas: pruebas de penetración controladas sobre aplicaciones, redes y servicios, con informe y plan de corrección.',
        kicker: 'Ciberseguridad',
        h1: 'Pentesting',
        lead: 'Simulamos ataques reales en un entorno controlado para demostrar qué se puede comprometer y cómo evitarlo.',
        sections: [
            { type: 'text', title: '¿Qué es?', body: ['Las pruebas de penetración van más allá del escaneo: un especialista intenta explotar vulnerabilidades con reglas de engagement acordadas, midiendo impacto real sin interrumpir la operación.'] },
            { type: 'list', title: 'Ámbitos habituales', items: ['Perímetro y servicios publicados', 'Red interna', 'Aplicaciones web', 'APIs y servicios cloud', 'Identidades y privilegios', 'Wifi y accesos remotos'] },
            { type: 'steps', title: 'Proceso', items: [{ title: 'Alcance y reglas', text: 'Sistemas, horarios y límites de prueba.' }, { title: 'Reconocimiento', text: 'Mapeo de superficie de ataque.' }, { title: 'Explotación controlada', text: 'Pruebas con impacto acotado.' }, { title: 'Informe', text: 'Hallazgos, evidencias y criticidad.' }, { title: 'Remediación', text: 'Acompañamiento y retest opcional.' }] },
            serviceAnswers([{ q: '¿Interrumpe el servicio?', a: 'Se planifica para minimizar impacto. Las pruebas agresivas se acuerdan y se ejecutan en ventanas controladas.' }, { q: '¿Cuánto dura?', a: 'Un pentest acotado suele completarse en 1 a 3 semanas incluyendo informe.' }]),
        ],
        cta: { title: 'Solicitar diagnóstico de ciberseguridad', text: 'Valoramos si necesitas un análisis de vulnerabilidades, un pentest o ambos.', primary: { label: 'Solicitar diagnóstico', to: '/diagnosticos/ciberseguridad' }, secondary: { label: 'Hablar con especialista', to: '/empresa/contacto' } },
    },

};

export const sectorPages = {
    '/sectores/automocion': {
        title: 'Soluciones IT y ciberseguridad para automoción | TISAX',
        description: 'Soluciones para sector automoción. IT, ciberseguridad, TISAX, cumplimiento normativo y IA para empresas automoción.',
        kicker: 'Sectores',
        h1: 'Automoción',
        lead: 'Proveedores y fabricantes del sector automoción trabajan bajo exigencias de seguridad de la información que llegan directamente de sus clientes.',
        image: 'industry',
        sections: [
            { type: 'list', title: 'Problemas habituales', items: ['Requisitos de seguridad exigidos por el cliente final (incluida evaluación TISAX)', 'Información técnica y prototipos que deben protegerse por contrato', 'Redes de planta y oficina sin separación clara', 'Paradas de producción con coste inmediato', 'Intercambio de ficheros con clientes y proveedores sin control', 'Documentación de seguridad dispersa o desactualizada'] },
            { type: 'links', title: 'Cómo ayudamos', items: [{ label: 'Preparación para TISAX', to: '/compliance/tisax', text: 'GAP analysis, adecuación y acompañamiento.' }, { label: 'Ciberseguridad gestionada', to: '/ciberseguridad', text: 'Hardening, endpoint, monitorización.' }, { label: 'Infraestructura y redes', to: '/it/infraestructura', text: 'Segmentación planta/oficina.' }, { label: 'Continuidad de negocio', to: '/it/continuidad', text: 'Recuperación con tiempos objetivo.' }] },
        ],
        cta: { title: 'Solicitar diagnóstico TISAX', text: 'Revisamos tu situación frente a los requisitos y te indicamos el camino más corto y realista.', primary: { label: 'Solicitar diagnóstico TISAX', to: '/diagnosticos/compliance' }, secondary: { label: 'Hablar con especialista', to: '/empresa/contacto' } },
    },
    '/sectores/industria': {
        title: 'Soluciones IT y ciberseguridad para industria',
        description: 'Soluciones para sector industrial. IT, ciberseguridad, compliance, continuidad de negocio e IA para empresas industriales.',
        kicker: 'Sectores',
        h1: 'Industria',
        lead: 'En industria, la disponibilidad es el requisito principal: cada parada tiene un coste medible.',
        image: 'industry',
        sections: [
            { type: 'list', title: 'Problemas habituales', items: ['Equipos de control y máquinas con sistemas antiguos aún en producción', 'Red de planta conectada a la red de oficina sin segmentación', 'Accesos remotos de fabricantes sin control ni registro', 'Copias de configuraciones de máquina inexistentes', 'Dependencia de una única persona que conoce la instalación', 'Turnos que necesitan soporte fuera del horario de oficina'] },
            { type: 'links', title: 'Cómo ayudamos', items: [{ label: 'Infraestructura y redes', to: '/it/infraestructura', text: 'Segmentación y disponibilidad.' }, { label: 'Continuidad de negocio', to: '/it/continuidad', text: 'RTO y RPO por sistema.' }, { label: 'Ciberseguridad', to: '/ciberseguridad', text: 'Control de accesos y monitorización.' }, { label: 'Automatización con IA', to: '/ia/automatizacion', text: 'Procesos administrativos y documentales.' }] },
        ],
        cta: diagnosisCta,
    },
    '/sectores/pymes': {
        title: 'Soluciones IT y ciberseguridad para PYMES',
        description: 'Soluciones para PYMES. IT asequible, ciberseguridad, compliance simplificado e IA para pequeñas y medianas empresas.',
        kicker: 'Sectores',
        h1: 'PYMES',
        lead: 'Sin departamento IT propio, la tecnología suele crecer por acumulación. Ordenarla es la mejor inversión disponible.',
        sections: [
            { type: 'list', title: 'Problemas habituales', items: ['Soporte reactivo y dependiente de contactos informales', 'Copias de seguridad no verificadas', 'Cuentas compartidas y sin doble factor', 'Licencias y servicios pagados sin uso real', 'Falta de documentación de la instalación', 'Clientes que empiezan a pedir requisitos de seguridad'] },
            { type: 'links', title: 'Cómo ayudamos', items: [{ label: 'Servicios IT gestionados', to: '/it', text: 'Soporte y operación diaria.' }, { label: 'Microsoft 365', to: '/it/microsoft-365', text: 'Correo y colaboración seguros.' }, { label: 'Ciberseguridad', to: '/ciberseguridad', text: 'Medidas esenciales bien implantadas.' }, { label: 'Diagnóstico IT', to: '/diagnosticos/it', text: 'Punto de partida en pocos días.' }] },
        ],
        cta: diagnosisCta,
    },
    '/sectores/defensa': {
        title: 'Soluciones IT y ciberseguridad para defensa',
        description: 'Soluciones para sector defensa. IT, ciberseguridad, cumplimiento normativo específico e IA para empresas de defensa.',
        kicker: 'Sectores',
        h1: 'Defensa',
        lead: 'El sector defensa exige trazabilidad, control de la información y sistemas de calidad alineados con requisitos contractuales exigentes.',
        image: 'industry',
        sections: [
            { type: 'list', title: 'Problemas habituales', items: ['Requisitos PECAL en contratos con el Ministerio de Defensa o la cadena de suministro', 'Necesidad de trazabilidad y control de configuración', 'Información clasificada o sensible con controles de acceso estrictos', 'Auditorías y evidencias documentales exigentes', 'Integración de seguridad de la información con el sistema de calidad', 'Proveedores y subcontratistas con distintos niveles de madurez'] },
            { type: 'links', title: 'Cómo ayudamos', items: [{ label: 'Preparación PECAL', to: '/compliance/pecal', text: 'Adecuación y acompañamiento.' }, { label: 'ENS', to: '/compliance/ens', text: 'Cuando el alcance lo requiere.' }, { label: 'ISO 27001', to: '/compliance/iso-27001', text: 'Sistema de seguridad de la información.' }, { label: 'Ciberseguridad', to: '/ciberseguridad', text: 'Hardening, identidades y monitorización.' }] },
        ],
        cta: { title: 'Solicitar diagnóstico de compliance', text: 'Revisamos el requisito contractual y el GAP real de tu organización.', primary: { label: 'Solicitar diagnóstico', to: '/diagnosticos/compliance' }, secondary: { label: 'Hablar con especialista', to: '/empresa/contacto' } },
    },
    '/sectores/ingenierias': {
        title: 'Soluciones IT y ciberseguridad para ingenierías',
        description: 'Soluciones para ingenierías. IT, ciberseguridad, compliance, protección de datos técnicos e IA para empresas de ingeniería.',
        kicker: 'Sectores',
        h1: 'Ingenierías',
        lead: 'El activo principal de una ingeniería es su documentación técnica. Debe estar disponible, versionada y protegida.',
        sections: [
            { type: 'list', title: 'Problemas habituales', items: ['Proyectos con acuerdos de confidencialidad exigentes', 'Ficheros grandes y estaciones de trabajo de alto rendimiento', 'Colaboración con clientes y colaboradores externos', 'Control de versiones documental deficiente', 'Trabajo en obra o en remoto con accesos poco seguros', 'Necesidad de trazabilidad para calidad y contratos'] },
            { type: 'links', title: 'Cómo ayudamos', items: [{ label: 'Microsoft 365', to: '/it/microsoft-365', text: 'Colaboración con permisos claros.' }, { label: 'ISO 9001', to: '/compliance/iso-9001', text: 'Procesos y calidad documentados.' }, { label: 'ISO 27001', to: '/compliance/iso-27001', text: 'Seguridad de la información.' }, { label: 'RAG y conocimiento', to: '/ia/rag-privada', text: 'Consulta de documentación interna.' }] },
        ],
        cta: diagnosisCta,
    },
};

export { diagnosisCta };
