function imageEvent(){
    var theImage = document.getElementById("imgFlowers");
    theImage.style.border = '10px dotted pink';
}

function changeimg(bee){
    var pic;
    if (changeimg ==bee){
        pic="https://img.freepik.com/premium-photo/bee-flower_836919-1043.jpg"
    } else {
        pic="https://img.freepik.com/premium-photo/blue-flower-with-bee-it_759095-20730.jpg"
    } 
    document.getElementById('imgBee').src = pic;
}

function validateInput(){
    if (document.frmTest.txtflower.value == "blue" || document.frmTest.txtflower.value == "Blue"){
        alert("Congrats!! You got the answer right!!");
    } else{
        alert("Wrong, try again")
    }

    return false;
}