<template>
  <Card padding="500" rounded="large" class="form-style-polaris">
    <BlockStack gap="300">
      <InlineStack align="space-between" blockAlign="center">
        <Text as="h2" variant="headingMd" fontWeight="bold">Form style</Text>
        <Button size="slim" variant="secondary" @click="resetToDefault"
          >Reset to default</Button
        >
      </InlineStack>

      <InlineStack gap="200" blockAlign="center">
        <BlockStack gap="100">
          <Text as="label" variant="bodyMd">Text color</Text>
          <InlineStack gap="100" blockAlign="center">
            <input
              type="color"
              v-model="textColor"
              style="
                width: 32px;
                height: 32px;
                border-radius: 50%;
                border: 1px solid #d1d5db;
              "
            />
            <TextField v-model="textColor" style="width: 150px" />
          </InlineStack>
        </BlockStack>
        <BlockStack gap="100" style="flex: 1">
          <Text as="label" variant="bodyMd">Font size</Text>
          <RangeSlider v-model="fontSize" min="12" max="32" />
        </BlockStack>
      </InlineStack>

      <BlockStack gap="100">
        <Text as="label" variant="bodyMd">Background color</Text>
        <InlineStack gap="100" blockAlign="center">
          <input
            type="color"
            v-model="bgColor"
            style="
              width: 32px;
              height: 32px;
              border-radius: 6px;
              border: 1px solid #d1d5db;
            "
          />
          <TextField v-model="bgColor" style="width: 80%" />
        </InlineStack>
      </BlockStack>

      <BlockStack gap="100">
        <Text as="label" variant="bodyMd">Gap between items</Text>
        <RangeSlider v-model="gap" min="0" max="48" />
      </BlockStack>

      <Text as="p" variant="bodySm" tone="subdued"
        ><b>Important:</b> changing the background color of your form could
        negatively affect your conversion rate.</Text
      >

      <InlineStack gap="200" blockAlign="center">
        <BlockStack gap="100" style="flex: 1">
          <Text as="label" variant="bodyMd">Border radius</Text>
          <RangeSlider v-model="borderRadius" min="0" max="32" />
        </BlockStack>
        <BlockStack gap="100" style="flex: 1">
          <Text as="label" variant="bodyMd">Border width</Text>
          <RangeSlider v-model="borderWidth" min="0" max="8" />
        </BlockStack>
      </InlineStack>

      <InlineStack gap="200" blockAlign="center">
        <BlockStack gap="100">
          <Text as="label" variant="bodyMd">Border color</Text>
          <InlineStack gap="100" blockAlign="center">
            <input
              type="color"
              v-model="borderColor"
              style="
                width: 32px;
                height: 32px;
                border-radius: 50%;
                border: 1px solid #d1d5db;
              "
            />
            <TextField v-model="borderColor" style="width: 150px" />
          </InlineStack>
        </BlockStack>
        <BlockStack gap="100" style="flex: 1">
          <Text as="label" variant="bodyMd">Shadow</Text>
          <RangeSlider v-model="shadow" min="0" max="32" />
        </BlockStack>
      </InlineStack>

      <BlockStack gap="100">
        <Checkbox v-model="hideLabels" label="Hide fields labels" />
        <Checkbox
          v-model="rtlSupport"
          label="Enable RTL support (for Arabic languages)"
        />
      </BlockStack>
    </BlockStack>
  </Card>
</template>

<script setup>
import { ref, watch, defineEmits } from "vue";
import {
  Card,
  BlockStack,
  InlineStack,
  Text,
  Button,
  RangeSlider,
  TextField,
  Checkbox,
} from "@ownego/polaris-vue";

const emit = defineEmits(["update:style"]);
const textColor = ref("rgba(0,0,0,1)");
const fontSize = ref(16);
const bgColor = ref("rgba(255,255,255,1)");
const borderRadius = ref(8);
const borderWidth = ref(0);
const borderColor = ref("rgba(0,0,0,1)");
const shadow = ref(8);

const gap = ref(28);
const hideLabels = ref(false);
const rtlSupport = ref(false);

function emitStyle() {
  emit("update:style", {
    textColor: textColor.value,
    fontSize: fontSize.value,
    bgColor: bgColor.value,
    borderRadius: borderRadius.value,
    borderWidth: borderWidth.value,
    borderColor: borderColor.value,
    shadow: shadow.value,
    gap: gap.value,
    hideLabels: hideLabels.value,
    rtlSupport: rtlSupport.value,
  });
}

watch(
  [
    textColor,
    fontSize,
    bgColor,
    borderRadius,
    borderWidth,
    borderColor,
    shadow,
    gap,
    hideLabels,
    rtlSupport,
  ],
  emitStyle,
  { immediate: true }
);

function resetToDefault() {
  textColor.value = "rgba(0,0,0,1)";
  fontSize.value = 16;
  bgColor.value = "rgba(255,255,255,1)";
  borderRadius.value = 8;
  borderWidth.value = 0;
  borderColor.value = "rgba(0,0,0,1)";
  shadow.value = 8;
  gap.value = 28;
  hideLabels.value = false;
  rtlSupport.value = false;
}
</script>
