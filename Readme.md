Aplikasi ini merupakan submission untuk kelas FE expert dicoding. Dimana ini merupkana final submission yang berfokus pada implementasi TDD dan optimasi aplikasi.

# Skenario testing

## Integration Test

1. Menyukai restoran
   1. Restoran belum disukai
   2. Button untuk menyukai restoran ditampilkan
   3. Button menyukai restoran ditekan oleh pengguna
   4. Restoran ditambahkan ke dalam daftar restoran yang disukai:
      1. Restoran sudah disukai
         - Resoran tidak perlu disimpan kembali
      2. Data restoran tidak memiliki ID:
         - Aplikasi tidak memproses penyimpanan
         - Sistem tidak mengalami kegagalan
2. Batal menyukai restoran
   1. restoran sudah disukai
   2. Button untuk batal menyukai restoran ditampilkan
   3. Button pembatalan ditekan oleh pengguna
   4. Data restoran dihapus dari daftar restoran yang disukai
      1. Restoran tidak ada di dalam daftar restoran yang disukai
         - Aplikasi tidak memproses penghapusan
         - Sistem tidak mengalami kegagalan

## E2E Test

1. Menyukai restoran melalui detail page

   1. Buka halaman favorit
   2. Belum ada restoran yang disukai
   3. Buka halaman utama
   4. Scroll hingga bagian restoran
   5. Pilih restoran salah satu restoran (misal restoran pertama atau restoran paling atas sebelah kiri)
   6. Aplikasi mengarahkan ke halaman detail restoran
   7. Tekan tombol menyukai restoran
   8. Buka halaman daftar restoran yang menjadi favorit/disukai
   9. Tampil restoran yang telah disukai

2. Batal menyukai restoran melalui detail page
   1. Buka halaman favorit
   2. Belum ada restoran yang disukai
   3. Buka halaman utama
   4. Scroll hingga bagian restoran
   5. Pilih restoran salah satu restoran (misal restoran pertama atau restoran paling atas sebelah kiri)
   6. Aplikasi mengarahkan ke halaman detail restoran
   7. Tekan tombol menyukai restoran
   8. Buka halaman utama
   9. Pilih restoran yang sama dengan step 5
   10. Aplikasi mengarahkan ke halaman detail restoran
   11. Tekan tombol batal menyukai restoran
   12. Buka halaman daftar restoran yang menjadi favorit/disukai
   13. Tampil pemberitahuan bahwa belum ada restoran yang disukai
