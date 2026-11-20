import type { Expedition } from '../types/travel';

const IMG_ALTAI = '/src/assets/images/hero_mongolia_expedition_1795175547348.jpg';
const IMG_GOBI = '/src/assets/images/dest_gobi_khongor_1795175546870.jpg';
const IMG_KHUVSGUL = '/src/assets/images/dest_khuvsgul_taiga_1795175547240.jpg';
const IMG_ORKHON = '/src/assets/images/dest_orkhon_steppe_1795175546419.jpg';
const IMG_KHYARGAS = '/src/assets/images/dest_khyargas_lake_1795175546830.jpg';
const IMG_TERELJ = '/src/assets/images/dest_terelj_khentii_1795175547433.jpg';

export const TOURS_PART_3: Expedition[] = [
  {
    number: 16,
    id: 'mongolian-culture-and-traditions',
    slug: 'mongolian-culture-and-traditions',
    webPage: 'https://www.explorealtai.com/tours/mongolian-culture-and-traditions',
    oldPage: 'https://www.explorealtai.com/detailnews/11100012',
    category: 'culture',
    categoryLabel: {
      mn: 'Соёлын аялал',
      en: 'Cultural Tours',
    },
    title: {
      mn: 'Монголын Соёл ба Өв Уламжлал',
      en: 'Mongolian Culture and Traditions',
    },
    subtitle: {
      mn: 'Казак бүргэдчид, Тува хөөмийчид, Урианхай малчид ба Нүүдэлчин ахуй',
      en: 'Kazakh Eagle Hunters, Tuvan Throat Singers & Uriankhai Herders',
    },
    region: {
      mn: 'Баруун Монгол · Олон угсаатны өлгий',
      en: 'Western Mongolia · Multi-Ethnic Highlands',
    },
    keyFacts: {
      days: null,
      durationLabel: { mn: 'Хүсэлтээр', en: 'On request' },
      priceUsd: null,
      priceLabel: { mn: 'Хүсэлтээр', en: 'On request' },
      season: { mn: 'Хүсэлтээр', en: 'On request' },
      departures2027: { mn: 'Хүсэлтээр', en: 'On request' },
      groupSize: { mn: 'Хүсэлтээр', en: 'On request' },
      grade: { mn: 'Хүсэлтээр', en: 'On request' },
    },
    pace: 'relaxed',
    imageUrl: IMG_ORKHON,
    imageAlt: {
      mn: 'Нүүдэлчин айлын гэр бааз ба соёлын өв уламжлал',
      en: 'Traditional ger camp and living nomadic traditions in Mongolia',
    },
    featured: true,
    summary: {
      mn: 'Баруун Монголын Казак бүргэдчид, Тува хөөмийчид, Урианхай малчидтай уулзаж нүүдэлчин айлын өдөр тутмын амьдралыг хамтдаа хуваалцаарай.',
      en: 'Meet the Kazakh eagle hunters, Tuvan throat singers and Uriankhai herders of western Mongolia, and share daily life with nomadic families.',
    },
    overview: {
      mn: [
        'Алтайн Казакийн бахархал — Бүргэдийн ан: Алтан бүргэдийн наадам, халуун цай, цагаан идээ, тод өнгийн үндэсний хувцас, домбор хөгжим ба домог түүх.',
        'Тува соёл — Талын аялгуу: Салхи, гол, уулсын дууг илэрхийлэх амьд хөөмий, бөө мөргөлийн уламжлал ба гар урлал.',
        'Урианхай соёл — Уулсын сахиусууд: Морин эрдэм, мал маллагаа, ан ав ба гэр бүлийн дотно уламжлал; мөн улирал даган нүүдэллэдэг Монгол гэрт хоноглож ил галын хоол, сааль сүүний ажилд оролцоно.',
      ],
      en: [
        'Altai Kazakh Culture: Experience Golden Eagle Hunting, warm hospitality with dairy delicacies, colorful dress, music, and legend-filled storytelling.',
        'Tuvan Culture: Hear live Tuvan throat singing (Khoomei) echoing wind, river, and mountain; explore shamanic traditions and local handicrafts.',
        'Uriankhai Culture & Living Nomadic Traditions: Learn horsemanship and herding techniques from mountain guardians, sleep in traditional gers, share fire-cooked meals, and join daily milking and cuisine preparation.',
      ],
    },
    highlights: {
      mn: [
        'Казак соёл: Алтан бүргэдийн баяр, цай, цагаан идээ, хөгжим бүжиг',
        'Тува соёл: Амьд хөөмий, бөөгийн уламжлал ба гар урлал',
        'Урианхай соёл: Морин уналга, мал маллагаа ба гэрийн зочломтгой байдал',
        'Амьд нүүдэлчин ахуй: Уламжлалт гэрт хоноглох, ил галд хоол хийх, сааль саах',
      ],
      en: [
        'Altai Kazakh Eagle Hunters: Golden Eagle Festival, hospitality, music & stories',
        'Tuvan Throat Singing (Khoomei): Live performances, shamanic heritage & crafts',
        'Uriankhai Mountain Guardians: Traditional horsemanship, herding & family meals',
        'Living Nomadic Traditions: Sleep in traditional gers & join daily pastoral life',
      ],
    },
    itineraryNote: {
      mn: 'Танай багийн сонирхол (бүргэдийн баяр, хөөмий, малчин айл)-д тохируулан өдрийн хуваарийг тусгайлан бэлдэнэ.',
      en: 'No day-by-day itinerary on the old website (available on request).',
    },
    itinerary: [],
    included: {
      mn: ['Эдгээр уламжлалаас төрсөн орон нутгийн хөтөч, гэр бааз ба айлын байр, унаа, хоол (хүсэлтээр)'],
      en: ['Experienced local guides from these traditions, ger stays, transport & meals (on request)'],
    },
    notIncluded: {
      mn: ['Олон улсын ба дотоодын нислэг, даатгал, хувийн зардал (хүсэлтээр)'],
      en: ['International & domestic flights, insurance & personal items (on request)'],
    },
  },
  {
    number: 17,
    id: 'discovery-far-west-mongolia',
    slug: 'discovery-to-the-far-west-mongolia',
    webPage: 'https://www.explorealtai.com/tours/discovery-to-the-far-west-mongolia',
    oldPage: 'https://www.explorealtai.com/detailnews/11100002',
    category: 'discovery',
    categoryLabel: {
      mn: 'Танин мэдэхүй',
      en: 'Discovery Tours',
    },
    title: {
      mn: 'Алс Баруун Монголын Жийп Экспедиц',
      en: 'Discovery to the far west Mongolia',
    },
    subtitle: {
      mn: 'УБ–Хархорин–Өгий–Тэрхийн Цагаан–Цэнхэрийн агуй–Цамбагарав–Өлгий (16 хоног)',
      en: '16-day Overland 4x4 Journey from Ulaanbaatar to Bayan-Ulgii',
    },
    region: {
      mn: 'Архангай · Завхан · Ховд · Баян-Өлгий',
      en: 'Central to Far West Mongolia',
    },
    keyFacts: {
      days: 16,
      durationLabel: { mn: '16 хоног', en: '16 days' },
      priceUsd: null,
      priceLabel: { mn: 'Хүсэлтээр', en: 'On request' },
      season: { mn: 'Хүсэлтээр', en: 'On request' },
      departures2027: { mn: 'Хүсэлтээр', en: 'On request' },
      groupSize: { mn: 'Хүсэлтээр', en: 'On request' },
      grade: { mn: 'Жийп аялал', en: 'Overland 4x4 Discovery' },
    },
    pace: 'balanced',
    imageUrl: IMG_GOBI,
    imageAlt: {
      mn: 'Баруун Монголын элсэн манхан, Эрээн нуур болон уулын хөндий',
      en: 'Sand hills, lakes and mountain passes on the overland route to far west Mongolia',
    },
    summary: {
      mn: 'Хязгаарлагдмал хугацаатай аялагчдад зориулан 16 хоногт багтаасан Хархорин–Тэрхийн Цагаан–Завхан–Ховд–Өлгий чиглэлийн төгс жийп аялал.',
      en: 'Perfect jeep overland discovery tour circling central to far west Mongolia and finishing in Olgii town in 16 days.',
    },
    overview: {
      mn: [
        '«Алс баруун хязгаарыг туулах» маршрутын Өлгий хотоор өндөрлөж нисэж буцдаг 16 хоногийн оновчтой хувилбар.',
        'Хархорин, Эрдэнэ Зуу, Өгий нуур, Цэцэрлэг, Хорго-Тэрхийн Цагаан нуур БЦГ, Солонгот/Загастайн даваа, Эрээн нуур, Дөргөн нуур, Жаргалант-Бумбат Хайрхан, Цэнхэрийн чулуун зэвсгийн агуй, Хар-Ус нуур, Цамбагарав (4,193 м), Казак бүргэдчин айл ба Толбо нуурыг хамарна.',
      ],
      en: [
        'A 16-day overland 4x4 route ending in Olgii town with a return flight to Ulaanbaatar — ideal for time-limited adventurers.',
        'Covers Kharkhorin & Erdene Zuu, Ogii Lake, Tsetserleg, Khorgo-Terkhiin Tsagaan Lake, Solongot & Zagastai passes, Ereen Lake sand hills, Dorgon Lake, Tsenkher Cave Stone Age paintings, Khar-Us Lake, Tsambagarav (4,193 m), Kazakh eagle hunters & Tolbo Lake.',
      ],
    },
    highlights: {
      mn: [
        'Хархорин (1235), Эрдэнэ Зуу хийдийн 108 суварга ба Өгий нуур',
        '«Монгол Швейцар» Архангай ба Хорго-Тэрхийн Цагаан нуур (73,000 га)',
        'Эрээн нуурын элсэн толгод, Цэнхэрийн агуйн сүг зураг ба Хар-Ус нуур',
        'Цамбагарав уул (4,193 м), Казак бүргэдчин айл ба Толбо нуур',
      ],
      en: [
        'Kharkhorin, Erdene Zuu’s 108 stupas & leisure day at Ogii Lake',
        'Arkhangai ("Mongolian Switzerland") & 73,000-hectare Khorgo–Terkhiin Tsagaan Park',
        'Ereen Lake dunes, Tsenkher Stone Age cave paintings & Khar-Us Lake birdlife',
        'Tsambagarav (4,193 m), Kazakh eagle-hunting family & Tolbo Lake',
      ],
    },
    itinerary: [
      { dayLabel: { mn: '1-р өдөр', en: 'Day 1' }, title: { mn: 'Улаанбаатарт ирэх', en: 'Arriving in Ulaanbaatar' }, description: { mn: 'Үндэсний түүхийн музей, Гандан хийд, угталтын зоог. Буудал.', en: 'National History Museum, Gandan monastery, welcome dinner & briefing. Hotel.' } },
      { dayLabel: { mn: '2-р өдөр', en: 'Day 2' }, title: { mn: 'Хархорин ба Эрдэнэ Зуу хийд', en: 'Drive to Kharkhorin & Erdene Zuu' }, description: { mn: '1235 оны нийслэл ба 1586 онд байгуулагдсан Эрдэнэ Зуугийн 108 суварга. Жуулчны бааз.', en: 'Drive to legendary Orkhon valley; visit Erdene Zuu monastery and 108 stupas. Camp.' } },
      { dayLabel: { mn: '3-р өдөр', en: 'Day 3' }, title: { mn: 'Үзэсгэлэнт Өгий нуур', en: 'Charming Lake Ogii' }, description: { mn: 'Нуурын эргээр алхах, морь унах, завьтай аялах, үндэсний хувцастай зураг авах чөлөөт өдөр.', en: 'Leisure day: lakeshore walks, horseback riding, boating & traditional Mongolian costumes.' } },
      { dayLabel: { mn: '4-р өдөр', en: 'Day 4' }, title: { mn: 'Баруун зүг — Цэцэрлэг, Архангай', en: 'Head West via Tsetserleg' }, description: { mn: 'Орон нутгийн музей, сарлаг бэлчээрлэх Хангайн уулс, Гурвын даваа. Майхан.', en: 'Stop at Tsetserleg museum, see domestic yaks & cross Gurviin davaa pass. Tented camp.' } },
      { dayLabel: { mn: '5–6-р өдөр', en: 'Days 5–6' }, title: { mn: 'Тэрхийн Цагаан нуур', en: 'Terkhiin Tsagaan Lake' }, description: { mn: 'Хорго-Тэрхийн Цагаан нуур БЦГ-т загасчлах, сэлэх, алхах. Майхан.', en: 'Explore 73,000-hectare volcanic Khorgo-Terkhiin Tsagaan National Park. Tent.' } },
      { dayLabel: { mn: '7–8-р өдөр', en: 'Days 7–8' }, title: { mn: 'Солонгот, Загастайн даваа ба Улиастай', en: 'Khangai passes & Uliastai town' }, description: { mn: 'Хангайн нурууны өндөр даваануудыг давж Завханы Улиастай хотод түр саатана.', en: 'Cross Solongot and Zagastai mountain passes with supply stop in Uliastai.' } },
      { dayLabel: { mn: '9-р өдөр', en: 'Day 9' }, title: { mn: 'Эрээн нуур ба Элсэн манхан', en: 'Arrive at Ereen Nuur Lake' }, description: { mn: 'Элсэн толгодоор хүрээлэгдсэн Эрээн нуурын эрэгт хөнгөн алхалт хийнэ.', en: 'Walks and treks among lovely sand hills surrounding Ereen Nuur. Tented camp.' } },
      { dayLabel: { mn: '10–11-р өдөр', en: 'Days 10–11' }, title: { mn: 'Дөргөн нуур, Цэнхэрийн агуй, Хар-Ус нуур', en: 'Dorgon Lake, Tsenkher Cave & Khar-Us Lake' }, description: { mn: 'Жаргалант (3,796 м) ба Бумбат (3,464 м) хайрхны хөндий, Чулуун зэвсгийн агуйн зураг, Хар-Ус нуур.', en: 'Pass Dorgon lake between Jargalant & Bumbat Khairkhan, see Tsenkher Stone Age cave art & Khar-Us birdlife.' } },
      { dayLabel: { mn: '12–13-р өдөр', en: 'Days 12–13' }, title: { mn: 'Цамбагарав уул ба Бүргэдчин айл', en: 'Tsambagarav & Eagle-hunting family' }, description: { mn: '4,193 м өндөр Цамбагарав орчим алхалт, уулын авиралт хийж Казак бүргэдчин айлд зочилно.', en: 'Trek near Tsambagarav (4,193 m) and visit a Kazakh eagle-hunting family.' } },
      { dayLabel: { mn: '14-р өдөр', en: 'Day 14' }, title: { mn: 'Толбо нуур ба Өлгий хот', en: 'Tolbo Lake & Olgii town' }, description: { mn: 'Толбо нуураар дайран Өлгий хотод буудалд хононо.', en: 'Pass Tolbo lake and arrive at Olgii town. Overnight in local hotel.' } },
      { dayLabel: { mn: '15-р өдөр', en: 'Day 15' }, title: { mn: 'Улаанбаатар руу нисэх', en: 'Flight back to Ulaanbaatar' }, description: { mn: 'Худалдаа, чөлөөт цаг, оройн ардын урлагийн тоглолт.', en: 'Fly to UB; free time, shopping & evening traditional folk performance. Hotel.' } },
      { dayLabel: { mn: '16-р өдөр', en: 'Day 16' }, title: { mn: 'Нисэх буудал хүргэх', en: 'Transfer to Airport' }, description: { mn: 'Улаанбаатараас буцна.', en: 'Depart from Ulaanbaatar.' } },
    ],
    included: {
      mn: ['Зочид буудал, гэр бааз, майхан, хөтөч орчуулга, бүрэн хоол, дотоодын нислэг, 4x4 тээвэр, БЦГ/музейн хураамж, кемпийн хэрэгсэл'],
      en: ['Hotel/ger/tented camp, guiding & interpreting, full board meals, domestic flight, 4x4/minivan, park/museum fees & camping gear'],
    },
    notIncluded: {
      mn: ['Олон улсын нислэг, хувийн хэрэгсэл, нэмэлт үйлчилгээ, илүү тээш, ганцаарчилсан өрөө, ундаа, унтлагын хүүдий, даатгал'],
      en: ['International airfare, personal equipments, optional costs, excess baggage, single room supplement, alcohol, sleeping bag & travel insurance'],
    },
  },
  {
    number: 18,
    id: 'land-of-chinggis',
    slug: 'land-of-chinggis',
    webPage: 'https://www.explorealtai.com/tours/land-of-chinggis',
    oldPage: 'https://www.explorealtai.com/detailnews/11100001',
    category: 'discovery',
    categoryLabel: {
      mn: 'Танин мэдэхүй',
      en: 'Discovery Tours',
    },
    title: {
      mn: 'Чингис Хааны Өлгий Нутаг',
      en: 'Land of Chinggis',
    },
    subtitle: {
      mn: 'Хан Хэнтий, Бурхан Халдун, Хөх нуур, Өглөгчийн хэрэм ба Тэрэлж (10 хоног)',
      en: 'Khan Khentii, Burkhan Khaldun, Khoh Nuur & Terelj (10 days)',
    },
    region: {
      mn: 'Хэнтий аймаг · Горхи-Тэрэлж БЦГ',
      en: 'Khentii Province · Khan Khentii & Terelj',
    },
    keyFacts: {
      days: 10,
      durationLabel: { mn: '10 хоног', en: '10 days' },
      priceUsd: null,
      priceLabel: { mn: 'Хүсэлтээр', en: 'On request' },
      season: { mn: 'Хүсэлтээр', en: 'On request' },
      departures2027: { mn: 'Хүсэлтээр', en: 'On request' },
      groupSize: { mn: 'Хүсэлтээр', en: 'On request' },
      grade: { mn: 'Жийп, морь ба алхалт', en: 'Jeep, horseback & hiking' },
    },
    pace: 'balanced',
    imageUrl: IMG_TERELJ,
    imageAlt: {
      mn: 'Хан Хэнтийн нуруу болон Горхи-Тэрэлжийн намрын алтан ой',
      en: 'Golden autumn larch forests in Khan Khentii and Terelj National Park',
    },
    summary: {
      mn: 'Их Эзэн Чингис хааны төрөлх нутаг Хэнтийн аймгийн түүхэн дурсгалууд болон Хан Хэнтийн дархан цаазат газраар аялах мартагдашгүй 10 хоног.',
      en: 'An unforgettable journey to Chinggis Khan’s native land in Khentii province and the wilderness of Khan Khentii Mountains.',
    },
    overview: {
      mn: [
        'Онон, Хэрлэн мөрний эх 1.2 сая га талбайтай Хан Хэнтийн дархан цаазат газарт зөвхөн явган болон мориор хүрэх зэрлэг онгон байгаль, Бурхан Халдун хайрхан, 13-р зуунд Тэмүүжинд Чингис хаан цол өргөмжилсөн Хөх нуур, Балдан Бэрээвэн хийд, Өглөгчийн хэрмийг үзнэ.',
        'Овоо тахих ёслол үйлдэж, Тэрэлжийн гэр баазад морь унаж, халуун чулуугаар болгосон уламжлалт Хорхог зооглоно.',
      ],
      en: [
        'Explore the 1.2-million-hectare Khan Khentii National Park at the southern edge of Siberia’s taiga, home to Burkhan Khaldun Mountain, Khoh Nuur (where Temujin received the title Chinggis Khan), Baldanbereeven Monastery, and Oglogchiin Wall.',
        'Experience traditional Ovoo hilltop worship ceremonies, horseback rides in Terelj National Park, and classic stone-cooked mutton Khorkhog.',
      ],
    },
    highlights: {
      mn: [
        'Бурхан Халдун уулын бэл ба уламжлалт Овоо тахих ёслол',
        'Тэмүүжинийг Чингис хаанд өргөмжилсөн түүхт Хөх нуур',
        'XIII зууны язгууртны дурсгалт газар, Балдан Бэрээвэн хийд, Өглөгчийн хэрэм',
        'Тэрэлж БЦГ-т морин аялал болон уламжлалт Хорхог зоог',
      ],
      en: [
        'Foothills of sacred Burkhan Khaldun & traditional Ovoo ceremony',
        'Khoh Nuur lake where Temujin was crowned Chinggis Khan',
        'Baldanbereeven Monastery, Oglogchiin Wall & XIII-century royal archaeological sites',
        'Terelj National Park horseback riding & stone-cooked Khorkhog feast',
      ],
    },
    itinerary: [
      { dayLabel: { mn: '1-р өдөр', en: 'Day 1' }, title: { mn: 'Улаанбаатарт ирэх', en: 'Arriving in Ulaanbaatar' }, description: { mn: 'Гандан хийд, Богд хааны ордон музей. Зочид буудал.', en: 'Gandan Monastery and Bogd Khan Palace Museum city tour. Hotel.' } },
      { dayLabel: { mn: '2-р өдөр', en: 'Day 2' }, title: { mn: 'Багануур ба Мөнгөнморьт (200 км)', en: 'Driving to Baganuur & Mongonmort' }, description: { mn: '8 цаг давхиж Хан Хэнтий БЦГ-ын төв Мөнгөнморьт суманд байгаль хамгаалагчидтай уулзана.', en: '200 km drive into Khentii range to Mongonmort; meet Khan Khentii National Park rangers.' } },
      { dayLabel: { mn: '3-р өдөр', en: 'Day 3' }, title: { mn: 'Бурхан Халдуны бэл ба Овоо (60 км)', en: 'Foothills of Burkhan Khaldun & Ovoo' }, description: { mn: 'Хайрханы бэлд отоглож Овоог нар зөв 3 тойрох уламжлалт ёслол хийнэ.', en: 'Camp near Burkhan Khaldun and perform respectful clockwise Ovoo ceremony.' } },
      { dayLabel: { mn: '4-р өдөр', en: 'Day 4' }, title: { mn: 'Хөх нуур руу явах', en: 'Driving to Khoh Nuur' }, description: { mn: 'XIII зуунд Тэмүүжинд Чингис хаан цол олгосон ойт уулсын дундах нуурт хоноглоно.', en: 'Stay near forested Khoh Nuur, site of Temujin’s 13th-century coronation as Chinggis Khan.' } },
      { dayLabel: { mn: '5-р өдөр', en: 'Day 5' }, title: { mn: 'Их хаадын онгон нутаг ба Балдан Бэрээвэн', en: 'Ancient royal site & Baldanbereeven Monastery' }, description: { mn: '2001–2002 онд Монгол-Америкийн баг судалгаа хийсэн түүхэн бүс болон хийд үзнэ.', en: 'Visit Baldanbereeven Monastery en route to the 2001–2002 joint archaeological site.' } },
      { dayLabel: { mn: '6-р өдөр', en: 'Day 6' }, title: { mn: 'Өглөгчийн хэрэм ба амралт', en: 'Explore the area & Oglogchiin Wall' }, description: { mn: 'Ойр орчмыг судалж эртний Өглөгчийн хэрмийг үзнэ.', en: 'Rest and exploration day visiting Oglogchiin Wall. Tent stay.' } },
      { dayLabel: { mn: '7-р өдөр', en: 'Day 7' }, title: { mn: 'Хэрлэн гол ба Тэрэлж БЦГ', en: 'Driving to Terelj National Park' }, description: { mn: 'Хэрлэн голын эрэг дээр майханд хоноглоно.', en: 'Drive toward Terelj and camp overnight on Kherlen River shores.' } },
      { dayLabel: { mn: '8-р өдөр', en: 'Day 8' }, title: { mn: 'Тэрэлжийн гэр бааз ба Хорхог', en: 'Ger camp at Terelj & Khorkhog' }, description: { mn: 'Хөтчийн хамт морь унаж, үдээс хойш халуун чулуун Хорхог зооглоно.', en: 'Guided horseback riding near herder families and traditional Khorkhog dinner.' } },
      { dayLabel: { mn: '9-р өдөр', en: 'Day 9' }, title: { mn: 'Улаанбаатарт буцах', en: 'Driving back to Ulaanbaatar' }, description: { mn: 'Бэлэг дурсгал худалдаалж оройн соёлын тоглолт үзнэ.', en: 'Return to UB; shopping and evening cultural performance. Hotel.' } },
      { dayLabel: { mn: '10-р өдөр', en: 'Day 10' }, title: { mn: 'Нисэх буудал хүргэх', en: 'Transfer to Airport' }, description: { mn: 'Улаанбаатараас буцна.', en: 'Depart from Ulaanbaatar.' } },
    ],
    included: {
      mn: ['Зочид буудал, гэр бааз, майхан, хөтөч орчуулга, бүрэн хоол, 4x4 тээвэр, БЦГ/музейн хураамж, кемпийн хэрэгсэл'],
      en: ['Hotel, ger camp & tented camp, guiding & interpreting, full board meals, 4x4/minivan, National Park & museum fees, camping equipment'],
    },
    notIncluded: {
      mn: ['Олон улсын нислэг, хувийн хэрэгсэл, нэмэлт үйлчилгээ, илүү тээш, ганцаарчилсан өрөө, ундаа, унтлагын хүүдий, даатгал'],
      en: ['International airfare, personal equipments, optional activities, excess baggage, single supplement, alcohol, sleeping bag & travel insurance'],
    },
  },
  {
    number: 19,
    id: 'natural-cultural-delights-north-west',
    slug: 'natural-and-cultural-delights-in-north-west',
    webPage: 'https://www.explorealtai.com/tours/natural-and-cultural-delights-in-north-west',
    oldPage: 'https://www.explorealtai.com/detailnews/11100003',
    category: 'discovery',
    categoryLabel: {
      mn: 'Танин мэдэхүй',
      en: 'Discovery Tours',
    },
    title: {
      mn: 'Баруун Хойд Монголын Байгаль ба Соёлын Гайхамшиг',
      en: 'Natural & Cultural delights in North-West',
    },
    subtitle: {
      mn: 'Отгонтэнгэр, Хар нуур, Хяргас, Хархираа-Түргэн, Үүрэг ба Алтай Таван Богд (15 хоног)',
      en: 'Otgontenger, Khar Lake, Khyargas, Kharkhiraa, Uureg & Tavan Bogd (15 days)',
    },
    region: {
      mn: 'Завхан · Увс · Баян-Өлгий',
      en: 'Zavkhan · Uvs · Bayan-Ulgii',
    },
    keyFacts: {
      days: 15,
      durationLabel: { mn: '15 хоног', en: '15 days' },
      priceUsd: null,
      priceLabel: { mn: 'Хүсэлтээр', en: 'On request' },
      season: { mn: 'Хүсэлтээр', en: 'On request' },
      departures2027: { mn: 'Хүсэлтээр', en: 'On request' },
      groupSize: { mn: 'Хүсэлтээр', en: 'On request' },
      grade: { mn: 'Идэвхтэй эрэл хайгуул', en: 'Fit & Adventurous' },
    },
    pace: 'active',
    elevationM: 4374,
    imageUrl: IMG_KHYARGAS,
    imageAlt: {
      mn: 'Завхан Увсын Хар нуур ба Хяргас нуурын эрс тэс байгаль',
      en: 'Contrast of sand dunes, alpine lakes and peaks in North-West Mongolia',
    },
    summary: {
      mn: 'Элсэн манхны дунд гялалзах нуурууд, ариун Отгонтэнгэр, олон угсаатны соёл болон Таван Богдыг холбосон баруун хойд Монголын цоо шинэ жим.',
      en: 'New trails to north-west Mongolia — golden sand dunes, sparkling alpine lakes, diverse ethnic cultures and Altai Tavan Bogd.',
    },
    overview: {
      mn: [
        'Алтайн ба Хангайн өндөр уулс, алтан элсэн манхан хосолсон Завханы ариун Отгонтэнгэр (4,021 м), 40 км² Хар нуур, Сонгино сум, Монголын 2 дахь том давст нуур Хяргас, Хотон угсаатны нутаг Хархираа (4,037 м) – Түргэн (3,978 м) – Үүрэг нуураар аялна.',
        'Төгсгөлд нь Баян-Өлгий аймгийн Казак бүргэдчин айлаар зочилж Шивээт Хайрханаас морин ачаатайгаар Потанины мөсөн гол болон Таван Богдын таван оргил руу 3 өдрийн алхалт хийнэ.',
      ],
      en: [
        'Discover dramatic contrasts rarely visited by foreign travelers: Sacred Otgontenger Peak (4,021 m), sand-rimmed Khar Lake (40 sq.km), Songino herder settlements, Khyargas salt lake, Khoton communities in Kharkhiraa Valley (4,037 m) & Uureg Lake.',
        'Enter Bayan-Ulgii to meet Kazakh eagle hunters, pack horses at Shiveet Khairkhan, and trek across glaciers to Potanin Glacier and the 5 peaks of Altai Tavan Bogd (Khuiten 4,374 m, Malchin, Naran, Burged & Olgii).',
      ],
    },
    highlights: {
      mn: [
        'Төрийн тахилгат Отгонтэнгэр хайрхан (4,021 м) ба элсэн манхант Хар нуур (тэмээ уналга)',
        'Монголын 2 дахь том давст Хяргас нуур ба шувуу ажиглалт',
        'Хотон угсаатны нутаг Хархираа-Түргэний хөндий ба Үүрэг нуур',
        'Казак бүргэдчид, Шивээт Хайрхан ба Потанины мөсөн голын 20 км алхалт',
      ],
      en: [
        'Sacred Otgontenger (4,021 m) & Bactrian camel ride at sand-rimmed Khar Lake',
        'Khyargas Lake (2nd largest salt lake in Mongolia) & birdwatching',
        'Khoton community in Kharkhiraa–Turgen Valley & Uureg Lake',
        'Kazakh eagle hunters & 3-day glacier trek at Altai Tavan Bogd (Potanin Glacier)',
      ],
    },
    itinerary: [
      { dayLabel: { mn: '1-р өдөр', en: 'Day 1' }, title: { mn: 'Улаанбаатарт ирэх', en: 'Arrive in Ulaanbaatar' }, description: { mn: 'Үндэсний түүхийн музей, Гандан хийд, угталтын оройн хоол. Буудал.', en: 'City tour, National History Museum, Gandan monastery & welcome dinner.' } },
      { dayLabel: { mn: '2-р өдөр', en: 'Day 2' }, title: { mn: 'Улиастай нисэж Отгонтэнгэр (4,021 м) хүрэх', en: 'Fly to Uliastai & reach Otgontenger Peak' }, description: { mn: 'Төрийн тахилгат ариун хайрханы бэлд багтайгаа уулзан майханд хононо.', en: 'Reach sacred state-protected Otgontenger (4,021 m) and meet field team.' } },
      { dayLabel: { mn: '3-р өдөр', en: 'Day 3' }, title: { mn: 'Хар нуур ба Хоёр бөхт тэмээ', en: 'Khar Lake (Black Lake) & Camel Riding' }, description: { mn: '40 м гүн, элсэн манхнаар хүрээлэгдсэн Хар нуурын эргээр алхаж тэмээ унана.', en: 'Hike sand hills around 40 sq.km Khar Lake and ride two-humped Bactrian camels.' } },
      { dayLabel: { mn: '4-р өдөр', en: 'Day 4' }, title: { mn: 'Сонгино сум ба Айрагийн хөндий', en: 'Songino village & ancient stone monuments' }, description: { mn: 'Малчин айлын хотонд амарч Айрагийн хөндийн эртний чулуун хөшөөг үзнэ.', en: 'Interact with local herders, explore Airag valley & ancient monuments.' } },
      { dayLabel: { mn: '5–6-р өдөр', en: 'Days 5–6' }, title: { mn: 'Увс аймаг — Хяргас нуур', en: 'Uvs Province & Khyargas Lake' }, description: { mn: 'Монголын 2 дахь том давст нуур Хяргаст ирж загас, шувуу ажиглана.', en: 'Arrive at Khyargas salt lake for fishing and birdwatching. Tented camp.' } },
      { dayLabel: { mn: '7-р өдөр', en: 'Day 7' }, title: { mn: 'Хархирааны хөндий ба Үүрэг нуур', en: 'Kharkhiraa Valley & Uureg Lake' }, description: { mn: 'Хархираа (4,037 м), Түргэн (3,978 м) болон Хотон ардын нутгаар дамжин Үүрэг нуурт хүрнэ.', en: 'See twin Kharkhiraa–Turgen peaks, Khoton communities, and alpine Uureg Lake.' } },
      { dayLabel: { mn: '8–9-р өдөр', en: 'Days 8–9' }, title: { mn: 'Баян-Өлгий ба Казак бүргэдчин айл', en: 'Enter Bayan-Ulgii & Kazakh families' }, description: { mn: 'Өнгөлөг Казак гэрт орж бүргэд, шонхор сургах ёс заншлыг үзнэ.', en: 'Visit Kazakh families known for golden eagle, falcon and hawk hunting.' } },
      { dayLabel: { mn: '10-р өдөр', en: 'Day 10' }, title: { mn: 'Шивээт Хайрхан (2,500–3,000 м)', en: 'Shiveet Khairkhan trailhead' }, description: { mn: 'Машин хүрэх сүүлийн цэгт ирж морь түрээслэн 3 өдрийн алхалтдаа бэлтгэнэ.', en: 'Visit Kazakh family at 2,500–3,000 m and rent horses for 3-day trek.' } },
      { dayLabel: { mn: '11-р өдөр', en: 'Day 11' }, title: { mn: 'Таван Богдын бэл рүү алхах (4,100–4,374 м)', en: 'Trek toward Altai Tavan Bogd peaks' }, description: { mn: 'Моринд ачаагаа ачиж өндөр оргилуудын бэлд отоглоно.', en: 'Load luggage on horses and trek to the foot of the high peaks.' } },
      { dayLabel: { mn: '12-р өдөр', en: 'Day 12' }, title: { mn: 'Потанины мөсөн гол (20 км алхалт)', en: 'Potanin Glacier & Five Holy Peaks' }, description: { mn: 'Хүйтэн (4,374 м), Малчин, Наран, Бүргэд, Өлгий таван оргилыг холбосон мөсөн голоор 20 км алхана.', en: 'Approx. 20 km trek crossing glaciers connecting Khuiten, Malchin, Naran, Burged & Olgii peaks.' } },
      { dayLabel: { mn: '13-р өдөр', en: 'Day 13' }, title: { mn: 'Өлгий хот руу буцах', en: 'Back to Olgii town' }, description: { mn: 'Уулнаас бууж Өлгий хотод ирнэ.', en: 'Drive back to Olgii town.' } },
      { dayLabel: { mn: '14-р өдөр', en: 'Day 14' }, title: { mn: 'Улаанбаатар руу нисэх', en: 'Fly from Olgii to Ulaanbaatar' }, description: { mn: 'Улсын Их Дэлгүүрээр бэлэг дурсгал авч, оройн тоглолт үзнэ.', en: 'Fly back to UB; State Department Store souvenirs & evening folk show.' } },
      { dayLabel: { mn: '15-р өдөр', en: 'Day 15' }, title: { mn: 'Нисэх буудал хүргэх', en: 'Transfer to Airport' }, description: { mn: 'Олон улсын нислэгээр буцна.', en: 'Depart from Ulaanbaatar.' } },
    ],
    included: {
      mn: ['Зочид буудал, гэр бааз, майхан, хөтөч орчуулга, бүрэн хоол, дотоодын нислэгүүд, 4x4 тээвэр, БЦГ/музейн хураамж, кемпийн хэрэгсэл'],
      en: ['Hotel/ger/tented camp, guiding & interpreting, full board, domestic flights, 4x4/minivan, National Park & museum fees, camping equipment'],
    },
    notIncluded: {
      mn: ['Олон улсын нислэг, хувийн хэрэгсэл, нэмэлт үйлчилгээ, илүү тээш, ганцаарчилсан өрөө, ундаа, унтлагын хүүдий, даатгал'],
      en: ['International airfare, personal equipments, optional costs, excess baggage, single room supplement, alcohol, sleeping bag & travel insurance'],
    },
  },
  {
    number: 20,
    id: 'discover-wild-altai-wildlife-safari',
    slug: 'discover-the-wild-altai',
    webPage: 'https://www.explorealtai.com/tours/discover-the-wild-altai',
    oldPage: 'https://www.explorealtai.com/detailnews/11100011',
    category: 'wildlife',
    categoryLabel: {
      mn: 'Зэрлэг амьтад',
      en: 'Wildlife Safari',
    },
    title: {
      mn: 'Зэрлэг Алтайг Нээхүй: Амьтдын Сафари',
      en: 'Discover the Wild Altai: Wildlife Safari',
    },
    subtitle: {
      mn: 'Янгир, Алтайн Аргаль болон ховор Цоохор ирвэсийн мөрөөр',
      en: 'Siberian Ibex, Altai Argali Sheep & Elusive Snow Leopard Territory',
    },
    region: {
      mn: 'Баян-Өлгий · Алтайн нуруу',
      en: 'Western Mongolia · Altai Mountains',
    },
    keyFacts: {
      days: null,
      durationLabel: { mn: 'Хүсэлтээр', en: 'On request' },
      priceUsd: null,
      priceLabel: { mn: 'Хүсэлтээр', en: 'On request' },
      season: { mn: 'Хүсэлтээр', en: 'On request' },
      departures2027: { mn: 'Хүсэлтээр', en: 'On request' },
      groupSize: { mn: 'Хүсэлтээр', en: 'On request' },
      grade: { mn: 'Байгаль, фото сафари', en: 'Wildlife & Photo Safari' },
    },
    pace: 'balanced',
    imageUrl: IMG_KHUVSGUL,
    imageAlt: {
      mn: 'Алтайн өндөр уулын зэрлэг амьтдын нутаг, цэнгэг нуур ба хадан хясаа',
      en: 'Wild Altai alpine habitats for ibex, argali and snow leopard',
    },
    summary: {
      mn: 'Баруун Монголын Алтайн нуруу нь байгальд хайртай, зэрлэг амьтан сонирхогчдын жинхэнэ диваажин юм.',
      en: 'The Altai Mountains of Western Mongolia are a true paradise for nature lovers and wildlife enthusiasts.',
    },
    overview: {
      mn: [
        'Эгц хадан цохионоос эхлээд тайван тал, хойд тайгын ой хүртэлх Алтайн зэрлэг нутагт Сибирийн янгир (Capra sibirica), ховор Алтайн аргаль хонь (Ovis ammon) болон дэлхийн хамгийн ховор том муурын нэг Цоохор ирвэсийг ажиглах боломжтой.',
        'Гэрэл зурагчид, гэр бүл эсвэл ганцаарчилсан аялагчдад зориулан газар нутгаа гарын арван хуруу шигээ мэдэх орон нутгийн хөтөч нар Казак малчин айлын уламжлалтай хослуулан аюулгүй зохион байгуулна.',
      ],
      en: [
        'Home to Central Asia’s most iconic and elusive species across rugged alpine peaks, steep valleys, rolling steppes, and northern taiga forests: Siberian ibex (Capra sibirica), rare Altai Argali sheep (Ovis ammon), and the chance to glimpse the legendary snow leopard.',
        'Designed for photographers, families, or solo travelers seeking tranquility in nature — pairing optimal wildlife spotting with Kazakh nomadic visits and experienced local guides.',
      ],
    },
    highlights: {
      mn: [
        'Эгц хадан хясаан дахь Сибирийн янгир (Capra sibirica)',
        'Өндөрлөг бэлчээрийн ховор Алтайн аргаль хонь (Ovis ammon)',
        'Дэлхийн хамгийн ховор зэрлэг амьтдын нэг Цоохор ирвэс харах боломж',
        'Гэрэл зурагчин, гэр бүлд ээлтэй аюулгүй байгалийн ажиглалт ба Казак айлууд',
      ],
      en: [
        'Siberian ibex (Capra sibirica) navigating steep rocky slopes',
        'Rare Altai Argali sheep (Ovis ammon) on highland pastures',
        'Chance to glimpse the legendary elusive Snow Leopard',
        'Tailored for wildlife photographers, families & solo nature travelers',
      ],
    },
    itineraryNote: {
      mn: 'Улирал болон ажиглах амьтдын байршилд тохируулан өдөр бүрийн хуваарийг гаргана.',
      en: 'No day-by-day itinerary on the old website (available on request).',
    },
    itinerary: [],
    included: {
      mn: ['Зэрлэг амьтны нутгийг мэдэх орон нутгийн хөтөч, тээвэр, байр ба хоол (хүсэлтээр)'],
      en: ['Experienced local wildlife guides, 4x4 transport, camp accommodation & meals (on request)'],
    },
    notIncluded: {
      mn: ['Хувийн дуран/гэрэл зургийн хэрэгсэл, нислэг, аяллын даатгал (хүсэлтээр)'],
      en: ['Binoculars/camera gear, flights & travel insurance (on request)'],
    },
  },
];
