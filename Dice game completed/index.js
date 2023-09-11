var randomnum1=Math.floor(Math.random()*6)+1;
var randomimg1="dice" + randomnum1 + ".png";
document.querySelectorAll("img")[0].setAttribute("src",randomimg1)

var randomnum2=Math.floor(Math.random()*6)+1;
var randomimg2="dice" + randomnum2 + ".png";
document.querySelectorAll("img")[1].setAttribute("src",randomimg2)

if(randomnum1>randomnum2){
    document.querySelector("h1").innerHTML="🚩 Player 1 win"
}
else if(randomnum1<randomnum2){
    document.querySelector("h1").innerHTML="Player 2 win 🚩"
}
// if(randomnum1==randomnum2){
    else{
    document.querySelector("h1").innerHTML="Match Tie"
}
