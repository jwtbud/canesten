/*jslint continue: true, debug: false, eqeq: true, regexp: true, undef: false, sloppy: true, vars: true, white: true, browser: true, devel: true, indent: 4 */
/*global jQuery, $, LANG, FB, $f */

$(function() {

    var player = $f($('#video')[0], {src:window.SITE_URL+"static/flowplayer/flowplayer-3.2.16.swf", wmode:'transparent'}, {
        plugins: {
            controls:  {
                backgroundGradient: 'none',
                backgroundColor: 'transparent',
                all:false,
                scrubber:true,
                mute: true,
                bottom:30,
                width:'80%',
                play: true,
                volume: true,
                fullscreen: true,
                progressColor: '#cf013a'
            }
        },
        play: { replayLabel: '' },
        canvas: {
            backgroundColor: 'transparent',
            backgroundGradient: 'none'
        },
        clip: {
            scaling:'scale',
            autoBuffering: true
        },
        autoBuffering: true
    });

	var tabs = $('ul.tabs').tabs("div.panes > div", {
		history : true
	}).data("tabs");

	$('.min-menu').find('a').on({
		click : function(e) {
			e.preventDefault();
			e.stopPropagation();

			var hashname = e.target.href.split('#')[1];

			switch (hashname) {
			case 'knowledge':
				tabs.click(2);
				break;

			case 'handle':
				tabs.click(3);
				break;

			default:
				tabs.click(0);
				break;
			}

		}
	});

	$('#page-1').find('li').on({
		click : function(e) {
			e.preventDefault();
			e.stopPropagation();

			var itemNumber = $(this).index();

			tabs.click(itemNumber + 1);
		}
	});

});
