var nama = '';        //input nama 
var peran = '';       //input peran (ksatria, tabib, penyihir)

if (nama ==='') {
  console.log('Nama harus diisi!');
}
else {
  console.log('Selamat datang di Dunia Proxytia, ' + nama );
}

if (peran === 'ksatria') {
  console.log('Halo ' +peran+ ' ' +nama+ ', kamu dapat menyerang dengan senjatamu!');
}
else if (peran == 'tabib') {
  console.log('Halo ' +peran+ ' ' +nama+ ', kamu akan membantu temanmu yang terluka');
}
else if (peran === 'penyihir') {
  console.log('Halo ' +peran+ ' ' +nama+ ', ciptakan keajaiban yang membantu kemenanganmu!');
}
else {
  console.log('Halo '+nama+' ,Pilih peranmu untuk memulai game!');
}







