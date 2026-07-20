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

  const filters = Array.from(document.querySelectorAll(".research-filter"));
  const filterStatus = document.getElementById("research-filter-status");
  const filterNote = document.getElementById("research-filter-note");
  const researchItems = Array.from(document.querySelectorAll(".research-item"));
  const researchSections = Array.from(document.querySelectorAll(".research-section"));
  let activeTopics: string[] = [];

  const setFilterButtonState = (): void => {
    filters.forEach((filter) => {
      if (isHTMLElement(filter)) {
        const topic = filter.getAttribute("data-topic") || "all";
        const isActive = topic === "all" ? activeTopics.length === 0 : activeTopics.indexOf(topic) !== -1;
        filter.setAttribute("aria-pressed", isActive ? "true" : "false");
        filter.className = isActive ? "button is-dark research-filter" : "button research-filter";
      }
    });
  };

  const applyResearchFilter = (): void => {
    let visible = 0;
    const total = researchItems.filter((item) => isHTMLElement(item) && item.getAttribute("data-count") === "paper").length;
    const activeLabel = activeTopics.length === 0 ? "All" : activeTopics.join(" + ");

    setFilterButtonState();

    researchItems.forEach((item) => {
      if (isHTMLElement(item)) {
        const topics = (item.getAttribute("data-topics") || "")
          .split(",")
          .map((value) => value.trim())
          .filter((value) => value.length > 0);
        const shouldShow = activeTopics.length === 0 || activeTopics.some((topic) => topics.indexOf(topic) !== -1);
        item.hidden = !shouldShow;
        if (shouldShow && item.getAttribute("data-count") === "paper") {
          visible += 1;
        }
      }
    });

    researchSections.forEach((section) => {
      if (isHTMLElement(section)) {
        const sectionItems = Array.from(section.querySelectorAll(".research-item"));
        const hasVisibleItem = sectionItems.some((item) => isHTMLElement(item) && !item.hidden);
        const emptyMessage = section.querySelector(".research-empty-message");
        if (emptyMessage !== null && isHTMLElement(emptyMessage)) {
          emptyMessage.hidden = activeTopics.length === 0 || hasVisibleItem;
        }
      }
    });

    if (filterStatus !== null) {
      filterStatus.textContent = activeTopics.length === 0
        ? "Showing: All papers"
        : `Showing: ${activeLabel}`;
    }

    if (filterNote !== null) {
      filterNote.textContent = `Showing ${visible} out of ${total} papers.`;
    }
  };

  filters.forEach((filter) => {
    if (isHTMLElement(filter)) {
      filter.addEventListener("click", () => {
        const topic = filter.getAttribute("data-topic") || "all";
        if (topic === "all") {
          activeTopics = [];
        } else if (activeTopics.indexOf(topic) === -1) {
          activeTopics.push(topic);
        } else {
          activeTopics = activeTopics.filter((activeTopic) => activeTopic !== topic);
        }
        applyResearchFilter();
      });
    }
  });

  applyResearchFilter();

  Array.from(document.querySelectorAll(".is-collapsible")).forEach(
    (element) => {
      if (isHTMLElement(element)) {
        const toggle = nearest(element, ".is-collapsible-toggle");

        if (toggle !== null) {
          toggle.addEventListener("click", () => {
            if (element.clientHeight === 0) {
              element.style.cssText = `height: ${element.scrollHeight}px`;
              toggle.innerHTML = "Hide abstract &uarr;";
              toggle.setAttribute("aria-expanded", "true");
            } else {
              element.style.cssText = `height: 0px`;
              toggle.innerHTML = "Show abstract &darr;";
              toggle.setAttribute("aria-expanded", "false");
            }
          });
        }
      }
    }
  );
});
