import { defineConfig } from 'cypress';
let baseUrl = process.env.CI
  ? 'http://staging.example.com'
  : 'https://kiraburova.github.io/music-app/';

export default defineConfig({
  e2e: {
    baseUrl: baseUrl,
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});
