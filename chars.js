/**
 * textCounter by Zahidul Hossain
 * Licensed under MIT License
 * Release Date: 8th July, 2014
 * Version 0.1
 */

var max, position;

function chars(max, position) {
    $("#" + position).keyup(function() {
        var len = $(this).val().length;
        var left = max - len;
        if (len >= max) {
            $("." + position).text("You have reached the limit");
        } else {
            $("." + position).text(left + " characters left");
        }
    });
}

// Provide here your maximum number of characters and textarea id
chars(200, "text-1");
chars(400, "text-4");
