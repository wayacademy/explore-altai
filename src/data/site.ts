import type { FaqItem, Festival, HeroSlide, L, TeamMember, Testimonial } from '../types/travel';

export const COMPANY = {
  name: 'Explore Altai',
  legalName: '«Explore the Great Altai» Tours and Expeditions',
  founded: 2010,
  phones: ['+976 9906-3539', '+976 8842-8899'],
  email: 'jagaa3539@gmail.com',
  companyEmail: 'info@explorealtai.com',
  facebook: 'facebook.com/explorealtai',
  address: { mn: 'Ш/Х-171, Өлгий хот, Баян-Өлгий аймаг', en: 'P.O. Box 171, Ölgii, Bayan-Ölgii province, Mongolia' } as L,
  awards: [
    { mn: 'Баян-Өлгийн шилдэг тур оператор · 2019', en: 'Best tour operator in Bayan-Ölgii · 2019' },
    { mn: 'Оны шилдэг бүсийн хөтөч · 2022 (Жагаа)', en: 'Regional Tour Guide of the Year · 2022 (Jagaa)' },
  ] as L[],
};

/** Нүүрний видео: хэсэг бүр нэг аяллыг харуулна. */
export const HERO_SLIDES: HeroSlide[] = [
  { id: 'h1', tourId: 'classic-altai', label: { mn: 'Таван Богд', en: 'Tavan Bogd' }, title: { mn: 'Алтайн сонгодог явган аялал', en: 'Classic Altai Trekking' }, meta: { mn: '14 өдөр · Баян-Өлгий', en: '14 days · Bayan-Ölgii' }, poster: 'h1_tavanbogd', video: 'h1_tavanbogd' },
  { id: 'h2', tourId: 'golden-eagle', label: { mn: 'Бүргэд', en: 'Eagles' }, title: { mn: 'Алтан бүргэдийн баяр', en: 'Golden Eagle Festival' }, meta: { mn: '7 өдөр · 9–10-р сар', en: '7 days · Sep–Oct' }, poster: 'h2_eagle', video: 'h2_eagle' },
  { id: 'h3', tourId: 'altai-horse', label: { mn: 'Морь', en: 'Horses' }, title: { mn: 'Алтайн морин аялал', en: 'Altai Horse Riding' }, meta: { mn: '8 өдөр · 6–9-р сар', en: '8 days · Jun–Sep' }, poster: 'h3_horses', video: 'h3_horses' },
  { id: 'h4', tourId: 'tavanbogd-camels', label: { mn: 'Тэмээ', en: 'Camels' }, title: { mn: 'Таван Богд: тэмээ, каяк, гол мөрөн', en: 'Tavan Bogd: camels, kayaks and rivers' }, meta: { mn: '14 өдөр · 6–8-р сар', en: '14 days · Jun–Aug' }, poster: 'h4_camels', video: 'h4_camels' },
  { id: 'h5', tourId: 'deluun', label: { mn: 'Өвөл', en: 'Winter' }, title: { mn: 'Дэлүүний хөндийн өвлийн бүргэдийн ан', en: 'Winter eagle hunting in Deluun' }, meta: { mn: '10 өдөр · 9–3-р сар', en: '10 days · Sep–Mar' }, poster: 'h5_winter', video: 'h5_winter' },
];

/** Ахын бичиж өгсөн Баян-Өлгийн бүргэдийн баярууд. */
export const FESTIVALS: Festival[] = [
  { id: 'altai-nomad', name: 'Алтайн нүүдэлчдийн баяр', nameEn: 'Altai Nomad Festival', when: { mn: '9-р сарын 2 дахь долоо хоногийн амралтын өдрүүд', en: 'Second weekend of September' }, month: 9, place: { mn: 'Алтай сум', en: 'Altai district' } },
  { id: 'sagsai', name: 'Сагсайн бүргэдийн баяр', nameEn: 'Sagsai Eagle Festival', when: { mn: '9-р сарын 17–18', en: '17–18 September' }, month: 9, place: { mn: 'Сагсай сум', en: 'Sagsai district' } },
  { id: 'tolbo', name: 'Толбын бүргэдийн баяр', nameEn: 'Tolbo Eagle Festival', when: { mn: '9-р сарын 21–22', en: '21–22 September' }, month: 9, place: { mn: 'Толбо нуурын эрэг', en: 'Shore of Tolbo lake' } },
  { id: 'altantsugts', name: 'Алтанцөгцийн бүргэдийн баяр', nameEn: 'Altantsugts Eagle Festival', when: { mn: '9-р сарын 4 дэх долоо хоногийн амралтын өдрүүд', en: 'Fourth weekend of September' }, month: 9, place: { mn: 'Алтанцөгц сум', en: 'Altantsögts district' } },
  { id: 'golden-eagle-fest', name: 'Алтан бүргэдийн баяр', nameEn: 'Golden Eagle Festival', when: { mn: '10-р сарын 1 дэх долоо хоногийн амралтын өдрүүд', en: 'First weekend of October' }, month: 10, place: { mn: 'Өлгийн ойролцоох Шар нуур', en: 'Shar Nuur, near Ölgii' }, tourId: 'golden-eagle' },
];

/** Хуучин сайтын «Testimonials» хуудаснаас. Англи нь эх бичвэр, монгол нь орчуулга. */
export const TESTIMONIALS: Testimonial[] = [
  { id: 't1', name: 'Arnd Schmidt', from: { mn: 'Герман', en: 'Germany' }, quote: { mn: 'Морин аялал гайхалтай байлаа. Алтай Таван Богдын байгалийн цогцолборт газар очиж, баг, морьдтойгоо хамт онцгой аялал хийсэн. Казахуудын гэрт тэдэнтэй сайхан цагийг өнгөрөөлөө. Монгол үнэхээр үзэсгэлэнтэй.', en: 'It was fantastic horse riding. We went to the Altai Tavan Bogd national park and had a very special and extraordinary tour with our crew and horses. We had a nice time with them and with the Kazakhs in their ger. Mongolia is beautiful.' } },
  { id: 't2', name: 'Jerore & Aurelia', from: { mn: 'Франц', en: 'France' }, quote: { mn: 'Алтайн хамгийн сайн морьд, үнэ нь ч боломжийн. Энэ компанитай 14 хоног аялсан. Баяраа морин аялалд сайн хөтөч: морь, тэмээтэйгээ нэг өдрийн дотор Потанины мөсөн гол хүртэл хүргэж чадна.', en: 'Best horses of the Altai, price very ok. We spent 14 days with this company. Bayaraa is a good guide for touring with horses. He can bring you to Potanin glacier with horse and camel in one day.' } },
  { id: 't3', name: 'Kira', from: { mn: 'Дани', en: 'Denmark' }, quote: { mn: 'Ирсэн эхний өдрөөс л бүх хүний зочломтгой, найрсаг байдалд баярласан. Газар нутаг нь үзэсгэлэнтэй, хүмүүс нь үргэлж инээмсэглэж тусалдаг. Амьдралынхаа хамгийн сайхан төрсөн өдрийг энд өнгөрөөлөө.', en: 'From the first day we arrived, I have been very happy with everyone’s hospitality and friendliness. The place is beautiful and people are always smiling and helpful. I had the best birthday of my life here, thank you!' } },
  { id: 't4', name: 'Anne-Marie', from: { mn: 'Нидерланд', en: 'The Netherlands' }, quote: { mn: 'Ийм сайхан, сэтгэл хөдөлгөм аялал хийсэнд баярлалаа. Хилээр гарахдаа бид бүгд гунигласан. Монголд өнгөрөөсөн цаг үнэхээр мартагдашгүй.', en: 'I would like to thank you for the very beautiful and impressive trip we made. We all felt very sad when we crossed the border. We all loved the time in Mongolia.' } },
  { id: 't5', name: 'Julianna', from: { mn: 'Их Британи', en: 'United Kingdom' }, quote: { mn: 'Баян-Өлгийд та болон шинэ найзуудтайгаа хамт гайхалтай цагийг өнгөрөөсөн. Аяллыг ийм амжилттай болгосонд маш их баярлалаа. Хэзээ нэгэн цагт заавал эргэж ирнэ.', en: 'We had a great time with you and our new friends in Bayan-Ölgii province, and I would love to return some time. We are very grateful to you for all you did to make the trip such a success.' } },
  { id: 't6', name: 'Matteo Laffi', from: { mn: 'Итали', en: 'Italy' }, quote: { mn: 'Жагаа Баатар бол хамгийн шилдэг хөтөч.', en: 'Jagaa Baatar, the greatest guide.' } },
  { id: 't7', name: 'Oliver Morand', from: { mn: 'Франц, 4 хүний групп', en: 'Group of four, France' }, quote: { mn: 'Энд үнэхээр санал болгож байна: боломжийн үнэ, маш найрсаг хүмүүс, Алтайн уулс. Ялангуяа морь унахыг зөвлөе. Хөтөч нь энэ нутгийн шилдгүүдийн нэг.', en: 'I recommend this place: good price, very friendly people, and the Altai mountains. I especially recommend riding the horses, because the guide is one of the best in this area.' } },
  { id: 't8', name: 'Christine Veberrieter', from: { mn: 'Австри', en: 'Austria' }, quote: { mn: 'Миний таарсан хамгийн шилдэг хөтөчдийн нэг. Надад морь унахыг зааж өгсөн. Морь нь ч их хөөрхөн байсан.', en: 'One of the best guides I ever had. He taught me how to ride a horse. Also a very lovely horse.' } },
];

/** Хуучин сайтын «Meet Our Team» хуудаснаас, зураг нь мөн тэндээс. Бүрэлдэхүүнийг ах шалгаж шинэчилнэ. */
export const TEAM: TeamMember[] = [
  { id: 'jagaa', photo: 'team-jagaa', name: { mn: 'Жагаа', en: 'Jagaa' }, fullName: { mn: 'Б. Жаргалсайхан', en: 'B. Jargalsaikhan' }, role: { mn: 'Хамтран үүсгэн байгуулагч, менежер, хөтөч', en: 'Co-founder, manager, adventure guide' }, bio: { mn: '1999 оноос өндөр уулын явган аялал, уулын авиралт, морин аялал удирдаж байна. Хүйтэн оргилд олон удаа гарсан. 2022 оны бүсийн шилдэг хөтөч. Өлгийд амьдардаг, казах болон бусад ястны соёлыг дотроос нь мэднэ.', en: 'Has led high-altitude treks, climbs and horse expeditions since 1999, with many summits of Khuiten. Regional Tour Guide of the Year 2022. Lives in Ölgii and knows Kazakh and other minority cultures from the inside.' } },
  { id: 'unuruu', photo: 'team-unuruu', name: { mn: 'Өнөрөө', en: 'Unuruu' }, fullName: { mn: 'Б. Өнөржаргал', en: 'B. Unurjargal' }, role: { mn: 'Захирал', en: 'Director' }, bio: { mn: 'Аялал жуулчлалын салбарт 10 гаруй жил ажилласан. Алтайн цаана төрсөн. Англи, турк, казах хэлтэй.', en: 'Over 10 years in the travel industry. Born beyond the Altai Mountains. Speaks English, Turkish and Kazakh.' } },
  { id: 'bulgaa', photo: 'team-bulgaa', name: { mn: 'Булгаа', en: 'Bulgaa' }, fullName: { mn: 'Б. Булганбаяр', en: 'B. Bulganbayar' }, role: { mn: 'Үүсгэн байгуулагч', en: 'Founder' }, bio: { mn: 'Алтайн нүүдэлчин гэр бүлд өссөн. Аялал жуулчлалын менежментээр МУИС-д суралцаж, хөтөч, менежер, тур операторын бүх ажлыг хийсэн.', en: 'Grew up in a nomadic family in the Altai. Studied tourism management at the National University of Mongolia and has worked as a guide, manager and tour operator.' } },
  { id: 'gana', photo: 'team-gana', name: { mn: 'Гана', en: 'Gana' }, fullName: { mn: 'Б. Гантулга', en: 'B. Gantulga' }, role: { mn: 'Орон нутгийн зохицуулагч, хөтөч', en: 'Local coordinator, herd guide' }, bio: { mn: 'Цэнгэл сумын тува. 2006 оноос манай багт. Алтайн экспедицүүдийн туршлага арвин.', en: 'A Tuvan from Tsengel. In our team since 2006, with a long record of Altai expeditions.' } },
  { id: 'puje', photo: 'team-puje', name: { mn: 'Пүжээ', en: 'Puje' }, fullName: { mn: 'А. Пүрэвсүрэн', en: 'A. Purevsuren' }, role: { mn: 'Ерөнхий тогооч', en: 'Head chef' }, bio: { mn: 'Алтайн хээрийн гал тогоонд олон жил ажилласан. Аяллын цэсийг хариуцдаг.', en: 'Many years in field kitchens across the Altai. Plans the menu for every trip.' } },
];

/** Ахын хэлсэн «аялагчдын хамгийн их асуудаг» сэдвүүд дээр суурилсан. */
export const FAQ: FaqItem[] = [
  { id: 'f1', q: { mn: 'Аялалд хамгийн тохиромжтой улирал хэзээ вэ?', en: 'When is the best season to travel?' }, a: { mn: 'Явган болон морин аялал ихэвчлэн 6–9-р сард явагдана. Бүргэдийн баярууд 9-р сарын дундаас 10-р сарын эхэнд болно. Өвлийн бүргэдийн ан 9-р сараас 3-р сар хүртэл боломжтой.', en: 'Treks and horse trips mostly run from June to September. The eagle festivals are held from mid-September to early October. Winter eagle hunting is possible from September to March.' } },
  { id: 'f2', q: { mn: 'Аяллын үнэд юу багтдаг вэ?', en: 'What is included in the price?' }, a: { mn: 'Ихэнх аялалд байр, өдөрт 3 удаагийн хоол, хөтөч, орчуулагч, унаа, тусгай хамгаалалттай газрын хураамж багтдаг. Аялал бүрийн дэлгэрэнгүй хэсэгт «Багтсан / багтаагүй» жагсаалт бий.', en: 'Most tours include accommodation, three meals a day, guide and interpreter, transport and protected area fees. Each tour page has its own included and not included list.' } },
  { id: 'f3', q: { mn: 'Улаанбаатараас Өлгий, Ховд руу нислэг хэр олон байдаг вэ?', en: 'How often are flights from Ulaanbaatar to Ölgii and Khovd?' }, a: null, todo: { mn: 'Дотоодын нислэгийн хуваарийг оруулна', en: 'Domestic flight schedule to be added' } },
  { id: 'f4', q: { mn: 'Хөтөлбөрийг өөрчилж болох уу?', en: 'Can the itinerary be changed?' }, a: { mn: 'Болно. Маршрут, өдрийн алхах зай, соёлын айлчлал, хурдыг таны сонирхол, биеийн бэлтгэл, огноонд тааруулж өөрчилнө.', en: 'Yes. We adjust the route, daily distances, cultural visits and pace to your interests, fitness and dates.' } },
  { id: 'f5', q: { mn: 'Танай баг хэр туршлагатай вэ?', en: 'How experienced is your team?' }, a: { mn: 'Explore Altai 2010 онд байгуулагдсан. Үүсгэн байгуулагч Жагаа 1999 оноос хөтөч хийж байгаа бөгөөд Хүйтэн оргилд олон удаа гарсан. Хөтөч, уяач, тогооч нар маань Алтайд төрж өссөн.', en: 'Explore Altai was founded in 2010. Our co-founder Jagaa has guided since 1999 and has summited Khuiten many times. Our guides, horsemen and cooks were born and raised in the Altai.' } },
  { id: 'f6', q: { mn: 'Яаж захиалах, төлбөр хэрхэн хийх вэ?', en: 'How do I book and pay?' }, a: { mn: 'Нэг хүнд $500 урьдчилгаа төлж суудлаа баталгаажуулна. Үлдэгдлийг аялал эхлэхээс 60 хоногийн өмнө төлнө. Аялал эхлэхэд 60 хоног хүрэхгүй үлдсэн бол бүтэн төлбөрөө төлнө.', en: 'A deposit of $500 per person confirms your place. The balance is due 60 days before the tour starts. If you book less than 60 days before departure, you pay in full.' } },
  { id: 'f7', q: { mn: 'Юу авч явах вэ?', en: 'What should I bring?' }, a: { mn: 'Унтлагын уут (зун −5°C, хавар, намар −15…−20°C, өвөл −40°C хүртэл тэсвэртэй), ус нэвтэрдэггүй уутны бүрээс, өдрийн жижиг цүнх, толгойн гар чийдэн, хувийн эм. Монголын хуулиар бид эм тарааж өгөх эрхгүй тул хувийн эмээ авч яваарай.', en: 'A sleeping bag (rated to −5°C in summer, −15 to −20°C in spring and autumn, down to −40°C in winter), a waterproof bag cover, a small day pack, a head torch and your own medicine. Mongolian law does not allow us to hand out medicine, so please bring what you need.' } },
];

/** Цуцлалтын нөхцөл (Ultimate Khuiten хуудсанд байсныг ах бүх аялалд хэрэглэхээр баталсан). */
export const PAYMENT_TERMS: { when: L; what: L }[] = [
  { when: { mn: 'Захиалахдаа', en: 'When you book' }, what: { mn: 'Нэг хүнд $500 урьдчилгаа', en: '$500 deposit per person' } },
  { when: { mn: 'Аяллаас 60 хоногийн өмнө', en: '60 days before the tour' }, what: { mn: 'Үлдэгдэл төлбөр', en: 'Balance payment' } },
  { when: { mn: '60-аас дээш хоногийн өмнө цуцалбал', en: 'Cancel more than 60 days before' }, what: { mn: '$500 захиргааны хураамж суутгана', en: '$500 admin fee is kept' } },
  { when: { mn: '59–31 хоногийн өмнө цуцалбал', en: 'Cancel 59–31 days before' }, what: { mn: 'Аяллын төлбөрийн 50%-ийг буцаана', en: '50% of the tour price is refunded' } },
  { when: { mn: '30 хоног дотор цуцалбал', en: 'Cancel within 30 days' }, what: { mn: 'Төлбөр буцаахгүй', en: 'No refund' } },
];

export const DEPOSIT_USD = 500;
