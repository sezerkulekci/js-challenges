// Challenge 6
//
// Description:
// verilen iki dizi için;
// 1: ortak elemanların olduğu
// 2: en çok tekrar eden elemanı
// bulan programı yazın
//
// Example Output:

// Verilen dizi 1: [0,1,2,3,4]
// Verilen dizi 2: [3,2,6,8,3]
// ortak eleman dizisi: [2,3]
// en çok tekrar eden eleman: 3

const array1: number[] = [0, 1, 2, 3, 4];
const array2: number[] = [3, 2, 6, 8, 3];

// EN ÇOK TEKRAR EDEN

let merging: number[] = [];
let newObj: any = {};
let repeat: number = 0;
let count: number = 0;

array1.forEach((merg: number) => {
  merging.push(merg);
});
array2.forEach((merg2: number) => {
  merging.push(merg2);
});
//(newObj[x] || 0) + 1; = newObj[x] Burada [x] undefined döneceği için [x] + 1 NaN döner.
//Bu yüzden güvenlik amaçlı || 0 kullanılıyor. eğer değer yoksa 0 döner. varsa kaç defa geçtiği döner

merging.forEach((x: number) => {
  //newObj[x] = (newObj[x] || 0) + 1;

  if (newObj[x] == undefined) {
    newObj[x] = 0;
  }
  newObj[x] += 1;
  if (newObj[x] > count) {
    count = newObj[x];
    count = x;
    repeat = x;
  }
});
console.log("en çok tekrar eden:", repeat);

console.log(newObj);

// ORTAK ELEMAN DİZİSİ

let comArr: number[] = [];

array1.forEach((common) => {
  if (array2.indexOf(common) !== -1) {
    comArr.push(common);
  }
});
console.log("ortak sayılar:", comArr);
