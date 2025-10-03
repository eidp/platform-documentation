export const darkThemeStyles = `
  :host {
    --primary-color: #3c96d6;
    --secondary-color: #c9ccd2;
    --ifm-link-color: #3c96d6;
    --ifm-link-hover-color: #dac662;
    --ifm-code-background: #1f2227;
    --ifm-pre-background: #1f2227;
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

  /* Links styling to match docs site */
  a {
    color: var(--ifm-link-color) !important;
    text-decoration: none !important;
    font-weight: 500 !important;
    transition: color 0.2s ease !important;
  }

  a:hover {
    color: var(--ifm-link-hover-color) !important;
    text-decoration: none !important;
  }

  /* Inline code styling to match docs site */
  code {
    background-color: var(--ifm-code-background) !important;
    border: 0.1rem solid #3a3e45 !important;
    border-radius: 0.2rem !important;
    font-family: 'Fira Code', monospace !important;
    font-size: 0.85rem !important;
    padding: 0.1rem 0.3rem !important;
    color: #e2e6eb !important;
    vertical-align: middle !important;
  }

  /* Code blocks styling to match docs site */
  pre {
    background-color: var(--ifm-pre-background) !important;
    border: 1px solid #3a3e45 !important;
    border-radius: 0.4rem !important;
    color: #e2e6eb !important;
    font-family: 'Fira Code', monospace !important;
    font-size: 0.85rem !important;
    line-height: 1.45 !important;
    margin: 0 0 1rem !important;
    overflow: auto !important;
    padding: 0 !important;
  }

  /* Override ragpi's inline-styled div wrapper inside pre */
  pre > div {
    background: transparent !important;
    padding: 1rem !important;
    margin: 0 !important;
    font-family: 'Fira Code', monospace !important;
    font-size: 0.85rem !important;
    line-height: 1.45 !important;
  }

  pre code,
  pre > div code {
    background-color: transparent !important;
    border: none !important;
    font-size: inherit !important;
    line-height: inherit !important;
    padding: 0 !important;
    color: #e2e6eb !important;
    font-family: 'Fira Code', monospace !important;
  }

  /* Override all span colors inside code blocks to use syntax highlighting properly */
  pre code span,
  pre > div code span {
    font-family: 'Fira Code', monospace !important;
  }
`;

export const lightThemeStyles = `
  :host {
    --primary-color: #0067b2;
    --secondary-color: #f4f4f4;
    --ifm-link-color: #0067b2;
    --ifm-link-hover-color: #dac662;
    --ifm-code-background: #f5f5f5;
    --ifm-pre-background: #f5f5f5;
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

  /* Links styling to match docs site */
  a {
    color: var(--ifm-link-color) !important;
    text-decoration: none !important;
    font-weight: 500 !important;
    transition: color 0.2s ease !important;
  }

  a:hover {
    color: var(--ifm-link-hover-color) !important;
    text-decoration: none !important;
  }

  /* Inline code styling to match docs site */
  code {
    background-color: var(--ifm-code-background) !important;
    border: 0.1rem solid rgba(0, 0, 0, 0.1) !important;
    border-radius: 0.2rem !important;
    font-family: 'Fira Code', monospace !important;
    font-size: 0.85rem !important;
    padding: 0.1rem 0.3rem !important;
    color: #2b2e34 !important;
    vertical-align: middle !important;
  }

  /* Code blocks styling to match docs site */
  pre {
    background-color: var(--ifm-pre-background) !important;
    border: 1px solid rgba(0, 0, 0, 0.1) !important;
    border-radius: 0.4rem !important;
    color: #2b2e34 !important;
    font-family: 'Fira Code', monospace !important;
    font-size: 0.85rem !important;
    line-height: 1.45 !important;
    margin: 0 0 1rem !important;
    overflow: auto !important;
    padding: 0 !important;
  }

  /* Override ragpi's inline-styled div wrapper inside pre */
  pre > div {
    background: transparent !important;
    padding: 1rem !important;
    margin: 0 !important;
    font-family: 'Fira Code', monospace !important;
    font-size: 0.85rem !important;
    line-height: 1.45 !important;
  }

  pre code,
  pre > div code {
    background-color: transparent !important;
    border: none !important;
    font-size: inherit !important;
    line-height: inherit !important;
    padding: 0 !important;
    color: #2b2e34 !important;
    font-family: 'Fira Code', monospace !important;
  }

  /* Override all span colors inside code blocks to use syntax highlighting properly */
  pre code span,
  pre > div code span {
    font-family: 'Fira Code', monospace !important;
  }
`;
