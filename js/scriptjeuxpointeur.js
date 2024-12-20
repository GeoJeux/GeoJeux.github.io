var tblCountries //Variable qui stocke quelles noms de pays a utiliser 
var carteAfficher //Variable qui stocke quelle continent a afficher
var ameriqueNordNoms = ["CANADA", "ÉTATS-UNIS","MEXIQUE","GUATEMALA","BELIZE","HONDURAS","EL-SALVADOR","NICARAGUA","COSTA-RICA","PANAMA","CUBA","BAHAMAS","JAMAÏQUE",
			"HAÏTI","RÉPUBLIQUE-DOMINICAINE","PORTO-RICO","TRINITÉ-ET-TOBAGO","BARBADE","SAINT-KITTS-ET-NEVIS","SAINTE-LUCIE","SAINT-VINCENT-ET-LES-GRENADINES",
			"ANTIGUA-ET-BARBUDA","DOMINIQUE"];
//liste de toutes les pays de l,amerique du nord
var carteAmeriqueNord = "<img src = 'images/États-unis.png' id='ÉTATS-UNIS' onclick = 'setAnswer()'> \
			 <img src = 'images/Canada.png' id='CANADA' onclick = 'setAnswer()'> \
			 <img src = 'images/Mexique.png' id='MEXIQUE' onclick = 'setAnswer()'> \
			 <img src = 'images/Guatemala.png' id='GUATEMALA' onclick = 'setAnswer()'> \
			 <img src = 'images/Belize.png' id='BELIZE' onclick = 'setAnswer()'> \
 			 <img src = 'images/Honduras.png' id='HONDURAS' onclick = 'setAnswer()'> \
 			 <img src = 'images/El Salvador.png' id='EL-SALVADOR' onclick = 'setAnswer()'> \
 			 <img src = 'images/Nicaragua.png' id='NICARAGUA' onclick = 'setAnswer()'> \
			 <img src = 'images/Costa Rica.png' id='COSTA-RICA' onclick = 'setAnswer()'> \
			 <img src = 'images/Panama.png' id='PANAMA' onclick = 'setAnswer()'> \
			 <img src = 'images/Cuba.png' id='CUBA' onclick = 'setAnswer()'> \
			 <img src = 'images/Bahamas.png' id='BAHAMAS' onclick = 'setAnswer()'> \
			 <div id='carteCaraibes'> \
			 <img src = 'images/Jamaique.png' id='JAMAÏQUE' onclick = 'setAnswer()'> \
		 	 <img src = 'images/Haïti.png' id='HAÏTI' onclick = 'setAnswer()'> \
			 <img src = 'images/République Dominicaine.png' id='RÉPUBLIQUE-DOMINICAINE' onclick = 'setAnswer()'> \
			 <img src = 'images/Porto Rico.png' id='PORTO-RICO' onclick = 'setAnswer()'> \
			 <img src = 'images/Trinidad et Tobago.png' id='TRINITÉ-ET-TOBAGO' onclick = 'setAnswer()'> \
			 <img src = 'images/Barbados.png' id='BARBADE' onclick = 'setAnswer()'> \
			 <img src = 'images/KittsetNieve .png' id='SAINT-KITTS-ET-NEVIS' onclick = 'setAnswer()'> \
			 <img src = 'images/Saint Vincent.png' id='SAINT-VINCENT-ET-LES-GRENADINES' onclick = 'setAnswer()'> \
			 <img src = 'images/AntiguaEtBarbuda.png' id='ANTIGUA-ET-BARBUDA' onclick = 'setAnswer()'> \
		 	 <img src = 'images/St Lucie.png' id='SAINTE-LUCIE' onclick = 'setAnswer()'> \
			 <img src = 'images/Dominique.png' id='DOMINIQUE' onclick = 'setAnswer()'> \
			 </div>"
//Le reste des listes ne sont pas fonctionnelle et sont a venire
var ameriqueSudNoms = ["ARGENTINE","BOLIVIE","BRÉSIL","CHILI","COLOMBIE","ECUADOR","GUYANA","PARAGUAY","PEROU","SURINAME","URUGUAY","VENEZUELA"];
var carteAmeriqueSud = "<img src = 'images/Argetine.png' id='ARGENTINE' onclick = 'setAnswer()'> \
		       	<img src = 'images/Bolivie.png' id='BOLIVIE' onclick = 'setAnswer()'> \
			<img src = 'images/Brézil.png' id='BRÉSIL' onclick = 'setAnswer()'> \
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
// Déclaration des variables pour les cartes et les noms des pays
var carteEurope; // Carte de l'Europe
var asieNoms; // Noms des pays d'Asie
var carteAsie; // Carte de l'Asie
var oceanieNoms; // Noms des pays d'Océanie
var carteOceanie; // Carte de l'Océanie

// Initialisation des vies, nom du pays, réponse, score et continent
var lives = 3; // Nombre de vies du joueur
var paysNom; // Nom du pays à deviner
var answer; // Réponse donnée par le joueur
var score = 0; // Score du joueur
var continent; // Continent sélectionné

// Fonction pour définir le continent sélectionné
function setContinent() {
	continent = event.target.value; // Récupération de la valeur du continent sélectionné
	switch (continent) {
	  case "ameriqueNord":
		  tblCountries = ameriqueNordNoms; // Assignation des noms de pays d'Amérique du Nord
		  carteAfficher = carteAmeriqueNord; // Assignation de la carte d'Amérique du Nord
		  break;
	  case "ameriqueSud":
		  tblCountries = ameriqueSudNoms; // Assignation des noms de pays d'Amérique du Sud
		  carteAfficher = carteAmeriqueSud; // Assignation de la carte d'Amérique du Sud
		  break;
	  case "afrique":
		  tblCountries = afriqueNoms; // Assignation des noms de pays d'Afrique
		  carteAfficher = carteAfrique; // Assignation de la carte d'Afrique
		  break;
	  case "europe":
		  tblCountries = europeNoms; // Assignation des noms de pays d'Europe
		  carteAfficher = carteEurope; // Assignation de la carte d'Europe
		  break;
	  case "asie":
		  tblCountries = asieNoms; // Assignation des noms de pays d'Asie
		  carteAfficher = carteAsie; // Assignation de la carte d'Asie
		  break;
	  case "oceanie":
		  tblCountries = oceanieNoms; // Assignation des noms de pays d'Océanie
		  carteAfficher = carteOceanie; // Assignation de la carte d'Océanie
  }
}

// Fonction pour afficher un nom de pays aléatoire
function affichePaysNom() {
  paysNom = tblCountries[Math.floor(Math.random()*tblCountries.length)]; // Sélection aléatoire d'un pays
}

// Fonction pour définir la réponse donnée par le joueur
function setAnswer() {
	answer = event.target.id; // Récupération de l'identifiant de l'élément cliqué
}

// Fonction pour vérifier la réponse du joueur
function verifyAnswer() {
  if (answer == paysNom) { // Vérification si la réponse est correcte
    score = score + 500; // Ajout de points au score
  } else {
    lives--; // Décrémentation des vies si la réponse est incorrecte
  }
  if (lives == 0) { // Vérification si le joueur n'a plus de vies
	  endGame(); // Appel de la fonction pour terminer le jeu
  } else {
	  jouerPointeur(); // Appel de la fonction pour continuer le jeu
  }
  
  answer = ""; // Réinitialisation de la réponse
}

// Fonction pour terminer le jeu
function endGame() {
	var affiche = document.getElementById("jeux"); // Récupération de l'élément pour afficher le score
	affiche.innerHTML = "<h2>Votre score est:<br> " + score + "</h2><br> \
			     <input id = 'btnjouer' type='button' value='Rejouer' onclick='reJouerPointeur()'> \
			     <div class = 'emptySpace'></div>"; // Affichage du score et bouton pour rejouer
}

// Fonction pour afficher le nom du pays et les informations du jeu
function jouerPointeur() {
  var affiche = document.getElementById("jeux"); // Récupération de l'élément pour afficher le jeu
    affichePaysNom(); // Appel de la fonction pour afficher un nom de pays
    affiche.innerHTML = "<h2>"+paysNom+"</h2><br><h3>Score: "+score+"   Vies: "+lives+"</h3><input type='button' value='Vérifier Réponse' onclick='verifyAnswer()'><br><div class = 'grid-container'>"+carteAfficher+"</div>"; // Affichage du pays, score et vies
}

// Fonction pour recommencer le jeu
function reJouerPointeur() {
	lives = 3; // Réinitialisation des vies
	score = 0; // Réinitialisation du score
  var affiche = document.getElementById("jeux"); // Récupération de l'élément pour afficher le jeu
    affichePaysNom(); // Appel de la fonction pour afficher un nom de pays
    affiche.innerHTML = "<h2>"+paysNom+"</h2><br><h3>Score: "+score+"   Vies: "+lives+"</h3><input type='button' value='Vérifier Réponse' onclick='verifyAnswer()'><br><div class = 'grid-container'>"+carteAfficher+"</div>"; // Affichage du pays, score et vies
}
