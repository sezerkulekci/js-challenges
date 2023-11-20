let nums = [1, 2, 1];

function spread(nums) {
  return [...nums, ...nums];
}
console.log(spread(nums));
