# TODO --- Fashion Brand E-commerce

Daftar tugas project untuk dua anggota: **Frontend Developer** dan
**Backend Developer**. Kerjakan sesuai urutan. Jangan melompat ke
microservices lanjutan sebelum fondasi dan integrasi dasar berjalan.

**Status:**\
- `[ ]` Belum dikerjakan\
- `[x]` Selesai dan sudah diuji\
- `[~]` Sedang dikerjakan

## 0. Persiapan Bersama

-   [ ] Tentukan nama kedua anggota dan konfirmasi pembagian role.
-   [ ] Pasang Node.js LTS, Git, editor, dan PostgreSQL.
-   [ ] Buat repository GitHub dan folder project.
-   [ ] Buat `README.md` dan `TODO.md` di root repository.
-   [ ] Sepakati aturan branch, commit, dan pull request.
-   [ ] Sepakati ruang lingkup fitur versi pertama.
-   [ ] Sepakati nama brand, warna, tipografi, dan aset visual.
-   [ ] Buat daftar halaman dan data yang dibutuhkan.

## 1. Fondasi Project

### Frontend Developer

-   [ ] Buat project React + Vite di folder `frontend/`.
-   [ ] Jalankan frontend secara lokal.
-   [ ] Siapkan struktur `components/`, `pages/`, `services/`, dan
    `assets/`.
-   [ ] Buat layout dasar, navigasi, dan sistem styling.
-   [ ] Buat tampilan responsif untuk desktop dan mobile.

### Backend Developer

-   [ ] Buat project Node.js + Express di folder `backend/`.
-   [ ] Siapkan script development.
-   [ ] Buat endpoint pemeriksaan server, misalnya `GET /api/health`.
-   [ ] Siapkan konfigurasi environment menggunakan `.env`.
-   [ ] Buat `.env.example` tanpa password atau secret asli.

### Bersama

-   [ ] Pastikan frontend dan backend bisa berjalan bersamaan.
-   [ ] Dokumentasikan port lokal yang dipakai.

## 2. Perancangan Data dan API

### Backend Developer

-   [ ] Rancang model data pengguna dan role.
-   [ ] Rancang data produk, kategori, dan varian ukuran/warna.
-   [ ] Rancang data keranjang dan item keranjang.
-   [ ] Rancang data pesanan dan item pesanan.
-   [ ] Rancang data pembayaran.
-   [ ] Buat diagram relasi database (ERD).
-   [ ] Buat skema PostgreSQL dan aturan relasi.
-   [ ] Tentukan format response sukses dan error.

### Frontend Developer

-   [ ] Buat daftar field yang diperlukan di setiap halaman.
-   [ ] Tentukan kebutuhan data untuk katalog dan detail produk.
-   [ ] Tentukan state UI untuk loading, kosong, dan error.
-   [ ] Sepakati format request/response dengan backend.

### Bersama

-   [ ] Dokumentasikan kontrak API sebelum integrasi.
-   [ ] Sepakati endpoint, method, body, response, dan kode status HTTP.

## 3. Fitur Produk

### Backend Developer

-   [ ] Buat koneksi backend ke PostgreSQL.
-   [ ] Buat endpoint daftar produk.
-   [ ] Buat endpoint detail produk.
-   [ ] Buat endpoint kategori dan filter jika dibutuhkan.
-   [ ] Buat endpoint pengelolaan produk untuk admin.
-   [ ] Validasi harga, varian, dan stok.
-   [ ] Uji endpoint dengan alat API client.

### Frontend Developer

-   [ ] Buat halaman beranda.
-   [ ] Buat katalog produk.
-   [ ] Buat kartu produk.
-   [ ] Buat halaman detail produk.
-   [ ] Buat pemilihan ukuran dan warna.
-   [ ] Hubungkan halaman dengan API produk.
-   [ ] Tambahkan loading, empty state, dan error state.

### Bersama

-   [ ] Pastikan produk dari database tampil benar di frontend.
-   [ ] Uji data produk tanpa gambar dan dengan varian berbeda.

## 4. Autentikasi dan Hak Akses

### Backend Developer

-   [ ] Buat endpoint registrasi.
-   [ ] Hash password dengan algoritma yang sesuai.
-   [ ] Buat endpoint login.
-   [ ] Terapkan autentikasi token jika dipakai.
-   [ ] Buat middleware autentikasi dan role.
-   [ ] Lindungi endpoint khusus admin.

### Frontend Developer

-   [ ] Buat halaman registrasi dan login.
-   [ ] Buat validasi form sisi klien.
-   [ ] Tampilkan pesan sukses dan error.
-   [ ] Buat alur tampilan berdasarkan status login dan role.

### Bersama

-   [ ] Uji login berhasil dan gagal.
-   [ ] Pastikan pengguna biasa tidak dapat memakai endpoint admin.
-   [ ] Jangan menyimpan password asli di database atau repository.

## 5. Keranjang dan Checkout

### Backend Developer

-   [ ] Buat endpoint melihat keranjang.
-   [ ] Buat endpoint menambahkan item.
-   [ ] Buat endpoint mengubah jumlah item dan menghapus item.
-   [ ] Hitung subtotal di backend.
-   [ ] Validasi harga dan stok dari database.
-   [ ] Buat endpoint checkout dan pencatatan pesanan.
-   [ ] Simpan snapshot harga item saat pesanan dibuat.

### Frontend Developer

-   [ ] Buat halaman keranjang.
-   [ ] Buat kontrol jumlah dan hapus item.
-   [ ] Buat ringkasan subtotal.
-   [ ] Buat halaman checkout dan form data pengiriman.
-   [ ] Tampilkan ringkasan pesanan sebelum konfirmasi.

### Bersama

-   [ ] Uji keranjang kosong dan keranjang berisi beberapa item.
-   [ ] Pastikan harga tidak hanya dipercaya dari frontend.
-   [ ] Uji checkout ketika stok tidak mencukupi.

## 6. Pesanan dan Pembayaran

### Backend Developer

-   [ ] Buat endpoint daftar/detail pesanan sesuai hak akses.
-   [ ] Tentukan status pesanan dan aturan perubahannya.
-   [ ] Rancang pencatatan pembayaran.
-   [ ] Tentukan apakah pembayaran versi pertama berupa simulasi atau
    payment gateway.
-   [ ] Jika memakai payment gateway, verifikasi status dari sumber
    tepercaya/server.
-   [ ] Cegah pesanan ditandai lunas hanya berdasarkan input frontend.

### Frontend Developer

-   [ ] Buat halaman riwayat pesanan.
-   [ ] Buat halaman detail/status pesanan.
-   [ ] Buat tampilan ringkasan transaksi.
-   [ ] Tampilkan status pembayaran dan pesanan.

### Bersama

-   [ ] Uji alur checkout sampai status pesanan diperbarui.
-   [ ] Dokumentasikan batasan pembayaran jika masih berupa simulasi.

## 7. Admin dan Penyimpanan Gambar

### Backend Developer

-   [ ] Buat endpoint admin untuk tambah, ubah, dan hapus produk.
-   [ ] Buat endpoint pengelolaan stok dan pesanan.
-   [ ] Siapkan integrasi storage gambar jika dibutuhkan.
-   [ ] Simpan URL gambar di database.
-   [ ] Terapkan validasi file dan otorisasi admin.

### Frontend Developer

-   [ ] Buat dashboard admin.
-   [ ] Buat daftar dan form pengelolaan produk.
-   [ ] Buat halaman pengelolaan stok dan pesanan.
-   [ ] Buat upload gambar jika backend storage sudah tersedia.

### Bersama

-   [ ] Uji bahwa hanya admin dapat mengelola produk.
-   [ ] Uji gambar berhasil tampil setelah disimpan.

## 8. Pemisahan Microservices dan SOA

> Kerjakan setelah fitur dasar terintegrasi. Penerapan komponen lanjutan
> harus sesuai kebutuhan dan waktu project.

-   [ ] Tentukan batas tanggung jawab Auth, Product, Cart, Order,
    Payment, dan Notification Service.
-   [ ] Tetapkan kontrak API untuk setiap layanan.
-   [ ] Pisahkan layanan menjadi aplikasi/deployment independen jika
    diperlukan.
-   [ ] Buat API Gateway untuk routing dan kontrol akses.
-   [ ] Atur konfigurasi dan environment tiap layanan.
-   [ ] Tentukan strategi kepemilikan data tiap layanan.
-   [ ] Tentukan apakah komunikasi REST saja cukup atau membutuhkan
    message broker.
-   [ ] Jika dibutuhkan, integrasikan RabbitMQ untuk event/asynchronous
    messaging.
-   [ ] Tambahkan logging dan monitoring sesuai kebutuhan.
-   [ ] Dokumentasikan prinsip SOA yang benar-benar diterapkan.

## 9. Pengujian dan Penyelesaian

### Frontend Developer

-   [ ] Uji semua halaman pada desktop dan mobile.
-   [ ] Periksa tautan, form, loading, dan pesan error.
-   [ ] Periksa konsistensi tampilan dan aksesibilitas dasar.

### Backend Developer

-   [ ] Uji endpoint sukses dan gagal.
-   [ ] Uji validasi data dan otorisasi.
-   [ ] Periksa error handling dan log.
-   [ ] Pastikan secret tidak masuk repository.

### Bersama

-   [ ] Uji alur pelanggan dari katalog hingga pesanan.
-   [ ] Uji alur admin mengelola produk dan pesanan.
-   [ ] Perbaiki bug prioritas tinggi.
-   [ ] Lengkapi README dengan instruksi setup yang benar-benar diuji.
-   [ ] Siapkan demo dan dokumentasi untuk laporan.
-   [ ] Deploy jika termasuk ruang lingkup tugas.

## 10. Aturan Penyelesaian Tugas

-   [ ] Tugas baru ditandai selesai setelah kode tersedia dan diuji.
-   [ ] Perubahan API harus dikomunikasikan kepada anggota lainnya.
-   [ ] Jangan commit `.env`, password, token, atau secret.
-   [ ] Jangan menggabungkan kode yang merusak fitur utama.
-   [ ] Perbarui README/TODO jika keputusan arsitektur berubah.
-   [ ] Kerjakan langkah teknis secara bertahap dan tunggu persetujuan
    untuk berpindah ke langkah berikutnya.

## Catatan Progres

**Langkah aktif:** Belum dimulai.\
Mulai pengerjaan teknis setelah pengguna menyatakan **"mulai"**.
