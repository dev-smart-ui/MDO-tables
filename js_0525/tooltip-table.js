const tooltipTableEvent = new Event("tooltipTableEvent");
let isDesktop = window.innerWidth > 1150; // Initialize isDesktop based on the initial window width
let eventData;

// Function to update isDesktop based on window width
function updateIsDesktop() {
  isDesktop = window.innerWidth > 1150;
  document.dispatchEvent(tooltipTableEvent); // Trigger the tooltipTableEvent when isDesktop changes

  document.querySelectorAll(".custom-scroll").forEach((container) => {
    if (container.classList.contains("search-results-container")) {
      const theadHeight = window.innerWidth > 1919 ? 54 : 82;
      $(".search-results-container.custom-scroll .ps__rail-y").css(
        "margin",
        `${theadHeight}px 0`,
      );
    }
  });
}

// Event listener for window resize
window.addEventListener("resize", updateIsDesktop);

function updateTopPositionForSelector() {
  if (!isDesktop && $(".select-commodity").length) {
    const selectorPositionOnPage = $(".select-commodity").offset().top;
    const selectorHeight = $(".select-commodity").height();
    $(".ui-selectmenu-menu").css(
      "top",
      `${selectorPositionOnPage + selectorHeight}px`,
    );
  }
}

window.addEventListener("scroll", updateTopPositionForSelector);

document.addEventListener("tooltipTableEvent", () => {
});

var assetTooltips = {};
var infoTooltips = {};

$(window).on('resize load', debounce(() => {
  var mobileTooltips = $(".mobile-tooltip");

  $(mobileTooltips).each((i, element) => {
    var parentTd = $(element).parents("td");
    var aLink = $(element).parent().find("a");
    var aLinkText = aLink.text();
    var assetSpanId = aLink.parent().attr("id");
    var flag = $(element).parents(".asset-label").find(".flag");
    var isCurrentElementFlagIcon = $(element).hasClass("flag");

    var tooltipAdditionalText = flag.hasClass("multi-operation")
                                ? "Multi - mine Operation"
                                : flag.hasClass("single-operation")
                                  ? "Part of an Operation"
                                  : "";

    var fullTooltipText =
      `<a href="${aLink.attr('href')}" target="_blank" style="color: var(--color-blue);" class="tippy-tooltip-text-a">
            ${aLinkText.trim()} <br> ${tooltipAdditionalText.trim()}
      </a>
      <span class="tippy-tooltip-text-span">${aLinkText.trim()} <br> ${tooltipAdditionalText.trim()}</span>`;

    /**
     * Do not show a tooltip on a flag icon.
     */
    if (
      (!isCurrentElementFlagIcon &&
        assetSpanId &&
        tooltipAdditionalText.length) ||
      (!isDesktop &&
        !isCurrentElementFlagIcon &&
        assetSpanId &&
        element.offsetWidth < element.scrollWidth) ||
      (!isDesktop &&
        !isCurrentElementFlagIcon &&
        assetSpanId &&
        element.offsetWidth <= 31)
    ) {
      var tippyConfig = {
        triggerTarget: parentTd[0],
        content: fullTooltipText,
        updateDuration: 450,
        duration: 450,
        delay: [2000, 0],
        allowHTML: true,
        arrow: true,
        interactive: true,
        placement: "top",
      };

      /**
       * Check if tooltips instance was created and added to an object.
       */
      if (!assetTooltips[aLinkText]) {
        var instance = tippy(element, tippyConfig);
        assetTooltips[aLinkText] = instance;
      }
    } else {
      if (assetTooltips[aLinkText]) {
        assetTooltips[aLinkText].destroy();
        delete assetTooltips[aLinkText];
      }
    }

    /**
     * Add tooltips for Job title, Name, Ref, date.
     */
    var key = $(element).text().replace(/[^a-zA-Z0-9]/g, '') + i;
    if (
      $(element).hasClass("nowrap-text") &&
      !isDesktop &&
      element.offsetWidth < element.scrollWidth
    ) {
      var tippyConfig = {
        content: $(element).text(),
        updateDuration: 450,
        duration: 450,
        delay: [2000, 0],
        arrow: true,
        interactive: true,
        placement: "top",
      };

      /**
       * Check if tooltips instance was created and added to an object.
       */
      if (!infoTooltips[key]) {
        var instance = tippy(element, tippyConfig);
        infoTooltips[key] = instance;
      }
    } else {
      if (infoTooltips[key]) {
        infoTooltips[key].destroy();
        delete infoTooltips[key];
      }
    }
  });
}, 300));

/**
 * Hide tooltips on scroll inside table
 */
$('#UpdatePanel').ready(function () {
  $('.search-results-container.custom-scroll').on('ps-scroll-x ps-scroll-y', () => {
    Object.values(assetTooltips).forEach((element) => {
      element.hide();
    });
    Object.values(infoTooltips).forEach((element) => {
      element.hide();
    });
  });
});
