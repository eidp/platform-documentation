import React, { useEffect } from 'react';
import { darkThemeStyles, lightThemeStyles } from './ragpi-widget-styles';

const THEME_OVERRIDE_ID = 'ragpi-theme-override';
const WIDGET_TIMEOUT = 10000;

function findWidgetShadowRoot(): ShadowRoot | null {
  // First try to find by ID pattern
  const widgetById = document.querySelector('[id^="ragpi-widget-"]');
  if (widgetById?.shadowRoot) return widgetById.shadowRoot;

  // Fallback: scan for any shadow root excluding reCAPTCHA
  for (const el of Array.from(document.querySelectorAll('*'))) {
    if (el.shadowRoot && !el.classList.contains('grecaptcha-badge')) {
      return el.shadowRoot;
    }
  }

  return null;
}

function applyThemeToWidget(shadowRoot: ShadowRoot, isDark: boolean): void {
  shadowRoot.querySelector(`#${THEME_OVERRIDE_ID}`)?.remove();

  const style = document.createElement('style');
  style.id = THEME_OVERRIDE_ID;
  style.textContent = isDark ? darkThemeStyles : lightThemeStyles;
  shadowRoot.appendChild(style);
}

function ThemeSync() {
  useEffect(() => {
    const updateWidgetTheme = () => {
      const isDark =
        document.documentElement.getAttribute('data-theme') === 'dark';
      const shadowRoot = findWidgetShadowRoot();

      if (shadowRoot) {
        applyThemeToWidget(shadowRoot, isDark);
        return true;
      }
      return false;
    };

    // Try immediate update
    if (!updateWidgetTheme()) {
      // Wait for widget to load
      const widgetObserver = new MutationObserver(() => {
        if (updateWidgetTheme()) widgetObserver.disconnect();
      });

      widgetObserver.observe(document.body, { childList: true, subtree: true });
      setTimeout(() => widgetObserver.disconnect(), WIDGET_TIMEOUT);
    }

    // Watch for theme changes
    const themeObserver = new MutationObserver((mutations) => {
      if (mutations.some((m) => m.attributeName === 'data-theme')) {
        updateWidgetTheme();
      }
    });

    themeObserver.observe(document.documentElement, {
      attributes: true,
      attributeFilter: ['data-theme'],
    });

    return () => themeObserver.disconnect();
  }, []);

  return null;
}

export default function Root({ children }: { children: React.ReactNode }) {
  return (
    <>
      <ThemeSync />
      {children}
    </>
  );
}
