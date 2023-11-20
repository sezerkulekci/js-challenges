let good = 0;
let nums = [1, 2, 3, 1, 1, 3];

for (let x = 0; x < nums.length; x++) {
  for (let yeni = x + 1; yeni < nums.length; yeni++) {
    if (nums[x] === nums[yeni]) {
      good++;
    }
  }
}

console.log(good);
