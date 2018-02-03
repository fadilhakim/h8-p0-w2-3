//1. Menyusun Barisan Bintang

var baris = 0;

while (baris <5) {
  console.log ('*');
  baris++;
}


//2. Menyusun Barisan Bintang Dengan Nested Looping

var baris = 0;
var jumlahBintang = 5;

while (baris < jumlahBintang) {
  var kolom= 0;
  var bintang = '';
  while (kolom < jumlahBintang) {
      bintang = bintang + '*';
      kolom++;
  }
  console.log(bintang);
  baris++;
}


//3. Menyusun Barisan Tangga Bintang Dengan Nested Looping


var baris = 0;
var akhir = 5;

while (baris<=akhir) {
  var kolom = 0;
  while (kolom<baris) {
    
    bintang = bintang + '*';
    kolom++;
  }
  console.log(bintang);
  var bintang = '';
  baris++;
} 
  
  
  
  
  
  
   

  
  
  
  
  







