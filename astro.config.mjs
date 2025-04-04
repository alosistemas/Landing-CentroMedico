import { defineConfig } from 'astro/config';

export default defineConfig({
  site: "https://github.com/alosistemas/Landing-CentroMedico",
  base: "Landing-CentroMedico",
  output: 'static',
  build: {
    outDir: './dist',
  },
});
