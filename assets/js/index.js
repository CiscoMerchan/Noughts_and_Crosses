// var title = document.querySelector('h1').innerText='Hello';
// Image variable from the image file 
var o = 'assets/images/o.png';
var x = 'assets/images/close.png';
// Convertion of the image to <img> for the .innerHTML
var imgx = '<img src='+x+'>';
var imgo = '<img src='+o+'>';
// var image = document.querySelector('#g1').innerHTML=imgx;
// var image1 = document.querySelector('#g2').innerHTML=imgo;
// var image2 = document.querySelector('#g4').innerHTML=imgx;

// wining lists
var computerNumbers = [];
var win1 = [];
var win2 = [];
var win3 = [];
var win4 = [];
var win5 = [];
var win6 = [];
var win7 = [];
var win9 = [];



// function for when the player click o one of the <td> will render the"X" image inside the tag
function player(id){
    var n = document.querySelector('#g'+id).innerHTML;
    console.log("n value: ", n);
    UserClickCheck(n);
    computerNumbers.push(Number(id));
    // checkBox(id);
    var tdId = document.querySelector('#g'+id).innerHTML=imgx;
    // console.log(tdId);
    // delay of 3 seconds to have the result from the computer as player
    setTimeout(computer, 2000 );
    // computer();
    // document.querySelector('#g1').innerHTML=imgx; 
}
// funtion that recreate the computer as player, through a random number
function computer(){
    console.log(computerNumbers);
    var play = Math.floor(Math.random()*9 + 1);
    console.log(play);
    if (computerNumbers.length === 9){
        var n = document.querySelector('h1').innerHTML='Finish';
    }else if(computerNumbers.includes(play)){
        
        computer();
        computerClickCheck(play);
    }else {
        
        
    // checkBox(play);
        var equis = document.querySelector('#g'+play).innerHTML=imgo;
        console.log(typeof(equis))
        computerNumbers.push(play);
}
}
// this funtion takes the id of the clicked <td> and push the id into a list.
function checkBox(n){
    if (n <=3){
        win1.push(n);
        // console.log(win1);
    }else if(n <= 6 && n > 3){
        win2.push(n);
        // console.log(win2);
    }else if(n <= 9 && n > 6){
        win3.push(n);
        // console.log(win3);
    }
    // console.log(win1);
}

// function to check if the <td> as been aready clicked
// For the player user    // 
function UserClickCheck(n) {
    console.log(" in clickCheck n value: ", n);
    if('<img src="assets/images/o.png">' === n || '<img src="assets/images/close.png">' ===  n ){
        // alert('this box is alredy clicked');
        player(id);
    }else{ 
        console.log(n);
    }
}
// For the computer 
function computerClickCheck(id) {
    var n = document.querySelector('#g'+id).innerHTML;
    console.log(" in clickCheck n value: ", n);
    if('<img src="assets/images/o.png">' === n || '<img src="assets/images/close.png">' ===  n ){
        // alert('this box is alredy clicked');
        computer();
    }else{ 
        console.log(n);
    }
}

