# Vue.js Polaris Draggable Form Builder

This project is a pixel-perfect, add-only, draggable form builder built with Vue.js and Polaris Vue components. It allows users to visually design forms by dragging, editing, and customizing fields, with a live preview that matches the order and configuration of the draggable items.

## Features

- **Draggable Form Fields:**
  - Add, reorder, and edit form fields using a drag-and-drop interface powered by `vuedraggable`.
  - All field order changes are reflected live in the preview form.

- **Polaris Vue Components:**
  - Uses @ownego/polaris-vue for all UI elements, including Card, Button, TextField, Checkbox, Modal, BlockStack, and Text.

- **Special Blocks:**
  - **Totals Summary:**
    - Always available as a draggable item.
    - Inline edit modal allows you to customize Subtotal, Shipping, and Total titles, toggle a taxes message, and set a background color.
    - Changes are reflected live in the summary preview block.
  - **Discount Codes:**
    - Special edit modal for discount code options and error messages.

- **Live Preview:**
  - The right-side preview form always matches the order and configuration of the draggable items.
  - Customizations for each block (labels, placeholders, etc.) are shown in real time.

- **Pixel-Perfect UI:**
  - Layout and styling closely match provided screenshots and requirements.

## How to Use

1. **Clone the Repository:**
   ```sh
   git clone https://github.com/abaakil35/Vue.js-Polaris.git
   cd Vue.js-Polaris/polaris
   ```
2. **Install Dependencies:**
   ```sh
   npm install
   ```
3. **Run the Development Server:**
   ```sh
   npm run dev
   ```
4. **Open in Browser:**
   - Visit `http://localhost:5173` (or the port shown in your terminal).

## Customization

- **Add Fields:** Click the add button to insert new fields, buttons, text, or images.
- **Edit Fields:** Click the pen icon to open the inline edit modal for each block.
- **Reorder Fields:** Drag and drop blocks to change their order. The preview updates instantly.
- **Totals Summary Block:**
  - Edit the Subtotal, Shipping, and Total titles.
  - Toggle the taxes message and set a custom background color.
  - All changes are reflected in the summary preview.

## Technologies Used
- Vue.js 3
- @ownego/polaris-vue
- vuedraggable
- Vite
- Tailwind CSS (for utility classes)

## Screenshots

![Totals Summary Edit and Preview](./screenshots/totals-summary-edit-preview.png)


