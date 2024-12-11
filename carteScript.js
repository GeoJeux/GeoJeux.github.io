var tblPays = [
  ["AFGHANISTAN", "Kaboul", "Asie", 652230], 
  ["AFRIQUE DU SUD", "Pretoria", "Afrique", 1219090], 
  ["ALBANIE", "Tirana", "Europe", 28748], 
  ["ALGÉRIE", "Alger", "Afrique", 2381741], 
  ["ALLEMAGNE", "Berlin", "Europe", 357022], 
  ["ANDORRE", "Andorre-la-Vieille", "Europe", 468], 
  ["ANGOLA", "Luanda", "Afrique", 1246700], 
  ["ANTIGUA-ET-BARBUDA", "Saint John's", "Amérique", 442], 
  ["ARABIE SAOUDITE", "Riyad", "Asie", 2149690], 
  ["ARGENTINE", "Buenos Aires", "Amérique", 2780400], 
  ["ARMÉNIE", "Erevan", "Asie", 29743], 
  ["AUSTRALIE", "Canberra", "Océanie", 7692024], 
  ["AUTRICHE", "Vienne", "Europe", 83871], 
  ["AZERBAÏDJAN", "Bakou", "Asie", 86600], 
  ["BAHAMAS", "Nassau", "Amérique", 13940], 
  ["BAHREÏN", "Manama", "Asie", 765], 
  ["BANGLADESH", "Dacca", "Asie", 147570], 
  ["BARBADE", "Bridgetown", "Amérique", 430], 
  ["BÉLARUS", "Minsk", "Europe", 207600], 
  ["BELGIQUE", "Bruxelles", "Europe", 30528], 
  ["BELIZE", "Belmopan", "Amérique", 22966], 
  ["BÉNIN", "Porto-Novo", "Afrique", 112622], 
  ["BHOUTAN", "Thimphou", "Asie", 38394], 
  ["BOLIVIE", "Sucre", "Amérique", 1098581], 
  ["BOSNIE-HERZÉGOVINE", "Sarajevo", "Europe", 51197], 
  ["BOTSWANA", "Gaborone", "Afrique", 581730], 
  ["BRÉSIL", "Brasilia", "Amérique", 8515767], 
  ["BRUNEI", "Bandar Seri Begawan", "Asie", 5765], 
  ["BULGARIE", "Sofia", "Europe", 110994], 
  ["BURKINA FASO", "Ouagadougou", "Afrique", 272967], 
  ["BURUNDI", "Gitega", "Afrique", 27834], 
  ["CAMBODGE", "Phnom Penh", "Asie", 181035], 
  ["CAMEROUN", "Yaoundé", "Afrique", 475442], 
  ["CANADA", "Ottawa", "Amérique", 9984670], 
  ["CAP-VERT", "Praia", "Afrique", 4033], 
  ["CHILI", "Santiago", "Amérique", 756102], 
  ["CHINE", "Pékin", "Asie", 9596961], 
  ["CHYPRE", "Nicosie", "Europe", 9251], 
  ["COLOMBIE", "Bogota", "Amérique", 1141748], 
  ["COMORES", "Moroni", "Afrique", 2235], 
  ["CONGO (RÉPUBLIQUE)", "Brazzaville", "Afrique", 342000], 
  ["CONGO (RÉPUBLIQUE DÉMOCRATIQUE)", "Kinshasa", "Afrique", 2344858], 
  ["CORÉE DU NORD", "Pyongyang", "Asie", 120538], 
  ["CORÉE DU SUD", "Séoul", "Asie", 100210], 
  ["COSTA RICA", "San José", "Amérique", 51100], 
  ["CÔTE D'IVOIRE", "Yamoussoukro", "Afrique", 322463], 
  ["CROATIE", "Zagreb", "Europe", 56594], 
  ["CUBA", "La Havane", "Amérique", 109884], 
  ["DANEMARK", "Copenhague", "Europe", 42933], 
  ["DJIBOUTI", "Djibouti", "Afrique", 23200], 
  ["DOMINIQUE", "Roseau", "Amérique", 751], 
  ["ÉGYPTE", "Le Caire", "Afrique", 1002450], 
  ["ÉMIRATS ARABES UNIS", "Abou Dhabi", "Asie", 83600], 
  ["ÉQUATEUR", "Quito", "Amérique", 276841], 
  ["ÉRYTHRÉE", "Asmara", "Afrique", 117600], 
  ["ESPAGNE", "Madrid", "Europe", 505990], 
  ["ESWATINI", "Mbabane", "Afrique", 17364], 
  ["ESTONIE", "Tallinn", "Europe", 45228], 
  ["ÉTATS-UNIS", "Washington, D.C.", "Amérique", 9833520], 
  ["ÉTHIOPIE", "Addis-Abeba", "Afrique", 1104300], 
  ["FIDJI", "Suva", "Océanie", 18274], 
  ["FINLANDE", "Helsinki", "Europe", 338145], 
  ["FRANCE", "Paris", "Europe", 551695], 
  ["GABON", "Libreville", "Afrique", 267668], 
  ["GAMBIE", "Banjul", "Afrique", 11295], 
  ["GÉORGIE", "Tbilissi", "Asie", 69700], 
  ["GHANA", "Accra", "Afrique", 238533], 
  ["GRÈCE", "Athènes", "Europe", 131957], 
  ["GRENADE", "Saint George's", "Amérique", 344], 
  ["GUATEMALA", "Guatemala", "Amérique", 108889], 
  ["GUINÉE", "Conakry", "Afrique", 245857], 
  ["GUINÉE-BISSAU", "Bissau", "Afrique", 36125], 
  ["GUINÉE ÉQUATORIALE", "Malabo", "Afrique", 28051], 
  ["GUYANA", "Georgetown", "Amérique", 214969], 
  ["HAÏTI", "Port-au-Prince", "Amérique", 27750], 
  ["HONDURAS", "Tegucigalpa", "Amérique", 112492], 
  ["HONGRIE", "Budapest", "Europe", 93028], 
  ["ÎLES MARSHALL", "Majuro", "Océanie", 181], 
  ["ÎLES SALOMON", "Honiara", "Océanie", 28896], 
  ["INDE", "New Delhi", "Asie", 3287263], 
  ["INDONÉSIE", "Jakarta", "Asie", 1904569], 
  ["IRAK", "Bagdad", "Asie", 438317], 
  ["IRAN", "Téhéran", "Asie", 1648195], 
  ["IRLANDE", "Dublin", "Europe", 70273], 
  ["ISLANDE", "Reykjavik", "Europe", 103000], 
  ["ISRAËL", "Jérusalem", "Asie", 20770], 
  ["ITALIE", "Rome", "Europe", 301336], 
  ["JAMAÏQUE", "Kingston", "Amérique", 10991], 
  ["JAPON", "Tokyo", "Asie", 377975], 
  ["JORDANIE", "Amman", "Asie", 89342], 
  ["KAZAKHSTAN", "Noursoultan", "Asie", 2724900], 
  ["KENYA", "Nairobi", "Afrique", 580367], 
  ["KIRGHIZISTAN", "Bichkek", "Asie", 199951], 
  ["KIRIBATI", "Tarawa-Sud", "Océanie", 811], 
  ["KOWEÏT", "Koweït", "Asie", 17818], 
  ["LAOS", "Vientiane", "Asie", 236800], 
  ["LESOTHO", "Maseru", "Afrique", 30355], 
  ["LETTONIE", "Riga", "Europe", 64559], 
  ["LIBAN", "Beyrouth", "Asie", 10452], 
  ["LIBÉRIA", "Monrovia", "Afrique", 111369], 
  ["LIBYE", "Tripoli", "Afrique", 1759540], 
  ["LITUANIE", "Vilnius", "Europe", 65300], 
  ["LUXEMBOURG", "Luxembourg", "Europe", 2586], 
  ["MADAGASCAR", "Antananarivo", "Afrique", 587041], 
  ["MALAISIE", "Kuala Lumpur", "Asie", 330803], 
  ["MALAWI", "Lilongwe", "Afrique", 118484], 
  ["MALDIVES", "Malé", "Asie", 298], 
  ["MALI", "Bamako", "Afrique", 1240192], 
  ["MALTE", "La Valette", "Europe", 316], 
  ["MAROC", "Rabat", "Afrique", 446550], 
  ["MAURICE", "Port-Louis", "Afrique", 2040], 
  ["MAURITANIE", "Nouakchott", "Afrique", 1030700], 
  ["MEXIQUE", "Mexico", "Amérique", 1964375], 
  ["MICRONÉSIE", "Palikir", "Océanie", 702], 
  ["MOLDAVIE", "Chisinau", "Europe", 33851], 
  ["MONACO", "Monaco", "Europe", 2], 
  ["MONGOLIE", "Oulan-Bator", "Asie", 1564110], 
  ["MONTÉNÉGRO", "Podgorica", "Europe", 13812], 
  ["MOZAMBIQUE", "Maputo", "Afrique", 801590], 
  ["NAMIBIE", "Windhoek", "Afrique", 825615], 
  ["NAURU", "Yaren", "Océanie", 21], 
  ["NÉPAL", "Katmandou", "Asie", 147181], 
  ["NICARAGUA", "Managua", "Amérique", 130375], 
  ["NIGER", "Niamey", "Afrique", 1267000], 
  ["NIGERIA", "Abuja", "Afrique", 923768], 
  ["NORVÈGE", "Oslo", "Europe", 385207], 
  ["NOUVELLE-ZÉLANDE", "Wellington", "Océanie", 268838], 
  ["OMAN", "Mascate", "Asie", 309500], 
  ["OUGANDA", "Kampala", "Afrique", 241038], 
  ["OUZBÉKISTAN", "Tachkent", "Asie", 447400], 
  ["PAKISTAN", "Islamabad", "Asie", 881912], 
  ["PALAOS", "Ngerulmud", "Océanie", 459], 
  ["PALESTINE", "Ramallah", "Asie", 6220], 
  ["PANAMA", "Panama", "Amérique", 75417], 
  ["PAPOUASIE-NOUVELLE-GUINÉE", "Port Moresby", "Océanie", 462840], 
  ["PARAGUAY", "Asunción", "Amérique", 406752], 
  ["PAYS-BAS", "Amsterdam", "Europe", 41543], 
  ["PÉROU", "Lima", "Amérique", 1285216], 
  ["PHILIPPINES", "Manille", "Asie", 300000], 
  ["POLOGNE", "Varsovie", "Europe", 312696], 
  ["PORTUGAL", "Lisbonne", "Europe", 92225], 
  ["QATAR", "Doha", "Asie", 11586], 
  ["RÉPUBLIQUE CENTRAFRICAINE", "Bangui", "Afrique", 622984], 
  ["RÉPUBLIQUE DOMINICAINE", "Saint-Domingue", "Amérique", 48671], 
  ["RÉPUBLIQUE TCHÈQUE", "Prague", "Europe", 78867], 
  ["ROUMANIE", "Bucarest", "Europe", 238397], 
  ["ROYAUME-UNI", "Londres", "Europe", 243610], 
  ["RUSSIE", "Moscou", "Europe/Asie", 17098246], 
  ["RWANDA", "Kigali", "Afrique", 26338], 
  ["SAINT-KITTS-ET-NEVIS", "Basseterre", "Amérique", 261], 
  ["SAINT-MARIN", "Saint-Marin", "Europe", 61], 
  ["SAINT-VINCENT-ET-LES-GRENADINES", "Kingstown", "Amérique", 389], 
  ["SAINTE-LUCIE", "Castries", "Amérique", 616], 
  ["SALVADOR", "San Salvador", "Amérique", 21041], 
  ["SAMOA", "Apia", "Océanie", 2831], 
  ["SAO TOMÉ-ET-PRINCIPE", "Sao Tomé", "Afrique", 964], 
  ["SÉNÉGAL", "Dakar", "Afrique", 196722], 
  ["SERBIE", "Belgrade", "Europe", 88361], 
  ["SEYCHELLES", "Victoria", "Afrique", 455], 
  ["SINGAPOUR", "Singapour", "Asie", 718], 
  ["SOMALIE", "Mogadiscio", "Afrique", 637657], 
  ["SRI LANKA", "Colombo", "Asie", 65610], 
  ["SUD-SUDAN", "Djouba", "Afrique", 619745], 
  ["SOMALIE", "Mogadiscio", "Afrique", 637657], 
  ["SUÈDE", "Stockholm", "Europe", 450295], 
  ["SUISSE", "Berne", "Europe", 41284], 
  ["SURINAME", "Paramaribo", "Amérique", 163820], 
  ["SÃO TOMÉ-ET-PRINCIPE", "Sao Tomé", "Afrique", 964], 
  ["SÉNÉGAL", "Dakar", "Afrique", 196722], 
  ["SINGAPOUR", "Singapour", "Asie", 718], 
  ["SOMALIE", "Mogadiscio", "Afrique", 637657], 
  ["SRI LANKA", "Colombo", "Asie", 65610], 
  ["SUD-SUDAN", "Djouba", "Afrique", 619745], 
  ["SOMALIE", "Mogadiscio", "Afrique", 637657], 
  ["SUÈDE", "Stockholm", "Europe", 450295], 
  ["SUISSE", "Berne", "Europe", 41284], 
  ["SYRIE", "Damas", "Asie", 185180], 
  ["TAÏWAN", "Taipei", "Asie", 36193], 
  ["TADJIKISTAN", "Douchanbé", "Asie", 143100], 
  ["TANZANIE", "Dodoma", "Afrique", 945087], 
  ["TCHAD", "N'Djaména", "Afrique", 1284000], 
  ["THAÏLANDE", "Bangkok", "Asie", 513120], 
  ["TIMORES-ORIENTAL", "Dili", "Asie", 14874], 
  ["TOGO", "Lomé", "Afrique", 56785], 
  ["TONGA", "Nuku'alofa", "Océanie", 747], 
  ["TRINITÉ-ET-TOBAGO", "Port-d'Espagne", "Amérique", 5130], 
  ["TUNISIE", "Tunis", "Afrique", 163610], 
  ["TURKMÉNISTAN", "Achgabat", "Asie", 488100], 
  ["TURQUIE", "Ankara", "Asie/Europe", 783356], 
  ["TUVALU", "Funafuti", "Océanie", 26], 
  ["UKRAINE", "Kyiv", "Europe", 603550], 
  ["URUGUAY", "Montevideo", "Amérique", 176215], 
  ["VANUATU", "Port-Vila", "Océanie", 12189], 
  ["VENEZUELA", "Caracas", "Amérique", 912050], 
  ["VICHE", "Victoria", "Océanie", 455], 
  ["VIETNAM", "Hanoï", "Asie", 331210], 
  ["YÉMEN", "Sanaa", "Asie", 527968], 
  ["ZAMBIE", "Lusaka", "Afrique", 752612], 
  ["ZIMBABWE", "Harare", "Afrique", 390757]
];

var continent;
var niveau = 0;
var vies = 3
var pays;
var nbIndice = 0;
var score = 0;
var max;
var typeJeux;

function genere() {
  pays = Math.floor(Math.random() * tblPays.length);
  
  if(continent != null){
    while (tblPays[pays][2] != continent){
           pays = Math.floor(Math.random() * tblPays.length); 
        };
  }

 nbIndice = 0;
  var carte = document.querySelector(".carte");
  carte.innerHTML = tblPays[pays][typeJeux]; 
}
  
function jouer(){
  var message = "<div id='topLine'><div id='vies'></div><div id='score'></div>\
    <div id='stop'><input type='button' value='Arrêter' onclick='arrete()'></div></div>\
    <div class='carte'></div>\
    <div class='emptySpace'></div>\
    <div>\
      <input type='text' id='guess'>\
      <input type='button' value='Deviner' id='devine' onclick='devine()'>\
      <div id='erreurs'></div>\
      <input type='button' value='Indice' id='indice' onmouseover='indice()' onmouseleave='popup'>\
      <div id='indice'  class='popup'><span class='popuptext' id='myPopup'></span></div>\
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
  if (tblPays[pays][0].includes(essaie)){
    message = "Bravo, vous avez réussit à deviner le bon pays";
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
    popUp.innerHTML = "Game Over<br>Vous avez perdu<br>Votre score est de <br><h1>" + score + "<h1><input type='button' value='Rejouer' onclick='location.reload();'></a><a href='index.html'><input type='button' value='Quitter'<a>";
    document.body.appendChild(popUp);
  }
  vieAffiche.innerHTML = "Vies: " + vieMessage;
}

function indice(){
  var indice = document.getElementById("myPopup");

  if (nbIndice == 0){
    indice.innerHTML = tblPays[pays][4];
  }else if(nbIndice == 1){
    indice.innerHTML = tblPays[pays][5];
  } else if (nbIndice == 2){
    indice.innerHTML = tblPays[pays][6];
  } else if (nbIndice == 3){
    indice.innerHTML = "<br>Vous n'avez plus le droit aux indices.<br>"
  }
  nbIndice += 0.5
  popup()
}

function arrete(){
  vies = 0;
  lives()
}


function popup() {
  var popup = document.getElementById("myPopup");
  popup.classList.toggle("show");
}

function nord(){
  continent = "nord";
  document.getElementById("nord").style.backgroundColor = "rgb(24, 114, 139)";
  document.getElementById("sud").style.backgroundColor = "transparent";
  document.getElementById("europe").style.backgroundColor = "transparent";
  document.getElementById("asie").style.backgroundColor = "transparent";
  document.getElementById("afrique").style.backgroundColor = "transparent";
  document.getElementById("oceanie").style.backgroundColor = "transparent";
}

function sud(){
  continent = "sud";
  document.getElementById("nord").style.backgroundColor = "transparent";
  document.getElementById("sud").style.backgroundColor = "rgb(24, 114, 139)";
  document.getElementById("europe").style.backgroundColor = "transparent";
  document.getElementById("asie").style.backgroundColor = "transparent";
  document.getElementById("afrique").style.backgroundColor = "transparent";
  document.getElementById("oceanie").style.backgroundColor = "transparent";
}

function afrique(){
  continent = "afrique";
  document.getElementById("nord").style.backgroundColor = "transparent";
  document.getElementById("sud").style.backgroundColor = "transparent";
  document.getElementById("europe").style.backgroundColor = "transparent";
  document.getElementById("asie").style.backgroundColor = "transparent";
  document.getElementById("afrique").style.backgroundColor = "rgb(24, 114, 139)";
  document.getElementById("oceanie").style.backgroundColor = "transparent";
}

function europe(){
  continent = "europe";
  document.getElementById("nord").style.backgroundColor = "transparent";
  document.getElementById("sud").style.backgroundColor = "transparent";
  document.getElementById("europe").style.backgroundColor = "rgb(24, 114, 139)";
  document.getElementById("asie").style.backgroundColor = "transparent";
  document.getElementById("afrique").style.backgroundColor = "transparent";
  document.getElementById("oceanie").style.backgroundColor = "transparent";
}

function asie(){
  continent = "asie";
  document.getElementById("nord").style.backgroundColor = "transparent";
  document.getElementById("sud").style.backgroundColor = "transparent";
  document.getElementById("europe").style.backgroundColor = "transparent";
  document.getElementById("asie").style.backgroundColor = " rgb(24, 114, 139)";
  document.getElementById("afrique").style.backgroundColor = "transparent";
  document.getElementById("oceanie").style.backgroundColor = "transparent";
}

function oceanie(){
  continent = "oceanie";
  document.getElementById("nord").style.backgroundColor = "transparent";
  document.getElementById("sud").style.backgroundColor = "transparent";
  document.getElementById("europe").style.backgroundColor = "transparent";
  document.getElementById("asie").style.backgroundColor = "transparent";
  document.getElementById("afrique").style.backgroundColor = "transparent";
  document.getElementById("oceanie").style.backgroundColor = "rgb(24, 114, 139)";
}


function shapes(){
  typeJeux = 3;
  document.getElementById("drapeau").style.backgroundColor = "transparent";
  document.getElementById("silhouette").style.backgroundColor = "rgb(24, 114, 139)";
}

function drapeau(){
  typeJeux = 2;
  document.getElementById("drapeau").style.backgroundColor = "rgb(24, 114, 139)";
  document.getElementById("silhouette").style.backgroundColor = "transparent";
}
