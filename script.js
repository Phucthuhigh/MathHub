var currentX = '';
var currentY = '';
var movementConstant = .025;

function getRndInteger(min, max) {
    return Math.floor(Math.random() * (max - min + 1) ) + min;
}

$(".bubbles i").each(function(i, el) {
    $(el).css({
        "animation-duration": `calc(75s / ${getRndInteger(10, 30)})`
    })
})
