$(function() {
	var searchField = $('#query');     //search form
	var icon = $('#search-btn');      // button

	//Focus handler
	$('searchField').on('focus', function() {
		$(this).animate( {
			width:'100%';
		},400);
		$(icon).animate( {
			right: '10px';
		},400);
	});

	// Blur Event Handler

	$('searchField').on('focus', function() {
		if(searchField.val() == '') {
			$(searchField).animate({ 
				width:'45%'
			},400, function() {})
		}
	});

})