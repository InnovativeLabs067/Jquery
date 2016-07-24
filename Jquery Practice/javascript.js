//simple code
$(document).ready(function(){
    $('#aim').addClass('highlight');
});





$(document).ready(function() {
    $('.poem-stanza').addClass('highlight');
});




/*
$(document).ready(function() {
    $('#selected-plays > li').addClass('horizontal');
});
*/
$(document).ready(function() {
    //$('#selected-plays > li').addClass('horizontal');
    $('#selected-plays li:not(.horizontal)').addClass('sub-level');
});







$(document).ready(function() {
    $('tr:even').addClass('alt');
});






$(document).ready(function() {
    $('td:contains(Henry)').nextAll().addClass('highlight');
});







//use this code also on switcher id
/*
$(document).ready(function() {
    $('#switcher-large').bind('click', function() {
        $('body').addClass('large');
    });
});

$(document).ready(function() {
    $('#switcher-default').bind('click', function() {
        $('body').removeClass('narrow');
        $('body').removeClass('large');
    });
    $('#switcher-narrow').bind('click', function() {
        $('body').addClass('narrow');
        $('body').removeClass('large');
    });
    $('#switcher-large').bind('click', function() {
        $('body').removeClass('narrow');
        $('body').addClass('large');
    });
});

$(this).addClass('selected');
$('#switcher .button').removeClass('selected');



$(document).ready(function() {
    $('#switcher-default').bind('click', function() {
        $('body').removeClass('narrow');
        $('body').removeClass('large');
        $('#switcher .button').removeClass('selected');
        $(this).addClass('selected');
    });
    $('#switcher-narrow').bind('click', function() {
        $('body').addClass('narrow');
        $('body').removeClass('large');
        $('#switcher .button').removeClass('selected');
        $(this).addClass('selected');
    });
    $('#switcher-large').bind('click', function() {
        $('body').removeClass('narrow');
        $('body').addClass('large');
        $('#switcher .button').removeClass('selected');
        $(this).addClass('selected');
    });
});

$(document).ready(function() {
    $('#switcher-default').bind('click', function() {
        $('body').removeClass('narrow').removeClass('large');
    });
    $('#switcher-narrow').bind('click', function() {
        $('body').addClass('narrow').removeClass('large');
    });
    $('#switcher-large').bind('click', function() {
        $('body').removeClass('narrow').addClass('large');
    });
    $('#switcher .button').bind('click', function() {
        $('#switcher .button').removeClass('selected');
        $(this).addClass('selected');
    });
});

$(document).ready(function() {
    $('#switcher .button').click(function() {
        $('body').removeClass();
        if (this.id == 'switcher-narrow') {
            $('body').addClass('narrow');
        }
        else if (this.id == 'switcher-large') {
            $('body').addClass('large');
        }
        $('#switcher .button').removeClass('selected');
        $(this).addClass('selected');
    });
});

$(document).ready(function() {
    $('#switcher h3').toggle(function() {
        $('#switcher .button').addClass('hidden');
    }, function() {
        $('#switcher .button').removeClass('hidden');
    });
});

$(document).ready(function() {
    $('#switcher h3').click(function() {
        $('#switcher .button').toggleClass('hidden');
    });
});

$(document).ready(function() {
    $('#switcher .button').hover(function() {
        $(this).addClass('hover');
    }, function() {
        $(this).removeClass('hover');
    });
});

*/








//use this code also on switcher id
/*
$(document).ready(function() {
    var $speech = $('div.speech');
    var defaultSize = $speech.css('fontSize');
    $('#switcher button').click(function() {
        var num = parseFloat( $speech.css('fontSize'), 10 );
        switch (this.id) {
            case 'switcher-large':
                num *= 1.4;
                break;
            case 'switcher-small':
                num /= 1.4;
                break;
            default:
                num = parseFloat(defaultSize, 10);
        }
        $speech.css('fontSize', num + 'px');
    });
});
*/



//use all below codes for switcher id
/*
$(document).ready(function() {
    $('p:eq(5)').hide();
    $('a.more').click(function() {
        $('p:eq(5)').show();
        $(this).hide();
        return false;
    });
});
*/
/*
$(document).ready(function() {
    $('p:eq(5)').hide();
    $('a.more').click(function() {
        $('p:eq(5)').show('slow');
        $(this).hide();
        return false;
    });
});
*/
/*
$(document).ready(function() {
    $('p:eq(5)').hide();
    $('a.more').click(function() {
        $('p:eq(5)').fadeIn('slow');
        $(this).hide();
        return false;
    });
});
*/

//Also apply on switcher id
/*
$(document).ready(function() {
    var $firstPara = $('p:eq(5)');
    $firstPara.hide();
    $('a.more').click(function() {
        if ($firstPara.is(':hidden')) {
            $firstPara.fadeIn('slow');
            $(this).text('read less');
        } else {
            $firstPara.fadeOut('slow');
            $(this).text('read more');
        }
        return false;
    });
});
*/
/*
$(document).ready(function() {
    var $firstPara = $('p:eq(5)');
    $firstPara.hide();
    $('a.more').click(function() {
        $firstPara.slideToggle('slow');
        var $link = $(this);
        if ( $link.text() == "read more" ) {
            $link.text('read less');
        } else {
            $link.text('read more');
        }
        return false;
    });
});
*/
$(document).ready(function() {
    $('p:eq(5)').hide();
    $('a.more').click(function() {
        $('p:eq(5)').animate({opacity: 'toggle'}, 'slow');
        var $link = $(this);
        if ( $link.text() == "read more" ) {
            $link.text('read less');
        } else {
            $link.text('read more');
        }
        return false;
    });
});





/*
$(document).ready(function() {
    $('div.chapter a').attr({'rel': 'external'});
});
*/


$(document).ready(function() {
    $('div.chapter a[href*=wikipedia]').each(function(index) {
        var $thisLink = $(this);
        $thisLink.attr({
            'rel': 'external',
            'id': 'wikilink-' + index,
            'title': 'learn more about ' + $thisLink.text() +
                ' at Wikipedia'
        });
    });
});








