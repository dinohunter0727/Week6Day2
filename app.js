let overSpace = $(".space");

for (var i = 0; i < 16; i++) {
    overSpace.append(newSquare(i));
}
    
function newSquare(num) {
    let className = "square";
    let appended = "<div class='" + className + "'></div>";
    return appended;
}

$(".space .square").on('click', function() {
    $(this).toggleClass("change");
})