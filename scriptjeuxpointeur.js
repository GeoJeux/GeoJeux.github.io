var tblCountrys = ["BRAZIL", "ÉTATS-UNIS", "MEXIQUE"]
var lives = 3;
var paysNom;
var answer
var score = 0;
function affichePaysNom() {
  paysNom = tblCountrys[Math.floor(Math.random()*tblCountrys.length)]
}


function setAnswer() {
	answer = document.getElementById("btnSubmit").value;
}

function verifyAnswer() {
  if (answer == paysNom) {
    score = score + 500
  } else {
    lives--
  }
  if (lives == 0) {
	  endGame()
  } else {
	  jouerPointeur()
  }
  
  answer = "";
}
function endGame() {
	var affiche = document.getElementById("jeux");
	affiche.innerHTML = "<h2>Votre score est: </h2>" + score
}
function jouerPointeur() {
  var affiche = document.getElementById("jeux");
    affichePaysNom()
    affiche.innerHTML = "<h2>"+paysNom+"</h2><br><h3>Score: "+score+"   Vies: "+lives+"</h3><input type='button' value='Vérifier Réponse' onclick='verifyAnswer()'><br><div class = 'grid-container'><div class = 'grid-item' id='brazil'><button type = 'submit' id='btnSubmit' value='BRAZIL' onclick = 'setAnswer()'><img src='brazil map.png' width = '200'></button></div><div class = 'grid-item' id='paraguay'><button type = 'submit' onclick = alert('bruh')><img src='https://www.shutterstock.com/image-vector/outline-map-paraguay-white-background-260nw-1959582679.jpg' height = '80' ></button></div><div class = 'grid-item'></div><div class = 'grid-item'></div><div class = 'grid-item'></div><div class = 'grid-item'></div><div class = 'grid-item'></div><div class = 'grid-item'></div><div class = 'grid-item'></div><div class = 'grid-item'></div><div class = 'grid-item'></div><div class = 'grid-item'></div><div class = 'grid-item'></div><div class = 'grid-item'></div><div class = 'grid-item'></div>"
}
