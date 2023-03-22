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
    checkBox(id);
    var tdId = document.querySelector('#g'+id).innerHTML=imgx;
    console.log(tdId);
    // delay of 3 seconds to have the result from the computer as player
    setTimeout(computer, 3000 );
    // computer();
    // document.querySelector('#g1').innerHTML=imgx; 
}
// funtion that recreate the computer as player, through a random number
function computer(){
    var play = Math.floor(Math.random()*9 + 1);
    console.log(play);
    checkBox(play);
    document.querySelector('#g'+play).innerHTML=imgo;
}
// this funtion takes the id of the check <td> and push the id into a list.
function checkBox(n){
    if (n <=3){
        win1.push(n);
        console.log(win1);
    }else if(n <= 6 && n > 3){
        win2.push(n);
        console.log(win2);
    }else if(n <= 9 && n > 6){
        win3.push(n);
        console.log(win3);
    }
    // console.log(win1);
}