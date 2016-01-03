console.log('\'Allo \'Allo!');

$(function(){
    $("div").blast({
        delimiter: "letter",
        tag: "span"
    });

    snabbt(document.querySelectorAll('.blast'), {
        fromRotation: [0, 0, 0],
        rotation: function(i, total) {
            return [0, 0, (i / (total - 1)) * (Math.PI / 2)];
        },
        delay: function(i) {
            return i * 20;
        },
        easing: 'spring',
    }).snabbt({
        rotation: [0, 0, 0],
        delay: function(i, total) {
            return (total - i - 1) * 10;
        },
        easing: 'ease',
    });
})
