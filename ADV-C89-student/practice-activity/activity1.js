score= 0;

function UpdateScore(){
score= score  + 1;
document.getElementById("score").innerHTML="score:"+ score;


}

function SaveScore(){
localStorage.setItem("score", score);




}
  
function NextPage(){
window.location = "activity_2.html";

}
