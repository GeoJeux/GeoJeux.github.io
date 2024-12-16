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

var vies = 3
var pays;
var score = 0;

function genere() {
pays = Math.floor(Math.random() * tblPays.length);
   var question = "Quelle est la capitale de " + tblPays[pays][0] + " ?";

  document.getElementById("divAffiche").innerHTML = question
}
  function jouer(){
    var message = "<div id='vies'></div><div id='score'></div>\
      <div id='stop'><input type='button' value='Arrêter' onclick='arrete()'></div>\
      <div class='carte'></div>\
       <div id = 'divAffiche'></div>\
      <div class='emptySpace'></div>\
      <div>\
        <input type='text' id='guess'>\
        <input type='button' value='Deviner' id='devine' onclick='devine()'>\
        <div id='erreurs'></div>\
      </div>\
      <div class='emptySpace'></div>"

    var affiche = document.getElementById("jeux")
    affiche.innerHTML = message;
    document.getElementById("guess").focus()

    var affiche = document.getElementById("score");
    affiche.innerHTML = "Score : " + score;

    lives();
    genere();
    }
  function devine(){
    var essaie = document.getElementById("guess").value.toUpperCase().trim(" ");
    if (essaie == tblPays[pays][1]){
      message = "Bravo, vous avez réussit à deviner la capitale de " + tblPays[pays][0] 
      score += 500;

      genere()
    } else {
      vies--
      message = "<br>Non, ce n'est pas " + essaie + ". Réessaye<br>";
    }


    lives();
    var affiche = document.getElementById("score");
    affiche.innerHTML = "Score : " + score;

    document.getElementById("erreurs").innerHTML = message
    var textBox = document.getElementById("guess")
    textBox.value = "";

  }


function lives(){
  var vieAffiche = document.getElementById("vies");
  var imageHTML = "<img class='coeur' src='https://upload.wikimedia.org/wikipedia/commons/thumb/f/f1/Heart_coraz%C3%B3n.svg/800px-Heart_coraz%C3%B3n.svg.png'>";
  var vieMessage = "";
  
  if (vies > 0){
    for (var i = 0; i < vies; i++) {
      vieMessage += imageHTML;
    }
  } else {
    popUp = document.createElement("div");
    popUp.id = 'gameOver';
    popUp.innerHTML = "Game Over<br>Vous avez perdu<br>Votre score est de \n<h1>" + score + "</h1><input type='button' value='Rejouer' onclick='location.reload();'></a><a href='index.html'><input type='button' value='Quitter'<a>";
    document.body.appendChild(popUp);
  }
  vieAffiche.innerHTML = "Vies: " + vieMessage;
}
function arrete(){
  vies = 0;
  lives()
}
