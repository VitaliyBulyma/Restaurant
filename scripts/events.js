//console.log("Works!!");
var eventsList = [
    {//list of events
        eventName:"Board Game Night",
        eventDate:"December 12th",
        eventTime:"7pm Ship Time",
        eventLocation:"Main Dining Hall",
        eventDescription:"Come out to enjoy our famous dinner and stay for the games! The SS L'océan provides family friendly fun but don't blame us for the ensuing family disagreements on board game rules! "
    },
    {
        eventName:"Taco Tuesday",
        eventDate:"December 17th",
        eventTime:"6pm Ship Time",
        eventLocation:"Main Dining Hall",
        eventDescription:"ITS TACO TUEEEESSSSDAYYY!!🌮🌮"
    },
    {
        eventName:"Raptor's Christmas Game Day",
        eventDate:"December 25th",
        eventTime:"12pm EST",
        eventLocation:"Bar",
        eventDescription:"The Toronto Raptors take on eastern conference rivals Boston Celtics in an action packed match! Enjoy fine cuisine and what might be quit possibly better than courtside seats!🏀🍽️"
    },
    {
        eventName:"Eat What You Catch",
        eventDate:"December 26th",
        eventTime:"ALL DAY!",
        eventLocation:"Front Deck",
        eventDescription:"Take on the pirates and defend your catch! Chefs are stationed on deck to provide fresh cooked meals caught by yourself!🏴‍☠️"
    },
    {
        eventName:"All You Can Eat Oysters",
        eventDate:"December 29th",
        eventTime:"8pm Ship Time",
        eventLocation:"Main Dining Hall ",
        eventDescription:"The SS L'océan best kept secrect! Unlimited Oysters! Practically less than a buck a shuck!🦪"
    }
]
//console.log(eventsList[0].eventDate);
var list = document.getElementsByName("eventCard"); 
for (var i = 0; i < list.length; i++) {//loop through the elements and events
    //console.log(eventsList[i].eventDate);for each element add the appropriate information
    list[i].children[0].innerHTML=eventsList[i].eventDate;
    list[i].children[1].innerHTML=eventsList[i].eventName;    
    list[i].children[2].innerHTML=eventsList[i].eventTime;
    list[i].children[3].innerHTML=eventsList[i].eventLocation;
    list[i].children[4].innerHTML=eventsList[i].eventDescription;

}
//validate event form
function validateForm(){
    var numAttendees = document.forms['form']['attendees'].value;
    if(numAttendees>50||numAttendees===""){
        document.getElementById('attendeesValidation').innerHTML="No greater than 50 people or invalid entry";
        return false;
    }
    var date = document.forms['form']['eventDate'].value;
    if(date===""){
        document.getElementById('dateValidation').innerHTML="Enter a date please";
        return false;
    }
    
    if(document.forms['form']['eventType'].selectedIndex=""){
        document.getElementById('typeValidation').innerHTML="Pick a event type!";
        return false;
    }
}
jQuery(document).ready(function(){
    jQuery(".eventDiscription").hide();//first hide the discription
    jQuery(".eventForm").hide();//then hide the form

    jQuery(".eventButton").click(function(){
        //$(".eventDiscription").not($(this).find(".eventDiscription")).slideUp(1000);
        $(".eventForm").slideToggle(1000);
        $(".eventForm").focus();//toggle the form when the button is clicked
    });

    jQuery(".eventCard").click(function(){//when the card is clicked
        $(".eventDiscription").not($(this).find(".eventDiscription")).slideUp(1000);
        $(this).find(".eventDiscription").slideToggle(1000);//toggle the current cards decription
    });
});
   
    
