//Tableau qui contient tous les pays du monde et leurs capitales 
var tblPays = [
  ["AFGHANISTAN", "KABOUL"], ["AFRIQUE DU SUD", "PRETORIA"], ["ALBANIE", "TIRANA"], 
  ["ALGÉRIE", "ALGER"], ["ALLEMAGNE", "BERLIN"], ["ANDORRE", "ANDORRE-LA-VIEILLE"], 
  ["ANGOLA", "LUANDA"], ["ANTIGUA-ET-BARBUDA", "SAINT JOHN'S"], ["ARABIE SAOUDITE", "RIYAD"], 
  ["ARGENTINE", "BUENOS AIRES"], ["ARMÉNIE", "EREVAN"], ["AUSTRALIE", "CANBERRA"], 
  ["AUTRICHE", "VIENNE"], ["AZERBAÏDJAN", "BAKOU"], ["BAHAMAS", "NASSAU"], 
  ["BAHREÏN", "MANAMA"], ["BANGLADESH", "DACCA"], ["BARBADE", "BRIDGETOWN"], 
  ["BÉLARUS", "MINSK"], ["BELGIQUE", "BRUXELLES"], ["BELIZE", "BELMOPAN"], 
  ["BÉNIN", "PORTO-NOVO"], ["BHOUTAN", "THIMPHOU"], ["BOLIVIE", "SUCRE"], 
  ["BOSNIE-HERZÉGOVINE", "SARAJEVO"], ["BOTSWANA", "GABORONE"], ["BRÉSIL", "BRASILIA"], 
  ["BRUNEI", "BANDAR SERI BEGAWAN"], ["BULGARIE", "SOFIA"], ["BURKINA FASO", "OUAGADOUGOU"], 
  ["BURUNDI", "GITEGA"], ["CAMBODGE", "PHNOM PENH"], ["CAMEROUN", "YAOUNDÉ"], 
  ["CANADA", "OTTAWA"], ["CAP-VERT", "PRAIA"], ["CHILI", "SANTIAGO"], 
  ["CHINE", "PÉKIN"], ["CHYPRE", "NICOSIE"], ["COLOMBIE", "BOGOTA"], 
  ["COMORES", "MORONI"], ["CONGO (RÉPUBLIQUE)", "BRAZZAVILLE"], 
  ["CONGO (RÉPUBLIQUE DÉMOCRATIQUE)", "KINSHASA"], ["CORÉE DU NORD", "PYONGYANG"], 
  ["CORÉE DU SUD", "SÉOUL"], ["COSTA RICA", "SAN JOSÉ"], ["CÔTE D'IVOIRE", "YAMOUSSOUKRO"], 
  ["CROATIE", "ZAGREB"], ["CUBA", "LA HAVANE"], ["DANEMARK", "COPENHAGUE"], 
  ["DJIBOUTI", "DJIBOUTI"], ["DOMINIQUE", "ROSEAU"], ["ÉGYPTE", "LE CAIRE"], 
  ["ÉMIRATS ARABES UNIS", "ABOU DHABI"], ["ÉQUATEUR", "QUITO"], ["ÉRYTHRÉE", "ASMARA"], 
  ["ESPAGNE", "MADRID"], ["ESWATINI", "MBABANE"], ["ESTONIE", "TALLINN"], 
  ["ÉTATS-UNIS", "WASHINGTON, D.C."], ["ÉTHIOPIE", "ADDIS-ABEBA"], ["FIDJI", "SUVA"], 
  ["FINLANDE", "HELSINKI"], ["FRANCE", "PARIS"], ["GABON", "LIBREVILLE"], 
  ["GAMBIE", "BANJUL"], ["GÉORGIE", "TBILISSI"], ["GHANA", "ACCRA"], 
  ["GRÈCE", "ATHÈNES"], ["GRENADE", "SAINT GEORGE'S"], ["GUATEMALA", "GUATEMALA"], 
  ["GUINÉE", "CONAKRY"], ["GUINÉE-BISSAU", "BISSAU"], ["GUINÉE ÉQUATORIALE", "MALABO"], 
  ["GUYANA", "GEORGETOWN"], ["HAÏTI", "PORT-AU-PRINCE"], ["HONDURAS", "TEGUCIGALPA"], 
  ["HONGRIE", "BUDAPEST"], ["ÎLES MARSHALL", "MAJURO"], ["ÎLES SALOMON", "HONIARA"], 
  ["INDE", "NEW DELHI"], ["INDONÉSIE", "JAKARTA"], ["IRAK", "BAGDAD"], 
  ["IRAN", "TÉHÉRAN"], ["IRLANDE", "DUBLIN"], ["ISLANDE", "REYKJAVIK"], 
  ["ISRAËL", "JÉRUSALEM"], ["ITALIE", "ROME"], ["JAMAÏQUE", "KINGSTON"], 
  ["JAPON", "TOKYO"], ["JORDANIE", "AMMAN"], ["KAZAKHSTAN", "NOURSOULTAN"], 
  ["KENYA", "NAIROBI"], ["KIRGHIZISTAN", "BICHKEK"], ["KIRIBATI", "TARAWA-SUD"], 
  ["KOWEÏT", "KOWEÏT"], ["LAOS", "VIENTIANE"], ["LESOTHO", "MASERU"], 
  ["LETTONIE", "RIGA"], ["LIBAN", "BEYROUTH"], ["LIBÉRIA", "MONROVIA"], 
  ["LIBYE", "TRIPOLI"], ["LITUANIE", "VILNIUS"], ["LUXEMBOURG", "LUXEMBOURG"], 
  ["MADAGASCAR", "ANTANANARIVO"], ["MALAISIE", "KUALA LUMPUR"], ["MALAWI", "LILONGWE"], 
  ["MALDIVES", "MALÉ"], ["MALI", "BAMAKO"], ["MALTE", "LA VALETTE"], 
  ["MAROC", "RABAT"], ["MAURICE", "PORT-LOUIS"], ["MAURITANIE", "NOUAKCHOTT"], 
  ["MEXIQUE", "MEXICO"], ["MICRONÉSIE", "PALIKIR"], ["MOLDAVIE", "CHISINAU"], 
  ["MONACO", "MONACO"], ["MONGOLIE", "OULAN-BATOR"], ["MONTÉNÉGRO", "PODGORICA"], 
  ["MOZAMBIQUE", "MAPUTO"], ["NAMIBIE", "WINDHOEK"], ["NAURU", "YAREN"], 
  ["NÉPAL", "KATHMANDOU"], ["NICARAGUA", "MANAGUA"], ["NIGER", "NIAMEY"], 
  ["NIGERIA", "ABUJA"], ["NORVÈGE", "OSLO"], ["NOUVELLE-ZÉLANDE", "WELLINGTON"], 
  ["OMAN", "MASCATE"], ["OUGANDA", "KAMPALA"], ["OUZBÉKISTAN", "TACHKENT"], 
  ["PAKISTAN", "ISLAMABAD"], ["PALAOS", "NGERULMUD"], ["PALESTINE", "RAMALLAH"], 
  ["PANAMA", "PANAMA"], ["PAPOUASIE-NOUVELLE-GUINÉE", "PORT MORESBY"], 
  ["PARAGUAY", "ASUNCIÓN"], ["PAYS-BAS", "AMSTERDAM"], ["PÉROU", "LIMA"], 
  ["PHILIPPINES", "MANILLE"], ["POLOGNE", "VARSOVIE"], ["PORTUGAL", "LISBONNE"], 
  ["QATAR", "DOHA"], ["RÉPUBLIQUE CENTRAFRICAINE", "BANGUI"], 
  ["RÉPUBLIQUE DOMINICAINE", "SAINT-DOMINGUE"], ["RÉPUBLIQUE TCHÈQUE", "PRAGUE"], 
  ["ROUMANIE", "BUCAREST"], ["ROYAUME-UNI", "LONDRES"], ["RUSSIE", "MOSCOU"], 
  ["RWANDA", "KIGALI"], ["SAINT-KITTS-ET-NEVIS", "BASSETERRE"], 
  ["SAINT-MARIN", "SAINT-MARIN"], ["SAINT-VINCENT-ET-LES-GRENADINES", "KINGSTOWN"], 
  ["SAINTE-LUCIE", "CASTRIES"], ["SALVADOR", "SAN SALVADOR"], ["SAMOA", "APIA"], 
  ["SAO TOMÉ-ET-PRINCIPE", "SAO TOMÉ"], ["SÉNÉGAL", "DAKAR"], ["SERBIE", "BELGRADE"], 
  ["SEYCHELLES", "VICTORIA"], ["SIERRA LEONE", "FREETOWN"], ["SINGAPOUR", "SINGAPOUR"], 
  ["SLOVAQUIE", "BRATISLAVA"], ["SLOVÉNIE", "LJUBLJANA"], ["SOMALIE", "MOGADISCIO"], 
  ["SOUDAN", "KHARTOUM"], ["SOUDAN DU SUD", "DJOUBA"], ["SRI LANKA", "SRI JAYAWARDENEPURA KOTTE"], 
  ["SUÈDE", "STOCKHOLM"], ["SUISSE", "BERNE"], ["SURINAME", "PARAMARIBO"], 
  ["SYRIE", "DAMAS"], ["TADJIKISTAN", "DOUCHANBÉ"], ["TANZANIE", "DODOMA"], 
  ["TCHAD", "N'DJAMENA"], ["THAÏLANDE", "BANGKOK"], ["TIMOR-LESTE", "DILI"], 
  ["TOGO", "LOMÉ"], ["TONGA", "NUKU'ALOFA"], ["TRINITÉ-ET-TOBAGO", "PORT-D'ESPAGNE"], 
  ["TUNISIE", "TUNIS"], ["TURKMÉNISTAN", "ACHGABAT"], ["TURQUIE", "ANKARA"], 
  ["TUVALU", "FUNAFUTI"], ["UKRAINE", "KIEV"], ["URUGUAY", "MONTEVIDEO"], 
  ["VANUATU", "PORT-VILA"], ["VATICAN", "CITÉ DU VATICAN"], ["VENEZUELA", "CARACAS"], 
  ["VIETNAM", "HANOÏ"], ["YÉMEN", "Sanaa"], ["ZAMBIE", "LUSAKA"], ["ZIMBABWE", "HARARE"]
];

var vies = 3 // Initialise le nombre de vies à 3
var pays; // Déclare une variable pour stocker le pays sélectionné
var score = 0; // Initialise le score à 0


function genere() {
    // Génère un index aléatoire pour sélectionner un pays dans le tableau
    pays = Math.floor(Math.random() * tblPays.length);
    // Crée une question sur la capitale du pays sélectionné
    var question = "Quelle est la capitale de " + tblPays[pays][0] + " ?";

    // Affiche la question dans l'élément HTML avec l'ID 'divAffiche'
    document.getElementById("divAffiche").innerHTML = question;
}

function jouer() {
    // Crée le message HTML pour le jeu, incluant les vies, le score et les boutons
    var message = "<div id='vies'></div><div id='score'></div>\
      <div id='stop'><input type='button' value='Arrêter' onclick='arrete()'></div>\
      <div class='carte'></div>\
      <div id='divAffiche'></div>\
      <div class='emptySpace'></div>\
      <div>\
        <input type='text' id='guess'>\
        <input type='button' value='Deviner' id='devine' onclick='verifieEssaie()'>\
        <div id='erreurs'></div>\
      </div>\
      <div class='emptySpace'></div>";

    // Affiche le message dans l'élément HTML avec l'ID 'jeux'
    var affiche = document.getElementById("jeux");
    affiche.innerHTML = message;
    // Met le focus sur le champ de saisie pour deviner
    document.getElementById("guess").focus();

    // Affiche le score actuel dans l'élément HTML avec l'ID 'score'
    var affiche = document.getElementById("score");
    affiche.innerHTML = "Score : " + score;

    // Appelle la fonction pour afficher les vies restantes
    lives();
    // Génère une nouvelle question
    genere();
}

function verifieEssaie(){
  essaie = document.getElementById("guess").value.toUpperCase().trim(" "); // Récupère la valeur saisie et la formate

  //La fonction s'assure que l'essaie ne peut pas contenir du code qui pourait être ensuite efectuer
  switch(true){
    case (essaie == " "):
          message = "Entrée un pays!";
          break;
    case (essaie.includes("<")):
          message = "Entrée un pays!";
          break;
    case (essaie.includes("(")):
          message = "Entrée un pays!";
          break;
    case (essaie.includes("/")):
          message = "Entrée un pays!";
          break;
    case (essaie.includes("[")):
          message = "Entrée un pays!";
          break;
    case (essaie.includes("Var")):
          message = "Entrée un pays!";
          break;
    default:
        devine()
        break;
  }

  document.getElementById("erreurs").innerHTML = message; // Affiche le message d'erreur
  var textBox = document.getElementById("guess"); // Sélectionne le champ de saisie
  textBox.value = ""; // Réinitialise le champ de saisie
}

function devine() {
    // Vérifie si la réponse est correcte
    if (essaie == tblPays[pays][1]) {
        // Message de succès si la réponse est correcte
        message = "Bravo, vous avez réussit à deviner la capitale de " + tblPays[pays][0];
        // Augmente le score de 500 points
        score += 500;

        // Génère une nouvelle question
        genere();
    } else {
        // Diminue le nombre de vies si la réponse est incorrecte
        vies--;
        // Message d'erreur si la réponse est incorrecte
        message = "<br>Non, ce n'est pas " + essaie + ". Réessaye<br>";
    }

    // Met à jour l'affichage des vies restantes
    lives();
    // Met à jour l'affichage du score
    var affiche = document.getElementById("score");
    affiche.innerHTML = "Score : " + score;

    // Affiche le message d'erreur
    document.getElementById("erreurs").innerHTML = message;
    // Réinitialise le champ de saisie
    var textBox = document.getElementById("guess");
    textBox.value = "";
}

function lives() {
    // Récupère l'élément HTML pour afficher les vies
    var vieAffiche = document.getElementById("vies");
    // Crée le code HTML pour afficher une image de cœur, en fonction du nombre de vies
    var imageHTML = "<img class='coeur' src='https://upload.wikimedia.org/wikipedia/commons/thumb/f/f1/Heart_coraz%C3%B3n.svg/800px-Heart_coraz%C3%B3n.svg.png' style='width: " + (15 + vies * 2) + "px;'>"; // Cœurs plus petits, incréments de taille plus petits
    var vieMessage = "";

    // Vérifie si le joueur a encore des vies
    if (vies > 0) {
        // Ajoute une image de cœur pour chaque vie restante
        for (var i = 0; i < vies; i++) {
            vieMessage += imageHTML; // Ajoute l'image du cœur pour chaque vie
        }
    } else {
        // Pop up "Game Over" si le joueur n'a plus de vies
        popUp = document.createElement("div");
        popUp.id = 'gameOver';
        popUp.innerHTML = "Game Over<br>Vous avez perdu<br>Votre score est de \n<h1>" + score + "</h1><input type='button' value='Rejouer' onclick='location.reload();'></a><a href='index.html'><input type='button' value='Quitter'<a>";
        document.body.appendChild(popUp);
    }

    // Met à jour l'affichage des vies
    vieAffiche.innerHTML = "Vies: " + vieMessage;
}

function arrete() {
    // Met le nombre de vies à zéro pour arrêter le jeu
    vies = 0;
    // Met à jour l'affichage des vies
    lives();
}
