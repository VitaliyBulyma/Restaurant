var positionList=[
    {//current opennings list
        postionName:"Marine Operations Coordinator",
        postionDepartment:"Ship Operations", 
        postionDiscription:"Entry Level position that help with ship operations"
    },
    {
        postionName:"Bartender",
        postionDepartment:"Hospitality",
        postionDiscription:"An Entry Level position that serves in the 24hr bar"
    },
    {
        postionName:"Fake Pirate",
        postionDepartment:"Hospitality",
        postionDiscription:"Participate in Events as a fake pirate or a variety of roles"
    },
    {
        postionName:"Marine Engineer",
        postionDepartment:"Ship Operations",
        postionDiscription:"Efficient operation, upkeep, maintenance and cleanliness of all machinery and equipment and spare parts"
    }
]

var list = document.getElementsByName("careerCard");
console.log(list);
for (var i = 0; i < list.length; i++) {//loop through element list
    list[i].children[0].innerHTML=positionList[i].postionName;//add to each div the right object value
    list[i].children[1].innerHTML=positionList[i].postionDepartment;
    list[i].children[2].innerHTML=positionList[i].postionDiscription;
}
jQuery(document).ready(function(){
    jQuery(".positionDiscription").hide();

    jQuery(".careerCard").click(function(){//show the description of the card that is clicked
        $(".positionDiscription").not($(this).find(".positionDiscription")).slideUp(1000);
        $(this).find(".positionDiscription").slideToggle(1000);
    });
});
   