/*
nums = [5,7,9,1,4,8]
1 ile 10 arasında rastgele 20 adet sayı üret
1-)bu sayılardan verilen dizi içersinde olmayanların listesi
2-)bu sayılardan verilendizi içerisinde olanların listesi
*/
let rastgeleNums: number[] = [5, 7, 9, 1, 4, 8];
let rastgeleHedef: number[] = [];

let olanlar: number[] = [];
let olmayanlar: number[] = [];

for (let i: number = 0; i < 20; i++) {
  rastgeleHedef.push(Math.floor(Math.random() * 11));
}

rastgeleHedef.forEach((rastgeleSayiX: number) => {
  if (rastgeleHedef.indexOf(rastgeleSayiX) !== -1) {
    if (olanlar.indexOf(rastgeleSayiX) == -1) {
      olanlar.push(rastgeleSayiX);
    }
  } else {
    if (olmayanlar.indexOf(rastgeleSayiX) == -1) {
      olmayanlar.push(rastgeleSayiX);
    }
  }
});
console.log("sabit sayılar:", rastgeleHedef);
console.log("rastgele sayılar :", rastgeleHedef);
console.log("olanlar :", olanlar);
console.log("olmayanlar :", olmayanlar);
