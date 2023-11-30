let a: number[] = [-1, 1, 2, 3, 1];
let target: number = 2;
let ciftTopla: number = 0;

for (let i: number = 0; i < a.length; i++) {
  for (let j: number = i + 1; j < a.length; j++) {
    if (a[i] + a[j] < isciTarget) {
      ciftTopla++;
    }
  }
}
console.log(ciftTopla);
