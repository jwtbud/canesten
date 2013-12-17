$(function() {
	if ($("#content_bg_padding_borgomba .content-in-tab").length) {
		$("#content_bg_padding_borgomba").tabs({
			activate: function(event){
				var active_tab = $("#content_bg_padding_borgomba").tabs( "option", "active");
				window.location.hash = 'tab'+active_tab;
			}
		});
	}
	$(".accordion").accordion({
		header: "h2" ,
		heightStyle: "content",
		collapsible: true,
		activate: function(event){
			var active_section = $(event.target).accordion('option', 'active');
			var active_tab = $("#content_bg_padding_borgomba").tabs( "option", "active");
			window.location.hash = 'tab'+active_tab+';s'+active_section;
		}
	});

    // for pdf
    // $(".ui-accordion-content").css("display", "block");

	function navigate_from_hash (hash) {
		var location_r = /tab(\d)+[;]*[s]*(\d+)*/;
		if (location_r.test(hash)) {
			var m = location_r.exec(hash);
			if (m[1]) {
				$("#content_bg_padding_borgomba").tabs( "option", "active", +m[1]);
				if (m[2]) {
					$("#content_bg_padding_borgomba .ui-tabs-panel").eq(m[1]).find('.accordion').accordion("option", "active", +m[2]);
				}
			}
		}
	}
	navigate_from_hash(window.location.hash);

        $('.image_link').on('click', function(e){
            e.preventDefault();
            e.stopPropagation();

            var tab = this.href.split("#")[1],
                activeTab = location.hash.split('#')[1];

            if (activeTab !== tab) {
                location.hash = tab;
                location.reload();
            }

        });
});
