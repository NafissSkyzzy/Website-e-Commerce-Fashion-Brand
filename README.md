# Fashion Brand E-commerce

Website e-commerce untuk brand fashion yang dirancang menggunakan
pendekatan **microservices** dengan menerapkan prinsip
**Service-Oriented Architecture (SOA)**. Project dikerjakan oleh dua
orang dengan pembagian tanggung jawab frontend dan backend.

> **Catatan:** Dokumen ini adalah rancangan awal. Teknologi dan fitur
> yang belum benar-benar diterapkan tidak boleh dianggap sudah selesai.
> Tahapan pengerjaan dilakukan secara bertahap; mulai dari fondasi
> website, lalu integrasi, dan kemudian pemisahan layanan microservices.

## Tujuan Project

-   Membangun website toko fashion online.
-   Memungkinkan pelanggan melihat katalog, detail produk, memilih
    ukuran/warna, mengelola keranjang, checkout, dan melihat status
    pesanan.
-   Menyediakan dashboard admin untuk mengelola produk, stok, dan
    pesanan.
-   Menerapkan API yang jelas agar frontend dan backend dapat
    dikembangkan secara terpisah.
-   Mengembangkan arsitektur menuju microservices dan prinsip SOA secara
    bertahap.

## Pembagian Role

  -----------------------------------------------------------------------
  Role                    Tanggung jawab utama    Pemilik
  ----------------------- ----------------------- -----------------------
  Frontend Developer      Antarmuka React,        Nama anggota frontend
                          halaman, komponen,      diisi di sini
                          validasi sisi klien,    
                          integrasi API,          
                          responsivitas           

  Backend Developer       API Node.js/Express,    Nama anggota backend
                          logika bisnis, database diisi di sini
                          PostgreSQL,             
                          autentikasi, keamanan,  
                          integrasi layanan       
  -----------------------------------------------------------------------

Kedua anggota bertanggung jawab bersama untuk menyepakati kontrak API,
pengujian integrasi, dokumentasi, dan Git workflow.

## Teknologi yang Direncanakan

  -----------------------------------------------------------------------
  Bagian                  Teknologi               Kegunaan
  ----------------------- ----------------------- -----------------------
  Frontend                React + Vite            Membangun antarmuka
                                                  website

  Backend                 Node.js + Express.js    Membuat API dan logika
                                                  bisnis

  Database                PostgreSQL              Menyimpan data
                                                  terstruktur

  Komunikasi              REST API + JSON         Pertukaran data
                                                  frontend-backend

  Autentikasi             JWT (saat tahap         Identitas pengguna dan
                          autentikasi)            akses terproteksi

  Penyimpanan gambar      Cloudinary atau object  Menyimpan foto produk
                          storage (opsional)      

  API Gateway             Node.js + Express.js    Pintu masuk menuju
                          (tahap pengembangan     layanan backend
                          arsitektur)             

  Message broker          RabbitMQ (opsional,     Pesan/event asinkron
                          tahap lanjutan)         antar layanan
  -----------------------------------------------------------------------

**Batasan:** Project tidak menggunakan Laravel maupun Laragon. RabbitMQ,
service registry, monitoring terpusat, dan payment gateway hanya
ditambahkan jika diperlukan dan sesuai kemampuan implementasi.

## Fitur Utama

### Pelanggan

-   Melihat katalog dan detail produk.
-   Mencari atau memfilter produk jika fitur tersebut masuk ruang
    lingkup.
-   Memilih ukuran dan warna produk.
-   Mengelola keranjang belanja.
-   Melakukan checkout dan membuat pesanan.
-   Melihat riwayat serta status pesanan.

### Guest

-   Melihat katalog dan detail produk tanpa login.

### Admin

-   Mengelola produk, kategori, harga, ukuran, warna, dan stok.
-   Melihat serta mengelola pesanan.
-   Mengelola informasi brand.
-   Melihat laporan sederhana jika termasuk ruang lingkup.

## Gambaran Arsitektur

Alur umum:

1.  Pengguna berinteraksi dengan frontend React.
2.  Frontend mengirim request ke backend melalui REST API.
3.  Backend memvalidasi request dan menjalankan logika bisnis.
4.  Backend membaca atau mengubah data di PostgreSQL.
5.  Backend mengirim response JSON ke frontend.
6.  Foto produk dapat disimpan di layanan file storage, sedangkan
    database menyimpan URL atau referensinya.

Rencana layanan backend: - **Auth Service:** registrasi, login, akun,
dan role. - **Product Service:** katalog, kategori, variasi, harga, dan
stok. - **Cart Service:** keranjang dan subtotal. - **Order Service:**
checkout, detail, dan status pesanan. - **Payment Service:** pencatatan
dan status pembayaran. - **Notification Service:** notifikasi
pesanan/pembayaran jika diterapkan.

Layanan tersebut adalah target arsitektur. Untuk tahap awal, backend
boleh dibuat sebagai satu aplikasi modular terlebih dahulu, lalu dipisah
menjadi service independen setelah alur utama berfungsi. Jangan
mengklaim seluruh layanan sudah berupa microservices sebelum benar-benar
dipisahkan dan diuji.

## Rencana Struktur Folder

Struktur awal yang disarankan:

``` text
fashion-brand-ecommerce/
├── frontend/
│   ├── src/
│   │   ├── components/
│   │   ├── pages/
│   │   ├── services/
│   │   └── assets/
│   └── README.md
├── backend/
│   ├── src/
│   │   ├── routes/
│   │   ├── controllers/
│   │   ├── services/
│   │   ├── repositories/
│   │   ├── middleware/
│   │   └── config/
│   ├── .env.example
│   └── README.md
├── README.md
└── TODO.md
```

Struktur dapat berubah ketika API Gateway dan layanan microservices
dipisah menjadi aplikasi tersendiri.

## Persiapan Lingkungan

Pasang: - Node.js versi LTS. - Visual Studio Code atau editor sejenis. -
PostgreSQL dan pgAdmin (opsional, untuk pengelolaan database secara
visual). - Git. - Browser modern.

Laravel dan Laragon tidak digunakan.

## Kontrak Kerja Frontend dan Backend

Sebelum membuat integrasi, kedua anggota perlu menyepakati: - Nama
endpoint dan HTTP method. - Bentuk request dan response JSON. - Format
error response. - Field data produk, varian, pesanan, dan pengguna. -
Cara autentikasi dan pengiriman token. - URL base API untuk pengembangan
lokal.

Contoh endpoint yang direncanakan (belum tentu sudah dibuat):

  Method   Endpoint               Kegunaan
  -------- ---------------------- ----------------------------
  GET      `/api/products`        Daftar produk
  GET      `/api/products/:id`    Detail produk
  POST     `/api/auth/register`   Registrasi
  POST     `/api/auth/login`      Login
  GET      `/api/cart`            Melihat keranjang
  POST     `/api/cart/items`      Menambahkan item keranjang
  POST     `/api/orders`          Membuat pesanan
  GET      `/api/orders/:id`      Detail/status pesanan

## Git Workflow yang Disarankan

-   Gunakan branch `main` untuk versi yang stabil.
-   Buat branch fitur, misalnya `feat/frontend-catalog` atau
    `feat/backend-products`.
-   Commit dengan pesan yang jelas, misalnya
    `feat: add product catalog endpoint`.
-   Pull perubahan terbaru sebelum mulai bekerja.
-   Jangan commit file `.env`, password, token, atau secret.
-   Lakukan review dan uji integrasi sebelum merge ke `main`.

## Cara Menjalankan Project

Instruksi menjalankan project akan dilengkapi setelah tahap setup
dilakukan. Perintah, port, dan konfigurasi final harus mengikuti kondisi
project yang benar-benar dibuat; jangan menganggap contoh konfigurasi
sebagai konfigurasi final.

## Dokumentasi Progres

-   Gunakan [`TODO.md`](./TODO.md) untuk daftar pekerjaan dan status.
-   Tandai tugas hanya setelah selesai dan diuji.
-   Catat keputusan teknologi atau perubahan struktur penting di bagian
    ini.

## Status Saat Ini

**Status: Perencanaan awal.** Pengerjaan teknis dilakukan bertahap.
Mulai coding hanya setelah pemilik project menyatakan **"mulai"**.
