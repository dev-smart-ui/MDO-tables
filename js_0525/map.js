var map;
var mapLarge;
var map_page;

function initMap() {
  var myCenter = new google.maps.LatLng(7.025595, -2.360372);

  const map_el = document.getElementById("map");

  // small map assets page
  if(map_el) {
    map = new google.maps.Map(map_el, {
      mapTypeControl: false,
      streetViewControl: false,
      zoomControl: false,
      fullscreenControl: false,
      center: myCenter,
      mapTypeId: google.maps.MapTypeId.roadmap,
      zoom: 4,
      maxZoom: 4,
      minZoom: 2,
      mapId: 'Small_map'
    });

    const customMarkerItem = document.createElement("div");
    customMarkerItem.className = "custom-marker";

    const marker = new google.maps.marker.AdvancedMarkerView({
      position: myCenter,
      map,
      content: customMarkerItem,
    });

    //disable scroll on mobile
    $(window).on('resize load', debounce(function() {
        if(!window.matchMedia("(max-width: 1280px)").matches) {
          map.setOptions({ scrollwheel: true});
        } else {
          map.setOptions({ scrollwheel: false});
        }
    }, 300));
  }

  // large map assets page
  const map_large_el = document.getElementById("map_large");

  if(map_large_el) {
      // ---- Large Map ---
      mapLarge = new google.maps.Map(map_large_el, {
        center: myCenter,
        mapTypeId: google.maps.MapTypeId.HYBRID,
        zoom: 13 + 1,
        disableDefaultUI: true,
        scrollwheel: false,
        draggable: false
      });

      // create custom controls
      const mapViewControlsDiv = document.createElement('div');
      const mapViewControls = new MapViewControls(mapViewControlsDiv, mapLarge);
      mapLarge.controls[google.maps.ControlPosition.LEFT_TOP].push(mapViewControlsDiv);

      const zoomDiv = document.createElement('div');
      const renderZoomControls = new ZoomControl(zoomDiv, mapLarge);
      zoomDiv.index = 1;
      mapLarge.controls[google.maps.ControlPosition.LEFT_BOTTOM].push(zoomDiv);

      const mapTableWidth = document.getElementById('references').clientWidth - 52;
      map_large_el.style.width = mapTableWidth ? mapTableWidth + 'px' : 'auto';
      // Resize the map on desktop to fit the screen height

      $(window).on('resize load', function() {
        setTimeout(() => {
          if(window.matchMedia("(min-width: 1150px)").matches) {
            const assetProfileScroll = document.getElementsByClassName("asset-croll-container")[0]?.clientHeight;
            const mapTableWidth = document.getElementById('references').clientWidth - 52;
            if(assetProfileScroll) {
              map_large_el.style.height = assetProfileScroll - 92 + 'px';
              map_large_el.style.width = mapTableWidth ? mapTableWidth + 'px' : 'auto';
            }
        } else {
          const mainContent = document.getElementsByClassName("main-content")[0]?.clientHeight;
          if(mainContent) { 
            map_large_el.style.height = mainContent - 114 + 'px';
          }
          map_large_el.style.minHeight = '300px';
          map_large_el.style.width = 'auto';
        }
      }, 100)
   });
  }

  // map component page
 const map_page_el = document.getElementById("map-page")
 const defaultZoom = 7;
 if(map_page_el) {
    map_page = new google.maps.Map(map_page_el, {
    mapTypeId: google.maps.MapTypeId.roadmap,
    zoom: defaultZoom,
    disableDefaultUI: true,
    center: { lat: -33, lng: 151 },
    mapId: 'MAP_ID',
  });

  let previousZoom = defaultZoom;

  google.maps.event.addListener(map_page,'zoom_changed',function(){
    if(map_page.getZoom() !== previousZoom) {
      previousZoom = map_page.getZoom();
    }
    if(map_page.getZoom() <= 4) {;
      $('.custom-marker').each(function(){
        $(this).parent().addClass('small-scale');
      })
    } else {
      $('.custom-marker').each(function(){
        $(this).parent().removeClass('small-scale');
      })
    }
  })


  //just use your location obj
  const locations = [
    { latlng: [-33, 151], type: "mine", mine_type: 'open_pit', project_type: 'multi_operation', progress: 1, description: "Casino Project", commodities: ['com_au', 'com_ag'] },
    { latlng: [-33, 155], type: "mine", mine_type: 'underground_pit', project_type: 'multi_operation', progress: 2, description: "Mine Project", commodities: ['com_au'] },
    { latlng: [-32, 151], type: "project", mine_type: 'open_underground', project_type: 'multi_operation', progress: 3, description: "Canada Mine", commodities: ['com_au', 'com_ag', 'com_cu', 'com_al', 'com_ni'] },
    { latlng: [-30, 153], type: "project", mine_type: 'underground_pit', project_type: 'multi_operation', progress: 4, description: "Alaska Mine Project", commodities: ['com_au', 'com_ag', 'com_cu'] },
    { latlng: [-30, 155], type: "project", mine_type: 'underground_pit', project_type: 'part_of_operation', progress: 5, description: "Another Mine", commodities: ['com_au', 'com_au', 'com_ag', 'com_cu'] },
    { latlng: [-30, 157], type: "project", mine_type: 'underground_pit', project_type: 'part_of_operation', progress: 5, description: "Another Mine", commodities: ['com_au', 'com_au', 'com_ag', 'com_cu', 'com_al', 'com_ni'] },
    { latlng: [-30, 159], type: "project", mine_type: 'underground_pit', project_type: 'part_of_operation', progress: 5, description: "Another Mine", commodities: ['com_au', 'com_au', 'com_ag', 'com_cu', 'com_al', 'com_ni', 'com_ng'] },
    { latlng: [-30, 161], type: "project", mine_type: 'underground_pit', project_type: 'part_of_operation', progress: 5, description: "Another Mine", commodities: ['com_au', 'com_au', 'com_ag', 'com_cu', 'com_al', 'com_ni', 'com_ng', 'com_ti'] },
    { latlng: [-30, 163], type: "project", mine_type: 'underground_pit', project_type: 'part_of_operation', progress: 5, description: "Another Mine", commodities: ['com_au', 'com_au', 'com_ag', 'com_cu', 'com_al', 'com_ni', 'com_ng', 'com_ti', 'com_pt' ] },
    { latlng: [-30, 165], type: "project", mine_type: 'underground_pit', project_type: 'part_of_operation', progress: 5, description: "Another Mine", commodities: ['com_au', 'com_au', 'com_ag', 'com_cu', 'com_al', 'com_ni', 'com_ng', 'com_ti', 'com_pt', 'com_s'] },
    { latlng: [-30, 167], type: "project", mine_type: 'underground_pit', project_type: 'part_of_operation', progress: 5, description: "Another Mine", commodities: ['com_au', 'com_au', 'com_ag', 'com_cu', 'com_al', 'com_ni', 'com_ng', 'com_ti', 'com_pt', 'com_s', 'com_coal' ] },
    { latlng: [-30, 169], type: "project", mine_type: 'underground_pit', project_type: 'part_of_operation', progress: 5, description: "Another Mine", commodities: ['com_au', 'com_au', 'com_ag', 'com_cu', 'com_al', 'com_ni', 'com_ng', 'com_ti', 'com_pt', 'com_s', 'com_coal', 'com_fe' ] },
    { latlng: [-30, 171], type: "project", mine_type: 'underground_pit', project_type: 'part_of_operation', progress: 5, description: "Another Mine", commodities: ['com_au', 'com_au', 'com_ag', 'com_cu', 'com_al', 'com_ni', 'com_ng', 'com_ti', 'com_pt', 'com_s', 'com_coal', 'com_fe', 'com_u'] },
    { latlng: [-30, 172], type: "project", mine_type: 'underground_pit', project_type: 'part_of_operation', progress: 5, description: "Another Mine", commodities: ['com_au', 'com_au', 'com_ag', 'com_cu', 'com_al', 'com_ni', 'com_ng', 'com_ti', 'com_pt', 'com_s', 'com_coal', 'com_fe', 'com_u', 'com_zn', ] },
    { latlng: [-30, 173], type: "project", mine_type: 'underground_pit', project_type: 'part_of_operation', progress: 5, description: "Another Mine", commodities: ['com_au', 'com_au', 'com_ag', 'com_cu', 'com_al', 'com_ni', 'com_ng', 'com_ti', 'com_pt', 'com_s', 'com_coal', 'com_fe', 'com_u', 'com_zn', 'com_oil' ] },
    { latlng: [-30, 175], type: "project", mine_type: 'underground_pit', project_type: 'part_of_operation', progress: 5, description: "Another Mine", commodities: ['com_au', 'com_au', 'com_ag', 'com_cu', 'com_al', 'com_ni', 'com_ng', 'com_ti', 'com_pt', 'com_s', 'com_coal', 'com_fe', 'com_u', 'com_zn', 'com_oil', 'com_co' ] },
    { latlng: [-31, 155], type: "project", mine_type: 'underground_pit', project_type: 'part_of_operation', progress: 5, description: "Another Mine", commodities: ['com_au', 'com_au', 'com_ag', 'com_cu', 'com_al', 'com_ni', 'com_ng', 'com_ti', 'com_pt', 'com_s', 'com_coal', 'com_fe', 'com_u', 'com_zn', 'com_oil', 'com_co' ] },
  ];
  
  locations.forEach((n, index) => {
    n.marker = new CreateCustomMarker(
      n.mine_type,
      n.project_type,
      n.type,
      n.description,
      map_page,
      n.progress,
      n.commodities,
      new google.maps.LatLng(...n.latlng)
    );

    $(n.marker).find(".custom-marker").on("click", function(){
      if ($(this).hasClass("active")) {
        $("#map-sidebar").removeClass("toggled");
        $(this).removeClass("active");
      } else {
        $("#map-sidebar").removeClass("toggled");
        $(".custom-marker").each(function () {
          $(this).removeClass("active");
        });
        $(this).addClass("active");
        $("#map-desc-text").html(
          `<a href="/property/1075/Airly-Mine.aspx" target="_blank">${n.description}`
        );
        const flag_class = n.project_type === 'part_of_operation' ? 'single-operation' : ' multi-operation';
        $("#map-desc-text-flag").addClass(flag_class);
        $("#map-desc-text-flag").removeClass(n.project_type !== 'part_of_operation' ? 'single-operation' : ' multi-operation');
        let images = "";
        n.commodities.forEach((el) => {
          images += `<img src="${"../icons/" + el + ".svg"}" alt="${el}" />`;
        });
        $("#commodities-img").html(images);
        $("#map-sidebar").addClass("toggled");
      }
    });

    if ($("#map-labels-checkbox").attr("checked")) {
      $(n.marker).find(".tip-marker").addClass("visible");
    }

    $(n.marker)
      .find(".custom-marker")
      .on("mouseover", (event) => {
        $(n.marker).find(".tip-marker").addClass("visible");
      });

    $(n.marker)
      .find(".marker-wrapper")
      .on("mouseout", (event) => {
        setTimeout(() => {
          if (!$("#map-labels-checkbox").attr("checked")) {
            $(n.marker).find(".tip-marker").removeClass("visible");
          }
        }, 1500);
      });
  });

  $('#map-labels-checkbox').on('click', function(e) {
    e.preventDefault();
    if($(this).attr('checked')) {
      $(this).removeAttr('checked');
      toggleMarkers(false);
    } else {
      $(this).attr('checked', true);
      toggleMarkers(true);
    }
    $(this).next('label').toggleClass('hide-after');
  });

  $('#map-sidebar-close').on('click', function() {
    $('#map-sidebar').toggleClass('toggled');
  })

// create custom controls
  const zoomDiv = document.createElement('div');
  const renderZoomControls = new ZoomControl(zoomDiv, map_page);
  zoomDiv.index = 1;
  map_page.controls[google.maps.ControlPosition.LEFT_BOTTOM].push(zoomDiv);

  const mapViewControlsDiv = document.createElement('div');
  const mapViewControls = new MapViewControls(mapViewControlsDiv, map_page);
  map_page.controls[google.maps.ControlPosition.LEFT_TOP].push(mapViewControlsDiv);

  const legendDiv = document.createElement('div');
  const legendControls = new LegendControls(legendDiv, map_page);
  map_page.controls[google.maps.ControlPosition.RIGHT_TOP].push(legendDiv);
 }
}

// Custom controls for zoom
function ZoomControl(div, map) {
  var controlDiv = div;
  $(controlDiv).addClass('wrap-zoom-controls');

  var zoomout = document.createElement('div');
  $(zoomout).addClass('zoom-out-btn');
  zoomout.title = 'Click to zoom out';
  controlDiv.appendChild(zoomout);

  var zoomoutText = document.createElement('div');
  zoomoutText.innerHTML = '<strong>&#8212;</strong>';
  zoomout.appendChild(zoomoutText);

  var zoomin = document.createElement('div');
  $(zoomin).addClass('zoom-in-btn');
  zoomin.title = 'Click to zoom in';
  controlDiv.appendChild(zoomin);

  var zoominText = document.createElement('div');
  zoominText.innerHTML = '<strong>+</strong>';
  zoomin.appendChild(zoominText);

  // Setup the click event listener - zoomIn
  google.maps.event.addDomListener(zoomin, 'click', function() {
    map.setZoom(map.getZoom() + 1);
  });

  // Setup the click event listener - zoomOut
  google.maps.event.addDomListener(zoomout, 'click', function() {
    map.setZoom(map.getZoom() - 1);
  });

  var initSize = document.createElement('div');
  $(initSize).addClass('init-size-btn');

  var initSizeText = document.createElement('div');
  initSizeText.innerHTML = '<strong>100%</strong>';
  initSize.appendChild(initSizeText);

  controlDiv.appendChild(initSize);

  google.maps.event.addDomListener(initSize, 'click', function() {
    map.setZoom(7);
  });

  var rotate = document.createElement('div');
  $(rotate).addClass('rotate-map-btn');

  var rotateText = document.createElement('div');
  rotateText.innerHTML = '<strong></strong>';
  rotate.appendChild(rotateText);

  controlDiv.appendChild(rotate);

  google.maps.event.addDomListener(rotate, 'click', function() {
    map.setCenter({ lat: -33, lng: 151 });
  });
}

// Custom controls for map view
function MapViewControls(div, map) {
  var controlDiv = div;
  $(controlDiv).addClass('wrap-view-controls');

  var mapView = document.createElement('div');
  $(mapView).addClass('map-view-btn active');

  var mapViewText = document.createElement('div');
  mapViewText.innerHTML = '<span>Map</span>';
  mapView.appendChild(mapViewText);

  controlDiv.appendChild(mapView);

  google.maps.event.addDomListener(mapView, 'click', function(e) {
    $(".map-satellite-btn").removeClass('active');
    $(".map-view-btn").addClass('active');
    map.setMapTypeId('roadmap');
  });

  var mapSatellite = document.createElement('div');
  $(mapSatellite).addClass('map-satellite-btn');

  var mapSatelliteText = document.createElement('div');
  mapSatelliteText.innerHTML = '<span>Satellite</span>';
  mapSatellite.appendChild(mapSatelliteText);

  controlDiv.appendChild(mapSatellite);

  google.maps.event.addDomListener(mapSatellite, 'click', function(e) {
    $(".map-view-btn").removeClass('active');
    $(".map-satellite-btn").addClass('active');
    map.setMapTypeId('satellite');
  });

}

// Custom legend for map view
function LegendControls(div, map) {
  const wrapDiv = div;

  $(wrapDiv).addClass('map-legend-wrap');

  const mineDiv = document.createElement('div');
  $(mineDiv).addClass('map-mine');
  mineDiv.id = 'map-mine-type';

  const mineScale = document.createElement('div');
  $(mineScale).addClass('mine-scale');
  mineScale.innerHTML = `
    <img src="../icons/mine_scale.svg" alt="Mine Scale">
    <span>Mine Scale</span>
  `;
  mineDiv.appendChild(mineScale);

  google.maps.event.addDomListener(mineScale, 'click', function(e) {
    $(mineType).removeClass('selected');
    $(mineScale).addClass('selected');
    $('.custom-marker').each(function() {
      $(this).removeClass('mine');
      $(this).addClass('project');
    })
  });

  const mineType = document.createElement('div');
  $(mineType).addClass('mine-type selected');
  mineType.innerHTML = `
    <img src="../icons/mine_type.svg" alt="Mine Type">
    <span>Mine Type</span>
  `;
  mineDiv.appendChild(mineType);

  google.maps.event.addDomListener(mineType, 'click', function(e) {
    $(mineType).addClass('selected');
    $(mineScale).removeClass('selected');
    $('.custom-marker').each(function() {
      $(this).removeClass('project');
      $(this).addClass('mine');
    })
  });

  wrapDiv.appendChild(mineDiv);

  const legendDiv = document.createElement('div');
  $(legendDiv).addClass('map-legend accordeon-closed');
  legendDiv.id = 'legend';

  const legendHeader = document.createElement('div');
  $(legendHeader).addClass('legend-header');
  legendHeader.innerHTML = `Map legend <span class="arrow"></span>`;

  legendDiv.innerHTML = `
    <div class="legend-body">
      <div class="legend-el">
        <div class="round-mine"></div>
        Mine
      </div>
      <div class="legend-el">
        <div class="round-project"></div>
        Project
      </div>
      <div class="legend-el">
        <img src="../icons/underground_pit.svg">
        Underground pit
      </div>
      <div class="legend-el">
        <img src="../icons/open_underground.svg">
        Open pit & Underground
      </div>
      <div class="legend-el">
        <img src="../icons/open_pit.svg">
        Open pit
      </div>
      <div class="legend-el">
        <img src="../icons/multi_operation.svg">
        Multi Operation
      </div>
      <div class="legend-el">
        <img src="../icons/part_of_operation.svg">
        Part of an Operation
      </div>
    </div>
  `

  legendDiv.prepend(legendHeader);
  wrapDiv.appendChild(legendDiv);

  google.maps.event.addDomListener(legendHeader, 'click', function(e) {
    $(legendDiv).toggleClass('accordeon-closed');
  });
}

// Sidebar map opener
function handleCloseMapSidebar() {
  $('.custom-marker').removeClass('active');
  $('#map-content').removeClass('map-sidebar-active');
}

// create custom marker
function CreateCustomMarker(mineType, projectType, type, description, map, progress, commodities, pos) {
  const selectionElement = document.createElement("div");
  selectionElement.className = "marker-selection";

  const customMarkerItem = document.createElement("div");
  customMarkerItem.className = `custom-marker is-${type} mine visible`;

  const imgMineElement = document.createElement("img");
  imgMineElement.className = "img-mine";
  imgMineElement.src = `icons/${mineType}.svg`;
  imgMineElement.alt = mineType;
  customMarkerItem.appendChild(imgMineElement);

  const imgProjectElement = document.createElement("img");
  imgProjectElement.className = "img-project";
  imgProjectElement.src = `icons/${projectType}.svg`;
  imgProjectElement.alt = projectType;
  customMarkerItem.appendChild(imgProjectElement);

  const tip = document.createElement("div");
  $(tip).addClass("tooltip-text");
  tip.innerHTML = `<div>${description}</div>`;
  customMarkerItem.appendChild(tip);

  commodities.forEach((el, index) => {  
    const comElement = document.createElement("div");
    comElement.className = `com-element color_${el} com_${commodities.length}`;
    comElement.style.transform = `rotate(${360 / commodities.length * (index + 1)}deg)`;
    const comElementInside = document.createElement("img");
    comElementInside.src = `icons/com_${commodities.length}.svg`;
    comElementInside.alt = `${commodities.length}`;
    comElement.appendChild(comElementInside);
    customMarkerItem.appendChild(comElement);
  })

  for(let i = 1; i <= 5; i++) {
    const prgElement = document.createElement("div");
    prgElement.className = `prg-element color_${progress >= i ? 'progressed' : 'not-progressed'}`;
    prgElement.style.transform = `rotate(${360 / 5 * (i + 1)}deg)`;
    const prgElementInside = document.createElement("img");
    prgElementInside.src = `icons/com_5.svg`;
    prgElementInside.alt = `${i}`;
    prgElement.appendChild(prgElementInside);
    customMarkerItem.appendChild(prgElement);
  }

  const markerTip = document.createElement("div");
  markerTip.className = "tippy-box tip-marker";
  const markerTipContent = document.createElement("div");
  markerTipContent.className = "tippy-content";
  markerTipContent.innerHTML = `<a href="/property/1075/Airly-Mine.aspx" target="_blank">${description}`;

  markerTip.append(markerTipContent);

  const markerWrapper = document.createElement("div");
  markerWrapper.className = "marker-wrapper";

  markerWrapper.appendChild(markerTip);

  markerWrapper.appendChild(customMarkerItem);
  markerWrapper.appendChild(selectionElement);

  return new google.maps.marker.AdvancedMarkerView({
    position: pos,
    map,
    content: markerWrapper,
  });
}