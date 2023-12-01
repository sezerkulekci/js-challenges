namespace bolunebilme {
  // Challenge 2
  //
  // Description:
  // 1'den 100'e kadar sayilardan 3'e ve 5'e ayni anda bolunebilen sayilarin sayisi ve toplami ?
  //
  // Example Output:
  // Kosula uyan toplam numara sayisi: 17
  // Kosula uyan numaralarin toplami: 48

  let toplam1: number = 0;
  let liste: number = 0;

  for (let i = 1; i <= 100; i++) {
    if (i % 3 == 0 && i % 5 == 0) {
      toplam1 += i;
      liste++;
    }
  }
  console.log("sayıların toplamı: " + toplam1);
  console.log("liste sayısı :" + liste);
}