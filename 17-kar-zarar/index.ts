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
    price: number; //10.5 gibi
  }
  interface Order {
    userName: string; // satın alan kişinin adı
    quantity: number;  //kaç adet satın aldığı
    id: number; // normal id
    productId: number; // satın alınan ürünün id'si.
    price: number
    totalAmount: number; // quantity*price
  }
  const products: Product[] = [
    { id: 1, name: "everest klavye", quantity: 10, price: 10.5 },
    { id: 2, name: "logitech g300 mause", quantity: 5, price: 8 },
    { id: 3, name: "beats kulaklık", quantity: 3, price: 2.7 },
    { id: 4, name: "mause pad", quantity: 8, price: 1.4 },
    { id: 5, name: "hoparlör", quantity: 2, price: 3.1 }
  ]
  let totalAmount = 0;
  let orders: Order[] = [];

  let people = prompt('İsminizi giriniz')
  let peopleName = String(people)

  console.log(`Hoşgeldin ${peopleName}! Ürün listesi ve stok durumu aşağıdaki gibidir..`);

  printProduct(products);



  function printProduct(productList: Product[]): void {
    console.table(productList);
  }
  let devamEt: boolean = true;

  while (devamEt) {


    let idInput = prompt('>> Ürün ID giriniz: ');
    let productId = Number(idInput);

    let adetInput = prompt('>> Kaç tane alacaksınız: ');
    let orderQuantity = Number(adetInput);

    if (isNaN(productId) || productId == 0 || isNaN(orderQuantity) || orderQuantity == 0 || orderQuantity == null) {
      console.log('Geçersiz id girildi');
    } else {

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
              price: urun.price,
              totalAmount: urun.price * data

            };

            orders.push(newOrder);
            console.log("siparişiniz: ", orders);
            totalAmount = 0
            orders.forEach(order => {
              totalAmount += order.totalAmount;
            })

            console.log("toplam sipariş tutarı: ", totalAmount);
            console.log("**********************************");

            urun.quantity -= orderQuantity
            printProduct(products);

            devamEt = confirm('alışverişe devam etmek istiyor musunuz?')



          } else {
            console.log("stok yetersiz");
          }
        }
      })
    }
  }
  //ödenen miktar toplamı.
  console.log("toplam sipariş tutarı: ", totalAmount);
  console.log('Yine bekleriz..');
}

