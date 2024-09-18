var addCommoditySelector = new Event('addCommoditySelector');

function SwapHeader_Contacts() {
  //alert('Personnel');

  var customHeader = '<tr><th class=\'asset-content\' rowspan=\'2\'><div class=\'asset-content-wrapper\'><div class=\'table-icons-block\'>';

  customHeader += '<button type=\'button\' id=\'export_buttons_2\' class=\'icon\' onclick="toggleActiveById(\'export_buttons_2\')">';
  customHeader += '<img src="../../icons/download.svg" ><img class="icon-active" src="../../icons/download-active.svg" ></button>';

  customHeader += '<button type="button" id="sort_table_list" class="icon" onclick="toggleActiveById(\'sort_table_list\')">';
  customHeader += '<img src="../../icons/sort.svg" ><img class="icon-active" src="../../icons/sort-active.svg" ></button>';

  customHeader += '<button type="button" id="imgRemoveBlanks" class="icon" onclick="toggleActiveById(\'imgRemoveBlanks\')">';
  customHeader += '<img src="../../icons/eye.svg" alt=""><img class="icon-active" src="../../icons/eye-active.svg" alt=""></button>';

  customHeader += 
  `<div id=\'export_buttons_modal\' class=\'export-buttons-modal\'>
    <div><img src="../../icons/download.svg" onclick="handleDownload(1)">Location & Ownership</div>
    <div><img src="../../icons/download.svg" onclick="handleDownload(2)">Asset Commodities</div>
    <div><img src="../../icons/download.svg" onclick="handleDownload(3)">Deposit Types</div>
    <div><img src="../../icons/download.svg" onclick="handleDownload(4)">Processing Technologies</div>
  </div>`;

  // Year select field
  customHeader += `
    <div class="custom-select select-year">
      <select id="yearsOptions" class="select-year-field">
        <option value="0">${getYearFromNow(0)}</option>
        <option value="1">${getYearFromNow(1)}</option>
        <option value="2">${getYearFromNow(2)}</option>
        <option value="3">${getYearFromNow(3)}</option>
        <option value="4">${getYearFromNow(4)}</option>
      </select>
    </div>
	`;

  customHeader += getCommoditiesOptions();

  customHeader += '</div>';

  //customHeader += "<s cript>document.dispatchEvent(selectorEvent);</s cript>";

  customHeader += '<div class="asset">Asset</div>';
  customHeader += '</div>';

  customHeader += '</th>';
  customHeader += '<th colspan="4">Key Personnel</th><th colspan="2">Office</th>';
  customHeader += '<th class="gray-bg rotated bottom-shadow" rowspan="2"><span>Camp</span></th>';
  customHeader += '<th class="gray-bg rotated bottom-shadow" rowspan="2"><span>Contractors</span></th>';
  customHeader += '<th class="gray-bg rotated bottom-shadow" rowspan="2"><span>Employees</span></th>';
  customHeader += '<th class="gray-bg rotated bottom-shadow" rowspan="2"><span>Workforce</span></th>';

  customHeader += '</tr>';

  customHeader += '<tr>';
  customHeader += '<th class="primary-bg"><span class="linkedin-icon"><img src="../../icons/linkedin.svg"></span></th>';
  customHeader += '<th class="secondary-bg">Job Title</th>';
  customHeader += '<th class="secondary-bg">Name</th>';
  customHeader += '<th class="secondary-bg">Ref. Date</th>';
  customHeader += '<th class="primary-bg">Phone</th>';
  customHeader += '<th class="primary-bg">Mail</th></tr>';

  $('[id$=GridViewSample] thead').eq(0).html(customHeader); // -- replace Dummy <thead> innerHTML with customHeader --
  $('[id$=GridViewSample] thead').addClass('large-height');

  // document.dispatchEvent(selectorEvent);
  //document.dispatchEvent(tooltipEvent);
  document.dispatchEvent(tooltipTableEvent);

  //loadFlag_Contacts = 1;
};

function SwapHeader_Production() {
  var customHeader = '<tr><th class=\'asset-content\' rowspan=\'2\'><div class=\'asset-content-wrapper\'><div class=\'table-icons-block\'>';

  customHeader += '<button type=\'button\' id=\'export_buttons_2\' class=\'icon\' onclick="toggleActiveById(\'export_buttons_2\')">';
  customHeader += '<img src="icons/download.svg" ><img class="icon-active" src="icons/download-active.svg" ></button>';

  customHeader += '<button type="button" id="sort_table_list" class="icon" onclick="toggleActiveById(\'sort_table_list\')">';
  customHeader += '<img src="icons/sort.svg" ><img class="icon-active" src="icons/sort-active.svg" ></button>';

  customHeader += '<button type="button" id="imgRemoveBlanks" class="icon" onclick="toggleActiveById(\'imgRemoveBlanks\')">';
  customHeader += '<img src="icons/eye.svg" alt=""><img class="icon-active" src="icons/eye-active.svg" alt=""></button>';

  customHeader += 
  `<div id=\'export_buttons_modal\' class=\'export-buttons-modal\'>
    <div><img src="icons/download.svg" onclick="handleDownload(1)">Location & Ownership</div>
    <div><img src="icons/download.svg" onclick="handleDownload(2)">Asset Commodities</div>
    <div><img src="icons/download.svg" onclick="handleDownload(3)">Deposit Types</div>
    <div><img src="icons/download.svg" onclick="handleDownload(4)">Processing Technologies</div>
  </div>`;

  customHeader += '</div>';

  customHeader += '<div class="asset">Asset</div>';
  customHeader += '</div>';
  customHeader += '</th>';

  customHeader += '<th rowspan="2" class="gray-bg rotated bottom-shadow">Commodity</th>';
  customHeader += '<th rowspan="2" class="gray-bg rotated bottom-shadow">Product</th>';
  customHeader += '<th rowspan="2" class="gray-bg rotated bottom-shadow">Unit</th>';

  customHeader += '<th colspan="8">Annual Production: Mines</th>';
  customHeader += '<th colspan="2">Production: Projects</th>';

  customHeader += '</tr>';

  customHeader += '<tr>';
  customHeader += '<th class="secondary-bg">2023</th>';
  customHeader += '<th class="secondary-bg">2022</th>';
  customHeader += '<th class="secondary-bg">2021</th>';
  customHeader += '<th class="secondary-bg">2020</th>';
  customHeader += '<th class="secondary-bg">2019</th>';
  customHeader += '<th class="secondary-bg">2018</th>';
  customHeader += '<th class="secondary-bg">2017</th>';
  customHeader += '<th class="secondary-bg">2016</th>';

  customHeader += '<th class="primary-bg">Annual</th>';
  customHeader += '<th class="primary-bg">LOM</th></tr>';

  $('[id$=GridViewSample] thead').eq(0).html(customHeader); // -- replace Dummy <thead> innerHTML with customHeader --
  $('[id$=GridViewSample] thead').addClass('large-height');

  //document.dispatchEvent(selectorEvent);
  //document.dispatchEvent(tooltipEvent);
  document.dispatchEvent(tooltipTableEvent);

};

/**
 * Initialize a year and commodity selector fields
 */
$(function () {
  $('.custom-select .select-year-field').selectmenu();
  $('.custom-select .select-commodity-field').selectmenu();

  setTimeout(() => {
    // var downloadsIcon = $('#export_buttons_2')[0];
    // tippy(downloadsIcon, {
    //   content: 'Downloads',
    //   updateDuration: 450,
    //   duration: 450,
    //   delay: [2000, 0],
    //   arrow: true,
    //   interactive: true,
    //   placement: 'top',
    //   appendTo: () => document.body,
    // });

    var sortingIcon = $('#sort_table_list')[0];
    tippy(sortingIcon, {
      content: 'Sorting',
      updateDuration: 450,
      duration: 450,
      delay: [2000, 0],
      arrow: true,
      interactive: true,
      placement: 'top',
      appendTo: () => document.body,
    });

    var visibilityIcon = $('#imgRemoveBlanks')[0];
    tippy(visibilityIcon, {
      content: 'Visibility',
      updateDuration: 450,
      duration: 450,
      delay: [2000, 0],
      arrow: true,
      interactive: true,
      placement: 'top',
      appendTo: () => document.body,
    });
  }, 500);
});

document.addEventListener('addCommoditySelector', initSelectAndCommodities);
window.addEventListener('load', initSelectAndCommodities);

function initSelectAndCommodities() {
  var commodotiesLength = getCommodities().length;

  $('.custom-select.select-commodity').html(getCommoditiesOptions());

  commodotiesLength
    ? $('.custom-select.select-commodity').show()
    : $('.custom-select.select-commodity').hide();

  SwapHeader_Contacts();

  $('.custom-select .select-year-field').selectmenu();

  $('.custom-select .select-commodity-field').selectmenu();
}

$(window).on('resize', debounce(function () {
    $('.custom-select .select-year-field').selectmenu('close');
    $('.custom-select .select-commodity-field').selectmenu('close');
  
    $('#sidebarCategorySelect').selectmenu('close');
    $('#txtCompanySearch').autocomplete('close');
  
    $('#export_buttons_modal').removeClass('open_modal');
  }, 100))

document.addEventListener('click', function(event) {
  const exportDownloads = $('#export_buttons_modal');
  const exportDownloadsMobile = $('#export_buttons_modal_mobile');
  const exportDownloadsButton = $('#export_buttons_2');
  const exportDownloadsButtonMobile = $('#export_buttons_1');
  if(window.matchMedia("(max-width: 1150px)").matches) {
    if(exportDownloadsButtonMobile.is(event.target) || exportDownloadsButtonMobile.has(event.target).length !== 0  ) {
      exportDownloadsMobile.toggleClass('open_modal');
    } else if (!exportDownloadsMobile.is(event.target) && exportDownloadsMobile.has(event.target).length === 0) {
      exportDownloadsMobile.removeClass('open_modal');
      exportDownloadsButtonMobile.removeClass('active');
    }
  } else {
    if(exportDownloadsButton.is(event.target) || exportDownloadsButton.has(event.target).length !== 0  ) {
      exportDownloads.toggleClass('open_modal');
    } else if (!exportDownloads.is(event.target) && exportDownloads.has(event.target).length === 0) {
      exportDownloads.removeClass('open_modal');
      exportDownloadsButton.removeClass('active');
    }
  }
  
});