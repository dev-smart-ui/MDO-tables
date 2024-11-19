// Function to get the current year plus an optional offset
const getYearFromNow = (value = 0) => {
  const date = new Date();
  return date.getFullYear() + value;
};

// Function to get the list of commodities based on selected checkboxes
const getCommodities = () => {
  const checkboxes = $('#holderCommodity .mdo-checkbox');
  const values = Object.values(checkboxes).map((checkbox) => {
    const isChecked = $(checkbox).children('input').is(':checked');
    return isChecked ? $(checkbox).children('label').text() : '';
  });
  return ['Commodity'].concat(values.filter((i) => !!i));
};

function getCommoditiesOptions() {
  var options = '';
  for (var [index, option] of getCommodities().entries()) {
    options += `
      <option value="${ index }">${ option }</option>
    `;
  }
  var customHeader = `
    <div class="custom-select select-commodity">
      <select id="commodityOptions" class="select-commodity-field">
        ${ options }
      </select>
    </div>
  `;
  return customHeader;
}

// Function to get a specific commodity by index
const getCommodity = (i) => {
  return getCommodities()[i];
};

// Function to check subcategories and return a value
const checkSubCategory = (i) => {
  let sub = 0;
  if (+i === 10 || +i === 15) {
    sub = $('#sidebarSubCategorySelect1').val();
  }
  if (+i === 12) {
    sub = $('#sidebarSubCategorySelect2').val();
  }
  return sub;
};

// Function to get a web method based on the selected category and subcategory
function getWebMethod() {
  let i = $('#sidebarCategorySelect').val();
  i = `${Number(i) + Number(checkSubCategory(i))}`;
  const webMethods = [
    'GetCompanies',
    'GetProperties',
    'GetCommodity',
    'GetLocation', // TODO return 'GetLocation' after backend ready,
    'GetType',
    'GetStage',
    'GetStatus',
    'GetDeposit',
    'GetMining',
    'GetProcessing',
    'GetHMEType',
    'GetHMEModel',
    'GetJobCategory',
    'GetJobTitle',
    'GetPersonnel',
    'GetMillType',
    'GetMillModel',
    'GetConsultantCompany',
  ];
  return webMethods[i];
}

// Function to get a field ID based on the selected category
function getFieldID() {
  const i = $('#sidebarCategorySelect').val();
  const fieldsId = [
    'hCompanyID',
    'hPropertyID',
    'hCommodityID',
    'hLocationID',
    'hTypeID',
    'hStageID',
    'hStatusID',
    'hDepositID',
    'hMiningID',
    'hProcessingID',
    'hHMETypeID',
    'hHMEModelID',
    'hJobCategoryID',
    'hJobTitleID',
    'hPersonnelID',
    'hMillTypeID',
    'hMillModelID',
    'hConsultantCompanyID',
  ];
  return fieldsId[i];
}

// Function to handle the 'Add' button click
function btnAddClick() {
  // Code to handle the 'Add' button click
  // Adds checkboxes based on the selected category and search criteria
  let value = $('#txtCompanySearch').attr('data-id');
  let select = $('#sidebarCategorySelect').val();
  const tbxSearch = $('#txtCompanySearch').val();
  // Getting all text values from checkboxes and then checking if we are not adding the same value
  // I guess that here should be input highlighting when we are trying to add the same checkbox
  const checkboxValues = [];
  $(".mdo-checkbox").each((_, el) => {
    checkboxValues.push($(el).text().trim());
  });
  const addCheckbox = (name, parentSelector) => {
    const $ctrl = $('<div></div>').addClass('mdo-checkbox');
    const label = $('<label></label>')
      .attr({
        for: `${name}_${value}`,
      })
      .text(tbxSearch);
    const input = $('<input/>').attr({
      id: `${name}_${value}`,
      type: 'checkbox',
      name,
      checked: 'true',
      value,
    });
    $ctrl.append(input);
    $ctrl.append(label);
    $(parentSelector).css('display', 'block');
    $(parentSelector).append($ctrl);
  };
  select = `${Number(select) + Number(checkSubCategory(select))}`;
  if (!checkboxValues.includes(tbxSearch)) {
    if (tbxSearch.length > 0) {
      if (+select === 0) {
        addCheckbox('chkCompany', '#holderCompany');
      }
      if (+select === 1) {
        addCheckbox('chkProperties', '#holder');
      }
      if (+select === 2) {
        addCheckbox('chkCommodity', '#holderCommodity');
        document.dispatchEvent(addCommoditySelector);
      }
      // ------------------ Location -----------------
      if (+select === 3) {
        addCheckbox('chkLocations', '#holderLocation');
      }
      if (+select === 4) {
        addCheckbox('chkType', '#holderType');
      }
      if (+select === 5) {
        addCheckbox('chkStage', '#holderStage');
      }
      if (+select === 6) {
        addCheckbox('chkStatus', '#holderStatus');
      }
      if (+select === 7) {
        addCheckbox('chkDeposit', '#holderDeposit');
      }
      if (+select === 8) {
        addCheckbox('chkMining', '#holderMining');
      }
      if (+select === 9) {
        addCheckbox('chkProcessing', '#holderProcessing');
      }
      if (+select === 10) {
        addCheckbox('chkHMEType', '#holderHMEType');
      }
      if (+select === 11) {
        addCheckbox('chkHMEModel', '#holderHMEModel');
      }
      if (+select === 12) {
        addCheckbox('chkJobCategory', '#holderJobCategory');
      }
      if (+select === 13) {
        addCheckbox('chkJobTitle', '#holderJobTitle');
      }
      if (+select === 14) {
        addCheckbox('chkPersonnel', '#holderPersonnel');
      }
      if (+select === 15) {
        addCheckbox('chkMillType', '#holderMillType');
      }
      if (+select === 16) {
        addCheckbox('chkMillModel', '#holderMillModel');
      }
      if (+select === 17) {
        addCheckbox('chkConsultantCompany', '#holderConsultantCompany');
      }
      resetSearchCriteria();
      setSidebarStyles();
    }
  }
}

// Function to reset the search criteria
function resetSearchCriteria() {
  $('#txtCompanySearch').val('');
  $('#txtCompanySearch').removeAttr('data-id');
}

// Function to handle search events
function search(event) {
  const keyCode = event.keyCode ? event.keyCode : event.which;
  if (keyCode == 13 && $('#txtCompanySearch').is(':focus')) {
    $('#btnAdd').trigger('click');
  }
}

// Function to toggle the header menu
function toggleHeaderMenu() {
  $('body').toggleClass('menu-open');

  setTimeout(() => {
    if (!$('body').hasClass('menu-open')) {
      closeSignInModalWindow('.isSignInModalPosition', 'MainBody_Overview_pnlSignIn', false, false, true);
      closeSignInModalWindow('.isSettingsMenuModalPosition', 'MainBody_Overview_pnlSettings', false, false, true);
      closeSignInModalWindow('.isSettingsItemModalPosition', 'Account_Settings', false, true, true);
    }
  }, 300);  
  
	if(loggedIn == 1) // -- logged  user -- 
	{
		//$(".not-auth-user").hide();
		//$(".auth-user").show();
		
		$(".not-auth-user").show();
		$(".auth-user").hide();		
	}    
}

// Function to toggle the mobile sidebar
function toggleSidebarMobile() {
  $('body').toggleClass('sidebar-open');
}

// Function to show information in a dialog window
function showInfo(id, options) {
  const windowWidth = window.innerWidth;
  const isMobile = windowWidth < 1150;
  const { 
    isSignInModal = false, 
    isSettingsMenuModal = false, 
    isSettingsItemModal = false 
  } = options || {};
  const dialogOptions = isSignInModal
    ? {
      modal: true,
      resizable: false,
      draggable: false,
    }
    : {};
  let wWidth = 1003;
  let wHeight = 611;
  if (isSignInModal) {
    wWidth = 488;
    wHeight = 540;
  }
  if (!isSignInModal && isMobile) {
    wWidth = windowWidth > 440 ? 400 : windowWidth - 40;
    wHeight = window.innerHeight - 100;
  }
  const dialog = $(`#${id}`);
  if (dialog.data('src')) {
    dialog.find('iframe').attr('src', dialog.data('src'));
  }

  let dialogParams = {
    width: wWidth,
    height: wHeight,
    ...dialogOptions
  }

  if (isSignInModal) {
    dialogParams.classes = {
      'ui-dialog': 'isSignInModalPosition sign-in-animation-in'
    }
  }
  
  if (isSettingsMenuModal) {
    dialogParams.classes = {
      'ui-dialog': 'isSettingsMenuModalPosition sign-in-animation-in'
    }
  }

  if (isSettingsItemModal) {
    dialogParams.classes = {
      'ui-dialog': 'isSettingsItemModalPosition sign-in-animation-in'
    }
  }

  const helpMenu = dialog.dialog(dialogParams);
  helpMenu.dialog('open');
  (isSignInModal || isSettingsMenuModal) && isMobile && $('.signIn-modal-active .top-menu').animate({left: '-30%'});
  (isSettingsItemModal) && isMobile && $('.isSettingsMenuModalPosition .dialog').animate({left: '-30%'});
}

// Function hanlde download dropdown
function handleDownload(i) {
	alert(i);
}


function donwloadClick(download, module, removeBlanks) {
	
	//alert(module);

	let newURL = location.href.replace(/vw=\d+\b/g, 'vw='+ module); 

	newURL = newURL.replace(/d\d+\b=1/g, ''); // remove all d*=*

	newURL = newURL.replace(/&amp;/g, '&'); // replace all multiple & 
	newURL = newURL.replace(/&+/g, '&'); // replace all multiple &
	newURL = newURL.replace(/^&/, '');	// remove leading &
	
	if(download > 0 && download < 10)
		newURL = newURL + '&d' + module + '=' + download;
	
  location.href = newURL;

}

function sortClick(module) {
  //$(`#${e}`).toggleClass('active');
  //location.href = location.href + '&obc=on';
  
  var url = window.location.href;
  
	if (url.indexOf("obc=on") >= 0)
		url = url.replace("&obc=on", "");
	else
	{
		url =url + "&obc=on";
		//alert('This utility uses artificial intelligence (AI) to sort operations by size.\n Some numbers were converted from tpa to tpd.\n As a result sorting order cannot be considered 100% accurate.');
	}	

	let urlVW = new URL(url);
	urlVW.searchParams.set('vw', module);
	location.href = urlVW;	
	//location.href = url;
}


// Function to toggle the 'active' class of an element by ID
function toggleActiveById(e) {
  $(`#${e}`).toggleClass('active');
}

function toggleActiveByObject(e) {
  e.classList.toggle("active");
}

function headerButton(id){
	if(id == "btnOverview" || id == "btnPersonnel" || id == "btnReserves" || id == "btnProduction" || id == "btnCosts" || id == "btnEquipment" || id == "btnProjects")
		return 1;
	else 
		return 0;
}
// Function to set the active subtab
function setActiveSubTab(itemIdList, id, view) {
   let isHeaderButton = headerButton(id);										 
  if (id === 'notification' || id === 'hl_Map') {
    setTimeout(() => {
      $('body').removeClass('tabs-open');
    }, 300);
    setTimeout(() => {
      $('#form1').submit();
    }, 1000);
  }
  const target = event && event.currentTarget;
 // if (!!event && $(target).is('input[type=submit]') && window.innerWidth <= 1150) { 
	//																				  
  //  event.preventDefault();
  //}
  $('.tabs-main-menu li').each((_, el) => {
    $(el).removeClass('open');
  });
  const openedTab = $(`.tabs-main-menu #${id}`)
    .parent()
    .parent()
    .addClass('open');
	
	
  let subTabIndex = 0;
  
  if (view == 17 || view == 19 || view == 21 || view == 22 || view == 23 || view == 24)
	  subTabIndex = 1;
  else if (view == 9 || view == 26)
	  subTabIndex = 2;
    else if (view == 25)
	  subTabIndex = 3;
  

  if (window.innerWidth > 1150) {
    $(openedTab.find('.tabs-sub-menu li')[subTabIndex]).addClass('open');
  }
  
  if (openedTab.hasClass('no-content')) {
    $('.tabs-main-menu').removeClass('active');
  } else {
    $('.tabs-main-menu').addClass('active');
  }
  
  vw = view;
  document.cookie = "vw=" + view;
  if (window.innerWidth <= 1150 && isHeaderButton == 1) {
	//  alert(id);
	return false;
  }	
  else {
	  if (!!event && $(target).is('input[type=submit]') && window.innerWidth <= 1150) { 
		setTimeout(() => {
		  tabsMobileToggle();
		}, 400);
	   }	  
	return true;
  }														 
}

// Function to save the active tab
const saveActiveTab = (vw) => {
  setTimeout(() => {
    // const vw = new URLSearchParams(window.location.search).get('vw');
    const activeTab = $(`li[data-tab=${vw}]`);
    if (activeTab[0]) {
      activeTab.addClass('open');
    }
  }, 300);
};

// Function to handle a submenu click event
const subMenuClick = (e) => {
  if(e.currentTarget.id === 'map_data_tab') {
    $('#tab_label').text('Map');
    return;
  }
  $('li[data-tab]').each((_, el) => {
    $(el).removeClass('open');
  });
  $('li[data-tabs]').each((_, el) => {
    $(el).removeClass('open');
  });
  $(e.target).closest('li').addClass('open');
  $(e.target).parent().parent().parent().addClass('open');
  $('#tab_label').text($(e.target)[0].value);
};

// Function to toggle the visibility of mobile tabs
function tabsMobileToggle() {
  $('body').toggleClass('tabs-open');
};

// Function to handle the hover event on a tab
function tabOnHover(element) {
  if (!$(element).hasClass('no-content')) {
    $('.tabs-main-menu').addClass('active');
  }
  $(element).addClass('hovered');
};

// Function to handle the leave event on a tab
function tabOnLeave(element) {
  const openedTab = $('.tabs-main-menu').children('li.open');
  $(element).removeClass('hovered');
  if (openedTab.length > 0 && !openedTab.hasClass('no-content')) {
    return;
  }
  $('.tabs-main-menu').removeClass('active');
};

// Function to read and process query parameters
const readQueryParam = (vw) => {
  const urlParams = new URLSearchParams(window.location.search);
   if(vw == "")
	 vw = urlParams.get("vw") ? urlParams.get("vw") : '8';
 //const 
  const table = document.getElementById('MainBody_Contacts_GridViewSample');
  const map = document.getElementById('map-page-wrapper');
  const mainContent = document.getElementsByClassName('main-content')[0];
  showFieldSetFunc('#fldPersonnelSearchCriteria');
  showFieldSetFunc('#holderLocation');
  showFieldSetFunc('#holderStatus');
  $("#list_menu li").removeClass("open");
  $(".tabs-sub-menu li").on("click", subMenuClick);
  $(".tabs-main-menu li").each((_, el) => {
	const tabsList = ($(el).data("tabs") || "").toString().split(",").map((id) => id.trim());
    if (tabsList && tabsList.includes(vw)) {
      $(el).addClass("open");
      $(".tabs-main-menu").addClass("active");
      tabsList.forEach((id) => {
        const tab = $(`.tabs-sub-menu [data-tab=${id}]`);
        if (id === vw) {
          saveActiveTab(vw);
          mainContent.classList.remove("map-open");
          $("#tab_label").text($(tab).find("input")[0].value);
        }
      });
    } else if (vw == "10") {
      //const mapBtn = $(`#mapTab`).parent().parent();
      //mapBtn.addClass("open"); // exeption for map
      $("#tab_label").text('Map');
     // mainContent.classList.add("map-open");
    }
  });
};

// Function to set sidebar styles and heights
const setSidebarStyles = () => {
  const aside = $('aside');
  const wrapper = $('.sidebar-wrapper');
  const content = $('.sidebar-content');
  const selectors = $('.sidebar-selectors');
  const searchCriteria = $('.search-criteria');
  const scroll = $('.search-criteria .custom-scroll');
  $('.mdo-checkbox label').each((_, el) => {
    $(el).css('width', `calc(${searchCriteria.width()}px - 32px)`)
  });
  $('.mdo-checkbox.two-cols label').each((_, el) => {
    $(el).css('width', `calc(${searchCriteria.width()}px - 120px)`)
  }); 
  if (aside.height() > wrapper.height()) {
    wrapper.css('height', '100%');
    content.css('height', 'auto');
    searchCriteria.css('height', `auto`);
    scroll.css('height', 'auto');
    return;
  }
  wrapper.css('height', '100%');
  content.css('height', 'calc(100% - 86px)');
  searchCriteria.css('height', `calc(100% - ${selectors.height() + 16}px)`);
  scroll.css('height', 'calc(100% - 30px)');
};

// Function to set the height of the search results table
function setTableHeight() {
  const mainContainer = $('.main-container');
  const main = $('main');
  const searchResult = $('.search-results-container');
  const isMobile = window.innerWidth < 1150;
  if (isMobile) {
    const headerHeight = $('.header-content')[0]?.offsetHeight;
    const footerHeight = $('.footer-content')[0]?.offsetHeight;
    if (!headerHeight || !footerHeight) return;
    mainContainer.css(
      'height',
      `calc(100dvh - ${headerHeight + footerHeight}px)`
    );
    main.css('height', '100%');
    const tabsHeight = $('.tabs')[0] ? $('.tabs')[0].offsetHeight : 0;
    const iconsHeight = $('main > .mobile-only')[0]?.offsetHeight; // only for local development
    searchResult.css(
      'height',
      `calc(100% - ${tabsHeight + iconsHeight + 16}px)`
    );
  } else {
    const listMenuHeight = $('#list_menu')[0]?.offsetHeight;
    mainContainer.css('height', 'auto');
    main.css('height', 'auto');
    searchResult.css('height', `calc(100% - ${listMenuHeight}px)`);
  }
}

// Change category
function changeCategory(e) {
  tabsMobileToggle();
  $('#tab_label').text(e.textContent);
}

const closeSignInModalWindow = (
  modal, 
  modalType, 
  isMenuClosed, 
  isSettingsItemModal,
  isStart = false
) => {
  const MODAL = $(modal);
  
  if (!isDesktop) {
    (
      modalType === 'MainBody_Overview_pnlSettings' || 
      modalType === 'MainBody_Overview_pnlSignIn'
    ) && $('.signIn-modal-active .top-menu').animate({left: '0'}, 300);
    
    modalType === 'Account_Settings' && $('.signIn-modal-active #MainBody_Overview_pnlSettings').animate({left: '0'}, 300);

    if (isMenuClosed) {
      MODAL.removeClass('sign-in-visible')
      setTimeout(() => {
        MODAL.addClass('sign-in-hidden')
        MODAL.removeClass('sign-in-animation-out')
        setTimeout(() => {
          MODAL.addClass('sign-in-animation-in')
          setTimeout(() => {
            MODAL.removeClass('sign-in-hidden')
          }, 400)
        }, 400)
      }, 400)
    } else {
      MODAL.removeClass('sign-in-animation-out')
      MODAL.addClass('sign-in-animation-in')
    }
  }

  isSettingsItemModal && accountSettingsClose();
  
  setTimeout(() => {
    const logo = $('.ui-dialog-titlebar #signIn-modal-logo');
    if (logo.length) logo.remove();
    isStart && $('body').removeClass('signIn-modal-active');
    $(`#${modalType}`).hide()
  }, isDesktop ? 0 : 300);
}

// Function to handle sign-in
const signIn = (modalType = 'signIn') => {
  const MODAL_TYPES = {
    signIn: 'MainBody_Overview_pnlSignIn',
    settingsMenu: 'MainBody_Overview_pnlSettings',
    settingsItem: 'Account_Settings',
  }

  const MODAL_CLASSES = {
    signIn: '.isSignInModalPosition',
    settingsMenu: '.isSettingsMenuModalPosition',
    settingsItem: '.isSettingsItemModalPosition',
  }

  if (!MODAL_TYPES[modalType]) return

  const isSignInModal = modalType === 'signIn';
  const isSettingsMenuModal = modalType === 'settingsMenu';
  const isSettingsItemModal = modalType === 'settingsItem';
  const isDesktop = window.innerWidth > 1150;

  $('body').addClass('signIn-modal-active');

  // enable modal
  showInfo(
    MODAL_TYPES[modalType], 
    { 
      isSignInModal, 
      isSettingsMenuModal, 
      isSettingsItemModal 
    }
  );

  const MODAL = $(MODAL_CLASSES[modalType]);

  // animation show modal
  MODAL.removeClass('sign-in-hidden')
  MODAL.removeClass('sign-in-animation-in');
  MODAL.addClass('sign-in-visible');
  MODAL.addClass('sign-in-animation-out');
  MODAL.css('opacity', '1');

  // ???
  if (!$('.ui-dialog-titlebar').find('#signIn-modal-logo').length) {
    $('.ui-dialog-titlebar').append(
      "<img id='signIn-modal-logo' src='/images/logo.svg' alt='MDO' title='Mining Data Online'>"
    );
  }

  if (isDesktop) {
    $('.ui-dialog-titlebar-close').one('click', () => {
      closeSignInModalWindow(MODAL_CLASSES[modalType], MODAL_TYPES[modalType], false, isSettingsItemModal);
    });
  }
};

// Function to handle sign-out
const signOut = () => {
  if (window.innerWidth > 1150) {
    $("#header_nav").removeClass("authorized-user");
    $("#header_nav").addClass("not-authorized-user");
  } else {
    $(".user-auth").addClass("user-unauth");
    $(".not-auth-user").css("transform", "translateX(-50%)");
    $(".auth-user").css("transform", "translateX(-100%)");
  }
};

// Function to hide the table tooltip
const hideTableTooltip = () => {
  $('.tooltip-container').removeClass('touch-active');
};

// Function to set table shadows for scrollable tables
const setTableShadows = () => {
  const searchResult = $('.search-results-container.custom-scroll');
  searchResult.on('ps-scroll-down', () => {
    searchResult.find('.search-results-table').addClass('scrolled-y');
  });
  searchResult.on('ps-y-reach-start', () => {
    searchResult.find('.search-results-table').removeClass('scrolled-y');
  });
  searchResult.on('ps-scroll-right', () => {
    searchResult.find('.search-results-table').addClass('scrolled-x');
  });
  searchResult.on('ps-x-reach-start', () => {
    searchResult.find('.search-results-table').removeClass('scrolled-x');
  });
};
/*
const toggleTableLoader = () => {
  const tableLoader = $('.table-loader');
  const className = 'table-loader-hidden';
  if (tableLoader.hasClass(className)) {
    tableLoader.removeClass(className);
  } else {
    tableLoader.addClass(className);
  }
}
*/
const toggleTableLoader = () => {
  const table = $('.search-results-container');
  const tableLoader = $('.table-loader');
  const className = 'table-loader-hidden';
  if (tableLoader.hasClass(className)) {
    tableLoader.removeClass(className);
    table.hide();
  } else {
    tableLoader.addClass(className);
    table.show();
  }
}

// The code appears to contain various functions for handling UI and interaction,
// including form elements, dialogs, tabs, and more.
// The comments describe the purpose of each function and its role in the application.
// event when clicked on autocomplete load button on the Assets page
const btnLoadClick = () => {
  if($("#additionalResourcesSearch").attr('data-id')) {
    console.log($("#additionalResourcesSearch").attr('data-id'), '>> navigate by');
  }
  $('.search-icon-mobile').trigger('click');
}

// For tabs actions for Asset Profile page
const setActiveLinkedTab = (subtabs, id) => {
  const idStr = id.replace("_link", "");
  if(!jQuery("#" + idStr).length) return;
  setActiveSubTab(subtabs, id);
  $('#tab_label').html(idStr.substr(0,1).toUpperCase() + idStr.substr(1));
}

// For tabs actions for Asset Profile page
const setSubLinkedTab = (subtabs, id, sub_id) => {
  const idStr = sub_id.replace("_link", "");
  if(window.matchMedia("(max-width: 1150px)").matches) {
    setTimeout(() => {
      $('body').removeClass('tabs-open');
    }, 300)
  } else {
    $(`[data-tab=${idStr}]`).closest($('.tabs-sub-menu')).find('li').removeClass('open');
    $(`[data-tab=${idStr}]`).addClass('open');
    if($('.tabs-open').length) {
      tabsMobileToggle();
    }
  }
}

let isScrollable = false;
let isClickedTab = false;


// For scroll and tabs actions for Asset Profile page
const scrollByLinks = (element, offsetCustom, parent) => {
  if(isScrollable || $('.tabs-open').length) return;
  
  isClickedTab = true;
  $('.anchor').each(function() {
    const WindowTop = element.scrollTop();
    const elTop = $(this).offset().top;
    const parentTop = parent.offset().top;
    const distanceTop = parseInt(elTop) - parseInt(parentTop);

    if(WindowTop > distanceTop - 80 && WindowTop < distanceTop + offsetCustom) {
        const currentId = $(this).attr('id');
        const linkElems = $('.tabs-assets').find(`a[href='#${currentId}']`);
        if(linkElems.length) {
          $(linkElems[0]).trigger("click");
        }
    }
  });

  isClickedTab = false;
}

//Assets page hide resources list if small height
const handleSmallResourcesHeight = () => {
  if(!window.matchMedia("(max-width: 1150px)").matches) {
    const sideBar = $('.sidebar-wrapper');
    const resources = $('.sidebar-resources');
    const map = $('.sidebar-map');
    if(sideBar.height() < 670 && resources[0] && map) {
      sideBar.addClass('small-height');
      resources[0].style.height = sideBar.height() - map.height() + 'px';
    } else {
      sideBar.removeClass('small-height');
    }
    if(sideBar.height() < 540 && resources[0] && map) {
      sideBar.addClass('just-search');
      resources[0].style.height = sideBar.height() - map.height() + 'px';
    } else {
      sideBar.removeClass('just-search');
    }
    if(sideBar.height() > 685 && resources[0] && map) {
      if(window.matchMedia("(max-width: 1919px)").matches) {
        resources[0].style.height = sideBar.height() - map.height() - 16 + 'px';
      } else {
        resources[0].style.height = sideBar.height() - map.height() - 30 + 'px';
      }
    }
  } else {
    const resources = $('.sidebar-resources');
    if(resources[0]) {
      resources[0].style.removeProperty('height');
    }

  }
}

const getAnchorHash = () => {
  const fragment = window.location.hash;
  const element = $(fragment).find('.asset-profile-table-title:first').text();
  if(element) $("#tab_label").text(element);
}

// For scroll and tabs actions for Asset Profile page
const goToByScroll = (id) => {  
  const idStr = id.replace("_link", "");

  if(!jQuery("#" + idStr).length) return;
  $('#tab_label').html(idStr.substr(0,1).toUpperCase() + idStr.substr(1));
  $('.main-content').animate({scrollTop: jQuery("#" + idStr).offset().top - 190 }, 1000);
}

const checkIfIpad = () => {
  if (navigator.maxTouchPoints &&
      navigator.maxTouchPoints > 2 &&
      /MacIntel/.test(navigator.platform)) {
    $('.main-content').addClass('iPad');
  }
}

const checkIfTablet = () => {
  const userAgent = navigator.userAgent.toLowerCase();
  const isTablet = /(ipad|tablet|(android(?!.*mobile))|(windows(?!.*phone)(.*touch))|kindle|playbook|silk|(puffin(?!.*(IP|AP|WP))))/
    .test(userAgent) || navigator.maxTouchPoints &&
          navigator.maxTouchPoints > 2 &&
          /MacIntel/.test(navigator.platform);
  return isTablet;
}

const animateDesktopAnchorScroll = () => {
   $(".tabs-assets a").on("click", function (e) {
    if(isClickedTab || window.matchMedia("(max-width: 1150px)").matches) return;
    isScrollable = true;
    e.preventDefault();
    const href = $(this).attr("href");
    const distance = $(href).offset().top - $('.asset-profile-table-wrapper').offset().top;
    $(href).closest(".custom-scroll").animate({ scrollTop: distance }, 800, () => {
      isScrollable = false;
    });
  });
}

const showFieldSetFunc = (fsID) => {
  $(fsID).css('display', 'block');
}

const hideFieldSet = (fsID) => {
  $(fsID).css('display', 'none');
}

function debounce(func, delay) {
  let timeoutId;
  return function() {
      const context = this;
      const args = arguments;
      clearTimeout(timeoutId);
      timeoutId = setTimeout(() => {
          func.apply(context, args);
      }, delay);
  };
}

const accountSettingsUpdate = (tab) => {
  const titleNode = document.querySelector('.accountSettingsContent__header span');

  setTab(
    '.accountSettingsAside__controls button', 
    '.accountSettingsContent__tab', 
    tab, 
    (node) => {
      const tabName = node.dataset.tabname;
      titleNode.innerHTML = tabName;
    }
  );
}

const accountSettingsOpen = ({ tab, isMobile } = {}) => {
  typeof tab !== undefined && accountSettingsUpdate(tab);

  if (isMobile) {
    signIn('settingsItem');
  } else {
    showInfo('Account_Settings');
  }  
}

const accountSettingsClose = () => {
  $('#Account_Settings').dialog('close')
}

const setTab = (controls, tabs, index, tabCallback = () => {}) => {
  const controlNodes = document.querySelectorAll(controls);
  const tabNodes = document.querySelectorAll(tabs);

  controlNodes.forEach((node, i) => {
    if (index === i) {
      node.disabled = true;
      node.classList.add('active')
    } else {
      node.disabled = false;
      node.classList.remove('active')
    }
  });

  tabNodes.forEach((node, i) => {
    if (index === i) {
      node.classList.add('active');
      tabCallback(node);
    } else {
      node.classList.remove('active')
    }
  });
}

const applyAccountSettings = (key, value) => {
  try {
    if (!key || !value) throw 'Missing data for apply settings!'

    const nodes = document.querySelectorAll(`[data-settings=${key}]`);

    if (!nodes.length) throw 'Settings nodes not found!';

    nodes.forEach(node => {
      if (key === 'theme') {
        if (value === 'system') {
          const isDarkMode = window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;
          node.setAttribute('theme', isDarkMode ? 'dark' : 'light');
        } else {
          node.setAttribute('theme', value);
        }        
      } else {
        node.setAttribute('data-settings-value', value);
      }
    });

    correctionSettingsElements();

  } catch(err) {
    console.warn(err);
  }
}

const accountSettingsInit = () => {
  try {
    const dataNodes = document.querySelectorAll('#accountSettingsSettings input[type=radio]');
    let settingsNames = [];
    let savedSettings = {}
    
    dataNodes.forEach(node => {
      if (!settingsNames.includes(node.name)) {
        settingsNames.push(node.name);
      }

      node.addEventListener('change', e => {
        localStorage.setItem(e.target.name, e.target.value);
        applyAccountSettings(e.target.name, e.target.value);
      })
    });

    settingsNames.forEach(name => {
      const saved = localStorage.getItem(name);
      if (saved) {
        savedSettings[name] = saved
      }
    });

    for(let key in savedSettings) {
      const currentNodes = document.querySelectorAll(`#accountSettingsSettings input[name=${key}]`);

      currentNodes.forEach(node => {
        if (node.value === savedSettings[key]) {
          node.checked = true
          applyAccountSettings(node.name, node.value);
        } else {
          node.checked = false
        }
      })
    }
  } catch(err) {
    console.warn(err);
  }
}

function correctionSettingsElements() {
  try {
    const submenus = document.querySelectorAll('.tabs-sub-menu');

    console.log(submenus);

    submenus.forEach(menu => {
      const rect = menu.getBoundingClientRect();

      if (rect.right > (window.innerWidth || document.documentElement.clientWidth)) {
        menu.style.right = '0';
        menu.style.width = 'auto';
      }
    });
  } catch(err) {
    console.warn(err);
  }
}
