//Function to change the flowers border to be dots and pink
function imageEvent(){
    //grabs the id of what image to change
    var theImage = document.getElementById("imgFlowers");
    //changes the style of the image
    theImage.style.border = '10px dotted pink';
}

//Function to change the image to another image
//Change from a bee on "yellow" flower to bee on "blue" flower
function changeimg(bee){
    var pic;
    //If the image of the yellow bee is clicked..
    if (changeimg ==bee){
        pic="https://img.freepik.com/premium-photo/bee-flower_836919-1043.jpg"
        //..then the image will change to a bee on a blue flower
    } else {
        pic="https://img.freepik.com/premium-photo/blue-flower-with-bee-it_759095-20730.jpg"
    } 
    //creates the image of the yellow bee to equal the variable "pic"
    document.getElementById('imgBee').src = pic;
}

function validateInput(){
    //if the entered text in the text box equals "blue" or "Blue"..
    if (document.frmTest.txtflower.value == "blue" || document.frmTest.txtflower.value == "Blue"){
        //..then you get a right answer popup message
        alert("Congrats!! You got the answer right!!");
        //if you input anything else other than the right answer, then you get a wrong answer popup message
    } else{
        alert("Wrong, try again")
    }

    return false;
}
