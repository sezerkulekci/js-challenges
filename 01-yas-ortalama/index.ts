namespace yasOrtalama {
  interface familyMember {
    name: string;
    birthYas: number;
    gender: number;
  }


  const familyMembers: familyMember[] = [

    {
      name: "ali",
      birthYas: 1992,
      gender: 0,
    },
    {
      name: "ayse",
      birthYas: 1996,
      gender: 1,
    },
    {
      name: "hakan",
      birthYas: 1994,
      gender: 0,
    },
    {
      name: "merve",
      birthYas: 1999,
      gender: 1,
    },
    {
      name: "namık",
      birthYas: 1990,
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
    } else if (enKucukKisi.birthYas < kisi.birthYas) {
      enKucukKisi = kisi;
    }
    //en büyük kontrol
    if (enBuyukKisi == undefined) {
      enBuyukKisi = kisi;
    } else if (enBuyukKisi.birthYas > kisi.birthYas) {
      enBuyukKisi = kisi;
    }
    //toplam kontrolü
    aileYasOrtalamasi += currentYear - kisi.birthYas;
  });

  console.log(`ailenin yaş ortalaması ${aileYasOrtalamasi / familyMembers.length} dir`);


  if (enKucukKisi != undefined)

    console.log(`en küçük kişi ${currentYear - enKucukKisi.birthYas} yaşındadır`);

  if (enBuyukKisi != undefined)

    console.log(`en büyük kişi ${currentYear - enBuyukKisi.birthYas} yaşındadır`);




}