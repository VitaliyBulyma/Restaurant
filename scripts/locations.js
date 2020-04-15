window.onload = pageReady;

function pageReady(){   

};


function myLocationFunction() {
        var mylist = document.getElementById("myList");
        document.getElementById("demo").innerText = mylist.options[mylist.selectedIndex].text;

        
        if ((mylist.options[mylist.selectedIndex].value) === "0")
        {
          document.getElementById("demo").innerText = "No Location Selected";
          alert("Select Location");
          document.getElementById("address_1").style = "display:none; left:-10000px";
          document.getElementById("address_2").style = "display:none; left: -10000px";
        } 
        else if ((mylist.options[mylist.selectedIndex].value) === "Maur") 
        {
          document.getElementById("address_2").style = "display:none; left: -10000px";
          document.getElementById("address_1").style = "display:inline-block; left:0";
        }
        else
        {
          document.getElementById("address_1").style = "display:none; left:-10000px";
          document.getElementById("address_2").style = "display:inline-block; left:0";
        };
      };