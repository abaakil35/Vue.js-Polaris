<template>
  <Card class="mx-auto p-4" style="width: 400px; margin-top: 25px">
    <!-- Product Summary -->
    <div class="summary-card">
      <div class="summary-header">
        <div class="summary-img-wrap">
          <img
            src="https://images.unsplash.com/photo-1519125323398-675f0ddb6308?auto=format&fit=facearea&w=400&h=400&q=80"
            alt="Knitted Throw Pillow"
            class="summary-img"
          />
          <span class="summary-badge">1</span>
        </div>
        <div class="summary-title-wrap">
          <a href="#" class="summary-title">Knitted Throw Pillows</a>
        </div>
        <span class="summary-price">19.99 dh</span>
      </div>
      <div class="summary-totals">
        <div class="summary-row">
          <span>Subtotal</span>
          <span class="summary-bold">19.99 dh</span>
        </div>
        <div class="summary-row">
          <span>Shipping</span>
          <span class="summary-green">Free</span>
        </div>
        <div class="summary-row summary-total">
          <span>Total</span>
          <span class="summary-bold">19.99 dh</span>
        </div>
      </div>
    </div>

    <!-- Shipping Method -->
    <div class="mb-4">
      <h3 class="text-base font-medium mb-2">Shipping method</h3>
      <Card sectioned>
        <div class="flex justify-between items-center">
          <div class="flex items-center gap-2">
            <input
              type="radio"
              name="shipping"
              id="free"
              checked
              class="h-4 w-4"
            />
            <label for="free" class="text-sm">Free shipping</label>
          </div>
          <span class="text-sm font-medium">Free</span>
        </div>
      </Card>
    </div>

    <!-- Address Form -->
    <div>
      <h3 class="font-bold text-center mb-4">Enter your shipping address</h3>
      <form class="form-fields">
        <!-- First Name -->
        <TextField
          label="First name"
          placeholder="First name"
          requiredIndicator
        >
          <template #prefix>
            <svg width="20" height="20" fill="#212b36" viewBox="0 0 20 20">
              <circle cx="10" cy="7" r="4" />
              <rect x="4" y="13" width="12" height="5" rx="2" />
            </svg>
          </template>
        </TextField>
        <!-- Last Name -->
        <TextField label="Last name" placeholder="Last name" requiredIndicator>
          <template #prefix>
            <svg width="20" height="20" fill="#212b36" viewBox="0 0 20 20">
              <circle cx="10" cy="7" r="4" />
              <rect x="4" y="13" width="12" height="5" rx="2" />
            </svg>
          </template>
        </TextField>
        <!-- Phone -->
        <TextField label="Phone number" placeholder="Phone" requiredIndicator>
          <template #prefix>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="20"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              stroke-width="2"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M22 16.92v3a2 2 0 0 1-2.18 2A19.72 19.72 0 0 1 2.08 4.18 2 2 0 0 1 4.06 2h3a2 2 0 0 1 2 1.72c.13 1.05.37 2.07.72 3.06a2 2 0 0 1-.45 2.11l-1.27 1.27a16 16 0 0 0 6.29 6.29l1.27-1.27a2 2 0 0 1 2.11-.45c.99.35 2.01.59 3.06.72A2 2 0 0 1 22 16.92z"
              />
            </svg>
          </template>
        </TextField>
        <!-- Address -->
        <TextField label="Address" placeholder="Address" requiredIndicator>
          <template #prefix>
            <svg width="20" height="20" fill="#212b36" viewBox="0 0 20 20">
              <path
                d="M10 2C6.686 2 4 4.686 4 8c0 4.418 6 10 6 10s6-5.582 6-10c0-3.314-2.686-6-6-6zm0 8.5A2.5 2.5 0 1110 5a2.5 2.5 0 010 5.5z"
              />
            </svg>
          </template>
        </TextField>
        <!-- Address 2 -->
        <TextField label="Address 2" placeholder="Address 2">
          <template #prefix>
            <svg width="20" height="20" fill="#212b36" viewBox="0 0 20 20">
              <path
                d="M10 2C6.686 2 4 4.686 4 8c0 4.418 6 10 6 10s6-5.582 6-10c0-3.314-2.686-6-6-6zm0 8.5A2.5 2.5 0 1110 5a2.5 2.5 0 010 5.5z"
              />
            </svg>
          </template>
        </TextField>
        <!-- Province -->
        <TextField label="Province" placeholder="Province" requiredIndicator>
          <template #prefix>
            <svg width="20" height="20" fill="#212b36" viewBox="0 0 20 20">
              <path
                d="M10 2C6.686 2 4 4.686 4 8c0 4.418 6 10 6 10s6-5.582 6-10c0-3.314-2.686-6-6-6zm0 8.5A2.5 2.5 0 1110 5a2.5 2.5 0 010 5.5z"
              />
            </svg>
          </template>
        </TextField>
        <!-- City -->
        <TextField label="City" placeholder="City" requiredIndicator>
          <template #prefix>
            <svg width="20" height="20" fill="#212b36" viewBox="0 0 20 20">
              <path
                d="M10 2C6.686 2 4 4.686 4 8c0 4.418 6 10 6 10s6-5.582 6-10c0-3.314-2.686-6-6-6zm0 8.5A2.5 2.5 0 1110 5a2.5 2.5 0 010 5.5z"
              />
            </svg>
          </template>
        </TextField>
        <!-- Zip -->
        <TextField label="Zip code" placeholder="Zip code" requiredIndicator>
          <template #prefix>
            <svg width="20" height="20" fill="#212b36" viewBox="0 0 20 20">
              <path
                d="M10 2C6.686 2 4 4.686 4 8c0 4.418 6 10 6 10s6-5.582 6-10c0-3.314-2.686-6-6-6zm0 8.5A2.5 2.5 0 1110 5a2.5 2.5 0 010 5.5z"
              />
            </svg>
          </template>
        </TextField>
        <!-- Email -->
        <TextField label="Email" placeholder="Email">
          <template #prefix>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="20"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              stroke-width="2"
            >
              <rect
                x="3"
                y="5"
                width="18"
                height="14"
                rx="2"
                stroke="currentColor"
                stroke-width="2"
                fill="none"
              />
              <path
                d="M3 7l9 6 9-6"
                stroke="currentColor"
                stroke-width="2"
                fill="none"
              />
            </svg>
          </template>
        </TextField>

        <!-- Newsletter -->
        <div class="flex items-center gap-2 mt-2">
          <input type="checkbox" id="subscribe" class="h-4 w-4" />
          <label for="subscribe" class="text-sm">
            Subscribe to stay updated with new products and offers!
          </label>
        </div>

        <!-- Submit: Customizable Button from Designer -->
        <div class="mt-4">
          <button
            class="custom-preview-button"
            :style="computedButtonStyles"
            :animation="settings.buttonAnimation"
            style="
              width: 100%;
              font-weight: bold;
              font-size: 16px;
              padding: 14px 0;
              border: none;
              display: flex;
              align-items: center;
              justify-content: center;
              gap: 8px;
            "
            type="submit"
          >
            <span
              v-if="settings.buttonIconHtml"
              class="button-icon"
              v-html="settings.buttonIconHtml"
            ></span>
            <div class="button-text-content">
              {{ settings.buttonText }}
              <small v-if="settings.buttonSubtitle" class="button-subtitle">{{
                settings.buttonSubtitle
              }}</small>
            </div>
          </button>
        </div>
      </form>
    </div>
  </Card>
</template>

<script setup>
import { Card, TextField, Button, Icon } from "@ownego/polaris-vue";
import { computed } from "vue";
const props = defineProps({
  settings: {
    type: Object,
    required: true,
  },
});

const computedButtonStyles = computed(() => {
  return {
    backgroundColor: props.settings.buttonBgColor,
    color: props.settings.buttonTextColor,
    fontSize: props.settings.textSize ? props.settings.textSize + "px" : "16px",
    borderRadius: props.settings.borderRadius
      ? props.settings.borderRadius + "px"
      : "4px",
    border:
      props.settings.borderWidth > 0
        ? `${props.settings.borderWidth}px solid ${props.settings.borderColor}`
        : "none",
    boxShadow: props.settings.boxShadow || "none",
    animation:
      props.settings.buttonAnimation &&
      props.settings.buttonAnimation !== "none"
        ? `${props.settings.buttonAnimation} 2s infinite`
        : "none",
  };
});
</script>
<style scoped>
h3 {
  margin: 10px;
  font-weight: bold;
}
.summary-card {
  background: #fff;
  border-radius: 10px;
  border: 1px solid #eee;
  margin-bottom: 18px;
  box-shadow: 0 1px 4px rgba(22, 23, 24, 0.04);
  padding: 0;
  overflow: hidden;
}
.summary-header {
  display: flex;
  align-items: center;
  gap: 12px;
  padding: 12px 16px 8px 16px;
  border-bottom: 1px solid #eee;
  position: relative;
}
.summary-img-wrap {
  position: relative;
  width: 52px;
  height: 52px;
  flex-shrink: 0;
}
.summary-img {
  width: 48px;
  height: 48px;
  border-radius: 8px;
  object-fit: cover;
}
.summary-badge {
  position: absolute;
  top: -7px;
  left: -7px;
  background: #b4b6b8;
  color: #fff;
  font-size: 13px;
  font-weight: 700;
  border-radius: 50%;
  width: 22px;
  height: 22px;
  display: flex;
  align-items: center;
  justify-content: center;
  border: 2px solid #fff;
  box-shadow: 0 1px 2px rgba(0, 0, 0, 0.07);
}
.summary-title-wrap {
  flex: 1;
}
.summary-title {
  font-size: 16px;
  font-weight: 600;
  color: #1a0dab;
  text-decoration: underline;
  cursor: pointer;
}
.summary-price {
  font-size: 16px;
  font-weight: 600;
  color: #222;
}
.summary-totals {
  background: #f6f7f8;
  border-radius: 0 0 10px 10px;
  padding: 10px 16px 13px 16px;
  font-size: 15px;
  margin-bottom: 0;
}
.summary-row {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 2px;
}
.summary-bold {
  font-weight: 700;
  color: #222;
}
.summary-green {
  color: #008060;
  font-weight: 600;
}
.summary-total {
  border-top: 1px solid #e0e0e0;
  margin-top: 6px;
  padding-top: 6px;
}
.form-fields {
  display: flex;
  flex-direction: column;
  gap: 18px;
}
.custom-preview-button {
  background-color: black;
  color: white;
  border: none;
  border-radius: 4px;
  padding: 12px 20px;
  font-size: 16px;
  font-weight: 700;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  min-width: 200px;
  width: 100%;
  transition: all 0.3s ease;
  margin-top: 8px;
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
.Polaris-TextField__Prefix {
  background: #f3f3f3;
  border-top-left-radius: 6px;
  border-bottom-left-radius: 6px;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0 12px;
}
.Polaris-TextField {
  border-radius: 6px;
  min-height: 64px;
  width: 100%;
}
.Polaris-TextField__Input {
  font-size: 28px;
  padding: 24px 28px 24px 28px;
  height: 100%;
  box-sizing: border-box;
}
.Polaris-Label {
  font-weight: 700;
  margin-bottom: 2px;
}
.Polaris-Label__RequiredIndicator {
  color: #d82c0d;
  margin-left: 2px;
}
</style>
