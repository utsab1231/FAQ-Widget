import AnotherWidget from "../components/AnotheWidget";
import Calendar from "../components/Calendar/Calendar";
import FAQWidget from "../components/FAQ/FAQWidget";

import faqs, { categories } from "../constants/FAQs";

interface WidgetRegistration {
  component: React.FC<any>;
  parseAttributes?: (el: HTMLElement) => Record<string, any>;
}

// --- The single registry --- //
const widgetRegistry: Record<string, WidgetRegistration> = {
  "faq-widget": {
    component: FAQWidget,
    parseAttributes: (el) => ({
      faqs: el.getAttribute("data-faqs")
        ? JSON.parse(el.getAttribute("data-faqs")!)
        : faqs,
      categories: el.getAttribute("data-categories")
        ? JSON.parse(el.getAttribute("data-categories")!)
        : categories,
      title: el.getAttribute("data-title") || "FAQs",
      theme: el.getAttribute("data-theme") === "dark" ? "dark" : "light",
      defaultCategory: el.getAttribute("data-default-category") || "General",
    }),
  },
  "another-widget": {
    component: AnotherWidget,
    parseAttributes: (el) => ({
      title: el.getAttribute("data-title") || "This is title",
    }),
  },

  // Holiday widget
  "holiday-widget": {
    component: Calendar,
    parseAttributes: (el) => ({
      year: el.getAttribute("data-year")
        ? parseInt(el.getAttribute("data-year")!)
        : new Date().getFullYear(),
      country: el.getAttribute("data-country") || "NP",
      apiKey: el.getAttribute("data-api-key") || "1234567890",
    }),
  },
};

export default widgetRegistry;
