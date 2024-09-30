var randomnumber1= Math.floor(Math.random()*6)+1;
var randomimage1="dice"+randomnumber1+".png";
var randomfile1= "images/"+randomimage1;
var image1= document.querySelectorAll("img")[0];
image1.setAttribute("src",randomfile1);

var randomnumber2=Math.floor(Math.random()*6)+1;
var randomimage2="images/dice"+randomnumber2+".png";
document.querySelectorAll("img")[1].setAttribute("src",randomimage2);
if(randomnumber1>randomnumber2)
    document.querySelector("h1").innerHTML="player 1 wins";
else if(randomnumber2>randomnumber1)
    document.querySelector("h1").innerHTML="player 2 wins";
else
    document.querySelector("h1").innerHTML="draw";