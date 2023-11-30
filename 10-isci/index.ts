let hours: number[] = [6, 5, 8, 4, 2, 2];
let isciTarget: number = 6;

let tamamlananSaat: number[] = [];
let yarimKalanSaat: number[] = [];

hours.forEach((hoursX: number, hoursY: number) => {
  if (hoursX >= isciTarget) {
    tamamlananSaat.push(hoursY);
  } else {
    yarimKalanSaat.push(hoursY);
  }
});
console.log(`çalışma süresini dolduran işçiler ${tamamlananSaat}`);
console.log(`çalışma süresini dolduramayan işçiler ${yarimKalanSaat}`);
