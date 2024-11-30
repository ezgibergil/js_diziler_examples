let kitapListesi = ["Kitap 1", "Kitap 2", "Kitap 3"];

// 1. Yeni bir kitap ekleyelim
kitapListesi.push("Kitap 4");
console.log("Kitap Listesi (Yeni Kitap Eklendi):", kitapListesi);

// 2. Sonuncu kitabı silelim
kitapListesi.pop();
console.log("Kitap Listesi (Son Kitap Silindi):", kitapListesi);

// 3. İlk iki kitabı seçelim

let ilkIkiKitap = kitapListesi.slice(0, 2);
console.log("İlk İki Kitap:", ilkIkiKitap);

// 4. Belirli bir kitabı (örneğin, "Kitap 2") silelim ve yerine yeni bir kitap ekleyelim
kitapListesi.splice(2,1,"AnnaKaranina");
console.log(kitapListesi);

let meyveler = ["Elma","Armut","Kiraz"];
for (let i=0; i<meyveler.length; i++){
    console.log(meyveler[i]);
}
//-----------------------------------------------------
//#FILTER
let dizi = [10,25,30,45];
let ciftSayilar = [];
for(let i=0; i<dizi.length;i++){
    let sayi = dizi[i];

    if(sayi%2==0){
        ciftSayilar.push(sayi);
    }
}
console.log(ciftSayilar);

//#6'DAN FAZLA KARAKTERE SAHİP DİLLERİ YAZDIR.

let diller = ["Python","JavaScript","C#","Java"];
for (let i=0; i<diller.length;i++){
    let dil = diller[i];
    if(dil.length>6){
        console.log(dil);
    }
}

let sonuc = diller.includes("Python"); //Python değerinin içinde olup olmadığını sorgular. true değeri döndürür.
console.log(sonuc);

//---------------------------------------------------------
//#Müşteri sipariş verdiğinde sepete ekleyin,
//#Yanlış sipariş verdiyse son siparişi silin.
//#belirli siparişleri seçin (örneğin 2-4 sipariş arasını)
//#listeye yeni bir siparişi belirli bir sıraya ekleyin.


let siparisler = ["Kebap","Lahmacun","Döner"];
// Müşterinin siparişini sepete ekleme
siparisler.push("Beyti","Pide");
console.log(siparisler);

// Yanlış verilen son siparişi silme.
siparisler.pop();
console.log(siparisler);

//Belirli siparişleri seçin (örneğin 2.4 sipariş arasını)
console.log(siparisler.slice(1, 3));

//listeye yeni bir siparişi belirli bir sıraya ekleyin.
siparisler.splice(2,1,"Çorba");
console.log(siparisler);

//------------------------------------------------------------------
//En yüksek ve en düşük notu bulun
let notlar = [60,80,50,95,40];
console.log("En yüksek not: ", Math.max(...notlar));
console.log("En düşük not: ", Math.min(...notlar));

//Ortama hesaplayın
let topla = 0;
let ortalama = 0;
for (let i=0; i<notlar.length;i++){
    toplam+=notlar[i];
    ortalama = topla/notlar.length;
}
console.log("Sınıf ortalaması; ",ortalama);

//Geçen ve Kalan Öğrencileri bul

for(let i =0; i<notlar.length; i++){
    if (notlar[i]>=50){
        console.log("Geçti");
    }
    else{
        console.log("Kaldı");
    }
}


//----------------------------------------------------------------
let sepet = [
    {urun:"Kitap",fiyat:30},
    {urun:"Kalem",fiyat:5},
    {urun:"Defter",fiyat:10}
];

//Ürünleri sepete ekleyin.

sepet.push({urun: "Silgi", fiyat: 10},
    {urun:"Cilt",fiyat:30}
);
console.log(sepet);

//Belirli bir ürünü silin.

sepet.splice(2, 0, {urun: "Silgi", fiyat: 10});
console.log(sepet);

//Toplam fiyatı hesaplayın
let toplam = 0;
for (let i=0; i<sepet.length;i++){
    toplam+=sepet[i].fiyat;
}
console.log("Fiyatların toplam: ",toplam);

//------------------------------------------------------------

let filmler = ["Matrix", "Inception", "Interstellar", "Joker"];
//Filmler alfabetik sıraya göre sıralayın.
filmler.sort();
console.log("sıralı Filmler = " + filmler);

//Kullanıcıdan bir film arayın.
let arafilm = "Matrix";
let bulundumu = false;

for (let i = 0; i < filmler.length; i++) {

    if (filmler[i] === arafilm) {
        bulundumu = true;
    }
}

if (bulundumu) {
    console.log(arafilm + "aradığın film bulundu")
}
else {
    console.log(arafilm + "aradığın film yok")
}
//Film silin.
let silinsin = "Joker";
for (let i = 0; i < filmler.length; i++) {
    filmler.splice(i, 1);
}

console.log("son film " + filmler)