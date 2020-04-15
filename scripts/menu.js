// tab functionality
function openCourse(evt, courseName) {
    var i, tabsection, tabheader;
    tabsection = document.getElementsByClassName("tabsection");
    for (i = 0; i < tabsection.length; i++) {
        tabsection[i].style.display = "none";
    }
    tabheader = document.getElementsByClassName("tabheader");
    for (i = 0; i < tabheader.length; i++) {
        tabheader[i].className = tabheader[i].className.replace(" active", "");
    }
    document.getElementById(courseName).style.display = "block";
    evt.currentTarget.className += " active";
}

//modal functionality - My attempt to add modal image like mentioned in my CSS file

// var modal = getElementsByClassName('modal');
// var imgBtn = getElementsByClassName('view-dish');

// imgBtn.onclick = function () {
//     //console.log('cliiiickk');
//     modal.style.display = "block";

// }

// var closeBtn = document.getElementsByClassName("close")[0];

// closeBtn.onclick = function () {
//     modal.style.display = "none";
// } 


jQuery(document).ready(function () {
    
    // console.log("test");
    jQuery(".foodImage").hide();

    jQuery(".food-item").click(function () {
        $(".foodImage").not($(this).find(".foodImage")).slideUp(1000);
        $(this).find(".foodImage").slideToggle(1000);
    });
});
