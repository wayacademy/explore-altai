import type { Expedition, Testimonial } from '../types/travel';
import { TOURS_PART_1 } from './toursPart1';
import { TOURS_PART_2 } from './toursPart2';
import { TOURS_PART_3 } from './toursPart3';

export const EXPEDITIONS: Expedition[] = [
  ...TOURS_PART_1,
  ...TOURS_PART_2,
  ...TOURS_PART_3,
];

export const METHODOLOGY_PILLARS: {
  number: string;
  title: { mn: string; en: string };
  description: { mn: string; en: string };
}[] = [
  {
    number: '01',
    title: {
      mn: '100% таны сонирхолд тохирсон маршрут',
      en: 'Fully Customizable Routes, Pace & Dates',
    },
    description: {
      mn: 'Бүх аяллын өдөр тутмын зай, соёлын зочлол, буудал бааз, амралтын өдрийг таны биеийн бэлтгэл болон 2026–2027 оны хуваарьт нийцүүлэн өөрчилнө.',
      en: 'Every itinerary — trekking distances, cultural visits, lodging style, and schedule — can be tailored to your fitness level, interests, and 2026–2027 dates.',
    },
  },
  {
    number: '02',
    title: {
      mn: 'Орон нутгийн уугуул хөтөч, адуучин, тэмээчид',
      en: 'Local Altai Guides, Horsemen & Camel Handlers',
    },
    description: {
      mn: 'Казак, Урианхай, Тува, Захчин, Хотон орон нутгийн хөтөч нар уулын аюулгүй байдал, мөр гаргалт болон нутгийн түүхийг хамтад нь хангана.',
      en: 'Native Kazakh, Uriankhai, Tuvan, Zakhchin, and Mongolian mountain guides, wranglers, and field cooks share genuine local lore and terrain expertise.',
    },
  },
  {
    number: '03',
    title: {
      mn: 'Зочид буудал, Эко гэр бааз ба Айлын гэр',
      en: 'Hotels, Eco Ger Camps, Hunter Houses & Tents',
    },
    description: {
      mn: 'Улаанбаатар ба Өлгий хотод тухтай зочид буудал, хөдөөд гэр бааз, экспедицийн майхан болон өвлийн бүргэдчин айлын дулаан сууцыг хослуулна.',
      en: 'Balanced logistics blending twin/double city hotels, riverside eco-ger camps, high-mountain tented camps, and warm Kazakh family stays in winter.',
    },
  },
  {
    number: '04',
    title: {
      mn: 'Service Voucher ба Ил тод багцын нөхцөл',
      en: 'Service Voucher & Clear Included / Not-Included Scope',
    },
    description: {
      mn: 'Захиалгын хөтөлбөр бүр баталгаат үйлчилгээний эрх (Service Voucher) болж 4x4 тээвэр, дотоодын нислэг, БЦГ-ын тасалбар болон хоол хүнсийг тодорхой тусгана.',
      en: 'Each confirmed itinerary acts as your Service Voucher clearly stating 4x4 transport, domestic flights, park permits, horses/camels, and full-board meals.',
    },
  },
];

export const TESTIMONIALS: Testimonial[] = [
  {
    id: 't1',
    name: { mn: 'Маркус & Ханна Вебер', en: 'Markus & Hannah Weber' },
    role: { mn: 'Уулын аялагчид · Мюнхен', en: 'Alpine Trekkers · Munich' },
    expeditionTitle: {
      mn: 'Сонгодог Алтай Треккинг (14 хоног)',
      en: 'Classic Altai Trekking (14 days)',
    },
    quote: {
      mn: 'Потанины мөсөн голоос Хотон, Хурган нуур хүртэл морин ачаатай алхсан өдрүүд маш жигд төлөвлөлттэй байлаа. Цагаан голын эрэгт нүүдэлчин айлд уусан аарц, цай хэзээ ч мартагдахгүй.',
      en: 'Every day from Potanin Glacier to Khoton and Khurgan Lakes was seamlessly paced with horses carrying our packs. Sharing tea by Tsagaan Gol with nomadic hosts felt completely unhurried.',
    },
    outcome: {
      mn: '14 хоног · Хувийн хурдад тохируулсан хөтөлбөр',
      en: '14 days · Custom pace & extra rest day at Khoton Lake',
    },
  },
  {
    id: 't2',
    name: { mn: 'Давид Лин', en: 'David Lin' },
    role: { mn: 'Баримтат гэрэл зурагчин · Сингапур', en: 'Documentary Photographer · Singapore' },
    expeditionTitle: {
      mn: 'Алтан Бүргэдийн Баяр ба Морин Аялал (7 хоног)',
      en: 'Golden Eagle Festival on Horseback (7 days)',
    },
    quote: {
      mn: 'Баярын талбай руу орохын өмнөх 2 өдөр бүргэдчидтэй хамт уулаар морь унаж, бешбармак зооглож, хаднаас шүүр авах тэмцээнийг хамгийн ойроос буулгасан нь жинхэнэ онцгой туршлага байлаа.',
      en: 'Riding out with the eagle hunters two days before the festival and staying in their carpeted ger gave us authentic context well before the opening parade and cliff-dive trials.',
    },
    outcome: {
      mn: '7 хоног · Өвөл-намрын Казак гэр бүлийн буудал',
      en: '7 days · Hosted directly by Bayan-Ulgii hunter families',
    },
  },
  {
    id: 't3',
    name: { mn: 'Энхтуяа & Ганзориг', en: 'Enkhtuya & Ganzorig' },
    role: { mn: 'Аяллын хамт олон · Улаанбаатар', en: 'Group Travelers · Ulaanbaatar' },
    expeditionTitle: {
      mn: 'Хангайн Морин Аялал (13 хоног)',
      en: 'Khangai Horse Riding Experience (13 days)',
    },
    quote: {
      mn: 'Тэрхийн Цагаан нуураас Хорго, Хархорум, Төвхөн хийд, Орхоны хүрхрээ хүртэл өдөрт 25 км орчим давхихад адуучид болон хээрийн тогоочийн халамж үнэхээр сэтгэл хангалуун байсан.',
      en: 'From White Lake camp to Khorgo, Kharkhorin, Tovkhon Temple and Orkhon Waterfall, our wranglers matched each rider to the right Mongolian horse every morning.',
    },
    outcome: {
      mn: '13 хоног · Орхон ба Хустайн Тахь ажиглалт багтсан',
      en: '13 days · Included Takhi wild horse viewing in Khustai',
    },
  },
];
