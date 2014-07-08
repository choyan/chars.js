/**
 * charsjs by Zahidul Hossain
 * Licensed under MIT License
 * Release Date: 8th July, 2014
 * Version 0.1
 */

var max, position;
"use strict";
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
