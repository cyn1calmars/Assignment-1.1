// Get the modal
var modal = document.getElementById("myModal");

// Get the button that opens the modal
var btn = document.getElementById("addFriendsbtn");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks the button, open the modal 
btn.onclick = function() {
  modal.style.display = "block";
}

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
  modal.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}

//Randomizes the users code
document.getElementById("randomcode").innerHTML =
//code generates from 100000-300000
Math.floor(Math.random() * 200000) + 100000;

//Get code
  function code(){
    //User enters code
    var code = document.getElementsByClassName("code");
    //if user enters code or no code
        if(code){
            alert("User does not exist yet");
            return false;
        }
}