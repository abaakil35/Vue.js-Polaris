<template>
  <Card padding="500" rounded="large">
    <BlockStack gap="400">
      <Text as="h2" variant="headingMd" fontWeight="bold"
        >2. Sélectionnez votre pays de formulaire</Text
      >
      <BlockStack gap="200">
        <Text as="label" variant="bodyMd">Pays</Text>
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
        <Text as="h3" variant="bodyLg" fontWeight="bold"
          >Vendez-vous dans plusieurs pays ?</Text
        >
        <Text as="p" variant="bodyMd"
          >Activez plusieurs pays sur le formulaire ici :</Text
        >
        <Button size="large" variant="primary" @click="onMultiCountry"
          >Activer le multi-pays</Button
        >
      </BlockStack>
    </BlockStack>
  </Card>
</template>

<script setup>
import { ref } from "vue";
import {
  Card,
  BlockStack,
  Text,
  Select,
  Button,
  Divider,
} from "@ownego/polaris-vue";

const selectedCountry = ref("Morocco");
const countryOptions = [
  { label: "Morocco", value: "Morocco" },
  { label: "France", value: "France" },
  { label: "Algeria", value: "Algeria" },
  { label: "Tunisia", value: "Tunisia" },
  { label: "Other", value: "Other" },
];


</script>
