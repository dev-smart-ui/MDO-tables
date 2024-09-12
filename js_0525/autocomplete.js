const autocompleteEvent = new Event('autocompleteEvent');

(() => {
  document.addEventListener('autocompleteEvent', () => {
    let source = [];
    $('#txtCompanySearch').autocomplete({
      classes: {
        'ui-autocomplete': 'custom-autocomplete custom-scroll search-criteria-dropdown',
      },
      source: function (request, response) {
        // const data = companiesMocks();
        $.ajax({
          // Issue with autocomplete on localhost: 405 Method not allowed
          // Fix only for localhost and dev server
		  //url: 'https://minesandprojects.com/assets.aspx/' + getWebMethod(),
		  url: 'https://miningdataonline.com/assets.aspx/' + getWebMethod(),
          data: `{ 'prefix': '${request.term}','acRoleID':'<%=roleID.ToString()%>'}`,
          dataType: 'json', type: 'POST',
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
          //error: function (response) {alert(response.responseText);},
          failure: function (response) {
            alert(response.responseText);
          }
        });
      },
      select: function (e, i) {
        const {label} = i.item;
        const curr = source.find(elem => elem.label === label);
        $('#txtCompanySearch').attr('data-id', curr.value);
      },
      minLength: 0,
      appendTo: $('.sidebar-autocomplete'),
      open: function () {
        $('.custom-autocomplete.search-criteria-dropdown').addClass('search-criteria-dropdown--active');
      },
      close: function () {
        $('.custom-autocomplete.search-criteria-dropdown').removeClass('search-criteria-dropdown--active');
      },
    });

    $('#txtCompanySearch').focus(function () {
      $(this).autocomplete('search', '');   // Search for an empty string -> return all results
    });
  });
})();
