import type { Expedition } from '../types/travel';

const IMG_ALTAI = '/src/assets/images/hero_mongolia_expedition_1795175547348.jpg';
const IMG_KHUVSGUL = '/src/assets/images/dest_khuvsgul_taiga_1795175547240.jpg';
const IMG_ORKHON = '/src/assets/images/dest_orkhon_steppe_1795175546419.jpg';
const IMG_KHYARGAS = '/src/assets/images/dest_khyargas_lake_1795175546830.jpg';
const IMG_TERELJ = '/src/assets/images/dest_terelj_khentii_1795175547433.jpg';

export const TOURS_PART_2: Expedition[] = [
  {
    number: 8,
    id: 'bulgan-kayaking',
    slug: 'bulgan-kayaking',
    webPage: 'https://www.explorealtai.com/tours/bulgan-kayaking',
    oldPage: 'https://www.explorealtai.com/detailnews/11040005',
    category: 'river',
    categoryLabel: {
      mn: 'Голын аялал',
      en: 'River Trips (Rafting & Kayaking)',
    },
    title: {
      mn: 'Булган Голын Каяк Аялал',
      en: 'Bulgan Kayaking',
    },
    subtitle: {
      mn: 'Өмнөд Алтайн уулын хавцал ба Буянтын 3 өдрийн ширүүн урсгал',
      en: 'Southern Altai Whitewater Canyons & Buyant Canyon',
    },
    region: {
      mn: 'Баян-Өлгий · Ховд (Булган гол)',
      en: 'Southern Altai · Bulgan & Buyant Rivers',
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
    pace: 'active',
    imageUrl: IMG_KHYARGAS,
    imageAlt: {
      mn: 'Өмнөд Алтайн цэнхэр уст Булган голын хавцал',
      en: 'Turquoise canyon river waters in the Southern Altai',
    },
    summary: {
      mn: 'Сүрлэг Булган голын хавцал болон түүний цутгал голуудын цагаан хөөст урсгалыг анхдагчдын нэг болж нээн судлаарай!',
      en: 'Be among the first to explore the whitewater opportunities of the magnificent Bulgan River Canyon and it’s tributaries!',
    },
    overview: {
      mn: [
        'Өмнөд Алтайн цагаан хөөст хавцал: 15,000 жилийн өмнөх балар эртний агуйн зураг, эртний нүүдэлчдийн оршуулгын дурсгалуудыг үзэж бат бөх 4x4 машинаар Алтайн гүнд нэвтэрнэ.',
        'Бүргэд, саарал чоно, ховор цоохор ирвэс, аргаль хонины нутгаар нэг өдөр морь унаж, оройдоо Казак бүргэдчин айлын галын дэргэд дулаан яриа өрнүүлнэ. Аяллын оргил хэсэг нь онгон Буянт хавцлын 3 өдрийн цагаан хөөст каяк экспедиц юм.',
      ],
      en: [
        'Southern Altai Whitewater Canyons: Explore the whitewater opportunities of the magnificent Bulgan River Canyon and its tributaries. Gaze on prehistoric cave paintings dating back more than 15,000 years and undisturbed ancient burial sites while traveling deep into the Altai with sturdy 4x4 vehicles.',
        'Territory of soaring eagles, gray wolves, endangered snow leopards, and argali sheep. Ride horseback for a day, share fire-side meals with Kazakh Eagle Hunters, and finish with an enchanting 3-day whitewater expedition through pristine Buyant Canyon.',
      ],
    },
    highlights: {
      mn: [
        'Булган голын хавцал ба Буянтын 3 өдрийн уулын урсгалт каяк',
        '15,000+ жилийн түүхтэй эртний агуйн сүг зураг',
        'Аргаль, чоно, бүргэд, ирвэсний өлгий нутгаар морин аялал',
        'Казак бүргэдчин айлын гэрт галын дэргэдэх орой',
      ],
      en: [
        '3-day whitewater expedition through pristine Buyant Canyon & Bulgan tributaries',
        '15,000+ year-old prehistoric cave paintings & undisturbed ancient burials',
        'Horseback day ride through argali, wolf, eagle & snow leopard territory',
        'Evenings sharing food by the fire with Kazakh Eagle Hunters',
      ],
    },
    itineraryNote: {
      mn: 'Өдөр бүрийн дэлгэрэнгүй хөтөлбөрийг аялагчийн хүсэлт, багийн туршлагаас хамааран гаргана.',
      en: 'No day-by-day itinerary on the old website (available on request).',
    },
    itinerary: [],
    included: {
      mn: ['Каяк завь, 4x4 тээвэр, хөтөч, морь болон хээрийн хоол (хүсэлтээр)'],
      en: ['Kayak/raft support, 4x4 vehicles, local guides & meals (full specification on request)'],
    },
    notIncluded: {
      mn: ['Хувийн усны хувцас, нислэг, аяллын даатгал (хүсэлтээр)'],
      en: ['Personal paddling gear, airfares & travel insurance (full specification on request)'],
    },
  },
  {
    number: 9,
    id: 'khangai-nuruu-heart-of-mongolia',
    slug: 'khangai-nuruu-heart-of-mongolia',
    webPage: 'https://www.explorealtai.com/tours/khangai-nuruu-heart-of-mongolia',
    oldPage: 'https://www.explorealtai.com/detailnews/11040002',
    category: 'river',
    categoryLabel: {
      mn: 'Голын аялал',
      en: 'River Trips (Rafting & Kayaking)',
    },
    title: {
      mn: 'Хангайн Нуруу — Монголын Зүрх',
      en: 'Khangai Nuruu – Heart of Mongolia',
    },
    subtitle: {
      mn: 'Орхон ба Чулуут голын 230 км рафтинг, каяк болон Тул загасчлал',
      en: 'Orkhon Gol Class II–IV & 230 km Chuluut Gol Expedition',
    },
    region: {
      mn: 'Хангайн нуруу · Орхон ба Чулуут гол',
      en: 'Central Mongolia · Orkhon & Chuluut Rivers',
    },
    keyFacts: {
      days: 16,
      durationLabel: { mn: '16 хоног', en: '16 days' },
      priceUsd: null,
      priceLabel: { mn: 'Хүсэлтээр', en: 'On request' },
      season: { mn: 'Хүсэлтээр', en: 'On request' },
      departures2027: { mn: 'Хүсэлтээр', en: 'On request' },
      groupSize: { mn: 'Хүсэлтээр', en: 'On request' },
      grade: { mn: 'II–IV ангилал (Рафтинг)', en: 'Class II–IV (rafting scale)' },
    },
    pace: 'active',
    imageUrl: IMG_ORKHON,
    imageAlt: {
      mn: 'Хангайн нурууны Орхон ба Чулуут голын хавцал, гэр бааз',
      en: 'Orkhon Valley river camp in the heart of Khangai Nuruu',
    },
    summary: {
      mn: 'Төв Азийн эртний соёл иргэншлийн төв байсан Орхоны хөндий, Хархорин болон Чулуут голын 230 км усан аяллыг хослуулсан 16 хоногийн маршрут.',
      en: 'Journey across the rolling steppes to the Orkhon Gol Valley, the historical power center of long vanished Central Asian civilizations.',
    },
    overview: {
      mn: [
        '1220 онд Чингис хааны байгуулсан Их Монгол Улсын нийслэл Хархорумын туурь, Буддын хийдүүдийг үзэж, Орхон голын эхний IV ангиллын хавцал хүрхрээнд каякаар, II–III ангиллын тайван хэсгээр рафтаар уруудана.',
        'Тэрхийн Цагаан нуурын эко гэр баазад амарч, тул загасчлал сонирхогчдын мөрөөдөл болох Хангайн гүн дэх Чулуут голын 230 км (7 хоногийн) усан экспедицийг туулна.',
      ],
      en: [
        'Stroll around ruins of Kara Korum (established by Chinggis Khaan in 1220), explore Buddhist monasteries, kayak upper Orkhon Gol canyons and waterfalls (Class IV), or raft mellower stretches (Class II/III).',
        'Fish for Taiman, ride horses with local Mongols, relax at our eco-ger camp on picturesque Tsagaan Nuur (White Lake), and escape on a 7-day, 230 km (143-mile) river expedition descending Chuluut Gol (Rock River) through isolated Hangay Nuruu.',
      ],
    },
    highlights: {
      mn: [
        'Орхоны голын II–IV ангиллын каяк ба рафтинг',
        'Чулуут голын 230 км (7 хоногийн) хавцлын экспедиц',
        'Эртний Хархорум, Буддын хийд ба Тэрхийн Цагаан нуурын гэр бааз',
        'Тул (Taiman) загасчлал ба нутгийн малчидтай морин аялал',
      ],
      en: [
        'Upper Orkhon Gol (Class IV) kayaking & Class II/III rafting',
        '7-day / 230 km expedition down Chuluut Gol (Rock River)',
        'Ruins of Kara Korum, monasteries & eco-ger camp at Tsagaan Nuur',
        'Taiman fishing rivers & horseback riding in Khangai Nuruu',
      ],
    },
    itineraryNote: {
      mn: 'Өдөр бүрийн нарийвчилсан төлөвлөгөөг хүсэлтээр гаргаж өгнө.',
      en: 'No day-by-day itinerary on the old website (available on request).',
    },
    itinerary: [],
    included: {
      mn: ['Усан онгоц/каяк, 4x4 дэмжлэг, эко гэр бааз, хөтөч ба хоол (хүсэлтээр)'],
      en: ['Rafting/kayak gear, eco-ger camp, 4x4 support, guide & meals (on request)'],
    },
    notIncluded: {
      mn: ['Олон улсын нислэг, загасчлалын зөвшөөрөл/хэрэгсэл, даатгал (хүсэлтээр)'],
      en: ['International airfare, personal gear & travel insurance (on request)'],
    },
  },
  {
    number: 10,
    id: 'shishgid-kayaking',
    slug: 'shishgid-kayaking',
    webPage: 'https://www.explorealtai.com/tours/shishgid-kayaking',
    oldPage: 'https://www.explorealtai.com/detailnews/11040006',
    category: 'river',
    categoryLabel: {
      mn: 'Голын аялал',
      en: 'River Trips (Rafting & Kayaking)',
    },
    title: {
      mn: 'Шишгэдийн Каяк ба Загасчлалын Аялал',
      en: 'Shishgid Kayaking',
    },
    subtitle: {
      mn: 'Хөвсгөлийн Сибирийн тайга, бөө мөргөл ба цаатан нутгийн гол',
      en: 'Class III–V Northern Mongolia Exploratory (15–20 days)',
    },
    region: {
      mn: 'Хөвсгөл · Дархадын хотгор · Хэнтий',
      en: 'Khovsgol & Khentii Mountains',
    },
    keyFacts: {
      days: null,
      durationLabel: { mn: 'Хүсэлтээр (15–20 хоног)', en: 'On request (15–20 days)' },
      priceUsd: null,
      priceLabel: { mn: 'Хүсэлтээр', en: 'On request' },
      season: { mn: '9-р сар', en: 'September' },
      departures2027: { mn: 'Хүсэлтээр', en: 'On request' },
      groupSize: { mn: 'Хүсэлтээр', en: 'On request' },
      grade: { mn: 'III–V ангилал (Рафтинг)', en: 'Class III–V (rafting scale)' },
    },
    pace: 'active',
    imageUrl: IMG_KHUVSGUL,
    imageAlt: {
      mn: 'Хөвсгөл аймгийн хойд тайгын цэнгэг гол ба уулс',
      en: 'Northern Mongolia taiga forest river and alpine waters in Khovsgol',
    },
    summary: {
      mn: 'Аяллын хөтөлбөрийг хувийн сонирхолд бүрэн нийцүүлэн бүтээх уян хатан боломж — хойд Хөвсгөлийн тайга дахь III–V ангиллын усан экспедиц.',
      en: 'Ultimate flexibility to design a custom trip. September river running in northern Khovsgol’s Siberian taiga.',
    },
    overview: {
      mn: [
        '9-р сард зуны бороо зогсож гол мөрөн тунгалаг, загасаар арвин болох үед бөө мөргөл, цаатан ардын нутаг Хөвсгөлийн хойд тайга эсвэл Хэнтийн нурууны голуудаар уруудахад хамгийн тохиромжтой.',
        'Хоёр үндсэн хувилбартай: «FISH MONGOLIA TRIP» (15–20 хоног дэлхийн зэрэглэлийн загасчлал) болон «WAY OUT THERE...» (15–20 хоног бие даасан каяк эрэл хайгуул).',
      ],
      en: [
        'September is prime season in Khovsgol, Mongolia’s northernmost province reaching into the Siberian taiga: summer rains have passed, rivers run clear and full of fish, ideal for Class III–V whitewater or river exploration near Khentii.',
        'Two customizable core expedition concepts: FISH MONGOLIA TRIP (15–20 days world-class river fishing) and WAY OUT THERE... (15–20 days self-support exploratory kayaking in the land of shamans and reindeer herders).',
      ],
    },
    highlights: {
      mn: [
        '9-р сарын тунгалаг урсгалтай III–V ангиллын тайгын голууд',
        'FISH MONGOLIA (15–20 хоног) дэлхийн түвшний загасчлалын хувилбар',
        'WAY OUT THERE (15–20 хоног) бие даасан каяк экспедиц',
        'Цаатан болон бөө мөргөлийн уламжлал, Хэнтийн нурууны голуудын сонголт',
      ],
      en: [
        'Class III–V September whitewater in Siberian taiga waters',
        'FISH MONGOLIA TRIP (15–20 days) world-class fishing expedition',
        'WAY OUT THERE... (15–20 days) self-support kayak exploratory',
        'Land of shamans and reindeer herders, plus Khentii river options',
      ],
    },
    itineraryNote: {
      mn: 'Таны сонирхолд нийцүүлэн тусгай өдрийн хөтөлбөр боловсруулна.',
      en: 'No day-by-day itinerary on the old website (available on request).',
    },
    itinerary: [],
    included: {
      mn: ['Аяллын төлөвлөлт, орон нутгийн хөтөч, аюулгүйн дэмжлэг (хүсэлтээр)'],
      en: ['Custom itinerary logistics, guides & river safety support (on request)'],
    },
    notIncluded: {
      mn: ['Захиалгат нислэг, хувийн каяк/загасчлалын хэрэгсэл (хүсэлтээр)'],
      en: ['Flights, personal river equipment & insurance (on request)'],
    },
  },
  {
    number: 11,
    id: 'tavan-bogd-camels-kayaks-rivers-rafts',
    slug: 'tavan-bogd-camels-kayaks-rivers-rafts',
    webPage: 'https://www.explorealtai.com/tours/tavan-bogd-camels-kayaks-rivers-rafts',
    oldPage: 'https://www.explorealtai.com/detailnews/11040004',
    category: 'river',
    categoryLabel: {
      mn: 'Голын аялал',
      en: 'River Trips (Rafting & Kayaking)',
    },
    title: {
      mn: 'Таван Богд: Тэмээ, Каяк, Гол ба Рафтинг',
      en: 'Tavan Bogd-Camels, Kayaks, Rivers and Rafts',
    },
    subtitle: {
      mn: 'Цагаан гол (Class III/IV) ба Ховд голын анхдагч усан буулт',
      en: 'Potanin Glacier trek, Takalbai camel pass & Tsagaan / Khovd Gol rafting',
    },
    region: {
      mn: 'Баян-Өлгий · Гурван улсын уулзвар',
      en: 'Bayan-Ulgii · Mongolia–Russia–China Border',
    },
    keyFacts: {
      days: 16,
      durationLabel: { mn: '16 хоног', en: '16 days' },
      priceUsd: null,
      priceLabel: { mn: 'Хүсэлтээр', en: 'On request' },
      season: { mn: 'Хүсэлтээр', en: 'On request' },
      departures2027: { mn: 'Хүсэлтээр', en: 'On request' },
      groupSize: { mn: 'Хүсэлтээр', en: 'On request' },
      grade: { mn: 'II–IV ангилал (Рафтинг)', en: 'Class II–IV (rafting scale)' },
    },
    pace: 'active',
    elevationM: 4374,
    imageUrl: IMG_ALTAI,
    imageAlt: {
      mn: 'Таван Богдын Цагаан гол ба Потанины мөсөн голын хөндий',
      en: 'Tsagaan Gol and Altai Tavan Bogd expedition corridor',
    },
    summary: {
      mn: 'Монгол, Орос, Хятад гурван улсын хилийн уулзвар дахь Алтайн гүнд нэвтэрч, Цагаан гол болон Ховд голын эхээр анхдагч рафтинг, каяк буулт хийнэ.',
      en: 'Go deep into the Altai Mountains where Mongolia, Russia, and China meet — first descents of Tsagaan Gol and Khovd Gol.',
    },
    overview: {
      mn: [
        'Цагаан голын эх Потанины мөсөн гол руу алхаж буюу мориор хүрээд, Таван Богд (4,374 м) ба Малчин ууланд гарч, Шивээт Хайрханы бөөгийн тахилгын газар ба мянганы түүхт хадны сүг зургуудыг үзнэ.',
        'Тэмээнд ачаа ачин 3,000+ м өндөр Такалбайн давааг давж Цагаан усны голын III/IV ангиллын усаар уруудаад, баруун Монголын хамгийн урт Ховд голын эх дээр 3 өдрийн II/III ангиллын усан аяллаар өндөрлөнө.',
      ],
      en: [
        'Hike or horseback ride to Potanin Glacier, visit Tavan Bogd (4,374 m), trek up Malchin Mountain on the Russian border, and respectfully explore petroglyphs and the Shaman ceremonial site at Shiveet Khairhan.',
        'Cross the 10,000 ft Takalbai Pass with camels for rafting Class III/IV Tsagaan Usnii Gol, fish fresh lenok, ride with local Kazakhs, and finish with a 3-day Class II/III expedition down the source of the majestic Khovd Gol.',
      ],
    },
    highlights: {
      mn: [
        'Потанины мөсөн гол, Малчин оргил & Шивээт Хайрханы хадны зураг',
        '3,000 м (10,000 ft) Такалбайн давааг тэмээн жингээр давах',
        'Цагаан усны голын III/IV ангиллын рафтинг ба зэвэг загас барих',
        'Баруун Монголын хамгийн том Ховд голын 3 өдрийн II/III ангиллын экспедиц',
      ],
      en: [
        'Potanin Glacier, Malchin peak views & Shiveet Khairhan petroglyphs',
        'Camel crossing over 10,000 ft Takalbai Pass',
        'Class III/IV Tsagaan Usnii Gol rafting & fresh lenok fishing',
        '3-day Class II/III river expedition at the source of Khovd Gol',
      ],
    },
    itineraryNote: {
      mn: 'Өдөр бүрийн нарийвчилсан хөтөлбөрийг хүсэлтээр гаргаж өгнө.',
      en: 'No day-by-day itinerary on the old website (available on request).',
    },
    itinerary: [],
    included: {
      mn: ['Тэмээ/морин дэмжлэг, рафтинг завь, суурь кэмп, хөтөч (хүсэлтээр)'],
      en: ['Pack camels, rafting equipment, base camp, local guides & meals (on request)'],
    },
    notIncluded: {
      mn: ['Олон улсын ба дотоодын нислэг, хувийн хэрэгсэл, даатгал (хүсэлтээр)'],
      en: ['Airfares, personal equipment & travel insurance (on request)'],
    },
  },
  {
    number: 12,
    id: 'tuul-rafting',
    slug: 'tuul-rafting',
    webPage: 'https://www.explorealtai.com/tours/tuul-rafting',
    oldPage: 'https://www.explorealtai.com/detailnews/11050022',
    category: 'river',
    categoryLabel: {
      mn: 'Голын аялал',
      en: 'River Trips (Rafting & Kayaking)',
    },
    title: {
      mn: 'Туул Голын Рафтинг',
      en: 'Tuul Rafting',
    },
    subtitle: {
      mn: 'Улаанбаатараас 1.5 цагийн зайд Тэрэлжийн БЦГ дундуур 1–3 өдрийн аялал',
      en: '1, 2 or 3-day rafting through Terelj National Park near Ulaanbaatar',
    },
    region: {
      mn: 'Улаанбаатар · Горхи-Тэрэлж БЦГ',
      en: 'Ulaanbaatar · Terelj National Park',
    },
    keyFacts: {
      days: null,
      durationLabel: { mn: 'Хүсэлтээр (1–3 хоног)', en: 'On request (1–3 days)' },
      priceUsd: null,
      priceLabel: { mn: 'Хүсэлтээр', en: 'On request' },
      season: { mn: 'Хүсэлтээр', en: 'On request' },
      departures2027: { mn: 'Хүсэлтээр', en: 'On request' },
      groupSize: { mn: 'Хүсэлтээр', en: 'On request' },
      grade: { mn: 'Туршлага шаардахгүй (Сэлэх чадвартай)', en: 'No experience required' },
    },
    pace: 'relaxed',
    imageUrl: IMG_TERELJ,
    imageAlt: {
      mn: 'Горхи-Тэрэлжийн хөндий дундуур урсах Туул гол ба ой',
      en: 'Tuul River winding through poplar forests and mountains in Terelj',
    },
    summary: {
      mn: 'Улаанбаатараас 1.5 цагийн зайнаас эхэлж Тэрэлжийн байгалийн цогцолборт газрын онгон хөндийгөөр 1, 2 эсвэл 3 өдөр рафтаар уруудах аялал.',
      en: 'Rafting on the Tuul River for one, two or three days, starting about one and a half hours’ drive from Ulaanbaatar and running through Terelj National Park.',
    },
    overview: {
      mn: [
        'Нийслэлээс 1.5 цаг давхиад л онгон тал, эгц уул, улиасан төгөл бүхий Тэрэлжийн голоор уруудна. Рафтингийн тусгай туршлага шаардахгүй, сэлж чаддаг байхад хангалттай. Аврах хантааз, усны хамгаалалттай уут бүгд багтсан.',
        '2 болон 3 хоногийн аялалд майханд хоноглоно. Ердийн хуваарь 09:00–18:00 боловч таны цагт тохируулж болно. Өмнө болон дараа нь морин аялал, явган алхалт, дугуй нэмэх боломжтой.',
      ],
      en: [
        'Only 1.5 hours from Ulaanbaatar, float past open steppes, steep mountainsides and primeval poplar forests right through Terelj National Park. No rafting experience or special fitness required — just swimming capability. Life vests and dry sacks are supplied.',
        '2- and 3-day trips camp in tents along the river. Standard day hours are 09:00 to 18:00 (flexible to your schedule), and horse trekking, hiking or biking in Terelj can easily be added.',
      ],
    },
    highlights: {
      mn: [
        '1, 2 эсвэл 3 хоногийн уян хатан хувилбар — туршлага шаардахгүй',
        'УБ-аас ердөө 90 минутын зайд Тэрэлжийн байгалийн үзэсгэлэн',
        'Аврах хантааз, усны уут, хүнс, тээвэр, хөтөч бүгд багтсан',
        'Морин аялал, дугуй болон алхалт нэмж хослуулах боломжтой',
      ],
      en: [
        'Flexible 1, 2 or 3-day trips — no prior rafting experience required',
        '90 minutes from Ulaanbaatar directly through Terelj National Park',
        'Includes food, transport, guide, life vests, dry sacks & tents (multi-day)',
        'Easily combined with horse trekking, hiking or mountain biking',
      ],
    },
    itineraryNote: {
      mn: '1–3 өдрийн маршрутыг таны гарах/буцах цагт нийцүүлэн гаргана.',
      en: 'No day-by-day itinerary on the old website (available on request).',
    },
    itinerary: [],
    included: {
      mn: ['Хоол хүнс, тээвэр, хөтөч, аврах хантааз, хуурай уут, майхан (2–3 хоногт)'],
      en: ['Food, transport, guide, life vests, dry sacks & tents (for 2–3 day trips)'],
    },
    notIncluded: {
      mn: ['Хувийн унтлагын хүүдий болон нэмэлт үйлчилгээ'],
      en: ['Personal sleeping bag & optional add-on activities'],
    },
  },
  {
    number: 13,
    id: 'altai-horse-riding-experience',
    slug: 'altai-horse-riding-experience',
    webPage: 'https://www.explorealtai.com/tours/altai-horse-riding-experience',
    oldPage: 'https://www.explorealtai.com/detailnews/11100009',
    category: 'horse',
    categoryLabel: {
      mn: 'Морин аялал',
      en: 'Horse Trails',
    },
    title: {
      mn: 'Алтайн Морин Аяллын Туршлага',
      en: 'Altai Horse Riding Experience',
    },
    subtitle: {
      mn: 'Алтай Таван Богдын өнгөт хөндий, нуур ба Казак-Тува-Хотон айлууд',
      en: 'Colorful Altai valleys, alpine lakes & Kazakh, Tuva and Khoton families',
    },
    region: {
      mn: 'Баян-Өлгий · Алтай Таван Богд',
      en: 'Bayan-Ulgii · Altai Tavan Bogd',
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
    pace: 'balanced',
    elevationM: 4374,
    imageUrl: IMG_ALTAI,
    imageAlt: {
      mn: 'Алтайн цаст нурууны хөндийд яваа морьт аялагчид',
      en: 'Horse riders traversing the valleys of Altai Tavan Bogd',
    },
    summary: {
      mn: 'Алтай Таван Богдын өнгөт хөндийгөөр морьтой аялж хамгийн үзэсгэлэнт нуурууд, Казак, Тува, Хотон үндэстний айлуудаар зочилно.',
      en: 'Horse trails through the colourful valleys of Altai Tavan Bogd towards the area’s most beautiful lakes, with visits to Kazakh, Tuva and Khoton families on the way.',
    },
    overview: {
      mn: [
        'Хүйтэн оргил (4,374 м) тэргүүтэй Ариун Таван Оргил, урт мөсөн голуудын бүсээр явган болон мориор аялж, Алтайн өнгөт хөндий, үзэсгэлэнт нууруудыг зорино.',
        'Зам дагуу Казак, Тува, Хотон цөөнхийн малчин айлуудаар тогтмол орж тэдний өдөр тутмын амьдрал, зан заншилтай дотно танилцана.',
      ],
      en: [
        'Journey toward the Five Holy Peaks of Altai (crowned by Khuiten Peak at 4,374 m) and cross Mongolia’s longest glaciers alongside horseback trails through colorful valleys and pristine mountain lakes.',
        'Along the route, visit local families of Kazakh, Tuva, and Khoton minority groups to learn about their customs and share warm hospitality.',
      ],
    },
    highlights: {
      mn: [
        'Хүйтэн оргил (4,374 м) ба Алтайн урт мөсөн голуудын бүс',
        'Өнгөт уулын хөндий ба Алтайн үзэсгэлэнт нууруудын морин жим',
        'Казак, Тува, Хотон угсаатны айлуудаар зочлох соёлын уулзалт',
      ],
      en: [
        'Trekking & riding near Khuiten Peak (4,374 m) and longest glaciers',
        'Horse trails through colorful mountain valleys toward pristine lakes',
        'Friendly visits with Kazakh, Tuva, and Khoton local families',
      ],
    },
    itineraryNote: {
      mn: 'Таны аяллын хоногт тохируулан өдрийн хуваарийг гаргана.',
      en: 'No day-by-day itinerary on the old website (available on request).',
    },
    itinerary: [],
    included: {
      mn: [
        'Зочид буудал, гэр бааз, майхант отог',
        'Хөтөч, орчуулга ба бүрэн хоол',
        '4x4 буюу микроавтобус тээвэр, БЦГ ба музейн тасалбар',
        'Орон нутгийн хөтөч, уналгын морьд, кемпийн хэрэгсэл',
      ],
      en: [
        'Hotel, ger camp, tented camp accommodation',
        'Guiding & interpreting service, full board meals',
        '4x4 or minivan transport, National Park & museum fees',
        'Local guide, horses & camping equipments',
      ],
    },
    notIncluded: {
      mn: [
        'Олон улсын нислэг, хувийн хэрэгсэл, нэмэлт үйлчилгээ',
        'Илүү тээш, ганцаарчилсан өрөөний нэмэгдэл',
        'Согтууруулах ундаа, унтлагын хүүдий, даатгал',
      ],
      en: [
        'International airfare, personal equipments & optional activity costs',
        'Excess baggage & single room supplement',
        'Alcoholic drinks, sleeping bag & travel insurance',
      ],
    },
  },
  {
    number: 14,
    id: 'khangai-horse-riding-experience',
    slug: 'khangai-horse-riding-experience',
    webPage: 'https://www.explorealtai.com/tours/khangai-horse-riding-experience',
    oldPage: 'https://www.explorealtai.com/detailnews/11100007',
    category: 'horse',
    categoryLabel: {
      mn: 'Морин аялал',
      en: 'Horse Trails',
    },
    title: {
      mn: 'Хангайн Морин Аялал',
      en: 'Khangai Horse Riding Experience',
    },
    subtitle: {
      mn: 'Цагаан нуур, Хоргын тогоо, Хархорум, Орхоны хүрхрээ ба Хустай (13 хоног)',
      en: 'White Lake, Khorgo Volcano, Kharkhorin, Orkhon Waterfall & Takhi (13 days)',
    },
    region: {
      mn: 'Архангай · Өвөрхангай · Төв аймаг',
      en: 'Arkhangai · Orkhon Valley · Khustai',
    },
    keyFacts: {
      days: 13,
      durationLabel: { mn: '13 хоног', en: '13 days' },
      priceUsd: null,
      priceLabel: { mn: 'Хүсэлтээр', en: 'On request' },
      season: { mn: 'Хүсэлтээр', en: 'On request' },
      departures2027: { mn: 'Хүсэлтээр', en: 'On request' },
      groupSize: { mn: 'Хүсэлтээр', en: 'On request' },
      grade: { mn: 'Өдөрт 20–30 км морь унах', en: '20–30 km riding/day' },
    },
    pace: 'active',
    imageUrl: IMG_ORKHON,
    imageAlt: {
      mn: 'Хангайн уулс ба Орхоны хөндийн морин аяллын жим',
      en: 'Horse camp and riding trails across Arkhangai and Orkhon Valley',
    },
    summary: {
      mn: 'Түүхт хязгааргүй тал нутгаар эрх чөлөөтэй давхих мөрөөдлийг биелүүлэх Цагаан нуур – Хорго – Хархорум – Орхоны хүрхрээний 13 хоногийн морин аялал.',
      en: 'This horse riding holiday takes you to an inspiring parts of the country letting you to gallop freely through the endless horizons of this historical land.',
    },
    overview: {
      mn: [
        'Архангайн Тариат сумын Тэрхийн Цагаан нуур дахь «Хишиг» морин баазад адуучин хөтөч нартайгаа танилцаж, тэсвэр хатуужилтай Монгол мориор өдөрт 20–30 км замаар аялна.',
        'Хоргын тогоо, Түрэгийн VIII–IX зууны бичээс, Хархорум, Эрдэнэ Зуу, Шанх, Төвхөн хийд, Орхоны хүрхрээ болон Хустайн байгалийн цогцолборт газрын 200 орчим Тахь адууг үзнэ.',
      ],
      en: [
        'Meet local horse-guides at “Khishig” horse camp on the shore of White Lake in Tariat, Arkhangai. Riding hardy Mongolian horses 20–30 km per day, traverse Khorgo volcano, Orkhon Valley, ancient Kharkhorin, Erdene Zuu, Shankh and Tovkhon temples, and Orkhon Waterfall.',
        'Finish overland via Khujirt and Khustai National Park to observe wild Takhi (Przewalski) horses, plus Bogd Khan Winter Palace and cultural show in Ulaanbaatar.',
      ],
    },
    highlights: {
      mn: [
        'Цагаан нуур ба Хорго галт уулын тогоо орчмоор мориор аялах (20–30 км/өдөр)',
        'VIII–IX зууны Түрэгийн хөшөө, эртний Хархорум ба Эрдэнэ Зуу хийд',
        'Шанх болон Төвхөн хийд, Орхоны Улаан цутгалан хүрхрээ',
        'Хустайн нуруунд зэрлэг Тахь адуу ажиглах',
      ],
      en: [
        'Ride 20–30 km/day from White Lake (Khishig camp) past Khorgo volcano',
        '8th–9th century Turkic inscriptions, Kharkhorin & Erdene Zuu Monastery',
        'Trek on horseback to Shankh, Tovkhon Khiid & Orkhon Waterfall',
        'Spot wild Takhi (Przewalski) horses in Khustai National Park',
      ],
    },
    itinerary: [
      { dayLabel: { mn: '1-р өдөр', en: 'Day 1' }, title: { mn: 'Улаанбаатар хот', en: 'Arrive in Ulaanbaatar' }, description: { mn: 'Үндэсний түүхийн музей, Гандан хийд үзнэ. Буудал.', en: 'City sightseeing with National History Museum and Gandan monastery. Hotel.' } },
      { dayLabel: { mn: '2-р өдөр', en: 'Day 2' }, title: { mn: 'Цагаан нуурын «Хишиг» морин бааз', en: 'Drive to Horse camp “Khishig” at White Lake' }, description: { mn: 'Тариатад хүрч адуучидтай уулзан морь унах заавар авна.', en: 'Meet wranglers at White Lake, Tariat soum, and learn Mongolian riding etiquette.' } },
      { dayLabel: { mn: '3-р өдөр', en: 'Day 3' }, title: { mn: 'Хоргын тогоо ба Түрэгийн дурсгал', en: 'Horse trek towards Khorgo volcano' }, description: { mn: 'VIII–IX зууны Түрэгийн хаант улсын бичээст хөшөөг үзэж майханд хононо.', en: 'Trek toward Khorgo volcano; see VIII–IX century Turkic inscriptions. Tented camp.' } },
      { dayLabel: { mn: '4-р өдөр', en: 'Day 4' }, title: { mn: 'Орхоны хөндий ба Хархорум', en: 'Trek through Orkhon valley to Kharkhorin' }, description: { mn: 'XIII зууны нийслэл Хархорум болон Эрдэнэ Зуу хийдтэй танилцана.', en: 'Arrive in ancient capital Kharkhorin and visit XVI-century Erdene Zuu monastery.' } },
      { dayLabel: { mn: '5–9-р өдөр', en: 'Days 5–9' }, title: { mn: 'Шанх, Төвхөн хийд ба Орхоны хүрхрээ', en: 'Ride to Shankh, Tovkhon Khiid & Orkhon waterfall' }, description: { mn: 'Урд зүгт мориор аялж уулын хийдүүдийг үзээд Орхоны хүрхрээнд хүрнэ.', en: 'Horseback trek south visiting Shankh and Tovkhon temples, ending at Orkhon waterfall.' } },
      { dayLabel: { mn: '10–11-р өдөр', en: 'Days 10–11' }, title: { mn: 'Хужирт ба Хустайн БЦГ (Тахь)', en: 'Drive via Khujirt to Khustai National Park' }, description: { mn: 'Хужиртад хоноод Хустайн нуруунд зэрлэг Тахь адуу харна.', en: 'Overnight near Khujirt, then watch wild Takhi (Przewalski) horses in Khustai Park.' } },
      { dayLabel: { mn: '12-р өдөр', en: 'Day 12' }, title: { mn: 'Улаанбаатарт буцах ба тоглолт', en: 'Drive back to Ulaanbaatar' }, description: { mn: 'Богд хааны ордон музей болон оройн үндэсний дуу бүжгийн тоглолт.', en: 'Visit Bogd Khan Winter Palace Museum and evening National folk performance.' } },
      { dayLabel: { mn: '13-р өдөр', en: 'Day 13' }, title: { mn: 'Нисэх буудал хүргэх', en: 'Transfer to Airport' }, description: { mn: 'Улаанбаатараас буцна.', en: 'Depart from Ulaanbaatar.' } },
    ],
    included: {
      mn: ['Буудал/гэр бааз/майхан, хөтөч орчуулагч, бүрэн хоол, 4x4 тээвэр, БЦГ/музейн хураамж, морь, кемпийн хэрэгсэл'],
      en: ['Hotel, ger camp & tent stays, guide/interpreter, full board meals, 4x4 transport, National Park & museum fees, local guide, horses & camping equipment'],
    },
    notIncluded: {
      mn: ['Олон улсын нислэг, хувийн хэрэгсэл, нэмэлт үйлчилгээ, ганцаарчилсан өрөө, ундаа, унтлагын хүүдий, даатгал'],
      en: ['International airfare, personal equipments, optional activities, excess baggage, single supplement, alcohol, sleeping bag & travel insurance'],
    },
  },
  {
    number: 15,
    id: 'orkhon-horse-riding-experience',
    slug: 'orkhon-horse-riding-experience',
    webPage: 'https://www.explorealtai.com/tours/orkhon-horse-riding-experience',
    oldPage: 'https://www.explorealtai.com/detailnews/11100008',
    category: 'horse',
    categoryLabel: {
      mn: 'Морин аялал',
      en: 'Horse Trails',
    },
    title: {
      mn: 'Орхоны Хөндийн Морин Аялал',
      en: 'Orkhon Horse Riding Experience',
    },
    subtitle: {
      mn: 'Өгий нуур, Хорго, Хархорум, Төвхөн хийд, Орхоны хүрхрээ ба Хустай (13 хоног)',
      en: 'Ogii Lake to Khorgo, Kharkhorin, Orkhon Waterfall & Khustai (13 days)',
    },
    region: {
      mn: 'Өгий нуур · Орхоны хөндий',
      en: 'Ogii Lake · Orkhon Valley',
    },
    keyFacts: {
      days: 13,
      durationLabel: { mn: '13 хоног', en: '13 days' },
      priceUsd: null,
      priceLabel: { mn: 'Хүсэлтээр', en: 'On request' },
      season: { mn: 'Хүсэлтээр', en: 'On request' },
      departures2027: { mn: 'Хүсэлтээр', en: 'On request' },
      groupSize: { mn: 'Хүсэлтээр', en: 'On request' },
      grade: { mn: 'Өдөрт 20–30 км морь унах', en: '20–30 km riding/day' },
    },
    pace: 'active',
    imageUrl: IMG_ORKHON,
    imageAlt: {
      mn: 'Орхоны хөндийн морин жим ба Өгий нуурын эрэг',
      en: 'Horse riding across legendary Orkhon Valley from Ogii Lake',
    },
    summary: {
      mn: 'Түүхт Орхоны хөндий ба Өгий нуураас эхлэн зааг хязгааргүй тал, ойт уулаар эрх дураараа давхих 13 хоногийн морин аялал.',
      en: 'Horse riding in Legendary Orkhon valley — from Ogii Lake across boundless pasturelands and mountain ranges.',
    },
    overview: {
      mn: [
        'Говь хээрээс эхлээд ойт уулын зам хүртэл морь унагчдад зориулсан бүхий л нөхцөл энд бий. Орхоны хөндийн Өгий нуурын эрэг дэх баазаас хөдөлж Хорго галт уул, Хархорум, Эрдэнэ Зуу, Шанх, Төвхөн хийд, Орхоны хүрхрээ ба Хустайн БЦГ-аар аялна.',
      ],
      en: [
        'Beginning at “Ogii” base camp on the shore of Ogii Lake in the Orkhon Valley, experience diverse riding terrains from open pastureland to forested hills (20–30 km/day) passing Khorgo volcano, Kharkhorin, Erdene Zuu, Shankh & Tovkhon temples, Orkhon Waterfall, and Khustai National Park.',
      ],
    },
    highlights: {
      mn: [
        'Өгий нуурын баазаас эхлэх өдөрт 20–30 км морин аялал',
        'Хорго галт уул ба Түрэгийн бичээст хөшөө',
        'Хархорум, Эрдэнэ Зуу, Шанх ба Төвхөн хийд, Орхоны хүрхрээ',
        'Хустайн БЦГ-т зэрлэг Тахь адуу ба Богд хааны ордон музей',
      ],
      en: [
        'Start from Ogii Lake base camp riding 20–30 km daily',
        'Khorgo volcano & VIII–IX century Turkic monuments',
        'Kharkhorin, Erdene Zuu, Shankh, Tovkhon Khiid & Orkhon waterfall',
        'Khustai wild Takhi horses & Bogd Khan Winter Palace Museum',
      ],
    },
    itinerary: [
      { dayLabel: { mn: '1-р өдөр', en: 'Day 1' }, title: { mn: 'Улаанбаатарт ирэх', en: 'Arrive in Ulaanbaatar' }, description: { mn: 'Үндэсний түүхийн музей, Гандан хийд. Зочид буудал.', en: 'National History Museum and Gandan monastery tour. Hotel.' } },
      { dayLabel: { mn: '2-р өдөр', en: 'Day 2' }, title: { mn: 'Орхоны хөндий — Өгий нуурын бааз', en: 'Drive to “Ogii” camp at Ogii Lake' }, description: { mn: 'Өгий нуурын эрэгт хүрч адуучидтай уулзан морин аялалдаа бэлтгэнэ.', en: 'Meet wranglers at Ogii Lake camp and prepare for riding days.' } },
      { dayLabel: { mn: '3-р өдөр', en: 'Day 3' }, title: { mn: 'Хорго галт уул руу мориор явах', en: 'Horse trek towards Khorgo volcano' }, description: { mn: 'Түрэгийн эртний бичээс бүхий хөшөөг үзэж майханд хононо.', en: 'See ancient Turkic inscriptions along the Orkhon valley.' } },
      { dayLabel: { mn: '4-р өдөр', en: 'Day 4' }, title: { mn: 'Хархорум ба Эрдэнэ Зуу хийд', en: 'Arrive in Kharkhorin & Erdene Zuu' }, description: { mn: 'Торгоны замын түүхт нийслэл ба XVI зууны хийдийг үзнэ.', en: 'Explore the 13th-century Silk Road capital and Erdene Zuu monastery.' } },
      { dayLabel: { mn: '5–9-р өдөр', en: 'Days 5–9' }, title: { mn: 'Шанх, Төвхөн хийд ба Орхоны хүрхрээ', en: 'Ride to Shankh, Tovkhon & Orkhon waterfall' }, description: { mn: 'Урд зүгт мориор аялж Орхоны хүрхрээгээр морин хэсгийг өндөрлөнө.', en: 'Visit Shankh and Tovkhon temples and arrive at Orkhon waterfall.' } },
      { dayLabel: { mn: '10–11-р өдөр', en: 'Days 10–11' }, title: { mn: 'Хужирт ба Хустайн Тахь адуу', en: 'Drive via Khujirt to Khustai Park' }, description: { mn: 'Хужирт орчим хонож Хустайд Тахь зэрлэг адууг үзнэ.', en: 'Overnight tent near Khujirt, then watch Takhi wild horses in Khustai.' } },
      { dayLabel: { mn: '12-р өдөр', en: 'Day 12' }, title: { mn: 'Улаанбаатарт буцах', en: 'Drive back to Ulaanbaatar' }, description: { mn: 'Богд хааны ордон музей болон оройн үндэсний урлагийн тоглолт.', en: 'Bogd Khan Winter Palace Museum and evening folk performance.' } },
      { dayLabel: { mn: '13-р өдөр', en: 'Day 13' }, title: { mn: 'Нисэх буудал хүргэх', en: 'Transfer to Airport' }, description: { mn: 'Улаанбаатараас буцна.', en: 'Depart from Ulaanbaatar.' } },
    ],
    included: {
      mn: ['Буудал/гэр бааз/майхан, хөтөч орчуулагч, бүрэн хоол, 4x4 тээвэр, БЦГ/музейн хураамж, морь, кемпийн хэрэгсэл'],
      en: ['Hotel, ger camp & tent stays, guide/interpreter, full board meals, 4x4 transport, National Park & museum fees, local guide, horses & camping equipment'],
    },
    notIncluded: {
      mn: ['Олон улсын нислэг, хувийн хэрэгсэл, нэмэлт үйлчилгээ, ганцаарчилсан өрөө, ундаа, унтлагын хүүдий, даатгал'],
      en: ['International airfare, personal equipments, optional activities, excess baggage, single supplement, alcohol, sleeping bag & travel insurance'],
    },
  },
];
