let operations = ["--X", "X++", "X++"];
let sayi = 0;
operations.forEach((element) => {
  if (element == "--X") {
    sayi--;
  } else {
    sayi++;
  }
});
console.log(sayi);
