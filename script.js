var tblCountrys = ["CANADA", "ÉTATS-UNIS", "MEXIQUE"]
var lives = 3;
var paysNom;
var brazil
brazil.innerHTML = ""
function affichePaysNom() {
  paysNom = tblCountrys[Math.floor(Math.random()*tblCountrys.length)]
}
var answer
var stop = true;
var score = 0;
function setAnswer() {
  answer = document.getElementById('btnSubmit').value;
  stop = false;
}
function verifyAnswer() {
  if (answer == paysNom) {
    score+=500
  } else {
    lives--
  }
  answer = "";
}
function jouerPointeur() {
  var affiche = document.getElementById("jeux");
  while (lives > 0) {
    affichePaysNom()
    affiche.innerHTML = "<h2>"+paysNom+"</h2><br><h3>Score: "+score+"   Vies: "+lives+"</h3><div class = 'grid-container'><div class = 'grid-item' id='brazil'><button type = 'submit' id='btnSubmit' value='brazil' onclick = 'setAnswer()'><img src='brazil map.png' width = '200'></button></div><div class = 'grid-item' id='paraguay'><button type = 'submit' onclick = alert('bruh')><img src='https://www.shutterstock.com/image-vector/outline-map-paraguay-white-background-260nw-1959582679.jpg' height = '80' ></button></div><div class = 'grid-item'></div><div class = 'grid-item'></div><div class = 'grid-item'></div><div class = 'grid-item'></div><div class = 'grid-item'></div><div class = 'grid-item'></div><div class = 'grid-item'></div><div class = 'grid-item'></div><div class = 'grid-item'></div><div class = 'grid-item'></div><div class = 'grid-item'></div><div class = 'grid-item'></div><div class = 'grid-item'></div></div>"
    verifyAnswer()
  }
}