// Portado de lib/pages.js: todas las páginas que pinta la plantilla estándar (src/pages/[...slug].astro).
import { servicesPages, sectorPages } from '../content/contentServices.js';
import { compliancePages, aiPages } from '../content/contentCompliance.js';
import { aiExtraPages } from '../content/contentAiExtra.js';
import { miscPages } from '../content/contentMisc.js';

export const pages: Record<string, any> = {
  ...servicesPages,
  ...compliancePages,
  ...aiPages,
  ...aiExtraPages,
  ...sectorPages,
  ...miscPages,
};
