var tblPays = [
  ["AFGHANISTAN", "Kaboul", "Asie", 652230, "<img src='image/Afghanistan.png'>", "<img src='image/Afghanistand.png'>"],
  ["AFRIQUE DU SUD", "Pretoria", "Afrique", 1219090, "<img src='image/AfriqueDuSud.png'>", "<img src='image/AfriqueDuSudd.png'>"],
  ["ALBANIE", "Tirana", "Europe", 28748, "<img src='image/Albanie.png'>", "<img src='image/Albanied.png'>"],
  ["ALGÉRIE", "Alger", "Afrique", 2381741, "<img src='image/Algerie.png'>", "<img src='image/Algeried.png'>"],
  ["ALLEMAGNE", "Berlin", "Europe", 357022, "<img src='image/Allemagne.png'>", "<img src='image/Allemagned.png'>"],
  ["ANDORRE", "Andorre-la-Vieille", "Europe", 468, "<img src='image/Andorre.png'>", "<img src='image/Andorred.png'>"],
  ["ANGOLA", "Luanda", "Afrique", 1246700, "<img src='image/Angola.png'>", "<img src='image/Angolad.png'>"],
  ["ANTIGUA-ET-BARBUDA", "Saint John's", "Amérique", 442, "<img src='image/AntiguaEtBarbuda.png'>", "<img src='image/AntiguaEtBarbudad.png'>"],
  ["ARABIE SAOUDITE", "Riyad", "Asie", 2149690, "<img src='image/ArabieSaoudite.png'>", "<img src='image/ArabieSaoudited.png'>"],
  ["ARGENTINE", "Buenos Aires", "Amérique", 2780400, "<img src='image/Argentine.png'>", "<img src='image/Argentined.png'>"],
  ["ARMÉNIE", "Erevan", "Asie", 29743, "<img src='image/Armenie.png'>", "<img src='image/Armenied.png'>"],
  ["AUSTRALIE", "Canberra", "Océanie", 7692024, "<img src='image/Australie.png'>", "<img src='image/Australied.png'>"],
  ["AUTRICHE", "Vienne", "Europe", 83871, "<img src='image/Autriche.png'>", "<img src='image/Autriched.png'>"],
  ["AZERBAÏDJAN", "Bakou", "Asie", 86600, "<img src='image/Azerbaidjan.png'>", "<img src='image/Azerbaidjand.png'>"],
  ["BAHAMAS", "Nassau", "Amérique", 13940, "<img src='image/Bahamas.png'>", "<img src='image/Bahamasd.png'>"],
  ["BAHREÏN", "Manama", "Asie", 765, "<img src='image/Bahrain.png'>", "<img src='image/Bahreind.png'>"],
  ["BANGLADESH", "Dacca", "Asie", 147570, "<img src='image/Bangladesh.png'>", "<img src='image/Bangladeshd.png'>"],
  ["BARBADE", "Bridgetown", "Amérique", 430, "<img src='image/Barbados.png'>", "<img src='image/Barbaded.png'>"],
  ["BELGIQUE", "Bruxelles", "Europe", 30528, "<img src='image/Belgique.png'>", "<img src='image/Belgiqued.png'>"],
  ["BÉLARUS", "Minsk", "Europe", 9449323, "<img src='image/Belarus.png'>", "<img src='image/Belarusd.png'>"]
  ["BELIZE", "Belmopan", "Amérique", 22966, "<img src='image/Belize.png'>", "<img src='image/Belized.png'>"], 
  ["BÉNIN", "Porto-Novo", "Afrique", 112622, "<img src='image/Bénin.png'>", "<img src='image/Bénind.png'>"], 
  ["BHOUTAN", "Thimphou", "Asie", 38394, "<img src='image/Bhutan.png'>", "<img src='image/Bhoutand.png'>"], 
  ["BOLIVIE", "Sucre", "Amérique", 1098581, "<img src='image/Bolivie.png'>", "<img src='image/Bolivied.png'>"], 
  ["BOSNIE-HERZÉGOVINE", "Sarajevo", "Europe", 51197, "<img src='image/Bosnia.png'>", "<img src='image/Bosnie-herzégovined.png'>"], 
  ["BOTSWANA", "Gaborone", "Afrique", 581730, "<img src='image/Botswana.png'>", "<img src='image/Botswanad.png'>"], 
  ["BRÉSIL", "Brasilia", "Amérique", 8515767, "<img src='image/Brézil.png'>", "<img src='image/Brésild.png'>"], 
  ["BRUNEI", "Bandar Seri Begawan", "Asie", 5765, "<img src='image/Brunei.png'>", "<img src='image/Bruneid.png'>"], 
  ["BULGARIE", "Sofia", "Europe", 110994, "<img src='image/Bulgarie.png'>", "<img src='image/Bulgariad.png'>"], 
  ["BURKINA FASO", "Ouagadougou", "Afrique", 272967, "<img src='image/Burkina Faso.png'>", "<img src='image/Burkina fasod.png'>"], 
  ["BURUNDI", "Gitega", "Afrique", 27834, "<img src='image/Burundi.png'>", "<img src='image/Burundid.png'>"], 
  ["CAMBODGE", "Phnom Penh", "Asie", 181035, "<img src='image/Cambodge.png'>", "<img src='image/Camboged.png'>"], 
  ["CAMEROUN", "Yaoundé", "Afrique", 475442, "<img src='image/Cameroun.png'>", "<img src='image/Cameround.png'>"], 
  ["CANADA", "Ottawa", "Amérique", 9984670, "<img src='image/Canada.png'>", "<img src='image/Canadad.png'>"], 
  ["CAP-VERT", "Praia", "Afrique", 4033, "<img src='image/Cap-vert.png'>", "<img src='image/Cap-vertd.png'>"], 
  ["CHILI", "Santiago", "Amérique", 756102, "<img src='image/Chile.png'>", "<img src='image/Chilid.png'>"], 
  ["CHINE", "Pékin", "Asie", 9596961, "<img src='image/Chine.png'>", "<img src='image/Chined.png'>"], 
  ["CHYPRE", "Nicosie", "Europe", 9251, "<img src='image/Chypre.png'>", "<img src='image/Chypred.png'>"], 
  ["COLOMBIE", "Bogota", "Amérique", 1141748, "<img src='image/Colombie.png'>", "<img src='image/Colombied.png'>"], 
  ["COMORES", "Moroni", "Afrique", 2235, "<img src='image/Comores.png'>", "<img src='image/Comoresd.png'>"], 
  ["RÉPUBLIQUE DU CONGO", "Brazzaville", "Afrique", 342000, "<img src='image/RC.png'>", "<img src='image/RCd.png'>"], 
  ["RÉPUBLIQUE DÉMOCRATIQUE DU CONGO", "Kinshasa", "Afrique", 2344858, "<img src='image/DRC.png'>", "<img src='image/DRCd.png'>"], 
  ["CORÉE DU NORD", "Pyongyang", "Asie", 120538, "<img src='image/Corée du nord.png'>", "<img src='image/Corée du nordd.png'>"], 
  ["CORÉE DU SUD", "Séoul", "Asie", 100210, "<img src='image/Corée du sud.png'>", "<img src='image/Corée du sudd.png'>"], 
  ["COSTA RICA", "San José", "Amérique", 51100, "<img src='image/Costa Rica.png'>", "<img src='image/Costa ricad.png'>"], 
  ["CÔTE D'IVOIRE", "Yamoussoukro", "Afrique", 322463, "<img src='image/Côte d Ivoire.png'>", "<img src='image/Côte d'ivoired.png'>"], 
  ["CROATIE", "Zagreb", "Europe", 56594, "<img src='image/Croatie.png'>", "<img src='image/Croatied.png'>"], 
  ["CUBA", "La Havane", "Amérique", 109884, "<img src='image/Cuba.png'>", "<img src='image/Cubad.png'>"], 
  ["DANEMARK", "Copenhague", "Europe", 42933, "<img src='image/Danemark.png'>", "<img src='image/Danemarkd.png'>"], 
  ["DJIBOUTI", "Djibouti", "Afrique", 23200, "<img src='image/Djibouti.png'>", "<img src='image/Djiboutid.png'>"], 
  ["DOMINIQUE", "Roseau", "Amérique", 751, "<img src='image/Dominique.png'>", "<img src='image/Dominiqued.png'>"], 
  ["ÉGYPTE", "Le Caire", "Afrique", 1002450, "<img src='image/Egypte.png'>", "<img src='image/Égypte d.png'>"], 
  ["ÉMIRATS ARABES UNIS", "Abou Dhabi", "Asie", 83600, "<img src='image/EAU.png'>", "<img src='image/Émirats arabes unisd.png'>"], 
  ["ÉQUATEUR", "Quito", "Amérique", 276841, "<img src='image/Équateur.png'>", "<img src='image/Équateurd.png'>"], 
  ["ÉRYTHRÉE", "Asmara", "Afrique", 117600, "<img src='image/Érythrée.png'>", "<img src='image/Érythréed.png'>"], 
  ["ESPAGNE", "Madrid", "Europe", 505990, "<img src='image/Espagne.png'>", "<img src='image/Espagned.png'>"], 
  ["ESWATINI", "Mbabane", "Afrique", 17364, "<img src='image/Eswatini.png'>", "<img src='image/Eswatinid.png'>"], 
  ["ESTONIE", "Tallinn", "Europe", 45228, "<img src='image/Estonie.png'>", "<img src='image/Estonied.png'>"], 
  ["ÉTATS-UNIS", "Washington, D.C.", "Amérique", 9833520, "<img src='image/États-unis.png'>", "<img src='image/États-unisd.png'>"], 
  ["ÉTHIOPIE", "Addis-Abeba", "Afrique", 1104300, "<img src='image/Éthiopie.png'>", "<img src='image/Éthiopied.png'>"]
  ["FIJI", "Suva", "Océanie", 18274, "<img src='image/Fiji.png'>", "<img src='image/Fijid.png'>"],
  ["FRANCE", "Paris", "Europe", 67364357, "<img src='image/France.png'>", "<img src='image/Franced.png'>"]
  ["FINLANDE", "Helsinki", "Europe", 338424, "<img src='image/Finlande.png'>", "<img src='image/Finlanded.png'>"], 
  ["GABON", "Libreville", "Afrique", 267668, "<img src='image/Gabon.png'>", "<img src='image/Gabond.png'>"], 
  ["GAMBIE", "Banjul", "Afrique", 11295, "<img src='image/Gambia.png'>", "<img src='image/Gambied.png'>"], 
  ["GÉORGIE", "Tbilissi", "Asie", 69700, "<img src='image/Géorgie.png'>", "<img src='image/Géorgied.png'>"], 
  ["GHAINA", "Accra", "Afrique", 238533, "<img src='image/Ghana.png'>", "<img src='image/Ghanad.png'>"], 
  ["GRECQUE", "Athènes", "Europe", 131957, "<img src='image/Greece.png'>", "<img src='image/Grèced.png'>"], 
  ["GRENADA", "Saint-Georges", "Amérique", 344, "<img src='image/Grenade.png'>", "<img src='image/Grenaded.png'>"], 
  ["GUATEMALA", "Guatemala", "Amérique", 108889, "<img src='image/Guatemala.png'>", "<img src='image/Guatemalad.png'>"], 
  ["GUINÉE", "Conakry", "Afrique", 245857, "<img src='image/Guinée.png'>", "<img src='image/Guinéed.png'>"], 
  ["GUINÉE ÉQUATORIALE", "Malabo", "Afrique", 1402985, "<img src='image/EquatorialGuinea.png'>", "<img src='image/EquatorialGuinead.png'>"]
  ["GUINÉE-BISSAU", "Bissau", "Afrique", 36125, "<img src='image/Guinée Bissau.png'>", "<img src='image/Guinée-bissaud.png'>"], 
  ["GUYANE", "Georgetown", "Amérique", 214969, "<img src='image/Guyane.png'>", "<img src='image/Guyaned.png'>"], 
  ["HAÏTI", "Port-au-Prince", "Amérique", 27750, "<img src='image/Haïti.png'>", "<img src='image/Haïtid.png'>"], 
  ["HONDURAS", "Tegucigalpa", "Amérique", 112492, "<img src='image/Honduras.png'>", "<img src='image/Hondurasd.png'>"], 
  ["HONGRIE", "Budapest", "Europe", 93030, "<img src='image/Hongrie.png'>", "<img src='image/Hongried.png'>"], 
  ["INDE", "New Delhi", "Asie", 3287263, "<img src='image/Inde.png'>", "<img src='image/Inded.png'>"], 
  ["INDONÉSIE", "Jakarta", "Asie", 1904569, "<img src='image/Indonésie.png'>", "<img src='image/Indonésied.png'>"], 
  ["IRAN", "Téhéran", "Asie", 1648195, "<img src='image/Iran.png'>", "<img src='image/Irand.png'>"], 
  ["IRAK", "Bagdad", "Asie", 438317, "<img src='image/Irak.png'>", "<img src='image/Irakd.png'>"], 
  ["IRLANDE", "Dublin", "Europe", 70273, "<img src='image/Irlande.png'>", "<img src='image/Irlanded.png'>"], 
  ["ISLANDE", "Reykjavik", "Europe", 103000, "<img src='image/Iceland.png'>", "<img src='image/Islanded.png'>"], 
  ["ISRAËL", "Jérusalem", "Asie", 20770, "<img src='image/Israël.png'>", "<img src='image/Israëld.png'>"], 
  ["ITALIE", "Rome", "Europe", 301340, "<img src='image/Italie.png'>", "<img src='image/Italied.png'>"], 
  ["JAMAÏQUE", "Kingston", "Amérique", 10991, "<img src='image/Jamaique.png'>", "<img src='image/Jamaïqued.png'>"], 
  ["JAPON", "Tokyo", "Asie", 377975, "<img src='image/Japan.png'>", "<img src='image/Japond.png'>"], 
  ["JORDANIE", "Amman", "Asie", 89342, "<img src='image/Jordan.png'>", "<img src='image/Jordaniesd.png'>"], 
  ["KAZAKHSTAN", "Astana", "Asie", 2724900, "<img src='image/Kazakhstan.png'>", "<img src='image/Kazakhstansd.png'>"], 
  ["KENYA", "Nairobi", "Afrique", 580367, "<img src='image/Kenya.png'>", "<img src='image/Kenyad.png'>"], 
  ["KIRGHIZISTAN", "Bichkek", "Asie", 199951, "<img src='image/Kirghizistan.png'>", "<img src='image/Kirghizistand.png'>"], 
  ["KIRIBATI", "South Tarawa", "Océanie", 811, "<img src='image/Kiribati.png'>", "<img src='image/Kiribatid.png'>"], 
  ["KOWEÏT", "Koweït", "Asie", 17818, "<img src='image/Kuwait.png'>", "<img src='image/Koweït d.png'>"], 
  ["LAOS", "Vientiane", "Asie", 236800, "<img src='image/Laos.png'>", "<img src='image/Laosd.png'>"], 
  ["LESOTHO", "Maseru", "Afrique", 30355, "<img src='image/Lesotho.png'>", "<img src='image/Lesothod.png'>"], 
  ["LETTONIE", "Riga", "Europe", 64559, "<img src='image/Lettonie.png'>", "<img src='image/Lettonied.png'>"], 
  ["LIBAN", "Beyrouth", "Asie", 10452, "<img src='image/Liban.png'>", "<img src='image/Liband.png'>"], 
  ["LIBERIA", "Monrovia", "Afrique", 111369, "<img src='image/Liberie.png'>", "<img src='image/Liberiad.png'>"], 
  ["LIBYE", "Tripoli", "Afrique", 1759540, "<img src='image/Libye.png'>", "<img src='image/Libyed.png'>"], 
  ["LITUANIE", "Vilnius", "Europe", 65300, "<img src='image/Lituanie.png'>", "<img src='image/Lituanied.png'>"], 
  ["LUXEMBOURG", "Luxembourg", "Europe", 2586, "<img src='image/Luxembourg.png'>", "<img src='image/Luxembourgd.png'>"], 
  ["MADAGASCAR", "Antananarivo", "Afrique", 587041, "<img src='image/Madagascar.png'>", "<img src='image/Madagascard.png'>"], 
  ["MALAISIE", "Kuala Lumpur", "Asie", 330803, "<img src='image/Malaisie.png'>", "<img src='image/Malaisied.png'>"], 
  ["MALAWI", "Lilongwe", "Afrique", 118484, "<img src='image/Malawi.png'>", "<img src='image/Malawid.png'>"], 
  ["MALDIVES", "Malé", "Asie", 298, "<img src='image/Maldives.png'>", "<img src='image/Maldivesd.png'>"], 
  ["MALI", "Bamako", "Afrique", 1240192, "<img src='image/Mali.png'>", "<img src='image/Malid.png'>"], 
  ["MALTE", "La Valette", "Europe", 514644, "<img src='image/Malta.png'>", "<img src='image/Maltad.png'>"]	
  ["MAROC", "Rabat", "Afrique", 710850, "<img src='image/Maroc.png'>", "<img src='image/Marocd.png'>"], 
  ["ÎLES MARSHALL", "Majuro", "Océanie", 181, "<img src='image/Marshall.png'>", "<img src='image/Marshalld.png'>"], 
  ["MEXIQUE", "Mexico", "Amérique", 1964375, "<img src='image/Mexique.png'>", "<img src='image/Mexiqued.png'>"], 
  ["MICRONÉSIE", "Palikir", "Océanie", 702, "<img src='image/Micronésie.png'>", "<img src='image/Micronésied.png'>"], 
  ["MOLDOVA", "Chisinau", "Europe", 33843, "<img src='image/Moldavie.png'>", "<img src='image/Moldovad.png'>"], 
  ["MONACO", "Monaco", "Europe", 2, "<img src='image/Monaco.png'>", "<img src='image/Monacod.png'>"]
  ["MONGOLIE", "Oulan-Bator", "Asie", 1564116, "<img src='image/Mongolie.png'>", "<img src='image/Mongolied.png'>"], 
  ["MONTÉNÉGRO", "Podgorica", "Europe", 622359, "<img src='image/Montenegro.png'>", "<img src='image/Montenegrod.png'>"]
  ["MOZAMBIQUE", "Maputo", "Afrique", 801590, "<img src='image/Mozambique.png'>", "<img src='image/Mozambiqued.png'>"], 
  ["MYANMAR", "Naypyidaw", "Asie", 676578, "<img src='image/Myanmar.png'>", "<img src='image/Myanmard.png'>"], 
  ["NAMIBIE", "Windhoek", "Afrique", 825615, "<img src='image/Namibie.png'>", "<img src='image/Namibied.png'>"], 
  ["NAURU", "Yaren", "Océanie", 21, "<img src='image/Nauru.png'>", "<img src='image/Naurud.png'>"], 
  ["NÉPAL", "Kathmandu", "Asie", 147181, "<img src='image/Népal.png'>", "<img src='image/Népald.png'>"], 
  ["PAYS-BAS", "Amsterdam", "Europe", 41852, "<img src='image/Pays-bas.png'>", "<img src='image/Néérlanded.png'>"], 
  ["NOUVELLE-ZÉLANDE", "Wellington", "Océanie", 268021, "<img src='image/Nouvelle Zelande.png'>", "<img src='image/Nouvelle-Zélanded.png'>"], 
  ["NIGER", "Niamey", "Afrique", 1187000, "<img src='image/Niger.png'>", "<img src='image/Nigerd.png'>"], 
  ["NIGÉRIA", "Abuja", "Afrique", 923768, "<img src='image/Nigeria.png'>", "<img src='image/Nigeriad.png'>"], 
  ["NORVÈGE", "Oslo", "Europe", 148729, "<img src='image/Norvège.png'>", "<img src='image/Norvèged.png'>"], 
  ["OMAN", "Mascate", "Asie", 309500, "<img src='image/Oman.png'>", "<img src='image/Omand.png'>"], 
  ["OUGANDA", "Kampala", "Afrique", 241038, "<img src='image/Uganda.png'>", "<img src='image/Ougandad.png'>"], 
  ["PAKISTAN", "Islamabad", "Asie", 881913, "<img src='image/Pakistan.png'>", "<img src='image/Pakistand.png'>"], 
  ["PALAOS", "Ngerulmud", "Océanie", 459, "<img src='image/Palaos.png'>", "<img src='image/Palaosd.png'>"], 
  ["PANAMA", "Panama", "Amérique", 75417, "<img src='image/Panama.png'>", "<img src='image/Panamad.png'>"], 
  ["PAPOUASIE-NOUVELLE-GUINÉE", "Port Moresby", "Océanie", 462840, "<img src='image/Nouvell Guinée.png'>", "<img src='image/Papouasie-nouvelle-guineed.png'>"], 
  ["PARAGUAY", "Asunción", "Amérique", 406752, "<img src='image/Paraguay.png'>", "<img src='image/Paraguayd.png'>"], 
  ["PÉROU", "Lima", "Amérique", 1285216, "<img src='image/Pérou.png'>", "<img src='image/Péroud.png'>"], 
  ["PAYS-BAS", "Amsterdam", "Europe", 41852, "<img src='image/Pays-Bas.png'>", "<img src='image/Pays-Basd.png'>"], 
  ["PÉROU", "Lima", "Amérique", 1285216, "<img src='image/Peru.png'>", "<img src='image/Péroud.png'>"], 
  ["PHILIPPINES", "Manille", "Asie", 300000, "<img src='image/Philippines.png'>", "<img src='image/Philippinesd.png'>"], 
  ["POLOGNE", "Varsovie", "Europe", 312696, "<img src='image/Pologne.png'>", "<img src='image/Polonied.png'>"], 
  ["PORTO-RICO", "San Juan", "Amérique", 9104, "<img src='image/Porto Rico.png'>", "<img src='image/Porto-Ricod.png'>"], 
  ["PORTUGAL", "Lisbonne", "Europe", 92090, "<img src='image/Portugal.png'>", "<img src='image/Portugald.png'>"], 
  ["QATAR", "Doha", "Asie", 11571, "<img src='image/Qatar.png'>", "<img src='image/Qatard.png'>"], 
  ["RÉPUBLIQUE CENTRAFRICAINE", "Bangui", "Afrique", 622984, "<img src='image/CAR.png'>", "<img src='image/CARd.png'>"], 
  ["RÉPUBLIQUE TCHÈQUE", "Prague", "Europe", 78866, "<img src='image/République Czech.png'>", "<img src='image/République tchèqued.png'>"], 
  ["ROUMANIE", "Bucarest", "Europe", 238397, "<img src='image/Roumanie.png'>", "<img src='image/Roumanied.png'>"], 
  ["RUSSIE", "Moscou", "Europe", 17098242, "<img src='image/Russie.png'>", "<img src='image/Russied.png'>"], 
  ["RÉPUBLIQUE DOMINICAINE", "Saint-Domingue", "Amérique", 48928, "<img src='image/République Dominicaine.png'>", "<img src='image/République dominicained.png'>"], 
  ["RWANDA", "Kigali", "Afrique", 26338, "<img src='image/Rwanda.png'>", "<img src='image/Rwandad.png'>"], 
  ["SAINT-CHRISTOPHE-ET-NIÉVÈS", "Basseterre", "Amérique", 261, "<img src='image/Kitts et Nieve.png'>", "<img src='image/Saint-Christophe-et-Niévèsd.png'>"], 
  ["SAINT-MARIN", "Saint-Marin", "Europe", 61, "<img src='image/St Marin.png'>", "<img src='image/SaintMarind.png'>"],
  ["SAINT-VINCENT-ET-LES-GRENADINES", "Kingstown", "Amérique", 389, "<img src='image/St Vincent and Grenadines.png'>", "<img src='image/SaintVincentEtLesGrenadinest.png'>"],
  ["SAINTE-LUCIE", "Castries", "Amérique", 616, "<img src='image/St Lucie.png'>", "<img src='image/SainteLucied.png'>"],
  ["SALVADOR", "San Salvador", "Amérique", 21041, "<img src='image/El Salvador.png'>", "<img src='image/Salvadord.png'>"],
  ["SAMOA", "Apia", "Océanie", 2831, "<img src='image/Samoa.png'>", "<img src='image/Samoad.png'>"],
  ["SAO TOMÉ-ET-PRINCIPE", "Sao Tomé", "Afrique", 964, "<img src='image/STP.png'>", "<img src='image/STPd.png'>"],
  ["SÉNÉGAL", "Dakar", "Afrique", 196722, "<img src='image/Senegal.png'>", "<img src='image/Senegald.png'>"],
  ["SERBIE", "Belgrade", "Europe", 88361, "<img src='image/Serbie.png'>", "<img src='image/Serbied.png'>"],
  ["SEYCHELLES", "Victoria", "Afrique", 455, "<img src='image/Seychelles.png'>", "<img src='image/Seychellesd.png'>"],
  ["SINGAPOUR", "Singapour", "Asie", 718, "<img src='image/Singapore.png'>", "<img src='image/Singapourd.png'>"],
  ["SOMALIE", "Mogadiscio", "Afrique", 637657, "<img src='image/Somalie.png'>", "<img src='image/Somaliec.png'>"],
  ["SRI LANKA", "Colombo", "Asie", 65610, "<img src='image/Sri Lanka.png'>", "<img src='image/SriLankad.png'>"],
  ["SUD-SUDAN", "Djouba", "Afrique", 619745, "<img src='image/Sudan Sud.png'>", "<img src='image/SudSudand.png'>"],
  ["SUÈDE", "Stockholm", "Europe", 450295, "<img src='image/Suède.png'>", "<img src='image/Sueded.png'>"],
  ["SUISSE", "Berne", "Europe", 41284, "<img src='image/Suisse.png'>", "<img src='image/Suissed.png'>"],
  ["SURINAME", "Paramaribo", "Amérique", 163820, "<img src='image/Suriname.png'>", "<img src='image/Surinamed.png'>"],
  ["SYRIE", "Damas", "Asie", 185180, "<img src='image/Syrie.png'>", "<img src='image/Syried.png'>"]
  ["TAIWAN", "Taipei", "Asie", 36193, "<img src='image/Taiwan.png'>", "<img src='image/Taiwand.png'>"],
  ["TADJIKISTAN", "Douchanbé", "Asie", 143100, "<img src='image/Tadjikistan.png'>", "<img src='image/Tadjikistand.png'>"],
  ["TANZANIE", "Dodoma", "Afrique", 945087, "<img src='image/Tanzanie.png'>", "<img src='image/Tanzanied.png'>"],
  ["TCHAD", "N'Djamena", "Afrique", 1284000, "<img src='image/Tchad.png'>", "<img src='image/Tchadd.png'>"],
  ["TUNISIE", "Tunis", "Afrique", 163610, "<img src='image/Tunisia.png'>", "<img src='image/Tunisied.png'>"],
  ["TIMOR-LESTE", "Dili", "Asie", 1342068, "<img src='image/Timor Leste.png'>", "<img src='image/TimorLested.png'>"]
  ["THAÏLANDE", "Bangkok", "Asie", 513120, "<img src='image/Thailande.png'>", "<img src='image/Thailanded.png'>"],
  ["TURKMÉNISTAN", "Achgabat", "Asie", 491210, "<img src='image/Turkmenistan.png'>", "<img src='image/Turkmenistand.png'>"],
  ["TURQUIE", "Ankara", "Asie", 783562, "<img src='image/Turkiye.png'>", "<img src='image/Turquied.png'>"],
  ["TOGO", "Lomé", "Afrique", 8278724, "<img src='image/Togo.png'>", "<img src='image/Togod.png'>"]
  ["TONGA", "Nuku'alofa", "Océanie", 748, "<img src='image/Tonga.png'>", "<img src='image/Tongad.png'>"],
  ["TRINITÉ-ET-TOBAGO", "Port-d'Espagne", "Amérique", 5130, "<img src='image/Trinidad et Tobago.png'>", "<img src='image/Trinite-et-Tobagod.png'>"],
  ["TUVALU", "Funafuti", "Océanie", 26, "<img src='image/Tuvalu.png'>", "<img src='image/Tuvalud.png'>"],
  ["UKRAINE", "Kyiv", "Europe", 603550, "<img src='image/Ukraine.png'>", "<img src='image/Ukrained.png'>"]
  ["URUGUAY", "Montevideo", "Amérique", 176215, "<img src='image/Uruguay.png'>", "<img src='image/Uruguayd.png'>"],
  ["OUZBÉKISTAN", "Tachkent", "Asie", 447400, "<img src='image/Ouzbekistan.png'>", "<img src='image/Uzbekistand.png'>"],
  ["VANUATU", "Port-Vila", "Océanie", 12189, "<img src='image/Vanuatu.png'>", "<img src='image/Vanuatud.png'>"],
  ["VENEZUELA", "Caracas", "Amérique", 912050, "<img src='image/Venezuela.png'>", "<img src='image/Venezuelaas.png'>"],
  ["VIETNAM", "Hanoï", "Asie", 331210, "<img src='image/Vietnam.png'>", "<img src='image/Vietnamd.png'>"],
  ["YÉMEN", "Sanaa", "Asie", 527968, "<img src='image/Yemen.png'>", "<img src='image/Yemend.png'>"],
  ["ZAMBIE", "Lusaka", "Afrique", 752612, "<img src='image/Zambia.png'>", "<img src='image/Zambied.png'>"],
  ["ZIMBABWE", "Harare", "Afrique", 390757, "<img src='image/Zimbabwe.png'>", "<img src='image/Zimbabwed.png'>"]
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
        while (tblPays[pays][1] != continent){
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

	if (essaie != " "){
		if (essaie == tblPays[pays][0]){
			message = "Bravo, vous avez réussit à deviner le bon pays";
			score += 500;
			
			genere()
		 } else {
			vies--
			message = "<br>Non, ce n'est pas " + essaie + ". Réessaye<br>";
		 }
	} else {
		message = "<br>Entrée un pays!<br>";
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

function indice(){
  var indice = document.getElementById("myPopup");

  if (nbIndice == 0){
    indice.innerHTML = tblPays[pays][3];
  }else if(nbIndice == 1){
    indice.innerHTML = tblPays[pays][1];
  } else if (nbIndice == 2){
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
  typeJeux = 4;
  document.getElementById("drapeau").style.backgroundColor = "transparent";
  document.getElementById("silhouette").style.backgroundColor = "rgb(24, 114, 139)";
}

function drapeau(){
  typeJeux = 5;
  document.getElementById("drapeau").style.backgroundColor = "rgb(24, 114, 139)";
  document.getElementById("silhouette").style.backgroundColor = "transparent";
}
