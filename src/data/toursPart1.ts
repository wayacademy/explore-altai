import type { Expedition } from '../types/travel';

const IMG_ALTAI = '/src/assets/images/hero_mongolia_expedition_1795175547348.jpg';
const IMG_ORKHON = '/src/assets/images/dest_orkhon_steppe_1795175546419.jpg';
const IMG_KHUVSGUL = '/src/assets/images/dest_khuvsgul_taiga_1795175547240.jpg';
const IMG_KHYARGAS = '/src/assets/images/dest_khyargas_lake_1795175546830.jpg';
const IMG_TERELJ = '/src/assets/images/dest_terelj_khentii_1795175547433.jpg';

export const TOURS_PART_1: Expedition[] = [
  {
    number: 1,
    id: 'classic-altai-trekking',
    slug: 'classic-altai-trekking',
    webPage: 'https://www.explorealtai.com/tours/classic-altai-trekking',
    oldPage: 'https://www.explorealtai.com/detailnews/11100004',
    category: 'trekking',
    categoryLabel: {
      mn: 'Уул ба Алхалт',
      en: 'Trekking & Mountaineering',
    },
    title: {
      mn: 'Сонгодог Алтай Треккинг',
      en: 'Classic Altai Trekking',
    },
    subtitle: {
      mn: 'Алтай Таван Богд, Потанины мөсөн гол, Хотон-Хурган нуур',
      en: 'Altai Tavan Bogd, Potanin Glacier, Khoton & Khurgan Lakes',
    },
    region: {
      mn: 'Баян-Өлгий · Ховд',
      en: 'Bayan-Ulgii & Khovd',
    },
    keyFacts: {
      days: 14,
      durationLabel: { mn: '14 хоног', en: '14 days' },
      priceUsd: 2350,
      priceLabel: {
        mn: 'Нэг хүний $2,350-аас',
        en: 'From USD 2,350 per person',
      },
      season: { mn: 'Хүсэлтээр', en: 'On request' },
      departures2027: { mn: 'Хүсэлтээр', en: 'On request' },
      groupSize: { mn: 'Хүсэлтээр', en: 'On request' },
      grade: { mn: 'Хүсэлтээр', en: 'On request' },
    },
    pace: 'active',
    elevationM: 3500,
    coordinates: '49.1461° N, 87.8192° E',
    imageUrl: IMG_ALTAI,
    imageAlt: {
      mn: 'Алтай Таван Богдын мөнх цаст оргилууд ба хөндийн морин аялал',
      en: 'Glacier-topped Altai Tavan Bogd peaks and horseback valley trek',
    },
    featured: true,
    summary: {
      mn: 'Монгол Алтайн Алтай Таван Богдын бүсэд хоёр долоо хоног алхах аялал: мөнх цаст оргил, өндөр уулын гол, уужим хөндий болон зам дагуух нүүдэлчин айлуудаар зочилно.',
      en: 'A two-week trek into the Altai Tavan Bogd region of the Mongol Altai: glacier-topped peaks, high mountain rivers and alpine valleys, with visits to nomadic families on the way.',
    },
    overview: {
      mn: [
        'Хоёр долоо хоногийн энэхүү аялал таныг Баруун Монголын гүн дэх Алтай Таван Богдын мөнх цаст оргилууд, өндөр уулын гол мөрөн, өргөн уужим хөндийгөөр хөтөлнө. Эрч хүчтэй алхалтыг нутгийн нүүдэлчин соёлтой танилцах хосгүй туршлагатай хослуулсан.',
        'Анхаар: Доорх хөтөлбөр нь жишиг төлөвлөгөө бөгөөд маршрут, өдрийн алхалтын зай, соёлын зочлол, үйл ажиллагаа болон хурдыг таны сонирхол, биеийн бэлтгэл, аяллын огноонд тохируулан бүрэн өөрчлөх боломжтой.',
        'Яагаад онцгой вэ: Зөвхөн байгалийн үзэсгэлэнг үзэхээс гадна хэдэн зууны турш хатуу ширүүн ууланд дасан зохицсон Казак болон Монгол нүүдэлчдийн амьдралын хэв маягтай гүн танилцана.',
      ],
      en: [
        'This two-week trekking adventure takes you deep into the western reaches of Mongolia into the dramatic Altai Tavan Bogd region of the Mongol Altai Mountains, a remote landscape of glacier-topped peaks, high mountain rivers, and expansive alpine valleys. The tour blends strenuous trekking with opportunities to connect with local nomadic cultures, explore pristine nature, and experience the timeless ways of life in one of Asia’s wildest mountain regions.',
        'Important: The itinerary below is offered as a rough plan to give you a clear picture of a Classic Altai Trekking expedition. All aspects — including the route, daily trekking distances, cultural visits, activities, and pace — can be customized to suit your interests, fitness level, travel dates, and personal schedule.',
        'Why This Trek Is Special: This trek is not only a physical journey through some of Mongolia’s most majestic mountains; it is also a cultural exploration of traditional nomadic lifestyles that have endured for centuries in this rugged terrain. Every valley, camp, and family visit adds depth to your understanding of how people have adapted and thrived in harmony with nature.',
      ],
    },
    highlights: {
      mn: [
        'Гайхамшигт байгаль: 3,000 м-ээс дээш мөнх цаст оргил, уулын цэнгэг гол, альпийн хөндийгөөр алхана.',
        'Баялаг ан амьтан: Аргаль, янгир, цоохор ирвэс (ховор), чоно, бүргэд болон шувуудыг ажиглах боломжтой.',
        'Нүүдэлчдийн зочломтгой байдал: Казак болон Монгол малчин айлуудын гэрт зочилж эсгий хийх, цагаан идээ бэлтгэх, уламжлалт дуу хөгжмийг сонсоно.',
        'Өв соёл: Олон зуун жилийн түүхтэй Казакийн бүргэдээр ан хийх өв уламжлал, угсаатны олон талт соёлтой танилцана.',
      ],
      en: [
        'Unforgettable landscapes: Trek beneath glacier-capped peaks over 3,000 meters high across alpine meadows and crystal-clear rivers.',
        'Rich wildlife: Home to argali wild sheep, ibex, rare snow leopard, wolves, eagles, and diverse bird species.',
        'Nomadic culture and hospitality: Meet Kazakh and Mongolian families living in gers, sharing felt-making, dairy production, music, and storytelling.',
        'Cultural traditions: Learn about centuries-old Kazakh eagle hunting heritage and the ethnic diversity of the Altai highlands.',
      ],
    },
    itinerary: [
      {
        dayLabel: { mn: '1-р өдөр', en: 'Day 1' },
        title: { mn: 'Улаанбаатарт ирэх', en: 'Arrive in Ulaanbaatar' },
        description: {
          mn: 'Зочид буудалд хүргэн нислэгийн дараа амарна.',
          en: 'Transfer to your hotel and rest after your flight.',
        },
      },
      {
        dayLabel: { mn: '2-р өдөр', en: 'Day 2' },
        title: {
          mn: 'Өлгий хот руу нисэж Сагсайн гол руу хөдлөх',
          en: 'Fly to Ulgii and transfer to Sagsay River',
        },
        description: {
          mn: 'Казак үндэстний өвөрмөц соёлтой Баян-Өлгий аймгийн төв Өлгийд бууж орон нутгийн багтай уулзаад Сагсайн гол хүрнэ.',
          en: 'Fly to Ulgii — center of Bayan-Ulgii province, meet our local team and transfer to the Sagsay River.',
        },
      },
      {
        dayLabel: { mn: '3-р өдөр', en: 'Day 3' },
        title: {
          mn: 'Шивээт Хайрхан орчим өндөр уулын бүсэд орох',
          en: 'Enter high mountain area near Shiveet Khairkhan',
        },
        description: {
          mn: 'Нутгийн Казак айлд зочилж, ачаа тээш зөөх морьтой алхалтад бэлтгэнэ.',
          en: 'Visit a local Kazakh family and prepare for trekking with horses.',
        },
      },
      {
        dayLabel: { mn: '4-р өдөр', en: 'Day 4' },
        title: {
          mn: 'Алтай Таван Богд руу аялж эхлэх',
          en: 'Begin trekking toward Altai Tavan Bogd peaks',
        },
        description: {
          mn: 'Ачаа тээшийг мориор ачин Алтай Таван Богдын оргилууд руу алхаж эхэлнэ.',
          en: 'Begin trekking toward the Altai Tavan Bogd peaks with luggage carried by horses.',
        },
      },
      {
        dayLabel: { mn: '5-р өдөр', en: 'Day 5' },
        title: {
          mn: 'Потанины мөсөн гол ба Ариун Таван Оргил',
          en: 'Potanin Glacier and the Sacred Five Holy Peaks',
        },
        description: {
          mn: 'Оргилуудыг холбосон мөсөн голоор дамжин Потанины мөсөн гол руу алхана.',
          en: 'Trek toward the Potanin Glacier and the sacred Five Holy Peaks, passing glaciers connecting the massif.',
        },
      },
      {
        dayLabel: { mn: '6-р өдөр', en: 'Day 6' },
        title: { mn: 'Цагаан голд хүрэх', en: 'Arrive at Tsagaan Gol (White River)' },
        description: {
          mn: 'Сүүн өнгөт мөсөн голын урсгалтай Цагаан голын эрэгт хүрч, нүүдэлчин айлын дэргэд майханд хоноглоно.',
          en: 'A glacial river known for its milky waters; camp near a nomadic family.',
        },
      },
      {
        dayLabel: { mn: '7–9-р өдөр', en: 'Days 7–9' },
        title: {
          mn: 'Хотон ба Хурган нуур руу 3 өдрийн морин аялал',
          en: 'Three-day horseback journey to Khoton and Khurgan Lakes',
        },
        description: {
          mn: 'Цаст уулс, ногоон нуга, шинэсэн ойгоор хүрээлэгдсэн нууруудаар алхах, сэлэх, шувуу ажиглахад тохиромжтой.',
          en: 'Surrounded by snow-capped mountains, green meadows, and larch forests — ideal for hiking, swimming, and birdwatching.',
        },
      },
      {
        dayLabel: { mn: '10-р өдөр', en: 'Day 10' },
        title: { mn: 'Нуурын эрэг дээрх амралтын өдөр', en: 'Rest day at the lakes' },
        description: {
          mn: 'Нэмэлт явган алхалт болон амралт.',
          en: 'Rest day at the lakes with optional hiking or trekking.',
        },
      },
      {
        dayLabel: { mn: '11-р өдөр', en: 'Day 11' },
        title: { mn: 'Ховд хот руу хөдлөх', en: 'Drive toward Khovd town' },
        description: {
          mn: 'Замдаа нутгийн малчин айлуудаар орж Ховдын чиглэлд явна.',
          en: 'Drive toward Khovd town, visiting local families en route.',
        },
      },
      {
        dayLabel: { mn: '12-р өдөр', en: 'Day 12' },
        title: { mn: 'Ховд хотын аялал', en: 'Khovd town tour and hotel stay' },
        description: {
          mn: 'Ховд хоттой танилцаж орон нутгийн зочид буудалд хоноглоно.',
          en: 'Continue to Khovd town and enjoy a brief tour before an overnight in a local hotel.',
        },
      },
      {
        dayLabel: { mn: '13-р өдөр', en: 'Day 13' },
        title: { mn: 'Улаанбаатар руу нисэх', en: 'Flight back to Ulaanbaatar' },
        description: {
          mn: 'Улаанбаатарт буцаж ирээд чөлөөт цагтай.',
          en: 'Flight back to Ulaanbaatar, then free time in the city.',
        },
      },
      {
        dayLabel: { mn: '14-р өдөр', en: 'Day 14' },
        title: { mn: 'Буцах өдөр', en: 'Departure from Ulaanbaatar' },
        description: {
          mn: 'Нисэх онгоцны буудал руу үдэн гаргана.',
          en: 'Departure from Ulaanbaatar.',
        },
      },
    ],
    included: {
      mn: [
        'Байр: Зочид буудал, гэр бааз, майхант отог',
        'Хөтөч болон орчуулгын үйлчилгээ',
        'Өдрийн 3 удаагийн бүрэн хоол',
        'Дотоодын нислэгүүд',
        'Тээвэр: 4x4 жийп эсвэл микроавтобус',
        'Тусгай хамгаалалттай газар, байгалийн цогцолборт газрын хураамж',
        'Музей болон соёлын тоглолт',
        'Ачааны морьд, кемпийн тоног төхөөрөмж',
      ],
      en: [
        'Accommodation: Hotel, ger camp, tented camp',
        'Guiding and interpreting service',
        'Full board meals',
        'Domestic flights',
        'Transport: vehicle 4x4 or minivan',
        'Entrance fees to protected areas and national parks',
        'Museums and cultural performance',
        'Horses & Camping equipments',
      ],
    },
    notIncluded: {
      mn: [
        'Олон улсын нислэгийн тийз',
        'Хувийн хэрэглээний хэрэгсэл',
        'Нэмэлт сонголтот үйлчилгээ',
        'Илүү тээшний төлбөр',
        'Ганцаарчилсан өрөөний нэмэгдэл',
        'Согтууруулах ундаа',
        'Унтлагын хүүдий (Sleeping bag)',
        'Аяллын даатгал',
      ],
      en: [
        'International airfare',
        'Personal equipments',
        'Optional activity cost',
        'Excess baggage charges',
        'Single room supplement',
        'Alcoholic drinks',
        'Sleeping bag',
        'Travel Insurance',
      ],
    },
  },
  {
    number: 2,
    id: 'munkhhairkhan-trekking',
    slug: 'munkhhairkhan-trekking',
    webPage: 'https://www.explorealtai.com/tours/munkhhairkhan-trekking',
    oldPage: 'https://www.explorealtai.com/detailnews/11100006',
    category: 'trekking',
    categoryLabel: {
      mn: 'Уул ба Алхалт',
      en: 'Trekking & Mountaineering',
    },
    title: {
      mn: 'Мөнххайрхан Уулын Треккинг',
      en: 'Munkhhairkhan Trekking',
    },
    subtitle: {
      mn: 'Монголын 2 дахь өндөр оргил (4,362 м) ба Хойд Цэнхэрийн агуй',
      en: 'Around Munkhhairkhan (4,362 m) & Khoid Tsenkher Cave',
    },
    region: {
      mn: 'Ховд · Алтайн нуруу',
      en: 'Khovd · Altai Mountains',
    },
    keyFacts: {
      days: 15,
      durationLabel: { mn: '15 хоног', en: '15 days' },
      priceUsd: null,
      priceLabel: { mn: 'Хүсэлтээр', en: 'On request' },
      season: { mn: '6, 7, 8-р сар', en: 'June, July and August' },
      departures2027: { mn: 'Хүсэлтээр', en: 'On request' },
      groupSize: { mn: 'Хүсэлтээр', en: 'On request' },
      grade: { mn: 'Хүсэлтээр', en: 'On request' },
    },
    pace: 'active',
    elevationM: 4362,
    coordinates: '46.8833° N, 91.4667° E',
    imageUrl: IMG_ALTAI,
    imageAlt: {
      mn: 'Мөнххайрхан уулын мөнх цаст оргил болон уулын хөндий',
      en: 'Munkhhairkhan peak — Five Nails of the Snow Leopard in western Mongolia',
    },
    featured: true,
    summary: {
      mn: 'Монголын хоёр дахь өндөр оргил Мөнххайрхан (4,362 м)-ийг тойрон Казак, Урианхай, Захчин малчин айлуудаар зочлох 15 хоногийн экспедиц.',
      en: 'A trek around Munkhhairkhan (4,362 m), Mongolia’s second-highest mountain, in the remote Altai, with Kazakh, Uriankhai and Zakhchin nomad families along the way.',
    },
    overview: {
      mn: [
        'Баруун Монголын алслагдсан Алтайн нурууны Мөнххайрхан уул буюу нутгийнхны нэрлэдгээр «Ирвэсний таван хумс» (4,362 м)-ийг төвлөрүүлсэн 15 хоногийн алхалт.',
        'Казак, Урианхай, Захчин айлуудын гэрээр орж уламжлалт дуу бүжиг, цагаан идээ, Мини Наадам болон Хойд Цэнхэрийн чулуун зэвсгийн үеийн сүг зурагт агуйг үзнэ.',
        'Бүх маршрут, хурд, соёлын зочлолыг таны сонирхолд нийцүүлэн өөрчилж болно. Хүсэлтээр Улаанбаатарын орон нутгийн хөтөч зохион байгуулна.',
      ],
      en: [
        'Centered around Munkhhairkhan Mountain — Mongolia’s second highest peak at 4,362 m and known locally as Tavan Khumst (“Five Nails of the Snow Leopard”) — this expedition blends adventurous trekking with deep encounters with Kazakh, Uriankhai, and Zakhchin nomadic families.',
        'Experience a culturally arranged Mini Naadam (wrestling, archery, horse racing), Bronze Age deer stones, 800-year-old Turkic Balbals, Khoid Tsenkher Cave rock engravings (15,000–20,000 years old), and Khar-Us Lake migratory birds.',
        'All parts of the tour — route, daily activities, cultural experiences, and pace — can be customized to suit your preferences. Service Voucher applies to all listed services.',
      ],
    },
    highlights: {
      mn: [
        'Мөнх цаст нуур, 2,900 м хүртэлх өндөр уулын хөндий ба рашаан уст гол',
        'Казак, Урианхай, Захчин айлын урлаг, эсгий хийх, хорхог зоог',
        'Тусгайлан зохион байгуулах Мини Наадам (бөх, сур, морь)',
        '15–20 мянган жилийн настай Хойд Цэнхэрийн агуй ба Хүннү, Түрэгийн дурсгалууд',
      ],
      en: [
        'Glacial lakes (Seruun, Tsunkhel, Bayannuur, Buurug, Khukh Nuur) and alpine valleys',
        'Visits to Kazakh, Uriankhai & Zakhchin herders with traditional music, dance & Khorkhog feast',
        'Culturally arranged Mini Naadam with wrestling, archery & horse racing',
        'Khoid Tsenkher Stone Age cave paintings, Bronze Age deer stones & Khar-Us Lake',
      ],
    },
    itinerary: [
      {
        dayLabel: { mn: '1-р өдөр', en: 'Day 1' },
        title: { mn: 'Улаанбаатар — Угтах өдөр', en: 'Welcome Day Ulaanbaatar' },
        description: {
          mn: 'Зочид буудалд амарч баруун аймгийн аяллын бэлтгэлийг хангана.',
          en: 'Arrive in Ulaanbaatar, refresh in the hotel, and prepare for the journey west.',
        },
      },
      {
        dayLabel: { mn: '2-р өдөр', en: 'Day 2' },
        title: {
          mn: 'Ховд нисэж Улаан даваа хүрэх, Казак айл',
          en: 'Fly to Khovd, drive to Ulaan Davaa & visit Kazakh nomads',
        },
        description: {
          mn: 'Ховд руу 3 цаг нисээд 6 цаг жийпээр Улаан даваа гол хүрч, Казак айлын хөгжим бүжигтэй танилцана. Майханд хононо.',
          en: '3-hour flight to Khovd, 6-hour cross-country drive to Ulaan Davaa River, visit Kazakh family. Overnight in tents.',
        },
        meta: { mn: 'Өдөр, Оройн хоол', en: 'Meals: Lunch, Dinner' },
      },
      {
        dayLabel: { mn: '3-р өдөр', en: 'Day 3' },
        title: { mn: 'Сэрүүн нуур руу явах', en: 'Drive to Seruun (Cool) Lake' },
        description: {
          mn: 'Малчин айлын ямаа хариулах, эсгий хийх ахуйг үзэж нуурын эрэгт хоноглоно.',
          en: 'Observe nomadic herding, felt-making and local dairy foods; tent stay near Seruun Lake.',
        },
        meta: { mn: 'Өглөө, Өдөр, Оройн хоол', en: 'Meals: Breakfast, Lunch, Dinner' },
      },
      {
        dayLabel: { mn: '4-р өдөр', en: 'Day 4' },
        title: { mn: 'Гүрт рүү алхаж эхлэх (2,300 м)', en: 'Begin Trek to Gurt (2,300 m)' },
        description: {
          mn: 'Сэрүүн нуураас өмнө зүгт 24 км зайд орших алслагдсан Гүрт хүрнэ.',
          en: 'Travel 24 km south of Seruun lake to remote Gurt (altitude 2,300 m). Tent camp.',
        },
      },
      {
        dayLabel: { mn: '5–6-р өдөр', en: 'Days 5–6' },
        title: { mn: 'Гүрт голын бэлчир ба Урианхай айл (2,600 м)', en: 'Trekking & Uriankhai families (2,600 m)' },
        description: {
          mn: 'Ногоон бэлчээрээр алхаж Урианхай малчин айлд зочлон цагаан идээ, Монгол хоол хамт бэлтгэнэ.',
          en: 'Trek through lush pasturelands to Gurt River confluence and visit Uriankhai herder families.',
        },
      },
      {
        dayLabel: { mn: '7-р өдөр', en: 'Day 7' },
        title: { mn: 'Цүнхэл нуур ба Шувуу ажиглалт (2,406 м)', en: 'Trek to Tsunkhel Lake & Bird watching' },
        description: {
          mn: 'Түргэн голын дагуу 18–20 км алхаж 4 км² талбайтай Цүнхэл нуурт хүрнэ.',
          en: 'Trek 18–20 km alongside Turgen River to freshwater Tsunkhel Lake (2,406 m) and visit Uriankhai family.',
        },
      },
      {
        dayLabel: { mn: '8-р өдөр', en: 'Day 8' },
        title: { mn: 'Амралтын өдөр ба Мини Наадам', en: 'Free day and Mini Naadam' },
        description: {
          mn: 'Зочдод зориулсан тусгай бөх, сур харваа, морин уралдаан болон оройн ардын тоглолт.',
          en: 'Cultural Mini Naadam featuring wrestling, archery, horse racing and evening folk concert.',
        },
      },
      {
        dayLabel: { mn: '9-р өдөр', en: 'Day 9' },
        title: { mn: 'Баяннуур ба Захчин айл (2,900 м)', en: 'Trek to Bayannuur Lake & Zakhchin family (2,900 m)' },
        description: {
          mn: 'Түрэгийн үеийн хүн чулуу (Балбал) үзэж Захчин айлын хөгжим бүжгийг сонирхоно.',
          en: 'Hike Turgen-Artsat confluence, drive to Bayannuur Lake, see 800-year-old Balbals and visit a Zakhchin family.',
        },
      },
      {
        dayLabel: { mn: '10-р өдөр', en: 'Day 10' },
        title: { mn: 'Бөөрөг нуур руу алхах (2,670 м)', en: 'Trekking to Buurug Lake (2,670 m)' },
        description: {
          mn: 'Бөөрөг нуурын хөтөл давж 18–20 км уулын хөндийгөөр алхана.',
          en: 'Cross Buurug Nuuriin Khutul pass and trek 18–20 km through mountain valleys.',
        },
      },
      {
        dayLabel: { mn: '11-р өдөр', en: 'Day 11' },
        title: { mn: 'Хөх нуур руу алхах (2,800 м)', en: 'Trekking to Khukh (Blue) Lake (2,800 m)' },
        description: {
          mn: 'Ямаат уулын бэл дэх тунгалаг уст Хөх нуурт хүрч малчин айлаар орно.',
          en: 'Trek to crystal-clear Khukh Nuur near Holy Yamaat Mountain.',
        },
      },
      {
        dayLabel: { mn: '12-р өдөр', en: 'Day 12' },
        title: { mn: 'Урианхай айл ба Хорхог зоог (2,800 м)', en: 'Rest with Uriankhai Family & Khorkhog' },
        description: {
          mn: '2,000 жилийн настай буган чулуун хөшөө үзэж оройн хүндэтгэлийн Хорхог зооглоно.',
          en: 'See 2,000-year-old Bronze Age deer stones, 6th-century burials, and enjoy traditional Khorkhog feast.',
        },
      },
      {
        dayLabel: { mn: '13-р өдөр', en: 'Day 13' },
        title: { mn: 'Хойд Цэнхэрийн агуй (1,710 м)', en: 'Drive to Khoid Tsenkher Cave (1,710 m)' },
        description: {
          mn: '110 км давхиж 15–20 мянган жилийн өмнөх хадны сүг зурагт агуй, Хүннүгийн булш үзнэ.',
          en: 'Drive 110 km to Stone Age rock engravings inside 20 m deep Khoid Tsenkher Cave and Hunnu burials.',
        },
      },
      {
        dayLabel: { mn: '14-р өдөр', en: 'Day 14' },
        title: { mn: 'Хар-Ус нуур ба Ховд хот', en: 'Drive back to Khovd via Khar-Us Lake' },
        description: {
          mn: 'Хар-Ус нуурын нүүдлийн шувуудыг үзэж Ховдын музей, захаар ороод Буянт голын гэр баазад хононо.',
          en: '80 km drive past Khar-Us Lake birdlife to Khovd museum & bazaar; ger camp on Buyant River.',
        },
      },
      {
        dayLabel: { mn: '15-р өдөр', en: 'Day 15' },
        title: { mn: 'Улаанбаатар руу нисэх', en: 'Flight back to Ulaanbaatar' },
        description: {
          mn: 'Үдээс хойш Улаанбаатар руу буцаж ниснэ.',
          en: 'Afternoon flight back to Ulaanbaatar and hotel transfer.',
        },
        meta: { mn: 'Өглөө, Өдрийн хоол', en: 'Meals: Breakfast, Lunch' },
      },
    ],
    included: {
      mn: [
        'УБ-д 2 шөнө зочид буудал (2 хүний өрөө)',
        'Ховдод 1 шөнө гэр бааз, хөдөө 12 шөнө майхан',
        'Англи хэлтэй хөтөч, орон нутгийн уулын хөтөч, хээрийн тогооч, кемпийн хэрэгсэл',
        'Тусгай хамгаалалттай газрын тасалбар, Мини Наадмын төлбөр',
        'Хот дотор микроавтобус, хөдөө 4WD УАЗ фургон болон бүх хоол',
        'УБ–Ховд–УБ хоёр талын дотоодын нислэг',
      ],
      en: [
        'Twin/double hotel in Ulaanbaatar (2 nights), Ger camp in Khovd (1 night), tent stay (12 nights)',
        'English-speaking guide, local mountain guide, field cook, camping gear (sleeping pad included)',
        'Protected Area entrance, sightseeing fees, and Mini Naadam fee',
        'City minibus, 4WD countryside Russian minivan, full meals during trekking',
        'Round trip domestic flight (UB–Khovd–UB) with transfers',
      ],
    },
    notIncluded: {
      mn: [
        'Олон улсын нислэг',
        'Аяллын даатгал',
        'Савласан ус ба согтууруулах ундаа',
        'Улаанбаатар хот дахь хоол',
        'Унтлагын хүүдий',
        'Гарын мөнгө болон хувийн угаалга, зардал',
      ],
      en: [
        'International air transportation',
        'Travel insurance',
        'Mineral (bottled) water and alcoholic drinks',
        'Meals in Ulaanbaatar',
        'Sleeping bag',
        'Tips, gratuities, laundry & personal items',
      ],
    },
  },
  {
    number: 3,
    id: 'tsambagarav-trekking',
    slug: 'tsambagarav-trekking',
    webPage: 'https://www.explorealtai.com/tours/tsambagarav-trekking',
    oldPage: 'https://www.explorealtai.com/detailnews/11100005',
    category: 'trekking',
    categoryLabel: {
      mn: 'Уул ба Алхалт',
      en: 'Trekking & Mountaineering',
    },
    title: {
      mn: 'Цамбагарав Уулын Треккинг',
      en: 'Tsambagarav Trekking',
    },
    subtitle: {
      mn: 'Монголын 3 дахь өндөр оргил (4,202 м) ба Баяннуур',
      en: 'Tsambagarav Mountain (4,202 m) & Eagle Hunters at Bayan-Nuur',
    },
    region: {
      mn: 'Ховд · Баян-Өлгий',
      en: 'Khovd & Bayan-Ulgii',
    },
    keyFacts: {
      days: 12,
      durationLabel: { mn: '12 хоног', en: '12 days' },
      priceUsd: null,
      priceLabel: { mn: 'Хүсэлтээр', en: 'On request' },
      season: { mn: 'Хүсэлтээр', en: 'On request' },
      departures2027: { mn: 'Хүсэлтээр', en: 'On request' },
      groupSize: { mn: 'Хүсэлтээр', en: 'On request' },
      grade: { mn: 'Хүсэлтээр', en: 'On request' },
    },
    pace: 'active',
    elevationM: 4202,
    coordinates: '48.6653° N, 90.8475° E',
    imageUrl: IMG_ALTAI,
    imageAlt: {
      mn: 'Цамбагарав уулын мөнх цаст хяр болон хавцлын жим',
      en: 'Snow-capped Tsambagarav mountain range in western Mongolia',
    },
    summary: {
      mn: 'Монголын гурав дахь өндөр оргил Цамбагарав (4,202 м) руу морь, тэмээн ачаатайгаар явах 12 хоногийн алхалт.',
      en: 'This trek takes place in one of the most remote mountain ranges in the world — heading toward the mighty Tsambagarav Mountain (4,202 m), the third-highest peak in Mongolia.',
    },
    overview: {
      mn: [
        'Ховд эсвэл Өлгий хотоос эхлэн машин хүрэхгүй алслагдсан хавцал, хөндийгөөр морь, тэмээнд ачаа ачин алхана.',
        'Казак, Урианхай айлуудын зуслан, Баяннуурт бүргэдчинтэй уулзах болон Хатуугийн хавцлын хадны сүг зургуудыг үзнэ.',
        'Бүх маршрут, өдрийн зай, хурдыг аялагчийн хүсэлтэд нийцүүлэн тохируулна.',
      ],
      en: [
        'Starting and ending in Khovd or Ulgii, Mongolian horses and camels carry gear through terrain vehicles cannot reach beneath Tsambagarav Mountain (4,202 m).',
        'Meet Kazakh and Uriankhai nomadic families, observe ancient petroglyphs in Hatuu Valley, spot mountain ibex, and meet a Kazakh eagle hunter with a Golden Eagle at Lake Bayan-Nuur.',
        'Every aspect — route, cultural visits, trekking pace, and lodging style — can be customized.',
      ],
    },
    highlights: {
      mn: [
        'Хавцал, хадан даваа, цаст оргилын доорх алхалт',
        'Казак, Урианхай айлын нүүдэл, эсгий, цагаан идээний уламжлал',
        'Хатуугийн хөндийн эртний хадны сүг зураг ба булш',
        'Цамбагарав БЦГ-т янгир болон уулын ан амьтан ажиглах',
        'Баяннуур дээр Казак бүргэдчин болон Алтан бүргэдтэй уулзах',
      ],
      en: [
        'Remote mountain valleys, canyons, rocky passes & alpine meadows',
        'Kazakh & Uriankhai nomadic families with sheep, goats, horses, yaks & camels',
        'Ancient petroglyphs and old graves in Hatuu Valley',
        'Wildlife sightings including ibex in Tsamba-Garav National Park',
        'Meet a Kazakh eagle hunter with a Golden Eagle at Lake Bayan-Nuur',
      ],
    },
    itinerary: [
      {
        dayLabel: { mn: '1-р өдөр', en: 'Day 1' },
        title: { mn: 'Улаанбаатарт ирэх', en: 'Arrive in Ulaanbaatar' },
        description: {
          mn: 'Зочид буудал, хотын танилцуулга болон баруун бүсийн аяллын бэлтгэл.',
          en: 'Hotel, city orientation, prepare for western Mongolia.',
        },
      },
      {
        dayLabel: { mn: '2-р өдөр', en: 'Day 2' },
        title: { mn: 'Ховд эсвэл Өлгий нисэх, Хатуугийн хөндий', en: 'Fly to Khovd (or Ulgii) & Hatuu Valley' },
        description: {
          mn: 'Хатуугийн хөндий рүү явж Казак айлаар орно. Майханд хононо.',
          en: 'Drive to Hatuu Valley, visit Kazakh families, overnight in tents.',
        },
      },
      {
        dayLabel: { mn: '3–7-р өдөр', en: 'Days 3–7' },
        title: { mn: 'Нуурт ба Сайр Хайрханы хөндийгөөр алхах', en: 'Trek through Nuurt & Sair Khairhan Valleys' },
        description: {
          mn: 'Үзэсгэлэнт уулын хөндийгөөр алхаж зам дагуух малчин айлуудад зочилно.',
          en: 'Trek through Nuurt Valley and Sair Khairhan Valley; camp near scenic landscapes and visit nomadic families.',
        },
      },
      {
        dayLabel: { mn: '8–9-р өдөр', en: 'Days 8–9' },
        title: { mn: 'Ямаатын хөндийгөөр алхах', en: 'Trek Yamaat Valley' },
        description: {
          mn: 'Алтайн мөнх цаст оргилуудыг тольдон Ямаатын хөндийгөөр алхана.',
          en: 'Trek Yamaat Valley with beautiful views of the Altai snowcaps.',
        },
      },
      {
        dayLabel: { mn: '10-р өдөр', en: 'Day 10' },
        title: { mn: 'Баяннуур ба Бүргэдчин', en: 'Trek to Lake Bayan-Nuur & Eagle Hunter' },
        description: {
          mn: 'Баяннуурт хүрч Казак бүргэдчинтэй уулзаж орон нутгийн соёлтой танилцана.',
          en: 'Trek to Lake Bayan-Nuur, meet an eagle hunter and enjoy local culture.',
        },
      },
      {
        dayLabel: { mn: '11-р өдөр', en: 'Day 11' },
        title: { mn: 'Өлгий хот руу буцах', en: 'Return drive to Ulgii' },
        description: {
          mn: 'Өлгий хотод буцаж ирэн гар урлал, соёлын газраар зочилно.',
          en: 'Return drive to Ulgii — time for local shopping or a cultural stop.',
        },
      },
      {
        dayLabel: { mn: '12-р өдөр', en: 'Day 12' },
        title: { mn: 'Улаанбаатар руу нисэх ба буцах', en: 'Fly back to Ulaanbaatar & departure' },
        description: {
          mn: 'Дотоодын нислэгээр Улаанбаатарт буцаж буцах нислэгтээ бэлтгэнэ.',
          en: 'Fly back to Ulaanbaatar and prepare for departure.',
        },
      },
    ],
    included: {
      mn: [
        'УБ-д 2 шөнө, Өлгийд 1 шөнө зочид буудал',
        'Хөдөө 11 шөнө майханд байрлах',
        'Англи хэлтэй хөтөч, уулын хөтөч, хээрийн тогооч, кемпийн хэрэгсэл',
        'БЦГ-ын нэвтрэх тасалбар, үзвэрийн хураамж',
        'Хотын микроавтобус, хөдөө 4WD фургон болон бүх өдрийн хоол',
        'УБ–Ховд–УБ хоёр талын дотоодын нислэг',
      ],
      en: [
        'Twin/double hotel (2 nights UB, 1 night Ulgii) & Tent stay (11 nights)',
        'English-speaking guide, local mountain guide, field cook, camping gear (sleeping pad)',
        'Protected Area & sightseeing fees',
        'City minibus, 4WD Russian minivan & full trekking meals',
        'Round trip domestic flight (UB–Khovd–UB) with transfers',
      ],
    },
    notIncluded: {
      mn: [
        'Олон улсын нислэг',
        'Аяллын даатгал',
        'Савласан ус ба согтууруулах ундаа',
        'Улаанбаатарын хоол ба Унтлагын хүүдий',
        'Гарын мөнгө, хувийн хэрэглээ',
      ],
      en: [
        'International air transportation',
        'Travel insurance',
        'Mineral water & alcoholic drinks',
        'Meals in Ulaanbaatar & Sleeping bag',
        'Tips, gratuities & personal items',
      ],
    },
  },
  {
    number: 4,
    id: 'ultimate-khuiten-mountaineering',
    slug: 'ultimate-khuiten-mountaineering',
    webPage: 'https://www.explorealtai.com/tours/ultimate-khuiten-mountaineering',
    oldPage: 'https://www.explorealtai.com/detailnews/11100010',
    category: 'trekking',
    categoryLabel: {
      mn: 'Уул ба Алхалт',
      en: 'Trekking & Mountaineering',
    },
    title: {
      mn: 'Хүйтэн Оргилын Уулын Авиралт',
      en: 'Ultimate Khuiten Mountaineering',
    },
    subtitle: {
      mn: 'Монгол Улсын хамгийн өндөр цэг Хүйтэн оргил (4,374 м) ба Малчин (4,032 м)',
      en: 'Summit 4,374 m Khuiten Peak & Malchin Peak (4,032 m)',
    },
    region: {
      mn: 'Баян-Өлгий · Гурван улсын уулзвар',
      en: 'Bayan-Ulgii · Mongolia–Russia–China Border',
    },
    keyFacts: {
      days: 14,
      durationLabel: { mn: '14 хоног', en: '14 days' },
      priceUsd: null,
      priceLabel: { mn: 'Хүсэлтээр', en: 'On request' },
      season: { mn: 'Хүсэлтээр', en: 'On request' },
      departures2027: { mn: 'Хүсэлтээр', en: 'On request' },
      groupSize: { mn: 'Хүсэлтээр', en: 'On request' },
      grade: { mn: 'Хүсэлтээр', en: 'On request' },
    },
    pace: 'active',
    elevationM: 4374,
    coordinates: '49.1458° N, 87.8190° E',
    imageUrl: IMG_ALTAI,
    imageAlt: {
      mn: 'Монголын ноён оргил Хүйтэн уулын цаст мөсөн бүрхүүл',
      en: 'Khuiten Peak (4,374 m) glacier and snow ridge in Altai Tavan Bogd',
    },
    summary: {
      mn: 'Монгол Улсын хамгийн өндөр оргил Хүйтэн уул (4,374 м)-д авирч, уулчид болон алхагчдад аль алинд нь тохирсон Малчин оргил (4,032 м)-ын аяллыг хослуулсан 14 хоногийн экспедиц.',
      en: 'Summit the 4,374 m Khuiten Peak, the highest mountain in Mongolia, and explore the remote regions of the Altai with breathtaking scenery and unforgettable adventure.',
    },
    overview: {
      mn: [
        'Орос, Хятад, Монгол гурван улсын хилийн уулзварт сүндэрлэх 4,374 м өндөр Хүйтэн оргилд уулчид авирах бол, явган алхагчид техникийн хүндрэлгүй Малчин оргил (4,032 м) болон мөсөн голын бүсээр аялж болно.',
        'Казак, Тува, Урианхай малчин айлуудын зочломтгой өв соёл, морь тэмээн ачаа зөөвөрлөлт, оройн кэмпийн уур амьсгалыг мэдэрнэ.',
        'Хөтөлбөр, оргилын авиралтын нөөц өдөр, хурдыг таны бэлтгэл болон цаг хугацаанд тааруулан өөрчилж болно.',
      ],
      en: [
        'Designed for both climbers and trekkers — climbers can attempt Khuiten (4,374 m / 14,434 ft at the Russia–China–Mongolia crosspoint), while trekkers explore nearby areas including a non-technical ascent of Malchin Peak (4,032 m).',
        'Experience Kazakh, Tuvan, and Uriankhai nomadic hospitality, local horsemen and camel handlers, glacier crossings, and high-altitude alpine camps.',
        'The itinerary is a customizable rough plan that can be adjusted to your preferences, fitness level, and travel dates.',
      ],
    },
    highlights: {
      mn: [
        'Монголын ноён оргил Хүйтэн (4,374 м) ба Найрамдал оргилын авиралт',
        'Малчин оргилд (4,032 м) дасан зохицох авиралт',
        'Хоног толгойн дэвшилтэт кэмп ба байнгын мөсөн гол',
        'Казак, Тува, Урианхай угсаатны гэр бүлүүдэд зочлох',
      ],
      en: [
        'Summit attempt on Mongolia’s highest peak: Khuiten (4,374 m) & Nairamdal',
        'Acclimatization climb of non-technical Malchin Peak (4,032 m)',
        'Advanced camp at Honog Tolgoi & permanent glaciers',
        'Encounters with Kazakh, Tuvan & Uriankhai herders with pack horses & camels',
      ],
    },
    itinerary: [
      { dayLabel: { mn: '1-р өдөр', en: 'Day 1' }, title: { mn: 'Улаанбаатарт ирэх — Хотын аялал', en: 'Arrival in Ulaanbaatar – Guided city tour' }, description: { mn: 'Хөтөчтэй хотын аялал хийж буудалд амарна.', en: 'Guided city orientation and hotel stay.' } },
      { dayLabel: { mn: '2-р өдөр', en: 'Day 2' }, title: { mn: 'Баян-Өлгий рүү нисэх', en: 'Flight to Bayan-Ulgii' }, description: { mn: 'Баруун Монголын Баян-Өлгий аймагт хүрнэ.', en: 'Fly to Bayan-Ulgii province in western Mongolia.' } },
      { dayLabel: { mn: '3-р өдөр', en: 'Day 3' }, title: { mn: 'Алтай Таван Богд БЦГ руу явах', en: 'Drive to Altai Tavan Bogd National Park' }, description: { mn: 'Уулын бүсийн хаалга руу жийпээр хөдөлнө.', en: 'Overland 4x4 drive into the national park.' } },
      { dayLabel: { mn: '4-р өдөр', en: 'Day 4' }, title: { mn: 'Шивээт Хайрхан ууланд хүрэх', en: 'Arrival at Shiveet Khairkhan Mountain' }, description: { mn: 'Ариун хайрханы бэлд ачаа тээшээ бэлтгэнэ.', en: 'Reach trailhead and prepare pack animals.' } },
      { dayLabel: { mn: '5-р өдөр', en: 'Day 5' }, title: { mn: 'Суурь кэмп хүрэх морин жим', en: 'Horse trek to base camp with pack animals' }, description: { mn: 'Морин болон ачааны малын дэмжлэгтэйгээр суурь кэмп хүрнэ.', en: 'Trek to base camp supported by horses and camels.' } },
      { dayLabel: { mn: '6-р өдөр', en: 'Day 6' }, title: { mn: 'Дасан зохицох ба Малчин оргил', en: 'Acclimatization and climb of Malchin Peak' }, description: { mn: '4,032 м өндөр Малчин оргилд гарч дасан зохицно.', en: 'Acclimatize on non-technical Malchin Peak (4,032 m).' } },
      { dayLabel: { mn: '7-р өдөр', en: 'Day 7' }, title: { mn: 'Хоног толгой дахь дэвшилтэт кэмп', en: 'Move to advanced camp at Honog Tolgoi' }, description: { mn: 'Авиралтын өмнөх дээд кэмпт байрлана.', en: 'Ascend across glacier to Honog Tolgoi advanced camp.' } },
      { dayLabel: { mn: '8-р өдөр', en: 'Day 8' }, title: { mn: 'Хүйтэн ба Найрамдал оргилын авиралт', en: 'Attempt summit of Khuiten and Nairamdal Peak' }, description: { mn: 'Монголын хамгийн өндөр Хүйтэн оргилд (4,374 м) авирна.', en: 'Summit push to Khuiten Peak (4,374 m) and nearby Nairamdal Peak.' } },
      { dayLabel: { mn: '9-р өдөр', en: 'Day 9' }, title: { mn: 'Нөөц өдөр (цаг агаарын нөхцөл)', en: 'Spare day (weather/altitude contingency)' }, description: { mn: 'Цаг агаар, өндрийн дасан зохицолд зориулсан нөөц өдөр.', en: 'Contingency day for weather or altitude recovery.' } },
      { dayLabel: { mn: '10-р өдөр', en: 'Day 10' }, title: { mn: 'Суурь кэмп болон жим рүү буух', en: 'Return to base camp and trailhead' }, description: { mn: 'Уулнаас бууж унаатай уулзах цэгт ирнэ.', en: 'Descend back to base camp and trailhead.' } },
      { dayLabel: { mn: '11-р өдөр', en: 'Day 11' }, title: { mn: 'Өлгий хот руу буцах', en: 'Drive to Olgii; overnight at hotel' }, description: { mn: 'Өлгий хотод буцаж буудалд амарна.', en: 'Drive back to Olgii town and rest in hotel.' } },
      { dayLabel: { mn: '12-р өдөр', en: 'Day 12' }, title: { mn: 'Улаанбаатар руу буцаж нисэх', en: 'Return flight to Ulaanbaatar' }, description: { mn: 'Нийслэл хотод буцаж ирнэ.', en: 'Domestic flight back to Ulaanbaatar.' } },
      { dayLabel: { mn: '13-р өдөр', en: 'Day 13' }, title: { mn: 'Чөлөөт өдөр', en: 'Free time for shopping or explorations' }, description: { mn: 'Дэлгүүр хэсэх эсвэл хувийн аялал хийх боломжтой.', en: 'Free time for souvenir shopping or private city exploration.' } },
      { dayLabel: { mn: '14-р өдөр', en: 'Day 14' }, title: { mn: 'Монголоос буцах', en: 'Departure from Mongolia' }, description: { mn: 'Олон улсын нислэгээр буцна.', en: 'Transfer to airport and depart Mongolia.' } },
    ],
    included: {
      mn: [
        'Зочид буудал болон гэр баазын байр',
        'Өдрийн 3 удаагийн бүрэн хоол',
        'Хөтөч болон орчуулгын үйлчилгээ',
        '4x4 эсвэл микроавтобус тээвэр',
        'БЦГ-ын нэвтрэх тасалбар',
        'Орон нутгийн хөтөч, ачааны морь ба тэмээд',
      ],
      en: [
        'Hotel and ger camp accommodation',
        'Full board meals',
        'Guiding and interpreting services',
        '4x4 or minivan transport',
        'Entrance fees to protected areas and national parks',
        'Local guide, horses, and camels for gear and support',
      ],
    },
    notIncluded: {
      mn: [
        'Олон улсын нислэг ба Аяллын даатгал',
        'Хувийн уулын хэрэгсэл',
        'Нэмэлт сонголтот үйлчилгээ',
        'Ганцаарчилсан өрөөний төлбөр',
        'Согтууруулах ундаа, багийн гарын мөнгө',
      ],
      en: [
        'International airfare & Travel insurance',
        'Personal equipment',
        'Optional activities',
        'Single supplement room charge',
        'Alcoholic drinks & Guide/crew tips',
      ],
    },
  },
  {
    number: 5,
    id: 'eagle-hunting-bayannuur-valley',
    slug: 'eagle-hunting-bayannuur-valley',
    webPage: 'https://www.explorealtai.com/tours/eagle-hunting-in-bayannuur-valley',
    oldPage: 'https://www.explorealtai.com/detailnews/11050018',
    category: 'eagle',
    categoryLabel: {
      mn: 'Бүргэдийн ан & Өвөл',
      en: 'Eagle Hunting & Winter',
    },
    title: {
      mn: 'Баяннуурын Хөндий дэх Бүргэдийн Ан',
      en: 'Eagle Hunting in Bayannuur valley',
    },
    subtitle: {
      mn: 'Казак бүргэдчидтэй хамт өвлийн анд мордох 8 хоног',
      en: 'Winter Golden Eagle hunting with Kazakh families in Bayannuur',
    },
    region: {
      mn: 'Баян-Өлгий · Баяннуур сум',
      en: 'Bayan-Ulgii · Bayannuur soum',
    },
    keyFacts: {
      days: 8,
      durationLabel: { mn: '8 хоног', en: '8 days' },
      priceUsd: null,
      priceLabel: { mn: 'Хүсэлтээр', en: 'On request' },
      season: { mn: 'Өвлийн улирал (Хүсэлтээр)', en: 'On request (Winter)' },
      departures2027: { mn: 'Хүсэлтээр', en: 'On request' },
      groupSize: { mn: 'Хүсэлтээр', en: 'On request' },
      grade: { mn: 'Хүсэлтээр', en: 'On request' },
    },
    pace: 'balanced',
    coordinates: '48.9500° N, 91.1500° E',
    imageUrl: IMG_ORKHON,
    imageAlt: {
      mn: 'Баян-Өлгийн өвлийн хөндий дэх бүргэдчин айлын өвөлжөө',
      en: 'Winter settlement and Kazakh eagle hunters in Bayannuur valley',
    },
    featured: true,
    summary: {
      mn: 'Үеэс үед уламжлагдсан Казак түмний хамгийн эртний бөгөөд бахархалт уламжлал болох гаршуулсан бүргэдээр ан хийх урлагтай танилцана.',
      en: 'One of the oldest and most revered and spectacular traditions for the Khazakh people, passed down from generation to generation, is hunting with specially trained eagles.',
    },
    overview: {
      mn: [
        'Алтайн нурууны мөсөн гол, цаст уулсын дунд Баян-Өлгий аймгийн Баяннуур сумын өвөлжөөнд Казак бүргэдчин айлын гэрт байрлаж, 6.5 кг хүртэл жинтэй, 2.4 метр далавчтай Алтан бүргэд сургах эртний уламжлалыг дэргэдээс нь үзнэ.',
        '2–3 өдрийн турш Монгол морь унан ойролцоох уулс руу бүргэдчидтэй хамт ан ажиглан явна.',
      ],
      en: [
        'Exhibiting the real pride of the Kazakh people in extreme western Mongolia among the majestic Altai Mountains, stay directly in a Kazakh Eagle hunter family’s winter house in Bayannuur soum.',
        'Explore how huge Golden Eagles (up to 6.5 kg with a 7–8 ft wingspan) are trained and ride Mongolian horses into surrounding mountains with hunters for 2–3 days.',
      ],
    },
    highlights: {
      mn: [
        'Казак бүргэдчин айлын дулаан өвөлжөөнд зочлон амьдрах',
        '6.5 кг хүртэл жинтэй Алтан бүргэд сургах уламжлал',
        'Бүргэдчидтэй хамт морь унаж уулын өвөлд анд гарах',
        'Өлгий хотын лалын сүм, угсаатны музей болон зах үзэх',
      ],
      en: [
        'Stay in a Kazakh eagle hunter family’s winter home',
        'Observe training of Golden Eagles (up to 6.5 kg, 7–8 ft wingspan)',
        '2–3 days riding Mongolian horses with hunters in the mountains',
        'Explore Ulgii Mosque, ethnographic museum & local market',
      ],
    },
    itinerary: [
      {
        dayLabel: { mn: '1-р өдөр', en: 'Day 1' },
        title: { mn: 'Өлгий хот руу нисэх', en: 'Flight to Ulgii' },
        description: {
          mn: 'Өлгий хот руу 3.5 цаг нисэж, цаг зав гарвал орон нутгийн угсаатны музей үзнэ. Буудалд хононо.',
          en: '3.5-hour flight to Ulgii town; transfer by guide and drivers, optional ethnographic museum visit. Local hotel.',
        },
        meta: { mn: 'Өглөө, Өдөр, Оройн хоол', en: 'Meals: Breakfast, Lunch, Dinner' },
      },
      {
        dayLabel: { mn: '2-р өдөр', en: 'Day 2' },
        title: { mn: 'Баяннуур сум ба Өвөлжөө', en: 'Travel to Bayannuur soum' },
        description: {
          mn: 'Хүйтэн салхинаас хамгаалсан өвлийн сууцанд Казак бүргэдчин айлд зочилж байрлана.',
          en: 'Visit Kazakh eagle hunter families in their warm winter settlement houses.',
        },
        meta: { mn: 'Өглөө, Өдөр, Оройн хоол', en: 'Meals: Breakfast, Lunch, Dinner' },
      },
      {
        dayLabel: { mn: '3–6-р өдөр', en: 'Days 3–6' },
        title: { mn: 'Казак анчидтай Алтан бүргэдийн анд гарах', en: 'Golden Eagle hunting with Kazakhs' },
        description: {
          mn: 'Алтан бүргэд сургах урлагийг судалж, 2–3 өдөр мориор ойролцоох уулс руу анд гарна. Бүргэдчин айлд хононо.',
          en: 'Explore eagle training traditions and ride Mongolian horses into surrounding mountains with hunters. Stay with Kazakh family.',
        },
        meta: { mn: 'Өглөө, Өдөр, Оройн хоол', en: 'Meals: Breakfast, Lunch, Dinner' },
      },
      {
        dayLabel: { mn: '7-р өдөр', en: 'Day 7' },
        title: { mn: 'Өлгий хот руу буцаж соёлын дурсгал үзэх', en: 'Travel back to Ulgii town' },
        description: {
          mn: 'Өлгий хотод ирж лалын сүм, угсаатны музей, орон нутгийн захаар орно.',
          en: 'Visit Muslim mosque, ethnographic museum and local market; overnight in local hotel.',
        },
        meta: { mn: 'Өглөө, Өдөр, Оройн хоол', en: 'Meals: Breakfast, Lunch, Dinner' },
      },
      {
        dayLabel: { mn: '8-р өдөр', en: 'Day 8' },
        title: { mn: 'Улаанбаатар руу нисэх', en: 'Flight to Ulaanbaatar' },
        description: {
          mn: 'Улаанбаатар хот руу буцаж ниснэ.',
          en: 'Flight back to Ulaanbaatar.',
        },
      },
    ],
    included: {
      mn: ['Хөтөч, жолооч, бүргэдчин айлын байр болон бүрэн хоол (хүсэлтээр)'],
      en: ['Local guide, driver, Kazakh hunter family stay & full board meals (details on request)'],
    },
    notIncluded: {
      mn: ['Олон улсын ба дотоодын нислэг, хувийн өвлийн хувцас (хүсэлтээр)'],
      en: ['International & domestic flights, personal winter equipment (details on request)'],
    },
  },
  {
    number: 6,
    id: 'eagle-hunting-deluun-valley',
    slug: 'eagle-hunting-deluun-valley',
    webPage: 'https://www.explorealtai.com/tours/eagle-hunting-in-deluun-valley',
    oldPage: 'https://www.explorealtai.com/detailnews/11050019',
    category: 'eagle',
    categoryLabel: {
      mn: 'Бүргэдийн ан & Өвөл',
      en: 'Eagle Hunting & Winter',
    },
    title: {
      mn: 'Дэлүүний Хөндий дэх Бүргэдийн Ан',
      en: 'Eagle Hunting in Deluun valley',
    },
    subtitle: {
      mn: 'Улаанбаатарын соёл + Дэлүүний өвлийн бүргэдийн ан (10 хоног)',
      en: 'Ulaanbaatar cultural sights + winter hunting in Deluun valley',
    },
    region: {
      mn: 'Баян-Өлгий · Дэлүүн сум',
      en: 'Bayan-Ulgii · Deluun valley',
    },
    keyFacts: {
      days: 10,
      durationLabel: { mn: '10 хоног', en: '10 days' },
      priceUsd: null,
      priceLabel: { mn: 'Хүсэлтээр', en: 'On request' },
      season: { mn: 'Өвлийн сарууд (Хүсэлтээр)', en: 'On request (Winter)' },
      departures2027: { mn: 'Хүсэлтээр', en: 'On request' },
      groupSize: { mn: 'Хүсэлтээр', en: 'On request' },
      grade: { mn: 'Хүсэлтээр', en: 'On request' },
    },
    pace: 'balanced',
    coordinates: '47.8667° N, 90.6833° E',
    imageUrl: IMG_TERELJ,
    imageAlt: {
      mn: 'Дэлүүний уулын хөндийд бүргэдчинтэй хамт явах өглөөний жим',
      en: 'Mountain ridge and valley terrain in Deluun, western Mongolia',
    },
    summary: {
      mn: 'Өдөр бүр мориор уулын оргил руу гарч Алтан бүргэдээр ан хийх эртний зан үйлийг биечлэн мэдрэх 10 хоногийн аялал.',
      en: 'Riding out to the peak of the mountains each day, you will be introduced firsthand to the ancient custom of hunting with Golden Eagles.',
    },
    overview: {
      mn: [
        'Өвлийн улиралд Казак анчид өвөг дээдсийн уламжлалаар цасанд туулай, үнэгний мөрөөр мөшгөдөг. Тэд илүү хүчтэй, үнэнч эмэгчин бүргэдийг сургадаг бөгөөд 10 нас хүрмэгц нь байгальд нь буцаан тавьж төрөл зүйлийг хамгаалдаг.',
        'Улаанбаатарын Үндэсний түүхийн музей, Гандан хийд, Богд хааны ордон музей ба ардын урлагийн тоглолт багтсан.',
      ],
      en: [
        'Specially timed during the winter months, Kazakhs track small rabbits and foxes in the snow. Hunters prefer female eagles, up to one-third heavier than males, and release them back to the wild around age ten to preserve the species.',
        'Includes Ulaanbaatar’s National History Museum, Gandan Monastery, Bogd Khan Winter Palace Museum, folk performance, and full days hunting in Deluun valley.',
      ],
    },
    highlights: {
      mn: [
        'УБ-ын музей, Гандан хийд, Богд хааны ордон болон үндэсний тоглолт',
        'Дэлүүний хөндийн өвөлжөөнд Казак бүргэдчин айлд байрлах',
        'Өдөр бүр уулын оргил өөд мориор гарч бүргэдтэй анд явах',
        'Бүргэдийг 10 насанд нь байгальд эргүүлэн тавьдаг экологийн уламжлал',
      ],
      en: [
        'National History Museum, Gandan Monastery, Bogd Khan Palace & folk concert',
        'Stay inside Kazakh eagle hunter winter houses in Deluun valley',
        'Daily mountain horseback rides hunting with Golden Eagles',
        'Explore Ulgii Mosque, ethnographic museum & local market',
      ],
    },
    itinerary: [
      { dayLabel: { mn: '1-р өдөр', en: 'Day 1' }, title: { mn: 'Улаанбаатарт ирэх', en: 'Arrive in Ulaanbaatar' }, description: { mn: 'Үндэсний түүхийн музей, Гандан хийд үзэж буудалд хононо.', en: 'City sightseeing with National History Museum and Gandan monastery. Hotel.' } },
      { dayLabel: { mn: '2-р өдөр', en: 'Day 2' }, title: { mn: 'Өлгий хот руу нисэх', en: 'Flight to Ulgii' }, description: { mn: 'Өлгийд бууж угсаатны музей үзээд буудалд хононо.', en: '3.5-hour flight to Ulgii, visit ethnographic museum if time allows. Hotel.' }, meta: { mn: 'Өглөө, Өдөр, Оройн хоол', en: 'Meals: Breakfast, Lunch, Dinner' } },
      { dayLabel: { mn: '3-р өдөр', en: 'Day 3' }, title: { mn: 'Дэлүүний хөндий ба Өвөлжөө', en: 'Travel to Deluun valley' }, description: { mn: 'Дэлүүн суманд ирж Казак бүргэдчин айлын өвлийн сууцанд байрлана.', en: 'Visit Kazakh eagle hunter family in Deluun winter settlement.' }, meta: { mn: 'Өглөө, Өдөр, Оройн хоол', en: 'Meals: Breakfast, Lunch, Dinner' } },
      { dayLabel: { mn: '4–7-р өдөр', en: 'Days 4–7' }, title: { mn: 'Казак анчидтай бүргэдийн ан хийх', en: 'Golden Eagle hunting with Kazakhs' }, description: { mn: 'Бүргэд сургалтыг үзэж 2–3 өдөр морьтойгоор уулс руу анд гарна.', en: 'Learn Golden Eagle training and ride Mongolian horses in surrounding mountains.' }, meta: { mn: 'Өглөө, Өдөр, Оройн хоол', en: 'Meals: Breakfast, Lunch, Dinner' } },
      { dayLabel: { mn: '8-р өдөр', en: 'Day 8' }, title: { mn: 'Өлгий хотын соёлын дурсгал', en: 'Travel back to Ulgii town' }, description: { mn: 'Лалын сүм, угсаатны музей, орон нутгийн зах үзнэ.', en: 'Visit Muslim mosque, ethnographic museum and local market. Hotel.' }, meta: { mn: 'Өглөө, Өдөр, Оройн хоол', en: 'Meals: Breakfast, Lunch, Dinner' } },
      { dayLabel: { mn: '9-р өдөр', en: 'Day 9' }, title: { mn: 'Улаанбаатар руу нисэх ба тоглолт', en: 'Flight back to Ulaanbaatar' }, description: { mn: 'Богд хааны өвлийн ордон музей болон оройн үндэсний урлагийн тоглолт үзнэ.', en: 'Visit Bogd Khan Winter Palace Museum and evening National folk & dance performance.' } },
      { dayLabel: { mn: '10-р өдөр', en: 'Day 10' }, title: { mn: 'Нисэх буудал хүргэх', en: 'Transfer to the Airport' }, description: { mn: 'Улаанбаатараас буцна.', en: 'Depart from Ulaanbaatar.' } },
    ],
    included: {
      mn: [
        'Байр: Зочид буудал, Казак айлын гэр/сууц',
        'Хөтөч болон орчуулгын үйлчилгээ, орон нутгийн хөтөч',
        'Бүрэн хоол',
        '4x4 эсвэл микроавтобус тээвэр',
        'Тусгай хамгаалалттай газар, музей, соёлын тоглолт',
        'Унах морьд',
      ],
      en: [
        'Accommodation: Hotel, Kazakh family stay',
        'Guiding and interpreting service & local guide',
        'Full board meals',
        'Transport: vehicle 4x4 or minivan',
        'Entrance fees to protected areas, museums & cultural performance',
        'Horses',
      ],
    },
    notIncluded: {
      mn: [
        'Олон улсын ба Дотоодын нислэг',
        'Хувийн хэрэгсэл, нэмэлт үйлчилгээ',
        'Илүү тээш, ганцаарчилсан өрөөний төлбөр',
        'Согтууруулах ундаа, унтлагын хүүдий, даатгал',
      ],
      en: [
        'International airfare & Domestic airfare',
        'Personal equipments & Optional activity cost',
        'Excess baggage charges & Single room supplement',
        'Alcoholic drinks, Sleeping bag & Travel Insurance',
      ],
    },
  },
  {
    number: 7,
    id: 'golden-eagle-festival-horseback',
    slug: 'golden-eagle-festival-with-eagle-hunters-on-horseback',
    webPage: 'https://www.explorealtai.com/tours/golden-eagle-festival-with-eagle-hunters-on-horseback',
    oldPage: 'https://www.explorealtai.com/detailnews/150100001',
    category: 'eagle',
    categoryLabel: {
      mn: 'Бүргэдийн ан & Өвөл',
      en: 'Eagle Hunting & Winter',
    },
    title: {
      mn: 'Алтан Бүргэдийн Баяр ба Морин Аялал',
      en: 'Golden Eagle Festival with Eagle Hunters on Horseback',
    },
    subtitle: {
      mn: 'Бүргэдчидтэй хамт мориор ан хийж баярын талбайд хүрэх 7 хоног',
      en: 'Ride alongside eagle hunters to the Golden Eagle Festival',
    },
    region: {
      mn: 'Баян-Өлгий аймаг',
      en: 'Bayan-Ulgii Province',
    },
    keyFacts: {
      days: 7,
      durationLabel: { mn: '7 хоног', en: '7 days' },
      priceUsd: null,
      priceLabel: { mn: 'Хүсэлтээр', en: 'On request' },
      season: { mn: 'Хүсэлтээр (Намар/Баяр)', en: 'On request' },
      departures2027: { mn: 'Хүсэлтээр', en: 'On request' },
      groupSize: { mn: 'Хүсэлтээр', en: 'On request' },
      grade: { mn: 'Хүсэлтээр', en: 'On request' },
    },
    pace: 'active',
    coordinates: '48.9683° N, 89.9625° E',
    imageUrl: IMG_ORKHON,
    imageAlt: {
      mn: 'Баян-Өлгийн Алтан бүргэдийн баяр ба морьтой бүргэдчид',
      en: 'Kazakh eagle hunters on horseback at the Golden Eagle Festival',
    },
    summary: {
      mn: 'Баян-Өлгий даяар Казак бүргэдчидтэй хамт морь унан ан хийж, анчны гэрт хоноглоод Алтан Бүргэдийн Баярыг үзнэ.',
      en: 'Ride with Kazakh eagle hunters and their golden eagles across Bayan-Ölgii, stay with a hunter’s family and watch the Golden Eagle Festival.',
    },
    overview: {
      mn: [
        'Алаг эрээн хивс, өргөн тохижилттой Казак гэрт байрлаж, хүндэт зочдод зориулсан бешбармак зооглоно.',
        'Баярын өмнөх өдрүүдэд бүргэдчидтэй хамт өдөр бүр мориор явж үнэг, туулай, мануул агнах ан ажиглаад 2 өдрийн Алтан Бүргэдийн Баяр, хадны оргилоос бүргэд дуудах, Көкбар (тулам булаалдах) наадмыг үзнэ.',
      ],
      en: [
        'Stay inside brightly carpeted Kazakh gers, taste traditional Beshbarmak prepared for honored guests, and ride horseback daily alongside eagle hunters on their way to the festival grounds.',
        'Witness the two-day Golden Eagle Festival: opening horse parade, traditional outfit & equipment judging, eagle speed & agility cliff tests, Kazakh concert, and the thrilling Kokbar (Kekbar) horseback game.',
      ],
    },
    highlights: {
      mn: [
        'Казак анчны өргөө гэрт хоноглож бешбармак амтлах',
        'Баяр руу хүрэх замд бүргэдчидтэй хамт өдөр бүр мориор ан хийх',
        'Алтан Бүргэдийн Баярын нээлт, хувцас хэрэглэл, бүргэдийн хурд шалгаруулалт',
        'Хадны оргилоос шүүр авах тэмцээн ба Көкбар морин наадам',
      ],
      en: [
        'Kazakh ger hospitality and authentic Beshbarmak dinner',
        'Daily horseback hunting alongside Kazakh eagle hunters en route',
        'Full 2-day Golden Eagle Festival parade, gear judging & Kazakh concert',
        'Cliff-dive fox-skin eagle tests & traditional Kokbar horseback competition',
      ],
    },
    itinerary: [
      {
        dayLabel: { mn: '1-р өдөр', en: 'Day 1' },
        title: { mn: 'Өлгий хот ба Казак айл', en: 'To Ulgii & Kazakh family settlement' },
        description: {
          mn: 'Өлгийд нисэн ирж музей үзээд хөдөө Казак айлд очин тод өнгийн хивс ширдэгтэй том гэрт хононо.',
          en: 'Fly to Ulgii, visit local museum, move to countryside to stay with a Kazakh family in their colorful ger.',
        },
        meta: { mn: 'Өдөр, Оройн хоол', en: 'Meals: Lunch, Dinner' },
      },
      {
        dayLabel: { mn: '2-р өдөр', en: 'Day 2' },
        title: { mn: 'Морин аялал ба Бешбармак', en: 'Horse riding & Beshbarmak dinner' },
        description: {
          mn: 'Анчны айлын орчим хэдэн цаг морь унаж, орой нь хүндэт зочны бешбармак зооглоно.',
          en: 'Ride horses around the hunter’s camp preparing for the festival; evening Beshbarmak feast.',
        },
        meta: { mn: 'Өглөө, Өдөр, Оройн хоол', en: 'Meals: Breakfast, Lunch, Dinner' },
      },
      {
        dayLabel: { mn: '3–4-р өдөр', en: 'Days 3–4' },
        title: { mn: 'Бүргэдийн баяр луу мориор андах', en: 'Ride & hunt toward Eagle Festival' },
        description: {
          mn: 'Бүргэдчидтэй өдөр бүр мориор ан хийж баярын газар руу аялж өөр айлуудад хоноглоно.',
          en: 'Ride and hunt daily (mostly fox) with Kazakh eagle hunters en route to festival grounds.',
        },
        meta: { mn: 'Өглөө, Өдөр, Оройн хоол', en: 'Meals: Breakfast, Lunch, Dinner' },
      },
      {
        dayLabel: { mn: '5-р өдөр', en: 'Day 5' },
        title: { mn: 'Алтан Бүргэдийн Баяр (1-р өдөр)', en: 'Golden Eagle Festival — Day 1' },
        description: {
          mn: 'Нээлтийн парад, хувцас тоноглолын шалгаруулалт, бүргэдийн хурд шалгалт, оройн Казак концерт.',
          en: 'Opening parade, hunting outfit judging, eagle speed & agility evaluation, evening Kazakh concert.',
        },
        meta: { mn: 'Өглөө, Өдөр, Оройн хоол', en: 'Meals: Breakfast, Lunch, Dinner' },
      },
      {
        dayLabel: { mn: '6-р өдөр', en: 'Day 6' },
        title: { mn: 'Алтан Бүргэдийн Баяр (2-р өдөр)', en: 'Golden Eagle Festival — Day 2' },
        description: {
          mn: 'Хаднаас бүргэд буулган шүүр авах, морьтон эрсийн Көкбар наадам болон шагнал гардуулах ёслол.',
          en: 'Cliff-released eagle tests, traditional Kekbar horseback game, and awards ceremony.',
        },
        meta: { mn: 'Өглөө, Өдөр, Оройн хоол', en: 'Meals: Breakfast, Lunch, Dinner' },
      },
      {
        dayLabel: { mn: '7-р өдөр', en: 'Day 7' },
        title: { mn: 'Улаанбаатар руу нисэх', en: 'Flight back to Ulaanbaatar' },
        description: {
          mn: 'Нисэх буудалд хүргэн Улаанбаатар руу 3 цаг орчим ниснэ.',
          en: 'Transfer to airport and fly approx. 3 hours back to Ulaanbaatar.',
        },
      },
    ],
    included: {
      mn: ['Хөтөч, морь, Казак айлын байр, баярын тасалбар, хоол (дэлгэрэнгүй хүсэлтээр)'],
      en: ['Guide, horses, Kazakh family & hotel/ger camp stays, festival entry, meals (details on request)'],
    },
    notIncluded: {
      mn: ['Нислэг, даатгал, хувийн хэрэглээ (дэлгэрэнгүй хүсэлтээр)'],
      en: ['Airfares, travel insurance, personal items (details on request)'],
    },
  },
];
