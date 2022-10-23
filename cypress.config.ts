import { defineConfig } from 'cypress';
let baseUrl = process.env.CI
  ? 'https://kiraburova.github.io/music-app/'
  : 'http://localhost:3000';

export default defineConfig({
  e2e: {
    baseUrl: baseUrl,
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});
