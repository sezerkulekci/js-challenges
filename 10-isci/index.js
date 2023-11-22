let hours = [6, 5, 8, 4, 2, 2];
let target = 6;

let tamamlananSaat = [];
let yarimKalanSaat = [];

hours.forEach((x, y) => {
  if (x >= target) {
    tamamlananSaat.push(y);
  } else {
    yarimKalanSaat.push(y);
  }
});
console.log(`çalışma süresini dolduran işçiler ${tamamlananSaat}`);
console.log(`çalışma süresini dolduramayan işçiler ${yarimKalanSaat}`);
