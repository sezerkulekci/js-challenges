let nums = [-1, 1, 2, 3, 1];
let target = 2;
let test = 0;

for (let i = 0; i < nums.length; i++) {
  for (let j = i + 1; j < nums.length; j++) {
    if (nums[i] + nums[j] < target) {
      test++;
    }
  }
}
console.log(test);
