const cities = [
  { id: "1", citie: "Mumbai" },
  { id: "2", citie: "Delhi" },
  { id: "3", citie: "Bangalore" },
  { id: "4", citie: "Hyderabad" },
  { id: "5", citie: "Ahmedabad" },
  { id: "6", citie: "Chennai" },
  { id: "7", citie: "Kolkata" },
  { id: "8", citie: "Surat" },
  { id: "9", citie: "Pune" },
  { id: "10", citie: "Jaipur" },
  { id: "11", citie: "Lucknow" },
  { id: "12", citie: "Kanpur" },
  { id: "13", citie: "Nagpur" },
  { id: "14", citie: "Visakhapatnam" },
  { id: "15", citie: "Indore" },
  { id: "16", citie: "Thane" },
  { id: "17", citie: "Bhopal" },
  { id: "18", citie: "Patna" },
  { id: "19", citie: "Vadodara" },
  { id: "20", citie: "Ghaziabad" },
  { id: "21", citie: "Ludhiana" },
  { id: "22", citie: "Agra" },
  { id: "23", citie: "Nashik" },
  { id: "24", citie: "Faridabad" },
  { id: "25", citie: "Meerut" },
  { id: "26", citie: "Rajkot" },
  { id: "27", citie: "Kalyan-Dombivali" },
  { id: "28", citie: "Vasai-Virar" },
  { id: "29", citie: "Varanasi" },
  { id: "30", citie: "Srinagar" },
  { id: "31", citie: "Aurangabad" },
  { id: "32", citie: "Dhanbad" },
  { id: "33", citie: "Amritsar" },
  { id: "34", citie: "Navi Mumbai" },
  { id: "35", citie: "Allahabad" },
  { id: "36", citie: "Howrah" },
  { id: "37", citie: "Ranchi" },
  { id: "38", citie: "Gwalior" },
  { id: "39", citie: "Jabalpur" },
  { id: "40", citie: "Coimbatore" },
  { id: "41", citie: "Vijayawada" },
  { id: "42", citie: "Jodhpur" },
  { id: "43", citie: "Madurai" },
  { id: "44", citie: "Raipur" },
  { id: "45", citie: "Kota" },
  { id: "46", citie: "Chandigarh" },
  { id: "47", citie: "Guwahati" },
  { id: "48", citie: "Solapur" },
  { id: "49", citie: "Hubli–Dharwad" },
  { id: "50", citie: "Tiruchirappalli" },
  { id: "51", citie: "Bareilly" },
  { id: "52", citie: "Moradabad" },
  { id: "53", citie: "Mysore" },
  { id: "54", citie: "Tiruppur" },
  { id: "55", citie: "Gurgaon" },
  { id: "56", citie: "Aligarh" },
  { id: "57", citie: "Jalandhar" },
  { id: "58", citie: "Bhubaneswar" },
  { id: "59", citie: "Salem" },
  { id: "60", citie: "Warangal" },
  { id: "61", citie: "Guntur" },
  { id: "62", citie: "Bhiwandi" },
  { id: "63", citie: "Saharanpur" },
  { id: "64", citie: "Gorakhpur" },
  { id: "65", citie: "Bikaner" },
  { id: "66", citie: "Amravati" },
  { id: "67", citie: "Noida" },
  { id: "68", citie: "Jamshedpur" },
  { id: "69", citie: "Bhilai" },
  { id: "70", citie: "Cuttack" },
  { id: "71", citie: "Firozabad" },
  { id: "72", citie: "Kochi" },
  { id: "73", citie: "Nellore" },
  { id: "74", citie: "Bhavnagar" },
  { id: "75", citie: "Dehradun" },
  { id: "76", citie: "Durgapur" },
  { id: "77", citie: "Asansol" },
  { id: "78", citie: "Rourkela" },
  { id: "79", citie: "Nanded" },
  { id: "80", citie: "Kolhapur" },
  { id: "81", citie: "Ajmer" },
  { id: "82", citie: "Akola" },
  { id: "83", citie: "Gulbarga" },
  { id: "84", citie: "Jamnagar" },
  { id: "85", citie: "Ujjain" },
  { id: "86", citie: "Loni" },
  { id: "87", citie: "Siliguri" },
  { id: "88", citie: "Jhansi" },
  { id: "89", citie: "Ulhasnagar" },
  { id: "90", citie: "Jammu" },
  { id: "91", citie: "Sangli-Miraj & Kupwad" },
  { id: "92", citie: "Mangalore" },
  { id: "93", citie: "Erode" },
  { id: "94", citie: "Belgaum" },
  { id: "95", citie: "Ambattur" },
  { id: "96", citie: "Tirunelveli" },
  { id: "97", citie: "Malegaon" },
  { id: "98", citie: "Gaya" },
  { id: "99", citie: "Jalgaon" },
  { id: "100", citie: "Udaipur" },
  { id: "101", citie: "Maheshtala" },
  { id: "102", citie: "Tirupati" },
  { id: "103", citie: "Davanagere" },
  { id: "104", citie: "Kozhikode" },
  { id: "105", citie: "Akbarpur" },
  { id: "106", citie: "North Dumdum" },
  { id: "107", citie: "Sikar" },
  { id: "108", citie: "Mathura" },
  { id: "109", citie: "Kamarhati" },
  { id: "110", citie: "Ozhukarai" },
  { id: "111", citie: "Barasat" },
  { id: "112", citie: "Purnia" },
  { id: "113", citie: "Mirzapur" },
  { id: "114", citie: "Hapur" },
  { id: "115", citie: "Sonipat" },
  { id: "116", citie: "Farrukhabad" },
  { id: "117", citie: "Haridwar" },
  { id: "118", citie: "Sri Ganganagar" },
  { id: "119", citie: "Tonk" },
  { id: "120", citie: "Raurkela Industrial Township" },
  { id: "121", citie: "Muzaffarpur" },
  { id: "122", citie: "Kollam" },
  { id: "123", citie: "Rajahmundry" },
  { id: "124", citie: "Kadapa" },
  { id: "125", citie: "Ahmednagar" },
  { id: "126", citie: "Bilaspur" },
  { id: "127", citie: "Shahjahanpur" },
  { id: "128", citie: "Thrissur" },
  { id: "129", citie: "Alwar" },
  { id: "130", citie: "Kurnool" },
  { id: "131", citie: "Bally" },
  { id: "132", citie: "Nizamabad" },
  { id: "133", citie: "Parbhani" },
  { id: "134", citie: "Tumkur" },
  { id: "135", citie: "Hisar" },
  { id: "136", citie: "Ongole" },
  { id: "137", citie: "Bhind" },
  { id: "138", citie: "Naihati" },
  { id: "139", citie: "Morena" },
  { id: "140", citie: "Navghar-Manikpur" },
  { id: "141", citie: "Ambarnath" },
  { id: "142", citie: "Shivamogga" },
  { id: "143", citie: "Bidar" },
  { id: "144", citie: "Aurangabad" },
  { id: "145", citie: "Begusarai" },
  { id: "146", citie: "Sambhal" },
  { id: "147", citie: "Sagar" },
  { id: "148", citie: "Berhampur" },
  { id: "149", citie: "Pali" },
  { id: "150", citie: "Beawar" },
  { id: "151", citie: "Jalna" },
  { id: "152", citie: "Vizianagaram" },
  { id: "153", citie: "Katihar" },
  { id: "154", citie: "Hardoi" },
  { id: "155", citie: "Karimnagar" },
  { id: "156", citie: "Raj Nandgaon" },
  { id: "157", citie: "Munger" },
  { id: "158", citie: "Hugli-Chinsurah" },
  { id: "159", citie: "Hooghly" },
  { id: "160", citie: "Bhimavaram" },
  { id: "161", citie: "Nandyal" },
  { id: "162", citie: "Bulandshahr" },
  { id: "163", citie: "Puducherry" },
  { id: "164", citie: "Bhimavaram" },
  { id: "165", citie: "Kakinada" },
  { id: "166", citie: "Suryapet" },
  { id: "167", citie: "Rohtak" },
  { id: "168", citie: "Dhule" },
  { id: "169", citie: "Khammam" },
  { id: "170", citie: "Machilipatnam" },
  { id: "171", citie: "Ratlam" },
  { id: "172", citie: "Anantapur" },
  { id: "173", citie: "Panchkula" },
  { id: "174", citie: "Dibrugarh" },
  { id: "175", citie: "Baharampur" },
  { id: "176", citie: "Sikandra Rao" },
  { id: "177", citie: "Palwal" },
  { id: "178", citie: "Nalgonda" },
  { id: "179", citie: "Orai" },
  { id: "180", citie: "Nabadwip" },
  { id: "181", citie: "Jaunpur" },
  { id: "182", citie: "Madanapalle" },
  { id: "183", citie: "Tinsukia" },
  { id: "184", citie: "Nangloi Jat" },
  { id: "185", citie: "Sitapur" },
  { id: "186", citie: "Haldia" },
  { id: "187", citie: "Bhadravati" },
  { id: "188", citie: "Cuddalore" },
  { id: "189", citie: "Kavali" },
  { id: "190", citie: "Mahbubnagar" },
  { id: "191", citie: "Bhimavaram" },
  { id: "192", citie: "Kanchipuram" },
  { id: "193", citie: "Mandi" },
  { id: "194", citie: "Kadiri" },
  { id: "195", citie: "Anantnag" },
  { id: "196", citie: "Bapatla" },
  { id: "197", citie: "Amaravati" },
  { id: "198", citie: "Anjar" },
  { id: "199", citie: "Kotdwara" },
  { id: "200", citie: "Anand" },
  { id: "201", citie: "Viluppuram" },
  { id: "202", citie: "Veraval" },
  { id: "203", citie: "Vikarabad" },
  { id: "204", citie: "Tadepalligudem" },
  { id: "205", citie: "Sujangarh" },
  { id: "206", citie: "Sibsagar" },
  { id: "207", citie: "Santipur" },
  { id: "208", citie: "Rewa" },
  { id: "209", citie: "Rishra" },
  { id: "210", citie: "Purulia" },
  { id: "211", citie: "Puri" },
  { id: "212", citie: "Port Blair" },
  { id: "213", citie: "Pollachi" },
  { id: "214", citie: "Palani" },
  { id: "215", citie: "Narasaraopet" },
  { id: "216", citie: "Noida" },
  { id: "217", citie: "Nandyal" },
  { id: "218", citie: "Nadiad" },
  { id: "219", citie: "Mysore" },
  { id: "220", citie: "Morbi" },
  { id: "221", citie: "Modasa" },
  { id: "222", citie: "Miryalaguda" },
  { id: "223", citie: "Mira-Bhayandar" },
  { id: "224", citie: "Miraj" },
  { id: "225", citie: "Mangalagiri" },
  { id: "226", citie: "Madikeri" },
  { id: "227", citie: "Loni" },
  { id: "228", citie: "Latur" },
  { id: "229", citie: "Kolar" }
]



export {cities}