console.log("Module 1");

var $ = require("jquery");

var _ = require("lodash");

var people = [
	{
		id: 1,
		first_name: "Sydelle",
		last_name: "Durbyn",
		email: "sdurbyn0@indiatimes.com",
		gender: "Female",
		ip_address: "218.180.124.19"
	},
	{
		id: 2,
		first_name: "Gris",
		last_name: "Merwe",
		email: "gmerwe1@squidoo.com",
		gender: "Male",
		ip_address: "189.140.89.134"
	},
	{
		id: 3,
		first_name: "Koenraad",
		last_name: "Digginson",
		email: "kdigginson2@i2i.jp",
		gender: "Male",
		ip_address: "231.99.106.230"
	},
	{
		id: 4,
		first_name: "Kirby",
		last_name: "Downham",
		email: "kdownham3@miibeian.gov.cn",
		gender: "Male",
		ip_address: "179.10.106.45"
	},
	{
		id: 5,
		first_name: "Klemens",
		last_name: "Muggeridge",
		email: "kmuggeridge4@berkeley.edu",
		gender: "Male",
		ip_address: "83.117.131.194"
	},
	{
		id: 6,
		first_name: "Dalston",
		last_name: "Vance",
		email: "dvance5@odnoklassniki.ru",
		gender: "Male",
		ip_address: "106.129.247.75"
	},
	{
		id: 7,
		first_name: "Hoebart",
		last_name: "Cope",
		email: "hcope6@cbsnews.com",
		gender: "Male",
		ip_address: "136.125.57.225"
	},
	{
		id: 8,
		first_name: "Dee dee",
		last_name: "Jouhandeau",
		email: "djouhandeau7@networksolutions.com",
		gender: "Female",
		ip_address: "215.142.138.138"
	},
	{
		id: 9,
		first_name: "Ches",
		last_name: "Bonsul",
		email: "cbonsul8@cnet.com",
		gender: "Male",
		ip_address: "238.195.128.156"
	},
	{
		id: 10,
		first_name: "Betsy",
		last_name: "Udden",
		email: "budden9@columbia.edu",
		gender: "Female",
		ip_address: "116.121.99.126"
	},
	{
		id: 11,
		first_name: "Maximilianus",
		last_name: "Summerfield",
		email: "msummerfielda@mit.edu",
		gender: "Male",
		ip_address: "195.93.69.66"
	},
	{
		id: 12,
		first_name: "Augustine",
		last_name: "Barbara",
		email: "abarbarab@usgs.gov",
		gender: "Female",
		ip_address: "202.76.23.100"
	},
	{
		id: 13,
		first_name: "Farr",
		last_name: "Thelwll",
		email: "fthelwllc@sbwire.com",
		gender: "Male",
		ip_address: "215.33.74.115"
	},
	{
		id: 14,
		first_name: "Sauveur",
		last_name: "Bramhall",
		email: "sbramhalld@youtu.be",
		gender: "Male",
		ip_address: "59.40.126.228"
	},
	{
		id: 15,
		first_name: "Rosie",
		last_name: "Tejero",
		email: "rtejeroe@furl.net",
		gender: "Female",
		ip_address: "96.90.108.188"
	},
	{
		id: 16,
		first_name: "Yuri",
		last_name: "Pochin",
		email: "ypochinf@smugmug.com",
		gender: "Male",
		ip_address: "206.85.159.246"
	},
	{
		id: 17,
		first_name: "Eliot",
		last_name: "Martensen",
		email: "emartenseng@gravatar.com",
		gender: "Male",
		ip_address: "216.134.101.81"
	},
	{
		id: 18,
		first_name: "Janna",
		last_name: "Odlin",
		email: "jodlinh@ft.com",
		gender: "Female",
		ip_address: "77.218.184.227"
	},
	{
		id: 19,
		first_name: "Caspar",
		last_name: "Fane",
		email: "cfanei@businessweek.com",
		gender: "Male",
		ip_address: "82.21.216.161"
	},
	{
		id: 20,
		first_name: "Gardner",
		last_name: "Wedderburn",
		email: "gwedderburnj@gov.uk",
		gender: "Male",
		ip_address: "59.141.145.90"
	},
	{
		id: 21,
		first_name: "Camala",
		last_name: "Hamner",
		email: "chamnerk@google.com",
		gender: "Female",
		ip_address: "122.99.59.124"
	},
	{
		id: 22,
		first_name: "Rebeka",
		last_name: "Barrowclough",
		email: "rbarrowcloughl@auda.org.au",
		gender: "Female",
		ip_address: "237.183.60.245"
	},
	{
		id: 23,
		first_name: "Ellery",
		last_name: "Hyrons",
		email: "ehyronsm@yandex.ru",
		gender: "Male",
		ip_address: "69.213.170.93"
	},
	{
		id: 24,
		first_name: "Ortensia",
		last_name: "Bienvenu",
		email: "obienvenun@slashdot.org",
		gender: "Female",
		ip_address: "116.135.185.34"
	},
	{
		id: 25,
		first_name: "Ambrosius",
		last_name: "Labbey",
		email: "alabbeyo@independent.co.uk",
		gender: "Male",
		ip_address: "120.179.123.242"
	},
	{
		id: 26,
		first_name: "Stephan",
		last_name: "Ivanishchev",
		email: "sivanishchevp@ebay.com",
		gender: "Male",
		ip_address: "142.251.196.20"
	},
	{
		id: 27,
		first_name: "Koenraad",
		last_name: "Genever",
		email: "kgeneverq@theguardian.com",
		gender: "Male",
		ip_address: "113.222.191.203"
	},
	{
		id: 28,
		first_name: "Ashbey",
		last_name: "Fallawe",
		email: "afallawer@sitemeter.com",
		gender: "Male",
		ip_address: "245.99.17.24"
	},
	{
		id: 29,
		first_name: "Sophronia",
		last_name: "Geydon",
		email: "sgeydons@google.co.uk",
		gender: "Female",
		ip_address: "252.216.166.51"
	},
	{
		id: 30,
		first_name: "Leah",
		last_name: "Dight",
		email: "ldightt@jugem.jp",
		gender: "Female",
		ip_address: "240.84.33.52"
	},
	{
		id: 31,
		first_name: "Stern",
		last_name: "Mathou",
		email: "smathouu@bloglovin.com",
		gender: "Male",
		ip_address: "3.144.49.173"
	},
	{
		id: 32,
		first_name: "Zedekiah",
		last_name: "Harding",
		email: "zhardingv@ycombinator.com",
		gender: "Male",
		ip_address: "116.42.245.44"
	},
	{
		id: 33,
		first_name: "Linoel",
		last_name: "Justham",
		email: "ljusthamw@t-online.de",
		gender: "Male",
		ip_address: "93.107.171.176"
	},
	{
		id: 34,
		first_name: "Brand",
		last_name: "Greetham",
		email: "bgreethamx@w3.org",
		gender: "Male",
		ip_address: "222.6.32.23"
	},
	{
		id: 35,
		first_name: "Phyllis",
		last_name: "Howling",
		email: "phowlingy@pinterest.com",
		gender: "Female",
		ip_address: "77.132.65.85"
	},
	{
		id: 36,
		first_name: "Juliane",
		last_name: "Turbern",
		email: "jturbernz@sun.com",
		gender: "Female",
		ip_address: "170.172.52.144"
	},
	{
		id: 37,
		first_name: "Garrik",
		last_name: "Taffrey",
		email: "gtaffrey10@linkedin.com",
		gender: "Male",
		ip_address: "21.195.95.29"
	},
	{
		id: 38,
		first_name: "Frans",
		last_name: "Novotna",
		email: "fnovotna11@ibm.com",
		gender: "Male",
		ip_address: "163.0.59.247"
	},
	{
		id: 39,
		first_name: "Dallis",
		last_name: "Le Port",
		email: "dleport12@sbwire.com",
		gender: "Male",
		ip_address: "95.207.55.80"
	},
	{
		id: 40,
		first_name: "Kamilah",
		last_name: "Skirvane",
		email: "kskirvane13@seesaa.net",
		gender: "Female",
		ip_address: "241.50.76.194"
	},
	{
		id: 41,
		first_name: "Colene",
		last_name: "Dionsetto",
		email: "cdionsetto14@newyorker.com",
		gender: "Female",
		ip_address: "218.72.126.98"
	},
	{
		id: 42,
		first_name: "Rheta",
		last_name: "Moyer",
		email: "rmoyer15@indiatimes.com",
		gender: "Female",
		ip_address: "10.12.188.54"
	},
	{
		id: 43,
		first_name: "Clio",
		last_name: "Bichener",
		email: "cbichener16@com.com",
		gender: "Female",
		ip_address: "158.118.224.201"
	},
	{
		id: 44,
		first_name: "Patten",
		last_name: "Lineker",
		email: "plineker17@dot.gov",
		gender: "Male",
		ip_address: "49.53.2.213"
	},
	{
		id: 45,
		first_name: "Livvyy",
		last_name: "Gianninotti",
		email: "lgianninotti18@si.edu",
		gender: "Female",
		ip_address: "88.194.237.66"
	},
	{
		id: 46,
		first_name: "Heall",
		last_name: "Petrelli",
		email: "hpetrelli19@webmd.com",
		gender: "Male",
		ip_address: "247.74.225.176"
	},
	{
		id: 47,
		first_name: "Valida",
		last_name: "Pittway",
		email: "vpittway1a@ezinearticles.com",
		gender: "Female",
		ip_address: "87.143.90.210"
	},
	{
		id: 48,
		first_name: "Lorilyn",
		last_name: "Laidler",
		email: "llaidler1b@techcrunch.com",
		gender: "Female",
		ip_address: "137.106.157.31"
	},
	{
		id: 49,
		first_name: "Rafe",
		last_name: "Hollow",
		email: "rhollow1c@xing.com",
		gender: "Male",
		ip_address: "119.203.177.200"
	},
	{
		id: 50,
		first_name: "Joey",
		last_name: "Dumphries",
		email: "jdumphries1d@over-blog.com",
		gender: "Male",
		ip_address: "70.2.145.129"
	},
	{
		id: 51,
		first_name: "Temple",
		last_name: "Margrem",
		email: "tmargrem1e@symantec.com",
		gender: "Male",
		ip_address: "68.228.113.241"
	},
	{
		id: 52,
		first_name: "Britta",
		last_name: "Soltan",
		email: "bsoltan1f@nature.com",
		gender: "Female",
		ip_address: "92.229.201.70"
	},
	{
		id: 53,
		first_name: "Morgen",
		last_name: "Kitteringham",
		email: "mkitteringham1g@1und1.de",
		gender: "Male",
		ip_address: "114.176.48.241"
	},
	{
		id: 54,
		first_name: "Dianna",
		last_name: "Truesdale",
		email: "dtruesdale1h@usgs.gov",
		gender: "Female",
		ip_address: "60.39.52.105"
	},
	{
		id: 55,
		first_name: "Adams",
		last_name: "Van der Spohr",
		email: "avanderspohr1i@mysql.com",
		gender: "Male",
		ip_address: "163.56.196.183"
	},
	{
		id: 56,
		first_name: "Britt",
		last_name: "Isaq",
		email: "bisaq1j@drupal.org",
		gender: "Male",
		ip_address: "25.247.97.31"
	},
	{
		id: 57,
		first_name: "Hildagard",
		last_name: "Beirne",
		email: "hbeirne1k@ucla.edu",
		gender: "Female",
		ip_address: "227.241.124.46"
	},
	{
		id: 58,
		first_name: "Winna",
		last_name: "Garter",
		email: "wgarter1l@npr.org",
		gender: "Female",
		ip_address: "90.23.1.217"
	},
	{
		id: 59,
		first_name: "Bendick",
		last_name: "Yurmanovev",
		email: "byurmanovev1m@altervista.org",
		gender: "Male",
		ip_address: "156.159.39.68"
	},
	{
		id: 60,
		first_name: "Saba",
		last_name: "Muirden",
		email: "smuirden1n@ow.ly",
		gender: "Female",
		ip_address: "150.59.53.3"
	},
	{
		id: 61,
		first_name: "Eward",
		last_name: "Shelton",
		email: "eshelton1o@twitter.com",
		gender: "Male",
		ip_address: "100.188.174.181"
	},
	{
		id: 62,
		first_name: "Cullin",
		last_name: "Croughan",
		email: "ccroughan1p@arizona.edu",
		gender: "Male",
		ip_address: "52.41.72.149"
	},
	{
		id: 63,
		first_name: "Korella",
		last_name: "Hegge",
		email: "khegge1q@ocn.ne.jp",
		gender: "Female",
		ip_address: "62.150.73.69"
	},
	{
		id: 64,
		first_name: "Coreen",
		last_name: "Breese",
		email: "cbreese1r@usa.gov",
		gender: "Female",
		ip_address: "194.166.94.229"
	},
	{
		id: 65,
		first_name: "Gonzalo",
		last_name: "Hazard",
		email: "ghazard1s@springer.com",
		gender: "Male",
		ip_address: "72.8.151.80"
	},
	{
		id: 66,
		first_name: "Carma",
		last_name: "O'Fihily",
		email: "cofihily1t@eventbrite.com",
		gender: "Female",
		ip_address: "159.132.38.95"
	},
	{
		id: 67,
		first_name: "Alma",
		last_name: "Durnan",
		email: "adurnan1u@webmd.com",
		gender: "Female",
		ip_address: "82.209.177.152"
	},
	{
		id: 68,
		first_name: "Hewitt",
		last_name: "Freckingham",
		email: "hfreckingham1v@ucsd.edu",
		gender: "Male",
		ip_address: "220.107.162.52"
	},
	{
		id: 69,
		first_name: "Louie",
		last_name: "Rosiello",
		email: "lrosiello1w@upenn.edu",
		gender: "Male",
		ip_address: "171.172.59.53"
	},
	{
		id: 70,
		first_name: "Franny",
		last_name: "Boffey",
		email: "fboffey1x@cbc.ca",
		gender: "Female",
		ip_address: "16.255.201.23"
	},
	{
		id: 71,
		first_name: "Keane",
		last_name: "Cess",
		email: "kcess1y@domainmarket.com",
		gender: "Male",
		ip_address: "2.77.49.141"
	},
	{
		id: 72,
		first_name: "Teressa",
		last_name: "Marzele",
		email: "tmarzele1z@bluehost.com",
		gender: "Female",
		ip_address: "43.183.166.178"
	},
	{
		id: 73,
		first_name: "Aldus",
		last_name: "Probetts",
		email: "aprobetts20@github.com",
		gender: "Male",
		ip_address: "49.231.194.185"
	},
	{
		id: 74,
		first_name: "Marga",
		last_name: "Crann",
		email: "mcrann21@bravesites.com",
		gender: "Female",
		ip_address: "84.71.55.128"
	},
	{
		id: 75,
		first_name: "Odelle",
		last_name: "Girardeau",
		email: "ogirardeau22@yahoo.co.jp",
		gender: "Female",
		ip_address: "123.193.180.82"
	},
	{
		id: 76,
		first_name: "Eleonora",
		last_name: "Kitchiner",
		email: "ekitchiner23@hugedomains.com",
		gender: "Female",
		ip_address: "114.38.28.223"
	},
	{
		id: 77,
		first_name: "Oberon",
		last_name: "Siddons",
		email: "osiddons24@symantec.com",
		gender: "Male",
		ip_address: "225.136.137.186"
	},
	{
		id: 78,
		first_name: "Jeanne",
		last_name: "Skyram",
		email: "jskyram25@simplemachines.org",
		gender: "Female",
		ip_address: "88.85.20.199"
	},
	{
		id: 79,
		first_name: "Eolanda",
		last_name: "Ramsier",
		email: "eramsier26@tmall.com",
		gender: "Female",
		ip_address: "64.210.205.243"
	},
	{
		id: 80,
		first_name: "Alec",
		last_name: "McGaughie",
		email: "amcgaughie27@hibu.com",
		gender: "Male",
		ip_address: "93.253.200.32"
	},
	{
		id: 81,
		first_name: "Weber",
		last_name: "Muzzillo",
		email: "wmuzzillo28@51.la",
		gender: "Male",
		ip_address: "204.219.64.107"
	},
	{
		id: 82,
		first_name: "Rona",
		last_name: "Rowly",
		email: "rrowly29@artisteer.com",
		gender: "Female",
		ip_address: "185.139.227.175"
	},
	{
		id: 83,
		first_name: "Dickie",
		last_name: "Border",
		email: "dborder2a@patch.com",
		gender: "Male",
		ip_address: "174.43.169.5"
	},
	{
		id: 84,
		first_name: "Lewes",
		last_name: "Le febre",
		email: "llefebre2b@walmart.com",
		gender: "Male",
		ip_address: "238.64.92.79"
	},
	{
		id: 85,
		first_name: "Theresita",
		last_name: "Brownhall",
		email: "tbrownhall2c@illinois.edu",
		gender: "Female",
		ip_address: "40.93.217.141"
	},
	{
		id: 86,
		first_name: "Cris",
		last_name: "Kinglesyd",
		email: "ckinglesyd2d@zdnet.com",
		gender: "Female",
		ip_address: "16.130.78.160"
	},
	{
		id: 87,
		first_name: "Christophe",
		last_name: "Duguid",
		email: "cduguid2e@nhs.uk",
		gender: "Male",
		ip_address: "109.123.103.88"
	},
	{
		id: 88,
		first_name: "Jacinda",
		last_name: "Chatell",
		email: "jchatell2f@webeden.co.uk",
		gender: "Female",
		ip_address: "146.198.33.197"
	},
	{
		id: 89,
		first_name: "Sid",
		last_name: "Creddon",
		email: "screddon2g@flavors.me",
		gender: "Male",
		ip_address: "77.32.36.90"
	},
	{
		id: 90,
		first_name: "Ilene",
		last_name: "Kimmings",
		email: "ikimmings2h@wix.com",
		gender: "Female",
		ip_address: "41.99.126.50"
	},
	{
		id: 91,
		first_name: "Blane",
		last_name: "Goneau",
		email: "bgoneau2i@yelp.com",
		gender: "Male",
		ip_address: "244.123.244.198"
	},
	{
		id: 92,
		first_name: "Hinze",
		last_name: "Hamfleet",
		email: "hhamfleet2j@mozilla.org",
		gender: "Male",
		ip_address: "91.61.93.3"
	},
	{
		id: 93,
		first_name: "Eddie",
		last_name: "Whitewood",
		email: "ewhitewood2k@hugedomains.com",
		gender: "Male",
		ip_address: "183.119.229.49"
	},
	{
		id: 94,
		first_name: "Loleta",
		last_name: "Antognelli",
		email: "lantognelli2l@nps.gov",
		gender: "Female",
		ip_address: "163.40.12.250"
	},
	{
		id: 95,
		first_name: "Moria",
		last_name: "Gidney",
		email: "mgidney2m@mysql.com",
		gender: "Female",
		ip_address: "207.83.197.229"
	},
	{
		id: 96,
		first_name: "Thibaut",
		last_name: "Cromar",
		email: "tcromar2n@livejournal.com",
		gender: "Male",
		ip_address: "145.148.211.103"
	},
	{
		id: 97,
		first_name: "Klarrisa",
		last_name: "Depport",
		email: "kdepport2o@woothemes.com",
		gender: "Female",
		ip_address: "8.136.101.44"
	},
	{
		id: 98,
		first_name: "Warden",
		last_name: "Drewes",
		email: "wdrewes2p@howstuffworks.com",
		gender: "Male",
		ip_address: "13.61.167.182"
	},
	{
		id: 99,
		first_name: "Maressa",
		last_name: "Boyack",
		email: "mboyack2q@home.pl",
		gender: "Female",
		ip_address: "236.232.189.120"
	},
	{
		id: 100,
		first_name: "Ninon",
		last_name: "Cordeiro",
		email: "ncordeiro2r@google.co.jp",
		gender: "Female",
		ip_address: "197.72.163.186"
	}
];

var femaleCount = _.filter(people, { gender: "Female" }).length;

alert(femaleCount + " females!");

$("h1").html("new text");
