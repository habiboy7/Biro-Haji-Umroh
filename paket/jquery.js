  $(document).ready(function() {
    $('#search').click(function() {
      var searchQuery = $('#inp').val().toLowerCase(); 

      //?Looping semua card
      $('.card').each(function() {
        var cardTitle = $(this).find('.title-program').text().toLowerCase(); 

        if (cardTitle.indexOf(searchQuery) !== -1) {
          $(this).show(); // 
        } else {
          $(this).hide(); // 
        }
      });
    });

    // nambah event listener untuk enter key
    $('#inp').on('keypress', function(e) {
      if (e.which === 13) { // 
        $('#search').click(); // 
      }
    });
  });
