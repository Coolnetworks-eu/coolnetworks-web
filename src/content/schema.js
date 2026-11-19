// Portado de components/site/Layout.jsx (Horizons). Se emite en todas las páginas.
import { company } from './site.js';

export const organizationSchema = {
    '@context': 'https://schema.org',
    '@graph': [
        {
            '@type': ['Organization', 'LocalBusiness'],
            '@id': `${company.url}/#organization`,
            name: company.name,
            legalName: company.legalName,
            taxId: company.nif,
            slogan: company.tagline,
            description: 'Consultoría tecnológica especializada en IT, ciberseguridad, compliance (ISO 27001, TISAX, ENS, PECAL) e Inteligencia Artificial para empresas en Zaragoza y España.',
            url: company.url,
            logo: {
                '@type': 'ImageObject',
                url: company.logo,
                width: 400,
                height: 100,
            },
            image: company.logo,
            email: company.email,
            telephone: `+${company.whatsappNumber}`,
            contactPoint: [
                {
                    '@type': 'ContactPoint',
                    contactType: 'customer support',
                    telephone: `+${company.whatsappNumber}`,
                    email: company.email,
                    areaServed: { '@type': 'Country', name: 'España' },
                    availableLanguage: ['Spanish', 'English'],
                },
                {
                    '@type': 'ContactPoint',
                    contactType: 'sales',
                    telephone: company.whatsapp,
                    areaServed: { '@type': 'Country', name: 'España' },
                    availableLanguage: ['Spanish'],
                },
            ],
            areaServed: [
                { '@type': 'City', name: 'Zaragoza' },
                { '@type': 'AdministrativeArea', name: 'Aragón' },
                { '@type': 'Country', name: 'España' },
            ],
            address: {
                '@type': 'PostalAddress',
                streetAddress: company.streetAddress,
                postalCode: company.postalCode,
                addressLocality: 'Los Fayos',
                addressRegion: company.region,
                addressCountry: 'ES',
            },
            knowsAbout: [
                'IT gestionado',
                'Soporte IT',
                'Ciberseguridad empresarial',
                'ISO 27001',
                'TISAX',
                'ENS',
                'PECAL',
                'ISO 9001',
                'Inteligencia Artificial',
                'Automatización de procesos',
                'Microsoft 365',
            ],
            hasOfferCatalog: {
                '@type': 'OfferCatalog',
                name: 'Servicios Coolnetworks',
                itemListElement: [
                    { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Servicios IT gestionados', url: `${company.url}/it` } },
                    { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Ciberseguridad empresarial', url: `${company.url}/ciberseguridad` } },
                    { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Compliance y auditorías', url: `${company.url}/compliance` } },
                    { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Inteligencia Artificial para empresas', url: `${company.url}/inteligencia-artificial` } },
                ],
            },
        },
        {
            '@type': 'WebSite',
            '@id': `${company.url}/#website`,
            url: company.url,
            name: company.name,
            description: 'Consultoría tecnológica especializada en IT, ciberseguridad, compliance e Inteligencia Artificial para empresas en Zaragoza y España.',
            inLanguage: 'es-ES',
            publisher: { '@id': `${company.url}/#organization` },
            potentialAction: {
                '@type': 'SearchAction',
                target: `${company.url}/recursos/blog?q={search_term_string}`,
                'query-input': 'required name=search_term_string',
            },
        },
    ],
};
