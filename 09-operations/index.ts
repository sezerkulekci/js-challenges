let operations: string[] = ["--X", "X++", "X++"];
let operationsNumber: number = 0;
operations.forEach((sayacElement: string) => {
  if (sayacElement == "--X") {
    operationsNumber--;
  } else {
    operationsNumber++;
  }
});
console.log(operationsNumber);
