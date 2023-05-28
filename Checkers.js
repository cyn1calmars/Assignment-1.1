//Checker Board
var board = [
    [null, 'i', null, 'i', null, 'i', null, 'i'],
    ['i', null, 'i', null, 'i', null, 'i', null],
    [null, 'i', null, 'i', null, 'i', null, 'i'],
    [null, null, null, null, null, null, null],
    [null, null, null, null, null, null, null],
    ['b', null, 'b', null, 'b', null, 'b', null],
    [null, 'b', null, 'b', null, 'b', null, 'b'],
    ['b', null, 'b', null, 'b', null, 'b', null]
]
//Variable that points to the span on the HTML page that stores 
//the value of the selected piece
var selValueElem = document.querySelector('#selectedSquare');

//this function creates a checker board with 24 pieces
//creates a 2-color alternating checker board with 8 rows and 8 columns
function createBoard(){
    //create a section tag in HTML to hold the board
    //squares will be added to this board
    var theBoard = document.createElement('section');
    theBoard.id = 'checkersBoard';
    document.body.appendChild(theBoard);

    //the outer loop builds rows
    for(var i=0; i< board.length; i++){
        //inner loop builds columns
        for (var j=0; j < board.length; j++){
            //create an HTML div that will become 1 square on the checkers board
            var square = document.createElement('div');
            square.classList.add('square');
            //the id is "div" + the string value of i and j
            //example: div00 div01, etc.
            square.setAttribute("id", "div" + i + j);
        
        //if i and j added together is an odd number, make the background of the square
        //gray and add and event listener so the piece can be moved
        //% is modulus or mod - it's the remainder of the first number divded by the second number
        if ((i+j) % 2 == 1){
            //add the css class bg to the square
            square.classList.add('bg');
            //add the even listener for when the div is clicked
            square.addEventListener("click", movePiece);
        }
        //add the square to the board element
        theBoard.appendChild(square);

        //if this board array eleemt exists, add a piece to the sqaure
        if (board[i][j]){
            //the array value was either i or b
            //the piece will have the same id as the sqaure id
            //checker-i or checker-b will determine the color od the piece
            //square is which square to add the piece to
            createPiece("piece" + i + j, 'checker-' + board[i][j], square);
        }
    }
}
}

//this function builds the checker piece
//the piece will be light tan and brown depending on which pieceClass is placed in
function createPiece(id, pieceClass, theSquare){
    //create a div
        var newPiece = document.createElement('div');
        //set the id
        newPiece.setAttribute("id", id);
        //the checker Css class makes the piece round
        newPiece.classList.add("checker");
        //the pieceClass determines the color of the piece
        newPiece.classList.add(pieceClass);
        //add an onclick event to the getPlayerPieces function is called when the piece
        //is clicked on
        newPiece.addEventListener("click", getPlayerPieces);
        //add the piece div to the square div
        theSquare.appendChild(newPiece);
}

//this function will "move" a piece from one square to another
function movePiece(event){
    console.log("target square selected="+ event.target.id);

    //the new square is where the piece will be moved to
    //this square is clicked on by the user
    var newSquareId = event.target.id;
    //remove piece or div from the id, we only need the number
    newSquareId = newSquareId.replace("piece", "");
    newSquareId = newSquareId.replace("div", "");

    //get the piece id that ideally was clicked on before the empty square was clicked
    //the piece piece id is stored in the hidden span
    var selectedPieceId = selValueElem.dataset.value;

    //if the piece id and the destination square are different, "move" the piece
    if(selectedPieceId != newSquareId){
        //the old square
        var oldSquare = document.getElementById("div" + selectedPieceId);
        //the old piece
        var oldPiece = document.getElementById("piece" + selectedPieceId);
        //color of the old piece
        var pieceClass = oldPiece.classList[1];

        //remove the old piece from the old square
        oldSquare.removeChild(oldPiece);

        //this is the destination for the piece
        var newSquare = document.getElementById("div" + newSquareId);

        //add the piece to this new square
        //pass in the piece id, what color the piece should be and the div to hold the piece
        createPiece("piece" + newSquareId, pieceClass, newSquare);
    }

}

//when a piece is clicked, we store the value in the hidden span in the HTML
function getPlayerPieces(event){
    console.log("square selected="+ event.target.id);

    //get the id of the selected piece
    var selectedPieceId = event.target.id;
    //we want just the number
    selectedPieceId = selectedPieceId.replace("piece", "");
    selectedPieceId = selectedPieceId.replace("div", "");

    //store the value in the span
    selValueElem.dataset.value = selectedPieceId;
}