// Challenge 4
//
// Description:
// bir dizideki sayilari benzersiz bir dizi olusturan program
//
// Example Output:
// Verilen dizi: [0,9,4,9,5,4,7,0,5,4]
// Benzersiz dizi: [0,9,4,5,7]

let verilenDizi = [0, 9, 4, 9, 5, 4, 7, 0, 5, 4];
let sade = [];

verilenDizi.forEach((sayi) => {
  if (sade.indexOf(sayi) == -1) {
    sade.push(sayi);
  }
});
console.log(sade);
