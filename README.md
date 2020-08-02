# SDAPP LEARNING - Belajar Bahasa Inggris

_**SDApp Learning** - Belajar Bahasa Inggris_ adalah media pembelajaran Bahasa Inggris yang ditargetkan kepada siswa SD kelas 1 hingga kelas 6.

_Dibuat oleh Mahasiswa Semester 4 sebagai salah satu pemenuhan tugas Mata Kuliah Software Development Project, Program Studi Teknik Informatika, Sekolah Tinggi Teknik Malang Tahun 2020._

> **ONLINE DEMO** => [SDApp Web](https://sdapp-learning-web.app)

# DAFTAR ISI
Repository ini berisi source code aplikasi SDApp Learning versi Web tahap Development, dibangun menggunakan bahasa pemrograman TypeScript berbasis JavaScript dengan library React JS untuk manajemen komponen & halaman serta Library Workbox untuk manajemen penyimpanan Cache

- [SDAPP LEARNING - Belajar Bahasa Inggris](#sdapp-learning---belajar-bahasa-inggris)
- [DAFTAR ISI](#daftar-isi)
- [FITUR](#fitur)
- [INSTALLASI](#installasi)
  - [Panduan Untuk Pengguna](#panduan-untuk-pengguna)
  - [Panduan Untuk Developer](#panduan-untuk-developer)
    - [Prerequisite](#prerequisite)
    - [Langkah Langkah](#langkah-langkah)
- [LANGUAGE](#language)
- [SUPPORTED PLATFORM](#supported-platform)
- [KONTRIBUTOR](#kontributor)
- [KONTRIBUTOR](#kontributor-1)
    - [Head Manager](#head-manager)
    - [Analyst](#analyst)
    - [UI/UX Designer](#uiux-designer)
    - [Developer](#developer)
    - [Quality Assurance](#quality-assurance)
- [PROGRESS](#progress)
- [LICENSE](#license)
- [CLOSING](#closing)

![Cross Platform](screenshot/cross-platform.png)

# FITUR

1. Menyediakan Materi yang dikhususkan untuk siswa kelas 1 - 6 SD
2. **Cross Platform**,
   Dapat diakses oleh sebagian besar perangkat, baik mobile maupun desktop, karena aplikasi berjalan di Browser
3. **Responsive**,
   Memiliki Layout yang responsive dan tetap rapi walau diakses dari berbagai platform yang memiliki rasio layar yang berbeda - beda
4. **Offline Ready**,
   Aplikasi ini tetap dapat dijalankan meskipun sedang dalam keadaan offline atau tidak memiliki koneksi internet yang baik.

# INSTALLASI

## Panduan Untuk Pengguna
Sebagai pengguna cukup mendownload salah satu aplikasi pada [SUPPORTED PLATFORM](#supported-platform) dan melakukan installasi seperti pada umumnya aplikasi. Atau dapat mengakses secara online pada alamat [https://sdapp-learning.web.app](https://sdapp-learning.web.app).

Jika pengguna Mobile Device. klik text "Add to Home Screen" untuk mendapatkan akses secara offline. apabila pengguna desktop. klik icon install pada Address Bar untuk mendapatkan akses secara offline.

*Note: Untuk mendapatkan akses offline. harus menggunakan browser berbasis Chrome*

## Panduan Untuk Developer

Source Code ini tidak dapat langsung dijalankan pada browser ketika telah didownload. Ada beberapa langkah dan pengetahuan khusus yang diperlukan agar aplikasi dapat berjalan dengan baik pada local server.

### Prerequisite

- Memiliki Pengetahuan & Software NodeJS
- Memiliki Pengetahuan & Package TypeScript

### Langkah Langkah

1. Clone Repository ini dengan command line `git clone https://github.com/AguzzTN54/SDApp-Learning.git` , atau jika belum menginstall git, bisa mendownload dan ekstrak secara manual
2. buka Terminal di dalam folder yang sama dengan file package.json lalu ketikan perintah `npm install` atau `yarn` untuk mendownload semua package dependensi yang dibutuhkan.
3. Aplikasi sudah dapat dimodifikasi sesuai kebutuhan dan untuk melakukan debuging pda tahap development dapat mengetikan perintah `npm run dev` atau `yarn run dev` di terminal, secara otomatis akan mengarahkan ke url `http://localhost:9000`
4. Untuk melakukan build aplikasi pada tahap production, ketikan perintah `npm run build` atau `yarn run build` pada terminal
5. Aplikasi siap diupload ke hosting statis
6. Aplikasi ini menggunakan Service Worker agar tetap dapat diakses meskipun sedang offline, untuk menonaktifkan service worker, cukup hapus kode `PWARegister()` di file `index.ts` dalam folder `src`

# LANGUAGE

1. **Visual Basic .NET**\
   Aplikasi dibangun dengan Windows Form ekosistem .NET 4.7.2 menggunakan Softaware Visual Studio 2019.\
   Versi ini dapat diinstall dan dijalankan pada Sistem Operasi Windows 10.\
   Aplikasi berbasis Windows Form ini bisa didapatkan melalui Repository ini [SDApp VB.NET](https://github.com/AguzzTN54/SDApp).

2. **TypeScript** 👁\
   Aplikasi dibangun berdasarkan konsep Progressive Web App & Trusted Web Activity menggunakan bahasa pemrograman Typescript yang berbasis Javascript dengan dukungan Library React JS dan Workbox.\
   Aplikasi versi Javascript berjalan melalui browser sehingga dapat dijalankan di berbagai platform dengan baik\
   Versi Web Aplikasi SDApp dapat diakses melalui Link ini [SDApp Web App](https://sdapp-learning.web.app)

# SUPPORTED PLATFORM

**SDApp Learning** versi Web App dibangun dengan konsep Progressive Web App dan Trusted Web Activity, dengan begitu aplikasi ini dapat berjalan secara offline hampir di semua platform. Meskipun dapat berjalan secara offline, versi TWA memerlukan browser berbasis chrome untuk berjalan. ini menjadi kendala bagi pengguna yang menggunakan browser selain chrome. untuk itu developer juga membangun versi installernya yang tidak bergantung pada browser dan 100% berjalan secara offline. Semua Package aplikasi dapat dicari pada halaman [Release](https://github.com/AguzzTN54/SDApp-Learning/releases) ini, atau dapat disimak di bawah ini :


- [Windows](https://github.com/AguzzTN54/SDApp-Learning/releases/download/v1.0-alpha/SDApp-windows10.zip)
- [Mac OS](https://github.com/AguzzTN54/SDApp-Learning/releases/download/v1.0-alpha/SDApp-macos.zip)
- [Android](https://github.com/AguzzTN54/SDApp-Learning/releases/download/v1.0-alpha/SDApp.apk)

![Home Screen](screenshot/mobile.png) ![Splash Screen](screenshot/mobile-splash-screen.png) ![Pilih Kelas](screenshot/mobile-pilih-kelas.png) ![Kelas 1](screenshot/mobile-kelas1.png)

# KONTRIBUTOR

Aplikasi dibagun bersama Tim yang berjumlah 22 Mahasiswa dari kelas TI Semester 4 Tahun 2020 dengan rincian sebagai berikut :

# KONTRIBUTOR

Aplikasi dibagun bersama Tim yang berjumlah 22 Mahasiswa dari kelas TI Semester 4 Tahun 2020 dengan rincian sebagai berikut :

### Head Manager

1. Iksanul Karim

### Analyst

1. Wildan ( Head )
2. Alvarisqi N
3. Andini
4. Arga
5. Bayu Laksana Aji
6. Indhika
7. Miranda D. A.
8. Reynaldi
9.
10. Veren

### UI/UX Designer

1. Haikal ( Head )
2. Faris
3. Abdulloh M. A.
4. Sila

### Developer

1. [Agustinus Y.](https://github.com/AguzzTN54) ( Head )
2. [Dimas E.](https://github.com/haidimas)
3. [M. Nabiel](https://github.com/Nabiel123)
4. [Venda](https://github.com/verielone)

### Quality Assurance

1. Aan Krisdianto
2. Diaztin
3. Yuri Ken

# PROGRESS

| Date            | Do                                |
| --------------- | --------------------------------- |
| `13 April 2020` | Menyusun TIM                      |
| `20 April 2020` | Menentukan Logo Tim               |
| `11 May 2020`   | Merancang Proyek                  |
| `14 Juni 2020`  | Merancang Desain Aplikasi         |
| `7 Juli 2020`   | Tahap Development ( VB.NET )      |
| `21 Juli 2020`  | Tahap Development ( PWA/TWA/Mac ) |
| `28 Juli 2020`  | Tahap Development ( Windows/Mac ) |
| `----`          | Tahap Development ( Android/IOS)  |
| `----`          | Tahap Production                  |
| `----`          | Quality Assurance                 |
| `----`          | Release Aplikasi                  |

# LICENSE

MIT

# CLOSING

Demikian Sedikit Penjelasan mengenai Aplikasi _**SDApp Learning** - Belajar Bahasa Inggris_ , Semoga dapat bermanfaat bagi pembaca atau siapapun yang terlibat, baik secara praktis maupun teoritis. Kami menyadari waktu pengerjaan aplikasi ini cukup singkat dan hasilnya jauh dari kata sempurna, untuk itu kami sangat mengharap [kritik dan saran](https://github.com/AguzzTN54/SDApp/issues/10) yang membangun sebagai bahan evaluasi kami dalam pengembangan project selanjutnya.

Selain kritik dan saran pembaca/pengguna dapat juga melakukan submit issue ketika menemukan masalah pada aplikasi ini pada Halaman [Submt Issue](https://github.com/AguzzTN54/SDApp/issues) ini.

Akhir Kata kami Ucapkan Terimakasih
