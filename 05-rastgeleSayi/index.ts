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
let enKucuk: number | undefined = undefined;
let enBuyuk: number | undefined = undefined;
let toplam: number = 0;
let ortalama: number | undefined = undefined;
//RASTGELE SAYI
for (let sayi: number = 0; sayi < 10; sayi++) {
  yeniDizi.push(Math.floor(Math.random() * 101));
}

yeniDizi.forEach((x: number) => {
  //EN KÜÇÜK SAYI
  if (enKucuk == undefined) {
    enKucuk = x;
  } else if (x < enKucuk) {
    enKucuk = x;
  }
  if (enBuyuk == undefined) {
    enBuyuk = x;
  } else if (x > enBuyuk) {
    enBuyuk = x;
  }
  toplam += x;
});

ortalama = toplam / yeniDizi.length;

console.log(`1-100 arası rastgele 10 sayı : ${yeniDizi}`);
console.log(`Aralarındaki en küçük sayı : ${enKucuk}`);
console.log(`Aralarındaki en büyük sayı : ${enBuyuk}`);
console.log(`Sayıların Aritmetik ortalaması ${ortalama}`);
