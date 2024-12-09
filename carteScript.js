var tblPays = [
  ["CANADA","nord","<img class='image' src='https://upload.wikimedia.org/wikipedia/commons/thumb/d/d9/Flag_of_Canada_%28Pantone%29.svg/1200px-Flag_of_Canada_%28Pantone%29.svg.png'>","<img class='image' src='https://st2.depositphotos.com/1635204/8325/v/450/depositphotos_83251190-stock-illustration-black-map-of-canada.jpg'>","indice1","indice2","indice3"],
  ["ÉTATS-UNIS","nord","<img class='image' src='https://upload.wikimedia.org/wikipedia/commons/thumb/a/a4/Flag_of_the_United_States.svg/1235px-Flag_of_the_United_States.svg.png'>","<img class='image' src='https://png.pngtree.com/png-vector/20220228/ourmid/pngtree-usa-map-black-silhouette-state-map-borders-vector-png-image_29846094.png'>","indice1","indice2","indice3"],
  ["MEXIQUE","nord","<img src='https://upload.wikimedia.org/wikipedia/commons/thumb/f/fc/Flag_of_Mexico.svg/1200px-Flag_of_Mexico.svg.png' class='image'>","<img class='image' src='https://static.vecteezy.com/system/resources/previews/025/840/630/non_2x/abstract-silhouette-mexico-simple-map-free-vector.jpg'>","indice1","indice2","indice3"],
  ["FRANCE","europe","<img class='image' src='https://upload.wikimedia.org/wikipedia/commons/thumb/3/3f/Ensign_of_France.svg/langfr-225px-Ensign_of_France.svg.png'>","<img class='image' src='https://i.etsystatic.com/16237790/r/il/3c8006/5909729350/il_340x270.5909729350_oeso.jpg'>","indice1","indice2","indice3"],
  ["ALLEMAGNE","europe","<img class='image' src='https://upload.wikimedia.org/wikipedia/commons/thumb/b/ba/Flag_of_Germany.svg/langfr-225px-Flag_of_Germany.svg.png'>","<img class='image'src='https://img.freepik.com/premium-vector/germany-map-silhouette-vector-illustration_136875-7391.jpg'>","indice1","indice2","indice3"],
  ["ESPAGNE","europe","<img class='image' src='https://upload.wikimedia.org/wikipedia/commons/thumb/9/9a/Flag_of_Spain.svg/270px-Flag_of_Spain.svg.png'>","<img class='image'src='https://banner2.cleanpng.com/20180715/iut/aavet19ld.webp'>","indice1","indice2","indice3"],
  ["ROYAUME-UNI","europe","<img class='image' src='https://upload.wikimedia.org/wikipedia/commons/thumb/8/83/Flag_of_the_United_Kingdom_%283-5%29.svg/langfr-225px-Flag_of_the_United_Kingdom_%283-5%29.svg.png'>","<img class='image' src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQKWaA0KLWv48-2ZEEqQ1somktz63LReZtOtA&s'>","indice1","indice2","indice3"],
  ["POLOGNE","europe","<img class='image' src='https://upload.wikimedia.org/wikipedia/commons/thumb/1/12/Flag_of_Poland.svg/langfr-225px-Flag_of_Poland.svg.png'>","<img class='image' src='https://icon2.cleanpng.com/20180604/xkp/kisspng-poland-royalty-free-vector-map-poland-5b15083faddc99.1786462715281050237122.jpg'>","indice1","indice2","indice3"],
  ["RUSSIE","europe","<img class='image'src='https://upload.wikimedia.org/wikipedia/commons/thumb/f/f3/Flag_of_Russia.svg/langfr-225px-Flag_of_Russia.svg.png'>","<img class='image' src='https://banner2.cleanpng.com/20180403/yge/avh9ts0wl.webp'>","indice1","indice2","indice3"],
  ["PORTUGAL","europe","<img class='image' src='https://upload.wikimedia.org/wikipedia/commons/thumb/5/5c/Flag_of_Portugal.svg/1200px-Flag_of_Portugal.svg.png'>","<img class='image' src='https://banner2.cleanpng.com/20180709/yoq/aawuachjl.webp'>","indice1","indice2","indice3"],
  ["ITALIE","europe","<img class='image' src='https://upload.wikimedia.org/wikipedia/commons/thumb/d/d5/Flag_of_Italy_%28Pantone%2C_2006%29.svg/220px-Flag_of_Italy_%28Pantone%2C_2006%29.svg.png'>","<img class='image' src='https://cdn.pixabay.com/photo/2016/04/01/09/07/italy-1299168_960_720.png'>","indice1","indice2","indice3"],
  ["UKRAINE","europe","<img class='image' src='https://upload.wikimedia.org/wikipedia/commons/thumb/4/49/Flag_of_Ukraine.svg/langfr-225px-Flag_of_Ukraine.svg.png'>","<img class='image' src='https://banner2.cleanpng.com/20180624/fvw/aazl56b6r.webp'>","indice1","indice2","indice3"],
  ["TURKIYE","europe","<img class='image' src='https://upload.wikimedia.org/wikipedia/commons/thumb/b/b4/Flag_of_Turkey.svg/1200px-Flag_of_Turkey.svg.png'>","<img class='image' src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQvvlC08Y7QbE0_6qTq5A5oyvIgRxMeMz7hAg&s'>","indice1","indice2","indice3"],
  ["DANEMARK","europe","<img class='image' src='https://upload.wikimedia.org/wikipedia/commons/thumb/9/9c/Flag_of_Denmark.svg/800px-Flag_of_Denmark.svg.png'>","<img class='image' src='https://banner2.cleanpng.com/20180701/sfa/aay93qjwc.webp'>","indice1","indice2","indice3"],
  ["PAYS-BAS","europe","<img class='image' src='https://upload.wikimedia.org/wikipedia/commons/thumb/2/20/Flag_of_the_Netherlands.svg/1200px-Flag_of_the_Netherlands.svg.png'>","<img class='image' src='https://banner2.cleanpng.com/20180418/ohq/avfl1xhb5.webp'>","indice1","indice2","indice3"],
  ["FINLANDE","europe","<img class='image' src='https://upload.wikimedia.org/wikipedia/commons/thumb/b/bc/Flag_of_Finland.svg/800px-Flag_of_Finland.svg.png'>","<img class='image' src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ2kcJ73OptW70K9FMqFJNBjTTwFbp0lrl1Sw&s'>","indice1","indice2","indice3"],
  ["NORVÈGE","europe","<img class='image' src='https://upload.wikimedia.org/wikipedia/commons/thumb/d/d9/Flag_of_Norway.svg/langfr-225px-Flag_of_Norway.svg.png'>","<img class='image'src='https://banner2.cleanpng.com/20180505/www/avd8x5se8.webp'>","indice1","indice2","indice3"],
  ["SUÈDE","europe","<img class='image' src='https://upload.wikimedia.org/wikipedia/commons/thumb/4/4c/Flag_of_Sweden.svg/langfr-225px-Flag_of_Sweden.svg.png'>","<img class='image' src='https://banner2.cleanpng.com/20180429/wgw/kisspng-flag-of-sweden-map-clip-art-5ae6712ebd9fb4.9979308115250516947767.jpg'>","indice1","indice2","indice3"],
  ["CROATIE","europe","<img class='image' src='https://upload.wikimedia.org/wikipedia/commons/1/1b/Flag_of_Croatia.svg'>","<img class='image' src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRxTWWtsCcBVQl6__F_96RPBkVHie2jt4IIpw&s'>","indice1","indice2","indice3"],
  ["GRÈCE","europe","<img class='image' src='https://upload.wikimedia.org/wikipedia/commons/5/5c/Flag_of_Greece.svg'>","<img class='image' src='https://banner2.cleanpng.com/20180610/tcs/aa8t8tacp.webp'>","indice1","indice2","indice3"],
  ["SUISSE","europe","<img class='image'src='https://upload.wikimedia.org/wikipedia/commons/thumb/f/f2/Civil_Ensign_of_Switzerland.svg/langfr-225px-Civil_Ensign_of_Switzerland.svg.png'>","<img class='image' src='https://banner2.cleanpng.com/20180420/yqe/avfvreu95.webp'>","indice1","indice2","indice3"],
  ["AUTRICHE","europe","<img class='image'src='https://upload.wikimedia.org/wikipedia/commons/thumb/4/41/Flag_of_Austria.svg/1200px-Flag_of_Austria.svg.png'>","<img class='image' src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQZ32xLn-GiSv33sfaL5F1DYfRYxhaCe3csfA&s'>","indice1","indice2","indice3"],
  ["CHINE","asie","<img class='image' src='https://upload.wikimedia.org/wikipedia/commons/thumb/f/fa/Flag_of_the_People%27s_Republic_of_China.svg/2560px-Flag_of_the_People%27s_Republic_of_China.svg.png'>","<img class='image' src='https://banner2.cleanpng.com/20180705/avi/aawugylbs.webp'>","indice1","indice2","indice3"],
  ["RUSSIE","asie","<img class='image' src='https://upload.wikimedia.org/wikipedia/en/thumb/f/f3/Flag_of_Russia.svg/800px-Flag_of_Russia.svg.png'>","<img class='image'src='https://banner2.cleanpng.com/20180620/vot/kisspng-united-states-russia-map-clip-art-5b29ec63d28bc1.6831889415294741478624.jpg'>","indice1","indice2","indice3"],
  ["MONGOLIE","asie","<img class='image'src='https://upload.wikimedia.org/wikipedia/commons/thumb/4/4c/Flag_of_Mongolia.svg/800px-Flag_of_Mongolia.svg.png'>","<img class='image' src='https://banner2.cleanpng.com/20180512/baq/avcd62mwx.webp'>","indice1","indice2","indice3"],
  ["CORÉE DU SUD","asie","<img class='image' src='https://upload.wikimedia.org/wikipedia/commons/thumb/0/09/Flag_of_South_Korea.svg/langfr-225px-Flag_of_South_Korea.svg.png'>","<img class='image'src='https://banner2.cleanpng.com/20180409/ybq/avgw21hpd.webp'>","indice1","indice2","indice3"],
  ["CORÉE DU NORD","asie","<img class='image' src='https://upload.wikimedia.org/wikipedia/commons/5/51/Flag_of_North_Korea.svg'>","<img class='image' src='https://banner2.cleanpng.com/20180512/wfq/avcgkbzbk.webp'>","indice1","indice2","indice3"],
  ["INDONÉSIE","asie","<img class='image' src='https://upload.wikimedia.org/wikipedia/commons/thumb/9/9f/Flag_of_Indonesia.svg/255px-Flag_of_Indonesia.svg.png'>","<img class='image' src='https://static.vecteezy.com/system/resources/thumbnails/034/101/820/small/indonesia-solid-black-outline-border-map-of-country-area-simple-flat-illustration-indonesia-map-silhouette-world-map-design-asian-countries-southeast-asia-vector.jpg'>","indice1","indice2","indice3"],
  ["PHILIPPINES","asie","<img class='image' src='https://cdn.britannica.com/73/3473-004-6E573BFA/Flag-Philippines.jpg'>","<img class='image'src='https://banner2.cleanpng.com/20180409/avw/avg8357ja.webp'>","indice1","indice2","indice3"],
  ["INDE","asie","<img class='image' src='https://upload.wikimedia.org/wikipedia/en/thumb/4/41/Flag_of_India.svg/800px-Flag_of_India.svg.png'>","<img class='image' src='https://banner2.cleanpng.com/20180420/wze/avfahaq1k.webp'>","indice1","indice2","indice3"],
  ["PAKISTAN","asie","<img class='image' src='https://upload.wikimedia.org/wikipedia/commons/thumb/3/32/Flag_of_Pakistan.svg/1200px-Flag_of_Pakistan.svg.png'>","<img class='image' src='https://images.pond5.com/pakistan-silhouette-map-illustration-161264619_iconm.jpeg'>","indice1","indice2","indice3"],
  ["AFGHANISTAN","asie","<img class='image' src='https://upload.wikimedia.org/wikipedia/commons/thumb/c/cd/Flag_of_Afghanistan_%282013%E2%80%932021%29.svg/255px-Flag_of_Afghanistan_%282013%E2%80%932021%29.svg.png'>","<img class='image' src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTjMh8iFsDoLhxD6ET1b9PF087DIcQl2x1qxQ&s'>","indice1","indice2","indice3"],
  ["KAZAKHSTAN","asie","<img class='image' src='https://upload.wikimedia.org/wikipedia/commons/thumb/d/d3/Flag_of_Kazakhstan.svg/800px-Flag_of_Kazakhstan.svg.png'>","<img class='image' src='https://png.pngtree.com/png-vector/20220901/ourlarge/pngtree-minimalist-vector-illustration-of-kazakhstan-black-silhouette-map-of-country-area-vector-png-image_27003772.png'>","indice1","indice2","indice3"],
  ["OUZBEKISTAN","asie","<img class='image'src='https://upload.wikimedia.org/wikipedia/commons/thumb/8/84/Flag_of_Uzbekistan.svg/1200px-Flag_of_Uzbekistan.svg.png'>","<img class='image'src='https://png.pngtree.com/png-vector/20220827/ourmid/pngtree-simple-flat-vector-illustration-of-uzbekistans-country-area-in-solid-black-silhouette-map-vector-png-image_26971098.png'>","indice1","indice2","indice3"],
  ["TURKMÉNISTAN","asie","<img class='image'src='https://upload.wikimedia.org/wikipedia/commons/thumb/1/1b/Flag_of_Turkmenistan.svg/800px-Flag_of_Turkmenistan.svg.png'>","<img class='image' src='https://banner2.cleanpng.com/20181202/qww/kisspng-flag-of-turkmenistan-vector-graphics-map-illustrat-turkmenistan-svg-png-icon-free-download-466764-5c045d4c7916f9.681364211543789900496.jpg'>","indice1","indice2","indice3"],
  ["TAJIKISTAN","asie","<img class='image' src='https://upload.wikimedia.org/wikipedia/commons/thumb/d/d0/Flag_of_Tajikistan.svg/1200px-Flag_of_Tajikistan.svg.png'>","<img class='image'src='https://png.pngtree.com/png-vector/20220816/ourmid/pngtree-tajikistan-map-white-illustration-silhouette-vector-png-image_48120628.jpg'>","indice1","indice2","indice3"],
  ["KIRGHIZISTAN","asie","<img class='image' src='https://upload.wikimedia.org/wikipedia/commons/thumb/c/c7/Flag_of_Kyrgyzstan.svg/255px-Flag_of_Kyrgyzstan.svg.png'>","<img class='image' src='https://png.pngtree.com/png-vector/20220901/ourmid/pngtree-simple-vector-illustration-of-kyrgyzstan-featuring-solid-black-silhouette-map-and-country-area-vector-png-image_27003774.png'>","indice1","indice2","indice3"],
  ["LIBAN","asie","<img class='image' src='https://upload.wikimedia.org/wikipedia/commons/thumb/5/59/Flag_of_Lebanon.svg/1200px-Flag_of_Lebanon.svg.png'>","<img class='image' src='https://png.pngtree.com/png-vector/20220816/ourmid/pngtree-lebanon-map-geography-sign-and-vector-png-image_48120562.jpg'>","indice1","indice2","indice3"],
  ["ISRAËL","asie","<img class='image' src='https://upload.wikimedia.org/wikipedia/commons/thumb/d/d4/Flag_of_Israel.svg/1200px-Flag_of_Israel.svg.png'>","<img class='image' src='https://banner2.cleanpng.com/20180607/aic/aa83rsntk.webp'>","indice1","indice2","indice3"],
  ["GÉORGIE","asie","<img class='image' src='https://upload.wikimedia.org/wikipedia/commons/thumb/0/0f/Flag_of_Georgia.svg/800px-Flag_of_Georgia.svg.png'>","<img class='image' src='https://banner2.cleanpng.com/20180420/eoq/kisspng-georgia-royalty-free-vector-map-blank-vector-5ada07dda2dc79.8728142715242383016671.jpg'>","indice1","indice2","indice3"],
  ["ARABIE SAOUDITE","asie","<img class='image' src='https://upload.wikimedia.org/wikipedia/commons/thumb/0/0d/Flag_of_Saudi_Arabia.svg/1200px-Flag_of_Saudi_Arabia.svg.png'>","<img class='image'src='https://banner2.cleanpng.com/20180604/gro/aa9ohrqvb.webp'>","indice1","indice2","indice3"],
  ["KUWAIT","asie","<img class='image' src='https://upload.wikimedia.org/wikipedia/commons/thumb/a/aa/Flag_of_Kuwait.svg/800px-Flag_of_Kuwait.svg.png'>","<img class='image' src='https://png.pngtree.com/png-vector/20220816/ourmid/pngtree-kuwait-map-kuwaiti-location-kuwait-vector-png-image_48120212.jpg'>","indice1","indice2","indice3"],
  ["QATAR","asie","<img class='image' src='https://upload.wikimedia.org/wikipedia/commons/thumb/6/65/Flag_of_Qatar.svg/640px-Flag_of_Qatar.svg.png'>","<img class='image'src='https://banner2.cleanpng.com/20181115/lyw/kisspng-flag-of-qatar-vector-graphics-royalty-free-map-qatar-svg-png-icon-free-download-466754-onlin-1713920420390.webp'>","indice1","indice2","indice3"],
  ["VIETNAM","asie","<img class='image'src='https://upload.wikimedia.org/wikipedia/commons/thumb/2/21/Flag_of_Vietnam.svg/1200px-Flag_of_Vietnam.svg.png'>","<img class='image'src='https://banner2.cleanpng.com/20180409/die/avgw21hr1.webp'>","indice1","indice2","indice3"],
  ["THAILANDE","asie","<img class='image' src='https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Flag_of_Thailand.svg/255px-Flag_of_Thailand.svg.png'>","<img class='image'src='https://static.thenounproject.com/png/755221-200.png'>","indice1","indice2","indice3"],
  ["SINGAPORE","asie","<img class='image' src='https://upload.wikimedia.org/wikipedia/commons/thumb/4/48/Flag_of_Singapore.svg/1200px-Flag_of_Singapore.svg.png'>","<img class='image' src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS9Vad02wV6Hnc7tfVyjCP2l-Qpt9G-QJrkGA&s'>","indice1","indice2","indice3"],
  ["LAOS","asie","<img class='image'src='https://upload.wikimedia.org/wikipedia/commons/thumb/5/56/Flag_of_Laos.svg/1200px-Flag_of_Laos.svg.png'>","<img class='image' src='https://i0.wp.com/drjamtravels.blog/wp-content/uploads/2022/07/laos-silhouette-thumbnail.png?fit=263%2C262&ssl=1'>","indice1","indice2","indice3"],
]
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
    switch (niveau){
      case 1:
        while ((pays > 16)||(tblPays[pays][1] != continent)){
           pays = Math.floor(Math.random() * tblPays.length); 
        };
        break;
      case 2:
        while ((pays > 32)||(pays < 17)&&(tblPays[pays][1] != continent)){
           pays = Math.floor(Math.random() * tblPays.length); 
        };
        break;
      case 3:
        while ((pays < 33)||(tblPays[pays][1] != continent)){
           pays = Math.floor(Math.random() * tblPays.length); 
        };
        break;
    }
  } else {
    switch (niveau){
      case 1:
        while (pays > 16){
           pays = Math.floor(Math.random() * tblPays.length); 
        };
        break;
      case 2:
        while ((pays > 32)||(pays < 17)){
           pays = Math.floor(Math.random() * tblPays.length); 
        };
        break;
      case 3:
        while (pays < 33){
           pays = Math.floor(Math.random() * tblPays.length); 
        }
        break;
    }
  }

 nbIndice = 0;
  var carte = document.querySelector(".carte");
  carte.innerHTML = tblPays[pays][typeJeux]; 
}
  
function jouer(){
  var message = "<div id='vies'></div><div id='score'></div>\
    <div id='stop'><input type='button' value='Arrêter' onclick='arrete()'></div>\
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
  if (essaie == tblPays[pays][0]){
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
    popUp.innerHTML = "Game Over<br>Vous avez perdu<br>Votre score est de <br><h1>" + score + "<h1><br><input type='button' value='Rejouer' onclick='location.reload();'></a><a href='url à score page'><input type='button' value='Quitter'<a>";
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

function facile(){
  niveau = 1;
  document.getElementById("facile").style.backgroundColor = "rgb(24, 114, 139)";
  document.getElementById("moyen").style.backgroundColor = "transparent";
  document.getElementById("difficile").style.backgroundColor = "transparent";
}

function moyen(){
  niveau = 2;
  document.getElementById("facile").style.backgroundColor = "transparent";
  document.getElementById("moyen").style.backgroundColor = "rgb(24, 114, 139)";
  document.getElementById("difficile").style.backgroundColor = "transparent";
}

function difficile(){
  niveau = 3;
  document.getElementById("facile").style.backgroundColor = "transparent";
  document.getElementById("moyen").style.backgroundColor = "transparent";
  document.getElementById("difficile").style.backgroundColor = "rgb(24, 114, 139)";
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
