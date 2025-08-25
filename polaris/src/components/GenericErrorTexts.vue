<template>
  <div class="generic-error-texts-title">
    <Text as="h2" variant="headingMd" fontWeight="bold" style="font-size: 16px"
      >4. Personnalisez les textes génériques du formulaire</Text
    >
  </div>
  <Card padding="400" rounded="large" class="generic-error-texts">
    <BlockStack gap="200">
      <BlockStack gap="100">
        <Text as="label" variant="bodyMd">Required field error text</Text>
        <TextField
          v-model="requiredText"
          style="max-width: 320px; font-size: 14px; height: 36px"
          placeholder="Ce champ est requis."
        />
      </BlockStack>
      <BlockStack gap="100">
        <Text as="label" variant="bodyMd"
          >Texte d'erreur générique pour champ invalide</Text
        >
        <TextField
          v-model="invalidText"
          style="max-width: 320px; font-size: 14px; height: 36px"
          placeholder="Entrez une valeur valide."
        />
      </BlockStack>
    </BlockStack>
  </Card>
</template>

<script setup>
import { ref } from "vue";
import { Card, BlockStack, Text, TextField } from "@ownego/polaris-vue";

const requiredText = ref("Ce champ est requis.");
const invalidText = ref("Entrez une valeur valide.");
</script>

<style scoped>
.generic-error-texts-title {
  margin-bottom: 4px;
  margin-top: 16px;
  font-size: 16px;
  font-weight: 600;
}
.generic-error-texts {
  width: 100%;
  max-width: 400px;
  margin-top: 0;
}
</style>
