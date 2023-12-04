namespace tekSayi {
    // Bir dizi (array) oluşturun
    // Dizideki tek sayıları bulan ve bu sayıların toplamını hesaplayan bir fonksiyon yazın
    // Ardından, bu fonksiyonu kullanarak kaç tane tek sayı olduğunu ekrana yazdırın

    let sayilar: number[] = [2, 7, 4, 1, 8, 2, 9, 3, 7, 5, 6];

    let oddNum: number[] = [];
    let total: number = 0;
    let howMany: number = 0;

    sayilar.forEach((x: number) => {
        if (x % 2 !== 0) {
            oddNum.push(x);
        }

        if (x % 2 !== 0) {
            total += x;
        }

        if (x % 2 !== 0) {
            howMany++;
        }
    });

    console.log(oddNum);
    console.log(total);
    console.log(howMany);
}