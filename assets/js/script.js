// display time to html
var currentDate = moment().format("ddd, MMMM Do YYYY");

$("#currentDay").html(currentDate);

$(function button() {
    // save button listener
    $(".saveBtn").on("click", function() {
        // get values
        var input = $(this).siblings(".description").val();
        var time = $(this).parent().attr("id");

        // save to local storage
        localStorage.setItem(input, time);
    })
})

function hourTracker () {
    // get current hour
    var currentTime = moment().hour();

    $(".time-block").each(function() {
        // convert string to integer
        var currentHour = parseInt($(this).attr("id"));

        // add classes based on time
        if (currentHour > currentTime) {
            $(this).addClass("future");
        } else if (currentHour === currentTime) {
            $(this).addClass("present");
        } else {
            $(this).addClass("past");
        }
    })
    // get from local storage
$("#8 .description").val(localStorage.getItem("8"));
$("#9 .description").val(localStorage.getItem("9"));
$("#10 .description").val(localStorage.getItem("10"));
$("#11 .description").val(localStorage.getItem("11"));
$("#12 .description").val(localStorage.getItem("12"));
$("#1 .description").val(localStorage.getItem("1"));
$("#2 .description").val(localStorage.getItem("2"));
$("#3 .description").val(localStorage.getItem("3"));
$("#4 .description").val(localStorage.getItem("4"));
$("#5 .description").val(localStorage.getItem("5"));
}


hourTracker();