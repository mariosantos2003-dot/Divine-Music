import { defineConfig } from 'astro/config';

import tailwind from "@astrojs/tailwind";


// https://astro.build/config
export default defineConfig({
  integrations: [tailwind()],
  include: ["**/*.html", "**/*.css", "**/*.js", "**/*.otf"], // Incluye la fuente en la construcción
});