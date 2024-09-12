const autocompleteEvent = new Event('autocompleteEvent');
let preloadedData = [];

(() => {
  // Function to initialize autocomplete
  const initAutocomplete = (data) => {
    let source = [];
    $('#txtCompanySearch').autocomplete({
      classes: {
        'ui-autocomplete': 'custom-autocomplete custom-scroll search-criteria-dropdown',
      },
      source: function (request, response) {
        if (request.term === '') {
          // Use preloaded data if term is empty
          response($.map(preloadedData, function (item) {
            source.push({
              label: item.split(':')[0],
              value: item.split(':')[1],
            });
            return {
              label: item.split(':')[0],
            }
          }));
        } else {
          $.ajax({
            url: 'https://miningdatasolutions.com/property/List.aspx/' + getWebMethod(),
            data: `{ 'prefix': '${request.term}','acRoleID':'<%=roleID.ToString()%>'}`,
            dataType: 'json',
            type: 'POST',
            contentType: 'application/json; charset=utf-8',
            success: function (data) {
              response($.map(data.d, function (item) {
                source.push({
                  label: item.split(':')[0],
                  value: item.split(':')[1],
                });
                return {
                  label: item.split(':')[0],
                }
              }));
            },
            failure: function (response) {
              alert(response.responseText);
            }
          });
        }
      },
      select: function (e, i) {
        const { label } = i.item;
        const curr = source.find(elem => elem.label === label);
        $('#txtCompanySearch').attr('data-id', curr.value);
        $('#txtCompanySearch').blur();
      },
      minLength: 0,
      appendTo: $('.sidebar-autocomplete'),
      open: function () {
        const width = $('#txtCompanySearch').parent().width();
        $('.custom-autocomplete.search-criteria-dropdown').addClass('search-criteria-dropdown--active');
        $('.custom-autocomplete.search-criteria-dropdown').css('width', width);
      },
      close: function () {
        $('.custom-autocomplete.search-criteria-dropdown').removeClass('search-criteria-dropdown--active');
      },
    });
  };

  // Preload data on document ready
  $(document).ready(function () {
    $.ajax({
      url: 'https://miningdatasolutions.com/property/List.aspx/' + getWebMethod(),
      data: `{ 'prefix': '' ,'acRoleID':'<%=roleID.ToString()%>'}`,
      dataType: 'json',
      type: 'POST',
      contentType: 'application/json; charset=utf-8',
      success: function (data) {
        preloadedData = data.d;
        // Initialize autocomplete with preloaded data
        initAutocomplete(preloadedData);
      },
      failure: function (response) {
        alert(response.responseText);
      }
    });
  });

  // Event listener for custom autocomplete event
  document.addEventListener('autocompleteEvent', () => {
    initAutocomplete(preloadedData);
  });
})();
