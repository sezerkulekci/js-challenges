let operations: string[] = ["--X", "X++", "X++"];
let sayacSayi: number = 0;
operations.forEach((sayacElement: string) => {
  if (sayacElement == "--X") {
    sayacSayi--;
  } else {
    sayacSayi++;
  }
});
console.log(sayacSayi);
