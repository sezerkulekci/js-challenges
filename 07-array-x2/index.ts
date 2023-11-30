let arrayX2Nums: number[] = [1, 2, 1];

function spread(arrayX2Nums: number[]) {
  return [...arrayX2Nums, ...arrayX2Nums];
}
console.log(spread(arrayX2Nums));
