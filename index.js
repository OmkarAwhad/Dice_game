var randomVariable1 = Math.floor(Math.random() * 6) + 1;
var randomVariable2 = Math.floor(Math.random() * 6) + 1;

var randomDiceImage1 = "dice" + randomVariable1 + ".png";
var randomDiceImage2 = "dice" + randomVariable2 + ".png";


var randomImage1 = "images/" + randomDiceImage1;
var randomImage2 = "images/" + randomDiceImage2;


var img1 = document.querySelectorAll("img")[0];
var img2 = document.querySelectorAll("img")[1];

img1.setAttribute("src" ,randomImage1);
img2.setAttribute("src" ,randomImage2);

if(randomVariable1 > randomVariable2 ){
    document.querySelector("h1").innerHTML = "🚩🚩Player 1 Wins";
}
else if(randomVariable1 < randomVariable2){
    document.querySelector("h1").innerHTML = "Player 2 Wins🚩🚩";
}
else{
    document.querySelector("h1").innerHTML = "🚩Draw🚩";
}