## Pawchive Downloader — CBZ, ZIP & PDF

Preview, select, edit and download images from [pawchive.pw](https://pawchive.pw) in bulk. Creators are treated as "manga" and posts as "chapters", so the output works well with manga readers such as Mihon.

> ⚠️ **Disclosure:** This script was made 100% using AI.

**Source code & bug reports:** [GitHub](https://github.com/qxyraxp/pawchive-downloader) · [Issues](https://github.com/qxyraxp/pawchive-downloader/issues)

<img src="https://raw.githubusercontent.com/qxyraxp/pawchive-downloader/main/screenshots/preview.webp" alt="Preview and edit window" width="700">

### Features

- Preview and select the images you want to download
- Edit images before downloading: merge, split, crop and resize
- Download as **ZIP**, **PDF**, loose **images**, or **CBZ**
- CBZ output for **Mihon**: `ComicInfo.xml`, `details.json` and a cover image
- Mihon cover modes: Off, Once, Each chapter, or animated GIF
- Optional image conversion inside CBZ (JPG / WebP / AVIF, adjustable quality)
- PDF compression (Light, Medium, Strong)
- Multi-creator download queue with a "Done" tab
- Queue output: merge into 1 file, 1 file per manga, or per chapter
- Search and notifications
- Folder names and Series titles can be converted to **romaji** automatically
- Merge chapters, reorder pages, and move pages between chapters
- Settings are saved automatically
- UI available in Indonesian and English

### Screenshots

**Download queue (PDF / ZIP / IMG / Mihon CBZ)**

<img src="https://raw.githubusercontent.com/qxyraxp/pawchive-downloader/main/screenshots/preview%20%282%29.webp" alt="Download queue" width="700">

**Settings (CBZ conversion, Mihon metadata & cover, PDF compression)**

<img src="https://raw.githubusercontent.com/qxyraxp/pawchive-downloader/main/screenshots/preview%20%281%29.webp" alt="Settings" width="700">

### Third-party libraries

The romaji conversion uses these libraries, loaded at runtime from the jsDelivr CDN with pinned versions:

- [kuroshiro](https://github.com/hexenq/kuroshiro) 1.2.0
- kuroshiro-analyzer-kuromoji 1.1.0
- kuromoji 0.1.2 (dictionary data only, about 17 MB, downloaded once)

They run inside a Web Worker so the dictionary is processed off the main thread and the page does not freeze. That is why they are loaded with `importScripts()` and not `@require`. Everything else is written from scratch and included in this script.

### Privacy

- Runs only on `pawchive.pw` and its subdomains.
- Settings are stored locally through `GM_setValue`.
- No data is sent to any third-party server. There is no analytics or tracking.

---

## Pawchive Downloader — CBZ, ZIP & PDF (Bahasa Indonesia)

Lihat preview, pilih, edit, dan unduh gambar dari [pawchive.pw](https://pawchive.pw) secara massal. Creator diperlakukan sebagai "manga" dan post sebagai "chapter", jadi hasilnya cocok dipakai di aplikasi pembaca manga seperti Mihon.

> ⚠️ **Pernyataan:** Script ini dibuat menggunakan AI 100%.

**Kode sumber & laporan bug:** [GitHub](https://github.com/qxyraxp/pawchive-downloader) · [Issues](https://github.com/qxyraxp/pawchive-downloader/issues)

### Fitur

- Preview dan pilih gambar yang ingin diunduh
- Edit gambar sebelum diunduh: gabung, split, potong (crop), dan resize
- Unduh sebagai **ZIP**, **PDF**, **gambar** satuan, atau **CBZ**
- Output CBZ untuk **Mihon**: `ComicInfo.xml`, `details.json`, dan gambar cover
- Mode cover Mihon: Off, Once, Each chapter, atau GIF animasi
- Konversi gambar di dalam CBZ (JPG / WebP / AVIF, kualitas bisa diatur)
- Kompres PDF (Light, Medium, Strong)
- Antrian multi-creator dengan tab "Selesai"
- Output antrian: gabung jadi 1 file, 1 file per manga, atau per chapter
- Pencarian dan notifikasi
- Nama folder dan Series otomatis diubah ke **romaji** (opsional)
- Gabung chapter, ubah urutan halaman, dan pindahkan halaman antar chapter
- Pengaturan tersimpan otomatis
- UI tersedia dalam Bahasa Indonesia dan Inggris

### Library pihak ketiga

Fitur romaji memakai library berikut, yang dimuat saat dibutuhkan dari CDN jsDelivr dengan versi yang dipatok:

- [kuroshiro](https://github.com/hexenq/kuroshiro) 1.2.0
- kuroshiro-analyzer-kuromoji 1.1.0
- kuromoji 0.1.2 (hanya data kamus, ±17 MB, diunduh sekali)

Semuanya berjalan di dalam Web Worker supaya kamus diproses di luar thread utama dan halaman tidak freeze. Karena itu library dimuat lewat `importScripts()`, bukan `@require`. Bagian lainnya ditulis sendiri dan sudah ada di dalam script ini.

### Privasi

- Hanya berjalan di `pawchive.pw` dan subdomainnya.
- Pengaturan disimpan secara lokal lewat `GM_setValue`.
- Tidak ada data yang dikirim ke server pihak ketiga. Tidak ada analytics atau tracking.
