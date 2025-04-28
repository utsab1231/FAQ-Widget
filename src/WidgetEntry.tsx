import ReactDOM from "react-dom/client";
import widgetRegistry from "./widgetRegistry";
import "./index.css";

function getWidgetTypeFromClassList(classList: DOMTokenList): string | undefined {
  return Object.keys(widgetRegistry).find((className) => classList.contains(className));
}

function mountWidget(el: HTMLElement) {
  const widgetType = getWidgetTypeFromClassList(el.classList);
  if (!widgetType) return;

  const { component: Component, parseAttributes } = widgetRegistry[widgetType];
  const props = parseAttributes ? parseAttributes(el) : {};

  ReactDOM.createRoot(el).render(<Component {...props} />);
  el.setAttribute("data-mounted", "true");
}

function mountAllWidgets() {
  const selector = Object.keys(widgetRegistry).map((c) => `.${c}`).join(",");
  document.querySelectorAll(selector).forEach((el) => {
    if (!el.hasAttribute("data-mounted")) {
      mountWidget(el as HTMLElement);
    }
  });
}

function observeDOM() {
  const observer = new MutationObserver((mutations) => {
    mutations.forEach((mutation) => {
      mutation.addedNodes.forEach((node) => {
        if (node instanceof HTMLElement) {
          const widgetType = getWidgetTypeFromClassList(node.classList);
          if (widgetType && !node.hasAttribute("data-mounted")) {
            mountWidget(node);
          }
          node.querySelectorAll(Object.keys(widgetRegistry).map((c) => `.${c}`).join(",")).forEach((el) => {
            if (!el.hasAttribute("data-mounted")) {
              mountWidget(el as HTMLElement);
            }
          });
        }
      });
    });
  });

  observer.observe(document.body, { childList: true, subtree: true });
}

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

export { mountAllWidgets, mountWidget, observeDOM };
