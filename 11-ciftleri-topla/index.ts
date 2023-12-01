namespace ciftleriTopla11 {
  let ciftToplaNums: number[] = [-1, 1, 2, 3, 1];
  let ciftTarget: number = 2;
  let ciftTopla: number = 0;

  for (let i: number = 0; i < ciftToplaNums.length; i++) {
    for (let j: number = i + 1; j < ciftToplaNums.length; j++) {
      if (ciftToplaNums[i] + ciftToplaNums[j] < ciftTarget) {
        ciftTopla++;
      }
    }
  }
  console.log(ciftTopla);
}