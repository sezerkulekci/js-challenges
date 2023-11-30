
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



let enKucukKisi: familyMember | undefined = undefined;
let enBuyukKisi: familyMember | undefined = undefined;
let aileYasOrtalamasi: number = 0;


familyMembers.forEach((kisi) => {
  //en küçük kontrol
  if (enKucukKisi == undefined) {
    enKucukKisi = kisi;
  } else if (enKucukKisi.birth < kisi.birth) {
    enKucukKisi = kisi;
  }
  //en büyük kontrol
  if (enBuyukKisi == undefined) {
    enBuyukKisi = kisi;
  } else if (enBuyukKisi.birth > kisi.birth) {
    enBuyukKisi = kisi;
  }
  //toplam kontrolü
  aileYasOrtalamasi += currentYear - kisi.birth;
});

console.log(`ailenin yaş ortalaması ${aileYasOrtalamasi / familyMembers.length} dir`);


if (enKucukKisi != undefined)

  console.log(`en küçük kişi ${currentYear - enKucukKisi.birth} yaşındadır`);

if (enBuyukKisi != undefined)

  console.log(`en büyük kişi ${currentYear - enBuyukKisi.birth} yaşındadır`);




