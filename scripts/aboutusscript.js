/* REFERENCE: W3 Schools Javascript slideshow */

$(document).ready(function () {

    $(".prev").hide()
    $(".mySlides").eq(0).css("display", "flex");

    var slideIndex = 1;

    $(".prev").click(function () {
        $(".mySlides").css("display", "none");;
        if (slideIndex == 2) {//hide the prev button back when leaving the 2nd slide
            $(".prev").hide();
        }
        if (slideIndex == 5) { //bring the next button back when leaving the 5th slide
            $(".next").show();
        }
        if(slideIndex != 1){
            slideIndex--;
        }
        $(".mySlides").eq(slideIndex - 1).css("display", "flex");
    });

    $(".next").click(function () {
        $(".mySlides").css("display", "none");
        if (slideIndex == 4) {//hide the next button back when leaving the 4th slide
            $(".next").hide();
        }
        if (slideIndex == 1) { //bring the prev button back when leaving the 1st slide
            $(".prev").show();
        }
        if(slideIndex != 5){
            slideIndex++;
        }
        $(".mySlides").eq(slideIndex - 1).css("display", "flex");
    });
});
