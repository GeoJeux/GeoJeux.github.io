var tblPays = [
  ["AFGHANISTAN", "Kaboul", "Asie", 652230, "<img src='images/Afghanistan.png' class='image'>", "<img src='images/Afghanistand.png' class='image'>"],
  ["AFRIQUE DU SUD", "Pretoria", "Afrique", 1219090, "<img src='images/AfriqueDuSud.png' class='image'>", "<img src='images/AfriqueDuSudd.png' class='image'>"],
  ["ALBANIE", "Tirana", "Europe", 28748, "<img src='images/Albanie.png' class='image'>", "<img src='images/Albanied.png' class='image'>"],
  ["ALGÉRIE", "Alger", "Afrique", 2381741, "<img src='images/Algerie.png' class='image'>", "<img src='images/Algeried.png' class='image'>"],
  ["ALLEMAGNE", "Berlin", "Europe", 357022, "<img src='images/Allemagne.png' class='image'>", "<img src='images/Allemagned.png' class='image'>"],
  ["ANDORRE", "Andorre-la-Vieille", "Europe", 468, "<img src='images/Andorre.png' class='image'>", "<img src='images/Andorred.png' class='image'>"],
  ["ANGOLA", "Luanda", "Afrique", 1246700, "<img src='images/Angola.png' class='image'>", "<img src='images/Angolad.png' class='image'>"],
  ["ANTIGUA-ET-BARBUDA", "Saint John's", "Nord", 442, "<img src='images/AntiguaEtBarbuda.png' class='image'>", "<img src='images/AntiguaEtBarbudad.png' class='image'>"],
  ["ARABIE SAOUDITE", "Riyad", "Asie", 2149690, "<img src='images/ArabieSaoudite.png' class='image'>", "<img src='images/ArabieSaoudited.png' class='image'>"],
  ["ARGENTINE", "Buenos Aires", "Sud", 2780400, "<img src='images/Argentine.png' class='image'>", "<img src='images/Argentined.png' class='image'>"],
  ["ARMÉNIE", "Erevan", "Asie", 29743, "<img src='images/Armenie.png' class='image'>", "<img src='images/Armenied.png' class='image'>"],
  ["AUSTRALIE", "Canberra", "Océanie", 7692024, "<img src='images/Australie.png' class='image'>", "<img src='images/Australied.png' class='image'>"],
  ["AUTRICHE", "Vienne", "Europe", 83871, "<img src='images/Autriche.png' class='image'>", "<img src='images/Autriched.png' class='image'>"],
  ["AZERBAÏDJAN", "Bakou", "Asie", 86600, "<img src='images/Azerbaidjan.png' class='image'>", "<img src='images/Azerbaidjand.png' class='image'>"],
  ["BAHAMAS", "Nassau", "Nord", 13940, "<img src='images/Bahamas.png' class='image'>", "<img src='images/Bahamasd.png' class='image'>"],
  ["BAHREÏN", "Manama", "Asie", 765, "<img src='images/Bahrain.png' class='image'>", "<img src='images/Bahreind.png' class='image'>"],
  ["BANGLADESH", "Dacca", "Asie", 147570, "<img src='images/Bangladesh.png' class='image'>", "<img src='images/Bangladeshd.png' class='image'>"], 
  ["BARBADE", "Bridgetown", "Nord", 430, "<img src='images/Barbados.png' class='image'>", "<img src='images/Barbaded.png' class='image'>"],
  ["BELGIQUE", "Bruxelles", "Europe", 30528, "<img src='images/Belgique.png' class='image'>", "<img src='images/Belgiqued.png' class='image'>"],
  ["BÉLARUS", "Minsk", "Europe", 9449323, "<img src='images/Belarus.png' class='image'>", "<img src='images/Belarusd.png' class='image'>"],
  ["BELIZE", "Belmopan", "Sud", 22966, "<img src='images/Belize.png' class='image'>", "<img src='images/Belized.png' class='image'>"],
  ["BÉNIN", "Porto-Novo", "Afrique", 112622, "<img src='images/Bénin.png' class='image'>", "<img src='images/Bénind.png' class='image'>"],
  ["BHOUTAN", "Thimphou", "Asie", 38394, "<img src='images/Bhutan.png' class='image'>", "<img src='images/Bhoutand.png' class='image'>"],
  ["BOLIVIE", "Sucre", "Sud", 1098581, "<img src='images/Bolivie.png' class='image'>", "<img src='images/Bolivied.png' class='image'>"],
  ["BOSNIE-HERZÉGOVINE", "Sarajevo", "Europe", 51197, "<img src='images/Bosnia.png' class='image'>", "<img src='images/Bosnie-herzégovined.png' class='image'>"],
  ["BOTSWANA", "Gaborone", "Afrique", 581730, "<img src='images/Botswana.png' class='image'>", "<img src='images/Botswanad.png' class='image'>"],
  ["BRÉSIL", "Brasilia", "Sud", 8515767, "<img src='images/Brézil.png' class='image'>", "<img src='images/Brésild.png' class='image'>"],
  ["BRUNEI", "Bandar Seri Begawan", "Asie", 5765, "<img src='images/Brunei.png' class='image'>", "<img src='images/Bruneid.png' class='image'>"],
  ["BULGARIE", "Sofia", "Europe", 110994, "<img src='images/Bulgarie.png' class='image'>", "<img src='images/Bulgariad.png' class='image'>"],
  ["BURKINA FASO", "Ouagadougou", "Afrique", 272967, "<img src='images/Burkina Faso.png' class='image'>", "<img src='images/Burkina fasod.png' class='image'>"]
  ["BURUNDI", "Gitega", "Afrique", 27834, "<img src='images/Burundi.png' class='image'>", "<img src='images/Burundid.png' class='image'>"],
  ["CAMBODGE", "Phnom Penh", "Asie", 181035, "<img src='images/Cambodge.png' class='image'>", "<img src='images/Camboged.png' class='image'>"],
  ["CAMEROUN", "Yaoundé", "Afrique", 475442, "<img src='images/Cameroun.png' class='image'>", "<img src='images/Cameround.png' class='image'>"],
  ["CANADA", "Ottawa", "Nord", 9984670, "<img src='images/Canada.png' class='image'>", "<img src='images/Canadad.png' class='image'>"],
  ["CAP-VERT", "Praia", "Afrique", 4033, "<img src='images/Cap-vert.png' class='image'>", "<img src='images/Cap-vertd.png' class='image'>"],
  ["CHILI", "Santiago", "Sud", 756102, "<img src='images/Chile.png' class='image'>", "<img src='images/Chilid.png' class='image'>"],
  ["CHINE", "Pékin", "Asie", 9596961, "<img src='images/Chine.png' class='image'>", "<img src='images/Chined.png' class='image'>"],
  ["CHYPRE", "Nicosie", "Europe", 9251, "<img src='images/Chypre.png' class='image'>", "<img src='images/Chypred.png' class='image'>"],
  ["COLOMBIE", "Bogota", "Sud", 1141748, "<img src='images/Colombie.png' class='image'>", "<img src='images/Colombied.png' class='image'>"],
  ["COMORES", "Moroni", "Afrique", 2235, "<img src='images/Comores.png' class='image'>", "<img src='images/Comoresd.png' class='image'>"],
  ["RÉPUBLIQUE DU CONGO", "Brazzaville", "Afrique", 342000, "<img src='images/RC.png' class='image'>", "<img src='images/RCd.png' class='image'>"],
  ["RÉPUBLIQUE DÉMOCRATIQUE DU CONGO", "Kinshasa", "Afrique", 2344858, "<img src='images/DRC.png' class='image'>", "<img src='images/DRCd.png' class='image'>"],
  ["CORÉE DU NORD", "Pyongyang", "Asie", 120538, "<img src='images/Corée du nord.png' class='image'>", "<img src='images/Corée du nordd.png' class='image'>"],
  ["CORÉE DU SUD", "Séoul", "Asie", 100210, "<img src='images/Corée du sud.png' class='image'>", "<img src='images/Corée du sudd.png' class='image'>"],
  ["COSTA RICA", "San José", "Nord", 51100, "<img src='images/Costa Rica.png' class='image'>", "<img src='images/Costa ricad.png' class='image'>"],
  ["CÔTE D'IVOIRE", "Yamoussoukro", "Afrique", 322463, "<img src='images/Côte d Ivoire.png' class='image'>", "<img src='images/Côte d'ivoired.png' class='image'>"],
  ["CROATIE", "Zagreb", "Europe", 56594, "<img src='images/Croatie.png' class='image'>", "<img src='images/Croatied.png' class='image'>"],
  ["CUBA", "La Havane", "Nord", 109884, "<img src='images/Cuba.png' class='image'>", "<img src='images/Cubad.png' class='image'>"],
  ["DANEMARK", "Copenhague", "Europe", 42933, "<img src='images/Danemark.png' class='image'>", "<img src='images/Danemarkd.png' class='image'>"],
  ["DJIBOUTI", "Djibouti", "Afrique", 23200, "<img src='images/Djibouti.png' class='image'>", "<img src='images/Djiboutid.png' class='image'>"],
  ["DOMINIQUE", "Roseau", "Nord", 751, "<img src='images/Dominique.png' class='image'>", "<img src='images/Dominiqued.png' class='image'>"],
  ["ÉGYPTE", "Le Caire", "Afrique", 1002450, "<img src='images/Egypte.png' class='image'>", "<img src='images/Égypte d.png' class='image'>"],
  ["ÉMIRATS ARABES UNIS", "Abou Dhabi", "Asie", 83600, "<img src='images/EAU.png' class='image'>", "<img src='images/Émirats arabes unisd.png' class='image'>"],
  ["ÉQUATEUR", "Quito", "Sud", 276841, "<img src='images/Équateur.png' class='image'>", "<img src='images/Équateurd.png' class='image'>"],
  ["ÉRYTHRÉE", "Asmara", "Afrique", 117600, "<img src='images/Érythrée.png' class='image'>", "<img src='images/Érythréed.png' class='image'>"]
  ["ESPAGNE", "Madrid", "Europe", 505990, "<img src='images/Espagne.png' class='image'>", "<img src='images/Espagned.png' class='image'>"],
  ["ESWATINI", "Mbabane", "Afrique", 17364, "<img src='images/Eswatini.png' class='image'>", "<img src='images/Eswatinid.png' class='image'>"],
  ["ESTONIE", "Tallinn", "Europe", 45228, "<img src='images/Estonie.png' class='image'>", "<img src='images/Estonied.png' class='image'>"],
  ["ÉTATS-UNIS", "Washington, D.C.", "Nord", 9833520, "<img src='images/États-unis.png' class='image'>", "<img src='images/États-unisd.png' class='image'>"],
  ["ÉTHIOPIE", "Addis-Abeba", "Afrique", 1104300, "<img src='images/Éthiopie.png' class='image'>", "<img src='images/Éthiopied.png' class='image'>"],
  ["FIJI", "Suva", "Océanie", 18274, "<img src='images/Fiji.png' class='image'>", "<img src='images/Fijid.png' class='image'>"],
  ["FRANCE", "Paris", "Europe", 67364357, "<img src='images/France.png' class='image'>", "<img src='images/Franced.png' class='image'>"],
  ["FINLANDE", "Helsinki", "Europe", 338424, "<img src='images/Finlande.png' class='image'>", "<img src='images/Finlanded.png' class='image'>"],
  ["GABON", "Libreville", "Afrique", 267668, "<img src='images/Gabon.png' class='image'>", "<img src='images/Gabond.png' class='image'>"],
  ["GAMBIE", "Banjul", "Afrique", 11295, "<img src='images/Gambia.png' class='image'>", "<img src='images/Gambied.png' class='image'>"],
  ["GÉORGIE", "Tbilissi", "Asie", 69700, "<img src='images/Géorgie.png' class='image'>", "<img src='images/Géorgied.png' class='image'>"],
  ["GHAINA", "Accra", "Afrique", 238533, "<img src='images/Ghana.png' class='image'>", "<img src='images/Ghanad.png' class='image'>"],
  ["GRÈCE", "Athènes", "Europe", 131957, "<img src='images/Greece.png' class='image'>", "<img src='images/Grèced.png' class='image'>"],
  ["GRENADA", "Saint-Georges", "Nord", 344, "<img src='images/Grenade.png' class='image'>", "<img src='images/Grenaded.png' class='image'>"],
  ["GUATEMALA", "Guatemala", "Sud", 108889, "<img src='images/Guatemala.png' class='image'>", "<img src='images/Guatemalad.png' class='image'>"],
  ["GUINÉE", "Conakry", "Afrique", 245857, "<img src='images/Guinée.png' class='image'>", "<img src='images/Guinéed.png' class='image'>"],
  ["GUINÉE ÉQUATORIALE", "Malabo", "Afrique", 1402985, "<img src='images/EquatorialGuinea.png' class='image'>", "<img src='images/EquatorialGuinead.png' class='image'>"],
  ["GUINÉE-BISSAU", "Bissau", "Afrique", 36125, "<img src='images/Guinée Bissau.png' class='image'>", "<img src='images/Guinée-bissaud.png' class='image'>"],
  ["GUYANE", "Georgetown", "Sud", 214969, "<img src='images/Guyane.png' class='image'>", "<img src='images/Guyaned.png' class='image'>"],
  ["HAÏTI", "Port-au-Prince", "Nord", 27750, "<img src='images/Haïti.png' class='image'>", "<img src='images/Haïtid.png' class='image'>"],
  ["HONDURAS", "Tegucigalpa", "Nord", 112492, "<img src='images/Honduras.png' class='image'>", "<img src='images/Hondurasd.png' class='image'>"],
  ["HONGRIE", "Budapest", "Europe", 93030, "<img src='images/Hongrie.png' class='image'>", "<img src='images/Hongried.png' class='image'>"],
  ["INDE", "New Delhi", "Asie", 3287263, "<img src='images/Inde.png' class='image'>", "<img src='images/Inded.png' class='image'>"],
  ["INDONÉSIE", "Jakarta", "Asie", 1904569, "<img src='images/Indonésie.png' class='image'>", "<img src='images/Indonésied.png' class='image'>"],
  ["IRAN", "Téhéran", "Asie", 1648195, "<img src='images/Iran.png' class='image'>", "<img src='images/Irand.png' class='image'>"],
  ["IRAK", "Bagdad", "Asie", 438317, "<img src='images/Irak.png' class='image'>", "<img src='images/Irakd.png' class='image'>"],
  ["IRLANDE", "Dublin", "Europe", 70273, "<img src='images/Irlande.png' class='image'>", "<img src='images/Irlanded.png' class='image'>"],
  ["ISLANDE", "Reykjavik", "Europe", 103000, "<img src='images/Iceland.png' class='image'>", "<img src='images/Islanded.png' class='image'>"],
  ["ISRAËL", "Jérusalem", "Asie", 20770, "<img src='images/Israël.png' class='image'>", "<img src='images/Israëld.png' class='image'>"],
  ["ITALIE", "Rome", "Europe", 301340, "<img src='images/Italie.png' class='image'>", "<img src='images/Italied.png' class='image'>"],
  ["JAMAÏQUE", "Kingston", "Nord", 10991, "<img src='images/Jamaique.png' class='image'>", "<img src='images/Jamaïqued.png' class='image'>"],
  ["JAPON", "Tokyo", "Asie", 377975, "<img src='images/Japan.png' class='image'>", "<img src='images/Japond.png' class='image'>"],
  ["JORDANIE", "Amman", "Asie", 89342, "<img src='images/Jordan.png' class='image'>", "<img src='images/Jordaniesd.png' class='image'>"],
  ["KAZAKHSTAN", "Astana", "Asie", 2724900, "<img src='images/Kazakhstan.png' class='image'>", "<img src='images/Kazakhstansd.png' class='image'>"]
  ["KENYA", "Nairobi", "Afrique", 580367, "<img src='images/Kenya.png' class='image'>", "<img src='images/Kenyad.png' class='image'>"],
  ["KIRGHIZISTAN", "Bichkek", "Asie", 199951, "<img src='images/Kirghizistan.png' class='image'>", "<img src='images/Kirghizistand.png' class='image'>"],
  ["KIRIBATI", "South Tarawa", "Océanie", 811, "<img src='images/Kiribati.png' class='image'>", "<img src='images/Kiribatid.png' class='image'>"],
  ["KOWEÏT", "Koweït", "Asie", 17818, "<img src='images/Kuwait.png' class='image'>", "<img src='images/Koweït d.png' class='image'>"],
  ["LAOS", "Vientiane", "Asie", 236800, "<img src='images/Laos.png' class='image'>", "<img src='images/Laosd.png' class='image'>"],
  ["LESOTHO", "Maseru", "Afrique", 30355, "<img src='images/Lesotho.png' class='image'>", "<img src='images/Lesothod.png' class='image'>"],
  ["LETTONIE", "Riga", "Europe", 64559, "<img src='images/Lettonie.png' class='image'>", "<img src='images/Lettonied.png' class='image'>"],
  ["LIBAN", "Beyrouth", "Asie", 10452, "<img src='images/Liban.png' class='image'>", "<img src='images/Liband.png' class='image'>"],
  ["LIBERIA", "Monrovia", "Afrique", 111369, "<img src='images/Liberie.png' class='image'>", "<img src='images/Liberiad.png' class='image'>"],
  ["LIBYE", "Tripoli", "Afrique", 1759540, "<img src='images/Libye.png' class='image'>", "<img src='images/Libyed.png' class='image'>"],
  ["LITUANIE", "Vilnius", "Europe", 65300, "<img src='images/Lituanie.png' class='image'>", "<img src='images/Lituanied.png' class='image'>"],
  ["LUXEMBOURG", "Luxembourg", "Europe", 2586, "<img src='images/Luxembourg.png' class='image'>", "<img src='images/Luxembourgd.png' class='image'>"],
  ["MADAGASCAR", "Antananarivo", "Afrique", 587041, "<img src='images/Madagascar.png' class='image'>", "<img src='images/Madagascard.png' class='image'>"],
  ["MALAISIE", "Kuala Lumpur", "Asie", 330803, "<img src='images/Malaisie.png' class='image'>", "<img src='images/Malaisied.png' class='image'>"],
  ["MALAWI", "Lilongwe", "Afrique", 118484, "<img src='images/Malawi.png' class='image'>", "<img src='images/Malawid.png' class='image'>"],
  ["MALDIVES", "Malé", "Asie", 298, "<img src='images/Maldives.png' class='image'>", "<img src='images/Maldivesd.png' class='image'>"],
  ["MALI", "Bamako", "Afrique", 1240192, "<img src='images/Mali.png' class='image'>", "<img src='images/Malid.png' class='image'>"],
  ["MALTE", "La Valette", "Europe", 514644, "<img src='images/Malta.png' class='image'>", "<img src='images/Maltad.png' class='image'>"],
  ["MAROC", "Rabat", "Afrique", 710850, "<img src='images/Maroc.png' class='image'>", "<img src='images/Marocd.png' class='image'>"],
  ["ÎLES MARSHALL", "Majuro", "Océanie", 181, "<img src='images/Marshall.png' class='image'>", "<img src='images/Marshalld.png' class='image'>"],
  ["MEXIQUE", "Mexico", "Nord", 1964375, "<img src='images/Mexique.png' class='image'>", "<img src='images/Mexiqued.png' class='image'>"],
  ["MICRONÉSIE", "Palikir", "Océanie", 702, "<img src='images/Micronésie.png' class='image'>", "<img src='images/Micronésied.png' class='image'>"],
  ["MOLDOVA", "Chisinau", "Europe", 33843, "<img src='images/Moldavie.png' class='image'>", "<img src='images/Moldovad.png' class='image'>"],
  ["MONACO", "Monaco", "Europe", 2, "<img src='images/Monaco.png' class='image'>", "<img src='images/Monacod.png' class='image'>"],
  ["MONGOLIE", "Oulan-Bator", "Asie", 1564116, "<img src='images/Mongolie.png' class='image'>", "<img src='images/Mongolied.png' class='image'>"],
  ["MOZAMBIQUE", "Maputo", "Afrique", 801590, "<img src='images/Mozambique.png' class='image'>", "<img src='images/Mozambiqued.png' class='image'>"],
  ["NAMIBIE", "Windhoek", "Afrique", 825615, "<img src='images/Namibie.png' class='image'>", "<img src='images/Namibied.png' class='image'>"],
  ["NARU", "Yaren", "Océanie", 21, "<img src='images/Nauru.png' class='image'>", "<img src='images/Naurud.png' class='image'>"],
  ["NEPAL", "Kathmandu", "Asie", 147181, "<img src='images/Nepal.png' class='image'>", "<img src='images/Nepald.png' class='image'>"],
  ["NICARAGUA", "Managua", "Nord", 130373, "<img src='images/Nicaragua.png' class='image'>", "<img src='images/Nicaraguad.png' class='image'>"],
  ["NIGER", "Niamey", "Afrique", 1267000, "<img src='images/Niger.png' class='image'>", "<img src='images/Nigerd.png' class='image'>"],
  ["NIGÉRIA", "Abuja", "Afrique", 923768, "<img src='images/Nigeria.png' class='image'>", "<img src='images/Nigeriad.png' class='image'>"],
  ["NOUVELLE-ZÉLANDE", "Wellington", "Océanie", 270467, "<img src='images/Nouvelle-Zelande.png' class='image'>", "<img src='images/Nouvelle-Zelanded.png' class='image'>"],
  ["OMAN", "Mascate", "Asie", 309500, "<img src='images/Oman.png' class='image'>", "<img src='images/Omand.png' class='image'>"],
  ["OUGANDA", "Kampala", "Afrique", 241038, "<img src='images/Ouganda.png' class='image'>", "<img src='images/Ougandad.png' class='image'>"],
  ["OUZBÉKISTAN", "Tachkent", "Asie", 447400, "<img src='images/Ouzbekistan.png' class='image'>", "<img src='images/Ouzbekistand.png' class='image'>"],
  ["PAKISTAN", "Islamabad", "Asie", 881913, "<img src='images/Pakistan.png' class='image'>", "<img src='images/Pakistand.png' class='image'>"],
  ["PALAOS", "Ngerulmud", "Océanie", 459, "<img src='images/Palau.png' class='image'>", "<img src='images/Palaud.png' class='image'>"],
  ["PANAMA", "Panama", "Nord", 75417, "<img src='images/Panama.png' class='image'>", "<img src='images/Panama.png' class='image'>"],
  ["PAPOUASIE-NOUVELLE-GUINÉE", "Port Moresby", "Océanie", 462840, "<img src='images/Papouasie-Nouvelle-Guinee.png' class='image'>", "<img src='images/Papouasie-Nouvelle-Guineed.png' class='image'>"],
  ["PARAGUAY", "Asunción", "Sud", 406752, "<img src='images/Paraguay.png' class='image'>", "<img src='images/Paraguayd.png' class='image'>"],
  ["PÉROU", "Lima", "Sud", 1285216, "<img src='images/Perou.png' class='image'>", "<img src='images/Peroud.png' class='image'>"],
  ["PORTO RICO", "San Juan", "Nord", 8872, "<img src='images/Puerto Rico.png' class='image'>", "<img src='images/Puerto Ricod.png' class='image'>"],
  ["QATAR", "Doha", "Asie", 11571, "<img src='images/Qatar.png' class='image'>", "<img src='images/Qatard.png' class='image'>"],
  ["ROUMANIE", "Bucarest", "Europe", 238391, "<img src='images/Roumanie.png' class='image'>", "<img src='images/Roumanied.png' class='image'>"],
  ["ROYAUME-UNI", "Londres", "Europe", 243610, "<img src='images/UK.png' class='image'>", "<img src='images/UK.png' class='image'>"],
  ["RUSSIE", "Moscou", "Europe", 17098242, "<img src='images/Russie.png' class='image'>", "<img src='images/Russied.png' class='image'>"],
  ["RWAANDA", "Kigali", "Afrique", 26338, "<img src='images/Rwanda.png' class='image'>", "<img src='images/Rwadad.png' class='image'>"],
  ["SAINT-KITTS-ET-NEVIS", "Basseterre", "Nord", 261, "<img src='images/Kitts et Nieve.png' class='image'>", "<img src='images/Saint Kitts et Nevis.png' class='image'>"],
  ["SAINT-LUCIE", "Castries", "Nord", 616, "<img src='images/Saint Lucie.png' class='image'>", "<img src='images/Saint Lucied.png' class='image'>"],
  ["SAINT-MARIN", "Saint-Marin", "Europe", 61, "<img src='images/Saint Marin.png' class='image'>", "<img src='images/SaintMarind.png' class='image'>"],
  ["SAINT-VINCENT-ET-LES GRENADINES", "Kingstown", "Nord", 389, "<img src='images/Saint Vincent.png' class='image'>", "<img src='images/Saint Vincented.png' class='image'>"],
  ["SALOMON", "Honiara", "Océanie", 28400, "<img src='images/Solomon Islands.png' class='image'>", "<img src='images/Solomon Islands.png' class='image'>"],
  ["SAMOA", "Apia", "Océanie", 294, "<img src='images/Samoa.png' class='image'>", "<img src='images/Samoad.png' class='image'>"],
  ["SÃO TOMÉ-ET-PRÍNCIPE", "São Tomé", "Afrique", 964, "<img src='images/Sao Tome et Principe.png' class='image'>", "<img src='images/Sao Tome et Principe.png' class='image'>"]
  ["SÉNÉGAL", "Dakar", "Afrique", 196722, "<img class='image' src='images/Senegal.png'>", "<img class='image' src='images/Senegald.png'>"],
  ["SERBIE", "Belgrade", "Europe", 88361, "<img class='image' src='images/Serbie.png'>", "<img class='image' src='images/Serbied.png'>"],
  ["SEYCHELLES", "Victoria", "Afrique", 455, "<img class='image' src='images/Seychelles.png'>", "<img class='image' src='images/Seychellesd.png'>"],
  ["SIERRA LEONE", "Freetown", "Afrique", 71740, "<img class='image' src='images/Sierra Leone.png'>", "<img class='image' src='images/Sierra Leoned.png'>"],
  ["SINGAPOUR", "Singapour", "Asie", 716, "<img class='image' src='images/Singapore.png'>", "<img class='image' src='images/Singapored.png'>"],
  ["SOMALIE", "Mogadiscio", "Afrique", 637657, "<img class='image' src='images/Somalie.png'>", "<img class='image' src='images/Somalied.png'>"],
  ["SRI LANKA", "Colombo", "Asie", 65610, "<img class='image' src='images/Sri Lanka.png'>", "<img class='image' src='images/SriLankad.png'>"],
  ["SUDAN", "Khartoum", "Afrique", 1861484, "<img class='image' src='images/Sudan.png'>", "<img class='image' src='images/Sudand.png'>"],
  ["SURINAME", "Paramaribo", "Sud", 163820, "<img class='image' src='images/Suriname.png'>", "<img class='image' src='images/Surinamed.png'>"],
  ["SUÈDE", "Stockholm", "Europe", 450295, "<img class='image' src='images/Suede.png'>", "<img class='image' src='images/Sueded.png'>"],
  ["SUD-SUDAN", "Djouba", "Afrique", 619745, "<img class='image' src='images/Sudan Sud.png'>", "<img class='image' src='images/SudSudand.png'>"],
  ["SUISSE", "Berne", "Europe", 41284, "<img class='image' src='images/Suisse.png'>", "<img class='image' src='images/Suissed.png'>"],
  ["SYRIE", "Damas", "Asie", 185180, "<img class='image' src='images/Syrie.png'>", "<img class='image' src='images/Syried.png'>"],
  ["TAIWAN", "Taipei", "Asie", 36193, "<img class='image' src='images/Taiwan.png'>", "<img class='image' src='images/Taiwand.png'>"],
  ["TADJIKISTAN", "Douchanbé", "Asie", 143100, "<img class='image' src='images/Tadjikistan.png'>", "<img class='image' src='images/Tadjikistand.png'>"],
  ["TANZANIE", "Dodoma", "Afrique", 945087, "<img class='image' src='images/Tanzanie.png'>", "<img class='image' src='images/Tanzanied.png'>"],
  ["TCHAD", "N'Djamena", "Afrique", 1284000, "<img class='image' src='images/Tchad.png'>", "<img class='image' src='images/Tchadd.png'>"],
  ["TUNISIE", "Tunis", "Afrique", 163610, "<img class='image' src='images/Tunisia.png'>", "<img class='image' src='images/Tunisied.png'>"],
  ["TIMOR-LESTE", "Dili", "Asie", 1342068, "<img class='image' src='images/Timor Leste.png'>", "<img class='image' src='images/TimorLested.png'>"],
  ["THAÏLANDE", "Bangkok", "Asie", 513120, "<img class='image' src='images/Thailande.png'>", "<img class='image' src='images/Thailanded.png'>"],
  ["TURKMÉNISTAN", "Achgabat", "Asie", 491210, "<img class='image' src='images/Turkmenistan.png'>", "<img class='image' src='images/Turkmenistand.png'>"],
  ["TURQUIE", "Ankara", "Asie", 783562, "<img class='image' src='images/Turkiye.png'>", "<img class='image' src='images/Turquied.png'>"],
  ["TOGO", "Lomé", "Afrique", 8278724, "<img class='image' src='images/Togo.png'>", "<img class='image' src='images/Togod.png'>"],
  ["TONGA", "Nuku'alofa", "Océanie", 748, "<img class='image' src='images/Tonga.png'>", "<img class='image' src='images/Tongad.png'>"],
  ["TRINITÉ-ET-TOBAGO", "Port-d'Espagne", "Nord", 5130, "<img class='image' src='images/Trinidad et Tobago.png'>", "<img class='image' src='images/Trinite-et-Tobagod.png'>"],
  ["TUVALU", "Funafuti", "Océanie", 26, "<img class='image' src='images/Tuvalu.png'>", "<img class='image' src='images/Tuvalud.png'>"],
  ["UKRAINE", "Kyiv", "Europe", 603550, "<img class='image' src='images/Ukraine.png'>", "<img class='image' src='images/Ukrained.png'>"],
  ["URUGUAY", "Montevideo", "Sud", 176215, "<img class='image' src='images/Uruguay.png'>", "<img class='image' src='images/Uruguayd.png'>"],
  ["OUZBÉKISTAN", "Tachkent", "Asie", 447400, "<img class='image' src='images/Ouzbekistan.png'>", "<img class='image' src='images/Uzbekistand.png'>"],
  ["VANUATU", "Port-Vila", "Océanie", 12189, "<img class='image' src='images/Vanuatu.png'>", "<img class='image' src='images/Vanuatud.png'>"],
  ["VENEZUELA", "Caracas", "Sud", 912050, "<img class='image' src='images/Venezuela.png'>", "<img class='image' src='images/Venezuelaas.png'>"],
  ["VIETNAM", "Hanoï", "Asie", 331210, "<img class='image' src='images/Vietnam.png'>", "<img class='image' src='images/Vietnamd.png'>"],
  ["YÉMEN", "Sanaa", "Asie", 527968, "<img class='image' src='images/Yemen.png'>", "<img class='image' src='images/Yemend.png'>"],
  ["ZAMBIE", "Lusaka", "Afrique", 752612, "<img class='image' src='images/Zambia.png'>", "<img class='image' src='images/Zambied.png'>"],
  ["ZIMBABWE", "Harare", "Afrique", 390757, "<img class='image' src='images/Zimbabwe.png'>", "<img class='image' src='images/Zimbabwed.png'>"]
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
