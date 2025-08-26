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
        <div>
          <div
            :key="element.id"
            :class="blockClass(element)"
            class="draggable-block-row block-animate"
          >
            <span class="drag-handle" title="Drag">
              <svg width="16" height="16" fill="none" viewBox="0 0 20 20">
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
                width="16"
                height="16"
                fill="none"
                viewBox="0 0 20 20"
              >
                <path
                  d="M10 4C5 4 1.73 8.11 1.73 8.11a1 1 0 000 1.78S5 16 10 16s8.27-6.11 8.27-6.11a1 1 0 000-1.78S15 4 10 4z"
                  stroke="#888"
                  stroke-width="1.5"
                />
                <circle
                  cx="10"
                  cy="10"
                  r="3"
                  stroke="#888"
                  stroke-width="1.5"
                />
              </svg>
              <svg
                v-else
                width="16"
                height="16"
                fill="none"
                viewBox="0 0 20 20"
              >
                <path d="M2 2l16 16" stroke="#bbb" stroke-width="1.5" />
                <path
                  d="M10 4C5 4 1.73 8.11 1.73 8.11a1 1 0 000 1.78S5 16 10 16s8.27-6.11 8.27-6.11a1 1 0 000-1.78S15 4 10 4z"
                  stroke="#bbb"
                  stroke-width="1.5"
                />
              </svg>
            </span>
            <span class="block-title">{{ element.label }}</span>
            <span class="block-actions">
              <Button
                variant="plain"
                @click="startEdit(element)"
                size="slim"
                icon
              >
                <template #icon>
                  <svg width="16" height="16" fill="none" viewBox="0 0 20 20">
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
                  <svg width="16" height="16" fill="none" viewBox="0 0 20 20">
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
                  <svg width="16" height="16" fill="none" viewBox="0 0 20 20">
                    <path d="M10 14l4-4H6l4 4z" fill="#888" />
                  </svg>
                </template>
              </Button>
            </span>
          </div>
          <!-- Add-only: Inline edit form appears below the row when pen is clicked -->
          <transition name="fade-slide-edit-form">
            <div
              v-if="editId === element.id"
              class="block-edit-panel-pol"
              style="margin-top: 16px; margin-bottom: 24px"
            >
              <Card>
                <BlockStack gap="4">
                  <!-- Special form for Discount Codes -->
                  <template v-if="editForm.label === 'Discount Codes'">
                    <Checkbox
                      label="Limit to 1 discount code per order"
                      v-model="editForm.limitOne"
                    />
                    <TextField
                      label="Discounts line text"
                      v-model="editForm.discountsLineText"
                      autoComplete="off"
                    />
                    <TextField
                      label="Discount code field label"
                      v-model="editForm.discountCodeFieldLabel"
                      autoComplete="off"
                    />
                    <TextField
                      label="Apply button text"
                      v-model="editForm.applyButtonText"
                      autoComplete="off"
                    />
                    <div>
                      <label
                        style="
                          font-size: 14px;
                          font-weight: 500;
                          margin-bottom: 4px;
                          display: block;
                        "
                      >
                        Apply button background color
                      </label>
                      <input
                        type="color"
                        v-model="editForm.applyButtonBgColor"
                        style="
                          width: 40px;
                          height: 40px;
                          border: none;
                          background: none;
                          vertical-align: middle;
                          margin-right: 8px;
                        "
                      />
                      <input
                        type="text"
                        v-model="editForm.applyButtonBgColor"
                        style="width: 120px; vertical-align: middle"
                      />
                    </div>
                    <TextField
                      label="Invalid discount code error text"
                      v-model="editForm.invalidDiscountCodeErrorText"
                      autoComplete="off"
                    />
                    <TextField
                      label="1 discount code allowed error text"
                      v-model="editForm.oneDiscountAllowedErrorText"
                      autoComplete="off"
                    />
                    <div style="margin-top: 16px">
                      <div
                        style="
                          display: flex;
                          align-items: flex-start;
                          background: #f4f6fa;
                          border-radius: 8px;
                          padding: 12px 16px;
                          gap: 12px;
                        "
                      >
                        <svg
                          width="24"
                          height="24"
                          fill="none"
                          viewBox="0 0 20 20"
                          style="flex-shrink: 0"
                        >
                          <rect width="20" height="20" rx="10" fill="#B4E1FA" />
                          <path
                            d="M10 6v4"
                            stroke="#007ACE"
                            stroke-width="1.5"
                            stroke-linecap="round"
                          />
                          <circle cx="10" cy="13" r="1" fill="#007ACE" />
                        </svg>
                        <div style="flex: 1; font-size: 14px; color: #202223">
                          The app will accept all your discount codes. To create discount codes click
                          here:
                          <div style="margin-top: 8px">
                            <Button variant="secondary" size="slim">
                              Create discount codes
                            </Button>
                          </div>
                        </div>
                        <button
                          style="
                            background: none;
                            border: none;
                            cursor: pointer;
                            font-size: 18px;
                            color: #888;
                            margin-left: 8px;
                          "
                        >
                          &times;
                        </button>
                      </div>
                    </div>
                  </template>
                  <!-- Default form for all other items -->
                  <template v-else>
                    <TextField
                      label="Label"
                      v-model="editForm.label"
                      autoComplete="off"
                    />
                    <TextField
                      label="Placeholder"
                      v-model="editForm.placeholder"
                      autoComplete="off"
                    />
                    <Checkbox
                      label="Show field icon"
                      v-model="editForm.showIcon"
                    />
                    <Checkbox label="Required" v-model="editForm.required" />
                    <Checkbox
                      label="Disable email validation (customers can enter a wrong email)"
                      v-model="editForm.disableValidation"
                    />
                    <div style="display: flex; gap: 16px">
                      <TextField
                        label="Min length"
                        v-model="editForm.minLength"
                        type="number"
                        style="max-width: 100px"
                      />
                      <TextField
                        label="Max length"
                        v-model="editForm.maxLength"
                        type="number"
                        style="max-width: 100px"
                      />
                    </div>
                    <TextField
                      label="Invalid email error text"
                      v-model="editForm.invalidEmailText"
                      autoComplete="off"
                    />
                  </template>
                  <div style="display: flex; gap: 8px; margin-top: 12px">
                    <Button @click="saveEdit(element)" variant="primary"
                      >Save</Button
                    >
                    <Button @click="editId = null" variant="secondary"
                      >Cancel</Button
                    >
                  </div>
                </BlockStack>
              </Card>
            </div>
          </transition>
        </div>
      </template>
    </draggable>

    <div style="margin-top: 18px">
      <Button fullWidth @click="open = true">
        <template #icon>
          <svg
            width="15"
            height="15"
            fill="none"
            viewBox="0 0 20 20"
            class="mr-2"
          >
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

  <Modal :open="open" @close="open = false" sectioned>
    <template #title>Add a custom field, button, text or image</template>
    <BlockStack gap="300" class="modal-list">
      <div v-for="item in items" :key="item.label" class="modal-row">
        <Text as="p" variant="bodyMd" class="modal-item-label">
          {{ item.label }}
        </Text>
        <Button size="slim" @click="addItem(item)">Add</Button>
      </div>
    </BlockStack>
  </Modal>
</template>

<script setup>
import { ref, watch } from "vue";
import {
  Card,
  Button,
  Modal,
  BlockStack,
  Text,
  TextField,
  Checkbox,
} from "@ownego/polaris-vue";
import draggable from "vuedraggable";

const emit = defineEmits(["update:blocks"]);
const open = ref(false);
const items = [
  { label: "Title or text" },
  { label: "Image or GIF" },
  { label: "Shopify checkout button" },
  { label: "Quantity selector field" },
  { label: "Text input" },
  { label: "Dropdown list" },
  { label: "Single-choice input" },
  { label: "Checkbox" },
  { label: "Date selector" },
  { label: "Link button" },
];

const blocks = ref([
  { id: 1, label: "Discount Codes", visible: true, active: true },
  { id: 2, label: "Enter your shipping address", visible: true, active: true },
  { id: 3, label: "First name", visible: true, active: true },
  { id: 4, label: "Last name", visible: true, active: true },
  { id: 5, label: "Phone number", visible: true, active: true },
  { id: 6, label: "Address", visible: true, active: true },
  { id: 7, label: "Address 2", visible: true, active: true },
]);

const editId = ref(null);
const editForm = ref({
  label: "",
  placeholder: "",
  showIcon: false,
  required: false,
  disableValidation: false,
  minLength: null,
  maxLength: null,
  invalidEmailText: "",
});

watch(
  blocks,
  (val) => {
    // Always emit a new array reference to ensure parent reactivity
    emit("update:blocks", val.slice());
  },
  { deep: true }
);

function toggleVisibility(block) {
  block.visible = !block.visible;
}
function startEdit(block) {
  if (editId.value === block.id) {
    editId.value = null;
  } else {
    editId.value = block.id;
    editForm.value = { ...block }; // Populate the edit form with the block data
  }
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
function addItem(item) {
  // Add the selected item to the blocks array with a unique id and default properties
  const newId =
    blocks.value.length > 0
      ? Math.max(...blocks.value.map((b) => b.id)) + 1
      : 1;
  blocks.value.push({
    id: newId,
    label: item.label,
    visible: true,
    active: true,
  });
  open.value = false;
}
function saveEdit(block) {
  // Save the edited block data
  Object.assign(block, editForm.value);
  editId.value = null;
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
  max-width: 100%;
  width: 100%;
}
.draggable-block-row {
  display: flex;
  align-items: center;
  gap: 16px;
  padding: 12px 12px;
  border-top: 1px solid #eceff1;
  border-bottom: 1px solid #eceff1;
  background: #fff;
  font-size: 15px;
  font-weight: 500;
  transition: background 0.2s, transform 0.3s cubic-bezier(0.22, 1, 0.36, 1),
    box-shadow 0.3s;
  box-shadow: 0 1px 4px rgba(22, 23, 24, 0.04);
}
.draggable-block-row:hover {
  background: #fafbfb;
  box-shadow: 0 4px 16px rgba(22, 23, 24, 0.1);
}
.block-animate {
  transition: transform 0.3s cubic-bezier(0.22, 1, 0.36, 1), opacity 0.3s;
}
.block-fade-move-enter-active,
.block-fade-move-leave-active {
  transition: all 0.3s cubic-bezier(0.22, 1, 0.36, 1);
}
.block-fade-move-enter-from,
.block-fade-move-leave-to {
  opacity: 0;
  transform: translateY(20px) scale(0.98);
}
.block-fade-move-leave-active {
  position: absolute;
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
  margin-right: 4px;
  display: flex;
  align-items: center;
}
.block-visibility {
  cursor: pointer;
  margin-right: 4px;
  display: flex;
  align-items: center;
}
.block-title {
  flex: 1;
  font-weight: 500;
  font-size: 14px;
  letter-spacing: 0.01em;
}
.block-actions {
  display: flex;
  gap: 12px;
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

/* Modal list styles */
.modal-list {
  margin-top: 8px;
}
.modal-row {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 12px 0;
  border-bottom: 1px solid #eee;
}
.modal-row:last-child {
  border-bottom: none;
}
.modal-item-label {
  font-size: 14px;
  color: #202223;
}

/* Remove top and bottom padding from .Polaris-Box inside modals */
.Polaris-Box {
  padding-top: 0 !important;
  padding-bottom: 0 !important;
}

/* Animation for inline edit form */
.fade-slide-edit-form-enter-active,
.fade-slide-edit-form-leave-active {
  transition: opacity 0.25s, transform 0.25s;
}
.fade-slide-edit-form-enter-from,
.fade-slide-edit-form-leave-to {
  opacity: 0;
  transform: translateY(-10px) scale(0.98);
}
.fade-slide-edit-form-enter-to,
.fade-slide-edit-form-leave-from {
  opacity: 1;
  transform: translateY(0) scale(1);
}
</style>
