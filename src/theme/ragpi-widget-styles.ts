export const darkThemeStyles = `
  :host {
    --primary-color: #3c96d6;
    --secondary-color: #c9ccd2;
  }

  .bg-white {
    background-color: #1a202c !important;
  }

  .bg-gray-100 {
    background-color: #2d3748 !important;
  }

  .text-gray-800 {
    color: #e2e8f0 !important;
  }

  .text-gray-500 {
    color: #a0aec0 !important;
  }

  .text-gray-400,
  .text-gray-600 {
    color: #cbd5e0 !important;
  }

  .border-gray-300 {
    border-color: #4a5568 !important;
  }

  .hover\\:text-gray-600:hover {
    color: #e2e8f0 !important;
  }

  .bg-primary {
    background-color: #4a90e2 !important;
  }

  .text-secondary {
    color: #e2e8f0 !important;
  }

  .ring-primary,
  .focus\\:ring-primary:focus {
    --tw-ring-color: #4a90e2 !important;
  }

  input,
  textarea {
    background-color: #2d3748 !important;
    color: #e2e8f0 !important;
    border-color: #4a5568 !important;
  }

  /* Apply gradient to all buttons with bg-primary class (Ask AI button and submit button) */
  button.bg-primary,
  button[class*="bg-primary"] {
    background: linear-gradient(90deg, #3c96d6 0%, #dac662 100%) !important;
    color: #ffffff !important;
    font-weight: 600 !important;
  }

  /* Slightly fade the disabled button */
  button.cursor-not-allowed {
    opacity: 0.6 !important;
  }

  /* Exclude close button from gradient (it has text-gray classes, not bg-primary) */
  button.text-gray-400,
  button.text-gray-600 {
    background: none !important;
  }
`;

export const lightThemeStyles = `
  :host {
    --primary-color: #0067b2;
    --secondary-color: #f4f4f4;
  }

  .text-secondary {
    color: #f4f4f4 !important;
  }

  .ring-primary,
  .focus\\:ring-primary:focus {
    --tw-ring-color: #0067b2 !important;
  }

  /* Apply gradient to all buttons with bg-primary class (Ask AI button and submit button) */
  button.bg-primary,
  button[class*="bg-primary"] {
    background: linear-gradient(90deg, #0067b2 0%, #dac662 100%) !important;
    color: #ffffff !important;
    font-weight: 600 !important;
  }

  /* Override any non-button elements with bg-primary if needed */
  *:not(button).bg-primary {
    background-color: #0067b2 !important;
  }

  /* Slightly fade the disabled button */
  button.cursor-not-allowed {
    opacity: 0.6 !important;
  }

  /* Exclude close button from gradient (it has text-gray classes, not bg-primary) */
  button.text-gray-400,
  button.text-gray-600 {
    background: none !important;
  }
`;
