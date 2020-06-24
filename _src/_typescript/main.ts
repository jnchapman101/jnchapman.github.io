const isHTMLElement = (element: Element): element is HTMLElement => {
  return element.nodeType === element.ELEMENT_NODE;
};

const nearest = (
  element: HTMLElement,
  selector: string
): HTMLElement | null => {
  let current: Element | null = element;

  while (current !== null) {
    const found = current.querySelector(selector);

    if (found !== null && isHTMLElement(found)) {
      return found;
    }

    current = current.parentElement;
  }

  return null;
};

((f: () => void) => {
  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", f);
  } else {
    f();
  }
})(function () {
  document.documentElement.className = "";

  const burger = document.getElementById("burger");
  const navbar = document.getElementById("navbar");

  if (burger !== null && navbar !== null) {
    burger.addEventListener("click", function () {
      if (navbar !== null) {
        if (navbar.className === "navbar-menu") {
          navbar.className = "navbar-menu is-active";
        } else {
          navbar.className = "navbar-menu";
        }
      }
    });
  }

  Array.from(document.querySelectorAll(".is-collapsible")).forEach(
    (element) => {
      if (isHTMLElement(element)) {
        const toggle = nearest(element, ".is-collapsible-toggle");

        if (toggle !== null) {
          toggle.addEventListener("click", () => {
            if (element.clientHeight === 0) {
              element.style.cssText = `height: ${element.scrollHeight}px`;
              toggle.textContent = "Less";
            } else {
              element.style.cssText = `height: 0px`;
              toggle.textContent = "Click for Abstract";
            }
          });
        }
      }
    }
  );
});
