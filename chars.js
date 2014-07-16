/**
 * charsjs by Zahidul Hossain
 * Licensed under MIT License
 * Release Date: 8th July, 2014
 * Version 0.2
 */

var max, area, position;
"use strict";
function chars(max, area, position) {
    $(area).keyup(function() {
        var len = $(this).val().length;
        var left = max - len;
        if (len >= max) {
            $(position).text("You have reached the limit");
        } else {
            $(position).text(left + " characters left");
        }
    });
}
