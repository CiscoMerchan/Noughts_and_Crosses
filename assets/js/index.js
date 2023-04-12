// Variables for the images
var oImage = 'assets/images/image_o.png';
var xImage = 'assets/images/image_x.png';

// Conversion of the image to <img> for the .innerHTML
var imgx = '<img class="image_game" src=' + xImage + '>';
var imgo = '<img class="image_game" src=' + oImage + '>';

// Arrays to keep track of clicked boxes
var clickedBoxes = [];
var playerBoxes = [];
var computerBoxes = [];

// Function for when the player clicks on a box
function player(id) {
  var boxId = Number(id);
  // Check if box is already clicked
  if (clickedBoxes.includes(boxId)) {
    alert('Select another box');
  } else {
    // Add box to clicked boxes array
    clickedBoxes.push(boxId);
    playerBoxes.push(boxId);
    // Update box with player's image
    document.querySelector('#g' + boxId).innerHTML = imgx;
    // Check if player has won
    if (checkWinner(playerBoxes, 'Player')) {
      endGame('Player');
      return true;
    }
    // Call computer's turn after a delay
    setTimeout(computerTurn, 1000);
  }
}

// Function to simulate the computer's turn
function computerTurn() {
  // Check if all boxes are clicked
  if (clickedBoxes.length === 9) {
    endGame('Draw');
    return true;
  }
  // Choose a random box
  var boxId;
  do {
    boxId = Math.floor(Math.random() * 9 + 1);
  } while (clickedBoxes.includes(boxId));
  // Add box to clicked boxes array
  clickedBoxes.push(boxId);
  computerBoxes.push(boxId);
  // Update box with computer's image
  document.querySelector('#g' + boxId).innerHTML = imgo;
  // Check if computer has won
  if (checkWinner(computerBoxes, 'Computer')) {
    endGame('Computer');
    return true;
  }
}

// Function to check if a player has won
function checkWinner(boxes, player) {
  if (boxes.includes(1) && boxes.includes(2) && boxes.includes(3) ||
      boxes.includes(4) && boxes.includes(5) && boxes.includes(6) ||
      boxes.includes(7) && boxes.includes(8) && boxes.includes(9) ||
      boxes.includes(1) && boxes.includes(4) && boxes.includes(7) ||
      boxes.includes(2) && boxes.includes(5) && boxes.includes(8) ||
      boxes.includes(3) && boxes.includes(6) && boxes.includes(9) ||
      boxes.includes(1) && boxes.includes(5) && boxes.includes(9) ||
      boxes.includes(3) && boxes.includes(5) && boxes.includes(7)) {
    console.log('Winner: ' + player);
    return true;
  }
  return false;
}

// Function to end the game and display the winner
function endGame(winner) {
  console.log('Game Over. Winner: ' + winner);
  
  document.querySelector('.container').innerHTML = '<div class="winner_title"><h2><strong>GAME OVER</strong></h2><h2>Winner: ' + winner+'</h2>';
  document.querySelector('.replay').innerHTML= '<button type="button" class="disp" onClick="window.location.reload()">Restart the Game</button>'
  // Disable all remaining boxes
  for (var i = 1; i <= 9; i++) {
    if (!clickedBoxes.includes(i)) {
      document.querySelector('#g' + i).setAttribute('onclick', '');
    }
  }
}


  
  // console.log(div);
