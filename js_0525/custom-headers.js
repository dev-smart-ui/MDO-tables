var addCommoditySelector = new Event('addCommoditySelector');

function getYearOptions(id) {
  var yearOptions = `
      <select id="`+id+`" class="select-year-field" >
        <option value="${getYearFromNow(0)}">${getYearFromNow(0)}</option>
        <option value="${getYearFromNow(-1)}" selected>${getYearFromNow(-1)}</option>
        <option value="${getYearFromNow(-2)}">${getYearFromNow(-2)}</option>
        <option value="${getYearFromNow(-3)}">${getYearFromNow(-3)}</option>
		<option value="${getYearFromNow(-4)}">${getYearFromNow(-4)}</option>
      </select>
	`;
	
	return yearOptions;
}

function Clear_Buttons(blanks, yr, cmd) {
	if(blanks == 1)
		$('#imgRemoveBlanks_2').css({'visibility':'hidden'}); 
	else 
		$('#imgRemoveBlanks_2').css({'visibility':'visible'});
	
	if(yr == 1)
		$('#yearOptionsMobile').css({'visibility':'hidden'}); 	
	if(cmd == 1)
		$('#cmdMobile').css({'visibility':'hidden'}); 
	
	if ($('#mapTopButtons').length) 
		$("#mapTopButtons").remove();

	if ($('#sort_mining_mobile').length) $("#sort_mining_mobile").remove();	
	if ($('#export_Mining').length) $("#export_Mining").remove();	

	Clear_DownloadButtons(blanks, yr, cmd);
}

function Clear_DownloadButtons(blanks, yr, cmd) {
	$('#export_buttons_1').css({'visibility':'hidden'}); 
	$('#sort_table_list_2').css({'visibility':'hidden'});

	$('#export_Overview').remove(); 	
	$('#export_Contracts').hide(); 
	$('#export_Address').hide();
	$('#export_Contacts').hide();
	$('#export_Consultants').hide();	
	$('#export_Reserves').hide();
	$('#export_Resources').hide();
	
	$('#export_Production').hide();
	//$('#export_Mining').hide();
	$('#export_ProductionCosts').hide();

	$('#export_Fleet').hide();
	$('#export_Pipelines').hide();
	$('#export_Projects').hide();
	$('#export_Timeline').hide();

}


function Clear_UpdatePanel_CSS() { 
	$("#UpdatePanel").removeClass('scroll-contacts');
	$("#UpdatePanel").removeClass('scroll-fleet');
	$("#UpdatePanel").removeClass('scroll-production');
	$("#UpdatePanel").removeClass('scroll-pipelines');
	$("#UpdatePanel").removeClass('scroll-mining'); 
	$("#UpdatePanel").removeClass('scroll-timeline');
	$("#UpdatePanel").removeClass('scroll-projects');
	$("#UpdatePanel").removeClass('scroll-costs');	
}

function SetMobileHeader(title) {
	  $('#tab_label').text(title);
}


function SwapHeader_Overview() {
//	alert('Owners'); 
	
  Clear_UpdatePanel_CSS();	
  Clear_Buttons(1,1,1);
  $('#export_buttons_1').css({'visibility':'visible'});
	
  var customHeader = '<tr><th class=\'asset-content\' rowspan=\'3\'><div class=\'asset-content-wrapper\'><div class=\'table-icons-block\'>';
  
  //customHeader += '<button type=\'button\' id=\'export_buttons_2\' class=\'icon\' onclick="donwloadClick(1,1)">';
  //customHeader += '<img src="../../icons/download.svg" ><img class="icon-active" src="../../icons/download-active.svg" ></button>';
  
  
  customHeader += '<button type=\'button\' id=\'export_buttons_2\' class=\'icon\' onclick="toggleActiveById(\'export_buttons_2\');toggleDownload(1);">';
  customHeader += '<img src="../../icons/download.svg" ><img class="icon-active" src="../../icons/download-active.svg" ></button>'; 

  customHeader += `<script language="javascript">
		$(document).ready(function () {
			// -- add Download button to headerMobile div --
			$('#headerMobile').prepend('<button type="button" id="export_Overview" class="icon" onclick="toggleActiveByObject(this);"><img src="../../icons/download.svg" ><img class="icon-active" src="../../icons/download-active.svg" ></button>');
			
			if (!$('#export_buttons_modal_mobile').length) 
				$('#headerMobile').append('<div id="export_buttons_modal_mobile" class="export-buttons-modal"><div onclick="donwloadClick(1,1)"><img src="../../icons/download.svg" />Location & Ownership</div><div onclick="donwloadClick(2,1)"><img src="../../icons/download.svg" />Asset Commodities</div><div onclick="donwloadClick(3,1)"><img src="../../icons/download.svg" />Deposit Types</div></div>');
		});			
	</script>`;  
  
 
 customHeader += 
  `<div id=\'export_buttons_modal\' class=\'export-buttons-modal\'>
    <div onclick="donwloadClick(1,1)"><img src="../../icons/download.svg" />Location & Ownership</div>
    <div onclick="donwloadClick(2,1)"><img src="../../icons/download.svg" />Asset Commodities</div>
	<div onclick="donwloadClick(3,1)"><img src="../../icons/download.svg" />Deposit Types</div>
  </div>`;

 // customHeader += '<button type="button" id="sort_table_list" class="icon" onclick="toggleActiveById(\'sort_table_list\')">';
 // customHeader += '<img src="../../icons/sort.svg" ><img class="icon-active" src="../../icons/sort-active.svg" ></button>';
  //customHeader += '<button type="button" id="imgRemoveBlanks" class="icon" onclick="toggleActiveById(\'imgRemoveBlanks\')">';
  //customHeader += '<img src="../../icons/eye.svg" alt=""><img class="icon-active" src="../../icons/eye-active.svg" alt=""></button>';
  // Year select field
 // customHeader += getYearOptions();  
 // customHeader += getCommoditiesOptions();
 
 
  customHeader += '</div>';

  //customHeader += "<s cript>document.dispatchEvent(selectorEvent);</s cript>";

  customHeader += '<div class="asset">Asset</div>';
  customHeader += '</div></th>';
  
  customHeader += '<th rowspan="3" class="asset">Owner</th><th colspan="10" class="asset">Breakdown</th><th colspan="21" class="asset">Commodity</th>';
  customHeader += '</tr>';
  
  
	customHeader += '<tr>';
				customHeader += '<th class="secondary-bg" colspan="2" >Location</th>';
				customHeader += '<th class="primary-bg" colspan="4" >Stage</th>';
				customHeader += '<th class="secondary-bg" colspan="4" >Type</th>';
				customHeader += '<th class="primary-bg" colspan="2">Gems</th>';
				customHeader += '<th class="secondary-bg" colspan="3">Precious<br />Metals</th>';
				customHeader += '<th class="primary-bg" colspan="6">Base Metals</th>';
				customHeader += '<th class="secondary-bg" colspan="6">Iron Ore<br />& Minor Metals</th>';
				customHeader += '<th class="primary-bg" colspan="4">Other</th>';
	customHeader += '</tr>';
  
	customHeader += '<tr>';
	customHeader += '<th class="secondary-bg rotated-always bottom-shadow"><span>Country</span></th>';
	customHeader += '<th class="secondary-bg rotated-always bottom-shadow"><span>State</span></th>';

	customHeader += '<th class="primary-bg rotated-always bottom-shadow"><span>PEA,&nbsp;PFS,&nbsp;FS</span></th>';
	customHeader += '<th class="primary-bg rotated-always bottom-shadow"><span>Permitting</span></th>';
	customHeader += '<th class="primary-bg rotated-always bottom-shadow"><span>Construction</span></th>';
	customHeader += '<th class="primary-bg rotated-always bottom-shadow"><span>Production</span></th>';
	
	customHeader += '<th class="secondary-bg rotated-always bottom-shadow"><span>In&nbsp;Situ</span></th>';
	customHeader += '<th class="secondary-bg rotated-always bottom-shadow"><span>Surface</span></th>';	
	customHeader += '<th class="secondary-bg rotated-always bottom-shadow"><span>Open&nbsp;Pit</span></th>';
	customHeader += '<th class="secondary-bg rotated-always bottom-shadow"><span>Underground</span></th>';
	

	customHeader += '<th class="primary-bg rotated-always bottom-shadow"><span>Diamond</span></th>';
	customHeader += '<th class="primary-bg rotated-always bottom-shadow"><span>Other</span></th>';
	
	customHeader += '<th class="secondary-bg rotated-always bottom-shadow"><span>Gold</span></th>';
	customHeader += '<th class="secondary-bg rotated-always bottom-shadow"><span>Silver</span></th>';
	customHeader += '<th class="secondary-bg rotated-always bottom-shadow"><span>Platinum&nbsp;/&nbsp;PGM</span></th>';
				
	customHeader += '<th class="primary-bg rotated-always bottom-shadow"><span>Aluminum</span></th>';
	customHeader += '<th class="primary-bg rotated-always bottom-shadow"><span>Copper</span></th>';
	customHeader += '<th class="primary-bg rotated-always bottom-shadow"><span>Nickel</span></th>';
	customHeader += '<th class="primary-bg rotated-always bottom-shadow"><span>Lead</span></th>';
	customHeader += '<th class="primary-bg rotated-always bottom-shadow"><span>Zinc</span></th>';
	customHeader += '<th class="primary-bg rotated-always bottom-shadow"><span>Tin</span></th>';	
	
	customHeader += '<th class="secondary-bg rotated-always bottom-shadow"><span>Iron&nbsp;Ore</span></th>';
	customHeader += '<th class="secondary-bg rotated-always bottom-shadow"><span>Cobalt</span></th>';
	customHeader += '<th class="secondary-bg rotated-always bottom-shadow"><span>Indium</span></th>';
	customHeader += '<th class="secondary-bg rotated-always bottom-shadow"><span>Molybdenum</span></th>';
	customHeader += '<th class="secondary-bg rotated-always bottom-shadow"><span>Tungsten</span></th>';
	customHeader += '<th class="secondary-bg rotated-always bottom-shadow"><span>Other</span></th>';	

	customHeader += '<th class="primary-bg rotated-always bottom-shadow"><span>Uranium</span></th>';
	customHeader += '<th class="primary-bg rotated-always bottom-shadow"><span>Coal</span></th>';
	customHeader += '<th class="primary-bg rotated-always bottom-shadow"><span>Potash</span></th>';
	customHeader += '<th class="primary-bg rotated-always bottom-shadow"><span>Phosphates</span></th>';				
	customHeader += '</tr>'; 
  
  $('[id$=GridViewSample] thead').eq(0).html(customHeader); // -- replace Dummy <thead> innerHTML with customHeader --
  //$('[id$=GridViewSample] thead').addClass('large-height'); // -- default Personnel --
  
  $('[id$=GridViewSample] thead').addClass('costs');
  $("#UpdatePanel").addClass('scroll-costs');
  
  document.dispatchEvent(tooltipTableEvent);
  
  $('#lblSearchResults').text($('#MainBody_Overview_lblSR').text());
};

function SwapHeader_Contracts() {
	
	//alert('Contracts');
	
  Clear_UpdatePanel_CSS();	
  Clear_Buttons(1,1,1);
	
  var customHeader = '<tr><th class=\'asset-content\' rowspan=\'\'><div class=\'asset-content-wrapper\'><div class=\'table-icons-block\'>';
  
  customHeader += '<button type=\'button\' id=\'export_buttons_2\' class=\'icon\' onclick="donwloadClick(1,21)">';
  customHeader += '<img src="../../icons/download.svg" ><img class="icon-active" src="../../icons/download-active.svg" ></button>';

  //customHeader += '<button type="button" id="sort_table_list" class="icon" onclick="toggleActiveById(\'sort_table_list\')">';
  //customHeader += '<img src="../../icons/sort.svg" ><img class="icon-active" src="../../icons/sort-active.svg" ></button>';
  //customHeader += '<button type="button" id="imgRemoveBlanks" class="icon" onclick="toggleActiveById(\'imgRemoveBlanks\')">';
  //customHeader += '<img src="../../icons/eye.svg" alt=""><img class="icon-active" src="../../icons/eye-active.svg" alt=""></button>';
  
  customHeader += `<script language="javascript">
		$(document).ready(function () {
			// -- add Download button to headerMobile div --
			$('#headerMobile').html('<button type="button" id="export_Contracts" class="icon" onclick="donwloadClick(1,21)"><img src="../../icons/download.svg" ><img class="icon-active" src="../../icons/download-active.svg" ></button>');
		});			
	</script>`;
  
  
  customHeader += '</div>';
  customHeader += '<div class="asset">Asset</div>';
  customHeader += '</div>';
  customHeader += '</th>';

  customHeader += '<th rowspan="" class="primary-bg rotated-always bottom-shadow"><span>PEA,&nbsp;PFS,&nbsp;FS</span></th>';
  customHeader += '<th rowspan="" class="primary-bg rotated-always bottom-shadow"><span>Permitting</span></th>';
  customHeader += '<th rowspan="" class="primary-bg rotated-always bottom-shadow"><span>Construction</span></th>';
  customHeader += '<th rowspan="" class="primary-bg rotated-always bottom-shadow"><span>Production</span></th>';
  
  customHeader += '<th class="asset bottom-shadow">Contractor</th>';
  customHeader += '<th class="asset bottom-shadow">Contract Type</th>';
  //customHeader += '<th class="asset bottom-shadow">Description</th>';
  customHeader += '<th class="asset rotated-always bottom-shadow"><span>Duration,&nbsp;y</span></th>';
  customHeader += '<th class="asset bottom-shadow">Ref. Date</th>';
  customHeader += '<th class="asset rotated-always bottom-shadow"><span>Source</span></th>';
  customHeader += '</tr>';  
  
  $('[id$=GridViewSample] thead').eq(0).html(customHeader); // -- replace Dummy <thead> innerHTML with customHeader --
  //$('[id$=GridViewSample] thead').addClass('large-height'); // -- default Personnel --
  
  $('[id$=GridViewSample] thead').addClass('pipelines');
  $("#UpdatePanel").addClass('scroll-pipelines');
  
  document.dispatchEvent(tooltipTableEvent);
  
  //alert($('#MainBody_Contractors_lblSR').text());
  
  //$('#lblSearchResult').text('');
  $('#lblSearchResults').text($('#MainBody_Contractors_lblSR').text());
};

function SwapHeader_Address() {
	
	//alert('address');
	
  Clear_UpdatePanel_CSS();	
  Clear_Buttons(1,1,1);
	
  var customHeader = '<tr><th class=\'asset-content\' rowspan=\'2\'><div class=\'asset-content-wrapper\'><div class=\'table-icons-block\'>';
  
  customHeader += '<button type=\'button\' id=\'export_buttons_2\' class=\'icon\' onclick="donwloadClick(1,9)">';
  customHeader += '<img src="../../icons/download.svg" ><img class="icon-active" src="../../icons/download-active.svg" ></button>';

 // customHeader += '<button type="button" id="sort_table_list" class="icon" onclick="toggleActiveById(\'sort_table_list\')">';
  //customHeader += '<img src="../../icons/sort.svg" ><img class="icon-active" src="../../icons/sort-active.svg" ></button>';

  //customHeader += '<button type="button" id="imgRemoveBlanks" class="icon" onclick="toggleActiveById(\'imgRemoveBlanks\')">';
  //customHeader += '<img src="../../icons/eye.svg" alt=""><img class="icon-active" src="../../icons/eye-active.svg" alt=""></button>';

 // customHeader += getYearOptions();
 // customHeader += getCommoditiesOptions();
   customHeader += `<script language="javascript">
		$(document).ready(function () {
			// -- add Download button to headerMobile div --
			$('#headerMobile').html('<button type="button" id="export_Address" class="icon" onclick="donwloadClick(1,9)"><img src="../../icons/download.svg" ><img class="icon-active" src="../../icons/download-active.svg" ></button>');
		});			
	</script>`;

  customHeader += '</div>';

  customHeader += '<div class="asset" style="margin-bottom:20px;">Asset</div>';
  customHeader += '</div>';
  customHeader += '</th>';

  customHeader += '<th colspan="8" class="asset">Office</th>';
  
  customHeader += '</tr>';

  customHeader += '<tr>';
  customHeader += '<th class="secondary-bg">Street Address</th>';
  customHeader += '<th class="secondary-bg">City</th>';
  customHeader += '<th class="secondary-bg">Postal Code</th>';
  customHeader += '<th class="secondary-bg">Country</th>';

  customHeader += '<th class="primary-bg bottom-shadow">Phone</th>';
  customHeader += '<th class="primary-bg bottom-shadow">Fax</th>';
  customHeader += '<th class="primary-bg bottom-shadow">Mail</th></tr>';

  $('[id$=GridViewSample] thead').eq(0).html(customHeader); // -- replace Dummy <thead> innerHTML with customHeader --
  $('[id$=GridViewSample] thead').addClass('production');
  $("#UpdatePanel").addClass('scroll-production');

  //document.dispatchEvent(selectorEvent);
  //document.dispatchEvent(tooltipEvent);
  document.dispatchEvent(tooltipTableEvent);
  
  $('#lblSearchResults').text($('#MainBody_Address_lblSR').text());

};

function SwapHeader_Contacts() {
 // alert('Personnel');
  
  Clear_UpdatePanel_CSS();
  Clear_Buttons(1,1,1);
 SetMobileHeader('Mine Management');

  var customHeader = '<tr><th class=\'asset-content\' rowspan=\'2\'><div class=\'asset-content-wrapper\'><div class=\'table-icons-block\'>';
  
  customHeader += '<button type=\'button\' id=\'export_buttons_2\' class=\'icon\' onclick="donwloadClick(1,8)">';
  customHeader += '<img src="../../icons/download.svg" ><img class="icon-active" src="../../icons/download-active.svg" ></button>';
  
  customHeader += `<script language="javascript">
		$(document).ready(function () {
			// -- add Download button to headerMobile div --
			$('#headerMobile').html('<button type="button" id="export_Contacts" class="icon" onclick="donwloadClick(1,8)"><img src="../../icons/download.svg" ><img class="icon-active" src="../../icons/download-active.svg" ></button>');
		});			
	</script>`;

  customHeader += '</div>';

  //customHeader += "<s cript>document.dispatchEvent(selectorEvent);</s cript>";

  customHeader += '<div class="asset">Asset</div>';
  customHeader += '</div>';

  customHeader += '</th>';
  customHeader += '<th colspan="4" class="asset">Key Personnel</th><th colspan="2">Office</th>';
  customHeader += '<th class="asset rotated bottom-shadow" rowspan="2"><span>Camp</span></th>';
  customHeader += '<th class="asset rotated bottom-shadow" rowspan="2"><span>Contractors</span></th>';
  customHeader += '<th class="asset rotated bottom-shadow" rowspan="2"><span>Employees</span></th>';
  customHeader += '<th class="asset rotated bottom-shadow" rowspan="2"><span>Workforce</span></th>';

  customHeader += '</tr>';

  customHeader += '<tr>';
  customHeader += '<th class="secondary-bg"><span class="linkedin-icon"><img src="../../icons/linkedin.svg"></span></th>';
  customHeader += '<th class="secondary-bg">Job Title</th>';
  customHeader += '<th class="secondary-bg">Name</th>';
  customHeader += '<th class="secondary-bg">Ref. Date</th>';
  customHeader += '<th class="primary-bg">Phone</th>';
  customHeader += '<th class="primary-bg">Mail</th></tr>';

  $('[id$=GridViewSample] thead').eq(0).html(customHeader); // -- replace Dummy <thead> innerHTML with customHeader --
  $('[id$=GridViewSample] thead').addClass('contacts');
  
  $("#UpdatePanel").addClass('scroll-contacts');
  

  // document.dispatchEvent(selectorEvent);
  //document.dispatchEvent(tooltipEvent);
  document.dispatchEvent(tooltipTableEvent);

   $('#lblSearchResults').text($('#MainBody_Contacts_lblSR').text());
};

function SwapHeader_Consultants() {
 // alert('Consultants');
  
  Clear_UpdatePanel_CSS();
  Clear_Buttons(1,1,1);

  var customHeader = '<tr><th class=\'asset-content\' rowspan=\'2\'><div class=\'asset-content-wrapper\'><div class=\'table-icons-block\'>';
  
  customHeader += '<button type=\'button\' id=\'export_buttons_2\' class=\'icon\' onclick="donwloadClick(1,23)">';
  customHeader += '<img src="../../icons/download.svg" ><img class="icon-active" src="../../icons/download-active.svg" ></button>';

  //customHeader += '<button type="button" id="sort_table_list" class="icon" onclick="toggleActiveById(\'sort_table_list\')">';
  //customHeader += '<img src="../../icons/sort.svg" ><img class="icon-active" src="../../icons/sort-active.svg" ></button>';

  //customHeader += '<button type="button" id="imgRemoveBlanks" class="icon" onclick="toggleActiveById(\'imgRemoveBlanks\')">';
  //customHeader += '<img src="../../icons/eye.svg" alt=""><img class="icon-active" src="../../icons/eye-active.svg" alt=""></button>';

  // Year select field
  //customHeader += getYearOptions();  
  //customHeader += getCommoditiesOptions();
  
  customHeader += `<script language="javascript">
		$(document).ready(function () {
			// -- add Download button to headerMobile div --
			$('#headerMobile').html('<button type="button" id="export_Consultants" class="icon" onclick="donwloadClick(1,23)"><img src="../../icons/download.svg" ><img class="icon-active" src="../../icons/download-active.svg" ></button>');
		});			
	</script>`;  

  customHeader += '</div>';

  //customHeader += "<s cript>document.dispatchEvent(selectorEvent);</s cript>";

  customHeader += '<div class="asset">Asset</div>';
  customHeader += '</div>';

  customHeader += '</th>';
  customHeader += '<th colspan="5" class="asset">Consultants</th>';
  customHeader += '<th class="gray-bg rotated bottom-shadow" rowspan="2"><span>Camp</span></th>';
  customHeader += '<th class="gray-bg rotated bottom-shadow" rowspan="2"><span>Contractors</span></th>';
  customHeader += '<th class="gray-bg rotated bottom-shadow" rowspan="2"><span>Employees</span></th>';
  customHeader += '<th class="gray-bg rotated bottom-shadow" rowspan="2"><span>Workforce</span></th>';

  customHeader += '</tr>';

  customHeader += '<tr>';
  customHeader += '<th class="secondary-bg"><span class="linkedin-icon"><img src="../../icons/linkedin.svg"></span></th>';
  customHeader += '<th class="secondary-bg">Expertise / Section</th>';
  customHeader += '<th class="secondary-bg">Name</th>';
  customHeader += '<th class="secondary-bg">Company</th>';
  customHeader += '<th class="secondary-bg">Mail</th></tr>';

  $('[id$=GridViewSample] thead').eq(0).html(customHeader); // -- replace Dummy <thead> innerHTML with customHeader --
  $('[id$=GridViewSample] thead').addClass('contacts');
  
  $("#UpdatePanel").addClass('scroll-contacts')

  // document.dispatchEvent(selectorEvent);
  //document.dispatchEvent(tooltipEvent);
  document.dispatchEvent(tooltipTableEvent);

   $('#lblSearchResults').text($('#MainBody_Consultants_lblSR').text());
};



function SwapHeader_Reserves() {
	
  Clear_UpdatePanel_CSS();	
  Clear_Buttons(1,1,1);
  SetMobileHeader('Proven & Probable');
	
  var customHeader = '<tr><th class=\'asset-content\' rowspan=\'2\'><div class=\'asset-content-wrapper\'><div class=\'table-icons-block\'>';
  
  customHeader += '<button type=\'button\' id=\'export_buttons_2\' class=\'icon\' onclick="donwloadClick(1,6)">';
  customHeader += '<img src="../../icons/download.svg" ><img class="icon-active" src="../../icons/download-active.svg" ></button>';

  //customHeader += '<button type="button" id="sort_table_list" class="icon" onclick="toggleActiveById(\'sort_table_list\')">';
 // customHeader += '<img src="../../icons/sort.svg" ><img class="icon-active" src="../../icons/sort-active.svg" ></button>';

 // customHeader += '<button type="button" id="imgRemoveBlanks" class="icon" onclick="toggleActiveById(\'imgRemoveBlanks\')">';
 // customHeader += '<img src="../../icons/eye.svg" alt=""><img class="icon-active" src="../../icons/eye-active.svg" alt=""></button>';

 // customHeader += getYearOptions();
 // customHeader += getCommoditiesOptions();
 
  customHeader += `<script language="javascript">
		$(document).ready(function () {
			// -- add Download button to headerMobile div --
			$('#headerMobile').html('<button type="button" id="export_Reserves" class="icon" onclick="donwloadClick(1,6)"><img src="../../icons/download.svg" ><img class="icon-active" src="../../icons/download-active.svg" ></button>');
		});			
	</script>`;

  customHeader += '</div>';

  customHeader += '<div class="asset" style="margin-bottom:20px;">Asset</div>';
  customHeader += '</div>';
  customHeader += '</th>';

  customHeader += '<th rowspan="2" class="rotated bottom-shadow">Commodity</th>';
  customHeader += '<th rowspan="2" class="rotated bottom-shadow">Ore Type</th>';
  customHeader += '<th rowspan="2" class="rotated bottom-shadow">Report</th>';
  customHeader += '<th rowspan="2" class="rotated bottom-shadow">Year</th>';

  customHeader += '<th colspan="3" class="secondary-bg">Proven</th>';
  customHeader += '<th colspan="3" class="primary-bg">Probable</th>';
  customHeader += '<th colspan="3" class="secondary-bg">Proven & Probable</th>';

  customHeader += '</tr>';

  customHeader += '<tr>';
  customHeader += '<th class="secondary-bg rotated bottom-shadow">Tonnage</th>';
  customHeader += '<th class="secondary-bg rotated bottom-shadow">Grade</th>';
  customHeader += '<th class="secondary-bg rotated bottom-shadow">Content</th>';
  customHeader += '<th class="primary-bg rotated bottom-shadow">Tonnage</th>';
  customHeader += '<th class="primary-bg rotated bottom-shadow">Grade</th>';
  customHeader += '<th class="primary-bg rotated bottom-shadow">Content</th>';
  customHeader += '<th class="secondary-bg rotated bottom-shadow">Tonnage</th>';
  customHeader += '<th class="secondary-bg rotated bottom-shadow">Grade</th>';
  customHeader += '<th class="secondary-bg rotated bottom-shadow">Content</th></tr>';

  $('[id$=GridViewSample] thead').eq(0).html(customHeader); // -- replace Dummy <thead> innerHTML with customHeader --
  $('[id$=GridViewSample] thead').addClass('reserves');
  $("#UpdatePanel").addClass('scroll-reserves');
  
  //alert(window.innerWidth);

  //document.dispatchEvent(selectorEvent);
  //document.dispatchEvent(tooltipEvent);
  document.dispatchEvent(tooltipTableEvent);
  
  $('#lblSearchResults').text($('#MainBody_Reserves_lblSR').text());

};

function SwapHeader_Resources() {
	
  Clear_UpdatePanel_CSS();	
  Clear_Buttons(1,1,1);
  SetMobileHeader('Measured & Indicated');
	
  var customHeader = '<tr><th class=\'asset-content\' rowspan=\'2\'><div class=\'asset-content-wrapper\'><div class=\'table-icons-block\'>';
  
  customHeader += '<button type=\'button\' id=\'export_buttons_2\' class=\'icon\' onclick="donwloadClick(1,19)">';
  customHeader += '<img src="../../icons/download.svg" ><img class="icon-active" src="../../icons/download-active.svg" ></button>';

  //customHeader += '<button type="button" id="sort_table_list" class="icon" onclick="toggleActiveById(\'sort_table_list\')">';
  //customHeader += '<img src="../../icons/sort.svg" ><img class="icon-active" src="../../icons/sort-active.svg" ></button>';

  //customHeader += '<button type="button" id="imgRemoveBlanks" class="icon" onclick="toggleActiveById(\'imgRemoveBlanks\')">';
  //customHeader += '<img src="../../icons/eye.svg" alt=""><img class="icon-active" src="../../icons/eye-active.svg" alt=""></button>';

 // customHeader += getYearOptions();
 // customHeader += getCommoditiesOptions();
 
  customHeader += `<script language="javascript">
		$(document).ready(function () {
			// -- add Download button to headerMobile div --
			$('#headerMobile').html('<button type="button" id="export_Resources" class="icon" onclick="donwloadClick(1,19)"><img src="../../icons/download.svg" ><img class="icon-active" src="../../icons/download-active.svg" ></button>');
		});			
	</script>`; 

  customHeader += '</div>';

  customHeader += '<div class="asset" style="margin-bottom:20px;">Asset</div>';
  customHeader += '</div>';
  customHeader += '</th>';

  customHeader += '<th rowspan="2" class="rotated bottom-shadow">Commodity</th>';
  customHeader += '<th rowspan="2" class="rotated bottom-shadow">Ore Type</th>';
  customHeader += '<th rowspan="2" class="rotated bottom-shadow">Report</th>';
  customHeader += '<th rowspan="2" class="rotated bottom-shadow">Year</th>';

  customHeader += '<th colspan="3" class="secondary-bg">Measured</th>';
  customHeader += '<th colspan="3" class="primary-bg">Indicated</th>';
  customHeader += '<th colspan="3" class="secondary-bg">Measured & Indicated</th>';
  customHeader += '<th colspan="3" class="primary-bg">Inferred</th>';
  
  //customHeader += '<th rowspan="2" class="rotated bottom-shadow"><span>Inclusive of<br />Reserves</span></th>';
  customHeader += '<th rowspan="2" class="bottom-shadow">Inclusive of<br />Reserves</th>';

  customHeader += '</tr>';

  customHeader += '<tr>';
  customHeader += '<th class="secondary-bg rotated bottom-shadow">Tonnage</th>';
  customHeader += '<th class="secondary-bg rotated bottom-shadow">Grade</th>';
  customHeader += '<th class="secondary-bg rotated bottom-shadow">Content</th>';
  customHeader += '<th class="primary-bg rotated bottom-shadow">Tonnage</th>';
  customHeader += '<th class="primary-bg rotated bottom-shadow">Grade</th>';
  customHeader += '<th class="primary-bg rotated bottom-shadow">Content</th>';
  customHeader += '<th class="secondary-bg rotated bottom-shadow">Tonnage</th>';
  customHeader += '<th class="secondary-bg rotated bottom-shadow">Grade</th>';
  customHeader += '<th class="secondary-bg rotated bottom-shadow">Content</th>';
  customHeader += '<th class="primary-bg rotated bottom-shadow">Tonnage</th>';
  customHeader += '<th class="primary-bg rotated bottom-shadow">Grade</th>';
  customHeader += '<th class="primary-bg rotated bottom-shadow">Content</th></tr>';

  $('[id$=GridViewSample] thead').eq(0).html(customHeader); // -- replace Dummy <thead> innerHTML with customHeader --
  $('[id$=GridViewSample] thead').addClass('resources');
  $("#UpdatePanel").addClass('scroll-resources');
  
  //alert(window.innerWidth);

  //document.dispatchEvent(selectorEvent);
  //document.dispatchEvent(tooltipEvent);
  document.dispatchEvent(tooltipTableEvent);

	$('#lblSearchResults').text($('#MainBody_Resources_lblSR').text());
};




function SwapHeader_Production() {
	
  Clear_UpdatePanel_CSS();	
  Clear_Buttons(1,1,1);
  SetMobileHeader('Commodity Production');
	
  var customHeader = '<tr><th class=\'asset-content\' rowspan=\'2\'><div class=\'asset-content-wrapper\'><div class=\'table-icons-block\'>';
  
  customHeader += '<button type=\'button\' id=\'export_buttons_2\' class=\'icon\' onclick="donwloadClick(1,5)">';
  customHeader += '<img src="icons/download.svg" ><img class="icon-active" src="icons/download-active.svg" ></button>';

  //customHeader += '<button type="button" id="sort_table_list" class="icon" onclick="toggleActiveById(\'sort_table_list\')">';
  //customHeader += '<img src="../../icons/sort.svg" ><img class="icon-active" src="../../icons/sort-active.svg" ></button>';

  //customHeader += '<button type="button" id="imgRemoveBlanks" class="icon" onclick="toggleActiveById(\'imgRemoveBlanks\')">';
  //customHeader += '<img src="../../icons/eye.svg" alt=""><img class="icon-active" src="../../icons/eye-active.svg" alt=""></button>';

 // customHeader += getYearOptions();
 // customHeader += getCommoditiesOptions();
 
  customHeader += `<script language="javascript">
		$(document).ready(function () {
			// -- add Download button to headerMobile div --
			$('#headerMobile').html('<button type="button" id="export_Production" class="icon" onclick="donwloadClick(1,5)"><img src="icons/download.svg" ><img class="icon-active" src="icons/download-active.svg" ></button>');
		});			
	</script>`; 

  customHeader += '</div>';

  customHeader += '<div class="asset" style="margin-bottom:20px;">Asset</div>';
  customHeader += '</div>';
  customHeader += '</th>';

  customHeader += '<th rowspan="2" class="rotated bottom-shadow">Commodity</th>';
  customHeader += '<th rowspan="2" class="rotated bottom-shadow">Product</th>';
  customHeader += '<th rowspan="2" class="rotated bottom-shadow">Unit</th>';

  customHeader += '<th colspan="8" >Annual Production: Mines</th>';
  customHeader += '<th colspan="2" >Production: Projects</th>';

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

  customHeader += '<th class="primary-bg bottom-shadow">Annual</th>';
  customHeader += '<th class="primary-bg bottom-shadow" style="width:60px;">LOM</th></tr>';

  $('[id$=GridViewSample] thead').eq(0).html(customHeader); // -- replace Dummy <thead> innerHTML with customHeader --
  $('[id$=GridViewSample] thead').addClass('production');
  $("#UpdatePanel").addClass('scroll-production');

  //document.dispatchEvent(selectorEvent);
  //document.dispatchEvent(tooltipEvent);
  document.dispatchEvent(tooltipTableEvent);
  
  $('#lblSearchResults').text($('#MainBody_CommodityProduction_lblSR').text());

};

function SwapHeader_Mining() {
	
  Clear_UpdatePanel_CSS();
  Clear_Buttons(1,1,1);
  $('#sort_table_list_2').css({'visibility':'visible'}); 
  SetMobileHeader('Operating Metrics');
	
  var customHeader = '<tr><th class=\'asset-content\' rowspan=\'2\'><div class=\'asset-content-wrapper\'><div class=\'table-icons-block\' >';
  
  //customHeader += '<button type=\'button\' id=\'export_buttons_2\' class=\'icon\' onclick="donwloadClick(1,24)">';
  //customHeader += '<img src="../../icons/download.svg" ><img class="icon-active" src="../../icons/download-active.svg" ></button>';

  //customHeader += '<button type="button" id="sort_mining" class="icon" onclick="toggleActiveById(\'sort_mining\');sortClick();">';
  //customHeader += '<img src="../../icons/sort.svg" ><img class="icon-active" src="../../icons/sort-active.svg" ></button>';
  
  customHeader += '<button type=\'button\' id=\'export_buttons_M\' class=\'icon\' onclick="toggleActiveById(\'export_buttons_M\');toggleDownload(1);">';
  customHeader += '<img src="icons/download.svg" ><img class="icon-active" src="icons/download-active.svg" ></button>';
  
  customHeader += 
  `<div id=\'export_buttons_modal\' class=\'export-buttons-modal\'>
    <div onclick="donwloadClick(1,24)"><img src="icons/download.svg"  id="124" />Mining Scale.</div>
    <div onclick="donwloadClick(2,24)"><img src="icons/download.svg"  id="224" />Metrics</div>
  </div>`;

  customHeader += '<button type="button" id="sort_mining" class="icon" onclick="toggleActiveById(\'sort_mining\');sortClick(24);">';
  customHeader += '<img src="icons/sort.svg" ><img class="icon-active" src="icons/sort-active.svg" ></button>';


  // -- not in use -- customHeader += '<button type="button" id="imgRemoveBlanks" class="icon" onclick="toggleActiveById(\'imgRemoveBlanks\')">';
  // -- not in use -- customHeader += '<img src="../../icons/eye.svg" alt=""><img class="icon-active" src="../../icons/eye-active.svg" alt=""></button>';
  
    customHeader += `<script language="javascript">
		$(document).ready(function () {
			// -- add Download button to headerMobile div -- toggleActiveById(\'export_buttons_M\'); -- export_buttons_mining_modal
			if ($('#mapTopButtons').length) 
				$("#mapTopButtons").remove();
			
			$('#sort_table_list_2').css({'left':'-35px'}); 
			
			if (!$('#export_buttons_mining_modal').length) 
				$('#headerMobile').prepend('<div id="export_buttons_mining_modal" class="export-buttons-modal"><div onclick="donwloadClick(1,24)"><img src="icons/download.svg"  id="324" />Mining Scale</div><div onclick="donwloadClick(2,24)"><img src="icons/download.svg"  id="424" />Metrics</div></div>');
			
			if (!$('#export_Mining').length) 
			$('#headerMobile').prepend('<button type="button" id="export_Mining" class="icon" onclick="toggleDownload(2);"><img src="icons/download.svg" ><img class="icon-active" src="icons/download-active.svg" ></button>');
		

			if ($('#sort_mining_mobile').length) 
				$("#sort_mining_mobile").remove();
			// -- re-attach 'sort_mining_mobile' button with active class, if required
			if (window.location.href.indexOf("obc=on") >= 0)  
				$('#headerMobile').append('<button type="button" id="sort_mining_mobile" class="icon active" onclick="toggleActiveByObject(this);sortClick(24);" style="position:absolute;left:48px;"><img src="icons/sort.svg" ><img class="icon-active" src="icons/sort-active.svg" ></button>');						
			else
				$('#headerMobile').append('<button type="button" id="sort_mining_mobile" class="icon" onclick="toggleActiveByObject(this);sortClick(24);" style="position:absolute;left:48px;"><img src="icons/sort.svg" ><img class="icon-active" src="icons/sort-active.svg" ></button>');
			
			
		});			
	</script>`; 
  
  customHeader += '</div>';
  customHeader += '<div class="asset" >Asset</div>';
  customHeader += '</div>';
  customHeader += '</th>';

  customHeader += '<th rowspan="2" class="secondary-bg rotated-always bottom-shadow"><span>Open&nbsp;Pit</span></th>';
  customHeader += '<th rowspan="2" class="secondary-bg rotated-always bottom-shadow"><span>Underground</span></th>';
  customHeader += '<th rowspan="2" class="primary-bg rotated-always bottom-shadow"><span>Project</span></th>';
  
  customHeader += '<th rowspan="2" class="secondary-bg bottom-shadow">Mining&nbsp;&nbsp; Scale **<br />tpd</th>';
  customHeader += '<th rowspan="2" class="secondary-bg bottom-shadow">Processing&nbsp;&nbsp; Scale **<br />tpd</th>';
  
  
  customHeader += '<th rowspan="2" class="secondary-bg rotated-always bottom-shadow"><span>Backfill</span></th>';
  customHeader += '<th rowspan="2" class="secondary-bg rotated-always bottom-shadow"><span>Shaft&nbsp;depth,&nbsp;m</span></th>';
  customHeader += '<th rowspan="2" class="secondary-bg rotated-always bottom-shadow"><span>Life&nbsp;of&nbsp;Mine,&nbsp;y</span></th>';
  
  customHeader += '<th rowspan="2" class="">Metrics</th><th colspan="7" class="">Mining and Processing, kt</th>';
  
  customHeader += '</tr>';
  
  customHeader += '<tr>';

  customHeader += '<th class="secondary-bg bottom-shadow">2023</th>';
  customHeader += '<th class="secondary-bg bottom-shadow">2022</th>';
  customHeader += '<th class="secondary-bg bottom-shadow">2021</th>';
  customHeader += '<th class="secondary-bg bottom-shadow">2020</th>';
  customHeader += '<th class="secondary-bg bottom-shadow">2019</th>';
  customHeader += '<th class="secondary-bg bottom-shadow">2018</th>';
  customHeader += '<th class="secondary-bg bottom-shadow">Projects</th>';

  customHeader += '</tr>';  
  
  
  $('[id$=GridViewSample] thead').eq(0).html(customHeader); // -- replace Dummy <thead> innerHTML with customHeader --
  //$('[id$=GridViewSample] thead').addClass('large-height'); // -- default Personnel --
  
  $('[id$=GridViewSample] thead').addClass('mining');
  $("#UpdatePanel").addClass('scroll-mining');
  
  document.dispatchEvent(tooltipTableEvent);
  
  $('#lblSearchResults').text($('#MainBody_Mining_lblSR').text());
};

function SwapHeader_ProductionCosts() {
	
  Clear_UpdatePanel_CSS();	
  Clear_DownloadButtons();
  document.cookie = "vw=11";
  $('#yearOptionsMobile').css({'visibility':'hidden'});
  
  SetMobileHeader('Production Costs');
    	
  var customHeader = '<tr><th class=\'asset-content\' rowspan=\'3\'><div class=\'asset-content-wrapper\'><div class=\'table-icons-block\'>';
  
  customHeader += '<button type=\'button\' id=\'export_buttons_2\' class=\'icon\' onclick="donwloadClick(1,11)">';
  customHeader += '<img src="../../icons/download.svg" ><img class="icon-active" src="../../icons/download-active.svg" ></button>';

  //customHeader += '<button type="button" id="sort_table_list" class="icon" onclick="toggleActiveById(\'sort_table_list\')">';
  //customHeader += '<img src="../../icons/sort.svg" ><img class="icon-active" src="../../icons/sort-active.svg" ></button>';

  customHeader += '<button type="button" id="pcRemoveBlanks" class="icon" onclick="toggleActiveById(\'pcRemoveBlanks\');">';
  customHeader += '<img src="../../icons/eye.svg" alt=""><img class="icon-active" src="../../icons/eye-active.svg" alt=""></button>';

  // Year select field
  customHeader += '<div class="custom-select select-year">' + getYearOptions('pcYearRef') + '</div>';  
  
  
  //customHeader += getCommoditiesOptions('prodCosts');
  
  customHeader += `<script language="javascript">
  			
			var urlPC = window.location.href;
			
			
			$('#pcYearRef').on( "selectmenuchange", function( event, ui ) {
							
				var iYear = "2022";
				
				let urlR = new URL(window.location);

				if (document.getElementById('pcYearRef')) {
					iYear = $('#pcYearRef').val();
					$('#hYearRef').val(iYear);
					//alert($("#hYearRef").val());
				}				

				urlR.searchParams.set('yr', iYear);

				location.href = urlR;
			});
			
			
			$("#pcRemoveBlanks").click(function () {
				
				if (urlPC.indexOf("rb=on") >= 0)
					urlPC = urlPC.replace("&rb=on", "");
				else
					urlPC =urlPC + "&rb=on";
				
				let urlPCRB = new URL(urlPC);
				urlPCRB.searchParams.set('vw', '11');
				location.href = urlPCRB;
				
				//location.href = urlPC;
			});	
			
			
		$(document).ready(function () {
			// -- Mobile --
			if ($('#mapTopButtons').length) 
				$("#mapTopButtons").remove();	

			$('#headerMobile').html('<div class="custom-select select-year" id="yearOptionsMobile" style="width:100px;position:absolute;left:86px;" >'+getYearOptions("pcYearRefMobile")+'</div>');
			$('.custom-select .select-year-field').selectmenu();
			
			$('#headerMobile').prepend('<button type="button" id="export_ProductionCosts" class="icon" onclick="donwloadClick(1,11)"><img src="../../icons/download.svg" ><img class="icon-active" src="../../icons/download-active.svg" ></button><button type="button" id="imgRemoveBlanks_2" class="icon" onclick="toggleActiveByObject(this)"><img src="icons/eye.svg" alt=""><img class="icon-active" src="icons/eye-active.svg" alt=""></button>');

			//if (!$('#imgRemoveBlanks_2').length)
			//	$('#headerMobile').append('<button type="button" id="imgRemoveBlanks_2" class="icon" onclick="toggleActiveByObject(this)"><img src="icons/eye.svg" alt=""><img class="icon-active" src="icons/eye-active.svg" alt=""></button>');
			
			$('#imgRemoveBlanks_2').css({position: 'absolute',left: '48px'});
			

			//if (!$('#yearOptionsMobile').length){
			//	$('#headerMobile').append('<div class="custom-select select-year" id="yearOptionsMobile" style="width:100px;position:absolute;left:86px;"></div>');
				//$("#yearOptionsMobile").html(getYearOptions('pcYearRefMobile'));
			//}
			
			//if (!$('#pcYearRefMobile').length)
			//$("#yearOptionsMobile").html(getYearOptions('pcYearRefMobile'));

			
			$('#yearOptionsMobile').css({'visibility':'visible'}); 
			
			
			let urlCostsP = new URL(window.location);
			let ddIndex = 0;
			if (urlCostsP.searchParams.has('yr')) {
				$('#pcYearRefMobile').val(urlCostsP.searchParams.get('yr'));
			
				// -- Display yr value --
				$('.ui-selectmenu-text').each(function() {
					if(ddIndex > 3)
						$('.ui-selectmenu-text').eq(ddIndex).html(urlCostsP.searchParams.get('yr'));
					
					ddIndex += 1;
				});				
			}
				
			
			$('#pcYearRefMobile').on( "selectmenuchange", function( event, ui ) {
							
				var iYear = "2022";
				
				let urlRM = new URL(window.location);

				if (document.getElementById('pcYearRefMobile')) {
					iYear = $('#pcYearRefMobile').val();
					$('#hYearRef').val(iYear);
					//alert($("#hYearRef").val());
				}				

				urlRM.searchParams.set('yr', iYear);

				location.href = urlRM;
			});
			
			// --- Remove blanks ---  
			$('#imgRemoveBlanks_2').css({'visibility':'visible'}); 
			$('#yearOptionsMobile').css({'visibility':'visible'}); 
			
			
			$("#imgRemoveBlanks_2").off('click').click(function () { 
				if (urlPC.indexOf("rb=on") >= 0)
					urlPC = urlPC.replace("&rb=on", "");
				else
					urlPC =urlPC + "&rb=on";
				
				let urlPCRB_2 = new URL(urlPC);
				urlPCRB_2.searchParams.set('vw', '11');
				location.href = urlPCRB_2;				
				
				//location.href = urlPC;
			});	

			if (urlPC.indexOf("rb=on") >= 0)
				$('#imgRemoveBlanks_2').addClass('active');			
			
		});			
			
			
  </script>`;	
  
  customHeader += '</div>';

  //customHeader += "<s cript>document.dispatchEvent(selectorEvent);</s cript>";

  customHeader += '<div class="asset">Asset</div>';
  customHeader += '</div>';

  customHeader += '</th>';
  customHeader += '<th colspan="2" class="">Type</th><th colspan="6" class="">Commodity Costs</th><th colspan="11" class="">Mining & Processing Costs</th>';
  customHeader += '</tr>';
  
  customHeader += '<tr>';
  customHeader += '<th rowspan="2" class="primary-bg rotated-always bottom-shadow"><span>Project</span></th>';
  customHeader += '<th rowspan="2" class="secondary-bg rotated-always bottom-shadow"><span>Mine</span></th>';
 
  customHeader += '<th rowspan="2" class="gray-bg rotated-always bottom-shadow"><span>Currency</span></th>';
  customHeader += '<th rowspan="2" class="secondary-bg rotated-always bottom-shadow"><span>Commodity</span></th>';
  customHeader += '<th rowspan="2" class="primary-bg rotated-always bottom-shadow"><span>Cash&nbsp;Costs&nbsp;/&nbsp;C1</span></th>';
  customHeader += '<th rowspan="2" class="primary-bg rotated-always bottom-shadow"><span>Total&nbsp;Cash&nbsp;Costs&nbsp;/&nbsp;C2</span></th>';
  customHeader += '<th rowspan="2" class="primary-bg rotated-always bottom-shadow"><span>AISC</span></th>';
  customHeader += '<th rowspan="2" class="primary-bg rotated-always bottom-shadow" ><span style="white-space: nowrap;">All-in&nbsp;Costs&nbsp;/&nbsp;C3</span></th>';
  customHeader += '<th rowspan="2" class="gray-bg rotated-always bottom-shadow"><span>Currency</span></th>';
  
  customHeader += '<th colspan="3" class="secondary-bg">$/t mined</th>';
  customHeader += '<th colspan="7" class="primary-bg">$/t milled</th>';
  
  customHeader += '</tr>';  
  

  customHeader += '<tr>';
  customHeader += '<th class="secondary-bg rotated-always bottom-shadow"><span style="white-space: nowrap;">Open Pit</span></th><th class="secondary-bg rotated-always bottom-shadow"><span>Underground</span></th><th class="secondary-bg rotated-always bottom-shadow"><span>Combined</span></th>';
  customHeader += '<th class="primary-bg rotated-always bottom-shadow"><span style="white-space: nowrap;">Open Pit</span></th><th class="primary-bg rotated-always bottom-shadow"><span>Underground</span></th><th class="primary-bg rotated-always bottom-shadow"><span>Combined</span></th>';
  customHeader += '<th class="primary-bg rotated-always bottom-shadow"><span>Direct</span></th>';
  customHeader += '<th class="primary-bg rotated-always bottom-shadow"><span>Processing</span></th>';
  customHeader += '<th class="primary-bg rotated-always bottom-shadow"><span>G&A</span></th>';
  customHeader += '<th class="primary-bg rotated-always bottom-shadow"><span>Total</span></th></tr>';
  
  
  //alert($('[id$=GridViewSample] thead').eq(0).find("tr:first").attr("height"));

  $('[id$=GridViewSample] thead').eq(0).html(customHeader); // -- replace Dummy <thead> innerHTML with customHeader --
  //$('[id$=GridViewSample] thead').addClass('large-height'); // -- default Personnel --
  
  $('[id$=GridViewSample] thead').addClass('costs');
  $("#UpdatePanel").addClass('scroll-costs');
  

  


  document.dispatchEvent(tooltipTableEvent);
  
  $('#lblSearchResults').text($('#MainBody_Costs_Production_lblSR').text());
};


function SwapHeader_Fleet(header) {
  
  Clear_UpdatePanel_CSS();
  Clear_Buttons(0,1,1);
  SetMobileHeader(header);
  
  var module = 22; // -- Mills --
  if(header.startsWith("H")) module = 14; // -- Fleet --
  
  document.cookie = "vw=" + module;
  
    var customHeader = '<tr><th class=\'asset-content\' rowspan=\'2\'><div class=\'asset-content-wrapper\'><div class=\'table-icons-block\'>';
  
  customHeader += '<button type=\'button\' id=\'export_buttons_2\' class=\'icon\' onclick="donwloadClick(1,'+module+')">';
  customHeader += '<img src="../../icons/download.svg" ><img class="icon-active" src="../../icons/download-active.svg" ></button>';

  //customHeader += '<button type="button" id="sort_table_list" class="icon" onclick="toggleActiveById(\'sort_table_list\')">';
  //customHeader += '<img src="../../icons/sort.svg" ><img class="icon-active" src="../../icons/sort-active.svg" ></button>';

  customHeader += '<button type="button" id="imgRemoveBlanks" class="icon" onclick="toggleActiveById(\'imgRemoveBlanks\')">';
  customHeader += '<img src="../../icons/eye.svg" alt=""><img class="icon-active" src="../../icons/eye-active.svg" alt=""></button>';
  

  
    if(module == 14)
		customHeader += `<script language="javascript">
			$(document).ready(function () {
				// -- add Download button to headerMobile div --
				$('#headerMobile').prepend('<button type="button" id="export_Fleet" class="icon" onclick="donwloadClick(1,14)"><img src="../../icons/download.svg" ><img class="icon-active" src="../../icons/download-active.svg" ></button>');
			});			
		</script>`;
	else
		customHeader += `<script language="javascript">
			$(document).ready(function () {
				// -- add Download button to headerMobile div --
				$('#headerMobile').prepend('<button type="button" id="export_Fleet" class="icon" onclick="donwloadClick(1,22)"><img src="../../icons/download.svg" ><img class="icon-active" src="../../icons/download-active.svg" ></button>');
			});			
		</script>`;		
  
  customHeader += `<script language="javascript">
		$(document).ready(function () {
			
			if ($('#mapTopButtons').length) 
				$("#mapTopButtons").remove();	

				if (!$('#imgRemoveBlanks_2').length) 
					$('#headerMobile').append('<button type="button" id="imgRemoveBlanks_2" class="icon" onclick="toggleActiveByObject(this)" ><img src="icons/eye.svg" alt=""><img class="icon-active" src="icons/eye-active.svg" alt=""></button>');
			
			
			var urlFleet = window.location.href;
	
			// --- Remove blanks --- 
			$('#imgRemoveBlanks_2').css({position: 'absolute',left: '48px'});
			$('#yearOptionsMobile').css({'visibility':'hidden'}); 
			
			$("#imgRemoveBlanks").click(function () {
				
				if (urlFleet.indexOf("rb=on") >= 0)
					urlFleet = urlFleet.replace("&rb=on", "");
				else
					urlFleet =urlFleet + "&rb=on";
				
				
				let urlPCRB = new URL(urlFleet);`
  if(module == 14)
	  customHeader += "urlPCRB.searchParams.set('vw', '14');";
  else
	  customHeader += "urlPCRB.searchParams.set('vw', '22');";
  
	customHeader += `location.href = urlPCRB;			
				//location.href = urlFleet;
	});				
			
			$("#imgRemoveBlanks_2").off('click').click(function () {
				if (urlFleet.indexOf("rb=on") >= 0)
					urlFleet = urlFleet.replace("&rb=on", "");
				else
					urlFleet =urlFleet + "&rb=on";
				
				let urlPCRB = new URL(urlFleet);`
  if(module == 14)
	  customHeader += "urlPCRB.searchParams.set('vw', '14');";
  else
	  customHeader += "urlPCRB.searchParams.set('vw', '22');";
	customHeader += `location.href = urlPCRB;				
				
				//location.href = urlFleet;
			});	

			if (urlFleet.indexOf("rb=on") >= 0){
				$('#imgRemoveBlanks').addClass('active');	
				$('#imgRemoveBlanks_2').addClass('active');					
			}
			
		});			
  </script>`;  

  customHeader += '</div>';
  
  
  //customHeader += "<s cript>document.dispatchEvent(selectorEvent);</s cript>";

  customHeader += '<div class="asset">Asset</div>';
  customHeader += '</div>';

  customHeader += '</th>';
  customHeader += '<th colspan="4" class="asset">'+header+'</th><th colspan="3">Key Personnel</th>';
  customHeader += '<th class="asset" rowspan="2"><span>Office Phone</span></th>';
  customHeader += '</tr>';

  customHeader += '<tr>';
  
  customHeader += '<th class="secondary-bg">Type</th>';
  customHeader += '<th class="secondary-bg">Model</th>';
  customHeader += '<th class="secondary-bg">Size</th>';
  customHeader += '<th class="secondary-bg">Qty</th>';
  
  
  customHeader += '<th class="primary-bg">Job Title</th>';
  customHeader += '<th class="primary-bg">Name</th>';
  customHeader += '<th class="primary-bg"><span class="linkedin-icon"><img src="../../icons/linkedin.svg"></span></th>';
  customHeader += '</tr>';

  $('[id$=GridViewSample] thead').eq(0).html(customHeader); // -- replace Dummy <thead> innerHTML with customHeader --
  $('[id$=GridViewSample] thead').addClass('large-height');
  
    $('[id$=GridViewSample] thead').addClass('fleet');
	$("#UpdatePanel").addClass('scroll-fleet');

  // document.dispatchEvent(selectorEvent);
  //document.dispatchEvent(tooltipEvent);
  document.dispatchEvent(tooltipTableEvent);
  
  var sModule = "Fleet";
  if(module == 22)
	  sModule = "Mills";

  $('#lblSearchResults').text($('#MainBody_'+sModule+'_lblSR').text());
};

function SwapHeader_Pipelines(isPipeline) {
	
  Clear_UpdatePanel_CSS();
  Clear_Buttons(1,1,1);  
    
  var module = 26; // -- Conveyors  --
  if(isPipeline == 1) module = 25; // -- Pipelines --

  document.cookie = "vw=" + module;  
	
  var customHeader = '<tr><th class=\'asset-content\' rowspan=\'\'><div class=\'asset-content-wrapper\'><div class=\'table-icons-block\'>';
  
  customHeader += '<button type=\'button\' id=\'export_buttons_2\' class=\'icon\' onclick="donwloadClick(1,'+module+')">';
  customHeader += '<img src="../../icons/download.svg" ><img class="icon-active" src="../../icons/download-active.svg" ></button>';

  //customHeader += '<button type="button" id="sort_table_list" class="icon" onclick="toggleActiveById(\'sort_table_list\')">';
  //customHeader += '<img src="../../icons/sort.svg" ><img class="icon-active" src="../../icons/sort-active.svg" ></button>';
  
  // -- RemoveBlanks is temporary hidden --
  customHeader += '<button type="button" id="imgRemoveBlanks" class="icon" onclick="toggleActiveById(\'imgRemoveBlanks\')" style="visibility:hidden;">';
  customHeader += '<img src="../../icons/eye.svg" alt=""><img class="icon-active" src="../../icons/eye-active.svg" alt=""></button>';
  
    if(module == 25)
		customHeader += `<script language="javascript">
			$(document).ready(function () {
				// -- add Download button to headerMobile div --
				$('#headerMobile').prepend('<button type="button" id="export_Pipelines" class="icon" onclick="donwloadClick(1,25)"><img src="../../icons/download.svg" ><img class="icon-active" src="../../icons/download-active.svg" ></button>');
			});			
		</script>`;
	else
		customHeader += `<script language="javascript">
			$(document).ready(function () {
				// -- add Download button to headerMobile div --
				$('#headerMobile').prepend('<button type="button" id="export_Pipelines" class="icon" onclick="donwloadClick(1,26)"><img src="../../icons/download.svg" ><img class="icon-active" src="../../icons/download-active.svg" ></button>');
			});			
		</script>`;	
  
  customHeader += `<script language="javascript">
		$(document).ready(function () {
			
			if ($('#mapTopButtons').length) 
				$("#mapTopButtons").remove();

			if (!$('#imgRemoveBlanks_2').length)
				$('#imgRemoveBlanks_2').css({'visibility':'hidden'});				
			
			var urlPipelines = window.location.href;
	
			// --- Remove blanks --- 
			//$('#imgRemoveBlanks_2').css({position: 'relative',left: '-72px'});
			 
			$('#yearOptionsMobile').css({'visibility':'hidden'}); 
			
			$("#imgRemoveBlanks").click(function () {
				
				if (urlPipelines.indexOf("rb=on") >= 0)
					urlPipelines = urlPipelines.replace("&rb=on", "");
				else
					urlPipelines =urlPipelines + "&rb=on";

				let urlPCRB = new URL(urlPipelines);`
  if(module == 25)
	  customHeader += "urlPCRB.searchParams.set('vw', '25');";
  else
	  customHeader += "urlPCRB.searchParams.set('vw', '26');";
  
  customHeader += `location.href = urlPCRB;	

			});				
			
			$("#imgRemoveBlanks_2").off('click').click(function () {
				if (urlPipelines.indexOf("rb=on") >= 0)
					urlPipelines = urlPipelines.replace("&rb=on", "");
				else
					urlPipelines =urlPipelines + "&rb=on";
				
				
				let urlPCRB = new URL(urlPipelines);`
  if(module == 25)
	  customHeader += "urlPCRB.searchParams.set('vw', '25');";
  else
	  customHeader += "urlPCRB.searchParams.set('vw', '26');";
  
  customHeader += `location.href = urlPCRB;				

			});	

			if (urlPipelines.indexOf("rb=on") >= 0){
				$('#imgRemoveBlanks').addClass('active');	
				$('#imgRemoveBlanks_2').addClass('active');					
			}
			
		});			
  </script>`;   
  
  customHeader += '</div>';
  customHeader += '<div class="asset">Asset</div>';
  customHeader += '</div>';
  customHeader += '</th>';

  customHeader += '<th rowspan="" class="primary-bg rotated-always bottom-shadow"><span style="white-space:nowrap;">PEA, PFS, FS</span></th>';
  customHeader += '<th rowspan="" class="primary-bg rotated-always bottom-shadow"><span>Permitting</span></th>';
  customHeader += '<th rowspan="" class="primary-bg rotated-always bottom-shadow"><span>Construction</span></th>';
  customHeader += '<th rowspan="" class="secondary-bg rotated-always bottom-shadow"><span>Production</span></th>';
  
  if(isPipeline == 1)
  {
  customHeader += '<th class="asset bottom-shadow">Pipeline Type</th>';
  customHeader += '<th class="asset bottom-shadow">Material</th>';
  customHeader += '<th class="asset bottom-shadow">Diameter</th>';
  customHeader += '<th class="asset bottom-shadow">Length</th>';
  }
  else
  {
  customHeader += '<th class="asset bottom-shadow">Capacity,<br />tph</th>';
  customHeader += '<th class="asset bottom-shadow">Belt<br />speed</th>';
  customHeader += '<th class="asset bottom-shadow">Belt<br />width</th>';
  customHeader += '<th class="asset bottom-shadow">Length</th>';
  customHeader += '<th class="asset bottom-shadow">Motor<br />size</th>';  
  }
  customHeader += '<th class="asset rotated-always bottom-shadow"><span>Quantity</span></th>';
  customHeader += '<th class="asset bottom-shadow">Notes</th>';
  customHeader += '<th class="asset rotated-always bottom-shadow"><span>Source</span></th>';  
  customHeader += '</tr>';  
  
  $('[id$=GridViewSample] thead').eq(0).html(customHeader); // -- replace Dummy <thead> innerHTML with customHeader --
  //$('[id$=GridViewSample] thead').addClass('large-height'); // -- default Personnel --
  
  $('[id$=GridViewSample] thead').addClass('pipelines');
  $("#UpdatePanel").addClass('scroll-pipelines');
  
  document.dispatchEvent(tooltipTableEvent);
  
  var sModule = "Conveyors";
  if(module == 25)
	  sModule = "Pipelines";

  $('#lblSearchResults').text($('#MainBody_'+sModule+'_lblSR').text());  
};

function SwapHeader_Projects() {
	//alert('Projects'); 
	
  Clear_UpdatePanel_CSS();
  Clear_Buttons(1,1,1); 
  SetMobileHeader('Costs & Returns');  
  	
  var customHeader = '<tr><th class=\'asset-content\' rowspan=\'3\'><div class=\'asset-content-wrapper\'><div class=\'table-icons-block\'>';
  
  customHeader += '<button type=\'button\' id=\'export_buttons_2\' class=\'icon\' onclick="donwloadClick(1,2)">';
  customHeader += '<img src="../../icons/download.svg" ><img class="icon-active" src="../../icons/download-active.svg" ></button>';
  
    customHeader += `<script language="javascript">
		$(document).ready(function () {
			// -- add Download button to headerMobile div --
			$('#headerMobile').prepend('<button type="button" id="export_Projects" class="icon" onclick="donwloadClick(1,2)"><img src="../../icons/download.svg" ><img class="icon-active" src="../../icons/download-active.svg" ></button>');
		});			
	</script>`; 
  
  customHeader += '</div>';
  customHeader += '<div class="asset">Asset</div>';
  customHeader += '</div></th>';
  
  customHeader += '<th rowspan="3" class="primary-bg rotated-always bottom-shadow"><span style="white-space:nowrap;">PEA, PFS, Feasibility</span></th>';
  customHeader += '<th rowspan="3" class="primary-bg rotated-always bottom-shadow"><span style="white-space:nowrap;">Perm., Const., Restart.</span></th>';
  
  customHeader += '<th rowspan="3" class="secondary-bg rotated-always bottom-shadow"><span style="white-space:nowrap;min-width:14px;">Report</span></th>';
  customHeader += '<th rowspan="3" class="secondary-bg rotated-always bottom-shadow"><span style="white-space:nowrap;">Report Date, year</span></th>';
  customHeader += '<th rowspan="3" class="secondary-bg rotated-always bottom-shadow"><span style="white-space:nowrap;min-width:14px;">Currency</span></th>';
  
  customHeader += '<th colspan="2" class="primary-bg">CapEx<br />$M</th>';
  customHeader += '<th colspan="3" class="secondary-bg">OpEx<br />$M</th>'; 
  customHeader += '<th colspan="3" class="primary-bg">Assumed price</th>';
  customHeader += '<th colspan="2" class="secondary-bg">Revenue<br />$M</th>';
    
  customHeader += '<th rowspan="3" class="primary-bg rotated-always bottom-shadow"><span style="white-space:nowrap;min-width:14px;">Net Income, $M</span></th>';
  
  customHeader += '<th colspan="2" class="secondary-bg">Cash Flow<br />$M</th>';
  customHeader += '<th colspan="4" class="primary-bg">NPV<br />$M</th>'; 
  customHeader += '<th colspan="2" class="secondary-bg">IRR<br />%</th>';
  customHeader += '<th colspan="2" class="primary-bg">Payback<br />years</th>';
  
  customHeader += '<th rowspan="3" class="secondary-bg rotated-always bottom-shadow"><span style="white-space:nowrap;min-width:14px;">Mine Life, years</span></th>';
  customHeader += '</tr>';
  
  customHeader += '<tr>';
  customHeader += '<th class="primary-bg rotated-always bottom-shadow" rowspan="2" ><span>Initial</span></th>';
	customHeader += '<th class="primary-bg rotated-always bottom-shadow" rowspan="2" ><span>Total</span></th>';
	
	customHeader += '<th class="secondary-bg rotated-always bottom-shadow" rowspan="2" ><span>Mining</span></th>';
	customHeader += '<th class="secondary-bg rotated-always bottom-shadow" rowspan="2" ><span>Processing</span></th>';
	customHeader += '<th class="secondary-bg rotated-always bottom-shadow" rowspan="2" ><span>Total</span></th>';
				
	customHeader += '<th class="primary-bg">Gold</th>';
	customHeader += '<th class="primary-bg">Silver</th>';
	customHeader += '<th class="primary-bg">Copper</th>';
				
	customHeader += '<th class="secondary-bg" rowspan="2" >Gross</th>';
	customHeader += '<th class="secondary-bg" rowspan="2" >Net</th>';
	customHeader += '<th class="secondary-bg rotated-always bottom-shadow" rowspan="2" ><span style="white-space:nowrap;">Pre-tax</span></th>';
	customHeader += '<th class="secondary-bg rotated-always bottom-shadow" rowspan="2" ><span style="white-space:nowrap;">After-tax</span></th>';
				
	customHeader += '<th class="primary-bg rotated-always bottom-shadow" rowspan="2" ><span style="white-space:nowrap;min-width:14px;">Pre-tax @ 5%</span></th>';
	customHeader += '<th class="primary-bg rotated-always bottom-shadow" rowspan="2" ><span style="white-space:nowrap;min-width:14px;">Pre-tax @ 10%</span></th>';
	customHeader += '<th class="primary-bg rotated-always bottom-shadow" rowspan="2" ><span style="white-space:nowrap;min-width:14px;">After-tax @ 5%</span></th>';
	customHeader += '<th class="primary-bg rotated-always bottom-shadow" rowspan="2" ><span style="white-space:nowrap;min-width:14px;">After-tax @ 10%</span></th>';
				
	customHeader += '<th class="secondary-bg rotated-always bottom-shadow" rowspan="2" ><span style="white-space:nowrap;min-width:14px;">Pre-tax</span></th>';
	customHeader += '<th class="secondary-bg rotated-always bottom-shadow" rowspan="2" ><span style="white-space:nowrap;min-width:14px;">After-tax</span></th>';
	customHeader += '<th class="primary-bg rotated-always bottom-shadow" rowspan="2" ><span style="white-space:nowrap;">Pre-tax</span></th>';
	customHeader += '<th class="primary-bg rotated-always bottom-shadow" rowspan="2" ><span style="white-space:nowrap;">After-tax</span></th>';				
				
	customHeader += '</tr>';
	

	customHeader += '<tr>';
	customHeader += '<th class="primary-bg bottom-shadow" width="49px">$/oz</th>';
	customHeader += '<th class="primary-bg bottom-shadow" width="48px">$/oz</th>';
	customHeader += '<th class="primary-bg bottom-shadow" width="43px">$/lbs</th>';
	customHeader += '</tr>';	
  
  $('[id$=GridViewSample] thead').eq(0).html(customHeader); // -- replace Dummy <thead> innerHTML with customHeader --
  //$('[id$=GridViewSample] thead').addClass('large-height'); // -- default Personnel --
  
  if (window.innerWidth < 1400) {
	$('[id$=GridViewSample] thead').addClass('projects-small');
	$("#UpdatePanel").addClass('scroll-projects-small');
  }else {
	$('[id$=GridViewSample] thead').addClass('projects');
	$("#UpdatePanel").addClass('scroll-projects');
  }
  
  document.dispatchEvent(tooltipTableEvent);
  
  //alert(window.innerWidth);
  
  $('#lblSearchResults').text($('#MainBody_Projects_lblSR').text());
};


function SwapHeader_Timeline() {
	
  Clear_UpdatePanel_CSS();
  Clear_Buttons(1,1,1);
  
	
  var customHeader = '<tr><th class=\'asset-content\' rowspan=\'3\'><div class=\'asset-content-wrapper\'><div class=\'table-icons-block\'>';
  
  customHeader += '<button type=\'button\' id=\'export_buttons_2\' class=\'icon\' onclick="donwloadClick(1,17)">';
  customHeader += '<img src="./icons/download.svg" ><img class="icon-active" src="./icons/download-active.svg" ></button>';

  //customHeader += '<button type="button" id="sort_table_list" class="icon" onclick="toggleActiveById(\'sort_table_list\')">';
  //customHeader += '<img src="../../icons/sort.svg" ><img class="icon-active" src="../../icons/sort-active.svg" ></button>';

  //customHeader += '<button type="button" id="imgRemoveBlanks" class="icon" onclick="toggleActiveById(\'imgRemoveBlanks\')">';
  //customHeader += '<img src="../../icons/eye.svg" alt=""><img class="icon-active" src="../../icons/eye-active.svg" alt=""></button>';
  
      customHeader += `<script language="javascript">
		$(document).ready(function () {
			// -- add Download button to headerMobile div --
			$('#headerMobile').prepend('<button type="button" id="export_Timeline" class="icon" onclick="donwloadClick(1,17)"><img src="./icons/download.svg" ><img class="icon-active" src="./icons/download-active.svg" ></button>');
		});			
	</script>`; 

  customHeader += '</div>';

  //customHeader += "<s cript>document.dispatchEvent(selectorEvent);</s cript>";

  customHeader += '<div class="asset">Asset</div>';
  customHeader += '</div>';

  customHeader += '</th>';
  customHeader += '<th colspan="2" class="">Type</th><th colspan="5" class="">Current Stage</th><th colspan="21" class="">Project Timeline</th>';
  customHeader += '</tr>';
  
  customHeader += '<tr>';
  customHeader += '<th rowspan="2" class="secondary-bg rotated-always bottom-shadow"><span style="white-space:nowrap;min-width:14px;">Open Pit</span></th>';
  customHeader += '<th rowspan="2" class="secondary-bg rotated-always bottom-shadow"><span style="min-width:14px;">Underground</span></th>';
  
  customHeader += '<th rowspan="2" class="primary-bg rotated-always bottom-shadow"><span style="min-width:14px;">PEA</span></th>';
  customHeader += '<th rowspan="2" class="primary-bg rotated-always bottom-shadow"><span style="min-width:14px;">PFS</span></th>';
  customHeader += '<th rowspan="2" class="primary-bg rotated-always bottom-shadow"><span style="min-width:14px;">Feasibility</span></th>';
  customHeader += '<th rowspan="2" class="primary-bg rotated-always bottom-shadow"><span style="min-width:14px;">Permitting</span></th>';
  customHeader += '<th rowspan="2" class="primary-bg rotated-always bottom-shadow"><span style="min-width:14px;">Construction</span></th>';
  
  customHeader += '<th colspan="4" class="secondary-bg">2023</th>';
  customHeader += '<th colspan="4" class="primary-bg">2024</th>';
  customHeader += '<th colspan="4" class="secondary-bg">2025</th>';
  customHeader += '<th colspan="4" class="primary-bg">2026</th>';
  customHeader += '<th colspan="4" class="secondary-bg">2027</th>';
  customHeader += '<th class="primary-bg rotated-always bottom-shadow" rowspan="2"><span style="min-width:14px;">Source</span></th>';    
  customHeader += '</tr>';  
  

  customHeader += '<tr>';
  customHeader += '<th class="secondary-bg bottom-shadow">Q1</th><th class="secondary-bg bottom-shadow">Q2</th><th class="secondary-bg bottom-shadow">Q3</th><th class="secondary-bg bottom-shadow">Q4</th>';
  customHeader += '<th class="primary-bg bottom-shadow">Q1</th><th class="primary-bg bottom-shadow">Q2</th><th class="primary-bg bottom-shadow">Q3</th><th class="primary-bg bottom-shadow">Q4</th>';
  customHeader += '<th class="secondary-bg bottom-shadow">Q1</th><th class="secondary-bg bottom-shadow">Q2</th><th class="secondary-bg bottom-shadow">Q3</th><th class="secondary-bg bottom-shadow">Q4</th>';
  customHeader += '<th class="primary-bg bottom-shadow">Q1</th><th class="primary-bg bottom-shadow">Q2</th><th class="primary-bg bottom-shadow">Q3</th><th class="primary-bg bottom-shadow">Q4</th>';  
  customHeader += '<th class="secondary-bg bottom-shadow">Q1</th><th class="secondary-bg bottom-shadow">Q2</th><th class="secondary-bg bottom-shadow">Q3</th><th class="secondary-bg bottom-shadow">Q4</th></tr>';
    
  $('[id$=GridViewSample] thead').eq(0).html(customHeader); // -- replace Dummy <thead> innerHTML with customHeader --
  //$('[id$=GridViewSample] thead').addClass('large-height'); // -- default Personnel --
  
  $('[id$=GridViewSample] thead').addClass('timeline search-results-table-header');
  $("#UpdatePanel").addClass('scroll-timeline');

  document.dispatchEvent(tooltipTableEvent);
  
  $('#lblSearchResults').text($('#MainBody_Timeline_lblSR').text());
};

function SwapHeader_Alerts() {
    Clear_UpdatePanel_CSS();

    setTimeout(()=>{
        SetMobileHeader("Alerts")
    }, 300)

    $("#UpdatePanel").addClass('scroll-alerts');
}


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
      content: 'Clean Dataset',
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
	
	//alert(vw);

  $('.custom-select .select-year-field').selectmenu();

  $('.custom-select .select-commodity-field').selectmenu();
}

/* 
// 0221 version
$(window).on('resize', function () {
  $('.custom-select .select-year-field').selectmenu('close');
  $('.custom-select .select-commodity-field').selectmenu('close');

  $('#sidebarCategorySelect').selectmenu('close');
  $('#txtCompanySearch').autocomplete('close');
});
*/

$(window).on('resize', debounce(function () {
    $('.custom-select .select-year-field').selectmenu('close');
    $('.custom-select .select-commodity-field').selectmenu('close');
  
    $('#sidebarCategorySelect').selectmenu('close');
    $('#txtCompanySearch').autocomplete('close');
  
    $('#export_buttons_modal').removeClass('open_modal');
	
	/*
	const exportOverview = $('#export_Overview');
    if(!window.matchMedia("(max-width: 1280px)").matches) {
      exportOverview.css({'visibility':'hidden'});	
    }
	else{
		exportOverview.css({'visibility':'visible'});
	}
	*/
	
  }, 100))


function toggleDownload(mode) {
  const exportDownloads = $('#export_buttons_modal');
  const exportDownloadsMobileOverview = $('#export_buttons_modal_mobile');
  
  const exportDownloadsMobile = $('#export_buttons_mining_modal');
  //const exportDownloadsMobile = $('#export_buttons_modal_mobile');
  //const exportDownloadsButton = $('#export_buttons_2');
  //const exportDownloadsButtonMobile = $('#export_buttons_1');

    //button.addEventListener('click', function(event) {
    //}); 
	//alert('OK');
	
	if(mode == 1)
		exportDownloads.toggleClass('open_modal');
	else if(mode == 2)
	{
		exportDownloadsMobile.toggleClass('open_modal');
		toggleActiveById("export_Mining");
	}
	//exportDownloads.removeClass('open_modal');	
	
};

/*
$(document).ready(function() {
    // Select all images
    $('img').each(function() {
        // Add event listener for click event
        this.addEventListener('click', function() {
            // Get the ID of the clicked element
            var elementId = this.id;
            alert(elementId);
        });
    });
	
	
    $('#export_buttons_modal div').each(function() {
        // Add event listener for click event
        this.addEventListener('click', function() {
            // Get the ID of the clicked element
            var elementId = this.id;
            alert(elementId);
        });
    });	
	
});
*/


document.addEventListener('click', function(event) {

  const exportDownloads = $('#export_buttons_modal');
  const exportDownloadsMobile = $('#export_buttons_modal_mobile');
  const exportDownloadsButton = $('#export_buttons_2');
  
  const exportDownloadsButtonMobile = $('#export_Overview');
  
    if(window.matchMedia("(max-width: 1150px)").matches) {
	  
		if(exportDownloadsButtonMobile.is(event.target) || exportDownloadsButtonMobile.has(event.target).length !== 0  ) {
		  exportDownloadsMobile.toggleClass('open_modal');
		} else if (!exportDownloadsMobile.is(event.target) && exportDownloadsMobile.has(event.target).length === 0) {
		  exportDownloadsMobile.removeClass('open_modal');
		  exportDownloadsButtonMobile.removeClass('active');
		}
	} else {
		if(exportDownloadsButtonMobile.is(event.target) || exportDownloadsButtonMobile.has(event.target).length !== 0  ) {
		  exportDownloadsMobile.toggleClass('open_modal');
		}		  
	
	
	/*
  } else {
    if(exportDownloadsButton.is(event.target) || exportDownloadsButton.has(event.target).length !== 0  ) {
      exportDownloads.toggleClass('open_modal');
    } else if (!exportDownloads.is(event.target) && exportDownloads.has(event.target).length === 0) {
      exportDownloads.removeClass('open_modal');
      exportDownloadsButton.removeClass('active');
    }
 */	
	
  }
 
  
});


