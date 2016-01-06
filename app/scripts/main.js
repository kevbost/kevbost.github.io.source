// var regex = /(?=["'])(?:"[^"\\]*(?:\\[\s\S][^"\\]*)*"|'[^'\\]*(?:\\[\s\S][^'\\]*)*')/;
var regex = /^"(.+)"$/;

var $,
    snabbt,
    counter = 1;

var snabbt_multi_element_chain = function(element){
    'use strict';
    snabbt(document.querySelectorAll(element), {
        fromRotation: [0, 0, 0],
        rotation: function(i, total) { return [0, 0, (i / (total - 1)) * -(Math.PI / total)]; },
        delay: function(i) { return i * 20; },
        easing: 'spring'
    }).snabbt({
        rotation: [0, 0, 0],
        delay: function(i, total) { return (total - i - 1) * 10; },
        easing: 'ease'
    });
};

var snabbt_notification_shake_rotate = function(element){
    'use strict';
    snabbt(document.querySelectorAll(element), 'attention', {
      rotation: [0, 0, 0.5],
      springConstant: 12,
      springDeceleration: 0.9
    });
};

var snabbt_notification_shake_wiggle = function(element){
    'use strict';
    snabbt(document.querySelectorAll(element), 'attention', {
      position: [40, 0, 0],
      springConstant: 12,
      springDeceleration: 0.9
    });
};

var snabbt_stop = function(element){
    'use strict';
    snabbt(document.querySelectorAll(element), 'stop');
};

$(function(){
    'use strict';
    $('.blasted').blast({
        delimiter: regex,
        tag: 'span'
    });

    setTimeout(function(){
        // snabbt_multi_element_chain('.blast');
    }, 1000);

    var value = '.value-';

    $('body')
        .on('click', function(){
            snabbt_stop('.blast');
            if (counter === 1) {
                snabbt_notification_shake_wiggle(value + counter);
            } else if (counter === 2) {
                snabbt_notification_shake_wiggle(value + counter);
            } else if (counter === 3) {
                snabbt_notification_shake_wiggle(value + counter);
            } else if (counter === 4) {
                snabbt_notification_shake_wiggle(value + counter);
            } else if (counter === 5) {
                snabbt_notification_shake_wiggle(value + counter);
                $('.hidden').removeClass('hidden');
                $('.position-reset').removeClass('position-reset');
            } else {
                counter = 1;
                snabbt_notification_shake_wiggle(value + counter);
            }
            counter += 1;
        })
        .on('mouseenter', '.blasted', function(){
            snabbt_stop('.blast');
            snabbt_notification_shake_rotate('.blast');
        })
    ;
});
