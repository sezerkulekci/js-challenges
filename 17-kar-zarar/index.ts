// ürünler dizisi olacak. burada şirketin sahip olduğu ürünlerin listesi bulunur.
//sipariş dizisi olacak, burada alıcıların vermiş olduğu siparişler yer olur
//ADIMLAR
// 1- stoktaki bütün ürünleri listele
//2- Kullanıcıdan satın alacağı ürünün idsini girmesini iste
//3- satın alacağı üründen kaç tane almasını iste
//Bu isteğe ait bir sipariş oluştur.
//Siparişiniz alınmıştır diye mesaj yazsın
//tekrar 1. adıma dön
//*********************************************
namespace karZarar {
  interface Product {
    name: string;
    quantity: number; //stoktaki adet
    id: number;
  }
  interface Order {
    userName: string; // satın alan kişinin adı
    quantity: number;  //kaç adet satın aldığı
    id: number; // normal id
    productId: number; // satın alınan ürünün id'si.
  }
  const products: Product[] = [
    { id: 1, name: "everest klavye", quantity: 10, },
    { id: 2, name: "logitech g300 mause", quantity: 5 },
    { id: 3, name: "beats kulaklık", quantity: 3 },
    { id: 4, name: "mause pad", quantity: 8 },
    { id: 5, name: "hoparlör", quantity: 2 }
  ]

  let order: Order[] = [];

  let people = prompt('İsminizi giriniz')
  let peopleName = String(people)

  console.log(`Hoşgeldin ${peopleName}! Ürün listesi ve stok durumu aşağıdaki gibidir..`);

  function printProduct(productList: Product[]): void {
    productList.forEach(urunList => {
      console.log(urunList);

    });
  }
  let devamEt: boolean = true;

  while (devamEt) {
    printProduct(products);

    console.log("**********************************");

    let idInput = prompt('Ürün ID giriniz');
    let productId = Number(idInput);

    let adetInput = prompt('Kaç tane alacaksınız');
    let orderQuantity = Number(adetInput);

    if (isNaN(productId) || productId == 0 || isNaN(orderQuantity) || orderQuantity == 0 || orderQuantity == null) {
      console.log('Geçersiz id girildi');
    } else {
      console.log("**********************************");

      products.forEach(urun => {
        if (urun.id === productId) {
          console.log("id'si girilen ürün:", urun.name);

          if (urun.quantity >= orderQuantity) {
            console.log("sipariş alındı...");

            const data = orderQuantity
            const newOrder: Order = {
              id: urun.id,
              productId,
              quantity: data,
              userName: peopleName,

            };

            order.push(newOrder);
            console.log("siparişiniz: ", newOrder);

            console.log("**********************************");

            urun.quantity -= orderQuantity
            printProduct(products);

            devamEt = confirm('alışverişe devam etmek istiyor musunuz?')

            console.log('**************************');
            // productFunc(products)

          } else {
            console.log("stok yetersiz");
          }
        }
      })
    }
  }
  console.log('Yine bekleriz..');
}

