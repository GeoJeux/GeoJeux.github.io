var tblCountries
var acrteAfficher
var ameriqueNordNoms = ["CANADA", "ÉTATS-UNIS","MEXIQUE","GUATEMALA","BELIZE","HONDURAS","SALVADOR","NICARAGUA","COSTA RICA","PANAMA","CUBA","JAMAÏQUE","HAÏTI","RÉPUBLIQUE DOMINICAINE",
    "PORTO RICO","TRINITÉ-ET-TOBAGO","BARBADE","SAINT-KITTS-ET-NEVIS","SAINT-MARTIN","SAINTE-LUCIE","SAINT-VINCENT-ET-LES-GRENADINES","ANTIGUA-ET-BARBUDA","SAINT-BARTHÉLEMY",
    "SAINT-ÉLOI","MONTSERRAT","DOMINIQUE","ANGUILLA"];
var carteAmeriqueNord = "<button type = 'submit' id='btnSubmit' value='ÉTATS-UNIS' onclick = 'setAnswer()'><img src = 'images/États-unis.png'></button> \
			 <button type = 'submit' id='btnSubmit' value='CANADA' onclick = 'setAnswer()'><img src = 'images/Canada.png'></button> \
			 <button type = 'submit' id='btnSubmit' value='MEXIQUE' onclick = 'setAnswer()'><img src = 'images/États-unis.png'></button> \
			 <button type = 'submit' id='btnSubmit' value='GUATEMALA' onclick = 'setAnswer()'><img src = 'images/Guatemala.png'></button> \
			 <button type = 'submit' id='btnSubmit' value='BELIZE' onclick = 'setAnswer()'><img src = 'images/Belize.png'></button> \
 			 <button type = 'submit' id='btnSubmit' value='HONDURAS' onclick = 'setAnswer()'><img src = 'images/Honduras.png'></button> \
 			 <button type = 'submit' id='btnSubmit' value='SALVADOR' onclick = 'setAnswer()'><img src = 'images/États-unis.png'></button> \
 			 <button type = 'submit' id='btnSubmit' value='NICARAGUA' onclick = 'setAnswer()'><img src = 'images/États-unis.png'></button> \
			 <button type = 'submit' id='btnSubmit' value='COSTA RICA' onclick = 'setAnswer()'><img src = 'images/Costa Rica.png'></button> \
			 <button type = 'submit' id='btnSubmit' value='PANAMA' onclick = 'setAnswer()'><img src = 'images/États-unis.png'></button> \
			 <button type = 'submit' id='btnSubmit' value='CUBA' onclick = 'setAnswer()'><img src = 'images/Cuba.png'></button> \
			 <button type = 'submit' id='btnSubmit' value='JAMAÏQUE' onclick = 'setAnswer()'><img src = 'images/États-unis.png'></button> \
		 	 <button type = 'submit' id='btnSubmit' value='HAÏTI' onclick = 'setAnswer()'><img src = 'images/Haiti.png'></button> \
			 <button type = 'submit' id='btnSubmit' value='RÉPUBLIQUE DOMINICAINE' onclick = 'setAnswer()'><img src = 'images/États-unis.png'></button> \
			 <button type = 'submit' id='btnSubmit' value='PORTO RICO' onclick = 'setAnswer()'><img src = 'images/États-unis.png'></button> \
			 <button type = 'submit' id='btnSubmit' value='TRINITÉ-ET-TOBAGO' onclick = 'setAnswer()'><img src = 'images/États-unis.png'></button> \
			 <button type = 'submit' id='btnSubmit' value='BARBADE' onclick = 'setAnswer()'><img src = 'images/États-unis.png'></button> \
			 <button type = 'submit' id='btnSubmit' value='SAINT-KITTS-ET-NEVIS' onclick = 'setAnswer()'><img src = 'images/États-unis.png'></button> \
			 <button type = 'submit' id='btnSubmit' value='SAINT-MARTIN' onclick = 'setAnswer()'><img src = 'images/États-unis.png'></button> \
			 <button type = 'submit' id='btnSubmit' value='SAINT-VINCENT-ET-LES-GRENADINES' onclick = 'setAnswer()'><img src = 'images/États-unis.png'></button> \
			 <button type = 'submit' id='btnSubmit' value='ANTIGUA-ET-BARBUDA' onclick = 'setAnswer()'><img src = 'images/États-unis.png'></button> \
			 <button type = 'submit' id='btnSubmit' value='SAINT-BARTHÉLEMY' onclick = 'setAnswer()'><img src = 'images/États-unis.png'></button> \
		 	 <button type = 'submit' id='btnSubmit' value='SAINT-ÉLOI' onclick = 'setAnswer()'><img src = 'images/États-unis.png'></button> \
	 		 <button type = 'submit' id='btnSubmit' value='MONTSERRAT' onclick = 'setAnswer()'><img src = 'images/États-unis.png'></button> \
			 <button type = 'submit' id='btnSubmit' value='DOMINIQUE' onclick = 'setAnswer()'><img src = 'images/Dominique.png'></button> \
			 <button type = 'submit' id='btnSubmit' value='ANGUILLA' onclick = 'setAnswer()'><img src = 'images/États-unis.png'></button>"

var ameriqueSudNoms = ["ARGENTINE","BOLIVIE","BRESIL","CHILI","COLOMBIE","ECUADOR","GUYANA","PARAGUAY","PEROU","SURINAME","URUGUAY","VENEZUELA"];
var carteAmeriqueSud = "<button type = 'submit' id='btnSubmit' value='ARGENTINE' onclick = 'setAnswer()'><img src = 'images/États-unis.png'></button> \
		       	<button type = 'submit' id='btnSubmit' value='BOLIVIE' onclick = 'setAnswer()'><img src = 'images/États-unis.png'></button> \
			<button type = 'submit' id='btnSubmit' value='BRESIL' onclick = 'setAnswer()'><img src = 'images/États-unis.png'></button> \
			<button type = 'submit' id='btnSubmit' value='CHILI' onclick = 'setAnswer()'><img src = 'images/États-unis.png'></button> \
			<button type = 'submit' id='btnSubmit' value='COLOMBIE' onclick = 'setAnswer()'><img src = 'images/États-unis.png'></button> \
			<button type = 'submit' id='btnSubmit' value='ECUADOR' onclick = 'setAnswer()'><img src = 'images/États-unis.png'></button> \
			<button type = 'submit' id='btnSubmit' value='GUYANA' onclick = 'setAnswer()'><img src = 'images/États-unis.png'></button> \
			<button type = 'submit' id='btnSubmit' value='PARAGUAY' onclick = 'setAnswer()'><img src = 'images/États-unis.png'></button> \
			<button type = 'submit' id='btnSubmit' value='PEROU' onclick = 'setAnswer()'><img src = 'images/États-unis.png'></button> \
			<button type = 'submit' id='btnSubmit' value='SURINAME' onclick = 'setAnswer()'><img src = 'images/États-unis.png'></button> \
			<button type = 'submit' id='btnSubmit' value='URUGUAY' onclick = 'setAnswer()'><img src = 'images/États-unis.png'></button> \
			<button type = 'submit' id='btnSubmit' value='VENEZUELA' onclick = 'setAnswer()'><img src = 'images/États-unis.png'></button>"
var afriqueNoms = [""]
var carteAfrique [""]
var europeNoms = [""]
var carteEurope = [""]
var asieNoms = [""]
var carteAsie = [""]
var oceanieNoms = [""]
var carteOceanie = [""]

var lives = 3;
var paysNom;
var answer
var score = 0;

function setContinent() {
	switch (continent) {
	  case "ameriqueNord":
		  tblCountries = ameriqueNordNoms;
		  carteAfficher = carteAmeriqueNord;
		  break;
	  case "ameriqueSud":
		  tblCountries = ameriqueSudNoms;
		  carteAfficher = carteAmeriqueSud;
		  break;
	  case "afrique":
		  tblCountries = afriqueNoms
		  carteAfficher = carteAfrique;
		  break;
	  case "europe":
		  tblCountries = europeNoms
		  carteAfficher = carteEurope;
		  break;
	  case "asie":
		  tblCountries = asieNoms;
		  carteAfficher = carteAsie;
		  break;
	  case "oceanie":
		  tblCountries = oceanieNoms;
		  carteAfficher = carteOceanie;
  }
}

function affichePaysNom() {
  
  paysNom = ameriqueNordNoms[Math.floor(Math.random()*tblCountrys.length)]
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
    affiche.innerHTML = "<h2>"+paysNom+"</h2><br><h3>Score: "+score+"   Vies: "+lives+"</h3><input type='button' value='Vérifier Réponse' onclick='verifyAnswer()'><br><div class = 'grid-container'>"+carteAmeriqueNord+"</div>
}
