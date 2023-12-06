// ürünler dizisi olacak. burada şirketin sahip olduğu ürünlerin listesi bulunur.
//sipariş dizisi olacak, burada alıcıların vermiş olduğu siparişler yer olur
//ADIMLAR
// 1- stoktaki bütün ürünleri listele
//2- Kullanıcıdan satın alacağı ürünün idsini girmesini iste
//3- satın alacağı üründen kaç tane almasını iste
//Bu isteğe ait bir sipariş oluştur.
//Siparişiniz alınmıştır diye mesaj yazsın
//tekrar 1. adıma dön
//***********************
// namespace karZarar {
//     interface Product {
//         name: string;
//         quantity: number; //stoktaki adet
//         id: number;
//     }
//     interface Order {
//         userName: string; // satın alan kişinin adı
//         quantity: number;  //kaç adet satın aldığı
//         id: number; // normal id
//         productId: number; // satın alınan ürünün id'si.
//     }
//     const products: Product[] = [
//         { id: 1, name: "everest klavye", quantity: 10, },
//         { id: 2, name: "logitech g300", quantity: 5 },
//         { id: 3, name: "beats kulaklık", quantity: 3 },
//         { id: 4, name: "mause pad", quantity: 8 },
//         { id: 5, name: "hoparlör", quantity: 2 }
//     ]
//     const orders: Order[] = [{ id: 12, productId: 1, quantity: 1, userName: "ali" }]
//     prompt('id giriniz')
//     products.forEach(urunler => {
//         console.log(urunler);

//     })

//}
//KOD BİTİNCE TYPESCRİPTE ÇEVRİLECEK

const products = [
  { id: 1, name: "everest klavye", quantity: 10 },
  { id: 2, name: "logitech g300", quantity: 5 },
  { id: 3, name: "beats kulaklık", quantity: 3 },
  { id: 4, name: "mause pad", quantity: 8 },
  { id: 5, name: "hoparlör", quantity: 2 },
];
const orders = [{ id: 12, productId: 1, quantity: 1, userName: "ali" }];

const prompt = require("prompt-sync")({ sigint: true });

let box = undefined;
let urunId = 0;
let adet = 0;

if (box == undefined) {
  urunId = prompt("ürün id girin ");
  adet = prompt("kaç adet ");
  console.log(urunId, "id li üründen ", adet + " tane istediniz");
}
products.forEach((x) => {});
