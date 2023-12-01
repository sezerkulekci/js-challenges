namespace tahmin {
  /*
  hedef sayi = 1-10 arasında 1 tane rastgele sayı üretilir
  1-10 arasında 20 tane rastgele sayı üretilir
  1. adımda üretilen sayıların hedef sayıya yakınlıklarına göre sıcak ya da
  soğuk olarak yazı basılacak. eğer eşleşirse de eşleşti yazılıp işlem bitcek
  2.hiç eşleşmezse de eşleşme bulunamadı yazsın
  */
  let hedef: number = 0;
  let random: number[] = [];
  let eslesti: boolean = false;

  hedef = Math.floor(Math.random() * 11);

  for (let i: number = 0; i < 5; i++) {
    random.push(Math.floor(Math.random() * 10));
  }
  console.log(random);
  console.log(hedef);

  for (let i: number = 0; i < random.length; i++) {
    const x: number = random[i];
    if (hedef == x) {
      eslesti = true;
      console.log("bulundu");
      break;
    } else if (hedef > x - 2 && hedef < x + 2) {
      console.log("sıcak");
    } else {
      console.log("soğuk");
    }
  }
  if (eslesti == true) {
    console.log("eşleşti");
  } else {
    console.log("eşleşmedi");
  }

}