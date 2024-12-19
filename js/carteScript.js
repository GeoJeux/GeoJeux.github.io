
/*Tableaux de tout les pays du monde avec leur superficie, image de leur drapeau et un image de leur silhouette*/
var tblPays = [
  ["AFGHANISTAN", "Kaboul", "Asie", 652230, "<img src='images/Afghanistan.png' class='image'>", "<img src='images/Drapeau/Afghanistand.png' class='image'>"],
  ["AFRIQUE DU SUD", "Pretoria", "Afrique", 1219090, "<img src='images/AfriqueDuSud.png' class='image'>", "<img src='images/Drapeau/AfriqueDuSudd.png' class='image'>"],
  ["ALBANIE", "Tirana", "Europe", 28748, "<img src='images/Albanie.png' class='image'>", "<img src='images/Drapeau/Albanied.png' class='image'>"],
  ["ALGÉRIE", "Alger", "Afrique", 2381741, "<img src='images/Algerie.png' class='image'>", "<img src='images/Drapeau/Algeried.png' class='image'>"],
  ["ALLEMAGNE", "Berlin", "Europe", 357022, "<img src='images/Allemagne.png' class='image'>", "<img src='images/Drapeau/Allemagned.png' class='image'>"],
  ["ANDORRE", "Andorre-la-Vieille", "Europe", 468, "<img src='images/Andorre.png' class='image'>", "<img src='images/Drapeau/Andorred.png' class='image'>"],
  ["ANGOLA", "Luanda", "Afrique", 1246700, "<img src='images/Angola.png' class='image'>", "<img src='images/Drapeau/Angolad.png' class='image'>"],
  ["ANTIGUA-ET-BARBUDA", "Saint John's", "Nord", 442, "<img src='images/AntiguaEtBarbuda.png' class='image'>", "<img src='images/Drapeau/AntiguaEtBarbudad.png' class='image'>"],
  ["ARABIE SAOUDITE", "Riyad", "Asie", 2149690, "<img src='images/ArabieSaoudite.png' class='image'>", "<img src='images/Drapeau/ArabieSaoudited.png' class='image'>"],
  ["ARGENTINE", "Buenos Aires", "Sud", 2780400, "<img src='images/Argetine.png' class='image'>", "<img src='images/Drapeau/Argentined.png' class='image'>"],
  ["ARMÉNIE", "Erevan", "Asie", 29743, "<img src='images/Armenie.png' class='image'>", "<img src='images/Drapeau/Armenied.png' class='image'>"],
  ["AUSTRALIE", "Canberra", "Océanie", 7692024, "<img src='images/Australie.png' class='image'>", "<img src='images/Drapeau/Australied.png' class='image'>"],
  ["AUTRICHE", "Vienne", "Europe", 83871, "<img src='images/Autriche.png' class='image'>", "<img src='images/Drapeau/Autriched.png' class='image'>"],
  ["AZERBAÏDJAN", "Bakou", "Asie", 86600, "<img src='images/Azerbaidjan.png' class='image'>", "<img src='images/Drapeau/Azerbaidjand.png' class='image'>"],
  ["BAHAMAS", "Nassau", "Nord", 13940, "<img src='images/Bahamas.png' class='image'>", "<img src='images/Drapeau/Bahamasd.png' class='image'>"],
  ["BAHREÏN", "Manama", "Asie", 765, "<img src='images/Bahrain.png' class='image'>", "<img src='images/Drapeau/Bahreind.png' class='image'>"],
  ["BANGLADESH", "Dacca", "Asie", 147570, "<img src='images/Bangladesh.png' class='image'>", "<img src='images/Drapeau/Bangladeshd.png' class='image'>"],
  ["BARBADE", "Bridgetown", "Nord", 430, "<img src='images/Barbados.png' class='image'>", "<img src='images/Drapeau/Barbaded.png' class='image'>"],
  ["BELGIQUE", "Bruxelles", "Europe", 30528, "<img src='images/Belgique.png' class='image'>", "<img src='images/Drapeau/Belgiqued.png' class='image'>"],
  ["BÉLARUS", "Minsk", "Europe", 9449323, "<img src='images/Belarus.png' class='image'>", "<img src='images/Drapeau/Belarusd.png' class='image'>"],
  ["BELIZE", "Belmopan", "Nord", 22966, "<img src='images/Belize.png' class='image'>", "<img src='images/Drapeau/Belized.png' class='image'>"],
  ["BÉNIN", "Porto-Novo", "Afrique", 112622, "<img src='images/Bénin.png' class='image'>", "<img src='images/Drapeau/Bénind.png' class='image'>"],
  ["BHOUTAN", "Thimphou", "Asie", 38394, "<img src='images/Bhutan.png' class='image'>", "<img src='images/Drapeau/Bhoutand.png' class='image'>"],
  ["BOLIVIE", "Sucre", "Sud", 1098581, "<img src='images/Bolivie.png' class='image'>", "<img src='images/Drapeau/Bolivied.png' class='image'>"],
  ["BOSNIE-HERZÉGOVINE", "Sarajevo", "Europe", 51197, "<img src='images/Bosnia.png' class='image'>", "<img src='images/Drapeau/Bosnie-herzégovined.png' class='image'>"],
  ["BOTSWANA", "Gaborone", "Afrique", 581730, "<img src='images/Botswana.png' class='image'>", "<img src='images/Drapeau/Botswanad.png' class='image'>"],
  ["BRÉSIL", "Brasilia", "Sud", 8515767, "<img src='images/Brézil.png' class='image'>", "<img src='images/Drapeau/Brésild.png' class='image'>"],
  ["BRUNEI", "Bandar Seri Begawan", "Asie", 5765, "<img src='images/Brunei.png' class='image'>", "<img src='images/Drapeau/Bruneid.png' class='image'>"],
  ["BULGARIE", "Sofia", "Europe", 110994, "<img src='images/Bulgarie.png' class='image'>", "<img src='images/Drapeau/Bulgariad.png' class='image'>"],
  ["BURKINA FASO", "Ouagadougou", "Afrique", 272967, "<img src='images/Burkina Faso.png' class='image'>", "<img src='images/Drapeau/Burkina fasod.png' class='image'>"],
  ["BURUNDI", "Gitega", "Afrique", 27834, "<img src='images/Burundi.png' class='image'>", "<img src='images/Drapeau/Burundid.png' class='image'>"],
  ["CAMBODGE", "Phnom Penh", "Asie", 181035, "<img src='images/Cambodge.png' class='image'>", "<img src='images/Drapeau/Camboged.png' class='image'>"],
  ["CAMEROUN", "Yaoundé", "Afrique", 475442, "<img src='images/Cameroun.png' class='image'>", "<img src='images/Drapeau/Cameround.png' class='image'>"],
  ["CANADA", "Ottawa", "Nord", 9984670, "<img src='images/Canada.png' class='image'>", "<img src='images/Drapeau/Canadad.png' class='image'>"],
  ["CAP-VERT", "Praia", "Afrique", 4033, "<img src='images/Cap-vert.png' class='image'>", "<img src='images/Drapeau/Cap-vertd.png' class='image'>"],
  ["CHILI", "Santiago", "Sud", 756102, "<img src='images/Chile.png' class='image'>", "<img src='images/Drapeau/Chilid.png' class='image'>"],
  ["CHINE", "Pékin", "Asie", 9596961, "<img src='images/Chine.png' class='image'>", "<img src='images/Drapeau/Chined.png' class='image'>"],
  ["CHYPRE", "Nicosie", "Europe", 9251, "<img src='images/Chypre.png' class='image'>", "<img src='images/Drapeau/Chypred.png' class='image'>"],
  ["COLOMBIE", "Bogota", "Sud", 1141748, "<img src='images/Colombie.png' class='image'>", "<img src='images/Drapeau/Colombied.png' class='image'>"],
  ["COMORES", "Moroni", "Afrique", 2235, "<img src='images/Comores.png' class='image'>", "<img src='images/Drapeau/Comoresd.png' class='image'>"],
  ["RÉPUBLIQUE DU CONGO", "Brazzaville", "Afrique", 342000, "<img src='images/RC.png' class='image'>", "<img src='images/Drapeau/RCd.png' class='image'>"],
  ["RÉPUBLIQUE DÉMOCRATIQUE DU CONGO", "Kinshasa", "Afrique", 2344858, "<img src='images/DRC.png' class='image'>", "<img src='images/Drapeau/DRCd.png' class='image'>"],
  ["CORÉE DU NORD", "Pyongyang", "Asie", 120538, "<img src='images/Corée du nord.png' class='image'>", "<img src='images/Drapeau/Corée du nordd.png' class='image'>"],
  ["CORÉE DU SUD", "Séoul", "Asie", 100210, "<img src='images/Corée du sud.png' class='image'>", "<img src='images/Drapeau/Corée du sudd.png' class='image'>"],
  ["COSTA RICA", "San José", "Nord", 51100, "<img src='images/Costa Rica.png' class='image'>", "<img src='images/Drapeau/Costa ricad.png' class='image'>"],
  ["CÔTE D'IVOIRE", "Yamoussoukro", "Afrique", 322463, "<img src='images/Côte d Ivoire.png' class='image'>", "<img src='images/Drapeau/Côte divoired.png' class='image'>"],
  ["CROATIE", "Zagreb", "Europe", 56594, "<img src='images/Croatie.png' class='image'>", "<img src='images/Drapeau/Croatied.png' class='image'>"],
  ["CUBA", "La Havane", "Nord", 109884, "<img src='images/Cuba.png' class='image'>", "<img src='images/Drapeau/Cubad.png' class='image'>"],
  ["DANEMARK", "Copenhague", "Europe", 42933, "<img src='images/Danemark.png' class='image'>", "<img src='images/Drapeau/Danemarkd.png' class='image'>"],
  ["DJIBOUTI", "Djibouti", "Afrique", 23200, "<img src='images/Djibouti.png' class='image'>", "<img src='images/Drapeau/Djiboutid.png' class='image'>"],
  ["DOMINIQUE", "Roseau", "Nord", 751, "<img src='images/Dominique.png' class='image'>", "<img src='images/Drapeau/Dominiqued.png' class='image'>"]
  ["ÉGYPTE", "Le Caire", "Afrique", 1002450, "<img src='images/Egypte.png' class='image'>", "<img src='imagesDrapeau/Égypte d.png' class='image'>"],
  ["ÉMIRATS ARABES UNIS", "Abou Dhabi", "Asie", 83600, "<img src='images/EAU.png' class='image'>", "<img src='images/Drapeau/Émirats arabes unisd.png' class='image'>"],
  ["ÉQUATEUR", "Quito", "Sud", 276841, "<img src='images/Équateur.png' class='image'>", "<img src='images/Drapeau/Équateurd.png' class='image'>"],
  ["ÉRYTHRÉE", "Asmara", "Afrique", 117600, "<img src='images/Érythrée.png' class='image'>", "<img src='images/Drapeau/Érythréed.png' class='image'>"],
  ["ESPAGNE", "Madrid", "Europe", 505990, "<img src='images/Espagne.png' class='image'>", "<img src='images/Drapeau/Espagned.png' class='image'>"],
  ["ESWATINI", "Mbabane", "Afrique", 17364, "<img src='images/Eswatini.png' class='image'>", "<img src='images/Drapeau/Eswatinid.png' class='image'>"],
  ["ESTONIE", "Tallinn", "Europe", 45228, "<img src='images/Estonie.png' class='image'>", "<img src='images/Drapeau/Estonied.png' class='image'>"],
  ["ÉTATS-UNIS", "Washington, D.C.", "Nord", 9833520, "<img src='images/États-unis.png' class='image'>", "<img src='images/Drapeau/Étatsunisd.png' class='image'>"],
  ["ÉTHIOPIE", "Addis-Abeba", "Afrique", 1104300, "<img src='images/Éthiopie.png' class='image'>", "<img src='images/Drapeau/Éthiopied.png' class='image'>"],
  ["FIJI", "Suva", "Océanie", 18274, "<img src='images/Fiji.png' class='image'>", "<img src='images/Drapeau/Fijid.png' class='image'>"],
  ["FRANCE", "Paris", "Europe", 67364357, "<img src='images/France.png' class='image'>", "<img src='images/Drapeau/Franced.png' class='image'>"],
  ["FINLANDE", "Helsinki", "Europe", 338424, "<img src='images/Finlande.png' class='image'>", "<img src='images/Drapeau/Finlanded.png' class='image'>"],
  ["GABON", "Libreville", "Afrique", 267668, "<img src='images/Gabon.png' class='image'>", "<img src='images/Drapeau/Gabond.png' class='image'>"],
  ["GAMBIE", "Banjul", "Afrique", 11295, "<img src='images/Gambia.png' class='image'>", "<img src='images/Drapeau/Gambied.png' class='image'>"],
  ["GÉORGIE", "Tbilissi", "Asie", 69700, "<img src='images/Géorgie.png' class='image'>", "<img src='images/Drapeau/Géorgied.png' class='image'>"],
  ["GHAINA", "Accra", "Afrique", 238533, "<img src='images/Ghana.png' class='image'>", "<img src='images/Drapeau/Ghanad.png' class='image'>"],
  ["GRÈCE", "Athènes", "Europe", 131957, "<img src='images/Greece.png' class='image'>", "<img src='images/Drapeau/Grèced.png' class='image'>"],
  ["GRENADE", "Saint-Georges", "Nord", 344, "<img src='images/Grenade.png' class='image'>", "<img src='images/Drapeau/Grenaded.png' class='image'>"],
  ["GUATEMALA", "Guatemala", "Nord", 108889, "<img src='images/Guatemala.png' class='image'>", "<img src='images/Drapeau/Guatemalad.png' class='image'>"],
  ["GUINÉE", "Conakry", "Afrique", 245857, "<img src='images/Guinée.png' class='image'>", "<img src='images/Drapeau/Guinéed.png' class='image'>"],
  ["GUINÉE ÉQUATORIALE", "Malabo", "Afrique", 1402985, "<img src='images/EquatorialGuinea.png' class='image'>", "<img src='images/Drapeau/EquatorialGuinead.png' class='image'>"],
  ["GUINÉE-BISSAU", "Bissau", "Afrique", 36125, "<img src='images/Guinée Bissau.png' class='image'>", "<img src='images/Drapeau/Guinéebissaud.png' class='image'>"],
  ["GUYANE", "Georgetown", "Sud", 214969, "<img src='images/Guyane.png' class='image'>", "<img src='images/Drapeau/Guyaned.png' class='image'>"],
  ["HAÏTI", "Port-au-Prince", "Nord", 27750, "<img src='images/Haïti.png' class='image'>", "<img src='images/Drapeau/Haïtid.png' class='image'>"],
  ["HONDURAS", "Tegucigalpa", "Nord", 112492, "<img src='images/Honduras.png' class='image'>", "<img src='images/Drapeau/Hondurasd.png' class='image'>"],
  ["HONGRIE", "Budapest", "Europe", 93030, "<img src='images/Hongrie.png' class='image'>", "<img src='images/Drapeau/Hongried.png' class='image'>"],
  ["INDE", "New Delhi", "Asie", 3287263, "<img src='images/Inde.png' class='image'>", "<img src='images/Drapeau/Inded.png' class='image'>"],
  ["INDONÉSIE", "Jakarta", "Asie", 1904569, "<img src='images/Indonésie.png' class='image'>", "<img src='images/Drapeau/Indonésied.png' class='image'>"],
  ["IRAN", "Téhéran", "Asie", 1648195, "<img src='images/Iran.png' class='image'>", "<img src='images/Drapeau/Irand.png' class='image'>"],
  ["IRAK", "Bagdad", "Asie", 438317, "<img src='images/Irak.png' class='image'>", "<img src='images/Drapeau/Irakd.png' class='image'>"],
  ["IRLANDE", "Dublin", "Europe", 70273, "<img src='images/Irlande.png' class='image'>", "<img src='images/Drapeau/Irlanded.png' class='image'>"],
  ["ISLANDE", "Reykjavik", "Europe", 103000, "<img src='images/Iceland.png' class='image'>", "<img src='images/Drapeau/Islanded.png' class='image'>"],
  ["ISRAËL", "Jérusalem", "Asie", 20770, "<img src='images/Israël.png' class='image'>", "<img src='images/Drapeau/Israëld.png' class='image'>"],
  ["ITALIE", "Rome", "Europe", 301340, "<img src='images/Italie.png' class='image'>", "<img src='images/Drapeau/Italied.png' class='image'>"],
  ["JAMAÏQUE", "Kingston", "Nord", 10991, "<img src='images/Jamaique.png' class='image'>", "<img src='images/Drapeau/Jamaïqued.png' class='image'>"],
  ["JAPON", "Tokyo", "Asie", 377975, "<img src='images/Japan.png' class='image'>", "<img src='images/Drapeau/Japond.png' class='image'>"],
  ["JORDANIE", "Amman", "Asie", 89342, "<img src='images/Jordan.png' class='image'>", "<img src='images/Drapeau/Jordaniesd.png' class='image'>"]
  ["KAZAKHSTAN", "Astana", "Asie", 2724900, "<img src='images/Kazakhstan.png' class='image'>", "<img src='images/Drapeau/Kazakhstansd.png' class='image'>"],
  ["KENYA", "Nairobi", "Afrique", 580367, "<img src='images/Kenya.png' class='image'>", "<img src='images/Drapeau/Kenyad.png' class='image'>"],
  ["KIRGHIZISTAN", "Bichkek", "Asie", 199951, "<img src='images/Kirghizistan.png' class='image'>", "<img src='images/Drapeau/Kirghizistand.png' class='image'>"],
  ["KIRIBATI", "South Tarawa", "Océanie", 811, "<img src='images/Kiribati.png' class='image'>", "<img src='images/Drapeau/Kiribatid.png' class='image'>"],
  ["KOWEÏT", "Koweït", "Asie", 17818, "<img src='images/Kuwait.png' class='image'>", "<img src='images/Drapeau/Koweït d.png' class='image'>"],
  ["LAOS", "Vientiane", "Asie", 236800, "<img src='images/Laos.png' class='image'>", "<img src='images/Drapeau/Laosd.png' class='image'>"],
  ["LESOTHO", "Maseru", "Afrique", 30355, "<img src='images/Lesotho.png' class='image'>", "<img src='images/Drapeau/Lesothod.png' class='image'>"],
  ["LETTONIE", "Riga", "Europe", 64559, "<img src='images/Lettonie.png' class='image'>", "<img src='images/Drapeau/Lettonied.png' class='image'>"],
  ["LIBAN", "Beyrouth", "Asie", 10452, "<img src='images/Liban.png' class='image'>", "<img src='images/Drapeau/Liband.png' class='image'>"],
  ["LIBÉRIE", "Monrovia", "Afrique", 111369, "<img src='images/Liberie.png' class='image'>", "<img src='images/Drapeau/Liberiad.png' class='image'>"],
  ["LIBYE", "Tripoli", "Afrique", 1759540, "<img src='images/Libye.png' class='image'>", "<img src='images/Drapeau/Libyed.png' class='image'>"],
  ["LITUANIE", "Vilnius", "Europe", 65300, "<img src='images/Lituanie.png' class='image'>", "<img src='images/Drapeau/Lituanied.png' class='image'>"],
  ["LUXEMBOURG", "Luxembourg", "Europe", 2586, "<img src='images/Luxembourg.png' class='image'>", "<img src='images/Drapeau/Luxembourgd.png' class='image'>"],
  ["MADAGASCAR", "Antananarivo", "Afrique", 587041, "<img src='images/Madagascar.png' class='image'>", "<img src='images/Drapeau/Madagascard.png' class='image'>"],
  ["MALAISIE", "Kuala Lumpur", "Asie", 330803, "<img src='images/Malaisie.png' class='image'>", "<img src='images/Drapeau/Malaisied.png' class='image'>"],
  ["MALAWI", "Lilongwe", "Afrique", 118484, "<img src='images/Malawi.png' class='image'>", "<img src='images/Drapeau/Malawid.png' class='image'>"],
  ["MALDIVES", "Malé", "Asie", 298, "<img src='images/Maldives.png' class='image'>", "<img src='images/Drapeau/Maldivesd.png' class='image'>"],
  ["MALI", "Bamako", "Afrique", 1240192, "<img src='images/Mali.png' class='image'>", "<img src='images/Drapeau/Malid.png' class='image'>"],
  ["MALTE", "La Valette", "Europe", 514644, "<img src='images/Malta.png' class='image'>", "<img src='images/Drapeau/Maltad.png' class='image'>"],
  ["MAROC", "Rabat", "Afrique", 710850, "<img src='images/Maroc.png' class='image'>", "<img src='images/Drapeau/Marocd.png' class='image'>"],
  ["ÎLES MARSHALL", "Majuro", "Océanie", 181, "<img src='images/Marshall.png' class='image'>", "<img src='images/Drapeau/Marshalld.png' class='image'>"],
  ["MEXIQUE", "Mexico", "Nord", 1964375, "<img src='images/Mexique.png' class='image'>", "<img src='images/Drapeau/Mexiqued.png' class='image'>"],
  ["MICRONÉSIE", "Palikir", "Océanie", 702, "<img src='images/Micronésie.png' class='image'>", "<img src='images/Drapeau/Micronésied.png' class='image'>"],
  ["MOLDAVIE", "Chisinau", "Europe", 33843, "<img src='images/Moldavie.png' class='image'>", "<img src='images/Drapeau/Moldovad.png' class='image'>"],
  ["MONACO", "Monaco", "Europe", 2, "<img src='images/Monaco.png' class='image'>", "<img src='images/Drapeau/Monacod.png' class='image'>"],
  ["MONGOLIE", "Oulan-Bator", "Asie", 1564116, "<img src='images/Mongolie.png' class='image'>", "<img src='images/Drapeau/Mongolied.png' class='image'>"],
  ["MOZAMBIQUE", "Maputo", "Afrique", 801590, "<img src='images/Mozambique.png' class='image'>", "<img src='images/Drapeau/Mozambiqued.png' class='image'>"],
  ["NAMIBIE", "Windhoek", "Afrique", 825615, "<img src='images/Namibie.png' class='image'>", "<img src='images/Drapeau/Namibied.png' class='image'>"],
  ["NARU", "Yaren", "Océanie", 21, "<img src='images/Nauru.png' class='image'>", "<img src='images/Drapeau/Naurud.png' class='image'>"],
  ["NEPAL", "Kathmandu", "Asie", 147181, "<img src='images/Nepal.png' class='image'>", "<img src='images/Drapeau/Nepald.png' class='image'>"],
  ["NICARAGUA", "Managua", "Nord", 130373, "<img src='images/Nicaragua.png' class='image'>", "<img src='images/Drapeau/Nicaraguad.png' class='image'>"],
  ["NIGER", "Niamey", "Afrique", 1267000, "<img src='images/Niger.png' class='image'>", "<img src='images/Drapeau/Nigerd.png' class='image'>"],
  ["NIGÉRIA", "Abuja", "Afrique", 923768, "<img src='images/Nigeria.png' class='image'>", "<img src='images/Drapeau/Nigeriad.png' class='image'>"],
  ["NOUVELLE-ZÉLANDE", "Wellington", "Océanie", 270467, "<img src='images/Nouvelle-Zelande.png' class='image'>", "<img src='images/Drapeau/NouvelleZelanded.png' class='image'>"]
  ["OMAN", "Mascate", "Asie", 309500, "<img src='images/Oman.png' class='image'>", "<img src='images/Drapeau/Omand.png' class='image'>"],
  ["OUGANDA", "Kampala", "Afrique", 241038, "<img src='images/Ouganda.png' class='image'>", "<img src='images/Drapeau/Ougandad.png' class='image'>"],
  ["OUZBÉKISTAN", "Tachkent", "Asie", 447400, "<img src='images/Ouzbekistan.png' class='image'>", "<img src='images/Drapeau/Ouzbekistand.png' class='image'>"],
  ["PAKISTAN", "Islamabad", "Asie", 881913, "<img src='images/Pakistan.png' class='image'>", "<img src='images/Drapeau/Pakistand.png' class='image'>"],
  ["PALAOS", "Ngerulmud", "Océanie", 459, "<img src='images/Palaos.png' class='image'>", "<img src='images/Drapeau/Palaud.png' class='image'>"],
  ["PANAMA", "Panama", "Nord", 75417, "<img src='images/Panama.png' class='image'>", "<img src='images/Drapeau/Panama.png' class='image'>"],
  ["PAPOUASIE-NOUVELLE-GUINÉE", "Port Moresby", "Océanie", 462840, "<img src='images/Papouasie-Nouvelle-Guinee.png' class='image'>", "<img src='image/Drapeau/PapouasieNouvelleGuineed.png' class='image'>"],
  ["PARAGUAY", "Asunción", "Sud", 406752, "<img src='images/Paraguay.png' class='image'>", "<img src='images/Drapeau/Paraguayd.png' class='image'>"],
  ["PÉROU", "Lima", "Sud", 1285216, "<img src='images/Peru.png' class='image'>", "<img src='images/Drapeau/Peroud.png' class='image'>"],
  ["PORTO RICO", "San Juan", "Nord", 8872, "<img src='images/Puerto Rico.png' class='image'>", "<img src='images/Drapeau/Puerto Ricod.png' class='image'>"],
  ["QATAR", "Doha", "Asie", 11571, "<img src='images/Qatar.png' class='image'>", "<img src='images/Drapeau/Qatard.png' class='image'>"],
  ["ROUMANIE", "Bucarest", "Europe", 238391, "<img src='images/Roumanie.png' class='image'>", "<img src='images/Drapeau/Roumanied.png' class='image'>"],
  ["ROYAUME-UNI", "Londres", "Europe", 243610, "<img src='images/UK.png' class='image'>", "<img src='images/Drapeau/UK.png' class='image'>"],
  ["RUSSIE", "Moscou", "Europe", 17098242, "<img src='images/Russie.png' class='image'>", "<img src='images/Drapeau/Russied.png' class='image'>"],
  ["RWAANDA", "Kigali", "Afrique", 26338, "<img src='images/Rwanda.png' class='image'>", "<img src='images/Drapeau/Rwadad.png' class='image'>"],
  ["SAINT-KITTS-ET-NEVIS", "Basseterre", "Nord", 261, "<img src='images/KittsetNieve.png' class='image'>", "<img src='images/Drapeau/Saint Kitts et Nevis.png' class='image'>"],
  ["SAINT-LUCIE", "Castries", "Nord", 616, "<img src='images/St Lucie.png' class='image'>", "<img src='images/Drapeau/Saint Lucied.png' class='image'>"],
  ["SAINT-MARIN", "Saint-Marin", "Europe", 61, "<img src='images/Saint Marin.png' class='image'>", "<img src='images/Drapeau/SaintMarind.png' class='image'>"],
  ["SAINT-VINCENT ET LES GRENADINES", "Kingstown", "Nord", 389, "<img src='images/Saint Vincent.png' class='image'>", "<img src='images/Drapeau/Saint Vincented.png' class='image'>"],
  ["SALOMON", "Honiara", "Océanie", 28400, "<img src='images/Solomon Islands.png' class='image'>", "<img src='images/Drapeau/Solomon Islands.png' class='image'>"],
  ["SAMOA", "Apia", "Océanie", 294, "<img src='images/Samoa.png' class='image'>", "<img src='images/Drapeau/Samoad.png' class='image'>"],
  ["SAO TOMÉ ET PRÍNCIPE", "São Tomé", "Afrique", 964, "<img src='images/Sao Tome et Principe.png' class='image'>", "<img src='images/Drapeau/Sao Tome et Principe.png' class='image'>"],
  ["SÉNÉGAL", "Dakar", "Afrique", 196722, "<img class='image' src='images/Senegal.png'>", "<img class='image' src='images/Drapeau/Senegald.png'>"],
  ["SERBIE", "Belgrade", "Europe", 88361, "<img class='image' src='images/Serbie.png'>", "<img class='image' src='images/Drapeau/Serbied.png'>"],
  ["SEYCHELLES", "Victoria", "Afrique", 455, "<img class='image' src='images/Seychelles.png'>", "<img class='image' src='images/Drapeau/Seychellesd.png'>"],
  ["SIERRA LEONE", "Freetown", "Afrique", 71740, "<img class='image' src='images/Sierra Leone.png'>", "<img class='image' src='images/Drapeau/Sierra Leoned.png'>"],
  ["SINGAPOUR", "Singapour", "Asie", 716, "<img class='image' src='images/Singapore.png'>", "<img class='image' src='images/Drapeau/Singapored.png' class='image'>"],
  ["SOMALIE", "Mogadiscio", "Afrique", 637657, "<img class='image' src='images/Somalie.png'>", "<img class='image' src='images/Drapeau/Somalied.png' class='image'>"],
  ["SRI LANKA", "Colombo", "Asie", 65610, "<img class='image' src='images/Sri Lanka.png'>", "<img class='image' src='images/Drapeau/SriLankad.png' class='image'>"],
  ["SUDAN", "Khartoum", "Afrique", 1861484, "<img class='image' src='images/Sudan.png'>", "<img class='image' src='images/Drapeau/Sudand.png' class='image'>"],
  ["SURINAME", "Paramaribo", "Sud", 163820, "<img class='image' src='images/Suriname.png'>", "<img class='image' src='images/Drapeau/Surinamed.png' class='image'>"],
  ["SUÈDE", "Stockholm", "Europe", 450295, "<img class='image' src='images/Suede.png'>", "<img class='image' src='images/Drapeau/Sueded.png' class='image'>"],
  ["SUD-SUDAN", "Djouba", "Afrique", 619745, "<img class='image' src='images/Sudan Sud.png'>", "<img class='image' src='images/Drapeau/SudSudand.png' class='image'>"],
  ["SUISSE", "Berne", "Europe", 41284, "<img class='image' src='images/Suisse.png'>", "<img class='image' src='images/Drapeau/Suissed.png' class='image'>"],
  ["SYRIE", "Damas", "Asie", 185180, "<img class='image' src='images/Syrie.png'>", "<img class='image' src='images/Drapeau/Syried.png' class='image'>"],
  ["TAIWAN", "Taipei", "Asie", 36193, "<img class='image' src='images/Taiwan.png'>", "<img class='image' src='images/Drapeau/Taiwand.png'>"],
  ["TADJIKISTAN", "Douchanbé", "Asie", 143100, "<img class='image' src='images/Tadjikistan.png'>", "<img class='image' src='images/Drapeau/Tadjikistand.png'>"],
  ["TANZANIE", "Dodoma", "Afrique", 945087, "<img class='image' src='images/Tanzanie.png'>", "<img class='image' src='images/Drapeau/Tanzanied.png'>"],
  ["TCHAD", "N'Djamena", "Afrique", 1284000, "<img class='image' src='images/Tchad.png'>", "<img class='image' src='images/Drapeau/Tchadd.png'>"],
  ["TUNISIE", "Tunis", "Afrique", 163610, "<img class='image' src='images/Tunisia.png'>", "<img class='image' src='images/Drapeau/Tunisied.png'>"],
  ["TIMOR-LESTE", "Dili", "Asie", 1342068, "<img class='image' src='images/Timor Leste.png'>", "<img class='image' src='images/Drapeau/TimorLested.png'>"],
  ["THAÏLANDE", "Bangkok", "Asie", 513120, "<img class='image' src='images/Thailande.png'>", "<img class='image' src='images/Drapeau/Thailanded.png'>"],
  ["TURKMÉNISTAN", "Achgabat", "Asie", 491210, "<img class='image' src='images/Turkmenistan.png'>", "<img class='image' src='images/Drapeau/Turkmenistand.png'>"],
  ["TURQUIE", "Ankara", "Europe", 783562, "<img class='image' src='images/Turkiye.png'>", "<img class='image' src='images/Drapeau/Turquied.png'>"],
  ["TOGO", "Lomé", "Afrique", 8278724, "<img class='image' src='images/Togo.png'>", "<img class='image' src='images/Drapeau/Togod.png'>"],
  ["TONGA", "Nuku'alofa", "Océanie", 748, "<img class='image' src='images/Tonga.png'>", "<img class='image' src='images/Drapeau/Tongad.png'>"],
  ["TRINITÉ-ET-TOBAGO", "Port-d'Espagne", "Nord", 5130, "<img class='image' src='images/Trinidad et Tobago.png'>", "<img class='image' src='images/Drapeau/Trinite-et-Tobagod.png'>"],
  ["TUVALU", "Funafuti", "Océanie", 26, "<img class='image' src='images/Tuvalu.png'>", "<img class='image' src='images/Drapeau/Tuvalud.png'>"],
  ["UKRAINE", "Kyiv", "Europe", 603550, "<img class='image' src='images/Ukraine.png'>", "<img class='image' src='images/Drapeau/Ukrained.png'>"],
  ["URUGUAY", "Montevideo", "Sud", 176215, "<img class='image' src='images/Uruguay.png'>", "<img class='image' src='images/Drapeau/Uruguayd.png'>"],
  ["VANUATU", "Port-Vila", "Océanie", 12189, "<img class='image' src='images/Vanuatu.png'>", "<img class='image' src='images/Drapeau/Vanuatud.png'>"],
  ["VENEZUELA", "Caracas", "Sud", 912050, "<img class='image' src='images/Venezuela.png'>", "<img class='image' src='images/Drapeau/Venezuelaas.png'>"],
  ["VIETNAM", "Hanoï", "Asie", 331210, "<img class='image' src='images/Vietnam.png'>", "<img class='image' src='images/Drapeau/Vietnamd.png'>"],
  ["YÉMEN", "Sanaa", "Asie", 527968, "<img class='image' src='images/Yemen.png'>", "<img class='image' src='images/Drapeau/Yemend.png'>"],
  ["ZAMBIE", "Lusaka", "Afrique", 752612, "<img class='image' src='images/Zambia.png'>", "<img class='image' src='images/Drapeau/Zambied.png'>"],
  ["ZIMBABWE", "Harare", "Afrique", 390757, "<img class='image' src='images/Zimbabwe.png'>", "<img class='image' src='images/Drapeau/Zimbabwed.png'>"]
]

var continent; // Déclare une variable pour stocker le continent sélectionné
var vies = 3; // Initialise le nombre de vies à 3
var pays; // Déclare une variable pour stocker le pays sélectionné
var nbIndice; // Déclare une variable pour stocker nombre d'indices
var score = 0; // Initialise le score à 0
var max; // Déclare une variable pour stocker le score maximum
var typeJeux; // Déclare une variable pour stocker le type de jeu

function genere() {
  pays = Math.floor(Math.random() * tblPays.length-1); // Sélectionne un pays au hasard dans le tableau

  // Vérifie si un continent a été sélectionné
  if (continent != null) { 
    // Continue à sélectionner un pays jusqu'à ce qu'il corresponde au continent selectionner
    while (tblPays[pays][2] != continent) { 
      pays = Math.floor(Math.random() * tblPays.length-1); // Sélectionne un nouveau pays aléatoire
    }
  }

  nbIndice = 0; // Réinitialise le nombre d'indices utilisés
  var carte = document.querySelector(".carte"); // Sélectionne l'élément avec la classe 'carte'
  carte.innerHTML = tblPays[pays][typeJeux]; // Affiche le pays sélectionné dans l'élément 'carte'
}
  
function jouer() {
  var message = "<div id='topLine'><div id='vies'></div><div id='score'></div>\
    <div id='stop'><input type='button' value='Arrêter' onclick='arrete()'></div></div>\
    <center><div class='carte'></div></center>\
    <div class='emptySpace'></div>\
    <div>\
      <input type='text' id='guess'>\
      <input type='button' value='Deviner' id='devine' onclick='devine()'>\
      <div id='erreurs'></div>\
      <input type='button' value='Indice' id='indice' onmouseover='indice()' onmouseleave='popup'>\
      <div id='indice'  class='popup'><span class='popuptext' id='myPopup'></span></div>\
    </div>\
    <div class='emptySpace'></div>"; // Crée le message HTML pour le jeu
  var affiche = document.getElementById("jeux"); // Sélectionne l'élément avec le ID 'jeux'
  affiche.innerHTML = message; /* Affiche le message dans l'élément 'jeux' */

  document.getElementById("guess").focus(); // Met le focus sur le champ de saisie

  var affiche = document.getElementById("score"); // Sélectionne l'élément pour afficher le score
  affiche.innerHTML = "Score : " + score; // Affiche le score actuel

  lives(); 
  genere(); 
}

function devine() {
  var essaie = document.getElementById("guess").value.toUpperCase().trim(" "); // Récupère la valeur saisie et la formate
  
  // Vérifie si l'entrée n'est pas vide
  if (essaie != " ") { 
    if (essaie == tblPays[pays][0]) { // Vérifie si la réponse est correcte
      message = "Bravo, vous avez réussit à deviner le bon pays"; // Message de succès
      score += 500; // Ajoute 500 au score
      
      genere(); // Génère un nouveau pays
    } else {
      vies--; // Diminue le nombre de vies
      message = "<br>Non, ce n'est pas " + essaie + ". Réessaye<br>"; // Message d'erreur
    }
  } else {
    message = "<br>Entrée un pays!<br>"; // Message si l'entrée est vide
  }
  
  lives(); // Met à jour l'affichage des vies
  var affiche = document.getElementById("score"); // Sélectionne l'élément pour afficher le score
  affiche.innerHTML = "Score : " + score; // Affiche le score mis à jour
  
  document.getElementById("erreurs").innerHTML = message; // Affiche le message d'erreur
  var textBox = document.getElementById("guess"); // Sélectionne le champ de saisie
  textBox.value = ""; // Réinitialise le champ de saisie
}

function lives() {
  var vieAffiche = document.getElementById("vies"); // Sélectionne l'élément pour afficher les vies
  var imageHTML = "<img class='coeur' src='https://upload.wikimedia.org/wikipedia/commons/thumb/f/f1/Heart_coraz%C3%B3n.svg/800px-Heart_coraz%C3%B3n.svg.png'>"; // HTML pour l'image de vie
  var vieMessage = ""; // Initialise le message des vies

  // Vérifie si le joueur a encore des vies
  if (vies > 0) { 
    for (var i = 0; i < vies; i++) { // Pour chaque vie restante
      vieMessage += imageHTML; // Ajoute une image de vie au message
    }
  } else {
    switch (continent){
      case "Nord":
        score = score*1.1;
        break;
      case "Sud":
        score = score*1.05;
        break;
      case "Europe":
        score = score*1.07;
        break;
      case "Asie":
        score = score*1.15;
        break;
      case "Océanie":
        score = score*1.17;
        break;
      default:
        score = score*1.2;
        break;
    }
    popUp = document.createElement("div"); // Crée un nouvel élément pour le message de fin de jeu
    popUp.id = 'gameOver'; // Définit l'ID de l'élément
    popUp.innerHTML = "Game Over<br>Vous avez perdu<br>Votre score est de \n<h1>" + score + "</h1><input type='button' value='Rejouer' onclick='location.reload();'></a><a href='index.html'><input type='button' value='Quitter'<a>"; // Message de fin de jeu
    document.body.appendChild(popUp); // Ajoute le message à la page
  }
  vieAffiche.innerHTML = "Vies: " + vieMessage; // Affiche le message des vies
}

function indice() {
  var indice = document.getElementById("myPopup"); // Sélectionne l'élément pour afficher l'indice

  if (nbIndice == 0) {
    // Vérifie si c'est le premier indice
    indice.innerHTML = "La superficie du pays est de " + tblPays[pays][3] + " km²"; // Affiche la superficie comme indice
    score -= 100; // Diminue le score de 100
  } else if (nbIndice == 1) { 
    // Vérifie si c'est le deuxième indice
    indice.innerHTML = "La capitale du pays c'est " + tblPays[pays][1]; // Affiche la capitale comme indice
    score -= 100; // Diminue le score de 100
  } else if (nbIndice == 2) { 
    // Vérifie si c'est le troisième indice
    indice.innerHTML = "<br>Vous n'avez plus le droit aux indices.<br>"; // Message indiquant qu'il n'y a plus d'indices
  }
  nbIndice += 0.5; // Incrémente le nombre d'indices utilisés
  popup(); // Affiche le popup d'indice
}

function arrete() {
  vies = 0; // Met le nombre de vies à 0
  lives(); // Met à jour l'affichage des vies
}

function popup() {
  var popup = document.getElementById("myPopup"); // Sélectionne l'élément popup
  popup.classList.toggle("show"); // Affiche ou masque le popup
}

function nord() {
  continent = "Nord"; // Définit le continent comme Nord
  document.getElementById("nord").style.backgroundColor = "rgb(24, 114, 139)"; // Change la couleur de fond pour le continent Amerique du Nord à un gris pale
  document.getElementById("sud").style.backgroundColor = "transparent"; // Réinitialise la couleur de fond pour qu'il est transparent
  document.getElementById("europe").style.backgroundColor = "transparent"; // Réinitialise la couleur de fond pour qu'il est transparent
  document.getElementById("asie").style.backgroundColor = "transparent"; // Réinitialise la couleur de fond pour qu'il est transparent
  document.getElementById("afrique").style.backgroundColor = "transparent"; // Réinitialise la couleur de fond pour qu'il est transparent
  document.getElementById("oceanie").style.backgroundColor = "transparent"; // Réinitialise la couleur de fond pour qu'il est transparent
}

function sud() {
  continent = "Sud"; // Définit le continent comme Sud
  document.getElementById("nord").style.backgroundColor = "transparent"; // Réinitialise la couleur de fond pour qu'il est transparent
  document.getElementById("sud").style.backgroundColor = "rgb(24, 114, 139)"; // Change la couleur de fond pour le continent Amerique du Sud à un gris pale
  document.getElementById("europe").style.backgroundColor = "transparent"; // Réinitialise la couleur de fond pour qu'il est transparent
  document.getElementById("asie").style.backgroundColor = "transparent"; // Réinitialise la couleur de fond pour qu'il est transparaet
  document.getElementById("afrique").style.backgroundColor = "transparent"; // Réinitialise la couleur de fond pour qu'il est transparent
  document.getElementById("oceanie").style.backgroundColor = "transparent"; // Réinitialise la couleur de fond pour qu'il est transparent
}

function afrique() {
  continent = "Afrique"; // Définit le continent comme Afrique
  document.getElementById("nord").style.backgroundColor = "transparent"; // Réinitialise la couleur de fond pour qu'il est transparent
  document.getElementById("sud").style.backgroundColor = "transparent"; // Réinitialise la couleur de fond pour qu'il est transparent
  document.getElementById("europe").style.backgroundColor = "transparent"; // Réinitialise la couleur de fond pour qu'il est transparent
  document.getElementById("asie").style.backgroundColor = "transparent"; // Réinitialise la couleur de fond pour qu'il est transparent
  document.getElementById("afrique").style.backgroundColor = "rgb(24, 114, 139)"; // Change la couleur de fond pour le continent Afrique à un gris pale
  document.getElementById("oceanie").style.backgroundColor = "transparent"; // Réinitialise la couleur de fond pour qu'il est transparent
}

function europe() {
  continent = "Europe"; // Définit le continent comme Europe
  document.getElementById("nord").style.backgroundColor = "transparent"; // Réinitialise la couleur de fond pour qu'il est transparant
  document.getElementById("sud").style.backgroundColor = "transparent"; // Réinitialise la couleur de fond pour qu'il est transparent
  document.getElementById("europe").style.backgroundColor = "rgb(24, 114, 139)"; // Change la couleur de fond pour le continent Europe à un gris pale
  document.getElementById("asie").style.backgroundColor = "transparent"; // Réinitialise la couleur de fond pour qu'il est transparent
  document.getElementById("afrique").style.backgroundColor = "transparent"; // Réinitialise la couleur de fond pour qu'il est transparent
  document.getElementById("oceanie").style.backgroundColor = "transparent"; // Réinitialise la couleur de fond pour qu'il est transparent
}

function asie() {
  continent = "Asie"; // Définit le continent comme Asie
  document.getElementById("nord").style.backgroundColor = "transparent"; // Réinitialise la couleur de fond pour qu'il est transparent
  document.getElementById("sud").style.backgroundColor = "transparent"; // Réinitialise la couleur de fond pour qu'il est transparent
  document.getElementById("europe").style.backgroundColor = "transparent"; // Réinitialise la couleur de fond pour qu'il est transparent
  document.getElementById("asie").style.backgroundColor = " rgb(24, 114, 139)";// Change la couleur de fond pour le continent Asie à un gris pale
  document.getElementById("afrique").style.backgroundColor = "transparent"; // Réinitialise la couleur de fond pour qu'il est transparent
  document.getElementById("oceanie").style.backgroundColor = "transparent"; // Réinitialise la couleur de fond pour qu'il est transparent
}

function oceanie() {
  continent = "Océanie"; // Définit le continent comme Océanie
  document.getElementById("nord").style.backgroundColor = "transparent"; // Réinitialise la couleur de fond pour qu'il est transparnt
  document.getElementById("sud").style.backgroundColor = "transparent"; // Réinitialise la couleur de fond pour qu'il est transparent
  document.getElementById("europe").style.backgroundColor = "transparent"; // Réinitialise la couleur de fond pour qu'il est transparent
  document.getElementById("asie").style.backgroundColor = "transparent"; // Réinitialise la couleur de fond pour qu'il est transparent
  document.getElementById("afrique").style.backgroundColor = "transparent"; // Réinitialise la couleur de fond pour qu'il est transparent
  document.getElementById("oceanie").style.backgroundColor = "rgb(24, 114, 139)"; // Change la couleur de fond pour le continent Océanie à un gris pale
}

function shapes() {
  typeJeux = 4; // Définit le type de jeu comme formes
  document.getElementById("drapeau").style.backgroundColor = "transparent"; // Réinitialise la couleur de fond pour le type de jeu drapeau pour qu'il est transparent
  document.getElementById("silhouette").style.backgroundColor = "rgb(24, 114, 139)"; // Change la couleur de fond pour le type de jeu silhouette à un gris pale
}

function drapeau() {
  typeJeux = 5; // Définit le type de jeu comme drapeau
  document.getElementById("drapeau").style.backgroundColor = "rgb(24, 114, 139)"; // Change la couleur de fond pour le type de jeu drapeau à un gris pale
  document.getElementById("silhouette").style.backgroundColor = "transparent"; // Réinitialise la couleur de fond pour le type de jeu silhouette pour qu'il est transparent
}

