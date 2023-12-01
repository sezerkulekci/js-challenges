namespace rastgele20Sayi {
  /*
  nums = [5,7,9,1,4,8]
  1 ile 10 arasında rastgele 20 adet sayı üret
  1-)bu sayılardan verilen dizi içersinde olmayanların listesi
  2-)bu sayılardan verilendizi içerisinde olanların listesi
  */
  let sabitSayilar: number[] = [5, 7, 9, 1, 4, 8];
  let rastgele20Sayi: number[] = [];
  let olanSayi: number[] = [];
  let olmayanSayi: number[] = [];

  for (let i: number = 0; i < 20; i++) {
    rastgele20Sayi.push(Math.floor(Math.random() * 11));
  }
  rastgele20Sayi.forEach((randomNum: number) => {
    if (sabitSayilar.indexOf(randomNum) !== -1) {
      if (olanSayi.indexOf(randomNum) == -1) {
        olanSayi.push(randomNum);
      }
    } else if (sabitSayilar.indexOf(randomNum) == -1) {
      if (olmayanSayi.indexOf(randomNum)) {
        olmayanSayi.push(randomNum);
      }
    }
  });
  console.log("sabit sayılar :", sabitSayilar);
  console.log("rastgele sayi :", rastgele20Sayi);
  console.log("olan sayi: ", olanSayi);
  console.log("olmayan sayilar", olmayanSayi);
}