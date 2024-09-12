$(document).on('click', '.button_miningResponsive, .button_mining2', function (e) {
  if(!$(this).hasClass('active')) {
    $('.button_miningResponsive').each(function () {
      $(this).toggleClass('active');
    })
    $('.button_mining2').each(function () {
      $(this).toggleClass('active');
    })
  }
});

$(document).on('click', '#category_selector-menu', function () {
    let i = $('#category_selector').val();
    const categories = [
      "Drill Results",
      "Reserves & Resources",
      "PEA / PFS / DFS",
      "Permitting",
      "Construction/Expansion",
      "Commenced Production",
      "Suspension / Restart",
      "Production Results",
      "Financing",
      "M&A / Asset Sale",
      "Mining Contracts"
    ]
  
    $('#tab_label').text(categories[i - 1]);
});

//Menu on click toggle for Mobile Devices

function showmenu(){
  const hideBtn = document.getElementById('hide_button');
  const other = document.getElementById('other');

  $('body').toggleClass('sidebar-open');

  if (other) {
    other.classList.toggle('show');
  }

  if (hideBtn) {
    hideBtn.classList.toggle('hide');
  }
}

//Subscription menu2 on click toggle for Mobile Devices

function showsubscription2(){
  document.getElementById('login_mobile').classList.toggle('show')
  document.getElementById('arrowreturn2').classList.toggle('show')
  document.getElementById('nav-icon3').classList.toggle('arrow')
  document.getElementById("logo_mobile").classList.toggle('hide');
}

//Login Screen on click toggle for Mobile Devices

function showslogin2(){
  document.getElementById('nav-icon3').classList.toggle('arrow')
  document.getElementById('arrowreturn2').classList.toggle('show')
  document.getElementById('login_mobile').classList.toggle('show')
  document.getElementById("logo_mobile").classList.toggle('hide');
}

//Animation for login screen on click toggle for Mobile Devices

function animateSubscription(){
  document.getElementById('subscribeaction').classList.toggle('show')
}

// function to control the color of the span for the commodities

function percentageChange (){
  // Get all elements with the class "commodity_percentage"
  const percentageElements = document.querySelectorAll('.commodity_percentage');

  // Loop through each percentage element
  percentageElements.forEach(element => {
    // Get the percentage value from the element's textContent property
    const percentageValue = element.textContent;
    const arrowElement = element.previousElementSibling;
    // Check if the percentage value contains a negative sign
    if (percentageValue.includes('-')) {
      // Add a "negative" class to the element to change its color
      arrowElement.classList.add('negative');
      element.classList.add('negative');
    }
  });
}

document.addEventListener("DOMContentLoaded", percentageChange);


//Function to open the modal message for signin

function openModalDesktop(){
  // Get the modal
  var modal = document.getElementById("modal");

  // Set the initial opacity to 0
  modal.style.opacity = "0";

  // Display the modal
  modal.style.display = "flex";

  // Animate the opacity to 1 over 0.5 seconds
  setTimeout(function() {
    modal.style.opacity = "1";
    modal.style.transition = "opacity 0.4s ease-in-out";
  }, 100);

  // Get the <span> element that closes the modal
  var span = document.getElementsByClassName("close")[0];

  // When the user clicks on <span> (x), close the modal
  span.onclick = function() {
    modal.style.opacity = "0";
    modal.style.transition = "opacity 0.4s ease-in-out";
    setTimeout(function() {
      modal.style.display = "none";
    }, 500);
  }

  // When the user clicks anywhere outside of the modal, close it
  window.onclick = function(event) {
    if (event.target == modal) {
      modal.style.opacity = "0";
      modal.style.transition = "opacity 0.4s ease-in-out";
      setTimeout(function() {
        modal.style.display = "none";
      }, 500);
    }
  }
}

// Function to control the behavior of the slider over the filter in mobile and desktop devices

function SliderControl() {
  const value = document.querySelector("#value")
  const input = document.querySelector("#slider")

  if (!value || !input) {
    console.error('Warning: Could not find value or input element.')
  } else {
    value.textContent = input.value
    input.addEventListener("input", (event) => {
      value.textContent = event.target.value
    })
  }

  // Range slider Desktop

  const value2 = document.querySelector("#value2")
  const input2 = document.querySelector("#slider2")

  if (!value2 || !input2) {
    console.error('Warning: Could not find value2 or input2 element.');
    return;
  } else {
    value2.textContent = input2.value
    input2.addEventListener("input", (event) => {
      value2.textContent = event.target.value
    })
  }

  const rangeInputs = document.querySelectorAll('input[type="range"]')
  const numberInput = document.querySelector('input[type="number"]')

  function handleInputChange(e) {
    let target = e.target
    if (e.target.type !== 'range') {
      target = document.getElementById('range')
    }

    const min = target.min
    const max = target.max
    const val = target.value

    target.style.backgroundSize = (val - min) * 100 / (max - min) + '% 100%'
  }

  rangeInputs.forEach(input => {
    input.addEventListener('input', handleInputChange)
  })
}

document.addEventListener("DOMContentLoaded", SliderControl);

// Function to control the behavior of the slider over the filter in mobile and desktop devices
function ScrollPopup(targetId) {
  const target = document.getElementById(targetId);
  const page = document.getElementById('news-page');
  let Subscribe_block = document.getElementById("subscribe_popup");

  if (target && page) { // Verify if the element exist
    page.addEventListener("scroll", function() {

      const targetPosition = target.getBoundingClientRect().top;
      const windowHeight = window.innerHeight;

      if (targetPosition < windowHeight) {
        Subscribe_block.classList.add("show");
        setTimeout(function(){
          Subscribe_block.classList.add("animate-in");
        }, 0);
      } else {
        Subscribe_block.classList.remove("show");
        Subscribe_block.classList.remove("animate-in");
      }
    });
  }
}


document.addEventListener("DOMContentLoaded", function() {
  ScrollPopup("popupTrigger");
});

// Function to resize butttom on filter category
function ResizeButton() {
  const anchoredCtaWeb = document.getElementById("filter_categories");
  const blurtop = document.getElementById("blurtop");
  const blurbottom = document.getElementById("blurbottom");
  const page = document.getElementById("news-page");
  if (!anchoredCtaWeb || !blurtop || !blurbottom || !page) return;// Verify if the elements exist
  const banner = $('.Main_banner').outerHeight();
  const height = window.innerHeight - banner - $('.filter_container').height() + $('#filter_categories').outerHeight() - 114;
  if (page.scrollTop > 50) {
    const min = Math.min(banner, page.scrollTop);
    $(anchoredCtaWeb).css('height', `${height + min}px`);
  }
  if (page.scrollTop < 50) {
    $(anchoredCtaWeb).css('height', `${height}px`);
  }
  setTimeout(() => {
    if (anchoredCtaWeb.scrollHeight - anchoredCtaWeb.clientHeight === 0) {
      anchoredCtaWeb.classList.add("scroll");
      blurtop.classList.add("scroll");
      blurbottom.classList.add("scroll");
    } else {
      anchoredCtaWeb.classList.remove("scroll");
      blurtop.classList.remove("scroll");
      blurbottom.classList.remove("scroll");
    }
  }, 1500);
}

//Function to animate the filter categories to expand on scroll

function init() {
  $('.news-page').on("scroll", function() {
    ResizeButton();
  });
  $(window).on('resize', debounce(function() {
      ResizeButton();
    }, 300));
  setTimeout(() => ResizeButton(), 1000);
}

document.addEventListener("DOMContentLoaded", init);

// Function for assigning api values in commodities
function fetchAPI() {
  // Static Data
  const staticData = {
    rates: {
      Indium: {end_rate: 1.5, start_rate: 1.3},
      IronOre: {end_rate: 1800.0, start_rate: 1795.0},
      LBMASilver: {end_rate: 2.0, start_rate: 1.8},
      XAGSilverToz: {end_rate: 2.0, start_rate: 1.8},
      LMELEAD: {end_rate: 2.56, start_rate: 1.8},
      LMENi: {end_rate: 3.56, start_rate: 1.8},
      LMECu: {end_rate: 4.56, start_rate: 1.8},
      LMEZn: {end_rate: 5.56, start_rate: 1.8},
      Mo: {end_rate: 6.56, start_rate: 1.8},
      Ni: {end_rate: 7.56, start_rate: 1.8},
      Ruthenium: {end_rate: 8.56, start_rate: 1.8},
      U: {end_rate: 9.56, start_rate: 1.8},
      XAUGoldtoz: {end_rate: 19.56, start_rate: 1.8},
    }
  };

  const rates = staticData.rates;
  const commoditiesContainer = document.querySelector('.Commodities');

  for (const symbol in rates) {
    const rate = rates[symbol];
    const close = parseFloat(rate.end_rate.toFixed(2));
    const high = rate.start_rate;
    const low = rate.end_rate;

    let percentage = parseFloat((((high - low) / high) * 100).toFixed(1));
    percentageChange(percentage);
    const commodity = document.createElement('div');
    commodity.className = 'commodity_container carousel-item';
    commodity.innerHTML = `
        <span class="commodity_metal">${symbol}</span>
        <p class="commodity_price">$ ${close}</p>
        <span class="commodities-arrow"></span>
        <span class="commodity_percentage">${percentage}%</span>
      `;

    commoditiesContainer.appendChild(commodity);
  }
  $(commoditiesContainer).children()
      .clone(true, true)
      .each((i, item) => commoditiesContainer.appendChild(item));
  setTimeout(() => {
    $(commoditiesContainer).addClass('carousel-track');
    $(commoditiesContainer).parent().parent()
        .on('mouseenter', () => $(commoditiesContainer).addClass('paused'));

    $(commoditiesContainer).parent().parent()
        .on('mouseleave', () => $(commoditiesContainer).removeClass('paused'));
  }, 300);
}

$(document).ready(function() {
  fetchAPI();
});

$(document).ready(function() {
  // Get the carousel container and track elements
  const carouselTrack = document.querySelector('.carousel-track');

// Duplicate carousel items for continuous scrolling effect
  if(carouselTrack) {
    carouselTrack.innerHTML += carouselTrack.innerHTML;
  }
  initializeCommoditySelectMenu();
});

function initializeCommoditySelectMenu() {
  $('.category_selector').selectmenu();
  $('#select_filter_commodity').selectmenu();
  $('#select_metal_dropdown').selectmenu();
}

function fixCssMedia() {
  const css = ['header.css', 'authorized-block-mobile-bottom.css', 'auth.css', 'authorized-block.css', 'not-authorized.css'];
  css.forEach(file => {
    const styleSheet = Object.values(document.styleSheets).find((s) => s.href?.includes(file));
    if (!styleSheet) return;
    const rules = Object.values(styleSheet.rules).filter(r => r.type === 4);
    if (!rules.length) return;
    rules.forEach(rule => {
      rule.media.mediaText = "screen and (max-width: 1024px)";
    });
  });
}

/**
 * Close JqueryUI SelectMenu dropdown on window resize
 */
const closeSelectMenu = () => {
  $('.category_selector').selectmenu('close');
  $('#select_filter_commodity').selectmenu('close');
  $('#select_metal_dropdown').selectmenu('close');
}

$(window).on('resize', closeSelectMenu);

$(document).ready(function() {
  $("#news-page").on('scroll', closeSelectMenu)
})


document.addEventListener("DOMContentLoaded", () => {
  // fixCssMedia();
  $('.filter_form button').on('click', function(e) {
    e.preventDefault();
    setTimeout(() => $('.filter_form').submit(), 500);
  });
});
