let good: number = 0;
let nums1: number[] = [1, 2, 3, 1, 1, 3];

for (let x: number = 0; x < nums1.length; x++) {
  for (let yeni: number = x + 1; yeni < nums1.length; yeni++) {
    if (nums1[x] === nums1[yeni]) {
      good++;
    }
  }
}

console.log(good);
