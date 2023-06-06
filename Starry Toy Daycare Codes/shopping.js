function opentab(evt, tabName) {
    var i, tabcontent, shoptabs;
    //Tab content will be hidden by default
    tabcontent = document.getElementsByClassName("tabcontent");
    for (i = 0; i < tabcontent.length; i++) {
      tabcontent[i].style.display = "none";
    }
    //When the tab is clicked, it'll be active and shown
    shoptabs = document.getElementsByClassName("shoptabs");
    for (i = 0; i < shoptabs.length; i++) {
      shoptabs[i].className = shoptabs[i].className.replace(" active", "");
    }
    document.getElementById(tabName).style.display = "block";
    evt.currentTarget.className += " active";
  }
  
  // Get the element with id="defaultOpen"
  //automatically has the element open on website load
  document.getElementById("defaultOpen").click();

//grabs the function for the furniture when the "Buy" button is clicked to have a popup message to appear
  function furniture() {
    var furniture = document.getElementById("popup");
    //message will go from being "hidden" to being "shown"
    furniture.className = "show";
    //Message appears for 3 seconds
    setTimeout(function(){ furniture.className = furniture.className.replace("show", ""); }, 3000);
  }

//grabs the function for the wallpaper when the "Buy" button is clicked to have a popup message to appear
  function wallpaper() {
    var wallpapers = document.getElementById("popup2");
    //message will go from being "hidden" to being "shown"
    wallpapers.className = "show";
    //Message appears for 3 seconds
    setTimeout(function(){ wallpapers.className = wallpapers.className.replace("show", ""); }, 3000);
  }