<template>
  <BlockStack gap="600">
    <Text variant="headingLg" as="h1" fontWeight="bold"
      >Concepteur de Formulaire</Text
    >

    <div class="design-preview-layout">
      <div class="design-section">
        <BlockStack gap="400">
          <Text variant="headingMd" as="h2"
            >1. Sélectionnez votre mode de formulaire</Text
          >

          <div class="form-selection-container">
            <div class="selection-cards">
              <!-- Popup Option Card -->
              <div class="selection-card-wrapper" @click="selectMode('popup')">
                <div
                  :class="[
                    'card-container',
                    selectedMode === 'popup' ? 'selected' : '',
                  ]"
                >
                  <div class="card-content">
                    <div class="icon-container">
                      <span v-html="WindowMinor"></span>
                    </div>
                    <Text variant="bodyMd" fontWeight="semibold">Popup</Text>
                  </div>
                </div>
              </div>

              <!-- Integre Option Card -->
              <div
                class="selection-card-wrapper"
                @click="selectMode('integre')"
              >
                <div
                  :class="[
                    'card-container',
                    selectedMode === 'integre' ? 'selected' : '',
                  ]"
                >
                  <div class="card-content">
                    <div class="icon-container">
                      <span v-html="PageMinor"></span>
                    </div>
                    <Text variant="bodyMd" fontWeight="semibold">Intégré</Text>
                  </div>
                </div>
              </div>
            </div>
            <div v-if="showBanner" class="banner-container">
              <Banner status="info" :dismissible="false">
                <div class="banner-content-wrapper">
                  <div class="banner-text" v-if="selectedMode === 'popup'">
                    Lorsque vos clients cliquent sur le
                    <strong>Bouton d'Achat</strong> de l'application, le
                    formulaire s'ouvre sous la forme d'une fenêtre .
                  </div>
                  <div
                    class="banner-text"
                    v-else-if="selectedMode === 'integre'"
                  >
                    Vos clients verront le formulaire intégré directement sur
                    leurs pages afin qu'ils n'aient pas à cliquer sur un bouton
                    pour l'ouvrir.
                  </div>
                  <button
                    class="banner-close-button"
                    @click="dismissBanner"
                    aria-label="Fermer"
                  >
                    <span v-html="CancelMinor"></span>
                  </button>
                </div>
              </Banner>
            </div>
          </div>

          <!-- Info Banner based on selection -->
        </BlockStack>
      </div>

      <div class="preview-section">
        <Text variant="headingMd" as="h2">Aperçu en direct :</Text>
        <div class="preview-container">
          <!-- Preview content will go here -->
        </div>
      </div>
    </div>
  </BlockStack>
</template>

<script setup>
import { ref } from "vue";
// Import components
import {
  Banner,
  BlockStack,
  Card,
  Icon,
  InlineStack,
  Text,
} from "@ownego/polaris-vue";

// SVG icons for the component
const CircleInformationMajor = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><circle cx="10" cy="10" r="9" fill="none" stroke="currentColor" stroke-width="1.5"/><circle cx="10" cy="6" r="1" fill="currentColor"/><rect x="9" y="9" width="2" height="7" rx="1" fill="currentColor"/></svg>`;

const WindowMinor = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><rect x="3" y="3" width="14" height="14" rx="1" stroke="currentColor" fill="none"/><line x1="7" y1="7" x2="13" y2="7" stroke="currentColor"/></svg>`;

const PageMinor = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M4 4C4 3.44772 4.44772 3 5 3H12L16 7V16C16 16.5523 15.5523 17 15 17H5C4.44772 17 4 16.5523 4 16V4Z" stroke="currentColor" fill="none"/><path d="M12 3V7H16" stroke="currentColor"/></svg>`;

const CancelMinor = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M6.707 6.707a1 1 0 0 0-1.414 1.414L8.586 10l-3.293 3.293a1 1 0 1 0 1.414 1.414L10 11.414l3.293 3.293a1 1 0 0 0 1.414-1.414L11.414 10l3.293-3.293a1 1 0 0 0-1.414-1.414L10 8.586 6.707 5.293z" fill="currentColor"/></svg>`;

// State for selected form mode and banner visibility
const selectedMode = ref("popup"); // Default to popup option
const showBanner = ref(true); // State to control banner visibility

// Function to select form mode
function selectMode(mode) {
  selectedMode.value = mode;
}

// Function to dismiss the banner
function dismissBanner() {
  showBanner.value = false;
}
</script>

<style scoped>
.form-selection-container {
  width: 100%;
  margin-top: 10px;
  background-color: white;
  border: 1px solid #dfe3e8;
  border-radius: 8px;
  padding: 20px;
}

.selection-cards {
  display: flex;
  gap: 16px;
}

.selection-card-wrapper {
  flex: 1;
  cursor: pointer;
}

.card-container {
  border: 1px solid #dfe3e8;
  border-radius: 8px;
  padding: 20px 16px;
  height: 100%;
  background-color: white;
  transition: all 0.2s ease;
  display: flex;
  justify-content: center;
}

.selected {
  background-color: #f9fafb;
  border-color: #008060;
  box-shadow: 0 0 0 2px #008060;
}

.selected .icon-container {
  background-color: rgba(0, 128, 96, 0.1);
}

.selected .icon-container svg {
  color: #008060;
}

.card-content {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 8px;
  padding: 12px 0;
}

.icon-container {
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #f4f6f8;
  border-radius: 50%;
  width: 64px;
  height: 64px;
  margin-bottom: 8px;
}

.icon-container span {
  display: flex;
  width: 28px;
  height: 28px;
}

.icon-container svg {
  width: 100%;
  height: 100%;
  color: #5c5f62;
  stroke-width: 1.75;
}

.banner-container {
  margin-top: 16px;
}

.banner-content-wrapper {
  display: flex;
  align-items: flex-start;
  gap: 12px;
  padding: 8px 0;
  width: 100%;
}

.banner-icon {
  color: #00565e;
  display: flex;
  align-items: center;
  flex-shrink: 0;
  margin-top: 2px;
}

.banner-icon span {
  display: inline-flex;
  width: 20px;
  height: 20px;
}

.banner-icon svg {
  width: 100%;
  height: 100%;
  color: #00565e;
  stroke-width: 1.5;
}

.banner-text {
  font-size: 14px;
  line-height: 20px;
  color: #202223;
  flex-grow: 1;
}

.banner-close-button {
  background: transparent;
  border: none;
  cursor: pointer;
  padding: 4px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #5c5f62;
  border-radius: 4px;
  flex-shrink: 0;
  margin-left: auto;
}

.banner-close-button:hover {
  background-color: rgba(0, 0, 0, 0.05);
  color: #202223;
}

.banner-close-button span {
  display: flex;
  width: 16px;
  height: 16px;
}

.banner-close-button svg {
  width: 100%;
  height: 100%;
}

/* Layout for design and preview sections */
.design-preview-layout {
  display: flex;
  gap: 20px;
}

.design-section {
  flex: 3;
  min-width: 0;
}

.preview-section {
  flex: 2;
  min-width: 0;
}

.preview-container {
  height: 500px;
  background-color: #f0f0f0;
  border-radius: 8px;
  overflow: hidden;
  margin-top: 16px;
}
</style>
