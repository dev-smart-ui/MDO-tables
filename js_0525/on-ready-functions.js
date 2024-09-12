(function () {
  let scrollCount = 0;
  const resizeObserver = new ResizeObserver((entries) => {
    setTableHeight();
  });
  setInterval(() => {
    if (!$('#list_menu').length || !$('.custom-scroll').length) return;
    if (document.querySelectorAll('.custom-scroll').length === scrollCount) return;
    scrollCount = document.querySelectorAll('.custom-scroll').length
    // clearInterval(interval);
    resizeObserver.observe($('#list_menu')[0]);
	//if(vw == "")
		if(!$('.tabs-main-menu.tabs-assets').length) readQueryParam(vw);
    document.querySelectorAll('.custom-scroll').forEach(container => {
      if ($(container).hasClass('ps')) return;
      var scrollPanel = new PerfectScrollbar(container, {
        wheelPropagation: true,
      });
      if ($(container).hasClass('search-results-container')) {
        $(window).on('resize load', debounce(function() {
          scrollPanel.update();
        }, 300));
        $(scrollPanel).on('ps-scroll-x ps-scroll-y', () => {
          scrollPanel.update();
        });
      }
	  

	// ----------- Prevent overscrolling to right ------------------

	container.addEventListener('scroll', () => {
	  const maxScrollLeft = container.scrollWidth - container.clientWidth; 

	  if (container.scrollLeft + 5 > maxScrollLeft) {

		if (window.innerWidth < 1400) 
			container.scrollLeft = maxScrollLeft-4; 
		else if (window.innerWidth > 1399 && window.innerWidth < 1500)
			container.scrollLeft = maxScrollLeft-6;
		else if (window.innerWidth > 1499 && window.innerWidth < 1600)
			container.scrollLeft = maxScrollLeft-10;		
		else
			container.scrollLeft = maxScrollLeft-21; //alert(window.innerWidth);
		
	  }
	});	
	
	$(window).on('resize', debounce(function () {
        const marginSize = $(scrollPanel.element).find('th:first-child').outerWidth();
        $(scrollPanel.element).find('.ps__rail-x').css('margin-left', marginSize);
		
	  }, 100))	
	
	// ---------------------	  
		
      //if($(scrollPanel.element).hasClass('table-container') && $(scrollPanel.element).hasClass('ps--active-x')) {
	  if($(scrollPanel.element).hasClass('search-results-container') && $(scrollPanel.element).hasClass('ps--active-x')) {
        const marginSize = $(scrollPanel.element).find('th:first-child').outerWidth();
        const topMargin = $(scrollPanel.element).find('th:first-child').outerHeight();
        $(scrollPanel.element).find('.ps__rail-x').css('margin-left', marginSize);
        $(scrollPanel.element).find('.ps__rail-y').css('margin-top', topMargin + 3 );
        scrollPanel.update();
      }

      // Assets profile page activate chechout tabs on scroll
      if($(scrollPanel.element).hasClass('asset-croll-container')) {
        $(scrollPanel.element).on('ps-scroll-x ps-scroll-y', () => {
          scrollByLinks($(scrollPanel.element), 80, $('.asset-profile-table-wrapper'));
        });
      }

      // Assets profile page activate chechout tabs on scroll for mobile
      if($(scrollPanel.element).hasClass('asset-profile') && $(scrollPanel.element).hasClass('ps--active-y')) {
        $(scrollPanel.element).on('ps-scroll-x ps-scroll-y', () => {
          scrollByLinks($(scrollPanel.element), 300, $('.main-container'));
        });
      }
    });
	

	
	
    document.querySelectorAll('.asset-profile').forEach(container => {
      $(container).on('scroll', function() {
        if (window.innerWidth > 1150) return;
        scrollByLinks($(container), 300, $('.main-container'));
      })
    })
    document.querySelectorAll('.asset-croll-container').forEach(container => {
      new PerfectScrollbar(container, {
        swipeEasing: true,
      })
    });
    if(!checkIfTablet()) {
      document.querySelectorAll('.custom-scroll-desktop').forEach(container => {
        new PerfectScrollbar(container, {
          swipeEasing: true,
        })
      })
    }
    setTableShadows();
  }, 300);
})();

(function () {
  const resizeObserver1 = new ResizeObserver((entries) => {
    setSidebarStyles();
  });
  const resizeObserver2 = new ResizeObserver((entries) => {
    setSidebarStyles();
  });
  const interval = setInterval(() => {
    if (!$('.sidebar-content').length) return;
    clearInterval(interval);
    resizeObserver1.observe($('.sidebar-selectors')[0]);
    resizeObserver2.observe($('.sidebar-wrapper')[0]);
    setSidebarStyles();
    setTableHeight();
    checkIfIpad();
  }, 300);
})();

(function () {
  const interval = setInterval(() => {
    if(!$(".tabs-sub-menu li").length) return;
    clearInterval(interval);
    const clickEventType = document.ontouchstart !== null ?  'mousedown' : 'touchstart';
    $(".tabs-sub-menu li").on(clickEventType, function (e) {
      if(e.currentTarget.id === 'map_data_tab') return;
      if (window.innerWidth > 1150) return;
      $(".tabs-sub-menu li.open").removeClass('open');
      $(this).addClass('open');
    });
  }, 300);
})();

(function () { 
  const interval = setInterval(() => {
    if(!$('#form1').length || !$('.tabs-sub-menu input').length || !$('.top-menu-nav-wrapper a').length) return;
    clearInterval(interval);
	
   // $('.tabs-sub-menu input').on('click', function(e) {
    //e.preventDefault();
    //  if(e.target.id === 'map-labels-checkbox') return;
    //  setTimeout(() => {
    //    $('body').removeClass('tabs-open');
    //  }, 300);
     // setTimeout(() => {
     //   $('#form1').submit();
     // }, 1000);
   // });
	
    $('.top-menu-nav-wrapper a').on('click', function(e) {
      const href = $(this).attr('href');
      if (href.includes('void(0)') || href === '#') return;
      e.preventDefault();
      setTimeout(() => window.location = href, 300);
    })
  }, 300);
})()

$(document).ready(function(){
  $(window).trigger('resize');
  handleSmallResourcesHeight();
  getAnchorHash();
  // Assets page add shadow on the resourses block on scroll

  const sidebarResources = $('#sidebar-resources');
  if (sidebarResources[0]?.scrollHeight > sidebarResources?.innerHeight()) {
    sidebarResources?.addClass('scrollable');
  }

  $('#sidebar-resources').on("scroll", function(event) {
    if($('#sidebar-resources').length) {
      if($(this).scrollTop() >= 1) {
        $(this).addClass('scrolled');
      } else {
        $(this).removeClass('scrolled');
      }

      if ($(this).scrollTop() + $(this).innerHeight() >= this.scrollHeight) {
        $(this).addClass('scrolled-to-end');
      } else {
        $(this).removeClass('scrolled-to-end');
      }
    }
  });

  const categories = $('#category_responsive');
  if (categories[0]?.scrollHeight > categories?.innerHeight()) {
    categories?.addClass('scrollable');
  }

  $('#category_responsive').on("scroll", function(event) {
    if($('#category_responsive').length) {
      if($(this).scrollTop() >= 1) {
        $(this).addClass('scrolled');
      } else {
        $(this).removeClass('scrolled');
      }

      if ($(this).scrollTop() + $(this).innerHeight() + 1 >= this.scrollHeight) {
        $(this).addClass('scrolled-to-end');
      } else {
        $(this).removeClass('scrolled-to-end');
      }
    }
  });

  $('.table-container').on("scroll", function(event) {
    if($(this).scrollTop() >= 10) {
      $(this).addClass('scrolled-y');
    } else {
      $(this).removeClass('scrolled-y');
    }

    if($(this).scrollLeft() >= 10) {
      $(this).addClass('scrolled-x');
    } else {
      $(this).removeClass('scrolled-x');
    }

  });

  if($( "#additionalResourcesSearch" ).length) {
    let availableTags = [
      "ActionScript",
      "AppleScript",
      "Asp",
      "BASIC",
      "C",
      "C++",
      "Clojure",
      "COBOL",
      "ColdFusion",
      "Erlang",
      "Fortran",
      "Groovy",
      "Haskell",
      "Java",
      "JavaScript",
      "Lisp",
      "Perl",
      "PHP",
      "Python",
      "Ruby",
      "Scala",
      "Scheme"
    ];

    $( "#additionalResourcesSearch" ).autocomplete({
      classes: {
        "ui-autocomplete": "asset-profile-search custom-scroll" 
      },
      source: availableTags,
      select: function( event, ui ) {
        $( "#additionalResourcesSearch" ).attr('data-id', ui.item.value);
      }
    });
  }

  //Assets page hide resources list if small height
  $(window).on('resize load', debounce(function() {
    // Check if we are on the right page to resize resources
    const assetProfile = $('.asset-profile');
    if(assetProfile[0]) {
      handleSmallResourcesHeight();
    }
  }, 300));

  const tetsW = $('.asset-profile-table').outerWidth();
  $('#map_large').css('width', tetsW + 'px');

  if($('#print-btn').length) {
    // Assets profile page pring btn

    $('#print-btn').click(function function_name(argument) {
      const headerEl = $('header');

      const printFunc = () => {
        $('.main-container').printThis({
          header: headerEl,
          loadCSS: "../css_0525/print-header.css",
          beforePrint: beforePrintUpdate,
          afterPrint: () => {
          $('#map').css('width', '100%');
          $('#map_large').css('width', '100%');
          }
        });
      }
      if($('a[href$="#aerial-view"]').length && !$('.wrap-view-controls').length) {
        $('a[href$="#aerial-view"]')[0].click();
        setTimeout( () => {
          printFunc();
        }, 1000)
      } else {
        printFunc();
      }
    })
  }

  function beforePrintUpdate() {
    const tetsW = $('.main-container').outerWidth();
    $('#map_large').css('width', tetsW + 'px');
    $('#map').css('width', tetsW + 10 + 'px');
  }

  // Assets profile page - animate scroll by click on tabs
  animateDesktopAnchorScroll();
  
  
});

