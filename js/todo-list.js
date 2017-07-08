// Click on list item to mark it as completed
$("ul").on("click", "li", function() {
    $(this).toggleClass("completed");
});

// Click on delete to delete list item
$("ul").on("click", "span", function(event) {
    // Fade out the list item contain the span
    $(this).parent().fadeOut(300, function() {
        // Remove list item after fade out
        $(this).remove();
    });
    // Stop event from bubbling up to parent DOMs
    event.stopPropagation();
});

// Add new to-do item to list
$("#input").keypress(function(event) {
    // If the enter key is pressed
    if (event.which === 13) {
        $("ul").append("<li><span><i class=\"fa fa-times\"></i></span>" + $(this).val() + "</li>");
        $(this).val("");
    }
})

$(".fa-pencil").click(function() {
    $("#input").slideToggle(500);
})