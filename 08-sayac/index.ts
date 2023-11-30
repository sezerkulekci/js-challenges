let good: number = 0;
let sayacNums1: number[] = [1, 2, 3, 1, 1, 3];

for (let x: number = 0; x < sayacNums1.length; x++) {
  for (let yeni: number = x + 1; yeni < sayacNums1.length; yeni++) {
    if (sayacNums1[x] === sayacNums1[yeni]) {
      good++;
    }
  }
}

console.log(good);
