import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export const Data = [
  {
    id: 1402937,
    name: "Артур, ты король",
    alternativeName: "Arthur the King",
    enName: null,
    names: [
      {
        name: "Артур, ты король",
        language: "RU",
        type: "Russian title on kinopoisk",
      },
      {
        name: "Arthur the King",
        language: null,
        type: "Original title on kinopoisk",
      },
    ],
    type: "movie",
    typeNumber: 1,
    year: 2024,
    description:
      "Это было последнее соревнование капитана по приключенческим гонкам Майкла Лайта, он был полон решимости ничему не позволить встать у него на пути. Собрав первоклассную команду, он не мог и представить, что в 700-километровом забеге у них появится неожиданный попутчик — пес по кличке Артур, встреча с которым изменит не только исход гонки, но и их жизнь.",
    shortDescription:
      "Во время экстремальной гонки Майкл находит друга — бездомного пса. Приключенческий фильм с Марком Уолбергом",
    status: null,
    rating: {
      kp: 8.348,
      imdb: 7,
      filmCritics: 5.9,
      russianFilmCritics: 0,
      await: null,
    },
    votes: {
      kp: 333988,
      imdb: 20472,
      filmCritics: 87,
      russianFilmCritics: 1,
      await: 0,
    },
    movieLength: 107,
    totalSeriesLength: null,
    seriesLength: null,
    ratingMpaa: "pg13",
    ageRating: 12,
    poster: {
      url: "https://image.openmoviedb.com/kinopoisk-images/10809116/02f5c9fa-8ed2-455b-9861-1a01252d73f4/orig",
      previewUrl:
        "https://image.openmoviedb.com/kinopoisk-images/10809116/02f5c9fa-8ed2-455b-9861-1a01252d73f4/x1000",
    },
    backdrop: {
      url: "https://image.openmoviedb.com/kinopoisk-ott-images/223007/2a0000018eaa2f034fc72de007fe2ac7678d/orig",
      previewUrl:
        "https://image.openmoviedb.com/kinopoisk-ott-images/223007/2a0000018eaa2f034fc72de007fe2ac7678d/x1000",
    },
    genres: [
      {
        name: "драма",
      },
      {
        name: "приключения",
      },
      {
        name: "спорт",
      },
    ],
    countries: [
      {
        name: "США",
      },
      {
        name: "Канада",
      },
    ],
    top10: null,
    top250: 82,
    isSeries: false,
    ticketsOnSale: false,
  },
  {
    id: 5105855,
    name: "Одна жизнь",
    alternativeName: "One Life",
    enName: null,
    names: [
      {
        name: "Одна жизнь",
        language: "RU",
        type: "Russian title on kinopoisk",
      },
      {
        name: "One Life",
        language: null,
        type: "Original title on kinopoisk",
      },
    ],
    type: "movie",
    typeNumber: 1,
    year: 2023,
    description:
      "Скромного и непубличного джентльмена Николаса Уинтона приглашают на телевизионное ток-шоу, где он наконец-то узнает всю правду о событиях Второй мировой войны, когда он пытался спасти сотни детей от гибели в концлагере. Одна жизнь может изменить судьбы сотен людей — как в прошлом, так и в настоящем.",
    shortDescription:
      "Молодой филантроп придумывает, как спасти сотни детей от концлагеря. Проникновенная драма с Энтони Хопкинсом",
    status: null,
    rating: {
      kp: 8.56,
      imdb: 7.5,
      filmCritics: 7.3,
      russianFilmCritics: 0,
      await: null,
    },
    votes: {
      kp: 121837,
      imdb: 22451,
      filmCritics: 142,
      russianFilmCritics: 2,
      await: 0,
    },
    movieLength: 109,
    totalSeriesLength: null,
    seriesLength: null,
    ratingMpaa: "pg",
    ageRating: 18,
    poster: {
      url: "https://image.openmoviedb.com/kinopoisk-images/9784475/4564801f-fe39-4493-b042-98038357d242/orig",
      previewUrl:
        "https://image.openmoviedb.com/kinopoisk-images/9784475/4564801f-fe39-4493-b042-98038357d242/x1000",
    },
    backdrop: {
      url: "https://image.openmoviedb.com/kinopoisk-ott-images/236744/2a0000018e9a4990ede987ce5ae3b643a2f9/orig",
      previewUrl:
        "https://image.openmoviedb.com/kinopoisk-ott-images/236744/2a0000018e9a4990ede987ce5ae3b643a2f9/x1000",
    },
    genres: [
      {
        name: "драма",
      },
      {
        name: "биография",
      },
      {
        name: "история",
      },
    ],
    countries: [
      {
        name: "Великобритания",
      },
    ],
    top10: null,
    top250: 54,
    isSeries: false,
    ticketsOnSale: false,
  },
  {
    id: 5275429,
    name: "Лёд 3",
    alternativeName: null,
    enName: null,
    names: [
      {
        name: "Лёд 3",
        language: "RU",
        type: "Russian title on kinopoisk",
      },
    ],
    type: "movie",
    typeNumber: 1,
    year: 2024,
    description:
      "Надя выросла и стала фигуристкой. Она мечтает о «Кубке льда», как когда-то мечтала ее мама. Горин возражает против спортивной карьеры дочери — он оберегает ее от любых трудностей. На тайной тренировке Надя знакомится с молодым и дерзким хоккеистом из Москвы, и между ними вспыхивает первая любовь. Отец не верит в искренность чувств юноши и разлучает пару.",
    shortDescription:
      "Надя идет наперекор отцу ради любви и большого спорта. Продолжение любимой истории с Александром Петровым",
    status: null,
    rating: {
      kp: 8.211,
      imdb: 5.9,
      filmCritics: 0,
      russianFilmCritics: 100,
      await: null,
    },
    votes: {
      kp: 378526,
      imdb: 234,
      filmCritics: 0,
      russianFilmCritics: 3,
      await: 0,
    },
    movieLength: 134,
    totalSeriesLength: null,
    seriesLength: null,
    ratingMpaa: null,
    ageRating: 6,
    poster: {
      url: "https://image.openmoviedb.com/kinopoisk-images/10671298/5d4e5068-4902-4dd3-a318-c13272de7134/orig",
      previewUrl:
        "https://image.openmoviedb.com/kinopoisk-images/10671298/5d4e5068-4902-4dd3-a318-c13272de7134/x1000",
    },
    backdrop: {
      url: "https://image.openmoviedb.com/kinopoisk-ott-images/1652588/2a0000018eadd38f83d1618858084599c213/orig",
      previewUrl:
        "https://image.openmoviedb.com/kinopoisk-ott-images/1652588/2a0000018eadd38f83d1618858084599c213/x1000",
    },
    genres: [
      {
        name: "мелодрама",
      },
      {
        name: "спорт",
      },
      {
        name: "мюзикл",
      },
    ],
    countries: [
      {
        name: "Россия",
      },
    ],
    top10: null,
    top250: 226,
    isSeries: false,
    ticketsOnSale: false,
  },
  {
    id: 1108571,
    name: "Приключения Реми",
    alternativeName: "Rémi sans famille",
    enName: null,
    names: [
      {
        name: "Приключения Реми",
        language: "RU",
        type: "Russian title on kinopoisk",
      },
      {
        name: "Rémi sans famille",
        language: null,
        type: "Original title on kinopoisk",
      },
    ],
    type: "movie",
    typeNumber: 1,
    year: 2018,
    description:
      "Удивительное путешествие по Франции маленького Реми в компании уличного музыканта, обезьянки и цирковой собаки.  Вместе им предстоит пережить неожиданные встречи, приключения и испытания, чтобы раскрыть тайну происхождения мальчика.",
    shortDescription:
      "Мальчик Реми и уличный артист Виталис бродят по Франции XIX века. Красивая авантюрная мелодрама для всей семьи",
    status: null,
    rating: {
      kp: 8.276,
      imdb: 7.1,
      filmCritics: 0,
      russianFilmCritics: 0,
      await: null,
    },
    votes: {
      kp: 84458,
      imdb: 3023,
      filmCritics: 0,
      russianFilmCritics: 1,
      await: 0,
    },
    movieLength: 105,
    totalSeriesLength: null,
    seriesLength: null,
    ratingMpaa: null,
    ageRating: 6,
    poster: {
      url: "https://image.openmoviedb.com/kinopoisk-images/1599028/3bb8ef0f-0230-4eeb-acb0-e2b44329de37/orig",
      previewUrl:
        "https://image.openmoviedb.com/kinopoisk-images/1599028/3bb8ef0f-0230-4eeb-acb0-e2b44329de37/x1000",
    },
    backdrop: {
      url: "https://image.openmoviedb.com/kinopoisk-ott-images/1652588/2a0000016d1fad5a7fa59ff75917c900760d/orig",
      previewUrl:
        "https://image.openmoviedb.com/kinopoisk-ott-images/1652588/2a0000016d1fad5a7fa59ff75917c900760d/x1000",
    },
    genres: [
      {
        name: "мелодрама",
      },
      {
        name: "приключения",
      },
      {
        name: "семейный",
      },
    ],
    countries: [
      {
        name: "Франция",
      },
      {
        name: "Бельгия",
      },
    ],
    top10: null,
    top250: 231,
    isSeries: false,
    ticketsOnSale: false,
  },
  {
    id: 7466,
    name: "Бронкская история",
    alternativeName: "A Bronx Tale",
    enName: null,
    names: [
      {
        name: "Бронкская история",
        language: "RU",
        type: "Russian title on kinopoisk",
      },
      {
        name: "A Bronx Tale",
        language: null,
        type: "Original title on kinopoisk",
      },
    ],
    type: "movie",
    typeNumber: 1,
    year: 1993,
    description:
      "Король бронкской мафии Сонни убил человека. Просто так. Из-за места на парковке. Среди бела дня вытащил пистолет и несколько раз выстрелил. Полиция узнала, что свидетелем преступления был 9-летний Калоджеро, и допросила мальчика. Но Калоджеро не выдал Сонни. Так началась их дружба. И когда Калоджеро вырос, он не просто стал свидетелем других кровавых деяний своего босса, но и сам оказался на краю пропасти.",
    shortDescription:
      "Юный свидетель убийства не выдает преступника. Режиссерский дебют Роберта де Ниро о взрослении на злых улицах",
    status: null,
    rating: {
      kp: 8.043,
      imdb: 7.8,
      filmCritics: 7.5,
      russianFilmCritics: 0,
      await: null,
    },
    votes: {
      kp: 83109,
      imdb: 163388,
      filmCritics: 36,
      russianFilmCritics: 0,
      await: 0,
    },
    movieLength: 121,
    totalSeriesLength: null,
    seriesLength: null,
    ratingMpaa: "r",
    ageRating: 18,
    poster: {
      url: "https://image.openmoviedb.com/kinopoisk-images/4483445/a97b1c64-8726-4ec8-be0e-87a12ef717b8/orig",
      previewUrl:
        "https://image.openmoviedb.com/kinopoisk-images/4483445/a97b1c64-8726-4ec8-be0e-87a12ef717b8/x1000",
    },
    backdrop: {
      url: "https://image.openmoviedb.com/kinopoisk-ott-images/239697/2a0000016c20737facd44a56f7b55e93e3ca/orig",
      previewUrl:
        "https://image.openmoviedb.com/kinopoisk-ott-images/239697/2a0000016c20737facd44a56f7b55e93e3ca/x1000",
    },
    genres: [
      {
        name: "драма",
      },
      {
        name: "криминал",
      },
    ],
    countries: [
      {
        name: "США",
      },
    ],
    top10: null,
    top250: 186,
    isSeries: false,
    ticketsOnSale: false,
  },
  {
    id: 463694,
    name: "Землетрясение",
    alternativeName: "Tangshan da dizhen",
    enName: null,
    names: [
      {
        name: "Землетрясение",
        language: "RU",
        type: "Russian title on kinopoisk",
      },
      {
        name: "Tangshan da dizhen",
        language: null,
        type: "Original title on kinopoisk",
      },
    ],
    type: "movie",
    typeNumber: 1,
    year: 2010,
    description:
      "28 июля 1976 года в Таншане провинции Хэбэй произошло землетрясение, которое длилось меньше чем полминуты, но унесло несколько сотен тысяч жизней. Эти секунды поставили мать перед ужасным выбором — спасти сына или дочь, что обернулось грузом вины на десятилетия.",
    shortDescription:
      "В момент природной катастрофы матери приходится делать тяжелый выбор. Драма Фэн Сяогана по реальным событиям",
    status: null,
    rating: {
      kp: 8.005,
      imdb: 7.5,
      filmCritics: 6.3,
      russianFilmCritics: 0,
      await: null,
    },
    votes: {
      kp: 102743,
      imdb: 9782,
      filmCritics: 11,
      russianFilmCritics: 0,
      await: 0,
    },
    movieLength: 139,
    totalSeriesLength: null,
    seriesLength: null,
    ratingMpaa: null,
    ageRating: 18,
    poster: {
      url: "https://image.openmoviedb.com/kinopoisk-images/4774061/42571afc-b3f9-4f95-915d-00acd154e6b4/orig",
      previewUrl:
        "https://image.openmoviedb.com/kinopoisk-images/4774061/42571afc-b3f9-4f95-915d-00acd154e6b4/x1000",
    },
    backdrop: {
      url: "https://image.openmoviedb.com/kinopoisk-ott-images/223007/2a00000184613341904276d0e7aec9ead403/orig",
      previewUrl:
        "https://image.openmoviedb.com/kinopoisk-ott-images/223007/2a00000184613341904276d0e7aec9ead403/x1000",
    },
    genres: [
      {
        name: "драма",
      },
      {
        name: "история",
      },
    ],
    countries: [
      {
        name: "Китай",
      },
      {
        name: "Гонконг",
      },
    ],
    top10: null,
    top250: 242,
    isSeries: false,
    ticketsOnSale: false,
  },
  {
    id: 425400,
    name: "Пожары",
    alternativeName: "Incendies",
    enName: null,
    names: [
      {
        name: "Пожары",
        language: "RU",
        type: "Russian title on kinopoisk",
      },
      {
        name: "Incendies",
        language: null,
        type: "Original title on kinopoisk",
      },
    ],
    type: "movie",
    typeNumber: 1,
    year: 2010,
    description:
      "Когда брат и сестра Марван ознакомились с завещанием матери, их удивлению не было предела. Её последней волей было разыскать отца, которого близнецы считали умершим, и брата, о существовании которого они даже не подозревали. Жанна и Симон узнают, что мать тщательно скрывала от них многие обстоятельства своей трагической судьбы.",
    shortDescription:
      "Брат и сестра узнают о страшном прошлом умершей матери. Драма Дени Вильнёва о жертвах ближневосточных войн",
    status: null,
    rating: {
      kp: 7.996,
      imdb: 8.3,
      filmCritics: 7.9,
      russianFilmCritics: 66.6667,
      await: null,
    },
    votes: {
      kp: 98085,
      imdb: 204798,
      filmCritics: 127,
      russianFilmCritics: 3,
      await: 0,
    },
    movieLength: 131,
    totalSeriesLength: null,
    seriesLength: null,
    ratingMpaa: "r",
    ageRating: 18,
    poster: {
      url: "https://image.openmoviedb.com/kinopoisk-images/4303601/40b4b961-07ab-4ce3-892f-63d6bd1fabc6/orig",
      previewUrl:
        "https://image.openmoviedb.com/kinopoisk-images/4303601/40b4b961-07ab-4ce3-892f-63d6bd1fabc6/x1000",
    },
    backdrop: {
      url: "https://image.openmoviedb.com/kinopoisk-ott-images/1534341/2a0000017fff5812f055d71d941aeac64090/orig",
      previewUrl:
        "https://image.openmoviedb.com/kinopoisk-ott-images/1534341/2a0000017fff5812f055d71d941aeac64090/x1000",
    },
    genres: [
      {
        name: "драма",
      },
      {
        name: "детектив",
      },
      {
        name: "военный",
      },
    ],
    countries: [
      {
        name: "Канада",
      },
      {
        name: "Франция",
      },
    ],
    top10: null,
    top250: 110,
    isSeries: false,
    ticketsOnSale: false,
  },
  {
    id: 4384109,
    name: "Белая птица: Новое чудо",
    alternativeName: "White Bird",
    enName: null,
    names: [
      {
        name: "Белая птица: Новое чудо",
        language: "RU",
        type: "Russian title on kinopoisk",
      },
      {
        name: "White Bird",
        language: null,
        type: "Original title on kinopoisk",
      },
    ],
    type: "movie",
    typeNumber: 1,
    year: 2023,
    description:
      "Джулиана Олбанса исключили из школы за жестокое обращение с Огги Пуллманом. К Джулиану приезжает бабушка, которая делится с внуком историей ее юности в оккупированной нацистами Франции. Тогда ее жизнь спасли только доброта и мужество почти незнакомого ей юноши, которого также донимали в школе одноклассники.",
    shortDescription:
      "Юноша-изгой укрывает еврейскую девочку от нацистов. Пронзительная драма с Джиллиан Андерсон",
    status: null,
    rating: {
      kp: 8.423,
      imdb: 7.2,
      filmCritics: 0,
      russianFilmCritics: 0,
      await: null,
    },
    votes: {
      kp: 163661,
      imdb: 1369,
      filmCritics: 0,
      russianFilmCritics: 2,
      await: 0,
    },
    movieLength: 120,
    totalSeriesLength: null,
    seriesLength: null,
    ratingMpaa: null,
    ageRating: 18,
    poster: {
      url: "https://image.openmoviedb.com/kinopoisk-images/10671298/4d35113c-a287-415e-82b6-e16c6e19107e/orig",
      previewUrl:
        "https://image.openmoviedb.com/kinopoisk-images/10671298/4d35113c-a287-415e-82b6-e16c6e19107e/x1000",
    },
    backdrop: {
      url: "https://image.openmoviedb.com/kinopoisk-ott-images/12808873/2a0000018e66a78c72d4408791551d899d3f/orig",
      previewUrl:
        "https://image.openmoviedb.com/kinopoisk-ott-images/12808873/2a0000018e66a78c72d4408791551d899d3f/x1000",
    },
    genres: [
      {
        name: "драма",
      },
      {
        name: "приключения",
      },
      {
        name: "семейный",
      },
      {
        name: "военный",
      },
      {
        name: "биография",
      },
    ],
    countries: [
      {
        name: "США",
      },
    ],
    top10: null,
    top250: 65,
    isSeries: false,
    ticketsOnSale: false,
  },
  {
    id: 610,
    name: "Билли Эллиот",
    alternativeName: "Billy Elliot",
    enName: null,
    names: [
      {
        name: "Билли Эллиот",
        language: "RU",
        type: "Russian title on kinopoisk",
      },
      {
        name: "Billy Elliot",
        language: null,
        type: "Original title on kinopoisk",
      },
    ],
    type: "movie",
    typeNumber: 1,
    year: 2000,
    description:
      "Чем должен увлекаться сын шахтера? Сомнений нет: боксом и только боксом. Но у 11-летнего Билли Эллиота на этот счет было свое мнение — он обожает балет.\n\nОтец и старший брат Тони впадают в ярость, когда узнают, что он променял бокс на «менее мужественный» балет. И только острая на язык миссис Уилкинсон поддерживает Билли в его желании танцевать, и он получает шанс поступить в Королевскую балетную школу.",
    shortDescription:
      "Сын шахтера втайне от отца занимается балетом. Вдохновляющая драма с Джейми Беллом о победе над предрассудками",
    status: null,
    rating: {
      kp: 8.019,
      imdb: 7.7,
      filmCritics: 7.3,
      russianFilmCritics: 0,
      await: null,
    },
    votes: {
      kp: 118775,
      imdb: 144293,
      filmCritics: 119,
      russianFilmCritics: 0,
      await: 0,
    },
    movieLength: 110,
    totalSeriesLength: null,
    seriesLength: null,
    ratingMpaa: "r",
    ageRating: 18,
    poster: {
      url: "https://image.openmoviedb.com/kinopoisk-images/10671298/9d509077-7025-4875-88f0-f9c3e7e4cca7/orig",
      previewUrl:
        "https://image.openmoviedb.com/kinopoisk-images/10671298/9d509077-7025-4875-88f0-f9c3e7e4cca7/x1000",
    },
    backdrop: {
      url: "https://image.openmoviedb.com/kinopoisk-ott-images/2439731/2a0000018ab72e9b8f080969270458511aa8/orig",
      previewUrl:
        "https://image.openmoviedb.com/kinopoisk-ott-images/2439731/2a0000018ab72e9b8f080969270458511aa8/x1000",
    },
    genres: [
      {
        name: "драма",
      },
      {
        name: "музыка",
      },
    ],
    countries: [
      {
        name: "Великобритания",
      },
      {
        name: "Франция",
      },
    ],
    top10: null,
    top250: 121,
    isSeries: false,
    ticketsOnSale: false,
  },
  {
    id: 4395219,
    name: "Мой Хатико",
    alternativeName: "Zhong quan ba gong",
    enName: null,
    names: [
      {
        name: "Мой Хатико",
        language: "RU",
        type: "Russian title on kinopoisk",
      },
      {
        name: "Zhong quan ba gong",
        language: null,
        type: "Original title on kinopoisk",
      },
    ],
    type: "movie",
    typeNumber: 1,
    year: 2023,
    description:
      "Чунцин, начало 2000-х годов. Во время поездки за город с коллегами немолодой университетский преподаватель Чэнь подбирает на дороге грязного и испуганного щенка. Никто не соглашается взять пёсика себе, поэтому мужчине приходится втихаря принести его домой, хотя супруга терпеть не может собак. Пообещав, что найдёт щенку новый дом, Чэнь тем не менее отказывает всем претендентам — так пёс получает кличку Хатико и становится новым членом семьи.",
    shortDescription:
      "Пожилой преподаватель заводит щенка вопреки протестам жены. Безмерно трогательная история верности из Китая",
    status: null,
    rating: {
      kp: 8.558,
      imdb: 7.2,
      filmCritics: 0,
      russianFilmCritics: 0,
      await: null,
    },
    votes: {
      kp: 104477,
      imdb: 754,
      filmCritics: 0,
      russianFilmCritics: 0,
      await: 0,
    },
    movieLength: 125,
    totalSeriesLength: null,
    seriesLength: null,
    ratingMpaa: null,
    ageRating: 18,
    poster: {
      url: "https://image.openmoviedb.com/kinopoisk-images/9784475/50e2559d-c29c-494b-b729-3961352e20bc/orig",
      previewUrl:
        "https://image.openmoviedb.com/kinopoisk-images/9784475/50e2559d-c29c-494b-b729-3961352e20bc/x1000",
    },
    backdrop: {
      url: "https://image.openmoviedb.com/kinopoisk-ott-images/1672343/2a0000018ad5c5adbca612d92d0aaadd0504/orig",
      previewUrl:
        "https://image.openmoviedb.com/kinopoisk-ott-images/1672343/2a0000018ad5c5adbca612d92d0aaadd0504/x1000",
    },
    genres: [
      {
        name: "драма",
      },
    ],
    countries: [
      {
        name: "Китай",
      },
    ],
    top10: null,
    top250: 64,
    isSeries: false,
    ticketsOnSale: false,
  },
  {
    id: 1103852,
    name: "Укрась прощальное утро цветами обещания",
    alternativeName: "Sayonara no asa ni yakusoku no hana o kazaro",
    enName: null,
    names: [
      {
        name: "Укрась прощальное утро цветами обещания",
        language: "RU",
        type: "Russian title on kinopoisk",
      },
      {
        name: "Sayonara no asa ni yakusoku no hana o kazaro",
        language: null,
        type: "Original title on kinopoisk",
      },
    ],
    type: "anime",
    typeNumber: 4,
    year: 2018,
    description:
      "Красавица Макия — из рода бессмертных. На протяжении веков многие армии пытались захватить её народ, чтобы завладеть секретом вечной жизни. И вот теперь, когда город разрушен, девушка прячется в лесу. Здесь она находит потерявшего родителей маленького мальчика Эриала и начинает о нём заботиться.",
    shortDescription:
      "Может ли бессмертная стать матерью чужому ребенку? Фэнтези-аниме — режиссерский дебют сценаристки Мари Окады",
    status: null,
    rating: {
      kp: 8.246,
      imdb: 7.4,
      filmCritics: 7.8,
      russianFilmCritics: 100,
      await: null,
    },
    votes: {
      kp: 144519,
      imdb: 8590,
      filmCritics: 26,
      russianFilmCritics: 4,
      await: 0,
    },
    movieLength: 115,
    totalSeriesLength: null,
    seriesLength: null,
    ratingMpaa: null,
    ageRating: 12,
    poster: {
      url: "https://image.openmoviedb.com/kinopoisk-images/1599028/551571aa-2c50-41b2-9ffb-51878e443054/orig",
      previewUrl:
        "https://image.openmoviedb.com/kinopoisk-images/1599028/551571aa-2c50-41b2-9ffb-51878e443054/x1000",
    },
    backdrop: {
      url: "https://image.openmoviedb.com/kinopoisk-ott-images/224348/2a000001660c28ec0777e0c547fccf7c94f8/orig",
      previewUrl:
        "https://image.openmoviedb.com/kinopoisk-ott-images/224348/2a000001660c28ec0777e0c547fccf7c94f8/x1000",
    },
    genres: [
      {
        name: "аниме",
      },
      {
        name: "мультфильм",
      },
      {
        name: "драма",
      },
      {
        name: "мелодрама",
      },
      {
        name: "приключения",
      },
      {
        name: "фэнтези",
      },
    ],
    countries: [
      {
        name: "Япония",
      },
    ],
    top10: null,
    top250: 145,
    isSeries: false,
    ticketsOnSale: false,
  },
  {
    id: 3707,
    name: "Страсти Христовы",
    alternativeName: "The Passion of the Christ",
    enName: null,
    names: [
      {
        name: "Страсти Христовы",
        language: "RU",
        type: "Russian title on kinopoisk",
      },
      {
        name: "The Passion of the Christ",
        language: null,
        type: "Original title on kinopoisk",
      },
    ],
    type: "movie",
    typeNumber: 1,
    year: 2004,
    description:
      "Попытка детально воссоздать последние двенадцать часов из жизни Иисуса Христа.",
    shortDescription:
      "Последние часы жизни Спасителя на Земле. Бескомпромиссная драма Мэла Гибсона, взорвавшая мировой прокат",
    status: null,
    rating: {
      kp: 7.859,
      imdb: 7.2,
      filmCritics: 6,
      russianFilmCritics: 0,
      await: null,
    },
    votes: {
      kp: 112187,
      imdb: 252354,
      filmCritics: 281,
      russianFilmCritics: 1,
      await: 0,
    },
    movieLength: 127,
    totalSeriesLength: null,
    seriesLength: null,
    ratingMpaa: "r",
    ageRating: 18,
    poster: {
      url: "https://image.openmoviedb.com/kinopoisk-images/10835644/1b7bc6cf-055e-43e3-b321-359e7a6db0f5/orig",
      previewUrl:
        "https://image.openmoviedb.com/kinopoisk-images/10835644/1b7bc6cf-055e-43e3-b321-359e7a6db0f5/x1000",
    },
    backdrop: {
      url: "https://image.openmoviedb.com/kinopoisk-ott-images/1531675/2a0000018d46ecbe8ed4bff5236c50c0078f/orig",
      previewUrl:
        "https://image.openmoviedb.com/kinopoisk-ott-images/1531675/2a0000018d46ecbe8ed4bff5236c50c0078f/x1000",
    },
    genres: [
      {
        name: "драма",
      },
    ],
    countries: [
      {
        name: "США",
      },
    ],
    top10: null,
    top250: 217,
    isSeries: false,
    ticketsOnSale: false,
  },
  {
    id: 45822,
    name: "Вокзал для двоих",
    alternativeName: null,
    enName: null,
    names: [
      {
        name: "Вокзал для двоих",
        language: "RU",
        type: "Russian title on kinopoisk",
      },
    ],
    type: "movie",
    typeNumber: 1,
    year: 1982,
    description:
      "Город Заступинск, где-то между Москвой и Алма-Атой, ближе к Воронежу. Вокзальная буфетчица Вера и пианист Платон Рябинин из Москвы познакомились при весьма непривлекательных обстоятельствах. В результате Вера потеряла жениха с дынями, но нашла любимого, который вскоре должен отбыть в отдаленные места, чтобы нести наказание за несовершенное преступление...",
    shortDescription:
      "Пробивная официантка влюбляется в интеллигентного пианиста. Яркий тандем Олега Басилашвили и Людмилы Гурченко",
    status: null,
    rating: {
      kp: 8.047,
      imdb: 7.8,
      filmCritics: 0,
      russianFilmCritics: 0,
      await: null,
    },
    votes: {
      kp: 126128,
      imdb: 3704,
      filmCritics: 0,
      russianFilmCritics: 0,
      await: 0,
    },
    movieLength: 141,
    totalSeriesLength: null,
    seriesLength: null,
    ratingMpaa: null,
    ageRating: 12,
    poster: {
      url: "https://image.openmoviedb.com/kinopoisk-images/1898899/f2f767fd-3fd1-4319-a95a-902fcd23963d/orig",
      previewUrl:
        "https://image.openmoviedb.com/kinopoisk-images/1898899/f2f767fd-3fd1-4319-a95a-902fcd23963d/x1000",
    },
    backdrop: {
      url: "https://image.openmoviedb.com/kinopoisk-ott-images/1531675/2a00000176868cff776b960986cd76192bba/orig",
      previewUrl:
        "https://image.openmoviedb.com/kinopoisk-ott-images/1531675/2a00000176868cff776b960986cd76192bba/x1000",
    },
    genres: [
      {
        name: "драма",
      },
      {
        name: "мелодрама",
      },
    ],
    countries: [
      {
        name: "СССР",
      },
    ],
    top10: null,
    top250: 232,
    isSeries: false,
    ticketsOnSale: false,
  },
  {
    id: 1228407,
    name: "Крик тишины",
    alternativeName: null,
    enName: null,
    names: [
      {
        name: "Крик тишины",
        language: "RU",
        type: "Russian title on kinopoisk",
      },
    ],
    type: "movie",
    typeNumber: 1,
    year: 2019,
    description:
      "Блокадный Ленинград, февраль 1942 года. Заканчивается самая страшная блокадная зима. Зина Воронова совсем отчаялась. Ее трёхлетний сын Митя ослабел, а карточки на хлеб уже отоварены на два дня вперед. Последняя надежда — эвакуация. Но с маленькими детьми не берут. Тогда женщина идет на чудовищный шаг — эвакуируется, оставив сына одного в промерзшей квартире. Во время налета мальчика спасает девочка-подросток Катя. Девочка выдает Митю за своего брата и обещает себе сделать все, чтобы Митя выжил. Несмотря ни на что.",
    shortDescription:
      "Двое детей пытаются выжить в блокадном Ленинграде. Пронзительная драма о глубине горя и силе любви",
    status: null,
    rating: {
      kp: 8.446,
      imdb: 6.6,
      filmCritics: 0,
      russianFilmCritics: 0,
      await: null,
    },
    votes: {
      kp: 136820,
      imdb: 124,
      filmCritics: 0,
      russianFilmCritics: 0,
      await: 0,
    },
    movieLength: 97,
    totalSeriesLength: null,
    seriesLength: null,
    ratingMpaa: null,
    ageRating: 6,
    poster: {
      url: "https://image.openmoviedb.com/kinopoisk-images/4774061/a3c9705f-e6cc-40d6-821f-ced1b04308f2/orig",
      previewUrl:
        "https://image.openmoviedb.com/kinopoisk-images/4774061/a3c9705f-e6cc-40d6-821f-ced1b04308f2/x1000",
    },
    backdrop: {
      url: "https://image.openmoviedb.com/kinopoisk-ott-images/239697/2a0000016a5007a545f394e0cae67c3da7f1/orig",
      previewUrl:
        "https://image.openmoviedb.com/kinopoisk-ott-images/239697/2a0000016a5007a545f394e0cae67c3da7f1/x1000",
    },
    genres: [
      {
        name: "драма",
      },
      {
        name: "история",
      },
      {
        name: "военный",
      },
    ],
    countries: [
      {
        name: "Россия",
      },
    ],
    top10: null,
    top250: 73,
    isSeries: false,
    ticketsOnSale: false,
  },
  {
    id: 7724,
    name: "Летят журавли",
    alternativeName: null,
    enName: null,
    names: [
      {
        name: "Летят журавли",
        language: "RU",
        type: "Russian title on kinopoisk",
      },
    ],
    type: "movie",
    typeNumber: 1,
    year: 1957,
    description:
      "Рассказ о людях, в чьи судьбы безжалостно вторглась война. Не все смогли с честью вынести это испытание. В центре киноповести - трагическая история двух влюбленных, которых разлучила война.",
    shortDescription:
      "Трагедия войны глазами солдатской невесты. Фильм, победивший в Каннах и изменивший советский кинематограф",
    status: null,
    rating: {
      kp: 8.345,
      imdb: 8.3,
      filmCritics: 8.3,
      russianFilmCritics: 0,
      await: null,
    },
    votes: {
      kp: 140665,
      imdb: 19988,
      filmCritics: 27,
      russianFilmCritics: 1,
      await: 0,
    },
    movieLength: 95,
    totalSeriesLength: null,
    seriesLength: null,
    ratingMpaa: null,
    ageRating: 12,
    poster: {
      url: "https://image.openmoviedb.com/kinopoisk-images/1777765/93397e62-0402-4cf9-9b4a-e462fea91963/orig",
      previewUrl:
        "https://image.openmoviedb.com/kinopoisk-images/1777765/93397e62-0402-4cf9-9b4a-e462fea91963/x1000",
    },
    backdrop: {
      url: "https://image.openmoviedb.com/kinopoisk-ott-images/223007/2a000001616b99441918599a9270da43eaee/orig",
      previewUrl:
        "https://image.openmoviedb.com/kinopoisk-ott-images/223007/2a000001616b99441918599a9270da43eaee/x1000",
    },
    genres: [
      {
        name: "военный",
      },
      {
        name: "мелодрама",
      },
      {
        name: "история",
      },
      {
        name: "драма",
      },
    ],
    countries: [
      {
        name: "СССР",
      },
    ],
    top10: null,
    top250: 237,
    isSeries: false,
    ticketsOnSale: false,
  },
  {
    id: 354,
    name: "Апокалипсис сегодня",
    alternativeName: "Apocalypse Now",
    enName: null,
    names: [
      {
        name: "Апокалипсис сегодня",
        language: "RU",
        type: "Russian title on kinopoisk",
      },
      {
        name: "Apocalypse Now",
        language: null,
        type: "Original title on kinopoisk",
      },
    ],
    type: "movie",
    typeNumber: 1,
    year: 1979,
    description:
      "Во время Вьетнамской войны капитан Уиллард отправляется вверх по реке в Камбоджу со спецзаданием: найти и убить сумасшедшего полковника Курца, создавшего в отдалённом районе нечто вроде собственного культа. По пути капитан становится свидетелем безумия и ужасов войны.",
    shortDescription:
      "Запах напалма, «Полет валькирий» и зловещий полковник Курц. Один из важнейших фильмов в истории",
    status: null,
    rating: {
      kp: 8.145,
      imdb: 8.4,
      filmCritics: 8.9,
      russianFilmCritics: 0,
      await: null,
    },
    votes: {
      kp: 138160,
      imdb: 715154,
      filmCritics: 97,
      russianFilmCritics: 0,
      await: 0,
    },
    movieLength: 194,
    totalSeriesLength: null,
    seriesLength: null,
    ratingMpaa: "r",
    ageRating: 18,
    poster: {
      url: "https://image.openmoviedb.com/kinopoisk-images/10671298/a0d6537e-72ee-47f2-b51f-ef776b1b9cdf/orig",
      previewUrl:
        "https://image.openmoviedb.com/kinopoisk-images/10671298/a0d6537e-72ee-47f2-b51f-ef776b1b9cdf/x1000",
    },
    backdrop: {
      url: "https://image.openmoviedb.com/kinopoisk-ott-images/2419418/2a0000018d8ddbf47b9c268a1a5c5f6f947f/orig",
      previewUrl:
        "https://image.openmoviedb.com/kinopoisk-ott-images/2419418/2a0000018d8ddbf47b9c268a1a5c5f6f947f/x1000",
    },
    genres: [
      {
        name: "военный",
      },
      {
        name: "драма",
      },
      {
        name: "история",
      },
      {
        name: "боевик",
      },
    ],
    countries: [
      {
        name: "США",
      },
    ],
    top10: null,
    top250: 196,
    isSeries: false,
    ticketsOnSale: false,
  },
  {
    id: 7660,
    name: "Холодное лето пятьдесят третьего...",
    alternativeName: null,
    enName: null,
    names: [
      {
        name: "Холодное лето пятьдесят третьего...",
        language: "RU",
        type: "Russian title on kinopoisk",
      },
    ],
    type: "movie",
    typeNumber: 1,
    year: 1987,
    description:
      "1953 год. Двое политических ссыльных вступают в схватку с бандой амнистированных уголовников.",
    shortDescription:
      "Бывшие политзаключенные обороняют деревню от банды. Жестокий истерн, ставший знаковым фильмом перестройки",
    status: null,
    rating: {
      kp: 8.173,
      imdb: 7.8,
      filmCritics: 0,
      russianFilmCritics: 0,
      await: null,
    },
    votes: {
      kp: 138880,
      imdb: 2589,
      filmCritics: 0,
      russianFilmCritics: 0,
      await: 0,
    },
    movieLength: 102,
    totalSeriesLength: null,
    seriesLength: null,
    ratingMpaa: null,
    ageRating: 18,
    poster: {
      url: "https://image.openmoviedb.com/kinopoisk-images/1704946/845206fa-315f-4955-8246-cd2ef3301dce/orig",
      previewUrl:
        "https://image.openmoviedb.com/kinopoisk-images/1704946/845206fa-315f-4955-8246-cd2ef3301dce/x1000",
    },
    backdrop: {
      url: "https://image.openmoviedb.com/kinopoisk-ott-images/239697/2a000001616cec1bb083055dd0f36f5c40f5/orig",
      previewUrl:
        "https://image.openmoviedb.com/kinopoisk-ott-images/239697/2a000001616cec1bb083055dd0f36f5c40f5/x1000",
    },
    genres: [
      {
        name: "драма",
      },
      {
        name: "криминал",
      },
      {
        name: "боевик",
      },
      {
        name: "триллер",
      },
    ],
    countries: [
      {
        name: "СССР",
      },
    ],
    top10: null,
    top250: 198,
    isSeries: false,
    ticketsOnSale: false,
  },
  {
    id: 7640,
    name: "Двухсотлетний человек",
    alternativeName: "Bicentennial Man",
    enName: null,
    names: [
      {
        name: "Двухсотлетний человек",
        language: "RU",
        type: "Russian title on kinopoisk",
      },
      {
        name: "Bicentennial Man",
        language: null,
        type: "Original title on kinopoisk",
      },
    ],
    type: "movie",
    typeNumber: 1,
    year: 1999,
    description:
      "Начало нового тысячелетия; происходит прорыв в глобальных технологиях. Люди уже не заводят дома собак и кошек: они покупают себе роботов. Вот и семья Мартинов приобретает себе необычный подарок: робота нового поколения NDR-114, а в обычной жизни просто Эндрю.\n\nКупленный как прибор, запрограммированный для выполнения домашней работы, Эндрю вдруг начинает испытывать странные ощущения. Он еще не знает, что это называется чувствами.",
    shortDescription:
      "Уникальный домашний робот хочет стать настоящим человеком. Робин Уильямс в экранизации романа Айзека Азимова",
    status: null,
    rating: {
      kp: 8.089,
      imdb: 6.9,
      filmCritics: 4.9,
      russianFilmCritics: 0,
      await: null,
    },
    votes: {
      kp: 219770,
      imdb: 125302,
      filmCritics: 99,
      russianFilmCritics: 1,
      await: 0,
    },
    movieLength: 126,
    totalSeriesLength: null,
    seriesLength: null,
    ratingMpaa: "pg",
    ageRating: 6,
    poster: {
      url: "https://image.openmoviedb.com/kinopoisk-images/1629390/8b171b14-74a3-4880-835b-2b21b8481e9a/orig",
      previewUrl:
        "https://image.openmoviedb.com/kinopoisk-images/1629390/8b171b14-74a3-4880-835b-2b21b8481e9a/x1000",
    },
    backdrop: {
      url: "https://image.openmoviedb.com/kinopoisk-ott-images/200035/2a0000016c90159eef9ea14244cd3832a1fe/orig",
      previewUrl:
        "https://image.openmoviedb.com/kinopoisk-ott-images/200035/2a0000016c90159eef9ea14244cd3832a1fe/x1000",
    },
    genres: [
      {
        name: "фантастика",
      },
      {
        name: "драма",
      },
      {
        name: "мелодрама",
      },
    ],
    countries: [
      {
        name: "Германия",
      },
      {
        name: "США",
      },
    ],
    top10: null,
    top250: 134,
    isSeries: false,
    ticketsOnSale: false,
  },
  {
    id: 77203,
    name: "Покровские ворота",
    alternativeName: null,
    enName: null,
    names: [
      {
        name: "Покровские ворота",
        language: "RU",
        type: "Russian title on kinopoisk",
      },
    ],
    type: "movie",
    typeNumber: 1,
    year: 1982,
    description:
      "Если вы развелись, и ваша бывшая жена снова вышла замуж — это еще не значит, что вы свободны. Если вы пригласили девушку на свидание, и она пришла, это еще не значит, что она будет вашей. Но если при этом ваш сосед по коммуналке — аспирант Костик, то можете быть уверены — все будет хорошо.",
    shortDescription:
      "Любовь и курьезы соседей по коммуналке. Культовая комедия о Москве 50-х, которая разошлась на цитаты",
    status: null,
    rating: {
      kp: 8.26,
      imdb: 8,
      filmCritics: 0,
      russianFilmCritics: 0,
      await: null,
    },
    votes: {
      kp: 179283,
      imdb: 3116,
      filmCritics: 0,
      russianFilmCritics: 0,
      await: 0,
    },
    movieLength: 140,
    totalSeriesLength: null,
    seriesLength: null,
    ratingMpaa: null,
    ageRating: 6,
    poster: {
      url: "https://image.openmoviedb.com/kinopoisk-images/4303601/62aa468b-fada-44c5-b7e6-9748a552f391/orig",
      previewUrl:
        "https://image.openmoviedb.com/kinopoisk-images/4303601/62aa468b-fada-44c5-b7e6-9748a552f391/x1000",
    },
    backdrop: {
      url: "https://image.openmoviedb.com/kinopoisk-ott-images/223007/2a00000167283070504c47df45ba95cc3854/orig",
      previewUrl:
        "https://image.openmoviedb.com/kinopoisk-ott-images/223007/2a00000167283070504c47df45ba95cc3854/x1000",
    },
    genres: [
      {
        name: "мюзикл",
      },
      {
        name: "драма",
      },
      {
        name: "мелодрама",
      },
      {
        name: "комедия",
      },
    ],
    countries: [
      {
        name: "СССР",
      },
    ],
    top10: null,
    top250: 245,
    isSeries: false,
    ticketsOnSale: false,
  },
  {
    id: 77283,
    name: "Тот самый Мюнхгаузен",
    alternativeName: null,
    enName: null,
    names: [
      {
        name: "Тот самый Мюнхгаузен",
        language: "RU",
        type: "Russian title on kinopoisk",
      },
    ],
    type: "movie",
    typeNumber: 1,
    year: 1979,
    description:
      "Комическая фантазия о жизни, любви и смерти знаменитого барона Мюнхгаузена, жившего в XVIII веке и ставшего героем многих веселых книг и преданий, опирается на персонажей и эпизоды знаменитого романа Р. Распе, но по сути является самостоятельным произведением.\n\n«Мыслящий человек просто обязан время от времени поднимать себя за волосы» - похоже, это и удается авторам картины. Барон хочет жениться на любимой им Марте, но церковь отказывается обвенчать их, так как имеется живая жена, «усмирявшая его 20 лет». Уставшая Марта хочет, чтобы барон стал таким, как все, но барон этого не хочет, да и не может.\n\nГерцог разрешит брак только в том случае, если барон письменно подтвердит, что все его истории лживы, а он сам - обыкновенный человек.",
    shortDescription:
      "Общество против чудака и пророка. Одна из лучших ролей Олега Янковского в знаковой трагикомедии Марка Захарова",
    status: null,
    rating: {
      kp: 8.335,
      imdb: 8.3,
      filmCritics: 0,
      russianFilmCritics: 0,
      await: null,
    },
    votes: {
      kp: 153955,
      imdb: 3984,
      filmCritics: 0,
      russianFilmCritics: 0,
      await: 0,
    },
    movieLength: 134,
    totalSeriesLength: null,
    seriesLength: null,
    ratingMpaa: null,
    ageRating: 0,
    poster: {
      url: "https://image.openmoviedb.com/kinopoisk-images/1629390/15c9a24e-8f3b-4a09-9440-5d5c16d0ce7d/orig",
      previewUrl:
        "https://image.openmoviedb.com/kinopoisk-images/1629390/15c9a24e-8f3b-4a09-9440-5d5c16d0ce7d/x1000",
    },
    backdrop: {
      url: "https://image.openmoviedb.com/kinopoisk-ott-images/1672343/2a00000176a5744259161398e7b7ddef4cab/orig",
      previewUrl:
        "https://image.openmoviedb.com/kinopoisk-ott-images/1672343/2a00000176a5744259161398e7b7ddef4cab/x1000",
    },
    genres: [
      {
        name: "фэнтези",
      },
      {
        name: "драма",
      },
      {
        name: "комедия",
      },
    ],
    countries: [
      {
        name: "СССР",
      },
    ],
    top10: null,
    top250: 184,
    isSeries: false,
    ticketsOnSale: false,
  },
  {
    id: 43970,
    name: "Сталкер",
    alternativeName: null,
    enName: null,
    names: [
      {
        name: "Сталкер",
        language: "RU",
        type: "Russian title on kinopoisk",
      },
    ],
    type: "movie",
    typeNumber: 1,
    year: 1979,
    description:
      "В некой запретной Зоне, по слухам, существует комната, где исполняются самые заветные желания. К этой комнате отправляются модный Писатель и авторитетный Профессор — каждый по своим причинам, о которых предпочитают не говорить. А ведет их туда Сталкер — проводник по Зоне — то ли юродивый, то ли апостол новой веры.",
    shortDescription:
      "Мистическое путешествие через Зону к комнате, где исполняются желания. Философский шедевр Андрея Тарковского",
    status: null,
    rating: {
      kp: 8.088,
      imdb: 8.1,
      filmCritics: 8.6,
      russianFilmCritics: 0,
      await: null,
    },
    votes: {
      kp: 162403,
      imdb: 145769,
      filmCritics: 44,
      russianFilmCritics: 1,
      await: 0,
    },
    movieLength: 163,
    totalSeriesLength: null,
    seriesLength: null,
    ratingMpaa: null,
    ageRating: 12,
    poster: {
      url: "https://image.openmoviedb.com/kinopoisk-images/1946459/811f668e-e54d-468c-9279-d45599e35b35/orig",
      previewUrl:
        "https://image.openmoviedb.com/kinopoisk-images/1946459/811f668e-e54d-468c-9279-d45599e35b35/x1000",
    },
    backdrop: {
      url: "https://image.openmoviedb.com/kinopoisk-ott-images/212840/2a00000167ab833483af22e1e613222de830/orig",
      previewUrl:
        "https://image.openmoviedb.com/kinopoisk-ott-images/212840/2a00000167ab833483af22e1e613222de830/x1000",
    },
    genres: [
      {
        name: "фантастика",
      },
      {
        name: "драма",
      },
      {
        name: "детектив",
      },
      {
        name: "приключения",
      },
    ],
    countries: [
      {
        name: "СССР",
      },
    ],
    top10: null,
    top250: 211,
    isSeries: false,
    ticketsOnSale: false,
  },
  {
    id: 41431,
    name: "Война",
    alternativeName: null,
    enName: null,
    names: [
      {
        name: "Война",
        language: "RU",
        type: "Russian title on kinopoisk",
      },
    ],
    type: "movie",
    typeNumber: 1,
    year: 2002,
    description:
      "Аслан Гугаев, командир отряда чеченских боевиков, отпускает троих пленников: двух русских солдат, сержанта Ивана Ермакова и рядового Кулика — потому что они не контрактники, а призывники, и англичанина Джона Бойла — потому что он должен собрать два миллиона фунтов стерлингов и привезти деньги Гугаеву в качестве выкупа за свою невесту Маргарет. Маргарет остается у Аслана. Так же, как и капитан российской армии Медведев...\n\nЗа отведенные ему два месяца Джон не находит нужную сумму и не находит поддержки у британских властей, зато, вернувшись в Россию, находит Ваню Ермакова, живущего в Тобольске. Джон и Ваня опять едут в Чечню. Чтобы освободить английскую девушку Маргарет и русского капитана Медведева...",
    shortDescription:
      "Бывший пленный возвращается в Чечню освободить заложников. Предельно реалистичная драма Алексея Балабанова",
    status: null,
    rating: {
      kp: 8.08,
      imdb: 7.5,
      filmCritics: 0,
      russianFilmCritics: 0,
      await: null,
    },
    votes: {
      kp: 194964,
      imdb: 5459,
      filmCritics: 0,
      russianFilmCritics: 1,
      await: 0,
    },
    movieLength: 120,
    totalSeriesLength: null,
    seriesLength: null,
    ratingMpaa: "r",
    ageRating: 18,
    poster: {
      url: "https://image.openmoviedb.com/kinopoisk-images/1704946/7a06c242-ede9-4c91-a865-6a0f0b9c66eb/orig",
      previewUrl:
        "https://image.openmoviedb.com/kinopoisk-images/1704946/7a06c242-ede9-4c91-a865-6a0f0b9c66eb/x1000",
    },
    backdrop: {
      url: "https://image.openmoviedb.com/kinopoisk-ott-images/224348/2a0000016127208bc51384783b62e3a65637/orig",
      previewUrl:
        "https://image.openmoviedb.com/kinopoisk-ott-images/224348/2a0000016127208bc51384783b62e3a65637/x1000",
    },
    genres: [
      {
        name: "боевик",
      },
      {
        name: "военный",
      },
      {
        name: "история",
      },
      {
        name: "драма",
      },
    ],
    countries: [
      {
        name: "Россия",
      },
    ],
    top10: null,
    top250: 138,
    isSeries: false,
    ticketsOnSale: false,
  },
  {
    id: 1421591,
    name: "Небо",
    alternativeName: null,
    enName: null,
    names: [
      {
        name: "Небо",
        language: "RU",
        type: "Russian title on kinopoisk",
      },
    ],
    type: "movie",
    typeNumber: 1,
    year: 2021,
    description:
      "Подполковник Сошников и капитан Муравьев — два разных характера, две разные судьбы, которым суждено будет сойтись на военной базе Хмеймим. Во время боевого вылета самолет Сошникова был сбит турецким истребителем. Это событие освещали все мировые СМИ, а за ходом спасательной операции следила вся Россия.",
    shortDescription:
      "Двое российских летчиков терпят крушение над Сирией. Напряженная драма с Игорем Петренко по реальным событиям",
    status: null,
    rating: {
      kp: 8.187,
      imdb: 5.9,
      filmCritics: 0,
      russianFilmCritics: 25,
      await: null,
    },
    votes: {
      kp: 211000,
      imdb: 648,
      filmCritics: 0,
      russianFilmCritics: 4,
      await: 0,
    },
    movieLength: 126,
    totalSeriesLength: null,
    seriesLength: null,
    ratingMpaa: null,
    ageRating: 12,
    poster: {
      url: "https://image.openmoviedb.com/kinopoisk-images/10893610/c4433b46-1517-4b27-a991-e73e3b159fa3/orig",
      previewUrl:
        "https://image.openmoviedb.com/kinopoisk-images/10893610/c4433b46-1517-4b27-a991-e73e3b159fa3/x1000",
    },
    backdrop: {
      url: "https://image.openmoviedb.com/kinopoisk-ott-images/2439731/2a0000018db0ceebe132de2f189599c3f032/orig",
      previewUrl:
        "https://image.openmoviedb.com/kinopoisk-ott-images/2439731/2a0000018db0ceebe132de2f189599c3f032/x1000",
    },
    genres: [
      {
        name: "военный",
      },
      {
        name: "драма",
      },
      {
        name: "боевик",
      },
      {
        name: "биография",
      },
    ],
    countries: [
      {
        name: "Россия",
      },
    ],
    top10: null,
    top250: 117,
    isSeries: false,
    ticketsOnSale: false,
  },
  {
    id: 1032308,
    name: "Как прогулять школу с пользой",
    alternativeName: "L'école buissonnière",
    enName: null,
    names: [
      {
        name: "Как прогулять школу с пользой",
        language: "RU",
        type: "Russian title on kinopoisk",
      },
      {
        name: "L'école buissonnière",
        language: null,
        type: "Original title on kinopoisk",
      },
    ],
    type: "movie",
    typeNumber: 1,
    year: 2017,
    description:
      "Вслед за городским мальчиком Полем зрителям предстоит узнать то, чему в школе не учат. А именно — как жить в реальном мире. По крайней мере, если это мир леса. Здесь есть хозяин — мрачный граф, есть власть — добродушный, но строгий лесничий Борель, и есть браконьер Тотош — человек, решивший быть вне закона, да и вообще подозрительный и неприятный тип. \n\nЧью сторону выберет Поль: добропорядочного лесничего Бореля или браконьера Тотоша? А может, юный сорванец и вовсе станет лучшим другом надменному графу?",
    shortDescription:
      "Сирота попадает из приюта в огромный новый мир. Красивейший фильм режиссера–путешественника Николя Ванье",
    status: null,
    rating: {
      kp: 8.262,
      imdb: 6.9,
      filmCritics: 0,
      russianFilmCritics: 0,
      await: null,
    },
    votes: {
      kp: 182898,
      imdb: 1985,
      filmCritics: 0,
      russianFilmCritics: 0,
      await: 0,
    },
    movieLength: 116,
    totalSeriesLength: null,
    seriesLength: null,
    ratingMpaa: "g",
    ageRating: 6,
    poster: {
      url: "https://image.openmoviedb.com/kinopoisk-images/1599028/8381e8bb-11b9-4380-8a05-597ef99030b1/orig",
      previewUrl:
        "https://image.openmoviedb.com/kinopoisk-images/1599028/8381e8bb-11b9-4380-8a05-597ef99030b1/x1000",
    },
    backdrop: {
      url: "https://image.openmoviedb.com/kinopoisk-ott-images/224348/2a0000016772f9b2827f46dc736e8e502c9e/orig",
      previewUrl:
        "https://image.openmoviedb.com/kinopoisk-ott-images/224348/2a0000016772f9b2827f46dc736e8e502c9e/x1000",
    },
    genres: [
      {
        name: "драма",
      },
      {
        name: "комедия",
      },
      {
        name: "семейный",
      },
    ],
    countries: [
      {
        name: "Франция",
      },
    ],
    top10: null,
    top250: 94,
    isSeries: false,
    ticketsOnSale: false,
  },
  {
    id: 885317,
    name: "Ученик чудовища",
    alternativeName: "Bakemono no ko",
    enName: null,
    names: [
      {
        name: "Ученик чудовища",
        language: "RU",
        type: "Russian title on kinopoisk",
      },
      {
        name: "Bakemono no ko",
        language: null,
        type: "Original title on kinopoisk",
      },
    ],
    type: "anime",
    typeNumber: 4,
    year: 2015,
    description:
      "9-летний мальчик Рэн остался без родителей, сбежал от опекунов и скитался по улицам Токио. Там он встречает великого воина Медвежута — похожее на медведя чудище, явившееся из параллельного мира, чтобы найти себе ученика. Им и становится Рэн. В мире чудовищ мальчик получает имя Девята и под началом Медвежута начинает тренировки, чтобы стать мастером боевых искусств.",
    shortDescription:
      "Подросток попадает в мир зверолюдей и начинает учиться боевым искусствам. Фэнтези о взрослении и поиске себя",
    status: null,
    rating: {
      kp: 8.2,
      imdb: 7.6,
      filmCritics: 7.3,
      russianFilmCritics: 0,
      await: null,
    },
    votes: {
      kp: 170995,
      imdb: 27218,
      filmCritics: 69,
      russianFilmCritics: 1,
      await: 0,
    },
    movieLength: 119,
    totalSeriesLength: null,
    seriesLength: null,
    ratingMpaa: "pg13",
    ageRating: 12,
    poster: {
      url: "https://image.openmoviedb.com/kinopoisk-images/10592371/de33243b-a7c1-48a7-b7aa-0358acd1907b/orig",
      previewUrl:
        "https://image.openmoviedb.com/kinopoisk-images/10592371/de33243b-a7c1-48a7-b7aa-0358acd1907b/x1000",
    },
    backdrop: {
      url: "https://image.openmoviedb.com/kinopoisk-ott-images/224348/2a000001671c177c5aab3504763720546342/orig",
      previewUrl:
        "https://image.openmoviedb.com/kinopoisk-ott-images/224348/2a000001671c177c5aab3504763720546342/x1000",
    },
    genres: [
      {
        name: "аниме",
      },
      {
        name: "мультфильм",
      },
      {
        name: "фэнтези",
      },
      {
        name: "драма",
      },
      {
        name: "боевик",
      },
    ],
    countries: [
      {
        name: "Япония",
      },
    ],
    top10: null,
    top250: 226,
    isSeries: false,
    ticketsOnSale: false,
  },
  {
    id: 309408,
    name: "День выборов",
    alternativeName: null,
    enName: null,
    names: [
      {
        name: "День выборов",
        language: "RU",
        type: "Russian title on kinopoisk",
      },
    ],
    type: "movie",
    typeNumber: 1,
    year: 2007,
    description:
      "Руководитель одной из самых рейтинговых радиостанций страны получает заказ от загадочного клиента. Необходимо «раскрутить» на региональных выборах своего кандидата, отобрать голоса у конкурентов и тем самым повлиять на избрание нового губернатора. За выполнение задачи государственной важности берутся лучшие умы радиостанции.",
    shortDescription:
      "Раскрутим вашего кандидата быстро и качественно. Фарсовая сатира на избирательные кампании от «Квартета И»",
    status: null,
    rating: {
      kp: 7.919,
      imdb: 7.4,
      filmCritics: 0,
      russianFilmCritics: 100,
      await: null,
    },
    votes: {
      kp: 179165,
      imdb: 4050,
      filmCritics: 0,
      russianFilmCritics: 3,
      await: 0,
    },
    movieLength: 125,
    totalSeriesLength: null,
    seriesLength: null,
    ratingMpaa: "pg13",
    ageRating: 18,
    poster: {
      url: "https://image.openmoviedb.com/kinopoisk-images/1946459/b824eb2a-1f6b-4149-852c-8360358349cd/orig",
      previewUrl:
        "https://image.openmoviedb.com/kinopoisk-images/1946459/b824eb2a-1f6b-4149-852c-8360358349cd/x1000",
    },
    backdrop: {
      url: "https://image.openmoviedb.com/kinopoisk-ott-images/239697/2a000001612925e14faeedfbde35f9b1f8d2/orig",
      previewUrl:
        "https://image.openmoviedb.com/kinopoisk-ott-images/239697/2a000001612925e14faeedfbde35f9b1f8d2/x1000",
    },
    genres: [
      {
        name: "комедия",
      },
    ],
    countries: [
      {
        name: "Россия",
      },
    ],
    top10: null,
    top250: 223,
    isSeries: false,
    ticketsOnSale: false,
  },
  {
    id: 42571,
    name: "Иди и смотри",
    alternativeName: null,
    enName: null,
    names: [
      {
        name: "Иди и смотри",
        language: "RU",
        type: "Russian title on kinopoisk",
      },
    ],
    type: "movie",
    typeNumber: 1,
    year: 1985,
    description:
      "1943 год, Великая Отечественная война. Подросток Флёра, откопав карабин среди обрывков колючей проволоки, ржавых пулемётных лент и простреленных касок, отправляется в лес к партизанам.",
    shortDescription:
      "Великая Отечественная глазами подростка. Шедевр Элема Климова — один из самых страшных фильмов о войне",
    status: null,
    rating: {
      kp: 8.266,
      imdb: 8.4,
      filmCritics: 8.6,
      russianFilmCritics: 0,
      await: null,
    },
    votes: {
      kp: 186817,
      imdb: 99175,
      filmCritics: 59,
      russianFilmCritics: 0,
      await: 0,
    },
    movieLength: 136,
    totalSeriesLength: null,
    seriesLength: null,
    ratingMpaa: null,
    ageRating: 18,
    poster: {
      url: "https://image.openmoviedb.com/kinopoisk-images/1946459/df3bcf7f-ca39-45d1-991e-5b8727fe5c1d/orig",
      previewUrl:
        "https://image.openmoviedb.com/kinopoisk-images/1946459/df3bcf7f-ca39-45d1-991e-5b8727fe5c1d/x1000",
    },
    backdrop: {
      url: "https://image.openmoviedb.com/kinopoisk-ott-images/1531675/2a00000171cf8dd9ae0521a0c352dd8d43a8/orig",
      previewUrl:
        "https://image.openmoviedb.com/kinopoisk-ott-images/1531675/2a00000171cf8dd9ae0521a0c352dd8d43a8/x1000",
    },
    genres: [
      {
        name: "драма",
      },
      {
        name: "военный",
      },
      {
        name: "история",
      },
    ],
    countries: [
      {
        name: "СССР",
      },
    ],
    top10: null,
    top250: 71,
    isSeries: false,
    ticketsOnSale: false,
  },
  {
    id: 1008113,
    name: "Таксист",
    alternativeName: "Taeksi unjeonsa",
    enName: null,
    names: [
      {
        name: "Таксист",
        language: "RU",
        type: "Russian title on kinopoisk",
      },
      {
        name: "Taeksi unjeonsa",
        language: null,
        type: "Original title on kinopoisk",
      },
    ],
    type: "movie",
    typeNumber: 1,
    year: 2017,
    description:
      "В результате военного переворота в декабре 1979 года южнокорейским президентом становится Чон Ду-хван. После расстрела студенческой демонстрации в городе Кванджу местные жители решают массово выступить против режима. Диктатор бросает на подавление восстания военные части. \n\nВ это время оказавшийся в Токио репортёр германской газеты решает проникнуть в Кванджу, чтобы донести до внешнего мира правду о том, что творится в Корее. Доставить немца в зону боевых действий и обратно должен простой сеульский таксист Ман-соп, который с утра даже не представлял, что скоро ему придется скрываться от военных патрулей.",
    shortDescription:
      "Простой водитель попадает в гущу восстания в Южной Корее. Драма по реальной истории со звездой «Паразитов»",
    status: null,
    rating: {
      kp: 8.223,
      imdb: 7.9,
      filmCritics: 7.4,
      russianFilmCritics: 0,
      await: null,
    },
    votes: {
      kp: 176886,
      imdb: 31980,
      filmCritics: 30,
      russianFilmCritics: 0,
      await: 0,
    },
    movieLength: 137,
    totalSeriesLength: null,
    seriesLength: null,
    ratingMpaa: null,
    ageRating: 18,
    poster: {
      url: "https://image.openmoviedb.com/kinopoisk-images/1900788/59f6ce5c-4938-49d1-a1f7-5b9055ca541c/orig",
      previewUrl:
        "https://image.openmoviedb.com/kinopoisk-images/1900788/59f6ce5c-4938-49d1-a1f7-5b9055ca541c/x1000",
    },
    backdrop: {
      url: "https://image.openmoviedb.com/kinopoisk-ott-images/200035/2a00000176236f2dfb9ca3ccff58d66326ef/orig",
      previewUrl:
        "https://image.openmoviedb.com/kinopoisk-ott-images/200035/2a00000176236f2dfb9ca3ccff58d66326ef/x1000",
    },
    genres: [
      {
        name: "история",
      },
      {
        name: "драма",
      },
      {
        name: "биография",
      },
    ],
    countries: [
      {
        name: "Корея Южная",
      },
    ],
    top10: null,
    top250: 124,
    isSeries: false,
    ticketsOnSale: false,
  },
  {
    id: 959365,
    name: "Невидимый гость",
    alternativeName: "Contratiempo",
    enName: null,
    names: [
      {
        name: "Невидимый гость",
        language: "RU",
        type: "Russian title on kinopoisk",
      },
      {
        name: "Contratiempo",
        language: null,
        type: "Original title on kinopoisk",
      },
    ],
    type: "movie",
    typeNumber: 1,
    year: 2016,
    description:
      "Молодого бизнесмена Адриана Дориа обвиняют в убийстве любовницы, и он решает воспользоваться услугами Вирджинии Гудман, лучшего в стране специалиста по выходу из самых сложных ситуаций. Адриан содержится под домашним арестом, а завтра состоится судебное заседание, поэтому вечером к нему приходит Вирджиния, чтобы придумать наилучшую стратегию защиты. Для неё это последнее дело, и она не собирается его проигрывать.",
    shortDescription:
      "Адвокат Вирджиния пытается понять, виновен ли ее подзащитный. Разговорный детективный триллер из Испании",
    status: null,
    rating: {
      kp: 7.852,
      imdb: 8,
      filmCritics: 6.5,
      russianFilmCritics: 100,
      await: null,
    },
    votes: {
      kp: 304367,
      imdb: 194135,
      filmCritics: 9,
      russianFilmCritics: 3,
      await: 0,
    },
    movieLength: 106,
    totalSeriesLength: null,
    seriesLength: null,
    ratingMpaa: "r",
    ageRating: 18,
    poster: {
      url: "https://image.openmoviedb.com/kinopoisk-images/1599028/611a2f49-49fb-458e-b98a-fb46672f1a24/orig",
      previewUrl:
        "https://image.openmoviedb.com/kinopoisk-images/1599028/611a2f49-49fb-458e-b98a-fb46672f1a24/x1000",
    },
    backdrop: {
      url: "https://image.openmoviedb.com/kinopoisk-ott-images/239697/2a000001643e00c04975fcf19988dad86f07/orig",
      previewUrl:
        "https://image.openmoviedb.com/kinopoisk-ott-images/239697/2a000001643e00c04975fcf19988dad86f07/x1000",
    },
    genres: [
      {
        name: "триллер",
      },
      {
        name: "криминал",
      },
      {
        name: "детектив",
      },
    ],
    countries: [
      {
        name: "Испания",
      },
    ],
    top10: null,
    top250: 174,
    isSeries: false,
    ticketsOnSale: false,
  },
  {
    id: 647671,
    name: "Охота",
    alternativeName: "Jagten",
    enName: null,
    names: [
      {
        name: "Охота",
        language: "RU",
        type: "Russian title on kinopoisk",
      },
      {
        name: "Jagten",
        language: null,
        type: "Original title on kinopoisk",
      },
    ],
    type: "movie",
    typeNumber: 1,
    year: 2012,
    description:
      "42-летний Лукас живет в небольшой датской деревушке, работает воспитателем в детском саду и пытается оправиться после тяжелого развода. Жизнь постепенно налаживается: он встречает любимую женщину и восстанавливает отношения с сыном-подростком Маркусом. Но детская обида дочери его лучшего друга провоцирует ложь, которая распространяется по небольшому сообществу, как вирус. Мир Лукаса трещит по швам, и он начинает борьбу за свои жизнь и честь.",
    shortDescription:
      "Детская ложь превращает жизнь воспитателя в ад. Мрак, травля и Мадс Миккельсен в жесткой скандинавской драме",
    status: null,
    rating: {
      kp: 7.94,
      imdb: 8.3,
      filmCritics: 7.8,
      russianFilmCritics: 77.7778,
      await: null,
    },
    votes: {
      kp: 188402,
      imdb: 367807,
      filmCritics: 132,
      russianFilmCritics: 9,
      await: 0,
    },
    movieLength: 115,
    totalSeriesLength: null,
    seriesLength: null,
    ratingMpaa: "r",
    ageRating: 18,
    poster: {
      url: "https://image.openmoviedb.com/kinopoisk-images/1900788/b97af3b9-41b5-4e1d-a59c-051e4e979e80/orig",
      previewUrl:
        "https://image.openmoviedb.com/kinopoisk-images/1900788/b97af3b9-41b5-4e1d-a59c-051e4e979e80/x1000",
    },
    backdrop: {
      url: "https://image.openmoviedb.com/kinopoisk-ott-images/236744/2a00000161284764e593ec10d08aaf33b05e/orig",
      previewUrl:
        "https://image.openmoviedb.com/kinopoisk-ott-images/236744/2a00000161284764e593ec10d08aaf33b05e/x1000",
    },
    genres: [
      {
        name: "драма",
      },
    ],
    countries: [
      {
        name: "Дания",
      },
      {
        name: "Швеция",
      },
    ],
    top10: null,
    top250: 169,
    isSeries: false,
    ticketsOnSale: false,
  },
  {
    id: 7226,
    name: "Догвилль",
    alternativeName: "Dogville",
    enName: null,
    names: [
      {
        name: "Догвилль",
        language: "RU",
        type: "Russian title on kinopoisk",
      },
      {
        name: "Dogville",
        language: null,
        type: "Original title on kinopoisk",
      },
    ],
    type: "movie",
    typeNumber: 1,
    year: 2003,
    description:
      "Юная Грейс, сбежав от банды гангстеров, находит спасение в маленьком городке Догвилль где-то в Скалистых горах. Местные жители – один прекраснее другого – готовы ее укрыть. А взамен им совсем ничего не надо, ну, разве что помочь по дому или присмотреть за детьми. Но постепенно милый Догвилль превращается для девушки в тюрьму.",
    shortDescription:
      "Грейс приезжает в город, где ей совсем не рады. Эпос Ларса фон Триера о насилии в театральных декорациях",
    status: null,
    rating: {
      kp: 7.995,
      imdb: 8,
      filmCritics: 7,
      russianFilmCritics: 100,
      await: null,
    },
    votes: {
      kp: 187221,
      imdb: 159528,
      filmCritics: 167,
      russianFilmCritics: 5,
      await: 0,
    },
    movieLength: 178,
    totalSeriesLength: null,
    seriesLength: null,
    ratingMpaa: "r",
    ageRating: 18,
    poster: {
      url: "https://image.openmoviedb.com/kinopoisk-images/1704946/ea32e9e1-bce8-4a1f-bf1c-6527851f71aa/orig",
      previewUrl:
        "https://image.openmoviedb.com/kinopoisk-images/1704946/ea32e9e1-bce8-4a1f-bf1c-6527851f71aa/x1000",
    },
    backdrop: {
      url: "https://image.openmoviedb.com/kinopoisk-ott-images/223007/2a0000016772fa77b7b2cbd81d9e0435ccc7/orig",
      previewUrl:
        "https://image.openmoviedb.com/kinopoisk-ott-images/223007/2a0000016772fa77b7b2cbd81d9e0435ccc7/x1000",
    },
    genres: [
      {
        name: "триллер",
      },
      {
        name: "драма",
      },
      {
        name: "детектив",
      },
    ],
    countries: [
      {
        name: "Дания",
      },
      {
        name: "Нидерланды",
      },
      {
        name: "Швеция",
      },
      {
        name: "Германия",
      },
      {
        name: "Великобритания",
      },
      {
        name: "Франция",
      },
      {
        name: "Финляндия",
      },
      {
        name: "Норвегия",
      },
      {
        name: "Италия",
      },
    ],
    top10: null,
    top250: 99,
    isSeries: false,
    ticketsOnSale: false,
  },
  {
    id: 45660,
    name: "Вам и не снилось...",
    alternativeName: null,
    enName: null,
    names: [
      {
        name: "Вам и не снилось...",
        language: "RU",
        type: "Russian title on kinopoisk",
      },
    ],
    type: "movie",
    typeNumber: 1,
    year: 1980,
    description:
      "Школьники Роман и Катя тянутся друг к другу со всей безоглядностью первой любви. Мать Кати очень счастлива во втором браке и в озарении этого счастья хорошо понимает дочь. Роман находит поддержку у отца, давно и безответно любящего Катину маму. Но рядом ходят люди, ничего не знающие о любви...",
    shortDescription:
      "Взрослые пытаются помешать отношениям двух подростков. Великое, пронзительно нежное кино о первой любви",
    status: null,
    rating: {
      kp: 8.259,
      imdb: 7.8,
      filmCritics: 0,
      russianFilmCritics: 0,
      await: null,
    },
    votes: {
      kp: 180181,
      imdb: 1982,
      filmCritics: 0,
      russianFilmCritics: 1,
      await: 0,
    },
    movieLength: 86,
    totalSeriesLength: null,
    seriesLength: null,
    ratingMpaa: null,
    ageRating: 12,
    poster: {
      url: "https://image.openmoviedb.com/kinopoisk-images/1599028/0d59cea8-7f92-4d23-90a1-79d4485524fd/orig",
      previewUrl:
        "https://image.openmoviedb.com/kinopoisk-images/1599028/0d59cea8-7f92-4d23-90a1-79d4485524fd/x1000",
    },
    backdrop: {
      url: "https://image.openmoviedb.com/kinopoisk-ott-images/223007/2a0000016330a1c9a1bc10afa45f363419b2/orig",
      previewUrl:
        "https://image.openmoviedb.com/kinopoisk-ott-images/223007/2a0000016330a1c9a1bc10afa45f363419b2/x1000",
    },
    genres: [
      {
        name: "драма",
      },
      {
        name: "мелодрама",
      },
    ],
    countries: [
      {
        name: "СССР",
      },
    ],
    top10: null,
    top250: 206,
    isSeries: false,
    ticketsOnSale: false,
  },
  {
    id: 864138,
    name: "Лев",
    alternativeName: "Lion",
    enName: null,
    names: [
      {
        name: "Лев",
        language: "RU",
        type: "Russian title on kinopoisk",
      },
      {
        name: "Lion",
        language: null,
        type: "Original title on kinopoisk",
      },
    ],
    type: "movie",
    typeNumber: 1,
    year: 2016,
    description:
      "Сару, мальчик из трущоб, потерялся в возрасте пяти лет. История об удивительных поворотах его судьбы и поисках семьи.",
    shortDescription:
      "Мальчик из трущоб в поисках семьи. Душераздирающая драма с Девом Пателем и шестью номинациями на «Оскар»",
    status: null,
    rating: {
      kp: 8.151,
      imdb: 8,
      filmCritics: 7.3,
      russianFilmCritics: 75,
      await: null,
    },
    votes: {
      kp: 221355,
      imdb: 252712,
      filmCritics: 270,
      russianFilmCritics: 8,
      await: 0,
    },
    movieLength: 118,
    totalSeriesLength: null,
    seriesLength: null,
    ratingMpaa: "pg13",
    ageRating: 18,
    poster: {
      url: "https://image.openmoviedb.com/kinopoisk-images/4716873/1973365b-1c0b-4bb1-af0e-94e8d6140657/orig",
      previewUrl:
        "https://image.openmoviedb.com/kinopoisk-images/4716873/1973365b-1c0b-4bb1-af0e-94e8d6140657/x1000",
    },
    backdrop: {
      url: "https://image.openmoviedb.com/kinopoisk-ott-images/223007/2a00000161277b671079d421b692434d53c9/orig",
      previewUrl:
        "https://image.openmoviedb.com/kinopoisk-ott-images/223007/2a00000161277b671079d421b692434d53c9/x1000",
    },
    genres: [
      {
        name: "драма",
      },
      {
        name: "биография",
      },
    ],
    countries: [
      {
        name: "Австралия",
      },
      {
        name: "Великобритания",
      },
      {
        name: "США",
      },
      {
        name: "Индия",
      },
    ],
    top10: null,
    top250: 66,
    isSeries: false,
    ticketsOnSale: false,
  },
  {
    id: 45028,
    name: "Курьер",
    alternativeName: null,
    enName: null,
    names: [
      {
        name: "Курьер",
        language: "RU",
        type: "Russian title on kinopoisk",
      },
    ],
    type: "movie",
    typeNumber: 1,
    year: 1986,
    description:
      "Выпускник школы Иван, дожидаясь призыва в армию, работает курьером в редакции. Окружающие его солидные взрослые люди с трудом приспосабливаются к удивительной способности этого парня любое событие превратить в невероятное происшествие - порой уморительно веселое, а, подчас, и непоправимо грустное…",
    shortDescription:
      "Иван разносит газеты и спорит со взрослыми о жизни. Грустная комедия Карена Шахназарова, лидер проката в СССР",
    status: null,
    rating: {
      kp: 8.042,
      imdb: 7.8,
      filmCritics: 0,
      russianFilmCritics: 0,
      await: null,
    },
    votes: {
      kp: 208943,
      imdb: 5731,
      filmCritics: 0,
      russianFilmCritics: 2,
      await: 0,
    },
    movieLength: 88,
    totalSeriesLength: null,
    seriesLength: null,
    ratingMpaa: "r",
    ageRating: 18,
    poster: {
      url: "https://image.openmoviedb.com/kinopoisk-images/10893610/b61f7025-8f50-4d74-83d5-fc14f93952d9/orig",
      previewUrl:
        "https://image.openmoviedb.com/kinopoisk-images/10893610/b61f7025-8f50-4d74-83d5-fc14f93952d9/x1000",
    },
    backdrop: {
      url: "https://image.openmoviedb.com/kinopoisk-ott-images/223007/2a0000016330a116f0c2ea940f8453b8ec60/orig",
      previewUrl:
        "https://image.openmoviedb.com/kinopoisk-ott-images/223007/2a0000016330a116f0c2ea940f8453b8ec60/x1000",
    },
    genres: [
      {
        name: "драма",
      },
      {
        name: "мелодрама",
      },
      {
        name: "комедия",
      },
    ],
    countries: [
      {
        name: "СССР",
      },
    ],
    top10: null,
    top250: 187,
    isSeries: false,
    ticketsOnSale: true,
  },
  {
    id: 958519,
    name: "Отель Мумбаи: Противостояние",
    alternativeName: "Hotel Mumbai",
    enName: null,
    names: [
      {
        name: "Отель Мумбаи: Противостояние",
        language: "RU",
        type: "Russian title on kinopoisk",
      },
      {
        name: "Hotel Mumbai",
        language: null,
        type: "Original title on kinopoisk",
      },
    ],
    type: "movie",
    typeNumber: 1,
    year: 2018,
    description:
      "Мумбаи, 2008 год. Роскошный отель «Тадж-Махал Палас» — гарантия безопасности. К каждому гостю здесь относятся как к богу и требования к персоналу предъявляют самые высокие, но в тот день сотрудникам отеля пришлось особенно тяжело. Город подвергается многочисленным террористическим атакам, и когда вооруженные люди захватывают «Тадж-Махал», расстреливая всех встречных, оказавшимся в ловушке гостям и персоналу придётся пережить настоящий кошмар.",
    shortDescription:
      "Гости и персонал роскошного отеля становятся заложниками террористов. Жесткая драма на основе реальных событий",
    status: null,
    rating: {
      kp: 7.919,
      imdb: 7.6,
      filmCritics: 6.8,
      russianFilmCritics: 0,
      await: null,
    },
    votes: {
      kp: 224119,
      imdb: 72028,
      filmCritics: 217,
      russianFilmCritics: 2,
      await: 0,
    },
    movieLength: 123,
    totalSeriesLength: null,
    seriesLength: null,
    ratingMpaa: "r",
    ageRating: 18,
    poster: {
      url: "https://image.openmoviedb.com/kinopoisk-images/1599028/7192c98b-570d-4787-8a65-dbe373c404a1/orig",
      previewUrl:
        "https://image.openmoviedb.com/kinopoisk-images/1599028/7192c98b-570d-4787-8a65-dbe373c404a1/x1000",
    },
    backdrop: {
      url: "https://image.openmoviedb.com/kinopoisk-ott-images/239697/2a0000016bf4a47fb958a04d48237d9faa2d/orig",
      previewUrl:
        "https://image.openmoviedb.com/kinopoisk-ott-images/239697/2a0000016bf4a47fb958a04d48237d9faa2d/x1000",
    },
    genres: [
      {
        name: "боевик",
      },
      {
        name: "триллер",
      },
      {
        name: "драма",
      },
      {
        name: "история",
      },
    ],
    countries: [
      {
        name: "США",
      },
      {
        name: "Австралия",
      },
    ],
    top10: null,
    top250: 149,
    isSeries: false,
    ticketsOnSale: false,
  },
  {
    id: 939411,
    name: "Мотылёк",
    alternativeName: "Papillon",
    enName: null,
    names: [
      {
        name: "Мотылёк",
        language: "RU",
        type: "Russian title on kinopoisk",
      },
      {
        name: "Papillon",
        language: null,
        type: "Original title on kinopoisk",
      },
    ],
    type: "movie",
    typeNumber: 1,
    year: 2017,
    description:
      "Взломщик сейфов по прозвищу Мотылёк получает пожизненный срок и отправляется на каторгу за убийство, которого он не совершал. Когда вокруг враги, а надежда угасает с каждым днём заключения, лишь сила духа может помочь Мотыльку обрести свободу.",
    shortDescription:
      "Арестант ловко бежит из тюрьмы. Экранизация мемуаров Анри Шарьера, который не раз упархивал на свободу",
    status: null,
    rating: {
      kp: 7.762,
      imdb: 7.2,
      filmCritics: 5.8,
      russianFilmCritics: 33.3333,
      await: null,
    },
    votes: {
      kp: 210038,
      imdb: 87195,
      filmCritics: 111,
      russianFilmCritics: 3,
      await: 0,
    },
    movieLength: 133,
    totalSeriesLength: null,
    seriesLength: null,
    ratingMpaa: "r",
    ageRating: 18,
    poster: {
      url: "https://image.openmoviedb.com/kinopoisk-images/1600647/8e08470b-0241-47f4-9ee6-32406da24df5/orig",
      previewUrl:
        "https://image.openmoviedb.com/kinopoisk-images/1600647/8e08470b-0241-47f4-9ee6-32406da24df5/x1000",
    },
    backdrop: {
      url: "https://image.openmoviedb.com/kinopoisk-ott-images/224348/2a00000167371d45ad676f08fd1606207796/orig",
      previewUrl:
        "https://image.openmoviedb.com/kinopoisk-ott-images/224348/2a00000167371d45ad676f08fd1606207796/x1000",
    },
    genres: [
      {
        name: "драма",
      },
      {
        name: "криминал",
      },
      {
        name: "приключения",
      },
      {
        name: "биография",
      },
    ],
    countries: [
      {
        name: "США",
      },
      {
        name: "Чехия",
      },
      {
        name: "Испания",
      },
    ],
    top10: null,
    top250: 182,
    isSeries: false,
    ticketsOnSale: false,
  },
  {
    id: 46368,
    name: "Не может быть!",
    alternativeName: null,
    enName: null,
    names: [
      {
        name: "Не может быть!",
        language: "RU",
        type: "Russian title on kinopoisk",
      },
    ],
    type: "movie",
    typeNumber: 1,
    year: 1975,
    description:
      "Фильм включает три новеллы о негативных явлениях провинциальной жизни молодой страны Советов: тупости, пьянстве, стяжательстве, бездуховности - всем том, что и сейчас существует благополучно и повсеместно.",
    shortDescription:
      "Три уморительные истории о превратностях любви. Герои произведений Михаила Зощенко глазами Леонида Гайдая",
    status: null,
    rating: {
      kp: 8.203,
      imdb: 7.7,
      filmCritics: 0,
      russianFilmCritics: 0,
      await: null,
    },
    votes: {
      kp: 185753,
      imdb: 2316,
      filmCritics: 0,
      russianFilmCritics: 0,
      await: 0,
    },
    movieLength: 92,
    totalSeriesLength: null,
    seriesLength: null,
    ratingMpaa: null,
    ageRating: 12,
    poster: {
      url: "https://image.openmoviedb.com/kinopoisk-images/1629390/62f8ff65-2a90-49c1-aeda-c7fa511ff409/orig",
      previewUrl:
        "https://image.openmoviedb.com/kinopoisk-images/1629390/62f8ff65-2a90-49c1-aeda-c7fa511ff409/x1000",
    },
    backdrop: {
      url: "https://image.openmoviedb.com/kinopoisk-ott-images/212840/2a0000016301a494a7e97b3ec28c89794c41/orig",
      previewUrl:
        "https://image.openmoviedb.com/kinopoisk-ott-images/212840/2a0000016301a494a7e97b3ec28c89794c41/x1000",
    },
    genres: [
      {
        name: "мелодрама",
      },
      {
        name: "комедия",
      },
    ],
    countries: [
      {
        name: "СССР",
      },
    ],
    top10: null,
    top250: 241,
    isSeries: false,
    ticketsOnSale: false,
  },
  {
    id: 46638,
    name: "Мимино",
    alternativeName: null,
    enName: null,
    names: [
      {
        name: "Мимино",
        language: "RU",
        type: "Russian title on kinopoisk",
      },
    ],
    type: "movie",
    typeNumber: 1,
    year: 1977,
    description:
      "Провинциальный пилот Валико Мизандари по прозвищу Мимино, что значит «сокол», занимается вертолётными перевозками почты, фруктов, кур, баранов и даже коров в горных районах Грузинской ССР. Однажды встретив в Тбилисском аэропорту приятеля по лётному училищу и увидев, на каком великолепном сверхзвуковом самолёте тот летает и в компании каких красавиц-стюардесс работает, Мимино решает изменить свою жизнь и отправляется в Москву подавать документы на переобучение. В гостинице он оказывается в одном номере с армянским водителем Рубеном Хачикяном, которого ошибочно приняли за профессора-эндокринолога.",
    shortDescription:
      "Путь грузина-пилота в большую авиацию. Нежная и уморительная лирическая комедия Георгия Данелии",
    status: null,
    rating: {
      kp: 8.158,
      imdb: 8.1,
      filmCritics: 0,
      russianFilmCritics: 0,
      await: null,
    },
    votes: {
      kp: 194544,
      imdb: 6933,
      filmCritics: 0,
      russianFilmCritics: 0,
      await: 0,
    },
    movieLength: 92,
    totalSeriesLength: null,
    seriesLength: null,
    ratingMpaa: "pg",
    ageRating: 18,
    poster: {
      url: "https://image.openmoviedb.com/kinopoisk-images/4486454/a0a82a7d-4354-4aae-baef-3acbe0c0a487/orig",
      previewUrl:
        "https://image.openmoviedb.com/kinopoisk-images/4486454/a0a82a7d-4354-4aae-baef-3acbe0c0a487/x1000",
    },
    backdrop: {
      url: "https://image.openmoviedb.com/kinopoisk-ott-images/236744/2a0000018da8708eabf8f6febca4c251fc61/orig",
      previewUrl:
        "https://image.openmoviedb.com/kinopoisk-ott-images/236744/2a0000018da8708eabf8f6febca4c251fc61/x1000",
    },
    genres: [
      {
        name: "драма",
      },
      {
        name: "комедия",
      },
    ],
    countries: [
      {
        name: "СССР",
      },
    ],
    top10: null,
    top250: 162,
    isSeries: false,
    ticketsOnSale: false,
  },
  {
    id: 664,
    name: "Семьянин",
    alternativeName: "The Family Man",
    enName: null,
    names: [
      {
        name: "Семьянин",
        language: "RU",
        type: "Russian title on kinopoisk",
      },
      {
        name: "The Family Man",
        language: null,
        type: "Original title on kinopoisk",
      },
    ],
    type: "movie",
    typeNumber: 1,
    year: 2000,
    description:
      "Судьба в облике чернокожего Санты ставит перед Джеком непростой выбор. Он может быть президентом инвестиционной компании, жить в роскошной квартире, раскатывать на последней модели «Феррари» и при этом оставаться холостяком. А может стать семьянином, но работать продавцом автопокрышек, покупать одежду в супермаркете и ездить на минивэне.",
    shortDescription:
      "Бизнесмен должен сделать выбор между карьерой и семьей. Рождественская сказка с Николасом Кейджем",
    status: null,
    rating: {
      kp: 7.829,
      imdb: 6.8,
      filmCritics: 5.5,
      russianFilmCritics: 0,
      await: null,
    },
    votes: {
      kp: 198535,
      imdb: 119956,
      filmCritics: 130,
      russianFilmCritics: 1,
      await: 0,
    },
    movieLength: 125,
    totalSeriesLength: null,
    seriesLength: null,
    ratingMpaa: "pg13",
    ageRating: 12,
    poster: {
      url: "https://image.openmoviedb.com/kinopoisk-images/4716873/b19fcaf1-a71d-4685-9ec9-5f049a112425/orig",
      previewUrl:
        "https://image.openmoviedb.com/kinopoisk-images/4716873/b19fcaf1-a71d-4685-9ec9-5f049a112425/x1000",
    },
    backdrop: {
      url: "https://image.openmoviedb.com/kinopoisk-ott-images/224348/2a0000016ab058e810ca4d68830141e9c499/orig",
      previewUrl:
        "https://image.openmoviedb.com/kinopoisk-ott-images/224348/2a0000016ab058e810ca4d68830141e9c499/x1000",
    },
    genres: [
      {
        name: "фэнтези",
      },
      {
        name: "драма",
      },
      {
        name: "мелодрама",
      },
      {
        name: "комедия",
      },
    ],
    countries: [
      {
        name: "США",
      },
    ],
    top10: null,
    top250: 228,
    isSeries: false,
    ticketsOnSale: false,
  },
  {
    id: 906042,
    name: "Приключения Паддингтона 2",
    alternativeName: "Paddington 2",
    enName: null,
    names: [
      {
        name: "Приключения Паддингтона 2",
        language: "RU",
        type: "Russian title on kinopoisk",
      },
      {
        name: "Paddington 2",
        language: null,
        type: "Original title on kinopoisk",
      },
    ],
    type: "movie",
    typeNumber: 1,
    year: 2017,
    description:
      "В антикварном магазине Лондона обаятельный и хорошо воспитанный медведь Паддингтон находит уникальную старинную книгу. Пока он изо всех своих медвежьих сил старается накопить на неё, редчайшее издание внезапно похищают. Паддингтон оказывается втянут в аферу века, затеянную знаменитым, но вышедшим в тираж актером, который ныне рекламирует собачьи консервы, а свой талант к перевоплощению использует в охоте за сокровищами.",
    shortDescription:
      "Медвежонок выслеживает вора и попадает в серьезную передрягу. Возвращение героя с бутербродом под шляпой",
    status: null,
    rating: {
      kp: 8.075,
      imdb: 7.8,
      filmCritics: 8.7,
      russianFilmCritics: 100,
      await: null,
    },
    votes: {
      kp: 273540,
      imdb: 95317,
      filmCritics: 255,
      russianFilmCritics: 5,
      await: 0,
    },
    movieLength: 103,
    totalSeriesLength: null,
    seriesLength: null,
    ratingMpaa: "pg",
    ageRating: 18,
    poster: {
      url: "https://image.openmoviedb.com/kinopoisk-images/6201401/cd9d3979-bf12-4e73-9ebc-0ba2f1474aa4/orig",
      previewUrl:
        "https://image.openmoviedb.com/kinopoisk-images/6201401/cd9d3979-bf12-4e73-9ebc-0ba2f1474aa4/x1000",
    },
    backdrop: {
      url: "https://image.openmoviedb.com/kinopoisk-ott-images/236744/2a000001612ccd68e2d00acd677dbafa41b8/orig",
      previewUrl:
        "https://image.openmoviedb.com/kinopoisk-ott-images/236744/2a000001612ccd68e2d00acd677dbafa41b8/x1000",
    },
    genres: [
      {
        name: "фэнтези",
      },
      {
        name: "комедия",
      },
      {
        name: "семейный",
      },
    ],
    countries: [
      {
        name: "Великобритания",
      },
      {
        name: "Франция",
      },
      {
        name: "Китай",
      },
      {
        name: "Канада",
      },
      {
        name: "США",
      },
    ],
    top10: null,
    top250: 151,
    isSeries: false,
    ticketsOnSale: false,
  },
  {
    id: 126196,
    name: "Жизнь других",
    alternativeName: "Das Leben der Anderen",
    enName: null,
    names: [
      {
        name: "Жизнь других",
        language: "RU",
        type: "Russian title on kinopoisk",
      },
      {
        name: "Das Leben der Anderen",
        language: null,
        type: "Original title on kinopoisk",
      },
    ],
    type: "movie",
    typeNumber: 1,
    year: 2006,
    description:
      "Сто тысяч сотрудников, двести тысяч информаторов. Вместе они — щит и меч партии, знаменитое Штази. Их метод — подозрение. Жизнь других — их профессия.\n\nПопулярный писатель и драматург Георг Драйман так бы и дожил до конца своих дней, обласканный вниманием благодарных читателей и абсолютно неинтересный для спецслужб, если бы не роман с известной театральной актрисой. Слишком известной, чтобы остаться незамеченной влиятельным чиновником из ЦК. Так в жизни Драймана появляются специалисты из Штази.",
    shortDescription:
      "Капитан Штази ведет слежку за драматургом. Оскароносная драма о том, каково это — жить при диктатуре",
    status: null,
    rating: {
      kp: 8.133,
      imdb: 8.4,
      filmCritics: 8.3,
      russianFilmCritics: 85.7143,
      await: null,
    },
    votes: {
      kp: 234337,
      imdb: 412819,
      filmCritics: 163,
      russianFilmCritics: 7,
      await: 0,
    },
    movieLength: 137,
    totalSeriesLength: null,
    seriesLength: null,
    ratingMpaa: "r",
    ageRating: 18,
    poster: {
      url: "https://image.openmoviedb.com/kinopoisk-images/1777765/387722e9-9650-472a-9220-8616afc73d54/orig",
      previewUrl:
        "https://image.openmoviedb.com/kinopoisk-images/1777765/387722e9-9650-472a-9220-8616afc73d54/x1000",
    },
    backdrop: {
      url: "https://image.openmoviedb.com/kinopoisk-ott-images/200035/2a00000177eea6efb12cf3a0a1b119b431ae/orig",
      previewUrl:
        "https://image.openmoviedb.com/kinopoisk-ott-images/200035/2a00000177eea6efb12cf3a0a1b119b431ae/x1000",
    },
    genres: [
      {
        name: "триллер",
      },
      {
        name: "драма",
      },
      {
        name: "детектив",
      },
    ],
    countries: [
      {
        name: "Германия",
      },
      {
        name: "Франция",
      },
    ],
    top10: null,
    top250: 113,
    isSeries: false,
    ticketsOnSale: false,
  },
  {
    id: 722951,
    name: "Чудо",
    alternativeName: "Wonder",
    enName: null,
    names: [
      {
        name: "Чудо",
        language: "RU",
        type: "Russian title on kinopoisk",
      },
      {
        name: "Wonder",
        language: null,
        type: "Original title on kinopoisk",
      },
    ],
    type: "movie",
    typeNumber: 1,
    year: 2017,
    description:
      "С одной стороны мальчик Август Пулман такой же как и другие мальчишки его возраста - любит ходить на дни рождения к друзьям, играть в компьютерные игры, фанатеет от «Звездных войн», играет со своей собакой, ссорится и мирится со старшей сестрой. А с другой - он совсем не такой как другие мальчишки его возраста. Во-первых, Август никогда не ходил в обычную школу - с первого класса с ним дома занималась мама. Во-вторых, Август перенес 27 операций. Из-за очень редкой, но иногда встречающейся генетической ошибки у Августа нет лица. И вот такой мальчик должен пойти в школу. В первый раз. К обычным детям.",
    shortDescription:
      "Мальчик с необычным лицом решается пойти в обычную школу. Теплая семейная драма с Джулией Робертс",
    status: null,
    rating: {
      kp: 8.179,
      imdb: 7.9,
      filmCritics: 7.1,
      russianFilmCritics: 0,
      await: null,
    },
    votes: {
      kp: 294176,
      imdb: 181272,
      filmCritics: 190,
      russianFilmCritics: 1,
      await: 0,
    },
    movieLength: 113,
    totalSeriesLength: null,
    seriesLength: null,
    ratingMpaa: "pg",
    ageRating: 12,
    poster: {
      url: "https://image.openmoviedb.com/kinopoisk-images/10671298/6167ca6d-7aeb-4188-b1c3-6daaf437eea9/orig",
      previewUrl:
        "https://image.openmoviedb.com/kinopoisk-images/10671298/6167ca6d-7aeb-4188-b1c3-6daaf437eea9/x1000",
    },
    backdrop: {
      url: "https://image.openmoviedb.com/kinopoisk-ott-images/212840/2a0000016201174e7ebe19573356d530893f/orig",
      previewUrl:
        "https://image.openmoviedb.com/kinopoisk-ott-images/212840/2a0000016201174e7ebe19573356d530893f/x1000",
    },
    genres: [
      {
        name: "драма",
      },
      {
        name: "семейный",
      },
    ],
    countries: [
      {
        name: "США",
      },
      {
        name: "Гонконг",
      },
      {
        name: "Канада",
      },
    ],
    top10: null,
    top250: 112,
    isSeries: false,
    ticketsOnSale: false,
  },
  {
    id: 439,
    name: "Город бога",
    alternativeName: "Cidade de Deus",
    enName: null,
    names: [
      {
        name: "Город бога",
        language: "RU",
        type: "Russian title on kinopoisk",
      },
      {
        name: "Cidade de Deus",
        language: null,
        type: "Original title on kinopoisk",
      },
    ],
    type: "movie",
    typeNumber: 1,
    year: 2002,
    description:
      "Город Бога — самая опасная фавела Рио-де-Жанейро, и именно здесь растут трое детей: Ракета, Малыш Фишка и Бенни. Поначалу они только наблюдают, как другие подростки грабят мотели и мелкие лавки, но круговорот насилия затягивает и их. Фишка — теперь Малыш Зе, главный наркоторговец и гроза всего района. Бенни — его лучший друг и правая рука, но его тяготит криминальный образ жизни. И только Ракете удается оставаться в стороне. Он мечтает стать фотографом и становится свидетелем и собирателем хроники гангстерских разборок, утопивших Город Бога в крови.",
    shortDescription:
      "Можно ли родиться гангстером? Шокирующее погружение в пестрый и опасный мир бразильских фавел",
    status: null,
    rating: {
      kp: 8.018,
      imdb: 8.6,
      filmCritics: 8.3,
      russianFilmCritics: 0,
      await: null,
    },
    votes: {
      kp: 205945,
      imdb: 806236,
      filmCritics: 165,
      russianFilmCritics: 2,
      await: 0,
    },
    movieLength: 130,
    totalSeriesLength: null,
    seriesLength: null,
    ratingMpaa: "r",
    ageRating: 18,
    poster: {
      url: "https://image.openmoviedb.com/kinopoisk-images/1599028/253edce8-cf8c-4045-a40b-81fc19374b00/orig",
      previewUrl:
        "https://image.openmoviedb.com/kinopoisk-images/1599028/253edce8-cf8c-4045-a40b-81fc19374b00/x1000",
    },
    backdrop: {
      url: "https://image.openmoviedb.com/kinopoisk-ott-images/374297/2a000001634a9ce1e4ab9716d88f3f3cbb8e/orig",
      previewUrl:
        "https://image.openmoviedb.com/kinopoisk-ott-images/374297/2a000001634a9ce1e4ab9716d88f3f3cbb8e/x1000",
    },
    genres: [
      {
        name: "драма",
      },
      {
        name: "криминал",
      },
    ],
    countries: [
      {
        name: "Бразилия",
      },
      {
        name: "Франция",
      },
    ],
    top10: null,
    top250: 227,
    isSeries: false,
    ticketsOnSale: false,
  },
  {
    id: 436263,
    name: "Брестская крепость",
    alternativeName: null,
    enName: null,
    names: [
      {
        name: "Брестская крепость",
        language: "RU",
        type: "Russian title on kinopoisk",
      },
    ],
    type: "movie",
    typeNumber: 1,
    year: 2010,
    description:
      "История о героической обороне Брестской крепости, которая приняла на себя первый удар немецко-фашистских захватчиков 22 июня 1941 года. Рассказ о трёх главных очагах сопротивления, возглавляемых командиром полка Петром Гавриловым, комиссаром Ефимом Фоминым и начальником 9-й погранзаставы Андреем Кижеватовым.",
    shortDescription:
      "Советские солдаты принимают первый удар немецких войск. Документально точный рассказ о подвиге и начале войны",
    status: null,
    rating: {
      kp: 8.053,
      imdb: 7.4,
      filmCritics: 0,
      russianFilmCritics: 44.4444,
      await: null,
    },
    votes: {
      kp: 213689,
      imdb: 10576,
      filmCritics: 0,
      russianFilmCritics: 9,
      await: 0,
    },
    movieLength: 131,
    totalSeriesLength: null,
    seriesLength: null,
    ratingMpaa: null,
    ageRating: 18,
    poster: {
      url: "https://image.openmoviedb.com/kinopoisk-images/1900788/b7f7bf0b-103b-47ed-998d-30e3eb9f2b1c/orig",
      previewUrl:
        "https://image.openmoviedb.com/kinopoisk-images/1900788/b7f7bf0b-103b-47ed-998d-30e3eb9f2b1c/x1000",
    },
    backdrop: {
      url: "https://image.openmoviedb.com/kinopoisk-ott-images/2419418/2a00000171f3eca469a662e9a49519745d72/orig",
      previewUrl:
        "https://image.openmoviedb.com/kinopoisk-ott-images/2419418/2a00000171f3eca469a662e9a49519745d72/x1000",
    },
    genres: [
      {
        name: "военный",
      },
      {
        name: "боевик",
      },
      {
        name: "драма",
      },
      {
        name: "история",
      },
    ],
    countries: [
      {
        name: "Беларусь",
      },
      {
        name: "Россия",
      },
    ],
    top10: null,
    top250: 152,
    isSeries: false,
    ticketsOnSale: false,
  },
  {
    id: 601564,
    name: "Легенда №17",
    alternativeName: null,
    enName: null,
    names: [
      {
        name: "Легенда №17",
        language: "RU",
        type: "Russian title on kinopoisk",
      },
    ],
    type: "movie",
    typeNumber: 1,
    year: 2012,
    description: "История жизни хоккеиста Валерия Харламова.",
    shortDescription:
      "После серьезного ДТП хоккеист хочет вернуться на лед ради важной игры. Вдохновляющая драма о Валерии Харламове",
    status: null,
    rating: {
      kp: 7.989,
      imdb: 7.4,
      filmCritics: 0,
      russianFilmCritics: 85.2941,
      await: null,
    },
    votes: {
      kp: 584421,
      imdb: 6241,
      filmCritics: 0,
      russianFilmCritics: 34,
      await: 0,
    },
    movieLength: 134,
    totalSeriesLength: null,
    seriesLength: null,
    ratingMpaa: "pg13",
    ageRating: 6,
    poster: {
      url: "https://image.openmoviedb.com/kinopoisk-images/1599028/a8fce9c6-ed42-42e8-9727-206a6b5fb64a/orig",
      previewUrl:
        "https://image.openmoviedb.com/kinopoisk-images/1599028/a8fce9c6-ed42-42e8-9727-206a6b5fb64a/x1000",
    },
    backdrop: {
      url: "https://image.openmoviedb.com/kinopoisk-ott-images/239697/2a000001612cb29fc326fe05502b4a011fd3/orig",
      previewUrl:
        "https://image.openmoviedb.com/kinopoisk-ott-images/239697/2a000001612cb29fc326fe05502b4a011fd3/x1000",
    },
    genres: [
      {
        name: "биография",
      },
      {
        name: "спорт",
      },
      {
        name: "драма",
      },
    ],
    countries: [
      {
        name: "Россия",
      },
    ],
    top10: null,
    top250: 164,
    isSeries: false,
    ticketsOnSale: false,
  },
  {
    id: 1191022,
    name: "Подольские курсанты",
    alternativeName: null,
    enName: null,
    names: [
      {
        name: "Подольские курсанты",
        language: "RU",
        type: "Russian title on kinopoisk",
      },
    ],
    type: "movie",
    typeNumber: 1,
    year: 2020,
    description:
      "Октябрь 1941 года, Подмосковье. Около трёх с половиной тысяч курсантов подольских артиллерийского и пехотного училищ получают приказ занять оборону на Ильинском рубеже и совместно с регулярными частями 43-й армии сдерживать наступление фашистских захватчиков, пока не подойдёт подкрепление. Погибая, вчерашние мальчишки держат оборону от многократно превышающих сил немцев и на двенадцать дней становятся преградой на пути врага к Москве.",
    shortDescription:
      "Вчерашние курсанты держат оборону на подступах к Москве. Реалистичная драма от создателей «Брестской крепости»",
    status: null,
    rating: {
      kp: 8.213,
      imdb: 6.5,
      filmCritics: 0,
      russianFilmCritics: 0,
      await: null,
    },
    votes: {
      kp: 259600,
      imdb: 1911,
      filmCritics: 0,
      russianFilmCritics: 1,
      await: 0,
    },
    movieLength: 136,
    totalSeriesLength: null,
    seriesLength: null,
    ratingMpaa: null,
    ageRating: 12,
    poster: {
      url: "https://image.openmoviedb.com/kinopoisk-images/6201401/de10de1e-aada-4445-9e65-ec764022600a/orig",
      previewUrl:
        "https://image.openmoviedb.com/kinopoisk-images/6201401/de10de1e-aada-4445-9e65-ec764022600a/x1000",
    },
    backdrop: {
      url: "https://image.openmoviedb.com/kinopoisk-ott-images/2419418/2a0000018074a7e59dd5305591f87503943a/orig",
      previewUrl:
        "https://image.openmoviedb.com/kinopoisk-ott-images/2419418/2a0000018074a7e59dd5305591f87503943a/x1000",
    },
    genres: [
      {
        name: "военный",
      },
      {
        name: "драма",
      },
      {
        name: "история",
      },
      {
        name: "боевик",
      },
    ],
    countries: [
      {
        name: "Россия",
      },
    ],
    top10: null,
    top250: 155,
    isSeries: false,
    ticketsOnSale: false,
  },
  {
    id: 518037,
    name: "Невозможное",
    alternativeName: "Lo imposible",
    enName: null,
    names: [
      {
        name: "Невозможное",
        language: "RU",
        type: "Russian title on kinopoisk",
      },
      {
        name: "Lo imposible",
        language: null,
        type: "Original title on kinopoisk",
      },
    ],
    type: "movie",
    typeNumber: 1,
    year: 2012,
    description:
      "2004 год. Семья курортников в Таиланде попадает под мощное цунами.",
    shortDescription:
      "Британская семья оказывается в эпицентре сокрушительного цунами. Драма о трагедии 2004 года с Наоми Уоттс",
    status: null,
    rating: {
      kp: 7.954,
      imdb: 7.5,
      filmCritics: 7.4,
      russianFilmCritics: 66.6667,
      await: null,
    },
    votes: {
      kp: 205877,
      imdb: 246090,
      filmCritics: 205,
      russianFilmCritics: 12,
      await: 0,
    },
    movieLength: 109,
    totalSeriesLength: null,
    seriesLength: null,
    ratingMpaa: "pg13",
    ageRating: 18,
    poster: {
      url: "https://image.openmoviedb.com/kinopoisk-images/1599028/bd3882d7-c0d1-4d67-bc13-a9aa47178d35/orig",
      previewUrl:
        "https://image.openmoviedb.com/kinopoisk-images/1599028/bd3882d7-c0d1-4d67-bc13-a9aa47178d35/x1000",
    },
    backdrop: {
      url: "https://image.openmoviedb.com/kinopoisk-ott-images/212840/2a00000160560c0e4e7796dded0c8237c51b/orig",
      previewUrl:
        "https://image.openmoviedb.com/kinopoisk-ott-images/212840/2a00000160560c0e4e7796dded0c8237c51b/x1000",
    },
    genres: [
      {
        name: "драма",
      },
    ],
    countries: [
      {
        name: "Испания",
      },
      {
        name: "Таиланд",
      },
      {
        name: "США",
      },
    ],
    top10: null,
    top250: 172,
    isSeries: false,
    ticketsOnSale: false,
  },
  {
    id: 596125,
    name: "Гонка",
    alternativeName: "Rush",
    enName: null,
    names: [
      {
        name: "Гонка",
        language: "RU",
        type: "Russian title on kinopoisk",
      },
      {
        name: "Rush",
        language: null,
        type: "Original title on kinopoisk",
      },
    ],
    type: "movie",
    typeNumber: 1,
    year: 2013,
    description:
      "1970-е. Два непримиримых соперника в гонках «Формула-1» — обаятельный плейбой-англичанин Джеймс Хант и дисциплинированный перфекционист-австриец Ники Лауда — доводят себя до предела физической и психологической выносливости ради победы. Каждый из них стремится быть первым, а ошибка на трассе может стоить гонщикам жизни.",
    shortDescription:
      "Два пилота рискуют жизнью ради победы в «Формуле-1». Яростная драма с Крисом Хемсвортом и Даниэлем Брюлем",
    status: null,
    rating: {
      kp: 8.098,
      imdb: 8.1,
      filmCritics: 7.5,
      russianFilmCritics: 85.7143,
      await: null,
    },
    votes: {
      kp: 280183,
      imdb: 517336,
      filmCritics: 237,
      russianFilmCritics: 14,
      await: 0,
    },
    movieLength: 123,
    totalSeriesLength: null,
    seriesLength: null,
    ratingMpaa: "r",
    ageRating: 18,
    poster: {
      url: "https://image.openmoviedb.com/kinopoisk-images/1898899/2bf5ff35-e2d6-4e3e-8b02-c42526187d4f/orig",
      previewUrl:
        "https://image.openmoviedb.com/kinopoisk-images/1898899/2bf5ff35-e2d6-4e3e-8b02-c42526187d4f/x1000",
    },
    backdrop: {
      url: "https://image.openmoviedb.com/kinopoisk-ott-images/239697/2a00000160560d5376cca67f4a6b3348598f/orig",
      previewUrl:
        "https://image.openmoviedb.com/kinopoisk-ott-images/239697/2a00000160560d5376cca67f4a6b3348598f/x1000",
    },
    genres: [
      {
        name: "спорт",
      },
      {
        name: "драма",
      },
      {
        name: "биография",
      },
    ],
    countries: [
      {
        name: "Великобритания",
      },
      {
        name: "США",
      },
    ],
    top10: null,
    top250: 177,
    isSeries: false,
    ticketsOnSale: false,
  },
  {
    id: 46708,
    name: "Москва слезам не верит",
    alternativeName: null,
    enName: null,
    names: [
      {
        name: "Москва слезам не верит",
        language: "RU",
        type: "Russian title on kinopoisk",
      },
    ],
    type: "movie",
    typeNumber: 1,
    year: 1979,
    description:
      "Москва, 1950-е годы. Три молодые провинциалки приезжают в Москву в поисках того, что ищут люди во всех столицах мира — любви, счастья и достатка. Антонина выходит замуж, растит детей, любит мужа. Людмиле Москва представляется лотереей, в которой она должна выиграть свое особенное счастье. Катерина же отчаянно влюбляется, но избранник ее оставляет. Однако она не опускает руки, в одиночку растит дочь и к тому же успевает делать блестящую карьеру. В 40 лет судьба дарит ей неожиданную встречу.",
    shortDescription:
      "Три девушки переезжают в Москву в поисках любви, дружбы и успеха. Советский хит, отмеченный «Оскаром»",
    status: null,
    rating: {
      kp: 8.436,
      imdb: 8,
      filmCritics: 4.8,
      russianFilmCritics: 0,
      await: null,
    },
    votes: {
      kp: 727539,
      imdb: 14401,
      filmCritics: 5,
      russianFilmCritics: 1,
      await: 0,
    },
    movieLength: 150,
    totalSeriesLength: null,
    seriesLength: null,
    ratingMpaa: "pg",
    ageRating: 18,
    poster: {
      url: "https://image.openmoviedb.com/kinopoisk-images/4774061/f94e36eb-2a77-422b-94f2-c599c418497c/orig",
      previewUrl:
        "https://image.openmoviedb.com/kinopoisk-images/4774061/f94e36eb-2a77-422b-94f2-c599c418497c/x1000",
    },
    backdrop: {
      url: "https://image.openmoviedb.com/kinopoisk-ott-images/239697/2a00000161adc652b03b55793b175d20154a/orig",
      previewUrl:
        "https://image.openmoviedb.com/kinopoisk-ott-images/239697/2a00000161adc652b03b55793b175d20154a/x1000",
    },
    genres: [
      {
        name: "мелодрама",
      },
      {
        name: "драма",
      },
      {
        name: "комедия",
      },
    ],
    countries: [
      {
        name: "СССР",
      },
    ],
    top10: null,
    top250: 93,
    isSeries: false,
    ticketsOnSale: true,
  },
  {
    id: 7653,
    name: "Особенности национальной охоты",
    alternativeName: null,
    enName: null,
    names: [
      {
        name: "Особенности национальной охоты",
        language: "RU",
        type: "Russian title on kinopoisk",
      },
    ],
    type: "movie",
    typeNumber: 1,
    year: 1995,
    description:
      "Молодой финский специалист по охоте, «финик», уговаривает своего русского друга помочь ему поучаствовать в настоящей русской охоте, дабы познакомиться с нравами и привычками русских охотников.\n\nДо боли знакомые нам бесконечные застолья с последующими приключениями, насыщенными крепким запахом водки, непрестанно удивляют и поражают «финика», но все же, сопоставляя традиции исторического прошлого со своеобразием настоящего, финн не жалеет о потерянном времени...",
    shortDescription:
      "Финн приезжает к русским друзьям и увязает в бесконечных застольях и тостах. Комедийный суперхит 1990-х",
    status: null,
    rating: {
      kp: 7.801,
      imdb: 7.4,
      filmCritics: 0,
      russianFilmCritics: 0,
      await: null,
    },
    votes: {
      kp: 228321,
      imdb: 4740,
      filmCritics: 0,
      russianFilmCritics: 1,
      await: 0,
    },
    movieLength: 93,
    totalSeriesLength: null,
    seriesLength: null,
    ratingMpaa: null,
    ageRating: 18,
    poster: {
      url: "https://image.openmoviedb.com/kinopoisk-images/1777765/95329b41-326d-4e1a-a2d3-8f2298a08743/orig",
      previewUrl:
        "https://image.openmoviedb.com/kinopoisk-images/1777765/95329b41-326d-4e1a-a2d3-8f2298a08743/x1000",
    },
    backdrop: {
      url: "https://image.openmoviedb.com/kinopoisk-ott-images/239697/2a0000016127713679e0c4baafe9bfc20757/orig",
      previewUrl:
        "https://image.openmoviedb.com/kinopoisk-ott-images/239697/2a0000016127713679e0c4baafe9bfc20757/x1000",
    },
    genres: [
      {
        name: "комедия",
      },
    ],
    countries: [
      {
        name: "Россия",
      },
    ],
    top10: null,
    top250: 214,
    isSeries: false,
    ticketsOnSale: false,
  },
];
