import { company } from './site.js';
import { diagnosisCta } from './contentServices.js';

export const miscPages = {
    '/metodologia': {
        title: 'Metodología Coolnetworks: analizar, priorizar, implantar, proteger y mejorar',
        description: 'Conoce la metodología de Coolnetworks en cinco pasos: analizar, priorizar, implantar, proteger y mejorar. Criterio técnico aplicado a IT, ciberseguridad, compliance e IA.',
        kicker: 'Metodología',
        h1: 'Cinco pasos para transformar tu tecnología con criterio',
        lead: 'Aplicamos el mismo método en IT, ciberseguridad, compliance e inteligencia artificial: medir antes de invertir, priorizar por impacto y dejar la empresa en mejores condiciones de operar y demostrar.',
        sections: [
            {
                type: 'steps',
                title: 'Las cinco fases',
                items: [
                    { title: 'Analizar', text: 'Inventario, entrevistas y revisión técnica. Documentamos el estado real sin dar nada por supuesto: sistemas, personas, riesgos y dependencias.' },
                    { title: 'Priorizar', text: 'Ordenamos por riesgo e impacto de negocio. Evitamos catálogos de producto: cada acción debe reducir un problema concreto o habilitar una capacidad medible.' },
                    { title: 'Implantar', text: 'Ejecución por fases, con el equipo interno implicado, ventanas de cambio controladas y documentación de lo desplegado.' },
                    { title: 'Proteger', text: 'Sobre lo implantado aplicamos seguridad, copias, monitorización y controles organizativos con evidencias reutilizables.' },
                    { title: 'Mejorar', text: 'Medición, revisiones periódicas y ajuste continuo. La tecnología y el cumplimiento no se “terminan”: se operan.' },
                ],
            },
            {
                type: 'text',
                title: 'Qué obtienes en cada fase',
                body: [
                    'En el análisis: un mapa claro de la situación y de los riesgos. En la priorización: un plan con responsables y esfuerzo estimado. En la implantación: cambios documentados. En la protección: controles verificables. En la mejora: indicadores y un ritmo de revisión acordado.',
                    'Este método se adapta al tamaño de la empresa. En una PYME puede caber en pocas semanas; en un proyecto de compliance o de IA se extiende por fases, pero la lógica es la misma.',
                ],
            },
            {
                type: 'links',
                title: 'Empieza por un diagnóstico',
                items: [
                    { label: 'Diagnóstico IT', to: '/diagnosticos/it', text: 'Infraestructura y operación.' },
                    { label: 'Diagnóstico de ciberseguridad', to: '/diagnosticos/ciberseguridad', text: 'Exposición y riesgos.' },
                    { label: 'Diagnóstico de compliance', to: '/diagnosticos/compliance', text: 'Preparación de auditorías.' },
                    { label: 'Diagnóstico IA 360', to: '/diagnosticos/ia-360', text: 'Oportunidades y roadmap.' },
                ],
            },
        ],
        cta: diagnosisCta,
    },
    '/recursos/blog': {
        title: 'Blog | IT, ciberseguridad, compliance e Inteligencia Artificial',
        description: 'Blog de Coolnetworks. Artículos sobre IT, ciberseguridad, ISO 27001, TISAX, ENS, PECAL, Microsoft 365 e Inteligencia Artificial para empresas.',
        kicker: 'Recursos',
        h1: 'Blog',
        lead: 'Espacio preparado para artículos periódicos. Publicaremos contenidos propios, técnicos y accionables. No rellenamos esta sección con textos inventados.',
        sections: [
            { type: 'note', title: 'Próximamente', text: 'La estructura de listado, categorías y ficha de artículo está lista. Cuando publiques el primer contenido real, aparecerá aquí con meta SEO, schema Article y enlazado interno.' },
            { type: 'links', title: 'Explora por área', items: [
                { label: 'IT', to: '/it', text: 'Servicios IT gestionados.' },
                { label: 'Ciberseguridad', to: '/ciberseguridad', text: 'Protección y monitorización.' },
                { label: 'Compliance', to: '/compliance', text: 'Preparación de auditorías.' },
                { label: 'Inteligencia Artificial', to: '/inteligencia-artificial', text: 'Adopción con criterio.' },
            ]},
        ],
        cta: diagnosisCta,
    },
    '/recursos/guias': {
        title: 'Guías descargables | Coolnetworks',
        description: 'Guías prácticas de IT, ciberseguridad, compliance e inteligencia artificial para empresas. Estructura lista para contenidos descargables reales.',
        kicker: 'Recursos',
        h1: 'Guías',
        lead: 'Sección preparada para guías descargables. Solo publicaremos materiales revisados y útiles; no hay PDFs de relleno.',
        sections: [
            { type: 'note', title: 'Estructura lista', text: 'Cada guía incluirá título, resumen, categoría, formulario de descarga opcional y versión. Mientras no haya guías reales, puedes solicitar un diagnóstico o una reunión.' },
        ],
        cta: diagnosisCta,
    },
    '/recursos/webinars': {
        title: 'Webinars y vídeos | Coolnetworks',
        description: 'Webinars y vídeos sobre IT, ciberseguridad, compliance e IA para empresas. Calendario y archivo listos para contenidos reales.',
        kicker: 'Recursos',
        h1: 'Webinars y vídeos',
        lead: 'Espacio para sesiones en directo y grabaciones. Publicaremos fechas, temarios y materiales cuando existan eventos reales.',
        sections: [
            { type: 'note', title: 'Sin eventos inventados', text: 'No listamos webinars ficticios. Cuando haya una sesión programada, aparecerá aquí con inscripción y, si procede, la grabación.' },
        ],
        cta: diagnosisCta,
    },

    '/empresa/sobre-nosotros': {
        title: 'Sobre Coolnetworks | Consultoría tecnológica especializada',
        description: 'Coolnetworks. Consultoría tecnológica especializada en IT, ciberseguridad, compliance e Inteligencia Artificial para empresas en Zaragoza y España.',
        kicker: 'Empresa',
        h1: 'Sobre nosotros',
        lead: 'Somos una empresa española de tecnología con base en Zaragoza. Trabajamos IT, ciberseguridad, compliance e inteligencia artificial de forma integrada, porque en la práctica los tres primeros son inseparables y el cuarto depende de ellos.',
        image: 'team',
        sections: [
            {
                type: 'text',
                title: 'Cómo trabajamos',
                body: [
                    'Empezamos midiendo. Antes de proponer una inversión, revisamos la situación real y explicamos qué encontramos con lenguaje comprensible para dirección y suficiente detalle para el equipo técnico.',
                    'Priorizamos por riesgo e impacto de negocio, no por catálogo de producto. Documentamos lo que hacemos y dejamos a la empresa en condiciones de entender su propia tecnología.',
                ],
            },
            {
                type: 'grid',
                title: 'Qué nos define',
                items: [
                    { title: 'Criterio técnico', text: 'Recomendamos lo que resolvería el problema, incluso cuando implica menos proyecto.' },
                    { title: 'Confidencialidad', text: 'Tratamos información sensible de nuestros clientes con acuerdos y controles claros.' },
                    { title: 'Cercanía', text: 'Interlocución directa con quien conoce tu instalación, sin capas intermedias.' },
                    { title: 'Orientación empresarial', text: 'Hablamos de coste, riesgo y continuidad, no solo de tecnología.' },
                    { title: 'Documentación', text: 'Cada actuación deja trazabilidad y documentación aprovechable.' },
                    { title: 'Visión completa', text: 'IT, seguridad, compliance e IA gestionados con el mismo criterio.' },
                ],
            },
            {
                type: 'note',
                title: 'Transparencia',
                text: 'Esta web no publica cifras, clientes, acreditaciones ni certificaciones que no podamos acreditar. La información sobre nuestra experiencia y referencias se comparte de forma directa durante el proceso comercial y con el consentimiento de los clientes implicados.',
            },
        ],
        cta: diagnosisCta,
    },

    '/empresa/equipo': {
        title: 'Equipo de Coolnetworks | Coolnetworks',
        description: 'Conoce al equipo de Coolnetworks: perfiles técnicos y de consultoría en IT, ciberseguridad, compliance e inteligencia artificial, con base en Zaragoza.',
        kicker: 'Empresa',
        h1: 'Equipo',
        lead: 'Perfiles técnicos y de consultoría que combinan operación diaria, seguridad, preparación para auditorías e inteligencia artificial.',
        sections: [
            {
                type: 'text',
                title: 'Áreas de especialización',
                body: ['El trabajo se organiza en cuatro áreas coordinadas, de forma que un mismo cliente tiene continuidad entre quien opera su infraestructura, quien la protege y quien prepara su documentación de compliance.'],
            },
            {
                type: 'grid',
                title: 'Áreas',
                items: [
                    { title: 'Sistemas e infraestructura', text: 'Servidores, red, cloud y puesto de trabajo.' },
                    { title: 'Ciberseguridad', text: 'Auditoría, hardening, monitorización y respuesta.' },
                    { title: 'Compliance', text: 'ISO 27001, ISO 9001, TISAX, ENS y PECAL.' },
                    { title: 'Inteligencia Artificial', text: 'Diagnóstico, automatización, agentes y gobierno.' },
                ],
            },
            {
                type: 'note',
                title: 'Fichas del equipo',
                text: 'Esta sección está preparada para publicar fotografías, nombres, funciones y trayectoria de cada persona del equipo cuando la empresa facilite ese contenido. No publicamos perfiles inventados.',
            },
        ],
        cta: diagnosisCta,
    },

    '/legal/aviso-legal': {
        title: 'Aviso legal | Coolnetworks',
        description: 'Aviso legal de Coolnetworks: información sobre el titular del sitio web, condiciones de uso, propiedad intelectual y legislación aplicable.',
        kicker: 'Legal',
        h1: 'Aviso legal',
        lead: 'Información sobre el titular de este sitio web y las condiciones de uso, conforme a la normativa española y de la Unión Europea.',
        sections: [
            {
                type: 'list',
                title: '1. Información general',
                intro: 'Última actualización: 26 de agosto de 2026. En cumplimiento de lo dispuesto en la Ley 34/2002, de 11 de julio, de Servicios de la Sociedad de la Información y de Comercio Electrónico, se informa a los usuarios de los siguientes datos identificativos del titular del sitio web:',
                items: [
                    'Titular: Miguel Rubira Garcia',
                    'Nombre comercial: Coolnetworks',
                    'NIF/CIF: 34011693Y',
                    'Domicilio social: Sor Maria de Jesus 6, Los Fayos 50513, ZARAGOZA',
                    'Correo electrónico: info@coolnetworks.it',
                    'Teléfono: 621 15 75 00',
                    'Sitio web: https://coolnetworks.eu',
                    'Datos registrales: Inscrita en el Registro Mercantil de Zaragoza, tomo 223, libro 12 folio 585, hoja 12, inscripción 172369B.',
                ],
            },
            {
                type: 'text',
                title: '2. Objeto y ámbito de aplicación',
                body: [
                    'El presente Aviso Legal regula el acceso, navegación y utilización del sitio web https://coolnetworks.eu, así como las responsabilidades derivadas del uso de sus contenidos.',
                    'La web tiene como finalidad ofrecer información sobre COOLNETWORKS y sus servicios profesionales, entre los que se incluyen servicios IT gestionados, soporte técnico, ciberseguridad, consultoría tecnológica, preparación para auditorías y sistemas de gestión, compliance e implantación y gobierno de soluciones de inteligencia artificial.',
                    'El acceso a esta web atribuye la condición de usuario e implica la aceptación de las condiciones recogidas en este Aviso Legal. Si el usuario no está de acuerdo con ellas, deberá abstenerse de utilizar el sitio web.',
                ],
            },
            {
                type: 'list',
                title: '3. Condiciones de utilización',
                intro: 'El usuario se compromete a utilizar la web, sus servicios y contenidos de forma responsable, diligente y conforme a la legislación vigente, la buena fe, el orden público y el presente Aviso Legal. Queda prohibido:',
                items: [
                    'Utilizar la web con fines ilícitos, fraudulentos o que puedan perjudicar derechos o intereses de terceros.',
                    'Introducir o difundir virus, código malicioso o cualquier elemento susceptible de dañar, alterar o interrumpir los sistemas de COOLNETWORKS o de terceros.',
                    'Intentar acceder sin autorización a sistemas, cuentas, servidores, bases de datos o áreas restringidas.',
                    'Realizar actuaciones que puedan sobrecargar, deteriorar o impedir el funcionamiento normal del sitio web.',
                    'Copiar, reutilizar o explotar sus contenidos sin la autorización correspondiente.',
                    'Utilizar la información publicada para realizar campañas comerciales no solicitadas, suplantaciones de identidad o actividades contrarias a la normativa aplicable.',
                ],
            },
            {
                type: 'text',
                title: 'Restricción de acceso',
                body: ['COOLNETWORKS podrá restringir o suspender el acceso al sitio web cuando detecte un uso contrario a estas condiciones o que pueda comprometer su seguridad.'],
            },
            {
                type: 'text',
                title: '4. Información sobre los servicios',
                body: [
                    'La información publicada en esta web tiene carácter general, informativo y comercial. No constituye por sí misma una oferta contractual vinculante, un diagnóstico técnico, una auditoría, un dictamen jurídico ni una garantía de certificación.',
                    'Las características, alcance, precios, condiciones, plazos y niveles de servicio aplicables a cada proyecto se establecerán en la correspondiente propuesta, presupuesto, contrato u orden de servicio.',
                    'Las referencias a normas o marcos como ISO 9001, ISO/IEC 27001, ENS, TISAX, PECAL u otros estándares indican servicios de consultoría, evaluación o preparación. Salvo que se indique expresamente lo contrario, COOLNETWORKS no actúa como organismo oficial de acreditación o certificación y no garantiza la obtención de una certificación, ya que esta depende del cumplimiento del cliente y de la valoración de las entidades competentes.',
                ],
            },
            {
                type: 'text',
                title: '5. Propiedad intelectual e industrial',
                body: [
                    'Todos los contenidos de esta web, incluyendo textos, diseños, fotografías, imágenes, logotipos, marcas, iconos, vídeos, gráficos, estructura, código fuente, software y demás elementos, son titularidad de COOLNETWORKS o se utilizan con la correspondiente autorización o licencia.',
                    'El acceso a la web no concede al usuario ningún derecho de propiedad intelectual o industrial sobre sus contenidos.',
                    'Queda prohibida la reproducción, distribución, comunicación pública, transformación, extracción, reutilización o explotación total o parcial de los contenidos sin autorización previa y por escrito del titular, salvo en los casos permitidos expresamente por la legislación vigente.',
                    'Las marcas, nombres comerciales y logotipos de terceros que puedan aparecer en la web pertenecen a sus respectivos titulares. Su inclusión no implica la existencia de una relación empresarial, patrocinio o respaldo, salvo que se indique expresamente.',
                ],
            },
            {
                type: 'list',
                title: '6. Responsabilidad',
                intro: 'COOLNETWORKS procura que la información publicada sea correcta, actualizada y accesible. No obstante, no puede garantizar la inexistencia de errores u omisiones ni la disponibilidad ininterrumpida del sitio web. COOLNETWORKS no será responsable de los daños derivados de:',
                items: [
                    'Interrupciones, fallos técnicos o indisponibilidad temporal de la web.',
                    'Errores u omisiones involuntarios en sus contenidos.',
                    'Uso indebido de la información por parte del usuario.',
                    'Virus, programas maliciosos o ataques procedentes de terceros, sin perjuicio de las medidas razonables de seguridad aplicadas.',
                    'Decisiones adoptadas exclusivamente a partir de la información general publicada en la web.',
                    'Incumplimientos imputables al usuario o a terceros.',
                ],
            },
            {
                type: 'text',
                title: 'Límites de responsabilidad',
                body: ['Nada de lo dispuesto en este Aviso Legal excluirá o limitará las responsabilidades que legalmente no puedan excluirse.'],
            },
            {
                type: 'text',
                title: '7. Enlaces externos',
                body: [
                    'La web puede contener enlaces a páginas, plataformas o servicios de terceros, incluyendo herramientas de soporte, fabricantes tecnológicos, organismos públicos o entidades de certificación.',
                    'Estos enlaces se facilitan únicamente para ampliar información o permitir el acceso a determinados servicios. COOLNETWORKS no controla necesariamente sus contenidos, disponibilidad, condiciones de uso, políticas de privacidad o medidas de seguridad y, por tanto, no responde de ellos.',
                    'La inclusión de un enlace externo no implica necesariamente recomendación, aprobación o relación contractual con su titular.',
                    'Los usuarios o entidades que deseen enlazar con esta web deberán hacerlo de manera lícita, sin introducir información falsa o perjudicial y sin crear confusión sobre la existencia de una relación, colaboración o patrocinio con COOLNETWORKS.',
                ],
            },
            {
                type: 'text',
                title: '8. Protección de datos personales',
                body: [
                    'El tratamiento de los datos personales recabados mediante los formularios, correos electrónicos, solicitudes de diagnóstico, canales de contacto o herramientas de soporte se regula en la Política de Privacidad de la web.',
                    'El usuario deberá consultar dicha política antes de facilitar sus datos personales.',
                    'La utilización de cookies y tecnologías similares se regula en la correspondiente Política de Cookies.',
                ],
            },
            {
                type: 'text',
                title: '9. Portal de soporte y servicios de terceros',
                body: [
                    'El acceso al sistema de soporte o gestión de incidencias puede realizarse mediante plataformas tecnológicas de terceros, como Freshdesk u otras herramientas contratadas por COOLNETWORKS.',
                    'El uso de estas plataformas puede estar sometido a condiciones y políticas adicionales del proveedor correspondiente. Cuando resulte necesario para prestar el servicio contratado, los datos serán tratados de acuerdo con la normativa aplicable, los contratos suscritos y la Política de Privacidad de COOLNETWORKS.',
                    'Los clientes deberán proteger sus credenciales, evitar compartir contraseñas e informar inmediatamente de cualquier acceso no autorizado.',
                ],
            },
            {
                type: 'text',
                title: '10. Seguridad y comunicación de vulnerabilidades',
                body: [
                    'No está permitido realizar pruebas de intrusión, escaneos, explotación de vulnerabilidades, intentos de acceso o cualquier otra actuación de seguridad sobre esta web o su infraestructura sin autorización previa, expresa y por escrito.',
                    'Si un usuario identifica una posible vulnerabilidad o incidente de seguridad, deberá comunicarlo responsablemente a: info@coolnetworks.it',
                    'La comunicación deberá incluir la información técnica necesaria para analizar el problema y evitar la divulgación pública de detalles que puedan facilitar su explotación mientras se investiga y corrige.',
                ],
            },
            {
                type: 'text',
                title: '11. Comunicaciones comerciales',
                body: ['COOLNETWORKS podrá enviar comunicaciones comerciales por medios electrónicos cuando exista consentimiento previo o cualquier otra base jurídica permitida por la normativa aplicable. El destinatario podrá solicitar en cualquier momento que dejen de enviarse estas comunicaciones mediante el procedimiento de baja incluido en cada mensaje o escribiendo a info@coolnetworks.it.'],
            },
            {
                type: 'text',
                title: '12. Modificaciones',
                body: ['COOLNETWORKS se reserva el derecho a modificar este Aviso Legal para adaptarlo a cambios legislativos, técnicos, organizativos o relativos a los servicios ofrecidos. La versión aplicable será la publicada en la web en cada momento. Se recomienda revisar periódicamente este documento.'],
            },
            {
                type: 'text',
                title: '13. Legislación aplicable y jurisdicción',
                body: [
                    'Este Aviso Legal se rige por la legislación española.',
                    'Para cualquier controversia relacionada con el acceso o utilización de la web, las partes se someterán a los juzgados y tribunales que correspondan conforme a la normativa aplicable.',
                    'Cuando el usuario actúe como empresario o profesional y la legislación permita pactar la competencia territorial, las partes se someten a los juzgados y tribunales de Zaragoza, con renuncia expresa a cualquier otro fuero que pudiera corresponderles.',
                    'Cuando el usuario tenga la condición de consumidor o usuario, se respetarán en todo caso los fueros y derechos que le reconozca la normativa de protección de consumidores.',
                ],
            },
            {
                type: 'text',
                title: '14. Contacto',
                body: ['Para cualquier consulta relacionada con este Aviso Legal, el usuario puede contactar con COOLNETWORKS mediante: Correo electrónico: info@coolnetworks.it. Teléfono: 621 15 75 00. Dirección postal: Sor Maria de Jesus 6, Los Fayos 50513, ZARAGOZA.'],
            },
            {
                type: 'links',
                title: 'Documentos relacionados',
                items: [
                    { label: 'Política de privacidad', to: '/legal/privacidad', text: 'Información sobre el tratamiento de datos personales.' },
                    { label: 'Política de cookies', to: '/legal/cookies', text: 'Información sobre cookies y tecnologías similares.' },
                ],
            },
        ],
    },

    '/legal/privacidad': {
        title: 'Política de privacidad | Coolnetworks',
        description: 'Política de privacidad de Coolnetworks: tratamiento de datos personales, finalidades, base jurídica, conservación y ejercicio de derechos conforme al RGPD.',
        kicker: 'Legal',
        h1: 'Política de privacidad',
        lead: 'Cómo tratamos los datos personales que nos facilitas a través de los formularios de este sitio web.',
        sections: [
            { type: 'text', title: 'Responsable del tratamiento', body: [`${company.name}, ${company.city} (${company.country}). Correo de contacto para privacidad: ${company.email}. Datos identificativos completos pendientes de cumplimentar por el titular.`] },
            { type: 'list', title: 'Información sobre el tratamiento', intro: 'Los formularios de diagnóstico y contacto recogen datos de contacto profesional y la información que decidas facilitar sobre tu empresa. Estructura preparada para los textos definitivos:', items: ['Finalidades del tratamiento (atender solicitudes, elaborar propuestas)', 'Base jurídica del tratamiento', 'Plazos de conservación', 'Destinatarios y encargados de tratamiento', 'Transferencias internacionales, si aplican', 'Derechos de acceso, rectificación, supresión, oposición, limitación y portabilidad', 'Reclamación ante la Agencia Española de Protección de Datos'] },
            { type: 'note', title: 'Aviso', text: 'Los textos definitivos deben ser revisados por asesoría jurídica y adaptados a los tratamientos reales de la empresa.' },
        ],
    },

    '/legal/cookies': {
        title: 'Política de cookies | Coolnetworks',
        description: 'Política de cookies de Coolnetworks: tipos de cookies, finalidad, gestión del consentimiento y cómo configurar tus preferencias.',
        kicker: 'Legal',
        h1: 'Política de cookies',
        lead: 'Información sobre las cookies y tecnologías similares utilizadas en este sitio web y cómo gestionar tu consentimiento.',
        sections: [
            { type: 'text', title: 'Estado actual', body: ['Este sitio no activa cookies de analítica, publicidad ni personalización hasta que el usuario presta su consentimiento. La configuración de medición (Google Analytics 4, Google Tag Manager) está preparada para activarse únicamente tras el consentimiento.'] },
            { type: 'list', title: 'Contenidos preparados', items: ['Definición y tipología de cookies utilizadas', 'Tabla de cookies con finalidad, titularidad y caducidad', 'Base jurídica y gestión del consentimiento', 'Instrucciones para revocar o modificar el consentimiento', 'Configuración en los principales navegadores'] },
            { type: 'note', title: 'Aviso', text: 'La tabla de cookies debe reflejar las cookies realmente instaladas en el momento de la publicación y ser revisada por asesoría jurídica.' },
        ],
    },
};

export const diagnostics = {
    it: {
        slug: 'it',
        name: 'Diagnóstico IT',
        title: 'Diagnóstico IT | Evaluación de infraestructura tecnológica',
        description: 'Diagnóstico IT gratuito. Evaluamos tu infraestructura, identificamos problemas y proponemos mejoras.',
        lead: 'Revisamos el estado de tu infraestructura, tu soporte y tus copias, y te devolvemos un plan priorizado.',
        points: ['Inventario y estado de servidores, red y puestos', 'Situación del soporte y de las incidencias recurrentes', 'Copias de seguridad y capacidad real de restauración', 'Riesgos operativos y dependencia de personas concretas'],
        fields: [
            { key: 'company', label: 'Nombre de la empresa', type: 'text', required: true },
            { key: 'sector', label: 'Sector', type: 'text', required: true },
            { key: 'situation', label: 'Número de empleados', type: 'text', required: true },
            { key: 'goal', label: 'Principales desafíos', type: 'textarea', required: true },
            { key: 'contact', label: 'Email o teléfono', type: 'text', required: true, placeholder: 'email@empresa.com o teléfono', max: 200, full: true },
        ],
        cta: 'Solicitar diagnóstico IT',
    },
    ciberseguridad: {
        slug: 'ciberseguridad',
        name: 'Diagnóstico de Ciberseguridad',
        title: 'Diagnóstico de ciberseguridad | Evaluación de seguridad',
        description: 'Diagnóstico de ciberseguridad gratuito. Evaluamos tu nivel de seguridad e identificamos vulnerabilidades.',
        lead: 'Medimos tu exposición real y te entregamos hallazgos priorizados por riesgo e impacto de negocio.',
        points: ['Exposición externa y servicios publicados', 'Identidades, privilegios y doble factor', 'Protección del puesto y de los servidores', 'Copias resistentes y capacidad de recuperación'],
        fields: [
            { key: 'company', label: 'Nombre de la empresa', type: 'text', required: true },
            { key: 'sector', label: 'Sector', type: 'text', required: true },
            { key: 'situation', label: 'Nivel actual de seguridad', type: 'text', required: true },
            { key: 'goal', label: 'Principales preocupaciones', type: 'textarea', required: true },
            { key: 'contact', label: 'Email o teléfono', type: 'text', required: true, placeholder: 'email@empresa.com o teléfono', max: 200, full: true },
        ],
        cta: 'Solicitar diagnóstico de ciberseguridad',
    },
    compliance: {
        slug: 'compliance',
        name: 'Diagnóstico de Compliance',
        title: 'Diagnóstico de compliance | Evaluación de cumplimiento normativo',
        description: 'Diagnóstico de compliance gratuito. Evaluamos tu situación respecto a ISO 27001, TISAX, ENS, PECAL e ISO 9001.',
        lead: 'Aclaramos la certificación o marco objetivo y medimos tu madurez real frente a los requisitos.',
        points: ['Certificación o marco objetivo (ISO 27001, ISO 9001, TISAX, ENS, PECAL)', 'Alcance y situación documental actual', 'GAP inicial y esfuerzo estimado', 'Plan de adecuación por fases'],
        fields: [
            { key: 'company', label: 'Nombre de la empresa', type: 'text', required: true },
            { key: 'sector', label: 'Sector', type: 'text', required: true },
            { key: 'situation', label: 'Certificación objetivo', type: 'text', required: true },
            { key: 'goal', label: 'Situación actual', type: 'textarea', required: true },
            { key: 'contact', label: 'Email o teléfono', type: 'text', required: true, placeholder: 'email@empresa.com o teléfono', max: 200, full: true },
        ],
        cta: 'Solicitar diagnóstico de compliance',
    },
    'ia-360': {
        slug: 'ia-360',
        name: 'Diagnóstico IA 360',
        title: 'Diagnóstico IA 360 | Evaluación de oportunidades de IA',
        description: 'Diagnóstico IA 360 gratuito. Evaluamos oportunidades de Inteligencia Artificial en tu empresa.',
        lead: 'Identificamos dónde la IA puede ahorrar tiempo o coste en tu empresa, y dónde no conviene.',
        points: ['Procesos candidatos y volumen real', 'Estado y accesibilidad de los datos', 'Herramientas actuales y riesgos de uso no gobernado', 'Roadmap priorizado con estimación de impacto'],
        fields: [
            { key: 'company', label: 'Nombre de la empresa', type: 'text', required: true },
            { key: 'sector', label: 'Sector', type: 'text', required: true },
            { key: 'situation', label: 'Procesos a automatizar', type: 'textarea', required: true },
            { key: 'goal', label: 'Presupuesto estimado', type: 'text', required: false },
            { key: 'contact', label: 'Email o teléfono', type: 'text', required: true, placeholder: 'email@empresa.com o teléfono', max: 200, full: true },
        ],
        cta: 'Solicitar diagnóstico IA 360',
    },
};

export const caseStudyStructure = [
    { title: 'Problema', text: 'El punto de partida expresado en términos de negocio: qué no funcionaba y a quién afectaba.' },
    { title: 'Situación inicial', text: 'Estado técnico y organizativo verificado al inicio del proyecto.' },
    { title: 'Solución', text: 'Qué se decidió hacer y por qué se descartaron otras alternativas.' },
    { title: 'Tecnologías', text: 'Componentes y herramientas utilizadas en la implantación.' },
    { title: 'Proceso', text: 'Fases, plazos y forma de trabajo con el equipo del cliente.' },
    { title: 'Resultado', text: 'Resultado medible y situación posterior, con seguimiento acordado.' },
];

export const resourceCategories = [
    'IT',
    'Ciberseguridad',
    'ISO 27001',
    'ISO 9001',
    'TISAX',
    'ENS',
    'PECAL',
    'Inteligencia Artificial',
    'Microsoft 365',
    'Automatización',
    'Seguridad empresarial',
];

export const articles = [];
export const caseStudies = [];
