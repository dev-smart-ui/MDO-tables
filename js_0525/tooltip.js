const tooltipEvent = new Event('tooltipEvent');

document.addEventListener('tooltipEvent', () => {
});

/**
 * Initialize tooltips
 */
let tippyInstances = {};

function initTooltips() {
  let tooltipIcons = $('.lock-tooltip');

  $(tooltipIcons).each((index, element) => {
    let text = $(element).find('.tooltip-text').text();
    let config = {
      content: text,
      updateDuration: 450,
      duration: 450,
      delay: [2000, 0],
      arrow: true,
      interactive: true,
      placement: 'top',
      appendTo: () => document.body,
    };

    if (!tippyInstances[index]) {
      var tippyInstance = tippy(element, config);
      tippyInstances[index] = tippyInstance;
    }
  });
}

$('.lock-tooltip').ready(() => initTooltips());

function toggleMarkers(on) {
  if(on) {
    $('.tip-marker').each(function() {
      $(this).addClass('visible');
    })
  } else {
    $('.tip-marker').each(function() {
      $(this).removeClass('visible');
    })
  }
}

/**
 * Disable tooltips on mobile for "Click for more info". It should open a modal window instead
 */
$(window).on('resize load', debounce(() => disableMarkersOnMobile(), 300));

function disableMarkersOnMobile() {
  const windowWidth = window.innerWidth;
  const isMobile = windowWidth < 1150;
  const checkIfTablet = () => {
    const userAgent = navigator.userAgent.toLowerCase();
    const isTablet = /(ipad|tablet|(android(?!.*mobile))|(windows(?!.*phone)(.*touch))|kindle|playbook|silk|(puffin(?!.*(IP|AP|WP))))/
      .test(userAgent) || navigator.maxTouchPoints &&
            navigator.maxTouchPoints > 2 &&
            /MacIntel/.test(navigator.platform);
    return isTablet;
  }
  const values = Object.values(tippyInstances);

  if (isMobile || checkIfTablet()) {
    if (values.length) {
      Object.values(tippyInstances).forEach((element) => {
        element.disable();
      });
    }
  } else {
    if (values.length) {
      Object.values(tippyInstances).forEach((element) => {
        element.enable();
      });
    }
  }
}

(function () {
  const interval = setInterval(() => {
    const windowWidth = window.innerWidth;
    const isMobile = windowWidth < 1150;
    const values = Object.values(tippyInstances);
    if (!isMobile || !values.length) return;
    clearInterval(interval);
    values.forEach((element) => {
      element.disable();
    });
  }, 500);
})();

