
interface familyMember {
  name: string;
  birth: number;
  gender: number;
}


const familyMembers: familyMember[] = [

  {
    name: "ali",
    birth: 1992,
    gender: 0,
  },
  {
    name: "ayse",
    birth: 1996,
    gender: 1,
  },
  {
    name: "hakan",
    birth: 1994,
    gender: 0,
  },
  {
    name: "merve",
    birth: 1999,
    gender: 1,
  },
  {
    name: "namık",
    birth: 1990,
    gender: 0,
  },
];

const currentYear: number = new Date().getFullYear();

// Expectations
// 1. En genc aile uyesi -- adını ve yaşını yazdırcam
// 2. En yaslı aile üyesi
// 3. ailenin yaş ortalaması



let enKucuk: familyMember | undefined = undefined;
let enBuyuk: familyMember | undefined = undefined;
let sonuc: number = 0;


familyMembers.forEach((kisi) => {
  //en küçük kontrol
  if (enKucuk == undefined) {
    enKucuk = kisi;
  } else if (enKucuk.birth < kisi.birth) {
    enKucuk = kisi;
  }
  //en büyük kontrol
  if (enBuyuk == undefined) {
    enBuyuk = kisi;
  } else if (enBuyuk.birth > kisi.birth) {
    enBuyuk = kisi;
  }
  //toplam kontrolü
  sonuc += currentYear - kisi.birth;
});


console.log(`ailenin yaş ortalaması ${sonuc / familyMembers.length} dir`);


if (enKucuk != undefined)

  console.log(`en küçük kişi ${currentYear - enKucuk.birth} yaşındadır`);

if (enBuyuk != undefined)

  console.log(`en büyük kişi ${currentYear - enBuyuk.birth} yaşındadır`);




