//specials
var coll = document.getElementsByClassName("collapsible");
var q;
//goes through collection of collapsible items
for (q = 0; q < coll.length; q++) {
    coll[q].addEventListener("click", function () {
        this.classList.toggle("active");
        var content = this.nextElementSibling;
        if (content.style.display === "block") {
            content.style.display = "none";
        } else {
            content.style.display = "block";
        }
    });
}
