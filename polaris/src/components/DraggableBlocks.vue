<template>
  <Card class="draggable-blocks-container">
    <draggable
      v-model="blocks"
      group="blocks"
      handle=".drag-handle"
      item-key="id"
      :animation="200"
      :ghost-class="'drag-ghost'"
      :chosen-class="'drag-chosen'"
      :drag-class="'drag-dragging'"
      :move-transition="'draggable-block-move'"
    >
      <template #item="{ element, index }">
        <div :class="blockClass(element)" class="draggable-block-row">
          <span class="drag-handle" title="Drag">
            <svg width="20" height="20" fill="none" viewBox="0 0 20 20">
              <circle cx="5" cy="5" r="2" fill="#bbb" />
              <circle cx="5" cy="10" r="2" fill="#bbb" />
              <circle cx="5" cy="15" r="2" fill="#bbb" />
              <circle cx="15" cy="5" r="2" fill="#bbb" />
              <circle cx="15" cy="10" r="2" fill="#bbb" />
              <circle cx="15" cy="15" r="2" fill="#bbb" />
            </svg>
          </span>
          <span class="block-visibility" @click="toggleVisibility(element)">
            <svg
              v-if="element.visible"
              width="20"
              height="20"
              fill="none"
              viewBox="0 0 20 20"
            >
              <path
                d="M10 4C5 4 1.73 8.11 1.73 8.11a1 1 0 000 1.78S5 16 10 16s8.27-6.11 8.27-6.11a1 1 0 000-1.78S15 4 10 4z"
                stroke="#888"
                stroke-width="1.5"
              />
              <circle cx="10" cy="10" r="3" stroke="#888" stroke-width="1.5" />
            </svg>
            <svg v-else width="20" height="20" fill="none" viewBox="0 0 20 20">
              <path d="M2 2l16 16" stroke="#bbb" stroke-width="1.5" />
              <path
                d="M10 4C5 4 1.73 8.11 1.73 8.11a1 1 0 000 1.78S5 16 10 16s8.27-6.11 8.27-6.11a1 1 0 000-1.78S15 4 10 4z"
                stroke="#bbb"
                stroke-width="1.5"
              />
              <circle cx="10" cy="10" r="3" stroke="#bbb" stroke-width="1.5" />
            </svg>
          </span>
          <span class="block-title">{{ element.label }}</span>
          <span class="block-actions">
            <Button
              variant="plain"
              @click="editBlock(element)"
              size="slim"
              icon
            >
              <template #icon>
                <svg width="18" height="18" fill="none" viewBox="0 0 20 20">
                  <path
                    d="M3 14.25V17h2.75L16.81 5.94l-2.75-2.75L3 14.25zM18.71 4.04a1 1 0 000-1.41l-1.34-1.34a1 1 0 00-1.41 0l-1.83 1.83 2.75 2.75 1.83-1.83z"
                    fill="#888"
                  />
                </svg>
              </template>
            </Button>
            <Button
              variant="plain"
              @click="moveBlockUp(index)"
              size="slim"
              icon
            >
              <template #icon>
                <svg width="18" height="18" fill="none" viewBox="0 0 20 20">
                  <path d="M10 6l-4 4h8l-4-4z" fill="#888" />
                </svg>
              </template>
            </Button>
            <Button
              variant="plain"
              @click="moveBlockDown(index)"
              size="slim"
              icon
            >
              <template #icon>
                <svg width="18" height="18" fill="none" viewBox="0 0 20 20">
                  <path d="M10 14l4-4H6l4 4z" fill="#888" />
                </svg>
              </template>
            </Button>
          </span>
        </div>
      </template>
    </draggable>

    <div style="margin-top: 18px">
      <Button fullWidth>
        <template #icon>
          <svg width="15" height="15" fill="none" viewBox="0 0 20 20" class="mr-2">
            <path
              d="M10 4v12M4 10h12"
              stroke="currentColor"
              stroke-width="2"
              stroke-linecap="round"
            />
          </svg>
        </template>
        Add a custom field, button, text or image
      </Button>
    </div>
  </Card>
</template>

<script setup>
import { ref } from "vue";
import { Card, Button } from "@ownego/polaris-vue";
import draggable from "vuedraggable";

const blocks = ref([
  { id: 1, label: "Totals Summary", visible: true, active: true },
  { id: 2, label: "Order Summary", visible: true, active: true },
  { id: 3, label: "Shipping Rates", visible: true, active: true },
  { id: 4, label: "Discount Codes", visible: false, active: false },
  { id: 5, label: "Enter Your Shipping Address", visible: true, active: true },
]);

function toggleVisibility(block) {
  block.visible = !block.visible;
}
function editBlock(block) {
  // Placeholder for edit action
  // No alert, implement modal or inline edit if needed
}
function moveBlockUp(index) {
  if (index > 0) {
    const temp = blocks.value[index];
    blocks.value.splice(index, 1);
    blocks.value.splice(index - 1, 0, temp);
  }
}
function moveBlockDown(index) {
  if (index < blocks.value.length - 1) {
    const temp = blocks.value[index];
    blocks.value.splice(index, 1);
    blocks.value.splice(index + 1, 0, temp);
  }
}
function blockClass(block) {
  if (!block.visible) return "block-disabled";
  if (block.active) return "block-active";
  return "";
}
</script>

<style scoped>
.draggable-block-move {
  transition: transform 0.3s cubic-bezier(0.22, 1, 0.36, 1);
}
.draggable-blocks-container {
  margin-top: 16px;
  background: #fff;
  border-radius: 10px;
  box-shadow: 0 1px 4px rgba(22, 23, 24, 0.08);
  padding: 0;
  max-width: 400px;
  width: 100%;
}
.draggable-block-row {
  display: flex;
  align-items: center;
  gap: 16px;
  padding: 15px 20px;
  border-bottom: 1px solid #eee;
  background: #fff;
  font-size: 15px;
  font-weight: 600;
  transition: background 0.2s, transform 0.3s cubic-bezier(0.22, 1, 0.36, 1);
}
.block-disabled {
  background: #f1f3f5 !important;
  color: #bbb;
}
.block-active {
  background: #fff !important;
  color: #222;
}
.drag-handle {
  cursor: grab;
  margin-right: 8px;
  display: flex;
  align-items: center;
}
.block-visibility {
  cursor: pointer;
  margin-right: 8px;
  display: flex;
  align-items: center;
}
.block-title {
  flex: 1;
  font-weight: 400;
  font-size: 15px;
  letter-spacing: 0.01em;
}
.block-actions {
  display: flex;
  gap: 8px;
}
.drag-ghost {
  opacity: 0.5;
  transform: scale(0.98) rotate(-1deg);
  transition: opacity 0.2s, transform 0.3s cubic-bezier(0.22, 1, 0.36, 1);
}
.drag-chosen {
  background: #e8f3ff !important;
}
.drag-dragging {
  background: #e8f3ff !important;
}
</style>
