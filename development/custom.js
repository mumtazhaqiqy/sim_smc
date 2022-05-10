var kop = {
  text: 'SMC Medical Centre\nJL. A. Yani no.172 , Kepanjen , Kabupaten Malang, Jawa Timur.\n\n',
  alignment: 'center', bold: true
}, namaRS = 'SMC Medical Centre',  letakRS = 'Malang', // kota/kabupaten/desa lokasi RS
tarifIGD = 45000, tarifKartu = 8000, // dalam rupiah
kodepoli =     ['mata', 'syaraf', 'dalam',          'jantung','ana'], // referensi INACBGs
klinik =       ['mata', 'syaraf', 'penyakit_dalam', 'jantung','ana'], // poliklinik yg tersedia
tarif_klinik = [ 120,    120,      120,              120,      120  ], // dalam ribu rupiah
// silahkan ubah/tambah/kurangi pilihan poliklinik, pastikan ketiga array diatas sejajar layaknya tabel
beds = { // tarif dalam ribu rupiah
  vip: {tarif: 350, kamar: {tulip: 1, bougenvil: 1, sakura: 1}}, // jumlah bed pada masing2 kamar
  kl1: {tarif: 200, kamar: {kenanga: 2, cempaka: 2, claudia: 2, ferbia: 2, yasmin: 2, edelwise: 2}},
  kl2: {tarif: 150, kamar: {seroja: 3, mawar: 2, dahlia: 2, lili: 2, zahara: 2, matahari: 4}},
  kl3: {tarif: 100, kamar: {anggrek: 4, teratai: 7, kertas: 3, melati: 5}}
}, // ragam kelas dan ragam kamarnya boleh diubah/ditambah/dikurangi
defaultTheme = 'sandstone'
