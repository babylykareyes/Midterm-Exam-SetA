function GenRandom(){
    var randomColors = Math.random()*10;
    randomColors = Math.floor (randomColors)+1;

    if (randomColors == 1)
    {document.querySelector(".motor-image").style.background = "tomato";}
    else if (randomColors == 2) {document.querySelector(".motor-image").style.background = "brown";}
    else if (randomColors == 3) {document.querySelector(".motor-image").style.background = "darkgreen";}
    else if (randomColors == 4) {document.querySelector(".motor-image").style.background = "purple";}
    else if (randomColors == 5) {document.querySelector(".motor-image").style.background = "orange";}
    else if (randomColors == 6) {document.querySelector(".motor-image").style.background = "peach";}
    else if (randomColors == 7) {document.querySelector(".motor-image").style.background = "chocolate";}
    else if (randomColors == 8) {document.querySelector(".motor-image").style.background = "teal";}
    else if (randomColors == 9) {document.querySelector(".motor-image").style.background = "wheat";}
    else
    {document.querySelector(".motor-image").style.background = "yellowgreen";}
}
function Show()
{
    var specificColor = document.querySelector("#pick-colors").value;
     document.querySelector(".motor-image").style.backgroundColor = specificColor;
}
function Reset()
{
    document.querySelector(".motor-image").style.backgroundColor = "white";
}