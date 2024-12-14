var tblPays = [
  ["AFGHANISTAN", "Kaboul", "Asie", 652230, "<img src='images/Afghanistan.png'>", "<img src='images/Afghanistand.png'>"],
  ["AFRIQUE DU SUD", "Pretoria", "Afrique", 1219090, "<img src='images/AfriqueDuSud.png'>", "<img src='images/AfriqueDuSudd.png'>"],
  ["ALBANIE", "Tirana", "Europe", 28748, "<img src='images/Albanie.png'>", "<img src='images/Albanied.png'>"],
  ["ALGÉRIE", "Alger", "Afrique", 2381741, "<img src='images/Algerie.png'>", "<img src='images/Algeried.png'>"],
  ["ALLEMAGNE", "Berlin", "Europe", 357022, "<img src='images/Allemagne.png'>", "<img src='images/Allemagned.png'>"],
  ["ANDORRE", "Andorre-la-Vieille", "Europe", 468, "<img src='images/Andorre.png'>", "<img src='images/Andorred.png'>"],
  ["ANGOLA", "Luanda", "Afrique", 1246700, "<img src='images/Angola.png'>", "<img src='images/Angolad.png'>"],
  ["ANTIGUA-ET-BARBUDA", "Saint John's", "Nord", 442, "<img src='images/AntiguaEtBarbuda.png'>", "<img src='images/AntiguaEtBarbudad.png'>"],
  ["ARABIE SAOUDITE", "Riyad", "Asie", 2149690, "<img src='images/ArabieSaoudite.png'>", "<img src='images/ArabieSaoudited.png'>"],
  ["ARGENTINE", "Buenos Aires", "Sud", 2780400, "<img src='images/Argentine.png'>", "<img src='images/Argentined.png'>"],
  ["ARMÉNIE", "Erevan", "Asie", 29743, "<img src='images/Armenie.png'>", "<img src='images/Armenied.png'>"],
  ["AUSTRALIE", "Canberra", "Océanie", 7692024, "<img src='images/Australie.png'>", "<img src='images/Australied.png'>"],
  ["AUTRICHE", "Vienne", "Europe", 83871, "<img src='images/Autriche.png'>", "<img src='images/Autriched.png'>"],
  ["AZERBAÏDJAN", "Bakou", "Asie", 86600, "<img src='images/Azerbaidjan.png'>", "<img src='images/Azerbaidjand.png'>"],
  ["BAHAMAS", "Nassau", "Nord", 13940, "<img src='images/Bahamas.png'>", "<img src='images/Bahamasd.png'>"],
  ["BAHREÏN", "Manama", "Asie", 765, "<img src='images/Bahrain.png'>", "<img src='images/Bahreind.png'>"],
  ["BANGLADESH", "Dacca", "Asie", 147570, "<img src='images/Bangladesh.png'>", "<img src='images/Bangladeshd.png'>"],
  ["BARBADE", "Bridgetown", "Nord", 430, "<img src='images/Barbados.png'>", "<img src='images/Barbaded.png'>"],
  ["BELGIQUE", "Bruxelles", "Europe", 30528, "<img src='images/Belgique.png'>", "<img src='images/Belgiqued.png'>"],
  ["BÉLARUS", "Minsk", "Europe", 9449323, "<img src='images/Belarus.png'>", "<img src='images/Belarusd.png'>"],
  ["BELIZE", "Belmopan", "Sud", 22966, "<img src='images/Belize.png'>", "<img src='images/Belized.png'>"],
  ["BÉNIN", "Porto-Novo", "Afrique", 112622, "<img src='images/Bénin.png'>", "<img src='images/Bénind.png'>"],
  ["BHOUTAN", "Thimphou", "Asie", 38394, "<img src='images/Bhutan.png'>", "<img src='images/Bhoutand.png'>"],
  ["BOLIVIE", "Sucre", "Sud", 1098581, "<img src='images/Bolivie.png'>", "<img src='images/Bolivied.png'>"],
  ["BOSNIE-HERZÉGOVINE", "Sarajevo", "Europe", 51197, "<img src='images/Bosnia.png'>", "<img src='images/Bosnie-herzégovined.png'>"],
  ["BOTSWANA", "Gaborone", "Afrique", 581730, "<img src='images/Botswana.png'>", "<img src='images/Botswanad.png'>"],
  ["BRÉSIL", "Brasilia", "Sud", 8515767, "<img src='images/Brézil.png'>", "<img src='images/Brésild.png'>"],
  ["BRUNEI", "Bandar Seri Begawan", "Asie", 5765, "<img src='images/Brunei.png'>", "<img src='images/Bruneid.png'>"],
  ["BULGARIE", "Sofia", "Europe", 110994, "<img src='images/Bulgarie.png'>", "<img src='images/Bulgariad.png'>"],
  ["BURKINA FASO", "Ouagadougou", "Afrique", 272967, "<img src='images/Burkina Faso.png'>", "<img src='images/Burkina fasod.png'>"],
  ["BURUNDI", "Gitega", "Afrique", 27834, "<img src='images/Burundi.png'>", "<img src='images/Burundid.png'>"],
  ["CAMBODGE", "Phnom Penh", "Asie", 181035, "<img src='images/Cambodge.png'>", "<img src='images/Camboged.png'>"],
  ["CAMEROUN", "Yaoundé", "Afrique", 475442, "<img src='images/Cameroun.png'>", "<img src='images/Cameround.png'>"],
  ["CANADA", "Ottawa", "Nord", 9984670, "<img src='images/Canada.png'>", "<img src='images/Canadad.png'>"],
  ["CAP-VERT", "Praia", "Afrique", 4033, "<img src='images/Cap-vert.png'>", "<img src='images/Cap-vertd.png'>"],
  ["CHILI", "Santiago", "Sud", 756102, "<img src='images/Chile.png'>", "<img src='images/Chilid.png'>"],
  ["CHINE", "Pékin", "Asie", 9596961, "<img src='images/Chine.png'>", "<img src='images/Chined.png'>"],
  ["CHYPRE", "Nicosie", "Europe", 9251, "<img src='images/Chypre.png'>", "<img src='images/Chypred.png'>"],
  ["COLOMBIE", "Bogota", "Sud", 1141748, "<img src='images/Colombie.png'>", "<img src='images/Colombied.png'>"],
  ["COMORES", "Moroni", "Afrique", 2235, "<img src='images/Comores.png'>", "<img src='images/Comoresd.png'>"],
  ["RÉPUBLIQUE DU CONGO", "Brazzaville", "Afrique", 342000, "<img src='images/RC.png'>", "<img src='images/RCd.png'>"],
  ["RÉPUBLIQUE DÉMOCRATIQUE DU CONGO", "Kinshasa", "Afrique", 2344858, "<img src='images/DRC.png'>", "<img src='images/DRCd.png'>"],
  ["CORÉE DU NORD", "Pyongyang", "Asie", 120538, "<img src='images/Corée du nord.png'>", "<img src='images/Corée du nordd.png'>"],
  ["CORÉE DU SUD", "Séoul", "Asie", 100210, "<img src='images/Corée du sud.png'>", "<img src='images/Corée du sudd.png'>"],
  ["COSTA RICA", "San José", "Nord", 51100, "<img src='images/Costa Rica.png'>", "<img src='images/Costa ricad.png'>"],
  ["CÔTE D'IVOIRE", "Yamoussoukro", "Afrique", 322463, "<img src='images/Côte d Ivoire.png'>", "<img src='images/Côte d'ivoired.png'>"],
  ["CROATIE", "Zagreb", "Europe", 56594, "<img src='images/Croatie.png'>", "<img src='images/Croatied.png'>"],
  ["CUBA", "La Havane", "Nord", 109884, "<img src='images/Cuba.png'>", "<img src='images/Cubad.png'>"],
  ["DANEMARK", "Copenhague", "Europe", 42933, "<img src='images/Danemark.png'>", "<img src='images/Danemarkd.png'>"],
  ["DJIBOUTI", "Djibouti", "Afrique", 23200, "<img src='images/Djibouti.png'>", "<img src='images/Djiboutid.png'>"],
  ["DOMINIQUE", "Roseau", "Nord", 751, "<img src='images/Dominique.png'>", "<img src='images/Dominiqued.png'>"],
  ["ÉGYPTE", "Le Caire", "Afrique", 1002450, "<img src='images/Egypte.png'>", "<img src='images/Égypte d.png'>"],
  ["ÉMIRATS ARABES UNIS", "Abou Dhabi", "Asie", 83600, "<img src='images/EAU.png'>", "<img src='images/Émirats arabes unisd.png'>"],
  ["ÉQUATEUR", "Quito", "Sud", 276841, "<img src='images/Équateur.png'>", "<img src='images/Équateurd.png'>"],
  ["ÉRYTHRÉE", "Asmara", "Afrique", 117600, "<img src='images/Érythrée.png'>", "<img src='images/Érythréed.png'>"],
  ["ESPAGNE", "Madrid", "Europe", 505990, "<img src='images/Espagne.png'>", "<img src='images/Espagned.png'>"],
  ["ESWATINI", "Mbabane", "Afrique", 17364, "<img src='images/Eswatini.png'>", "<img src='images/Eswatinid.png'>"],
  ["ESTONIE", "Tallinn", "Europe", 45228, "<img src='images/Estonie.png'>", "<img src='images/Estonied.png'>"],
  ["ÉTATS-UNIS", "Washington, D.C.", "Nord", 9833520, "<img src='images/États-unis.png'>", "<img src='images/États-unisd.png'>"],
  ["ÉTHIOPIE", "Addis-Abeba", "Afrique", 1104300, "<img src='images/Éthiopie.png'>", "<img src='images/Éthiopied.png'>"],
  ["FIJI", "Suva", "Océanie", 18274, "<img src='images/Fiji.png'>", "<img src='images/Fijid.png'>"],
  ["FRANCE", "Paris", "Europe", 67364357, "<img src='images/France.png'>", "<img src='images/Franced.png'>"],
  ["FINLANDE", "Helsinki", "Europe", 338424, "<img src='images/Finlande.png'>", "<img src='images/Finlanded.png'>"],
  ["GABON", "Libreville", "Afrique", 267668, "<img src='images/Gabon.png'>", "<img src='images/Gabond.png'>"],
  ["GAMBIE", "Banjul", "Afrique", 11295, "<img src='images/Gambia.png'>", "<img src='images/Gambied.png'>"],
  ["GÉORGIE", "Tbilissi", "Asie", 69700, "<img src='images/Géorgie.png'>", "<img src='images/Géorgied.png'>"],
  ["GHAINA", "Accra", "Afrique", 238533, "<img src='images/Ghana.png'>", "<img src='images/Ghanad.png'>"],
  ["GRÈCE", "Athènes", "Europe", 131957, "<img src='images/Greece.png'>", "<img src='images/Grèced.png'>"],
  ["GRENADA", "Saint-Georges", "Nord", 344, "<img src='images/Grenade.png'>", "<img src='images/Grenaded.png'>"],
  ["GUATEMALA", "Guatemala", "Sud", 108889, "<img src='images/Guatemala.png'>", "<img src='images/Guatemalad.png'>"],
  ["GUINÉE", "Conakry", "Afrique", 245857, "<img src='images/Guinée.png'>", "<img src='images/Guinéed.png'>"],
  ["GUINÉE ÉQUATORIALE", "Malabo", "Afrique", 1402985, "<img src='images/EquatorialGuinea.png'>", "<img src='images/EquatorialGuinead.png'>"],
  ["GUINÉE-BISSAU", "Bissau", "Afrique", 36125, "<img src='images/Guinée Bissau.png'>", "<img src='images/Guinée-bissaud.png'>"],
  ["GUYANE", "Georgetown", "Sud", 214969, "<img src='images/Guyane.png'>", "<img src='images/Guyaned.png'>"],
  ["HAÏTI", "Port-au-Prince", "Nord", 27750, "<img src='images/Haïti.png'>", "<img src='images/Haïtid.png'>"],
  ["HONDURAS", "Tegucigalpa", "Nord", 112492, "<img src='images/Honduras.png'>", "<img src='images/Hondurasd.png'>"],
  ["HONGRIE", "Budapest", "Europe", 93030, "<img src='images/Hongrie.png'>", "<img src='images/Hongried.png'>"],
  ["INDE", "New Delhi", "Asie", 3287263, "<img src='images/Inde.png'>", "<img src='images/Inded.png'>"],
  ["INDONÉSIE", "Jakarta", "Asie", 1904569, "<img src='images/Indonésie.png'>", "<img src='images/Indonésied.png'>"],
  ["IRAN", "Téhéran", "Asie", 1648195, "<img src='images/Iran.png'>", "<img src='images/Irand.png'>"],
  ["IRAK", "Bagdad", "Asie", 438317, "<img src='images/Irak.png'>", "<img src='images/Irakd.png'>"],
  ["IRLANDE", "Dublin", "Europe", 70273, "<img src='images/Irlande.png'>", "<img src='images/Irlanded.png'>"],
  ["ISLANDE", "Reykjavik", "Europe", 103000, "<img src='images/Iceland.png'>", "<img src='images/Islanded.png'>"],
  ["ISRAËL", "Jérusalem", "Asie", 20770, "<img src='images/Israël.png'>", "<img src='images/Israëld.png'>"],
  ["ITALIE", "Rome", "Europe", 301340, "<img src='images/Italie.png'>", "<img src='images/Italied.png'>"],
  ["JAMAÏQUE", "Kingston", "Nord", 10991, "<img src='images/Jamaique.png'>", "<img src='images/Jamaïqued.png'>"],
  ["JAPON", "Tokyo", "Asie", 377975, "<img src='images/Japan.png'>", "<img src='images/Japond.png'>"],
  ["JORDANIE", "Amman", "Asie", 89342, "<img src='images/Jordan.png'>", "<img src='images/Jordaniesd.png'>"],
  ["KAZAKHSTAN", "Astana", "Asie", 2724900, "<img src='images/Kazakhstan.png'>", "<img src='images/Kazakhstansd.png'>"],
  ["KENYA", "Nairobi", "Afrique", 580367, "<img src='images/Kenya.png'>", "<img src='images/Kenyad.png'>"],
  ["KIRGHIZISTAN", "Bichkek", "Asie", 199951, "<img src='images/Kirghizistan.png'>", "<img src='images/Kirghizistand.png'>"],
  ["KIRIBATI", "South Tarawa", "Océanie", 811, "<img src='images/Kiribati.png'>", "<img src='images/Kiribatid.png'>"],
  ["KOWEÏT", "Koweït", "Asie", 17818, "<img src='images/Kuwait.png'>", "<img src='images/Koweït d.png'>"],
  ["LAOS", "Vientiane", "Asie", 236800, "<img src='images/Laos.png'>", "<img src='images/Laosd.png'>"],
  ["LESOTHO", "Maseru", "Afrique", 30355, "<img src='images/Lesotho.png'>", "<img src='images/Lesothod.png'>"]
  ["LETTONIE", "Riga", "Europe", 64559, "<img src='images/Lettonie.png'>", "<img src='images/Lettonied.png'>"], 
  ["LIBAN", "Beyrouth", "Asie", 10452, "<img src='images/Liban.png'>", "<img src='images/Liband.png'>"], 
  ["LIBERIA", "Monrovia", "Afrique", 111369, "<img src='images/Liberie.png'>", "<img src='images/Liberiad.png'>"], 
  ["LIBYE", "Tripoli", "Afrique", 1759540, "<img src='images/Libye.png'>", "<img src='images/Libyed.png'>"], 
  ["LITUANIE", "Vilnius", "Europe", 65300, "<img src='images/Lituanie.png'>", "<img src='images/Lituanied.png'>"], 
  ["LUXEMBOURG", "Luxembourg", "Europe", 2586, "<img src='images/Luxembourg.png'>", "<img src='images/Luxembourgd.png'>"], 
  ["MADAGASCAR", "Antananarivo", "Afrique", 587041, "<img src='images/Madagascar.png'>", "<img src='images/Madagascard.png'>"], 
  ["MALAISIE", "Kuala Lumpur", "Asie", 330803, "<img src='images/Malaisie.png'>", "<img src='images/Malaisied.png'>"], 
  ["MALAWI", "Lilongwe", "Afrique", 118484, "<img src='images/Malawi.png'>", "<img src='images/Malawid.png'>"], 
  ["MALDIVES", "Malé", "Asie", 298, "<img src='images/Maldives.png'>", "<img src='images/Maldivesd.png'>"], 
  ["MALI", "Bamako", "Afrique", 1240192, "<img src='images/Mali.png'>", "<img src='images/Malid.png'>"], 
  ["MALTE", "La Valette", "Europe", 514644, "<img src='images/Malta.png'>", "<img src='images/Maltad.png'>"], 
  ["MAROC", "Rabat", "Afrique", 710850, "<img src='images/Maroc.png'>", "<img src='images/Marocd.png'>"], 
  ["ÎLES MARSHALL", "Majuro", "Océanie", 181, "<img src='images/Marshall.png'>", "<img src='images/Marshalld.png'>"], 
  ["MEXIQUE", "Mexico", "Nord", 1964375, "<img src='images/Mexique.png'>", "<img src='images/Mexiqued.png'>"], 
  ["MICRONÉSIE", "Palikir", "Océanie", 702, "<img src='images/Micronésie.png'>", "<img src='images/Micronésied.png'>"], 
  ["MOLDOVA", "Chisinau", "Europe", 33843, "<img src='images/Moldavie.png'>", "<img src='images/Moldovad.png'>"], 
  ["MONACO", "Monaco", "Europe", 2, "<img src='images/Monaco.png'>", "<img src='images/Monacod.png'>"], 
  ["MONGOLIE", "Oulan-Bator", "Asie", 1564116, "<img src='images/Mongolie.png'>", "<img src='images/Mongolied.png'>"], 
  ["MOZAMBIQUE", "Maputo", "Afrique", 801590, "<img src='images/Mozambique.png'>", "<img src='images/Mozambiqued.png'>"], 
  ["NAMIBIE", "Windhoek", "Afrique", 825615, "<img src='images/Namibie.png'>", "<img src='images/Namibied.png'>"], 
  ["NARU", "Yaren", "Océanie", 21, "<img src='images/Nauru.png'>", "<img src='images/Naurud.png'>"], 
  ["NEPAL", "Kathmandu", "Asie", 147181, "<img src='images/Nepal.png'>", "<img src='images/Nepald.png'>"], 
  ["NICARAGUA", "Managua", "Nord", 130373, "<img src='images/Nicaragua.png'>", "<img src='images/Nicaraguad.png'>"], 
  ["NIGER", "Niamey", "Afrique", 1267000, "<img src='images/Niger.png'>", "<img src='images/Nigerd.png'>"], 
  ["NIGÉRIA", "Abuja", "Afrique", 923768, "<img src='images/Nigeria.png'>", "<img src='images/Nigeriad.png'>"], 
  ["NIUE", "Alofi", "Océanie", 260, "<img src='images/Niue.png'>", "<img src='images/Niued.png'>"], 
  ["NORVÈGE", "Oslo", "Europe", 148729, "<img src='images/Norvege.png'>", "<img src='images/Norveged.png'>"], 
  ["NOUVELLE-ZÉLANDE", "Wellington", "Océanie", 270467, "<img src='images/Nouvelle-Zelande.png'>", "<img src='images/Nouvelle-Zelanded.png'>"], 
  ["OMAN", "Mascate", "Asie", 309500, "<img src='images/Oman.png'>", "<img src='images/Omand.png'>"], 
  ["OUGANDA", "Kampala", "Afrique", 241038, "<img src='images/Ouganda.png'>", "<img src='images/Ougandad.png'>"], 
  ["OUZBÉKISTAN", "Tachkent", "Asie", 447400, "<img src='images/Ouzbekistan.png'>", "<img src='images/Ouzbekistand.png'>"], 
  ["PAKISTAN", "Islamabad", "Asie", 881913, "<img src='images/Pakistan.png'>", "<img src='images/Pakistand.png'>"], 
  ["PALAOS", "Ngerulmud", "Océanie", 459, "<img src='images/Palau.png'>", "<img src='images/Palau.png'>"], 
  ["PANAMA", "Panama", "Nord", 75417, "<img src='images/Panama.png'>", "<img src='images/Panama.png'>"], 
  ["PAPOUASIE-NOUVELLE-GUINÉE", "Port Moresby", "Océanie", 462840, "<img src='images/Papouasie-Nouvelle-Guinee.png'>", "<img src='images/Papouasie-Nouvelle-Guineed.png'>"], 
  ["PARAGUAY", "Asunción", "Sud", 406752, "<img src='images/Paraguay.png'>", "<img src='images/Paraguayd.png'>"], 
  ["PÉROU", "Lima", "Sud", 1285216, "<img src='images/Perou.png'>", "<img src='images/Peroud.png'>"], 
  ["PORTO RICO", "San Juan", "Nord", 8872, "<img src='images/Puerto Rico.png'>", "<img src='images/Puerto Ricod.png'>"], 
  ["QATAR", "Doha", "Asie", 11571, "<img src='images/Qatar.png'>", "<img src='images/Qatard.png'>"], 
  ["ROUMANIE", "Bucarest", "Europe", 238391, "<img src='images/Roumanie.png'>", "<img src='images/Roumanied.png'>"], 
  ["ROYAUME-UNI", "Londres", "Europe", 243610, "<img src='images/UK.png'>", "<img src='images/UK.png'>"]
  ["RUSSIE", "Moscou", "Europe", 17098242, "<img src='images/Russie.png'>", "<img src='images/Russied.png'>"],
  ["RWAANDA", "Kigali", "Afrique", 26338, "<img src='images/Rwanda.png'>", "<img src='images/Rwadad.png'>"],
  ["SAINT-KITTS-ET-NEVIS", "Basseterre", "Nord", 261, "<img src='images/Saint Kitts et Nevis.png'>", "<img src='images/Saint Kitts et Nevis.png'>"],
  ["SAINT-LUCIE", "Castries", "Nord", 616, "<img src='images/Saint Lucie.png'>", "<img src='images/Saint Lucied.png'>"],
  ["SAINT-MARIN", "Saint-Marin", "Europe", 61, "<img src='images/Saint Marin.png'>", "<img src='images/SaintMarind.png'>"],
  ["SAINT-VINCENT-ET-LES GRENADINES", "Kingstown", "Nord", 389, "<img src='images/Saint Vincent.png'>", "<img src='images/Saint Vincented.png'>"],
  ["SALOMON", "Honiara", "Océanie", 28400, "<img src='images/Solomon Islands.png'>", "<img src='images/Solomon Islands.png'>"],
  ["SAMOA", "Apia", "Océanie", 294, "<img src='images/Samoa.png'>", "<img src='images/Samoad.png'>"],
  ["SÃO TOMÉ-ET-PRÍNCIPE", "São Tomé", "Afrique", 964, "<img src='images/Sao Tome et Principe.png'>", "<img src='images/Sao Tome et Principe.png'>"],
  ["SÉNÉGAL", "Dakar", "Afrique", 196722, "<img src='images/Senegal.png'>", "<img src='images/Senegald.png'>"],
  ["SERBIE", "Belgrade", "Europe", 88361, "<img src='images/Serbie.png'>", "<img src='images/Serbied.png'>"],
  ["SEYCHELLES", "Victoria", "Afrique", 455, "<img src='images/Seychelles.png'>", "<img src='images/Seychellesd.png'>"],
  ["SIERRA LEONE", "Freetown", "Afrique", 71740, "<img src='images/Sierra Leone.png'>", "<img src='images/Sierra Leoned.png'>"],
  ["SINGAPOUR", "Singapour", "Asie", 716, "<img src='images/Singapore.png'>", "<img src='images/Singapored.png'>"],
  ["SOMALIE", "Mogadiscio", "Afrique", 637657, "<img src='images/Somalie.png'>", "<img src='images/Somalied.png'>"],
  ["SRI LANKA", "Colombo", "Asie", 65610, "<img src='images/Sri Lanka.png'>", "<img src='images/SriLankad.png'>"],
  ["SUDAN", "Khartoum", "Afrique", 1861484, "<img src='images/Sudan.png'>", "<img src='images/Sudand.png'>"],
  ["SURINAME", "Paramaribo","Sud", 163820, "<img src='images/Suriname.png'>", "<img src='images/Surinamed.png'>"],
  ["SUEDE", "Stockholm", "Europe", 450295, "<img src='images/Suede.png'>", "<img src='images/Sueded.png'>"],
  ["SRI LANKA", "Colombo", "Asie", 65610, "<img src='images/Sri Lanka.png'>", "<img src='images/SriLankad.png'>"],
  ["SUD-SUDAN", "Djouba", "Afrique", 619745, "<img src='images/Sudan Sud.png'>", "<img src='images/SudSudand.png'>"],
  ["SUÈDE", "Stockholm", "Europe", 450295, "<img src='images/Suède.png'>", "<img src='images/Sueded.png'>"],
  ["SUISSE", "Berne", "Europe", 41284, "<img src='images/Suisse.png'>", "<img src='images/Suissed.png'>"],
  ["SURINAME", "Paramaribo","Sud", 163820, "<img src='images/Suriname.png'>", "<img src='images/Surinamed.png'>"],
  ["SYRIE", "Damas", "Asie", 185180, "<img src='images/Syrie.png'>", "<img src='images/Syried.png'>"],
  ["TAIWAN", "Taipei", "Asie", 36193, "<img src='images/Taiwan.png'>", "<img src='images/Taiwand.png'>"],
  ["TADJIKISTAN", "Douchanbé", "Asie", 143100, "<img src='images/Tadjikistan.png'>", "<img src='images/Tadjikistand.png'>"],
  ["TANZANIE", "Dodoma", "Afrique", 945087, "<img src='images/Tanzanie.png'>", "<img src='images/Tanzanied.png'>"],
  ["TCHAD", "N'Djamena", "Afrique", 1284000, "<img src='images/Tchad.png'>", "<img src='images/Tchadd.png'>"],
  ["TUNISIE", "Tunis", "Afrique", 163610, "<img src='images/Tunisia.png'>", "<img src='images/Tunisied.png'>"],
  ["TIMOR-LESTE", "Dili", "Asie", 1342068, "<img src='images/Timor Leste.png'>", "<img src='images/TimorLested.png'>"],
  ["THAÏLANDE", "Bangkok", "Asie", 513120, "<img src='images/Thailande.png'>", "<img src='images/Thailanded.png'>"],
  ["TURKMÉNISTAN", "Achgabat", "Asie", 491210, "<img src='images/Turkmenistan.png'>", "<img src='images/Turkmenistand.png'>"],
  ["TURQUIE", "Ankara", "Asie", 783562, "<img src='images/Turkiye.png'>", "<img src='images/Turquied.png'>"]
  ["TOGO", "Lomé", "Afrique", 8278724, "<img src='images/Togo.png'>", "<img src='images/Togod.png'>"],
  ["TONGA", "Nuku'alofa", "Océanie", 748, "<img src='images/Tonga.png'>", "<img src='images/Tongad.png'>"],
  ["TRINITÉ-ET-TOBAGO", "Port-d'Espagne", "Nord", 5130, "<img src='images/Trinidad et Tobago.png'>", "<img src='images/Trinite-et-Tobagod.png'>"],
  ["TUVALU", "Funafuti", "Océanie", 26, "<img src='images/Tuvalu.png'>", "<img src='images/Tuvalud.png'>"],
  ["UKRAINE", "Kyiv", "Europe", 603550, "<img src='images/Ukraine.png'>", "<img src='images/Ukrained.png'>"],
  ["URUGUAY", "Montevideo", "Sud", 176215, "<img src='images/Uruguay.png'>", "<img src='images/Uruguayd.png'>"],
  ["OUZBÉKISTAN", "Tachkent", "Asie", 447400, "<img src='images/Ouzbekistan.png'>", "<img src='images/Uzbekistand.png'>"],
  ["VANUATU", "Port-Vila", "Océanie", 12189, "<img src='images/Vanuatu.png'>", "<img src='images/Vanuatud.png'>"],
  ["VENEZUELA", "Caracas", "Sud", 912050, "<img src='images/Venezuela.png'>", "<img src='images/Venezuelaas.png'>"],
  ["VIETNAM", "Hanoï", "Asie", 331210, "<img src='images/Vietnam.png'>", "<img src='images/Vietnamd.png'>"],
  ["YÉMEN", "Sanaa", "Asie", 527968, "<img src='images/Yemen.png'>", "<img src='images/Yemend.png'>"],
  ["ZAMBIE", "Lusaka", "Afrique", 752612, "<img src='images/Zambia.png'>", "<img src='images/Zambied.png'>"],
  ["ZIMBABWE", "Harare", "Afrique", 390757, "<img src='images/Zimbabwe.png'>", "<img src='images/Zimbabwed.png'>"]
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
  
 if (continent != null){
	 while (tblPays[pays][2] != continent){
		 pays = Math.floor(Math.random() * tblPays.length);
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
    indice.innerHTML = "La superficie du pays est de " + tblPays[pays][3] + " km²";
  }else if(nbIndice == 1){
    indice.innerHTML = "La capitale du pays c'est " + tblPays[pays][1];
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
  continent = "Nord";
  document.getElementById("nord").style.backgroundColor = "rgb(24, 114, 139)";
  document.getElementById("sud").style.backgroundColor = "transparent";
  document.getElementById("europe").style.backgroundColor = "transparent";
  document.getElementById("asie").style.backgroundColor = "transparent";
  document.getElementById("afrique").style.backgroundColor = "transparent";
  document.getElementById("oceanie").style.backgroundColor = "transparent";
}

function sud(){
  continent = "Sud";
  document.getElementById("nord").style.backgroundColor = "transparent";
  document.getElementById("sud").style.backgroundColor = "rgb(24, 114, 139)";
  document.getElementById("europe").style.backgroundColor = "transparent";
  document.getElementById("asie").style.backgroundColor = "transparent";
  document.getElementById("afrique").style.backgroundColor = "transparent";
  document.getElementById("oceanie").style.backgroundColor = "transparent";
}

function afrique(){
  continent = "Afrique";
  document.getElementById("nord").style.backgroundColor = "transparent";
  document.getElementById("sud").style.backgroundColor = "transparent";
  document.getElementById("europe").style.backgroundColor = "transparent";
  document.getElementById("asie").style.backgroundColor = "transparent";
  document.getElementById("afrique").style.backgroundColor = "rgb(24, 114, 139)";
  document.getElementById("oceanie").style.backgroundColor = "transparent";
}

function europe(){
  continent = "Europe";
  document.getElementById("nord").style.backgroundColor = "transparent";
  document.getElementById("sud").style.backgroundColor = "transparent";
  document.getElementById("europe").style.backgroundColor = "rgb(24, 114, 139)";
  document.getElementById("asie").style.backgroundColor = "transparent";
  document.getElementById("afrique").style.backgroundColor = "transparent";
  document.getElementById("oceanie").style.backgroundColor = "transparent";
}

function asie(){
  continent = "Asie";
  document.getElementById("nord").style.backgroundColor = "transparent";
  document.getElementById("sud").style.backgroundColor = "transparent";
  document.getElementById("europe").style.backgroundColor = "transparent";
  document.getElementById("asie").style.backgroundColor = " rgb(24, 114, 139)";
  document.getElementById("afrique").style.backgroundColor = "transparent";
  document.getElementById("oceanie").style.backgroundColor = "transparent";
}

function oceanie(){
  continent = "Océanie";
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
