var tblCountries
var carteAfficher
var ameriqueNordNoms = ["CANADA", "ÉTATS-UNIS","MEXIQUE","GUATEMALA","BELIZE","HONDURAS","EL SALVADOR","NICARAGUA","COSTA RICA","PANAMA","CUBA","JAMAÏQUE","HAÏTI","RÉPUBLIQUE DOMINICAINE",
    "PORTO RICO","TRINITÉ-ET-TOBAGO","BARBADE","SAINT-KITTS-ET-NEVIS","SAINT-MARTIN","SAINTE-LUCIE","SAINT-VINCENT-ET-LES-GRENADINES","ANTIGUA-ET-BARBUDA","SAINT-BARTHÉLEMY",
    "MONTSERRAT","DOMINIQUE","ANGUILLA"];
var carteAmeriqueNord = "<img src = 'images/États-unis.png' id='états-unis' alt='ÉTATS-UNIS' onclick = 'setAnswer()'> \
			 <button type = 'submit' id='btnSubmit' value='CANADA' onclick = 'setAnswer()'><img src = 'images/Canada.png'></button> \
			 <button type = 'submit' id='btnSubmit' value='MEXIQUE' onclick = 'setAnswer()'><img src = 'images/Mexique.png'></button> \
			 <button type = 'submit' id='btnSubmit' value='GUATEMALA' onclick = 'setAnswer()'><img src = 'images/Guatemala.png'></button> \
			 <button type = 'submit' id='btnSubmit' value='BELIZE' onclick = 'setAnswer()'><img src = 'images/Belize.png'></button> \
 			 <button type = 'submit' id='btnSubmit' value='HONDURAS' onclick = 'setAnswer()'><img src = 'images/Honduras.png'></button> \
 			 <button type = 'submit' id='btnSubmit' value='EL SALVADOR' onclick = 'setAnswer()'><img src = 'images/El Salvador.png'></button> \
 			 <button type = 'submit' id='btnSubmit' value='NICARAGUA' onclick = 'setAnswer()'><img src = 'images/Nicaragua.png'></button> \
			 <button type = 'submit' id='btnSubmit' value='COSTA RICA' onclick = 'setAnswer()'><img src = 'images/Costa Rica.png'></button> \
			 <button type = 'submit' id='btnSubmit' value='PANAMA' onclick = 'setAnswer()'><img src = 'images/Panama.png'></button> \
			 <button type = 'submit' id='btnSubmit' value='CUBA' onclick = 'setAnswer()'><img src = 'images/Cuba.png'></button> \
			 <button type = 'submit' id='btnSubmit' value='JAMAÏQUE' onclick = 'setAnswer()'><img src = 'images/Jamaique.png'></button> \
		 	 <button type = 'submit' id='btnSubmit' value='HAÏTI' onclick = 'setAnswer()'><img src = 'images/Haiti.png'></button> \
			 <button type = 'submit' id='btnSubmit' value='RÉPUBLIQUE DOMINICAINE' onclick = 'setAnswer()'><img src = 'images/République Dominicaine.png'></button> \
			 <button type = 'submit' id='btnSubmit' value='PORTO RICO' onclick = 'setAnswer()'><img src = 'images/Porto Rico.png'></button> \
			 <button type = 'submit' id='btnSubmit' value='TRINITÉ-ET-TOBAGO' onclick = 'setAnswer()'><img src = 'images/Trinidad et Tobago.png'></button> \
			 <button type = 'submit' id='btnSubmit' value='BARBADE' onclick = 'setAnswer()'><img src = 'images/Barbados.png'></button> \
			 <button type = 'submit' id='btnSubmit' value='SAINT-KITTS-ET-NEVIS' onclick = 'setAnswer()'><img src = 'images/États-unis.png'></button> \
			 <button type = 'submit' id='btnSubmit' value='SAINT-MARTIN' onclick = 'setAnswer()'><img src = 'images/États-unis.png'></button> \
			 <button type = 'submit' id='btnSubmit' value='SAINT-VINCENT-ET-LES-GRENADINES' onclick = 'setAnswer()'><img src = 'images/États-unis.png'></button> \
			 <button type = 'submit' id='btnSubmit' value='ANTIGUA-ET-BARBUDA' onclick = 'setAnswer()'><img src = 'images/AntiguaEtBarbuda.png'></button> \
			 <button type = 'submit' id='btnSubmit' value='SAINT-BARTHÉLEMY' onclick = 'setAnswer()'><img src = 'images/États-unis.png'></button> \
		 	 <button type = 'submit' id='btnSubmit' value='SAINTE-LUCIE' onclick = 'setAnswer()'><img src = 'images/États-unis.png'></button> \
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
var afriqueNoms = ["AFRIQUE DU SUD", "ALGÉRIE", "ANGOLA", "BÉNIN", "BOTSWANA", "BURKINA FASO", "BURUNDI", "CAMEROUN", "CAP-VERT", 
		   "COMORES", "CÔTE D'IVOIRE", "DJIBOUTI", "ÉGYPTE", "ÉRYTHRÉE", "ESWATINI", "ÉTHIOPIE", "GABON", "GAMBIE", "GHANA", 
		   "GUINÉE ÉQUATORIALE", "GUINÉE", "GUINÉE-BISSAU", "KENYA", "LESOTHO", "LIBERIA", "LIBYE", "MADAGASCAR", "MALAWI", 
		   "MALI", "MAROC", "MAURICE", "MAURITANIE", "MOZAMBIQUE", "NAMIBIE", "NIGER", "NIGÉRIA", "OUGANDA", 
		   "RÉPUBLIQUE CENTRAFRICAINE", "RÉPUBLIQUE DÉMOCRATIQUE DU CONGO", "RÉPUBLIQUE DU CONGO", "RWANDA", 
		   "SÃO TOMÉ-ET-PRÍNCIPE", "SÉNÉGAL", "SEYCHELLES", "SIERRA LEONE", "SOMALIE", "SOUDAN", "SOUDAN DU SUD", "TANZANIE", 
		   "TCHAD", "TOGO", "TUNISIE", "ZAMBIE", "ZIMBABWE"];
var carteAfrique = "<button type = 'submit' id='btnSubmit' value='AFRIQUE DU SUD' onclick = 'setAnswer()'><img src = 'images/États-unis.png'></button> \
		    <button type = 'submit' id='btnSubmit' value='ALGÉRIE' onclick = 'setAnswer()'><img src = 'images/États-unis.png'></button> \
		    <button type = 'submit' id='btnSubmit' value='ANGOLA' onclick = 'setAnswer()'><img src = 'images/États-unis.png'></button> \
		    <button type = 'submit' id='btnSubmit' value='BÉNIN' onclick = 'setAnswer()'><img src = 'images/États-unis.png'></button> \
		    <button type = 'submit' id='btnSubmit' value='BOTSWANA' onclick = 'setAnswer()'><img src = 'images/États-unis.png'></button> \
		    <button type = 'submit' id='btnSubmit' value='BURKINA FASO' onclick = 'setAnswer()'><img src = 'images/États-unis.png'></button> \
		    <button type = 'submit' id='btnSubmit' value='BURUNDI' onclick = 'setAnswer()'><img src = 'images/États-unis.png'></button> \
		    <button type = 'submit' id='btnSubmit' value='CAMEROUN' onclick = 'setAnswer()'><img src = 'images/États-unis.png'></button> \
		    <button type = 'submit' id='btnSubmit' value='CAP-VERT' onclick = 'setAnswer()'><img src = 'images/États-unis.png'></button> \
		    <button type = 'submit' id='btnSubmit' value='COMORES' onclick = 'setAnswer()'><img src = 'images/États-unis.png'></button> \
		    <button type = 'submit' id='btnSubmit' value='CÔTE D'IVOIRE' onclick = 'setAnswer()'><img src = 'images/États-unis.png'></button> \
		    <button type = 'submit' id='btnSubmit' value='DJIBOUTI' onclick = 'setAnswer()'><img src = 'images/États-unis.png'></button> \
		    <button type = 'submit' id='btnSubmit' value='ÉGYPTE' onclick = 'setAnswer()'><img src = 'images/États-unis.png'></button> \
		    <button type = 'submit' id='btnSubmit' value='ÉRYTHRÉE' onclick = 'setAnswer()'><img src = 'images/États-unis.png'></button> \
		    <button type = 'submit' id='btnSubmit' value='ESWATINI' onclick = 'setAnswer()'><img src = 'images/États-unis.png'></button> \
		    <button type = 'submit' id='btnSubmit' value='ÉTHIOPIE' onclick = 'setAnswer()'><img src = 'images/États-unis.png'></button> \
		    <button type = 'submit' id='btnSubmit' value='GABON' onclick = 'setAnswer()'><img src = 'images/États-unis.png'></button> \
		    <button type = 'submit' id='btnSubmit' value='GAMBIE' onclick = 'setAnswer()'><img src = 'images/États-unis.png'></button> \
		    <button type = 'submit' id='btnSubmit' value='GHANA' onclick = 'setAnswer()'><img src = 'images/États-unis.png'></button> \
		    <button type = 'submit' id='btnSubmit' value='GUINÉE ÉQUATORIALE' onclick = 'setAnswer()'><img src = 'images/États-unis.png'></button> \
		    <button type = 'submit' id='btnSubmit' value='GUINÉE' onclick = 'setAnswer()'><img src = 'images/États-unis.png'></button> \
		    <button type = 'submit' id='btnSubmit' value='GUINÉE-BISSAU' onclick = 'setAnswer()'><img src = 'images/États-unis.png'></button> \
		    <button type = 'submit' id='btnSubmit' value='KENYA' onclick = 'setAnswer()'><img src = 'images/États-unis.png'></button> \
		    <button type = 'submit' id='btnSubmit' value='LESOTHO' onclick = 'setAnswer()'><img src = 'images/États-unis.png'></button> \
		    <button type = 'submit' id='btnSubmit' value='LIBERIA' onclick = 'setAnswer()'><img src = 'images/États-unis.png'></button> \
		    <button type = 'submit' id='btnSubmit' value='LIBYE' onclick = 'setAnswer()'><img src = 'images/États-unis.png'></button> \
		    <button type = 'submit' id='btnSubmit' value='MADAGASCAR' onclick = 'setAnswer()'><img src = 'images/États-unis.png'></button> \
		    <button type = 'submit' id='btnSubmit' value='MALAWI' onclick = 'setAnswer()'><img src = 'images/États-unis.png'></button> \
		    <button type = 'submit' id='btnSubmit' value='MALI' onclick = 'setAnswer()'><img src = 'images/États-unis.png'></button> \
		    <button type = 'submit' id='btnSubmit' value='MAROC' onclick = 'setAnswer()'><img src = 'images/États-unis.png'></button> \
		    <button type = 'submit' id='btnSubmit' value='MAURICE' onclick = 'setAnswer()'><img src = 'images/États-unis.png'></button> \
		    <button type = 'submit' id='btnSubmit' value='MAURITANIE' onclick = 'setAnswer()'><img src = 'images/États-unis.png'></button> \
		    <button type = 'submit' id='btnSubmit' value='MOZAMBIQUE' onclick = 'setAnswer()'><img src = 'images/États-unis.png'></button> \
		    <button type = 'submit' id='btnSubmit' value='NAMIBIE' onclick = 'setAnswer()'><img src = 'images/États-unis.png'></button> \
		    <button type = 'submit' id='btnSubmit' value='NIGER' onclick = 'setAnswer()'><img src = 'images/États-unis.png'></button> \
		    <button type = 'submit' id='btnSubmit' value='NIGÉRIA' onclick = 'setAnswer()'><img src = 'images/États-unis.png'></button> \
		    <button type = 'submit' id='btnSubmit' value='OUGANDA' onclick = 'setAnswer()'><img src = 'images/États-unis.png'></button> \
		    <button type = 'submit' id='btnSubmit' value='RÉPUBLIQUE CENTRAFRICAINE' onclick = 'setAnswer()'><img src = 'images/États-unis.png'></button> \
		    <button type = 'submit' id='btnSubmit' value='RÉPUBLIQUE DÉMOCRATIQUE DU CONGO' onclick = 'setAnswer()'><img src = 'images/États-unis.png'></button> \
		    <button type = 'submit' id='btnSubmit' value='RÉPUBLIQUE DU CONGO' onclick = 'setAnswer()'><img src = 'images/États-unis.png'></button> \
		    <button type = 'submit' id='btnSubmit' value='RWANDA' onclick = 'setAnswer()'><img src = 'images/États-unis.png'></button> \
		    <button type = 'submit' id='btnSubmit' value='SÃO TOMÉ-ET-PRÍNCIPE' onclick = 'setAnswer()'><img src = 'images/États-unis.png'></button> \
		    <button type = 'submit' id='btnSubmit' value='SÉNÉGAL' onclick = 'setAnswer()'><img src = 'images/États-unis.png'></button> \
		    <button type = 'submit' id='btnSubmit' value='SEYCHELLES' onclick = 'setAnswer()'><img src = 'images/États-unis.png'></button> \
		    <button type = 'submit' id='btnSubmit' value='SIERRA LEONE' onclick = 'setAnswer()'><img src = 'images/États-unis.png'></button> \
		    <button type = 'submit' id='btnSubmit' value='SOMALIE' onclick = 'setAnswer()'><img src = 'images/États-unis.png'></button> \
		    <button type = 'submit' id='btnSubmit' value='SOUDAN' onclick = 'setAnswer()'><img src = 'images/États-unis.png'></button> \
		    <button type = 'submit' id='btnSubmit' value='SOUDAN DU SUD' onclick = 'setAnswer()'><img src = 'images/États-unis.png'></button> \
	  	    <button type = 'submit' id='btnSubmit' value='TANZANIE' onclick = 'setAnswer()'><img src = 'images/États-unis.png'></button> \
		    <button type = 'submit' id='btnSubmit' value='TCHAD' onclick = 'setAnswer()'><img src = 'images/États-unis.png'></button> \
		    <button type = 'submit' id='btnSubmit' value='TOGO' onclick = 'setAnswer()'><img src = 'images/États-unis.png'></button> \
		    <button type = 'submit' id='btnSubmit' value='TUNISIE' onclick = 'setAnswer()'><img src = 'images/États-unis.png'></button> \
		    <button type = 'submit' id='btnSubmit' value='ZAMBIE' onclick = 'setAnswer()'><img src = 'images/États-unis.png'></button> \
		    <button type = 'submit' id='btnSubmit' value='ZIMBABWE' onclick = 'setAnswer()'><img src = 'images/États-unis.png'></button>"

var europeNoms = ["ALBANIE", "ALLEMAGNE", "ANDORRE", "ARMÉNIE", "AUTRICHE", "AZERBAÏDJAN", "BÉLARUS", "BELGIQUE", "BOSNIE-HERZÉGOVINE", 
                  "BULGARIE", "CHYPRE", "CROATIE", "DANEMARK", "ESPAGNE", "ESTONIE", "FINLANDE", "FRANCE", "GÉORGIE", "GRÈCE", "HONGRIE",
                  "IRLANDE", "ISLANDE", "ITALIE", "KOSOVO", "LETTONIE", "LIECHTENSTEIN", "LITUANIE", "LUXEMBOURG", "MACÉDOINE", "MALTE", 
                  "MOLDAVIE", "MONACO", "MONTÉNÉGRO", "NORVÈGE", "PAYS-BAS", "POLOGNE", "PORTUGAL", "ROUMANIE", "ROYAUME-UNI", "RUSSIE", 
                  "SAINT-MARIN", "SERBIE", "SLOVAQUIE", "SLOVÉNIE","SUÈDE", "SUISSE", "TCHÉQUI", "TURQUIE", "UKRAINE"]
var carteEurope 
var asieNoms
var carteAsie
var oceanieNoms
var carteOceanie

var lives = 3;
var paysNom;
var answer;
var score = 0;
var continent;

function setContinent() {
	continent = event.target.value;
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
  paysNom = tblCountries[Math.floor(Math.random()*tblCountries.length)]
}


function setAnswer() {
	answer = event.target.value;
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
    affichePaysNom();
    affiche.innerHTML = "<h2>"+paysNom+"</h2><br><h3>Score: "+score+"   Vies: "+lives+"</h3><input type='button' value='Vérifier Réponse' onclick='verifyAnswer()'><br><div class = 'grid-container'>"+carteAfficher+"</div>"
}
