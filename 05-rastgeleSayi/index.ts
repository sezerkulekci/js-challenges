namespace rastgeleSayi05 {
  // Challenge 5
  //
  // Description:
  // 1-100 arasinda rastgele uretilen 10 sayidan en kucugu ile en buyugunu ve aritmetik ortalamayi bulan program.
  //
  // Example Output:
  // Uretilen sayilar: [10,9,34,9,15,24,7]
  // En kucuk sayi: [7]
  // En buyuk sayi: [34]
  // Aritmetik ortalama: [21]

  //DEĞİŞKENLER
  let yeniDizi: number[] = [];
  let enKucukSayi: number | undefined = undefined;
  let enBuyukSayi: number | undefined = undefined;
  let toplamSayi: number = 0;
  let ortalamaSayi: number | undefined = undefined;
  //RASTGELE SAYI
  for (let sayi = 0; sayi < 10; sayi++) {
    yeniDizi.push(Math.floor(Math.random() * 101));
  }

  yeniDizi.forEach((x) => {
    //EN KÜÇÜK SAYI
    if (enKucukSayi == undefined) {
      enKucukSayi = x;
    } else if (x < enKucukSayi) {
      enKucukSayi = x;
    }
    if (enBuyukSayi == undefined) {
      enBuyukSayi = x;
    } else if (x > enBuyukSayi) {
      enBuyukSayi = x;
    }
    toplamSayi += x;
  });

  ortalamaSayi = toplamSayi / yeniDizi.length;

  console.log(`1-100 arası rastgele 10 sayı : ${yeniDizi}`);
  console.log(`Aralarındaki en küçük sayı : ${enKucukSayi}`);
  console.log(`Aralarındaki en büyük sayı : ${enBuyukSayi}`);
  console.log(`Sayıların Aritmetik ortalaması ${ortalamaSayi}`);
}