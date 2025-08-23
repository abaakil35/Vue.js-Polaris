import { createApp } from "vue";
import App from "./App.vue";
import PolarisVue from "@ownego/polaris-vue";
import "@ownego/polaris-vue/dist/style.css";
import './assets/main.css'


const app = createApp(App);

// Configure Polaris Vue with proper breakpoints and i18n settings
app.use(PolarisVue, {
  breakpoints: {
    // Define the breakpoints for different screen sizes
    // These values match Polaris's default breakpoints
    xs: { min: 0, max: 767 },
    sm: { min: 768, max: 1023 },
    md: { min: 1024, max: 1199 },
    lg: { min: 1200, max: Infinity },
  },
  i18n: {
    // Provide translation function
    translate: (id, replacements = {}) => {
      // Get the translation for the given ID
      const translations = {
        // Common translations
        "Polaris.Common.close": "Fermer",
        "Polaris.Button.spinnerAccessibilityLabel": "Chargement...",
        "Polaris.Banner.dismissButton": "Ignorer",
        // Add more translations as needed
      };

      let translation = translations[id] || id;

      // Replace placeholders with actual values
      Object.keys(replacements).forEach((key) => {
        translation = translation.replace(`{${key}}`, replacements[key]);
      });

      return translation;
    },
  },
});

app.mount("#app");
