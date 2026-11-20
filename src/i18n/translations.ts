import type { ExpeditionCategory, Language } from '../types/travel';

export const CATEGORY_ITEMS: {
  id: ExpeditionCategory;
  label: { mn: string; en: string };
}[] = [
  { id: 'all', label: { mn: 'Бүгд (20)', en: 'All Tours (20)' } },
  {
    id: 'trekking',
    label: { mn: 'Уул ба Алхалт', en: 'Trekking & Mountaineering' },
  },
  {
    id: 'eagle',
    label: { mn: 'Бүргэдийн ан & Өвөл', en: 'Eagle Hunting & Winter' },
  },
  {
    id: 'river',
    label: { mn: 'Голын аялал', en: 'River Trips' },
  },
  {
    id: 'horse',
    label: { mn: 'Морин аялал', en: 'Horse Trails' },
  },
  {
    id: 'culture',
    label: { mn: 'Соёлын аялал', en: 'Cultural Tours' },
  },
  {
    id: 'discovery',
    label: { mn: 'Танин мэдэхүй', en: 'Discovery Tours' },
  },
  {
    id: 'wildlife',
    label: { mn: 'Зэрлэг амьтад', en: 'Wildlife Safari' },
  },
];

export const UI_COPY: Record<
  Language,
  {
    metaTitle: string;
    brand: string;
    nav: {
      tours: string;
      howItWorks: string;
      finder: string;
      contact: string;
      bookCta: string;
      openMenu: string;
      closeMenu: string;
      menuLabel: string;
      mobileMenuLabel: string;
      languageLabel: string;
    };
    hero: {
      eyebrow: string;
      headline: string;
      subheadline: string;
      ctaPrimary: string;
      ctaSecondary: string;
      galleryLabel: string;
      slides: {
        id: string;
        label: string;
        location: string;
        caption: string;
        imageUrl: string;
        imageAlt: string;
      }[];
      metrics: { value: string; label: string }[];
    };
    toursSection: {
      eyebrow: string;
      heading: string;
      showingPrefix: string;
      showingMid: string;
      showingSuffix: string;
      filterTablistLabel: string;
      searchLabel: string;
      searchPlaceholder: string;
      sortLabel: string;
      sortOptions: {
        featured: string;
        'duration-asc': string;
        'duration-desc': string;
        'price-asc': string;
      };
      savedButton: string;
      emptyTitle: string;
      emptySaved: string;
      emptySearch: string;
      resetFilters: string;
      saveAriaAdd: string;
      saveAriaRemove: string;
      priceFromLabel: string;
      priceOnRequestLabel: string;
      detailsButton: string;
      onRequestShort: string;
      daysUnit: string;
    };
    modal: {
      closeAria: string;
      tabOverview: string;
      tabItinerary: string;
      tabIncluded: string;
      keyFactsTitle: string;
      factDuration: string;
      factPrice: string;
      factSeason: string;
      factDepartures2027: string;
      factGroupSize: string;
      factGrade: string;
      overviewTitle: string;
      highlightsTitle: string;
      itineraryTitle: string;
      daySelectorLabel: string;
      onRequestItineraryTitle: string;
      includedTitle: string;
      notIncludedTitle: string;
      estimatorTitle: string;
      groupDiscountActive: string;
      travelersLabel: string;
      tierLabel: string;
      tierStandard: string;
      tierVip: string;
      addonsLabel: string;
      perPersonSuffix: string;
      savingsPrefix: string;
      savingsSuffix: string;
      onRequestEstimateNote: string;
      totalEstimateLabel: string;
      bookButton: string;
      officialPageLabel: string;
      minusTravelerAria: string;
      plusTravelerAria: string;
    };
    methodology: {
      eyebrow: string;
      heading: string;
      intro: string;
      imageCaptionEyebrow: string;
      imageCaptionTitle: string;
    };
    recommender: {
      eyebrow: string;
      heading: string;
      intro: string;
      step1: string;
      step2: string;
      step3: string;
      anyInterest: string;
      durations: { id: 'short' | 'medium' | 'long'; label: string }[];
      paces: { id: 'relaxed' | 'balanced' | 'active'; label: string }[];
      topMatch: string;
      secondMatch: string;
      viewProgram: string;
      testimonialsEyebrow: string;
      testimonialsHeading: string;
    };
    booking: {
      eyebrow: string;
      heading: string;
      intro: string;
      officeTitle: string;
      officeValue: string;
      phoneTitle: string;
      phoneValues: string;
      emailTitle: string;
      emailValue: string;
      webTitle: string;
      webValue: string;
      confirmTitle: string;
      confirmSubtitlePrefix: string;
      confirmSubtitleSuffix: string;
      refCode: string;
      bookerName: string;
      chosenTour: string;
      dateAndGroup: string;
      estimatedBudget: string;
      newRequestBtn: string;
      formFullName: string;
      formFullNamePlaceholder: string;
      formPhone: string;
      formPhonePlaceholder: string;
      formEmail: string;
      formEmailPlaceholder: string;
      formTour: string;
      formTravelers: string;
      formDate: string;
      formTier: string;
      tierStandardOpt: string;
      tierVipOpt: string;
      formNotes: string;
      formNotesPlaceholder: string;
      preliminaryTotal: string;
      priceOnRequestNote: string;
      submitBtn: string;
      personUnit: string;
    };
    footer: {
      tagline: string;
      navLabel: string;
      copyright: string;
      locationLine: string;
    };
  }
> = {
  mn: {
    metaTitle: 'Explore Altai — Монгол Алтай ба Орон Нутгийн Аяллууд',
    brand: 'Explore Altai',
    nav: {
      tours: 'Аяллууд (20)',
      howItWorks: 'Хөтөлбөр',
      finder: 'Тохируулагч',
      contact: 'Захиалга',
      bookCta: 'Захиалга өгөх',
      openMenu: 'Цэс нээх',
      closeMenu: 'Цэс хаах',
      menuLabel: 'Үндсэн цэс',
      mobileMenuLabel: 'Гар утасны цэс',
      languageLabel: 'Хэл солих',
    },
    hero: {
      eyebrow: 'Explore the Great Altai Tours and Expeditions · www.explorealtai.com',
      headline: 'Монгол Алтай болон нууцлаг хязгаарын 20 онцгой аялал',
      subheadline:
        'Хүйтэн, Цамбагарав, Мөнххайрханы оргилоос Казак бүргэдчдийн өвлийн ан, Булган ба Шишгэдийн рафтинг, Орхон-Хангайн морин жим хүртэл бүх маршрутыг таны сонирхол, хурдад тохируулан зохион байгуулна.',
      ctaPrimary: 'Бүх 20 аяллыг үзэх',
      ctaSecondary: 'Аялал тохируулах',
      galleryLabel: 'Онцлох зургийн цомог',
      slides: [
        {
          id: 'altai',
          label: '01 · Алтай',
          location: 'Баян-Өлгий · Хүйтэн оргил 4,374 м',
          caption: 'Classic Altai Trekking ба Таван Богд — 14 хоног',
          imageUrl: '/src/assets/images/hero_mongolia_expedition_1795175547348.jpg',
          imageAlt: 'Алтай Таван Богдын мөнх цаст оргилууд ба хөндийн морин экспедиц',
        },
        {
          id: 'eagle',
          label: '02 · Бүргэдчид',
          location: 'Баяннуур, Дэлүүн · Баян-Өлгий',
          caption: 'Казак бүргэдчид ба Алтан бүргэдийн баяр — 7–10 хоног',
          imageUrl: '/src/assets/images/dest_orkhon_steppe_1795175546419.jpg',
          imageAlt: 'Баруун Монголын уулын хөндий дэх нүүдэлчин айл болон гэр бааз',
        },
        {
          id: 'rivers',
          label: '03 · Гол нуур',
          location: 'Хөвсгөл · Хангай · Булган гол',
          caption: 'Рафтинг, каяк ба Баруун хойд нутгийн аялал',
          imageUrl: '/src/assets/images/dest_khuvsgul_taiga_1795175547240.jpg',
          imageAlt: 'Хөвсгөл ба хойд нутгийн тунгалаг ус, тайгын уулс',
        },
      ],
      metrics: [
        { value: '20', label: 'Албан ёсны маршрут, 7 ангилал' },
        { value: '4,374 м', label: 'Хүйтэн оргил хүртэлх авиралт' },
        { value: '100%', label: 'Таны сонирхлоор уян хатан төлөвлөлт' },
        { value: '2026–2027', label: 'Хувийн болон бүлгийн захиалга' },
      ],
    },
    toursSection: {
      eyebrow: 'Explore Altai — Бүрэн каталог',
      heading: 'Монгол орны 20 аяллын хөтөлбөр',
      showingPrefix: 'Нийт',
      showingMid: 'аяллаас одоо',
      showingSuffix: 'чиглэл харагдаж байна. Карт дээр дарж өдөр бүрийн хөтөлбөрийг үзнэ үү.',
      filterTablistLabel: 'Аяллын төрлөөр шүүх',
      searchLabel: 'Нэр, газар, ангиллаар хайх',
      searchPlaceholder: 'Хүйтэн, бүргэд, Орхон, каяк...',
      sortLabel: 'Эрэмбэлэх',
      sortOptions: {
        featured: 'Үндсэн дараалал (1–20)',
        'duration-asc': 'Хоног: Богиноос урт',
        'duration-desc': 'Хоног: Уртаас богино',
        'price-asc': 'Үнэтэй ба хүсэлтээр',
      },
      savedButton: 'Хадгалсан',
      emptyTitle: 'Таны хайлтад тохирох аялал олдсонгүй',
      emptySaved: 'Одоогоор хадгалсан аялал алга эсвэл сонгосон шүүлтүүрт тохирох чиглэл байхгүй байна.',
      emptySearch: 'Хайлтын үг болон ангиллын шүүлтүүрээ өөрчлөн дахин шалгана уу.',
      resetFilters: 'Шүүлтүүр цэвэрлэх',
      saveAriaAdd: 'Хадгалах',
      saveAriaRemove: 'Хадгалснаас хасах',
      priceFromLabel: 'Эхлэх үнэ (1 хүн)',
      priceOnRequestLabel: 'Үнэ',
      detailsButton: 'Дэлгэрэнгүй',
      onRequestShort: 'Хүсэлтээр',
      daysUnit: 'хоног',
    },
    modal: {
      closeAria: 'Аяллын цонх хаах',
      tabOverview: 'Тойм & Онцлог',
      tabItinerary: 'Өдрийн хөтөлбөр',
      tabIncluded: 'Үнэд багтсан & Тооцоо',
      keyFactsTitle: 'Үндсэн мэдээлэл',
      factDuration: 'Үргэлжлэх хугацаа',
      factPrice: 'Үнэ (1 хүн)',
      factSeason: 'Тохиромжтой улирал',
      factDepartures2027: '2027 оны гаралт',
      factGroupSize: 'Бүлгийн хэмжээ',
      factGrade: 'Хүндрэлийн зэрэг',
      overviewTitle: 'Аяллын дэлгэрэнгүй танилцуулга',
      highlightsTitle: 'Гол онцлох зүйлс',
      itineraryTitle: 'Өдөр бүрийн аяллын хөтөлбөр',
      daySelectorLabel: 'Өдөр сонгох',
      onRequestItineraryTitle: 'Хувь хүнд тохируулсан хөтөлбөр',
      includedTitle: 'Аяллын үнэд багтсан зүйлс',
      notIncludedTitle: 'Үнэд багтаагүй зүйлс',
      estimatorTitle: 'Төсөв ба Захиалгын тохиргоо',
      groupDiscountActive: 'Бүлгийн хөнгөлөлт',
      travelersLabel: 'Аялагчдын тоо (4+ хүн 5%, 8+ хүн 10% хямдралтай)',
      tierLabel: 'Ангилал (VIP: +35% хувийн үйлчилгээ)',
      tierStandard: 'Стандарт',
      tierVip: 'Хувийн VIP',
      addonsLabel: 'Нэмэлт сонголтууд (1 хүнд ногдох)',
      perPersonSuffix: '1 хүнд',
      savingsPrefix: 'Бүлгийн хөнгөлөлтөөр',
      savingsSuffix: 'хэмнэж байна',
      onRequestEstimateNote: 'Суурь үнэ аялагчдын тоо болон улирлаас хамааран хүсэлтээр тооцогдоно. Нэмэлт сонголт:',
      totalEstimateLabel: 'Урьдчилсан дүн',
      bookButton: 'Энэ аяллыг захиалах',
      officialPageLabel: 'Албан ёсны хуудас',
      minusTravelerAria: 'Аялагчийн тоог хасах',
      plusTravelerAria: 'Аялагчийн тоог нэмэх',
    },
    methodology: {
      eyebrow: 'Explore Altai арга барил',
      heading: 'Маршрут бүрийг таны хурдад тохируулан бүтээнэ',
      intro:
        'Алтайн мөсөн гол, өвлийн бүргэдийн ангаас эхлээд Хангайн рафтинг, Орхоны морин жим хүртэл олон үндэстний малчин айл, мэргэшсэн хөтөч, найдвартай 4x4 тээврийг нэг дор холбодог.',
      imageCaptionEyebrow: 'Баруун Монгол ба Төв халхын хязгаар',
      imageCaptionTitle: 'Казак, Тува, Урианхай, Захчин айлуудын зочломтгой өв соёл',
    },
    recommender: {
      eyebrow: 'Аяллын тохируулагч',
      heading: 'Өөрт тохирох чиглэлээ 10 секундэд олоорой',
      intro:
        'Сонирхож буй төрөл, хугацаа болон хэмнэлээ сонгомогц 20 хөтөлбөрөөс танд хамгийн их нийцэх 2 маршрутыг шууд санал болгоно.',
      step1: '1. Аяллын төрөл',
      step2: '2. Хугацааны сонголт',
      step3: '3. Аяллын хэмнэл',
      anyInterest: 'Бүх чиглэл',
      durations: [
        { id: 'short', label: '10 хүртэл хоног' },
        { id: 'medium', label: '11–14 хоног' },
        { id: 'long', label: '15+ хоног' },
      ],
      paces: [
        { id: 'relaxed', label: 'Тайван' },
        { id: 'balanced', label: 'Тэнцвэртэй' },
        { id: 'active', label: 'Идэвхтэй' },
      ],
      topMatch: 'Хамгийн өндөр тохирол',
      secondMatch: 'Хоёрдогч санал',
      viewProgram: 'Хөтөлбөр үзэх',
      testimonialsEyebrow: 'Аялагчдын бодит түүх',
      testimonialsHeading: 'Бидэнтэй аялсан багуудын сэтгэгдэл',
    },
    booking: {
      eyebrow: 'Захиалга ба зөвлөгөө',
      heading: 'Аяллын хөтөлбөрөө захиалж эсвэл үнийн санал аваарай',
      intro:
        'Аливаа аяллын маршрут, өдөр бүрийн зай, соёлын зочлол, буудал баазыг танай багийн хуваарьт бүрэн нийцүүлэн шинэчилж болно. Хүсэлт илгээмэгц манай баг шууд холбогдоно.',
      officeTitle: 'Байршил & Чиглэл',
      officeValue: 'Улаанбаатар хот · Баян-Өлгий аймаг (Өлгий хот)',
      phoneTitle: 'Шууд холбогдох утас',
      phoneValues: '+976 9906 3539 · +976 8842 8899',
      emailTitle: 'Имэйл хаяг',
      emailValue: 'jagaa3539@gmail.com',
      webTitle: 'Вэб сайт',
      webValue: 'www.explorealtai.com',
      confirmTitle: 'Аяллын хүсэлт амжилттай бүртгэгдлээ',
      confirmSubtitlePrefix: 'Таны хүсэлтийг',
      confirmSubtitleSuffix: 'хаяг руу илгээж баталгаажуулахад бэлэн боллоо. Бид jagaa3539@gmail.com-оос удахгүй хариу илгээнэ.',
      refCode: 'Хүсэлтийн дугаар',
      bookerName: 'Захиалагч',
      chosenTour: 'Сонгосон маршрут',
      dateAndGroup: 'Хугацаа ба хүний тоо',
      estimatedBudget: 'Урьдчилсан дүн / Төлөв',
      newRequestBtn: 'Өөр аяллын хүсэлт илгээх',
      formFullName: 'Овог нэр',
      formFullNamePlaceholder: 'Ж.нь: Бат-Эрдэнэ Дорж',
      formPhone: 'Утасны дугаар',
      formPhonePlaceholder: '+976 99063539',
      formEmail: 'Имэйл хаяг',
      formEmailPlaceholder: 'name@company.mn',
      formTour: 'Сонгох аялал (20 маршрут)',
      formTravelers: 'Хүний тоо',
      formDate: 'Гарах боломжит огноо',
      formTier: 'Ангилал',
      tierStandardOpt: 'Стандарт бүлэг',
      tierVipOpt: 'Хувийн VIP (Custom)',
      formNotes: 'Тусгай хүсэлт, өөрчлөх маршрут эсвэл хоолны шаардлага',
      formNotesPlaceholder: 'Ж.нь: 2027 оны 7 сард явах хүсэлтэй, бүргэдчин айлд 1 хоног нэмэх...',
      preliminaryTotal: 'Урьдчилсан дүн:',
      priceOnRequestNote: 'Үнэ ба нарийн хуваарь: Хүсэлтээр (On request)',
      submitBtn: 'Захиалгын хүсэлт илгээх',
      personUnit: 'хүн',
    },
    footer: {
      tagline:
        'Explore the Great Altai Tours and Expeditions — Баруун Монгол, Алтай Таван Богд болон нийт Монгол орныг хамарсан тусгай аяллууд.',
      navLabel: 'Доод хэсгийн цэс',
      copyright: '© 2026 Explore Altai Tours & Expeditions. Бүх эрх хуулиар хамгаалагдсан.',
      locationLine: 'jagaa3539@gmail.com · +976 9906 3539 · www.explorealtai.com',
    },
  },
  en: {
    metaTitle: 'Explore Altai — Great Altai Tours and Expeditions',
    brand: 'Explore Altai',
    nav: {
      tours: 'Tours (20)',
      howItWorks: 'Approach',
      finder: 'Trip Finder',
      contact: 'Book Now',
      bookCta: 'Inquire Now',
      openMenu: 'Open menu',
      closeMenu: 'Close menu',
      menuLabel: 'Primary navigation',
      mobileMenuLabel: 'Mobile navigation',
      languageLabel: 'Switch language',
    },
    hero: {
      eyebrow: 'Explore the Great Altai Tours and Expeditions · www.explorealtai.com',
      headline: '20 authentic expeditions across the Great Altai and wild Mongolia',
      subheadline:
        'From glaciated 4,374 m Khuiten summits and winter Kazakh eagle hunting to Class II–V whitewater rivers, horse trails, and wildlife safaris — every itinerary is customizable to your pace and dates.',
      ctaPrimary: 'Browse All 20 Tours',
      ctaSecondary: 'Find Your Tour',
      galleryLabel: 'Featured expedition gallery',
      slides: [
        {
          id: 'altai',
          label: '01 · Altai',
          location: 'Bayan-Ulgii · Khuiten Peak 4,374 m',
          caption: 'Classic Altai Trekking & Tavan Bogd — 14 Days',
          imageUrl: '/src/assets/images/hero_mongolia_expedition_1795175547348.jpg',
          imageAlt: 'Snow-capped Altai Tavan Bogd peaks and valley horse expedition',
        },
        {
          id: 'eagle',
          label: '02 · Eagles',
          location: 'Bayannuur & Deluun · Bayan-Ulgii',
          caption: 'Kazakh Eagle Hunters & Golden Eagle Festival — 7–10 Days',
          imageUrl: '/src/assets/images/dest_orkhon_steppe_1795175546419.jpg',
          imageAlt: 'Nomadic ger camp in a scenic western Mongolian river valley',
        },
        {
          id: 'rivers',
          label: '03 · Rivers',
          location: 'Khovsgol · Khangai · Bulgan River',
          caption: 'Whitewater Kayaking, Rafting & North-West Discovery',
          imageUrl: '/src/assets/images/dest_khuvsgul_taiga_1795175547240.jpg',
          imageAlt: 'Clear waters of northern Mongolia lake and alpine taiga mountains',
        },
      ],
      metrics: [
        { value: '20', label: 'Complete itineraries across 7 categories' },
        { value: '4,374 m', label: 'Khuiten Peak — highest point in Mongolia' },
        { value: '100%', label: 'Customizable routes, dates & pace' },
        { value: '2026–2027', label: 'Private & small-group departures' },
      ],
    },
    toursSection: {
      eyebrow: 'Explore Altai — Complete Tour Catalog',
      heading: 'All 20 Mongolia Tours & Expeditions',
      showingPrefix: 'Showing',
      showingMid: 'of',
      showingSuffix: 'curated journeys. Tap any tour card for full day-by-day plans, key facts, and inclusions.',
      filterTablistLabel: 'Filter tours by category',
      searchLabel: 'Search tours by region, title, or activity',
      searchPlaceholder: 'Search Khuiten, eagle, kayak, Orkhon...',
      sortLabel: 'Sort tours',
      sortOptions: {
        featured: 'Catalog order (1–20)',
        'duration-asc': 'Duration: Shortest first',
        'duration-desc': 'Duration: Longest first',
        'price-asc': 'Listed price & On request',
      },
      savedButton: 'Saved',
      emptyTitle: 'No tours match your current filters',
      emptySaved: 'You have no saved tours yet, or none match the selected category/search.',
      emptySearch: 'Try adjusting your search keywords or switching category filters.',
      resetFilters: 'Reset filters',
      saveAriaAdd: 'Save tour',
      saveAriaRemove: 'Remove from saved',
      priceFromLabel: 'Price (per person)',
      priceOnRequestLabel: 'Price',
      detailsButton: 'View Details',
      onRequestShort: 'On request',
      daysUnit: 'days',
    },
    modal: {
      closeAria: 'Close tour details',
      tabOverview: 'Overview & Highlights',
      tabItinerary: 'Day by Day',
      tabIncluded: 'Included & Inquiry',
      keyFactsTitle: 'Key Facts',
      factDuration: 'Duration',
      factPrice: 'Price',
      factSeason: 'Season',
      factDepartures2027: '2027 departures',
      factGroupSize: 'Group size',
      factGrade: 'Grade',
      overviewTitle: 'Expedition Overview',
      highlightsTitle: 'Highlights',
      itineraryTitle: 'Day-by-Day Itinerary',
      daySelectorLabel: 'Select day',
      onRequestItineraryTitle: 'Custom Day-by-Day Planning',
      includedTitle: 'Included',
      notIncludedTitle: 'Not Included',
      estimatorTitle: 'Trip Estimator & Custom Request',
      groupDiscountActive: 'Group discount active',
      travelersLabel: 'Travelers (4+ save 5%, 8+ save 10%)',
      tierLabel: 'Service tier (VIP: +35% private support)',
      tierStandard: 'Standard',
      tierVip: 'Private VIP',
      addonsLabel: 'Optional Add-ons (per person)',
      perPersonSuffix: 'per person',
      savingsPrefix: 'Saving',
      savingsSuffix: 'with group discount',
      onRequestEstimateNote: 'Base price is tailored on request based on dates and group size. Optional add-ons:',
      totalEstimateLabel: 'Estimated total',
      bookButton: 'Request This Tour',
      officialPageLabel: 'Tour page',
      minusTravelerAria: 'Decrease travelers',
      plusTravelerAria: 'Increase travelers',
    },
    methodology: {
      eyebrow: 'How Explore Altai Operates',
      heading: 'Every expedition tailored around culture, terrain, and safety',
      intro:
        'From remote Altai base camps with pack horses and camels to local Kazakh, Uriankhai, Tuvan, Zakhchin, and Khoton hosts, our local guides handle domestic flights, 4x4 vehicles, permits, and field cooking.',
      imageCaptionEyebrow: 'Western & Central Mongolia',
      imageCaptionTitle: 'Living nomadic traditions paired with dependable expedition logistics',
    },
    recommender: {
      eyebrow: 'Interactive Trip Finder',
      heading: 'Find your best-fit Mongolia route in 10 seconds',
      intro:
        'Select your preferred activity style, trip length, and pace to see the top two matching itineraries from all 20 tours.',
      step1: '1. Tour Focus',
      step2: '2. Duration',
      step3: '3. Travel Pace',
      anyInterest: 'All Categories',
      durations: [
        { id: 'short', label: 'Up to 10 days' },
        { id: 'medium', label: '11–14 days' },
        { id: 'long', label: '15+ days' },
      ],
      paces: [
        { id: 'relaxed', label: 'Relaxed' },
        { id: 'balanced', label: 'Balanced' },
        { id: 'active', label: 'Active' },
      ],
      topMatch: 'Best Match',
      secondMatch: 'Alternative Match',
      viewProgram: 'View Itinerary',
      testimonialsEyebrow: 'Field Stories',
      testimonialsHeading: 'Experiences from past Explore Altai travelers',
    },
    booking: {
      eyebrow: 'Inquiries & Custom Quotes',
      heading: 'Customize any of our 20 routes or request 2026–2027 dates',
      intro:
        'All itineraries — routes, daily distances, cultural visits, lodging style, and pace — can be customized to your fitness level and schedule. Send your request and our team will reply directly.',
      officeTitle: 'Base Locations',
      officeValue: 'Ulaanbaatar & Olgii town, Bayan-Ulgii Province',
      phoneTitle: 'Direct Phone / WhatsApp',
      phoneValues: '+976 9906 3539 · +976 8842 8899',
      emailTitle: 'Email',
      emailValue: 'jagaa3539@gmail.com',
      webTitle: 'Website',
      webValue: 'www.explorealtai.com',
      confirmTitle: 'Your tour inquiry has been recorded',
      confirmSubtitlePrefix: 'A copy of your custom request for',
      confirmSubtitleSuffix: 'is ready. Our team at jagaa3539@gmail.com will contact you shortly.',
      refCode: 'Reference',
      bookerName: 'Traveler',
      chosenTour: 'Selected Tour',
      dateAndGroup: 'Date & Group Size',
      estimatedBudget: 'Price / Estimate',
      newRequestBtn: 'Send Another Inquiry',
      formFullName: 'Full Name',
      formFullNamePlaceholder: 'e.g., Elena Becker',
      formPhone: 'Phone Number',
      formPhonePlaceholder: '+976 99063539',
      formEmail: 'Email Address',
      formEmailPlaceholder: 'you@domain.com',
      formTour: 'Select Tour (20 routes)',
      formTravelers: 'Travelers',
      formDate: 'Preferred Departure Date',
      formTier: 'Service Tier',
      tierStandardOpt: 'Standard Group',
      tierVipOpt: 'Private / Custom VIP',
      formNotes: 'Custom preferences, 2027 dates, or dietary requirements',
      formNotesPlaceholder: 'e.g., Interested in June 2027, extra rest day at Khoton Lake...',
      preliminaryTotal: 'Preliminary total:',
      priceOnRequestNote: 'Pricing & custom quote: On request',
      submitBtn: 'Send Tour Inquiry',
      personUnit: 'travelers',
    },
    footer: {
      tagline:
        'Explore the Great Altai Tours and Expeditions — trekking, mountaineering, eagle hunting, river trips, horse trails, cultural, discovery & wildlife tours across Mongolia.',
      navLabel: 'Footer navigation',
      copyright: '© 2026 Explore Altai Tours and Expeditions. All rights reserved.',
      locationLine: 'jagaa3539@gmail.com · +976 9906 3539 · www.explorealtai.com',
    },
  },
};
