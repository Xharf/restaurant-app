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
