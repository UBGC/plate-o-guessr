// Prefiksy + koordy + sufiksy(jeśli są) dla polskich tablic rejestracyjnych
  const PL_PREFIXES = [
    {p:"WA", name:"Warszawa-Białołęka",lat:52.3219,lng:21.0109},
    {p:"AA", name:"Warszawa-Białołęka",lat:52.3219,lng:21.0109},
    {p:"WB", name:"Warszawa-Bemowo", lat:52.2393, lng:20.9152},
    {p:"AB", name:"Warszawa-Bemowo", lat:52.2393, lng:20.9152},
    {p:"WD", name:"Warszawa-Bielany",lat:52.2876, lng:20.9282},
    {p:"AD", name:"Warszawa-Bielany",lat:52.2876, lng:20.9282},
    {p:"AE", name:"Warszawa-Mokotów",lat:52.1985, lng:21.0241},
    {p:"WE", name:"Warszawa-Mokotów",lat:52.1985, lng:21.0241},
    {p:"WU", name:"Warszawa-Ochota", lat:52.2104, lng:20.9725},
    {p:"AU", name:"Warszawa-Ochota", lat:52.2104, lng:20.9725},
    {p:"WF", name:"Warszawa-Praga Płd",lat:52.2425, lng:21.0819},
    {p:"AF", name:"Warszawa-Praga Płd",lat:52.2425, lng:21.0819},
    {p:"WH", name:"Warszawa-Praga Płn",lat:52.2639, lng:21.0273},
    {p:"AH", name:"Warszawa-Praga Płn",lat:52.2639, lng:21.0273},
    {p:"WW", name:"Warszawa-Rembertów",lat:52.2570, lng:21.1586,s:"A"},
    {p:"AW", name:"Warszawa-Rembertów",lat:52.2570, lng:21.1586,s:"A"},
    {p:"WW", name:"Warszawa-Rembertów",lat:52.2570, lng:21.1586,s:"C"},
    {p:"AW", name:"Warszawa-Rembertów",lat:52.2570, lng:21.1586,s:"C"},
    {p:"WW", name:"Warszawa-Rembertów",lat:52.2570, lng:21.1586,s:"E"},
    {p:"AW", name:"Warszawa-Rembertów",lat:52.2570, lng:21.1586,s:"E"},
    {p:"WW", name:"Warszawa-Rembertów",lat:52.2570, lng:21.1586,s:"Y"},
    {p:"AW", name:"Warszawa-Rembertów",lat:52.2570, lng:21.1586,s:"Y"},
    {p:"WW", name:"Warszawa-Rembertów",lat:52.2570, lng:21.1586,s:"X"},
    {p:"AW", name:"Warszawa-Rembertów",lat:52.2570, lng:21.1586,s:"X"},
    {p:"WI", name:"Warszawa-Śródmieście",lat:52.2294,lng:21.0071},
    {p:"AI", name:"Warszawa-Śródmieście",lat:52.2294,lng:21.0071},
    {p:"WJ", name:"Warszawa-Targówek",lat:52.2840,lng: 21.0628},
    {p:"AJ", name:"Warszawa-Targówek",lat:52.2840,lng: 21.0628},
    {p:"WK", name:"Warszawa-Ursus",  lat:52.1960, lng:20.8839},
    {p:"AK", name:"Warszawa-Ursus",  lat:52.1960, lng:20.8839},
    {p:"WN", name:"Warszawa-Ursynów",lat:52.1535, lng:21.0518},
    {p:"AN", name:"Warszawa-Ursynów",lat:52.1535, lng:21.0518},
    {p:"WT", name:"Warszawa-Wawer",  lat:52.1956, lng:21.1757},
    {p:"WT", name:"Warszawa-Wawer",  lat:52.1956, lng:21.1757},
    {p:"WX", name:"Warszawa-Wesoła", lat:52.2459, lng:21.2235,s:"Y"},
    {p:"AX", name:"Warszawa-Wesoła", lat:52.2459, lng:21.2235,s:"Y"},
    {p:"WX", name:"Warszawa-Wesoła", lat:52.2459, lng:21.2235,s:"X"},
    {p:"AX", name:"Warszawa-Wesoła", lat:52.2459, lng:21.2235,s:"X"},
    {p:"WW", name:"Warszawa_Wilanów",lat:52.1645, lng:21.0827,s:"F"},
    {p:"AW", name:"Warszawa_Wilanów",lat:52.1645, lng:21.0827,s:"F"},
    {p:"WW", name:"Warszawa_Wilanów",lat:52.1645, lng:21.0827,s:"G"},
    {p:"AW", name:"Warszawa_Wilanów",lat:52.1645, lng:21.0827,s:"G"},
    {p:"WW", name:"Warszawa_Wilanów",lat:52.1645, lng:21.0827,s:"H"},
    {p:"AW", name:"Warszawa_Wilanów",lat:52.1645, lng:21.0827,s:"H"},
    {p:"WW", name:"Warszawa_Wilanów",lat:52.1645, lng:21.0827,s:"J"},
    {p:"AW", name:"Warszawa_Wilanów",lat:52.1645, lng:21.0827,s:"J"},
    {p:"WW", name:"Warszawa_Wilanów",lat:52.1645, lng:21.0827,s:"W"},
    {p:"AW", name:"Warszawa_Wilanów",lat:52.1645, lng:21.0827,s:"W"},
    {p:"WW", name:"Warszawa-Włochy", lat:52.2060, lng:20.9144,s:"K"},
    {p:"AW", name:"Warszawa-Włochy", lat:52.2060, lng:20.9144,s:"K"},
    {p:"WW", name:"Warszawa-Włochy", lat:52.2060, lng:20.9144,s:"L"},
    {p:"AW", name:"Warszawa-Włochy", lat:52.2060, lng:20.9144,s:"L"},
    {p:"WW", name:"Warszawa-Włochy", lat:52.2060, lng:20.9144,s:"M"},
    {p:"AW", name:"Warszawa-Włochy", lat:52.2060, lng:20.9144,s:"M"},
    {p:"WW", name:"Warszawa-Włochy", lat:52.2060, lng:20.9144,s:"N"},
    {p:"AW", name:"Warszawa-Włochy", lat:52.2060, lng:20.9144,s:"N"},
    {p:"WW", name:"Warszawa-Włochy", lat:52.2060, lng:20.9144,s:"V"},
    {p:"AW", name:"Warszawa-Włochy", lat:52.2060, lng:20.9144,s:"V"},
    {p:"WW", name:"Warszawa-Włochy", lat:52.2060, lng:20.9144,s:"R"},
    {p:"AW", name:"Warszawa-Włochy", lat:52.2060, lng:20.9144,s:"R"},
    {p:"WW", name:"Warszawa-Włochy", lat:52.2060, lng:20.9144,s:"S"},
    {p:"AW", name:"Warszawa-Włochy", lat:52.2060, lng:20.9144,s:"S"},
    {p:"WW", name:"Warszawa-Włochy", lat:52.2060, lng:20.9144,s:"U"},
    {p:"AW", name:"Warszawa-Włochy", lat:52.2060, lng:20.9144,s:"U"},
    {p:"WW", name:"Warszawa-Włochy", lat:52.2060, lng:20.9144,s:"P"},
    {p:"AW", name:"Warszawa-Włochy", lat:52.2060, lng:20.9144,s:"P"},
    {p:"WW", name:"Warszawa-Włochy", lat:52.2060, lng:20.9144,s:"T"},
    {p:"AW", name:"Warszawa-Włochy", lat:52.2060, lng:20.9144,s:"T"},
    {p:"WW", name:"Warszawa-Włochy", lat:52.2060, lng:20.9144,s:"U"},
    {p:"AW", name:"Warszawa-Włochy", lat:52.2060, lng:20.9144,s:"U"},
    {p:"WW", name:"Warszawa-Włochy", lat:52.2060, lng:20.9144,s:"X"},
    {p:"AW", name:"Warszawa-Włochy", lat:52.2060, lng:20.9144,s:"X"},
    {p:"WY", name:"Warszawa-Wola",   lat:52.2402, lng:20.9875},
    {p:"AY", name:"Warszawa-Wola",   lat:52.2402, lng:20.9875},
    {p:"WX", name:"Warszawa-Żoliborz",lat:52.2700,lng:20.9831},
    {p:"AX", name:"Warszawa-Żoliborz",lat:52.2700,lng:20.9831},
    {p:"DW", name:"Wrocław",         lat:51.1079, lng:17.0385},
    {p:"VW", name:"Wrocław",         lat:51.1079, lng:17.0385},
    {p:"DX", name:"Wrocław",         lat:51.1079, lng:17.0385},
    {p:"VX", name:"Wrocław",         lat:51.1079, lng:17.0385},
    {p:"DWR",name:"Wrocław",         lat:51.1079, lng:17.0385},
    {p:"VWR",name:"Wrocław",         lat:51.1079, lng:17.0385},
    {p:"KR", name:"Kraków",          lat:50.0647, lng:19.9450},
    {p:"KK", name:"Kraków",          lat:50.0647, lng:19.9450},
    {p:"JR", name:"Kraków",          lat:50.0647, lng:19.9450},
    {p:"JK", name:"Kraków",          lat:50.0647, lng:19.9450},
    {p:"KRK",name:"Kraków",          lat:50.0647, lng:19.9450},
    {p:"JRK",name:"Kraków",          lat:50.0647, lng:19.9450},
    {p:"KRA",name:"Kraków",          lat:50.0647, lng:19.9450},
    {p:"JRA",name:"Kraków",          lat:50.0647, lng:19.9450},
    {p:"PO", name:"Poznań",          lat:52.4064, lng:16.9252},
    {p:"MO", name:"Poznań",          lat:52.4064, lng:16.9252},
    {p:"PZ", name:"Poznań",          lat:52.4064, lng:16.9252},
    {p:"MZ", name:"Poznań",          lat:52.4064, lng:16.9252},
    {p:"POZ", name:"Poznań",         lat:52.4064, lng:16.9252},
    {p:"MOZ",name:"Poznań",          lat:52.4064, lng:16.9252},
    {p:"PY", name:"Poznań",          lat:52.4064, lng:16.9252},
    {p:"MY", name:"Poznań",          lat:52.4064, lng:16.9252},
    {p:"GD", name:"Gdańsk",          lat:54.3520, lng:18.6466},
    {p:"XD", name:"Gdańsk",          lat:54.3520, lng:18.6466},
    {p:"GA", name:"Gdynia",          lat:54.5189, lng:18.5305},
    {p:"XA", name:"Gdynia",          lat:54.5189, lng:18.5305},
    {p:"NO", name:"Olsztyn",         lat:53.7784, lng:20.4801},
    {p:"NOL",name:"Olsztyn",         lat:53.7784, lng:20.4801},
    {p:"BI", name:"Białystok",       lat:53.1325, lng:23.1688},
    {p:"BIA",name:"Białystok",       lat:53.1325, lng:23.1688},
    {p:"LU", name:"Lublin",          lat:51.2465, lng:22.5684},
    {p:"LUB",name:"Lublin",          lat:51.2465, lng:22.5684},
    {p:"ZS", name:"Szczecin",        lat:53.4285, lng:14.5528},
    {p:"EL", name:"Łódź",            lat:51.7592, lng:19.4550},
    {p:"ED", name:"Łódź",            lat:51.7592, lng:19.4550},
    {p:"ELW",name:"Łódź",            lat:51.7592, lng:19.4550},
    {p:"RZ", name:"Rzeszów",         lat:50.0412, lng:21.9991},
    {p:"YZ", name:"Rzeszów",         lat:50.0412, lng:21.9991},
    {p:"RZE",name:"Rzeszów",         lat:50.0412, lng:21.9991},
    {p:"YZE",name:"Rzeszów",         lat:50.0412, lng:21.9991},
    {p:"RZZ",name:"Rzeszów",         lat:50.0412, lng:21.9991},
    {p:"YZZ",name:"Rzeszów",         lat:50.0412, lng:21.9991},
    {p:"RZR",name:"Rzeszów",         lat:50.0412, lng:21.9991},
    {p:"YZR",name:"Rzeszów",         lat:50.0412, lng:21.9991},
    {p:"OP", name:"Opole",           lat:50.6751, lng:17.9213},
    {p:"OPO",name:"Opole",           lat:50.6751, lng:17.9213},
    {p:"TK", name:"Kielce",          lat:50.8661, lng:20.6286},
    {p:"TKI",name:"Kielce",          lat:50.8661, lng:20.6286},
    {p:"CB", name:"Bydgoszcz",       lat:53.1235, lng:18.0084},
    {p:"CBY",name:"Bydgoszcz",       lat:53.1235, lng:18.0084},
    {p:"CT", name:"Toruń",           lat:53.0138, lng:18.5984},
    {p:"CTR",name:"Toruń",           lat:53.0138, lng:18.5984},
    {p:"FG", name:"Gorzów Wlkp.",    lat:52.7368, lng:15.2287},
    {p:"FGW", name:"Gorzów Wlkp.",   lat:52.7368, lng:15.2287},
    {p:"FZ", name:"Zielona Góra",    lat:51.9356, lng:15.5062},
    {p:"FZI", name:"Zielona Góra",   lat:51.9356, lng:15.5062},
    {p:"WP", name:"Płock",           lat:52.5463, lng:19.7065},
    {p:"AP", name:"Płock",           lat:52.5463, lng:19.7065},
    {p:"WPL", name:"Płock",          lat:52.5463, lng:19.7065},
    {p:"APL", name:"Płock",          lat:52.5463, lng:19.7065},
    {p:"LZ", name:"Zamość",          lat:50.7231, lng:23.2519},
    {p:"LZA",name:"Zamość",          lat:50.7231, lng:23.2519},
    {p:"ES", name:"Skierniewice",    lat:51.9591, lng:20.1445},
    {p:"ESK",name:"Skierniewice",    lat:51.9591, lng:20.1445},
    {p:"DL", name:"Legnica",         lat:51.2070, lng:16.1550},
    {p:"VL", name:"Legnica",         lat:51.2070, lng:16.1550},
    {p:"DLE",name:"Legnica",         lat:51.2070, lng:16.1550},
    {p:"VLE", name:"Legnica",        lat:51.2070, lng:16.1550},
    {p:"SCI",name:"Cieszyn",         lat:49.7487, lng:18.6352},
    {p:"SCN",name:"Cieszyn",         lat:49.7487, lng:18.6352},
    {p:"ICI",name:"Cieszyn",         lat:49.7487, lng:18.6352},
    {p:"ICN",name:"Cieszyn",         lat:49.7487, lng:18.6352},
    {p:"RT", name:"Tarnobrzeg",      lat:50.5730, lng:21.6794},
    {p:"YT", name:"Tarnobrzeg",      lat:50.5730, lng:21.6794},
    {P:"RTA",name:"Tarnobrzeg",      lat:50.5730, lng:21.6794},
    {p:"YTA",name:"Tarnobrzeg",      lat:50.5730, lng:21.6794},
    {p:"WR", name:"Radom",           lat:51.4027, lng:21.1471},
    {p:"AR", name:"Radom",           lat:51.4027, lng:21.1471},
    {p:"WRA", name:"Radom",           lat:51.4027, lng:21.1471},
    {p:"ARA", name:"Radom",           lat:51.4027, lng:21.1471},
    {p:"NE", name:"Elbląg",          lat:54.1522, lng:19.4088},
    {p:"NEB",name:"Elbląg",          lat:54.1522, lng:19.4088},
    {p:"BL", name:"Łomża",           lat:53.1781, lng:22.0594},
    {p:"BLM",name:"Łomża",           lat:53.1781, lng:22.0594},
    {p:"KT", name:"Tarnów",          lat:50.0121, lng:20.9858},
    {p:"JT", name:"Tarnów",          lat:50.0121, lng:20.9858},
    {p:"RP", name:"Przemyśl",        lat:49.7840, lng:22.7673},
    {p:"YP", name:"Przemyśl",        lat:49.7840, lng:22.7673},
    {p:"RPR",name:"Przemyśl",        lat:49.7840, lng:22.7673},
    {p:"YPR",name:"Przemyśl",        lat:49.7840, lng:22.7673},
    {p:"ZSW",name:"Świnoujście",     lat:53.9105, lng:14.2471},
    {p:"BS", name:"Suwałki",         lat:54.1115, lng:22.9300},
    {p:"CG", name:"Grudziądz",       lat:53.4841, lng:18.7536},
    {p:"CGR",name:"Grudziądz",       lat:53.4841, lng:18.7536},
    {p:"PGN",name:"Gniezno",         lat:52.5342, lng:17.5826},
    {p:"MGN",name:"Gniezno",         lat:52.5342, lng:17.5826},
    {p:"POS",name:"Ostrów Wlkp.",    lat:51.6567, lng:17.8067},
    {p:"MOS",name:"Ostrów Wlkp.",    lat:51.6567, lng:17.8067},
    {p:"NBR",name:"Braniewo",        lat:54.3792, lng:19.8193},
    {p:"GCH",name:"Chojnice",        lat:53.6969, lng:17.5570},
    {p:"XCH",name:"Chojnice",        lat:53.6969, lng:17.5570},
    {p:"ZSL",name:"Sławno",          lat:54.3622, lng:16.6780},
    {p:"NOS",name:"Ostróda",         lat:53.6967, lng:19.9646},
    {p:"FMI",name:"Międzyrzecz",     lat:52.4451, lng:15.5785},
    {p:"OOL",name:"Olesno",          lat:50.8766, lng:18.4200},
    {p:"KCH",name:"Chrzanów",        lat:50.1396, lng:19.4027},
    {p:"JCH",name:"Chrzanów",        lat:50.1396, lng:19.4027},  
    {p:"ZK",name:"Koszalin",         lat:54.1952, lng:16.1711},
    {p:"ZKO",name:"Koszalin",        lat:54.1952, lng:16.1711},
    {p:"ZBI",name:"Białogard",       lat:54.0100, lng:15.9871},
    {p:"ZCH",name:"Choszczo",        lat:53.1686, lng:15.4203},
    {p:"ZDR",name:"Drawsko Pomorskie",lat:53.5361,lng:15.8097},
    {p:"ZGL",name:"Goleniów",        lat:53.5682, lng:14.8284},
    {p:"ZGY",name:"Gryfice",         lat:53.9161, lng:15.1977},
    {p:"ZGR",name:"Gryfino",         lat:53.2526, lng:14.4880},
    {p:"ZKA",name:"Kamień Pomorski", lat:53.9659, lng:14.7704},
    {p:"ZKL",name:"Kołobrzeg",       lat:54.1750, lng:15.5762},
    {p:"ZLO",name:"Łobez",           lat:53.6414, lng:15.6192},
    {p:"ZMY",name:"Myślibórz",       lat:52.9245, lng:14.8685},
    {p:"ZPL",name:"Police",          lat:53.5421, lng:14.5607},
    {p:"ZPY",name:"Pyrzyce",         lat:53.1457, lng:14.8934},
    {p:"ZST",name:"Stargard",        lat:53.3436, lng:15.0353},
    {p:"ZSZ",name:"Szczecinek",      lat:53.7024, lng:16.7075},
    {p:"ZSD",name:"Świdwin",         lat:53.7755, lng:15.7702},
    {p:"ZWA",name:"Wałcz",           lat:53.2811, lng:16.4736},
    {p:"GSP",name:"Sopot",           lat:54.4447, lng:18.5699},
    {p:"XSP",name:"Sopot",           lat:54.4447, lng:18.5699},
    {p:"GS", name:"Słupsk",          lat:54.4528, lng:17.0225},
    {p:"XS", name:"Słupsk",          lat:54.4528, lng:17.0225},
    {p:"GBY",name:"Bytów",           lat:54.1686, lng:17.4920},
    {p:"XBY",name:"Bytów",           lat:54.1686, lng:17.4920},
    {p:"GCZ",name:"Człuchów",        lat:53.6668, lng:17.3548},
    {p:"XCZ",name:"Człuchów",        lat:53.6668, lng:17.3548},
    {p:"GDA",name:"Pruszcz Gdański", lat:54.2639, lng:18.6403},
    {p:"XDA",name:"Pruszcz Gdański", lat:54.2639, lng:18.6403},
    {p:"GTC",name:"Tczew",           lat:54.0957, lng:18.7726},
    {p:"XTC",name:"Tczew",           lat:54.0957, lng:18.7726},
    {p:"GSL",name:"Słupsk",          lat:54.4528, lng:17.0225},
    {p:"XSL",name:"Słupsk",          lat:54.4528, lng:17.0225},
    {p:"GKS",name:"Kościerzyna",     lat:54.1209, lng:17.9729},
    {p:"XKS",name:"Kościerzyna",     lat:54.1209, lng:17.9729},
    {p:"GPU",name:"Puck",            lat:54.7160, lng:18.4078},
    {p:"XPU",name:"Puck",            lat:54.7160, lng:18.4078},
    {p:"GKA",name:"Kartuzy",         lat:54.3327, lng:18.2036},
    {p:"GKY",name:"Kartuzy",         lat:54.3327, lng:18.2036},
    {p:"XKA",name:"Kartuzy",         lat:54.3327, lng:18.2036},
    {p:"XKY",name:"Kartuzy",         lat:54.3327, lng:18.2036},
    {p:"GKW",name:"Kwidzyn",         lat:53.7512, lng:18.9330},
    {p:"XKW",name:"Kwidzyn",         lat:53.7512, lng:18.9330},
    {p:"GLE",name:"Lębork",          lat:54.5489, lng:17.7324},
    {p:"XLE",name:"Lębork",          lat:54.5489, lng:17.7324},
    {p:"GMB",name:"Malbork",         lat:54.0367, lng:19.0328},
    {p:"XMB",name:"Malbork",         lat:54.0367, lng:19.0328},
    {p:"GSZ",name:"Sztum",           lat:53.9234, lng:19.0304},
    {p:"XSZ",name:"Sztum",           lat:53.9234, lng:19.0304},
    {p:"GWE",name:"Wejherowo",       lat:54.6057, lng:18.2334},
    {p:"XWE",name:"Wejherowo",       lat:54.6057, lng:18.2334},
    {p:"GWO",name:"Wejherowo",       lat:54.6057, lng:18.2334},
    {p:"XWO",name:"Wejherowo",       lat:54.6057, lng:18.2334},
    {p:"GND",name:"Nowy Dwór Gdański",lat:54.2123,lng: 19.1174},
    {p:"XND",name:"Nowy Dwór Gdański",lat:54.2123,lng: 19.1174},
    {p:"PA", name:"Kalisz",          lat:51.7590, lng:18.0781},
    {p:"MA", name:"Kalisz",          lat:51.7590, lng:18.0781},
    {p:"PK", name:"Kalisz",          lat:51.7590, lng:18.0781},
    {p:"MK", name:"Kalisz",          lat:51.7590, lng:18.0781},
    {p:"PKO", name:"Konin",          lat:52.2322, lng:18.2533},
    {p:"MKO", name:"Konin",          lat:52.2322, lng:18.2533},
    {p:"PN", name:"Konin",           lat:52.2322, lng:18.2533},
    {p:"PKN", name:"Konin",           lat:52.2322, lng:18.2533},
    {m:"MKN", name:"Konin",           lat:52.2322, lng:18.2533},
    {p:"MN", name:"Konin",           lat:52.2322, lng:18.2533},
    {p:"PL", name:"Leszno",          lat:51.8456, lng:16.5665},
    {p:"ML", name:"Leszno",          lat:51.8456, lng:16.5665},
    {p:"PLE", name:"Leszno",          lat:51.8456, lng:16.5665},
    {p:"MLE", name:"Leszno",          lat:51.8456, lng:16.5665},
    {p:"PCH",name:"Chodzież",        lat:52.9941, lng:16.9195},
    {p:"MCH",name:"Chodzież",        lat:52.9941, lng:16.9195},
    {p:"PCT",name:"Czarnków",        lat:52.9070, lng:16.5660},
    {p:"MCT",name:"Czarnków",        lat:52.9070, lng:16.5660},
    {p:"PGS",name:"Gostyń",          lat:51.8838, lng:17.0041},
    {p:"MGS",name:"Gostyń",          lat:51.8838, lng:17.0041},
    {p:"PGO",name:"Grodzisk Wlkp.",  lat:52.2311, lng:16.3623},
    {p:"MGO",name:"Grodzisk Wlkp.",  lat:52.2311, lng:16.3623},
    {p:"PJA",name:"Jarocin",         lat:51.9691, lng:17.4941},
    {p:"MJA",name:"Jarocin",         lat:51.9691, lng:17.4941},
    {p:"PKA",name:"Kalisz",          lat:51.7590, lng:18.0781},
    {p:"MKA",name:"Kalisz",          lat:51.7590, lng:18.0781},
    {p:"PKE",name:"Kępno",           lat:51.2806, lng:17.9826},
    {p:"MKE",name:"Kępno",           lat:51.2806, lng:17.9826},
    {p:"PKO",name:"Koło",            lat:52.2014, lng:18.6337},
    {p:"MKO",name:"Koło",            lat:52.2014, lng:18.6337},
    {p:"PKS",name:"Kościan",         lat:52.0798, lng:16.6425},
    {p:"MKS",name:"Kościan",         lat:52.0798, lng:16.6425},
    {p:"PKR",name:"Krotoszyn",       lat:51.7015, lng:17.4255},
    {p:"MKR",name:"Krotoszyn",       lat:51.7015, lng:17.4255},
    {p:"PMI",name:"Międzychód",      lat:52.6043, lng:15.8931},
    {p:"MMI",name:"Międzychód",      lat:52.6043, lng:15.8931},
    {p:"PNT",name:"Nowy Tomyśl",     lat:52.3176, lng:16.1338},
    {p:"MNT",name:"Nowy Tomyśl",     lat:52.3176, lng:16.1338},
    {p:"POB",name:"Oborniki",        lat:52.6486, lng:16.7976},
    {p:"MOB",name:"Oborniki",        lat:52.6486, lng:16.7976},
    {p:"POT",name:"Ostrzeszów",      lat:51.4311, lng:17.9391},
    {p:"MOT",name:"Ostrzeszów",      lat:51.4311, lng:17.9391},
    {p:"PP",name:"Piła",             lat:53.1574, lng:16.7101},
    {p:"MP",name:"Piła",             lat:53.1574, lng:16.7101},
    {p:"PPL",name:"Pleszew",         lat:51.8915, lng:17.7823},
    {p:"MPL",name:"Pleszew",         lat:51.8915, lng:17.7823},
    {p:"PRA",name:"Rawicz",          lat:51.6091, lng:16.8580},
    {p:"MRA",name:"Rawicz",          lat:51.6091, lng:16.8580},
    {p:"PSL",name:"Słupca",          lat:52.2866, lng:17.8697},
    {p:"MSL",name:"Słupca",          lat:52.2866, lng:17.8697},
    {p:"PSZ",name:"Szamotuły",       lat:52.6028, lng:16.5867},
    {p:"MSZ",name:"Szamotuły",       lat:52.6028, lng:16.5867},
    {p:"PSR",name:"Środa Wlkp.",     lat:52.2321, lng:17.2691},
    {p:"MSR",name:"Środa Wlkp.",     lat:52.2321, lng:17.2691},
    {p:"PSE",name:"Śrem",            lat:52.0867, lng:17.0094},
    {p:"MSE",name:"Śrem",            lat:52.0867, lng:17.0094},
    {p:"PTU",name:"Turek",           lat:52.0160, lng:18.5157},
    {p:"MTU",name:"Turek",           lat:52.0160, lng:18.5157},
    {p:"PWA",name:"Wągrowiec",       lat:52.8096, lng:17.2071},
    {p:"MWA",name:"Wągrowiec",       lat:52.8096, lng:17.2071},
    {p:"PWL",name:"Wolsztyn",        lat:52.1119, lng:16.1078},
    {p:"MWL",name:"Wolsztyn",        lat:52.1119, lng:16.1078},
    {p:"PWR",name:"Września",        lat:52.3269, lng:17.5553},
    {p:"MWR",name:"Września",        lat:52.3269, lng:17.5553},
    {p:"PZL",name:"Złotów",          lat:53.3589, lng:17.0529},
    {p:"MZL",name:"Złotów",          lat:53.3589, lng:17.0529},
    {p:"CAL",name:"Aleksandrów Kujawski",lat:52.8761, lng:18.6961},
    {p:"CBR",name:"Brodnica",        lat:53.2637, lng:19.4065},
    {p:"CCH",name:"Chełmno",         lat:53.3495, lng:18.4232},
    {p:"CGD",name:"Golub-Dobrzyń",   lat:53.1088, lng:19.0542},
    {p:"CIL",name:"Inowrocław",      lat:52.7889, lng:18.2741},
    {p:"CLI",name:"Lipno",           lat:52.8541, lng:19.1791},
    {p:"CMG",name:"Mogilno",         lat:52.6587, lng:17.9462},
    {p:"CNA",name:"Nakło nad Notecią",lat:53.1426, lng:17.6065},
    {p:"CRA",name:"Radziejów",       lat:52.6252, lng:18.5269},
    {p:"CRY",name:"Rypin",           lat:53.0691, lng:19.4278},
    {p:"CSE",name:"Sępólno Krajeńskie",lat:53.4497, lng:17.5341},
    {p:"CSW",name:"Świecie",         lat:53.4086, lng:18.4517},
    {p:"CTU",name:"Tuchola",         lat:53.5833, lng:17.8611},
    {p:"CWA",name:"Wąbrzeźno",       lat:53.2799, lng:18.9471},
    {p:"CW",name:"Włocławek",       lat:52.6529, lng:19.0588},
    {p:"CWL",name:"Włocławek",       lat:52.6529, lng:19.0588},
    {p:"CZN",name:"Żnin",            lat:52.84767, lng:17.7201},
    {p:"FKR",name:"Krosno Odrzańskie",lat:52.0557, lng:15.0969},
    {p:"FNW",name:"Nowa Sól",       lat:51.7989, lng:15.7087},
    {p:"FSL",name:"Słubice",        lat:52.3646, lng:14.5668},
    {p:"FSD",name:"Strzelce Krajeńskie",lat:52.8798, lng:15.5319},
    {p:"FSU",name:"Sulęcin",        lat:52.4458, lng:15.1176},
    {p:"FSW",name:"Świebodzin",     lat:52.2453, lng:15.5397},
    {p:"FWS",name:"Wschowa",        lat:51.8040, lng:16.3170},
    {p:"FZG",name:"Żagań",          lat:51.6042, lng:15.3150},
    {p:"FZA",name:"Żary",           lat:51.6342, lng:15.1381},
    {p:"EP", name:"Piotrków Trybunalski",lat:51.4109, lng:19.6847},
    {p:"EPI",name:"Piotrków Trybunalski",lat:51.4109, lng:19.6847},
    {p:"EBE",name:"Bełchatów",       lat:51.3548, lng:19.4104},
    {p:"EBR",name:"Brzeziny",        lat:51.8042, lng:19.7524},
    {p:"EKU",name:"Kutno",           lat:52.2270, lng:19.3482},
    {p:"ELA",name:"Łask",            lat:51.5926, lng:19.1332},
    {p:"ELE",name:"Łęczyca",         lat:52.0493, lng:19.1932},
    {p:"ELC",name:"Łowicz",          lat:52.1057, lng:19.9545},
    {p:"EOP",name:"Opoczno",         lat:51.3729, lng:20.2713},
    {p:"EPA",name:"Pabianice",       lat:51.6609, lng:19.3249},
    {p:"EPJ",name:"Pajęczno",        lat:51.1516, lng:18.9922},
    {p:"EPD",name:"Poddębice",       lat:51.8934, lng:18.9575},
    {p:"ERA",name:"Radomsko",        lat:51.0746, lng:19.4376},
    {p:"ERW",name:"Rawa Mazowiecka", lat:51.7669, lng:20.2458},
    {p:"ESI",name:"Sieradz",         lat:51.5978, lng:18.7141},
    {p:"ETM",name:"Tomaszów Mazowiecki",lat:51.5467, lng:20.0342},
    {p:"EWI",name:"Wieluń",          lat:51.2238, lng:18.5821},
    {p:"EWE",name:"Wieruszów",       lat:51.2997, lng:18.1643},
    {p:"EZD",name:"Zduńska Wola",    lat:51.6113, lng:18.9463},
    {p:"EZG",name:"Zgierz",          lat:51.8494, lng:19.4256},
    {p:"DB",name:"Wałbrzych",        lat:50.7855, lng:16.2848},
    {p:"DBA",name:"Wałbrzych",       lat:50.7855, lng:16.2848},
    {p:"VB",name:"Wałbrzych",        lat:50.7855, lng:16.2848},
    {p:"VBA",name:"Wałbrzych",       lat:50.7855, lng:16.2848},
    {p:"DJ",name:"Jelenia Góra",     lat:50.9026, lng:15.7565},
    {p:"VJ",name:"Jelenia Góra",     lat:50.9026, lng:15.7565},
    {p:"DJE",name:"Jelenia Góra",    lat:50.9026, lng:15.7565},
    {p:"VJE",name:"Jelenia Góra",    lat:50.9026, lng:15.7565},
    {p:"DBL",name:"Bolesławiec",     lat:51.2662, lng:15.5682},
    {p:"VBL",name:"Bolesławiec",     lat:51.2662, lng:15.5682},
    {p:"DDZ",name:"Dzierżoniów",     lat:50.7241, lng:16.6406},
    {p:"VDZ",name:"Dzierżoniów",     lat:50.7241, lng:16.6406},
    {p:"DGL",name:"Głogów",          lat:51.6697, lng:16.0796},
    {p:"VGL",name:"Głogów",          lat:51.6697, lng:16.0796},
    {p:"DGR",name:"Góra",            lat:51.6750, lng:16.5424},
    {p:"VGR",name:"Góra",            lat:51.6750, lng:16.5424},
    {p:"DJA",name:"Jawor",           lat:51.0553, lng:16.1970},
    {p:"VJA",name:"Jawor",           lat:51.0553, lng:16.1970},
    {p:"DKA",name:"Kamienna Góra",   lat:50.7833, lng:15.9294},
    {p:"VKA",name:"Kamienna Góra",   lat:50.7833, lng:15.9294},
    {p:"DKL",name:"Kłodzko",         lat:50.4351, lng:16.6584},
    {p:"VKL",name:"Kłodzko",         lat:50.4351, lng:16.6584},
    {p:"DLB",name:"Lubań",           lat:51.1111, lng:15.2944},
    {p:"VLB",name:"Lubań",           lat:51.1111, lng:15.2944},
    {p:"DLU",name:"Lubin",           lat:51.3958, lng:16.1931},
    {p:"VLU",name:"Lubin",           lat:51.3958, lng:16.1931},
    {p:"DLW",name:"Lwówek Śląski",   lat:51.1099, lng:15.5936},
    {p:"VLW",name:"Lwówek Śląski",   lat:51.1099, lng:15.5936},
    {p:"DMI",name:"Milicz",          lat:51.5273, lng:17.2950},
    {p:"VMI",name:"Milicz",          lat:51.5273, lng:17.2950},
    {p:"DOL",name:"Oleśnica",        lat:51.2006, lng:17.3857},
    {p:"VOL",name:"Oleśnica",        lat:51.2006, lng:17.3857},
    {p:"DOA",name:"Oława",           lat:50.9309, lng:17.2970},
    {p:"VOA",name:"Oława",           lat:50.9309, lng:17.2970},
    {p:"DPL",name:"Polkowice",       lat:51.5126, lng:16.0588},
    {p:"VPL",name:"Polkowice",       lat:51.5126, lng:16.0588},
    {p:"DST",name:"Strzelin",        lat:50.7860, lng:17.0651},
    {p:"VST",name:"Strzelin",        lat:50.7860, lng:17.0651},
    {p:"DSR",name:"Środa Śląska",    lat:51.1661, lng:16.5947},
    {p:"VSR",name:"Środa Śląska",    lat:51.1661, lng:16.5947},
    {p:"DSW",name:"Świdnica",        lat:50.8411, lng:16.4816},
    {p:"VSW",name:"Świdnica",        lat:50.8411, lng:16.4816},
    {p:"DTR",name:"Trzebnica",       lat:51.3042, lng:17.0631},
    {p:"VTR",name:"Trzebnica",       lat:51.3042, lng:17.0631},
    {p:"DWL",name:"Wołów",           lat:51.3335, lng:16.6334},
    {p:"VWL",name:"Wołów",           lat:51.3335, lng:16.6334},
    {p:"DZA",name:"Ząbkowice Śląskie",lat:50.5938, lng:16.8155},
    {p:"VZA",name:"Ząbkowice Śląskie",lat:50.5938, lng:16.8155},
    {p:"DZG",name:"Zgorzelec",       lat:51.1400, lng:15.0044},
    {p:"VZG",name:"Zgorzelec",       lat:51.1400, lng:15.0044},
    {p:"DZL",name:"Złotoryja",       lat:51.1242, lng:15.9163},
    {p:"VZL",name:"Złotoryja",       lat:51.1242, lng:15.9163},
    {p:"OBR",name:"Brzeg",           lat:50.8529, lng:17.4702},
    {p:"OGR",name:"Głubczyce",       lat:50.1983, lng:17.8255},
    {p:"OK",name:"Kędzierzyn-Koźle", lat:50.3497, lng:18.2333},
    {p:"OKL",name:"Kluczbork",       lat:50.9776, lng:18.2135},
    {p:"OKR",name:"Krapkowice",      lat:50.4746, lng:17.9671},
    {p:"ONA",name:"Namysłów",        lat:51.0744, lng:17.7164},
    {p:"ONY",name:"Nysa",            lat:50.4778, lng:17.3419},
    {p:"OPR",name:"Prudnik",         lat:50.3293, lng:17.5778},
    {p:"OST",name:"Strzelce Opolskie",lat:50.5168, lng:18.3063},
    {p:"SB",name:"Bielsko-Biała",    lat:49.8296, lng:19.0457},
    {p:"IB",name:"Bielsko-Biała",    lat:49.8296, lng:19.0457},
    {p:"SBI",name:"Bielsko-Biała",    lat:49.8296, lng:19.0457},
    {p:"IBI",name:"Bielsko-Biała",    lat:49.8296, lng:19.0457},
    {p:"SY",name:"Bytom",            lat:50.3429, lng:18.9160},
    {p:"IY",name:"Bytom",            lat:50.3429, lng:18.9160},
    {p:"SH",name:"Chorzów",          lat:50.2990, lng:18.9490},
    {p:"IH",name:"Chorzów",          lat:50.2990, lng:18.9490},
    {p:"SC",name:"Częstochowa",      lat:50.8082, lng:19.1212},
    {p:"IC",name:"Częstochowa",      lat:50.8082, lng:19.1212},
    {p:"SCZ",name:"Częstochowa",     lat:50.8082, lng:19.1212},
    {p:"ICZ",name:"Częstochowa",     lat:50.8082, lng:19.1212},
    {p:"SD",name:"Dąbrowa Górnicza", lat:50.3303, lng:19.1850},
    {p:"ID",name:"Dąbrowa Górnicza", lat:50.3303, lng:19.1850},
    {p:"SG",name:"Gliwice",          lat:50.2965, lng:18.6692},
    {p:"IG",name:"Gliwice",          lat:50.2965, lng:18.6692},
    {p:"SGL",name:"Gliwice",          lat:50.2965, lng:18.6692},
    {p:"IGL",name:"Gliwice",          lat:50.2965, lng:18.6692},
    {p:"SJZ",name:"Jastrzębie-Zdrój", lat:49.9526, lng:18.6118},
    {p:"IJZ",name:"Jastrzębie-Zdrój", lat:49.9526, lng:18.6118},
    {p:"SJ",name:"Jaworzno",         lat:50.1993, lng:19.2754},
    {p:"IJ",name:"Jaworzno",         lat:50.1993, lng:19.2754},
    {p:"SK",name:"Katowice",         lat:50.2577, lng:19.0175},
    {p:"IK",name:"Katowice",         lat:50.2577, lng:19.0175},
    {p:"SM",name:"Mysłowice",        lat:50.2449, lng:19.1339},
    {p:"IM",name:"Mysłowice",        lat:50.2449, lng:19.1339},
    {p:"SPI",name:"Piekary Śląskie", lat:50.3791, lng:18.9444},
    {p:"IPI",name:"Piekary Śląskie", lat:50.3791, lng:18.9444},
    {p:"SL",name:"Ruda Śląska",      lat:50.2796, lng:18.8647},
    {p:"IL",name:"Ruda Śląska",      lat:50.2796, lng:18.8647},
    {p:"SR",name:"Rybnik",           lat:50.0892, lng:18.5484},
    {p:"IR",name:"Rybnik",           lat:50.0892, lng:18.5484},
    {p:"SRB",name:"Rybnik",          lat:50.0892, lng:18.5484},
    {p:"IRB",name:"Rybnik",          lat:50.0892, lng:18.5484},
    {p:"SI",name:"Siemianowice Śląskie", lat:50.3019, lng:19.0326},
    {p:"II",name:"Siemianowice Śląskie", lat:50.3019, lng:19.0326},
    {p:"SO",name:"Sosnowiec",        lat:50.2797, lng:19.1278},
    {p:"IO",name:"Sosnowiec",        lat:50.2797, lng:19.1278},
    {p:"SW",name:"Świętochłowice",   lat:50.2892, lng:18.9178},
    {p:"IW",name:"Świętochłowice",   lat:50.2892, lng:18.9178},
    {p:"ST",name:"Tychy",            lat:50.1365, lng:18.9639},
    {p:"IT",name:"Tychy",            lat:50.1365, lng:18.9639},
    {p:"SZ",name:"Zabrze",           lat:50.3053, lng:18.7875},
    {p:"IZ",name:"Zabrze",           lat:50.3053, lng:18.7875},
    {p:"SZO",name:"Żory",            lat:50.0527, lng:18.7020},
    {p:"IZO",name:"Żory",            lat:50.0527, lng:18.7020},
    {p:"SBE",name:"Będzin",          lat:50.3092, lng:19.1415},
    {p:"IBE",name:"Będzin",          lat:50.3092, lng:19.1415},
    {p:"SBL",name:"Bieruń",          lat:50.0896, lng:19.0945},
    {p:"IBL",name:"Bieruń",          lat:50.0896, lng:19.0945},
    {p:"SKL",name:"Kłobuck",         lat:50.9089, lng:18.9234},
    {p:"IKL",name:"Kłobuck",         lat:50.9089, lng:18.9234},
    {p:"SLU",name:"Lubliniec",       lat:50.6732, lng:18.6906},
    {p:"ILU",name:"Lubliniec",       lat:50.6732, lng:18.6906},
    {p:"SMI",name:"Mikołów",         lat:50.1731, lng:18.8996},
    {p:"IMI",name:"Mikołów",         lat:50.1731, lng:18.8996},
    {p:"SMY",name:"Myszków",         lat:50.5745, lng:19.3282},
    {p:"IMY",name:"Myszków",         lat:50.5745, lng:19.3282},
    {p:"SPS",name:"Pszczyna",        lat:49.9752, lng:18.9536},
    {p:"IPS",name:"Pszczyna",        lat:49.9752, lng:18.9536},
    {p:"SRC",name:"Racibórz",        lat:50.0902, lng:18.2266},
    {p:"IRC",name:"Racibórz",        lat:50.0902, lng:18.2266},
    {p:"STA",name:"Tarnowskie Góry", lat:50.4465, lng:18.8646},
    {p:"ITA",name:"Tarnowskie Góry", lat:50.4465, lng:18.8646},
    {p:"SWD",name:"Wodzisław Śląski", lat:50.0082, lng:18.4766},
    {p:"IWD",name:"Wodzisław Śląski", lat:50.0082, lng:18.4766},
    {p:"SWZ",name:"Wodzisław Śląski", lat:50.0082, lng:18.4766},
    {p:"IWZ",name:"Wodzisław Śląski", lat:50.0082, lng:18.4766},
    {p:"SZA",name:"Zawiercie",       lat:50.4831, lng:19.4229},
    {p:"IZA",name:"Zawiercie",       lat:50.4831, lng:19.4229},
    {p:"SZY",name:"Żywiec",          lat:49.6800, lng:19.1860},
    {p:"IZY",name:"Żywiec",          lat:49.6800, lng:19.1860},
    {p:"KN",name:"Nowy Sącz",        lat:49.6063, lng:20.7020},
    {p:"JN",name:"Nowy Sącz",        lat:49.6063, lng:20.7020},
    {p:"KNS",name:"Nowy Sącz",       lat:49.6063, lng:20.7020},
    {p:"JNS",name:"Nowy Sącz",       lat:49.6063, lng:20.7020},
    {p:"KT",name:"Tarnów",           lat:50.0052, lng:20.9749},
    {p:"JT",name:"Tarnów",           lat:50.0052, lng:20.9749},
    {p:"KTA",name:"Tarnów",          lat:50.0052, lng:20.9749},
    {p:"JTA",name:"Tarnów",          lat:50.0052, lng:20.9749},
    {p:"KBC",name:"Bochnia",         lat:49.9774, lng:20.4314},
    {p:"JBC",name:"Bochnia",         lat:49.9774, lng:20.4314},
    {p:"KBA",name:"Bochnia",         lat:49.9774, lng:20.4314},
    {p:"JBA",name:"Bochnia",         lat:49.9774, lng:20.4314},
    {p:"KBR",name:"Brzesko",         lat:49.9868, lng:20.6107},
    {p:"JBR",name:"Brzesko",         lat:49.9868, lng:20.6107},
    {p:"KDA",name:"Dąbrowa Tarnowska",lat:50.1748, lng:20.9856},
    {p:"JDA",name:"Dąbrowa Tarnowska",lat:50.1748, lng:20.9856},
    {p:"KGR",name:"Gorlice",         lat:49.6643, lng:21.1629},
    {p:"JGR",name:"Gorlice",         lat:49.6643, lng:21.1629},
    {p:"KLI",name:"Limanowa",        lat:49.7062, lng:20.4219},
    {p:"JLI",name:"Limanowa",        lat:49.7062, lng:20.4219},
    {p:"KMI",name:"Miechów",         lat:50.3566, lng:20.0279},
    {p:"JMI",name:"Miechów",         lat:50.3566, lng:20.0279},
    {p:"KMY",name:"Myslenice",       lat:49.8348, lng:19.9385},
    {p:"JMY",name:"Myslenice",       lat:49.8348, lng:19.9385},
    {p:"KNT",name:"Nowy Targ",       lat:49.4735, lng:20.0153},
    {p:"JNT",name:"Nowy Targ",       lat:49.4735, lng:20.0153},
    {p:"KOL",name:"Olkusz",          lat:50.2738, lng:19.5736},
    {p:"JOL",name:"Olkusz",          lat:50.2738, lng:19.5736},
    {p:"KOS",name:"Oświęcim",        lat:50.0415, lng:19.1998},
    {p:"JOS",name:"Oświęcim",        lat:50.0415, lng:19.1998},
    {p:"KPR",name:"Proszowice",      lat:50.1931, lng:20.2887},
    {p:"JPR",name:"Proszowice",      lat:50.1931, lng:20.2887},
    {p:"KSU",name:"Sucha Beskidzka", lat:49.7413, lng:19.5815},
    {p:"JSU",name:"Sucha Beskidzka", lat:49.7413, lng:19.5815},
    {p:"KTT",name:"Zakopane",        lat:49.3005, lng:19.9627},
    {p:"JTT",name:"Zakopane",        lat:49.3005, lng:19.9627},
    {p:"KWA",name:"Wadowice",        lat:49.8855, lng:19.5016},
    {p:"JWA",name:"Wadowice",        lat:49.8855, lng:19.5016},
    {p:"KWI",name:"Wieliczka",       lat:49.9857, lng:20.0566},
    {p:"JWI",name:"Wieliczka",       lat:49.9857, lng:20.0566},
    {p:"RK",name:"Krosno",           lat:49.6942, lng:21.7471},
    {p:"YK",name:"Krosno",           lat:49.6942, lng:21.7471},
    {p:"RKR",name:"Krosno",          lat:49.6942, lng:21.7471},
    {p:"YKR",name:"Krosno",          lat:49.6942, lng:21.7471},
    {p:"RBI",name:"Ustrzyki Dolne",  lat:49.4292, lng:22.5984},
    {p:"YBI",name:"Ustrzyki Dolne",  lat:49.4292, lng:22.5984},
    {p:"RBR",name:"Brzozów",         lat:49.6947, lng:22.0196},
    {p:"YBR",name:"Brzozów",         lat:49.6947, lng:22.0196},
    {p:"RDE",name:"Dębica",          lat:50.0549, lng:21.4057},
    {p:"YDE",name:"Dębica",          lat:50.0549, lng:21.4057},
    {p:"RJA",name:"Jarosław",        lat:50.0105, lng:22.6775},
    {p:"YJA",name:"Jarosław",        lat:50.0105, lng:22.6775},
    {p:"RJS",name:"Jasło",           lat:49.7376, lng:21.4709},
    {p:"YJS",name:"Jasło",           lat:49.7376, lng:21.4709},
    {p:"RKL",name:"Kolbuszowa",      lat:50.2463, lng:21.7845},
    {p:"YKL",name:"Kolbuszowa",      lat:50.2463, lng:21.7845},
    {p:"RLS",name:"Lesko",           lat:49.4708, lng:22.3289},
    {p:"YLS",name:"Lesko",           lat:49.4708, lng:22.3289},
    {p:"RLE",name:"Leżajsk",         lat:50.2636, lng:22.4204},
    {p:"YLE",name:"Leżajsk",         lat:50.2636, lng:22.4204},
    {p:"RLU",name:"Lubaczów",        lat:50.1656, lng:23.1245},
    {p:"YLU",name:"Lubaczów",        lat:50.1656, lng:23.1245},
    {p:"RLA",name:"Łańcut",          lat:50.0817, lng:22.2277},
    {p:"YLA",name:"Łańcut",          lat:50.0817, lng:22.2277},
    {p:"RMI",name:"Mielec",          lat:50.2926, lng:21.4295},
    {p:"YMI",name:"Mielec",          lat:50.2926, lng:21.4295},
    {p:"RNI",name:"Nisko",           lat:50.5140, lng:22.1413},
    {p:"YNI",name:"Nisko",           lat:50.5140, lng:22.1413},
    {p:"RPZ",name:"Przeworsk",       lat:50.0677, lng:22.5034},
    {p:"YPZ",name:"Przeworsk",       lat:50.0677, lng:22.5034},
    {p:"RRS",name:"Ropczyce",        lat:50.0786, lng:21.5810},
    {p:"YRS",name:"Ropczyce",        lat:50.0786, lng:21.5810},
    {p:"RSA",name:"Sanok",           lat:49.5530, lng:22.2106},
    {p:"YSA",name:"Sanok",           lat:49.5530, lng:22.2106},
    {p:"RST",name:"Stalowa Wola",    lat:50.5622, lng:22.0610},
    {p:"YST",name:"Stalowa Wola",    lat:50.5622, lng:22.0610},
    {p:"RSR",name:"Strzyżów",        lat:49.8693, lng:21.8003},
    {p:"YSR",name:"Strzyżów",        lat:49.8693, lng:21.8003},
    {p:"WO", name:"Ostrołęka",       lat:53.0563, lng:21.6177},
    {p:"AO", name:"Ostrołęka",       lat:53.0563, lng:21.6177},
    {p:"WOS",name:"Ostrołęka",       lat:53.0563, lng:21.6177},
    {p:"AOS",name:"Ostrołęka",       lat:53.0563, lng:21.6177},
    {p:"WS", name:"Siedlce",         lat:52.1619, lng:22.2722},
    {p:"AS", name:"Siedlce",         lat:52.1619, lng:22.2722},
    {p:"WSI",name:"Siedlce",         lat:52.1619, lng:22.2722},
    {p:"ASI",name:"Siedlce",         lat:52.1619, lng:22.2722},
    {p:"WBR",name:"Białobrzegi",     lat:51.6453, lng:20.9518},
    {p:"ABR",name:"Białobrzegi",     lat:51.6453, lng:20.9518},
    {p:"WCI",name:"Ciechanów",       lat:52.8837, lng:20.5904},
    {p:"ACI",name:"Ciechanów",       lat:52.8837, lng:20.5904},
    {p:"WG", name:"Garwolin",        lat:51.9006, lng:21.5544},
    {p:"AG", name:"Garwolin",        lat:51.9006, lng:21.5544},
    {p:"WGS",name:"Gostynin",        lat:52.4335, lng:19.4764},
    {p:"AGS",name:"Gostynin",        lat:52.4335, lng:19.4764},
    {p:"WGM",name:"Grodzisk Maz.",   lat:52.1104, lng:20.6223},
    {p:"AGM",name:"Grodzisk Maz.",   lat:52.1104, lng:20.6223},
    {p:"WGR",name:"Grójec",          lat:51.8664, lng:20.8661},
    {p:"AGR",name:"Grójec",          lat:51.8664, lng:20.8661},
    {p:"WKZ",name:"Kozienice",       lat:51.5866, lng:21.5487},
    {p:"AKZ",name:"Kozienice",       lat:51.5866, lng:21.5487},
    {p:"WL", name:"Legionowo",       lat:52.4019, lng:20.9412},
    {p:"AL", name:"Legionowo",       lat:52.4019, lng:20.9412},
    {p:"WLI",name:"Lipsko",          lat:51.1581, lng:21.6497},
    {p:"ALI",name:"Lipsko",          lat:51.1581, lng:21.6497},
    {p:"WLS",name:"Łosice",          lat:52.2123, lng:22.7198},
    {p:"ALS",name:"Łosice",          lat:52.2123, lng:22.7198},
    {p:"WM", name:"Mińsk Maz.",      lat:52.1759, lng:21.5537},
    {p:"AM", name:"Mińsk Maz.",      lat:52.1759, lng:21.5537},
    {p:"WMA",name:"Maków Maz.",      lat:52.8678, lng:21.0952},
    {p:"AMA",name:"Maków Maz.",      lat:52.8678, lng:21.0952},
    {p:"WML",name:"Mława",           lat:53.1256, lng:20.3512},
    {p:"AML",name:"Mława",           lat:53.1256, lng:20.3512},
    {p:"WND",name:"Nowy Dwór Maz.",  lat:52.4252, lng:20.7245},
    {p:"AND",name:"Nowy Dwór Maz.",  lat:52.4252, lng:20.7245},
    {p:"WOR",name:"Ostrów Maz.",     lat:52.8024, lng:21.8935},
    {p:"AOR",name:"Ostrów Maz.",     lat:52.8024, lng:21.8935},
    {p:"WOT",name:"Otwock",          lat:52.1098, lng:21.2629},
    {p:"AOT",name:"Otwock",          lat:52.1098, lng:21.2629},
    {p:"WPI",name:"Piaseczno",       lat:52.0664, lng:21.0172},
    {p:"API",name:"Piaseczno",       lat:52.0664, lng:21.0172},
    {p:"WPA",name:"Piaseczno",       lat:52.0664, lng:21.0172},
    {p:"APA",name:"Piaseczno",       lat:52.0664, lng:21.0172},
    {p:"WPX",name:"Piaseczno",       lat:52.0664, lng:21.0172},
    {p:"APX",name:"Piaseczno",       lat:52.0664, lng:21.0172},
    {p:"WPW",name:"Piaseczno",       lat:52.0664, lng:21.0172},
    {p:"APW",name:"Piaseczno",       lat:52.0664, lng:21.0172},
    {p:"WPN",name:"Płońsk",          lat:52.6161, lng:20.3653},
    {p:"APN",name:"Płońsk",          lat:52.6161, lng:20.3653},
    {p:"WPR",name:"Pruszków",        lat:52.1679, lng:20.7977},
    {p:"APR",name:"Pruszków",        lat:52.1679, lng:20.7977},
    {p:"WPP",name:"Pruszków",        lat:52.1679, lng:20.7977},
    {p:"APP",name:"Pruszków",        lat:52.1679, lng:20.7977},
    {p:"WPS",name:"Pruszków",        lat:52.1679, lng:20.7977},
    {p:"APS",name:"Pruszków",        lat:52.1679, lng:20.7977},
    {p:"WPZ",name:"Przasnysz",       lat:53.0190, lng:20.8803},
    {p:"APZ",name:"Przasnysz",       lat:53.0190, lng:20.8803},
    {p:"WPY",name:"Przysucha",       lat:51.3585, lng:20.6285},
    {p:"APY",name:"Przysucha",       lat:51.3585, lng:20.6285},
    {p:"WPU",name:"Pułtusk",         lat:52.7057, lng:21.0825},
    {p:"APU",name:"Pułtusk",         lat:52.7057, lng:21.0825},
    {p:"WSE",name:"Sierpc",          lat:52.8482, lng:19.6530},
    {p:"ASE",name:"Sierpc",          lat:52.8482, lng:19.6530},
    {p:"WSC",name:"Sochaczew",       lat:52.2157, lng:20.2402},
    {p:"ASC",name:"Sochaczew",       lat:52.2157, lng:20.2402},
    {p:"WSK",name:"Sokołów Podlaski",lat:52.4106, lng:22.2267},
    {p:"ASK",name:"Sokołów Podlaski",lat:52.4106, lng:22.2267},
    {p:"WSZ",name:"Szydłowiec",      lat:51.2265, lng:20.8586},
    {p:"ASZ",name:"Szydłowiec",      lat:51.2265, lng:20.8586},
    {p:"WWE",name:"Węgrów",          lat:52.4021, lng:22.0145},
    {p:"AWE",name:"Węgrów",          lat:52.4021, lng:22.0145},
    {p:"WWL",name:"Wołomin",         lat:52.3463, lng:21.2373},
    {p:"AWL",name:"Wołomin",         lat:52.3463, lng:21.2373},
    {p:"WV",name:"Wołomin",         lat:52.3463, lng:21.2373},
    {p:"AV",name:"Wołomin",         lat:52.3463, lng:21.2373},
    {p:"WWY",name:"Wyszków",         lat:52.6019, lng:21.4464},
    {p:"AWY",name:"Wyszków",         lat:52.6019, lng:21.4464},
    {p:"WZ",name:"Ożarów Maz.",      lat:52.2075, lng:20.7987},
    {p:"AZ",name:"Ożarów Maz.",      lat:52.2075, lng:20.7987},
    {p:"WZW",name:"Zwoleń",          lat:51.3579, lng:21.5849},
    {p:"AZW",name:"Zwoleń",          lat:51.3579, lng:21.5849},
    {p:"WZU",name:"Żuromin",         lat:53.0743, lng:19.9079},
    {p:"AZU",name:"Żuromin",         lat:53.0743, lng:19.9079},
    {p:"WZY",name:"Żyrardów",        lat:52.0522, lng:20.4485},
    {p:"AZY",name:"Żyrardów",        lat:52.0522, lng:20.4485},
    {p:"NBA",name:"Bartoszyce",      lat:54.2524, lng:20.8185},
    {p:"NDZ",name:"Działdowo",       lat:53.2378, lng:20.1679},
    {p:"NEL",name:"Ełk",             lat:53.8248, lng:22.3636},
    {p:"NGI",name:"Giżycko",         lat:54.0312, lng:21.7789},
    {p:"NGO",name:"Gołdap",          lat:54.3148, lng:22.3062},
    {p:"NIL",name:"Iława",           lat:53.5825, lng:19.5744},
    {p:"NKE",name:"Kętrzyn",         lat:54.0722, lng:21.3874},
    {p:"NMR",name:"Mrągowo",         lat:53.8594, lng:21.2955},
    {p:"NNM",name:"Nowe Miasto Lubawskie",lat:53.4276,lng:19.5890},
    {p:"NOE",name:"Olecko",          lat:54.0332, lng:22.4957},
    {p:"NPI",name:"Pisz",            lat:53.6320, lng:21.7928},
    {p:"NSZ",name:"Szczytno",        lat:53.5598, lng:20.9986},
    {p:"NWE",name:"Węgorzewo",       lat:54.2176, lng:21.7373},
    {p:"TBU",name:"Busko-Zdrój",     lat:50.4708, lng:20.7189},
    {p:"TJE",name:"Jędrzejów",       lat:50.6452, lng:20.2760},
    {p:"TKA",name:"Kazimierza Wielka",lat:50.2701,lng:20.4834},
    {p:"TKN",name:"Końskie",         lat:51.1898, lng:20.4231},
    {p:"TOP",name:"Opatów",          lat:50.8029, lng:21.4249},
    {p:"TOS",name:"Ostrowiec Świętokrzyski",lat:50.9334,lng:21.3783},
    {p:"TPI",name:"Pińczów",         lat:50.5206, lng:20.5263},
    {p:"TSA",name:"Sandomierz",      lat:50.6598, lng:21.7652},
    {p:"TSK",name:"Skarżysko-Kamienna",lat:51.1156, lng:20.8821},
    {p:"TST",name:"Starachowice",    lat:51.0518, lng:21.0577},
    {p:"TSZ",name:"Staszów",         lat:50.5500, lng:21.1539},
    {p:"TWL",name:"Włoszczowa",      lat:50.8377, lng:20.0156},
    {p:"LC", name:"Chełm",           lat:51.1415, lng:23.4928},
    {p:"LB", name:"Biała Podlaska",  lat:52.0202, lng:23.1307},
    {p:"LBI",name:"Biała Podlaska",  lat:52.0202, lng:23.1307},
    {p:"LBL",name:"Biłgoraj",        lat:50.5513, lng:22.7323},
    {p:"LCH",name:"Chełm",           lat:51.1415, lng:23.4928},
    {p:"LHR",name:"Hrubieszów",      lat:50.7961, lng:23.9083},
    {p:"LJA",name:"Janów Lubelski",  lat:50.7044, lng:22.4154},
    {p:"LKS",name:"Krasnystaw",      lat:50.9852, lng:23.1828},
    {p:"LKR",name:"Kraśnik",         lat:50.9296, lng:22.2838},
    {p:"LLB",name:"Lubartów",        lat:51.4462, lng:22.6075},
    {p:"LLE",name:"Łęczyca",         lat:51.3020, lng:22.8819},
    {p:"LLU",name:"Łuków",           lat:51.9404, lng:22.3935},
    {p:"LOP",name:"Opole Lubelskie", lat:51.1506, lng:21.9794},
    {p:"LPA",name:"Parczew",         lat:51.6265, lng:22.8724},
    {p:"LPU",name:"Puławy",          lat:51.4094, lng:22.0130},
    {p:"LRA",name:"Radzyń Podlaski", lat:51.7832, lng:22.6212},
    {p:"LRY",name:"Ryki",            lat:51.6065, lng:21.9227},
    {p:"LSW",name:"Świdnik",         lat:51.2200, lng:22.6915},
    {p:"LTM",name:"Tomaszów Mazowiecki",lat:50.4542,lng:23.4141},
    {p:"LWL",name:"Włodawa",         lat:51.5540, lng:23.5518},
    {p:"BSU",name:"Suwałki",         lat:54.1061, lng:22.9443},
    {p:"BAU",name:"Augustów",        lat:53.8471, lng:22.9698},
    {p:"BBI",name:"Bielsk Podlaski", lat:52.7615, lng:23.1876},
    {p:"BGR",name:"Grajewo",         lat:53.6504, lng:22.4476}, 
    {p:"BHA",name:"Hajnówka",        lat:52.7367, lng:23.5820},
    {p:"BKO",name:"Kolno",           lat:53.4071, lng:21.9345},
    {p:"BMN",name:"Monki",           lat:53.4024, lng:22.7967},
    {p:"BSE",name:"Sejny",           lat:54.1077, lng:23.3472},
    {p:"BSI",name:"Siemiatycze",     lat:52.4268, lng:22.8625},
    {p:"BSK",name:"Sokółka",         lat:53.4034, lng:23.5086},
    {p:"BWM",name:"Wysokie Maz.",    lat:52.9147, lng:22.5099},
    {p:"BZA",name:"Zambrów",         lat:52.9895, lng:22.2416},
    {p:"HAA",name:"CBA",              lat:52.2181, lng:21.0249},
    {p:"HBB",name:"Służba Ochrony Państwa",lat:52.2099,lng:21.0394},
    {p:"HCA",name:"Administracja Skarbowa w Olsztynie",lat:53.7741,lng:20.4972},
    {p:"HCB",name:"Administracja Skarbowa w Białymstoku",lat:53.1307,lng:23.1708},
    {p:"HCC",name:"Administracja Skarbowa w Lublinie",lat:51.2637,lng:22.5564},
    {p:"HCD",name:"Administracja Skarbowa w Rzeszowie",lat:50.0225,lng:22.0192},
    {p:"HCE",name:"Administracja Skarbowa w Krakowie",lat:50.0608,lng:19.9347},
    {p:"HCF",name:"Administracja Skarbowa w Katowicach",lat:50.2503,lng:19.0288},
    {p:"HCG",name:"Administracja Skarbowa we Wrocławiu",lat:51.0980,lng:17.0268},
    {p:"HCH",name:"Administracja Skarbowa w Zielonej Górze",lat:51.9439,lng:15.5022},
    {p:"HCJ",name:"Administracja Skarbowa w Szczecinie",lat:53.4309,lng:14.5567},
    {p:"HCK",name:"Administracja Skarbowa w Gdańsku",lat:54.3496,lng:18.6495},
    {p:"HCL",name:"Administracja Skarbowa w Warszawie",lat:52.2600,lng:20.9892},
    {p:"HCM",name:"Administracja Skarbowa w Bydgoszczy",lat:53.1273,lng:18.0011},
    {p:"HCN",name:"Administracja Skarbowa w Łodzi",lat:51.7604,lng:19.4551},
    {p:"HCO",name:"Administracja Skarbowa w Poznaniu",lat:52.3886,lng:16.9229},
    {p:"HCP",name:"Administracja Skarbowa w Opolu",lat:50.6700,lng:17.9427},
    {p:"HCR",name:"Administracja Skarbowa w Kielcach",lat:50.8702,lng:20.6494},
    {p:"HPA",name:"Komenda Główna Policji",lat:52.1877,lng:21.02309},
    {p:"HPB",name:"Komenda Wojewódzka Policji we Wrocławiu",lat:51.1043,lng:17.0267},
    {p:"HPC",name:"Komenda Wojewódzka Policji w Bydgoszczy",lat:53.1294,lng:18.0240},
    {p:"HPD",name:"Komenda Wojewódzka Policji w Lublinie",lat:51.2409,lng:22.5526},
    {p:"HPE",name:"Komenda Wojewódzka Policji w Gorzowie Wielkopolskim",lat:52.7205,lng:15.2318},
    {p:"HPF",name:"Komenda Wojewódzka Policji w Łodzi",lat:51.7844,lng:19.4396},
    {p:"HPG",name:"Komenda Wojewódzka Policji w Krakowie",lat:50.0666,lng:19.9793},
    {p:"HPH",name:"Komenda Wojewódzka Policji zs. w Radomiu",lat:51.4141,lng:21.1629},
    {p:"HPJ",name:"Komenda Wojewódzka Policji w Opolu",lat:50.6629,lng:17.9244},
    {p:"HPK",name:"Komenda Wojewódzka Policji w Rzeszowie",lat:50.0269,lng:21.9899},
    {p:"HPL",name:"Szkoła Policji w Katowicach",lat:50.2056,lng:18.9600},
    {p:"HPM",name:"Komenda Wojewódzka Policji w Białymstoku",lat:53.1428,lng:23.2061},
    {p:"HPN",name:"Komenda Wojewódzka Policji w Gdańsku",lat:54.3468,lng:18.6458},
    {p:"HPP",name:"Komenda Wojewódzka Policji w Katowicach",lat:50.2471,lng:19.0233},
    {p:"HPS",name:"Komenda Wojewódzka Policji w Kielcach",lat:50.8655,lng:20.6342},
    {p:"HPT",name:"Komenda Wojewódzka Policji w Olsztynie",lat:53.7820,lng:20.4829},
    {p:"HPU",name:"Komenda Wojewódzka Policji w Poznaniu",lat:52.4129,lng:16.9104},
    {p:"HPW",name:"Komenda Wojewódzka Policji w Szczecinie",lat:53.4290,lng:14.5589},
    {p:"HPZ",name:"Komenda Stołeczna Policji w Warszawie",lat:52.2459,lng:20.9990},
    {p:"HKK",name:"ABW",lat:52.2052,lng:21.0054},
    {p:"HMM",name:"Służba Kontrwywiadu Wojskowego",lat:52.2052,lng:21.0054},
    {p:"HWW",name:"Straż Graniczna",lat:52.1996,lng:21.0126},
  ];
  PL_PROFESSIONAL_PREFIXES = [
    {p:"A0",name:"Warszawa",       lat:52.2294,lng:21.0071},
    {p:"A1",name:"Warszawa",       lat:52.2294,lng:21.0071},
    {p:"A2",name:"Warszawa",       lat:52.2294,lng:21.0071},
    {p:"A3",name:"Warszawa",       lat:52.2294,lng:21.0071},
    {p:"A4",name:"Warszawa",       lat:52.2294,lng:21.0071},
    {p:"A5",name:"Warszawa",       lat:52.2294,lng:21.0071},
    {p:"A6",name:"Warszawa",       lat:52.2294,lng:21.0071},
    {p:"A7",name:"Warszawa",       lat:52.2294,lng:21.0071},
    {p:"A8",name:"Warszawa",       lat:52.2294,lng:21.0071},
    {p:"A9",name:"Warszawa",       lat:52.2294,lng:21.0071},
    {p:"B0",name:"Białystok",      lat:53.1325, lng:23.1688},
    {p:"B1",name:"Białystok",      lat:53.1325, lng:23.1688},
    {p:"B2",name:"Białystok",      lat:53.1325, lng:23.1688},
    {p:"B3",name:"Białystok",      lat:53.1325, lng:23.1688},
    {p:"B4",name:"Białystok",      lat:53.1325, lng:23.1688},
    {p:"B5",name:"Białystok",      lat:53.1325, lng:23.1688},
    {p:"B6",name:"Białystok",      lat:53.1325, lng:23.1688},
    {p:"B7",name:"Białystok",      lat:53.1325, lng:23.1688},
    {p:"B8",name:"Białystok",      lat:53.1325, lng:23.1688},
    {p:"B9",name:"Białystok",      lat:53.1325, lng:23.1688},
    {p:"C0",name:"Bydgoszcz",      lat:53.1235, lng:18.0084},
    {p:"C1",name:"Bydgoszcz",      lat:53.1235, lng:18.0084},
    {p:"C2",name:"Bydgoszcz",      lat:53.1235, lng:18.0084},
    {p:"C3",name:"Bydgoszcz",      lat:53.1235, lng:18.0084},
    {p:"C4",name:"Bydgoszcz",      lat:53.1235, lng:18.0084},
    {p:"C5",name:"Bydgoszcz",      lat:53.1235, lng:18.0084},
    {p:"C6",name:"Bydgoszcz",      lat:53.1235, lng:18.0084},
    {p:"C7",name:"Bydgoszcz",      lat:53.1235, lng:18.0084},
    {p:"C8",name:"Bydgoszcz",      lat:53.1235, lng:18.0084},
    {p:"C9",name:"Bydgoszcz",      lat:53.1235, lng:18.0084},
    {p:"D0",name:"Wrocław",        lat:51.1079, lng:17.0385},
    {p:"D1",name:"Wrocław",        lat:51.1079, lng:17.0385},
    {p:"D2",name:"Wrocław",        lat:51.1079, lng:17.0385},
    {p:"D3",name:"Wrocław",        lat:51.1079, lng:17.0385},
    {p:"D4",name:"Wrocław",        lat:51.1079, lng:17.0385},
    {p:"D5",name:"Wrocław",        lat:51.1079, lng:17.0385},
    {p:"D6",name:"Wrocław",        lat:51.1079, lng:17.0385},
    {p:"D7",name:"Wrocław",        lat:51.1079, lng:17.0385},
    {p:"D8",name:"Wrocław",        lat:51.1079, lng:17.0385},
    {p:"D9",name:"Wrocław",        lat:51.1079, lng:17.0385},
    {p:"E0",name:"Łódź",           lat:51.7592, lng:19.4550},
    {p:"E1",name:"Łódź",           lat:51.7592, lng:19.4550},
    {p:"E2",name:"Łódź",           lat:51.7592, lng:19.4550},
    {p:"E3",name:"Łódź",           lat:51.7592, lng:19.4550},
    {p:"E4",name:"Łódź",           lat:51.7592, lng:19.4550},
    {p:"E5",name:"Łódź",           lat:51.7592, lng:19.4550},
    {p:"E6",name:"Łódź",           lat:51.7592, lng:19.4550},
    {p:"E7",name:"Łódź",           lat:51.7592, lng:19.4550},
    {p:"E8",name:"Łódź",           lat:51.7592, lng:19.4550},
    {p:"E9",name:"Łódź",           lat:51.7592, lng:19.4550},
    {p:"F0",name:"Gorzów Wlkp.",   lat:52.7368, lng:15.2287},
    {p:"F1",name:"Gorzów Wlkp.",   lat:52.7368, lng:15.2287},
    {p:"F2",name:"Gorzów Wlkp.",   lat:52.7368, lng:15.2287},
    {p:"F3",name:"Gorzów Wlkp.",   lat:52.7368, lng:15.2287},
    {p:"F4",name:"Gorzów Wlkp.",   lat:52.7368, lng:15.2287},
    {p:"F5",name:"Gorzów Wlkp.",   lat:52.7368, lng:15.2287},
    {p:"F6",name:"Gorzów Wlkp.",   lat:52.7368, lng:15.2287},
    {p:"F7",name:"Gorzów Wlkp.",   lat:52.7368, lng:15.2287},
    {p:"F8",name:"Gorzów Wlkp.",   lat:52.7368, lng:15.2287},
    {p:"F9",name:"Gorzów Wlkp.",   lat:52.7368, lng:15.2287},
    {p:"G0",name:"Gdańsk",         lat:54.3520, lng:18.6466},
    {p:"G1",name:"Gdańsk",         lat:54.3520, lng:18.6466},
    {p:"G2",name:"Gdańsk",         lat:54.3520, lng:18.6466},
    {p:"G3",name:"Gdańsk",         lat:54.3520, lng:18.6466},
    {p:"G4",name:"Gdańsk",         lat:54.3520, lng:18.6466},
    {p:"G5",name:"Gdańsk",         lat:54.3520, lng:18.6466},
    {p:"G6",name:"Gdańsk",         lat:54.3520, lng:18.6466},
    {p:"G7",name:"Gdańsk",         lat:54.3520, lng:18.6466},
    {p:"G8",name:"Gdańsk",         lat:54.3520, lng:18.6466},
    {p:"G9",name:"Gdańsk",         lat:54.3520, lng:18.6466},
    {p:"I0",name:"Katowice",       lat:50.2577, lng:19.0175},
    {p:"I1",name:"Katowice",       lat:50.2577, lng:19.0175},
    {p:"I2",name:"Katowice",       lat:50.2577, lng:19.0175},
    {p:"I3",name:"Katowice",       lat:50.2577, lng:19.0175},
    {p:"I4",name:"Katowice",       lat:50.2577, lng:19.0175},
    {p:"I5",name:"Katowice",       lat:50.2577, lng:19.0175},
    {p:"I6",name:"Katowice",       lat:50.2577, lng:19.0175},
    {p:"I7",name:"Katowice",       lat:50.2577, lng:19.0175},
    {p:"I8",name:"Katowice",       lat:50.2577, lng:19.0175},
    {p:"I9",name:"Katowice",       lat:50.2577, lng:19.0175},
    {p:"J0",name:"Kraków",         lat:50.0647, lng:19.9450},
    {p:"J1",name:"Kraków",         lat:50.0647, lng:19.9450},
    {p:"J2",name:"Kraków",         lat:50.0647, lng:19.9450},
    {p:"J3",name:"Kraków",         lat:50.0647, lng:19.9450},
    {p:"J4",name:"Kraków",         lat:50.0647, lng:19.9450},
    {p:"J5",name:"Kraków",         lat:50.0647, lng:19.9450},
    {p:"J6",name:"Kraków",         lat:50.0647, lng:19.9450},
    {p:"J7",name:"Kraków",         lat:50.0647, lng:19.9450},
    {p:"J8",name:"Kraków",         lat:50.0647, lng:19.9450},
    {p:"J9",name:"Kraków",         lat:50.0647, lng:19.9450},
    {p:"K0",name:"Kraków",         lat:50.0647, lng:19.9450},
    {p:"K1",name:"Kraków",         lat:50.0647, lng:19.9450},
    {p:"K2",name:"Kraków",         lat:50.0647, lng:19.9450},
    {p:"K3",name:"Kraków",         lat:50.0647, lng:19.9450},
    {p:"K4",name:"Kraków",         lat:50.0647, lng:19.9450},
    {p:"K5",name:"Kraków",         lat:50.0647, lng:19.9450},
    {p:"K6",name:"Kraków",         lat:50.0647, lng:19.9450},
    {p:"K7",name:"Kraków",         lat:50.0647, lng:19.9450},
    {p:"K8",name:"Kraków",         lat:50.0647, lng:19.9450},
    {p:"K9",name:"Kraków",         lat:50.0647, lng:19.9450},
    {p:"L0",name:"Lublin",         lat:51.2465, lng:22.5684},
    {p:"L1",name:"Lublin",         lat:51.2465, lng:22.5684},
    {p:"L2",name:"Lublin",         lat:51.2465, lng:22.5684},
    {p:"L3",name:"Lublin",         lat:51.2465, lng:22.5684},
    {p:"L4",name:"Lublin",         lat:51.2465, lng:22.5684},
    {p:"L5",name:"Lublin",         lat:51.2465, lng:22.5684},
    {p:"L6",name:"Lublin",         lat:51.2465, lng:22.5684},
    {p:"L7",name:"Lublin",         lat:51.2465, lng:22.5684},
    {p:"L8",name:"Lublin",         lat:51.2465, lng:22.5684},
    {p:"L9",name:"Lublin",         lat:51.2465, lng:22.5684},
    {p:"M0",name:"Poznań",         lat:52.4064, lng:16.9252},
    {p:"M1",name:"Poznań",         lat:52.4064, lng:16.9252},
    {p:"M2",name:"Poznań",         lat:52.4064, lng:16.9252},
    {p:"M3",name:"Poznań",         lat:52.4064, lng:16.9252},
    {p:"M4",name:"Poznań",         lat:52.4064, lng:16.9252},
    {p:"M5",name:"Poznań",         lat:52.4064, lng:16.9252},
    {p:"M6",name:"Poznań",         lat:52.4064, lng:16.9252},
    {p:"M7",name:"Poznań",         lat:52.4064, lng:16.9252},
    {p:"M8",name:"Poznań",         lat:52.4064, lng:16.9252},
    {p:"M9",name:"Poznań",         lat:52.4064, lng:16.9252},
    {p:"N0",name:"Olsztyn",        lat:53.7784, lng:20.4801},
    {p:"N1",name:"Olsztyn",        lat:53.7784, lng:20.4801},
    {p:"N2",name:"Olsztyn",        lat:53.7784, lng:20.4801},
    {p:"N3",name:"Olsztyn",        lat:53.7784, lng:20.4801},
    {p:"N4",name:"Olsztyn",        lat:53.7784, lng:20.4801},
    {p:"N5",name:"Olsztyn",        lat:53.7784, lng:20.4801},
    {p:"N6",name:"Olsztyn",        lat:53.7784, lng:20.4801},
    {p:"N7",name:"Olsztyn",        lat:53.7784, lng:20.4801},
    {p:"N8",name:"Olsztyn",        lat:53.7784, lng:20.4801},
    {p:"N9",name:"Olsztyn",        lat:53.7784, lng:20.4801},
    {p:"O0",name:"Opole",          lat:50.6751, lng:17.9213},
    {p:"O1",name:"Opole",          lat:50.6751, lng:17.9213},
    {p:"O2",name:"Opole",          lat:50.6751, lng:17.9213},
    {p:"O3",name:"Opole",          lat:50.6751, lng:17.9213},
    {p:"O4",name:"Opole",          lat:50.6751, lng:17.9213},
    {p:"O5",name:"Opole",          lat:50.6751, lng:17.9213},
    {p:"O6",name:"Opole",          lat:50.6751, lng:17.9213},
    {p:"O7",name:"Opole",          lat:50.6751, lng:17.9213},
    {p:"O8",name:"Opole",          lat:50.6751, lng:17.9213},
    {p:"O9",name:"Opole",          lat:50.6751, lng:17.9213},
    {p:"P0",name:"Poznań",         lat:52.4064, lng:16.9252},
    {p:"P1",name:"Poznań",         lat:52.4064, lng:16.9252},
    {p:"P2",name:"Poznań",         lat:52.4064, lng:16.9252},
    {p:"P3",name:"Poznań",         lat:52.4064, lng:16.9252},
    {p:"P4",name:"Poznań",         lat:52.4064, lng:16.9252},
    {p:"P5",name:"Poznań",         lat:52.4064, lng:16.9252},
    {p:"P6",name:"Poznań",         lat:52.4064, lng:16.9252},
    {p:"P7",name:"Poznań",         lat:52.4064, lng:16.9252},
    {p:"P8",name:"Poznań",         lat:52.4064, lng:16.9252},
    {p:"R0",name:"Rzeszów",        lat:50.0412, lng:21.9991},
    {p:"R1",name:"Rzeszów",        lat:50.0412, lng:21.9991},
    {p:"R2",name:"Rzeszów",        lat:50.0412, lng:21.9991},
    {p:"R3",name:"Rzeszów",        lat:50.0412, lng:21.9991},
    {p:"R4",name:"Rzeszów",        lat:50.0412, lng:21.9991},
    {p:"R5",name:"Rzeszów",        lat:50.0412, lng:21.9991},
    {p:"R6",name:"Rzeszów",        lat:50.0412, lng:21.9991},
    {p:"R7",name:"Rzeszów",        lat:50.0412, lng:21.9991},
    {p:"R8",name:"Rzeszów",        lat:50.0412, lng:21.9991},
    {p:"R9",name:"Rzeszów",        lat:50.0412, lng:21.9991},
    {p:"S0",name:"Katowice",       lat:50.2577, lng:19.0175},
    {p:"S1",name:"Katowice",       lat:50.2577, lng:19.0175},
    {p:"S2",name:"Katowice",       lat:50.2577, lng:19.0175},
    {p:"S3",name:"Katowice",       lat:50.2577, lng:19.0175},
    {p:"S4",name:"Katowice",       lat:50.2577, lng:19.0175},
    {p:"S5",name:"Katowice",       lat:50.2577, lng:19.0175},
    {p:"S6",name:"Katowice",       lat:50.2577, lng:19.0175},
    {p:"S7",name:"Katowice",       lat:50.2577, lng:19.0175},
    {p:"S8",name:"Katowice",       lat:50.2577, lng:19.0175},
    {p:"S9",name:"Katowice",       lat:50.2577, lng:19.0175},
    {p:"T0",name:"Kielce",         lat:50.8661, lng:20.6286},
    {p:"T1",name:"Kielce",         lat:50.8661, lng:20.6286},
    {p:"T2",name:"Kielce",         lat:50.8661, lng:20.6286},
    {p:"T3",name:"Kielce",         lat:50.8661, lng:20.6286},
    {p:"T4",name:"Kielce",         lat:50.8661, lng:20.6286},
    {p:"T5",name:"Kielce",         lat:50.8661, lng:20.6286},
    {p:"T6",name:"Kielce",         lat:50.8661, lng:20.6286},
    {p:"T7",name:"Kielce",         lat:50.8661, lng:20.6286},
    {p:"T8",name:"Kielce",         lat:50.8661, lng:20.6286},
    {p:"T9",name:"Kielce",         lat:50.8661, lng:20.6286},
    {p:"V0",name:"Wrocław",        lat:51.1079, lng:17.0385},
    {p:"V1",name:"Wrocław",        lat:51.1079, lng:17.0385},
    {p:"V2",name:"Wrocław",        lat:51.1079, lng:17.0385},
    {p:"V3",name:"Wrocław",        lat:51.1079, lng:17.0385},
    {p:"V4",name:"Wrocław",        lat:51.1079, lng:17.0385},
    {p:"V5",name:"Wrocław",        lat:51.1079, lng:17.0385},
    {p:"V6",name:"Wrocław",        lat:51.1079, lng:17.0385},
    {p:"V7",name:"Wrocław",        lat:51.1079, lng:17.0385},
    {p:"V8",name:"Wrocław",        lat:51.1079, lng:17.0385},
    {p:"V9",name:"Wrocław",        lat:51.1079, lng:17.0385},
    {p:"W0",name:"Warszawa",       lat:52.2294,lng:21.0071},
    {p:"W1",name:"Warszawa",       lat:52.2294,lng:21.0071},
    {p:"W2",name:"Warszawa",       lat:52.2294,lng:21.0071},
    {p:"W3",name:"Warszawa",       lat:52.2294,lng:21.0071},
    {p:"W4",name:"Warszawa",       lat:52.2294,lng:21.0071},
    {p:"W5",name:"Warszawa",       lat:52.2294,lng:21.0071},
    {p:"W6",name:"Warszawa",       lat:52.2294,lng:21.0071},
    {p:"W7",name:"Warszawa",       lat:52.2294,lng:21.0071},
    {p:"W8",name:"Warszawa",       lat:52.2294,lng:21.0071},
    {p:"W9",name:"Warszawa",       lat:52.2294,lng:21.0071},
    {p:"X0",name:"Gdańsk",         lat:54.3520, lng:18.6466},
    {p:"X1",name:"Gdańsk",         lat:54.3520, lng:18.6466},
    {p:"X2",name:"Gdańsk",         lat:54.3520, lng:18.6466},
    {p:"X3",name:"Gdańsk",         lat:54.3520, lng:18.6466},
    {p:"X4",name:"Gdańsk",         lat:54.3520, lng:18.6466},
    {p:"X5",name:"Gdańsk",         lat:54.3520, lng:18.6466},
    {p:"X6",name:"Gdańsk",         lat:54.3520, lng:18.6466},
    {p:"X7",name:"Gdańsk",         lat:54.3520, lng:18.6466},
    {p:"X8",name:"Gdańsk",         lat:54.3520, lng:18.6466},
    {p:"X9",name:"Gdańsk",         lat:54.3520, lng:18.6466},
    {p:"Y0",name:"Rzeszów",        lat:50.0412, lng:21.9991},
    {p:"Y1",name:"Rzeszów",        lat:50.0412, lng:21.9991},
    {p:"Y2",name:"Rzeszów",        lat:50.0412, lng:21.9991},
    {p:"Y3",name:"Rzeszów",        lat:50.0412, lng:21.9991},
    {p:"Y4",name:"Rzeszów",        lat:50.0412, lng:21.9991},
    {p:"Y5",name:"Rzeszów",        lat:50.0412, lng:21.9991},
    {p:"Y6",name:"Rzeszów",        lat:50.0412, lng:21.9991},
    {p:"Y7",name:"Rzeszów",        lat:50.0412, lng:21.9991},
    {p:"Y8",name:"Rzeszów",        lat:50.0412, lng:21.9991},
    {p:"Y9",name:"Rzeszów",        lat:50.0412, lng:21.9991},
    {p:"Z0",name:"Szczecin",       lat:53.4285, lng:14.5528},
    {p:"Z1",name:"Szczecin",       lat:53.4285, lng:14.5528},
    {p:"Z2",name:"Szczecin",       lat:53.4285, lng:14.5528},
    {p:"Z3",name:"Szczecin",       lat:53.4285, lng:14.5528},
    {p:"Z4",name:"Szczecin",       lat:53.4285, lng:14.5528},
    {p:"Z5",name:"Szczecin",       lat:53.4285, lng:14.5528},
    {p:"Z6",name:"Szczecin",       lat:53.4285, lng:14.5528},
    {p:"Z7",name:"Szczecin",       lat:53.4285, lng:14.5528},
    {p:"Z8",name:"Szczecin",       lat:53.4285, lng:14.5528},
    {p:"Z9",name:"Szczecin",       lat:53.4285, lng:14.5528},
  ]
  DE_PREFIXES = [
    {p:"A", name:"Augsburg",        lat:48.3654, lng:10.8855},
    {p:"AA",name:"Aalen",           lat:48.8414, lng:10.0967},
    {p:"AB",name:"Aschaffenburg",   lat:49.9807, lng:9.1435},
    {p:"ABG",name:"Altenburg",      lat:50.9979, lng:12.4437},
    {p:"ABI",name:"Anhalt-Bitterfeld",lat:51.7517,lng:11.9892},
    {p:"AC",name:"Aachen",          lat:50.7677, lng:6.0911},
    {p:"AE",name:"Auerbach",        lat:50.5119, lng:12.391},
    {p:"AH",name:"Ahaus",           lat:52.0820, lng:7.0164},
    {p:"AIB",name:"Bad Aibling",    lat:47.8619, lng:12.0041},
    {p:"AIC",name:"Aichach",        lat:48.4611, lng:11.1230},
    {p:"AK",name:"Altenkirchen",    lat:50.6844, lng:7.6383},
    {p:"ALF",name:"Alfeld",         lat:51.9812, lng:9.8182},
    {p:"ALZ",name:"Alzenau",        lat:50.0889, lng:9.0652},
    {p:"AM", name:"Amberg",         lat:49.4482, lng:11.8619},
    {p:"AS", name:"Amberg-Sulzbach",lat:49.4482, lng:11.8619},
    {p:"AN", name:"Ansbach",        lat:49.2981, lng:10.5769},
    {p:"ANA",name:"Annaberg-Buchholz",lat:50.5793,lng:12.9980},
    {p:"ANG",name:"Angermünde",     lat:53.0157, lng:13.9956},
    {p:"ANK",name:"Anklam",         lat:53.8562, lng:13.7015},
    {p:"Aö", name:"Altötting",      lat:48.2213, lng:12.6748},
    {p:"AP", name:"Apolda",         lat:51.0309, lng:11.5261},
    {p:"APD",name:"Apolda",         lat:51.0309, lng:11.5261},
    {p:"ARN",name:"Arnstadt",       lat:50.8440, lng:10.9467},
    {p:"ART",name:"Artern",         lat:51.3630, lng:11.3102},
    {p:"ASL",name:"Aschersleben",   lat:51.7569, lng:11.4662},
    {p:"ASZ",name:"Aue-Schwarzenberg",lat:50.5922,lng:12.6980},
    {p:"AU", name:"Aue",            lat:50.5922, lng:12.6980},
    {p:"AT",name:"Altentreptow",    lat:53.6922, lng:13.2427},
    {p:"AUR",name:"Aurich",         lat:53.4676, lng:7.4815},
    {p:"AW", name:"Ahrweiler",      lat:50.5476, lng:7.1432},
    {p:"AZ", name:"Alzey",          lat:49.7408, lng:8.1075},
    {p:"AZE",name:"Anhalt-Zerbst",  lat:51.9545, lng:12.0874},
    {p:"B",name:"Berlin",           lat:52.5200, lng:13.4050},
    {p:"BA",name:"Bamberg",         lat:49.9009, lng:10.8998},
    {p:"BAD",name:"Baden-Baden",    lat:48.7904, lng:8.1907},
    {p:"BAR",name:"Barnim",         lat:52.7500, lng:13.5833},
    {p:"BB",name:"Böblingen",       lat:48.6872, lng:9.0030},
    {p:"BBG",name:"Bernburg",       lat:51.7961, lng:11.7515},
    {p:"BBL",name:"Branderburg",    lat:52.4062, lng:13.0039},
    {p:"BC",name:"Biberach",        lat:48.1029, lng:9.7927},
    {p:"BCH",name:"Buchen",         lat:49.5235, lng:9.3270},
    {p:"BD",name:"Bundestag",       lat:52.5182, lng:13.3757},
    {p:"BE",name:"Beckum",          lat:51.7617, lng:8.03814},
    {p:"BED",name:"Brand-erbisdorf",lat:50.8689, lng:13.3259},
    {p:"BER",name:"Bernau",         lat:52.6761, lng:13.5929},
    {p:"BF",name:"Burgsteinfurt",   lat:52.1474, lng:7.3293},
    {p:"BGD",name:"Berchtesgarden", lat:47.6264, lng:12.9990},
    {p:"BGL",name:"Berchtesgarden", lat:47.6264, lng:12.9990},
    {p:"BH",name:"Bühl",            lat:48.6980, lng:8.1303},
    {p:"BI",name:"Bielefeld",       lat:52.0294, lng:8.5327},
    {p:"BID",name:"Biedenkopf",     lat:50.9092, lng:8.5298},
    {p:"BIN",name:"Bingen",         lat:49.9496, lng:7.9104},
    {p:"BIR",name:"Birkenfeld",     lat:49.6518, lng:7.1642},
    {p:"BIT",name:"Bitburg",        lat:49.9715, lng:6.5288},
    {p:"BIW",name:"Bautzen",        lat:51.1822, lng:14.4236},
    {p:"BZ",name:"Bautzen",         lat:51.1822, lng:14.4236},
    {p:"BK",name:"Backnang",        lat:48.9426, lng:9.4255},
    {p:"BKS",name:"Bernkastel-Kues",lat:49.9180, lng:7.0579},
    {p:"BL",name:"Balingen",        lat:48.2783, lng:8.8502},
    {p:"BLB",name:"Bad Berleburg",  lat:51.0511, lng:8.3941},
    {p:"BRK",name:"Burgenland",     lat:51.1525, lng:11.8098},
    {p:"BM",name:"Bergheim",        lat:50.9518, lng:6.6457},
    {p:"BN",name:"Bonn",            lat:50.7319, lng:7.0971},
    {p:"BNA",name:"Borna",          lat:51.1177, lng:12.4861},
    {p:"BO",name:"Bochum",          lat:51.4786, lng:7.2229},
    {p:"BÖ",name:"Börde",           lat:52.2838, lng:11.4080},
    {p:"BOG",name:"Bogen",          lat:48.9106, lng:12.6863},
    {p:"BOH",name:"Bocholt",        lat:51.8342, lng:6.6202},
    {p:"BOR",name:"Borken",         lat:51.8483, lng:6.8660},
    {p:"BOT",name:"Bottrop",        lat:51.5211, lng:6.9525},
    {p:"BP",name:"Bundespolizei",   lat:52.4627, lng:13.5013},
    {p:"BRA",name:"Brake",          lat:53.3288, lng:8.4812},
    {p:"BRB",name:"Branderburg",    lat:52.4006, lng:12.5663},
    {p:"BRG",name:"Burg",           lat:52.2744, lng:11.8394},
    {p:"BRK",name:"Bad Brückenau",  lat:50.3066, lng:9.7853},
    {p:"BRL",name:"Braunlage",      lat:51.7287, lng:10.6115},
    {p:"BRV",name:"Bremervörde",    lat:53.4840, lng:9.1371},
    {p:"BS",name:"Braunschweig",    lat:52.2523, lng:10.5393},
    {p:"BSB",name:"Bersenbrück",    lat:52.5513, lng:7.9424},
    {p:"BSK",name:"Beeskow",        lat:52.1778, lng:14.2514},
    {p:"BT",name:"Bayreuth",        lat:49.9509, lng:11.5801},
    {p:"BTF",name:"Bitterfeld-Wolfen",lat:51.6245,lng:12.3144},
    {p:"BÜD",name:"Büdingen",       lat:50.2879, lng:9.1075},
    {p:"BUL",name:"Burglengenfeld", lat:49.2013, lng:12.0526},
    {p:"BÜR",name:"Büren",          lat:51.5526, lng:8.5597},
    {p:"BÜS",name:"Büsingen",       lat:47.6977, lng:8.6901},
    {p:"BÜZ",name:"Bützow",         lat:53.8372, lng:11.9982},
    {p:"BW",name:"Wasserstraßen",   lat:52.4853, lng:13.3864},
    {p:"BWL",name:"Baden-Württemberg",lat:48.7786,lng:9.1836},
    {p:"BYL",name:"Bayern",         lat:48.1362, lng:11.5940},
    {p:"C", name:"Chemnitz",        lat:50.8384, lng:12.9304},
    {p:"CA",name:"Calau",           lat:51.7379, lng:13.9793},
    {p:"CAS",name:"Castrop-Rauxel", lat:51.5733, lng:7.3028},
    {p:"CB",name:"Cottbus",         lat:51.7515, lng:14.3242},
    {p:"CE",name:"Celle",           lat:52.6208, lng:10.0625},
    {p:"CHA",name:"Cham",           lat:49.2220, lng:12.6560},
    {p:"CLP",name:"Cloppenburg",    lat:52.8448, lng:8.0579},
    {p:"CLZ",name:"Clausthal-Zellerfeld",lat:51.8139,lng:10.3378},
    {p:"CO",name:"Coburg",          lat:50.2629, lng:10.9573},
    {p:"COC",name:"Cochem",         lat:50.1530, lng:7.1669},
    {p:"COE",name:"Coesfeld",       lat:51.9398, lng:7.1637},
    {p:"CR",name:"Crailsheim",      lat:49.1379, lng:10.0640},
    {p:"CUX",name:"Cuxhaven",       lat:53.8604, lng:8.7045},
    {p:"CW",name:"Calw",            lat:48.7147, lng:8.7419},
    {p:"D","name":"Düsseldorf",     lat:51.2329, lng:6.7936},
    {p:"DA",name:"Darmstadt",       lat:49.8727, lng:8.6290},
    {p:"DAH",name:"Dachau",         lat:48.2552, lng:11.4441},
    {p:"DAN",name:"Dannenberg",     lat:53.1049, lng:11.1181},
    {p:"DAU",name:"Daun",           lat:50.1976, lng:6.8262},
    {p:"DBR",name:"Bad Doberan",    lat:54.1000, lng:11.9046},
    {p:"DD",name:"Dresden",         lat:51.0412, lng:13.7311},
    {p:"DE",name:"Dessau-Roßlau",   lat:51.8398, lng:12.2343},
    {p:"DEG",name:"Deggendorf",     lat:48.8395, lng:12.9495},
    {p:"DEL",name:"Delmenhorst",    lat:53.0527, lng:8.6299},
    {p:"DGF",name:"Dingolfing",     lat:48.6417, lng:12.4865},
    {p:"DH",name:"Diepholz",        lat:52.6045, lng:8.3804},
    {p:"DI",name:"Dieburg",         lat:49.8983, lng:8.8434},
    {p:"DIL",name:"Dillenburg",     lat:50.7357, lng:8.2942},
    {p:"DIN",name:"Dinslaken",      lat:51.5674, lng:6.7384},
    {p:"DIZ",name:"Diez",           lat:50.3702, lng:8.0195},
    {p:"DKB",name:"Dinkelsbühl",    lat:49.0674, lng:10.3299},
    {p:"DL",name:"Döbeln",          lat:51.1226, lng:13.1170},
    {p:"DLG",name:"Dillingen",      lat:48.6185, lng:10.5663},
    {p:"DM",name:"Demmin",          lat:53.9014, lng:13.0535},
    {p:"DN",name:"Düren",           lat:50.8095, lng:6.4822},
    {p:"DO",name:"Dortmund",        lat:51.5177, lng:7.4579},
    {p:"DON",name:"Donauwörth",     lat:48.7141, lng:10.7714},
    {p:"DU",name:"Duisburg",        lat:51.4299, lng:6.7761},
    {p:"DUD",name:"Duderstadt",     lat:51.5133, lng:10.2608},
    {p:"DÜW",name:"Bad Dürkheim",   lat:49.4606, lng:8.1707},
    {p:"DW",name:"Dippoldiswalde",  lat:50.8908, lng:13.6648},
    {p:"DZ",name:"Delitzsch",       lat:51.5244, lng:12.3463},
    {p:"E",name:"Essen",            lat:51.4522, lng:7.01788},
    {p:"EA",name:"Eisenach",        lat:50.9769, lng:10.3324},
    {p:"EB",name:"Eilenburg",       lat:51.4519, lng:12.6376},
    {p:"EBE",name:"Ebersberg",      lat:48.0748, lng:11.9689},
    {p:"EBN",name:"Ebern",          lat:50.0942, lng:10.7966},
    {p:"EBS",name:"Ebermannstadt",  lat:49.7763, lng:11.1864},
    {p:"ECK",name:"Eckernförde",    lat:54.4679, lng:9.8349},
    {p:"ED",name:"Erding",          lat:48.3029, lng:11.9117},
    {p:"EE",name:"Elbe-Elster",     lat:51.5840, lng:13.2469},
    {p:"EF",name:"Erfurt",          lat:50.9722, lng:11.0373},
    {p:"EG",name:"Eggenfelden",     lat:48.4000, lng:12.8000},
    {p:"EH",name:"Eisenhüttenstadt",lat:52.1479, lng:14.6583},
    {p:"EI",name:"Eichstätt",       lat:48.8936, lng:11.1793},
    {p:"EIC",name:"Eichsfeld",      lat:51.3772, lng:10.1243},
    {p:"EIL",name:"Eisleben",       lat:51.5182, lng:11.5506},
    {p:"EIN",name:"Einbeck",        lat:51.8185, lng:9.8673},
    {p:"EIS",name:"Eisenberg",      lat:50.9695, lng:11.8908},
    {p:"EL",name:"Emsland",         lat:52.6959, lng:7.2986},
    {p:"EM",name:"Emmendingen",     lat:48.1192, lng:7.8479},
    {p:"EMD",name:"Emden",          lat:53.3595, lng:7.2107},
    {p:"EMS",name:"Bad Ems",        lat:50.3279, lng:7.7286},
    {p:"EN",name:"Ennepe-Ruhr-Kreis",lat:51.2895,lng:7.2830},
    {p:"ER",name:"Erlangen",        lat:49.7093, lng:11.0602},
    {p:"ERB",name:"Erbach",         lat:49.6558, lng:8.9903},
    {p:"ERH",name:"Erlangen",       lat:49.7093, lng:11.0602},
    {p:"ERK",name:"Erkelenz",       lat:51.0804, lng:6.3164},
    {p:"ERZ",name:"Erzgebirgskreis",lat:50.5729, lng:13.0019},
    {p:"ES",name:"Esslingen",       lat:48.7391, lng:9.2985},
    {p:"ESB",name:"Eschenbach",     lat:49.9474, lng:11.5719},
    {p:"ESW",name:"Eschwege",       lat:51.1919, lng:10.0420},
    {p:"EU",name:"Euskirchen",      lat:50.6581, lng:6.7938},
    {p:"EW",name:"Eberswalde",      lat:52.8340, lng:13.7972},
    {p:"F",name:"Frankfurt am Main",lat:50.1064, lng:8.6612},
    {p:"FB",name:"Friedberg",       lat:50.3328, lng:8.7608},
    {p:"FD",name:"Fulda",           lat:50.5547, lng:9.6843},
    {p:"FDB",name:"Friedberg",      lat:50.3328, lng:8.7608},
    {p:"FDS",name:"Freudenstadt",   lat:48.4675, lng:8.4106},
    {p:"FEU",name:"Feuchtwangen",   lat:49.1676, lng:10.3313},
    {p:"FF",name:"Frankfurt (Oder)",lat:52.3384, lng:14.5432},
    {p:"FFB",name:"Fürstenfeldbruck",lat:48.1605,lng:11.2253},
    {p:"FG",name:"Freiberg",        lat:50.9081, lng:13.3441},
    {p:"FI",name:"Finsterwalde",    lat:51.6370, lng:13.7106},
    {p:"FKB",name:"Frankenberg",    lat:51.0544, lng:8.7891},
    {p:"FL",name:"Flensburg",       lat:54.7742, lng:9.4366},
    {p:"FLö",name:"Flöha",          lat:50.8548, lng:13.0746},
    {p:"FN",name:"Friedrichshafen", lat:47.6532, lng:9.4731},
    {p:"FO",name:"Forchheim",       lat:49.7321, lng:11.0643},
    {p:"FOR",name:"Forst",          lat:51.7388, lng:14.6370},
    {p:"FR",name:"Freiburg"        ,lat:47.9871, lng:7.8323},
    {p:"FRG",name:"Freyung-Grafenau",lat:48.8027,lng:13.5483},
    {p:"FRI",name:"Friesland",      lat:53.5687, lng:7.8933},
    {p:"FRW",name:"Bad Freienwalde",lat:52.7899, lng:14.0361},
    {p:"FS",name:"Freising",        lat:48.3950, lng:11.7444},
    {p:"FT",name:"Frankenthal",     lat:49.5357, lng:8.3496},
    {p:"FTL",name:"Freital",        lat:50.9884, lng:13.6374},
    {p:"FÜ",name:"Fürth",           lat:49.4698, lng:10.9900},
    {p:"FÜS",name:"Füssen",         lat:47.5707, lng:10.6972},
    {p:"FW",name:"Fürstenwalde",    lat:52.3600, lng:14.0700},
    {p:"FZ",name:"Fritzlar",        lat:51.1250, lng:9.2829},
    {p:"G",name:"Gera",             lat:50.8902, lng:12.0721},
    {p:"GA",name:"Gardelegen",      lat:52.5183, lng:11.4044},
    {p:"GAN",name:"Bad Gandersheim",lat:51.8674, lng:10.0203},
    {p:"GAP",name:"Garmisch-Partenkirchen",lat:47.4915,lng:11.0971},
    {p:"GC",name:"Glauchau",        lat:50.8287, lng:12.5488},
    {p:"GD",name:"Schwaebisch Gmünd",lat:48.8011,lng:9.7884},
    {p:"GDB",name:"Gadebusch",      lat:53.7051, lng:11.1193},
    {p:"GE",name:"Gelsenkirchen",   lat:51.5049, lng:7.1026},
    {p:"GEL",name:"Geldern",        lat:51.5131, lng:6.3193},
    {p:"GEO",name:"Gerolzhofen",    lat:49.9005, lng:10.3429},
    {p:"GER",name:"Germersheim",    lat:49.2260, lng:8.3640},
    {p:"GF",name:"Gifhorn",         lat:52.4797, lng:10.5428},
    {p:"GG",name:"Groß-Gerau",      lat:49.9250, lng:8.4850},
    {p:"GHA",name:"Geinthain",      lat:51.0583, lng:12.6970},
    {p:"GHC",name:"Graefenhainichen",lat:51.7248,lng:12.4600},
    {p:"GI",name:"Gießen",          lat:50.5803,lng:8.6625},
    {p:"GK",name:"Geilenkirchen",   lat:50.9612, lng:6.1249},
    {p:"GL",name:"Bergisch Gladbach",lat:50.9908,lng:7.1233},
    {p:"GLA",name:"Gladbeck",       lat:51.5753, lng:6.9761},
    {p:"GM",name:"Gummersbach",     lat:51.0230, lng:7.5661},
    {p:"GMN",name:"Grimmen",        lat:54.1096, lng:13.0340},
    {p:"GN",name:"Gelnhausen",      lat:50.1961, lng:9.1879},
    {p:"GNT",name:"Genthin",        lat:52.4033, lng:12.1571},
    {p:"GÖ",name:"Göttingen",       lat:51.5502, lng:9.9268},
    {p:"GOA",name:"Sankt Goar",     lat:50.1500, lng:7.7147},
    {p:"GOH",name:"Sankt Goarshausen",lat:50.1560,lng:7.7140},
    {p:"GP",name:"Göppingen",       lat:48.6998, lng:9.6528},
    {p:"GR",name:"Görlitz",         lat:51.1468, lng:14.9782},
    {p:"GRA",name:"Grafenau",       lat:48.8562, lng:13.3925},
    {p:"GRH",name:"Großenhain",     lat:51.2918, lng:13.5236},
    {p:"GRI",name:"Griesbach",      lat:48.4509, lng:13.1971},
    {p:"GRM",name:"Grimma",         lat:51.2303, lng:12.7139},
    {p:"GRZ",name:"Greiz",          lat:50.6561, lng:12.2001},
    {p:"GS",name:"Goslar",          lat:51.9117, lng:10.4212},
    {p:"GT",name:"Gütersloh",       lat:51.9070, lng:8.3853},
    {p:"GTH",name:"Gotha",          lat:50.9389, lng:10.7127},
    {p:"GÜ",name:"Güstrow",         lat:53.8006, lng:12.1729},
    {p:"GUB",name:"Guben",          lat:51.9587, lng:14.7067},
    {p:"GUN",name:"Gunzenhausen",   lat:49.1203, lng:10.7546},
    {p:"GV",name:"Grevenbroich",    lat:51.0895, lng:6.5870},
    {p:"GW",name:"Greifswald",      lat:54.0930, lng:13.3701},
    {p:"GZ",name:"Günzburg",        lat:48.4602, lng:10.2783},
    {p:"H",name:"Hanover",          lat:52.3769, lng:9.7416},
    {p:"HA",name:"Hagen",           lat:51.3631, lng:7.4601},
    {p:"HAB",name:"Hammelburg",     lat:50.1200, lng:9.8828},
    {p:"HAL",name:"Halle",          lat:51.4772, lng:11.9879},
    {p:"HAM",name:"Hamm",           lat:51.6782, lng:7.8077},
    {p:"HAS",name:"Hassfurt",       lat:50.0334, lng:10.5097},
    {p:"HB",name:"Bremen",          lat:53.0833, lng:8.8141},
    {p:"HBN",name:"Hildburghausen", lat:50.4251, lng:10.7176},
    {p:"HBS",name:"Halberstadt",    lat:51.8993, lng:11.0734},
    {p:"HC",name:"Hainichen",       lat:50.9674, lng:13.1188},
    {p:"HCH",name:"Hechingen",      lat:48.3592, lng:8.9687},
    {p:"HD",name:"Heidelberg",      lat:49.4038, lng:8.6753},
    {p:"HDN",name:"Heidenheim",     lat:48.6805, lng:10.1563},
    {p:"HDL",name:"Haldensleben",   lat:52.2849, lng:11.4062},
    {p:"HE",name:"Helmstedt",       lat:52.2216, lng:11.0107},
    {p:"HEB",name:"Hersbruck",      lat:49.5004, lng:11.4349},
    {p:"HEF",name:"Bad Hersfeld",   lat:50.8698, lng:9.7163},
    {p:"HEI",name:"Heide",          lat:54.1931, lng:9.1008},
    {p:"HEL",name:"Hessicher Landtag",lat:50.0826,lng:8.2412},
    {p:"HER",name:"Herne",          lat:51.5315, lng:7.1661},
    {p:"HET",name:"Hettstedt",      lat:51.6368, lng:11.5131},
    {p:"HF",name:"Herford",         lat:52.1194, lng:8.6636},
    {p:"HG",name:"Bad Homburg",     lat:50.2201, lng:8.6209},
    {p:"HGN",name:"Hagenow",        lat:53.4295, lng:11.1847},
    {p:"HGW",name:"Hansestadt Greifswald",lat:54.0928,lng:13.3703},
    {p:"HH",name:"Hamburg",         lat:53.5532,lng:10.0065},
    {p:"HHM",name:"Hohenmölsen",    lat:51.1577,lng:12.0986},
    {p:"HI",name:"Hildesheim",      lat:52.1598,lng:9.9521},
    {p:"HIG",name:"Heilbad Heiligenstadt",lat:51.3773,lng:10.1242},
    {p:"HIL",name:"Hilpoltstein",   lat:49.1887,lng:11.1840},
    {p:"HK",name:"Heidekreis",      lat:52.8627,lng:9.6999},
    {p:"HL",name:"Luebeck",         lat:53.8675,lng:10.6700},
    {p:"HM",name:"Hameln",          lat:52.1021,lng:9.3749},
    {p:"HMü",name:"Hann. Münden",   lat:51.4122,lng:9.6584},
    {p:"HN",name:"Heilsbronn",      lat:49.3458,lng:10.7908},
    {p:"HO",name:"Hof",             lat:50.3081,lng:11.9220},
    {p:"HOG",name:"Hofgeismar",     lat:51.4995,lng:9.3950},
    {p:"HOH",name:"Hofheim",        lat:50.0842,lng:8.4445},
    {p:"HOL",name:"Holzminden",     lat:51.8199,lng:9.4540},
    {p:"HOM",name:"Homburg",        lat:49.3263,lng:7.3341},
    {p:"HOR",name:"Horb",           lat:48.4414,lng:8.6893},
    {p:"HöS",name:"Höchstadt",      lat:49.6985,lng:10.8036},
    {p:"HOT",name:"Hohenstein-Ernstthal",lat:50.7986,lng:12.7066},
    {p:"HP",name:"Heppenheim",      lat:49.6411,lng:8.6334},
    {p:"HR",name:"Homberg",         lat:51.0367,lng:9.4064},
    {p:"HRO",name:"Rostock",        lat:54.0781,lng:12.1316},
    {p:"HS",name:"Heinsberg",       lat:51.0678,lng:6.0867},
    {p:"HSK",name:"HochSauerland",  lat:51.3497,lng:8.2781},
    {p:"HST",name:"Stralsund",      lat:54.3072,lng:13.0789},
    {p:"HU",name:"Hanau",           lat:50.1208,lng:8.9291},
    {p:"HV",name:"Havelberg",       lat:52.8315,lng:12.0764},
    {p:"HVL",name:"Havelland",      lat:52.5997,lng:12.3540},
    {p:"HWI",name:"Wismar",         lat:53.8970,lng:11.4686},
    {p:"HX",name:"Höxter",          lat:51.7773,lng:9.3957},
    {p:'HY',name:"Hoyerswerda",     lat:51.4328,lng:14.2299},
    {p:"HZ",name:"Harz",            lat:51.6543,lng:10.3326},
  ];
  const COUNTRY_PREFIXES = [
    { code: "PL", label: "PL", prefixes: PL_PREFIXES, charset: "0123456789ACEFGHJKLMNPQRSTUVWXY",normal_color:"#FFFFFF",electricStyle:"background",background:"#94C973" },
    { code: "PL", label: "PL", prefixes: PL_PROFESSIONAL_PREFIXES, charset: "0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ",normal_color:"#FFFFFF",electricStyle:"background",background:"#94C973" },
    { code: "D",  label: "D",  prefixes: DE_PREFIXES, charset: "0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ",normal_color:"#FFFFFF",electricStyle:"suffix",suffix:"E" },
  ];
  let activeCountryPrefixes = COUNTRY_PREFIXES.slice();
  let activePartyCode = "";

  // Generator numeru
  function randomNumberPart(prefix, suffix, label) {
    const chars = COUNTRY_PREFIXES.find(it => it.code === label).charset;
    const len = 7-prefix.length;

    let part = Array.from({ length: len }, 
      () => chars[Math.floor(Math.random() * chars.length)]
    ).join("");
    if (suffix) {
      // Force the last character to be the suffix value.
      part = part.slice(0, -1) + suffix;
    }
    return part;
  }

  function randomPlate() {
    const countriesPool = activeCountryPrefixes.length ? activeCountryPrefixes : COUNTRY_PREFIXES;
    const country = countriesPool[Math.floor(Math.random() * countriesPool.length)];
    const it = country.prefixes[Math.floor(Math.random() * country.prefixes.length)];
    const isElectric = Math.random() < 0.10;
    return {
      text: `${it.p} ${randomNumberPart(it.p, it.s, country.code)}`,
      area: it.name,
      coord: { lat: it.lat, lng: it.lng },
      prefix: it.p,
      country: country.label,
      electric: isElectric,
      electricStyle: country.electricStyle,
      suffix: COUNTRY_PREFIXES.find(it => it.code === country.code).suffix || "",
    };
  }

  // Stan gry
  let map = L.map('map', {
    preferCanvas: true
  }).setView([52, 19.5], 6);

  L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 18,
    attribution: '&copy; OpenStreetMap contributors'
  }).addTo(map);

  let guessMarker, solutionMarker, line;
  let current, round=1, maxRounds=5, score=0;
  window.currentPlate = null;
  window.currentScore = score;
  let guessLatLng = null;

  // Funkcja obsługująca kliknięcie na mapie
  function onMapClick(e) {
    setGuess(e.latlng);
  }

  // UI
  const plateEl = document.getElementById("plate");
  const roundEl = document.getElementById("round");
  const maxRoundsEl = document.getElementById("maxRounds");
  const scoreEl = document.getElementById("score");
  const distanceEl = document.getElementById("distance");
  const roundPtsEl = document.getElementById("roundPoints");
  const guessBtn = document.getElementById("guessBtn");
  const nextBtn = document.getElementById("nextBtn");
  const countryCode = document.getElementById("countryCode");
  const partyInfoEl = document.getElementById("partyInfo");
  maxRoundsEl.textContent = maxRounds;

  // Haversine km
  function haversineKm(a,b){
    const toRad = d => d*Math.PI/180;
    const R=6371;
    const dLat=toRad(b.lat-a.lat);
    const dLon=toRad(b.lng-a.lng);
    const lat1=toRad(a.lat), lat2=toRad(b.lat);
    const h=Math.sin(dLat/2)**2 + Math.cos(lat1)*Math.cos(lat2)*Math.sin(dLon/2)**2;
    return R*2*Math.atan2(Math.sqrt(h),Math.sqrt(1-h));
  }

  function computePoints(dKm) {
    const base = Math.round(5000 * Math.exp(-dKm / 200));
    const bonus = Math.round(Math.min(500, Math.sqrt(dKm) * 10));
    return Math.max(10, base + bonus);
  }

  function setPartyInfo(text) {
    if (!partyInfoEl) return;
    if (text) {
      partyInfoEl.style.display = "inline-block";
      partyInfoEl.textContent = text;
      return;
    }

    partyInfoEl.style.display = "none";
    partyInfoEl.textContent = "";
  }

  function getCountryPoolForParty(countryCodes) {
    if (!Array.isArray(countryCodes) || !countryCodes.length) {
      return COUNTRY_PREFIXES.slice();
    }

    const wanted = new Set(countryCodes.map(function (code) {
      return String(code || "").toUpperCase();
    }));

    const filtered = COUNTRY_PREFIXES.filter(function (country) {
      return wanted.has(country.code);
    });

    return filtered.length ? filtered : COUNTRY_PREFIXES.slice();
  }

  function getPartyCodeFromQuery() {
    try {
      const params = new URLSearchParams(window.location.search || "");
      return String(params.get("party") || "")
        .toUpperCase()
        .replace(/[^A-Z0-9]/g, "")
        .slice(0, 6);
    } catch (error) {
      return "";
    }
  }

  function sanitizeGameNick(value) {
    if (window.Leaderboard && typeof window.Leaderboard.sanitizeNick === "function") {
      return window.Leaderboard.sanitizeNick(value);
    }
    return String(value || "")
      .trim()
      .replace(/\s+/g, " ")
      .slice(0, 24);
  }

  function isNickMissingOrDefault(nick) {
    const normalizedNick = sanitizeGameNick(nick).toLowerCase();
    return !normalizedNick || normalizedNick === "player";
  }

  function persistGameNick(nick) {
    const cleanNick = sanitizeGameNick(nick);
    if (window.Leaderboard && typeof window.Leaderboard.setSavedNick === "function") {
      return window.Leaderboard.setSavedNick(cleanNick);
    }

    if (cleanNick) {
      localStorage.setItem("nick", cleanNick);
    } else {
      localStorage.removeItem("nick");
    }
    return cleanNick;
  }

  function ensureNickBeforeGameStart() {
    const savedNick =
      window.Leaderboard && typeof window.Leaderboard.getSavedNick === "function"
        ? window.Leaderboard.getSavedNick()
        : sanitizeGameNick(localStorage.getItem("nick"));

    if (!isNickMissingOrDefault(savedNick)) {
      return savedNick;
    }

    let cleanNick = "";
    while (isNickMissingOrDefault(cleanNick)) {
      const typedNick = window.prompt('Enter your nickname before starting the game (nickname cannot be "player").', "");
      if (typedNick === null) {
        window.location.href = "index.html";
        return "";
      }

      cleanNick = persistGameNick(typedNick);
      if (isNickMissingOrDefault(cleanNick)) {
        window.alert('Nickname cannot be empty or "player".');
      }
    }

    return cleanNick;
  }

  async function initializePartyContext() {
    activeCountryPrefixes = COUNTRY_PREFIXES.slice();
    activePartyCode = "";
    setPartyInfo("");

    if (!window.Leaderboard) {
      return;
    }

    const codeFromUrl =
      typeof window.Leaderboard.getPartyCodeFromUrl === "function"
        ? window.Leaderboard.getPartyCodeFromUrl()
        : getPartyCodeFromQuery();
    const storedCode =
      typeof window.Leaderboard.getCurrentPartyCode === "function"
        ? window.Leaderboard.getCurrentPartyCode()
        : "";
    const candidateCode = codeFromUrl || storedCode;

    if (!candidateCode || typeof window.Leaderboard.fetchPartyMeta !== "function") {
      return;
    }

    try {
      const partyMeta = await window.Leaderboard.fetchPartyMeta(candidateCode);
      if (!partyMeta) {
        if (typeof window.Leaderboard.clearCurrentParty === "function") {
          window.Leaderboard.clearCurrentParty();
        }
        setPartyInfo("Party not found or expired. Global mode.");
        return;
      }

      if (
        typeof window.Leaderboard.isPartyExpired === "function" &&
        window.Leaderboard.isPartyExpired(partyMeta.expiresAt)
      ) {
        if (typeof window.Leaderboard.clearCurrentParty === "function") {
          window.Leaderboard.clearCurrentParty();
        }
        setPartyInfo("Party expired. Global mode.");
        return;
      }

      activePartyCode = partyMeta.code;
      activeCountryPrefixes = getCountryPoolForParty(partyMeta.countries);

      if (typeof window.Leaderboard.setCurrentPartyCode === "function") {
        window.Leaderboard.setCurrentPartyCode(activePartyCode);
      }

      const countriesLabel = Array.isArray(partyMeta.countries) && partyMeta.countries.length
        ? partyMeta.countries.join(", ")
        : "ALL";
      setPartyInfo("Party " + activePartyCode + " | " + countriesLabel);
    } catch (error) {
      console.warn("Nie udalo sie zainicjalizowac trybu imprezy:", error);
      setPartyInfo("Party unavailable. Global mode.");
    }
  }

  function startRound(){
    if(guessMarker) { map.removeLayer(guessMarker); guessMarker=null; }
    if(solutionMarker){ map.removeLayer(solutionMarker); solutionMarker=null; }
    if(line){ map.removeLayer(line); line=null; }
    guessLatLng=null; guessBtn.disabled=true; nextBtn.style.display="none";

    current=randomPlate();
    window.currentPlate = current;
    document.getElementById("plateText").textContent = current.text;
    if (current.electric) {

      if (current.electricStyle === "background") {

        plateText.style.background = "#00b050";
        plateText.textContent = current.text;
      } else if (current.electricStyle === "suffix") {

        const last = current.text.slice(-1);

        plateText.innerHTML =
            current.text.slice(0, -1) +
            current.suffix

      } else {

        plateText.textContent = current.text;
      }

    } else {

      plateText.style.background = "";
      plateText.style.color = "";
      plateText.textContent = current.text;
  }
    if (countryCode) countryCode.textContent = current.country;
    distanceEl.textContent="–"; roundPtsEl.textContent="–";
    map.setView([52,19.5],6);

    // Dodaj event listener dla kliknięć na mapie
    map.on("click", onMapClick);
  }

  function setGuess(latlng){
    guessLatLng=latlng;
    if(!guessMarker){
      guessMarker=L.marker(latlng,{draggable:true}).addTo(map);
      guessMarker.on("dragend",e=>setGuess(e.target.getLatLng()));
    }else{
      guessMarker.setLatLng(latlng);
    }
    guessBtn.disabled=false;
  }

  function commitGuess(){
    if(!guessLatLng) return;
    solutionMarker=L.marker(current.coord).addTo(map);
    line=L.polyline([guessLatLng,current.coord],{color:"red"}).addTo(map);

    const dKm=haversineKm(guessLatLng,current.coord);
    const pts=computePoints(dKm);
    score+=pts;
    window.currentScore = score;

    distanceEl.textContent=dKm.toFixed(1)+" km";
    roundPtsEl.textContent=pts;
    scoreEl.textContent=score;

    map.fitBounds([guessLatLng,current.coord],{padding:[40,40]});

    guessBtn.disabled=true;
    nextBtn.style.display="inline-block";

    // Wyłącz możliwość zaznaczania nowego miejsca
    map.off("click", onMapClick);
    // Wyłącz przesuwanie markera zgadywania
    if (guessMarker) {
      guessMarker.dragging.disable();
    }
  }

  function saveFinishedGameScore(finalScore) {
    const scope = activePartyCode ? { partyCode: activePartyCode } : undefined;
    const savedNick =
      window.Leaderboard && typeof window.Leaderboard.getSavedNick === "function"
        ? window.Leaderboard.getSavedNick()
        : sanitizeGameNick(localStorage.getItem("nick"));
    const nickForSave = isNickMissingOrDefault(savedNick) ? "player" : savedNick;

    if (window.Leaderboard && typeof window.Leaderboard.saveScore === "function") {
      return window.Leaderboard.saveScore(nickForSave, finalScore, scope).catch(function(error) {
        console.error("Nie udalo sie zapisac wyniku:", error);
        return null;
      });
    }

    if (typeof window.zapiszWynik === "function") {
      return Promise.resolve(window.zapiszWynik(nickForSave, finalScore, scope)).catch(function(error) {
        console.error("Nie udalo sie zapisac wyniku:", error);
        return null;
      });
    }

    return Promise.resolve(null);
  }

  async function showEndGameLeaderboard() {
    if (!window.Leaderboard || typeof window.Leaderboard.show !== "function") {
      return;
    }

    const scope = activePartyCode ? { partyCode: activePartyCode } : undefined;
    try {
      await window.Leaderboard.show(scope);
    } catch (error) {
      console.error("Nie udalo sie pokazac rankingu:", error);
    }
  }

  async function nextRound(){
    if(round>=maxRounds){
      const finalScore = score;
      nextBtn.disabled = true;
      await saveFinishedGameScore(finalScore);
      await showEndGameLeaderboard();
      round=1; score=0; scoreEl.textContent=0; window.currentScore = score;
      nextBtn.disabled = false;
    }else{
      round++;
    }
    roundEl.textContent=round;
    startRound();
  }

  guessBtn.addEventListener("click",commitGuess);
  nextBtn.addEventListener("click",nextRound);

  async function initializeGame() {
    const nick = ensureNickBeforeGameStart();
    if (!nick) return;
    await initializePartyContext();
    startRound();
  }

  initializeGame();

// === SYSTEM TŁUMACZEŃ DO GAME.HTML (z jasno zdefiniowanymi zmiennymi i bez duplikatów) ===
document.addEventListener("DOMContentLoaded", function () {
  const language = localStorage.getItem("language") || "en";

  // --- elementy przycisków i kontener ---
  const guessBtn = document.getElementById("guessBtn");
  const nextBtn = document.getElementById("nextBtn");
  const statsBox = document.querySelector(".stats");
  if (!guessBtn || !nextBtn || !statsBox) return;

  // --- elementy wartości (powinny już istnieć w HTML) ---
  const roundSpan = document.getElementById("round");
  const maxRoundsSpan = document.getElementById("maxRounds");
  const scoreSpan = document.getElementById("score");
  const distanceSpan = document.getElementById("distance");
  const roundPointsSpan = document.getElementById("roundPoints");

  // Sprawdź, czy elementy wartości istnieją — jeśli nie, kończymy (bez nadpisywania)
  if (!roundSpan || !maxRoundsSpan || !scoreSpan || !distanceSpan || !roundPointsSpan) {
    console.warn("Brak jednego z elementów wartości w .stats — upewnij się że #round, #maxRounds, #score, #distance, #roundPoints istnieją.");
    return;
  }

  // --- funkcja pomocnicza: utworzy etykietę tylko jeśli jeszcze nie istnieje, i zwróci ją ---
  function ensureLabel(id, defaultText, insertBeforeEl) {
    let el = document.getElementById(id);
    if (!el) {
      el = document.createElement("span");
      el.id = id;
      // dodaj spację po etykiecie dla czytelności
      el.style.marginRight = "6px";
      insertBeforeEl.parentNode.insertBefore(el, insertBeforeEl);
    }
    el.textContent = defaultText;
    return el;
  }

  // --- tworzymy / pobieramy etykiety (stałe zmienne) ---
  const labelRound = ensureLabel("label-round", "Round:", roundSpan);
  const labelScore = ensureLabel("label-score", "Score:", scoreSpan);
  const labelDistance = ensureLabel("label-distance", "Distance:", distanceSpan);
  const labelPoints = ensureLabel("label-points", "Points:", roundPointsSpan);

  // --- funkcja ustawiająca tłumaczenia (aktualizuje istniejące etykiety, nie tworzy nowych) ---
  function translateGame(lang) {
    switch (lang) {
      case "pl":
        guessBtn.textContent = "Zatwierdź strzał";
        nextBtn.textContent = "Następna runda";
        labelRound.textContent = "Runda:";
        labelScore.textContent = "Wynik:";
        labelDistance.textContent = "Odległość:";
        labelPoints.textContent = "Punkty:";
        break;
      case "ua":
        guessBtn.textContent = "Підтвердити спробу";
        nextBtn.textContent = "Наступний раунд";
        labelRound.textContent = "Раунд:";
        labelScore.textContent = "Результат:";
        labelDistance.textContent = "Відстань:";
        labelPoints.textContent = "Бали:";
        break;
      case "lt":
        guessBtn.textContent = "Patvirtinti spėjimą";
        nextBtn.textContent = "Kitas raundas";
        labelRound.textContent = "Raundas:";
        labelScore.textContent = "Rezultatas:";
        labelDistance.textContent = "Atstumas:";
        labelPoints.textContent = "Taškai:";
        break;
      case "de":
        guessBtn.textContent = "Schuss bestätigen";
        nextBtn.textContent = "Nächste Runde";
        labelRound.textContent = "Runde:";
        labelScore.textContent = "Punktzahl:";
        labelDistance.textContent = "Entfernung:";
        labelPoints.textContent = "Punkte:";
        break;
      case "es":
        guessBtn.textContent = "Confirmar intento";
        nextBtn.textContent = "Siguiente ronda";
        labelRound.textContent = "Ronda:";
        labelScore.textContent = "Puntuación:";
        labelDistance.textContent = "Distancia:";
        labelPoints.textContent = "Puntos:";
        break;
      case "fr":
        guessBtn.textContent = "Valider le tir";
        nextBtn.textContent = "Manche suivante";
        labelRound.textContent = "Manche :";
        labelScore.textContent = "Score :";
        labelDistance.textContent = "Distance :";
        labelPoints.textContent = "Points :";
        break;
      case "he":
        guessBtn.textContent = "אשר ניחוש";
        nextBtn.textContent = "סיבוב הבא";
        labelRound.textContent = "סיבוב:";
        labelScore.textContent = "תוצאה:";
        labelDistance.textContent = "מרחק:";
        labelPoints.textContent = "נקודות:";
        break;
      case "cz":
        guessBtn.textContent = "Potvrdit tip";
        nextBtn.textContent = "Další kolo";
        labelRound.textContent = "Kolo:";
        labelScore.textContent = "Skore:";
        labelDistance.textContent = "Vzdalenost:";
        labelPoints.textContent = "Body:";
        break;
      case "it":
        guessBtn.textContent = "Conferma tentativo";
        nextBtn.textContent = "Round successivo";
        labelRound.textContent = "Round:";
        labelScore.textContent = "Punteggio:";
        labelDistance.textContent = "Distanza:";
        labelPoints.textContent = "Punti:";
        break;
      case "se":
        guessBtn.textContent = "Bekräfta gissning";
        nextBtn.textContent = "Nästa runda";
        labelRound.textContent = "Runda:";
        labelScore.textContent = "Resultat:";
        labelDistance.textContent = "Avstand:";
        labelPoints.textContent = "Punkter:";
        break;
      default:
        guessBtn.textContent = "Confirm guess";
        nextBtn.textContent = "Next round";
        labelRound.textContent = "Round:";
        labelScore.textContent = "Score:";
        labelDistance.textContent = "Distance:";
        labelPoints.textContent = "Points:";
        break;
    }
  }

  // apply current language
  translateGame(language);

  // --- Eksportujemy zmienne do window, jeśli chcesz ich używać z innych skryptów gry ---
  // (opcjonalne — ułatwia dostęp z istniejącej logiki gry)
  window.POG = window.POG || {};
  window.POG.labels = {
    labelRound, labelScore, labelDistance, labelPoints
  };
  window.POG.values = {
    roundSpan, maxRoundsSpan, scoreSpan, distanceSpan, roundPointsSpan
  };
});
