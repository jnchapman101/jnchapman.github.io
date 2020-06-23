const nearestToggle = (collapsible: Element): HTMLElement | null => {
  let element: Element | null = collapsible;

  while (element !== null) {
    const toggle = element.querySelector(".is-collapsible-toggle");

    if (toggle !== null) {
      return toggle;
    }

    element = element.parentElement;
  }

  return null;
};

(function () {
  if (document.readyState === "loading") {
    return function (f: () => void) {
      document.addEventListener("DOMContentLoaded", f);
    };
  }

  return function (f: () => void) {
    f();
  };
})()(function () {
  document.documentElement.className = "";

  var burger = document.getElementById("burger");
  var navbar = document.getElementById("navbar");

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
      const toggle = nearestToggle(element);

      if (toggle !== null) {
        toggle.addEventListener("click", () => {
          if (element.className === "container content is-collapsible") {
            element.className = "container content is-collapsible is-active";
            (element as any).style.cssText = `height: ${element.scrollHeight}px`;
            toggle.textContent = "Less";
          } else {
            element.className = "container content is-collapsible";
            (element as any).style.cssText = `height: 0px`;
            toggle.textContent = "More";
          }
        });
      }
    }
  );
});
