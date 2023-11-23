/*
nums = [5,7,9,1,4,8]
1 ile 10 arasında rastgele 20 adet sayı üret
1-)bu sayılardan verilen dizi içersinde olmayanların listesi
2-)bu sayılardan verilendizi içerisinde olanların listesi
*/
let nums = [5, 7, 9, 1, 4, 8];
let hedef = [];

let olanlar = [];
let olmayanlar = [];

for (let i = 0; i < 20; i++) {
  hedef.push(Math.floor(Math.random() * 11));
}

hedef.forEach((x) => {
  if (nums.indexOf(x) !== -1) {
    if (olanlar.indexOf(x) == -1) {
      olanlar.push(x);
    }
  } else {
    if (olmayanlar.indexOf(x) == -1) {
      olmayanlar.push(x);
    }
  }
});
console.log("sabit sayılar:", nums);
console.log("rastgele sayılar :", hedef);
console.log("olanlar :", olanlar);
console.log("olmayanlar :", olmayanlar);
