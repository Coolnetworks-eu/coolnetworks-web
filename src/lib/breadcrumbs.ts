import { breadcrumbLabels, company } from '../content/site.js';

const label = (segment: string) =>
  (breadcrumbLabels as Record<string, string>)[segment] ||
  segment.replace(/-/g, ' ').replace(/^\w/, (c) => c.toUpperCase());

export function breadcrumbTrail(path: string, current?: string) {
  const segments = path.replace(/\/+$/, '').split('/').filter(Boolean);
  return segments.map((segment, index) => ({
    name: index === segments.length - 1 && current ? current : label(segment),
    to: `/${segments.slice(0, index + 1).join('/')}`,
  }));
}

export function breadcrumbSchema(path: string, current?: string) {
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [{ name: 'Inicio', to: '/' }, ...breadcrumbTrail(path, current)].map((item, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      name: item.name,
      item: `${company.url}${item.to === '/' ? '' : item.to}`,
    })),
  };
}
