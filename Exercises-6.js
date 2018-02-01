//1. Melakukan Looping Menggunakan While

console.log('Looping Pertama');

var nilaiAwal  = 1;

while (nilaiAwal <= 20) {
  if (nilaiAwal % 2 === 0) {
    console.log(nilaiAwal+ '- I love coding');
    nilaiAwal++;
  }
  else {
    nilaiAwal++;
  }
}

  
console.log('Looping kedua');

var nilaiAwal  = 20;


while (nilaiAwal > 0){
  if (nilaiAwal % 2 === 0 ) {
    console.log(nilaiAwal + '- I will become fullstack developer');
  nilaiAwal--; 
  }
  else
    nilaiAwal--;
  }
  
  
//2. Melakukan Looping Menggunakan For

console.log('Looping Pertama');

for (var number = 1;number < 21; number++ ) {
  console.log(number+ '-I love coding');
}

console.log('Looping Kedua');

for(var number = 20; number > 0; number--) {
  console.log(number+ '-I will become fullstack developer')
}


//3. Angka Ganjil dan Genap
//Counter = 1

var number = 1;

while (number <= 100) {
  
  if (number % 2 === 0) {
    console.log('Counter = ' +number);
    console.log('Genap');
    number++;
  }
  else { 
    console.log('Counter = ' +number);
    console.log('Ganjil');
    number++;
  }
}


//Counter = 2

var number = 1;


while (number <= 100) {
  
  if (number % 3 === 0) {
    console.log('Counter = ' + number);
    console.log(number + ' Kelipatan 3');
    console.log(' ');
    number = number + 2;
  }
  else { 
    console.log('Counter = ' + number);
    console.log(' ');
    number = number + 2;
  }
}


//Counter = 5

var number = 1;


while (number <= 100) {
  
  if (number % 6 === 0) {
    console.log('Counter = ' + number);
    console.log(number + ' Kelipatan 6');
    console.log(' ');
    number = number + 5;
  }
  else { 
    console.log('Counter = ' + number);
    console.log(' ');
    number = number + 5;
  }
}

//Counter = 9

var number = 1;


while (number <= 100) {
  
  if (number % 10 === 0) {
    console.log('Counter = ' + number);
    console.log(number + ' Kelipatan 10');
    console.log(' ');
    number = number + 9;
  }
  else { 
    console.log('Counter = ' + number);
    console.log(' ');
    number = number + 9;
  }
}
