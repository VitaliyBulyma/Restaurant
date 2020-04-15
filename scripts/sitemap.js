// test
// console.log("IM HERE");

var contents = document.getElementsByClassName('column');

var i;

function listView() {
    for (i = 0; i < contents.length; i++) {
        contents[i].style.width = "100%";
    }
}

function gridView() {
    for (i = 0; i < contents.length; i++) {
        contents[i].style.width = "25%";
    }
}

jQuery(document).ready(function () {
    
    // console.log("test");
    jQuery(".clickable-tab-content").hide();

    jQuery(".clickable-tab").click(function () {
        $(".clickable-tab-content").not($(this).find(".clickable-tab-content")).slideUp(1000);
        $(this).find(".clickable-tab-content").slideToggle(1000);
    });
});