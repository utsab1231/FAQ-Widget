import AnotherWidget from "../components/AnotheWidget";
import FAQWidget from "../components/FAQWidget";

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
};

export default widgetRegistry;
