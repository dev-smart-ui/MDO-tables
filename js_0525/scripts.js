const segments = {
  'Mining': {
    suggestedModules: ['Research Package', 'Mining Operations', 'Key Mine Personnel', 'Mining Contracts', 'Project Timeline'],
    otherAvailableModules: [
      'Crushing & Grinding',
      'Mineral Processing',
      'Water Supply & Pipelines',
      'Heavy Mobile Equipment',
      'Conveyors',
      'Production Costs',
      'Project Costs & Returns',
      'Remote Camps',
      'Mapper & Coordinates',
    ],
    defaultSelected: 'Mining Contracts',
  },
  'Backfilling': {
    suggestedModules: ['Research Package', 'Mining Operations', 'Key Mine Personnel', 'Mining Contracts', 'Project Timeline'],
    otherAvailableModules: [
      'Crushing & Grinding',
      'Mineral Processing',
      'Water Supply & Pipelines',
      'Heavy Mobile Equipment',
      'Conveyors',
      'Production Costs',
      'Project Costs & Returns',
      'Remote Camps',
      'Mapper & Coordinates',
    ],
    defaultSelected: 'Key Mine Personnel',
  },
  'Comminution': {
    suggestedModules: ['Research Package', 'Crushing & Grinding', 'Mining Operations', 'Key Mine Personnel', 'Mining Contracts', 'Project Timeline'],
    otherAvailableModules: [
      'Mineral Processing',
      'Water Supply & Pipelines',
      'Heavy Mobile Equipment',
      'Conveyors',
      'Production Costs',
      'Project Costs & Returns',
      'Remote Camps',
      'Mapper & Coordinates',
    ],
    defaultSelected: 'Crushing & Grinding',
  },
  'Mineral Processing': {
    suggestedModules: ['Research Package', 'Mineral Processing', 'Key Mine Personnel', 'Project Timeline'],
    otherAvailableModules: [
      'Mining Operations',
      'Mining Contracts',
      'Crushing & Grinding',
      'Water Supply & Pipelines',
      'Heavy Mobile Equipment',
      'Conveyors',
      'Production Costs',
      'Project Costs & Returns',
      'Remote Camps',
      'Mapper & Coordinates',
    ],
    defaultSelected: 'Mineral Processing',
  },
  'Milling Equipment': {
    suggestedModules: ['Research Package', 'Crushing & Grinding', 'Key Mine Personnel', 'Project Timeline'],
    otherAvailableModules: [
      'Mining Operations',
      'Mining Contracts',
      'Mineral Processing',
      'Water Supply & Pipelines',
      'Heavy Mobile Equipment',
      'Conveyors',
      'Production Costs',
      'Project Costs & Returns',
      'Remote Camps',
      'Mapper & Coordinates',
    ],
    defaultSelected: 'Crushing & Grinding',
  },
  'Mobile Equipment': {
    suggestedModules: ['Research Package', 'Heavy Mobile Equipment', 'Key Mine Personnel', 'Project Timeline'],
    otherAvailableModules: [
      'Mining Operations',
      'Mining Contracts',
      'Crushing & Grinding',
      'Mineral Processing',
      'Water Supply & Pipelines',
      'Conveyors',
      'Production Costs',
      'Project Costs & Returns',
      'Remote Camps',
      'Mapper & Coordinates',
    ],
    defaultSelected: 'Heavy Mobile Equipment',
  },
  'Conveyors': {
    suggestedModules: ['Research Package', 'Conveyors', 'Key Mine Personnel', 'Project Timeline'],
    otherAvailableModules: [
      'Mining Operations',
      'Mining Contracts',
      'Crushing & Grinding',
      'Mineral Processing',
      'Water Supply & Pipelines',
      'Heavy Mobile Equipment',
      'Production Costs',
      'Project Costs & Returns',
      'Remote Camps',
      'Mapper & Coordinates',
    ],
    defaultSelected: 'Conveyors',
  },
  'Pipelines': {
    suggestedModules: ['Research Package', 'Water Supply & Pipelines', 'Key Mine Personnel', 'Project Timeline'],
    otherAvailableModules: [
      'Mining Operations',
      'Mining Contracts',
      'Crushing & Grinding',
      'Mineral Processing',
      'Heavy Mobile Equipment',
      'Conveyors',
      'Production Costs',
      'Project Costs & Returns',
      'Remote Camps',
      'Mapper & Coordinates',
    ],
    defaultSelected: 'Water Supply & Pipelines',
  },
  'Project Consulting': {
    suggestedModules: ['Research Package', 'Key Mine Personnel', 'Production Costs', 'Project Costs & Returns', 'Mining Contracts'],
    otherAvailableModules: [
      'Mining Operations',
      'Project Timeline',
      'Crushing & Grinding',
      'Mineral Processing',
      'Water Supply & Pipelines',
      'Heavy Mobile Equipment',
      'Conveyors',
      'Remote Camps',
      'Mapper & Coordinates',
    ],
    defaultSelected: 'Project Costs & Returns',
  },
  'Lodging': {
    suggestedModules: ['Research Package', 'Remote Camps', 'Key Mine Personnel'],
    otherAvailableModules: [
      'Mining Operations',
      'Mining Contracts',
      'Project Timeline',
      'Crushing & Grinding',
      'Mineral Processing',
      'Water Supply & Pipelines',
      'Heavy Mobile Equipment',
      'Conveyors',
      'Production Costs',
      'Project Costs & Returns',
      'Mapper & Coordinates',
    ],
    defaultSelected: 'Remote Camps',
  },
};

const modules = {
  'Research Package': {
    name: 'Research Package',
    iconImg: './images/icons/modules/research.svg',
    img: './images/slides/key-mine-personnel-and-workforce.jpeg',
    description: 'Identify business opportunities by assessing Mining Operations data 1',
  },
  'Mining Operations': {
    name: 'Mining Operations',
    iconImg: './images/icons/modules/mining-operations.svg',
    img: './images/slides/heavy-mobile-equipment.jpeg',
    description: 'Identify business opportunities by assessing Mining Operations data 2',
  },
  'Key Mine Personnel': {
    name: 'Key Mine Personnel',
    iconImg: './images/icons/modules/key-managers.svg',
    img: './images/slides/commodity-production.jpeg',
    description: 'Identify business opportunities by assessing Mining Operations data 3',
  },
  'Mining Contracts': {
    name: 'Mining Contracts',
    iconImg: './images/icons/modules/mining-contracts.svg',
    img: './images/slides/mining-operations.jpeg',
    description: 'Identify business opportunities by assessing Mining Operations data 4',
  },
  'Project Timeline': {
    name: 'Project Timeline',
    iconImg: './images/icons/modules/key-managers.svg',
    img: './images/slides/reserves-and-resources.jpeg',
    description: 'Identify business opportunities by assessing Mining Operations data 5',
  },
  'Crushing & Grinding': {
    name: 'Crushing & Grinding',
    iconImg: './images/icons/modules/key-managers.svg',
    img: './images/slides/comminution-crushers-and-mills.jpeg',
    description: 'Identify business opportunities by assessing Mining Operations data 6',
  },
  'Mineral Processing': {
    name: 'Mineral Processing',
    iconImg: './images/icons/modules/mineral-processing.svg',
    img: './images/slides/mineral-processing.jpeg',
    description: 'Identify business opportunities by assessing Mining Operations data 7',
  },
  'Water Supply & Pipelines': {
    name: 'Water Supply & Pipelines',
    iconImg: './images/icons/modules/key-managers.svg',
    img: './images/slides/project-costs-and-returns.jpeg',
    description: 'Identify business opportunities by assessing Mining Operations data 8',
  },
  'Heavy Mobile Equipment': {
    name: 'Heavy Mobile Equipment',
    iconImg: './images/icons/modules/mobile-equipment.svg',
    img: './images/slides/project-development-timeline.jpeg',
    description: 'Identify business opportunities by assessing Mining Operations data 9',
  },
  'Conveyors': {
    name: 'Conveyors',
    iconImg: './images/icons/modules/key-managers.svg',
    img: './images/slides/water-supply-and-consumption.jpeg',
    description: 'Identify business opportunities by assessing Mining Operations data 10',
  },
  'Production Costs': {
    name: 'Production Costs',
    iconImg: './images/icons/modules/key-managers.svg',
    img: './images/slides/key-mine-personnel-and-workforce.jpeg',
    description: 'Identify business opportunities by assessing Mining Operations data 11',
  },
  'Project Costs & Returns': {
    name: 'Project Costs & Returns',
    iconImg: './images/icons/modules/price-change.svg',
    img: './images/slides/heavy-mobile-equipment.jpeg',
    description: 'Identify business opportunities by assessing Mining Operations data 12',
  },
  'Remote Camps': {
    name: 'Remote Camps',
    iconImg: './images/icons/modules/key-managers.svg',
    img: './images/slides/commodity-production.jpeg',
    description: 'Identify business opportunities by assessing Mining Operations data 13',
  },
  'Mapper & Coordinates': {
    name: 'Mapper & Coordinates',
    iconImg: './images/icons/modules/mapper.svg',
    img: './images/slides/mining-operations.jpeg',
    description: 'Identify business opportunities by assessing Mining Operations data 14',
  },
};

let defaultSelected = undefined;
let selectedSegments = [];
let suggestedModules = [];
let otherAvailableModules = [];

$(document).ready(function () {
  let activePageIndex = 0;

  /**
   * Initialize a page slider
   */
  const pageSlider = new Swiper('#page-slider', {
    slidesPerView: 1,
    direction: 'vertical',
    speed: 800,
    mousewheel: false,
    allowTouchMove: false,
    allowSlideNext: true,
    allowSlidePrev: true,
    effect: 'fade',
    fadeEffect: {
      crossFade: true,
    },
    on: {
      /**
       * Event will be fired when currently active slide is changed
       */
      slideChange: function (swiper) {
        // Animate when navigating from 1 to 2 slide
        if (activePageIndex === 0 && swiper.activeIndex === 1) {
          hideFirstSlideAnimation();
          showSecondSlideAnimation();
        }

        // Animate when navigating from 2 to 1 slide
        if (activePageIndex === 1 && swiper.activeIndex === 0) {
          showFirstSlideAnimation();
          hideSecondSlideAnimation();
        }

        // Animate when navigating from 2 to 3 slide
        if (activePageIndex === 1 && swiper.activeIndex === 2) {
          hideSecondSlideAnimation();
          showThirdSlideAnimation();

          $('.presentation-modules-item.presentation-modules-item-active').click();
        }

        // Animate when navigating from 3 to 2 slide
        if (activePageIndex === 2 && swiper.activeIndex === 1) {
          showSecondSlideAnimation();
          hideThirdSlideAnimation();
        }

        if (activePageIndex > 1 && swiper.activeIndex === 0) {
          // TODO: As it is the last slide implemented for now - so hide the third slide.
          hideThirdSlideAnimation();
          showFirstSlideAnimation();
        }

        activePageIndex = swiper.activeIndex;
      },
    },
  });

  /**
   * Initialize a comprehensive slider
   */
  new Swiper('#comprehensive-slider', {
    slidesPerView: 'auto',
    freeMode: true,
    speed: 700,
    pagination: {
      el: '.comprehensive-coverage-pagination',
      clickable: true,
    },
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
    slideClass: 'comprehensive-slide-item',
    slideActiveClass: 'comprehensive-slide-item-active',
    grabCursor: true,
    preventInteractionOnTransition: true,
  });

  /**
   * Navigate between page slides
   */
  $('#getStarted, .btn-next').on('click', function () {
    pageSlider.slideNext();
  });

  $('.section-back').on('click', function () {
    pageSlider.slidePrev();
  });

  $('.section-close').on('click', function () {
    pageSlider.slideTo(0);
  });

  /**
   * Toggle active state on slide item
   */
  $('#comprehensive-slider .comprehensive-slide-item').on('click', function () {
    $(this).toggleClass('swiper-slide-checked');

    $('#btnSegmentsNext').removeAttr('disabled');

    const key = $(this).attr('data-id');
    const indexOf = selectedSegments.indexOf(key);

    if (indexOf >= 0) {
      selectedSegments.splice(indexOf, 1);
      suggestedModules = [];
      otherAvailableModules = [];
    } else {
      selectedSegments.push(key);
    }

    for (const segment of selectedSegments) {
      defaultSelected = segments[segment].defaultSelected;

      for (const suggestedModule of segments[segment].suggestedModules) {
        suggestedModules.push(suggestedModule);
        suggestedModules = [...new Set(suggestedModules)];
      }

      for (const otherAvailableModule of segments[segment].otherAvailableModules) {
        otherAvailableModules.push(otherAvailableModule);
        otherAvailableModules = [...new Set(otherAvailableModules)];
      }
    }

    const result = otherAvailableModules.filter(x => {
      return !suggestedModules.some(t => t === x);
    });

    let suggestedModuleItemsHtml = '';
    for (const module of suggestedModules) {
      const elemClass = 'presentation-modules-item ' + (module === defaultSelected ? 'presentation-modules-item-active' : '') + ' flex items-center';
      suggestedModuleItemsHtml += `
        <div class="${ elemClass }" onclick="togglePresentationMenuItem(this)">
          <img src="${ modules[module].iconImg }" alt="${ modules[module].name }">
          <span>${ module }</span>
        </div>
      `;
    }

    let otherAvailableModuleItemsHtml = '';
    for (const module of result) {
      otherAvailableModuleItemsHtml += `
        <div class="presentation-modules-item flex items-center" onclick="togglePresentationMenuItem(this)">
          <img src="${ modules[module].iconImg }" alt="${ modules[module].name }">
          <span>${ module }</span>
        </div>
      `;
    }

    const html = `
      <h5>Suggested Modules</h5>
      <div class="presentation-modules">
        ${ suggestedModuleItemsHtml }
      </div>
      <h5>Other Available Modules</h5>
      <div class="presentation-modules">
        ${ otherAvailableModuleItemsHtml }
      </div>
    `;

    $('.package-info--img img').attr('src', modules[defaultSelected].img);
    $('.package-info h3').html(modules[defaultSelected].name);
    $('.package-info p').html(modules[defaultSelected].description);
    $('.presentation-menu').html(html);
  });
});

/**
 * Hide icon back when scroll the presentaion menu to avoid overlapping elements
 */
$('.presentation-menu').scroll(function () {
  const scrollTop = $('.presentation-menu').scrollTop();

  if (scrollTop >= 35) {
    $('.section-back').hide();
  } else {
    $('.section-back').show();
  }
});

/**
 * Redirect on click
 */
$('#requestDemo').on('click', function () {
  window.open('https://miningdatasolutions.com/assetProfile_May_9.html');
});

/**
 * Redirect on click
 */
$('#requestInvoice').on('click', function () {
  window.open('https://miningdatasolutions.com/may-9.html');
});

/**
 * Accordion item click
 */
function accordionItemClick(elem) {
  if ($(elem).hasClass('accordion-active')) {
    $('.accordion__content').slideUp(300);
    $(elem).removeClass('accordion-active');
  } else {
    $('.accordion__item').removeClass('accordion-active');
    $('.accordion__item').find('.accordion__content').slideUp(300);
    $(elem).addClass('accordion-active');
    $(elem).find('.accordion__content').slideDown(300);
  }
}

/**
 * Click event on presentation-modules-item element
 */
function togglePresentationMenuItem(elem) {
  $('.presentation-modules-item').removeClass('presentation-modules-item-active');
  $(elem).addClass('presentation-modules-item-active');

  defaultSelected = $(elem).find('span').text();

  let html = '';
  let li = '';
  let index = 0;
  let kk = 0;

  $('.package-info--img img').attr('src', modules[defaultSelected].img);
  $('.package-info h3').html(modules[defaultSelected].name);
  $('.package-info p').html(modules[defaultSelected].description);

  for (const i of suggestedModules) {
    kk++;
    li += `<li>${ kk }</li>`;
  }

  for (const k of suggestedModules) {
    index++;
    html += `
      <div class="accordion__item" onclick="accordionItemClick(this)">
        <div class="accordion__title">
          <div class="accordion__arrow">
            <span class="accordion__arrow-item ">
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                <g clip-path="url(#clip0_332_23416)">
                  <path d="M4 6L8 10L12 6" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                </g>
                <defs>
                  <clipPath id="clip0_332_23416">
                    <rect width="16" height="16" fill="white" transform="matrix(1 0 0 -1 0 16)" />
                  </clipPath>
                </defs>
              </svg>
            </span>
          </div>
          <span class="accordion__title-text">${ defaultSelected + ' ' + index }</span>
        </div>
        <div class="accordion__content">
          <ul>${ li }</ul>
        </div>
      </div>
    `;
  }

  $('.accordion').html(html);

  setTimeout(function () {
    $('.accordion .accordion__item')[0].click();
  }, 500);
}

function hideFirstSlideAnimation () {
  $('#boost').addClass('animate__fadeOutLeft');
  $('#laptop').addClass('animate__fadeOutUpBig');
}

function showFirstSlideAnimation () {
  $('#boost').removeClass('animate__fadeOutLeft');
  $('#laptop').removeClass('animate__fadeOutUpBig');
}

function hideSecondSlideAnimation () {
  $('.section-select-target .section-back').removeClass('animate__fadeIn').addClass('animate__fadeOut');
  $('.section-select-target .section-close').removeClass('animate__fadeIn').addClass('animate__fadeOut');
  $('.section-select-target .title').removeClass('animate__fadeInDown').addClass('animate__fadeOutUp');
  $('#comprehensive-slider').removeClass('animate__fadeInRight').addClass('animate__fadeOutRight');
  $('.swiper-dots-wrapper').removeClass('animate__fadeInUp').addClass('animate__fadeOutDown');
}

function showSecondSlideAnimation () {
  $('.section-select-target .section-back').removeClass('animate__fadeOut').addClass('animate__fadeIn');
  $('.section-select-target .section-close').removeClass('animate__fadeOut').addClass('animate__fadeIn');
  $('.section-select-target .title').removeClass('animate__fadeOutUp').addClass('animate__fadeInDown');
  $('#comprehensive-slider').removeClass('animate__fadeOutRight').addClass('animate__fadeInRight');
  $('.swiper-dots-wrapper').removeClass('animate__fadeOutDown').addClass('animate__fadeInUp');
}

function hideThirdSlideAnimation () {
  $('.presentation-menu').removeClass('animate__fadeInLeft').addClass('animate__fadeOutLeft');
  $('.section-modules .main').removeClass('animate__fadeInRight').addClass('animate__fadeOutRight');
}

function showThirdSlideAnimation () {
  $('.presentation-menu').removeClass('animate__fadeOutLeft').addClass('animate__fadeInLeft');
  $('.section-modules .main').removeClass('animate__fadeOutRight').addClass('animate__fadeInRight');
}

// Sign out on page load
$('.sign-out').click();
