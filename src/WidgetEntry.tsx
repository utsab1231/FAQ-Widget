import ReactDOM from "react-dom/client";
import FAQWidget from "./components/FAQWidget";
import faqs, { categories } from "./constants/FAQs";
import "./index.css"; // Import your CSS file

function mountWidget(el: HTMLElement) {
  const faqsAttribute = el.getAttribute("data-faqs");
  const categoriesAttribute = el.getAttribute("data-categories");
  const titleAttribute = el.getAttribute("data-title");
  const themeAttribute = el.getAttribute("data-theme");
  const defaultCategoryAttribute = el.getAttribute("data-default-category");

  const faqlist = faqsAttribute ? JSON.parse(faqsAttribute) : faqs;
  const categoriesList = categoriesAttribute
    ? JSON.parse(categoriesAttribute)
    : categories;
  const title = titleAttribute || "FAQs";
  const theme =
    themeAttribute === "light" || themeAttribute === "dark"
      ? themeAttribute
      : "light";
  const defaultCategory = defaultCategoryAttribute || "General";
  ReactDOM.createRoot(el).render(
    <FAQWidget
      faqs={faqlist}
      categories={categoriesList}
      theme={theme}
      title={title}
      defaultCategory={defaultCategory}
    />
  );
}

function mountAllWidgets() {
  document.querySelectorAll(".faq-widget").forEach((el) => {
    if (!el.hasAttribute("data-mounted")) {
      mountWidget(el as HTMLElement);
      el.setAttribute("data-mounted", "true");
    }
  });
}

function observeDOM() {
  const observer = new MutationObserver((mutations) => {
    mutations.forEach((mutation) => {
      if (mutation.addedNodes.length) {
        mutation.addedNodes.forEach((node) => {
          if (node instanceof HTMLElement) {
            if (
              node.classList.contains("faq-widget") &&
              !node.hasAttribute("data-mounted")
            ) {
              mountWidget(node);
              node.setAttribute("data-mounted", "true");
            }
            node.querySelectorAll(".faq-widget").forEach((el) => {
              if (!el.hasAttribute("data-mounted")) {
                mountWidget(el as HTMLElement);
                el.setAttribute("data-mounted", "true");
              }
            });
          }
        });
      }
    });
  });

  observer.observe(document.body, { childList: true, subtree: true });
}

// --- auto run widget mount ---
function run() {
  if (document.readyState !== "loading") {
    mountAllWidgets();
    observeDOM();
  } else {
    document.addEventListener("DOMContentLoaded", () => {
      mountAllWidgets();
      observeDOM();
    });
  }
}
run();

// --- expose manual methods ---
export { mountAllWidgets, mountWidget, observeDOM };
