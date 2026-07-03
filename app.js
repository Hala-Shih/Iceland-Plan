const categories = [
  { id: 'must-see', zh: '必去景點', en: 'Must-see', color: '#111827' },
  { id: 'restaurant', zh: '餐廳', en: 'Restaurants', color: '#34c759' },
  { id: 'grocery', zh: '超市補給', en: 'Supplies', color: '#ff9500' },
  { id: 'tour', zh: '當地團', en: 'Local tours', color: '#5856d6' },
  { id: 'stay', zh: '住宿', en: 'Stays', color: '#8e8e93' },
];

const libraryItems = [
  {
    id: 'keflavik-international-airport',
    category: 'all',
    titleZh: '凱夫拉維克國際機場',
    titleEn: 'Keflavik International Airport',
    description: '機場，冰島抵達與離境點 / Airport for Iceland arrival and departure',
    duration: 'Airport',
    image: 'https://images.unsplash.com/photo-1436491865332-7a61a109cc05?auto=format&fit=crop&w=900&q=80',
  },
  {
    id: 'jokulsarlon-glacier-lagoon',
    category: 'all',
    titleZh: '傑古沙龍冰河湖',
    titleEn: 'Jökulsárlón Glacier Lagoon',
    description: '冰山漂浮與鑽石沙灘順路 / Floating icebergs near Diamond Beach',
    duration: '2 hr',
    image: 'https://images.unsplash.com/photo-1500534314209-a25ddb2bd429?auto=format&fit=crop&w=900&q=80',
  },
  {
    id: 'hella',
    category: 'all',
    titleZh: '海拉',
    titleEn: 'Hella',
    description: '南岸路線常用住宿與補給城鎮 / South Coast base town for stays and supplies',
    duration: 'Town',
    image: 'https://images.unsplash.com/photo-1483728642387-6c3bdd6c93e5?auto=format&fit=crop&w=900&q=80',
  },
  {
    id: 'hvolsvollur',
    category: 'all',
    titleZh: '赫沃爾斯沃德呂爾',
    titleEn: 'Hvolsvöllur',
    description: '前往南岸瀑布與黑沙灘前的便利停靠點 / Convenient stop before South Coast waterfalls and black-sand beaches',
    duration: 'Town',
    image: 'https://images.unsplash.com/photo-1500534314209-a25ddb2bd429?auto=format&fit=crop&w=900&q=80',
  },
  {
    id: 'selfoss',
    category: 'all',
    titleZh: '塞爾福斯',
    titleEn: 'Selfoss',
    description: '南冰島主要城鎮，適合住宿、餐廳與補給 / Main South Iceland town for stays, food, and supplies',
    duration: 'Town',
    image: 'https://images.unsplash.com/photo-1504829857797-ddff29c27927?auto=format&fit=crop&w=900&q=80',
  },
  {
    id: 'seljalandsfoss',
    category: 'all',
    titleZh: '塞里雅蘭瀑布',
    titleEn: 'Seljalandsfoss',
    description: '可走到瀑布後方的南岸經典景點 / South Coast waterfall with a walk-behind path',
    duration: '1 hr',
    image: 'https://images.unsplash.com/photo-1529963183134-61a90db47eaf?auto=format&fit=crop&w=900&q=80',
  },
  {
    id: 'skogafoss',
    category: 'all',
    titleZh: '斯科加瀑布',
    titleEn: 'Skógafoss',
    description: '南岸大型瀑布，可登上觀景步道 / Powerful South Coast waterfall with an upper viewpoint trail',
    duration: '1 hr',
    image: 'https://images.unsplash.com/photo-1529963183134-61a90db47eaf?auto=format&fit=crop&w=900&q=80',
  },
  {
    id: 'fjadrargljufur',
    category: 'all',
    titleZh: '羽毛河峽谷',
    titleEn: 'Fjaðrárgljúfur',
    description: '南岸苔原峽谷與觀景步道 / Mossy South Coast canyon with scenic viewpoints',
    duration: '1 hr',
    image: 'https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=900&q=80',
  },
  {
    id: 'dc3-airplane-wreck-eyvindarholt',
    category: 'must-see',
    titleZh: 'DC-3 飛機殘骸 Eyvindarholt',
    titleEn: 'DC-3 Airplane wreck - Eyvindarholt',
    description: '南岸黑沙荒原上的飛機殘骸景點，需安排接駁或步行時間 / South Coast airplane wreck on black-sand plains; plan shuttle or walking time',
    duration: '2 hr',
    image: 'https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=900&q=80',
  },
  {
    id: 'hofs',
    category: 'all',
    titleZh: '霍夫斯',
    titleEn: 'Hofs',
    description: '東南冰島小鎮，適合銜接 Skaftafell 與冰河湖路線 / Southeast Iceland stop between Skaftafell and glacier lagoon routes',
    duration: 'Town',
    image: 'https://images.unsplash.com/photo-1483728642387-6c3bdd6c93e5?auto=format&fit=crop&w=900&q=80',
  },
  {
    id: 'vestrahorn',
    category: 'must-see',
    titleZh: '維斯特拉洪山',
    titleEn: 'Vestrahorn',
    description: '東南冰島海岸山景與黑沙灘，適合攝影停留 / Southeast Iceland mountain and black-sand coast, ideal for photography stops',
    duration: '1.5 hr',
    image: 'https://images.unsplash.com/photo-1500534314209-a25ddb2bd429?auto=format&fit=crop&w=900&q=80',
  },
  {
    id: 'hofn',
    category: 'all',
    titleZh: '赫本',
    titleEn: 'Hofn',
    description: '東南冰島港口城鎮，適合住宿、海鮮晚餐與補給 / Southeast Iceland harbor town for stays, seafood dinner, and supplies',
    duration: 'Town',
    image: 'https://images.unsplash.com/photo-1504829857797-ddff29c27927?auto=format&fit=crop&w=900&q=80',
  },
  {
    id: 'reykjavik',
    category: 'must-see',
    titleZh: '雷克雅維克',
    titleEn: 'Reykjavik',
    description: '冰島首都，適合安排市區散步與晚餐 / Iceland capital for city walks and dinner',
    duration: '3 hr',
    image: 'https://images.unsplash.com/photo-1504829857797-ddff29c27927?auto=format&fit=crop&w=900&q=80',
  },
  {
    id: 'gullfoss-falls',
    category: 'must-see',
    titleZh: '黃金瀑布',
    titleEn: 'Gullfoss Falls',
    description: '金圈代表景點，水量壯觀 / Iconic Golden Circle waterfall',
    duration: '1.5 hr',
    image: 'https://images.unsplash.com/photo-1529963183134-61a90db47eaf?auto=format&fit=crop&w=900&q=80',
  },
  {
    id: 'geysir',
    category: 'must-see',
    titleZh: '蓋錫爾間歇泉',
    titleEn: 'Geysir',
    description: '等待 Strokkur 噴發 / Watch Strokkur erupt every few minutes',
    duration: '1 hr',
    image: 'https://images.unsplash.com/photo-1500534314209-a25ddb2bd429?auto=format&fit=crop&w=900&q=80',
  },
  {
    id: 'thingvellir-national-park',
    category: 'must-see',
    titleZh: '辛格維利爾國家公園',
    titleEn: 'Thingvellir National Park',
    description: '板塊裂谷與歷史議會遺址 / Rift valley and historic parliament site',
    duration: '2 hr',
    image: 'https://images.unsplash.com/photo-1483728642387-6c3bdd6c93e5?auto=format&fit=crop&w=900&q=80',
  },
  {
    id: 'sky-lagoon',
    category: 'must-see',
    titleZh: '天空之湖溫泉',
    titleEn: 'Sky Lagoon',
    description: '雷克雅維克近郊海景地熱溫泉 / Oceanfront geothermal spa near Reykjavik',
    duration: '2.5 hr',
    image: 'https://images.unsplash.com/photo-1500534314209-a25ddb2bd429?auto=format&fit=crop&w=900&q=80',
  },
  {
    id: 'the-cave-vidgelmir',
    category: 'tour',
    titleZh: '維茲蓋爾米爾洞穴',
    titleEn: 'The Cave Vidgelmir',
    description: '冰島最大熔岩洞穴之一 / One of Iceland’s largest lava caves',
    duration: '2 hr',
    image: 'https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=900&q=80',
  },
  {
    id: 'reynisfjara-beach',
    category: 'all',
    titleZh: '雷尼斯黑沙灘',
    titleEn: 'Reynisfjara Beach',
    description: '玄武岩海岸與黑沙灘 / Basalt columns and black-sand coast',
    duration: '1.5 hr',
    image: 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=900&q=80',
  },
  {
    id: 'godafoss-waterfall',
    category: 'must-see',
    titleZh: '眾神瀑布',
    titleEn: 'Goðafoss Waterfall',
    description: '北冰島經典瀑布 / Classic North Iceland waterfall',
    duration: '1.5 hr',
    image: 'https://images.unsplash.com/photo-1529963183134-61a90db47eaf?auto=format&fit=crop&w=900&q=80',
  },
  {
    id: 'krafla',
    category: 'must-see',
    titleZh: '克拉夫拉',
    titleEn: 'Krafla',
    description: '火山地熱與熔岩景觀 / Volcanic geothermal landscape',
    duration: '45 min',
    image: 'https://images.unsplash.com/photo-1483728642387-6c3bdd6c93e5?auto=format&fit=crop&w=900&q=80',
  },
  {
    id: 'namafjall-hverir-viewpoint',
    category: 'all',
    titleZh: '納馬菲亞特惠利爾觀景點',
    titleEn: 'Námafjall Hverir Viewpoint',
    description: '米湖地熱區的泥漿泉、蒸氣孔與火山色彩 / Mývatn geothermal viewpoint with mud pots, steam vents, and volcanic colors',
    duration: '1 hr',
    image: 'https://images.unsplash.com/photo-1483728642387-6c3bdd6c93e5?auto=format&fit=crop&w=900&q=80',
  },
  {
    id: 'grjotagja-cave',
    category: 'must-see',
    titleZh: '格廖塔吉亞洞穴',
    titleEn: 'Grjótagjá cave',
    description: '米湖附近小型熔岩洞穴與地熱池景觀 / Small lava cave and geothermal pool near Lake Mývatn',
    duration: '30 min',
    image: 'https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=900&q=80',
  },
  {
    id: 'hverfjall-volcano-trail',
    category: 'must-see',
    titleZh: '惠爾火山步道',
    titleEn: 'Hverfjall Volcano Trail',
    description: '環火山口步道，視野開闊 / Crater rim trail with wide views',
    duration: '2 hr',
    image: 'https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?auto=format&fit=crop&w=900&q=80',
  },
  {
    id: 'skaftafell',
    category: 'must-see',
    titleZh: '斯卡夫塔山',
    titleEn: 'Skaftafell',
    description: '冰川健行與瀑布步道基地 / Base for glacier and waterfall hikes',
    duration: '3 hr',
    image: 'https://images.unsplash.com/photo-1500534314209-a25ddb2bd429?auto=format&fit=crop&w=900&q=80',
  },
  {
    id: 'studlagil-canyon-main-access',
    category: 'must-see',
    titleZh: '斯圖茲拉吉爾峽谷主要入口',
    titleEn: 'Stuðlagil Canyon Main Access',
    description: '玄武岩峽谷與冰藍河水 / Basalt canyon with blue glacial river views',
    duration: '2 hr',
    image: 'https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=900&q=80',
  },
  {
    id: 'borgarfjardarhofn',
    category: 'must-see',
    titleZh: '博爾加峽灣港',
    titleEn: 'Borgarfjarðarhöfn',
    description: '東冰島海港與觀鳥點，夏季可看海鸚 / East Iceland harbor and birdwatching spot, known for puffins in summer',
    duration: '1.5 hr',
    image: 'https://images.unsplash.com/photo-1500534314209-a25ddb2bd429?auto=format&fit=crop&w=900&q=80',
  },
  {
    id: 'egilsstadir',
    category: 'must-see',
    titleZh: '埃伊爾斯塔濟',
    titleEn: 'Egilsstaðir',
    description: '東冰島主要城鎮，適合作為峽灣與高地路線補給點 / East Iceland hub for fjords, supplies, and route planning',
    duration: '1.5 hr',
    image: 'https://images.unsplash.com/photo-1483728642387-6c3bdd6c93e5?auto=format&fit=crop&w=900&q=80',
  },
  {
    id: 'seydisfjordur',
    category: 'all',
    titleZh: '塞濟斯菲厄澤',
    titleEn: 'Seydisfjordur',
    description: '東峽灣彩虹街、藍教堂與山海小鎮景色 / Eastfjords town with rainbow street, blue church, and fjord views',
    duration: '1.5 hr',
    image: 'https://images.unsplash.com/photo-1483728642387-6c3bdd6c93e5?auto=format&fit=crop&w=900&q=80',
  },
  {
    id: 'dettifoss',
    category: 'all',
    titleZh: '黛提瀑布',
    titleEn: 'Dettifoss',
    description: '北冰島巨型瀑布，水勢壯觀，可安排米湖或阿斯比爾吉路線 / Powerful North Iceland waterfall for Mývatn or Ásbyrgi routes',
    duration: '1.5 hr',
    image: 'https://images.unsplash.com/photo-1529963183134-61a90db47eaf?auto=format&fit=crop&w=900&q=80',
  },
  {
    id: 'reykjahlid',
    category: 'all',
    titleZh: '雷克雅利茲',
    titleEn: 'Reykjahlíð',
    description: '米湖畔主要小鎮，適合住宿、加油與安排北冰島景點 / Main Lake Mývatn town for stays, fuel, and North Iceland route planning',
    duration: 'Town',
    image: 'https://images.unsplash.com/photo-1483728642387-6c3bdd6c93e5?auto=format&fit=crop&w=900&q=80',
  },
  {
    id: 'akureyri',
    category: 'all',
    titleZh: '阿克雷里',
    titleEn: 'Akureyri',
    description: '北冰島最大城鎮，適合住宿、餐廳、補給與峽灣停留 / North Iceland hub for stays, restaurants, supplies, and fjord routes',
    duration: 'Town',
    image: 'https://images.unsplash.com/photo-1504829857797-ddff29c27927?auto=format&fit=crop&w=900&q=80',
  },
  {
    id: 'kirkjufell',
    category: 'all',
    titleZh: '教會山',
    titleEn: 'Kirkjufell',
    description: '斯奈山半島代表山景，常與 Kirkjufellsfoss 瀑布一起安排 / Iconic Snæfellsnes mountain often paired with Kirkjufellsfoss waterfall',
    duration: '1 hr',
    image: 'https://images.unsplash.com/photo-1500534314209-a25ddb2bd429?auto=format&fit=crop&w=900&q=80',
  },
  {
    id: 'ingjaldsholskirkja',
    category: 'all',
    titleZh: '英加爾茲霍爾教堂',
    titleEn: 'Ingjaldshólskirkja',
    description: '斯奈山半島紅頂白教堂，背景可見山景與海岸風光 / Red-roofed white church on Snæfellsnes with mountain and coast views',
    duration: '30 min',
    image: 'https://images.unsplash.com/photo-1483728642387-6c3bdd6c93e5?auto=format&fit=crop&w=900&q=80',
  },
  {
    id: 'ytri-tunga',
    category: 'all',
    titleZh: '伊特里通加海灘',
    titleEn: 'Ytri Tunga',
    description: '斯奈山半島海豹海灘，適合短暫停留與觀察海岸生態 / Snæfellsnes seal beach for a short coastal wildlife stop',
    duration: '45 min',
    image: 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=900&q=80',
  },
  {
    id: 'hvitserkur',
    category: 'all',
    titleZh: '華塞克岩',
    titleEn: 'Hvitserkur',
    description: '北岸海蝕岩與海灘景觀，適合環島路線停靠 / North coast sea stack and beach viewpoint for ring road routes',
    duration: '1 hr',
    image: 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=900&q=80',
  },
  {
    id: 'kidka-wool-factory-shop',
    category: 'all',
    titleZh: 'KIDKA 羊毛工廠店',
    titleEn: 'KIDKA Wool Factory Shop',
    description: '華姆斯唐吉羊毛工廠店，適合購買冰島羊毛製品 / Wool factory shop in Hvammstangi for Icelandic knitwear and gifts',
    duration: '45 min',
    image: 'https://images.unsplash.com/photo-1516762689617-e1cffcef479d?auto=format&fit=crop&w=900&q=80',
  },
  {
    id: 'hengifoss',
    category: 'all',
    titleZh: '亨吉瀑布',
    titleEn: 'Hengifoss',
    description: '紅色岩層瀑布步道，可順訪 Litlanesfoss / Waterfall hike with red strata and nearby Litlanesfoss basalt falls',
    duration: '2 hr',
    image: 'https://images.unsplash.com/photo-1529963183134-61a90db47eaf?auto=format&fit=crop&w=900&q=80',
  },
  {
    id: 'gufu-waterfall',
    category: 'all',
    titleZh: '古弗瀑布',
    titleEn: 'Gufu waterfall',
    description: '塞濟斯菲厄澤山路旁的霧氣瀑布，適合短暫停靠 / Misty roadside waterfall near Seydisfjordur for a quick scenic stop',
    duration: '30 min',
    image: 'https://images.unsplash.com/photo-1529963183134-61a90db47eaf?auto=format&fit=crop&w=900&q=80',
  },
  {
    id: 'vok-baths',
    category: 'all',
    titleZh: '沃克溫泉',
    titleEn: 'Vök Baths',
    description: '埃伊爾斯塔濟附近湖上地熱溫泉，適合東冰島放鬆停留 / Geothermal floating baths near Egilsstaðir for a relaxing East Iceland stop',
    duration: '2 hr',
    image: 'https://images.unsplash.com/photo-1500534314209-a25ddb2bd429?auto=format&fit=crop&w=900&q=80',
  },
  {
    id: 'kronan-vik',
    category: 'grocery',
    titleZh: 'Krónan 維克超市',
    titleEn: 'Krónan Vík',
    description: '維克鎮超市，適合補給早餐、路上零食與簡餐 / Grocery stop in Vík for breakfast, snacks, and simple meals',
    duration: '30 min',
    image: 'https://images.unsplash.com/photo-1542838132-92c53300491e?auto=format&fit=crop&w=900&q=80',
  },
  {
    id: 'netto-hofn',
    category: 'grocery',
    titleZh: 'Nettó 赫本超市',
    titleEn: 'Nettó Hofn',
    description: '赫本鎮超市，適合冰河湖與東南岸路線補給 / Grocery stop in Hofn for glacier lagoon and southeast coast routes',
    duration: '30 min',
    image: 'https://images.unsplash.com/photo-1542838132-92c53300491e?auto=format&fit=crop&w=900&q=80',
  },
  {
    id: 'bonus-egilsstadir',
    category: 'grocery',
    titleZh: 'Bónus 埃伊爾斯塔濟超市',
    titleEn: 'Bónus Egilsstaðir',
    description: '埃伊爾斯塔濟折扣超市，適合東冰島路線補給 / Discount grocery stop in Egilsstaðir for East Iceland supplies',
    duration: '30 min',
    image: 'https://images.unsplash.com/photo-1542838132-92c53300491e?auto=format&fit=crop&w=900&q=80',
  },
  {
    id: 'midhraun-lava-resort',
    category: 'stay',
    titleZh: 'Miðhraun 熔岩度假村',
    titleEn: 'Miðhraun - Lava Resort',
    description: '斯奈山半島附近住宿，可作為教會山與西部路線基地 / Stay near Snæfellsnes for Kirkjufell and west Iceland routes',
    duration: 'Stay',
    image: 'https://images.unsplash.com/photo-1500534314209-a25ddb2bd429?auto=format&fit=crop&w=900&q=80',
  },
  {
    id: 'hestheimar',
    category: 'stay',
    titleZh: 'Hestheimar',
    titleEn: 'Hestheimar',
    description: 'Hestheimar, 851 Hella, Iceland / Farm stay near Hella',
    duration: 'Stay',
    image: 'https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?auto=format&fit=crop&w=900&q=80',
  },
  {
    id: 'klausturhof-guesthouse',
    category: 'stay',
    titleZh: 'Klausturhof Guesthouse',
    titleEn: 'Klausturhof Guesthouse',
    description: 'Klausturvegur 1-5, Kirkjubaejarklaustur, 0880 / Guesthouse in Kirkjubaejarklaustur',
    duration: 'Stay',
    image: 'https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?auto=format&fit=crop&w=900&q=80',
  },
  {
    id: 'hotel-hofn',
    category: 'stay',
    titleZh: 'Hotel Höfn',
    titleEn: 'Hotel Höfn',
    description: 'Vikurbraut 20, Höfn, 780 / Hotel in Höfn harbor town',
    duration: 'Stay',
    image: 'https://images.unsplash.com/photo-1496412705862-e0088f16f791?auto=format&fit=crop&w=900&q=80',
  },
  {
    id: 'lake-hotel-gistihusid-egilsstadir',
    category: 'stay',
    titleZh: 'Lake Hotel Gistihusid Egilsstadir',
    titleEn: 'Lake Hotel Gistihusid Egilsstadir',
    description: 'Egilsstaðir 1-2, Egilsstaðir, 700 / Lake hotel in Egilsstaðir',
    duration: 'Stay',
    image: 'https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?auto=format&fit=crop&w=900&q=80',
  },
  {
    id: 'myvatn-vogahraun-4',
    category: 'stay',
    titleZh: 'Myvatn Vogahraun 4',
    titleEn: 'Myvatn Vogahraun 4',
    description: 'J3FM+F2 Reykjahlio, Iceland / Stay near Lake Myvatn in Reykjahlio',
    duration: 'Stay',
    image: 'https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?auto=format&fit=crop&w=900&q=80',
  },
  {
    id: 'hotel-reykjavik-grand',
    category: 'stay',
    titleZh: 'Hotel Reykjavik Grand',
    titleEn: 'Hotel Reykjavik Grand',
    description: 'Sigtun 28, Reykjavik, 105 / Reykjavik city hotel',
    duration: 'Stay',
    image: 'https://images.unsplash.com/photo-1496412705862-e0088f16f791?auto=format&fit=crop&w=900&q=80',
  },
  {
    id: 'fridheimar',
    category: 'restaurant',
    titleZh: 'Friðheimar 番茄溫室餐廳',
    titleEn: 'Friðheimar',
    description: '金圈路線上的溫室番茄湯 / Greenhouse tomato lunch on the Golden Circle',
    duration: '1.5 hr',
    image: 'https://images.unsplash.com/photo-1592924357228-91a4daadcfea?auto=format&fit=crop&w=900&q=80',
  },
  {
    id: 'aldan-hotel-restaurant',
    category: 'restaurant',
    titleZh: 'Aldan 飯店餐廳',
    titleEn: 'Aldan Hotel & Restaurant',
    description: '塞濟斯菲厄澤鎮上的晚餐與住宿餐廳選擇 / Restaurant option in Seydisfjordur for dinner near the harbor',
    duration: '1.5 hr',
    image: 'https://images.unsplash.com/photo-1555396273-367ea4eb4db5?auto=format&fit=crop&w=900&q=80',
  },
  {
    id: 'skaftafell-glacier-hike',
    category: 'tour',
    titleZh: 'Skaftafell 冰河健行',
    titleEn: 'Skaftafell glacier hike',
    description: '需專業嚮導與裝備 / Guided glacier walk with safety gear',
    duration: '4 hr',
    image: 'https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?auto=format&fit=crop&w=900&q=80',
  },
  {
    id: 'jokulsarlon-glacier-lagoon-kayak-tour',
    category: 'tour',
    titleZh: '傑古沙龍冰河湖皮划艇團',
    titleEn: 'JÖKULSARLON GLACIER LAGOON KAYAK TOUR',
    description: '冰河湖導覽皮划艇體驗 / Guided kayak tour among floating icebergs in the glacier lagoon',
    duration: '2 hr',
    image: 'https://images.unsplash.com/photo-1500534314209-a25ddb2bd429?auto=format&fit=crop&w=900&q=80',
  },
  {
    id: 'skaftafell-glacier-hike-4hr',
    category: 'tour',
    titleZh: 'Skaftafell 冰川健行 (4 小時)',
    titleEn: 'Skaftafell Glacier Hike (4 hrs)',
    description: 'Skaftafell 冰川健行 4 小時行程 / Guided glacier hike at Skaftafell (4 hours)',
    duration: '4 hr',
    image: 'https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?auto=format&fit=crop&w=900&q=80',
  },
  {
    id: 'jokulsarlon-glacier-zodiac-boat-tour-325pm',
    category: 'tour',
    titleZh: 'Jokulsarlon 冰河湖 Zodiac 快艇團 3:25 PM',
    titleEn: 'Jokulsarlon Glacier Zodiac Boat Tour 3:25 PM',
    description: 'Jokulsarlon 冰河湖 Zodiac 快艇團 (15:25 出發) / Zodiac boat tour on the glacier lagoon at 3:25 PM',
    duration: '2 hr',
    image: 'https://images.unsplash.com/photo-1500534314209-a25ddb2bd429?auto=format&fit=crop&w=900&q=80',
  },
];

const itemLocations = {
  'keflavik-international-airport': { lat: 63.985, lng: -22.6056 },
  'jokulsarlon-glacier-lagoon': { lat: 64.0481, lng: -16.1791 },
  hella: { lat: 63.8355, lng: -20.4007 },
  hvolsvollur: { lat: 63.7533, lng: -20.2243 },
  selfoss: { lat: 63.9335, lng: -20.9971 },
  seljalandsfoss: { lat: 63.6156, lng: -19.9886 },
  skogafoss: { lat: 63.5321, lng: -19.5114 },
  fjadrargljufur: { lat: 63.7712, lng: -18.1719 },
  'dc3-airplane-wreck-eyvindarholt': { lat: 63.4591, lng: -19.3647 },
  hofs: { lat: 63.9167, lng: -16.7 },
  vestrahorn: { lat: 64.2442, lng: -14.972 },
  hofn: { lat: 64.2539, lng: -15.2082 },
  reykjavik: { lat: 64.1466, lng: -21.9426 },
  'gullfoss-falls': { lat: 64.3271, lng: -20.1199 },
  geysir: { lat: 64.3104, lng: -20.3024 },
  'thingvellir-national-park': { lat: 64.2559, lng: -21.1295 },
  'sky-lagoon': { lat: 64.1027, lng: -21.8808 },
  'the-cave-vidgelmir': { lat: 64.75, lng: -20.78 },
  'reynisfjara-beach': { lat: 63.4043, lng: -19.0444 },
  'godafoss-waterfall': { lat: 65.6828, lng: -17.5502 },
  krafla: { lat: 65.7156, lng: -16.7567 },
  'namafjall-hverir-viewpoint': { lat: 65.6414, lng: -16.8082 },
  'grjotagja-cave': { lat: 65.6265, lng: -16.8824 },
  'hverfjall-volcano-trail': { lat: 65.6086, lng: -16.8752 },
  skaftafell: { lat: 64.015, lng: -16.9667 },
  'studlagil-canyon-main-access': { lat: 65.1634, lng: -15.3079 },
  borgarfjardarhofn: { lat: 65.5438, lng: -13.7576 },
  egilsstadir: { lat: 65.2674, lng: -14.3948 },
  seydisfjordur: { lat: 65.2608, lng: -14.0098 },
  dettifoss: { lat: 65.8147, lng: -16.3846 },
  reykjahlid: { lat: 65.6422, lng: -16.9122 },
  akureyri: { lat: 65.6885, lng: -18.1262 },
  kirkjufell: { lat: 64.9417, lng: -23.3069 },
  ingjaldsholskirkja: { lat: 64.8967, lng: -23.8762 },
  'ytri-tunga': { lat: 64.8035, lng: -23.0808 },
  hvitserkur: { lat: 65.6068, lng: -20.6356 },
  'kidka-wool-factory-shop': { lat: 65.3974, lng: -20.9427 },
  hengifoss: { lat: 65.0956, lng: -14.8894 },
  'gufu-waterfall': { lat: 65.2645, lng: -14.0844 },
  'vok-baths': { lat: 65.2993, lng: -14.4396 },
  'kronan-vik': { lat: 63.4191, lng: -19.0065 },
  'netto-hofn': { lat: 64.254, lng: -15.207 },
  'bonus-egilsstadir': { lat: 65.2634, lng: -14.399 },
  'midhraun-lava-resort': { lat: 64.8816, lng: -22.7043 },
  hestheimar: { lat: 63.8031, lng: -20.3894 },
  'klausturhof-guesthouse': { lat: 63.7959, lng: -18.0627 },
  'hotel-hofn': { lat: 64.2535, lng: -15.2093 },
  'lake-hotel-gistihusid-egilsstadir': { lat: 65.2672, lng: -14.3942 },
  'myvatn-vogahraun-4': { lat: 65.6422, lng: -16.9122 },
  'hotel-reykjavik-grand': { lat: 64.1468, lng: -21.8867 },
  fridheimar: { lat: 64.176, lng: -20.4487 },
  'aldan-hotel-restaurant': { lat: 65.2604, lng: -14.0112 },
  'skaftafell-glacier-hike': { lat: 64.015, lng: -16.9667 },
  'jokulsarlon-glacier-lagoon-kayak-tour': { lat: 64.0481, lng: -16.1791 },
  'skaftafell-glacier-hike-4hr': { lat: 64.015, lng: -16.9667 },
  'jokulsarlon-glacier-zodiac-boat-tour-325pm': { lat: 64.0481, lng: -16.1791 },
};

let spotMapLinks = {
  'keflavik-international-airport': 'https://maps.app.goo.gl/pGBcwbe5LZxNsZLb6',
  reykjavik: 'https://maps.app.goo.gl/KhwMkJpYqkJ4eNdf8',
  'thingvellir-national-park': 'https://maps.app.goo.gl/U1ibYvgTK4HHsKoh9',
  fridheimar: 'https://maps.app.goo.gl/YRpFFmw4Xh5ZfeUR8',
  geysir: 'https://maps.app.goo.gl/73BirnRZpyQ3WRWW6',
  'gullfoss-falls': 'https://maps.app.goo.gl/7J2DNxnasMroztT6A',
  fjadrargljufur: 'https://maps.app.goo.gl/tjcThH5GfLH4Qn48A',
  'dc3-airplane-wreck-eyvindarholt': 'https://maps.app.goo.gl/hAWZXnTueCsE6Cgp6',
  skaftafell: 'https://maps.app.goo.gl/upcbFep9bUh4H1Gm7',
  'skaftafell-glacier-hike': 'https://maps.app.goo.gl/upcbFep9bUh4H1Gm7',
  'skaftafell-glacier-hike-4hr': 'https://maps.app.goo.gl/upcbFep9bUh4H1Gm7',
};

const driveTimeOverrides = {
  'akureyri__hvitserkur': { label: '2h 36m', distanceKm: 198 },
  'kidka-wool-factory-shop__midhraun-lava-resort': { label: '2h 40m', distanceKm: 195 },
};

const state = {
  selectedCategory: 'all',
  query: '',
  isMobileReadOnly: window.matchMedia('(max-width: 620px)').matches,
  days: createDefaultDays(),
};

const tripStartDate = { month: 9, day: 12 };

const filtersElement = document.querySelector('#categoryFilters');
const libraryElement = document.querySelector('#itemLibrary');
const daysBoardElement = document.querySelector('#daysBoard');
const scrollDaysLeftButton = document.querySelector('#scrollDaysLeft');
const scrollDaysRightButton = document.querySelector('#scrollDaysRight');
const searchInput = document.querySelector('#searchInput');
const appShell = document.querySelector('.app-shell');
const itemTemplate = document.querySelector('#itemCardTemplate');
const dayTemplate = document.querySelector('#dayTemplate');
const toggleLibraryButton = document.querySelector('#toggleLibrary');
const restoreLibraryButton = document.querySelector('#restoreLibrary');

function getCategory(categoryId) {
  if (categoryId === 'all') {
    return { id: 'all', zh: '全部', en: 'All', color: '#111827' };
  }
  return categories.find((category) => category.id === categoryId);
}

const storageKey = 'iceland-trip-planner-plan';
const storageBackupKey = 'iceland-trip-planner-plan-backup';
const libraryCollapsedStorageKey = 'iceland-trip-planner-library-collapsed';
const mobileReadOnlyMediaQuery = window.matchMedia('(max-width: 620px)');
function getLibraryItem(itemId) {
  return libraryItems.find((item) => item.id === itemId);
}

function normalizeSpotMapLinks(rawLinks) {
  if (!rawLinks || typeof rawLinks !== 'object') return {};

  const simplifyKey = (value) => String(value)
    .normalize('NFKD')
    .replace(/[ðÐ]/g, 'd')
    .replace(/[þÞ]/g, 'th')
    .replace(/[æÆ]/g, 'ae')
    .replace(/[øØ]/g, 'o')
    .replace(/[łŁ]/g, 'l')
    .replace(/[\u0300-\u036f]/g, '')
    .toLowerCase()
    .replace(/[^a-z0-9\u4e00-\u9fff]/g, '');

  const sanitizeMapUrl = (value) => value
    .trim()
    .replace(/^hhttps:\/\//i, 'https://')
    .replace(/^http:\/\//i, 'https://');

  const keyAliases = {
    nettohofn: 'netto-hofn',
    hotelhofn: 'hotel-hofn',
    lakehotelegilsstadir: 'lake-hotel-gistihusid-egilsstadir',
    borgarfjardarhofn: 'borgarfjardarhofn',
    hotelreykjavikgrand: 'hotel-reykjavik-grand',
    jokulsarlonglacier: 'jokulsarlon-glacier-lagoon',
    kronanvik: 'kronan-vik',
    bonusegilsstadir: 'bonus-egilsstadir',
    godafoss: 'godafoss-waterfall',
    kidka: 'kidka-wool-factory-shop',
  };

  const normalized = {};
  Object.entries(rawLinks).forEach(([key, value]) => {
    if (typeof value !== 'string' || !value.trim()) return;
    const cleanedUrl = sanitizeMapUrl(value);

    if (getLibraryItem(key)) {
      normalized[key] = cleanedUrl;
      return;
    }

    const normalizedKey = simplifyKey(key);
    const aliasedId = keyAliases[normalizedKey];
    if (aliasedId && getLibraryItem(aliasedId)) {
      normalized[aliasedId] = cleanedUrl;
      return;
    }

    const exactMatch = libraryItems.find((item) => {
      const itemId = simplifyKey(item.id);
      const titleEn = simplifyKey(item.titleEn);
      const titleZh = simplifyKey(item.titleZh);
      return itemId === normalizedKey || titleEn === normalizedKey || titleZh === normalizedKey;
    });
    if (exactMatch) {
      normalized[exactMatch.id] = cleanedUrl;
      return;
    }

    const prefixMatch = libraryItems.find((item) => {
      const itemId = simplifyKey(item.id);
      const titleEn = simplifyKey(item.titleEn);
      const titleZh = simplifyKey(item.titleZh);
      const canPrefixMatch = normalizedKey.length >= 10;
      if (!canPrefixMatch) return false;
      return normalizedKey.startsWith(itemId)
        || normalizedKey.startsWith(titleEn)
        || normalizedKey.startsWith(titleZh);
    });
    if (prefixMatch) {
      normalized[prefixMatch.id] = cleanedUrl;
    }
  });

  return normalized;
}

async function loadSpotMapLinksFromJson() {
  try {
    const response = await fetch('google-map-links.json', { cache: 'no-store' });
    if (!response.ok) return;

    const rawLinks = await response.json();
    const normalizedLinks = normalizeSpotMapLinks(rawLinks);
    if (!Object.keys(normalizedLinks).length) return;

    spotMapLinks = {
      ...spotMapLinks,
      ...normalizedLinks,
    };
  } catch {
    // Keep bundled defaults when local JSON is unavailable or malformed.
  }
}

function setLibraryCollapsed(isCollapsed, shouldSave = true) {
  appShell.classList.toggle('library-collapsed', isCollapsed);
  toggleLibraryButton.textContent = '收合';
  toggleLibraryButton.setAttribute('aria-expanded', String(!isCollapsed));
  toggleLibraryButton.setAttribute('aria-label', '收合項目 Collapse item library');
  restoreLibraryButton.setAttribute('aria-expanded', String(!isCollapsed));
  restoreLibraryButton.setAttribute('aria-label', '展開項目 Expand item library');

  if (shouldSave) {
    localStorage.setItem(libraryCollapsedStorageKey, String(isCollapsed));
  }
}

function setMobileReadOnlyMode(isEnabled) {
  state.isMobileReadOnly = isEnabled;
  appShell.classList.toggle('mobile-readonly', isEnabled);
}

function calculateDistanceKm(fromItemId, toItemId) {
  const fromLocation = itemLocations[fromItemId];
  const toLocation = itemLocations[toItemId];
  if (!fromLocation || !toLocation) return null;

  const earthRadiusKm = 6371;
  const latDelta = toRadians(toLocation.lat - fromLocation.lat);
  const lngDelta = toRadians(toLocation.lng - fromLocation.lng);
  const fromLat = toRadians(fromLocation.lat);
  const toLat = toRadians(toLocation.lat);
  const haversine = Math.sin(latDelta / 2) ** 2
    + Math.cos(fromLat) * Math.cos(toLat) * Math.sin(lngDelta / 2) ** 2;

  return 2 * earthRadiusKm * Math.asin(Math.sqrt(haversine));
}


function createDefaultDays() {
  return Array.from({ length: 8 }, (_, dayIndex) => ({
    id: crypto.randomUUID(),
    titleZh: `第${toChineseNumber(dayIndex + 1)}天`,
    titleEn: `Day ${dayIndex + 1}`,
    items: [],
  }));
}

function loadSavedPlan() {
  try {
    const savedPlan = chooseSavedPlan(
      parseSavedPlan(storageKey),
      parseSavedPlan(storageBackupKey),
    );
    if (!savedPlan?.days?.length) return;

    state.days = savedPlan.days.map((day, dayIndex) => ({
      id: day.id || crypto.randomUUID(),
      titleZh: day.titleZh || `第${toChineseNumber(dayIndex + 1)}天`,
      titleEn: day.titleEn || `Day ${dayIndex + 1}`,
      items: Array.isArray(day.items)
        ? day.items.filter((item) => getLibraryItem(item.itemId)).map((item) => ({
            itemId: item.itemId,
            instanceId: item.instanceId || crypto.randomUUID(),
          }))
        : [],
    }));
    renameDays();
  } catch {
    localStorage.removeItem(storageKey);
  }
}

function parseSavedPlan(key) {
  const rawPlan = localStorage.getItem(key);
  return rawPlan ? JSON.parse(rawPlan) : null;
}

function chooseSavedPlan(primaryPlan, backupPlan) {
  if (!primaryPlan) return backupPlan;
  if (!backupPlan) return primaryPlan;

  const primaryCount = getPlannedItemCount(primaryPlan);
  const backupCount = getPlannedItemCount(backupPlan);
  if (primaryCount === 0 && backupCount > 0) return backupPlan;

  return primaryPlan;
}

function createPlanSnapshot() {
  return {
    days: state.days,
    savedAt: new Date().toISOString(),
  };
}

function getPlannedItemCount(plan) {
  return plan.days.reduce((total, day) => total + (Array.isArray(day.items) ? day.items.length : 0), 0);
}

function savePlan() {
  const plan = createPlanSnapshot();
  localStorage.setItem(storageKey, JSON.stringify(plan));

  if (getPlannedItemCount(plan) > 0) {
    localStorage.setItem(storageBackupKey, JSON.stringify(plan));
  }
}
function toRadians(degrees) {
  return degrees * (Math.PI / 180);
}

function getDriveTimeOverride(fromItemId, toItemId) {
  return driveTimeOverrides[`${fromItemId}__${toItemId}`]
    || driveTimeOverrides[`${toItemId}__${fromItemId}`]
    || null;
}

function estimateDriveTime(fromItemId, toItemId) {
  const override = getDriveTimeOverride(fromItemId, toItemId);
  if (override) return override;

  const distanceKm = calculateDistanceKm(fromItemId, toItemId);
  if (distanceKm === null) return null;

  const roadAdjustedKm = distanceKm * 1.28;
  const hours = roadAdjustedKm / 72;
  const roundedMinutes = Math.max(10, Math.round((hours * 60) / 5) * 5);
  const wholeHours = Math.floor(roundedMinutes / 60);
  const minutes = roundedMinutes % 60;

  return {
    distanceKm: Math.round(roadAdjustedKm),
    label: wholeHours ? `${wholeHours} hr ${minutes ? `${minutes} min` : ''}`.trim() : `${minutes} min`,
  };
}

function createDriveLeg(fromItemId, toItemId) {
  const estimate = estimateDriveTime(fromItemId, toItemId);
  const leg = document.createElement('div');
  leg.className = 'drive-leg';

  if (!estimate) {
    leg.textContent = '車程資料不足 / Drive unavailable';
    return leg;
  }

  leg.innerHTML = `
    <strong>${estimate.label}</strong>
    <small>${estimate.distanceKm} km</small>
  `;
  return leg;
}

function renderFilters() {
  const allButton = createFilterButton('all', '全部', 'All');
  filtersElement.replaceChildren(allButton, ...categories.map((category) => (
    createFilterButton(category.id, category.zh, category.en)
  )));
}

function createFilterButton(id, zh, en) {
  const button = document.createElement('button');
  button.type = 'button';
  button.className = 'filter-chip';
  button.dataset.category = id;
  button.textContent = zh;
  button.setAttribute('aria-label', `${zh} / ${en}`);
  button.setAttribute('aria-pressed', String(state.selectedCategory === id));
  button.addEventListener('click', () => {
    state.selectedCategory = id;
    render();
  });
  return button;
}

function renderLibrary() {
  const query = state.query.trim().toLowerCase();
  const visibleItems = libraryItems.filter((item) => {
    const matchesCategory = state.selectedCategory === 'all' || item.category === state.selectedCategory;
    const searchable = `${item.titleZh} ${item.titleEn} ${item.description}`.toLowerCase();
    return matchesCategory && searchable.includes(query);
  });

  if (!visibleItems.length) {
    const empty = document.createElement('p');
    empty.className = 'empty-message';
    empty.textContent = '找不到符合的項目 / No matching items';
    libraryElement.replaceChildren(empty);
    return;
  }

  libraryElement.replaceChildren(...visibleItems.map((item) => createItemCard(item, { source: 'library' })));
}

function formatBodyCopy(description) {
  return description.split(' / ')[0];
}

function getGoogleMapsUrl(item) {
  const customLink = spotMapLinks[item.id];
  if (customLink) {
    return customLink;
  }

  const location = itemLocations[item.id];
  if (location) {
    return `https://www.google.com/maps/search/?api=1&query=${location.lat},${location.lng}`;
  }

  const fallbackQuery = `${item.titleEn} Iceland`;
  return `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(fallbackQuery)}`;
}

function formatDurationLabel(duration) {
  return duration
    .replace('Airport', '機場')
    .replace('Town', '城鎮')
    .replace('hr', '小時')
    .replace('min', '分鐘');
}

function needsTallCard(item) {
  const title = `${item.titleZh} / ${item.titleEn}`;
  const body = formatBodyCopy(item.description);
  return title.length > 38 || body.length > 28;
}

function createItemCard(item, options = {}) {
  const card = itemTemplate.content.firstElementChild.cloneNode(true);
  const category = getCategory(item.category);
  const isEditable = !state.isMobileReadOnly;
  card.classList.toggle('is-tall', needsTallCard(item));
  card.dataset.itemId = item.id;
  card.dataset.source = options.source;
  card.dataset.instanceId = options.instanceId || '';
  card.draggable = isEditable;
  card.style.setProperty('--category-color', category.color);
  card.querySelector('.item-photo').style.backgroundImage = `url('${item.image}')`;
  card.querySelector('.category-pill').textContent = category.zh;
  card.querySelector('.category-pill').setAttribute('aria-label', `${category.zh} / ${category.en}`);
  card.querySelector('.duration').textContent = formatDurationLabel(item.duration);
  card.querySelector('h3').textContent = `${item.titleZh} / ${item.titleEn}`;
  card.querySelector('p').textContent = formatBodyCopy(item.description);
  card.addEventListener('click', (event) => {
    if (event.target.closest('.remove-item')) return;
    if (card.classList.contains('dragging')) return;

    window.open(getGoogleMapsUrl(item), '_blank', 'noopener,noreferrer');
  });

  if (isEditable) {
    card.addEventListener('dragstart', (event) => {
      card.classList.add('dragging');
      event.dataTransfer.effectAllowed = 'copyMove';
      event.dataTransfer.setData('application/json', JSON.stringify({
        itemId: item.id,
        source: options.source,
        fromDayId: options.dayId || null,
        instanceId: options.instanceId || null,
      }));
    });

    card.addEventListener('dragend', () => {
      card.classList.remove('dragging');
    });
  }

  if (options.source === 'plan' && isEditable) {
    const removeButton = document.createElement('button');
    removeButton.type = 'button';
    removeButton.className = 'remove-item';
    removeButton.setAttribute('aria-label', `刪除 ${item.titleZh} / Delete ${item.titleEn}`);
    removeButton.title = '刪除 / Delete';
    removeButton.innerHTML = `
      <svg viewBox="0 0 24 24" aria-hidden="true" focusable="false">
        <path d="M9 3h6l1 2h4v2H4V5h4l1-2Zm-2 6h10l-.7 11H7.7L7 9Zm3 2v7h2v-7h-2Zm4 0v7h2v-7h-2Z"></path>
      </svg>
    `;
    removeButton.addEventListener('click', () => removePlannedItem(options.dayId, options.instanceId));
    card.append(removeButton);
  }

  return card;
}

function renderDays() {
  const dayElements = state.days.map((day, dayIndex) => {
    const dayElement = dayTemplate.content.firstElementChild.cloneNode(true);
    const label = dayElement.querySelector('.day-heading p');
    const title = dayElement.querySelector('.day-heading h3');
    const dropZone = dayElement.querySelector('.drop-zone');
    const removeButton = dayElement.querySelector('.remove-day');

    dayElement.dataset.dayId = day.id;
    label.textContent = formatTripDate(dayIndex);
    title.textContent = day.titleZh;
    title.setAttribute('aria-label', `${day.titleZh} / ${day.titleEn}`);
    dropZone.dataset.dayId = day.id;
    dropZone.setAttribute('aria-label', `${day.titleZh} ${day.titleEn} itinerary drop zone`);

    if (!day.items.length) {
      const empty = document.createElement('p');
      empty.className = 'drop-hint';
      empty.textContent = '拖曳項目到這裡 / Drop items here';
      dropZone.append(empty);
    } else {
      day.items.forEach((plannedItem, itemIndex) => {
        const item = getLibraryItem(plannedItem.itemId);
        if (itemIndex > 0) {
          dropZone.append(createDriveLeg(day.items[itemIndex - 1].itemId, plannedItem.itemId));
        }

        dropZone.append(createItemCard(item, {
          source: 'plan',
          dayId: day.id,
          instanceId: plannedItem.instanceId,
        }));
      });
    }

    removeButton.hidden = state.days.length <= 1 || state.isMobileReadOnly;
    if (!state.isMobileReadOnly) {
      removeButton.addEventListener('click', () => {
        state.days.splice(dayIndex, 1);
        renameDays();
        render();
      });

      setupDropZone(dropZone);
    }
    return dayElement;
  });

  daysBoardElement.replaceChildren(...dayElements);
}

function setupDropZone(dropZone) {
  if (state.isMobileReadOnly) return;

  dropZone.addEventListener('dragover', (event) => {
    event.preventDefault();
    dropZone.classList.add('is-over');
    showDropIndicator(dropZone, event.clientY, event.target);
  });

  dropZone.addEventListener('dragleave', (event) => {
    if (event.relatedTarget && dropZone.contains(event.relatedTarget)) return;
    dropZone.classList.remove('is-over');
    clearDropIndicators(dropZone);
  });

  dropZone.addEventListener('drop', (event) => {
    event.preventDefault();
    dropZone.classList.remove('is-over');
    const payload = readDragPayload(event);
    if (!payload) return;

    const toDayId = dropZone.dataset.dayId;
    const targetInstanceId = getDropTargetInstanceId(dropZone, event.clientY, event.target);
    clearDropIndicators(dropZone);
    moveOrCopyItem(payload, toDayId, targetInstanceId);
  });
}

function getDropTargetInstanceId(dropZone, pointerY, eventTarget = null) {
  const cards = [...dropZone.querySelectorAll('.item-card[data-source="plan"]:not(.dragging)')];
  const hoveredCard = eventTarget?.closest?.('.item-card[data-source="plan"]:not(.dragging)');

  if (hoveredCard && dropZone.contains(hoveredCard)) {
    const hoveredIndex = cards.indexOf(hoveredCard);
    const rect = hoveredCard.getBoundingClientRect();
    if (pointerY < rect.top + (rect.height / 2)) {
      return hoveredCard.dataset.instanceId;
    }

    return cards[hoveredIndex + 1]?.dataset.instanceId || null;
  }

  const targetCard = cards.find((card) => {
    const rect = card.getBoundingClientRect();
    return pointerY < rect.top + (rect.height / 2);
  });
  return targetCard?.dataset.instanceId || null;
}

function showDropIndicator(dropZone, pointerY, eventTarget = null) {
  const targetInstanceId = getDropTargetInstanceId(dropZone, pointerY, eventTarget);
  const targetCard = targetInstanceId
    ? dropZone.querySelector(`.item-card[data-instance-id="${targetInstanceId}"]`)
    : null;
  const indicator = getDropIndicator(dropZone);

  if (targetCard) {
    dropZone.insertBefore(indicator, targetCard);
  } else {
    dropZone.append(indicator);
  }
}

function getDropIndicator(dropZone) {
  const existingIndicator = dropZone.querySelector('.drop-indicator');
  if (existingIndicator) return existingIndicator;

  const indicator = document.createElement('div');
  indicator.className = 'drop-indicator';
  indicator.setAttribute('aria-hidden', 'true');
  indicator.innerHTML = '<span>Drop here</span>';
  return indicator;
}

function clearDropIndicators(dropZone) {
  dropZone.querySelectorAll('.drop-indicator').forEach((indicator) => indicator.remove());
}

function readDragPayload(event) {
  try {
    return JSON.parse(event.dataTransfer.getData('application/json'));
  } catch {
    return null;
  }
}

function moveOrCopyItem(payload, toDayId, targetInstanceId) {
  const toDay = state.days.find((day) => day.id === toDayId);
  if (!toDay) return;

  let plannedItem = {
    itemId: payload.itemId,
    instanceId: crypto.randomUUID(),
  };

  if (payload.source === 'plan' && payload.fromDayId && payload.instanceId) {
    const fromDay = state.days.find((day) => day.id === payload.fromDayId);
    const itemIndex = fromDay?.items.findIndex((item) => item.instanceId === payload.instanceId) ?? -1;
    if (fromDay && itemIndex >= 0) {
      plannedItem = fromDay.items.splice(itemIndex, 1)[0];
    }
  }

  const targetIndex = targetInstanceId
    ? Math.max(0, toDay.items.findIndex((item) => item.instanceId === targetInstanceId))
    : toDay.items.length;

  toDay.items.splice(targetIndex, 0, plannedItem);
  savePlan();
  render();
}

function removePlannedItem(dayId, instanceId) {
  const day = state.days.find((candidate) => candidate.id === dayId);
  if (!day) return;
  day.items = day.items.filter((item) => item.instanceId !== instanceId);
  savePlan();
  render();
}

function renameDays() {
  state.days.forEach((day, index) => {
    day.titleZh = `第${toChineseNumber(index + 1)}天`;
    day.titleEn = `Day ${index + 1}`;
  });
}

function toChineseNumber(number) {
  const numerals = ['零', '一', '二', '三', '四', '五', '六', '七', '八', '九', '十'];
  if (number <= 10) return numerals[number];
  return String(number);
}

function formatTripDate(dayIndex) {
  const date = new Date(2026, tripStartDate.month - 1, tripStartDate.day + dayIndex);
  return `${date.getMonth() + 1}/${date.getDate()}`;
}

function render() {
  renderFilters();
  renderLibrary();
  renderDays();
  updateDaysScrollButtons();
}

function getDaysScrollAmount() {
  const firstColumn = daysBoardElement.querySelector('.day-column');
  const boardStyles = getComputedStyle(daysBoardElement);
  const columnWidth = firstColumn?.getBoundingClientRect().width || 380;
  const columnGap = parseFloat(boardStyles.columnGap) || 0;
  return columnWidth + columnGap;
}

function scrollDays(direction) {
  daysBoardElement.scrollBy({
    left: direction * getDaysScrollAmount(),
    behavior: 'smooth',
  });
}

function updateDaysScrollButtons() {
  const maxScrollLeft = daysBoardElement.scrollWidth - daysBoardElement.clientWidth;
  scrollDaysLeftButton.disabled = daysBoardElement.scrollLeft <= 4;
  scrollDaysRightButton.disabled = daysBoardElement.scrollLeft >= maxScrollLeft - 4;
}

searchInput.addEventListener('input', (event) => {
  state.query = event.target.value;
  renderLibrary();
});

toggleLibraryButton.addEventListener('click', () => {
  if (state.isMobileReadOnly) return;
  setLibraryCollapsed(true);
});

restoreLibraryButton.addEventListener('click', () => {
  if (state.isMobileReadOnly) return;
  setLibraryCollapsed(false);
});

scrollDaysLeftButton.addEventListener('click', () => scrollDays(-1));
scrollDaysRightButton.addEventListener('click', () => scrollDays(1));
daysBoardElement.addEventListener('scroll', updateDaysScrollButtons);
window.addEventListener('resize', updateDaysScrollButtons);

window.addEventListener('beforeunload', savePlan);

document.querySelector('#addDay').addEventListener('click', () => {
  if (state.isMobileReadOnly) return;
  const dayNumber = state.days.length + 1;
  state.days.push({
    id: crypto.randomUUID(),
    titleZh: `第${toChineseNumber(dayNumber)}天`,
    titleEn: `Day ${dayNumber}`,
    items: [],
  });
  savePlan();
  render();
});

function exportPlan() {
  if (state.isMobileReadOnly) return;
  const plan = createPlanSnapshot();
  const dataStr = JSON.stringify(plan, null, 2);
  const dataBlob = new Blob([dataStr], { type: 'application/json' });
  const url = URL.createObjectURL(dataBlob);
  const link = document.createElement('a');
  link.href = url;
  link.download = `iceland-trip-${new Date().toISOString().split('T')[0]}.json`;
  link.click();
  URL.revokeObjectURL(url);
}

function importPlan() {
  if (state.isMobileReadOnly) return;
  const fileInput = document.querySelector('#importFile');
  fileInput.click();
}

document.querySelector('#exportPlan').addEventListener('click', exportPlan);
document.querySelector('#importPlan').addEventListener('click', importPlan);

document.querySelector('#importFile').addEventListener('change', (event) => {
  if (state.isMobileReadOnly) {
    event.target.value = '';
    return;
  }

  const file = event.target.files[0];
  if (!file) return;
  
  const reader = new FileReader();
  reader.onload = (e) => {
    try {
      const plan = JSON.parse(e.target.result);
      
      if (!plan.days || !Array.isArray(plan.days)) {
        alert('無效的計畫檔案 / Invalid plan file');
        return;
      }
      
      // Restore the plan
      state.days = plan.days.map((day, dayIndex) => ({
        id: day.id || crypto.randomUUID(),
        titleZh: day.titleZh || `第${toChineseNumber(dayIndex + 1)}天`,
        titleEn: day.titleEn || `Day ${dayIndex + 1}`,
        items: Array.isArray(day.items)
          ? day.items.filter((item) => getLibraryItem(item.itemId)).map((item) => ({
              itemId: item.itemId,
              instanceId: item.instanceId || crypto.randomUUID(),
            }))
          : [],
      }));
      
      savePlan();
      render();
      alert('計畫已恢復！/ Plan restored successfully!');
    } catch (error) {
      alert('無法讀取檔案。請確保是有效的計畫檔案 / Failed to read file. Make sure it\'s a valid plan file.');
      console.error(error);
    }
  };
  reader.readAsText(file);
  
  // Reset the input so the same file can be selected again
  event.target.value = '';
});

loadSavedPlan();
setLibraryCollapsed(localStorage.getItem(libraryCollapsedStorageKey) === 'true', false);
setMobileReadOnlyMode(mobileReadOnlyMediaQuery.matches);
loadSpotMapLinksFromJson();
mobileReadOnlyMediaQuery.addEventListener('change', (event) => {
  setMobileReadOnlyMode(event.matches);
  render();
});
render();
