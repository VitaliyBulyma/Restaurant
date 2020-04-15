
function myCardFunction(imgs) {
  var expandImg = document.getElementById("expandedImg");
  expandImg.src = imgs.src;
  expandImg.parentElement.style.display = "block";
}
function cardAmount() {

        var mylist = document.getElementById("myListAmount");
        document.getElementById("demo").innerText = mylist.options[mylist.selectedIndex].text;


        if ((mylist.options[mylist.selectedIndex].value) === "0")
        {


          alert("Select Amount");
        }
        else if ((mylist.options[mylist.selectedIndex].value) === "25")
        {
          document.getElementById("demo").innerText = mylist.options[mylist.selectedIndex].text;
        }
        else if ((mylist.options[mylist.selectedIndex].value) === "50")
        {
          document.getElementById("demo").innerText = mylist.options[mylist.selectedIndex].text;
        }
        else
        {
        document.getElementById("demo").innerText = mylist.options[mylist.selectedIndex].text;
        document.getElementById("demo").style.marginLeft="-20%";
        };
      };

function cardMessage() {
              var mylist2 = document.getElementById("myListMessages");
              document.getElementById("imgtext").innerText = mylist2.options[mylist2.selectedIndex].text;


              if ((mylist2.options[mylist2.selectedIndex].value) === "0")
              {
                alert("Select Message");
              }
              else if ((mylist2.options[mylist2.selectedIndex].value) === "bday")
              {
                document.getElementById("imgtext").innerText = mylist2.options[mylist2.selectedIndex].text;
              }
              else if ((mylist2.options[mylist2.selectedIndex].value) === "aniversary")
              {
                document.getElementById("imgtext").innerText = mylist2.options[mylist2.selectedIndex].text;
              }
              else
              {
              document.getElementById("imgtext").innerText = mylist2.options[mylist2.selectedIndex].text;
              document.getElementById("imgtext").style.marginLeft="-20%";
            
              };
            };
