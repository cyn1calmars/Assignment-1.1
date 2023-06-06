// Get the modal
var logandSignfrm = document.getElementById('popup');
var logandSignfrm = document.getElementById('popup2');

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
    if (event.target == logandSignfrm) {
        logandSignfrm.style.display = "none";
    }
}

//get submit button
 var login = document.getElementsByClassName("submit");

function submission(){
    //If submit button is clicked on
    if("login"){
        //popup message that login isn't available
        alert("Login not available at this time!");
    }

}

//get submit button
var signup1 = document.getElementsByClassName("signup");

function submission2(){
    //If submit button is clicked on
    if("signup1"){
    //popup message that login isn't available
        alert("Sign-Up not available at this time!");
    }

}
