<template>
  <AppProvider>
    <div class="app-container">
      <!-- Our Form Designer component -->
      <FormDesigner />
    </div>
  </AppProvider>
</template>

<script setup>
import { AppProvider } from "@ownego/polaris-vue";
import FormDesigner from "./components/FormDesigner.vue";
</script>

<style>
.app-container {
  padding: 20px;
  max-width: 800px;
  margin: 0 auto;
}
</style>
