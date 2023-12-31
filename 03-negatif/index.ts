namespace negatif {
  // Challenge 3
  //
  // Description:
  // bir dizideki sayilari pozitif ve negatif olmak uzere 2 yeni diziye yerlestiren uygulama
  //
  // Example Output:
  // Verilen dizi: [3,9,-2,0,4,-1,-7]
  // Pozitif dizi: [3,9,4]
  // Negatif dizi: [-2,-1,-7]

  const sayilar: number[] = [3, 9, -2, 0, 4, -1, -7];
  const pozitif: number[] = [];
  const negatif: number[] = [];

  sayilar.forEach((sayi: number) => {
    if (sayi >= 0) {
      pozitif.push(sayi);
    } else {
      negatif.push(sayi);
    }
  });
  console.log("pozitif sayılar: " + pozitif);
  console.log("negatif sayılar: " + negatif);

}