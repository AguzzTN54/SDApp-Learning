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
  - [Visual Basic .NET](#visual-basic-net)
  - [TypeScript 👁](#typescript-)
- [SUPPORTED PLATFORM](#supported-platform)
    - [Web App](#web-app)
    - [Windows](#windows)
    - [Mac OS](#mac-os)
    - [Android](#android)
    - [IOS](#ios)
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

## Visual Basic .NET
Aplikasi dibangun dengan Windows Form ekosistem .NET 4.7.2 menggunakan Softaware Visual Studio 2019.\
Versi ini dapat diinstall dan dijalankan pada Sistem Operasi Windows 10.\
Aplikasi berbasis Windows Form ini bisa didapatkan melalui Repository ini [SDApp VB.NET](https://github.com/AguzzTN54/SDApp).

## TypeScript 👁
Aplikasi dibangun berdasarkan konsep Progressive Web App & Trusted Web Activity menggunakan bahasa pemrograman Typescript yang berbasis Javascript dengan dukungan Library React JS dan Workbox.\
Aplikasi versi Javascript berjalan melalui browser sehingga dapat dijalankan di berbagai platform dengan baik\
Versi Web Aplikasi SDApp dapat diakses melalui Link ini [SDApp Web App](https://sdapp-learning.web.app)

# SUPPORTED PLATFORM

Berdasarkan Issue _"[Alternaif untuk platform selain Windows #11](https://github.com/AguzzTN54/SDApp/issues/11)"_ Tim Developer merasa tertantang dan juga membangun aplikasi **SDApp Learning** yang dapat dijalankan dari berbagai platform. sehingga pengguna dapat merasakan pengalaman yang sama meskipun memiliki perbedaan operating sistem. Package Aplikasi untuk platform selain Windows dapat ditemukan pada halaman [Release](https://github.com/AguzzTN54/SDApp/releases) atau dapat dilihat di bawah ini

![Cross Platform](screenshot/cross-platform.png)

### Web App

Aplikasi dibangun menggunakan Bahasa Pemrograman Typescript kemudian dideploy ke Heroku untuk Back End dan Google Firebase Hosting untuk Front End. Meskipun merupakan berbasis web, Aplikasi ini tetap dapat dijalankan meskipun dalam keadaan offline. ini dapat terjadi atas dukungan dari library `Workbox`

Keunggulan dari Web Application ini, adalah dapat diakses dari berbagai platform tanpa perlu susah susah mendonwload & meginstall file installer yang cukup besar. Web App ini juga telah menerapkan konsep Progressive Web App sehingga dapat ditambahkan ke homescreen dan bersifat layaknya Aplikasi Native lainnya, baik pada Android, Windows, maupun IOS. Web Application ini dapat diakses melalui :\
[https://sdapp-learning.web.app](https://sdapp-learning.web.app)

### Windows

Untuk menginstall package yang dibangun dengan ekosistem .NET, sistem operasi harus memiliki `.NET Framework Runtime`, apabila tidak, maka aplikasi tidak dapat berjalan. Untuk itu developer hendak mengatasi masalah tersebut dengan membangun versi alternatif yang lebih mudah untuk diinstall, diantaranya :

1. **VB.NET Version**,
   Merupakan Aplikasi utama, dibangun dengan Windows Form menggunakan Visual Studio 2019 dengan ekosistem .NET 4.7.2.\
   [SDApp Learning - VB.NET](https://github.com/AguzzTN54/SDApp/releases/download/v1.0-alpha/SDApp.Learning.-.VB.NET.zip) - 35.9 MB
2. **TWA Version**,
   Merupakan pengembangan dari Versi Web App yang telah dibundle menjadi satu installer. Versi ini berjalan dengan cara "Numpang" pada aplikasi browser, khususnya Chrome, sehingga size dari versi ini terbilang sangatlah kecil. namun harus online saat pertama kali aplikasi dibuka, namun proses installasi cukup rumit\
   [SDApp Learning - Appx Bundle](https://github.com/AguzzTN54/SDApp-Learning/releases/download/v1.0-alpha/SDApp-windows10.zip) - 20 KB
3. **Universal Installer**,
   Memiliki file size yang cukup besar. 100% offline sejak pertama kali diinstall. Mudah untuk diinstall. Tidak bergantung pada aplikasi lain. Dibangun menggunakan Library Electron\
   [SDApp Learning.msi](https://github.com/AguzzTN54/SDApp/releases/download/v1.0-alpha/SDApp_Learning-1.0.0-setup.msi) - 64.2 MB\
   [SDApp Learning.exe](https://github.com/AguzzTN54/SDApp/releases/download/v1.0-alpha/SDApp_Learning-1.0.0-setup.exe) - 64.2 MB

### Mac OS

Untuk Saat ini hanya tersedia versi App bundle nya saja. Ini merupakan pengembangan dari versi Web App. berjalan di atas browser berbasis Chrome, memiliki file size yang sangat kecil, namun harus online saat pertama kali dijalankan, serta langkah instalasi yang rumit.\
[SDApp Learning_TWA - Mac OS](https://github.com/AguzzTN54/SDApp-Learning/releacses/download/v1.0-alpha/SDApp-macos.zip) - 707 KB

### Android

Developer juga menyadari bahwa tingkat penggunaan mobile device bagi anak anak usia SD lebih tinggi dibanding penggunaan Desktop Device. Selain itu Mobile device dirasa lebih praktis digunakan dimana saja. Terdapat 2 versi aplikasi yang dibangun oleh developer, yaitu versi _TWA / Custom Tab_ dan _Native_. keduanya bisa didapatkan melalui link berikut :

1. **TWA Version**\
   Versi TWA, merupakan hasil dari pengembangan SDApp Progressive Web App yang kemudian dibundle menjadi satu package yang dapat diinstall layaknya aplikasi Native lainnya. Versi TWA berjalan di atas browser Chrome, sehingga apabila Chrome tidak terinstall atau masih versi lawas, Versi TWA ini tidak akan berjalan dengan baik. Untuk mendownload versi ini, dapat melalui link berikut :\
   [SDApp - Learning_TWA.apk](https://github.com/AguzzTN54/SDApp-Learning/releases/download/v1.0-alpha/SDApp.apk) - 3.1 MB
2. **Native Version**\
   Dibangun Secara Native, berdiri sendiri, tidak terpengaruh aplikasi lain untuk dijalankan, support Android 6.0 ( Marsmallow ) ke Atas, Versi Native dapat didownload melalui link Berikut :\
   [SDApp Learning.apk]() _Comming Soon_

### IOS

Aplikasi IOS dan Android ( Native ), memiliki satu source code yang sama, hanya saja menjalani proses Production yang berbeda. Aplikasi untuk IOS dapat didownload melalui link berikut :\
[SDApp Learning.ipa]() _Comming Soon_

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
