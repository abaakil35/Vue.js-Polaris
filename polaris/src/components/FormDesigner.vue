<template>
  <BlockStack gap="600">
    <Text variant="headingLg" as="h1" fontWeight="bold"
      >Concepteur de Formulaire</Text
    >

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
          <div class="selection-card-wrapper" @click="selectMode('integre')">
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
      </div>

      <!-- Info Banner based on selection -->
      <div class="banner-container">
        <Banner status="info" :dismissible="false">
          <BlockStack>
            <InlineStack gap="200">
              <div class="banner-icon">
                <span v-html="CircleInformationMajor"></span>
              </div>
              <div v-if="selectedMode === 'popup'">
                Lorsque vos clients cliquent sur le
                <strong>Bouton d'Achat</strong> de l'application, le formulaire
                s'ouvre sous la forme d'une fenêtre contextuelle sur la page.
              </div>
              <div v-else-if="selectedMode === 'integre'">
                Vos clients verront le formulaire intégré directement sur leurs
                pages afin qu'ils n'aient pas à cliquer sur un bouton pour
                l'ouvrir.
              </div>
            </InlineStack>
          </BlockStack>
        </Banner>
      </div>
    </BlockStack>
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

// Simple object-based icons for Polaris Vue Icon component
const CircleInformationMajor = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><circle cx="10" cy="10" r="9" fill="none" stroke="currentColor"/><circle cx="10" cy="6" r="1" fill="currentColor"/><rect x="9" y="9" width="2" height="7" rx="1" fill="currentColor"/></svg>`;

const WindowMinor = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><rect x="3" y="3" width="14" height="14" rx="1" stroke="currentColor" fill="none" stroke-width="1.5"/><line x1="7" y1="7" x2="13" y2="7" stroke="currentColor" stroke-width="1.5"/></svg>`;

const PageMinor = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M4 4C4 3.44772 4.44772 3 5 3H12L16 7V16C16 16.5523 15.5523 17 15 17H5C4.44772 17 4 16.5523 4 16V4Z" stroke="currentColor" fill="none" stroke-width="1.5"/><path d="M12 3V7H16" stroke="currentColor" stroke-width="1.5"/></svg>`;

// State for selected form mode
const selectedMode = ref("popup"); // Default to popup option

// Function to select form mode
function selectMode(mode) {
  selectedMode.value = mode;
}
</script>

<style scoped>
.form-selection-container {
  width: 100%;
  margin-top: 10px;
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
  padding: 30px 20px;
  height: 100%;
  background-color: white;
  transition: all 0.2s ease;
}

.selected {
  background-color: #f9fafb;
  border-color: #008060;
  box-shadow: 0 0 0 2px #008060;
}

.card-content {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 16px;
}

.icon-container {
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #f4f6f8;
  border-radius: 50%;
  width: 56px;
  height: 56px;
}

.icon-container span {
  display: flex;
  width: 24px;
  height: 24px;
}

.icon-container svg {
  width: 100%;
  height: 100%;
  color: #5c5f62;
}

.banner-container {
  margin-top: 16px;
}

.banner-content {
  display: flex;
  align-items: center;
  gap: 8px;
}

.banner-icon {
  color: #00565e;
  display: flex;
  align-items: center;
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
}
</style>
