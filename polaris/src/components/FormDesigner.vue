<template>
  <BlockStack gap="600">
    <Text variant="headingLg" as="h1" fontWeight="bold" style="margin-top: 10px;"
      >Form Builder :</Text
    >

    <div class="design-preview-layout">
      <div class="design-section">
        <BlockStack gap="400" class="left-stack">
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
          <!-- Help / Contact card (appears at the bottom of the selection container) -->

          <!-- Bouton d'Achat Customization Section -->
          <div class="form-selection-container">
            <div class="button-customization-header">
              <div>
                <Text variant="headingMd" as="h2">Bouton d'Achat</Text>
                <Text variant="bodyMd" as="p"
                  >Personnalisez le Bouton d'Achat du formulaire</Text
                >
              </div>
              <div class="preview-button-wrapper">
                <Button @click="toggleButtonPreview">
                  Preview
                  <template #icon>
                    <span v-html="toggleIcon"></span>
                  </template>
                </Button>
              </div>
            </div>

            <div
              v-if="showButtonCustomization"
              class="button-customization-options"
            >
              <!-- Text customization -->
              <div class="customization-row">
                <div class="customization-label">
                  <Text variant="bodyMd">Texte du bouton</Text>
                </div>
                <div class="customization-input">
                  <TextField v-model="buttonText" />
                </div>
              </div>

              <!-- Sous-titre customization -->
              <div class="customization-row">
                <div class="customization-label">
                  <Text variant="bodyMd">Sous-titre du bouton</Text>
                </div>
                <div class="customization-input">
                  <TextField v-model="buttonSubtitle" />
                </div>
              </div>

              <!-- Animation option -->
              <div class="customization-row">
                <div class="customization-label">
                  <Text variant="bodyMd">Animation du bouton</Text>
                </div>
                <div class="customization-input">
                  <Select
                    v-model="buttonAnimation"
                    :options="animationOptions"
                  />
                </div>
              </div>

              <!-- Icon option -->
              <div class="customization-row">
                <div class="customization-label">
                  <Text variant="bodyMd">Icône du bouton</Text>
                </div>
                <div class="customization-input">
                  <Select v-model="buttonIcon" :options="iconOptions" />
                </div>
              </div>

              <!-- Button Position -->
              <div class="customization-row">
                <div class="customization-label">
                  <Text variant="bodyMd">Position du bouton collant</Text>
                </div>
                <div class="customization-input">
                  <Select v-model="buttonPosition" :options="positionOptions" />
                </div>
              </div>

              <!-- Background color -->
              <div class="customization-row">
                <div class="customization-label">
                  <Text variant="bodyMd">Couleur de l'arrière plan</Text>
                </div>
                <div class="customization-input color-input">
                  <div
                    class="color-preview"
                    :style="{ backgroundColor: buttonBgColor }"
                  ></div>
                  <div class="color-input-group">
                    <input
                      type="color"
                      v-model="buttonBgColor"
                      class="color-picker"
                    />
                    <TextField
                      v-model="buttonBgColor"
                      placeholder="rgba(0,0,0,1)"
                    />
                  </div>
                </div>
              </div>

              <!-- Text size slider -->
              <div class="customization-row">
                <div class="customization-label">
                  <Text variant="bodyMd">Taille du texte</Text>
                </div>
                <div class="customization-input">
                  <RangeSlider v-model="textSize" min="12" max="24" />
                </div>
              </div>

              <!-- Text color -->
              <div class="customization-row">
                <div class="customization-label">
                  <Text variant="bodyMd">Couleur du texte</Text>
                </div>
                <div class="customization-input color-input">
                  <div
                    class="color-preview"
                    :style="{ backgroundColor: buttonTextColor }"
                  </div>
                  <div class="color-input-group">
                    <input
                      type="color"
                      v-model="buttonTextColor"
                      class="color-picker"
                    />
                    <TextField
                      v-model="buttonTextColor"
                      placeholder="#FFFFFF"
                    />
                  </div>
                </div>
              </div>

              <!-- Border radius -->
              <div class="customization-row">
                <div class="customization-label">
                  <Text variant="bodyMd">Rayon de bordure</Text>
                </div>
                <div class="customization-input">
                  <input
                    type="number"
                    v-model.number="borderRadius"
                    min="0"
                    class="number-input"
                  />
                </div>
              </div>

              <!-- Border width -->
              <div class="customization-row">
                <div class="customization-label">
                  <Text variant="bodyMd">Largeur de la bordure</Text>
                </div>
                <div class="customization-input">
                  <input
                    type="number"
                    v-model.number="borderWidth"
                    min="0"
                    class="number-input"
                  />
                </div>
              </div>

              <!-- Border color -->
              <div class="customization-row">
                <div class="customization-label">
                  <Text variant="bodyMd">Couleur de la bordure</Text>
                </div>
                <div class="customization-input color-input">
                  <div
                    class="color-preview"
                    :style="{ backgroundColor: borderColor }"
                  ></div>
                  <div class="color-input-group">
                    <input
                      type="color"
                      v-model="borderColor"
                      class="color-picker"
                    />
                    <TextField
                      v-model="borderColor"
                      placeholder="rgba(0,0,0,1)"
                    />
                  </div>
                </div>
              </div>

              <!-- Shadow -->
              <div class="customization-row">
                <div class="customization-label">
                  <Text variant="bodyMd">Ombre</Text>
                </div>
                <div class="customization-input">
                  <TextField
                    v-model="boxShadow"
                    placeholder="ex: 0 4px 12px rgba(0,0,0,0.15)"
                  />
                </div>
              </div>

              <!-- Sticky on mobile -->
              <div class="customization-row">
                <div class="customization-input">
                  <label class="toggle-label">
                    <input type="checkbox" v-model="stickyMobile" />
                    <span
                      >Activer le bouton collant sur les appareils mobiles
                      (uniquement sur les pages de produits)</span
                    >
                  </label>
                </div>
              </div>
            </div>

            <div v-if="showHelpCard" class="selection-help-card">
              <div class="selection-help-inner">
                <div class="selection-help-icon">
                  <span v-html="CircleInformationMajor"></span>
                </div>
                <div class="selection-help-body">
                  <div class="selection-help-header">
                    <Text variant="headingMd" as="h3" fontWeight="semibold"
                      >Vous avez besoin de plus de personnalisations ?</Text
                    >
                    <button
                      class="selection-help-close"
                      @click="showHelpCard = false"
                      aria-label="Fermer"
                    >
                      <span v-html="CancelMinor"></span>
                    </button>
                  </div>
                  <div class="selection-help-text">
                    Si vous n'aimez pas la
                    <strong
                      >la façon dont le bouton d'achat apparaît sur votre
                      boutique</strong
                    >
                    ou si vous souhaitez
                    <strong>plus de personnalisations</strong>, n'hésitez pas à
                    nous contacter ! Nos spécialistes de l'assistance vous
                    aideront à personnaliser le bouton d'achat pour qu'il
                    réponde pleinement à vos besoins !
                  </div>
                  <div class="selection-help-actions">
                    <button class="selection-contact-button">
                      Contactez-nous
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <!-- Info Banner based on selection -->

          <!-- Country selector moved into the left design column so it scrolls with the left column -->
          <Text as="h2" variant="headingMd" fontWeight="bold">
            2. Sélectionnez votre pays de formulaire
          </Text>
          <div class="country-selection-container">
            <Card padding="500" rounded="large">
              <BlockStack gap="400">
                <BlockStack gap="200">
                  <Text as="label" variant="bodyMd" fontWeight="bold" style="font-weight: bold;">Pays</Text>
                  <Select v-model="selectedCountry" :options="countryOptions" />
                  <Text as="p" variant="bodySm" tone="subdued" fontStyle="italic">
                    Toutes les commandes passées avec le formulaire seront enregistrées
                    avec le pays que vous sélectionnez ici. Si vous ne trouvez pas votre
                    pays, n'hésitez pas à nous contacter, notre équipe d'assistance
                    ajoutera votre pays immédiatement !
                  </Text>
                </BlockStack>
                <Divider />
                <BlockStack gap="200">
                  <Text as="h3" variant="bodyLg" fontWeight="bold">
                    Vendez-vous dans plusieurs pays ?
                  </Text>
                  <Text as="p" variant="bodyMd">
                    Activez plusieurs pays sur le formulaire ici :
                  </Text>
                  <Button
                    size="large"
                    variant="primary"
                    @click="onMultiCountry"
                    :style="multiCountryActive ? { backgroundColor: '#d9534f', color: '#fff', borderColor: '#c12e2a' } : {}"
                  >
                    {{ multiCountryActive ? 'Désactiver le multi-pays' : 'Activer le multi-pays' }}
                  </Button>
                </BlockStack>
              </BlockStack>
            </Card>
          </div>

          <!-- 3. Personnalisez votre formulaire (Polaris Card) -->
          <Text variant="headingMd" as="h2" fontWeight="bold">3. Personnalisez votre formulaire</Text>
          <div class="personalize-container">
            <Card padding="500" rounded="large" class="personalize-card">
              <BlockStack gap="300">

                <div class="customize-card-body">
                  <div class="status-list">
                    <div class="status-row">
                      <span class="status-box status-gray" aria-hidden="true"></span>
                      <div class="status-text">Les blocs gris sont <strong>désactivés</strong> sur votre formulaire. Utilisez le bouton en forme d'œil pour les activer.</div>
                    </div>

                    <div class="status-row">
                      <span class="status-box status-white" aria-hidden="true"></span>
                      <div class="status-text">Les blocs blancs sont <strong>actifs</strong> sur votre formulaire.</div>
                    </div>

                    <div class="status-row">
                      <span class="status-box status-blue" aria-hidden="true"></span>
                      <div class="status-text">Les blocs bleus sont activés lorsque vous faites glisser une carte sur le formulaire. Relâchez la carte pour compléter l'action.</div>
                    </div>
                  </div>

                  <div class="actions-list">
                    <div class="action-row">
                      <span class="action-icon" v-html="PencilMinor"></span>
                      <div class="action-text">Cliquez sur le bouton <strong>crayon</strong> pour modifier un bloc.</div>
                    </div>

                    <div class="action-row">
                      <span class="action-icon" v-html="GripMinor"></span>
                      <div class="action-text">Appuyez et déplacez le bouton <strong>tracteur</strong> pour déplacer un bloc.</div>
                    </div>

                    <div class="action-row">
                      <span class="action-icon" v-html="ArrowsMinor"></span>
                      <div class="action-text">Cliquez sur les boutons <strong>flèches</strong> pour modifier la position d'un bloc.</div>
                    </div>
                  </div>
                </div>
              </BlockStack>
            </Card>
          </div>

          <!-- Draggable blocks UI -->
          <DraggableBlocks />

          <!-- Form Style Section at the bottom of the left column -->
          <BlockStack gap="200" class="form-style-bottom-container">
            <FormStyle />
            <GenericErrorTexts />
          </BlockStack>
        </BlockStack>
      </div>

      <div class="preview-section">
        <Text variant="headingMd" as="h2">Aperçu en direct :</Text>
        <RightPreveiwForm :settings="buttonSettings" />
        <div class="preview-bottom-actions">
          <Button variant="primary" size="large">Confirmer le résultat</Button>
          <Button variant="secondary" size="large">Annuler</Button>
        </div>

      </div>

    </div>


  </BlockStack>

</template>

<script setup>
import { ref, computed } from "vue";
import RightPreveiwForm from './RightPreveiwForm.vue'
import DraggableBlocks from './DraggableBlocks.vue'
import FormStyle from './FormStyle.vue'
import GenericErrorTexts from './GenericErrorTexts.vue'
// Country selector state and logic (inlined from CountrySelector.vue)
const selectedCountry = ref("Morocco");
const countryOptions = [
  { label: "Morocco", value: "Morocco" },
  { label: "France", value: "France" },
  { label: "Algeria", value: "Algeria" },
  { label: "Tunisia", value: "Tunisia" },
  { label: "Other", value: "Other" },
];
// Multi-country activation state
const multiCountryActive = ref(false);

function onMultiCountry() {
  multiCountryActive.value = !multiCountryActive.value;
}
// Import components
import {
  Banner,
  BlockStack,
  Button,
  Card,
  Icon,
  InlineStack,
  RangeSlider,
  Select,
  Text,
  TextField,
} from "@ownego/polaris-vue";

// SVG icons for the component
const CircleInformationMajor = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><circle cx="10" cy="10" r="9" fill="none" stroke="currentColor" stroke-width="1.5"/><circle cx="10" cy="6" r="1" fill="currentColor"/><rect x="9" y="9" width="2" height="7" rx="1" fill="currentColor"/></svg>`;

const WindowMinor = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><rect x="3" y="3" width="14" height="14" rx="1" stroke="currentColor" fill="none"/><line x1="7" y1="7" x2="13" y2="7" stroke="currentColor"/></svg>`;

const PageMinor = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M4 4C4 3.44772 4.44772 3 5 3H12L16 7V16C16 16.5523 15.5523 17 15 17H5C4.44772 17 4 16.5523 4 16V4Z" stroke="currentColor" fill="none"/><path d="M12 3V7H16" stroke="currentColor"/></svg>`;

const CancelMinor = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M6.707 6.707a1 1 0 0 0-1.414 1.414L8.586 10l-3.293 3.293a1 1 0 1 0 1.414 1.414L10 11.414l3.293 3.293a1 1 0 0 0 1.414-1.414L11.414 10l3.293-3.293a1 1 0 0 0-1.414-1.414L10 8.586 6.707 5.293z" fill="currentColor"/></svg>`;

const ChatBubbleMinor = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M2 5.5A3.5 3.5 0 015.5 2h9A3.5 3.5 0 0118 5.5v4A3.5 3.5 0 0114.5 13H8.7L5 16.5V13H5.5A3.5 3.5 0 012 9.5v-4z" fill="currentColor"/></svg>`;

const PencilMinor = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M3 14.25V17h2.75L16.81 5.94l-2.75-2.75L3 14.25zM18.71 4.04a1 1 0 000-1.41l-1.34-1.34a1 1 0 00-1.41 0l-1.83 1.83 2.75 2.75 1.83-1.83z" fill="currentColor"/></svg>`;

const GripMinor = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M6 4a1 1 0 110-2 1 1 0 010 2zm4 0a1 1 0 110-2 1 1 0 010 2zm4 0a1 1 0 110-2 1 1 0 010 2zM6 10a1 1 0 110-2 1 1 0 010 2zm4 0a1 1 0 110-2 1 1 0 010 2zm4 0a1 1 0 110-2 1 1 0 010 2zM6 16a1 1 0 110-2 1 1 0 010 2zm4 0a1 1 0 110-2 1 1 0 010 2zm4 0a1 1 0 110-2 1 1 0 010 2z" fill="currentColor"/></svg>`;

const ArrowsMinor = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M7 3l3 3-3 3V8H3V6h4V3zm6 14l-3-3 3-3v1h4v2h-4v1z" fill="currentColor"/></svg>`;

const ChevronDownMinor = `<svg viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M10 14a.997.997 0 0 1-.707-.293l-5-5a.999.999 0 1 1 1.414-1.414L10 11.586l4.293-4.293a.999.999 0 1 1 1.414 1.414l-5 5A.997.997 0 0 1 10 14z" fill="currentColor"/></svg>`;

const ChevronUpMinor = `<svg viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M15 13a.997.997 0 0 1-.707-.293L10 8.414l-4.293 4.293a.999.999 0 1 1-1.414-1.414l5-5a.999.999 0 0 1 1.414 0l5 5A.999.999 0 0 1 15 13z" fill="currentColor"/></svg>`;

// State for selected form mode and banner visibility
const selectedMode = ref("popup"); // Default to popup option
const showBanner = ref(true); // State to control banner visibility

// Button customization states
const showButtonCustomization = ref(false);
const isButtonVisible = ref(true);
const buttonText = ref("Achetez avec paiement à la livraison");
const buttonSubtitle = ref("");
const buttonAnimation = ref("none");
const buttonIcon = ref("none");
const buttonPosition = ref("none");
const buttonBgColor = ref("rgb(0,0,0)");
const textSize = ref(16);
const buttonTextColor = ref("white");
const borderRadius = ref(4);
const borderWidth = ref(0);
const borderColor = ref("transparent");
const boxShadow = ref("");
const stickyMobile = ref(false);
const showHelpCard = ref(false);

// Options for selects
const animationOptions = [
  { label: "Aucun", value: "none" },
  { label: "Pulse", value: "pulse" },
  { label: "Bounce", value: "bounce" },
  { label: "Shake", value: "shake" },
  { label: "Fade", value: "fade" },
];

const iconOptions = [
  { label: "Aucun", value: "none" },
  { label: "Panier", value: "cart" },
  { label: "Flèche", value: "arrow" },
  { label: "Étoile", value: "star" },
];

const positionOptions = [
  { label: "Fond", value: "bottom" },
  { label: "Haut", value: "top" },
  { label: "Aucun", value: "none" },
];

// Computed properties
const buttonIconDisplay = computed(() => buttonIcon.value !== "none");

const toggleIcon = computed(() => {
  return showButtonCustomization.value ? ChevronUpMinor : ChevronDownMinor;
});

const selectedIconSvg = computed(() => {
  switch (buttonIcon.value) {
    case "cart":
      return `<svg viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
              <path fill-rule="evenodd" d="M17.16 6.42a.75.75 0 0 1 .57.89l-1.37 6.1A2.75 2.75 0 0 1 13.72 16H6.78a2.75 2.75 0 0 1-2.64-2.59L3.26 3.82a1.75 1.75 0 0 0-1.75-1.57H1a.75.75 0 0 1 0-1.5h.51c1.66 0 3.05 1.24 3.24 2.9l.36 3.6h15.13c.41 0 .75.34.75.75 0 .08-.01.16-.04.23l-1.69 5.89a.25.25 0 0 1-.24.18H6.78a.25.25 0 0 1-.24-.19l-.93-4.76.84-10.98zm-.77 1.5H5.32l.59 5.93a1.75 1.75 0 0 0 1.68 1.65h6.82L15.73 9h-1.58c-.5 0-.86-.19-1.12-.45-.26.26-.63.45-1.12.45H8.1a.75.75 0 1 1 0-1.5h3.8c.19 0 .35-.1.35-.25s-.16-.25-.35-.25H8.1a.75.75 0 1 1 0-1.5h3.8c.19 0 .35-.1.35-.25s-.16-.25-.35-.25H8.1a.75.75 0 0 1 0-1.5h12l-.35 1.5h-1.58c-.19 0-.35.1-.35.25s.16.25.35.25h1.46l-.23 1zM8.75 17a1.25 1.25 0 1 0 0 2.5 1.25 1.25 0 0 0 0-2.5zm4.5 0a1.25 1.25 0 1 0 0 2.5 1.25 1.25 0 0 0 0-2.5z" fill="currentColor"/>
             </svg>`;
    case "arrow":
      return `<svg viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
              <path d="M17.707 9.293l-5-5a.999.999 0 10-1.414 1.414L14.586 9H3a1 1 0 100 2h11.586l-3.293 3.293a.999.999 0 101.414 1.414l5-5a.999.999 0 000-1.414z" fill="currentColor"/>
             </svg>`;
    case "star":
      return `<svg viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
              <path d="M10 1L7 7H1l5 4-2 7 6-3 6 3-2-7 5-4h-6l-3-6z" fill="currentColor"/>
             </svg>`;
    default:
      return "";
  }
});

const buttonSettings = computed(() => ({
  buttonText: buttonText.value,
  buttonSubtitle: buttonSubtitle.value,
  buttonBgColor: buttonBgColor.value,
  buttonTextColor: buttonTextColor.value,
  textSize: textSize.value,
  borderRadius: borderRadius.value,
  borderWidth: borderWidth.value,
  borderColor: borderColor.value,
  boxShadow: boxShadow.value,
  buttonAnimation: buttonAnimation.value,
  buttonIconHtml: selectedIconSvg.value,
}));

const buttonStyles = computed(() => {
  // Ensure background color is applied correctly
  return {
    backgroundColor: buttonBgColor.value,
    color: buttonTextColor.value,
    fontSize: `${textSize.value}px`,
    borderRadius: `${borderRadius.value}px`,
    border:
      borderWidth.value > 0
        ? `${borderWidth.value}px solid ${borderColor.value}`
        : "none",
    boxShadow: boxShadow.value || "none",
    animation:
      buttonAnimation.value !== "none"
        ? `${buttonAnimation.value} 2s infinite`
        : "none",
  };
});

// Functions
function selectMode(mode) {
  selectedMode.value = mode;
}

function dismissBanner() {
  showBanner.value = false;
}

function toggleButtonPreview() {
  showButtonCustomization.value = !showButtonCustomization.value;
  // Hide or show the preview button depending on the customization panel
  isButtonVisible.value = !showButtonCustomization.value;
  // Show the help card only when customization options are open
  showHelpCard.value = showButtonCustomization.value;
}
</script>
<style scoped>
/* Form style bottom container for left section */
.form-style-bottom-container {
  display: flex;
  justify-content: flex-end;
  width: 100%;
  margin-top: 16px;
}
/* Fixed bottom-right action buttons for preview section */
.preview-bottom-actions {
  position: fixed;
  right: 32px;
  bottom: 25px;
  display: flex;
  gap: 16px;
  z-index: 100;
}
</style>
<style scoped>
.country-selection-container {
  width: 100%;
  max-width: 400px;
  box-sizing: border-box;
  background-color: white;
  border-radius: 8px;
  box-shadow: 0 6px 20px rgba(22, 23, 24, 0.08);
  /* You can now change padding, max-width, etc. for just the country selector */
}
.form-selection-container {
  width: 100%;
  max-width: 400px;
  box-sizing: border-box;
  margin-top: 10px;
  background-color: white;

  border-radius: 8px;
  padding: 20px;
  /* Match country selector visual style */
  border: 1px solid #e6e9ee;
  box-shadow: 0 6px 20px rgba(22, 23, 24, 0.08);
}

/* make left stack column flex so we can push the personalize card to bottom */
.left-stack {
  display: flex;
  flex-direction: column;
  min-height: calc(100vh - 140px);
}

.personalize-container { width: 100%; max-width: 400px; }
.personalize-card { margin-top: auto; }

.status-box { width: 24px; height: 24px; border-radius: 6px; border: 1px solid #dfe3e8; box-shadow: inset 0 1px 0 rgba(255,255,255,0.6); display:inline-block; flex:0 0 auto; }
.status-gray { background: #f1f3f5; }
.status-white { background: #ffffff; }
.status-blue { background: #e8f3ff; border-color: #d5e9ff; }
.status-text { font-size: 14px; color: #222; line-height: 1.4; }

.action-icon { width: 24px; height: 24px; display: inline-flex; align-items: center; justify-content: center; color: #5c5f62; flex:0 0 auto; }
.action-icon svg { width: 12px; height: 12px; }
.action-text { font-size: 14px; color: #333; }

.status-row { display:flex; gap:12px; align-items:center; }
.action-row { display:flex; gap:10px; align-items:center; }
.status-text, .action-text { flex: 1 1 auto; white-space: normal; }

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

/* Selection help card styles (bottom of selection container) */
.selection-help-card {
  margin-top: 16px;
  background: #fff;
  border-radius: 10px;
  border: 1px solid #e6e9ee;
  box-shadow: 0 6px 20px rgba(22, 23, 24, 0.08);
  padding: 14px;
}
.selection-help-inner {
  display: flex;
  gap: 12px;
  align-items: flex-start;
  position: relative;
}
.selection-help-icon span svg {
  width: 36px;
  height: 36px;
  color: #0b7a78;
}
.selection-help-body {
  flex: 1;
}
.selection-help-text {
  font-size: 14px;
  color: #333;
  margin-top: 6px;
  line-height: 1.35;
}
.selection-help-actions {
  margin-top: 12px;
}
.selection-help-header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 12px;
}
.selection-contact-button {
  --btn-bg: #fff;
  --btn-border: #dfe3e8;
  background: var(--btn-bg);
  border: 1px solid var(--btn-border);
  padding: 8px 12px;
  border-radius: 12px;
  box-shadow: 0 2px 6px rgba(22, 23, 24, 0.06);
}
.selection-contact-button span svg {
  width: 16px;
  height: 16px;
  margin-right: 8px;
}
.selection-help-close {
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
}
.selection-help-close:hover {
  background-color: rgba(0, 0, 0, 0.05);
  color: #202223;
}
.selection-help-close span {
  display: flex;
  width: 16px;
  height: 16px;
}
.selection-help-close span svg {
  width: 100%;
  height: 100%;
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
  gap: 17px;
  height: calc(100vh - 140px); /* same height rule you used */
  overflow: hidden;

}

.design-section {
  flex: 2;
  min-width: 0;
  overflow-y: auto; /* Keep scrolling functionality */
  overflow-x: hidden; /* Prevent horizontal scrollbar */
  max-height: 100%;
  /* Reduced padding since there's no scrollbar */
}

.design-section,
.preview-section {
  flex: 1;              /* take equal space */
  overflow-y: auto;     /* allow scrolling */
  height: 100%;         /* required for overflow to work */
  }

.preview-section {
  flex: 1;
  min-width: 0;
  overflow-y: auto; /* Keep scrolling functionality */
  overflow-x: hidden; /* Prevent horizontal scrollbar */
  max-height: 100%;
;
  /* Reduced padding since there's no scrollbar */
}

.preview-container {
  height: 500px;
  background-color: #f0f0f0;
  border-radius: 8px;
  overflow: auto; /* Keep scrolling functionality */
  margin-top: 16px;
  display: flex;
  justify-content: center;
  align-items: center;
}

/* Button Customization Styles */
.button-customization-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 20px;
}

.button-customization-options {
  border-top: 1px solid #dfe3e8;
  padding-top: 20px;
}

.customization-row {
  display: flex;
  margin-bottom: 16px;
}

.customization-label {
  flex: 1;
  padding-right: 16px;
  display: flex;
  align-items: center;
}

.customization-input {
  flex: 2;
}

.color-input {
  display: flex;
  align-items: center;
}

.color-preview {
  width: 24px;
  height: 24px;
  border-radius: 4px;
  border: 1px solid #dfe3e8;
  margin-right: 8px;
}

.color-input-group {
  display: flex;
  align-items: center;
  flex-grow: 1;
  gap: 8px;
}

.color-picker {
  width: 40px;
  height: 36px;
  padding: 0;
  border: 1px solid #dfe3e8;
  border-radius: 4px;
  cursor: pointer;
}

.custom-preview-button {
  background-color: black;
  color: white;
  border: none;
  border-radius: 4px;
  padding: 12px 20px;
  font-size: 16px;
  font-weight: 500;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  min-width: 200px;
  transition: all 0.3s ease;
}

/* Animation styles */
@keyframes pulse {
  0% {
    transform: scale(1);
  }
  50% {
    transform: scale(1.05);
  }
  100% {
    transform: scale(1);
  }
}

@keyframes bounce {
  0%,
  100% {
    transform: translateY(0);
  }
  50% {
    transform: translateY(-5px);
  }
}

@keyframes shake {
  0%,
  100% {
    transform: translateX(0);
  }
  25% {
    transform: translateX(-5px);
  }
  75% {
    transform: translateX(5px);
  }
}

@keyframes fade {
  0%,
  100% {
    opacity: 1;
  }
  50% {
    opacity: 0.7;
  }
}

.custom-preview-button[animation="pulse"] {
  animation: pulse 2s infinite;
}

.custom-preview-button[animation="bounce"] {
  animation: bounce 2s infinite;
}

.custom-preview-button[animation="shake"] {
  animation: shake 2s infinite;
}

.custom-preview-button[animation="fade"] {
  animation: fade 2s infinite;
}

.button-icon {
  display: inline-flex;
  margin-right: 8px;
  width: 20px;
  height: 20px;
}

.button-icon svg {
  width: 100%;
  height: 100%;
}

.button-text-content {
  display: flex;
  flex-direction: column;
  align-items: center;
}

.button-subtitle {
  font-size: 80%;
  opacity: 0.8;
  margin-top: 4px;
}

.preview-button-wrapper {
  margin-left: 16px;
}

.preview-button-container {
  padding: 20px;
}

.sticky-mobile .custom-preview-button {
  display: inline-flex;
}

/* mobile sticky behavior */
@media (max-width: 768px) {
  .sticky-mobile {
    position: fixed;
    left: 16px;
    right: 16px;
    bottom: 12px;
    z-index: 9999;
    display: flex;
    justify-content: center;
    pointer-events: auto;
  }
  .sticky-mobile .custom-preview-button {
    width: 100%;
    max-width: none;
  }
}

.number-input {
  width: 100%;
  padding: 8px;
  border: 1px solid #dfe3e8;
  border-radius: 4px;
}

/* Toggle label styling: checkbox left, multi-line text to the right */
.toggle-label {
  display: flex;
  gap: 12px;
  align-items: flex-start;
  cursor: pointer;
}

.toggle-label input[type="checkbox"] {
  width: 18px;
  height: 18px;
  margin: 4px 0 0 0; /* slight top offset so it aligns with first line */
  flex: 0 0 18px;
}

.toggle-label span {
  display: block;
  line-height: 1.3;
  color: #202223;
  font-size: 14px;
}

/* Hide scrollbars for all sections */
.design-section,
.preview-section {
  -ms-overflow-style: none;  /* IE & Edge */
  scrollbar-width: none;     /* Firefox */
}
.design-section::-webkit-scrollbar,
.preview-section::-webkit-scrollbar {
  display: none;             /* Chrome, Safari */
}
</style>
