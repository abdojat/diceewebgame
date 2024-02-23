var dice =["","1.png","2.png","3.png","4.png","5.png","6.png"];

var player1 = Math.floor(Math.random()*6)+1;
var player2 = Math.floor(Math.random()*6)+1;
if(player1>player2)
{
    document.querySelector("h1").textContent = "player 1 wins";
}
else if (player2>player1)
{
    document.querySelector("h1").textContent = "player 2 wins";    
}
else
{
    document.querySelector("h1").textContent = "refresh me";
}

document.querySelector("img").setAttribute("src","images/"+dice[player1]);
document.querySelectorAll("img")[1].setAttribute("src","images/"+dice[player2]);
