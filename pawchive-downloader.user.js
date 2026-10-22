// ==UserScript==
// @name         Pawchive Downloader — CBZ, ZIP & PDF
// @namespace    pc-dl
// @icon         data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAUDBAQEAwUEBAQFBQUGBwwIBwcHBw8LCwkMEQ8SEhEPERETFhwXExQaFRERGCEYGh0dHx8fExciJCIeJBweHx7/2wBDAQUFBQcGBw4ICA4eFBEUHh4eHh4eHh4eHh4eHh4eHh4eHh4eHh4eHh4eHh4eHh4eHh4eHh4eHh4eHh4eHh4eHh7/wAARCAAwADADASIAAhEBAxEB/8QAGgAAAgMBAQAAAAAAAAAAAAAABQYDBAcIAv/EADMQAAEDAgQDBwIFBQAAAAAAAAECAwQFEQAGEiEHEzEUIiNBUWFxMqEzUmKR0SVCcoHB/8QAGQEAAwEBAQAAAAAAAAAAAAAAAwQFAgYH/8QAKBEAAgEDAgUDBQAAAAAAAAAAAQIDAAQREiEFMUFRsQZh8CJxkaHB/9oADAMBAAIRAxEAPwDRcp5nyOMoT6qzUafOCpBqElWsrfkrAHeIFrdEp9Ba2MKqFSfqk+XV55C35ji5DtumpRvYewFgPYDCNTHW4Lb7cCSptTrSkyW45PIcC1AhKQb6bKANgd7b3wzc0GKUp/tKE/YHEi40LGqIO5PivQ/TVs0byzyczgD2HM/k+KvRoLmlRTZSkjW6fUn+AMTGI8GecpTQTy+YnxE3UL22Hr7e2II8txtb2lX1JKD+w/nBBNXUyw5HQ2jxo3ZlGwvYm5P2widVdUzED6a8u06XTmHJEq6VN8t0sEggoWCAr5HX9/XHuoZ2qjGXqTSaXVpcesQQ+OzvhBjSo+tS0oIsVEhNwNxsQPLFJ6SqW+326Q62xoDK3g2V6Ugelxe1+l8Wp2RqpXA0zludTK2HAFKbYdSl42GxCF2UPgH74PbsVznrUPjEMdxEFc7g57Dsd6z2ksaYbS1jSlTynCP9aR/3BWnrL0ptgrSjmX3UoAXQknz9QMCs2yEUuBSUAlOtzxD+kbn7qww8OmaXU6/GFXjdrYS4HFMKaKtaQLqJA37qSV/CcUr2AKyjsBUPgvEdcUhXnkkfamFpiJNy9CnQw466Y7odSynWdbbu+yST+GtJ6eWIkZfqj09TLEZ92QpOthsNkF1Ox7oP6SFfGNh4ccMMu5drC6kYqZT/ACg3GXzVENDVfWPMKsB0Ntz641l4triGOqyeYgoABsbEb29MJiFT1pyTi8sZI05+fyuX2ZUCk5AnCTTmqrUqdJ7RJjmK480wXCG0pdcQQlCthZNz53scFeGeZ3plRcS5EyxTqVHaS69z4OlAuoJR4gOpB694Xxf4s0im5G4VzKNS0Nx0VSe0lbpSQpYTc95RJ6JSbAW3JPnbGZZAzY7lWtuTQ5JQw7HKNLQTqBuNKtKtjYahY/mONacbjpQGcyIwfcsdvNKCaRO4h1WL2F6LCjhXJjdqWU8xR3UTYGw2t59MP3B+Il7PT9OkNJ50KAFO964S6hxATuDcEG9lAgi+xxnPak0iG1FZXaS2hATbqlQFyr23wb4ayKwmryJjNXeo8eoO9jqNYcAUlrUC6ACfpcJSrvHbfFGbW4ZmPOuVtdEMiKo5fvIrsLL1UpilohuJbgOgANtLVZKv8FdCPbY+2CGb8w0LKlKNUzDLYhRUAhK3D31q/I2gd5Sj6DHMTHE2rv5bcfdiU6czS9LEt1T2l6atZUlp1lBHTYE3G91WthAgR5OYK8pFYqy5rEJJVrU+taNJN9Ldz3Ukk9LWGMWtq8pw21MXd8i7pk02cVuKEfiBmKIlV4FEiO+Awv8AENzZTjlttVvIbAetzhcfkZaWUf1bl2cTqCUqWNBvqtt8HC7XocRjMT0QuNMx9YKS2SsNpI2Hrf8AnBCBApbDqiFtyyPpKlg6flI64ObNQxBNCHF5QmFUex6j51r/2Q==
// @icon64       data:image/jpeg;base64,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
// @version      2.1.1
// @license      MIT
// @author       qxyraxp
// @homepageURL  https://github.com/qxyraxp/pawchive-downloader
// @supportURL   https://github.com/qxyraxp/pawchive-downloader/issues
// @description  Pawchive Downloader — preview & select images, edit (merge/split/crop/resize), download as ZIP / PDF / images / CBZ for Mihon (ComicInfo.xml, details.json, cover), multi-creator queue, Done tab, search, notifications, and folder names & Series automatically in romaji. Creator = “manga”, post = “chapter”.
// @description:id  Pawchive Downloader — preview & pilih gambar, edit (gabung/split/potong/resize), download ZIP / PDF / gambar / CBZ untuk Mihon (ComicInfo.xml, details.json, cover), antrian multi-creator, tab Selesai, pencarian, notifikasi, serta nama folder & Series otomatis dalam romaji. Creator = “manga”, post = “chapter”.
// @match        https://pawchive.pw/*
// @match        https://*.pawchive.pw/*
// @grant        GM_xmlhttpRequest
// @grant        GM_info
// @grant        GM_getValue
// @grant        GM_setValue
// @connect      pawchive.pw
// @connect      *.pawchive.pw
// @connect      cdn.jsdelivr.net
// @run-at       document-idle
// ==/UserScript==

(function () {
    'use strict';

    // ------------------------------------------------------------ settings
    const gv = (k, d) => { try { const v = GM_getValue(k, d); return v === undefined ? d : v; } catch (e) { return d; } };
    const sv = (k, v) => { try { GM_setValue(k, v); } catch (e) {} };
    const clamp = (n, a, b) => Math.max(a, Math.min(b, n));
    const int = (v, d) => { const n = parseInt(v, 10); return isNaN(n) ? d : n; };

    // ------------------------------------------------------------ bahasa / language (ID | EN)
    // Sumber teks di script ini tetap Bahasa Indonesia. Saat bahasa = 'en', semua teks UI / toast / log / dialog
    // diterjemahkan lewat kamus di bawah (kunci = teks Indonesia persis). Teks yang belum ada di kamus tetap tampil
    // dalam Bahasa Indonesia. Pola dinamis memakai {} (angka / nama), mis. 'Hapus {} halaman' -> 'Delete {1} pages'.
    // Di sisi Inggris: {1} {2} ... = isi {} ke-1, ke-2; {N?tunggal|jamak} = pilih bentuk jamak bila isi {N} bukan 1.
    let lang = String(gv('dd_lang', 'id')) === 'en' ? 'en' : 'id';
    const I18N = [
        // ---------- umum / tombol
        ['Tutup (Esc)', 'Close (Esc)'], ['Tampilkan tulisan Jepang sebagai romaji', 'Show Japanese text as romaji'], ['Gabung post', 'Merge posts'], ['Gabung ke post di atasnya (gambarnya dimasukkan ke akhir post itu)', 'Merge into the post above (its images are appended to that post)'], ['Pisahkan dari gabungan', 'Unmerge'], ['Tidak ada post di atasnya', 'No post above'], ['Pisah', 'Unmerge'], ['Centang minimal 2 post dulu', 'Check at least 2 posts first'], ['Memuat kamus romaji…', 'Loading romaji dictionary…'], ['Kamus romaji siap', 'Romaji dictionary ready'], ['Kamus romaji gagal dimuat — kanji tidak diubah', 'Romaji dictionary failed to load — kanji left as is'], ['Batal (Esc)', 'Cancel (Esc)'], ['Pilih', 'Select'], ['Ganti', 'Change'],
        ['Seret untuk mengubah urutan, atau lepas di post lain (sidebar) untuk memindahkan', 'Drag to reorder, or drop onto another post (sidebar) to move'], ['Memuat post tujuan…', 'Loading target post…'], ['{#} halaman dipindah ke \"{}\"', '{1} {1?page|pages} moved to \"{2}\"'], ['{#} duplikat dilewati', '{1} {1?duplicate|duplicates} skipped'], ['Semua halaman sudah ada di post tujuan', 'All pages already exist in the target post'], ['Urutan halaman diubah', 'Page order changed'], ['{#} post kosong dilewati', '{1} empty {1?post|posts} skipped'], ['✎ diubah', '✎ edited'], ['Post ini sekarang kosong — dilepas dari pilihan post', 'This post is now empty — removed from the post selection'],
        ['Konversi gambar CBZ', 'Convert CBZ images'], ['Kualitas konversi CBZ (%)', 'CBZ conversion quality (%)'], ['{#} gambar dikonversi ke {} di {}', '{1} {1?image|images} converted to {2} in {3}'], ['Browser ini tidak bisa mengenkode AVIF — dipakai WebP', 'This browser cannot encode AVIF — using WebP'], ['AVIF tidak didukung browser ini — dipakai WebP', 'AVIF is not supported by this browser — using WebP'],
        ['Pilih semua', 'Select all'], ['Batal pilih semua', 'Deselect all'], ['Batal pilih', 'Deselect'], ['Semua', 'All'],
        ['Kosongkan', 'Clear'], ['Kosongkan semua', 'Clear all'], ['Hapus', 'Delete'], ['Selesai', 'Done'], ['Gagal', 'Failed'], ['Menunggu', 'Waiting'], ['Berjalan', 'Running'],
        ['Dihentikan', 'Stopped'], ['Semua post gagal', 'All posts failed'], ['Kosong', 'Empty'], ['Antrian', 'Queue'],
        ['Terapkan', 'Apply'], ['Memuat…', 'Loading…'], ['Pulihkan', 'Restore'], ['Perkecil', 'Minimize'], ['Perbesar', 'Maximize'],
        ['Kembalikan ukuran', 'Restore size'], ['Jendela diperkecil', 'Window minimized'], ['Jendela dipulihkan', 'Window restored'],
        ['Seret untuk memindahkan · klik 2× untuk memperbesar / mengembalikan', 'Drag to move · double-click to maximize / restore'],
        ['Asli', 'Original'], ['Ringan', 'Light'], ['Sedang', 'Medium'], ['Kuat', 'Strong'],
        ['otomatis', 'auto'], ['Otomatis', 'Auto'], ['gambar (IMG)', 'image (IMG)'], ['Gambar (IMG)', 'Images (IMG)'],
        ['ZIP terpisah', 'Separate ZIPs'], ['PDF terpisah', 'Separate PDFs'], ['IMG terpisah', 'Separate IMGs'], ['Gambar terpisah', 'Separate images'],
        ['1 ZIP gabungan', '1 merged ZIP'], ['1 PDF gabungan', '1 merged PDF'], ['Gabungan', 'Merged'],
        ['{#} dtk', '{1} s'], ['{#} halaman', '{1} {1?page|pages}'], ['{#} post', '{1} {1?post|posts}'], ['{#} entri', '{1} {1?entry|entries}'],
        ['{#} bagian', '{1} {1?part|parts}'], ['{#} file ZIP', '{1} ZIP {1?file|files}'],
        ['{#} dipilih', '{1} selected'], ['{#} post dipilih', '{1} {1?post|posts} selected'], ['{#} dari {#} dipilih', '{1} of {2} selected'],
        ['✎ {#} hal.', '✎ {1} pg.'], ['−{#} hal.', '−{1} pg.'], ['−{#} halaman', '−{1} {1?page|pages}'],
        ['✎ {#} diedit', '✎ {1} edited'], ['⚠ {#} edit hilang', '⚠ {1} {1?edit|edits} lost'], ['⚠ edit hilang', '⚠ edit lost'],
        ['sesi sejak {}', 'session since {1}'], ['sumber {}', 'source {1}'], ['gagal: {}', 'failed: {1}'], ['total {}', 'total {1}'],
        ['/ {#} halaman dipilih', '/ {1} pages selected'],

        // ---------- panel antrian
        ['Sembunyikan kosong', 'Hide empty'], ['Tampilkan ({#})', 'Show ({1})'], ['Sembunyikan post ini', 'Hide this post'], ['Tampilkan lagi semua post yang disembunyikan', 'Show all hidden posts again'],
        ['Sembunyikan post yang tidak ada gambarnya (yang sudah dibuka / diperiksa). Bisa juga periksa post lain yang belum dibuka.', 'Hide posts that have no images (already opened / checked). Can also check the posts you have not opened yet.'],
        ['Cari post kosong', 'Find empty posts'], ['Periksa', 'Check'], ['Lewati', 'Skip'], ['Sembunyikan', 'Hide'], ['Sembunyikan post kosong', 'Hide empty posts'],
        ['Memeriksa {#}/{#} · Stop', 'Checking {1}/{2} · Stop'], ['Tidak ada post kosong yang ditemukan', 'No empty posts found'], ['{#} post kosong disembunyikan', '{1} empty {1?post|posts} hidden'], ['{#} post ditampilkan lagi (belum dicentang)', '{1} {1?post|posts} shown again (unchecked)'],
        ['Post disembunyikan — tampilkan lagi lewat tombol di sidebar', 'Post hidden — show it again with the button in the sidebar'],
        ['ComicInfo.xml di dalam CBZ', 'ComicInfo.xml inside CBZ'],
        ['Mode CBZ: tambahkan ComicInfo.xml ke tiap file (judul post, nomor, series, penulis, genre, ringkasan, jumlah halaman). Bisa dibaca Mihon versi terbaru, Komga, Kavita, dll. Tidak butuh folder pilihan.', 'CBZ mode: add ComicInfo.xml to every file (post title, number, series, author, genre, summary, page count). Readable by recent Mihon, Komga, Kavita, etc. No custom folder needed.'],
        ['Notifikasi', 'Notifications'], ['Kartu notifikasi selesai', 'Completion card'],
        ['Lokasi simpan', 'Save location'], ['Nama folder & Series dalam romaji', 'Romaji folder names & Series'], ['Nama manga / creator berhuruf Jepang diubah ke romaji untuk nama folder, nama file, Series di ComicInfo.xml, dan judul di details.json. Kanji memakai kamus romaji (diunduh sekali, ±17 MB); bila gagal, kana tetap diromajikan dan kanji dibiarkan.', 'Japanese manga / creator names are converted to romaji for folder names, file names, the Series in ComicInfo.xml and the title in details.json. Kanji uses the romaji dictionary (downloaded once, ~17 MB); if it fails, kana is still romanized and kanji is left as is.'], ['Gambar CBZ', 'CBZ images'], ['Metadata & cover', 'Metadata & cover'], ['Koneksi', 'Connection'], ['Panel', 'Panel'], ['Kartu selesai', 'Completion card'], ['Bunyi', 'Sound'], ['Deteksi gambar', 'Image detection'],
        ['Tampilkan ringkasan (post, halaman, durasi, lokasi simpan) di pojok layar saat download selesai. Dimatikan = toast kecil biasa.', 'Show a summary (posts, pages, duration, save location) in the corner when a download finishes. Off = a plain small toast.'],
        ['Lama kartu tampil (detik)', 'Card display time (seconds)'], ['Kartu berhenti menghitung mundur saat disorot kursor. Bila ada yang gagal, tampil lebih lama.', 'The countdown pauses while the cursor is over the card. Shown longer when something failed.'],
        ['Bunyi saat selesai', 'Sound when finished'], ['Bunyi singkat ketika download / antrian selesai. Bila ada yang gagal, nadanya turun. Tidak berbunyi untuk tiap manga di tengah antrian.', 'A short sound when a download / queue finishes. The tone falls if something failed. No sound for each manga in the middle of a queue.'],
        ['Jenis bunyi', 'Sound type'], ['Ting', 'Ping'], ['Lonceng', 'Chime'], ['Lembut', 'Soft'], ['Volume (%)', 'Volume (%)'],
        ['Coba bunyi', 'Test sound'], ['Dengarkan bunyi dengan pengaturan di atas.', 'Play the sound with the settings above.'], ['Tes', 'Test'],
        ['Catatan', 'Note'], ['Browser baru mengizinkan bunyi setelah kamu mengklik halaman ini sekali, jadi bunyi mungkin tidak keluar sebelum interaksi pertama.', 'Browsers only allow sound after you have clicked the page once, so there may be no sound before the first interaction.'],
        ['Download selesai', 'Download complete'], ['Selesai dengan kendala', 'Finished with issues'], ['Antrian selesai', 'Queue finished'], ['Antrian selesai dengan kendala', 'Queue finished with issues'],
        ['{#} gagal', '{1} failed'], ['{#} manga', '{1} manga'], ['hemat {#}%', '{1}% smaller'], ['Disimpan di', 'Saved to'], ['Tutup', 'Close'],
        ['Batal', 'Cancel'], ['Lanjut', 'Continue'], ['Konfirmasi', 'Confirm'], ['Pemberitahuan', 'Notice'], ['Tetap tambahkan', 'Add anyway'],
        ['Manga ini sudah ada', 'This manga already exists'], ['Hapus dari daftar', 'Remove from list'], ['Hasil edit hilang', 'Edits lost'],
        ['Lanjut tanpa edit', 'Continue without edits'], ['Muat ulang', 'Reload'], ['Muat ulang post', 'Reload post'], ['Konfirmasi download', 'Confirm download'],
        ['Reset pengaturan', 'Reset settings'], ['Reset', 'Reset'], ['Ubah ukuran halaman', 'Resize pages'], ['Terapkan ukuran', 'Apply size'],
        ['Lebar maksimum (px)', 'Max width (px)'], ['Tinggi maksimum (px)', 'Max height (px)'], ['Aspek rasio tetap', 'Aspect ratio is kept'],
        ['Selesai di-download', 'Downloaded'], ['Cari nama manga…', 'Search manga name…'], ['Hapus pencarian', 'Clear search'],
        ['Antrikan ulang', 'Re-queue'], ['Antrikan ulang untuk download lagi', 'Re-queue to download again'],
        ['Belum ada manga yang selesai', 'No finished manga yet'],
        ['Manga yang selesai di-download pindah ke sini.<br>Dari sini bisa diantrikan ulang atau dihapus.', 'Manga that finish downloading move here.<br>You can re-queue or delete them from here.'],
        ['Tidak ada hasil untuk', 'No results for'], ['Lihat {#} hasil di tab Selesai', 'View {1} {1?result|results} in the Finished tab'], ['Lihat {#} hasil di tab Antrian', 'View {1} {1?result|results} in the Queue tab'],
        ['Antrian kosong', 'Queue is empty'], ['Semua manga sudah selesai di-download. Lihat tab Selesai.', 'All manga are downloaded. See the Finished tab.'],
        ['{#} tersembunyi oleh pencarian', '{1} hidden by search'], ['{#} hasil', '{1} {1?result|results}'],
        ['Hapus semua selesai', 'Delete all finished'], ['Hapus hasil pencarian', 'Delete search results'], ['Hapus semua manga yang sudah selesai dari daftar ini', 'Remove all finished manga from this list'],
        ['Waktu selesai', 'Finished at'], ['Lihat pencarian di tab lain', 'See results in the other tab'],
        ['⚠ Manga ini sudah ada:', '⚠ This manga already exists:'], ['• Di antrian: {#} post', '• In queue: {1} {1?post|posts}'], ['• Sudah selesai di-download: {#} post', '• Already downloaded: {1} {1?post|posts}'],
        ['{#} dari {#} post yang akan ditambah sudah ada', '{1} of {2} posts being added already exist'], ['post-nya berbeda', 'different posts'],
        ['Tetap tambahkan ke antrian?', 'Add to the queue anyway?'], ['Dibatalkan — manga tidak ditambahkan', 'Cancelled — manga not added'],
        ['Hapus {#} manga selesai dari daftar?', 'Remove {1} finished manga from the list?'],
        ['Antrian download', 'Download queue'], ['Tambah halaman ini', 'Add this page'],
        ['Tambah manga + post dari halaman yang sedang dibuka', 'Add manga + posts from the current page'],
        ['Belum ada yang dipilih', 'Nothing selected yet'], ['Hapus terpilih', 'Delete selected'],
        ['Hasil', 'Output'], ['Gabung jadi 1 file', 'Merge into 1 file'], ['Semua manga yang dicentang digabung jadi satu file', 'All checked manga are merged into one file'],
        ['1 file per manga', '1 file per manga'], ['Tiap manga satu file', 'One file per manga'], ['Tiap post file sendiri', 'Each post as its own file'],
        ['Kompres', 'Compress'], ['Nama file', 'File name'], ['Hapus selesai', 'Clear done'],
        ['Hapus item yang sudah selesai dari antrian', 'Remove finished items from the queue'], ['Kosongkan seluruh antrian', 'Empty the whole queue'],
        ['Pilih manga dulu', 'Select manga first'], ['Antrian masih kosong', 'The queue is empty'],
        ['Buka halaman manga lalu klik', 'Open a manga page, then click'],
        ['Ulangi di manga lain, lalu pilih manga mana yang mau di-download dan digabung jadi 1 file.', 'Repeat for other manga, then choose which manga to download and merge into 1 file.'],
        ['Pilih manga ini', 'Select this manga'], ['Klik untuk lihat / pilih post', 'Click to view / select posts'],
        ['Halaman yang di-uncheck di preview', 'Pages unchecked in the preview'], ['Halaman yang di-uncheck', 'Unchecked pages'],
        ['Post dengan hasil edit (gabung/split/potong) — hanya tersimpan selama halaman tidak di-refresh', 'Posts with edits (merge/split/crop) — kept only until the page is refreshed'],
        ['Hasil edit hilang karena halaman di-refresh — edit ulang lewat tombol preview', 'Edits were lost because the page was refreshed — redo them via the preview button'],
        ['Hasil edit hilang karena halaman di-refresh', 'Edit lost because the page was refreshed'],
        ['Post sudah diedit — jumlah halaman yang akan diunduh', 'Post was edited — number of pages to download'],
        ['Preview & pilih gambar di panel utama', 'Preview & pick images in the main panel'], ['Hapus dari antrian', 'Remove from queue'],
        ['Gabung & download {} manga', 'Merge & download {1} manga'],
        ['Gabungan {} manga', 'Merged {1} manga'], ['Otomatis (nama manga + rentang post)', 'Auto (manga name + post range)'],
        ['Semua post dari {} manga digabung jadi 1 {} (folder manga › post; dipecah otomatis bila lebih dari {} MB).', 'All posts from {1} manga are merged into 1 {2} (manga › post folders; split automatically above {3} MB).'],
        ['Semua post dari {} manga digabung jadi 1 {}, dengan bookmark per post.', 'All posts from {1} manga are merged into 1 {2}, with a bookmark per post.'],
        ['Post manga terpilih digabung jadi 1 {} (folder manga › post; dipecah otomatis bila lebih dari {} MB).', 'The posts of the selected manga are merged into 1 {1} (manga › post folders; split automatically above {2} MB).'],
        ['Post manga terpilih digabung jadi 1 {}, dengan bookmark per post.', 'The posts of the selected manga are merged into 1 {1}, with a bookmark per post.'],
        ['Tiap manga dibuat 1 file {} → {} file.', 'Each manga becomes 1 {1} file → {2} {2?file|files}.'], ['Tiap manga dibuat 1 file {}.', 'Each manga becomes 1 {1} file.'],
        ['Tiap post dibuat sebagai gambar terpisah.', 'Each post is saved as separate images.'], ['Tiap post dibuat sebagai file {} sendiri.', 'Each post becomes its own {1} file.'],
        ['Kompresi {}: lebar maks {} px, kualitas {}%.', 'Compression {1}: max width {2} px, quality {3}%.'],
        ['{} hasil edit belum dicentang — tidak ikut diunduh', '{1} edited {1?result is|results are} not checked — will not be downloaded'],
        ['Tunggu proses download selesai dulu', 'Wait for the download to finish first'],

        // ---------- preview / panel utama
        ['Lewati post tanpa lampiran', 'Skip posts without attachments'], ['Post yang tertulis “No attachments” (hanya teks / pengumuman) tidak dimasukkan ke daftar post. Matikan bila ingin tetap menampilkannya.', 'Posts that say “No attachments” (text-only / announcements) are left out of the post list. Turn off to keep showing them.'],
        [' · {#} tanpa lampiran dilewati', ' · {1} without attachments skipped'],
        ['Pindai semua halaman daftar', 'Scan all list pages'], ['Saat membuka panel / Antrian di halaman creator, ikut mengambil post dari semua halaman (?o=50, ?o=100, …), bukan hanya halaman yang sedang terbuka. Matikan bila hanya mau halaman ini.', 'When opening the panel / Queue on a creator page, also fetch posts from every page (?o=50, ?o=100, …), not just the open one. Turn off for this page only.'], ['Pindai semua', 'Scan all'], ['Halaman ini saja', 'This page only'], ['Pindai semua halaman', 'Scan all pages'],
        ['Memindai daftar post {#}/{} · {#} post ditemukan', 'Scanning post list {1}/{2} · {3} {3?post|posts} found'], ['{#} post ditemukan dari {#} halaman daftar', '{1} {1?post|posts} found across {2} list {2?page|pages}'], ['{#} post ditemukan · {#} halaman daftar gagal dibaca', '{1} {1?post|posts} found · {2} list {2?page|pages} failed to load'],
        ['Daftar ini punya {#} halaman (±{#} post). Pindai semuanya? Bisa memakan waktu.', 'This list has {1} pages (~{2} posts). Scan them all? This may take a while.'],
        ['Daftar post', 'Post list'], ['Pilih halaman untuk antrian', 'Select pages for the queue'], ['Pengaturan', 'Settings'],
        ['mis. 1-5,8', 'e.g. 1-5,8'], ['Pilih post, mis. 1-5 atau 2,4,6', 'Select posts, e.g. 1-5 or 2,4,6'], ['Pilih halaman, mis. 1-5 atau 2,4,6', 'Select pages, e.g. 1-5 or 2,4,6'],
        ['Muat ulang', 'Reload'], ['Kembalikan edit terakhir (Ctrl+Z)', 'Undo last edit (Ctrl+Z)'],
        ['Gabung', 'Merge'], ['Gabungkan halaman terpilih menjadi 1 gambar', 'Merge the selected pages into 1 image'],
        ['Pecah 1 halaman menjadi beberapa bagian (garis bisa digeser)', 'Split 1 page into several parts (lines can be dragged)'],
        ['Potong', 'Crop'], ['Potong (crop) 1 halaman terpilih', 'Crop 1 selected page'], ['Resize halaman terpilih (aspek rasio tetap)', 'Resize the selected pages (aspect ratio kept)'],
        ['Hapus halaman terpilih dari daftar (tidak mengunduh)', 'Remove the selected pages from the list (does not download)'],
        ['Ganti folder simpan', 'Change save folder'], ['Tambah post terpilih ke antrian', 'Add the selected posts to the queue'], ['Antrikan', 'Add to queue'],
        ['Pilih mode download', 'Choose download mode'], ['Download post ini', 'Download this post'], ['Download {#} post', 'Download {1} {1?post|posts}'],
        ['Download halaman yang dicentang di post yang dibuka', 'Download the checked pages of the open post'],
        ['Semua manga jadi satu', 'All manga in one'], ['Tiap manga terpisah', 'Each manga separate'], ['Tiap post terpisah', 'Each post separate'],
        ['Tidak ada post aktif', 'No active posts'], ['Manga dipilih tapi tidak ada post aktif', 'Manga selected but no active posts'], ['Aktifkan post dulu', 'Enable a post first'],
        ['Membaca post', 'Reading post'], ['Membuka reader', 'Opening reader'], ['Memindai halaman', 'Scanning pages'], ['Memverifikasi', 'Verifying'],
        ['halaman ditemukan', 'pages found'], ['Membuka reader…', 'Opening reader…'], ['Memindai halaman…', 'Scanning pages…'],
        ['Memindai · {} hal. · {}%', 'Scanning · {1} pages · {2}%'], ['Memverifikasi… {} hal.', 'Verifying… {1} pages'],
        ['Menghubungi halaman reader di latar belakang…', 'Contacting the reader page in the background…'],
        ['Menggulir reader agar semua gambar termuat…', 'Scrolling the reader so every image loads…'],
        ['Memastikan tidak ada halaman yang terlewat…', 'Making sure no page is missed…'],
        ['Selesai — menyusun thumbnail…', 'Done — building thumbnails…'],
        ['Membaca halaman post…', 'Reading post pages…'], ['Membaca halaman… {}', 'Reading pages… {1}'], ['Membaca halaman…', 'Reading pages…'],
        ['Tidak ada gambar. Coba “Muat ulang” atau atur selector / host di Pengaturan (⚙).', 'No images. Try “Reload” or set the selector / host in Settings (⚙).'],
        ['Muat ulang akan membuang hasil edit post ini. Lanjut?', 'Reloading will discard the edits of this post. Continue?'],
        ['Sedang download — tunggu selesai atau tekan Stop', 'Download in progress — wait for it to finish or press Stop'],
        ['Post dari cache: "{}" ({} halaman)', 'Post from cache: "{1}" ({2} pages)'],
        ['Membuka post "{}" (muat ulang)', 'Opening post "{1}" (reload)'], ['Membuka post "{}"', 'Opening post "{1}"'],
        ['Preview gagal: "{}" — {}', 'Preview failed: "{1}" — {2}'], ['Preview siap: "{}" · {} halaman · {}', 'Preview ready: "{1}" · {2} pages · {3}'],
        ['Panel ditutup', 'Panel closed'], ['Buka halaman manga (list post) atau halaman reader dulu', 'Open a manga page (post list) or a reader page first'],
        ['Panel dibuka · {} post · aktif: "{}"', 'Panel opened · {1} posts · active: "{2}"'],
        ['Range tidak valid (contoh 1-5,8)', 'Invalid range (e.g. 1-5,8)'], ['Menghentikan…', 'Stopping…'],
        ['Simpan & kembali ke antrian', 'Save & back to queue'], ['Simpan pilihan post & halaman ke antrian lalu kembali (Esc)', 'Save the post & page selection to the queue, then go back (Esc)'],
        ['Thumbnail gagal dimuat', 'Thumbnail failed to load'],
        // mode download
        ['Post yang dibuka', 'Open post'], ['Post terpilih (sidebar)', 'Selected posts (sidebar)'],
        ['Halaman yang dicentang jadi 1 file ZIP', 'Checked pages become 1 ZIP file'], ['Halaman yang dicentang jadi 1 file PDF', 'Checked pages become 1 PDF file'],
        ['Tiap halaman disimpan sebagai file gambar', 'Each page is saved as an image file'],
        ['Tiap post jadi 1 file ZIP sendiri', 'Each post becomes its own ZIP file'], ['Tiap post jadi 1 file PDF sendiri', 'Each post becomes its own PDF file'],
        ['Gambar tiap post di foldernya sendiri', 'Images of each post in its own folder'],
        ['Semua post dalam 1 ZIP, folder per post', 'All posts in 1 ZIP, one folder per post'], ['Semua post berurutan, bookmark per post', 'All posts in order, a bookmark per post'],
        ['Semua post terpilih jadi 1 file ZIP · tiap post di foldernya sendiri.', 'All selected posts become 1 ZIP file · each post in its own folder.'],
        ['Semua post terpilih jadi 1 file PDF berurutan (ada bookmark per post).', 'All selected posts become 1 PDF file in order (with a bookmark per post).'],
        ['Tiap post terpilih jadi file sendiri (format {}).', 'Each selected post becomes its own file ({1} format).'],
        ['Mode download: {} (banyak post)', 'Download mode: {1} (many posts)'], ['Mode download: {} (1 post)', 'Download mode: {1} (1 post)'],
        ['1 ZIP (folder per post)', '1 ZIP (folder per post)'], ['file terpisah ({})', 'separate files ({1})'],
        ['Download {} post sebagai {}?', 'Download {1} posts as {2}?'], ['Halaman yang tidak dicentang di preview dilewati.', 'Pages unchecked in the preview are skipped.'],
        ['Catatan: mode Downloads menyusun file di memori. Untuk banyak post lebih aman pilih Folder (tombol Ganti) agar ditulis langsung ke disk.', 'Note: Downloads mode assembles files in memory. For many posts it is safer to choose a Folder (Change button) so files are written directly to disk.'],

        // ---------- editor (gabung / potong / split / resize / undo)
        ['Potong gambar', 'Crop image'], ['Kembalikan kotak ke seluruh gambar', 'Reset the box to the whole image'],
        ['Split gambar', 'Split image'], ['Tambah garis horizontal (potong atas/bawah)', 'Add a horizontal line (cut top/bottom)'], ['+ Vertikal', '+ Vertical'],
        ['Tambah garis vertikal (potong kiri/kanan)', 'Add a vertical line (cut left/right)'], ['Hapus semua garis', 'Delete all lines'], ['Posisi garis', 'Line position'],
        ['Garis horizontal', 'Horizontal line'], ['Garis vertikal', 'Vertical line'],
        ['Ukuran asli 100% (1)', 'Actual size 100% (1)'], ['Pas layar (0)', 'Fit to screen (0)'],
        ['Gabung vertikal ({} → 1)', 'Merge vertically ({1} → 1)'], ['Susun dari atas ke bawah — cocok halaman terpotong memanjang', 'Stack top to bottom — good for pages cut lengthwise'],
        ['Gabung horizontal ({} → 1)', 'Merge horizontally ({1} → 1)'], ['Susun kiri ke kanan — cocok spread 2 halaman', 'Stack left to right — good for 2-page spreads'],
        ['Lebar maksimum (px) — aspek rasio tetap:', 'Maximum width (px) — aspect ratio kept:'], ['Tinggi maksimum (px) — aspek rasio tetap:', 'Maximum height (px) — aspect ratio kept:'],
        ['Tidak bisa undo sekarang', 'Cannot undo right now'], ['Tutup editor dulu, lalu Ctrl+Z', 'Close the editor first, then press Ctrl+Z'],
        ['Tidak ada edit yang bisa dikembalikan', 'No edits to undo'], ['Undo hanya untuk post yang sama', 'Undo only works within the same post'],
        ['Kembalikan: {} (Ctrl+Z)', 'Undo: {1} (Ctrl+Z)'], ['Undo: {}', 'Undo: {1}'], ['Dikembalikan: {}', 'Undone: {1}'],
        ['hapus {} halaman', 'delete {1} {1?page|pages}'], ['gabung vertikal ({}→1)', 'merge vertical ({1}→1)'], ['gabung horizontal ({}→1)', 'merge horizontal ({1}→1)'],
        ['resize {} halaman', 'resize {1} {1?page|pages}'], ['potong {}×{}', 'crop {1}×{2}'],
        ['Pilih halaman yang mau dihapus', 'Select the pages to delete'], ['Hapus SEMUA {} halaman? Daftar akan kosong.', 'Delete ALL {1} pages? The list will be empty.'],
        ['Hapus {} halaman terpilih dari daftar?', 'Remove the {1} selected pages from the list?'], ['Hapus {} halaman dari daftar', 'Removed {1} {1?page|pages} from the list'],
        ['Dihapus: {} halaman', 'Deleted: {1} {1?page|pages}'],
        ['Pilihan dibatalkan setelah edit · centang halaman yang mau ikut diunduh', 'Selection cleared after edit · check the pages to include in the download'],
        ['Hasil edit dicentang · centang lagi halaman lain yang mau ikut diunduh', 'Edited result checked · check other pages to include in the download'],
        ['Pilih minimal 2 halaman untuk digabung', 'Select at least 2 pages to merge'], ['Menggabungkan {} halaman…', 'Merging {1} pages…'],
        ['Gabung {}: {} → 1 ({}×{})', 'Merge {1}: {2} → 1 ({3}×{4})'], ['Gabung vertikal: {} → 1 ({}×{})', 'Merge vertically: {1} → 1 ({2}×{3})'], ['Berhasil digabung ({}×{})', 'Merged successfully ({1}×{2})'],
        ['Gabung gagal: {}', 'Merge failed: {1}'], ['Pilih minimal 1 halaman', 'Select at least 1 page'], ['Resize {} halaman…', 'Resizing {1} pages…'],
        ['Resize: {} halaman · max {}×{}', 'Resize: {1} pages · max {2}×{3}'], ['Resize selesai: {} halaman', 'Resize done: {1} pages'], ['Resize gagal: {}', 'Resize failed: {1}'],
        ['Potong: {}×{}', 'Crop: {1}×{2}'], ['Dipotong: {}×{}', 'Cropped: {1}×{2}'], ['Pilih tepat 1 halaman untuk dipotong', 'Select exactly 1 page to crop'],
        ['Potong gagal: {}', 'Crop failed: {1}'], ['Gagal memuat gambar: {}', 'Failed to load image: {1}'], ['Tambah minimal 1 garis potong', 'Add at least 1 cut line'],
        ['Split: 1 → {} bagian', 'Split: 1 → {1} parts'], ['Dipecah menjadi {} bagian', 'Split into {1} parts'],
        ['Pilih tepat 1 halaman untuk di-split', 'Select exactly 1 page to split'], ['Split gagal: {}', 'Split failed: {1}'],
        ['Gagal mengekspor gambar', 'Failed to export image'], ['Gagal konversi gambar', 'Image conversion failed'],
        // petunjuk di editor (pecahan teks di antara <kbd> / <b>)
        ['zoom ·', 'zoom ·'], ['seret area kosong', 'drag empty area'], ['+seret /', '+drag /'],
        ['+seret = geser · seret kotak/sudut = atur potongan (area luar dibuang) ·', '+drag = pan · drag box/corner = adjust the crop (outside area is discarded) ·'],
        ['terapkan ·', 'apply ·'], ['batal', 'cancel'],
        ['Klik garis = pilih · seret = pindah ·', 'Click line = select · drag = move ·'], ['dobel-klik di gambar', 'double-click on the image'], ['= tambah garis (', '= add line ('],
        ['= vertikal) · dobel-klik garis /', '= vertical) · double-click line /'], ['= hapus ·', '= delete ·'], ['zoom · seret area kosong /', 'zoom · drag empty area /'],
        ['+seret = geser ·', '+drag = pan ·'], ['hapus garis', 'delete line'],

        // ---------- pengaturan
        ['Perubahan tersimpan otomatis', 'Changes are saved automatically'], ['Unduh', 'Download'], ['Performa', 'Performance'], ['Lanjutan', 'Advanced'],
        ['Ditulis langsung ke folder ini', 'Written directly to this folder'], ['Folder unduhan bawaan browser', 'Browser default download folder'],
        ['Hanya berlaku saat memakai folder pilihan sendiri.', 'Only applies when using a custom folder.'],
        ['Nomor urut di nama folder', 'Sequence number in folder names'], ['Mode 1 ZIP: “001 - Post 1”, “002 - Post 2”, …', 'Single-ZIP mode: “001 - Post 1”, “002 - Post 2”, …'],
        ['Maks ukuran per ZIP (MB)', 'Max size per ZIP (MB)'], ['Lewat batas ini file dipecah menjadi _part2, _part3, …', 'Beyond this limit the file is split into _part2, _part3, …'],
        ['Kompres PDF', 'Compress PDF'],
        ['Perkecil ukuran PDF dengan mengecilkan gambar & menyimpannya ulang (JPEG). “Asli” = tanpa proses ulang (tercepat, kualitas penuh). Kuat ≈ lebar 1200 px, kualitas 50%.', 'Shrink the PDF by downscaling images & re-saving them (JPEG). “Original” = no reprocessing (fastest, full quality). Strong ≈ 1200 px wide, 50% quality.'],
        ['Unduhan paralel', 'Parallel downloads'], ['Jumlah gambar yang diunduh bersamaan (1–6).', 'Number of images downloaded at the same time (1–6).'],
        ['Jeda antar gambar (ms)', 'Delay between images (ms)'], ['Naikkan bila server membatasi / memblokir.', 'Increase if the server rate-limits / blocks you.'],
        ['Percobaan ulang', 'Retries'], ['Berapa kali mengulang gambar yang gagal (0–5).', 'How many times to retry a failed image (0–5).'],
        ['Koneksi lambat atau sering gagal? Turunkan paralel ke 1–2 dan naikkan jeda ke 300–500 ms.', 'Slow or unreliable connection? Lower parallel downloads to 1–2 and raise the delay to 300–500 ms.'],
        ['Otomatis buka panel', 'Auto-open panel'],
        ['Buka panel preview otomatis hanya saat membuka halaman creator / post (mis. /fanbox/user/123456). Halaman lain tidak terpengaruh.', 'Open the preview panel automatically only on creator / post pages (e.g. /fanbox/user/123456). Other pages are not affected.'],
        ['Otomatis pilih semua gambar', 'Auto-select all images'],
        ['Centang semua halaman saat preview post dimuat. Matikan bila ingin memilih manual (bawaan).', 'Check all pages when the post preview loads. Turn off to select manually (default).'],
        ['Batalkan pilihan setelah edit', 'Deselect after edit'],
        ['Setelah gabung / split / potong / resize, hasilnya otomatis tidak dicentang supaya pilihan berikutnya bersih. Di mode antrian, centang lagi halaman yang mau ikut diunduh (mis. Pilih semua).', 'After merge / split / crop / resize, the result is left unchecked so the next selection starts clean. In queue mode, check again the pages you want to download (e.g. Select all).'],
        ['Animasi UI', 'UI animations'], ['Animasi buka panel, pulse tombol, shimmer thumbnail, dll. Matikan untuk tampilan lebih ringan.', 'Panel open animation, button pulse, thumbnail shimmer, etc. Turn off for a lighter look.'],
        ['Tampilkan gambar besar saat kursor diam di atas thumbnail.', 'Show a large image when the cursor rests on a thumbnail.'],
        ['Tunda hover (ms)', 'Hover delay (ms)'], ['Waktu tunggu sebelum preview muncul.', 'Wait time before the preview appears.'],
        ['Ukuran hover (px)', 'Hover size (px)'], ['Lebar maksimum jendela preview.', 'Maximum width of the preview window.'],
        ['Pintasan', 'Shortcuts'],
        ['Klik', 'Click'], ['pilih / batal halaman ·', 'to select / deselect a page ·'], ['+klik pilih rentang', '+click to select a range'],
        ['Drag', 'Drag'], ['pilih banyak halaman sekaligus', 'to select many pages at once'],
        ['Klik kanan', 'Right-click'], ['2× klik', 'Double-click'], ['tampilkan penuh (', 'to view full size ('], ['ganti halaman)', 'to change page)'],
        ['pilih / batal semua ·', 'to select / deselect all ·'], ['undo edit ·', 'undo edit ·'], ['tutup', 'close'],
        ['Seret header', 'Drag header'], ['geser jendela ·', 'to move the window ·'], ['tarik tepi / sudut', 'drag edge / corner'], ['ubah ukuran ·', 'to resize ·'],
        ['2× klik header', 'Double-click header'], ['maksimalkan', 'to maximize'],
        ['Selector gambar', 'Image selector'], ['Opsional. Isi bila gambar post tidak terdeteksi otomatis.', 'Optional. Fill in if the post images are not detected automatically.'],
        ['mis. #reader img', 'e.g. #reader img'], ['Filter host / URL gambar', 'Image host / URL filter'],
        ['Opsional. Kosong = semua host.', 'Optional. Empty = all hosts.'], ['mis. img.pawchive.pw', 'e.g. img.pawchive.pw'],
        ['Kapan dipakai?', 'When to use it?'],
        ['Deteksi otomatis sudah membuang iklan, logo, dan banner. Atur dua kolom di atas hanya jika preview kosong atau ikut menampilkan gambar yang bukan halaman manga.', 'Auto-detection already filters out ads, logos and banners. Use the two fields above only if the preview is empty or also shows images that are not manga pages.'],
        ['Reset ke bawaan', 'Reset to defaults'], ['Kembalikan semua pengaturan ke nilai bawaan?', 'Reset all settings to their defaults?'],
        ['(Folder simpan tidak diubah; posisi & ukuran jendela ikut di-reset.)', '(The save folder is not changed; window position & size are reset too.)'],
        ['Pengaturan dikembalikan ke bawaan', 'Settings restored to defaults'],
        ['Bahasa / Language', 'Language / Bahasa'],
        ['CBZ untuk Mihon', 'CBZ for Mihon'], ['CBZ Mihon', 'Mihon CBZ'],
        ['Nama Manga › Chapter.cbz (+ cover.jpg), siap dibaca di Mihon', 'Manga Name › Chapter.cbz (+ cover.jpg), ready to read in Mihon'],
        ['Tiap post 1 file .cbz di folder nama manga (+ cover.jpg)', 'Each post as 1 .cbz file in the manga-name folder (+ cover.jpg)'],
        ['Seret post / avatar manga ke manga lain untuk menggabung', 'Drag a post / manga avatar onto another manga to merge'],
        ['Seret ke manga lain untuk menggabung semua postnya', 'Drag onto another manga to merge all its posts'],
        ['Metadata Mihon (details.json)', 'Mihon metadata (details.json)'],
        ['Mode CBZ + folder pilihan: tulis details.json di folder manga berisi author, genre, type (sebagai genre), status & deskripsi supaya tampil di Mihon.', 'CBZ mode + custom folder: write details.json in the manga folder with author, genre, type (as a genre), status & description so they show in Mihon.'],
        ['Cover Mihon (mode CBZ)', 'Mihon cover (CBZ mode)'], ['Mati', 'Off'], ['Sekali', 'Once'], ['Tiap post', 'Each post'], ['GIF', 'GIF'],
        ['Jeda ganti cover GIF (detik)', 'Cover GIF frame delay (seconds)'],
        ['Mode GIF: halaman pertama tiap post jadi frame, berganti tiap beberapa detik lalu mengulang dari awal.', 'GIF mode: the first page of each post becomes a frame, switching every few seconds then looping back to the start.'],
        ['Membuat cover GIF ({} frame)…', 'Building GIF cover ({1} frames)…'],
        ['Perlu folder pilihan. Mihon hanya punya 1 cover per manga: “Sekali” = dari halaman pertama bila belum ada; “Tiap post” = ditimpa dengan halaman pertama post yang terakhir diunduh; “GIF” = animasi dari halaman pertama semua post yang diunduh dengan mode ini.', 'Needs a custom folder. Mihon has only 1 cover per manga: “Once” = from the first page if none exists; “Each post” = overwritten with the first page of the last post downloaded; “GIF” = animation from the first page of every post downloaded in this mode.'],
        ['Nama Manga/Chapter 01.cbz — untuk Mihon (Local source). Otomatis memakai mode Per post', 'Manga Name/Chapter 01.cbz — for Mihon (Local source). Automatically uses Per post mode'],

        // ---------- log
        ['Log aktivitas', 'Activity log'], ['Filter level', 'Filter level'], ['Cari di log…', 'Search log…'], ['Hapus log', 'Clear log'],
        ['Tidak ada entri yang cocok dengan filter.', 'No entries match the filter.'], ['Log masih kosong.', 'The log is empty.'],
        ['Menampilkan 2000 entri terakhir dari {} (Copy / Download tetap berisi semuanya).', 'Showing the last 2000 entries of {1} (Copy / Download still include everything).'],
        ['Gagal menyalin log', 'Failed to copy log'], ['Log disalin ({} entri)', 'Log copied ({1} entries)'], ['Log diunduh: {}', 'Log downloaded: {1}'], ['Log dihapus', 'Log cleared'],
        ['Pawchive Downloader — klik: panel · klik kanan: antrian', 'Pawchive Downloader — click: panel · right-click: queue'],
        ['Buka antrian download', 'Open download queue'], ['Preview & download · klik kanan = download langsung ({})', 'Preview & download · right-click = direct download ({1})'],
        ['Pawchive Downloader v{} aktif', 'Pawchive Downloader v{1} active'], ['Otomatis membuka panel (halaman manga)', 'Auto-opening panel (manga page)'],

        // ---------- folder / simpan / jaringan
        ['Browser ini tidak mendukung pilih folder. Pakai Chrome / Edge terbaru.', 'This browser does not support folder picking. Use the latest Chrome / Edge.'],
        ['Simpan ke folder Downloads bawaan', 'Saving to the default Downloads folder'], ['Izin folder ditolak', 'Folder permission denied'],
        ['Pilih folder dibatalkan', 'Folder selection cancelled'], ['Pilih folder gagal: {}', 'Folder selection failed: {1}'],
        ['Folder simpan di-reset ke Downloads bawaan', 'Save folder reset to the default Downloads'],
        ['Nama folder ditolak ("{}"), coba "{}" — {}', 'Folder name rejected ("{1}"), trying "{2}" — {3}'],
        ['Tersimpan ke folder: {} ({})', 'Saved to folder: {1} ({2})'], ['Output dibatalkan: {}', 'Output cancelled: {1}'],
        ['File dikirim ke Downloads browser: {} ({})', 'File sent to the browser Downloads: {1} ({2})'],
        ['Stop ditekan · membatalkan {} request aktif', 'Stop pressed · cancelling {1} active {1?request|requests}'],
        ['Coba ulang {}/{} · {} — {}', 'Retry {1}/{2} · {3} — {4}'], ['Coba ulang {}/{} — {}', 'Retry {1}/{2} — {3}'],
        ['Jalur cepat (reader terbuka): {} gambar (mentah {})', 'Fast path (reader open): {1} images (raw {2})'],
        ['Gambar tidak ditemukan (atur selector / host di Pengaturan)', 'No images found (set the selector / host in Settings)'],
        ['{} gambar ditemukan dalam {} (mentah {}, dibuang {})', '{1} images found in {2} (raw {3}, discarded {4})'],
        ['host: {} · selector: {} · filter host: {} · contoh: {}', 'host: {1} · selector: {2} · host filter: {3} · sample: {4}'],
        ['Gagal membaca post: {} ({})', 'Failed to read post: {1} ({2})'],
        ['ZIP berisi lebih dari 65.535 file', 'ZIP contains more than 65,535 files'], ['ZIP melebihi 4 GB (kecilkan “Maks ukuran per ZIP” di Pengaturan)', 'ZIP exceeds 4 GB (lower “Max size per ZIP” in Settings)'],
        ['Kompresi PDF ({}): {}', 'PDF compression ({1}): {2}'], ['hemat {}', 'saved {1}'],

        // ---------- proses unduh
        ['Mengunduh {} halaman (paralel {}, jeda {} ms, retry {})', 'Downloading {1} pages (parallel {2}, delay {3} ms, retry {4})'],
        ['Hal. {}/{} OK', 'Page {1}/{2} OK'], ['Hal. {}/{} OK · {} · {} · {}', 'Page {1}/{2} OK · {3} · {4} · {5}'], ['Hal. {}/{} GAGAL: {} ({})', 'Page {1}/{2} FAILED: {3} ({4})'],
        ['Unduhan dihentikan ({}/{} halaman sempat diproses)', 'Download stopped ({1}/{2} pages processed)'],
        ['Unduh selesai: {}/{} halaman OK', 'Download finished: {1}/{2} pages OK'], ['{#}/{#} halaman gagal', '{1}/{2} pages failed'],
        ['Tidak ada halaman dipilih: "{}"', 'No pages selected: "{1}"'], ['Tidak ada halaman dipilih', 'No pages selected'],
        ['Unduh "{}" · {} halaman · format {} · simpan {}', 'Download "{1}" · {2} pages · format {3} · save {4}'],
        ['Unduh "{}" · {} halaman dari {} ({} dilewati) · format {} · simpan {}', 'Download "{1}" · {2} pages of {3} ({4} skipped) · format {5} · save {6}'],
        ['Gagal buat subfolder, simpan langsung ke folder root — {}', 'Failed to create subfolder, saving directly to the root folder — {1}'],
        ['Hal. {} tersimpan: {} · {} · {}', 'Page {1} saved: {2} · {3} · {4}'], ['Hal. {} GAGAL: {}', 'Page {1} FAILED: {2}'],
        ['Menyusun ZIP: {}.zip ({} file)', 'Building ZIP: {1}.zip ({2} files)'], ['ZIP gagal: {}', 'ZIP failed: {1}'],
        ['Menyusun PDF: {}.pdf ({} halaman)', 'Building PDF: {1}.pdf ({2} pages)'], ['PDF gagal: {}', 'PDF failed: {1}'],
        ['Masih ada proses berjalan', 'A process is still running'],
        ['Antrian dimulai: {} post · format {} · simpan {}', 'Queue started: {1} posts · format {2} · save {3}'],
        ['({}/{}) Post selesai: "{}" · {} halaman · {}', '({1}/{2}) Post done: "{3}" · {4} pages · {5}'],
        ['Dihentikan saat memproses "{}"', 'Stopped while processing "{1}"'], ['({}/{}) Post gagal: "{}" — {}', '({1}/{2}) Post failed: "{3}" — {4}'],
        ['Dihentikan · {} selesai', 'Stopped · {1} done'], ['Selesai: {} ok, {} gagal', 'Done: {1} ok, {2} failed'], ['Selesai: {} ok', 'Done: {1} ok'],
        ['Antrian dihentikan: {} ok, {} gagal', 'Queue stopped: {1} ok, {2} failed'], ['Antrian selesai: {} ok, {} gagal', 'Queue finished: {1} ok, {2} failed'],
        ['Gabungan dimulai: {} post → 1 {} · {}', 'Merge started: {1} posts → 1 {2} · {3}'],
        ['maks per ZIP {} MB · prefix nomor {} · simpan {}', 'max per ZIP {1} MB · number prefix {2} · save {3}'],
        ['({}/{}) Mulai: "{}"', '({1}/{2}) Start: "{3}"'], ['"{}": {} halaman akan diunduh', '"{1}": {2} pages will be downloaded'],
        ['Batas {} MB tercapai ({}) → lanjut ke file part {}', 'Limit of {1} MB reached ({2}) → continuing to file part {3}'],
        ['({}/{}) Selesai: "{}" · {} halaman · {}', '({1}/{2}) Done: "{3}" · {4} pages · {5}'], ['({}/{}) Gagal: "{}" — {}', '({1}/{2}) Failed: "{3}" — {4}'],
        ['Dihentikan · file gabungan tidak dibuat', 'Stopped · merged file was not created'], ['Tidak ada post yang berhasil diunduh', 'No posts were downloaded successfully'],
        ['Menulis file akhir ({} post, {} halaman)…', 'Writing final file ({1} posts, {2} pages)…'], ['Menyimpan file…', 'Saving file…'],
        ['Selesai: {#} post', 'Done: {1} {1?post|posts}'], ['Gabungan selesai: {#} post', 'Merge done: {1} {1?post|posts}'],
        ['Gabungan gagal: {}', 'Merge failed: {1}'], ['Gagal: {}', 'Failed: {1}'],

        // ---------- antrian (logika)
        ['Tidak ada post untuk diantrikan', 'No posts to queue'], ['Post sudah ada di antrian', 'The posts are already in the queue'],
        ['+{} post ke antrian · "{}" ({} total)', '+{1} {1?post|posts} to the queue · "{2}" ({3} total)'],
        ['Tambah {} post ke job existing: {}', 'Added {1} posts to existing job: {2}'],
        ['Antrian: "{}" · {} post', 'Queue: "{1}" · {2} {2?post|posts}'], ['Job baru #{}: {} · {} ch · {}/{}', 'New job #{1}: {2} · {3} ch · {4}/{5}'],
        ['Tidak ada post di halaman ini', 'No posts on this page'], ['Centang post di sidebar dulu', 'Check posts in the sidebar first'],
        ['Tidak bisa hapus job yang sedang berjalan — Stop dulu', 'Cannot delete a running job — press Stop first'],
        ['Antrian selesai dibersihkan', 'Finished items cleared from the queue'], ['Stop antrian dulu', 'Stop the queue first'],
        ['Hapus semua {} job di antrian?', 'Delete all {1} jobs in the queue?'],
        ['Job #{} gagal: {}', 'Job #{1} failed: {2}'], ['Antrian sedang berjalan', 'The queue is already running'],
        ['Masih ada unduhan lain — tunggu selesai atau Stop', 'Another download is still running — wait for it to finish or press Stop'],
        ['Centang minimal 1 manga di antrian dulu', 'Check at least 1 manga in the queue first'],
        ['Hasil edit {} post sudah hilang (halaman di-refresh), jadi akan diunduh TANPA edit:', 'The edits of {1} posts were lost (page refreshed), so they will be downloaded WITHOUT edits:'],
        ['Lanjut tanpa edit?', 'Continue without edits?'],
        ['Mulai proses: {} manga · mode {} · format {}', 'Starting: {1} manga · mode {2} · format {3}'], ['Menggabungkan {} manga · {} post…', 'Merging {1} manga · {2} posts…'],
        ['Gabung {} manga ({} post) → 1 {} · nama "{}"', 'Merge {1} manga ({2} posts) → 1 {3} · name "{4}"'], ['Gabung {} manga ({} post) → 1 {}', 'Merge {1} manga ({2} posts) → 1 {3}'],
        ['Antrian: {}', 'Queue: {1}'], ['Proses antrian error: {}', 'Queue process error: {1}'],
        ['Proses antrian dihentikan: {} berhasil, {} gagal', 'Queue process stopped: {1} succeeded, {2} failed'], ['Proses antrian selesai: {} berhasil, {} gagal', 'Queue process finished: {1} succeeded, {2} failed'],
        ['{#} post gagal diunduh', '{1} {1?post|posts} failed to download'], ['Antrian dihentikan', 'Queue stopped'], ['Antrian selesai · {} manga berhasil', 'Queue finished · {1} manga succeeded'],
        ['Antrian selesai · {} manga berhasil, {} gagal', 'Queue finished · {1} manga succeeded, {2} failed'],
        ['Hapus {} manga terpilih dari antrian?', 'Remove the {1} selected manga from the queue?'],
        ['Tidak ada proses berjalan', 'Nothing is running'], ['Menghentikan antrian…', 'Stopping the queue…']
    ];
    const I18N_EX = Object.create(null), I18N_TP = [];
    I18N.forEach(p => {
        if (!/\{#?\}/.test(p[0])) { I18N_EX[p[0]] = p[1]; return; }
        const lits = p[0].split(/\{#?\}/), kinds = p[0].match(/\{#?\}/g);
        let src = '^';
        lits.forEach((l, i) => { src += l.replace(/[.*+?^${}()|[\]\\]/g, '\\$&'); if (i < kinds.length) src += kinds[i] === '{#}' ? '(\\d[\\d.,/ ]*?)' : '([\\s\\S]*?)'; });
        I18N_TP.push({ rx: new RegExp(src + '$'), to: p[1], w: lits.join('').length });
    });
    I18N_TP.sort((a, b) => b.w - a.w);
    const trMemo = new Map();
    function trCore(s) {   // cocokkan persis / pola; kembalikan null bila tidak ada
        if (s in I18N_EX) return I18N_EX[s];
        for (const t of I18N_TP) {
            const m = t.rx.exec(s);
            if (!m || m.slice(1).some(g => /[.?!]\s+[A-Z]/.test(g))) continue;   // isi {} tidak boleh melintasi batas kalimat
            return t.to.replace(/\{(\d+)\?([^|}]*)\|([^}]*)\}/g, (_, i, a, b) => String(m[i]).trim() === '1' ? a : b)
                .replace(/\{(\d+)\}/g, (_, i) => trAny(m[i]));
        }
        return null;
    }
    function trAny(s) {   // trCore + cadangan: per baris / per ' · ' / per kalimat
        if (!s || !/[A-Za-z]/.test(s)) return s;
        const c = trCore(s);
        if (c !== null) return c;
        const sents = (x) => { const o = []; const re = /[.?!]\s+(?=[A-Z])/g; let last = 0, m; while ((m = re.exec(x))) { o.push(x.slice(last, m.index + 1)); last = m.index + m[0].length; } o.push(x.slice(last)); return o; };
        const colon = (x) => {   // 'Judul: pesan' -> terjemahkan sisi kiri & kanan (pemisah pertama)
            const i = x.indexOf(': ');
            if (i < 1) return null;
            const l = x.slice(0, i), r = x.slice(i + 2), tl = trAny(l), trr = trAny(r);
            return tl !== l || trr !== r ? tl + ': ' + trr : null;
        };
        const part = (re, glue) => {
            const ps = re === 'S' ? sents(s) : s.split(re);
            if (ps.length < 2) return null;
            let ch = false;
            const o = ps.map(x => { const t = x.trim(); if (!t) return x; const r = trAny(t); if (r !== t) ch = true; return x.replace(t, () => r); });
            return ch ? o.join(glue) : null;
        };
        return part(/\n/, '\n') || part(/ · /, ' · ') || part('S', ' ') || colon(s) || s;
    }
    function tr(s) {   // terjemahkan teks (menjaga spasi di tepi); no-op bila bahasa = id
        if (lang !== 'en' || typeof s !== 'string' || !s) return s;
        let r = trMemo.get(s);
        if (r === undefined) {
            const t = s.trim();
            r = t ? s.replace(t, () => trAny(t).replace(/\b(\d+(?:\.\d+)?) dtk\b/g, '$1 s')) : s;
            if (trMemo.size > 3000) trMemo.clear();
            trMemo.set(s, r);
        }
        return r;
    }
    // ---- dialog sendiri (pengganti confirm / alert / prompt bawaan browser). Semua mengembalikan Promise → pakai await.
    //   ddConfirm(pesan, { title, head, ok, cancel, danger })  → true / false
    //   ddAlert(pesan, { title })                              → true
    //   ddFields(pesan, [{ k, label, value }], { title, ok })  → { k: nilai } / null
    let dlgChain = Promise.resolve();
    function dlgShow(o) {
        return new Promise((resolve) => {
            const fields = o.fields || null;
            const kind = o.kind || (o.danger ? 'danger' : fields ? 'ask' : o.alert ? 'info' : 'warn');
            const icon = ({ danger: 'trash', info: 'alert', warn: 'alert', ask: 'edit' })[kind];
            const root = document.createElement('div');
            root.id = 'dd-dlg';
            const title = tr(o.title || (o.alert ? 'Pemberitahuan' : 'Konfirmasi'));
            root.innerHTML =
                '<div class="dl-box" role="alertdialog" aria-modal="true" aria-label="' + esc(title) + '">' +
                '<div class="dl-top"><div class="dl-ic ' + kind + '">' + IC(icon) + '</div><div class="dl-body">' +
                '<b class="dl-t">' + esc(title) + '</b>' +
                (o.head ? '<div class="dl-head">' + esc(o.head) + '</div>' : '') +
                (o.msg ? '<div class="dl-m">' + esc(o.msg) + '</div>' : '') +
                (fields ? '<div class="dl-f">' + fields.map((f, i) => '<label><span>' + esc(tr(f.label)) + '</span><input type="text" inputmode="numeric" data-f="' + i + '" value="' + esc(f.value == null ? '' : f.value) + '" autocomplete="off" spellcheck="false"></label>').join('') + '</div>' : '') +
                '</div></div>' +
                '<div class="dl-bt">' +
                (o.alert ? '' : '<button type="button" class="dl-b" data-r="0">' + esc(tr(o.cancel || 'Batal')) + '</button>') +
                '<button type="button" class="dl-b ' + (kind === 'danger' ? 'red' : 'pri') + '" data-r="1">' + esc(tr(o.ok || (o.alert ? 'OK' : 'Lanjut'))) + '</button>' +
                '</div></div>';
            const prevFocus = document.activeElement;
            let done = false;
            const cancelV = fields ? null : (o.alert ? true : false);
            const okV = () => fields ? Object.fromEntries(fields.map((f, i) => [f.k, root.querySelector('[data-f="' + i + '"]').value])) : true;
            const close = (v) => {
                if (done) return;
                done = true;
                window.removeEventListener('keydown', onKey, true);
                window.removeEventListener('keyup', swallow, true);
                window.removeEventListener('keypress', swallow, true);
                root.classList.add('out');
                setTimeout(() => root.remove(), 130);
                try { if (prevFocus && prevFocus.focus) prevFocus.focus({ preventScroll: true }); } catch (e) {}
                resolve(v);
            };
            const swallow = (e) => { e.stopPropagation(); };   // jangan bocor ke hotkey halaman / script
            const onKey = (e) => {
                e.stopPropagation();
                if (e.key === 'Escape') { e.preventDefault(); close(cancelV); return; }
                if (e.key === 'Enter') {
                    if (e.target && e.target.tagName === 'BUTTON') return;   // biar tombol yang fokus yang bekerja
                    e.preventDefault(); close(okV()); return;
                }
                if (e.key === 'Tab') {
                    const f = Array.prototype.slice.call(root.querySelectorAll('input,button'));
                    if (!f.length) return;
                    const i = f.indexOf(document.activeElement), n = e.shiftKey ? (i <= 0 ? f.length - 1 : i - 1) : (i < 0 || i >= f.length - 1 ? 0 : i + 1);
                    f[n].focus(); e.preventDefault();
                }
            };
            window.addEventListener('keydown', onKey, true);
            window.addEventListener('keyup', swallow, true);
            window.addEventListener('keypress', swallow, true);
            root.addEventListener('mousedown', (e) => { if (e.target === root && !o.alert) close(cancelV); e.stopPropagation(); });
            root.addEventListener('click', (e) => {
                e.stopPropagation();
                const b = e.target.closest && e.target.closest('[data-r]');
                if (b) close(b.dataset.r === '1' ? okV() : cancelV);
            });
            document.body.appendChild(root);
            const first = fields ? root.querySelector('input') : root.querySelector(kind === 'danger' ? '[data-r="0"]' : '[data-r="1"]');
            if (first) { first.focus(); if (fields && first.select) first.select(); }
        });
    }
    function ddDialog(o) {
        const p = dlgChain.then(() => dlgShow(o));   // dialog bertumpuk diantrikan satu per satu
        dlgChain = p.catch(() => {});
        return p;
    }
    const ddConfirm = (m, o) => ddDialog(Object.assign({}, o || {}, { msg: tr(m) }));
    const ddAlert = (m, o) => ddDialog(Object.assign({}, o || {}, { msg: tr(m), alert: true }));
    const ddFields = (m, fields, o) => ddDialog(Object.assign({}, o || {}, { msg: m ? tr(m) : '', fields }));

    // penerjemah DOM: hanya elemen milik script ini (bukan isi situs), kecuali judul manga / chapter
    const I18N_ROOTS = '#dd-pv,#dd-view,#dd-hover,#dd-toast,#dd-menu,#dd-fab,#dd-fab-wrap,#dd-edit,#dd-ed-menu,#dd-q,.dd-btn';
    const I18N_NT = '.ct,.q-title,.q-chi,#dd-pv-title,#dd-pv-sub,[data-nt],script,style,textarea';
    const I18N_ATTRS = ['title', 'placeholder', 'aria-label'];
    const txOrig = new WeakMap(), txShown = new WeakMap(), atOrig = new WeakMap(), atShown = new WeakMap();
    let i18nObs = null;
    function i18nOk(el) { return !!el && !!el.closest && !!el.closest(I18N_ROOTS) && !el.closest(I18N_NT); }
    function i18nText(n) {
        const cur = n.nodeValue;
        if (txShown.get(n) === cur) return;                       // tulisan kita sendiri
        if (!i18nOk(n.parentElement)) return;
        txOrig.set(n, cur);
        const t = lang === 'en' ? tr(cur) : cur;
        if (t !== cur) { txShown.set(n, t); n.nodeValue = t; } else txShown.delete(n);
    }
    function i18nAttr(el, a) {
        const cur = el.getAttribute(a);
        if (cur == null) return;
        const sh = atShown.get(el);
        if (sh && sh[a] === cur) return;
        if (!i18nOk(el)) return;
        let o = atOrig.get(el); if (!o) { o = {}; atOrig.set(el, o); }
        o[a] = cur;
        const t = lang === 'en' ? tr(cur) : cur;
        if (t !== cur) { const s2 = sh || {}; s2[a] = t; atShown.set(el, s2); el.setAttribute(a, t); } else if (sh) delete sh[a];
    }
    function i18nTree(root) {
        if (!root) return;
        if (root.nodeType === 3) { i18nText(root); return; }
        if (root.nodeType !== 1 || !i18nOk(root) && !(root.querySelector && root.querySelector(I18N_ROOTS))) return;
        const w = document.createTreeWalker(root, NodeFilter.SHOW_TEXT);
        let n; while ((n = w.nextNode())) if (n.nodeValue.trim()) i18nText(n);
        const els = root.querySelectorAll('[title],[placeholder],[aria-label]');
        els.forEach(el => I18N_ATTRS.forEach(a => i18nAttr(el, a)));
        I18N_ATTRS.forEach(a => i18nAttr(root, a));
    }
    function i18nApplyAll() { document.querySelectorAll(I18N_ROOTS).forEach(i18nTree); }
    function i18nStart() {
        if (i18nObs || !document.body) return;
        i18nObs = new MutationObserver((list) => {
            for (const m of list) {
                if (m.type === 'childList') m.addedNodes.forEach(n => { if (n.nodeType === 3 ? i18nOk(n.parentElement) : n.nodeType === 1) i18nTree(n); });
                else if (m.type === 'characterData') i18nText(m.target);
                else if (m.type === 'attributes') i18nAttr(m.target, m.attributeName);
            }
        });
        i18nObs.observe(document.body, { subtree: true, childList: true, characterData: true, attributes: true, attributeFilter: I18N_ATTRS });
    }
    function i18nStop() { if (i18nObs) { i18nObs.disconnect(); i18nObs = null; } }
    function setLang(v) {
        lang = v === 'en' ? 'en' : 'id';
        sv('dd_lang', lang);
        trMemo.clear();
        if (lang === 'en') i18nStart();
        // kembalikan teks asli dulu (supaya terjemahan selalu dihitung dari sumber Indonesia), lalu terapkan bahasa aktif
        document.querySelectorAll(I18N_ROOTS).forEach(root => {
            const w = document.createTreeWalker(root, NodeFilter.SHOW_TEXT);
            let n; while ((n = w.nextNode())) { if (txShown.has(n) && txOrig.has(n) && n.nodeValue === txShown.get(n)) { n.nodeValue = txOrig.get(n); txShown.delete(n); } }
            root.querySelectorAll('[title],[placeholder],[aria-label]').forEach(el => {
                const sh = atShown.get(el), o = atOrig.get(el);
                if (sh && o) I18N_ATTRS.forEach(a => { if (a in sh && el.getAttribute(a) === sh[a]) { el.setAttribute(a, o[a]); delete sh[a]; } });
            });
        });
        if (lang === 'en') i18nApplyAll(); else i18nStop();
        try { const l = document.getElementById('dd-set-lang'); if (l) l.querySelectorAll('button').forEach(b => b.classList.toggle('on', b.dataset.v === lang)); } catch (e) {}
        log('info', 'ui', lang === 'en' ? 'Language: English' : 'Bahasa: Indonesia');
    }


    // ------------------------------------------------------------ romaji (tulisan Jepang di UI → huruf Latin)
    // Bagian ini hanya mengubah TAMPILAN di panel script ini. Untuk nama folder / file / Series hasil unduhan, lihat rmName() di bawah (setting terpisah).
    // Kana: dikonversi lokal (instan). Kanji: butuh kamus → kuroshiro + kuromoji (@require, kamus ±17 MB dari jsDelivr,
    // diunduh sekali lalu di-cache browser). Bila kamus gagal dimuat, kana tetap jadi romaji dan kanji dibiarkan.
    let romaji = gv('dd_romaji', true) !== false;
    const RM_JP = /[\u3000-\u30ff\u3400-\u4dbf\u4e00-\u9fff\uff00-\uffef]/;
    const RM_BASE = {
        'あ':'a','い':'i','う':'u','え':'e','お':'o','か':'ka','き':'ki','く':'ku','け':'ke','こ':'ko','が':'ga','ぎ':'gi','ぐ':'gu','げ':'ge','ご':'go',
        'さ':'sa','し':'shi','す':'su','せ':'se','そ':'so','ざ':'za','じ':'ji','ず':'zu','ぜ':'ze','ぞ':'zo','た':'ta','ち':'chi','つ':'tsu','て':'te','と':'to',
        'だ':'da','ぢ':'ji','づ':'zu','で':'de','ど':'do','な':'na','に':'ni','ぬ':'nu','ね':'ne','の':'no','は':'ha','ひ':'hi','ふ':'fu','へ':'he','ほ':'ho',
        'ば':'ba','び':'bi','ぶ':'bu','べ':'be','ぼ':'bo','ぱ':'pa','ぴ':'pi','ぷ':'pu','ぺ':'pe','ぽ':'po','ま':'ma','み':'mi','む':'mu','め':'me','も':'mo',
        'や':'ya','ゆ':'yu','よ':'yo','ら':'ra','り':'ri','る':'ru','れ':'re','ろ':'ro','わ':'wa','ゐ':'i','ゑ':'e','を':'o','ん':'n','ゔ':'vu','ゎ':'wa',
        'ぁ':'a','ぃ':'i','ぅ':'u','ぇ':'e','ぉ':'o'
    };
    const RM_PUNCT = { '【':'[', '】':']', '「':'“', '」':'”', '『':'“', '』':'”', '〈':'<', '〉':'>', '《':'<<', '》':'>>', '、':', ', '。':'. ', '・':'·', '〜':'~', '～':'~', '\u3000':' ' };
    function rmPunct(t) { return t.replace(/[【】「」『』〈〉《》、。・〜～\u3000]/g, c => RM_PUNCT[c]); }
    function rmCap(t) { return t.replace(/^([^A-Za-z\u00c0-\u024f]*)([a-z])/, (m, a, b) => a + b.toUpperCase()); }
    function rmTidy(t) {
        return rmCap(rmPunct(String(t)).replace(/\s+/g, ' ').replace(/\s+([,.!?\]\)”])/g, '$1').replace(/([\[\(“])\s+/g, '$1').trim());
    }
    function rmKana(src) {
        let s = String(src).normalize('NFKC').replace(/[\u30a1-\u30f6]/g, c => String.fromCharCode(c.charCodeAt(0) - 0x60)).replace(/ヴ/g, 'ゔ');
        let out = '', sok = false;
        for (let i = 0; i < s.length; i++) {
            const c = s[i];
            if (c === 'っ') { sok = true; continue; }
            if (c === 'ー') { const m = out.match(/[aiueo]$/); out += m ? m[0] : ''; continue; }
            let r = RM_BASE[c];
            if (r === undefined) { out += c; sok = false; continue; }
            const nx = s[i + 1];
            if (nx && 'ゃゅょ'.indexOf(nx) >= 0 && r.length > 1 && /i$/.test(r)) {
                const v = { 'ゃ': 'a', 'ゅ': 'u', 'ょ': 'o' }[nx];
                r = /^(sh|ch|j)i$/.test(r) ? r.slice(0, -1) + v : r.slice(0, -1) + 'y' + v;
                i++;
            } else if (nx && 'ぁぃぅぇぉ'.indexOf(nx) >= 0 && c !== 'ん') {
                const v = RM_BASE[nx];
                if (c === 'う') { r = 'w' + v; i++; }
                else if (c === 'ゔ') { r = 'v' + v; i++; }
                else if (r.length > 1 && /[aiueo]$/.test(r)) { r = r.slice(0, -1) + v; i++; }
            }
            if (c === 'ん') { const n2 = RM_BASE[s[i + 1]]; if (n2 && /^[aiueoy]/.test(n2)) r = "n'"; }
            if (sok) { r = /^ch/.test(r) ? 't' + r : /^[a-z]/.test(r) && !/^[aiueon]/.test(r) ? r[0] + r : r; sok = false; }
            out += r;
        }
        return rmTidy(out);
    }
    const rmCache = new Map(), rmPend = new Map();
    const rmOrig = new WeakMap(), rmShown = new WeakMap(), rmAt = new WeakMap();
    let rmReady = false, rmLoading = false, rmFailed = false, rmObs = null;
    let rmW = null, rmId = 0; const rmWait = new Map();
    function rmFail(msg) {
        rmLoading = false; rmFailed = true; rmReady = false;
        try { if (rmW) rmW.terminate(); } catch (e) {} rmW = null;
        rmWait.forEach(res => res(null)); rmWait.clear(); rmPend.clear();
        toast('Kamus romaji gagal dimuat — kanji tidak diubah', 'err'); log('warn', 'ui', 'Romaji: kamus gagal dimuat: ' + msg);
    }
    // Library pihak ketiga (dimuat dari CDN jsDelivr dengan versi dipatok, di dalam Web Worker — karena itu tidak bisa lewat @require):
    //   kuroshiro 1.2.0 (https://github.com/hexenq/kuroshiro), kuroshiro-analyzer-kuromoji 1.1.0, kuromoji 0.1.2 (kamus: data non-kode)
    // kuroshiro + kuromoji dijalankan di Web Worker (kamus ±17 MB diproses di luar thread utama supaya halaman tidak freeze)
    function rmInit() {
        if (rmW || rmLoading || rmFailed) return;
        rmLoading = true;
        toast('Memuat kamus romaji…', 'ok');
        const src = "self.window=self;" +
            "importScripts('https://cdn.jsdelivr.net/npm/kuroshiro@1.2.0/dist/kuroshiro.min.js','https://cdn.jsdelivr.net/npm/kuroshiro-analyzer-kuromoji@1.1.0/dist/kuroshiro-analyzer-kuromoji.min.js');" +
            "var K=self.Kuroshiro,A=self.KuromojiAnalyzer;K=K&&(K.default||K);A=A&&(A.default||A);var k=new K();" +
            "k.init(new A({dictPath:'https://cdn.jsdelivr.net/npm/kuromoji@0.1.2/dict/'})).then(function(){postMessage({t:'ready'});}).catch(function(e){postMessage({t:'fail',m:String(e&&e.message||e)});});" +
            "onmessage=function(e){var d=e.data;k.convert(d.s,{to:'romaji',mode:'spaced',romajiSystem:'hepburn'}).then(function(r){postMessage({t:'r',id:d.id,r:r});}).catch(function(){postMessage({t:'r',id:d.id,r:null});});};";
        try {
            rmW = new Worker(URL.createObjectURL(new Blob([src], { type: 'application/javascript' })));
        } catch (e) { rmW = null; rmFail('Worker tidak tersedia (' + (e && e.message || e) + ')'); return; }
        rmW.onerror = (e) => rmFail((e && e.message) || 'worker error');
        rmW.onmessage = (e) => {
            const d = e.data || {};
            if (d.t === 'ready') {
                rmReady = true; rmLoading = false;
                toast('Kamus romaji siap', 'ok'); log('ok', 'ui', 'Romaji: kamus kuromoji siap');
                if (romaji) rmApplyAll(true);
            } else if (d.t === 'fail') rmFail(d.m);
            else if (d.t === 'r') { const res = rmWait.get(d.id); if (res) { rmWait.delete(d.id); res(d.r); } }
        };
    }
    function rmConvert(orig) {
        if (!rmReady || !rmW) return null;
        let p = rmPend.get(orig);
        if (p) return p;
        p = new Promise(res => { const id = ++rmId; rmWait.set(id, res); rmW.postMessage({ id, s: String(orig).normalize('NFKC') }); })
            .then(r => { rmPend.delete(orig); if (r == null) return null; r = rmTidy(r); rmCache.set(orig, r); return r; });
        rmPend.set(orig, p);
        return p;
    }
    function rmOk(el) { return !!el && !!el.closest && !!el.closest(I18N_ROOTS) && !el.closest('script,style,textarea,input'); }
    function rmText(n, force) {
        if (!romaji) return;
        const cur = n.nodeValue;
        let orig;
        if (rmShown.get(n) === cur) { if (!force) return; orig = rmOrig.get(n); } else orig = cur;
        if (!orig || !RM_JP.test(orig) || !rmOk(n.parentElement)) return;
        rmOrig.set(n, orig);
        let t = rmCache.get(orig);
        if (t === undefined) {
            t = rmKana(orig);
            if (!rmReady) rmInit();
            const p = rmConvert(orig);
            if (p) p.then(r => { if (r != null && rmOrig.get(n) === orig && rmShown.get(n) === n.nodeValue && romaji) { rmShown.set(n, r); n.nodeValue = r; } });
        }
        if (t !== cur) { rmShown.set(n, t); n.nodeValue = t; }
    }
    function rmAttr(el, a) {
        if (!romaji) return;
        const cur = el.getAttribute(a);
        if (cur == null) return;
        let rec = rmAt.get(el); if (!rec) { rec = {}; rmAt.set(el, rec); }
        if (rec[a] && rec[a].s === cur) return;
        if (!RM_JP.test(cur) || !rmOk(el)) return;
        const t = rmCache.has(cur) ? rmCache.get(cur) : rmKana(cur);
        rec[a] = { o: cur, s: t };
        if (t !== cur) el.setAttribute(a, t);
    }
    function rmTree(root) {
        if (!root || !romaji) return;
        if (root.nodeType === 3) { if (rmOk(root.parentElement)) rmText(root); return; }
        if (root.nodeType !== 1 || !rmOk(root) && !(root.querySelector && root.querySelector(I18N_ROOTS))) return;
        const w = document.createTreeWalker(root, NodeFilter.SHOW_TEXT);
        let n; while ((n = w.nextNode())) if (n.nodeValue.trim()) rmText(n);
        root.querySelectorAll('[title],[placeholder],[aria-label]').forEach(el => I18N_ATTRS.forEach(a => rmAttr(el, a)));
        I18N_ATTRS.forEach(a => rmAttr(root, a));
    }
    function rmApplyAll(force) {
        document.querySelectorAll(I18N_ROOTS).forEach(root => {
            const w = document.createTreeWalker(root, NodeFilter.SHOW_TEXT);
            let n; while ((n = w.nextNode())) if (n.nodeValue.trim()) rmText(n, force);
            if (force) root.querySelectorAll('[title],[placeholder],[aria-label]').forEach(el => { const r = rmAt.get(el); if (r) I18N_ATTRS.forEach(a => { if (r[a] && el.getAttribute(a) === r[a].s && rmCache.has(r[a].o)) { r[a].s = rmCache.get(r[a].o); el.setAttribute(a, r[a].s); } }); });
            else rmTree(root);
        });
    }
    function rmStart() {
        if (rmObs || !document.body) return;
        rmObs = new MutationObserver((list) => {
            if (!romaji) return;
            for (const m of list) {
                if (m.type === 'childList') m.addedNodes.forEach(n => rmTree(n));
                else if (m.type === 'characterData') { if (rmOk(m.target.parentElement)) rmText(m.target); }
                else if (m.type === 'attributes') rmAttr(m.target, m.attributeName);
            }
        });
        rmObs.observe(document.body, { subtree: true, childList: true, characterData: true, attributes: true, attributeFilter: I18N_ATTRS });
    }
    function rmRestoreAll() {
        document.querySelectorAll(I18N_ROOTS).forEach(root => {
            const w = document.createTreeWalker(root, NodeFilter.SHOW_TEXT);
            let n; while ((n = w.nextNode())) if (rmShown.has(n) && rmOrig.has(n) && n.nodeValue === rmShown.get(n)) { n.nodeValue = rmOrig.get(n); rmShown.delete(n); }
            root.querySelectorAll('[title],[placeholder],[aria-label]').forEach(el => { const r = rmAt.get(el); if (r) I18N_ATTRS.forEach(a => { if (r[a] && el.getAttribute(a) === r[a].s) { el.setAttribute(a, r[a].o); delete r[a]; } }); });
        });
    }
    function setRomaji(v) {
        romaji = !!v; sv('dd_romaji', romaji);
        if (romaji) { rmStart(); rmApplyAll(false); } else rmRestoreAll();
        try { const b = document.querySelector('#dd-set-romaji button'); if (b) b.classList.toggle('on', romaji); } catch (e) {}
        log('info', 'ui', romaji ? 'Romaji: aktif' : 'Romaji: mati');
    }

    // ---- romaji untuk NAMA FOLDER / FILE / Series (hasil unduhan, bukan hanya tampilan)
    // Kana: lokal & instan. Kanji: lewat kamus kuromoji (diunduh sekali, lalu di-cache browser); bila kamus gagal / terlalu lama, kanji dibiarkan.
    const rmFileCache = new Map();
    async function rmName(t) {
        t = String(t == null ? '' : t);
        if (!rmFile || !RM_JP.test(t)) return t;
        if (rmFileCache.has(t)) return rmFileCache.get(t);
        let r = rmKana(t);
        if (/[\u3400-\u4dbf\u4e00-\u9fff]/.test(r)) {
            rmInit();
            const t0 = Date.now();
            while (!rmReady && !rmFailed && Date.now() - t0 < 90000) await sleep(150);
            if (rmReady) { try { const x = await rmConvert(t); if (x) r = x; } catch (e) {} }
            else log('warn', 'ui', 'Romaji nama folder: kamus belum siap, kanji dibiarkan — ' + t);
        }
        r = String(r || '').trim() || t;
        rmFileCache.set(t, r);
        if (r !== t) log('info', 'save', 'Romaji nama: "' + t + '" → "' + r + '"');
        return r;
    }

    let fmt = gv('dd_fmt', 'zip');                  // 'zip' | 'pdf' | 'files'   (download 1 chapter / "terpisah")
    let dlScope = gv('dd_scope', 'cur');            // 'cur' = chapter yang dibuka | 'sel' = chapter terpilih (sidebar)
    let multi = gv('dd_multi', 'sep');              // 'sep' | 'onezip' | 'onepdf' (download banyak chapter)
    let saveMode = gv('dd_save_mode', 'default');   // 'default' | 'folder'
    let subfolder = !!gv('dd_subfolder', true);     // folder per manga
    let conc = clamp(int(gv('dd_conc', 3), 3), 1, 6);
    let delayMs = Math.max(0, int(gv('dd_delay', 150), 150));
    let retries = clamp(int(gv('dd_retry', 2), 2), 0, 5);
    let imgSel = gv('dd_img_sel', '');              // selector gambar manual (opsional)
    let hostSel = gv('dd_host_sel', '');            // filter host/URL gambar manual (kosong = otomatis)
    let cols = clamp(int(gv('dd_cols', 4), 4), 2, 8);
    let hoverOn = !!gv('dd_hover', true);
    let hoverDelay = clamp(int(gv('dd_hover_delay', 350), 350), 0, 3000);
    let hoverSize = clamp(int(gv('dd_hover_size', 520), 520), 240, 1000);
    let zipMax = clamp(int(gv('dd_zip_max', 1800), 1800), 100, 3500);   // MB per file ZIP (gabungan), lewat batas dipecah _part2, ...
    let zipPrefix = !!gv('dd_zip_prefix', true);
    let pdfComp = String(gv('dd_pdf_comp', 'off'));   // kompres PDF: off | low | med | high (gambar dikecilkan + disimpan ulang sebagai JPEG)
    if (['off', 'low', 'med', 'high'].indexOf(pdfComp) < 0) pdfComp = 'off';    // ZIP gabungan: nama folder diawali nomor urut chapter
    let autoOpen = !!gv('dd_auto_open', false);     // otomatis buka panel saat di halaman manga / list chapter
    let animOn = gv('dd_anim', true) !== false;      // animasi UI (panel, toast, pulse, dll)
    let skipEmpty = gv('dd_skip_empty', true) !== false;   // lewati post tanpa lampiran ("No attachments")
    let scanAll = gv('dd_scan_all', true) !== false;   // pindai SEMUA halaman daftar (?o=50, ?o=100, …), bukan hanya halaman yang terbuka
    let autoSel = !!gv('dd_auto_sel', false);        // otomatis centang semua gambar saat preview dimuat
    let editUnsel = !!gv('dd_edit_unsel', true);     // setelah gambar dipilih selesai diedit (gabung/split/potong/resize): hasilnya tidak dicentang lagi
    // mode CBZ Mihon, cover.* di folder manga: off = tidak ditulis | once = hanya bila belum ada | each = ditimpa tiap chapter (halaman pertama chapter terakhir diunduh) | gif = GIF berganti-ganti dari halaman pertama semua chapter
    let mihonCover = String(gv('dd_mihon_cover_mode', gv('dd_mihon_cover', true) === false ? 'off' : 'once'));
    if (['off', 'once', 'each', 'gif'].indexOf(mihonCover) < 0) mihonCover = 'once';
    let mihonMeta = gv('dd_mihon_meta', true) !== false;   // mode CBZ Mihon: tulis details.json (author, genre, type, status, deskripsi)
    const CBZ_FMT = { jpg: 'image/jpeg', webp: 'image/webp', avif: 'image/avif' };
    let cbzConv = String(gv('dd_cbz_conv', gv('dd_cbz_jpg', false) ? 'jpg' : 'off'));   // mode CBZ: konversi gambar di dalam CBZ: off | jpg | webp | avif
    if (cbzConv !== 'off' && !CBZ_FMT[cbzConv]) cbzConv = 'off';
    let cbzQ = clamp(int(gv('dd_cbz_q', 92), 92), 40, 100);   // kualitas konversi (%)
    let rmFile = gv('dd_rm_file', true) !== false;   // nama manga Jepang -> romaji untuk nama folder / file / Series ComicInfo
    let mihonComic = gv('dd_mihon_comic', true) !== false;   // mode CBZ: tulis ComicInfo.xml di dalam tiap CBZ
    let notifCard = gv('dd_n_card', true) !== false;   // kartu ringkasan saat selesai (mati = toast biasa)
    let notifSec = clamp(int(gv('dd_n_sec', 12), 12), 3, 60);   // lama kartu tampil (detik)
    let notifSound = gv('dd_n_sound', true) !== false;   // bunyi saat selesai
    let notifSnd = ['ting', 'chime', 'soft'].indexOf(gv('dd_n_snd', 'ting')) >= 0 ? gv('dd_n_snd', 'ting') : 'ting';
    let notifVol = clamp(int(gv('dd_n_vol', 40), 40), 0, 100);
    let mihonGifSec = clamp(int(gv('dd_mihon_gif_sec', 3), 3), 1, 30);   // cover GIF: detik per gambar

    if (['zip', 'pdf', 'files', 'cbz'].indexOf(fmt) < 0) fmt = 'zip';
    if (['sep', 'onezip', 'onepdf'].indexOf(multi) < 0) multi = 'sep';
    if (['cur', 'sel'].indexOf(dlScope) < 0) dlScope = 'cur';
    // Mode download terakhir diingat TERPISAH: modeS = saat hanya ada 1 chapter (halaman reader), modeM = saat ada banyak chapter (halaman list).
    // Dulu keduanya berbagi satu nilai, jadi memakai mode di halaman reader menimpa pilihan mode gabungan (mis. 1 PDF) di halaman list.
    let modeS = String(gv('dd_mode_s', '') || '');
    let modeM = String(gv('dd_mode_m', '') || '');
    if (!modeS) modeS = 'cur:' + fmt;
    if (!modeM) modeM = dlScope === 'cur' ? 'cur:' + fmt : (multi === 'sep' ? 'sep:' + fmt : multi);

    let dirHandle = null;
    let abortFlag = false;
    let busy = false;
    const activeReqs = new Set();   // request download (dihentikan tombol Stop)
    const thumbReqs = new Set();    // request thumbnail / hover (dihentikan saat panel ditutup)

    const sleep = (ms) => new Promise(r => setTimeout(r, ms));
    const $ = (id) => document.getElementById(id);
    const esc = (s) => String(s == null ? '' : s).replace(/[&<>"']/g, c => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c]));
    // Nama aman untuk File System Access API / Windows
    // Catatan: beberapa karakter (mis. ~) lolos di getFileHandle tapi ditolak getDirectoryHandle di Chrome — jadi folder lebih ketat.
    const sanitize = (n, max) => {
        let s = String(n == null ? '' : n)
            .normalize('NFKC')
            .replace(/[\\/:*?"<>|\u0000-\u001f\u007f]/g, '')
            .replace(/[\u200b-\u200f\u2028\u2029\ufeff]/g, '')
            .replace(/\s+/g, ' ')
            .replace(/^[.\s]+|[.\s]+$/g, '')
            .slice(0, max || 120);
        if (/^(con|prn|aux|nul|com[1-9]|lpt[1-9])(\..*)?$/i.test(s)) s = '_' + s;
        return s || 'untitled';
    };
    // Khusus nama folder: hanya huruf/angka/spasi/tanda aman (hindari ~ , dll yang kadang ditolak API)
    const sanitizeDir = (n, max) => {
        let s = String(n == null ? '' : n)
            .normalize('NFKC')
            .replace(/[\\/:*?"<>|~`!@#$%^&*+=\[\]{};'"’‘“”,.?]/g, '')
            .replace(/[\u0000-\u001f\u007f\u200b-\u200f\u2028\u2029\ufeff]/g, '')
            .replace(/\s+/g, ' ')
            .replace(/^[.\s]+|[.\s]+$/g, '')
            .slice(0, max || 80);
        if (/^(con|prn|aux|nul|com[1-9]|lpt[1-9])(\..*)?$/i.test(s)) s = '_' + s;
        return s || 'folder';
    };
    const pad2 = (i) => String(i + 1).padStart(2, '0');
    const norm = (u) => { try { const x = new URL(u, location.href); return x.origin + x.pathname.replace(/\/+$/, ''); } catch (e) { return String(u); } };

    // ------------------------------------------------------------ log (disimpan di memori selama tab terbuka)
    const VER = '1.0.0';
    const LOGO_IMG = 'data:image/jpeg;base64,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';
    const LOGO_Q_IMG = 'data:image/jpeg;base64,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';   // ikon panel Antrian
    const SCRIPT_VER = (() => { try { return String(GM_info.script.version || ''); } catch (e) { return ''; } })();   // dari header @version
    const LOG = { rows: [], max: 8000, seq: 0, t0: Date.now(), lv: gv('dd_log_lv', 'all'), q: '', auto: true, nErr: 0, nWarn: 0 };
    const LVL = { debug: 'DEBUG', info: 'INFO', ok: 'OK', warn: 'WARN', err: 'ERROR' };
    const LMIN = { all: 0, info: 1, warn: 2, err: 3 };
    const LRANK = { debug: 0, info: 1, ok: 1, warn: 2, err: 3 };
    if (!(LOG.lv in LMIN)) LOG.lv = 'all';
    const p2 = (n, l) => String(n).padStart(l || 2, '0');
    const fmtTs = (t) => { const d = new Date(t); return d.getFullYear() + '-' + p2(d.getMonth() + 1) + '-' + p2(d.getDate()) + ' ' + p2(d.getHours()) + ':' + p2(d.getMinutes()) + ':' + p2(d.getSeconds()) + '.' + p2(d.getMilliseconds(), 3); };
    const fmtSize = (n) => n >= 1048576 ? (n / 1048576).toFixed(2) + ' MB' : Math.max(0, Math.round(n / 1024)) + ' KB';
    const secs = (t0) => ((performance.now() - t0) / 1000).toFixed(1) + ' dtk';
    const msecs = (t0) => Math.round(performance.now() - t0) + ' ms';
    function log(lvl, src, msg, extra) {
        if (extra && typeof extra === 'object') { try { extra = JSON.stringify(extra); } catch (e) { extra = String(extra); } }
        const row = { id: ++LOG.seq, t: Date.now(), lvl, src, msg: String(msg == null ? '' : msg), extra: extra ? String(extra).slice(0, 1500) : '' };
        LOG.rows.push(row);
        if (lvl === 'err') LOG.nErr++; else if (lvl === 'warn') LOG.nWarn++;
        if (LOG.rows.length > LOG.max) LOG.rows.splice(0, 500);
        try { logAppend(row); } catch (e) {}
        return row;
    }

    // ------------------------------------------------------------ toast
    let toastEl = null;
    function toast(msg, type) {
        log(type === 'err' ? 'err' : type === 'ok' ? 'ok' : 'info', 'ui', msg);
        if (!toastEl) { toastEl = document.createElement('div'); toastEl.id = 'dd-toast'; }
        if (!toastEl.isConnected && document.body) document.body.appendChild(toastEl);
        toastEl.textContent = msg;
        toastEl.className = 'show ' + (type || '');
        clearTimeout(toast.t);
        if (type !== 'busy') toast.t = setTimeout(() => { toastEl.className = ''; }, 4500);
    }

    // ---- kartu notifikasi "selesai download" (ringkasan + otomatis hilang, berhenti saat disorot mouse)
    let doneEl = null, doneT = 0, doneLeft = 0, doneStart = 0, titleOrig = null;
    function toastHide() { clearTimeout(toast.t); if (toastEl) toastEl.className = ''; }
    function doneHide() {
        clearTimeout(doneT);
        if (doneEl) doneEl.classList.remove('show');
    }
    let audioCtx = null;
    function playDone(kind, force) {   // bunyi pendek lewat WebAudio (tanpa file audio)
        if (!force && !notifSound) return;
        try {
            const AC = window.AudioContext || window.webkitAudioContext;
            if (!AC || notifVol <= 0) return;
            if (!audioCtx) audioCtx = new AC();
            if (audioCtx.state === 'suspended') audioCtx.resume();
            const SEQ = { ting: [[1318.5, 0, .45], [1760, .13, .6]], chime: [[880, 0, .5], [1108.7, .14, .5], [1318.5, .28, .8]], soft: [[659.3, 0, .55], [783.99, .17, .8]] };
            const seq = kind === 'warn' ? [[523.25, 0, .4], [392, .17, .65]] : (SEQ[notifSnd] || SEQ.ting);
            const t0 = audioCtx.currentTime + 0.03, vol = notifVol / 100 * 0.3;
            seq.forEach(([f, d, len]) => {
                const o = audioCtx.createOscillator(), g = audioCtx.createGain();
                o.type = 'sine'; o.frequency.value = f;
                g.gain.setValueAtTime(0.0001, t0 + d);
                g.gain.linearRampToValueAtTime(vol, t0 + d + 0.012);
                g.gain.exponentialRampToValueAtTime(0.0001, t0 + d + len);
                o.connect(g); g.connect(audioCtx.destination);
                o.start(t0 + d); o.stop(t0 + d + len + 0.05);
            });
        } catch (e) { /* bunyi opsional: abaikan bila diblokir browser */ }
    }
    function notifyDone(o) {
        try { notifyDone0(o); } catch (e) { try { toast(o.plain || tr(o.title), o.kind === 'ok' ? 'ok' : 'err'); } catch (e2) {} }
    }
    function notifyDone0(o) {   // { kind: 'ok'|'warn', title, sub, chips: [text | {t, bad}], where, plain, final }
        // saat antrian berjalan, tiap job cukup toast kecil; kartu ringkasan hanya di akhir antrian
        if (Q.running && !o.final) { toast(o.plain || tr(o.title), o.kind === 'ok' ? 'ok' : 'err'); return; }
        playDone(o.kind);
        if (!notifCard) { log(o.kind === 'ok' ? 'ok' : 'warn', 'ui', o.plain || o.title); toast(o.plain || tr(o.title), o.kind === 'ok' ? 'ok' : 'err'); return; }
        const chips = (o.chips || []).filter(Boolean).map(c => typeof c === 'string' ? { t: c } : c);
        log(o.kind === 'ok' ? 'ok' : 'warn', 'ui', o.plain || o.title);
        toastHide();
        if (!doneEl) { doneEl = document.createElement('div'); doneEl.id = 'dd-done'; }
        if (!doneEl.isConnected && document.body) document.body.appendChild(doneEl);
        const where = o.where || (saveMode === 'folder' && dirHandle ? dirHandle.name : 'Downloads');
        doneEl.className = o.kind || 'ok';
        doneEl.innerHTML =
            '<div class="dn-ic">' + IC(o.kind === 'ok' ? 'check' : 'alert') + '</div>' +
            '<div class="dn-b"><b class="dn-t">' + esc(tr(o.title)) + '</b>' +
            (o.sub ? '<div class="dn-s" title="' + esc(o.sub) + '">' + esc(o.sub) + '</div>' : '') +
            (chips.length ? '<div class="dn-chips">' + chips.map(c => '<span' + (c.bad ? ' class="bad"' : '') + '>' + esc(tr(c.t)) + '</span>').join('') + '</div>' : '') +
            '<div class="dn-w">' + IC('folder') + '<span>' + esc(tr('Disimpan di')) + '</span><b title="' + esc(where) + '">' + esc(where) + '</b></div></div>' +
            '<button type="button" class="dn-x" title="' + esc(tr('Tutup')) + '">' + IC('x') + '</button><i class="dn-bar"></i>';
        doneEl.querySelector('.dn-x').onclick = doneHide;
        void doneEl.offsetWidth;   // restart animasi
        doneEl.classList.add('show');
        const total = Math.round(notifSec * 1000 * (o.kind === 'ok' ? 1 : 1.7));
        doneEl.querySelector('.dn-bar').style.animationDuration = total + 'ms';
        doneLeft = total; doneStart = Date.now();
        clearTimeout(doneT); doneT = setTimeout(doneHide, doneLeft);
        doneEl.onmouseenter = () => { clearTimeout(doneT); doneLeft -= Date.now() - doneStart; };
        doneEl.onmouseleave = () => { doneStart = Date.now(); clearTimeout(doneT); doneT = setTimeout(doneHide, Math.max(1500, doneLeft)); };
        // tab sedang tidak dilihat: tandai judul tab sampai dibuka lagi
        if (document.hidden) {
            if (titleOrig == null) titleOrig = document.title;
            document.title = (o.kind === 'ok' ? '✓ ' : '⚠ ') + tr(o.title) + ' · ' + titleOrig;
            const back = () => { if (document.hidden) return; document.removeEventListener('visibilitychange', back); if (titleOrig != null) { document.title = titleOrig; titleOrig = null; } };
            document.addEventListener('visibilitychange', back);
        }
    }

    // ------------------------------------------------------------ folder (IndexedDB)
    function idb() {
        return new Promise((res, rej) => {
            const r = indexedDB.open('dd_dl_db', 1);
            r.onupgradeneeded = () => r.result.createObjectStore('kv');
            r.onsuccess = () => res(r.result);
            r.onerror = () => rej(r.error);
        });
    }
    async function idbSet(k, v) { const db = await idb(); return new Promise((res, rej) => { const tx = db.transaction('kv', 'readwrite'); tx.objectStore('kv').put(v, k); tx.oncomplete = res; tx.onerror = () => rej(tx.error); }); }
    async function idbGet(k) { const db = await idb(); return new Promise((res, rej) => { const rq = db.transaction('kv').objectStore('kv').get(k); rq.onsuccess = () => res(rq.result); rq.onerror = () => rej(rq.error); }); }
    async function idbDel(k) { const db = await idb(); return new Promise((res, rej) => { const tx = db.transaction('kv', 'readwrite'); tx.objectStore('kv').delete(k); tx.oncomplete = res; tx.onerror = () => rej(tx.error); }); }

    async function restoreDir() {
        try { const h = await idbGet('dir'); if (h && h.kind === 'directory') dirHandle = h; } catch (e) {}
        if (saveMode === 'folder' && !dirHandle) { saveMode = 'default'; sv('dd_save_mode', saveMode); }
        syncUI();
    }
    async function pickFolder() {
        if (typeof window.showDirectoryPicker !== 'function') { ddAlert('Browser ini tidak mendukung pilih folder. Pakai Chrome / Edge terbaru.', { title: 'Browser tidak didukung' }); return false; }
        try {
            dirHandle = await window.showDirectoryPicker({ mode: 'readwrite', id: 'dd-dl' });
            saveMode = 'folder'; sv('dd_save_mode', saveMode);
            try { await idbSet('dir', dirHandle); } catch (e) {}
            syncUI(); toast('Folder: ' + dirHandle.name, 'ok');
            return true;
        } catch (e) {
            const ab = e && e.name === 'AbortError';
            log(ab ? 'info' : 'err', 'folder', ab ? 'Pilih folder dibatalkan' : 'Pilih folder gagal: ' + (e && e.message));
            return false;
        }
    }
    async function resetFolder() {
        log('info', 'folder', 'Folder simpan di-reset ke Downloads bawaan');
        dirHandle = null; saveMode = 'default'; sv('dd_save_mode', saveMode);
        try { await idbDel('dir'); } catch (e) {}
        syncUI(); toast('Simpan ke folder Downloads bawaan', 'ok');
    }
    async function ensureFolder() {
        if (saveMode !== 'folder') return true;
        if (!dirHandle) return pickFolder();
        try {
            let p = await dirHandle.queryPermission({ mode: 'readwrite' });
            if (p !== 'granted') p = await dirHandle.requestPermission({ mode: 'readwrite' });
            if (p !== 'granted') { toast('Izin folder ditolak', 'err'); return false; }
            return true;
        } catch (e) { toast('Folder error: ' + e.message, 'err'); return false; }
    }
    function downloadBlob(name, blob) {
        const url = URL.createObjectURL(blob);
        const a = document.createElement('a');
        a.href = url; a.download = name;
        document.body.appendChild(a); a.click(); a.remove();
        setTimeout(() => URL.revokeObjectURL(url), 60000);
    }
    // Buat / ambil subfolder berlapis (setiap segmen pakai sanitizeDir). Panggil sekali sebelum unduhan paralel.
    async function ensureDir(sub) {
        if (!dirHandle) return null;
        let dir = dirHandle;
        if (sub) {
            for (const raw of String(sub).split('/').filter(Boolean)) {
                const seg = sanitizeDir(raw, 80);
                if (!seg || seg === '.' || seg === '..') continue;
                try {
                    dir = await dir.getDirectoryHandle(seg, { create: true });
                } catch (e) {
                    // fallback: nama lebih sederhana
                    const alt = ('dl_' + seg.replace(/[^a-zA-Z0-9]+/g, '_').replace(/^_|_$/g, '')).slice(0, 60) || 'download';
                    log('warn', 'folder', 'Nama folder ditolak ("' + seg + '"), coba "' + alt + '" — ' + (e && e.message));
                    dir = await dir.getDirectoryHandle(alt, { create: true });
                }
            }
        }
        return dir;
    }
    async function saveBlob(blob, name, sub) {
        if (saveMode === 'folder' && dirHandle) {
            const dir = await ensureDir(sub);
            const fn = sanitize(name, 180);
            const fh = await dir.getFileHandle(fn, { create: true });
            const w = await fh.createWritable();
            try { await w.write(blob); } finally { await w.close(); }
            return;
        }
        downloadBlob(name, blob);
    }
    // Output bertahap: mode folder -> langsung ke disk (hemat memori); mode Downloads -> dikumpulkan sebagai Blob lalu diunduh.
    // abort() membuang file setengah jadi (file lama dengan nama sama tidak ikut terhapus).
    async function openOut(name, sub, mime) {
        if (saveMode === 'folder' && dirHandle) {
            const dir = await ensureDir(sub);
            name = sanitize(name, 180);
            let existed = true;
            try { await dir.getFileHandle(name); } catch (e) { existed = false; }
            const fh = await dir.getFileHandle(name, { create: true });
            const wr = await fh.createWritable();
            let size = 0;
            return {
                get size() { return size; },
                async write(b) { if (typeof b === 'string') b = ENC.encode(b); await wr.write(b); size += b.length; },
                async finish() { await wr.close(); log('ok', 'save', 'Tersimpan ke folder: ' + [sub, name].filter(Boolean).join('/') + ' (' + fmtSize(size) + ')'); },
                async abort() { log('warn', 'save', 'Output dibatalkan: ' + name); try { await wr.abort(); } catch (e) {} if (!existed) { try { await dir.removeEntry(name); } catch (e) {} } }
            };
        }
        let parts = [], mem = 0, size = 0;
        return {
            get size() { return size; },
            async write(b) {
                if (typeof b === 'string') b = ENC.encode(b);
                parts.push(b); mem += b.length; size += b.length;
                if (mem > 64e6) { parts = [new Blob(parts)]; mem = 0; await sleep(0); }   // dipadatkan jadi Blob (dikelola browser, bisa ke disk)
            },
            async finish() { const blob = new Blob(parts, { type: mime }); parts = []; downloadBlob(name, blob); log('ok', 'save', 'File dikirim ke Downloads browser: ' + name + ' (' + fmtSize(size) + ')'); },
            async abort() { log('warn', 'save', 'Output dibatalkan: ' + name); parts = []; }
        };
    }

    // ------------------------------------------------------------ network
    function stopAll() { log('warn', 'net', 'Stop ditekan · membatalkan ' + activeReqs.size + ' request aktif'); abortFlag = true; activeReqs.forEach(h => { try { h.abort(); } catch (e) {} }); activeReqs.clear(); }
    function stopThumbs() { thumbReqs.forEach(h => { try { h.abort(); } catch (e) {} }); thumbReqs.clear(); }

    function gmBuf(url, onProg, set) {
        set = set || activeReqs;
        return new Promise((resolve, reject) => {
            let h = null;
            const done = () => { if (h) set.delete(h); };
            h = GM_xmlhttpRequest({
                method: 'GET', url, responseType: 'arraybuffer', timeout: 90000,
                headers: { Referer: location.origin + '/' },
                onprogress: (r) => { if (onProg && r && r.lengthComputable && r.total) onProg(r.loaded / r.total); },
                onload: (r) => { done(); (r.status >= 200 && r.status < 400 && r.response) ? resolve(r.response) : reject(new Error('HTTP ' + r.status)); },
                onerror: () => { done(); reject(new Error('Network error')); },
                ontimeout: () => { done(); reject(new Error('Timeout')); },
                onabort: () => { done(); reject(new Error('aborted')); }
            });
            if (h && h.abort) set.add(h);
        });
    }
    async function getBuf(url, onProg, set) {
        const alts = ALT.get(url) || [];
        let lastErr;
        for (let k = 0; k <= alts.length; k++) {
            const u = k ? alts[k - 1] : url;
            try { return await getBufOne(u, onProg, set); }
            catch (e) {
                if ((e && e.message === 'aborted') || k >= alts.length) throw e;
                lastErr = e; log('debug', 'net', 'URL asli gagal (' + (e && e.message) + '), coba cadangan: ' + alts[k], url);
            }
        }
        throw lastErr;
    }
    async function getBufOne(url, onProg, set) {
        // same-origin & blob: pakai fetch biasa, selain itu GM_xmlhttpRequest (bypass CORS + Referer)
        if (url.startsWith('blob:') || url.startsWith(location.origin)) {
            const r = await fetch(url, { credentials: 'same-origin' });
            if (!r.ok) throw new Error('HTTP ' + r.status);
            return r.arrayBuffer();
        }
        return gmBuf(url, onProg, set);
    }
    async function withRetry(fn, cancelled, tag) {
        cancelled = cancelled || (() => abortFlag);
        let n = 0;
        for (;;) {
            try { return await fn(); }
            catch (e) {
                if (cancelled() || (e && e.message === 'aborted') || n >= retries) throw e;
                n++; log('warn', 'net', 'Coba ulang ' + n + '/' + retries + (tag ? ' · ' + tag : '') + ' — ' + (e && e.message));
                await sleep(600 * n);
            }
        }
    }
    async function pool(list, worker) {
        let next = 0;
        await Promise.all(Array.from({ length: Math.min(conc, list.length) }, async (_, r) => {
            if (r) await sleep(r * 150);
            while (!abortFlag) {
                const i = next++;
                if (i >= list.length) break;
                await worker(list[i], i);
                await sleep(delayMs);
            }
        }));
    }

    // ------------------------------------------------------------ ambil daftar gambar chapter
    function pickImgUrl(img) {
        const cands = [img.currentSrc, img.src, img.getAttribute('data-src'), img.getAttribute('data-original'), img.getAttribute('data-lazy-src')];
        return cands.find(u => u && !u.startsWith('data:') && /^(https?:|blob:|\/)/.test(u)) || '';
    }
    const hostOf = (u) => { try { return new URL(u).host.toLowerCase(); } catch (e) { return ''; } };
    // Buang iklan / banner: (1) hanya host gambar terbanyak (= halaman manga), (2) buang yang kecil / terlalu pendek / terlalu lebar
    // Gambar sebuah post: ambil file ASLI dari tautan di bagian "Files" (a.fileThumb → /data/…), bukan thumbnail.
    // Post yang bukan halaman terbuka dibaca lewat fetch + DOMParser.
    const ALT = new Map();   // url asli -> [url cadangan] (dicoba berurutan bila url asli gagal diunduh)
    // url asli -> url thumbnail (/thumbnail/…). Preview / hover / viewer memakai thumbnail; file asli HANYA diambil saat download / edit.
    const THUMB = new Map();
    const thumbOf = (u) => THUMB.get(u) || u;
    const IMG_EXT = /\.(jpe?g|png|gif|webp|avif|bmp)(?:[?#]|$)/i;
    function postImages(doc, pageUrl) {
        const base = pageUrl || location.href;
        const abs = (u) => { try { return new URL(u, base).href; } catch (e) { return ''; } };
        const keyOf = (u) => { try { return new URL(u).pathname.replace(/^\/thumbnail\//, '/'); } catch (e) { return u; } };
        const skip = (el) => !!el.closest('#dd-pv, #dd-view, #dd-hover, #dd-edit, #dd-q, #dd-dlg, #dd-done, nav, header, footer, aside, [class*="comment"], [class*="user-header"], [class*="post__user"]');
        const hs = hostSel.trim().toLowerCase();
        const out = [], seen = new Set();
        const variants = (u) => {   // thumbnail -> kemungkinan url asli
            u = abs(u);
            if (!u) return [];
            if (!/\/thumbnail\//.test(u)) return [u];
            const a = u.replace('/thumbnail/', '/');
            let b = ''; try { b = location.origin + new URL(a).pathname; } catch (e) {}
            return [a, b, u].filter((x, i, arr) => x && arr.indexOf(x) === i);
        };
        const push = (cands) => {
            cands = cands.filter(Boolean);
            if (!cands.length) return;
            const key = keyOf(cands[0]);
            if (seen.has(key) || (hs && !cands[0].toLowerCase().includes(hs))) return;
            seen.add(key);
            ALT.set(cands[0], cands.slice(1));
            const tc = cands.find(x => /\/thumbnail\//.test(x));
            if (tc) THUMB.set(cands[0], tc);
            out.push({ url: cands[0], w: 0, h: 0 });
        };
        const imgUrl = (img) => pickImgUrl(img);
        if (imgSel) {   // selector buatan sendiri (Pengaturan > Lanjutan)
            doc.querySelectorAll(imgSel).forEach(el => {
                if (el.closest('#dd-pv, #dd-view, #dd-hover, #dd-edit')) return;
                if (el.tagName === 'A') { const h = el.getAttribute('href'); const im = el.querySelector('img'); push([abs(h)].concat(im ? variants(imgUrl(im)) : [])); }
                else if (el.tagName === 'IMG') push(variants(imgUrl(el)));
            });
            return out;
        }
        // 1) tautan file (kualitas asli)
        doc.querySelectorAll('a.fileThumb[href], .post__files a[href], .post__thumbnail a[href], [class*="post__files"] a[href]').forEach(a => {
            if (skip(a)) return;
            const href = abs(a.getAttribute('href'));
            if (!href || !(IMG_EXT.test(href) || a.querySelector('img'))) return;
            const im = a.querySelector('img');
            push([href].concat(im ? variants(imgUrl(im)) : []));
        });
        // 2) gambar di isi post (artikel Fanbox dsb.)
        doc.querySelectorAll('.post__content img, [class*="post__content"] img, [class*="post__body"] img').forEach(im => {
            if (skip(im)) return;
            const u = imgUrl(im);
            if (u && /\/(?:thumbnail\/)?data\//.test(u)) push(variants(u));
        });
        // 3) cadangan: gambar bertanda /data/ di halaman
        if (!out.length) {
            doc.querySelectorAll('img').forEach(im => {
                if (skip(im)) return;
                const u = imgUrl(im);
                if (u && /\/(?:thumbnail\/)?data\//.test(u) && !/logo|avatar|icon|banner/i.test(im.className + ' ' + u)) push(variants(u));
            });
        }
        return out;
    }
    // Hasil: [{ url, w, h }] sesuai urutan di post (w/h = 0: ukuran dibaca saat gambar dimuat). cancelled() -> true = batalkan.
    async function getChapterImages(url, onStatus, cancelled, onItems) {
        cancelled = cancelled || (() => abortFlag);
        const t0 = performance.now();
        let doc;
        if (norm(url) === norm(location.href)) doc = document;
        else {
            onStatus && onStatus('Membuka post…', { phase: 'open', count: 0, pct: 20 });
            const r = await fetch(url, { credentials: 'same-origin' });
            if (cancelled()) throw new Error('aborted');
            if (!r.ok) { log('err', 'scan', 'Gagal membuka post: HTTP ' + r.status, url); throw new Error('HTTP ' + r.status); }
            doc = new DOMParser().parseFromString(await r.text(), 'text/html');
        }
        const items = postImages(doc, url);
        if (!items.length) {
            log('err', 'scan', 'Gambar post tidak ditemukan (' + secs(t0) + ') — coba atur selector di Pengaturan > Lanjutan', url);
            throw new Error('Gambar tidak ditemukan (atur selector / host di Pengaturan)');
        }
        onStatus && onStatus('Membaca halaman… ' + items.length, { phase: 'done', count: items.length, pct: 100 });
        onItems && onItems(items);
        const hs = Array.from(new Set(items.map(i => hostOf(i.url) || 'blob')));
        log('ok', 'scan', items.length + ' gambar ditemukan dalam ' + secs(t0), 'host: ' + hs.join(', ') + ' · selector: ' + (imgSel || 'otomatis') + ' · ' + url);
        return items;
    }

    // <<WRITERS  (ZIP & PDF writer — bertahap, ke "out": { write(), finish(), abort() })
    const CRC = (() => { const t = new Uint32Array(256); for (let n = 0; n < 256; n++) { let c = n; for (let k = 0; k < 8; k++) c = (c & 1) ? (0xEDB88320 ^ (c >>> 1)) : (c >>> 1); t[n] = c >>> 0; } return t; })();
    const crc32 = (u8) => { let c = 0xFFFFFFFF; for (let i = 0; i < u8.length; i++) c = CRC[(c ^ u8[i]) & 0xFF] ^ (c >>> 8); return (c ^ 0xFFFFFFFF) >>> 0; };
    const ENC = new TextEncoder();
    const u16 = n => { const b = new Uint8Array(2); new DataView(b.buffer).setUint16(0, n, true); return b; };
    const u32 = n => { const b = new Uint8Array(4); new DataView(b.buffer).setUint32(0, n, true); return b; };
    const cat = a => { const o = new Uint8Array(a.reduce((s, x) => s + x.length, 0)); let p = 0; for (const x of a) { o.set(x, p); p += x.length; } return o; };
    function zipStamp() {
        const d = new Date();
        return { t: (d.getHours() << 11) | (d.getMinutes() << 5) | (d.getSeconds() >> 1), d: ((d.getFullYear() - 1980) << 9) | ((d.getMonth() + 1) << 5) | d.getDate() };
    }
    // ZIP tanpa kompres (stored). Nama dengan "/" = folder.
    async function zipNew(out) {
        const st = zipStamp(), cent = [];
        let off = 0, count = 0;
        return {
            get size() { return off; },
            get count() { return count; },
            async add(name, data) {
                if (count >= 0xFFFF) throw new Error('ZIP berisi lebih dari 65.535 file');
                const nb = ENC.encode(name), size = data.length, crc = crc32(data);
                if (off + size + nb.length * 2 + 200 > 0xFFFFFFFF) throw new Error('ZIP melebihi 4 GB (kecilkan “Maks ukuran per ZIP” di Pengaturan)');
                const head = cat([u32(0x04034b50), u16(20), u16(0x0800), u16(0), u16(st.t), u16(st.d), u32(crc), u32(size), u32(size), u16(nb.length), u16(0), nb]);
                cent.push(cat([u32(0x02014b50), u16(20), u16(20), u16(0x0800), u16(0), u16(st.t), u16(st.d), u32(crc), u32(size), u32(size), u16(nb.length), u16(0), u16(0), u16(0), u16(0), u32(0), u32(off), nb]));
                await out.write(head); await out.write(data);
                off += head.length + size; count++;
                await sleep(0);
            },
            async end() {
                const c = cat(cent);
                await out.write(c);
                await out.write(cat([u32(0x06054b50), u16(0), u16(0), u16(count), u16(count), u32(c.length), u32(off), u16(0)]));
                await out.finish();
            },
            async abort() { await out.abort(); }
        };
    }

    function jpegInfo(u8) {
        let i = 2;
        while (i + 9 < u8.length) {
            if (u8[i] !== 0xFF) { i++; continue; }
            const m = u8[i + 1];
            if (m === 0xD8 || m === 0x01 || m === 0xFF || (m >= 0xD0 && m <= 0xD7)) { i += m === 0xFF ? 1 : 2; continue; }
            const len = (u8[i + 2] << 8) | u8[i + 3];
            if (m >= 0xC0 && m <= 0xCF && m !== 0xC4 && m !== 0xC8 && m !== 0xCC) return { h: (u8[i + 5] << 8) | u8[i + 6], w: (u8[i + 7] << 8) | u8[i + 8], c: u8[i + 9] };
            i += 2 + len;
        }
        return null;
    }
    const pdfText = (s) => { let o = '<FEFF'; for (const ch of String(s || '')) { const cp = ch.codePointAt(0); (cp > 0xFFFF ? [0xD800 + ((cp - 0x10000) >> 10), 0xDC00 + ((cp - 0x10000) & 0x3FF)] : [cp]).forEach(u => { o += u.toString(16).toUpperCase().padStart(4, '0'); }); } return o + '>'; };
    // PDF ditulis berurutan (halaman demi halaman); daftar halaman, bookmark & katalog ditulis di akhir -> jumlah halaman tidak perlu diketahui di awal.
    async function pdfNew(out) {
        let pos = 0, next = 5;   // objek 1 katalog, 2 daftar halaman, 3 info, 4 bookmark
        const offs = [], pages = [], marks = [];
        const w = async (x) => { const b = typeof x === 'string' ? ENC.encode(x) : x; await out.write(b); pos += b.length; };
        const obj = async (id, body) => { offs[id] = pos; await w(id + ' 0 obj\n' + body + '\nendobj\n'); };
        await w(new Uint8Array([37, 80, 68, 70, 45, 49, 46, 52, 10, 37, 226, 227, 207, 211, 10]));
        return {
            get size() { return pos; },
            get count() { return pages.length; },
            mark(title) { marks.push({ title, page: pages.length }); },   // bookmark ke halaman berikutnya yang ditambahkan
            async addPage(im) {
                const sc = Math.min(1, 14400 / Math.max(im.w, im.h));
                const pw = +(im.w * sc).toFixed(2), ph = +(im.h * sc).toFixed(2);
                const pg = next++, ct = next++, ix = next++;
                await obj(pg, '<< /Type /Page /Parent 2 0 R /MediaBox [0 0 ' + pw + ' ' + ph + '] /Resources << /XObject << /Im0 ' + ix + ' 0 R >> >> /Contents ' + ct + ' 0 R >>');
                const cs = 'q ' + pw + ' 0 0 ' + ph + ' 0 0 cm /Im0 Do Q';
                await obj(ct, '<< /Length ' + cs.length + ' >>\nstream\n' + cs + '\nendstream');
                offs[ix] = pos;
                await w(ix + ' 0 obj\n<< /Type /XObject /Subtype /Image /Width ' + im.w + ' /Height ' + im.h + ' /ColorSpace /' + im.cs + ' /BitsPerComponent 8 /Filter /DCTDecode /Length ' + im.data.length + ' >>\nstream\n');
                await w(im.data); await w('\nendstream\nendobj\n');
                pages.push(pg);
                await sleep(0);
            },
            async end(title) {
                const ol = marks.filter(m => m.page < pages.length);
                if (ol.length) {
                    const ids = ol.map(() => next++);
                    for (let k = 0; k < ol.length; k++) {
                        await obj(ids[k], '<< /Title ' + pdfText(ol[k].title) + ' /Parent 4 0 R' + (k ? ' /Prev ' + ids[k - 1] + ' 0 R' : '') + (k < ol.length - 1 ? ' /Next ' + ids[k + 1] + ' 0 R' : '') + ' /Dest [' + pages[ol[k].page] + ' 0 R /Fit] >>');
                    }
                    await obj(4, '<< /Type /Outlines /First ' + ids[0] + ' 0 R /Last ' + ids[ids.length - 1] + ' 0 R /Count ' + ol.length + ' >>');
                }
                await obj(2, '<< /Type /Pages /Count ' + pages.length + ' /Kids [' + pages.map(p => p + ' 0 R').join(' ') + '] >>');
                await obj(1, '<< /Type /Catalog /Pages 2 0 R' + (ol.length ? ' /Outlines 4 0 R /PageMode /UseOutlines' : '') + ' >>');
                await obj(3, '<< /Title ' + pdfText(title) + ' /Producer (Pawchive Downloader) >>');
                const total = next - 1, xref = pos;
                let x = 'xref\n0 ' + (total + 1) + '\n0000000000 65535 f \n';
                for (let k = 1; k <= total; k++) x += offs[k] === undefined ? '0000000000 65535 f \n' : String(offs[k]).padStart(10, '0') + ' 00000 n \n';
                await w(x + 'trailer\n<< /Size ' + (total + 1) + ' /Root 1 0 R /Info 3 0 R >>\nstartxref\n' + xref + '\n%%EOF\n');
                await out.finish();
            },
            async abort() { await out.abort(); }
        };
    }
    // WRITERS>>

    // Level kompres PDF: q = kualitas JPEG, w = lebar maksimum (px)
    const PDFC = { off: null, low: { q: 0.85, w: 2000 }, med: { q: 0.7, w: 1600 }, high: { q: 0.5, w: 1200 } };
    const PDFL = { off: 'Asli', low: 'Ringan', med: 'Sedang', high: 'Kuat' };
    const cmpStat = { inB: 0, outB: 0 };
    function cmpNote() {
        if (pdfComp === 'off' || !cmpStat.inB) return '';
        return ' · hemat ' + Math.max(0, Math.round((1 - cmpStat.outB / cmpStat.inB) * 100)) + '%';
    }
    function cmpLog() {
        if (pdfComp === 'off' || !cmpStat.inB) return;
        log('ok', 'pdf', 'Kompresi PDF (' + PDFL[pdfComp] + '): ' + fmtSize(cmpStat.inB) + ' → ' + fmtSize(cmpStat.outB) + cmpNote());
    }
    function setPdfComp(v) {
        pdfComp = PDFC[v] !== undefined ? v : 'off';
        sv('dd_pdf_comp', pdfComp);
        try { settingsSync(); } catch (e) {}
        qOutSync();
    }
    // ---- konversi gambar di dalam CBZ: jpg | webp | avif. Gambar yang sudah berformat tujuan tidak diproses ulang.
    // JPG: latar transparan jadi putih. WebP/AVIF: transparansi dipertahankan. GIF animasi hanya frame pertama.
    // AVIF hanya bisa dienkode bila browser mendukung (dites sekali); kalau tidak, dipakai WebP.
    function sniffImg(u8) {
        if (u8[0] === 0xFF && u8[1] === 0xD8) return 'jpg';
        if (u8[0] === 0x89 && u8[1] === 0x50) return 'png';
        if (u8[0] === 0x47 && u8[1] === 0x49) return 'gif';
        if (u8[0] === 0x52 && u8[1] === 0x49 && u8[8] === 0x57) return 'webp';
        if (u8[4] === 0x66 && u8[5] === 0x74 && u8[6] === 0x79 && u8[7] === 0x70 && u8[8] === 0x61 && u8[9] === 0x76 && u8[10] === 0x69) return 'avif';
        return '';
    }
    let avifOkMemo = null;
    async function avifOk() {
        if (avifOkMemo !== null) return avifOkMemo;
        try {
            const cv = document.createElement('canvas'); cv.width = cv.height = 2;
            const b = await new Promise(r => cv.toBlob(r, 'image/avif', 0.8));
            avifOkMemo = !!(b && b.type === 'image/avif');
        } catch (e) { avifOkMemo = false; }
        return avifOkMemo;
    }
    async function toCbzImage(buf, fmtTo) {
        const u8 = buf instanceof Uint8Array ? buf : new Uint8Array(buf);
        if (sniffImg(u8) === fmtTo) return { buf: u8.buffer.byteLength === u8.length ? u8.buffer : u8.slice().buffer, ext: fmtTo, conv: false };
        const bmp = await createImageBitmap(new Blob([u8]));
        const sc = Math.min(1, 16000 / Math.max(bmp.width, bmp.height));
        const cw = Math.max(1, Math.round(bmp.width * sc)), ch = Math.max(1, Math.round(bmp.height * sc));
        const cv = document.createElement('canvas');
        cv.width = cw; cv.height = ch;
        const ctx = cv.getContext('2d');
        if (fmtTo === 'jpg') { ctx.fillStyle = '#fff'; ctx.fillRect(0, 0, cw, ch); }
        ctx.imageSmoothingQuality = 'high';
        ctx.drawImage(bmp, 0, 0, cw, ch);
        if (bmp.close) bmp.close();
        const jb = await new Promise(r => cv.toBlob(r, CBZ_FMT[fmtTo], cbzQ / 100));
        cv.width = cv.height = 0;
        if (!jb || jb.type !== CBZ_FMT[fmtTo]) throw new Error('Browser tidak bisa mengenkode ' + fmtTo.toUpperCase());
        return { buf: await jb.arrayBuffer(), ext: fmtTo, conv: true };
    }
    // buffer gambar -> objek gambar PDF.
    // Tanpa kompres: JPEG apa adanya, format lain di-render ke canvas lalu jadi JPEG (q 0.92).
    // Dengan kompres: gambar dikecilkan (lebar maks) lalu disimpan ulang sebagai JPEG berkualitas lebih rendah;
    // kalau hasilnya justru lebih besar dari JPEG asli, JPEG asli dipakai.
    async function toPdfImage(buf) {
        const u8 = buf instanceof Uint8Array ? buf : new Uint8Array(buf);
        const cp = PDFC[pdfComp] || null;
        cmpStat.inB += u8.length;
        let orig = null;
        if (u8[0] === 0xFF && u8[1] === 0xD8) {
            const info = jpegInfo(u8);
            if (info && info.w && info.h && info.c !== 4) orig = { w: info.w, h: info.h, cs: info.c === 1 ? 'DeviceGray' : 'DeviceRGB', data: u8 };
        }
        if (orig && !cp) { cmpStat.outB += u8.length; return orig; }
        const bmp = await createImageBitmap(new Blob([u8]));
        const sc = Math.min(1, 16000 / Math.max(bmp.width, bmp.height), cp ? cp.w / bmp.width : 1);
        const cw = Math.max(1, Math.round(bmp.width * sc)), ch = Math.max(1, Math.round(bmp.height * sc));
        const cv = document.createElement('canvas');
        cv.width = cw; cv.height = ch;
        const ctx = cv.getContext('2d');
        ctx.fillStyle = '#fff'; ctx.fillRect(0, 0, cw, ch);
        ctx.imageSmoothingQuality = 'high';
        ctx.drawImage(bmp, 0, 0, cw, ch);
        if (bmp.close) bmp.close();
        const jb = await new Promise(r => cv.toBlob(r, 'image/jpeg', cp ? cp.q : 0.92));
        cv.width = cv.height = 0;
        if (!jb) throw new Error('Gagal konversi gambar');
        const out = new Uint8Array(await jb.arrayBuffer());
        if (cp && orig && sc >= 1 && out.length >= u8.length) { cmpStat.outB += u8.length; return orig; }
        cmpStat.outB += out.length;
        return { w: cw, h: ch, cs: 'DeviceRGB', data: out };
    }

    // ------------------------------------------------------------ util file
    function extOf(buf) {
        const u = new Uint8Array(buf.slice ? buf.slice(0, 12) : buf);
        if (u[0] === 0xFF && u[1] === 0xD8) return 'jpg';
        if (u[0] === 0x89 && u[1] === 0x50) return 'png';
        if (u[0] === 0x47 && u[1] === 0x49) return 'gif';
        if (u[0] === 0x52 && u[1] === 0x49 && u[8] === 0x57) return 'webp';
        return 'jpg';
    }
    const MIME = { jpg: 'image/jpeg', png: 'image/png', gif: 'image/gif', webp: 'image/webp' };

    // ---- Pawchive (tata letak ala Kemono): /<service>/user/<id>  dan  /<service>/user/<id>/post/<id>
    //      creator = "manga", post = "chapter"
    const PC_USER = /^\/([^/]+)\/user\/([^/]+)\/?$/;
    const PC_POST = /^\/([^/]+)\/user\/([^/]+)\/post\/([^/]+)\/?$/;
    const SERVICE_SUFFIX = /\s*[\(（](Pixiv Fanbox|Fanbox|Patreon|Fantia|Gumroad|SubscribeStar|DLsite|Discord|Boosty|Afdian)[\)）]\s*$/i;
    const pathOfUrl = (u) => { try { return new URL(u, location.href).pathname; } catch (e) { return ''; } };
    const isPostUrl = (u) => PC_POST.test(pathOfUrl(u));
    const cleanTitle = (t) => String(t || '').replace(/\s+/g, ' ').replace(SERVICE_SUFFIX, '').trim();
    function creatorName(doc) {
        doc = doc || document;
        const el = doc.querySelector('.post__user-name, .user-header__name, [class*="user-header__name"], [class*="post__user-name"], [class*="scrape__user-name"]');
        let t = el ? el.textContent : '';
        if (!t) { const a = doc.querySelector('.post__user a[href*="/user/"], [class*="post__user"] a'); if (a) t = a.textContent; }
        t = t.replace(/\s+/g, ' ').trim();
        if (!t) { const m = String(doc.title || '').match(/^["“”](?:.*)["“”]\s+by\s+(.+?)\s*(?:\||$)/i); if (m) t = m[1].trim(); }
        return t;
    }
    function mangaTitle() {
        const n = creatorName(document);
        if (n) return n;
        const p = pathOfUrl(location.href), m = p.match(PC_POST) || p.match(PC_USER);
        return m ? m[1] + ' ' + m[2] : 'pawchive';
    }
    let mangaOverride = null;   // dipakai antrian multi-manga
    const curManga = () => mangaOverride || (pv && pv.manga) || mangaTitle();

    // ------------------------------------------------------------ download
    // Ambil semua halaman (paralel). list: [{ url }] -> [{ buf, ext }] sesuai urutan. Gagal sebagian = error.
    async function fetchPages(list, setLabel) {
        const n = list.length, out = new Array(n);
        let done = 0, fails = 0, bytes = 0;
        const tAll = performance.now();
        log('info', 'dl', 'Mengunduh ' + n + ' halaman (paralel ' + conc + ', jeda ' + delayMs + ' ms, retry ' + retries + ')');
        await pool(list, async (x, k) => {
            const ts = performance.now();
            try {
                const buf = await withRetry(() => getBuf(x.url), null, 'hal. ' + (k + 1));
                out[k] = { buf, ext: extOf(buf) };
                bytes += buf.byteLength;
                log('debug', 'dl', 'Hal. ' + (k + 1) + '/' + n + ' OK · ' + fmtSize(buf.byteLength) + ' · ' + out[k].ext + ' · ' + msecs(ts), x.url);
            } catch (e) {
                if (!abortFlag && e.message !== 'aborted') { fails++; log('err', 'dl', 'Hal. ' + (k + 1) + '/' + n + ' GAGAL: ' + e.message + ' (' + msecs(ts) + ')', x.url); }
            }
            done++;
            setLabel(done + '/' + n);
        });
        if (abortFlag) { log('warn', 'dl', 'Unduhan dihentikan (' + done + '/' + n + ' halaman sempat diproses)'); throw new Error('aborted'); }
        log(fails ? 'err' : 'ok', 'dl', 'Unduh selesai: ' + (n - fails) + '/' + n + ' halaman OK · ' + fmtSize(bytes) + ' · ' + secs(tAll));
        if (fails) throw new Error(fails + '/' + n + ' halaman gagal');
        return out;
    }

    // hapus gambar yang tidak dicentang di preview (berlaku juga utk chapter yang sudah ditutup / bukan chapter aktif)
    function skippedSet(chUrl) { return pv && pv.skip ? pv.skip.get(chUrl) : null; }
    // own = Set pilihan milik antrian (kalau ada, dia yang berlaku; kalau tidak, pakai pilihan panel preview)
    function dropSkipped(chUrl, items, own) {
        const sk = own || skippedSet(chUrl);
        return sk && sk.size ? items.filter(x => !sk.has(x.url)) : items;
    }

    // Gabung chapter: chapter sumber (ch.extra) dimasukkan ke AKHIR chapter target saat download (jadi 1 chapter / 1 CBZ).
    // Halaman sumber mengikuti pilihan preview (halaman yang di-uncheck / dihapus di preview dilewati) seperti chapter biasa.
    async function mergedExtras(ch, setLabel) {
        const out = [];
        for (const ex of (ch.extra || [])) {
            const its = (ex.pre && ex.pre.length) ? ex.pre.filter(x => x.checked !== false) : dropSkipped(ex.url, await getChapterImages(ex.url, (t) => setLabel && setLabel(t)), ex.skip || null);
            log('info', 'chapter', 'Gabung: +' + its.length + ' halaman dari \"' + ex.title + '\" → \"' + ch.title + '\"');
            its.forEach(x => out.push({ url: x.url, w: x.w, h: x.h, checked: true }));
        }
        return out;
    }
    // ch = { url, title }; pre = items hasil preview (dengan .checked) atau null
    // Mihon (Local source): tulis cover.jpg di folder manga bila belum ada (halaman pertama chapter yang diunduh). Hanya mode folder.
    async function mihonCoverWrite(sub, first) {
        if (mihonCover === 'off' || !first || saveMode !== 'folder' || !dirHandle) return;
        try {
            const dir = await ensureDir(sub);
            const old = [];
            for await (const ent of dir.entries()) { if (ent[1].kind === 'file' && /^cover\.(jpe?g|png|webp|gif)$/i.test(ent[0])) old.push(ent[0]); }
            if (old.length && mihonCover === 'once') return;
            const fn = 'cover.' + first.ext;
            const fh = await dir.getFileHandle(fn, { create: true });
            const w = await fh.createWritable();
            try { await w.write(new Blob([first.buf], { type: MIME[first.ext] })); } finally { await w.close(); }
            for (const o of old) { if (o !== fn) { try { await dir.removeEntry(o); } catch (e) {} } }   // buang cover lama berekstensi lain
            log('ok', 'save', 'Cover Mihon ' + (old.length ? 'diganti' : 'ditulis') + ': ' + [sub, fn].filter(Boolean).join('/'));
        } catch (e) { log('warn', 'save', 'Gagal menulis cover — ' + (e && e.message)); }
    }

    // ---- Cover animasi (GIF) untuk Mihon: halaman pertama tiap chapter jadi 1 frame.
    // Frame disimpan (JPEG kecil) di IndexedDB per manga, jadi GIF tetap berisi chapter yang diunduh di sesi sebelumnya.
    const GIF_W = 400, GIF_H = 600, GIF_MAXF = 40;
    const GIF_DIRTY = new Set();
    async function gifFrameJpeg(buf) {
        const bmp = await createImageBitmap(new Blob([buf]));
        const cv = document.createElement('canvas');
        cv.width = GIF_W; cv.height = GIF_H;
        const ctx = cv.getContext('2d');
        ctx.fillStyle = '#fff'; ctx.fillRect(0, 0, GIF_W, GIF_H);
        ctx.imageSmoothingQuality = 'high';
        const sc = Math.max(GIF_W / bmp.width, GIF_H / bmp.height);   // isi penuh 2:3, bagian lebih dipotong di tengah
        const dw = bmp.width * sc, dh = bmp.height * sc;
        ctx.drawImage(bmp, (GIF_W - dw) / 2, (GIF_H - dh) / 2, dw, dh);
        if (bmp.close) bmp.close();
        const jb = await new Promise(r => cv.toBlob(r, 'image/jpeg', 0.88));
        cv.width = cv.height = 0;
        if (!jb) throw new Error('Gagal membuat frame cover');
        return jb.arrayBuffer();
    }
    async function mihonGifAdd(sub, num, title, first) {
        if (saveMode !== 'folder' || !dirHandle || !first) return;
        try {
            const key = 'cov:' + sub;
            const rec = (await idbGet(key)) || {};
            rec[num > 0 ? String(num).padStart(5, '0') : '00000_' + title] = await gifFrameJpeg(first.buf);
            await idbSet(key, rec);
            GIF_DIRTY.add(sub);
        } catch (e) { log('warn', 'save', 'Gagal menyimpan frame cover GIF — ' + (e && e.message)); }
    }
    // kuantisasi warna (median cut pada histogram 15-bit) -> palet 256 warna + indeks per piksel
    function gifQuant(px, n) {
        const hist = new Uint32Array(32768);
        for (let i = 0, o = 0; i < n; i++, o += 4) hist[((px[o] >> 3) << 10) | ((px[o + 1] >> 3) << 5) | (px[o + 2] >> 3)]++;
        const all = [];
        for (let k = 0; k < 32768; k++) if (hist[k]) all.push(k);
        const comp = (k, c) => c === 0 ? (k >> 10) & 31 : c === 1 ? (k >> 5) & 31 : k & 31;
        const boxes = [{ b: all, cnt: n }];
        while (boxes.length < 256) {
            let bi = -1, best = 0;
            for (let i = 0; i < boxes.length; i++) if (boxes[i].b.length > 1 && boxes[i].cnt > best) { best = boxes[i].cnt; bi = i; }
            if (bi < 0) break;
            const bx = boxes[bi], bins = bx.b, mn = [31, 31, 31], mx = [0, 0, 0];
            for (const k of bins) for (let c = 0; c < 3; c++) { const v = comp(k, c); if (v < mn[c]) mn[c] = v; if (v > mx[c]) mx[c] = v; }
            let ch = 0;
            if (mx[1] - mn[1] > mx[ch] - mn[ch]) ch = 1;
            if (mx[2] - mn[2] > mx[ch] - mn[ch]) ch = 2;
            bins.sort((a, b2) => comp(a, ch) - comp(b2, ch));
            let acc = 0, cut = 0;
            const half = bx.cnt / 2;
            while (cut < bins.length - 1) { acc += hist[bins[cut]]; cut++; if (acc >= half) break; }
            const left = bins.slice(0, cut), right = bins.slice(cut);
            let lc = 0;
            for (const k of left) lc += hist[k];
            boxes[bi] = { b: left, cnt: lc };
            boxes.push({ b: right, cnt: bx.cnt - lc });
        }
        const pal = new Uint8Array(768), lut = new Uint8Array(32768);
        boxes.forEach((bx, i) => {
            let r = 0, g = 0, b = 0, c = 0;
            for (const k of bx.b) { const w = hist[k]; r += (((k >> 10) & 31) * 8 + 4) * w; g += (((k >> 5) & 31) * 8 + 4) * w; b += ((k & 31) * 8 + 4) * w; c += w; lut[k] = i; }
            if (c) { pal[i * 3] = Math.round(r / c); pal[i * 3 + 1] = Math.round(g / c); pal[i * 3 + 2] = Math.round(b / c); }
        });
        const idx = new Uint8Array(n);
        for (let i = 0, o = 0; i < n; i++, o += 4) idx[i] = lut[((px[o] >> 3) << 10) | ((px[o + 1] >> 3) << 5) | (px[o + 2] >> 3)];
        return { pal, idx };
    }
    // kompresi LZW GIF -> sub-block siap tulis (diakhiri blok kosong)
    function gifLzw(idx, minCode) {
        const clear = 1 << minCode, eoi = clear + 1;
        let bytes = new Uint8Array(Math.max(1024, idx.length >> 1)), p = 0, cur = 0, shift = 0;
        const put = (b) => { if (p >= bytes.length) { const nb = new Uint8Array(bytes.length * 2); nb.set(bytes); bytes = nb; } bytes[p++] = b; };
        let size = minCode + 1, next = eoi + 1, table = new Map();
        const emit = (c) => { cur |= c << shift; shift += size; while (shift >= 8) { put(cur & 255); cur >>>= 8; shift -= 8; } };
        emit(clear);
        let ib = idx[0];
        for (let i = 1; i < idx.length; i++) {
            const k = idx[i], key = (ib << 8) | k, hit = table.get(key);
            if (hit === undefined) {
                emit(ib);
                if (next === 4096) { emit(clear); next = eoi + 1; size = minCode + 1; table = new Map(); }
                else { if (next >= (1 << size)) size++; table.set(key, next++); }
                ib = k;
            } else ib = hit;
        }
        emit(ib); emit(eoi);
        if (shift > 0) put(cur & 255);
        const out = new Uint8Array(p + Math.ceil(p / 255) + 1);
        let o = 0;
        for (let s0 = 0; s0 < p; s0 += 255) { const l = Math.min(255, p - s0); out[o++] = l; out.set(bytes.subarray(s0, s0 + l), o); o += l; }
        out[o++] = 0;
        return out.subarray(0, o);
    }
    function gifEncode(frames, w, h, delayCs) {
        const parts = [ENC.encode('GIF89a'), u16(w), u16(h), new Uint8Array([0x70, 0, 0]),
            new Uint8Array([0x21, 0xFF, 0x0B]), ENC.encode('NETSCAPE2.0'), new Uint8Array([3, 1, 0, 0, 0])];   // loop tanpa henti
        for (const f of frames) {
            parts.push(new Uint8Array([0x21, 0xF9, 4, 0x04]), u16(delayCs), new Uint8Array([0, 0]));
            parts.push(new Uint8Array([0x2C]), u16(0), u16(0), u16(w), u16(h), new Uint8Array([0x87]), f.pal, new Uint8Array([8]), gifLzw(f.idx, 8));
        }
        parts.push(new Uint8Array([0x3B]));
        return cat(parts);
    }
    // dipanggil di akhir proses unduh: bangun cover dari semua frame manga yang berubah
    async function mihonGifFlush() {
        if (!GIF_DIRTY.size) return;
        const names = Array.from(GIF_DIRTY);
        GIF_DIRTY.clear();
        if (saveMode !== 'folder' || !dirHandle) return;
        for (const nm of names) {
            try {
                const rec = await idbGet('cov:' + nm);
                let keys = rec ? Object.keys(rec).sort() : [];
                if (!keys.length) continue;
                if (keys.length > GIF_MAXF) { const pick = []; for (let i = 0; i < GIF_MAXF; i++) pick.push(keys[Math.round(i * (keys.length - 1) / (GIF_MAXF - 1))]); keys = pick; }
                const t0 = performance.now();
                let blob, fn;
                if (keys.length === 1) { blob = new Blob([rec[keys[0]]], { type: 'image/jpeg' }); fn = 'cover.jpg'; }   // baru 1 chapter: cukup gambar biasa
                else {
                    toast('Membuat cover GIF (' + keys.length + ' frame)…', 'busy');
                    const cv = document.createElement('canvas');
                    cv.width = GIF_W; cv.height = GIF_H;
                    const ctx = cv.getContext('2d', { willReadFrequently: true });
                    const frames = [];
                    for (const k of keys) {
                        const bmp = await createImageBitmap(new Blob([rec[k]]));
                        ctx.drawImage(bmp, 0, 0, GIF_W, GIF_H);
                        if (bmp.close) bmp.close();
                        frames.push(gifQuant(ctx.getImageData(0, 0, GIF_W, GIF_H).data, GIF_W * GIF_H));
                        await sleep(0);
                    }
                    cv.width = cv.height = 0;
                    blob = new Blob([gifEncode(frames, GIF_W, GIF_H, mihonGifSec * 100)], { type: 'image/gif' });
                    fn = 'cover.gif';
                }
                const dir = await ensureDir(nm);
                const old = [];
                for await (const ent of dir.entries()) { if (ent[1].kind === 'file' && /^cover\.(jpe?g|png|webp|gif)$/i.test(ent[0]) && ent[0] !== fn) old.push(ent[0]); }
                const fh = await dir.getFileHandle(fn, { create: true });
                const w = await fh.createWritable();
                try { await w.write(blob); } finally { await w.close(); }
                for (const o of old) { try { await dir.removeEntry(o); } catch (e) {} }
                log('ok', 'save', 'Cover Mihon ' + (keys.length > 1 ? 'GIF ' : '') + 'ditulis: ' + nm + '/' + fn + ' · ' + keys.length + ' frame · ' + fmtSize(blob.size) + ' · ' + secs(t0));
            } catch (e) { log('warn', 'save', 'Gagal membuat cover GIF — ' + (e && e.message), e && e.stack); }
        }
    }

    // ---- Metadata Mihon (Local source): details.json di folder manga -> author, genre, status, deskripsi tampil di Mihon.
    // Mihon tidak punya kolom "type", jadi type dimasukkan sebagai genre pertama + baris di deskripsi.
    const META_DONE = new Set();
    function parseMangaMeta(doc, url) {   // creator sebagai "manga": author = nama creator, type = service (Fanbox, Patreon, …)
        const title = creatorName(doc) || '';
        const svc = (pathOfUrl(url || location.href).match(/^\/([^/]+)\//) || [])[1] || '';
        const tags = Array.from(doc.querySelectorAll('.post__tags a, [class*="tag-list"] a, a[href*="?tag="]')).map(a => a.textContent.replace(/\s+/g, ' ').trim()).filter(t => t && t.length <= 48).slice(0, 30);
        return { title, alt: [], type: svc ? svc.charAt(0).toUpperCase() + svc.slice(1) : '', status: '0', statusText: '', authors: title ? [title] : [], groups: [], series: [], chars: [], genres: tags };
    }
    function mangaPageUrl() {   // halaman creator: /<service>/user/<id>
        const p = pathOfUrl(location.href);
        if (PC_USER.test(p)) return location.origin + p.replace(/\/$/, '');
        const m = p.match(PC_POST);
        return m ? location.origin + '/' + m[1] + '/user/' + m[2] : '';
    }
    const META_CACHE = new Map();   // mUrl -> hasil parseMangaMeta (satu kali per manga)
    async function mangaMetaGet(ch) {   // null bila halaman manga tidak ditemukan; melempar error bila fetch gagal
        const mUrl = (ch._job && ch._job.mangaUrl) || mangaPageUrl();
        if (META_CACHE.has(mUrl)) return META_CACHE.get(mUrl);
        const pathOf = (u) => { try { return new URL(u, location.href).pathname.replace(/\/$/, ''); } catch (e) { return u; } };
        let doc = null;
        if (mUrl && pathOf(mUrl) === pathOf(location.href)) doc = document;
        else if (mUrl) {
            const r = await fetch(mUrl, { credentials: 'same-origin' });
            if (!r.ok) throw new Error('HTTP ' + r.status);
            doc = new DOMParser().parseFromString(await r.text(), 'text/html');
        }
        const m = doc ? parseMangaMeta(doc, mUrl || location.href) : null;
        if (m) META_CACHE.set(mUrl, m);
        return m;
    }
    // ---- ComicInfo.xml (standar ComicRack/Komga/Kavita; Mihon membaca judul, nomor, penulis, genre, ringkasan)
    function comicInfoXml(ch, m, chNum, pages, title, series) {
        const x = (t) => String(t == null ? '' : t).replace(/[\u0000-\u0008\u000B\u000C\u000E-\u001F]/g, '').replace(/[<>&"']/g, c => ({ '<': '&lt;', '>': '&gt;', '&': '&amp;', '"': '&quot;', "'": '&apos;' })[c]);
        const cap = (t) => t ? t.charAt(0).toUpperCase() + t.slice(1) : t;
        const nice = (t) => { t = String(t || '').trim(); return (t && t === t.toUpperCase() && /[A-Z]/.test(t)) ? t.toLowerCase().replace(/(^|[\s\-\/])([a-z])/g, (m0, a1, b1) => a1 + b1.toUpperCase()) : t; };
        const uniq = (arr) => { const seen = new Set(); return arr.map(nice).filter(t => { const k = t.toLowerCase(); if (!t || seen.has(k)) return false; seen.add(k); return true; }); };
        const L = [];
        const add = (tag, v) => { if (v !== '' && v != null) L.push('  <' + tag + '>' + x(v) + '</' + tag + '>'); };
        const authors = m ? m.authors.join(', ') : '';
        const genres = m ? uniq([cap(m.type)].concat(m.genres)) : [];
        const desc = [];
        if (m) {
            if (m.type) desc.push('Type: ' + cap(m.type));
            if (m.alt.length) desc.push('Alternative titles: ' + m.alt.join(', '));
            if (m.series.length) desc.push('Series: ' + m.series.join(', '));
            if (m.groups.length) desc.push('Groups: ' + m.groups.join(', '));
        }
        add('Title', title || ch.title);   // mis. "Chapter 01" (sama dengan nama file CBZ)
        add('Series', series || ch.manga || (m && m.title) || curManga());
        if (chNum > 0) add('Number', String(chNum));
        add('Summary', desc.join('\n'));
        add('Writer', authors);
        add('Penciller', authors);
        add('Genre', genres.join(', '));
        add('Characters', m ? m.chars.join(', ') : '');
        add('Web', ch.url);
        add('PageCount', pages);
        return '<?xml version="1.0" encoding="utf-8"?>\n<ComicInfo xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" xmlns:xsd="http://www.w3.org/2001/XMLSchema">\n' + L.join('\n') + '\n</ComicInfo>\n';
    }
    async function mihonComicInfo(ch, chNum, pages, title) {
        let m = null;
        try { m = await mangaMetaGet(ch); }
        catch (e) { log('warn', 'zip', 'ComicInfo: metadata manga tidak terbaca, ditulis versi minimal — ' + (e && e.message)); }
        return comicInfoXml(ch, m, chNum, pages, title, await rmName(ch.manga || (m && m.title) || curManga()));
    }
    async function mihonMetaWrite(ch, sub) {
        if (!mihonMeta || saveMode !== 'folder' || !dirHandle) return;
        const mUrl = (ch._job && ch._job.mangaUrl) || mangaPageUrl();
        const key = sub + '|' + mUrl;
        if (META_DONE.has(key)) return;
        META_DONE.add(key);
        try {
            const m = await mangaMetaGet(ch);
            if (!m) { log('warn', 'save', 'Metadata Mihon dilewati: halaman creator tidak ditemukan (buka halaman /…/user/… atau pakai Antrian)'); return; }
            const cap = (t) => t ? t.charAt(0).toUpperCase() + t.slice(1) : t;
            const genre = [];
            const push = (t) => { t = String(t || '').trim(); if (t && t === t.toUpperCase() && /[A-Z]/.test(t)) t = t.toLowerCase().replace(/(^|[\s\-\/])([a-z])/g, (m0, a, b) => a + b.toUpperCase()); if (t && !genre.some(g => g.toLowerCase() === t.toLowerCase())) genre.push(t); };
            push(cap(m.type));
            m.genres.forEach(push);
            const desc = [];
            if (m.type) desc.push('Type: ' + cap(m.type));
            if (m.alt.length) desc.push('Alternative titles: ' + m.alt.join(', '));
            if (m.series.length) desc.push('Series: ' + m.series.join(', '));
            if (m.chars.length) desc.push('Characters: ' + m.chars.join(', '));
            if (m.groups.length) desc.push('Groups: ' + m.groups.join(', '));
            const obj = { title: await rmName(ch.manga || m.title || curManga()) };
            if (m.authors.length) { obj.author = m.authors.join(', '); obj.artist = m.authors.join(', '); }
            if (desc.length) obj.description = desc.join('\n');
            if (genre.length) obj.genre = genre;
            obj.status = m.status;
            const dir = await ensureDir(sub);
            const fh = await dir.getFileHandle('details.json', { create: true });
            const w = await fh.createWritable();
            try { await w.write(new Blob([JSON.stringify(obj, null, 2)], { type: 'application/json' })); } finally { await w.close(); }
            log('ok', 'save', 'Metadata Mihon ditulis: ' + sub + '/details.json · author ' + (m.authors.join(', ') || '-') + ' · type ' + (m.type || '-') + ' · ' + genre.length + ' genre');
        } catch (e) { META_DONE.delete(key); log('warn', 'save', 'Gagal menulis metadata Mihon — ' + (e && e.message)); }
    }

    async function downloadChapter(ch, mode, setLabel, pre) {
        const isCbz = mode === 'cbz';   // Mihon: Nama Manga/Chapter.cbz (selalu di subfolder manga)
        const folderOn = saveMode === 'folder' && !!dirHandle;
        const mangaN = await rmName(curManga());   // romaji (bila aktif) untuk nama folder / file
        const manga = sanitize(mangaN, 100);
        // CBZ Mihon: nama file "Chapter 01" (nomor = urutan chapter di daftar) supaya urutan di Mihon benar
        const chNum = ch.num != null ? ch.num : (typeof ch.idx === 'number' ? ch.idx + 1 : 0);
        const chTot = ch.numTot || (pv && pv.chapters ? pv.chapters.length : 0) || chNum;
        const cbzBase = chNum > 0 ? 'Chapter ' + String(chNum).padStart(Math.max(2, String(chTot).length), '0') : ch.title;   // nomor tak diketahui -> pakai judul chapter
        const name = sanitize(isCbz ? (folderOn ? cbzBase : mangaN + ' - ' + cbzBase) : ch.title, 120);
        const mangaDir = sanitizeDir(mangaN, 80);
        const chDir = sanitizeDir(ch.title, 80);
        const sub = isCbz ? (folderOn ? mangaDir : null) : (saveMode === 'folder' && subfolder ? mangaDir : null);
        if (isCbz && !folderOn) log('warn', 'chapter', 'Mode CBZ Mihon tanpa folder pilihan: browser tidak bisa membuat subfolder, file disimpan datar sebagai "Manga - Chapter.cbz" (pilih folder di Pengaturan agar jadi Manga/Chapter.cbz)');
        const all0 = pre || await getChapterImages(ch.url, (t) => setLabel(t));
        const all = (ch.extra && ch.extra.length) ? all0.concat(await mergedExtras(ch, setLabel)) : all0;   // + chapter yang digabung ke chapter ini
        const sk = pre ? null : (ch.skip || skippedSet(ch.url));
        const list = all.map((it, i) => ({ url: it.url, i })).filter(x => all[x.i].checked !== false && !(sk && sk.has(x.url)));
        const n = list.length;
        if (!n) { log('err', 'chapter', 'Tidak ada halaman dipilih: "' + ch.title + '"', ch.url); throw new Error('Tidak ada halaman dipilih'); }
        const pad = Math.max(3, String(all.length).length);
        log('info', 'chapter', 'Unduh "' + ch.title + '" · ' + n + ' halaman' + (n !== all.length ? ' dari ' + all.length + ' (' + (all.length - n) + ' dilewati)' : '') + ' · format ' + (mode === 'files' ? 'IMG' : mode.toUpperCase()) + ' · simpan ' + (saveMode === 'folder' && dirHandle ? 'folder "' + dirHandle.name + (sub ? '/' + sub : '') + '"' : 'Downloads'), ch.url);

        if (mode === 'files') {   // simpan tiap gambar langsung setelah terunduh
            let done = 0, fails = 0;
            // Pre-buat folder chapter SEKALI (hindari race + nama folder yang ditolak API)
            const fsub = saveMode === 'folder' ? [sub, chDir].filter(Boolean).join('/') : null;
            let filesDir = null;
            if (saveMode === 'folder' && dirHandle) {
                try { filesDir = await ensureDir(fsub); }
                catch (e) {
                    log('warn', 'folder', 'Gagal buat subfolder, simpan langsung ke folder root — ' + (e && e.message));
                    filesDir = dirHandle;   // fallback: tulis di folder pilihan user
                }
            }
            await pool(list, async (x) => {
                try {
                    const ts = performance.now();
                    const buf = await withRetry(() => getBuf(x.url), null, 'hal. ' + (x.i + 1));
                    const ext = extOf(buf);
                    const fn = String(x.i + 1).padStart(pad, '0') + '.' + ext;
                    if (filesDir) {
                        const fh = await filesDir.getFileHandle(fn, { create: true });
                        const w = await fh.createWritable();
                        try { await w.write(new Blob([buf], { type: MIME[ext] })); } finally { await w.close(); }
                    } else {
                        await saveBlob(new Blob([buf], { type: MIME[ext] }), name + '_' + fn, null);
                    }
                    log('debug', 'dl', 'Hal. ' + (x.i + 1) + ' tersimpan: ' + fn + ' · ' + fmtSize(buf.byteLength) + ' · ' + msecs(ts), x.url);
                } catch (e) {
                    if (!abortFlag && e.message !== 'aborted') { fails++; log('err', 'dl', 'Hal. ' + (x.i + 1) + ' GAGAL: ' + e.message, x.url); }
                }
                done++; setLabel(done + '/' + n);
            });
            if (abortFlag) throw new Error('aborted');
            if (fails) throw new Error(fails + '/' + n + ' halaman gagal');
            return n;
        }

        const data = await fetchPages(list, setLabel);
        if (mode === 'zip' || isCbz) {
            const zx = isCbz ? '.cbz' : '.zip';
            setLabel(isCbz ? 'CBZ…' : 'ZIP…');
            log('info', 'zip', 'Menyusun ' + (isCbz ? 'CBZ' : 'ZIP') + ': ' + [sub, name + zx].filter(Boolean).join('/') + ' (' + n + ' file)');
            const first = isCbz && data[0] ? { buf: data[0].buf, ext: data[0].ext } : null;
            const zw = await zipNew(await openOut(name + zx, sub, isCbz ? 'application/vnd.comicbook+zip' : 'application/zip'));
            try {
                let nConv = 0, tgt = isCbz ? cbzConv : 'off';
                if (tgt === 'avif' && !(await avifOk())) { tgt = 'webp'; log('warn', 'zip', 'Browser ini tidak bisa mengenkode AVIF — dipakai WebP'); toast('AVIF tidak didukung browser ini — dipakai WebP', 'err'); }
                for (let k = 0; k < n; k++) {
                    let bf = data[k].buf, ex = data[k].ext;
                    if (tgt !== 'off') {
                        try { const r = await toCbzImage(bf, tgt); bf = r.buf; ex = r.ext; if (r.conv) nConv++; }
                        catch (e) { log('warn', 'zip', 'Hal. ' + (list[k].i + 1) + ' gagal dikonversi ke ' + tgt.toUpperCase() + ', dipakai apa adanya — ' + (e && e.message)); }
                    }
                    await zw.add(String(list[k].i + 1).padStart(pad, '0') + '.' + ex, new Uint8Array(bf));
                    data[k] = null;
                }
                if (nConv) log('ok', 'zip', nConv + ' gambar dikonversi ke ' + tgt.toUpperCase() + ' di ' + name + '.cbz');
                if (isCbz && mihonComic) {
                    try {
                        await zw.add('ComicInfo.xml', new TextEncoder().encode(await mihonComicInfo(ch, chNum, n, cbzBase)));
                        log('debug', 'zip', 'ComicInfo.xml ditambahkan ke ' + name + '.cbz');
                    } catch (e) { log('warn', 'zip', 'ComicInfo.xml gagal ditambahkan — ' + (e && e.message)); }
                }
                await zw.end();
            } catch (e) { log('err', 'zip', (isCbz ? 'CBZ' : 'ZIP') + ' gagal: ' + (e && e.message), e && e.stack); await zw.abort(); throw e; }
            if (isCbz) await mihonMetaWrite(ch, sub);
            if (first) { if (mihonCover === 'gif') await mihonGifAdd(sub, chNum, ch.title, first); else await mihonCoverWrite(sub, first); }
        } else {
            log('info', 'pdf', 'Menyusun PDF: ' + name + '.pdf (' + n + ' halaman)');
            cmpStat.inB = cmpStat.outB = 0;
            const pw = await pdfNew(await openOut(name + '.pdf', sub, 'application/pdf'));
            try {
                pw.mark(ch.title);
                for (let k = 0; k < n; k++) {
                    await pw.addPage(await toPdfImage(data[k].buf));
                    data[k] = null;
                    setLabel('PDF ' + (k + 1) + '/' + n);
                }
                await pw.end(manga + ' - ' + ch.title);
                cmpLog();
            } catch (e) { log('err', 'pdf', 'PDF gagal: ' + (e && e.message), e && e.stack); await pw.abort(); throw e; }
        }
        return n;
    }

    // Satu proses unduh pada satu waktu
    async function withBusy(fn) {
        if (busy) { toast('Masih ada proses berjalan', 'err'); return; }
        if (!(await ensureFolder())) return;
        busy = true; abortFlag = false; syncUI();
        try { return await fn(); }
        finally {
            busy = false; syncUI(); tqPump();
            setTimeout(() => { document.querySelectorAll('.dd-btn[data-state]').forEach(b => resetBtn(b)); pvClearStatus(); }, 4000);
        }
    }

    // banyak chapter -> file terpisah per chapter (format: zip / pdf / files)
    async function runJobs(jobs, mode) {   // jobs: [{ ch, setLabel, pre }]
        return await withBusy(async () => {
            let ok = 0, bad = 0;
            META_DONE.clear(); META_CACHE.clear();
            const tAll = performance.now();
            log('info', 'job', 'Antrian dimulai: ' + jobs.length + ' post · format ' + (mode === 'files' ? 'IMG' : mode.toUpperCase()) + ' · simpan ' + (saveMode === 'folder' && dirHandle ? 'folder "' + dirHandle.name + '"' : 'Downloads'));
            for (let i = 0; i < jobs.length; i++) {
                if (abortFlag) break;
                const { ch, setLabel, pre } = jobs[i];
                const tc = performance.now();
                toast('(' + (i + 1) + '/' + jobs.length + ') ' + ch.title, 'busy');
                try { const n = await downloadChapter(ch, mode, setLabel, pre); ok++; setLabel('✓ Done'); log('ok', 'job', '(' + (i + 1) + '/' + jobs.length + ') Post selesai: "' + ch.title + '" · ' + n + ' halaman · ' + secs(tc)); }
                catch (e) {
                    if (abortFlag || e.message === 'aborted') { log('warn', 'job', 'Dihentikan saat memproses "' + ch.title + '"'); setLabel('Stopped'); break; }
                    bad++; setLabel('✗ ' + e.message.slice(0, 24)); log('err', 'job', '(' + (i + 1) + '/' + jobs.length + ') Post gagal: "' + ch.title + '" — ' + e.message, e && e.stack); toast(ch.title + ': ' + e.message, 'err');
                }
                await sleep(400);
            }
            if (mode === 'cbz') await mihonGifFlush();
            log(bad ? 'warn' : 'ok', 'job', 'Antrian ' + (abortFlag ? 'dihentikan' : 'selesai') + ': ' + ok + ' ok, ' + bad + ' gagal · total ' + secs(tAll));
            if (abortFlag) toast('Dihentikan · ' + ok + ' selesai', 'err');
            else notifyDone({ kind: bad ? 'warn' : 'ok', title: bad ? 'Selesai dengan kendala' : 'Download selesai', chips: [ok + ' post', bad ? { t: bad + ' gagal', bad: true } : '', secs(tAll)], plain: 'Selesai: ' + ok + ' ok' + (bad ? ', ' + bad + ' gagal' : '') });
            return { ok, bad, aborted: abortFlag };
        });
    }

    // banyak chapter -> 1 file: kind 'zip' (satu folder per chapter) atau 'pdf' (semua halaman berurutan + bookmark per chapter)
    // opts: { multiManga: true -> chs punya .manga, struktur ZIP manga/chapter; title: nama file; onLabel(ch, teks): callback progres }
    async function runCombined(chs, kind, opts) {
        opts = opts || {};
        return await withBusy(async () => {
            const multiM = !!opts.multiManga;
            const mangaN = multiM ? (opts.title || 'Gabungan') : await rmName(curManga());
            const mkName = {};
            if (multiM) for (const c of chs) { const k = c.manga || 'manga'; if (!(k in mkName)) mkName[k] = await rmName(k); }
            const manga = sanitize(mangaN, 100);
            const sub = !multiM && saveMode === 'folder' && subfolder ? sanitizeDir(mangaN, 80) : null;
            const base = multiM ? sanitize(opts.title || 'Gabungan', 150) : sanitize(manga + ' - ' + chs[0].title + (chs.length > 1 ? ' - ' + chs[chs.length - 1].title : ''), 150);
            const cnt = {}, tot = {};
            cmpStat.inB = cmpStat.outB = 0;
            chs.forEach(c => { const k = multiM ? (c.manga || 'manga') : ''; tot[k] = (tot[k] || 0) + 1; });
            const ext = kind === 'pdf' ? 'pdf' : 'zip';
            const mime = kind === 'pdf' ? 'application/pdf' : 'application/zip';
            const maxBytes = zipMax * 1048576;
            const tAll = performance.now();
            log('info', 'job', 'Gabungan dimulai: ' + chs.length + ' post → 1 ' + ext.toUpperCase() + ' · ' + base, 'maks per ZIP ' + zipMax + ' MB · prefix nomor ' + zipPrefix + ' · simpan ' + (saveMode === 'folder' && dirHandle ? 'folder "' + dirHandle.name + '"' : 'Downloads'));
            const openPart = (part) => openOut(base + (part > 1 ? '_part' + part : '') + '.' + ext, sub, mime);
            let part = 1, zw = null, pw = null, ok = 0, pages = 0, files = 1;
            const bad = [], badCh = [], used = new Set();
            try {
                if (kind === 'pdf') pw = await pdfNew(await openPart(1));
                else zw = await zipNew(await openPart(1));
                for (let i = 0; i < chs.length; i++) {
                    if (abortFlag) break;
                    const ch = chs[i], lf = labelFn(ch);
                    const setLabel = opts.onLabel ? (t) => { lf(t); try { opts.onLabel(ch, t); } catch (e) {} } : lf;
                    const mk = multiM ? (ch.manga || 'manga') : '';
                    cnt[mk] = (cnt[mk] || 0) + 1;
                    const tc = performance.now();
                    log('info', 'chapter', '(' + (i + 1) + '/' + chs.length + ') Mulai: "' + ch.title + '"', ch.url);
                    toast('(' + (i + 1) + '/' + chs.length + ') ' + ch.title, 'busy');
                    try {
                        const imgs0 = ch.pre ? ch.pre.filter(x => x.checked !== false) : dropSkipped(ch.url, await getChapterImages(ch.url, (t) => setLabel(t)), ch.skip);
                        const imgs = (ch.extra && ch.extra.length) ? imgs0.concat(await mergedExtras(ch, setLabel)) : imgs0;   // ch.pre = hasil edit dari preview antrian
                        const n = imgs.length;
                        if (!n) throw new Error('Tidak ada halaman dipilih');
                        log('info', 'chapter', '"' + ch.title + '": ' + n + ' halaman akan diunduh');
                        const data = await fetchPages(imgs, setLabel);
                        if (kind === 'zip') {
                            if (zw.count && zw.size >= maxBytes) {   // pecah file ZIP di batas chapter
                                log('info', 'zip', 'Batas ' + zipMax + ' MB tercapai (' + fmtSize(zw.size) + ') → lanjut ke file part ' + (part + 1));
                                await zw.end(); part++; files++;
                                zw = await zipNew(await openPart(part));
                            }
                            let folder = sanitize((zipPrefix ? String(cnt[mk]).padStart(Math.max(3, String(tot[mk]).length), '0') + ' - ' : '') + ch.title, 120);
                            if (multiM) folder = sanitize(mkName[mk] || mk, 100) + '/' + folder;
                            if (used.has(folder.toLowerCase())) { let c = 2; while (used.has((folder + ' (' + c + ')').toLowerCase())) c++; folder += ' (' + c + ')'; }
                            used.add(folder.toLowerCase());
                            const pad = Math.max(3, String(n).length);
                            setLabel('ZIP…');
                            for (let k = 0; k < n; k++) {
                                await zw.add(folder + '/' + String(k + 1).padStart(pad, '0') + '.' + data[k].ext, new Uint8Array(data[k].buf));
                                data[k] = null;
                            }
                        } else {
                            pw.mark(multiM ? (mkName[mk] || ch.manga || 'manga') + ' — ' + ch.title : ch.title);
                            for (let k = 0; k < n; k++) {
                                await pw.addPage(await toPdfImage(data[k].buf));
                                data[k] = null;
                                setLabel('PDF ' + (k + 1) + '/' + n);
                            }
                        }
                        pages += n; ok++; setLabel('✓ Done');
                        log('ok', 'chapter', '(' + (i + 1) + '/' + chs.length + ') Selesai: "' + ch.title + '" · ' + n + ' halaman · ' + secs(tc));
                    } catch (e) {
                        if (abortFlag || e.message === 'aborted') { log('warn', 'chapter', 'Dihentikan saat memproses "' + ch.title + '"'); setLabel('Stopped'); break; }
                        log('err', 'chapter', '(' + (i + 1) + '/' + chs.length + ') Gagal: "' + ch.title + '" — ' + e.message, e && e.stack);
                        bad.push(ch.title); badCh.push(ch); setLabel('✗ ' + e.message.slice(0, 24)); toast(ch.title + ': ' + e.message, 'err');
                        await sleep(600);
                    }
                }
                if (abortFlag) {
                    if (zw) await zw.abort(); if (pw) await pw.abort();
                    toast('Dihentikan · file gabungan tidak dibuat', 'err');
                    return { aborted: true, ok, badCh };
                }
                if (!ok) {
                    if (zw) await zw.abort(); if (pw) await pw.abort();
                    toast('Tidak ada post yang berhasil diunduh', 'err');
                    return { ok: 0, badCh, allFailed: true };
                }
                log('info', 'save', 'Menulis file akhir (' + ok + ' post, ' + pages + ' halaman)…');
                toast('Menyimpan file…', 'busy');
                if (zw) await zw.end(); else await pw.end(multiM ? manga : (manga + ' - ' + chs[0].title + (chs.length > 1 ? ' ~ ' + chs[chs.length - 1].title : '')));
                if (pw) cmpLog();
                log(bad.length ? 'warn' : 'ok', 'job', 'Gabungan selesai: ' + ok + '/' + chs.length + ' post · ' + pages + ' halaman · ' + files + ' file · ' + secs(tAll) + (bad.length ? ' · gagal: ' + bad.join(', ') : ''));
                notifyDone({
                    kind: bad.length ? 'warn' : 'ok', title: bad.length ? 'Selesai dengan kendala' : 'Download selesai', sub: manga,
                    chips: [ok + ' post', pages + ' halaman', files > 1 ? files + ' file ZIP' : '', (pw && pdfComp !== 'off' && cmpStat.inB) ? 'hemat ' + Math.max(0, Math.round((1 - cmpStat.outB / cmpStat.inB) * 100)) + '%' : '', bad.length ? { t: bad.length + ' gagal', bad: true } : '', secs(tAll)],
                    plain: 'Selesai: ' + ok + ' post · ' + pages + ' halaman' + (files > 1 ? ' · ' + files + ' file ZIP' : '') + (pw ? cmpNote() : '') + (bad.length ? ' · gagal: ' + bad.length : '')
                });
                return { ok, badCh, pages, files };
            } catch (e) {
                log('err', 'job', 'Gabungan gagal: ' + (e && e.message), e && e.stack);
                try { if (zw) await zw.abort(); if (pw) await pw.abort(); } catch (e2) {}
                toast('Gagal: ' + e.message, 'err');
                return { error: (e && e.message) || 'gagal', ok, badCh };
            }
        });
    }

    // ------------------------------------------------------------ list chapter (tanpa tombol Save di baris)
    function resetBtn(b) {
        if (!b) return;
        delete b.dataset.state;
        const sp = b.querySelector('span');
        if (sp) sp.textContent = 'Save';
    }
    // Tombol Save di list chapter dihapus (v2.4.3). Download lewat FAB / panel preview.
    function injectButtons() {
        document.querySelectorAll('.dd-btn').forEach(b => { try { b.remove(); } catch (e) {} });
    }


    // ------------------------------------------------------------ daftar chapter
    const isReader = () => isPostUrl(location.href);   // halaman satu post
    function pageChapterTitle() {
        const h = document.querySelector('h1.post__title, h1[class*="post__title"], h1');
        if (h && cleanTitle(h.textContent)) return cleanTitle(h.textContent);
        return cleanTitle(String(document.title).replace(/^["“”]|["“”]\s+by\s.*$/g, '')) || 'post';
    }
    function orderOldestFirst(list) { return list.length < 2 ? list : list.slice().reverse(); }   // daftar di web = terbaru dulu
    // Ambil kartu post dari sebuah dokumen (halaman yang terbuka ATAU halaman hasil fetch)
    const NO_ATT = /\bno\s+attachments?\b|(?:^|\s)0\s+attachments?\b/i;
    function collectChaptersFrom(doc, stat) {
        const out = [];
        doc.querySelectorAll('a[href*="/post/"]').forEach(a => {
            if (a.closest('#dd-pv, #dd-view, #dd-hover, #dd-q, #dd-dlg, #dd-done, #dd-edit, nav, aside, [class*="comment"]')) return;
            if (!isPostUrl(a.getAttribute('href') || '')) return;
            const card = a.closest('article, [class*="post-card"]') || a;
            if (skipEmpty && card !== a && NO_ATT.test(card.textContent || '')) { if (stat) stat.skipped++; return; }   // kartu "No attachments"
            const hd = card.querySelector('[class*="post-card__header"], [class*="card__header"], h2, h3');
            const c = { url: new URL(a.getAttribute('href'), location.origin).href, title: cleanTitle((hd || a).textContent) || 'Untitled' };
            if (doc === document) c.a = a;
            out.push(c);
        });
        return out;
    }
    function finalizeChapters(list) {
        const seen = new Set();
        list = list.filter(c => { const k = norm(c.url); if (seen.has(k)) return false; seen.add(k); return true; });
        list = orderOldestFirst(list);
        list.forEach((c, i) => { c.idx = i; c.checked = true; c.st = ''; });
        return list;
    }
    function collectChapters() {
        if (isReader()) return finalizeChapters([{ url: location.href, title: pageChapterTitle() }]);   // halaman post: hanya post ini (bukan previous/next)
        const st = { skipped: 0 };
        const list = finalizeChapters(collectChaptersFrom(document, st));
        if (st.skipped) log('info', 'scan', st.skipped + ' post tanpa lampiran dilewati (halaman ini)');
        return list;
    }

    // ---- pindai SEMUA halaman daftar (paginasi Pawchive: ?o=0, ?o=50, ?o=100, …)
    const PAGE_CACHE = new Map();   // kunci (path + query tanpa o) -> { t, raw: [{url,title}] }
    let scanBusy = false;
    function pagerInfo(doc) {
        let start = 0, end = 0, total = 0;
        const sm = doc.querySelector('[id^="paginator"] small, .paginator small');
        const m = sm && sm.textContent.replace(/,/g, '').match(/(\d+)\s*[-–]\s*(\d+)\s+of\s+(\d+)/i);
        if (m) { start = +m[1]; end = +m[2]; total = +m[3]; }
        const offs = [];
        doc.querySelectorAll('[id^="paginator"] a[href*="o="], .paginator a[href*="o="]').forEach(a => {
            try { const o = parseInt(new URL(a.getAttribute('href'), location.href).searchParams.get('o'), 10); if (o > 0) offs.push(o); } catch (e) {}
        });
        return { start, end, total, offs };
    }
    function pageUrlAt(off, base) {
        const u = new URL(base || location.href);
        u.hash = '';
        if (off > 0) u.searchParams.set('o', String(off)); else u.searchParams.delete('o');
        return u.href;
    }
    async function collectChaptersAll() {
        if (isReader() || !scanAll) return collectChapters();
        const u0 = new URL(location.href);
        const curOff = parseInt(u0.searchParams.get('o'), 10) || 0;
        const ck = (() => { const x = new URL(location.href); x.hash = ''; x.searchParams.delete('o'); return x.href; })();
        const hit = PAGE_CACHE.get(ck);
        if (hit && Date.now() - hit.t < 10 * 60 * 1000) {
            log('info', 'scan', 'Daftar post dari cache: ' + hit.raw.length + ' post', ck);
            return finalizeChapters(hit.raw.map(c => ({ url: c.url, title: c.title })));
        }
        const info = pagerInfo(document);
        const size = (info.start === 1 && info.end > 0 && info.total > info.end) ? info.end : (info.offs.length ? Math.min.apply(null, info.offs) : 50);
        const known = info.total ? Math.ceil(info.total / size) : 0;
        // tidak ada paginasi → cukup halaman ini
        if (!known && !info.offs.length) return collectChapters();
        if (known === 1) return collectChapters();
        if (known > 40 && !(await ddConfirm('Daftar ini punya ' + known + ' halaman (±' + info.total + ' post). Pindai semuanya? Bisa memakan waktu.', { title: 'Pindai semua halaman', ok: 'Pindai semua', cancel: 'Halaman ini saja' }))) {
            return collectChapters();
        }
        scanBusy = true;
        const scanHref = location.href, scanPath = location.pathname;   // pindah halaman (SPA) di tengah pemindaian = batalkan
        const moved = () => location.pathname !== scanPath;
        const t0 = performance.now();
        const raw = [], seen = new Set();
        let n = 0, failed = 0;
        const st = { skipped: 0 };
        log('info', 'scan', 'Memindai semua halaman daftar · ' + (known || '?') + ' halaman · ' + size + ' per halaman', ck);
        try {
            for (let off = 0; n < 300; off += size, n++) {
                if (known && n >= known) break;
                if (moved()) break;
                let doc = null;
                if (off === curOff) doc = document;
                else {
                    for (let tryN = 0; tryN < 2 && !doc; tryN++) {
                        try {
                            const r = await fetch(pageUrlAt(off, scanHref), { credentials: 'same-origin' });
                            if (!r.ok) throw new Error('HTTP ' + r.status);
                            doc = new DOMParser().parseFromString(await r.text(), 'text/html');
                        } catch (e) {
                            if (tryN) { failed++; log('warn', 'scan', 'Halaman daftar o=' + off + ' gagal dibaca — ' + (e && e.message)); }
                            else await sleep(500);
                        }
                    }
                    await sleep(Math.max(150, delayMs));
                }
                let fresh = 0;
                if (doc) collectChaptersFrom(doc, st).forEach(c => { const k = norm(c.url); if (!seen.has(k)) { seen.add(k); raw.push({ url: c.url, title: c.title }); fresh++; } });
                toast('Memindai daftar post ' + (n + 1) + '/' + (known || '?') + ' · ' + raw.length + ' post ditemukan', 'busy');
                log('debug', 'scan', 'Halaman daftar o=' + off + ': +' + fresh + ' post');
                if (!known && !fresh) break;   // total tidak diketahui: berhenti saat halaman kosong
            }
        } catch (e) {
            log('err', 'scan', 'Pemindaian daftar gagal — ' + (e && e.message), e && e.stack);
        } finally { scanBusy = false; }
        if (moved()) { toastHide(); log('warn', 'scan', 'Pemindaian daftar dibatalkan: pindah halaman'); return []; }
        if (!raw.length) { toastHide(); return collectChapters(); }
        if (st.skipped) log('info', 'scan', st.skipped + ' post tanpa lampiran dilewati');
        PAGE_CACHE.set(ck, { t: Date.now(), raw });
        log(failed ? 'warn' : 'ok', 'scan', raw.length + ' post dari ' + n + ' halaman daftar · ' + secs(t0) + (failed ? ' · ' + failed + ' halaman gagal' : ''));
        if (failed) toast(raw.length + ' post ditemukan · ' + failed + ' halaman daftar gagal dibaca', 'err');
        else toast(raw.length + ' post ditemukan dari ' + n + ' halaman daftar' + (st.skipped ? ' · ' + st.skipped + ' tanpa lampiran dilewati' : ''), 'ok');
        return finalizeChapters(raw.map(c => ({ url: c.url, title: c.title })));
    }
    const labelFn = (ch0) => (t) => {
        const ch = ch0._o || ch0;
        ch.st = t;
        const P = pv;
        if (P && P.rows && P.rows[ch.idx] && P.chapters[ch.idx] === ch) { const s = P.rows[ch.idx].querySelector('.cs'); if (s) s.textContent = t; }
        if (ch.a && ch.a.parentElement) { const b = ch.a.parentElement.querySelector('.dd-btn'); if (b) { b.dataset.state = 'run'; b.querySelector('span').textContent = t; } }
        if (P && P.chapters[P.cur] === ch) pvStatus(t, 'busy');
    };
    function pvClearStatus() {
        const P = pv;
        if (!P) return;
        P.chapters.forEach((c, k) => { c.st = ''; if (P.rows && P.rows[k]) { const s = P.rows[k].querySelector('.cs'); if (s) s.textContent = ''; } });
        if (!P.scanning) pvStatus(P.items.length ? P.items.length + ' halaman' : '', P.items.length ? 'ok' : '');
    }

    // ------------------------------------------------------------ antrian multi-manga
    const Q = { items: [], seq: 0, running: false, open: new Set() };
    // Opsi output antrian: mode 'merge' = semua manga terpilih jadi 1 file | 'manga' = 1 file per manga | 'chapter' = tiap chapter terpisah
    const QO = { mode: gv('dd_q_mode', 'merge'), fmt: gv('dd_q_fmt', 'pdf'), name: '' };
    if (['merge', 'manga', 'chapter'].indexOf(QO.mode) < 0) QO.mode = 'merge';
    if (['pdf', 'zip', 'files', 'cbz'].indexOf(QO.fmt) < 0) QO.fmt = 'pdf';
    if (QO.fmt === 'cbz') QO.mode = 'chapter';   // CBZ Mihon = 1 file per chapter
    if (QO.mode !== 'chapter' && QO.fmt === 'files') QO.fmt = 'pdf';
    const QV = { tab: 'queue', q: '' };   // tampilan panel antrian: tab aktif + kata kunci pencarian
    const qoSave = () => { sv('dd_q_mode', QO.mode); sv('dd_q_fmt', QO.fmt); };
    const jobChs = (j) => j.chapters.filter(c => c.on !== false);
    // Gabung chapter di antrian: c.mergeTo = url chapter target (di job yang sama). Gambar chapter sumber dimasukkan ke akhir target.
    function qRoot(job, c) {
        let cur = c; const seen = new Set();
        while (cur.mergeTo && !seen.has(cur.url)) { seen.add(cur.url); const n = job.chapters.find(x => x.url === cur.mergeTo); if (!n) break; cur = n; }
        return cur;
    }
    function qMergedInto(job, c) {   // chapter target bila c ikut digabung (c & target sama-sama aktif), selain itu null
        if (!c.mergeTo || c.on === false) return null;
        const r = qRoot(job, c);
        return (r !== c && r.on !== false) ? r : null;
    }
    const jobEff = (j) => jobChs(j).filter(c => !qMergedInto(j, c));   // chapter yang benar-benar jadi file (sumber gabungan tidak dihitung)
    function queueToggleMerge(job, k) {
        const c = job && job.chapters[k];
        if (!c || Q.running || busy || job.status === 'running') return;
        if (c.mergeTo) delete c.mergeTo;
        else {
            if (k < 1) { toast('Tidak ada post di atasnya', 'err'); return; }
            const r = qRoot(job, job.chapters[k - 1]);
            if (r === c) return;
            c.mergeTo = r.url;
            job.chapters.forEach(x => { if (x.mergeTo === c.url) x.mergeTo = r.url; });   // yang tadinya digabung ke c ikut pindah ke target baru
        }
        queueSave(); queueRender();
    }
    // Hasil edit (gabung/split/potong) per chapter disimpan di memori: c.pre = [{ url, w, h, checked, edited }].
    // TIDAK ikut disimpan ke storage (blob URL hilang saat refresh) — yang tersimpan hanya penanda c.ed supaya ada peringatan.
    const KEEP = new Set();   // blob URL hasil edit yang dipakai antrian: jangan di-revoke
    const isBlob = (u) => !!u && String(u).startsWith('blob:');
    function keepRebuild() {
        KEEP.clear();
        Q.items.forEach(j => j.chapters.forEach(c => (c.pre || []).forEach(it => { if (isBlob(it.url)) KEEP.add(it.url); })));
    }
    function jobPreUrls(jobs) {
        const u = [];
        (jobs || []).forEach(j => j.chapters.forEach(c => (c.pre || []).forEach(it => { if (isBlob(it.url)) u.push(it.url); })));
        return u;
    }
    function queueRelease(removedJobs) {   // panggil SETELAH job dikeluarkan dari Q.items
        const urls = jobPreUrls(removedJobs);
        keepRebuild();
        editRevokeOrphans(urls);
    }
    (function loadQ() {
        try {
            const raw = gv('dd_queue', '[]');
            const arr = typeof raw === 'string' ? JSON.parse(raw) : (raw || []);
            if (Array.isArray(arr)) {
                Q.items = arr.map(x => ({
                    id: ++Q.seq,
                    manga: String(x.manga || 'manga'),
                    mangaUrl: String(x.mangaUrl || ''),
                    chapters: Array.isArray(x.chapters) ? x.chapters.map(c => ({ url: c.url, title: c.title, on: c.on !== false, skip: Array.isArray(c.skip) ? c.skip.filter(u => typeof u === 'string') : [], lost: !!c.ed, mergeTo: typeof c.mergeTo === 'string' ? c.mergeTo : '', pre: (Array.isArray(c.pre) && c.pre.length) ? c.pre.filter(it => it && typeof it.url === 'string' && it.url).map(it => ({ url: it.url, w: it.w, h: it.h, checked: it.checked !== false })) : undefined })).filter(c => c.url) : [],
                    mode: ['zip', 'pdf', 'files', 'cbz'].indexOf(x.mode) >= 0 ? x.mode : 'zip',
                    multi: ['sep', 'onezip', 'onepdf'].indexOf(x.multi) >= 0 ? x.multi : 'sep',
                    status: (x.status === 'done' || x.status === 'error') ? x.status : 'pending',
                    sel: x.status === 'done' ? false : x.sel !== false,
                    doneAt: x.status === 'done' ? (Number(x.doneAt) || 0) : 0,
                    progress: '',
                    err: ''
                })).filter(x => x.chapters.length);
                Q.seq = Math.max(Q.seq, Q.items.length);
            }
        } catch (e) { Q.items = []; }
    })();
    function queueSave() {
        try {
            const slim = Q.items.map(x => ({
                manga: x.manga, mangaUrl: x.mangaUrl, chapters: x.chapters.map(c => ({ url: c.url, title: c.title, on: c.on !== false, skip: c.skip || [], mergeTo: c.mergeTo || '', pre: (c.pre && c.pre.length && !c.pre.some(it => isBlob(it.url))) ? c.pre.map(it => ({ url: it.url, w: it.w, h: it.h, checked: it.checked !== false })) : undefined, ed: (c.lost || (c.pre && c.pre.length && c.pre.some(it => isBlob(it.url)))) ? 1 : 0 })),
                mode: x.mode, multi: x.multi, sel: !!x.sel, doneAt: x.doneAt || 0,
                status: x.status === 'running' ? 'pending' : x.status
            }));
            sv('dd_queue', JSON.stringify(slim));
        } catch (e) {}
    }
    function queueCount() {
        return Q.items.filter(x => x.status === 'pending' || x.status === 'running').length;
    }
    function queueBadge() {
        const n = queueCount();
        ['dd-fab-q', 'dd-pv-qdot', 'dd-q-count'].forEach(id => {
            const el = $(id);
            if (!el) return;
            if (id === 'dd-q-count') { el.textContent = Q.items.length ? (Q.items.length + ' manga · ' + Q.items.reduce((a, j) => a + j.chapters.length, 0) + ' post') : 'Kosong'; return; }
            if (id === 'dd-pv-qdot') { el.hidden = !n; return; }
            el.textContent = n ? String(n) : '';
            el.hidden = !n;
        });
        const fab = $('dd-fab');
        if (fab) fab.classList.toggle('has-q', n > 0);
        const qb = $('dd-fab-queue');
        if (qb) qb.classList.toggle('has-q', n > 0);
    }
    // ---- pencarian + deteksi manga sama
    const qNorm = (t) => String(t || '').toLowerCase().normalize('NFD').replace(/[\u0300-\u036f]/g, '').replace(/[^\p{L}\p{N}]+/gu, ' ').trim();
    const qMatch = (j) => { if (!QV.q) return true; const h = qNorm(j.manga); return qNorm(QV.q).split(' ').every(t => h.indexOf(t) >= 0); };
    const qVisible = (tab) => Q.items.filter(j => (tab === 'done') === (j.status === 'done') && qMatch(j));
    function qHl(t) {   // sorot kata kunci di judul manga
        t = String(t || '');
        const toks = QV.q.trim().split(/\s+/).filter(Boolean).map(x => x.replace(/[.*+?^${}()|[\]\\]/g, '\\$&'));
        if (!toks.length) return esc(t);
        return t.split(new RegExp('(' + toks.join('|') + ')', 'ig')).map((p, i) => i % 2 ? '<mark>' + esc(p) + '</mark>' : esc(p)).join('');
    }
    function queueDupInfo(manga, mangaUrl, chapters) {
        const key = norm(mangaUrl || manga), nm = qNorm(manga);
        const want = new Set((chapters || []).map(c => norm(c.url)));
        const same = (j) => (j.mangaUrl && norm(j.mangaUrl) === key) || (!!nm && qNorm(j.manga) === nm);
        const sum = (list) => {
            if (!list.length) return null;
            const have = new Set();
            list.forEach(j => j.chapters.forEach(c => have.add(norm(c.url))));
            let ov = 0; want.forEach(u => { if (have.has(u)) ov++; });
            return { ch: have.size, ov };
        };
        const all = Q.items.filter(same);
        return { q: sum(all.filter(j => j.status !== 'done')), d: sum(all.filter(j => j.status === 'done')), total: want.size };
    }
    function queueDupAsk(manga, dup) {   // Promise<boolean>: true = lanjut tambahkan
        const part = (x) => x.ov ? tr(x.ov + ' dari ' + dup.total + ' post yang akan ditambah sudah ada') : tr('post-nya berbeda');
        const L = [];
        if (dup.q) L.push(tr('• Di antrian: ' + dup.q.ch + ' post') + ' — ' + part(dup.q));
        if (dup.d) L.push(tr('• Sudah selesai di-download: ' + dup.d.ch + ' post') + ' — ' + part(dup.d));
        return ddConfirm(L.join('\n'), { title: 'Manga ini sudah ada', head: manga, ok: 'Tetap tambahkan', kind: 'warn' });
    }
    async function queueAdd(manga, mangaUrl, chapters, opts) {
        opts = opts || {};
        chapters = (chapters || []).map(c => { const o = { url: c.url, title: c.title || 'chapter', on: true, skip: Array.isArray(c.skip) ? c.skip.slice() : [], mergeTo: c.mergeTo || '' }; if (Array.isArray(c.pre) && c.pre.length) o.pre = c.pre.map(x => ({ url: x.url, w: x.w, h: x.h, checked: x.checked !== false, edited: !!x.edited })); return o; }).filter(c => c.url);
        if (!chapters.length) { toast('Tidak ada post untuk diantrikan', 'err'); return null; }
        const dup = queueDupInfo(manga, mangaUrl, chapters);
        if ((dup.q || dup.d) && !opts.force && !(await queueDupAsk(manga || 'manga', dup))) {
            toast('Dibatalkan — manga tidak ditambahkan');
            log('info', 'queue', 'Tambah dibatalkan (sudah ada): ' + (manga || 'manga'));
            return null;
        }
        QV.tab = 'queue';
        const mode = opts.mode || fmt;
        const mlt = opts.multi || (chapters.length > 1 ? multi : 'sep');
        // gabung ke job pending manga yang sama (URL sama)
        const key = norm(mangaUrl || manga);
        let job = Q.items.find(x => x.status === 'pending' && norm(x.mangaUrl || x.manga) === key);
        if (job) {
            const seen = new Set(job.chapters.map(c => norm(c.url)));
            let add = 0, upd = 0;
            const oldU = [];
            chapters.forEach(c => {
                if (!seen.has(norm(c.url))) { job.chapters.push(c); seen.add(norm(c.url)); add++; }
                else if (c.pre) {   // chapter sudah di antrian tapi daftar halamannya diubah → perbarui
                    const ex = job.chapters.find(x => norm(x.url) === norm(c.url));
                    if (ex) { (ex.pre || []).forEach(x => oldU.push(x.url)); ex.pre = c.pre; ex.on = true; ex.lost = false; upd++; }
                }
            });
            if (upd) { keepRebuild(); editRevokeOrphans(oldU); }
            if (!add && !upd) { toast('Post sudah ada di antrian', 'err'); return job; }
            if (!add) { queueSave(); queueBadge(); queueRender(); toast('Daftar halaman diperbarui di antrian · \"' + job.manga + '\"', 'ok'); return job; }
            job.mode = mode; job.sel = true;
            if (job.chapters.length > 1) job.multi = opts.multi || job.multi || multi || 'sep';
            keepRebuild();
            queueSave(); queueBadge(); queueRender();
            toast('+' + add + ' post ke antrian · "' + job.manga + '" (' + job.chapters.length + ' total)', 'ok');
            log('ok', 'queue', 'Tambah ' + add + ' post ke job existing: ' + job.manga);
            return job;
        }
        job = {
            id: ++Q.seq,
            manga: manga || 'manga',
            mangaUrl: mangaUrl || location.href,
            chapters: chapters.slice(),
            mode: mode,
            multi: chapters.length > 1 ? mlt : 'sep',
            sel: true,
            status: 'pending',
            progress: '',
            err: ''
        };
        Q.items.push(job);
        keepRebuild();
        queueSave(); queueBadge(); queueRender();
        toast('Antrian: "' + job.manga + '" · ' + job.chapters.length + ' post', 'ok');
        log('ok', 'queue', 'Job baru #' + job.id + ': ' + job.manga + ' · ' + job.chapters.length + ' post · ' + job.multi + '/' + job.mode);
        return job;
    }
    async function queueAddFromPage() {
        if (scanBusy) return;
        const list = await collectChaptersAll();
        if (!list.length) { toast('Tidak ada post di halaman ini', 'err'); return; }
        const title = mangaTitle();
        queueAdd(title, location.href, list.map(c => ({ url: c.url, title: c.title })), {
            mode: fmt,
            multi: list.length > 1 ? multi : 'sep'
        });
    }
    function queueAddFromPanel() {
        const P = pv;
        if (!P || P.qjob) { queueAddFromPage(); return; }
        const isTg = (u) => { const t = P.chapters.find(x => x.url === u); return !!(t && t.checked); };
        const sel = P.chapters.filter(c => c.checked || (P.merge && P.merge.has(c.url) && isTg(P.merge.get(c.url))));   // + chapter sumber gabungan dari target yang dicentang
        if (!sel.length) { toast('Centang post di sidebar dulu', 'err'); return; }
        const list = sel.map(c => ({ url: c.url, title: c.title, skip: Array.from((P.skip && P.skip.get(c.url)) || []), mergeTo: (P.merge && P.merge.has(c.url) && isTg(P.merge.get(c.url))) ? P.merge.get(c.url) : '', pre: pvCustomPre(c) }))
            .filter(c => !(c.pre && !c.pre.length));   // chapter yang sudah dikosongkan tidak ikut
        if (list.length < sel.length) toast((sel.length - list.length) + ' post kosong dilewati');
        if (!list.length) { toast('Tidak ada post berisi halaman untuk diantrikan', 'err'); return; }
        queueAdd(P.manga || mangaTitle(), location.href, list, {
            mode: fmt,
            multi: list.length > 1 ? multi : 'sep'
        });
    }
    function queueRemove(id) {
        const i = Q.items.findIndex(x => x.id === id);
        if (i < 0) return;
        if (Q.items[i].status === 'running') { toast('Tidak bisa hapus job yang sedang berjalan — Stop dulu', 'err'); return; }
        const gone = Q.items.splice(i, 1);
        queueRelease(gone);
        queueSave(); queueBadge(); queueRender();
    }
    // Pindah 1 chapter ke manga lain (atau ubah urutan di manga yang sama). at = posisi sisip di tujuan, -1 = paling akhir.
    function queueDndBlocked(src, dst) {
        if (Q.running || busy) { toast('Tunggu proses download selesai dulu', 'err'); return true; }
        if (!src || !dst || src.status === 'running' || dst.status === 'running') return true;
        if (pv && pv.qjob && (pv.qjob === src || pv.qjob === dst)) { toast('Tutup preview manga ini dulu', 'err'); return true; }
        return false;
    }
    function queueMoveChapter(srcId, k, dstId, at) {
        const src = Q.items.find(x => x.id === srcId), dst = Q.items.find(x => x.id === dstId);
        if (queueDndBlocked(src, dst)) return;
        const c = src.chapters[k];
        if (!c) return;
        if (src === dst) {
            let to = (at == null || at < 0) ? src.chapters.length : at;
            if (to === k || to === k + 1) return;   // posisi tidak berubah
            src.chapters.splice(k, 1);
            if (k < to) to--;
            src.chapters.splice(to, 0, c);
            queueSave(); queueRender();
            log('info', 'queue', 'Urutan post diubah di "' + src.manga + '": ' + c.title + ' → posisi ' + (to + 1));
            return;
        }
        if (dst.chapters.some(x => norm(x.url) === norm(c.url))) { toast('Post itu sudah ada di "' + dst.manga + '"', 'err'); return; }
        src.chapters.splice(k, 1);
        const to = (at == null || at < 0 || at > dst.chapters.length) ? dst.chapters.length : at;
        dst.chapters.splice(to, 0, c);
        dst.sel = true;
        if (dst.status === 'done' || dst.status === 'error') { dst.status = 'pending'; dst.progress = ''; dst.err = ''; }
        if (dst.chapters.length > 1 && dst.multi === 'sep') dst.multi = 'sep';
        Q.open.add(dst.id);
        let emptied = false;
        if (!src.chapters.length) { Q.items.splice(Q.items.indexOf(src), 1); Q.open.delete(src.id); queueRelease([src]); emptied = true; }
        else keepRebuild();
        queueSave(); queueBadge(); queueRender();
        toast('"' + c.title + '" → ' + dst.manga + ' (post ' + (to + 1) + ')' + (emptied ? ' · manga asal dihapus karena kosong' : ''), 'ok');
        log('ok', 'queue', 'Post dipindah: "' + c.title + '" dari "' + src.manga + '" ke "' + dst.manga + '" (posisi ' + (to + 1) + ')' + (emptied ? ' · job asal kosong, dihapus' : ''));
    }
    // Gabung SEMUA chapter manga asal ke manga tujuan (ditaruh di akhir), lalu hapus job asal
    function queueMergeJob(srcId, dstId) {
        const src = Q.items.find(x => x.id === srcId), dst = Q.items.find(x => x.id === dstId);
        if (src === dst || queueDndBlocked(src, dst)) return;
        const seen = new Set(dst.chapters.map(c => norm(c.url)));
        let add = 0, dup = 0;
        src.chapters.forEach(c => { if (seen.has(norm(c.url))) dup++; else { dst.chapters.push(c); seen.add(norm(c.url)); add++; } });
        if (!add) { toast('Semua post itu sudah ada di "' + dst.manga + '"', 'err'); return; }
        src.chapters = [];
        dst.sel = true;
        if (dst.status === 'done' || dst.status === 'error') { dst.status = 'pending'; dst.progress = ''; dst.err = ''; }
        Q.open.add(dst.id); Q.open.delete(src.id);
        Q.items.splice(Q.items.indexOf(src), 1);
        queueRelease([src]);
        queueSave(); queueBadge(); queueRender();
        toast(add + ' post dari "' + src.manga + '" digabung ke "' + dst.manga + '"' + (dup ? ' (' + dup + ' dobel dilewati)' : ''), 'ok');
        log('ok', 'queue', 'Manga digabung: "' + src.manga + '" → "' + dst.manga + '" · +' + add + ' post' + (dup ? ', ' + dup + ' dobel dilewati' : ''));
    }
    async function queueRequeue(id) {
        const j = Q.items.find(x => x.id === id);
        if (!j || j.status !== 'done') return;
        const dup = queueDupInfo(j.manga, j.mangaUrl, j.chapters);
        const live = Q.items.some(x => x !== j && x.status !== 'done' && ((x.mangaUrl && norm(x.mangaUrl) === norm(j.mangaUrl || j.manga)) || qNorm(x.manga) === qNorm(j.manga)));
        if (live && !(await queueDupAsk(j.manga, { q: dup.q, d: null, total: dup.total }))) return;
        j.status = 'pending'; j.progress = ''; j.err = ''; j.sel = true; j._done = 0; j.doneAt = 0;
        queueSave(); queueBadge(); queueRender();
        toast('"' + j.manga + '" dikembalikan ke antrian', 'ok');
        log('ok', 'queue', 'Diantrikan ulang: ' + j.manga);
    }
    async function queueClearFinished() {   // hapus manga selesai yang tampil (menghormati pencarian)
        const gone = qVisible('done');
        if (!gone.length) return;
        if (!(await ddConfirm('Hapus ' + gone.length + ' manga selesai dari daftar?', { title: 'Hapus dari daftar', ok: 'Hapus', danger: true }))) return;
        Q.items = Q.items.filter(x => gone.indexOf(x) < 0);
        queueRelease(gone);
        queueSave(); queueBadge(); queueRender();
    }
    async function queueClearAll() {
        if (Q.running) { toast('Stop antrian dulu', 'err'); return; }
        const gone = Q.items.filter(x => x.status !== 'done');
        if (!gone.length) return;
        if (!(await ddConfirm('Hapus semua ' + gone.length + ' job di antrian?', { title: 'Kosongkan antrian', ok: 'Hapus semua', danger: true }))) return;
        Q.items = Q.items.filter(x => x.status === 'done');
        queueRelease(gone);
        queueSave(); queueBadge(); queueRender();
    }
    function queueSelJobs() {
        return Q.items.filter(x => x.sel && x.status !== 'running' && x.status !== 'done' && jobChs(x).length);
    }
    // update teks + progress bar job tanpa render ulang seluruh daftar
    function queueProg(job, ch, t) {
        if (/^✓/.test(t)) job._done = (job._done || 0) + 1;
        const tot = jobEff(job).length || 1;
        job.progress = (job._done || 0) + '/' + tot + ' post' + (ch ? ' · ' + ch.title : '') + ' · ' + t;
        const row = document.querySelector('#dd-q .q-item[data-id="' + job.id + '"]');
        if (!row) return;
        const pc = Math.min(100, Math.round((job._done || 0) / tot * 100));
        const p = row.querySelector('.q-prog span'); if (p) p.textContent = job.progress;
        const pb = row.querySelector('.q-prog b'); if (pb) pb.textContent = pc + '%';
        const f = row.querySelector('.q-pb i'); if (f) f.style.width = pc + '%';
    }
    // r: { cancel, aborted, error, failed }
    function queueFinish(job, r) {
        const tot = jobEff(job).length;
        if (r.cancel) { job.status = 'pending'; job.progress = ''; job.err = ''; }
        else if (r.aborted) { job.status = 'pending'; job.progress = 'Dihentikan'; job.err = ''; }
        else if (r.error || (r.failed && r.failed >= tot)) { job.status = 'error'; job.err = r.error || 'Semua post gagal'; job.progress = 'Gagal'; log('err', 'queue', 'Job #' + job.id + ' gagal: ' + job.err); }
        else { job.status = 'done'; job.progress = 'Selesai'; job.err = r.failed ? r.failed + ' post gagal diunduh' : ''; job.sel = false; job.doneAt = Date.now(); }
    }
    async function queueProcess() {
        if (Q.running) { toast('Antrian sedang berjalan', 'err'); return; }
        if (busy) { toast('Masih ada unduhan lain — tunggu selesai atau Stop', 'err'); return; }
        const picks = queueSelJobs();
        if (!picks.length) { toast('Centang minimal 1 manga di antrian dulu', 'err'); return; }
        const mode = QO.mode;
        const f = (mode !== 'chapter' && (QO.fmt === 'files' || QO.fmt === 'cbz')) ? 'pdf' : QO.fmt;
        const kind = f === 'zip' ? 'zip' : 'pdf';
        const lostCh = [];
        picks.forEach(j => jobChs(j).forEach(c => { if (c.lost && !(c.pre && c.pre.length)) lostCh.push(j.manga + ' — ' + c.title); }));
        if (lostCh.length) {
            if (!(await ddConfirm('Hasil edit ' + lostCh.length + ' post sudah hilang (halaman di-refresh), jadi akan diunduh TANPA edit:\n\n' + lostCh.slice(0, 6).join('\n') + (lostCh.length > 6 ? '\n…' : ''), { title: 'Hasil edit hilang', ok: 'Lanjut tanpa edit' }))) return;
            picks.forEach(j => j.chapters.forEach(c => { if (!c.pre) c.lost = false; }));
            queueSave(); queueRender();
        }
        if (!(await ensureFolder())) return;
        Q.running = true;
        abortFlag = false;
        const tQ = performance.now();
        queueBadge(); queueRender(); syncUI();
        log('info', 'queue', 'Mulai proses: ' + picks.length + ' manga · mode ' + mode + ' · format ' + f);
        const start = (j) => { j.status = 'running'; j.progress = 'Memulai…'; j.err = ''; j._done = 0; };
        const mkChs0 = (j) => jobChs(j).map(c => ({ _jc: c, url: c.url, title: c.title, manga: j.manga, num: j.chapters.indexOf(c) + 1, numTot: j.chapters.length, skip: new Set(c.skip || []), pre: (c.pre && c.pre.length) ? c.pre.map(x => ({ url: x.url, w: x.w, h: x.h, checked: x.checked })) : null, _job: j }));
        const mkChs = (j) => {   // chapter sumber gabungan dilebur ke target (ch.extra), tidak jadi file sendiri
            const all = mkChs0(j), byJc = new Map(all.map(x => [x._jc, x])), out = [];
            all.forEach(x => {
                const tg = qMergedInto(j, x._jc), t = tg && byJc.get(tg);
                if (!t) { out.push(x); return; }
                (t.extra = t.extra || []).push({ url: x.url, title: x.title, skip: x.skip, pre: x.pre });
            });
            return out;
        };
        const onLabel = (ch, t) => queueProg(ch._job, ch, t);
        try {
            if (mode === 'merge') {
                // semua manga terpilih -> 1 file
                picks.forEach(start);
                queueRender();
                let chs = [];
                picks.forEach(j => { chs = chs.concat(mkChs(j)); });
                const name = (QO.name || '').trim();
                const multiM = picks.length > 1 || !!name;
                mangaOverride = picks[0].manga;
                toast('Menggabungkan ' + picks.length + ' manga · ' + chs.length + ' post…', 'busy');
                log('info', 'queue', 'Gabung ' + picks.length + ' manga (' + chs.length + ' post) → 1 ' + kind.toUpperCase() + (name ? ' · nama "' + name + '"' : ''));
                const res = await runCombined(chs, kind, { multiManga: multiM, title: name || (multiM ? 'Gabungan ' + picks.length + ' manga' : ''), onLabel });
                picks.forEach(j => {
                    if (!res) { queueFinish(j, { cancel: true }); return; }
                    queueFinish(j, { aborted: res.aborted || abortFlag, error: res.error, failed: (res.badCh || []).filter(c => c._job === j).length });
                });
            } else {
                for (const j of picks) {
                    if (abortFlag) break;
                    start(j); queueRender(); queueBadge();
                    mangaOverride = j.manga;
                    toast('Antrian: ' + j.manga, 'busy');
                    log('info', 'queue', 'Job #' + j.id + ' · ' + j.manga + ' · ' + jobChs(j).length + ' post · ' + mode + '/' + f);
                    const chs = mkChs(j);
                    let res;
                    try {
                        if (mode === 'manga') res = await runCombined(chs, kind, { onLabel });
                        else res = await runJobs(chs.map(ch => ({ ch, setLabel: (t) => queueProg(j, ch, t), pre: ch.pre || undefined })), f);
                    } catch (e) {
                        res = (abortFlag || (e && e.message === 'aborted')) ? { aborted: true } : { error: (e && e.message) || 'gagal' };
                    }
                    mangaOverride = null;
                    if (!res) { queueFinish(j, { cancel: true }); queueSave(); queueRender(); break; }
                    queueFinish(j, { aborted: res.aborted || abortFlag, error: res.error, failed: res.badCh ? res.badCh.length : (res.bad || 0) });
                    queueSave(); queueRender();
                    if (abortFlag) break;
                    await sleep(500);
                }
            }
        } catch (e) {
            log('err', 'queue', 'Proses antrian error: ' + (e && e.message), e && e.stack);
        } finally {
            Q.items.forEach(j => { if (j.status === 'running') { j.status = 'pending'; j.progress = abortFlag ? 'Dihentikan' : ''; } });
            Q.running = false;
            mangaOverride = null;
            queueSave();
            queueBadge();
            queueRender();
            syncUI();
            const okN = picks.filter(j => j.status === 'done').length, errN = picks.filter(j => j.status === 'error').length;
            log(abortFlag ? 'warn' : 'ok', 'queue', 'Proses antrian ' + (abortFlag ? 'dihentikan' : 'selesai') + ' · ' + okN + ' berhasil, ' + errN + ' gagal');
            if (abortFlag) toast('Antrian dihentikan', 'err');
            else notifyDone({
                final: true, kind: errN ? 'warn' : 'ok', title: errN ? 'Antrian selesai dengan kendala' : 'Antrian selesai',
                chips: [okN + ' manga', picks.filter(j => j.status === 'done').reduce((a, j) => a + jobChs(j).length, 0) + ' post', errN ? { t: errN + ' gagal', bad: true } : '', secs(tQ)],
                plain: 'Antrian selesai · ' + okN + ' manga berhasil' + (errN ? ', ' + errN + ' gagal' : '')
            });
        }
    }
    function queueMove(id, d) {
        const vis = qVisible(QV.tab), i = vis.findIndex(x => x.id === id), k = i + d;
        if (i < 0 || k < 0 || k >= vis.length) return;
        const a = Q.items.indexOf(vis[i]), b = Q.items.indexOf(vis[k]);
        const t = Q.items[a]; Q.items[a] = Q.items[b]; Q.items[b] = t;
        queueSave(); queueRender();
    }
    async function queueRemoveSel() {
        const del = Q.items.filter(x => x.sel && x.status !== 'running' && x.status !== 'done');
        if (!del.length) return;
        if (!(await ddConfirm('Hapus ' + del.length + ' manga terpilih dari antrian?', { title: 'Hapus dari antrian', ok: 'Hapus', danger: true }))) return;
        Q.items = Q.items.filter(x => !(x.sel && x.status !== 'running' && x.status !== 'done'));
        queueRelease(del);
        queueSave(); queueBadge(); queueRender();
    }
    function queueStop() {
        if (!Q.running && !busy) { toast('Tidak ada proses berjalan', 'err'); return; }
        stopAll();
        toast('Menghentikan antrian…', 'busy');
    }
    function queueStatusLabel(st) {
        return ({ pending: 'Menunggu', running: 'Berjalan', done: 'Selesai', error: 'Gagal' })[st] || st;
    }
    // sinkronkan kontrol output (mode / format / nama file / deskripsi / tombol utama)
    function qOutSync() {
        const root = $('dd-q');
        if (!root) return;
        const isCh = QO.mode === 'chapter';
        root.querySelectorAll('[data-mode]').forEach(b => b.classList.toggle('on', b.dataset.mode === QO.mode));
        root.querySelectorAll('[data-fmt]').forEach(b => {
            if (b.dataset.fmt === 'files') b.hidden = !isCh;
            b.classList.toggle('on', b.dataset.fmt === QO.fmt);
        });
        const picks = queueSelJobs();
        const n = picks.length, nCh = picks.reduce((a, j) => a + jobChs(j).length, 0);
        const cr = $('dd-q-comprow'); if (cr) cr.hidden = QO.fmt !== 'pdf';
        root.querySelectorAll('[data-comp]').forEach(b => b.classList.toggle('on', b.dataset.comp === pdfComp));
        const nmw = $('dd-q-namew'); if (nmw) nmw.hidden = QO.mode !== 'merge';
        const nm = $('dd-q-name'); if (nm) nm.placeholder = n > 1 ? 'Gabungan ' + n + ' manga' : 'Otomatis (nama manga + rentang post)';
        const F = QO.fmt === 'zip' ? 'ZIP' : QO.fmt === 'files' ? 'gambar (IMG)' : QO.fmt === 'cbz' ? 'CBZ' : 'PDF';
        let d;
        if (QO.mode === 'merge') {
            d = (n > 1 ? 'Semua post dari ' + n + ' manga digabung jadi 1 ' + F : 'Post manga terpilih digabung jadi 1 ' + F) +
                (QO.fmt === 'zip' ? ' (folder manga › post; dipecah otomatis bila lebih dari ' + zipMax + ' MB).' : ', dengan bookmark per post.');
        } else if (QO.mode === 'manga') {
            d = 'Tiap manga dibuat 1 file ' + F + (n ? ' → ' + n + ' file.' : '.');
        } else {
            d = 'Tiap post dibuat ' + (QO.fmt === 'files' ? 'sebagai gambar terpisah.' : QO.fmt === 'cbz' ? 'sebagai file CBZ “Chapter 01.cbz” di folder nama manga' + (saveMode === 'folder' && dirHandle ? ' (+ cover & details.json), siap untuk Mihon › Local source.' : ' — pilih folder simpan di Pengaturan agar jadi Nama Manga/Chapter 01.cbz.') : 'sebagai file ' + F + ' sendiri.');
        }
        if (QO.fmt === 'pdf' && PDFC[pdfComp]) d += ' Kompresi ' + PDFL[pdfComp] + ': lebar maks ' + PDFC[pdfComp].w + ' px, kualitas ' + Math.round(PDFC[pdfComp].q * 100) + '%.';
        const de = $('dd-q-desc'); if (de) de.textContent = d;
        const run = Q.running || busy;
        const go = $('dd-q-start'), gt = $('dd-q-go-t');
        if (go) go.disabled = run || !n;
        if (gt) gt.textContent = n ? (QO.mode === 'merge' && n > 1 ? 'Gabung & download ' + n + ' manga' : 'Download ' + n + ' manga') + ' · ' + nCh + ' post' : (Q.items.some(x => x.sel && x.status !== 'running' && !jobChs(x).length) ? 'Aktifkan post dulu' : 'Pilih manga dulu');
    }
    const qHue = (t) => { let h = 0; String(t || '').split('').forEach(ch => { h = (h * 31 + ch.charCodeAt(0)) % 360; }); return h; };
    function queueRender() {
        const list = $('dd-q-list');
        if (!list) return;
        queueBadge();
        const run = Q.running || busy;
        const picks = queueSelJobs();
        const nCh = picks.reduce((a, j) => a + jobChs(j).length, 0);
        const isDone = QV.tab === 'done';
        const vis = qVisible(QV.tab), visQ = qVisible('queue');
        const cntQ = Q.items.filter(x => x.status !== 'done' && qMatch(x)).length, cntD = Q.items.filter(x => x.status === 'done' && qMatch(x)).length;
        const tq = $('dd-q-tc-q'), td = $('dd-q-tc-d'); if (tq) tq.textContent = cntQ; if (td) td.textContent = cntD;
        const qb = $('dd-q') && $('dd-q').querySelector('.q-box'); if (qb) qb.classList.toggle('tab-done', isDone);
        $('dd-q').querySelectorAll('[data-tab]').forEach(b => { const on = b.dataset.tab === QV.tab; b.classList.toggle('on', on); b.setAttribute('aria-selected', on ? 'true' : 'false'); });
        const sc = $('dd-q-sclr'); if (sc) sc.hidden = !QV.q;
        const sr = $('dd-q-sres'); if (sr) { sr.hidden = !QV.q; sr.textContent = vis.length + ' hasil'; }
        const cd = $('dd-q-clr-done-t'); if (cd) cd.textContent = QV.q ? 'Hapus hasil pencarian' : 'Hapus semua selesai';
        const cdb = $('dd-q-clr-done'); if (cdb) cdb.disabled = !vis.length;
        const qh = $('dd-q-hint'); if (qh) qh.hidden = visQ.length < 2;
        const hidN = picks.filter(j => !qMatch(j)).length, hid = $('dd-q-hid');
        if (hid) { hid.hidden = !hidN; hid.textContent = hidN + ' tersembunyi oleh pencarian'; }
        const sum = $('dd-q-sum');
        const noCh = Q.items.some(x => x.sel && x.status !== 'running' && !jobChs(x).length);
        if (sum) sum.textContent = picks.length ? picks.length + ' manga · ' + nCh + ' post dipilih' : (noCh ? 'Manga dipilih tapi tidak ada post aktif' : 'Belum ada yang dipilih');
        const all = $('dd-q-all');
        if (all) {
            const sel = visQ.filter(x => x.sel).length;
            all.checked = !!visQ.length && sel === visQ.length;
            all.indeterminate = sel > 0 && sel < visQ.length;
            all.disabled = !visQ.length || run;
        }
        const stopBtn = $('dd-q-stop'); if (stopBtn) stopBtn.hidden = !run;
        const rmSel = $('dd-q-rmsel'); if (rmSel) rmSel.disabled = run || !Q.items.some(x => x.sel && x.status !== 'done');
        qOutSync();
        const st0 = list.scrollTop;
        if (!vis.length) {
            const other = Q.items.filter(x => (x.status === 'done') !== isDone && qMatch(x)).length;
            if (QV.q) {
                list.innerHTML = '<div class="q-empty"><div class="q-empty-ic">' + IC('search') + '</div><b>Tidak ada hasil untuk</b><span>“' + esc(QV.q) + '”</span>' +
                    (other ? '<button type="button" class="q-link" data-go="' + (isDone ? 'queue' : 'done') + '">' + (isDone ? 'Lihat ' + other + ' hasil di tab Antrian' : 'Lihat ' + other + ' hasil di tab Selesai') + '</button>' : '') + '</div>';
                return;
            }
            if (isDone) {
                list.innerHTML = '<div class="q-empty"><div class="q-empty-ic">' + IC('check') + '</div><b>Belum ada manga yang selesai</b>' +
                    '<span>Manga yang selesai di-download pindah ke sini.<br>Dari sini bisa diantrikan ulang atau dihapus.</span></div>';
                return;
            }
            if (Q.items.length) {
                list.innerHTML = '<div class="q-empty"><div class="q-empty-ic">' + IC('check') + '</div><b>Antrian kosong</b><span>Semua manga sudah selesai di-download. Lihat tab Selesai.</span></div>';
                return;
            }
        }
        if (!Q.items.length) {
            list.innerHTML = '<div class="q-empty"><div class="q-empty-ic">' + IC('queue') + '</div><b>Antrian masih kosong</b>' +
                '<span>Buka halaman manga lalu klik <em>Tambah halaman ini</em>.<br>Ulangi di manga lain, lalu pilih manga mana yang mau di-download dan digabung jadi 1 file.</span></div>';
            return;
        }
        list.innerHTML = vis.map((job, idx) => {
            const st = job.status, ro = st === 'done', tot = job.chapters.length, on = jobChs(job).length, eff = jobEff(job).length, open = Q.open.has(job.id), lock = st === 'running', skN = jobChs(job).reduce((a, c) => a + (c.skip ? c.skip.length : 0), 0), edN = jobChs(job).filter(c => c.pre && c.pre.length).length, lostN = jobChs(job).filter(c => c.lost && !(c.pre && c.pre.length)).length;
            const pct = Math.min(100, Math.round((job._done || 0) / (eff || 1) * 100));
            const hue = qHue(job.manga), letter = ((String(job.manga || '').match(/[\p{L}\p{N}]/u) || ['?'])[0]).toUpperCase();
            return '<div class="q-item st-' + st + (job.sel ? ' sel' : '') + (open ? ' open' : '') + '" data-id="' + job.id + '">' +
                '<div class="q-row">' +
                (ro ? '<span class="q-dck" title="Selesai di-download">' + IC('check') + '</span>' : '<label class="q-ck" title="Pilih manga ini"><input type="checkbox" data-a="sel"' + (job.sel ? ' checked' : '') + (lock ? ' disabled' : '') + '></label>') +
                '<div class="q-av" style="--h:' + hue + '"' + (lock || ro || Q.running ? '' : ' draggable="true" title="Seret ke manga lain untuk menggabung semua postnya"') + '>' + esc(letter) + '</div>' +
                '<div class="q-main" data-a="tgl" title="Klik untuk lihat / pilih post">' +
                '<div class="q-title" title="' + esc(job.manga) + '">' + qHl(job.manga) + '</div>' +
                '<div class="q-meta">' +
                (on ? '<span class="q-chip">' + on + (on !== tot ? ' / ' + tot : '') + ' post</span>' : '<span class="q-chip bad">Tidak ada post aktif</span>') +
                (skN ? '<span class="q-chip warn" title="Halaman yang di-uncheck di preview">−' + skN + ' halaman</span>' : '') +
                (edN ? '<span class="q-chip ed" title="Post dengan hasil edit (gabung/split/potong) — hanya tersimpan selama halaman tidak di-refresh">✎ ' + edN + ' diedit</span>' : '') +
                (lostN ? '<span class="q-chip warn" title="Hasil edit hilang karena halaman di-refresh — edit ulang lewat tombol preview">⚠ ' + lostN + ' edit hilang</span>' : '') +
                (ro && job.doneAt ? '<span class="q-chip ok" title="Waktu selesai">' + esc(new Date(job.doneAt).toLocaleString(lang === 'en' ? 'en-GB' : 'id-ID', { day: 'numeric', month: 'short', hour: '2-digit', minute: '2-digit' })) + '</span>' : '') +
                '</div></div>' +
                '<span class="q-pill">' + queueStatusLabel(st) + '</span>' +
                '<div class="q-acts">' +
                (ro ? '<button type="button" class="q-ib q-rq" data-a="rq" title="Antrikan ulang untuk download lagi">' + IC('refresh') + '</button>' : '<button type="button" class="q-ib" data-a="pk0" title="Preview & pilih gambar di panel utama"' + (lock ? ' disabled' : '') + '>' + IC('eye') + '</button>') +
                (ro ? '' : '<span class="q-mv">') +
                (ro ? '' : '<button type="button" class="q-ib" data-a="up" title="Naikkan"' + (idx === 0 ? ' disabled' : '') + '>' + IC('chevron') + '</button>' +
                '<button type="button" class="q-ib q-dn" data-a="down" title="Turunkan"' + (idx === vis.length - 1 ? ' disabled' : '') + '>' + IC('chevron') + '</button>') +
                (ro ? '' : '</span>') +
                '<button type="button" class="q-ib q-tg' + (open ? ' open' : '') + '" data-a="tgl" title="Post">' + IC('chevron') + '</button>' +
                '<button type="button" class="q-ib q-rm" data-a="rm" title="Hapus dari antrian"' + (lock ? ' disabled' : '') + '>' + IC('trash') + '</button>' +
                '</div></div>' +
                (lock ? '<div class="q-pb"><i style="width:' + pct + '%"></i></div><div class="q-prog"><span>' + esc(job.progress || '') + '</span><b>' + pct + '%</b></div>' : '') +
                (!lock && job.err ? '<div class="q-err ' + (st === 'done' ? 'warn' : '') + '">' + esc(job.err) + '</div>' : '') +
                (open ? '<div class="q-chs"><div class="q-chs-h"><b>Posts</b><span>' + on + ' dari ' + tot + ' dipilih</span>' +
                    (ro ? '' : '<button type="button" class="q-link" data-a="chall"' + (lock ? ' disabled' : '') + '>Semua</button>' +
                    '<button type="button" class="q-link" data-a="chnone"' + (lock ? ' disabled' : '') + '>Kosongkan</button>') + '</div>' +
                    '<div class="q-chl">' + job.chapters.map((c, k) =>
                        '<div class="q-chi' + (c.on !== false ? ' on' : '') + (qMergedInto(job, c) ? ' mg' : '') + '" data-k="' + k + '"' + (lock || ro || Q.running ? '' : ' draggable="true"') + '><label><input type="checkbox" data-a="ch" data-k="' + k + '"' + (c.on !== false ? ' checked' : '') + (lock || ro ? ' disabled' : '') + '><i class="q-cn">' + (k + 1) + '</i><span title="' + esc(c.title) + '">' + esc(c.title) + '</span></label>' +
                        (() => { const tg = qMergedInto(job, c); if (tg) return '<em class="q-sk q-mg" title="Gambar post ini dimasukkan ke akhir post #' + (job.chapters.indexOf(tg) + 1) + '">→ #' + (job.chapters.indexOf(tg) + 1) + '</em>'; const n = job.chapters.filter(x => qMergedInto(job, x) === c).length; return n ? '<em class="q-sk q-mg" title="Post lain digabung ke post ini">+' + n + ' digabung</em>' : ''; })() +
                        (c.pre && c.pre.length ? '<em class="q-sk q-ed" title="Post sudah diedit — jumlah halaman yang akan diunduh">✎ ' + c.pre.filter(x => x.checked).length + ' hal.</em>' : (c.lost ? '<em class="q-sk" title="Hasil edit hilang karena halaman di-refresh">⚠ edit hilang</em>' : (c.skip && c.skip.length ? '<em class="q-sk" title="Halaman yang di-uncheck">−' + c.skip.length + ' hal.</em>' : ''))) +
                        (ro ? '' : '<button type="button" class="q-ib sm q-mgb' + (c.mergeTo ? ' on' : '') + '" data-a="mg" data-k="' + k + '" title="' + (c.mergeTo ? 'Pisahkan dari gabungan' : 'Gabung ke post di atasnya (gambarnya dimasukkan ke akhir post itu)') + '"' + (lock || k < 1 && !c.mergeTo ? ' disabled' : '') + '>' + (c.mergeTo ? '↺' : '⤴') + '</button><button type="button" class="q-ib sm" data-a="pk" data-k="' + k + '" title="Preview & pilih gambar di panel utama"' + (lock ? ' disabled' : '') + '>' + IC('eye') + '</button>') + '</div>').join('') +
                    '</div></div>' : '') +
                '</div>';
        }).join('');
        list.scrollTop = st0;
    }
    // Simpan pilihan dari panel utama (mode antrian) ke job: chapter aktif/nonaktif + halaman yang di-uncheck
    function qpvCommit(P) {
        const job = P && P.qjob;
        if (!job || Q.items.indexOf(job) < 0) return;
        const oldUrls = [];
        P.chapters.forEach(c => {
            const jc = job.chapters[c.idx];
            if (!jc || jc.url !== c.url) return;
            const its = P.cache.get(c.url);
            jc.on = !!c.checked;
            // sidebar chapter tersembunyi bila hanya 1 chapter → tidak ada cara mengaktifkannya lagi; ikuti halaman yang tercentang
            if (P.chapters.length < 2 && its && its.length) jc.on = its.some(x => x.checked);

            if (P.dirty && P.dirty.has(c.url) && its) {
                // chapter diedit: simpan daftar halaman final (termasuk hasil edit) — dipakai langsung saat download
                (jc.pre || []).forEach(x => oldUrls.push(x.url));
                jc.pre = its.map(x => ({ url: x.url, w: x.w, h: x.h, checked: !!x.checked, edited: !!x.edited }));
                jc.skip = []; jc.lost = false;
                const pend = its.filter(x => x.edited && !x.checked).length;
                if (pend) toast(pend + ' hasil edit belum dicentang — tidak ikut diunduh');
                if (!its.length || its.every(x => !x.checked)) jc.on = false;
                return;
            }
            const sk = P.skip.get(c.url);
            if (sk) jc.skip = Array.from(sk);
            if (its && its.length && its.every(x => !x.checked)) { jc.on = false; jc.skip = []; }   // semua halaman di-uncheck → chapter dinonaktifkan
        });
        keepRebuild();
        editRevokeOrphans(oldUrls);
        queueSave(); queueBadge(); queueRender();
    }
    // Buka chapter job antrian di panel utama (preview besar + hover + viewer); pilihan disimpan saat panel ditutup / "Simpan"
    function queuePreview(job, k) {
        if (Q.running || busy) { toast('Tunggu proses download selesai dulu', 'err'); return; }
        if (!job.chapters[k]) return;
        const q = $('dd-q');
        if (pv && pv.qjob === job && pv.chapters.length === job.chapters.length) {
            if (q) q.hidden = true;
            pvOpenChapter(k);
            return;
        }
        if (pv) { if (pv.qjob) qpvCommit(pv); pv.qReopen = false; closePanel(); }
        if (q) q.hidden = true;
        openPanel({ qjob: job, cur: k });
    }

    // ---- jendela antrian: geser (tarik judul), ubah ukuran (tepi/sudut), perbesar (klik ganda judul); posisi diingat
    const QW_MIN = { w: 420, h: 380 };
    let qGeom = null, qMax = false, qPrev = null;
    function qFit(g) {
        const vw = window.innerWidth, vh = window.innerHeight;
        const w = clamp(Math.round(g.w), Math.min(QW_MIN.w, vw), vw), h = clamp(Math.round(g.h), Math.min(QW_MIN.h, vh), vh);
        return { w, h, x: clamp(Math.round(g.x), 0, vw - w), y: clamp(Math.round(g.y), 0, vh - h) };
    }
    function qInitGeom() {
        let g = null;
        try { g = JSON.parse(gv('dd_qgeom', '')); } catch (e) {}
        if (!g || !isFinite(g.w) || !isFinite(g.h) || !isFinite(g.x) || !isFinite(g.y)) {
            const w = Math.min(1100, window.innerWidth * 0.96), h = Math.min(820, window.innerHeight * 0.92);
            g = { w, h, x: (window.innerWidth - w) / 2, y: (window.innerHeight - h) / 2 };
        }
        return qFit(g);
    }
    function qApplyGeom() {
        const el = $('dd-q'); if (!el) return;
        const win = el.querySelector('.q-win'), box = el.querySelector('.q-box');
        if (!qGeom) qGeom = qInitGeom();
        const full = window.innerWidth <= 760;
        win.classList.toggle('full', full);
        if (!full) { const s = win.style; s.left = qGeom.x + 'px'; s.top = qGeom.y + 'px'; s.width = qGeom.w + 'px'; s.height = qGeom.h + 'px'; }
        box.classList.toggle('wide', !full && qGeom.w >= 900);
    }
    function qGesture(e, mode) {
        if (window.innerWidth <= 760 || (e.button !== undefined && e.button !== 0)) return;
        const el = $('dd-q'); if (!el) return;
        const box = el.querySelector('.q-box');
        let moved = false;
        const g0 = Object.assign({}, qGeom), sx = e.clientX, sy = e.clientY;
        const vw = window.innerWidth, vh = window.innerHeight, minW = Math.min(QW_MIN.w, vw), minH = Math.min(QW_MIN.h, vh);
        box.classList.add('gest');
        const mv = (ev) => {
            const dx = ev.clientX - sx, dy = ev.clientY - sy, g = Object.assign({}, g0);
            if (!moved && (Math.abs(dx) > 2 || Math.abs(dy) > 2)) { moved = true; qMax = false; qPrev = null; }
            if (!moved) return;
            if (mode === 'move') { g.x = clamp(g0.x + dx, 0, vw - g0.w); g.y = clamp(g0.y + dy, 0, vh - g0.h); }
            else {
                if (mode.indexOf('e') >= 0) g.w = clamp(g0.w + dx, minW, vw - g0.x);
                if (mode.indexOf('w') >= 0) { g.w = clamp(g0.w - dx, minW, g0.x + g0.w); g.x = g0.x + g0.w - g.w; }
                if (mode.indexOf('s') >= 0) g.h = clamp(g0.h + dy, minH, vh - g0.y);
                if (mode.indexOf('n') >= 0) { g.h = clamp(g0.h - dy, minH, g0.y + g0.h); g.y = g0.y + g0.h - g.h; }
            }
            qGeom = g; qApplyGeom();
        };
        const up = () => {
            document.removeEventListener('pointermove', mv, true);
            document.removeEventListener('pointerup', up, true);
            document.removeEventListener('pointercancel', up, true);
            box.classList.remove('gest');
            if (moved) sv('dd_qgeom', JSON.stringify(qGeom));
        };
        document.addEventListener('pointermove', mv, true);
        document.addEventListener('pointerup', up, true);
        document.addEventListener('pointercancel', up, true);
    }
    function qToggleMax() {
        if (window.innerWidth <= 760) return;
        if (qMax) { qGeom = qFit(qPrev || qInitGeom()); qMax = false; }
        else { qPrev = Object.assign({}, qGeom); qGeom = { x: 6, y: 6, w: window.innerWidth - 12, h: window.innerHeight - 12 }; qMax = true; }
        qApplyGeom();
        if (!qMax) sv('dd_qgeom', JSON.stringify(qGeom));
    }
    window.addEventListener('resize', () => { const q = $('dd-q'); if (q && !q.hidden && qGeom) { qGeom = qFit(qGeom); qApplyGeom(); } });

    function queueOpen() {
        let el = $('dd-q');
        if (el) { el.hidden = false; qGeom = qFit(qGeom || qInitGeom()); qApplyGeom(); queueRender(); return; }
        el = document.createElement('div');
        el.id = 'dd-q';
        el.innerHTML =
            '<div class="q-win"><div class="q-box">' +
            '<div class="q-top" title="Tarik untuk menggeser · klik ganda untuk memperbesar">' +
            '<div class="q-logo" role="img" aria-label="Antrian" style="background-image:url(' + LOGO_Q_IMG + ')"></div>' +
            '<div class="q-ht"><b>Antrian download</b><small id="dd-q-count">Kosong</small></div>' +
            '<button type="button" class="q-btn" id="dd-q-add" title="Tambah manga + post dari halaman yang sedang dibuka">' + IC('queue') + '<span>Tambah halaman ini</span></button>' +
            '<button type="button" class="q-ib" id="dd-q-x" title="Tutup (Esc)">' + IC('x') + '</button>' +
            '</div>' +
            '<div class="q-bar">' +
            '<div class="q-tabs" role="tablist">' +
            '<button type="button" role="tab" class="q-tab on" data-tab="queue"><span>Antrian</span><b id="dd-q-tc-q">0</b></button>' +
            '<button type="button" role="tab" class="q-tab" data-tab="done">' + IC('check') + '<span>Selesai</span><b id="dd-q-tc-d">0</b></button>' +
            '</div>' +
            '<div class="q-search">' + IC('search') +
            '<input type="text" id="dd-q-search" placeholder="Cari nama manga…" autocomplete="off" spellcheck="false" maxlength="80">' +
            '<span class="q-sres" id="dd-q-sres" hidden></span>' +
            '<button type="button" class="q-ib" id="dd-q-sclr" title="Hapus pencarian" hidden>' + IC('x') + '</button>' +
            '</div></div>' +
            '<div class="q-sel">' +
            '<label class="q-ck"><input type="checkbox" id="dd-q-all"><span>Pilih semua</span></label>' +
            '<span class="q-sum" id="dd-q-sum">Belum ada yang dipilih</span>' +
            '<span class="q-chip warn q-hid" id="dd-q-hid" hidden></span>' +
            '<span class="q-hint" id="dd-q-hint" hidden>Seret post / avatar manga ke manga lain untuk menggabung</span>' +
            '<button type="button" class="q-link dng" id="dd-q-rmsel">Hapus terpilih</button>' +
            '</div>' +
            '<div class="q-list" id="dd-q-list"></div>' +
            '<div class="q-out">' +
            '<div class="q-sec"><span class="q-ol">Hasil</span><div class="q-seg q-tiles">' +
            '<button type="button" data-mode="merge" title="Semua manga yang dicentang digabung jadi satu file"><b>Gabung jadi 1 file</b><small>Semua manga jadi satu</small></button>' +
            '<button type="button" data-mode="manga" title="Tiap manga satu file"><b>1 file per manga</b><small>Tiap manga terpisah</small></button>' +
            '<button type="button" data-mode="post" title="Tiap post file sendiri"><b>Per post</b><small>Tiap post terpisah</small></button></div></div>' +
            '<div class="q-two">' +
            '<div class="q-sec"><span class="q-ol">Format</span><div class="q-seg">' +
            '<button type="button" data-fmt="pdf">PDF</button>' +
            '<button type="button" data-fmt="zip">ZIP</button>' +
            '<button type="button" data-fmt="files" hidden>IMG</button>' +
            '<button type="button" data-fmt="cbz" title="Nama Manga/Chapter 01.cbz — untuk Mihon (Local source). Otomatis memakai mode Per post">CBZ Mihon</button></div></div>' +
            '<div class="q-sec" id="dd-q-comprow"><span class="q-ol">Kompres</span><div class="q-seg">' +
            [['off', 'Asli'], ['low', 'Ringan'], ['med', 'Sedang'], ['high', 'Kuat']].map(o => '<button type="button" data-comp="' + o[0] + '">' + o[1] + '</button>').join('') + '</div></div>' +
            '</div>' +
            '<div class="q-sec" id="dd-q-namew"><span class="q-ol">Nama file</span><input type="text" class="q-in" id="dd-q-name" maxlength="120" autocomplete="off" spellcheck="false"></div>' +
            '<div class="q-desc" id="dd-q-desc"></div>' +
            '</div>' +
            '<div class="q-foot">' +
            '<button type="button" class="q-ghost dng" id="dd-q-clr-done" title="Hapus semua manga yang sudah selesai dari daftar ini">' + IC('trash') + '<span id="dd-q-clr-done-t">Hapus semua selesai</span></button>' +
            '<button type="button" class="q-ghost dng" id="dd-q-clr-all" title="Kosongkan seluruh antrian">' + IC('trash') + '<span>Kosongkan semua</span></button>' +
            '<span class="q-sp"></span>' +
            '<button type="button" class="q-btn red" id="dd-q-stop" hidden>' + IC('stop') + '<span>Stop</span></button>' +
            '<button type="button" class="q-btn pri" id="dd-q-start">' + IC('download') + '<span id="dd-q-go-t">Pilih manga dulu</span></button>' +
            '</div>' +
            '</div>' + ['n', 's', 'e', 'w', 'ne', 'nw', 'se', 'sw'].map(d => '<i class="rz" data-d="' + d + '"></i>').join('') + '</div>';
        document.body.appendChild(el);
        qGeom = qInitGeom(); qMax = false; qPrev = null; qApplyGeom();
        el.querySelectorAll('.rz').forEach(h => h.addEventListener('pointerdown', (e) => qGesture(e, h.dataset.d)));
        const qTop = el.querySelector('.q-top');
        const qSkip = (e) => e.target.closest && e.target.closest('button, input, a');
        qTop.addEventListener('pointerdown', (e) => { if (!qSkip(e)) qGesture(e, 'move'); });
        qTop.addEventListener('dblclick', (e) => { if (!qSkip(e)) qToggleMax(); });
        $('dd-q-x').onclick = () => { el.hidden = true; };
        el.addEventListener('mousedown', (e) => { if (e.target === el) el.hidden = true; });
        $('dd-q-add').onclick = () => { if (pv && !pv.qjob) queueAddFromPanel(); else queueAddFromPage(); };
        $('dd-q-start').onclick = () => { queueProcess(); };
        $('dd-q-stop').onclick = () => queueStop();
        $('dd-q-clr-done').onclick = () => queueClearFinished();
        el.querySelectorAll('[data-tab]').forEach(b => b.onclick = () => { QV.tab = b.dataset.tab; const l = $('dd-q-list'); if (l) l.scrollTop = 0; queueRender(); });
        const qs = $('dd-q-search');
        qs.addEventListener('input', () => { QV.q = qs.value.trim() ? qs.value : ''; queueRender(); });
        ['keydown', 'keyup', 'keypress'].forEach(t => qs.addEventListener(t, (e) => e.stopPropagation()));
        $('dd-q-sclr').onclick = () => { qs.value = ''; QV.q = ''; queueRender(); qs.focus(); };
        $('dd-q-clr-all').onclick = () => queueClearAll();
        $('dd-q-rmsel').onclick = () => queueRemoveSel();
        $('dd-q-all').onchange = (e) => {
            qVisible('queue').forEach(j => { if (j.status !== 'running') j.sel = e.target.checked; });
            queueSave(); queueRender();
        };
        $('dd-q-name').oninput = (e) => { QO.name = e.target.value; };
        el.querySelectorAll('[data-mode]').forEach(b => b.onclick = () => {
            QO.mode = b.dataset.mode;
            if (QO.mode !== 'chapter' && (QO.fmt === 'files' || QO.fmt === 'cbz')) QO.fmt = 'pdf';
            qoSave(); qOutSync();
        });
        el.querySelectorAll('[data-fmt]').forEach(b => b.onclick = () => { QO.fmt = b.dataset.fmt; if (QO.fmt === 'cbz') QO.mode = 'chapter'; qoSave(); qOutSync(); });
        el.querySelectorAll('[data-comp]').forEach(b => b.onclick = () => setPdfComp(b.dataset.comp));
        const list = $('dd-q-list');
        // drag & drop: seret chapter / avatar manga ke manga lain
        let dnd = null;
        const dndClear = () => list.querySelectorAll('.drop, .drop-b, .drop-a, .dragging').forEach(x => x.classList.remove('drop', 'drop-b', 'drop-a', 'dragging'));
        list.addEventListener('dragstart', (e) => {
            const t = e.target;
            if (!t || !t.closest || Q.running || busy) { if (Q.running || busy) e.preventDefault(); return; }
            const it = t.closest('.q-item'); if (!it) return;
            const id = +it.dataset.id;
            const chi = t.closest('.q-chi'), av = t.closest('.q-av');
            if (chi && chi.getAttribute('draggable')) dnd = { type: 'ch', id, k: +chi.dataset.k, at: -1, el: chi };
            else if (av && av.getAttribute('draggable')) dnd = { type: 'job', id, at: -1, el: it };
            else { e.preventDefault(); return; }
            e.dataTransfer.effectAllowed = 'move';
            try { e.dataTransfer.setData('text/plain', 'dd-queue'); } catch (x) {}
            if (dnd.type === 'job') { try { e.dataTransfer.setDragImage(it.querySelector('.q-row'), 24, 24); } catch (x) {} }
            const el = dnd.el;
            setTimeout(() => { if (dnd) el.classList.add('dragging'); }, 0);
            list.classList.add('dnd');
        });
        list.addEventListener('dragover', (e) => {
            if (!dnd) return;
            const it = e.target.closest && e.target.closest('.q-item');
            if (!it) return;
            const id = +it.dataset.id;
            if (dnd.type === 'job' && id === dnd.id) return;
            e.preventDefault();
            e.dataTransfer.dropEffect = 'move';
            list.querySelectorAll('.drop, .drop-b, .drop-a').forEach(x => x.classList.remove('drop', 'drop-b', 'drop-a'));
            it.classList.add('drop');
            dnd.dst = id; dnd.at = -1;
            if (dnd.type === 'ch') {
                const row = e.target.closest('.q-chi');
                if (row) {
                    const r = row.getBoundingClientRect(), after = e.clientY > r.top + r.height / 2;
                    row.classList.add(after ? 'drop-a' : 'drop-b');
                    dnd.at = +row.dataset.k + (after ? 1 : 0);
                }
            }
        });
        list.addEventListener('dragleave', (e) => {
            const it = e.target.closest && e.target.closest('.q-item');
            if (it && !it.contains(e.relatedTarget)) it.classList.remove('drop');
        });
        list.addEventListener('drop', (e) => {
            if (!dnd) return;
            e.preventDefault();
            const d = dnd; dnd = null;
            dndClear(); list.classList.remove('dnd');
            const it = e.target.closest && e.target.closest('.q-item');
            const dst = it ? +it.dataset.id : d.dst;
            if (!dst) return;
            if (d.type === 'ch') queueMoveChapter(d.id, d.k, dst, d.at);
            else queueMergeJob(d.id, dst);
        });
        list.addEventListener('dragend', () => { dnd = null; dndClear(); list.classList.remove('dnd'); });
        const jobOf = (t) => { const it = t.closest('.q-item'); return it ? Q.items.find(x => x.id === +it.dataset.id) : null; };
        list.addEventListener('click', (e) => {
            const go = e.target.closest('[data-go]');
            if (go) { QV.tab = go.dataset.go; queueRender(); return; }
            const t = e.target.closest('[data-a]');
            if (!t) return;
            const a = t.dataset.a, job = jobOf(t);
            if (!job || a === 'sel' || a === 'ch') return;
            if (t.disabled) return;
            if (a === 'tgl') { if (Q.open.has(job.id)) Q.open.delete(job.id); else Q.open.add(job.id); queueRender(); }
            else if (a === 'up') queueMove(job.id, -1);
            else if (a === 'down') queueMove(job.id, 1);
            else if (a === 'rm') queueRemove(job.id);
            else if (a === 'rq') queueRequeue(job.id);
            else if (a === 'mg') queueToggleMerge(job, +t.dataset.k);
            else if (a === 'pk') queuePreview(job, +t.dataset.k);
            else if (a === 'pk0') { const k = job.chapters.findIndex(c => c.on !== false); queuePreview(job, k < 0 ? 0 : k); }
            else if (a === 'chall' || a === 'chnone') { job.chapters.forEach(c => { c.on = a === 'chall'; }); queueSave(); queueRender(); }
        });
        list.addEventListener('change', (e) => {
            const t = e.target.closest('[data-a]');
            if (!t) return;
            const job = jobOf(t);
            if (!job) return;
            if (t.dataset.a === 'sel') { job.sel = t.checked; queueSave(); queueRender(); }
            else if (t.dataset.a === 'ch') { const c = job.chapters[+t.dataset.k]; if (c) { c.on = t.checked; queueSave(); queueRender(); } }
        });
        queueRender();
    }


    // ------------------------------------------------------------ thumbnail (ringan: diperkecil, lazy-load, antrean)
    let pv = null;
    const TQ = { q: [], run: 0, max: 10 };
    const HV = { order: [] };
    let hoverEl = null, hoverTimer = null, hoverTok = 0, hoverCur = null;

    // Unduh gambar lalu perkecil (sisi terpanjang maxSide) -> object URL. Memori kecil dibanding memuat gambar penuh di <img>.
    async function scaledUrl(url, maxSide, w, h, q) {
        const buf = await withRetry(() => getBuf(url, null, thumbReqs), () => !pv, 'thumbnail');
        const blob = new Blob([buf]);
        if (buf.byteLength < 70000 && (!w || Math.max(w, h) <= maxSide)) return URL.createObjectURL(blob);
        try {
            let bmp;
            const sc = (w && h) ? Math.min(1, maxSide / Math.max(w, h)) : 1;
            if (sc < 1) bmp = await createImageBitmap(blob, { resizeWidth: Math.max(1, Math.round(w * sc)), resizeHeight: Math.max(1, Math.round(h * sc)), resizeQuality: 'medium' });
            else bmp = await createImageBitmap(blob);
            let tw = bmp.width, th = bmp.height;
            const s2 = Math.min(1, maxSide / Math.max(tw, th));
            if (s2 < 1) { tw = Math.max(1, Math.round(tw * s2)); th = Math.max(1, Math.round(th * s2)); }
            const cv = document.createElement('canvas');
            cv.width = tw; cv.height = th;
            cv.getContext('2d').drawImage(bmp, 0, 0, tw, th);
            if (bmp.close) bmp.close();
            const jb = await new Promise(r => cv.toBlob(r, 'image/jpeg', q || 0.72));
            cv.width = cv.height = 0;
            if (jb) return URL.createObjectURL(jb);
        } catch (e) {}
        return URL.createObjectURL(blob);   // fallback: gambar asli
    }
    // Jalur cepat: biarkan browser memuat gambar langsung (<img>) -> memakai cache HTTP dari reader yang baru saja dimuat,
    // tanpa unduh ulang lewat GM_xmlhttpRequest dan tanpa decode + encode ulang. Gagal / timeout -> fallback ke scaledUrl.
    function loadNative(url) {
        return new Promise((res, rej) => {
            const im = new Image();
            let t = 0;
            const fin = (ok) => { clearTimeout(t); im.onload = im.onerror = null; ok ? res(url) : rej(new Error('img')); };
            im.decoding = 'async';
            im.onload = () => fin(true); im.onerror = () => fin(false);
            t = setTimeout(() => { im.src = ''; fin(false); }, 20000);
            im.src = url;
        });
    }
    // loadNative() mengembalikan URL yang SAMA dengan gambarnya (bukan salinan kecil). Untuk gambar hasil edit (blob)
    // itu berarti thumb === url: jangan di-revoke di sini, kalau tidak gambar hasil edit ikut hilang
    // (preview dibuka lagi = "GAGAL DIMUAT", undo juga rusak). Blob milik item hanya dilepas lewat killItem + KEEP.
    function dropThumb(it) {
        if (it.thumb && it.thumb !== it.url) { try { URL.revokeObjectURL(it.thumb); } catch (e) {} }
        it.thumb = null;
    }
    function killItem(it) {
        it.dead = true; tqDel(it);
        dropThumb(it);
        if (it.edited && it.url && String(it.url).startsWith('blob:')) {
            if (!KEEP.has(it.url)) { try { URL.revokeObjectURL(it.url); } catch (e) {} }
            it.url = '';
        }
        dropHv(it);
        it.el = null; it.ts = 0;
    }
    // softKill: bersihkan thumbnail/hover, tapi JANGAN revoke blob URL (dipakai undo)
    function softKillItem(it) {
        if (!it) return;
        it.dead = true; tqDel(it);
        dropThumb(it);
        dropHv(it);
        it.el = null; it.ts = 0;
    }
    function dropHv(it) {
        if (it.hv) { try { URL.revokeObjectURL(it.hv); } catch (e) {} }
        it.hv = null; it.hp = null;
        const k = HV.order.indexOf(it); if (k >= 0) HV.order.splice(k, 1);
    }
    function tqAdd(it) { if (it.ts || it.dead) return; it.ts = 1; TQ.q.push(it); tqPump(); }
    function tqDel(it) { if (it.ts === 1) { it.ts = 0; const k = TQ.q.indexOf(it); if (k >= 0) TQ.q.splice(k, 1); } }
    function tqPump() {
        if (busy || !pv) return;   // saat download berjalan thumbnail ditunda (tidak rebutan bandwidth)
        while (TQ.run < TQ.max && TQ.q.length) {
            const it = TQ.q.shift();
            if (it.ts !== 1 || it.dead) continue;
            it.ts = 2; TQ.run++;
            const tu = thumbOf(it.url);
            loadNative(tu).catch(() => scaledUrl(tu, 360, it.w, it.h, 0.72))
                .catch(e => { if (tu === it.url) throw e; return loadNative(it.url).catch(() => scaledUrl(it.url, 360, it.w, it.h, 0.72)); })   // thumbnail gagal → baru pakai file asli
                .then(u => { it.thumb = u; }, () => { it.tfail = true; log('warn', 'thumb', 'Thumbnail gagal dimuat', it.url); }).then(() => {
                TQ.run--;
                if (it.dead) { dropThumb(it); }
                else { it.ts = 3; paintThumb(it); }
                tqPump();
            });
        }
    }
    function paintThumb(it) {
        const el = it.el;
        if (!el || !el.isConnected) return;
        if (it.thumb) el.firstChild.src = it.thumb; else el.classList.add('bad');
        el.classList.add('rdy');
    }

    // ------------------------------------------------------------ hover preview
    function ensureHover() {
        if (hoverEl) return hoverEl;
        hoverEl = document.createElement('div');
        hoverEl.id = 'dd-hover';
        hoverEl.innerHTML = '<img alt="" draggable="false"><div class="hv-cap"></div>';
        document.body.appendChild(hoverEl);
        return hoverEl;
    }
    function hideHover() {
        clearTimeout(hoverTimer); hoverTimer = null; hoverTok++; hoverCur = null;
        if (hoverEl) { hoverEl.style.display = 'none'; hoverEl.querySelector('img').removeAttribute('src'); }
    }
    function placeHover(rect) {
        if (!hoverEl) return;
        const vw = window.innerWidth, vh = window.innerHeight, m = 10;
        const w = hoverEl.offsetWidth, h = hoverEl.offsetHeight;
        let x = rect.right + 12;
        if (x + w > vw - m) x = rect.left - w - 12;
        x = clamp(x, m, Math.max(m, vw - w - m));
        const y = clamp(rect.top + rect.height / 2 - h / 2, m, Math.max(m, vh - h - m));
        hoverEl.style.left = x + 'px'; hoverEl.style.top = y + 'px';
    }
    function hoverUrl(it) {
        if (it.hv) return Promise.resolve(it.hv);
        if (!it.hp) {
            const side = Math.min(1800, Math.round(hoverSize * 1.6 * Math.min(2, window.devicePixelRatio || 1)));
            const p = scaledUrl(thumbOf(it.url), side, it.w, it.h, 0.85).then(u => {
                if (it.dead) { try { URL.revokeObjectURL(u); } catch (e) {} throw new Error('dead'); }
                it.hv = u; HV.order.push(it);
                if (HV.order.length > 6) { const k = HV.order.findIndex(x => x !== hoverCur && x !== it); if (k >= 0) dropHv(HV.order[k]); }
                return u;
            });
            p.catch(() => { if (it.hp === p) it.hp = null; });
            it.hp = p;
        }
        return it.hp;
    }
    function showHover(it, el, i) {
        if (!hoverOn || !it || !el.isConnected || (pv && pv.drag)) return;
        ensureHover();
        const img = hoverEl.querySelector('img'), cap = hoverEl.querySelector('.hv-cap');
        const maxW = Math.min(hoverSize, window.innerWidth - 40), maxH = Math.min(Math.round(hoverSize * 1.6), window.innerHeight - 90);
        img.style.cssText = '';
        if (it.w && it.h) {
            const sc = Math.min(maxW / it.w, maxH / it.h);
            img.style.width = Math.round(it.w * sc) + 'px'; img.style.height = Math.round(it.h * sc) + 'px';
        } else {
            img.style.maxWidth = maxW + 'px'; img.style.maxHeight = maxH + 'px'; img.style.minWidth = '120px'; img.style.minHeight = '120px';
        }
        if (it.thumb) img.style.backgroundImage = 'url("' + it.thumb + '")';
        cap.textContent = '#' + pad2(i) + (it.w && it.h ? ' · ' + it.w + '×' + it.h : '');
        hoverCur = it;
        const tok = ++hoverTok;
        img.removeAttribute('src');
        hoverEl.style.display = 'block';
        placeHover(el.getBoundingClientRect());
        img.onload = () => { if (tok === hoverTok && hoverEl.style.display === 'block') placeHover(el.getBoundingClientRect()); };
        // gambar asli langsung dari server/cache browser (tampil progresif); kalau gagal baru fallback ke versi diperkecil via GM
        img.onerror = () => {
            img.onerror = null;
            if (tok !== hoverTok) return;
            hoverUrl(it).then(u => { if (tok === hoverTok) img.src = u; }, () => { if (tok === hoverTok && it.thumb && it.thumb !== it.url) img.src = it.thumb; });
        };
        img.src = thumbOf(it.url);
    }
    function scheduleHover(it, el, i) {
        clearTimeout(hoverTimer);
        if (!hoverOn || !it) return;
        hoverTimer = setTimeout(() => showHover(it, el, i), hoverDelay);
    }

    // ------------------------------------------------------------ viewer layar penuh (double-click / klik kanan)
    const VW = { el: null, i: -1, tok: 0, url: null };
    function viewClose() {
        VW.tok++;
        if (VW.el) { VW.el.remove(); VW.el = null; }
        if (VW.url) { try { URL.revokeObjectURL(VW.url); } catch (e) {} VW.url = null; }
        const P = pv;
        if (P && VW.i >= 0 && P.items[VW.i] && P.items[VW.i].el && P.items[VW.i].el.isConnected) P.items[VW.i].el.scrollIntoView({ block: 'nearest' });
        VW.i = -1;
    }
    function viewShow(i) {
        const P = pv;
        if (!P || !VW.el || !P.items[i]) return;
        const it = P.items[i];
        VW.i = i;
        const tok = ++VW.tok;
        const img = VW.el.querySelector('img');
        VW.el.querySelector('.vw-cap').textContent = '#' + pad2(i) + ' / ' + P.items.length + (it.w && it.h ? ' · ' + it.w + '×' + it.h : '');
        VW.el.classList.add('load');
        if (it.thumb) img.src = it.thumb; else img.removeAttribute('src');
        scaledUrl(thumbOf(it.url), 2600, it.w, it.h, 0.9).then(u => {
            if (tok !== VW.tok || !VW.el) { try { URL.revokeObjectURL(u); } catch (e) {} return; }
            if (VW.url) { try { URL.revokeObjectURL(VW.url); } catch (e) {} }
            VW.url = u; img.src = u; VW.el.classList.remove('load');
        }, () => { if (tok === VW.tok && VW.el) VW.el.classList.remove('load'); });
    }
    function viewOpen(i) {
        const P = pv;
        if (!P || !P.items[i]) return;
        hideHover();
        if (VW.el) viewClose();
        const v = document.createElement('div');
        v.id = 'dd-view';
        v.innerHTML = '<img alt="" draggable="false"><div class="vw-cap"></div><button type="button" class="vw-nav l">‹</button><button type="button" class="vw-nav r">›</button><button type="button" class="vw-x">×</button><div class="pv-spin"></div>';
        v.addEventListener('click', (e) => {
            if (e.target.closest('.vw-nav.l')) { viewShow(Math.max(0, VW.i - 1)); return; }
            if (e.target.closest('.vw-nav.r')) { viewShow(Math.min(P.items.length - 1, VW.i + 1)); return; }
            viewClose();
        });
        document.body.appendChild(v);
        VW.el = v;
        viewShow(i);
    }

    // ------------------------------------------------------------ editor gambar (gabung / potong / resize)
    const ED = { el: null, mode: '', idxs: [], bmp: null, rect: null, drag: null, scale: 1, offX: 0, offY: 0, splits: null, geom: null, max: false, prevGeom: null, zoom: 1, ox: 0, oy: 0, fit: 1, auto: true, space: false };
    const ED_MIN = { w: 480, h: 360 };
    function editFitGeom(g) {
        const vw = window.innerWidth, vh = window.innerHeight;
        const w = clamp(Math.round(g.w), Math.min(ED_MIN.w, vw), vw);
        const h = clamp(Math.round(g.h), Math.min(ED_MIN.h, vh), vh);
        return { w, h, x: clamp(Math.round(g.x), 0, Math.max(0, vw - w)), y: clamp(Math.round(g.y), 0, Math.max(0, vh - h)) };
    }
    function editInitGeom() {
        let g = null;
        try { g = JSON.parse(gv('dd_ed_geom', '')); } catch (e) {}
        if (!g || !isFinite(g.w) || !isFinite(g.h) || !isFinite(g.x) || !isFinite(g.y)) {
            const w = Math.min(1400, window.innerWidth * 0.96);
            const h = Math.min(980, window.innerHeight * 0.95);
            g = { w, h, x: (window.innerWidth - w) / 2, y: (window.innerHeight - h) / 2 };
        }
        return editFitGeom(g);
    }
    function editApplyGeom() {
        if (!ED.el) return;
        const win = ED.el.querySelector('.ed-win');
        const box = ED.el.querySelector('.ed-box');
        if (!win || !box || !ED.geom) return;
        const full = window.innerWidth <= 640;
        win.classList.toggle('full', full);
        box.classList.toggle('is-max', !!ED.max);
        if (!full) {
            const g = ED.geom, s = win.style;
            s.left = g.x + 'px'; s.top = g.y + 'px'; s.width = g.w + 'px'; s.height = g.h + 'px';
        } else {
            const s = win.style;
            s.left = '0'; s.top = '0'; s.width = '100%'; s.height = '100%';
        }
        // repaint canvas after size change
        if (ED.mode === 'crop') try { editCropPaint(); } catch (e) {}
        else if (ED.mode === 'split') try { editSplitPaint(); } catch (e) {}
    }
    function editToggleMax() {
        if (window.innerWidth <= 640) return;
        if (ED.max) {
            ED.geom = editFitGeom(ED.prevGeom || editInitGeom());
            ED.max = false;
        } else {
            ED.prevGeom = Object.assign({}, ED.geom);
            ED.geom = { x: 6, y: 6, w: window.innerWidth - 12, h: window.innerHeight - 12 };
            ED.max = true;
        }
        editApplyGeom();
    }
    function editStartGesture(e, mode) {
        if (!ED.el || window.innerWidth <= 640 || (e.button !== undefined && e.button !== 0)) return;
        let moved = false;
        const g0 = Object.assign({}, ED.geom), sx = e.clientX, sy = e.clientY;
        const vw = window.innerWidth, vh = window.innerHeight;
        const minW = Math.min(ED_MIN.w, vw), minH = Math.min(ED_MIN.h, vh);
        const box = ED.el.querySelector('.ed-box');
        if (box) box.classList.add('gest');
        const mv = (ev) => {
            const dx = ev.clientX - sx, dy = ev.clientY - sy;
            const g = Object.assign({}, g0);
            if (!moved && (Math.abs(dx) > 2 || Math.abs(dy) > 2)) {
                moved = true;
                if (ED.max) { ED.max = false; ED.prevGeom = null; }
            }
            if (!moved) return;
            if (mode === 'move') {
                g.x = clamp(g0.x + dx, 0, Math.max(0, vw - g0.w));
                g.y = clamp(g0.y + dy, 0, Math.max(0, vh - g0.h));
            } else {
                if (mode.indexOf('e') >= 0) g.w = clamp(g0.w + dx, minW, vw - g0.x);
                if (mode.indexOf('w') >= 0) { g.w = clamp(g0.w - dx, minW, g0.x + g0.w); g.x = g0.x + g0.w - g.w; }
                if (mode.indexOf('s') >= 0) g.h = clamp(g0.h + dy, minH, vh - g0.y);
                if (mode.indexOf('n') >= 0) { g.h = clamp(g0.h - dy, minH, g0.y + g0.h); g.y = g0.y + g0.h - g.h; }
            }
            ED.geom = g;
            editApplyGeom();
        };
        const up = () => {
            document.removeEventListener('pointermove', mv, true);
            document.removeEventListener('pointerup', up, true);
            document.removeEventListener('pointercancel', up, true);
            if (box) box.classList.remove('gest');
            if (moved) {
                try { sv('dd_ed_geom', JSON.stringify(ED.geom)); } catch (e) {}
            }
        };
        document.addEventListener('pointermove', mv, true);
        document.addEventListener('pointerup', up, true);
        document.addEventListener('pointercancel', up, true);
    }
    function editWireWindow(el) {
        ED.geom = editInitGeom();
        ED.max = false;
        ED.prevGeom = null;
        editApplyGeom();
        el.querySelectorAll('.ed-rz').forEach(h => {
            h.addEventListener('pointerdown', (e) => {
                e.preventDefault(); e.stopPropagation();
                editStartGesture(e, h.dataset.d);
            });
        });
        const top = el.querySelector('.ed-top');
        if (top) {
            const skip = (e) => e.target.closest && e.target.closest('button, input, a, .pv-b, .pv-ib');
            top.addEventListener('pointerdown', (e) => {
                if (!skip(e)) editStartGesture(e, 'move');
            });
            top.addEventListener('dblclick', (e) => {
                if (!skip(e)) { editToggleMax(); e.preventDefault(); }
            });
        }
        // klik backdrop (area gelap di luar jendela) = batal
        el.addEventListener('mousedown', (e) => {
            if (e.target === el) editClose();
        });
    }
    const ED_RZ = ['n', 's', 'e', 'w', 'ne', 'nw', 'se', 'sw'].map(d => '<i class="ed-rz" data-d="' + d + '"></i>').join('');

    // ------------------------------------------------------------ zoom + geser (dipakai editor potong & split)
    const ED_ZOOM = '<div class="ed-zoom" title="Scroll = zoom · Shift / Space / klik tengah + seret = geser">' +
        '<button type="button" id="dd-ed-zo" title="Perkecil (−)">−</button>' +
        '<span class="ed-zl" id="dd-ed-zl">100%</span>' +
        '<button type="button" id="dd-ed-zi" title="Perbesar (+)">+</button>' +
        '<i class="sep"></i>' +
        '<button type="button" id="dd-ed-z1" title="Ukuran asli 100% (1)">1:1</button>' +
        '<button type="button" id="dd-ed-zf" title="Pas layar (0)">Fit</button></div>';
    function editViewReset() { ED.zoom = 1; ED.auto = true; ED.ox = 0; ED.oy = 0; ED.fit = 1; ED.space = false; }
    function editRepaint() {
        if (ED.mode === 'crop') editCropPaint();
        else if (ED.mode === 'split') editSplitPaint();
    }
    // hitung skala/offset lalu gambar HANYA bagian gambar yang terlihat (aman untuk zoom besar)
    function editDrawView() {
        if (!ED.el || !ED.bmp) return null;
        const stage = ED.el.querySelector('.ed-stage');
        const cv = ED.el.querySelector('.ed-cv');
        const bmp = ED.bmp;
        const sw = stage.clientWidth, sh = stage.clientHeight;
        if (!sw || !sh) return null;
        ED.fit = Math.min(sw / bmp.width, sh / bmp.height) * 0.96;
        const sc = ED.fit * ED.zoom;
        const dw = bmp.width * sc, dh = bmp.height * sc;
        const M = 40;   // sisa ruang di tepi saat digeser
        const ox = (ED.auto || dw <= sw) ? (sw - dw) / 2 : clamp(ED.ox, sw - dw - M, M);
        const oy = (ED.auto || dh <= sh) ? (sh - dh) / 2 : clamp(ED.oy, sh - dh - M, M);
        ED.scale = sc; ED.ox = ox; ED.oy = oy; ED.offX = ox; ED.offY = oy;
        const dpr = Math.min(window.devicePixelRatio || 1, 2);
        const pw = Math.round(sw * dpr), ph = Math.round(sh * dpr);
        if (cv.width !== pw || cv.height !== ph) { cv.width = pw; cv.height = ph; }
        const ctx = cv.getContext('2d');
        ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
        ctx.clearRect(0, 0, sw, sh);
        ctx.imageSmoothingEnabled = sc * dpr < 2;   // zoom besar → pixel tajam, bukan blur
        ctx.imageSmoothingQuality = 'high';
        const sx0 = Math.max(0, -ox / sc), sy0 = Math.max(0, -oy / sc);
        const sx1 = Math.min(bmp.width, (sw - ox) / sc), sy1 = Math.min(bmp.height, (sh - oy) / sc);
        if (sx1 > sx0 && sy1 > sy0) {
            ctx.drawImage(bmp, sx0, sy0, sx1 - sx0, sy1 - sy0, ox + sx0 * sc, oy + sy0 * sc, (sx1 - sx0) * sc, (sy1 - sy0) * sc);
        }
        ctx.strokeStyle = 'rgba(255,255,255,.14)';
        ctx.lineWidth = 1;
        ctx.strokeRect(Math.round(ox) - 0.5, Math.round(oy) - 0.5, Math.round(dw) + 1, Math.round(dh) + 1);
        stage.classList.toggle('zoomed', dw > sw + 1 || dh > sh + 1);
        const zl = ED.el.querySelector('#dd-ed-zl');
        if (zl) zl.textContent = Math.round(sc * 100) + '%';
        return { sc, dw, dh, sw, sh };
    }
    // zoom ke level z (relatif terhadap "fit"), titik (cx,cy) di koordinat stage tetap diam
    function editZoomTo(z, cx, cy) {
        if (!ED.el || !ED.bmp) return;
        const stage = ED.el.querySelector('.ed-stage');
        if (cx == null) { cx = stage.clientWidth / 2; cy = stage.clientHeight / 2; }
        z = clamp(z, 1, Math.max(1, 16 / ED.fit));   // maks 1600% dari ukuran asli
        if (Math.abs(z - ED.zoom) < 1e-6) return;
        const old = ED.scale || ED.fit * ED.zoom;
        const ix = (cx - ED.offX) / old, iy = (cy - ED.offY) / old;
        const sc = ED.fit * z;
        ED.zoom = z;
        ED.ox = cx - ix * sc; ED.oy = cy - iy * sc;
        ED.auto = z <= 1.0001;
        editRepaint();
    }
    function editZoomFit() { ED.zoom = 1; ED.auto = true; editRepaint(); }
    function editWireZoom(el) {
        const stage = el.querySelector('.ed-stage');
        const q = (id) => el.querySelector('#' + id);
        q('dd-ed-zi').onclick = () => editZoomTo(ED.zoom * 1.25);
        q('dd-ed-zo').onclick = () => editZoomTo(ED.zoom / 1.25);
        q('dd-ed-zf').onclick = () => editZoomFit();
        q('dd-ed-z1').onclick = () => editZoomTo(1 / ED.fit);
        // scroll = zoom ke arah kursor
        stage.addEventListener('wheel', (e) => {
            if (!ED.bmp) return;
            e.preventDefault();
            const r = stage.getBoundingClientRect();
            let dy = e.deltaY;
            if (e.deltaMode === 1) dy *= 16; else if (e.deltaMode === 2) dy *= 100;
            editZoomTo(ED.zoom * Math.exp(-clamp(dy, -120, 120) * 0.0022), e.clientX - r.left, e.clientY - r.top);
        }, { passive: false });
        stage.addEventListener('mousedown', (e) => { if (e.button === 1) e.preventDefault(); });   // cegah autoscroll klik tengah
        // setelah klik tombol, lepas fokusnya supaya Enter / Space tetap jadi pintasan editor (bukan menekan ulang tombol)
        el.addEventListener('click', (e) => { const b = e.target.closest && e.target.closest('button'); if (b) b.blur(); });
        // geser (pan) + pinch (layar sentuh)
        const pts = new Map();
        let pinch = null;
        const startPan = (e) => {
            const x0 = ED.offX, y0 = ED.offY, sx = e.clientX, sy = e.clientY;
            stage.classList.add('panning');
            const mv = (ev) => {
                if (pinch) return;
                if (ED.zoom > 1.0001) ED.auto = false;
                ED.ox = x0 + ev.clientX - sx; ED.oy = y0 + ev.clientY - sy;
                editRepaint();
            };
            const up = () => {
                document.removeEventListener('pointermove', mv, true);
                document.removeEventListener('pointerup', up, true);
                document.removeEventListener('pointercancel', up, true);
                stage.classList.remove('panning');
            };
            document.addEventListener('pointermove', mv, true);
            document.addEventListener('pointerup', up, true);
            document.addEventListener('pointercancel', up, true);
        };
        stage.addEventListener('pointerdown', (e) => {
            if (!ED.bmp || (e.target.closest && e.target.closest('.ed-zoom'))) return;
            if (e.pointerType === 'touch') {
                pts.set(e.pointerId, { x: e.clientX, y: e.clientY });
                if (pts.size === 2) {
                    ED.drag = null;
                    const [a, b] = Array.from(pts.values());
                    pinch = { d: Math.hypot(a.x - b.x, a.y - b.y), z: ED.zoom };
                    e.preventDefault(); e.stopPropagation();
                    return;
                }
            }
            const mid = e.button === 1;
            if (e.button !== 0 && !mid) return;
            const onObj = !!(e.target.closest && e.target.closest('.ed-line, .ed-ov'));
            if (!(mid || ED.space || e.shiftKey || !onObj)) return;   // klik garis/kotak = edit, selain itu = geser
            e.preventDefault(); e.stopPropagation();
            startPan(e);
        }, true);
        const onPtMove = (e) => {
            if (!pts.has(e.pointerId)) return;
            pts.set(e.pointerId, { x: e.clientX, y: e.clientY });
            if (pinch && pts.size >= 2) {
                const [a, b] = Array.from(pts.values());
                const d = Math.hypot(a.x - b.x, a.y - b.y);
                const r = stage.getBoundingClientRect();
                if (pinch.d > 0) editZoomTo(pinch.z * d / pinch.d, (a.x + b.x) / 2 - r.left, (a.y + b.y) / 2 - r.top);
            }
        };
        const onPtUp = (e) => { pts.delete(e.pointerId); if (pts.size < 2) pinch = null; };
        document.addEventListener('pointermove', onPtMove, true);
        document.addEventListener('pointerup', onPtUp, true);
        document.addEventListener('pointercancel', onPtUp, true);
        // keyboard: + − 0 1 · Space (geser) · Enter (terapkan)
        const onKey = (e) => {
            if (ED.el !== el) return;
            const t = e.target;
            if (/INPUT|TEXTAREA|SELECT/.test((t && t.tagName) || '')) return;
            if (e.type === 'keyup') {
                if (e.code === 'Space') { ED.space = false; stage.classList.remove('spacepan'); }
                return;
            }
            if (e.ctrlKey || e.metaKey || e.altKey) return;
            const k = e.key;
            if (k === ' ') {
                if (t && t.tagName === 'BUTTON') t.blur();   // jangan ikut menekan tombol yang sedang fokus
                ED.space = true; stage.classList.add('spacepan');
            }
            else if (k === '+' || k === '=') editZoomTo(ED.zoom * 1.25);
            else if (k === '-' || k === '_') editZoomTo(ED.zoom / 1.25);
            else if (k === '0') editZoomFit();
            else if (k === '1') editZoomTo(1 / ED.fit);
            else if (k === 'Enter') {
                if (t && t.tagName === 'BUTTON') return;
                const ok = el.querySelector('#dd-ed-ok');
                if (ok) ok.click();
            }
            else return;
            e.preventDefault(); e.stopPropagation();
        };
        document.addEventListener('keydown', onKey, true);
        document.addEventListener('keyup', onKey, true);
        // ukuran stage berubah (resize jendela, panel presisi muncul/hilang) → gambar ulang
        let ro = null, raf = 0;
        if (typeof ResizeObserver === 'function') {
            ro = new ResizeObserver(() => {
                if (raf) return;
                raf = requestAnimationFrame(() => { raf = 0; if (ED.el === el) editRepaint(); });
            });
            ro.observe(stage);
        }
        el._ddZoomOff = () => {
            document.removeEventListener('pointermove', onPtMove, true);
            document.removeEventListener('pointerup', onPtUp, true);
            document.removeEventListener('pointercancel', onPtUp, true);
            document.removeEventListener('keydown', onKey, true);
            document.removeEventListener('keyup', onKey, true);
            if (ro) ro.disconnect();
            if (raf) cancelAnimationFrame(raf);
        };
    }


    async function loadBitmap(url) {
        const buf = await withRetry(() => getBuf(url), () => !pv || abortFlag, 'edit');
        return createImageBitmap(new Blob([buf]));
    }
    async function canvasToItem(cv, chUrl, quality) {
        const q = quality == null ? 0.92 : quality;
        const jb = await new Promise(r => cv.toBlob(r, 'image/jpeg', q));
        if (!jb) throw new Error('Gagal mengekspor gambar');
        const url = URL.createObjectURL(jb);
        return {
            url, w: cv.width, h: cv.height, ch: chUrl, checked: false,
            ts: 0, thumb: null, hv: null, hp: null, el: null, dead: false, tfail: false, edited: true
        };
    }
    // ------------------------------------------------------------ undo edit (Ctrl+Z)
    const UNDO = { stack: [], max: 40 };
    function editSnapItems(items) {
        return (items || []).map(it => ({
            url: it.url, w: it.w, h: it.h, ch: it.ch,
            checked: !!it.checked, edited: !!it.edited
        }));
    }
    function editLiveBlobUrls() {
        const s = new Set();
        const add = (it) => { if (it && it.url && String(it.url).startsWith('blob:')) s.add(it.url); };
        if (pv) {
            (pv.items || []).forEach(add);
            if (pv.cache) pv.cache.forEach(arr => (arr || []).forEach(add));
        }
        UNDO.stack.forEach(e => { (e.items || []).forEach(add); if (e.other) (e.other.items || []).forEach(add); });
        KEEP.forEach(u => s.add(u));   // hasil edit yang dipakai antrian
        return s;
    }
    function editRevokeOrphans(candidates) {
        const live = editLiveBlobUrls();
        (candidates || []).forEach(u => {
            if (u && String(u).startsWith('blob:') && !live.has(u)) {
                try { URL.revokeObjectURL(u); } catch (e) {}
            }
        });
    }
    function editClearUndo() {
        const urls = [];
        UNDO.stack.forEach(e => { (e.items || []).concat(e.other ? (e.other.items || []) : []).forEach(it => { if (it && it.url) urls.push(it.url); }); });
        UNDO.stack = [];
        editRevokeOrphans(urls);
        try {
            const b = $('dd-pv-undo');
            if (b) { b.disabled = true; b.title = 'Kembalikan edit terakhir (Ctrl+Z)'; }
        } catch (e) {}
    }
    function editPushUndo(label, extra) {   // extra: { other: { chUrl, items } (chapter kedua), skips: { chUrl: [url] } }
        const P = pv;
        if (!P) return;
        const ch = P.chapters[P.cur];
        UNDO.stack.push({
            label: label || 'edit',
            chUrl: ch ? ch.url : '',
            items: editSnapItems(P.items),
            other: (extra && extra.other) || null,
            skips: (extra && extra.skips) || null
        });
        while (UNDO.stack.length > UNDO.max) {
            const old = UNDO.stack.shift();
            editRevokeOrphans((old.items || []).concat(old.other ? (old.other.items || []) : []).map(it => it.url));
        }
        try {
            const b = $('dd-pv-undo');
            if (b) {
                b.disabled = false;
                b.title = 'Kembalikan: ' + (label || 'edit') + ' (Ctrl+Z)';
            }
        } catch (e) {}
    }
    function editUndo() {
        const P = pv;
        if (!P || busy) { toast('Tidak bisa undo sekarang', 'err'); return; }
        if (ED.el) { toast('Tutup editor dulu, lalu Ctrl+Z', 'err'); return; }
        if (!UNDO.stack.length) { toast('Tidak ada edit yang bisa dikembalikan', 'err'); return; }
        const entry = UNDO.stack.pop();
        const cur = P.chapters[P.cur];
        if (entry.chUrl && cur && norm(entry.chUrl) !== norm(cur.url)) {
            toast('Undo hanya untuk post yang sama', 'err');
            editRevokeOrphans((entry.items || []).map(it => it.url));
            const b = $('dd-pv-undo');
            if (b) b.disabled = !UNDO.stack.length;
            return;
        }
        const beforeUrls = (P.items || []).map(it => it.url).filter(u => u && String(u).startsWith('blob:'));
        if (entry.other) {   // undo pindah antar chapter: kembalikan juga daftar chapter tujuan + pilihan skip
            const oc = P.chapters.find(c => c.url === entry.other.chUrl);
            if (oc) {
                const old = P.cache.get(oc.url) || [];
                old.forEach(it => { if (it.url && String(it.url).startsWith('blob:')) beforeUrls.push(it.url); softKillItem(it); });
                P.cache.set(oc.url, entry.other.items.map(s => ({
                    url: s.url, w: s.w, h: s.h, ch: s.ch,
                    checked: !!s.checked, edited: !!s.edited,
                    ts: 0, thumb: null, hv: null, hp: null, el: null, dead: false, tfail: false
                })));
            }
        }
        if (entry.skips) Object.keys(entry.skips).forEach(u => P.skip.set(u, new Set(entry.skips[u])));
        P.items.forEach(softKillItem);
        P.items = (entry.items || []).map(s => ({
            url: s.url, w: s.w, h: s.h, ch: s.ch,
            checked: !!s.checked, edited: !!s.edited,
            ts: 0, thumb: null, hv: null, hp: null, el: null, dead: false, tfail: false
        }));
        if (cur) P.cache.set(cur.url, P.items);
        editRevokeOrphans(beforeUrls);
        pvRender(true);
        pvUpdate();
        pvMergeRefresh();
        const b = $('dd-pv-undo');
        if (b) {
            b.disabled = !UNDO.stack.length;
            b.title = UNDO.stack.length
                ? ('Kembalikan: ' + (UNDO.stack[UNDO.stack.length - 1].label || 'edit') + ' (Ctrl+Z)')
                : 'Kembalikan edit terakhir (Ctrl+Z)';
        }
        log('ok', 'edit', 'Undo: ' + (entry.label || 'edit') + ' · ' + P.items.length + ' halaman');
        toast('Dikembalikan: ' + (entry.label || 'edit'), 'ok');
    }

    function editClose() {
        if (ED.el && ED.el._ddZoomOff) { try { ED.el._ddZoomOff(); } catch (e) {} }
        window.removeEventListener('resize', editCropPaint);
        window.removeEventListener('resize', editSplitPaint);
        if (ED.el && ED.el._ddKey) {
            try { document.removeEventListener('keydown', ED.el._ddKey, true); } catch (e) {}
        }
        if (ED.bmp && ED.bmp.close) try { ED.bmp.close(); } catch (e) {}
        ED.bmp = null; ED.rect = null; ED.drag = null; ED.idxs = []; ED.splits = null; ED.selLine = null;
        ED.geom = null; ED.max = false; ED.prevGeom = null;
        editViewReset();
        if (ED.el) { ED.el.remove(); ED.el = null; }
        ED.mode = '';
    }
    function editSelIdx() {
        const P = pv;
        if (!P) return [];
        return P.items.map((it, i) => it.checked ? i : -1).filter(i => i >= 0);
    }
    async function editDeleteSelected() {
        const P = pv;
        if (!P || busy) return;
        const idxs = editSelIdx();
        if (!idxs.length) { toast('Pilih halaman yang mau dihapus', 'err'); return; }
        if (idxs.length >= P.items.length) {
            if (!(await ddConfirm('Hapus SEMUA ' + idxs.length + ' halaman? Daftar akan kosong.', { title: 'Hapus semua halaman', ok: 'Hapus semua', danger: true })) || pv !== P) return;
        } else if (idxs.length > 5) {
            if (!(await ddConfirm('Hapus ' + idxs.length + ' halaman terpilih dari daftar?', { title: 'Hapus halaman', ok: 'Hapus', danger: true })) || pv !== P) return;
        }
        editReplace(idxs, [], 'hapus ' + idxs.length + ' halaman');
        log('ok', 'edit', 'Hapus ' + idxs.length + ' halaman dari daftar');
        toast('Dihapus: ' + idxs.length + ' halaman', 'ok');
    }
    // Ganti item di indeks idxs (urut naik) dengan satu/lebih item baru; jaga cache & skip
    function editReplace(idxs, news, label) {
        const P = pv;
        if (!P || !idxs.length) return;
        const sorted = idxs.slice().sort((a, b) => a - b);
        const first = sorted[0];
        const remove = new Set(sorted);
        // simpan state sebelum ubah (untuk Ctrl+Z)
        editPushUndo(label || 'edit');
        // hasil edit: tidak dicentang (pilihan bersih untuk edit berikutnya); bila fitur dimatikan, mode antrian mencentang hasilnya
        news.forEach(n => { n.checked = editUnsel ? false : !!P.qjob; });
        if (news.some(n => n.checked)) pvChOn(P.chapters[P.cur] && P.chapters[P.cur].url);
        sorted.forEach(i => { if (P.items[i]) softKillItem(P.items[i]); });
        const next = [];
        P.items.forEach((it, i) => { if (!remove.has(i)) next.push(it); });
        // sisipkan hasil di posisi first
        next.splice(first, 0, ...news);
        P.items = next;
        // update cache chapter aktif
        const ch = P.chapters[P.cur];
        if (ch) { P.cache.set(ch.url, next); if (P.dirty) P.dirty.add(ch.url); }
        pvRender(true);
        pvUpdate();
        pvMergeRefresh();
        if (P.qjob && news.length) pvStatus(editUnsel ? 'Pilihan dibatalkan setelah edit · centang halaman yang mau ikut diunduh' : 'Hasil edit dicentang · centang lagi halaman lain yang mau ikut diunduh', 'ok');
    }
    async function editDoMerge() {
        const P = pv;
        if (!P) return;
        const idxs = editSelIdx();
        if (idxs.length < 2) { toast('Pilih minimal 2 halaman untuk digabung', 'err'); return; }
        // pakai urutan indeks (bukan hanya yang dicentang acak) — sort
        idxs.sort((a, b) => a - b);
        toast('Menggabungkan ' + idxs.length + ' halaman…', 'busy');
        const t0 = performance.now();
        try {
            const bmps = [];
            for (const i of idxs) {
                const it = P.items[i];
                bmps.push(await loadBitmap(it.url));
            }
            let tw = Math.max(...bmps.map(b => b.width));
            let th = bmps.reduce((s, b) => s + b.height, 0);
            // batasi canvas ekstrem
            const maxSide = 16000;
            if (tw > maxSide || th > maxSide) {
                const sc = Math.min(maxSide / tw, maxSide / th);
                tw = Math.max(1, Math.round(tw * sc));
                th = Math.max(1, Math.round(th * sc));
            }
            const cv = document.createElement('canvas');
            cv.width = tw; cv.height = th;
            const ctx = cv.getContext('2d');
            ctx.fillStyle = '#fff';
            ctx.fillRect(0, 0, tw, th);
            let y = 0;
            const maxW = tw;
            for (const b of bmps) {
                const sc = maxW / b.width;
                const dw = maxW, dh = Math.round(b.height * sc);
                ctx.drawImage(b, 0, y, dw, dh);
                y += dh;
                if (b.close) b.close();
            }
            const chUrl = P.chapters[P.cur] ? P.chapters[P.cur].url : '';
            const neu = await canvasToItem(cv, chUrl, 0.92);
            cv.width = cv.height = 0;
            editReplace(idxs, [neu], 'gabung vertikal (' + idxs.length + '→1)');
            log('ok', 'edit', 'Gabung vertikal: ' + idxs.length + ' → 1 (' + neu.w + '×' + neu.h + ') · ' + secs(t0));
            toast('Berhasil digabung (' + neu.w + '×' + neu.h + ')', 'ok');
        } catch (e) {
            log('err', 'edit', 'Gabung gagal: ' + (e && e.message));
            toast('Gabung gagal: ' + (e && e.message), 'err');
        }
    }
    async function editDoResize(maxW, maxH) {
        const P = pv;
        if (!P) return;
        const idxs = editSelIdx();
        if (!idxs.length) { toast('Pilih minimal 1 halaman', 'err'); return; }
        maxW = Math.max(64, int(maxW, 1600));
        maxH = Math.max(64, int(maxH, 2400));
        toast('Resize ' + idxs.length + ' halaman…', 'busy');
        const t0 = performance.now();
        try {
            const news = [];
            const sorted = idxs.slice().sort((a, b) => a - b);
            for (const i of sorted) {
                const it = P.items[i];
                const bmp = await loadBitmap(it.url);
                const sc = Math.min(1, maxW / bmp.width, maxH / bmp.height);
                const cw = Math.max(1, Math.round(bmp.width * sc));
                const ch = Math.max(1, Math.round(bmp.height * sc));
                const cv = document.createElement('canvas');
                cv.width = cw; cv.height = ch;
                cv.getContext('2d').drawImage(bmp, 0, 0, cw, ch);
                if (bmp.close) bmp.close();
                const chUrl = it.ch || (P.chapters[P.cur] && P.chapters[P.cur].url) || '';
                news.push(await canvasToItem(cv, chUrl, 0.92));
                cv.width = cv.height = 0;
            }
            editReplace(sorted, news, 'resize ' + sorted.length + ' halaman');
            log('ok', 'edit', 'Resize: ' + sorted.length + ' halaman · max ' + maxW + '×' + maxH + ' · ' + secs(t0));
            toast('Resize selesai: ' + sorted.length + ' halaman', 'ok');
        } catch (e) {
            log('err', 'edit', 'Resize gagal: ' + (e && e.message));
            toast('Resize gagal: ' + (e && e.message), 'err');
        }
    }
    function editCropPaint() {
        if (!ED.el || !ED.bmp) return;
        const v = editDrawView();
        if (!v) return;
        const overlay = ED.el.querySelector('.ed-ov');
        const bmp = ED.bmp, sc = v.sc;
        // crop rect in image coords (natural)
        if (!ED.rect) ED.rect = { x: 0, y: 0, w: bmp.width, h: bmp.height };
        const r = ED.rect;
        overlay.style.left = (ED.offX + r.x * sc) + 'px';
        overlay.style.top = (ED.offY + r.y * sc) + 'px';
        overlay.style.width = (r.w * sc) + 'px';
        overlay.style.height = (r.h * sc) + 'px';
        const info = ED.el.querySelector('.ed-info');
        if (info) info.textContent = Math.round(r.w) + ' × ' + Math.round(r.h) + ' px · sumber ' + bmp.width + '×' + bmp.height;
    }
    async function editApplyCrop() {
        if (!ED.bmp || !ED.rect) return;
        const r = ED.rect;
        const x = Math.max(0, Math.round(r.x));
        const y = Math.max(0, Math.round(r.y));
        const w = Math.max(1, Math.round(r.w));
        const h = Math.max(1, Math.round(r.h));
        const cv = document.createElement('canvas');
        cv.width = w; cv.height = h;
        cv.getContext('2d').drawImage(ED.bmp, x, y, w, h, 0, 0, w, h);
        const P = pv;
        const chUrl = P && P.chapters[P.cur] ? P.chapters[P.cur].url : '';
        const neu = await canvasToItem(cv, chUrl, 0.92);
        cv.width = cv.height = 0;
        const idxs = ED.idxs.slice();
        editClose();
        editReplace(idxs, [neu], 'potong ' + w + '×' + h);
        log('ok', 'edit', 'Potong: ' + w + '×' + h);
        toast('Dipotong: ' + w + '×' + h, 'ok');
    }
    function editOpenCrop() {
        const P = pv;
        if (!P || busy) return;
        const idxs = editSelIdx();
        if (idxs.length !== 1) { toast('Pilih tepat 1 halaman untuk dipotong', 'err'); return; }
        const i = idxs[0];
        const it = P.items[i];
        editClose();
        hideHover(); viewClose();
        const el = document.createElement('div');
        el.id = 'dd-edit';
        el.innerHTML =
            '<div class="ed-win"><div class="ed-box">' +
            '<div class="ed-top" title="Seret untuk memindahkan · klik 2× untuk memperbesar / mengembalikan"><b>Potong gambar</b><span class="ed-info">Memuat…</span>' +
            '<span class="ed-tools"><button type="button" class="pv-b" id="dd-ed-reset" title="Kembalikan kotak ke seluruh gambar">Reset</button></span>' +
            '<span class="ed-acts"><button type="button" class="pv-b pri" id="dd-ed-ok" title="Terapkan (Enter)">' + IC('check') + '<span>Terapkan</span></button>' +
            '<button type="button" class="pv-ib" id="dd-ed-x" title="Batal (Esc)">' + IC('x') + '</button></span></div>' +
            '<div class="ed-stage"><canvas class="ed-cv"></canvas><div class="ed-ov">' +
            '<i data-h="nw"></i><i data-h="n"></i><i data-h="ne"></i><i data-h="e"></i>' +
            '<i data-h="se"></i><i data-h="s"></i><i data-h="sw"></i><i data-h="w"></i></div>' + ED_ZOOM + '</div>' +
            '<div class="ed-hint"><b>Scroll</b> zoom · <b>seret area kosong</b> / <kbd>Shift</kbd>+seret / <kbd>Space</kbd>+seret = geser · seret kotak/sudut = atur potongan (area luar dibuang) · <kbd>+</kbd> <kbd>−</kbd> <kbd>0</kbd> fit <kbd>1</kbd> 100% · <kbd>Enter</kbd> terapkan · <kbd>Esc</kbd> batal</div>' +
            '</div>' + ED_RZ + '</div>';
        document.body.appendChild(el);
        ED.el = el; ED.mode = 'crop'; ED.idxs = [i]; ED.rect = null;
        editViewReset();
        editWireWindow(el);
        editWireZoom(el);
        $('dd-ed-x').onclick = editClose;
        $('dd-ed-reset').onclick = () => { if (ED.bmp) { ED.rect = { x: 0, y: 0, w: ED.bmp.width, h: ED.bmp.height }; editCropPaint(); } };
        $('dd-ed-ok').onclick = () => { editApplyCrop().catch(e => toast('Potong gagal: ' + e.message, 'err')); };
        // drag crop
        const ov = el.querySelector('.ed-ov');
        const onMove = (ev) => {
            if (!ED.drag || !ED.bmp) return;
            const sc = ED.scale || 1;
            const dx = (ev.clientX - ED.drag.sx) / sc;
            const dy = (ev.clientY - ED.drag.sy) / sc;
            const r0 = ED.drag.r0, h = ED.drag.handle;
            let x = r0.x, y = r0.y, w = r0.w, ht = r0.h;
            if (h === 'move') { x = r0.x + dx; y = r0.y + dy; }
            else {
                if (h.indexOf('e') >= 0) w = r0.w + dx;
                if (h.indexOf('s') >= 0) ht = r0.h + dy;
                if (h.indexOf('w') >= 0) { x = r0.x + dx; w = r0.w - dx; }
                if (h.indexOf('n') >= 0) { y = r0.y + dy; ht = r0.h - dy; }
            }
            // normalize & clamp
            if (w < 8) { if (h.indexOf('w') >= 0) x = r0.x + r0.w - 8; w = 8; }
            if (ht < 8) { if (h.indexOf('n') >= 0) y = r0.y + r0.h - 8; ht = 8; }
            if (x < 0) { if (h === 'move') {} else w += x; x = 0; }
            if (y < 0) { if (h === 'move') {} else ht += y; y = 0; }
            if (x + w > ED.bmp.width) { if (h === 'move') x = ED.bmp.width - w; else w = ED.bmp.width - x; }
            if (y + ht > ED.bmp.height) { if (h === 'move') y = ED.bmp.height - ht; else ht = ED.bmp.height - y; }
            x = clamp(x, 0, ED.bmp.width - 8);
            y = clamp(y, 0, ED.bmp.height - 8);
            w = clamp(w, 8, ED.bmp.width - x);
            ht = clamp(ht, 8, ED.bmp.height - y);
            ED.rect = { x, y, w, h: ht };
            editCropPaint();
        };
        const onUp = () => {
            ED.drag = null;
            document.removeEventListener('pointermove', onMove, true);
            document.removeEventListener('pointerup', onUp, true);
        };
        ov.addEventListener('pointerdown', (ev) => {
            const handle = (ev.target.dataset && ev.target.dataset.h) || 'move';
            ED.drag = { sx: ev.clientX, sy: ev.clientY, r0: Object.assign({}, ED.rect), handle };
            document.addEventListener('pointermove', onMove, true);
            document.addEventListener('pointerup', onUp, true);
            ev.preventDefault();
        });
        window.addEventListener('resize', editCropPaint);
        const oldClose = editClose;
        // load image
        loadBitmap(it.url).then(bmp => {
            if (ED.el !== el) { if (bmp.close) bmp.close(); return; }
            ED.bmp = bmp;
            ED.rect = { x: 0, y: 0, w: bmp.width, h: bmp.height };
            editCropPaint();
        }).catch(e => {
            toast('Gagal memuat gambar: ' + e.message, 'err');
            editClose();
        });
    }
    function editOpenMergeMenu() {   // hanya mode vertikal (atas → bawah): langsung gabung tanpa menu pilihan
        const n = editSelIdx().length;
        if (n < 2) { toast('Pilih minimal 2 halaman untuk digabung', 'err'); return; }
        const old = $('dd-ed-menu'); if (old) old.remove();
        editDoMerge();
    }
    async function editOpenResizeDlg() {
        const n = editSelIdx().length;
        if (!n) { toast('Pilih minimal 1 halaman', 'err'); return; }
        const r = await ddFields('Aspek rasio tetap', [{ k: 'w', label: 'Lebar maksimum (px)', value: '1600' }, { k: 'h', label: 'Tinggi maksimum (px)', value: '2400' }], { title: 'Ubah ukuran halaman', ok: 'Terapkan ukuran' });
        if (!r) return;
        editDoResize(r.w, r.h);
    }
    // ---- split: garis potong horizontal / vertikal bisa digeser (mirip crop)
    function editSplitNorm() {
        if (!ED.splits) return;
        const uniq = (arr) => Array.from(new Set(arr.map(v => +(+v).toFixed(5)))).filter(v => v > 0.02 && v < 0.98).sort((a, b) => a - b);
        ED.splits.h = uniq(ED.splits.h);
        ED.splits.v = uniq(ED.splits.v);
    }
    function editSplitCells() {
        // hasilkan daftar rect {x,y,w,h} dalam px natural, kiri→kanan lalu atas→bawah
        if (!ED.bmp || !ED.splits) return [];
        const W = ED.bmp.width, H = ED.bmp.height;
        const xs = [0].concat(ED.splits.v.map(f => Math.round(f * W))).concat([W]);
        const ys = [0].concat(ED.splits.h.map(f => Math.round(f * H))).concat([H]);
        // pastikan monotonic
        for (let i = 1; i < xs.length; i++) if (xs[i] <= xs[i - 1]) xs[i] = xs[i - 1] + 1;
        for (let i = 1; i < ys.length; i++) if (ys[i] <= ys[i - 1]) ys[i] = ys[i - 1] + 1;
        xs[xs.length - 1] = W; ys[ys.length - 1] = H;
        const cells = [];
        for (let yi = 0; yi < ys.length - 1; yi++) {
            for (let xi = 0; xi < xs.length - 1; xi++) {
                const x = xs[xi], y = ys[yi], w = xs[xi + 1] - x, h = ys[yi + 1] - y;
                if (w >= 4 && h >= 4) cells.push({ x, y, w, h });
            }
        }
        return cells;
    }
    function editSplitPaint() {
        if (!ED.el || !ED.bmp || ED.mode !== 'split') return;
        const lines = ED.el.querySelector('.ed-lines');
        const bmp = ED.bmp;
        const v = editDrawView();
        if (!v) return;
        const sc = v.sc, dw = v.dw, dh = v.dh;
        // gambar garis + label nomor sel
        lines.innerHTML = '';
        lines.style.left = ED.offX + 'px';
        lines.style.top = ED.offY + 'px';
        lines.style.width = dw + 'px';
        lines.style.height = dh + 'px';
        const sel = ED.selLine;
        const cells = editSplitCells();
        // warna selang-seling per bagian supaya hasil potongan kelihatan jelas
        if (cells.length > 1) {
            cells.forEach((c, i) => {
                const bg = document.createElement('div');
                bg.className = 'ed-cellbg' + (i % 2 ? ' alt' : '');
                bg.style.left = (c.x * sc) + 'px';
                bg.style.top = (c.y * sc) + 'px';
                bg.style.width = (c.w * sc) + 'px';
                bg.style.height = (c.h * sc) + 'px';
                lines.appendChild(bg);
            });
        }
        ED.splits.h.forEach((f, i) => {
            const y = Math.round(f * dh);
            const px = Math.round(f * bmp.height);
            const el = document.createElement('div');
            el.className = 'ed-line h' + (sel && sel.axis === 'h' && sel.i === i ? ' on' : '');
            el.dataset.axis = 'h';
            el.dataset.i = i;
            el.style.top = y + 'px';
            el.innerHTML = '<span></span>' + (sel && sel.axis === 'h' && sel.i === i ? '<div class="ed-px">Y ' + px + ' px · ' + (f * 100).toFixed(1) + '%</div>' : '');
            const lab = el.querySelector('.ed-px');
            if (lab) lab.style.left = Math.max(10, -ED.offX + 10) + 'px';   // label tetap terlihat saat di-zoom
            lines.appendChild(el);
        });
        ED.splits.v.forEach((f, i) => {
            const x = Math.round(f * dw);
            const px = Math.round(f * bmp.width);
            const el = document.createElement('div');
            el.className = 'ed-line v' + (sel && sel.axis === 'v' && sel.i === i ? ' on' : '');
            el.dataset.axis = 'v';
            el.dataset.i = i;
            el.style.left = x + 'px';
            el.innerHTML = '<span></span>' + (sel && sel.axis === 'v' && sel.i === i ? '<div class="ed-px">X ' + px + ' px · ' + (f * 100).toFixed(1) + '%</div>' : '');
            const lab = el.querySelector('.ed-px');
            if (lab) lab.style.top = Math.max(10, -ED.offY + 10) + 'px';
            lines.appendChild(el);
        });
        // nomor sel + ukuran px (label ikut "menempel" di dalam bagian yang sedang terlihat)
        cells.forEach((c, i) => {
            const tag = document.createElement('div');
            tag.className = 'ed-celln';
            tag.innerHTML = String(i + 1) + '<small>' + c.w + '×' + c.h + '</small>';
            const x0 = c.x * sc, y0 = c.y * sc;
            const lx = clamp(-ED.offX, x0, Math.max(x0, (c.x + c.w) * sc - 70));
            const ly = clamp(-ED.offY, y0, Math.max(y0, (c.y + c.h) * sc - 34));
            tag.style.left = (lx + 6) + 'px';
            tag.style.top = (ly + 6) + 'px';
            lines.appendChild(tag);
        });
        const info = ED.el.querySelector('.ed-info');
        if (info) {
            info.textContent = cells.length + ' bagian · H:' + ED.splits.h.length + ' V:' + ED.splits.v.length +
                ' · sumber ' + bmp.width + '×' + bmp.height;
        }
        const cnt = ED.el.querySelector('#dd-ed-parts');
        if (cnt) cnt.textContent = cells.length + ' bagian';
        // panel presisi
        const fine = ED.el.querySelector('#dd-ed-fine');
        const fineIn = ED.el.querySelector('#dd-ed-px');
        const fineLab = ED.el.querySelector('#dd-ed-fine-lab');
        if (fine && fineIn && fineLab) {
            if (sel && ((sel.axis === 'h' && ED.splits.h[sel.i] != null) || (sel.axis === 'v' && ED.splits.v[sel.i] != null))) {
                fine.hidden = false;
                const f = sel.axis === 'h' ? ED.splits.h[sel.i] : ED.splits.v[sel.i];
                const max = sel.axis === 'h' ? bmp.height : bmp.width;
                const px = Math.round(f * max);
                fineLab.textContent = (sel.axis === 'h' ? 'Garis horizontal · Y' : 'Garis vertikal · X') + ' (0–' + max + ')';
                if (document.activeElement !== fineIn) fineIn.value = String(px);
            } else {
                fine.hidden = true;
            }
        }
    }
    async function editApplySplit() {
        if (!ED.bmp || !ED.splits) return;
        const cells = editSplitCells();
        if (cells.length < 2) { toast('Tambah minimal 1 garis potong', 'err'); return; }
        const P = pv;
        const chUrl = P && P.chapters[P.cur] ? P.chapters[P.cur].url : '';
        const news = [];
        for (const c of cells) {
            const cv = document.createElement('canvas');
            cv.width = c.w; cv.height = c.h;
            cv.getContext('2d').drawImage(ED.bmp, c.x, c.y, c.w, c.h, 0, 0, c.w, c.h);
            news.push(await canvasToItem(cv, chUrl, 0.92));
            cv.width = cv.height = 0;
        }
        const idxs = ED.idxs.slice();
        editClose();
        editReplace(idxs, news, 'split 1→' + news.length);
        log('ok', 'edit', 'Split: 1 → ' + news.length + ' bagian');
        toast('Dipecah menjadi ' + news.length + ' bagian', 'ok');
    }
    function editSplitNudge(deltaPx) {
        if (!ED.bmp || !ED.selLine || !ED.splits) return;
        const { axis, i } = ED.selLine;
        const arr = axis === 'h' ? ED.splits.h : ED.splits.v;
        if (arr[i] == null) return;
        const max = axis === 'h' ? ED.bmp.height : ED.bmp.width;
        let px = Math.round(arr[i] * max) + deltaPx;
        px = clamp(px, Math.round(max * 0.02), Math.round(max * 0.98));
        arr[i] = px / max;
        editSplitNorm();
        const ni = arr.findIndex(v => Math.abs(Math.round(v * max) - px) <= 1);
        if (ni >= 0) ED.selLine = { axis, i: ni };
        editSplitPaint();
    }
    function editSplitSetPx(px) {
        if (!ED.bmp || !ED.selLine || !ED.splits) return;
        const { axis, i } = ED.selLine;
        const arr = axis === 'h' ? ED.splits.h : ED.splits.v;
        if (arr[i] == null) return;
        const max = axis === 'h' ? ED.bmp.height : ED.bmp.width;
        px = clamp(int(px, 0), Math.round(max * 0.02), Math.round(max * 0.98));
        arr[i] = px / max;
        editSplitNorm();
        const ni = arr.findIndex(v => Math.abs(Math.round(v * max) - px) <= 1);
        if (ni >= 0) ED.selLine = { axis, i: ni };
        editSplitPaint();
    }
    function editOpenSplit() {
        const P = pv;
        if (!P || busy) return;
        const idxs = editSelIdx();
        if (idxs.length !== 1) { toast('Pilih tepat 1 halaman untuk di-split', 'err'); return; }
        const i = idxs[0];
        const it = P.items[i];
        editClose();
        hideHover(); viewClose();
        const el = document.createElement('div');
        el.id = 'dd-edit';
        el.innerHTML =
            '<div class="ed-win"><div class="ed-box">' +
            '<div class="ed-top" title="Seret untuk memindahkan · klik 2× untuk memperbesar / mengembalikan"><b>Split gambar</b><span class="ed-info">Memuat…</span>' +
            '<span class="ed-tools">' +
            '<button type="button" class="pv-b" id="dd-ed-addh" title="Tambah garis horizontal (potong atas/bawah)">+ Horizontal</button>' +
            '<button type="button" class="pv-b" id="dd-ed-addv" title="Tambah garis vertikal (potong kiri/kanan)">+ Vertikal</button>' +
            '<button type="button" class="pv-b" id="dd-ed-clear" title="Hapus semua garis">Reset</button></span>' +
            '<span class="ed-parts" id="dd-ed-parts">1 bagian</span>' +
            '<span class="ed-acts"><button type="button" class="pv-b pri" id="dd-ed-ok" title="Terapkan (Enter)">' + IC('check') + '<span>Terapkan</span></button>' +
            '<button type="button" class="pv-ib" id="dd-ed-x" title="Batal (Esc)">' + IC('x') + '</button></span></div>' +
            '<div class="ed-stage"><canvas class="ed-cv"></canvas><div class="ed-lines"></div>' + ED_ZOOM + '</div>' +
            '<div class="ed-fine" id="dd-ed-fine" hidden>' +
            '<span id="dd-ed-fine-lab">Posisi garis</span>' +
            '<input type="number" id="dd-ed-px" min="1" step="1" title="Posisi dalam pixel">' +
            '<button type="button" class="pv-b" id="dd-ed-px-go">Set</button>' +
            '<button type="button" class="pv-b" id="dd-ed-nudge-m" title="-1 px">−1</button>' +
            '<button type="button" class="pv-b" id="dd-ed-nudge-p" title="+1 px">+1</button>' +
            '<button type="button" class="pv-b" id="dd-ed-nudge-m10" title="-10 px">−10</button>' +
            '<button type="button" class="pv-b" id="dd-ed-nudge-p10" title="+10 px">+10</button>' +
            '<span style="margin-left:4px"><kbd>←</kbd><kbd>→</kbd>/<kbd>↑</kbd><kbd>↓</kbd> 1px · <kbd>Shift</kbd> 10px · <kbd>Del</kbd> hapus garis</span>' +
            '</div>' +
            '<div class="ed-hint">Klik garis = pilih · seret = pindah · <b>dobel-klik di gambar</b> = tambah garis (<kbd>Shift</kbd> = vertikal) · dobel-klik garis / <kbd>Del</kbd> = hapus · <b>Scroll</b> zoom · seret area kosong / <kbd>Space</kbd>+seret = geser · <kbd>Enter</kbd> terapkan · <kbd>Esc</kbd> batal</div>' +
            '</div>' + ED_RZ + '</div>';
        document.body.appendChild(el);
        ED.el = el; ED.mode = 'split'; ED.idxs = [i];
        editViewReset();
        editWireWindow(el);
        editWireZoom(el);
        ED.splits = { h: [0.5], v: [] };   // default 1 garis horizontal di tengah
        ED.selLine = { axis: 'h', i: 0 };
        $('dd-ed-x').onclick = editClose;
        $('dd-ed-ok').onclick = () => { editApplySplit().catch(e => toast('Split gagal: ' + e.message, 'err')); };
        $('dd-ed-clear').onclick = () => { ED.splits = { h: [], v: [] }; ED.selLine = null; editSplitPaint(); };
        $('dd-ed-addh').onclick = () => {
            const pts = [0].concat(ED.splits.h).concat([1]).sort((a, b) => a - b);
            let best = 0.5, gap = 0;
            for (let k = 0; k < pts.length - 1; k++) {
                const g = pts[k + 1] - pts[k];
                if (g > gap) { gap = g; best = (pts[k] + pts[k + 1]) / 2; }
            }
            ED.splits.h.push(best); editSplitNorm();
            const ni = ED.splits.h.findIndex(v => Math.abs(v - best) < 1e-4);
            ED.selLine = { axis: 'h', i: ni >= 0 ? ni : ED.splits.h.length - 1 };
            editSplitPaint();
        };
        $('dd-ed-addv').onclick = () => {
            const pts = [0].concat(ED.splits.v).concat([1]).sort((a, b) => a - b);
            let best = 0.5, gap = 0;
            for (let k = 0; k < pts.length - 1; k++) {
                const g = pts[k + 1] - pts[k];
                if (g > gap) { gap = g; best = (pts[k] + pts[k + 1]) / 2; }
            }
            ED.splits.v.push(best); editSplitNorm();
            const ni = ED.splits.v.findIndex(v => Math.abs(v - best) < 1e-4);
            ED.selLine = { axis: 'v', i: ni >= 0 ? ni : ED.splits.v.length - 1 };
            editSplitPaint();
        };
        $('dd-ed-nudge-m').onclick = () => editSplitNudge(-1);
        $('dd-ed-nudge-p').onclick = () => editSplitNudge(1);
        $('dd-ed-nudge-m10').onclick = () => editSplitNudge(-10);
        $('dd-ed-nudge-p10').onclick = () => editSplitNudge(10);
        $('dd-ed-px-go').onclick = () => editSplitSetPx($('dd-ed-px').value);
        $('dd-ed-px').onkeydown = (e) => {
            if (e.key === 'Enter') { editSplitSetPx($('dd-ed-px').value); e.preventDefault(); }
        };
        const lines = el.querySelector('.ed-lines');
        const onMove = (ev) => {
            if (!ED.drag || !ED.bmp) return;
            const sc = ED.scale || 1;
            if (ED.drag.axis === 'h') {
                const y = (ev.clientY - lines.getBoundingClientRect().top) / sc;
                let f = y / ED.bmp.height;
                f = clamp(f, 0.02, 0.98);
                ED.splits.h[ED.drag.i] = f;
            } else {
                const x = (ev.clientX - lines.getBoundingClientRect().left) / sc;
                let f = x / ED.bmp.width;
                f = clamp(f, 0.02, 0.98);
                ED.splits.v[ED.drag.i] = f;
            }
            editSplitPaint();
        };
        const onUp = () => {
            if (ED.drag && ED.bmp) {
                editSplitNorm();
                const axis = ED.drag.axis;
                const max = axis === 'h' ? ED.bmp.height : ED.bmp.width;
                const arr = axis === 'h' ? ED.splits.h : ED.splits.v;
                const f0 = arr[Math.min(ED.drag.i, arr.length - 1)];
                const px = Math.round((f0 != null ? f0 : 0.5) * max);
                const ni = arr.findIndex(v => Math.abs(Math.round(v * max) - px) <= 1);
                if (ni >= 0) ED.selLine = { axis, i: ni };
                editSplitPaint();
            }
            ED.drag = null;
            document.removeEventListener('pointermove', onMove, true);
            document.removeEventListener('pointerup', onUp, true);
        };
        lines.addEventListener('pointerdown', (ev) => {
            const line = ev.target.closest('.ed-line');
            if (!line) return;
            ED.selLine = { axis: line.dataset.axis, i: +line.dataset.i };
            ED.drag = { axis: line.dataset.axis, i: +line.dataset.i };
            document.addEventListener('pointermove', onMove, true);
            document.addEventListener('pointerup', onUp, true);
            editSplitPaint();
            ev.preventDefault();
        });
        lines.addEventListener('dblclick', (ev) => {
            const line = ev.target.closest('.ed-line');
            if (!line) return;
            const axis = line.dataset.axis, idx = +line.dataset.i;
            if (axis === 'h') ED.splits.h.splice(idx, 1);
            else ED.splits.v.splice(idx, 1);
            ED.selLine = null;
            editSplitPaint();
            ev.preventDefault();
        });
        // dobel-klik di area gambar = tambah garis tepat di posisi kursor (Shift = vertikal)
        el.querySelector('.ed-stage').addEventListener('dblclick', (ev) => {
            if (!ED.bmp || !ED.splits || (ev.target.closest && ev.target.closest('.ed-line, .ed-zoom'))) return;
            const r = lines.getBoundingClientRect();
            const vert = ev.shiftKey;
            const f = vert ? (ev.clientX - r.left) / (ED.bmp.width * ED.scale) : (ev.clientY - r.top) / (ED.bmp.height * ED.scale);
            if (!(f > 0.02 && f < 0.98)) return;
            const arr = vert ? ED.splits.v : ED.splits.h;
            const max = vert ? ED.bmp.width : ED.bmp.height;
            arr.push(f);
            editSplitNorm();
            const px = Math.round(f * max);
            const ni = arr.findIndex(x => Math.abs(Math.round(x * max) - px) <= 1);
            ED.selLine = { axis: vert ? 'v' : 'h', i: ni >= 0 ? ni : arr.length - 1 };
            editSplitPaint();
            ev.preventDefault();
        });
        const onKey = (e) => {
            if (ED.el !== el || ED.mode !== 'split') return;
            if (/INPUT|TEXTAREA/.test((e.target && e.target.tagName) || '')) return;
            const step = e.shiftKey ? 10 : 1;
            if (e.key === 'ArrowLeft' || e.key === 'ArrowUp') { editSplitNudge(-step); e.preventDefault(); e.stopPropagation(); }
            else if (e.key === 'ArrowRight' || e.key === 'ArrowDown') { editSplitNudge(step); e.preventDefault(); e.stopPropagation(); }
            else if (e.key === 'Delete' || e.key === 'Backspace') {
                if (ED.selLine) {
                    const { axis, i: si } = ED.selLine;
                    if (axis === 'h') ED.splits.h.splice(si, 1); else ED.splits.v.splice(si, 1);
                    ED.selLine = null;
                    editSplitPaint();
                    e.preventDefault(); e.stopPropagation();
                }
            }
        };
        document.addEventListener('keydown', onKey, true);
        el._ddKey = onKey;
        window.addEventListener('resize', editSplitPaint);
        loadBitmap(it.url).then(bmp => {
            if (ED.el !== el) { if (bmp.close) bmp.close(); return; }
            ED.bmp = bmp;
            editSplitPaint();
        }).catch(e => {
            toast('Gagal memuat gambar: ' + e.message, 'err');
            editClose();
        });
    }

    // ------------------------------------------------------------ panel preview
    function pvStatus(t, type) {
        const el = $('dd-pv-st');
        if (el) { el.textContent = t || ''; el.className = 'pv-st ' + (type || ''); el.hidden = !t; }
    }
    // mode antrian: chapter yang punya halaman tercentang harus ikut aktif (kalau tidak, chapter dilewati saat download)
    function pvChOn(url) {
        const P = pv;
        if (!P || !P.qjob || !url) return;
        const k = P.chapters.findIndex(c => c.url === url);
        if (k < 0 || P.chapters[k].checked) return;
        P.chapters[k].checked = true;
        if (P.rows && P.rows[k] && P.rows[k].firstChild) P.rows[k].firstChild.checked = true;
    }
    function pvSet(i, v) {
        const it = pv && pv.items[i];
        if (!it) return;
        it.checked = !!v;
        if (v) pvChOn(it.ch);
        if (it.ch) {
            let sk = pv.skip.get(it.ch);
            if (!sk) pv.skip.set(it.ch, sk = new Set());
            if (v) sk.delete(it.url); else sk.add(it.url);
        }
        if (it.el) { it.el.classList.toggle('on', !!v); it.el.classList.toggle('off', !v); }
    }
    function parseRange(txt, max) {
        const sel = new Set();
        String(txt || '').split(',').forEach(part => {
            const m = part.trim().match(/^(\d+)(?:\s*-\s*(\d+))?$/);
            if (!m) return;
            const a = int(m[1], 0), b = m[2] ? int(m[2], 0) : a;
            for (let k = Math.min(a, b); k <= Math.max(a, b); k++) if (k >= 1 && k <= max) sel.add(k - 1);
        });
        return sel;
    }
    function multiHint() {
        if (multi === 'onezip') return 'Semua post terpilih jadi 1 file ZIP · tiap post di foldernya sendiri.';
        if (multi === 'onepdf') return 'Semua post terpilih jadi 1 file PDF berurutan (ada bookmark per post).';
        return 'Tiap post terpilih jadi file sendiri (format ' + (fmt === 'files' ? 'IMG' : fmt.toUpperCase()) + ').';
    }
    // ---- satu menu mode download: lingkup (chapter dibuka / terpilih) + format digabung
    const MODES = [
        { k: 'cur:zip', b: 'ZIP', g: 'Post yang dibuka', t: 'ZIP', s: 'ZIP', d: 'Halaman yang dicentang jadi 1 file ZIP' },
        { k: 'cur:pdf', b: 'PDF', g: 'Post yang dibuka', t: 'PDF', s: 'PDF', d: 'Halaman yang dicentang jadi 1 file PDF' },
        { k: 'cur:files', b: 'IMG', g: 'Post yang dibuka', t: 'Gambar (IMG)', s: 'IMG', d: 'Tiap halaman disimpan sebagai file gambar' },
        { k: 'cur:cbz', b: 'CBZ', g: 'Post yang dibuka', t: 'CBZ untuk Mihon', s: 'CBZ Mihon', d: 'Nama Manga › Chapter.cbz (+ cover.jpg), siap dibaca di Mihon' },
        { k: 'sep:zip', b: 'ZIP', g: 'Post terpilih (sidebar)', t: 'ZIP terpisah', s: 'ZIP terpisah', d: 'Tiap post jadi 1 file ZIP sendiri' },
        { k: 'sep:pdf', b: 'PDF', g: 'Post terpilih (sidebar)', t: 'PDF terpisah', s: 'PDF terpisah', d: 'Tiap post jadi 1 file PDF sendiri' },
        { k: 'sep:files', b: 'IMG', g: 'Post terpilih (sidebar)', t: 'Gambar terpisah', s: 'IMG terpisah', d: 'Gambar tiap post di foldernya sendiri' },
        { k: 'sep:cbz', b: 'CBZ', g: 'Post terpilih (sidebar)', t: 'CBZ untuk Mihon', s: 'CBZ Mihon', d: 'Tiap post 1 file .cbz di folder nama manga (+ cover.jpg)' },
        { k: 'onezip', b: 'ZIP', g: 'Post terpilih (sidebar)', t: '1 ZIP gabungan', s: '1 ZIP', d: 'Semua post dalam 1 ZIP, folder per post' },
        { k: 'onepdf', b: 'PDF', g: 'Post terpilih (sidebar)', t: '1 PDF gabungan', s: '1 PDF', d: 'Semua post berurutan, bookmark per post' }
    ];
    const isMultiCtx = () => !!(pv && pv.chapters.length > 1);
    const modeOk = (k, multiCtx) => MODES.some(m => m.k === k) && (multiCtx || k.indexOf('cur:') === 0);
    function applyMode(k) {   // selaraskan fmt / multi / dlScope dengan mode yang aktif
        if (k.indexOf('cur:') === 0) { dlScope = 'cur'; fmt = k.slice(4); }
        else if (k.indexOf('sep:') === 0) { dlScope = 'sel'; multi = 'sep'; fmt = k.slice(4); }
        else { dlScope = 'sel'; multi = k; }
    }
    function modeKey() {
        const mc = isMultiCtx();
        let k = mc ? modeM : modeS;
        if (!modeOk(k, mc)) k = 'cur:' + fmt;
        applyMode(k);
        return k;
    }
    const effScope = () => (modeKey().indexOf('cur:') === 0 ? 'cur' : 'sel');
    function setMode(k) {
        const mc = isMultiCtx();
        if (!modeOk(k, mc)) return;
        if (mc) { modeM = k; sv('dd_mode_m', k); }
        if (k.indexOf('cur:') === 0) { modeS = k; sv('dd_mode_s', k); }
        applyMode(k);
        sv('dd_scope', dlScope); sv('dd_fmt', fmt); sv('dd_multi', multi);
        log('debug', 'ui', 'Mode download: ' + k + (mc ? ' (banyak post)' : ' (1 post)'));
    }
    function modeMenuHtml() {
        const multiCh = pv && pv.chapters.length > 1;
        let g = '', h = '', first = true;
        MODES.forEach(m => {
            if (!multiCh && m.k.indexOf('cur:') !== 0) return;
            if (m.g !== g) {
                if (g) h += '</div>';
                g = m.g;
                const isCur = m.k.indexOf('cur:') === 0;
                h += '<div class="mm-grp"><div class="mm-h"><span class="mm-hl">' + m.g + '</span><span class="mm-hc" data-c="' + (isCur ? 'cur' : 'sel') + '"></span></div>';
            }
            h += '<button type="button" role="menuitemradio" class="mm-i" data-m="' + m.k + '">' +
                '<span class="mm-fm fm-' + m.b.toLowerCase() + '">' + m.b + '</span>' +
                '<span class="mm-t"><b>' + m.t + '</b><small>' + m.d + '</small></span>' +
                '<span class="mm-ck">' + IC('check') + '</span></button>';
        });
        return h + (g ? '</div>' : '');
    }
    function pvUpdate() {
        const P = pv;
        if (!P || !$('dd-pv-count')) return;
        const t = P.items.length, n = P.items.filter(x => x.checked).length;
        $('dd-pv-count').innerHTML = '<b>' + n + '</b> / ' + t + ' halaman dipilih';
        $('dd-pv-sel').textContent = t > 0 && n === t ? 'Batal pilih semua' : 'Pilih semua';
        $('dd-pv-sel').disabled = !t || busy;
        $('dd-pv-reload').disabled = busy || P.scanning;
        const mg = $('dd-pv-merge'), sp = $('dd-pv-split'), cp = $('dd-pv-crop'), rz = $('dd-pv-resize'), dl = $('dd-pv-del'), ud = $('dd-pv-undo');
        if (mg) mg.disabled = busy || P.scanning || n < 2;
        if (sp) sp.disabled = busy || P.scanning || n !== 1;
        if (cp) cp.disabled = busy || P.scanning || n !== 1;
        if (rz) rz.disabled = busy || P.scanning || n < 1;
        if (dl) dl.disabled = busy || P.scanning || n < 1;
        if (ud) ud.disabled = busy || P.scanning || !UNDO.stack.length;
        $('dd-pv-stop').hidden = !busy;
        $('dd-pv-folder').textContent = saveMode === 'folder' && dirHandle ? dirHandle.name : 'Downloads';
        // sidebar chapter
        const sc = P.chapters.filter(c => c.checked).length;
        const nvis = P.chapters.filter(c => !c.hidden).length;
        $('dd-ch-all').textContent = nvis && sc === nvis ? 'Batal pilih' : 'Pilih semua';
        $('dd-ch-all').disabled = busy;
        if ($('dd-ch-hide')) { $('dd-ch-hide').disabled = busy && !P.hscan; $('dd-ch-show').disabled = busy; }
        if ($('dd-ch-mrg')) { $('dd-ch-mrg').disabled = busy || sc < 2; $('dd-ch-unm').disabled = busy || !P.merge.size; }
        const dsc = pvSelChs().length;
        $('dd-ch-sel').textContent = sc + ' dipilih';
        const cur = effScope() === 'cur', mk = modeKey(), mo = MODES.find(m => m.k === mk) || MODES[0];
        $('dd-pv-dl').disabled = cur ? (!n || busy || P.scanning) : (!dsc || busy);
        $('dd-pv-dl-t').textContent = (cur ? 'Download post ini' : 'Download ' + dsc + ' post') + ' · ' + mo.s;
        $('dd-pv-dl').title = cur ? 'Download halaman yang dicentang di post yang dibuka' : multiHint();
        $('dd-pv-mode').disabled = busy;
        $('dd-pv-mm').querySelectorAll('.mm-i').forEach(b => { const on = b.dataset.m === mk; b.classList.toggle('on', on); b.setAttribute('aria-checked', on ? 'true' : 'false'); });
        $('dd-pv-mm').querySelectorAll('.mm-hc').forEach(e => { const c = e.dataset.c === 'cur' ? n : sc; e.textContent = c + (e.dataset.c === 'cur' ? ' halaman' : ' post'); e.classList.toggle('z', !c); });
    }
    function pvMarkCur() {
        const P = pv;
        if (!P || !P.rows) return;
        P.rows.forEach((r, k) => r.classList.toggle('cur', k === P.cur));
        const r = P.rows[P.cur];
        if (r && r.scrollIntoView) r.scrollIntoView({ block: 'nearest' });
    }
    function pvRenderChapters() {
        const P = pv, box = $('dd-pv-chs');
        if (!P || !box) return;
        box.innerHTML = '';
        P.rows = [];
        const tt = $('dd-ch-total'); if (tt) tt.textContent = P.chapters.length;
        const frag = document.createDocumentFragment();
        P.chapters.forEach((c, k) => {
            const r = document.createElement('div');
            r.className = 'ch' + (k === P.cur ? ' cur' : '');
            r.dataset.k = k;
            r.innerHTML = '<input type="checkbox"' + (c.checked ? ' checked' : '') + '><span class="cn">' + (k + 1) + '</span><span class="cp"></span><span class="cb"><span class="ct" title="' + esc(c.title) + '">' + esc(c.title) + '</span><span class="cm" hidden></span><span class="cs">' + esc(c.st || '') + '</span></span><button type="button" class="cx" title="Sembunyikan post ini" aria-label="Sembunyikan post ini">×</button>';
            r.hidden = !!c.hidden;
            P.rows[k] = r; frag.appendChild(r);
        });
        box.appendChild(frag);
        pvHideRefresh();
        pvMergeRefresh();
        pvCoverInit();
    }
    // ---------- preview gambar ke-1 tiap chapter (sidebar) ----------
    // Dimuat malas (lazy): hanya baris yang terlihat. Sumber: cache chapter yang sudah dibuka -> fetch post (tanpa memuat reader).
    // Memakai thumbnail (/thumbnail/...), bukan file asli. Antrean 2 request, jeda 250 ms agar situs tidak terbebani.
    function pvCoverInit() {
        const P = pv, box = $('dd-pv-chs');
        if (!P || !box || !P.rows) return;
        if (P.cio) P.cio.disconnect();
        if (!P.cov) { P.cov = new Map(); P.covQ = []; P.covRun = 0; }
        P.cio = new IntersectionObserver((es) => {
            es.forEach(e => {
                if (!e.isIntersecting) return;
                P.cio.unobserve(e.target);
                const k = +e.target.dataset.k, c = P.chapters[k];
                if (c) pvCoverQueue(c, e.target);
            });
        }, { root: box, rootMargin: '300px 0px' });
        P.rows.forEach(r => {
            const c = P.chapters[+r.dataset.k];
            pvCoverPaint(r, c ? P.cov.get(c.url) : undefined);
            P.cio.observe(r);
        });
    }
    function pvCoverPaint(r, v) {
        const cp = r.querySelector('.cp'); if (!cp) return;
        if (v === undefined) { cp.className = 'cp ld'; cp.innerHTML = ''; return; }
        if (v === 0) { cp.className = 'cp em'; cp.textContent = '\u2205'; return; }
        if (v === -1) { cp.className = 'cp em'; cp.textContent = '!'; return; }
        cp.className = 'cp';
        cp.innerHTML = '';
        const im = new Image(); im.alt = ''; im.decoding = 'async'; im.draggable = false; im.src = v;
        cp.appendChild(im);
    }
    function pvCoverQueue(c, row) {
        const P = pv; if (!P || !P.cov) return;
        if (P.cov.has(c.url)) { pvCoverPaint(row, P.cov.get(c.url)); return; }
        if (P.covQ.some(x => x.c === c)) return;
        P.covQ.push({ c, row }); pvCoverPump();
    }
    async function pvCoverFirst(c) {
        const P = pv;
        const its = P.cache.get(c.url);   // chapter sudah dibuka / hasil edit
        if (its) {
            const it = its.find(x => x && x.url && !x.dead) || its[0];
            if (!it) return 0;
            return it.thumb || (String(it.url).startsWith('blob:') ? it.url : thumbOf(it.url));
        }
        const jc = P.qjob && P.qjob.chapters[c.idx];
        if (jc && jc.url === c.url && jc.pre && jc.pre.length) return thumbOf(jc.pre[0].url);
        let doc;
        if (norm(c.url) === norm(location.href)) doc = document;
        else {
            const r = await fetch(c.url, { credentials: 'same-origin' });
            if (!r.ok) { if (r.status === 404 || r.status === 410) return 0; throw new Error('HTTP ' + r.status); }
            doc = new DOMParser().parseFromString(await r.text(), 'text/html');
        }
        const items = postImages(doc, c.url);
        return items.length ? thumbOf(items[0].url) : 0;
    }
    function pvCoverPump() {
        const P = pv; if (!P || !P.cov) return;
        while (P.covRun < 2 && P.covQ.length) {
            const job = P.covQ.shift(); P.covRun++;
            (async () => {
                let v = -1;
                try {
                    const u = await pvCoverFirst(job.c);
                    if (pv !== P) return;
                    if (u === 0) v = 0;
                    else if (/^blob:/.test(u)) v = u;
                    else v = await scaledUrl(u, 160, 0, 0, 0.7);   // diperkecil -> object URL
                } catch (e) { v = -1; }
                if (pv !== P) { if (typeof v === 'string' && v.startsWith('blob:')) { try { URL.revokeObjectURL(v); } catch (e) {} } return; }
                P.cov.set(job.c.url, v);
                const k = P.chapters.indexOf(job.c);
                if (P.rows[k]) pvCoverPaint(P.rows[k], v);
                await sleep(250);
            })().finally(() => { P.covRun--; pvCoverPump(); });
        }
    }
    function pvCoverDrop(P) {
        if (P.cio) { P.cio.disconnect(); P.cio = null; }
        if (P.covQ) P.covQ.length = 0;
        if (P.cov) {
            const keep = new Set();
            P.cache.forEach(its => its.forEach(it => { if (it.url) keep.add(it.url); if (it.thumb) keep.add(it.thumb); }));
            P.cov.forEach(v => { if (typeof v === 'string' && v.startsWith('blob:') && !keep.has(v)) { try { URL.revokeObjectURL(v); } catch (e) {} } });
            P.cov.clear();
        }
    }
    // ---------- sembunyikan chapter (mis. chapter yang gambarnya sudah tidak ada) ----------
    // Chapter hanya disembunyikan dari daftar + dilepas dari pilihan (tidak ikut diunduh); bisa ditampilkan lagi. Indeks chapter tidak berubah.
    function pvHideKey() { return 'dd_hid:' + ((pv && pv.manga) || ''); }
    function pvHideSave() {
        const P = pv; if (!P || P.qjob) return;   // mode antrian: hanya berlaku selama panel dibuka
        sv(pvHideKey(), P.chapters.filter(c => c.hidden).map(c => c.url));
    }
    function pvHideLoad() {
        const P = pv; if (!P || P.qjob) return;
        const arr = gv(pvHideKey(), []);
        if (!Array.isArray(arr) || !arr.length) return;
        const hs = new Set(arr);
        P.chapters.forEach(c => { if (hs.has(c.url)) { c.hidden = true; c.checked = false; } });
    }
    function pvHideRefresh() {
        const P = pv; if (!P || !P.rows) return;
        let nv = 0, nh = 0;
        P.chapters.forEach((c, k) => {
            const r = P.rows[k]; if (!r) return;
            r.hidden = !!c.hidden;
            if (r.firstChild) r.firstChild.checked = !!c.checked;
            if (c.hidden) nh++; else nv++;
        });
        const tt = $('dd-ch-total'); if (tt) tt.textContent = nv;
        const sh = $('dd-ch-show'); if (sh) { sh.hidden = !nh; sh.textContent = 'Tampilkan (' + nh + ')'; }
    }
    function pvHideCh(list) {
        const P = pv; if (!P) return 0;
        const arr = list.filter(c => c && !c.hidden);
        if (!arr.length) return 0;
        for (const c of arr) {
            if (P.merge.has(c.url)) {   // lepas dari gabungan dulu
                const tg = P.chapters.find(x => x.url === P.merge.get(c.url));
                P.merge.delete(c.url);
                if (tg && tg.extra) tg.extra = tg.extra.filter(x => x !== c);
            }
            (c.extra || []).forEach(m => P.merge.delete(m.url));
            c.extra = [];
            c.hidden = true; c.checked = false;
        }
        pvHideRefresh(); pvMergeRefresh(); pvHideSave();
        const cc = P.chapters[P.cur];
        if (cc && cc.hidden) {   // chapter yang sedang dibuka disembunyikan → pindah ke chapter terdekat yang masih tampil
            let k = -1;
            for (let j = P.cur + 1; j < P.chapters.length && k < 0; j++) if (!P.chapters[j].hidden) k = j;
            for (let j = P.cur - 1; j >= 0 && k < 0; j--) if (!P.chapters[j].hidden) k = j;
            if (k >= 0) pvOpenChapter(k);
        }
        pvUpdate();
        return arr.length;
    }
    function pvShowAllCh() {
        const P = pv; if (!P) return;
        const n = P.chapters.filter(c => c.hidden).length;
        if (!n) return;
        P.chapters.forEach(c => { c.hidden = false; });
        pvHideRefresh(); pvHideSave(); pvUpdate();
        toast(n + ' post ditampilkan lagi (belum dicentang)', 'ok');
        log('ok', 'ui', n + ' post ditampilkan lagi');
    }
    // chapter yang sudah diketahui kosong: 0 halaman (hasil edit / cache), dikosongkan di antrian, atau post-nya tidak punya gambar
    function pvEmptyKnown() {
        const P = pv; if (!P) return [];
        return P.chapters.filter(c => {
            if (c.hidden) return false;
            const its = P.cache.get(c.url);
            if (its) return its.length === 0;
            const jc = P.qjob && P.qjob.chapters[c.idx];
            if (jc && jc.url === c.url && jc.pre && !jc.pre.length) return true;
            return !!(P.empty && P.empty.has(c.url));
        });
    }
    async function pvHideEmpty() {
        const P = pv; if (!P) return;
        if (P.hscan) { P.hscan.stop = true; return; }   // diklik lagi saat memeriksa = berhenti
        if (busy) { toast('Sedang download — tunggu selesai atau tekan Stop', 'err'); return; }
        const btn = $('dd-ch-hide'), lab = btn ? btn.textContent : '';
        const known = new Set(pvEmptyKnown());
        const unk = P.chapters.filter(c => !c.hidden && !known.has(c) && !P.cache.has(c.url) && !(P.empty && P.empty.has(c.url)) && !(P.full && P.full.has(c.url)));
        if (unk.length && (await ddConfirm(unk.length + ' post belum pernah dibuka. Periksa satu per satu apakah gambarnya masih ada?\nTiap post 1 request ke situs, jadi bisa agak lama. Pilih Lewati untuk hanya memakai post yang sudah diketahui kosong.', { title: 'Cari post kosong', ok: 'Periksa', cancel: 'Lewati' })) && pv === P) {
            const sc = P.hscan = { stop: false };
            let done = 0;
            for (const c of unk) {
                if (sc.stop || pv !== P) break;
                if (btn) btn.textContent = 'Memeriksa ' + (done + 1) + '/' + unk.length + ' · Stop';
                try {
                    await getChapterImages(c.url, () => {}, () => sc.stop || pv !== P);
                    (P.full || (P.full = new Set())).add(c.url);
                } catch (e) {
                    // hanya "gambar tidak ditemukan" / post hilang (404, 410) yang dianggap kosong; gagal jaringan dll tidak
                    if (/^Gambar tidak ditemukan|^HTTP (404|410)$/.test((e && e.message) || '')) (P.empty || (P.empty = new Set())).add(c.url);
                }
                done++;
                await sleep(250);
            }
            P.hscan = null;
            if (btn) btn.textContent = lab;
        }
        if (pv !== P) return;
        const list = pvEmptyKnown();
        if (!list.length) { toast('Tidak ada post kosong yang ditemukan', 'ok'); return; }
        const nums = list.map(c => '#' + (P.chapters.indexOf(c) + 1));
        const head = nums.length > 12 ? nums.slice(0, 12).join(', ') + ' … +' + (nums.length - 12) : nums.join(', ');
        if (!(await ddConfirm('Sembunyikan ' + list.length + ' post yang tidak ada gambarnya?\n' + head + '\nPost hanya disembunyikan dari daftar dan tidak ikut diunduh. Bisa ditampilkan lagi lewat tombol Tampilkan di sidebar.', { title: 'Sembunyikan post kosong', ok: 'Sembunyikan' })) || pv !== P) return;
        const n = pvHideCh(list);
        toast(n + ' post kosong disembunyikan', 'ok');
        log('ok', 'ui', n + ' post kosong disembunyikan: ' + head);
    }
    // ---------- gabung chapter (sumber → target) ----------
    function pvMergeText(c) {
        const P = pv; if (!P || !P.merge) return '';
        let t = '';
        if (P.merge.has(c.url)) t = '→ digabung ke #' + (P.chapters.findIndex(x => x.url === P.merge.get(c.url)) + 1);
        else if (c.extra && c.extra.length) t = '+ ' + c.extra.length + ' post digabung';
        if (P.dirty && P.dirty.has(c.url)) { const l = P.cache.get(c.url); t += (t ? ' · ' : '') + '✎ diubah' + (l ? ' · ' + l.length + ' hal.' : ''); }
        return t;
    }
    function pvMergeRefresh() {
        const P = pv; if (!P || !P.rows) return;
        P.rows.forEach((r, k) => {
            const c = P.chapters[k], e = r.querySelector('.cm'); if (!e || !c) return;
            const t = pvMergeText(c); e.textContent = t; e.hidden = !t;
            r.classList.toggle('merged', P.merge.has(c.url));
        });
    }
    // chapter yang dicentang & bukan sumber gabungan (sumber ikut target-nya) = yang benar-benar diunduh
    function pvSelChs() {
        const P = pv; if (!P) return [];
        return P.chapters.filter(c => c.checked && !(P.merge.has(c.url) && (P.chapters.find(x => x.url === P.merge.get(c.url)) || {}).checked));
    }
    async function pvMergeChapters() {
        const P = pv; if (!P || busy) return;
        const chs = P.chapters.filter(c => c.checked);
        if (chs.length < 2) { toast('Centang minimal 2 post dulu', 'err'); return; }
        const rootOf = (c) => { let u = c.url; const seen = new Set(); while (P.merge.has(u) && !seen.has(u)) { seen.add(u); u = P.merge.get(u); } return P.chapters.find(x => x.url === u) || c; };
        const tg = rootOf(chs[0]);
        const others = chs.filter(c => c !== tg);
        if (!(await ddConfirm('Gabung ' + others.length + ' post ke \"' + tg.title + '\"?\nSaat download, halaman post lain dimasukkan ke akhir post ini jadi 1 post (1 file CBZ / ZIP / PDF). Bisa dipisah lagi lewat tombol Pisah.', { title: 'Gabung post', ok: 'Gabung' }))) return;
        tg.extra = tg.extra || [];
        for (const c of others) {
            const moved = [c].concat(c.extra || []); c.extra = [];
            moved.forEach(m => { P.merge.set(m.url, tg.url); if (m !== tg && tg.extra.indexOf(m) < 0) tg.extra.push(m); });
            c.checked = false; const k = P.chapters.indexOf(c); if (P.rows[k]) P.rows[k].firstChild.checked = false;
        }
        tg.extra.sort((a, b) => P.chapters.indexOf(a) - P.chapters.indexOf(b));
        log('ok', 'ui', 'Gabung post: ' + others.length + ' → \"' + tg.title + '\"');
        toast(others.length + ' post digabung ke \"' + tg.title + '\"', 'ok');
        pvMergeRefresh(); pvUpdate();
    }
    function pvUnmergeChapters() {
        const P = pv; if (!P || busy || !P.merge.size) return;
        const sel = P.chapters.filter(c => c.checked);
        const target = sel.filter(c => c.extra && c.extra.length || P.merge.has(c.url));
        let n = 0;
        const drop = (src) => { const tg = P.chapters.find(x => x.url === P.merge.get(src.url)); P.merge.delete(src.url); if (tg && tg.extra) tg.extra = tg.extra.filter(x => x !== src); n++; };
        for (const c of (target.length ? target : [])) {
            if (P.merge.has(c.url)) drop(c);
            (c.extra || []).slice().forEach(drop);
            c.extra = [];
        }
        if (!n) { toast('Centang post yang digabung (target atau sumbernya) dulu', 'err'); return; }
        toast(n + ' post dipisah lagi', 'ok'); log('info', 'ui', 'Pisah gabungan: ' + n + ' post');
        pvMergeRefresh(); pvUpdate();
    }


    // ---------- tampilan loading "Membaca halaman" ----------
    const SCAN_STEPS = [['open', 'Membuka reader'], ['scan', 'Memindai halaman'], ['verify', 'Memverifikasi']];
    const SCAN_HINT = {
        open: 'Menghubungi halaman reader di latar belakang…',
        scan: 'Menggulir reader agar semua gambar termuat…',
        verify: 'Memastikan tidak ada halaman yang terlewat…',
        done: 'Selesai — menyusun thumbnail…'
    };
    function scanFmt(ms) { const t = Math.floor(ms / 1000); return t < 60 ? t + ' dtk' : Math.floor(t / 60) + ':' + String(t % 60).padStart(2, '0'); }
    function scanCardHtml(P) {
        const ch = P.chapters[P.cur];
        return '<div class="pv-msg"><div class="sc-card" id="dd-sc">' +
            '<div class="sc-head"><div class="pv-spin sc-spin"></div><div class="sc-ht"><b>Membaca post</b><small>' + esc(ch ? ch.title : '') + '</small></div></div>' +
            '<ol class="sc-steps">' + SCAN_STEPS.map((x, i) => '<li data-p="' + x[0] + '"><i>' + (i + 1) + '</i><span>' + x[1] + '</span></li>').join('') + '</ol>' +
            '<div class="sc-count"><b id="dd-sc-n">0</b><span>halaman ditemukan</span></div>' +
            '<div class="sc-bar"><i id="dd-sc-bar"></i></div>' +
            '<div class="sc-meta"><span id="dd-sc-hint"></span><span id="dd-sc-pct"></span><span id="dd-sc-t">0 dtk</span></div>' +
            '</div></div>';
    }
    // perbarui kartu loading + strip progres tipis + pill status (tanpa render ulang)
    function pvScanPaint() {
        const P = pv;
        if (!P || !P.scan) return;
        const S = P.scan, order = ['open', 'scan', 'verify', 'done'], cur = order.indexOf(S.phase);
        S.pct = Math.max(S.pct || 0, S.shown || 0); S.shown = S.pct;
        const pct = Math.round(S.pct);
        const card = $('dd-sc');
        if (card) {
            card.querySelectorAll('.sc-steps li').forEach(li => {
                const k = order.indexOf(li.dataset.p);
                li.className = k < cur || S.phase === 'done' ? 'done' : k === cur ? 'now' : '';
            });
            const n = $('dd-sc-n'); if (n) n.textContent = S.count;
            const b = $('dd-sc-bar'); if (b) b.style.width = pct + '%';
            const h = $('dd-sc-hint'); if (h) h.textContent = SCAN_HINT[S.phase] || '';
            const q = $('dd-sc-pct'); if (q) q.textContent = pct + '%';
            const t = $('dd-sc-t'); if (t) t.textContent = scanFmt(Date.now() - S.t0);
        }
        const strip = $('dd-pv-prog');
        if (strip) { strip.hidden = !P.scanning; const f = strip.firstChild; if (f) f.style.width = pct + '%'; }
        const lab = S.phase === 'open' ? 'Membuka reader…' : S.phase === 'verify' ? 'Memverifikasi… ' + S.count + ' hal.' : S.count ? 'Memindai · ' + S.count + ' hal. · ' + pct + '%' : 'Memindai halaman…';
        pvStatus(lab, 'busy');
    }
    function pvScanStop() {
        const P = pv;
        if (!P) return;
        if (P.scanTick) { clearInterval(P.scanTick); P.scanTick = 0; }
        P.scan = null;
        const strip = $('dd-pv-prog'); if (strip) { strip.hidden = true; if (strip.firstChild) strip.firstChild.style.width = '0'; }
    }
    // ---------- pindah / urutkan halaman lewat drag & drop ----------
    // Seret pegangan (⋮⋮) di thumbnail:
    //  • lepas di antara gambar lain  → urutan berubah (gambar 1 jadi gambar 2, dst.)
    //  • lepas di chapter lain (sidebar) → halaman pindah ke akhir chapter itu (jadi 1 chapter)
    // Yang ikut terseret = semua halaman tercentang bila halaman yang dipegang ikut tercentang; kalau tidak, hanya halaman itu.
    // Chapter yang daftarnya diubah masuk P.dirty → daftar buatan sendiri itu yang dipakai saat download & antrian.
    const GRIP_HTML = '<span class="gr" title="Seret untuk mengubah urutan, atau lepas di post lain (sidebar) untuk memindahkan"><svg viewBox="0 0 24 12"><circle cx="6" cy="3" r="1.6"/><circle cx="12" cy="3" r="1.6"/><circle cx="18" cy="3" r="1.6"/><circle cx="6" cy="9" r="1.6"/><circle cx="12" cy="9" r="1.6"/><circle cx="18" cy="9" r="1.6"/></svg></span>';
    function pvChForce(url, on) {
        const P = pv; if (!P || !url) return;
        const k = P.chapters.findIndex(c => c.url === url);
        if (k < 0 || !!P.chapters[k].checked === on) return;
        P.chapters[k].checked = on;
        if (P.rows && P.rows[k] && P.rows[k].firstChild) P.rows[k].firstChild.checked = on;
    }
    function pvFlashRow(url) {
        const P = pv; if (!P || !P.rows) return;
        const k = P.chapters.findIndex(c => c.url === url), r = P.rows[k];
        if (!r) return;
        r.classList.add('flash'); setTimeout(() => r.classList.remove('flash'), 900);
    }
    // daftar halaman buatan sendiri (hasil pindah / urut / edit) untuk chapter c → [{url,w,h,checked,edited}] atau null (= pakai daftar asli)
    // Aturan "dicentang" sama dengan download chapter biasa: mode antrian = yang tercentang; mode biasa = semua kecuali yang di-uncheck eksplisit.
    function pvCustomPre(c) {
        const P = pv;
        if (!P || !P.dirty || !c || !P.dirty.has(c.url)) return null;
        const its = P.cache.get(c.url);
        if (!its) return null;
        const sk = P.skip.get(c.url);
        return its.filter(x => P.qjob ? x.checked : !(sk && sk.has(x.url)))
            .map(x => ({ url: x.url, w: x.w, h: x.h, checked: true, edited: !!x.edited }));
    }
    // salinan chapter yang membawa .pre (dan .pre untuk chapter yang digabung ke dalamnya)
    function pvJobCh(c) {
        const pre = pvCustomPre(c);
        const ex = (c.extra && c.extra.length) ? c.extra.map(pvJobCh) : null;
        if (!pre && !ex) return c;
        const w = Object.assign({}, c);
        w._o = c._o || c;   // label progres tetap menempel ke baris chapter aslinya
        if (pre) w.pre = pre;
        if (ex) w.extra = ex;
        return w;
    }
    async function pvLoadList(ch) {
        const P = pv;
        const imgs = await getChapterImages(ch.url, null, () => pv !== P);
        if (pv !== P) return null;
        const sk = P.skip.get(ch.url);
        return imgs.map(x => ({ url: x.url, w: x.w, h: x.h, ch: ch.url, checked: !!((autoSel || P.qjob) && !(sk && sk.has(x.url))), ts: 0, thumb: null, hv: null, hp: null, el: null, dead: false, tfail: false }));
    }
    function pvDragSet(i) {
        const P = pv;
        if (!P || !P.items[i]) return [];
        return P.items[i].checked ? editSelIdx() : [i];
    }
    // ubah urutan di chapter yang dibuka: pindahkan item idxs ke posisi "at" (indeks sisip pada daftar sebelum dipindah)
    function pvReorder(moveIdx, at) {
        const P = pv;
        if (!P || busy || P.scanning || !moveIdx.length) return false;
        const idxs = moveIdx.slice().sort((a, b) => a - b);
        at = Math.max(0, Math.min(P.items.length, at));
        const newPos = at - idxs.filter(i => i < at).length;
        if (idxs.every((v, j) => j === 0 || v === idxs[j - 1] + 1) && newPos === idxs[0]) return false;   // posisi tidak berubah
        const ch = P.chapters[P.cur];
        editPushUndo(idxs.length > 1 ? 'urutkan ' + idxs.length + ' halaman' : 'pindah urutan halaman');
        const set = new Set(idxs), mv = idxs.map(i => P.items[i]);
        const rest = P.items.filter((_, i) => !set.has(i));
        rest.splice(newPos, 0, ...mv);
        P.items = rest;
        if (ch) { P.cache.set(ch.url, rest); P.dirty.add(ch.url); }
        P.last = -1;
        pvRender(true); pvUpdate(); pvMergeRefresh();
        mv.forEach(it => { if (it.el) { it.el.classList.add('flash'); const e = it.el; setTimeout(() => e.classList.remove('flash'), 900); } });
        if (mv[0] && mv[0].el && mv[0].el.scrollIntoView) mv[0].el.scrollIntoView({ block: 'nearest' });
        pvStatus('Urutan halaman diubah', 'ok');
        log('ok', 'edit', 'Urutan: ' + idxs.length + ' halaman dipindah ke posisi ' + (newPos + 1));
        return true;
    }
    // pindahkan item idxs dari chapter yang dibuka ke AKHIR chapter k
    async function pvMoveToChapter(moveIdx, k) {
        const P = pv;
        if (!P || busy || P.scanning || P.moving || !moveIdx.length) return;
        const src = P.chapters[P.cur], dst = P.chapters[k];
        if (!src || !dst || k === P.cur) return;
        const mv = moveIdx.slice().sort((a, b) => a - b).map(i => P.items[i]).filter(Boolean);
        if (!mv.length) return;
        const cur = P.cur, srcItems = P.items;
        P.moving = true;
        try {
            let dl = P.cache.get(dst.url);
            if (!dl) {
                pvStatus('Memuat post tujuan…', 'busy');
                toast('Memuat post tujuan…', 'busy');
                try { dl = await pvLoadList(dst); }
                catch (e) {
                    if (pv !== P) return;
                    log('err', 'edit', 'Post tujuan gagal dimuat: "' + dst.title + '" — ' + (e && e.message), e && e.stack);
                    pvStatus('', ''); toast('Post tujuan gagal dimuat: ' + (e && e.message), 'err');
                    return;
                }
                if (!dl || pv !== P) return;
            }
            if (P.cur !== cur || P.items !== srcItems) { pvStatus('', ''); toast('Dibatalkan — post berubah saat memuat', 'err'); return; }
            const have = new Set(dl.map(x => x.url)), go = [];
            let dup = 0;
            mv.forEach(it => { if (have.has(it.url)) dup++; else { go.push(it); have.add(it.url); } });
            if (!go.length) { pvStatus('', ''); toast('Semua halaman sudah ada di post tujuan', 'err'); return; }
            const skS = P.skip.get(src.url);
            let skD = P.skip.get(dst.url);
            const skips = {}; skips[src.url] = Array.from(skS || []); skips[dst.url] = Array.from(skD || []);
            editPushUndo('pindah ' + go.length + ' halaman ke "' + dst.title + '"', { other: { chUrl: dst.url, items: editSnapItems(dl) }, skips });
            hideHover();
            const goSet = new Set(go);
            go.forEach(it => {
                dropHv(it); it.el = null; it.ch = dst.url;
                if (skS && skS.has(it.url)) { skS.delete(it.url); if (!skD) { skD = new Set(); P.skip.set(dst.url, skD); } skD.add(it.url); }
            });
            const rest = srcItems.filter(it => !goSet.has(it));
            P.items = rest;
            P.cache.set(src.url, rest);
            P.dirty.add(src.url); P.dirty.add(dst.url);   // lindungi dari pembuangan cache sebelum cachePut
            cachePut(P, dst.url, dl.concat(go));
            pvChForce(dst.url, true);
            if (!rest.length) { pvChForce(src.url, false); toast('Post ini sekarang kosong — dilepas dari pilihan post', 'ok'); }
            P.last = -1;
            pvRender(true); pvUpdate(); pvMergeRefresh();
            pvFlashRow(dst.url);
            pvStatus(go.length + ' halaman dipindah ke "' + dst.title + '"' + (dup ? ' · ' + dup + ' duplikat dilewati' : ''), 'ok');
            toast(go.length + ' halaman dipindah ke "' + dst.title + '"' + (dup ? ' · ' + dup + ' duplikat dilewati' : ''), 'ok');
            log('ok', 'edit', 'Pindah ' + go.length + ' halaman: "' + src.title + '" → "' + dst.title + '" (sekarang ' + (dl.length + go.length) + ' halaman)' + (dup ? ', ' + dup + ' duplikat dilewati' : ''));
        } finally { P.moving = false; }
    }
    function pvDndStart(e, i) {
        const P = pv;
        if (!P || busy || P.scanning || P.moving || P.dnd) return;
        const idxs = pvDragSet(i);
        if (!idxs.length) return;
        e.preventDefault();
        hideHover();
        const grid = $('dd-pv-grid'), side = $('dd-pv-chs');
        const D = P.dnd = { idxs, x: e.clientX, y: e.clientY, sx: e.clientX, sy: e.clientY, started: false, target: null, mark: null, timer: 0, addedSd: false, ghost: null };
        const clearMark = () => { if (D.mark) { D.mark.classList.remove('dnd-l', 'dnd-r', 'dnd-over'); D.mark = null; } };
        const hit = () => {
            if (P.box.classList.contains('narrow')) {   // layar sempit: sidebar chapter dibuka bila pointer di tepi kiri
                const br = P.box.getBoundingClientRect();
                if (!P.box.classList.contains('sd-open') && D.x < br.left + 36) { P.box.classList.add('sd-open'); D.addedSd = true; }
                else if (D.addedSd && D.x > br.left + 330) { P.box.classList.remove('sd-open'); D.addedSd = false; }
            }
            const el = document.elementFromPoint(D.x, D.y);
            if (!el || !el.closest) return;
            const row = el.closest('#dd-pv-chs .ch');
            if (row) {
                clearMark(); D.target = null;
                const k = +row.dataset.k;
                if (k !== P.cur) { D.target = { type: 'ch', k }; D.mark = row; row.classList.add('dnd-over'); }
                return;
            }
            const itEl = el.closest('.pv-it');
            if (itEl && itEl.parentNode === grid) {
                clearMark();
                const j = +itEl.dataset.i, r = itEl.getBoundingClientRect(), after = D.x > r.left + r.width / 2;
                D.target = { type: 'pos', at: j + (after ? 1 : 0) };
                D.mark = itEl; itEl.classList.add(after ? 'dnd-r' : 'dnd-l');
                return;
            }
            if (grid.contains(el) && P.items.length) {   // celah antar gambar: pertahankan target; di bawah gambar terakhir: taruh di akhir
                const lastEl = P.items[P.items.length - 1].el;
                if (lastEl && D.y > lastEl.getBoundingClientRect().bottom) {
                    clearMark(); D.target = { type: 'pos', at: P.items.length }; D.mark = lastEl; lastEl.classList.add('dnd-r');
                }
                return;
            }
            clearMark(); D.target = null;
        };
        const tick = () => {
            const edge = 56, spd = 22;
            const sc = (box) => {
                const r = box.getBoundingClientRect();
                if (D.x < r.left || D.x > r.right || D.y < r.top - 30 || D.y > r.bottom + 30) return false;
                let d = 0;
                if (D.y < r.top + edge) d = -Math.ceil((r.top + edge - D.y) / edge * spd);
                else if (D.y > r.bottom - edge) d = Math.ceil((D.y - (r.bottom - edge)) / edge * spd);
                if (!d) return false;
                const b = box.scrollTop; box.scrollTop += d; return box.scrollTop !== b;
            };
            if (sc(grid) | sc(side)) hit();
        };
        const onMove = (ev) => {
            D.x = ev.clientX; D.y = ev.clientY;
            if (!D.started) {
                if (Math.hypot(D.x - D.sx, D.y - D.sy) < 6) return;
                D.started = true;
                const g = document.createElement('div');
                g.className = 'pv-ghost';
                const it0 = P.items[i];
                if (it0 && it0.thumb) { const im = document.createElement('img'); im.alt = ''; im.src = it0.thumb; g.appendChild(im); }
                if (idxs.length > 1) { const b = document.createElement('b'); b.textContent = idxs.length; g.appendChild(b); }
                P.el.appendChild(g); D.ghost = g;
                idxs.forEach(j => { const it = P.items[j]; if (it && it.el) it.el.classList.add('dnd-src'); });
                P.el.classList.add('dnd-on');
                D.timer = setInterval(tick, 40);
            }
            ev.preventDefault();
            D.ghost.style.transform = 'translate(' + (D.x + 14) + 'px,' + (D.y + 14) + 'px)';
            hit();
        };
        const end = (ok) => {
            document.removeEventListener('pointermove', onMove, true);
            document.removeEventListener('pointerup', onUp, true);
            document.removeEventListener('pointercancel', onCancel, true);
            document.removeEventListener('keydown', onKey, true);
            clearInterval(D.timer); clearMark();
            if (D.ghost) D.ghost.remove();
            P.el.classList.remove('dnd-on');
            grid.querySelectorAll('.dnd-src').forEach(x => x.classList.remove('dnd-src'));
            if (D.addedSd) P.box.classList.remove('sd-open');
            P.dnd = null;
            if (D.started) { P.dndSwallow = true; setTimeout(() => { P.dndSwallow = false; }, 80); }
            if (!(ok && D.started && D.target) || pv !== P) return;
            if (D.target.type === 'pos') pvReorder(idxs, D.target.at);
            else pvMoveToChapter(idxs, D.target.k);
        };
        const onUp = () => end(true);
        const onCancel = () => end(false);
        const onKey = (ev) => { if (ev.key === 'Escape') { ev.preventDefault(); ev.stopPropagation(); end(false); } };
        document.addEventListener('pointermove', onMove, { capture: true, passive: false });
        document.addEventListener('pointerup', onUp, true);
        document.addEventListener('pointercancel', onCancel, true);
        document.addEventListener('keydown', onKey, true);
    }
    function pvMakeEl(it, i) {
        const d = document.createElement('div');
        d.className = 'pv-it' + (it.checked ? ' on' : ' off') + (it.edited ? ' edited' : '');
        d.dataset.i = i;
        d.innerHTML = '<img alt="" draggable="false" decoding="async"><span class="ck"></span><span class="n">#' + pad2(i) + '</span><span class="d">' + (it.w && it.h ? it.w + '×' + it.h : '') + '</span>' + GRIP_HTML;
        it.el = d;
        if (it.thumb) { d.firstChild.src = it.thumb; d.classList.add('rdy'); }
        else if (it.tfail) d.classList.add('rdy', 'bad');
        return d;
    }
    function pvObserve(P, from) {
        const part = P.items.slice(from);
        if (P.io) part.forEach(it => { if (it.el) P.io.observe(it.el); });
        else part.forEach(it => { if (!it.thumb && !it.tfail) tqAdd(it); });
    }
    // tambahkan item baru di akhir grid (tanpa membangun ulang)
    function pvAppend(from) {
        const P = pv, grid = $('dd-pv-grid');
        if (!P || !grid) return;
        const frag = document.createDocumentFragment();
        for (let i = from; i < P.items.length; i++) frag.appendChild(pvMakeEl(P.items[i], i));
        grid.appendChild(frag);
        pvObserve(P, from);
        pvUpdate();
    }
    function pvRender(keep) {
        const P = pv, grid = $('dd-pv-grid');
        if (!P || !grid) return;
        const st = keep ? grid.scrollTop : 0;
        hideHover();
        if (P.io) { P.io.disconnect(); P.io = null; }
        grid.innerHTML = '';
        P.over = null;
        if (!P.items.length) {
            grid.scrollTop = 0;
            grid.innerHTML = P.scanning
                ? scanCardHtml(P)
                : '<div class="pv-msg">Tidak ada gambar. Coba “Muat ulang” atau atur selector / host di Pengaturan (⚙).</div>';
            pvUpdate();
            return;
        }
        const frag = document.createDocumentFragment();
        P.items.forEach((it, i) => frag.appendChild(pvMakeEl(it, i)));
        grid.appendChild(frag);
        // thumbnail hanya dimuat untuk item yang terlihat (+ margin)
        if ('IntersectionObserver' in window) {
            P.io = new IntersectionObserver((es) => {
                for (const e of es) {
                    const it = P.items[+e.target.dataset.i];
                    if (!it) continue;
                    if (e.isIntersecting) { if (!it.thumb && !it.tfail) tqAdd(it); } else tqDel(it);
                }
            }, { root: grid, rootMargin: '400px 0px' });
        }
        pvObserve(P, 0);
        grid.scrollTop = st;
        pvUpdate();
    }
    function cachePut(P, url, items) {
        P.cache.set(url, items);
        while (P.cache.size > 4) {
            let dropped = false;
            for (const [u, its] of P.cache) { if (u !== url && !(P.dirty && P.dirty.has(u))) { its.forEach(killItem); P.cache.delete(u); dropped = true; break; } }
            if (!dropped) break;
        }
    }
    async function pvOpenChapter(k, force) {
        const P = pv;
        if (!P) return;
        const ch = P.chapters[k];
        if (!ch) return;
        if (P.cur !== k) editClearUndo();
        if (force && P.dirty && P.dirty.has(ch.url)) {
            if (!(await ddConfirm('Muat ulang akan membuang hasil edit post ini.', { title: 'Muat ulang post', ok: 'Muat ulang', danger: true })) || pv !== P) return;
            P.dirty.delete(ch.url); P.skip.delete(ch.url);
            const jc = P.qjob && P.qjob.chapters[ch.idx];
            if (jc && jc.pre) { delete jc.pre; jc.skip = []; keepRebuild(); queueSave(); }
        }
        if (force) { const old = P.cache.get(ch.url); if (old) { old.forEach(killItem); P.cache.delete(ch.url); if (P.items === old) P.items = []; } }
        const hit = P.cache.get(ch.url);
        if (!hit && busy) { toast('Sedang download — tunggu selesai atau tekan Stop', 'err'); return; }
        hideHover();
        P.items.forEach(tqDel);
        if (P.scanning) P.items.forEach(killItem);   // sisa hasil sementara chapter sebelumnya
        P.cur = k;
        const tok = ++P.tok;
        pvScanStop();
        P.scanning = false;
        P.box.classList.remove('sd-open');
        pvMarkCur();
        $('dd-pv-title').textContent = ch.title;
        $('dd-pv-sub').textContent = P.manga;
        if (hit) { log('debug', 'preview', 'Post dari cache: "' + ch.title + '" (' + hit.length + ' halaman)'); P.items = hit; pvStatus(hit.length + ' halaman', 'ok'); pvRender(); return; }
        const tOpen = performance.now();
        log('info', 'preview', 'Membuka post "' + ch.title + '"' + (force ? ' (muat ulang)' : ''), ch.url);
        P.items = []; P.scanning = true;
        P.scan = { phase: 'open', count: 0, pct: 2, shown: 0, t0: Date.now() };
        P.scanTick = setInterval(() => { if (pv === P && P.tok === tok) pvScanPaint(); else clearInterval(P.scanTick); }, 400);
        pvRender();
        pvScanPaint();
        const sk = P.skip.get(ch.url);
        const byUrl = new Map();
        const build = (list) => list.map(x => {
            let it = byUrl.get(x.url);
            if (!it) { it = { url: x.url, w: x.w, h: x.h, ch: ch.url, checked: !!((autoSel || P.qjob) && !(sk && sk.has(x.url))), ts: 0, thumb: null, hv: null, hp: null, el: null, dead: false, tfail: false }; byUrl.set(x.url, it); }
            return it;
        });
        const live = () => pv === P && P.tok === tok;
        const same = (a, b) => a.length === b.length && a.every((it, i) => it === b[i]);
        // hasil sementara: preview langsung tampil selagi halaman masih dibaca
        const onItems = (list) => {
            if (!live()) return;
            const prev = P.items, next = build(list);
            P.items = next;
            if (prev.length && prev.length <= next.length && prev.every((it, i) => it === next[i])) pvAppend(prev.length);
            else pvRender(true);
        };
        let items = null, err = null;
        try {
            items = await getChapterImages(ch.url, (t, info) => {
                if (!live() || !P.scan) return;
                if (info) { P.scan.phase = info.phase; P.scan.count = info.count; if (info.pct != null) P.scan.pct = info.pct; }
                pvScanPaint();
            }, () => !live(), onItems);
        }
        catch (e) { err = e; }
        if (!live()) { byUrl.forEach(killItem); return; }
        pvScanStop();
        P.scanning = false;
        if (err && /^Gambar tidak ditemukan|^HTTP (404|410)$/.test(err.message || '')) (P.empty || (P.empty = new Set())).add(ch.url);
        if (err) { log('err', 'preview', 'Preview gagal: "' + ch.title + '" — ' + err.message, err && err.stack); P.items.forEach(killItem); P.items = []; pvStatus(err.message, 'err'); pvRender(); return; }
        const fin = build(items), keepSet = new Set(fin);
        byUrl.forEach(it => { if (!keepSet.has(it)) killItem(it); });
        const prev = P.items;
        P.items = fin;
        cachePut(P, ch.url, fin);
        if (P.empty) P.empty.delete(ch.url);
        pvStatus(fin.length + ' halaman', 'ok');
        log('ok', 'preview', 'Preview siap: "' + ch.title + '" · ' + fin.length + ' halaman · ' + secs(tOpen));
        if (same(prev, fin)) pvUpdate(); else pvRender(true);
    }
    function closePanel() {
        const P = pv;
        if (!P) return;
        if (P.qjob) qpvCommit(P);
        pv = null;
        log('debug', 'panel', 'Panel ditutup');
        P.tok++;
        if (P.scanTick) clearInterval(P.scanTick);
        if (P.io) P.io.disconnect();
        pvCoverDrop(P);
        hideHover(); viewClose(); editClose(); stopThumbs();
        editClearUndo();
        P.cache.forEach(its => its.forEach(killItem));
        P.items.forEach(killItem);
        TQ.q.length = 0;
        P.el.remove();
        syncUI();
        if (P.qjob && P.qReopen !== false) queueOpen();   // kembali ke antrian
    }

    // Panel yang elemennya sudah terlepas dari DOM (situs mengganti <body> saat pindah halaman) = state basi: bersihkan agar bisa dibuka lagi
    function pvEnsureAlive() {
        if (pv && pv.el && !pv.el.isConnected) {
            log('warn', 'panel', 'Panel basi (elemen terlepas saat pindah halaman) — dibersihkan');
            pv.qReopen = false;
            try { closePanel(); } catch (e) { pv = null; }
        }
    }
    async function openPanel(opts) {
        opts = opts || {};
        pvEnsureAlive();
        if (pv || opts.qjob || opts.list || !scanAll || isReader()) return openPanel0(opts);
        if (scanBusy) { toast('Masih memindai daftar post… coba lagi sebentar', 'busy'); return; }   // pemindaian masih berjalan
        const list = await collectChaptersAll();
        if (pv) return;   // panel sudah terbuka selama menunggu
        if (!list || !list.length) return;   // dibatalkan (pindah halaman)
        return openPanel0(Object.assign({}, opts, { list }));
    }
    function openPanel0(opts) {
        opts = opts || {};
        if (pv) {
            if (opts.url) { const k = pv.chapters.findIndex(c => norm(c.url) === norm(opts.url)); if (k >= 0) pvOpenChapter(k); }
            return;
        }
        const qjob = opts.qjob || null;
        const list = qjob ? qjob.chapters.map((c, i) => ({ url: c.url, title: c.title, idx: i, checked: c.on !== false, st: '' })) : (opts.list || collectChapters());
        if (!list.length) { toast('Buka halaman manga (list post) atau halaman reader dulu', 'err'); return; }
        let cur = qjob ? Math.max(0, Math.min(list.length - 1, opts.cur || 0)) : 0;
        const want = qjob ? '' : (opts.url || (isReader() ? location.href : ''));
        if (want) { const k = list.findIndex(c => norm(c.url) === norm(want)); if (k >= 0) cur = k; }

        const el = document.createElement('div');
        el.id = 'dd-pv';
        el.innerHTML = (
            '<div class="pv-win"><div class="pv-box' + (list.length < 2 ? ' nosd' : '') + '">' +
            '<header class="pv-top" title="Seret untuk memindahkan · klik 2× untuk memperbesar / mengembalikan">' +
            '<button type="button" class="pv-ib pv-tog" id="dd-pv-tog" title="Daftar post">' + IC('menu') + '</button>' +
            '<div class="pv-logo" role="img" aria-label="DD" style="background-image:url(' + LOGO_IMG + ')"></div>' +
            '<div class="t"><b id="dd-pv-title"></b><small id="dd-pv-sub"></small></div>' +
            '<span class="pv-qtag" id="dd-pv-qtag" hidden>Pilih halaman untuk antrian</span>' +
            '<span class="pv-st" id="dd-pv-st" hidden></span>' +
            '<button type="button" class="pv-ib" id="dd-pv-queue" title="Antrian download">' + IC('queue') + '<i class="lg-dot" id="dd-pv-qdot" hidden></i></button>' +
            '<button type="button" class="pv-ib" id="dd-pv-logb" title="Log aktivitas">' + IC('log') + '<i class="lg-dot" id="dd-pv-logdot" hidden></i></button>' +
            '<button type="button" class="pv-ib" id="dd-pv-gear" title="Pengaturan">' + IC('sliders') + '</button>' +
            '<span class="pv-wc">' +
            '<button type="button" class="pv-wb" id="dd-pv-min" title="Perkecil">' + WI.min + '</button>' +
            '<button type="button" class="pv-wb pv-wmax" id="dd-pv-max" title="Perbesar">' + WI.max + WI.rest + '</button>' +
            '<button type="button" class="pv-wb cls" id="dd-pv-x" title="Tutup (Esc)">' + WI.x + '</button>' +
            '</span>' +
            '</header>' +
            '<div class="pv-main">' +
            '<aside class="pv-side" id="dd-pv-side">' +
            '<div class="pv-side-h">' +
            '<div class="pv-side-t"><b>Posts</b><span class="badge" id="dd-ch-total"></span><span class="sel-n" id="dd-ch-sel"></span><button type="button" class="pv-link" id="dd-ch-all">Pilih semua</button></div>' +
            '<span class="pv-rng"><input type="text" id="dd-ch-range" placeholder="mis. 1-5,8" title="Pilih post, mis. 1-5 atau 2,4,6" spellcheck="false"><button type="button" id="dd-ch-go">Pilih</button></span>' +
            '<div class="pv-chm" id="dd-ch-mbox"><button type="button" id="dd-ch-mrg" title="Gabung post yang dicentang jadi 1 post: halaman post ke-2 dst dimasukkan ke akhir post pertama yang dicentang">Gabung post</button><button type="button" id="dd-ch-unm" title="Pisahkan lagi post yang digabung (centang target / sumbernya)">Pisah</button></div>' +
            '<div class="pv-chm pv-chh" id="dd-ch-hbox"><button type="button" id="dd-ch-hide" title="Sembunyikan post yang tidak ada gambarnya (yang sudah dibuka / diperiksa). Bisa juga periksa post lain yang belum dibuka.">Sembunyikan kosong</button><button type="button" id="dd-ch-show" hidden title="Tampilkan lagi semua post yang disembunyikan">Tampilkan (0)</button></div>' +
            '</div>' +
            '<div class="pv-chs" id="dd-pv-chs"></div>' +
            '</aside>' +
            '<section class="pv-page">' +
            '<div class="pv-bar">' +
            '<span class="pv-grp">' +
            '<button type="button" class="pv-b" id="dd-pv-sel">Pilih semua</button>' +
            '<span class="pv-rng"><input type="text" id="dd-pv-range" placeholder="mis. 1-5,8" title="Pilih halaman, mis. 1-5 atau 2,4,6" spellcheck="false"><button type="button" id="dd-pv-go">Pilih</button></span>' +
            '<button type="button" class="pv-b" id="dd-pv-reload">' + IC('refresh') + '<span>Muat ulang</span></button>' +
            '</span><i class="pv-vsep"></i>' +
            '<span class="pv-editg">' +
            '<button type="button" class="pv-b" id="dd-pv-undo" disabled title="Kembalikan edit terakhir (Ctrl+Z)">' + IC('undo') + '<span>Undo</span></button>' +
            '<button type="button" class="pv-b" id="dd-pv-merge" title="Gabung vertikal: susun halaman terpilih dari atas ke bawah jadi 1 gambar">' + IC('merge') + '<span>Gabung</span></button>' +
            '<button type="button" class="pv-b" id="dd-pv-split" title="Pecah 1 halaman menjadi beberapa bagian (garis bisa digeser)">' + IC('split') + '<span>Split</span></button>' +
            '<button type="button" class="pv-b" id="dd-pv-crop" title="Potong (crop) 1 halaman terpilih">' + IC('crop') + '<span>Potong</span></button>' +
            '<button type="button" class="pv-b" id="dd-pv-resize" title="Resize halaman terpilih (aspek rasio tetap)">' + IC('resize') + '<span>Resize</span></button>' +
            '<button type="button" class="pv-b red" id="dd-pv-del" title="Hapus halaman terpilih dari daftar (tidak mengunduh)">' + IC('trash') + '<span>Hapus</span></button>' +
            '</span>' +
            '<span class="pv-zoom" title="Jumlah kolom thumbnail">' + IC('grid') + '<input type="range" id="dd-pv-cols" min="2" max="8" step="1"><output id="dd-pv-colsv"></output></span>' +
            '</div>' +
            '<div class="pv-prog" id="dd-pv-prog" hidden><i></i></div>' +
            '<div class="pv-grid" id="dd-pv-grid"></div>' +
            '</section></div>' +
            '<footer class="pv-foot">' +
            '<div class="fl"><span id="dd-pv-count" class="pv-count"></span>' +
            '<button type="button" class="pv-chip" id="dd-pv-pick" title="Ganti folder simpan">' + IC('folder') + '<b id="dd-pv-folder">Downloads</b></button></div>' +
            '<div class="fr">' +
            '<button type="button" class="pv-b" id="dd-pv-addq" title="Tambah post terpilih ke antrian">' + IC('queue') + '<span>Antrikan</span></button>' +
            '<button type="button" class="pv-b red" id="dd-pv-stop" hidden>' + IC('stop') + '<span>Stop</span></button>' +
            '<div class="pv-split">' +
            '<button type="button" class="pv-b pri pv-sp-main" id="dd-pv-dl">' + IC('download') + '<span id="dd-pv-dl-t">Download</span></button>' +
            '<button type="button" class="pv-b pri pv-sp-car" id="dd-pv-mode" title="Pilih mode download">' + IC('chevron') + '</button>' +
            '<div class="pv-mm" id="dd-pv-mm" hidden></div>' +
            '</div></div>' +
            '</footer>' +
            settingsHtml() + logHtml() +
            '</div>' +
            ['n', 's', 'e', 'w', 'ne', 'nw', 'se', 'sw'].map(d => '<i class="rz" data-d="' + d + '"></i>').join('') +
            '</div>'
        );
        document.body.appendChild(el);
        const P = pv = { el, win: el.firstChild, box: el.querySelector('.pv-box'), geom: initGeom(), max: false, min: false, prevGeom: null, chapters: list, cur: cur, items: [], rows: [], cache: new Map(), skip: new Map(), merge: new Map(), tok: 0, scanning: false, last: -1, lastCh: -1, drag: null, moved: false, over: null, io: null, manga: qjob ? qjob.manga : mangaTitle(), qjob, qReopen: true, dirty: new Set() };
        if (qjob) qjob.chapters.forEach(c => {
            if (c.skip && c.skip.length) P.skip.set(c.url, new Set(c.skip));
            if (c.pre && c.pre.length) {   // chapter yang sudah diedit: pulihkan daftar halaman hasil edit ke cache panel
                P.cache.set(c.url, c.pre.map(x => ({ url: x.url, w: x.w, h: x.h, ch: c.url, checked: !!x.checked, edited: !!x.edited, ts: 0, thumb: null, hv: null, hp: null, el: null, dead: false, tfail: false })));
                P.dirty.add(c.url);
            }
        });

        $('dd-pv-x').onclick = closePanel;
        $('dd-pv-min').onclick = () => toggleMin(P);
        $('dd-pv-max').onclick = () => toggleMax(P);
        $('dd-pv-logb').onclick = () => logOpen();
        if ($('dd-pv-queue')) $('dd-pv-queue').onclick = () => queueOpen();
        $('dd-pv-tog').onclick = () => P.box.classList.toggle('sd-open');
        $('dd-pv-gear').onclick = () => { settingsSync(); $('dd-pv-log').hidden = true; $('dd-pv-set').hidden = false; };
        wireSettings();
        wireLog();
        wireWindow(P);
        log('info', 'panel', 'Panel dibuka · ' + list.length + ' post · aktif: "' + list[cur].title + '"', location.href);

        // --- halaman (grid) ---
        $('dd-pv-sel').onclick = () => {
            if (!P.items.length) return;
            const all = P.items.every(x => x.checked);
            P.items.forEach((_, i) => pvSet(i, !all));
            pvUpdate();
        };
        const goRange = () => {
            const txt = $('dd-pv-range').value.trim();
            if (!txt || !P.items.length) return;
            const sel = parseRange(txt, P.items.length);
            if (!sel.size) { pvStatus('Range tidak valid (contoh 1-5,8)', 'err'); return; }
            P.items.forEach((_, i) => pvSet(i, sel.has(i)));
            pvUpdate();
        };
        $('dd-pv-go').onclick = goRange;
        $('dd-pv-range').addEventListener('keydown', (e) => { if (e.key === 'Enter') goRange(); });
        $('dd-pv-reload').onclick = () => pvOpenChapter(P.cur, true);
        $('dd-pv-merge').onclick = () => { if (!busy) editOpenMergeMenu(); };
        $('dd-pv-split').onclick = () => { if (!busy) editOpenSplit(); };
        $('dd-pv-crop').onclick = () => { if (!busy) editOpenCrop(); };
        $('dd-pv-resize').onclick = () => { if (!busy) editOpenResizeDlg(); };
        $('dd-pv-del').onclick = () => { if (!busy) editDeleteSelected(); };
        if ($('dd-pv-undo')) $('dd-pv-undo').onclick = () => { if (!busy) editUndo(); };
        const cEl = $('dd-pv-cols'), grid = $('dd-pv-grid');
        cEl.value = String(10 - cols);   // kanan = thumbnail lebih besar = kolom lebih sedikit
        const applyCols = () => { cols = 10 - parseInt(cEl.value, 10); grid.style.setProperty('--c', cols); $('dd-pv-colsv').textContent = cols; hideHover(); };
        cEl.oninput = applyCols;
        cEl.onchange = () => { applyCols(); sv('dd_cols', cols); };
        applyCols();

        grid.addEventListener('mousedown', (e) => {
            if (e.button !== 0 || e.shiftKey) return;
            if (e.target.closest('.gr')) return;
            const d = e.target.closest('.pv-it');
            if (!d) return;
            e.preventDefault(); hideHover();
            const i = +d.dataset.i;
            P.drag = { start: i, last: i, state: !P.items[i].checked, moved: false };
        });
        grid.addEventListener('mouseover', (e) => {
            if (P.dnd) return;
            const d = e.target.closest ? e.target.closest('.pv-it') : null;
            if (d === P.over) return;
            P.over = d;
            hideHover();
            if (!d) return;
            const i = +d.dataset.i, g = P.drag;
            if (g) {
                if (!g.moved) { if (i === g.start) return; g.moved = true; pvSet(g.start, g.state); }
                const a = Math.min(g.last, i), b = Math.max(g.last, i);
                for (let k = a; k <= b; k++) pvSet(k, g.state);
                g.last = i; P.last = i;
                return;
            }
            scheduleHover(P.items[i], d, i);
        });
        grid.addEventListener('mouseleave', () => { P.over = null; hideHover(); });
        grid.addEventListener('scroll', hideHover, { passive: true });
        grid.addEventListener('click', (e) => {
            const d = e.target.closest('.pv-it');
            if (!d || P.moved) return;
            const i = +d.dataset.i;
            if (e.shiftKey && P.last >= 0 && P.items[P.last]) {
                const a = Math.min(P.last, i), b = Math.max(P.last, i), st = !!P.items[P.last].checked;
                for (let k = a; k <= b; k++) pvSet(k, st);
            } else pvSet(i, !P.items[i].checked);
            P.last = i; pvUpdate();
        });
        grid.addEventListener('dblclick', (e) => { const d = e.target.closest('.pv-it'); if (d && !e.target.closest('.gr')) { e.preventDefault(); viewOpen(+d.dataset.i); } });
        grid.addEventListener('contextmenu', (e) => { const d = e.target.closest('.pv-it'); if (d && !e.target.closest('.gr')) { e.preventDefault(); viewOpen(+d.dataset.i); } });
        // pegangan drag: pindah urutan / pindah ke chapter lain (klik biasa di pegangan tidak mencentang)
        grid.addEventListener('click', (e) => { if (P.dndSwallow || (e.target.closest && e.target.closest('.gr'))) { e.stopPropagation(); e.preventDefault(); } }, true);
        grid.addEventListener('pointerdown', (e) => {
            const g = e.target.closest && e.target.closest('.gr');
            if (!g || (e.pointerType === 'mouse' && e.button !== 0)) return;
            const d = g.closest('.pv-it');
            if (d) pvDndStart(e, +d.dataset.i);
        });

        // --- chapter (sidebar) ---
        const chs = $('dd-pv-chs');
        chs.addEventListener('click', (e) => {
            const r = e.target.closest('.ch');
            if (!r) return;
            const k = +r.dataset.k;
            if (e.target.closest('.cx')) { e.stopPropagation(); if (busy) { toast('Sedang download — tunggu selesai atau tekan Stop', 'err'); return; } if (pvHideCh([P.chapters[k]])) toast('Post disembunyikan — tampilkan lagi lewat tombol di sidebar', 'ok'); return; }
            if (e.target.tagName === 'INPUT') {
                const v = e.target.checked;
                if (e.shiftKey && P.lastCh >= 0) {
                    for (let j = Math.min(P.lastCh, k); j <= Math.max(P.lastCh, k); j++) { if (P.chapters[j].hidden) continue; P.chapters[j].checked = v; P.rows[j].firstChild.checked = v; }
                } else P.chapters[k].checked = v;
                P.lastCh = k; pvUpdate();
                return;
            }
            pvOpenChapter(k);
        });
        $('dd-ch-all').onclick = () => {
            const all = P.chapters.every(c => c.hidden || c.checked);
            P.chapters.forEach((c, k) => { if (c.hidden) return; c.checked = !all; P.rows[k].firstChild.checked = !all; });
            pvUpdate();
        };
        const goCh = () => {
            const txt = $('dd-ch-range').value.trim();
            if (!txt) return;
            const sel = parseRange(txt, P.chapters.length);
            if (!sel.size) { toast('Range tidak valid (contoh 1-5,8)', 'err'); return; }
            P.chapters.forEach((c, k) => { const v = !c.hidden && sel.has(k); c.checked = v; P.rows[k].firstChild.checked = v; });
            pvUpdate();
        };
        $('dd-ch-go').onclick = goCh;
        $('dd-ch-mrg').onclick = pvMergeChapters;
        $('dd-ch-unm').onclick = pvUnmergeChapters;
        $('dd-ch-hide').onclick = pvHideEmpty;
        $('dd-ch-show').onclick = pvShowAllCh;
        if (P.qjob) $('dd-ch-mbox').hidden = true;   // mode antrian: gabung chapter belum didukung
        $('dd-ch-range').addEventListener('keydown', (e) => { if (e.key === 'Enter') goCh(); });

        // --- footer ---
        $('dd-pv-pick').onclick = async () => { await pickFolder(); pvUpdate(); };
        $('dd-pv-stop').onclick = () => { stopAll(); toast('Menghentikan…', 'busy'); };
        if ($('dd-pv-addq')) $('dd-pv-addq').onclick = () => { if (!busy) queueAddFromPanel(); };
        const dlCur = async () => {
            if (busy || pv !== P || P.scanning || !P.items.some(x => x.checked)) return;
            const ch = P.chapters[P.cur];
            await runJobs([{ ch, setLabel: labelFn(ch), pre: P.items }], fmt);
            if (pv === P) pvUpdate();
        };
        const dlSel = async () => {
            if (busy || pv !== P) return;
            let sel = pvSelChs().map(pvJobCh);
            const emptyCh = sel.filter(c => c.pre && !c.pre.length);
            if (emptyCh.length) { sel = sel.filter(c => !(c.pre && !c.pre.length)); toast(emptyCh.length + ' post kosong dilewati'); }
            if (!sel.length) return;
            const what = multi === 'onezip' ? '1 ZIP (folder per post)' : multi === 'onepdf' ? '1 PDF' : 'file terpisah (' + (fmt === 'files' ? 'IMG' : fmt.toUpperCase()) + ')';
            const warn = (sel.length > 8 && !(saveMode === 'folder' && dirHandle) && multi !== 'sep') ? '\n\nCatatan: mode Downloads menyusun file di memori. Untuk banyak post lebih aman pilih Folder (tombol Ganti) agar ditulis langsung ke disk.' : '';
            if (!(await ddConfirm('Download ' + sel.length + ' post sebagai ' + what + '?\nHalaman yang tidak dicentang di preview dilewati.' + warn, { title: 'Konfirmasi download', ok: 'Download' }))) return;
            if (multi === 'sep') await runJobs(sel.map(ch => ({ ch, setLabel: labelFn(ch), pre: ch.pre || undefined })), fmt);
            else await runCombined(sel, multi === 'onezip' ? 'zip' : 'pdf');
            if (pv === P) pvUpdate();
        };

        // satu tombol download + satu menu mode
        $('dd-pv-dl').onclick = () => { if (effScope() === 'cur') dlCur(); else dlSel(); };
        const mm = $('dd-pv-mm');
        mm.innerHTML = modeMenuHtml();
        $('dd-pv-mode').setAttribute('aria-haspopup', 'menu');
        mm.setAttribute('role', 'menu');
        $('dd-pv-mode').onclick = (e) => {
            e.stopPropagation();
            if (busy) return;
            mm.hidden = !mm.hidden;
            if (!mm.hidden) {
                pvUpdate();
                const on = mm.querySelector('.mm-i.on') || mm.querySelector('.mm-i');
                if (on) { on.focus({ preventScroll: true }); on.scrollIntoView({ block: 'nearest' }); }
            }
        };
        mm.addEventListener('keydown', (e) => {
            const its = Array.prototype.slice.call(mm.querySelectorAll('.mm-i')), i = its.indexOf(document.activeElement);
            let t = null;
            if (e.key === 'ArrowDown') t = its[(i + 1) % its.length];
            else if (e.key === 'ArrowUp') t = its[(i - 1 + its.length) % its.length];
            else if (e.key === 'Home') t = its[0];
            else if (e.key === 'End') t = its[its.length - 1];
            if (t) { t.focus(); t.scrollIntoView({ block: 'nearest' }); e.preventDefault(); e.stopPropagation(); }
        });
        mm.onclick = (e) => { const b = e.target.closest('.mm-i'); if (!b) return; setMode(b.dataset.m); mm.hidden = true; pvUpdate(); };
        P.el.addEventListener('mousedown', (e) => { if (!mm.hidden && !e.target.closest('.pv-split')) mm.hidden = true; });

        if (qjob) {   // mode antrian: semua halaman default tercentang, tombol utama = simpan & kembali
            P.box.classList.add('qmode');
            const tg = $('dd-pv-qtag'); if (tg) tg.hidden = false;
            const aq = $('dd-pv-addq');
            if (aq) { aq.className = 'pv-b pri'; aq.innerHTML = IC('check') + '<span>Simpan & kembali ke antrian</span>'; aq.title = 'Simpan pilihan post & halaman ke antrian lalu kembali (Esc)'; aq.onclick = () => closePanel(); }
        }
        pvHideLoad();
        if (P.chapters[cur] && P.chapters[cur].hidden) {
            if (want) { P.chapters[cur].hidden = false; pvHideSave(); }   // dibuka eksplisit dari halaman chapter → tampilkan lagi
            else { const v = P.chapters.findIndex(c => !c.hidden); if (v >= 0) { cur = v; P.cur = v; } }
        }
        pvRenderChapters();
        pvUpdate();
        pvOpenChapter(cur);
    }

    // ------------------------------------------------------------ ikon
    const ICP = {
        x: '<path d="M6 6l12 12M18 6L6 18"/>',
        menu: '<path d="M4 7h16M4 12h16M4 17h16"/>',
        sliders: '<path d="M4 6h8M16 6h4M4 12h2M10 12h10M4 18h10M18 18h2"/><circle cx="14" cy="6" r="2"/><circle cx="8" cy="12" r="2"/><circle cx="16" cy="18" r="2"/>',
        folder: '<path d="M3 7a2 2 0 0 1 2-2h4l2 2h8a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/>',
        download: '<path d="M12 4v11M7.5 11l4.5 4.5 4.5-4.5M5 20h14"/>',
        refresh: '<path d="M20 11a8 8 0 1 0-2.3 5.7M20 4v7h-7"/>',
        stop: '<rect x="6" y="6" width="12" height="12" rx="2"/>',
        check: '<path d="M5 12.5l4.5 4.5L19 7.5"/>',
        chevron: '<path d="M4.5 15.5L12 8l7.5 7.5"/>',
        tray: '<path d="M12 3.5v11"/><path d="M7.5 10.5l4.5 4.5 4.5-4.5"/><path d="M4.5 16v1.5a2.5 2.5 0 0 0 2.5 2.5h10a2.5 2.5 0 0 0 2.5-2.5V16"/>',
        log: '<path d="M6 3h9l4 4v14H6z"/><path d="M15 3v4h4M9.5 12h6M9.5 16h6"/>',
        grid: '<rect x="4" y="4" width="7" height="7" rx="1.5"/><rect x="13" y="4" width="7" height="7" rx="1.5"/><rect x="4" y="13" width="7" height="7" rx="1.5"/><rect x="13" y="13" width="7" height="7" rx="1.5"/>',
        merge: '<rect x="3" y="3" width="8" height="8" rx="1.5"/><rect x="13" y="13" width="8" height="8" rx="1.5"/><path d="M14 7h3a2 2 0 0 1 2 2v3M10 17H7a2 2 0 0 1-2-2v-3"/>',
        crop: '<path d="M6 2v14a2 2 0 0 0 2 2h14"/><path d="M18 22V8a2 2 0 0 0-2-2H2"/>',
        split: '<path d="M12 3v18"/><path d="M3 12h18"/><rect x="3" y="3" width="18" height="18" rx="2"/>',
        resize: '<path d="M4 14v4a2 2 0 0 0 2 2h4M20 10V6a2 2 0 0 0-2-2h-4"/><path d="M14 4l6 6M4 20l6-6"/>',
        edit: '<path d="M12 20h9"/><path d="M16.5 3.5a2.1 2.1 0 0 1 3 3L7 19l-4 1 1-4 12.5-12.5z"/>',
        trash: '<path d="M3 6h18M8 6V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2M19 6l-1 14a2 2 0 0 1-2 2H8a2 2 0 0 1-2-2L5 6"/><path d="M10 11v6M14 11v6"/>',
        undo: '<path d="M9 14l-5-5 5-5"/><path d="M4 9h9a7 7 0 1 1 0 14h-3"/>',
        queue: '<path d="M4 6h16M4 12h16M4 18h10"/><path d="M17 15l3 3-3 3"/>',
        eye: '<path d="M2 12s3.6-7 10-7 10 7 10 7-3.6 7-10 7S2 12 2 12z"/><circle cx="12" cy="12" r="3"/>',
        alert: '<path d="M12 4l9 16H3z"/><path d="M12 10v4M12 17.3v.01"/>',
        search: '<circle cx="11" cy="11" r="7"/><path d="M20 20l-3.5-3.5"/>',
        globe: '<circle cx="12" cy="12" r="9"/><path d="M3 12h18"/><path d="M12 3a14 14 0 0 1 0 18"/><path d="M12 3a14 14 0 0 0 0 18"/>'
    };
    const IC = (n) => '<svg class="dd-ic" viewBox="0 0 24 24">' + ICP[n] + '</svg>';
    // ikon tombol jendela (garis tipis ala title bar Windows)
    const WS = (c, d) => '<svg class="' + c + '" viewBox="0 0 12 12">' + d + '</svg>';
    const WI = {
        min: WS('ic-min', '<path d="M1.5 6h9"/>'),
        max: WS('ic-max', '<rect x="1.5" y="1.5" width="9" height="9" rx="1"/>'),
        rest: WS('ic-rest', '<rect x="1.5" y="3.5" width="7" height="7" rx="1"/><path d="M3.5 3.5v-1a1 1 0 0 1 1-1h5a1 1 0 0 1 1 1v5a1 1 0 0 1-1 1h-1"/>'),
        x: WS('ic-x', '<path d="M1.5 1.5l9 9M10.5 1.5l-9 9"/>')
    };

    // ------------------------------------------------------------ pengaturan
    let setTab = gv('dd_set_tab', 'dl');
    const SET_TABS = [['dl', 'Unduh'], ['perf', 'Performa'], ['view', 'Preview'], ['notif', 'Notifikasi'], ['adv', 'Lanjutan']];
    if (!SET_TABS.some(t => t[0] === setTab)) setTab = 'dl';

    function settingsHtml() {
        const L = (t, d) => '<div class="l"><b>' + t + '</b>' + (d ? '<small>' + d + '</small>' : '') + '</div>';
        const sw = (id, t, d) => '<div class="r">' + L(t, d) + '<label class="sw"><input type="checkbox" id="' + id + '"><i></i></label></div>';
        const num = (id, t, d, min, max, step) => '<div class="r">' + L(t, d) +
            '<div class="num"><button type="button" data-for="' + id + '" data-st="-' + step + '">−</button>' +
            '<input type="number" id="' + id + '" min="' + min + '" max="' + max + '" step="' + step + '">' +
            '<button type="button" data-for="' + id + '" data-st="' + step + '">+</button></div></div>';
        const seg = (id, t, d, opts) => '<div class="r col">' + L(t, d) + '<div class="pv-seg wide" id="' + id + '">' +
            opts.map(o => '<button type="button" data-v="' + o[0] + '">' + o[1] + '</button>').join('') + '</div></div>';
        const txt = (id, t, d, ph) => '<div class="r col">' + L(t, d) + '<input type="text" class="tx" id="' + id + '" placeholder="' + ph + '" spellcheck="false" autocomplete="off"></div>';
        const pane = (k, body) => '<div data-p="' + k + '"' + (k === setTab ? '' : ' hidden') + '>' + body + '</div>';
        const gh = (t) => '<div class="gh">' + t + '</div>';
        const cols = (a, b) => '<div class="set-cols"><div class="set-col">' + a + '</div><div class="set-col">' + b + '</div></div>';

        return '<div class="pv-set" id="dd-pv-set" hidden><div class="set-card">' +
            '<div class="set-h"><div class="ti"><b>Pengaturan</b><small>Perubahan tersimpan otomatis</small></div>' +
            '<div class="set-lang" title="Bahasa / Language">' + IC('globe') + '<div class="pv-seg" id="dd-set-lang"><button type="button" data-v="id">ID</button><button type="button" data-v="en">EN</button></div><div class="pv-seg" id="dd-set-romaji" title="Tampilkan tulisan Jepang sebagai romaji"><button type="button" data-v="1">Romaji</button></div></div>' +
            '<button type="button" class="pv-ib" id="dd-set-x" title="Tutup (Esc)">' + IC('x') + '</button></div>' +
            '<div class="tabs" id="dd-set-tabs">' + SET_TABS.map(t => '<button type="button" data-t="' + t[0] + '"' + (t[0] === setTab ? ' class="on"' : '') + '>' + t[1] + '</button>').join('') + '</div>' +
            '<div class="set-b">' +
            pane('dl', cols(
                gh('Lokasi simpan') + '<div class="grp">' +
                '<div class="folder"><span class="fi">' + IC('folder') + '</span><div class="fn"><b id="dd-set-folder">Downloads</b><small id="dd-set-folder-d"></small></div>' +
                '<button type="button" class="pv-b" id="dd-set-pick">Pilih</button><button type="button" class="pv-b" id="dd-set-clr" hidden>Reset</button></div>' +
                sw('dd-set-sub', 'Subfolder per manga', 'Hanya berlaku saat memakai folder pilihan sendiri.') +
                sw('dd-set-rmfile', 'Nama folder & Series dalam romaji', 'Nama manga / creator berhuruf Jepang diubah ke romaji untuk nama folder, nama file, Series di ComicInfo.xml, dan judul di details.json. Kanji memakai kamus romaji (diunduh sekali, ±17 MB); bila gagal, kana tetap diromajikan dan kanji dibiarkan.') +
                '</div>' + gh('Gambar CBZ') + '<div class="grp">' +
                seg('dd-set-cbzconv', 'Konversi gambar CBZ', 'Mode CBZ: ubah semua gambar di dalam CBZ ke satu format. “Asli” = tanpa konversi. JPG paling kompatibel; WebP lebih kecil; AVIF paling kecil tapi hanya jalan di browser yang bisa mengenkode AVIF (kalau tidak, otomatis WebP) dan belum tentu terbaca semua aplikasi. Gambar yang sudah berformat tujuan tidak diproses ulang; GIF animasi hanya frame pertama.', [['off', 'Asli'], ['jpg', 'JPG'], ['webp', 'WebP'], ['avif', 'AVIF']]) +
                num('dd-set-cbzq', 'Kualitas konversi CBZ (%)', 'Berlaku untuk JPG / WebP / AVIF. 92 = hampir tanpa beda terlihat; turunkan untuk file lebih kecil.', 40, 100, 1) +
                '</div>' + gh('ZIP') + '<div class="grp">' +
                sw('dd-set-zpre', 'Nomor urut di nama folder', 'Mode 1 ZIP: “001 - Post 1”, “002 - Post 2”, …') +
                num('dd-set-zmax', 'Maks ukuran per ZIP (MB)', 'Lewat batas ini file dipecah menjadi _part2, _part3, …', 100, 3500, 100) +
                '</div>',
                gh('Metadata & cover') + '<div class="grp">' +
                sw('dd-set-mcomic', 'ComicInfo.xml di dalam CBZ', 'Mode CBZ: tambahkan ComicInfo.xml ke tiap file (judul post, nomor, series, penulis, genre, ringkasan, jumlah halaman). Bisa dibaca Mihon versi terbaru, Komga, Kavita, dll. Tidak butuh folder pilihan.') +
                sw('dd-set-mmeta', 'Metadata Mihon (details.json)', 'Mode CBZ + folder pilihan: tulis details.json di folder manga berisi author, genre, type (sebagai genre), status & deskripsi supaya tampil di Mihon.') +
                seg('dd-set-mcover', 'Cover Mihon (mode CBZ)', 'Perlu folder pilihan. Mihon hanya punya 1 cover per manga: “Sekali” = dari halaman pertama bila belum ada; “Tiap post” = ditimpa dengan halaman pertama post yang terakhir diunduh; “GIF” = animasi dari halaman pertama semua post yang diunduh dengan mode ini.', [['off', 'Mati'], ['once', 'Sekali'], ['each', 'Tiap post'], ['gif', 'GIF']]) +
                num('dd-set-mgif', 'Jeda ganti cover GIF (detik)', 'Mode GIF: halaman pertama tiap post jadi frame, berganti tiap beberapa detik lalu mengulang dari awal.', 1, 30, 1) +
                '</div>' + gh('PDF') + '<div class="grp">' +
                seg('dd-set-pdfc', 'Kompres PDF', 'Perkecil ukuran PDF dengan mengecilkan gambar & menyimpannya ulang (JPEG). “Asli” = tanpa proses ulang (tercepat, kualitas penuh). Kuat ≈ lebar 1200 px, kualitas 50%.', [['off', 'Asli'], ['low', 'Ringan'], ['med', 'Sedang'], ['high', 'Kuat']]) +
                '</div>')) +
            pane('perf', cols(
                gh('Koneksi') + '<div class="grp">' +
                num('dd-set-conc', 'Unduhan paralel', 'Jumlah gambar yang diunduh bersamaan (1–6).', 1, 6, 1) +
                num('dd-set-delay', 'Jeda antar gambar (ms)', 'Naikkan bila server membatasi / memblokir.', 0, 10000, 50) +
                num('dd-set-retry', 'Percobaan ulang', 'Berapa kali mengulang gambar yang gagal (0–5).', 0, 5, 1) +
                '</div>',
                '<div class="tip"><b>Tips</b>Koneksi lambat atau sering gagal? Turunkan paralel ke 1–2 dan naikkan jeda ke 300–500 ms.</div>')) +
            pane('view', cols(
                gh('Panel') + '<div class="grp">' +
                sw('dd-set-auto', 'Otomatis buka panel', 'Buka panel preview otomatis hanya saat membuka halaman creator / post (mis. /fanbox/user/123456). Halaman lain tidak terpengaruh.') +
                sw('dd-set-skipempty', 'Lewati post tanpa lampiran', 'Post yang tertulis “No attachments” (hanya teks / pengumuman) tidak dimasukkan ke daftar post. Matikan bila ingin tetap menampilkannya.') +
                sw('dd-set-scanall', 'Pindai semua halaman daftar', 'Saat membuka panel / Antrian di halaman creator, ikut mengambil post dari semua halaman (?o=50, ?o=100, …), bukan hanya halaman yang sedang terbuka. Matikan bila hanya mau halaman ini.') +
                sw('dd-set-autosel', 'Otomatis pilih semua gambar', 'Centang semua halaman saat preview post dimuat. Matikan bila ingin memilih manual (bawaan).') +
                sw('dd-set-edunsel', 'Batalkan pilihan setelah edit', 'Setelah gabung / split / potong / resize, hasilnya otomatis tidak dicentang supaya pilihan berikutnya bersih. Di mode antrian, centang lagi halaman yang mau ikut diunduh (mis. Pilih semua).') +
                sw('dd-set-anim', 'Animasi UI', 'Animasi buka panel, pulse tombol, shimmer thumbnail, dll. Matikan untuk tampilan lebih ringan.') +
                '</div>' + gh('Hover preview') + '<div class="grp">' +
                sw('dd-set-hover', 'Hover preview', 'Tampilkan gambar besar saat kursor diam di atas thumbnail.') +
                num('dd-set-hdelay', 'Tunda hover (ms)', 'Waktu tunggu sebelum preview muncul.', 0, 3000, 50) +
                num('dd-set-hsize', 'Ukuran hover (px)', 'Lebar maksimum jendela preview.', 240, 1000, 20) +
                '</div>',
                '<div class="tip"><b>Pintasan</b>' +
                '<kbd>Klik</kbd> pilih / batal halaman · <kbd>Shift</kbd>+klik pilih rentang<br>' +
                '<kbd>Drag</kbd> pilih banyak halaman sekaligus<br>' +
                '<kbd>Klik kanan</kbd> / <kbd>2× klik</kbd> tampilkan penuh (<kbd>←</kbd> <kbd>→</kbd> ganti halaman)<br>' +
                '<kbd>A</kbd> pilih / batal semua · <kbd>Ctrl</kbd>+<kbd>Z</kbd> undo edit · <kbd>Esc</kbd> tutup<br>' +
                '<kbd>Seret header</kbd> geser jendela · <kbd>tarik tepi / sudut</kbd> ubah ukuran · <kbd>2× klik header</kbd> maksimalkan</div>')) +
            pane('notif', cols(
                gh('Kartu selesai') + '<div class="grp">' +
                sw('dd-set-ncard', 'Kartu notifikasi selesai', 'Tampilkan ringkasan (post, halaman, durasi, lokasi simpan) di pojok layar saat download selesai. Dimatikan = toast kecil biasa.') +
                num('dd-set-nsec', 'Lama kartu tampil (detik)', 'Kartu berhenti menghitung mundur saat disorot kursor. Bila ada yang gagal, tampil lebih lama.', 3, 60, 1) +
                '</div>',
                gh('Bunyi') + '<div class="grp">' +
                sw('dd-set-nsound', 'Bunyi saat selesai', 'Bunyi singkat ketika download / antrian selesai. Bila ada yang gagal, nadanya turun. Tidak berbunyi untuk tiap manga di tengah antrian.') +
                seg('dd-set-nsnd', 'Jenis bunyi', '', [['ting', 'Ting'], ['chime', 'Lonceng'], ['soft', 'Lembut']]) +
                num('dd-set-nvol', 'Volume (%)', '', 0, 100, 10) +
                '<div class="r">' + L('Coba bunyi', 'Dengarkan bunyi dengan pengaturan di atas.') + '<button type="button" class="pv-b" id="dd-set-ntest">Tes</button></div>' +
                '</div><div class="tip"><b>Catatan</b>Browser baru mengizinkan bunyi setelah kamu mengklik halaman ini sekali, jadi bunyi mungkin tidak keluar sebelum interaksi pertama.</div>')) +
            pane('adv', cols(
                gh('Deteksi gambar') + '<div class="grp">' +
                txt('dd-set-sel', 'Selector gambar', 'Opsional. Isi bila gambar post tidak terdeteksi otomatis.', 'mis. #reader img') +
                txt('dd-set-host', 'Filter host / URL gambar', 'Opsional. Kosong = semua host.', 'mis. img.pawchive.pw') +
                '</div>',
                '<div class="tip"><b>Kapan dipakai?</b>Deteksi otomatis sudah membuang iklan, logo, dan banner. Atur dua kolom di atas hanya jika preview kosong atau ikut menampilkan gambar yang bukan halaman manga.</div>')) +
            '</div>' +
            '<div class="set-ver">qxyraxp' + (SCRIPT_VER ? ' <b>v' + esc(SCRIPT_VER) + '</b>' : '') + '</div>' +
            '<div class="set-f"><button type="button" class="pv-link" id="dd-set-reset">Reset ke bawaan</button><button type="button" class="pv-b pri" id="dd-set-done">Selesai</button></div>' +
            '</div></div>';
    }
    function settingsSync() {
        if (!$('dd-pv-set')) return;
        const on = saveMode === 'folder' && !!dirHandle;
        $('dd-set-folder').textContent = on ? dirHandle.name : 'Downloads';
        $('dd-set-folder-d').textContent = on ? 'Ditulis langsung ke folder ini' : 'Folder unduhan bawaan browser';
        $('dd-set-pick').textContent = on ? 'Ganti' : 'Pilih';
        $('dd-set-clr').hidden = !on;
        if ($('dd-set-mmeta')) $('dd-set-mmeta').checked = mihonMeta;
        if ($('dd-set-mgif')) $('dd-set-mgif').value = mihonGifSec;
        if ($('dd-set-mcomic')) $('dd-set-mcomic').checked = mihonComic;
        if ($('dd-set-rmfile')) $('dd-set-rmfile').checked = rmFile;
        if ($('dd-set-cbzconv')) $('dd-set-cbzconv').querySelectorAll('button').forEach(b => b.classList.toggle('on', b.dataset.v === cbzConv));
        if ($('dd-set-cbzq')) $('dd-set-cbzq').value = cbzQ;
        if ($('dd-set-ncard')) {
            $('dd-set-ncard').checked = notifCard; $('dd-set-nsec').value = notifSec; $('dd-set-nsound').checked = notifSound; $('dd-set-nvol').value = notifVol;
            $('dd-set-nsnd').querySelectorAll('button').forEach(b => b.classList.toggle('on', b.dataset.v === notifSnd));
        }
        if ($('dd-set-mcover')) $('dd-set-mcover').querySelectorAll('button').forEach(b => b.classList.toggle('on', b.dataset.v === mihonCover));
        $('dd-set-sub').checked = subfolder; $('dd-set-conc').value = conc; $('dd-set-delay').value = delayMs; $('dd-set-retry').value = retries;
        $('dd-set-auto').checked = autoOpen;
        if ($('dd-set-skipempty')) $('dd-set-skipempty').checked = skipEmpty;
        if ($('dd-set-scanall')) $('dd-set-scanall').checked = scanAll;
        if ($('dd-set-autosel')) $('dd-set-autosel').checked = autoSel;
        if ($('dd-set-edunsel')) $('dd-set-edunsel').checked = editUnsel;
        if ($('dd-set-anim')) $('dd-set-anim').checked = animOn;
        $('dd-set-hover').checked = hoverOn; $('dd-set-hdelay').value = hoverDelay; $('dd-set-hsize').value = hoverSize;
        $('dd-set-zpre').checked = zipPrefix; $('dd-set-zmax').value = zipMax;
        if ($('dd-set-pdfc')) $('dd-set-pdfc').querySelectorAll('button').forEach(b => b.classList.toggle('on', b.dataset.v === pdfComp));
        $('dd-set-sel').value = imgSel; $('dd-set-host').value = hostSel;
        if ($('dd-set-lang')) $('dd-set-lang').querySelectorAll('button').forEach(b => b.classList.toggle('on', b.dataset.v === lang));
        if ($('dd-set-romaji')) $('dd-set-romaji').querySelector('button').classList.toggle('on', romaji);
        const dep = (id, show) => { const el = $(id), r = el && el.closest('.r'); if (r) r.hidden = !show; };
        dep('dd-set-cbzq', cbzConv !== 'off'); dep('dd-set-mgif', mihonCover === 'gif');
        dep('dd-set-nsec', notifCard); dep('dd-set-nsnd', notifSound); dep('dd-set-nvol', notifSound); dep('dd-set-ntest', notifSound);
        dep('dd-set-hdelay', hoverOn); dep('dd-set-hsize', hoverOn);
    }
    function resetSettings() {
        fmt = 'zip'; multi = 'sep'; dlScope = 'cur'; modeS = 'cur:zip'; modeM = 'cur:zip'; subfolder = true; conc = 3; delayMs = 150; retries = 2;
        autoOpen = false; skipEmpty = true; scanAll = true; autoSel = false; editUnsel = true; mihonCover = 'once'; mihonMeta = true; mihonComic = true; rmFile = true; cbzConv = 'off'; cbzQ = 92; notifCard = true; notifSec = 12; notifSound = true; notifSnd = 'ting'; notifVol = 40; mihonGifSec = 3; animOn = true; hoverOn = true; hoverDelay = 350; hoverSize = 520; zipMax = 1800; zipPrefix = true; pdfComp = 'off'; imgSel = ''; hostSel = '';
        sv('dd_fmt', fmt); sv('dd_multi', multi); sv('dd_scope', dlScope); sv('dd_mode_s', modeS); sv('dd_mode_m', modeM); sv('dd_subfolder', subfolder); sv('dd_conc', conc); sv('dd_delay', delayMs); sv('dd_retry', retries);
        sv('dd_auto_open', autoOpen); sv('dd_scan_all', scanAll); sv('dd_skip_empty', skipEmpty); sv('dd_auto_sel', autoSel); sv('dd_edit_unsel', editUnsel); sv('dd_anim', animOn); sv('dd_hover', hoverOn); sv('dd_hover_delay', hoverDelay); sv('dd_hover_size', hoverSize); sv('dd_zip_max', zipMax); sv('dd_zip_prefix', zipPrefix); sv('dd_pdf_comp', pdfComp); sv('dd_mihon_cover_mode', mihonCover); sv('dd_mihon_gif_sec', mihonGifSec); sv('dd_mihon_meta', mihonMeta);
        sv('dd_img_sel', imgSel); sv('dd_host_sel', hostSel); setRomaji(true);
        sv('dd_mihon_comic', mihonComic); sv('dd_rm_file', rmFile); sv('dd_cbz_conv', cbzConv); sv('dd_cbz_q', cbzQ); sv('dd_n_card', notifCard); sv('dd_n_sec', notifSec); sv('dd_n_sound', notifSound); sv('dd_n_snd', notifSnd); sv('dd_n_vol', notifVol);
        for (const it of HV.order.slice()) dropHv(it);
        hideHover();
        sv('dd_geom', '');
        sv('dd_ed_geom', '');
        if (pv) { pv.geom = initGeom(); pv.max = false; applyGeom(pv); }
        if (ED.el) { ED.geom = editInitGeom(); ED.max = false; editApplyGeom(); }
        applyAnim();
    }
    function wireSettings() {
        const root = $('dd-pv-set');
        const close = () => { root.hidden = true; };
        $('dd-set-x').onclick = close;
        $('dd-set-done').onclick = close;
        root.addEventListener('mousedown', (e) => { if (e.target === root) close(); });

        // tab
        $('dd-set-tabs').onclick = (e) => {
            const b = e.target.closest('button[data-t]');
            if (!b) return;
            setTab = b.dataset.t; sv('dd_set_tab', setTab);
            $('dd-set-tabs').querySelectorAll('button').forEach(x => x.classList.toggle('on', x === b));
            root.querySelectorAll('[data-p]').forEach(p => { p.hidden = p.dataset.p !== setTab; });
        };
        // tombol +/-
        root.addEventListener('click', (e) => {
            const b = e.target.closest('button[data-st]');
            if (!b) return;
            const inp = $(b.dataset.for);
            inp.value = (parseFloat(inp.value) || 0) + parseFloat(b.dataset.st);
            inp.dispatchEvent(new Event('change'));
        });

        // folder
        $('dd-set-pick').onclick = async () => { await pickFolder(); settingsSync(); pvUpdate(); };
        $('dd-set-clr').onclick = async () => { await resetFolder(); settingsSync(); pvUpdate(); };

        // segmented

        // toggle & angka
        $('dd-set-sub').onchange = (e) => { subfolder = e.target.checked; sv('dd_subfolder', subfolder); };
        $('dd-set-auto').onchange = (e) => { autoOpen = e.target.checked; sv('dd_auto_open', autoOpen); };
        if ($('dd-set-skipempty')) $('dd-set-skipempty').onchange = (e) => { skipEmpty = e.target.checked; sv('dd_skip_empty', skipEmpty); PAGE_CACHE.clear(); };
        if ($('dd-set-scanall')) $('dd-set-scanall').onchange = (e) => { scanAll = e.target.checked; sv('dd_scan_all', scanAll); PAGE_CACHE.clear(); };
        if ($('dd-set-autosel')) $('dd-set-autosel').onchange = (e) => { autoSel = e.target.checked; sv('dd_auto_sel', autoSel); };
        if ($('dd-set-edunsel')) $('dd-set-edunsel').onchange = (e) => { editUnsel = e.target.checked; sv('dd_edit_unsel', editUnsel); };
        if ($('dd-set-anim')) $('dd-set-anim').onchange = (e) => { animOn = e.target.checked; sv('dd_anim', animOn); applyAnim(); };
        $('dd-set-hover').onchange = (e) => { hoverOn = e.target.checked; sv('dd_hover', hoverOn); hideHover(); settingsSync(); };
        if ($('dd-set-mcover')) $('dd-set-mcover').onclick = (e) => { const b = e.target.closest('button[data-v]'); if (b) { mihonCover = b.dataset.v; sv('dd_mihon_cover_mode', mihonCover); settingsSync(); } };
        if ($('dd-set-mmeta')) $('dd-set-mmeta').onchange = (e) => { mihonMeta = e.target.checked; sv('dd_mihon_meta', mihonMeta); };
        $('dd-set-zpre').onchange = (e) => { zipPrefix = e.target.checked; sv('dd_zip_prefix', zipPrefix); };
        if ($('dd-set-romaji')) $('dd-set-romaji').onclick = () => setRomaji(!romaji);
        if ($('dd-set-lang')) $('dd-set-lang').onclick = (e) => { const b = e.target.closest('button[data-v]'); if (b && b.dataset.v !== lang) setLang(b.dataset.v); };
        if ($('dd-set-pdfc')) $('dd-set-pdfc').onclick = (e) => { const b = e.target.closest('button[data-v]'); if (b) setPdfComp(b.dataset.v); };
        const num = (id, key, lo, hi, dflt, set) => { $(id).onchange = (e) => { const v = clamp(int(e.target.value, dflt), lo, hi); e.target.value = v; set(v); sv(key, v); }; };
        num('dd-set-conc', 'dd_conc', 1, 6, 3, v => { conc = v; });
        num('dd-set-delay', 'dd_delay', 0, 10000, 150, v => { delayMs = v; });
        num('dd-set-retry', 'dd_retry', 0, 5, 2, v => { retries = v; });
        num('dd-set-hdelay', 'dd_hover_delay', 0, 3000, 350, v => { hoverDelay = v; });
        num('dd-set-hsize', 'dd_hover_size', 240, 1000, 520, v => { hoverSize = v; for (const it of HV.order.slice()) dropHv(it); });
        num('dd-set-zmax', 'dd_zip_max', 100, 3500, 1800, v => { zipMax = v; });
        num('dd-set-cbzq', 'dd_cbz_q', 40, 100, 92, v => { cbzQ = v; });
        num('dd-set-mgif', 'dd_mihon_gif_sec', 1, 30, 3, v => { mihonGifSec = v; });
        if ($('dd-set-rmfile')) $('dd-set-rmfile').onchange = (e) => { rmFile = e.target.checked; sv('dd_rm_file', rmFile); };
        if ($('dd-set-mcomic')) $('dd-set-mcomic').onchange = (e) => { mihonComic = e.target.checked; sv('dd_mihon_comic', mihonComic); };
        if ($('dd-set-cbzconv')) $('dd-set-cbzconv').onclick = (e) => { const b = e.target.closest('button[data-v]'); if (!b || !(b.dataset.v === 'off' || CBZ_FMT[b.dataset.v])) return; cbzConv = b.dataset.v; sv('dd_cbz_conv', cbzConv); $('dd-set-cbzconv').querySelectorAll('button').forEach(x => x.classList.toggle('on', x === b)); settingsSync(); };
        $('dd-set-ncard').onchange = (e) => { notifCard = e.target.checked; sv('dd_n_card', notifCard); settingsSync(); };
        num('dd-set-nsec', 'dd_n_sec', 3, 60, 12, v => { notifSec = v; });
        $('dd-set-nsound').onchange = (e) => { notifSound = e.target.checked; sv('dd_n_sound', notifSound); settingsSync(); if (notifSound) playDone('ok', true); };
        $('dd-set-nsnd').onclick = (e) => { const b = e.target.closest('button[data-v]'); if (b) { notifSnd = b.dataset.v; sv('dd_n_snd', notifSnd); settingsSync(); playDone('ok', true); } };
        num('dd-set-nvol', 'dd_n_vol', 0, 100, 40, v => { notifVol = v; playDone('ok', true); });
        $('dd-set-ntest').onclick = () => playDone('ok', true);
        $('dd-set-sel').onchange = (e) => { imgSel = e.target.value.trim(); sv('dd_img_sel', imgSel); };
        $('dd-set-host').onchange = (e) => { hostSel = e.target.value.trim(); sv('dd_host_sel', hostSel); };

        // reset
        $('dd-set-reset').onclick = async () => {
            if (!(await ddConfirm('Kembalikan semua pengaturan ke nilai bawaan?\n(Folder simpan tidak diubah; posisi & ukuran jendela ikut di-reset.)', { title: 'Reset pengaturan', ok: 'Reset', danger: true }))) return;
            resetSettings(); settingsSync(); pvUpdate(); toast('Pengaturan dikembalikan ke bawaan', 'ok');
        };
    }

    // ------------------------------------------------------------ panel log
    function logHtml() {
        return '<div class="pv-set pv-logp" id="dd-pv-log" hidden><div class="set-card log-card">' +
            '<div class="set-h"><div class="ti"><b>Log aktivitas</b><small id="dd-log-sub"></small></div>' +
            '<button type="button" class="pv-ib" id="dd-log-x" title="Tutup (Esc)">' + IC('x') + '</button></div>' +
            '<div class="log-bar">' +
            '<div class="pv-seg" id="dd-log-lv" title="Filter level"><button type="button" data-v="all">Semua</button><button type="button" data-v="info">Info+</button><button type="button" data-v="warn">Warn+</button><button type="button" data-v="err">Error</button></div>' +
            '<input type="text" class="tx" id="dd-log-q" placeholder="Cari di log…" spellcheck="false" autocomplete="off">' +
            '<label class="log-auto"><input type="checkbox" id="dd-log-auto">Auto-scroll</label>' +
            '</div>' +
            '<div class="log-list" id="dd-log-list"></div>' +
            '<div class="set-f log-f"><button type="button" class="pv-link" id="dd-log-clear">Hapus log</button>' +
            '<span class="fr"><button type="button" class="pv-b" id="dd-log-copy">Copy log</button><button type="button" class="pv-b pri" id="dd-log-dl">' + IC('download') + '<span>Download .txt</span></button></span></div>' +
            '</div></div>';
    }
    function logMatch(r) {
        if (LRANK[r.lvl] < LMIN[LOG.lv]) return false;
        if (LOG.q && (r.src + ' ' + r.msg + ' ' + r.extra).toLowerCase().indexOf(LOG.q) < 0) return false;
        return true;
    }
    function logEl(r) {
        const d = document.createElement('div');
        d.className = 'lr l-' + r.lvl;
        d.innerHTML = '<span class="ts">' + fmtTs(r.t).slice(11) + '</span><span class="lv">' + (LVL[r.lvl] || r.lvl) + '</span><span class="sr">' + esc(r.src) + '</span>' +
            '<span class="ms">' + esc(r.msg) + (r.extra ? '<small>' + esc(r.extra) + '</small>' : '') + '</span>';
        return d;
    }
    function logSub() {
        const s = $('dd-log-sub');
        if (s) s.textContent = LOG.rows.length + ' entri · ' + LOG.nErr + ' error · ' + LOG.nWarn + ' warn · sesi sejak ' + fmtTs(LOG.t0).slice(11, 19);
    }
    function logRender() {
        const list = $('dd-log-list');
        if (!list) return;
        const rows = LOG.rows.filter(logMatch), shown = rows.slice(-2000);
        list.textContent = '';
        if (!shown.length) {
            const e = document.createElement('div');
            e.className = 'log-empty';
            e.textContent = LOG.rows.length ? 'Tidak ada entri yang cocok dengan filter.' : 'Log masih kosong.';
            list.appendChild(e);
        } else {
            const fr = document.createDocumentFragment();
            shown.forEach(r => fr.appendChild(logEl(r)));
            list.appendChild(fr);
            if (rows.length > shown.length) { const n = document.createElement('div'); n.className = 'log-empty'; n.textContent = 'Menampilkan 2000 entri terakhir dari ' + rows.length + ' (Copy / Download tetap berisi semuanya).'; list.insertBefore(n, list.firstChild); }
        }
        logSub();
        if (LOG.auto) list.scrollTop = list.scrollHeight;
    }
    function logAppend(row) {
        const pan = $('dd-pv-log'), list = $('dd-log-list');
        if (!pan || pan.hidden || !list) {
            if (row.lvl === 'err') { const d = $('dd-pv-logdot'); if (d) d.hidden = false; }
            return;
        }
        logSub();
        if (!logMatch(row)) return;
        const first = list.firstChild;
        if (first && first.classList && first.classList.contains('log-empty')) list.removeChild(first);
        list.appendChild(logEl(row));
        while (list.childNodes.length > 2000) list.removeChild(list.firstChild);
        if (LOG.auto) list.scrollTop = list.scrollHeight;
    }
    function logOpen() {
        const pan = $('dd-pv-log'); if (!pan) return;
        const st = $('dd-pv-set'); if (st) st.hidden = true;
        const d = $('dd-pv-logdot'); if (d) d.hidden = true;
        pan.hidden = false;
        logRender();
    }
    function logText() {
        const st = saveMode === 'folder' && dirHandle ? 'folder "' + dirHandle.name + '"' : 'Downloads bawaan';
        const head = [
            '=== Pawchive Downloader — Log ===',
            'Script     : v' + VER,
            'Diekspor   : ' + fmtTs(Date.now()),
            'Sesi sejak : ' + fmtTs(LOG.t0),
            'Halaman    : ' + location.href,
            'Manga      : ' + curManga(),
            'Browser    : ' + navigator.userAgent,
            'Layar      : ' + window.innerWidth + 'x' + window.innerHeight + ' (dpr ' + (window.devicePixelRatio || 1) + ')',
            'Pengaturan : format=' + fmt + ' · multi=' + multi + ' · simpan=' + st + ' · subfolder=' + subfolder + ' · paralel=' + conc + ' · jeda=' + delayMs + 'ms · retry=' + retries + ' · zipMax=' + zipMax + 'MB · zipPrefix=' + zipPrefix,
            'Selector   : gambar=' + (imgSel || 'otomatis') + ' · host=' + (hostSel || 'otomatis'),
            'Entri      : ' + LOG.rows.length + ' (error ' + LOG.nErr + ', warn ' + LOG.nWarn + ')',
            '===================================',
            ''
        ];
        const body = LOG.rows.map(r => '[' + fmtTs(r.t) + '] [' + (LVL[r.lvl] || r.lvl).padEnd(5) + '] [' + r.src + '] ' + tr(r.msg) + (r.extra ? '\n      ↳ ' + tr(r.extra) : ''));
        return head.concat(body).join('\n') + '\n';
    }
    async function logCopy() {
        const t = logText(), n = LOG.rows.length;
        try { await navigator.clipboard.writeText(t); }
        catch (e) {
            let ok = false;
            try {
                const ta = document.createElement('textarea');
                ta.value = t; ta.style.cssText = 'position:fixed;left:-9999px;top:0;opacity:0';
                document.body.appendChild(ta); ta.select(); ok = document.execCommand('copy'); ta.remove();
            } catch (e2) {}
            if (!ok) { toast('Gagal menyalin log', 'err'); return; }
        }
        toast('Log disalin (' + n + ' entri)', 'ok');
    }
    function logDownload() {
        const d = new Date(), stamp = d.getFullYear() + p2(d.getMonth() + 1) + p2(d.getDate()) + '-' + p2(d.getHours()) + p2(d.getMinutes()) + p2(d.getSeconds());
        const name = 'dd-log_' + sanitize(curManga(), 40) + '_' + stamp + '.txt';
        downloadBlob(name, new Blob(['\ufeff' + logText()], { type: 'text/plain;charset=utf-8' }));
        toast('Log diunduh: ' + name, 'ok');
    }
    function wireLog() {
        const pan = $('dd-pv-log');
        LOG.q = '';
        $('dd-log-x').onclick = () => { pan.hidden = true; };
        pan.addEventListener('mousedown', (e) => { if (e.target === pan) pan.hidden = true; });
        const lv = $('dd-log-lv');
        const syncLv = () => lv.querySelectorAll('button').forEach(b => b.classList.toggle('on', b.dataset.v === LOG.lv));
        lv.onclick = (e) => { const v = e.target.dataset && e.target.dataset.v; if (v) { LOG.lv = v; sv('dd_log_lv', v); syncLv(); logRender(); } };
        syncLv();
        $('dd-log-q').oninput = (e) => { LOG.q = e.target.value.trim().toLowerCase(); logRender(); };
        const au = $('dd-log-auto');
        au.checked = LOG.auto;
        au.onchange = () => { LOG.auto = au.checked; if (LOG.auto) { const l = $('dd-log-list'); l.scrollTop = l.scrollHeight; } };
        $('dd-log-clear').onclick = () => { LOG.rows.length = 0; LOG.nErr = LOG.nWarn = 0; log('info', 'log', 'Log dihapus'); logRender(); };
        $('dd-log-copy').onclick = logCopy;
        $('dd-log-dl').onclick = logDownload;
    }

    // ------------------------------------------------------------ jendela (geser & ubah ukuran)
    const WIN_MIN = { w: 480, h: 340 };
    function fitGeom(g) {
        const vw = window.innerWidth, vh = window.innerHeight;
        const w = clamp(Math.round(g.w), Math.min(WIN_MIN.w, vw), vw), h = clamp(Math.round(g.h), Math.min(WIN_MIN.h, vh), vh);
        return { w, h, x: clamp(Math.round(g.x), 0, vw - w), y: clamp(Math.round(g.y), 0, vh - h) };
    }
    function initGeom() {
        let g = null;
        try { g = JSON.parse(gv('dd_geom', '')); } catch (e) {}
        if (!g || !isFinite(g.w) || !isFinite(g.h) || !isFinite(g.x) || !isFinite(g.y)) {
            const w = Math.min(1180, window.innerWidth * 0.96), h = Math.min(820, window.innerHeight * 0.92);
            g = { w, h, x: (window.innerWidth - w) / 2, y: (window.innerHeight - h) / 2 };
        }
        return fitGeom(g);
    }
    function applyGeom(P) {
        const full = window.innerWidth <= 760;
        P.win.classList.toggle('full', full);
        P.win.classList.toggle('min', !!P.min);
        P.box.classList.toggle('is-max', !!P.max);
        const mb = $('dd-pv-min'), xb = $('dd-pv-max');
        if (mb) mb.title = P.min ? 'Pulihkan' : 'Perkecil';
        if (xb) xb.title = P.max ? 'Kembalikan ukuran' : 'Perbesar';
        if (P.min) P.win.style.setProperty('--mh', (P.win.querySelector('.pv-top').offsetHeight + 2) + 'px');
        if (!full) { const g = P.geom, s = P.win.style; s.left = g.x + 'px'; s.top = g.y + 'px'; s.width = g.w + 'px'; s.height = g.h + 'px'; }
        P.box.classList.toggle('narrow', full || P.geom.w < 720);
    }
    function toggleMin(P) {
        P.min = !P.min;
        hideHover();
        applyGeom(P);
        log('debug', 'panel', P.min ? 'Jendela diperkecil' : 'Jendela dipulihkan');
    }
    function toggleMax(P) {
        if (P.min) { P.min = false; applyGeom(P); return; }   // jendela sedang diperkecil -> pulihkan dulu
        if (window.innerWidth <= 760) return;
        if (P.max) { P.geom = fitGeom(P.prevGeom || initGeom()); P.max = false; }
        else { P.prevGeom = Object.assign({}, P.geom); P.geom = { x: 6, y: 6, w: window.innerWidth - 12, h: window.innerHeight - 12 }; P.max = true; }
        applyGeom(P);
    }
    function startGesture(e, mode) {
        const P = pv;
        if (!P || window.innerWidth <= 760 || (e.button !== undefined && e.button !== 0)) return;
        hideHover();
        let moved = false;
        const g0 = Object.assign({}, P.geom), sx = e.clientX, sy = e.clientY;
        const vw = window.innerWidth, vh = window.innerHeight, minW = Math.min(WIN_MIN.w, vw), minH = Math.min(WIN_MIN.h, vh);
        P.box.classList.add('gest');
        const mv = (ev) => {
            const dx = ev.clientX - sx, dy = ev.clientY - sy, g = Object.assign({}, g0);
            if (!moved && (Math.abs(dx) > 2 || Math.abs(dy) > 2)) { moved = true; if (P.max) { P.max = false; P.prevGeom = null; } }
            if (!moved) return;
            if (mode === 'move') { g.x = clamp(g0.x + dx, 0, vw - g0.w); g.y = clamp(g0.y + dy, 0, vh - (P.min ? P.win.offsetHeight : g0.h)); }
            else {
                if (mode.indexOf('e') >= 0) g.w = clamp(g0.w + dx, minW, vw - g0.x);
                if (mode.indexOf('w') >= 0) { g.w = clamp(g0.w - dx, minW, g0.x + g0.w); g.x = g0.x + g0.w - g.w; }
                if (mode.indexOf('s') >= 0) g.h = clamp(g0.h + dy, minH, vh - g0.y);
                if (mode.indexOf('n') >= 0) { g.h = clamp(g0.h - dy, minH, g0.y + g0.h); g.y = g0.y + g0.h - g.h; }
            }
            P.geom = g; applyGeom(P);
        };
        const up = () => {
            document.removeEventListener('pointermove', mv, true);
            document.removeEventListener('pointerup', up, true);
            document.removeEventListener('pointercancel', up, true);
            P.box.classList.remove('gest');
            if (moved) sv('dd_geom', JSON.stringify(P.geom));
        };
        document.addEventListener('pointermove', mv, true);
        document.addEventListener('pointerup', up, true);
        document.addEventListener('pointercancel', up, true);
    }
    function wireWindow(P) {
        applyGeom(P);
        P.win.querySelectorAll('.rz').forEach(h => h.addEventListener('pointerdown', (e) => startGesture(e, h.dataset.d)));
        const top = P.win.querySelector('.pv-top');
        const skip = (e) => e.target.closest && e.target.closest('button, input, a');
        top.addEventListener('pointerdown', (e) => { if (!skip(e)) startGesture(e, 'move'); });
        top.addEventListener('dblclick', (e) => { if (!skip(e)) toggleMax(P); });
    }

    // ------------------------------------------------------------ FAB
    function buildFab() {
        if ($('dd-fab')) return;
        const wrap = document.createElement('div');
        wrap.id = 'dd-fab-wrap';
        wrap.__ddLive = true;
        const fab = document.createElement('button');
        fab.id = 'dd-fab'; fab.type = 'button';
        fab.innerHTML = IC('tray') + '<span class="fab-t">Download</span>';
        fab.title = 'Pawchive Downloader — klik: panel · klik kanan: antrian';
        fab.onclick = () => { pvEnsureAlive(); if (pv) closePanel(); else openPanel(); };
        fab.addEventListener('contextmenu', (e) => {
            e.preventDefault();
            queueOpen();
        });
        const qbtn = document.createElement('button');
        qbtn.id = 'dd-fab-queue'; qbtn.type = 'button';
        qbtn.title = 'Buka antrian download';
        qbtn.innerHTML = IC('queue') + '<span class="fab-t">Antrian</span><i id="dd-fab-q" class="fab-q" hidden></i>';
        qbtn.onclick = () => queueOpen();
        wrap.appendChild(fab);
        wrap.appendChild(qbtn);
        document.body.appendChild(wrap);
        queueBadge();
    }
    function syncUI() {
        const fab = $('dd-fab'); if (fab) fab.classList.toggle('run', busy || Q.running);
        if (pv) { pvUpdate(); settingsSync(); }
        queueBadge();
        document.querySelectorAll('.dd-btn').forEach(b => { b.title = 'Preview & download · klik kanan = download langsung (' + (fmt === 'files' ? 'IMG' : fmt.toUpperCase()) + ')'; });
    }

    // ------------------------------------------------------------ animasi UI
    function applyAnim() {
        try {
            document.documentElement.classList.toggle('dd-noanim', !animOn);
            if (document.body) document.body.classList.toggle('dd-noanim', !animOn);
        } catch (e) {}
    }

    // ------------------------------------------------------------ style
    let ddStyleEl = null;
    function style() {
        const s = document.createElement('style');
        s.id = 'dd-style';
        ddStyleEl = s;
        s.textContent = `
        #dd-pv,#dd-view,#dd-hover,#dd-toast,#dd-menu,#dd-fab,#dd-fab-wrap,#dd-edit,#dd-ed-menu,#dd-q,#dd-dlg,#dd-done,.dd-btn{--d-bg:#15151a;--d-s1:#1c1c23;--d-s2:#25252d;--d-s3:#30303a;--d-bd:rgba(255,255,255,.08);--d-bd2:rgba(255,255,255,.16);--d-tx:#f3f3f6;--d-mu:#a3a3b0;--d-dim:#6c6c79;--d-ac:#ffffff;--d-ac2:#ffffff;--d-acs:rgba(255,255,255,.12);--d-bl:#7db2ff;--d-ok:#4ade80;--d-er:#ff6b78;--d-font:Inter,ui-sans-serif,system-ui,-apple-system,"Segoe UI",Roboto,sans-serif}
        .dd-ic{width:16px;height:16px;flex-shrink:0;fill:none;stroke:currentColor;stroke-width:2;stroke-linecap:round;stroke-linejoin:round}

        /* ---------- tombol di list post ---------- */
        .dd-btn{flex-shrink:0;display:inline-flex;align-items:center;gap:6px;height:30px;padding:0 12px;margin-left:8px;border-radius:9px;border:1px solid rgba(255,255,255,.14);background:linear-gradient(135deg,var(--d-ac2),var(--d-ac));color:var(--d-bg);font:700 10.5px/1 var(--d-font);letter-spacing:.05em;text-transform:uppercase;cursor:pointer;white-space:nowrap;box-shadow:none;transition:transform .12s,filter .15s}
        .dd-btn:hover{filter:brightness(1.1);transform:translateY(-1px)}
        .dd-btn:active{transform:none}
        .dd-btn .dd-ic{width:13px;height:13px}
        .dd-btn[data-state=run]{background:linear-gradient(135deg,#8fbfff,#5a97f0);box-shadow:none}

        /* ---------- FAB + antrian ---------- */
        #dd-fab-wrap{position:fixed;right:18px;bottom:78px;z-index:2147483000;display:flex;flex-direction:column;align-items:stretch;gap:8px;min-width:148px}
        #dd-fab-queue{height:40px;padding:0 14px;gap:9px;border-radius:13px;border:1px solid rgba(255,255,255,.16);background:var(--d-s1,#1c1c23);color:#f3f3f6;cursor:pointer;display:flex;align-items:center;justify-content:center;box-shadow:0 6px 18px rgba(0,0,0,.35);transition:background .15s,border-color .15s,transform .15s}
        #dd-fab-queue:hover{background:var(--d-s3,#30303a);color:#fff}
        #dd-fab-queue:active{transform:scale(.96)}
        #dd-fab-queue .dd-ic{width:18px;height:18px}
        #dd-fab-queue.has-q{border-color:rgba(125,178,255,.55)}
        #dd-fab-queue .fab-t{font:700 12.5px/1 var(--d-font);letter-spacing:.01em;white-space:nowrap}
        #dd-fab-queue .fab-q{min-width:18px;height:18px;padding:0 5px;border-radius:999px;background:#7db2ff;color:#10131a;font:800 10.5px/18px var(--d-font);text-align:center}
        #dd-fab{position:relative;height:46px;min-width:46px;padding:0 16px;border-radius:15px;border:1px solid rgba(255,255,255,.18);background:linear-gradient(160deg,#ffffff 0%,#f3f3f6 60%,#dcdce3 100%);color:var(--d-bg);cursor:pointer;display:flex;align-items:center;justify-content:center;overflow:visible;box-shadow:inset 0 1px 0 rgba(255,255,255,.32);transition:transform .15s,box-shadow .2s}
        #dd-fab .dd-ic{width:22px;height:22px;stroke-width:2.2}
        #dd-fab .fab-t{margin-left:9px;white-space:nowrap;font:700 13px/1 var(--d-font);letter-spacing:.01em}
        #dd-fab:hover,#dd-fab:focus-visible{box-shadow:inset 0 1px 0 rgba(255,255,255,.35)}
        #dd-fab:active{transform:scale(.95)}
        #dd-fab:focus-visible{outline:2px solid #fff;outline-offset:2px}
        #dd-fab.run{background:linear-gradient(160deg,#9cc6ff,#5a97f0);}
        @keyframes dd-pulse{0%{box-shadow:0 0 0 0 rgba(90,151,240,.55)}100%{box-shadow:0 0 0 14px rgba(90,151,240,0)}}

        /* ---------- menu klik kanan ---------- */

        /* ---------- panel ---------- */
        #dd-pv{position:fixed;inset:0;z-index:2147483001;pointer-events:none;font:13px/1.4 var(--d-font);color:var(--d-tx)}
        #dd-pv *{box-sizing:border-box}
        #dd-pv [hidden]{display:none!important}
        #dd-pv button,#dd-pv input{font-family:inherit}
        @keyframes dd-fade{from{opacity:0}to{opacity:1}}
        @keyframes dd-pop{from{opacity:0;transform:translateY(10px) scale(.985)}to{opacity:1;transform:none}}
        #dd-pv .pv-box{position:absolute;inset:0;display:flex;flex-direction:column;background:var(--d-bg);border:1px solid var(--d-bd2);border-radius:18px;overflow:hidden;box-shadow:0 24px 70px rgba(0,0,0,.7),0 0 0 1px rgba(0,0,0,.45);animation:dd-pop .2s ease}

        #dd-pv .pv-top{display:flex;align-items:center;gap:12px;padding:12px 14px 12px 16px;background:var(--d-s1);border-bottom:1px solid var(--d-bd);flex-shrink:0;cursor:grab;user-select:none;-webkit-user-select:none;touch-action:none}
        #dd-pv .pv-box.gest .pv-top{cursor:grabbing}
        #dd-pv .pv-logo{width:34px;height:34px;flex-shrink:0;display:flex;align-items:center;justify-content:center;border-radius:10px;background:linear-gradient(135deg,var(--d-ac2),var(--d-ac));color:var(--d-bg);font-weight:800;font-size:12px;letter-spacing:.02em;box-shadow:none}
        #dd-pv .pv-logo{width:62px;height:57.4px;border-radius:16px;background:var(--d-s2) center/100% 100% no-repeat;border:1px solid var(--d-ac);overflow:hidden}
        #dd-pv .pv-top .t{flex:1;min-width:0;display:flex;flex-direction:column;gap:1px}
        #dd-pv .pv-top .t b{font-size:14px;font-weight:700;overflow:hidden;text-overflow:ellipsis;white-space:nowrap}
        #dd-pv .pv-top .t small{color:var(--d-dim);font-size:11.5px;overflow:hidden;text-overflow:ellipsis;white-space:nowrap}
        #dd-pv .pv-st{display:inline-flex;align-items:center;gap:7px;padding:4px 11px;border-radius:999px;background:var(--d-s2);border:1px solid var(--d-bd);color:var(--d-mu);font-size:11.5px;font-weight:600;max-width:240px;overflow:hidden;text-overflow:ellipsis;white-space:nowrap}
        #dd-pv .pv-st::before{content:'';width:6px;height:6px;border-radius:50%;background:currentColor;flex-shrink:0}
        #dd-pv .pv-st.busy{color:var(--d-bl)}#dd-pv .pv-st.busy::before{animation:dd-blink 1s infinite}
        #dd-pv .pv-st.ok{color:var(--d-ok)}#dd-pv .pv-st.err{color:var(--d-er)}
        @keyframes dd-blink{50%{opacity:.25}}
        #dd-pv .pv-ib{width:32px;height:32px;display:inline-flex;align-items:center;justify-content:center;border:none;background:none;color:var(--d-mu);border-radius:9px;cursor:pointer;transition:background .12s,color .12s}
        #dd-pv .pv-ib:hover{background:var(--d-s3);color:#fff}
        #dd-pv .pv-ib .dd-ic{width:17px;height:17px}
        #dd-pv .pv-tog{display:none}

        #dd-pv .pv-main{flex:1;min-height:0;display:flex;position:relative}
        #dd-pv .pv-box.nosd .pv-side,#dd-pv .pv-box.nosd .pv-tog{display:none!important}
        #dd-pv .badge{padding:1px 8px;border-radius:999px;background:var(--d-s3);color:var(--d-mu);font-size:11px;font-weight:700}
        #dd-pv .pv-link{margin-left:auto;border:none;background:none;color:var(--d-ac2);font-size:12px;font-weight:600;cursor:pointer;padding:2px 0}
        #dd-pv .pv-link:hover{text-decoration:underline}
        #dd-pv .pv-link:disabled{opacity:.4;cursor:not-allowed;text-decoration:none}

        /* ---------- sidebar post ---------- */
        #dd-pv .pv-side{width:380px;flex-shrink:0;display:flex;flex-direction:column;border-right:1px solid var(--d-bd);background:var(--d-s1)}
        #dd-pv .pv-side-h{display:flex;flex-direction:column;gap:10px;padding:14px 14px 12px;border-bottom:1px solid var(--d-bd)}
        #dd-pv .pv-side-t{display:flex;align-items:center;gap:8px}
        #dd-pv .pv-side-t b{font-size:12px;font-weight:700;letter-spacing:.06em;text-transform:uppercase;color:var(--d-mu)}
        #dd-pv .pv-side-t .sel-n{color:var(--d-dim);font-size:11.5px;font-weight:600;white-space:nowrap}
        #dd-pv .pv-side-t .pv-link{margin-left:auto;padding:4px 11px;border-radius:999px;background:var(--d-acs);color:var(--d-ac2);font-size:11.5px;white-space:nowrap}
        #dd-pv .pv-side-t .pv-link:hover{text-decoration:none;filter:brightness(1.15)}
        #dd-pv .pv-side-h .pv-rng{display:flex;width:100%;height:32px}
        #dd-pv .pv-side-h .pv-rng input{flex:1;width:auto;min-width:0}
        #dd-pv .pv-side-h .pv-rng button{padding:0 14px}
        #dd-pv .pv-chs{flex:1;min-height:0;overflow:auto;padding:10px 10px 12px;display:flex;flex-direction:column;gap:5px;overscroll-behavior:contain}
        #dd-pv .ch{display:flex;align-items:flex-start;gap:10px;padding:9px 11px 9px 10px;border-radius:11px;cursor:pointer;border:1px solid var(--d-bd);background:var(--d-bg);transition:background .12s,border-color .12s}
        #dd-pv .ch:hover{background:var(--d-s2);border-color:var(--d-bd2)}
        #dd-pv .ch.cur{background:var(--d-acs);border-color:rgba(255,255,255,.45);box-shadow:inset 3px 0 0 var(--d-ac)}
        #dd-pv .ch input{-webkit-appearance:none;appearance:none;margin:1px 0 0;width:17px;height:17px;flex-shrink:0;border-radius:5px;border:1.5px solid var(--d-bd2);background:var(--d-s2) center/11px no-repeat;cursor:pointer;transition:background-color .12s,border-color .12s}
        #dd-pv .ch input:hover{border-color:var(--d-ac)}
        #dd-pv .ch input:checked{background-color:var(--d-ac);border-color:var(--d-ac);background-image:url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 12 12'%3E%3Cpath d='M2.5 6.5l2.4 2.4 4.6-5.3' fill='none' stroke='%2315151a' stroke-width='1.8' stroke-linecap='round' stroke-linejoin='round'/%3E%3C/svg%3E")}
        #dd-pv .ch .cn{flex-shrink:0;min-width:20px;height:17px;padding:0 5px;display:inline-flex;align-items:center;justify-content:center;border-radius:6px;background:var(--d-s3);color:var(--d-mu);font-size:10.5px;font-weight:700;font-variant-numeric:tabular-nums}
        #dd-pv .ch .cp{flex-shrink:0;width:88px;display:flex;align-items:flex-start;justify-content:center;color:var(--d-dim);font-size:15px;font-weight:700}
        #dd-pv .ch .cp img{display:block;width:auto;height:auto;max-width:88px;max-height:124px;object-fit:contain;border-radius:7px;border:1px solid var(--d-bd);background:var(--d-s3)}
        #dd-pv .ch .cp.ld,#dd-pv .ch .cp.em{height:78px;align-items:center;border-radius:7px;border:1px solid var(--d-bd);background:var(--d-s3)}
        #dd-pv .ch .cp.ld{background:linear-gradient(90deg,var(--d-s3) 0%,var(--d-s2) 50%,var(--d-s3) 100%);background-size:200% 100%;animation:ddcpld 1.2s linear infinite}
        #dd-pv .ch .cp.em{font-size:13px}
        @keyframes ddcpld{to{background-position:-200% 0}}
        #dd-pv .ch .cb{flex:1;min-width:0;display:flex;flex-direction:column;gap:4px}
        #dd-pv .ch .ct{font-size:13px;line-height:1.35;display:-webkit-box;-webkit-line-clamp:3;-webkit-box-orient:vertical;overflow:hidden;word-break:break-word}
        #dd-pv .ch.cur .ct{font-weight:600}
        #dd-pv .ch:has(input:not(:checked)) .ct{color:var(--d-dim)}
        #dd-pv .ch .cs{align-self:flex-start;max-width:100%;padding:1px 8px;border-radius:999px;background:rgba(125,178,255,.12);color:var(--d-bl);font-size:10.5px;font-weight:600;white-space:nowrap;overflow:hidden;text-overflow:ellipsis}
        #dd-pv .ch .cs:empty{display:none}

        #dd-pv .pv-page{flex:1;min-width:0;display:flex;flex-direction:column}
        #dd-pv .pv-bar{display:flex;align-items:center;gap:8px;flex-wrap:wrap;padding:12px 16px;flex-shrink:0}
        #dd-pv .pv-b{height:30px;padding:0 12px;display:inline-flex;align-items:center;justify-content:center;gap:6px;border-radius:9px;border:1px solid var(--d-bd2);background:var(--d-s2);color:var(--d-tx);font:600 12px var(--d-font);cursor:pointer;white-space:nowrap;transition:background .12s,filter .12s}
        #dd-pv .pv-b:hover{background:var(--d-s3)}
        #dd-pv .pv-b.pri{height:34px;padding:0 18px;border-color:transparent;background:linear-gradient(135deg,var(--d-ac2),var(--d-ac));color:var(--d-bg);font-weight:700;box-shadow:none}
        #dd-pv .pv-b.pri:hover{filter:brightness(1.08)}
        #dd-pv .pv-b.red{height:34px;background:rgba(255,107,120,.12);border-color:rgba(255,107,120,.5);color:var(--d-er)}
        #dd-pv .pv-b.red:hover{background:rgba(255,107,120,.2)}
        #dd-pv .pv-b:disabled,#dd-pv .pv-seg button:disabled{opacity:.4;cursor:not-allowed;filter:none;box-shadow:none}
        #dd-pv .pv-chm{display:flex;gap:6px}
        #dd-pv .pv-chm button{flex:1;height:28px;padding:0 10px;border-radius:9px;border:1px solid var(--d-bd2);background:var(--d-s2);color:var(--d-mu);font:600 11.5px var(--d-font);cursor:pointer;white-space:nowrap}
        #dd-pv .pv-chm button:hover:not(:disabled){color:#fff;background:var(--d-s3)}
        #dd-pv .pv-chm button:disabled{opacity:.4;cursor:not-allowed}
        #dd-pv .pv-chm[hidden]{display:none}
        #dd-pv .pv-chh #dd-ch-hide{min-width:0;overflow:hidden;text-overflow:ellipsis}
        #dd-pv .pv-chh #dd-ch-show{flex:0 0 auto}
        #dd-pv .ch[hidden]{display:none}
        #dd-pv .ch .cx{flex-shrink:0;width:20px;height:20px;margin:-1px -3px 0 0;padding:0;border:0;border-radius:6px;background:transparent;color:var(--d-dim);font:400 16px/1 var(--d-font);cursor:pointer;opacity:0;transition:opacity .12s,background .12s,color .12s}
        #dd-pv .ch:hover .cx,#dd-pv .ch .cx:focus-visible{opacity:1}
        #dd-pv .ch .cx:hover{color:var(--d-ac2);background:var(--d-s3)}
        @media (hover:none){#dd-pv .ch .cx{opacity:.65}}
        #dd-pv .ch .cm{display:block;margin-top:2px;font-size:10.5px;font-weight:700;color:var(--d-ac2)}
        #dd-pv .ch .cm[hidden]{display:none}
        #dd-pv .ch.merged .ct{opacity:.6}
        #dd-pv .pv-rng{display:inline-flex;align-items:center;height:30px;border:1px solid var(--d-bd2);border-radius:9px;overflow:hidden;background:var(--d-s1)}
        #dd-pv .pv-rng:focus-within{border-color:var(--d-ac)}
        #dd-pv .pv-rng input{width:84px;height:100%;border:none;outline:none;background:transparent;color:var(--d-tx);padding:0 10px;font-size:12px}
        #dd-pv .pv-rng input::placeholder{color:var(--d-dim)}
        #dd-pv .pv-rng button{height:100%;padding:0 11px;border:none;border-left:1px solid var(--d-bd2);background:var(--d-s2);color:var(--d-mu);font:600 11.5px var(--d-font);cursor:pointer}
        #dd-pv .pv-rng button:hover{background:var(--d-s3);color:#fff}
        #dd-pv .pv-editg{display:inline-flex;align-items:center;gap:6px;margin-left:4px}
        #dd-pv .pv-editg .pv-b .dd-ic{width:14px;height:14px}
        #dd-pv .pv-zoom{margin-left:auto;display:inline-flex;align-items:center;gap:8px;color:var(--d-mu)}
        #dd-pv .pv-zoom .dd-ic{width:15px;height:15px}
        #dd-pv .pv-zoom input{width:96px;accent-color:var(--d-ac)}
        #dd-pv .pv-zoom output{min-width:12px;font-weight:700;color:var(--d-tx);font-variant-numeric:tabular-nums}
        #dd-pv .pv-it.edited::after{content:'edit';position:absolute;top:8px;left:8px;z-index:2;padding:2px 6px;border-radius:6px;background:var(--d-ac);color:var(--d-bg);font-size:9px;font-weight:700;letter-spacing:.04em;text-transform:uppercase}

        #dd-pv .pv-grid{flex:1;min-height:0;overflow:auto;overscroll-behavior:contain;padding:2px 16px 16px;display:grid;grid-template-columns:repeat(var(--c,4),minmax(0,1fr));gap:10px;align-content:start;grid-auto-rows:max-content}
        #dd-pv ::-webkit-scrollbar{width:8px;height:8px}
        #dd-pv ::-webkit-scrollbar-thumb{background:#3a3a46;border-radius:8px}
        #dd-pv ::-webkit-scrollbar-thumb:hover{background:#4a4a58}
        #dd-pv ::-webkit-scrollbar-track{background:transparent}
        #dd-pv .pv-it{position:relative;aspect-ratio:3/4;background:var(--d-s1);border:1px solid var(--d-bd);border-radius:11px;overflow:hidden;cursor:pointer;user-select:none;-webkit-user-select:none;content-visibility:auto;contain-intrinsic-size:auto 220px;transition:border-color .12s,transform .12s,box-shadow .12s}
        #dd-pv .pv-it::before{content:'';position:absolute;inset:auto 0 0 0;height:46px;background:linear-gradient(transparent,rgba(0,0,0,.78));pointer-events:none;z-index:1}
        #dd-pv .pv-it img{display:block;width:100%;height:100%;object-fit:contain;background:#000;pointer-events:none;opacity:0;transition:opacity .25s,filter .15s}
        #dd-pv .pv-it.rdy img{opacity:1}
        #dd-pv .pv-it:not(.rdy){background:linear-gradient(110deg,var(--d-s1) 30%,var(--d-s2) 50%,var(--d-s1) 70%);background-size:200% 100%;animation:dd-shim 1.3s linear infinite}
        @keyframes dd-shim{to{background-position:-200% 0}}
        #dd-pv .pv-it.bad img{display:none}
        #dd-pv .pv-it.bad::after{content:'gagal dimuat';position:absolute;inset:0;display:flex;align-items:center;justify-content:center;color:var(--d-dim);font-size:11px}
        #dd-pv .pv-it.off img{opacity:.28;filter:grayscale(.7)}
        #dd-pv .pv-it.on{border-color:var(--d-ac);box-shadow:0 0 0 1px var(--d-ac)}
        #dd-pv .pv-it:hover{border-color:var(--d-bd2);transform:translateY(-2px)}
        #dd-pv .pv-it.on:hover{border-color:var(--d-ac)}
        #dd-pv .pv-it .ck{position:absolute;top:8px;right:8px;width:20px;height:20px;border-radius:50%;border:1.5px solid rgba(255,255,255,.55);background:rgba(0,0,0,.5);z-index:2;transition:background .12s,border-color .12s}
        #dd-pv .pv-it.on .ck{border-color:var(--d-ac);background:var(--d-ac) url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='none' stroke='%2315151a' stroke-width='3.5' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpath d='M6 12.5l4 4 8-9'/%3E%3C/svg%3E") center/12px no-repeat}
        #dd-pv .pv-it .n,#dd-pv .pv-it .d{position:absolute;bottom:7px;color:#fff;pointer-events:none;z-index:2}
        #dd-pv .pv-it .n{left:9px;font-size:11px;font-weight:700}
        #dd-pv .pv-it .d{right:9px;font-size:10px;font-weight:500;opacity:.75}
        #dd-pv .pv-it .gr{position:absolute;top:5px;left:50%;transform:translateX(-50%);z-index:4;width:34px;height:18px;border-radius:9px;background:rgba(0,0,0,.55);display:flex;align-items:center;justify-content:center;cursor:grab;opacity:.35;touch-action:none;transition:opacity .12s,background .12s}
        #dd-pv .pv-it:hover .gr{opacity:1}
        #dd-pv .pv-it .gr:hover{background:var(--d-ac)}
        #dd-pv .pv-it .gr:hover svg{fill:var(--d-bg)}
        #dd-pv .pv-it .gr svg{width:16px;height:8px;fill:#fff;pointer-events:none}
        #dd-pv .pv-it.dnd-src{opacity:.35}
        #dd-pv .pv-it.dnd-l{box-shadow:-5px 0 0 0 var(--d-ac2)}
        #dd-pv .pv-it.dnd-r{box-shadow:5px 0 0 0 var(--d-ac2)}
        #dd-pv .pv-it.flash{outline:2px solid var(--d-ac2);outline-offset:1px}
        #dd-pv .ch.dnd-over{background:var(--d-acs);border-color:var(--d-ac);box-shadow:0 0 0 2px var(--d-ac)}
        #dd-pv .ch.flash{background:var(--d-acs);border-color:var(--d-ac2)}
        #dd-pv.dnd-on,#dd-pv.dnd-on *{cursor:grabbing!important}
        #dd-pv .pv-ghost{position:fixed;left:0;top:0;z-index:9999;width:62px;aspect-ratio:3/4;border-radius:9px;overflow:hidden;pointer-events:none;background:var(--d-s2);border:2px solid var(--d-ac);box-shadow:0 8px 24px rgba(0,0,0,.55);opacity:.92}
        #dd-pv .pv-ghost img{width:100%;height:100%;object-fit:cover;display:block}
        #dd-pv .pv-ghost b{position:absolute;right:4px;bottom:4px;min-width:20px;height:20px;padding:0 5px;border-radius:10px;background:var(--d-ac);color:var(--d-bg);font-size:11px;line-height:20px;text-align:center}
        #dd-pv .pv-msg{grid-column:1/-1;text-align:center;padding:80px 24px;color:var(--d-mu);line-height:1.7}
        .pv-spin{width:30px;height:30px;margin:0 auto 14px;border:2.5px solid rgba(255,255,255,.14);border-top-color:var(--d-ac);border-radius:50%;animation:dd-spin .8s linear infinite}
        @keyframes dd-spin{to{transform:rotate(360deg)}}

        #dd-pv .pv-msg:has(.sc-card){padding:56px 24px}
        #dd-pv .sc-card{width:min(420px,100%);margin:0 auto;padding:22px 22px 18px;text-align:left;background:var(--d-s1);border:1px solid var(--d-bd);border-radius:16px;box-shadow:0 10px 36px rgba(0,0,0,.35);animation:dd-pop .25s ease}
        #dd-pv .sc-head{display:flex;align-items:center;gap:14px;margin-bottom:18px}
        #dd-pv .sc-spin{margin:0;flex-shrink:0}
        #dd-pv .sc-ht{min-width:0;display:flex;flex-direction:column;gap:2px}
        #dd-pv .sc-ht b{color:var(--d-tx);font-size:14.5px;font-weight:700}
        #dd-pv .sc-ht small{color:var(--d-mu);font-size:12px;overflow:hidden;text-overflow:ellipsis;white-space:nowrap}
        #dd-pv .sc-steps{list-style:none;margin:0 0 18px;padding:0;display:flex;flex-direction:column;gap:9px}
        #dd-pv .sc-steps li{display:flex;align-items:center;gap:10px;color:var(--d-dim);font-size:12.5px;font-weight:600;transition:color .2s}
        #dd-pv .sc-steps li i{width:22px;height:22px;border-radius:50%;display:inline-flex;align-items:center;justify-content:center;font-style:normal;font-size:11px;font-weight:700;background:var(--d-s2);border:1px solid var(--d-bd);flex-shrink:0;transition:all .2s}
        #dd-pv .sc-steps li.now{color:var(--d-tx)}
        #dd-pv .sc-steps li.now i{background:var(--d-acs);border-color:var(--d-ac);color:var(--d-ac2);animation:dd-blink 1.1s infinite}
        #dd-pv .sc-steps li.done{color:var(--d-mu)}
        #dd-pv .sc-steps li.done i{background:var(--d-ok);border-color:var(--d-ok);color:transparent;position:relative}
        #dd-pv .sc-steps li.done i::after{content:'';position:absolute;width:5px;height:9px;border:solid #0b1a10;border-width:0 2px 2px 0;transform:rotate(45deg) translate(-1px,-1px)}
        #dd-pv .sc-count{display:flex;align-items:baseline;gap:8px;margin-bottom:10px}
        #dd-pv .sc-count b{color:var(--d-tx);font-size:30px;font-weight:800;line-height:1;font-variant-numeric:tabular-nums}
        #dd-pv .sc-count span{color:var(--d-mu);font-size:12.5px}
        #dd-pv .sc-bar,#dd-pv .pv-prog{height:6px;border-radius:999px;background:var(--d-s2);overflow:hidden}
        #dd-pv .sc-bar i,#dd-pv .pv-prog i{display:block;height:100%;width:0;border-radius:inherit;background:linear-gradient(90deg,var(--d-ac),var(--d-ac2),var(--d-ac));background-size:200% 100%;animation:dd-shim 1.2s linear infinite;transition:width .35s ease}
        #dd-pv .pv-prog{height:3px;border-radius:0;flex-shrink:0}
        #dd-pv .pv-prog[hidden]{display:none}
        #dd-pv .sc-meta{display:flex;gap:10px;margin-top:9px;color:var(--d-dim);font-size:11.5px;font-variant-numeric:tabular-nums}
        #dd-pv .sc-meta span:first-child{flex:1;min-width:0;overflow:hidden;text-overflow:ellipsis;white-space:nowrap}
        .dd-noanim #dd-pv .sc-card,.dd-noanim #dd-pv .sc-bar i,.dd-noanim #dd-pv .pv-prog i,.dd-noanim #dd-pv .sc-steps li.now i{animation:none!important}

        #dd-pv .pv-foot{display:flex;align-items:center;justify-content:space-between;gap:10px 14px;flex-wrap:wrap;padding:11px 16px;border-top:1px solid var(--d-bd);background:var(--d-s1);flex-shrink:0}
        #dd-pv .pv-foot .fl,#dd-pv .pv-foot .fr{display:flex;align-items:center;gap:10px;flex-wrap:wrap}
        /* ---------- tombol download tunggal + menu mode ---------- */
        #dd-pv .pv-split{display:flex;position:relative}
        #dd-pv .pv-split{gap:3px}
        #dd-pv .pv-split .pv-sp-main{border-radius:10px 4px 4px 10px;padding:0 18px}
        #dd-pv .pv-split .pv-sp-car{width:52px;padding:0;border-radius:4px 10px 10px 4px;border-left:none}
        #dd-pv .pv-sp-car .dd-ic{width:22px;height:22px;stroke-width:2.6;transition:transform .18s ease}
        #dd-pv .pv-split:has(.pv-mm:not([hidden])) .pv-sp-car{filter:brightness(1.12)}
        #dd-pv .pv-split:has(.pv-mm:not([hidden])) .pv-sp-car .dd-ic{transform:rotate(180deg)}
        #dd-pv .pv-mm{position:absolute;right:0;bottom:calc(100% + 10px);z-index:20;width:344px;max-width:88vw;max-height:min(70vh,520px);overflow-y:auto;overscroll-behavior:contain;padding:6px;border-radius:16px;background:var(--d-s1);border:1px solid var(--d-bd2);box-shadow:0 18px 50px rgba(0,0,0,.65),0 0 0 1px rgba(0,0,0,.4);animation:dd-pop .14s ease;scrollbar-width:thin}
        #dd-pv .pv-mm[hidden]{display:none}
        #dd-pv .mm-grp{display:flex;flex-direction:column;gap:2px;padding-bottom:4px}
        #dd-pv .mm-grp+.mm-grp{margin-top:2px;padding-top:4px;border-top:1px solid var(--d-bd)}
        #dd-pv .mm-grp:last-child{padding-bottom:0}
        #dd-pv .mm-h{position:sticky;top:-6px;z-index:1;display:flex;align-items:center;justify-content:space-between;gap:10px;margin:0 -6px;padding:9px 16px 6px;background:var(--d-s1);font-size:10.5px;font-weight:700;letter-spacing:.07em;text-transform:uppercase;color:var(--d-dim)}
        #dd-pv .mm-hl{overflow:hidden;text-overflow:ellipsis;white-space:nowrap}
        #dd-pv .mm-hc{flex-shrink:0;padding:2px 8px;border-radius:999px;background:var(--d-acs);color:var(--d-ac2);font-size:10.5px;font-weight:700;letter-spacing:.02em;text-transform:none;font-variant-numeric:tabular-nums}
        #dd-pv .mm-hc.z{background:var(--d-s2);color:var(--d-dim)}
        #dd-pv .mm-i{display:flex;align-items:center;gap:12px;width:100%;padding:8px 10px;border:1px solid transparent;border-radius:11px;background:none;color:var(--d-tx);text-align:left;cursor:pointer;font-family:var(--d-font);transition:background .12s,border-color .12s}
        #dd-pv .mm-i:hover{background:var(--d-s2)}
        #dd-pv .mm-i:focus{outline:none}
        #dd-pv .mm-i:focus-visible{border-color:var(--d-bd2);background:var(--d-s2)}
        #dd-pv .mm-i.on{background:var(--d-acs);border-color:rgba(255,255,255,.4)}
        #dd-pv .mm-fm{flex-shrink:0;display:flex;align-items:center;justify-content:center;width:42px;height:32px;border-radius:9px;border:1px solid var(--fc-b,var(--d-bd2));background:var(--fc-bg,var(--d-s2));color:var(--fc,var(--d-mu));font-size:10.5px;font-weight:800;letter-spacing:.05em}
        #dd-pv .mm-fm.fm-zip{--fc:#fbbf24;--fc-bg:rgba(251,191,36,.12);--fc-b:rgba(251,191,36,.3)}
        #dd-pv .mm-fm.fm-pdf{--fc:#ff6b78;--fc-bg:rgba(255,107,120,.12);--fc-b:rgba(255,107,120,.3)}
        #dd-pv .mm-fm.fm-img{--fc:#7db2ff;--fc-bg:rgba(125,178,255,.12);--fc-b:rgba(125,178,255,.3)}
        #dd-pv .mm-fm.fm-cbz{--fc:#4ade80;--fc-bg:rgba(74,222,128,.12);--fc-b:rgba(74,222,128,.3)}
        #dd-pv .mm-t{flex:1;display:flex;flex-direction:column;gap:2px;min-width:0}
        #dd-pv .mm-t b{font-size:13px;font-weight:600;line-height:1.25}
        #dd-pv .mm-t small{color:var(--d-dim);font-size:11px;line-height:1.35;display:-webkit-box;-webkit-line-clamp:2;-webkit-box-orient:vertical;overflow:hidden}
        #dd-pv .mm-i.on .mm-t small{color:var(--d-mu)}
        #dd-pv .mm-ck{flex-shrink:0;width:20px;height:20px;display:flex;align-items:center;justify-content:center;border-radius:50%;color:transparent;border:1.5px solid var(--d-bd2);transition:background .12s,border-color .12s}
        #dd-pv .mm-ck .dd-ic{width:12px;height:12px;stroke-width:3.2}
        #dd-pv .mm-i.on .mm-ck{background:var(--d-ac);border-color:var(--d-ac);color:var(--d-bg)}
        #dd-pv .pv-count{color:var(--d-mu)}
        #dd-pv .pv-count b{color:var(--d-tx);font-size:14px}
        #dd-pv .pv-chip{display:inline-flex;align-items:center;gap:7px;height:30px;max-width:190px;padding:0 11px;border-radius:999px;border:1px solid var(--d-bd2);background:var(--d-s2);color:var(--d-mu);font:600 12px var(--d-font);cursor:pointer}
        #dd-pv .pv-chip:hover{background:var(--d-s3);color:#fff}
        #dd-pv .pv-chip b{font-weight:600;overflow:hidden;text-overflow:ellipsis;white-space:nowrap}
        #dd-pv .pv-seg{display:flex;gap:2px;padding:3px;background:var(--d-s2);border:1px solid var(--d-bd);border-radius:10px}
        #dd-pv .pv-seg.wide{width:100%}
        #dd-pv .pv-seg.wide button{flex:1}
        #dd-pv .pv-seg button{height:26px;padding:0 12px;border:none;border-radius:7px;background:none;color:var(--d-mu);font:600 12px var(--d-font);cursor:pointer;transition:background .12s,color .12s}
        #dd-pv .pv-seg button:hover:not(.on):not(:disabled){color:#fff;background:var(--d-s3)}
        #dd-pv .pv-seg button.on{background:var(--d-ac);color:var(--d-bg)}

        /* ---------- pengaturan (panel tengah) & log (drawer kanan) ---------- */
        #dd-pv .pv-set{position:absolute;inset:0;z-index:10;display:flex;justify-content:flex-end;background:rgba(0,0,0,.5);-webkit-backdrop-filter:blur(2px);backdrop-filter:blur(2px);animation:dd-fade .15s ease}
        @keyframes dd-slide{from{transform:translateX(30px);opacity:0}to{transform:none;opacity:1}}
        #dd-pv .set-card{width:min(430px,100%);height:100%;display:flex;flex-direction:column;background:var(--d-bg);border-left:1px solid var(--d-bd2);box-shadow:-16px 0 48px rgba(0,0,0,.5);animation:dd-slide .22s ease}
        #dd-pv #dd-pv-set{justify-content:center;align-items:center;padding:16px}
        #dd-pv #dd-pv-set .set-card{width:min(1100px,100%);height:min(860px,100%);border:1px solid var(--d-bd2);border-radius:18px;box-shadow:0 24px 70px rgba(0,0,0,.55);overflow:hidden;animation:dd-pop .2s ease}
        #dd-pv .pv-box.narrow #dd-pv-set{padding:8px}
        #dd-pv .set-h{display:flex;align-items:center;gap:10px;padding:14px 14px 12px 18px}
        #dd-pv .set-h .ti{flex:1;min-width:0}
        #dd-pv .set-lang{display:flex;align-items:center;gap:7px;color:var(--d-mu);flex-shrink:0}
        #dd-pv .set-lang .dd-ic{width:15px;height:15px}
        #dd-pv .set-lang .pv-seg{padding:2px}
        #dd-pv .set-lang .pv-seg button{min-width:34px;height:24px;padding:0 8px;font-size:11.5px}
        #dd-pv .set-lang #dd-set-romaji{margin-left:2px}
        #dd-pv .set-h b{display:block;font-size:15px}
        #dd-pv .set-h small{color:var(--d-dim);font-size:11.5px}
        #dd-pv .tabs{display:flex;gap:4px;padding:0 14px;border-bottom:1px solid var(--d-bd);overflow-x:auto;scrollbar-width:none;flex-shrink:0}
        #dd-pv .tabs::-webkit-scrollbar{display:none}
        #dd-pv .tabs button{flex-shrink:0;padding:9px 12px;border:none;border-bottom:2px solid transparent;background:none;color:var(--d-mu);font:600 12.5px var(--d-font);cursor:pointer;white-space:nowrap;margin-bottom:-1px}
        #dd-pv .tabs button:hover{color:#fff}
        #dd-pv .tabs button.on{color:#fff;border-bottom-color:var(--d-ac)}
        #dd-pv .set-b{flex:1;min-height:0;overflow:auto;padding:8px 18px 18px;overscroll-behavior:contain}
        #dd-pv .set-b .grp{margin-top:12px;border:1px solid var(--d-bd);border-radius:12px;background:var(--d-s1);padding:0 14px}
        #dd-pv .set-b .r{display:flex;align-items:center;gap:14px;padding:12px 0;border-top:1px solid var(--d-bd)}
        #dd-pv .set-b .r:first-child{border-top:none}
        #dd-pv .set-b .r[hidden]{display:none}
        #dd-pv .set-b .gh{margin:20px 2px -4px;font-size:11px;font-weight:700;letter-spacing:.08em;text-transform:uppercase;color:var(--d-dim)}
        #dd-pv .set-cols{display:grid;grid-template-columns:repeat(auto-fit,minmax(400px,1fr));gap:0 22px;align-items:start}
        #dd-pv .set-col{min-width:0}
        #dd-pv .set-col>.gh:first-child{margin-top:10px}
        #dd-pv .set-col>.tip:first-child{margin-top:31px}
        #dd-pv .set-b .r.col{flex-direction:column;align-items:stretch;gap:9px}
        #dd-pv .set-b .l{flex:1;min-width:0}
        #dd-pv .set-b .l b{display:block;font-size:13px;font-weight:600}
        #dd-pv .set-b .l small{display:block;margin-top:2px;color:var(--d-dim);font-size:11.5px;line-height:1.45}
        #dd-pv .sw{position:relative;width:40px;height:23px;flex-shrink:0;display:inline-block;cursor:pointer}
        #dd-pv .sw input{position:absolute;inset:0;width:100%;height:100%;margin:0;opacity:0;cursor:pointer;z-index:2}
        #dd-pv .sw i{position:absolute;inset:0;border-radius:999px;background:var(--d-s3);border:1px solid var(--d-bd2);transition:background .18s,border-color .18s}
        #dd-pv .sw i::after{content:'';position:absolute;top:2px;left:2px;width:17px;height:17px;border-radius:50%;background:#c8c8d2;transition:transform .18s,background .18s}
        #dd-pv .sw input:checked+i{background:var(--d-ac);border-color:var(--d-ac)}
        #dd-pv .sw input:checked+i::after{transform:translateX(17px);background:var(--d-bg)}
        #dd-pv .num{display:inline-flex;align-items:stretch;height:32px;flex-shrink:0;border:1px solid var(--d-bd2);border-radius:9px;overflow:hidden;background:var(--d-s2)}
        #dd-pv .num button{width:30px;border:none;background:var(--d-s2);color:var(--d-mu);font-size:16px;line-height:1;cursor:pointer}
        #dd-pv .num button:hover{background:var(--d-s3);color:#fff}
        #dd-pv .num input{width:62px;border:none;border-left:1px solid var(--d-bd);border-right:1px solid var(--d-bd);outline:none;background:var(--d-bg);color:var(--d-tx);text-align:center;font-size:13px;font-weight:600;-moz-appearance:textfield}
        #dd-pv .num input::-webkit-outer-spin-button,#dd-pv .num input::-webkit-inner-spin-button{-webkit-appearance:none;margin:0}
        #dd-pv .num:focus-within{border-color:var(--d-ac)}
        #dd-pv input.tx{height:34px;width:100%;padding:0 11px;border-radius:9px;border:1px solid var(--d-bd2);background:var(--d-s2);color:var(--d-tx);outline:none;font-size:12.5px}
        #dd-pv input.tx:focus{border-color:var(--d-ac)}
        #dd-pv input.tx::placeholder{color:var(--d-dim)}
        #dd-pv .folder{display:flex;align-items:center;gap:11px;padding:12px 0}
        #dd-pv .folder .fi{width:36px;height:36px;display:flex;align-items:center;justify-content:center;border-radius:10px;background:var(--d-acs);color:var(--d-ac2);flex-shrink:0}
        #dd-pv .folder .fi .dd-ic{width:18px;height:18px}
        #dd-pv .folder .fn{flex:1;min-width:0}
        #dd-pv .folder .fn b{display:block;font-size:13px;overflow:hidden;text-overflow:ellipsis;white-space:nowrap}
        #dd-pv .folder .fn small{color:var(--d-dim);font-size:11.5px}
        #dd-pv .set-b .tip{margin-top:14px;padding:12px 14px;border-radius:12px;background:var(--d-s1);border:1px dashed var(--d-bd2);color:var(--d-mu);font-size:12px;line-height:1.75}
        #dd-pv .set-b .tip b{color:var(--d-tx);display:block;margin-bottom:2px;font-size:12px}
        #dd-pv kbd{display:inline-block;padding:0 6px;border-radius:5px;background:var(--d-s3);border:1px solid var(--d-bd2);font:600 10.5px var(--d-font);color:var(--d-tx)}
        #dd-pv .set-ver{flex-shrink:0;padding:8px 18px;text-align:center;font-size:12px;letter-spacing:.06em;font-weight:800;color:var(--d-tx)}
        #dd-pv .set-ver b{font-weight:700;color:var(--d-mu);opacity:.8}
        #dd-pv .set-f{display:flex;align-items:center;justify-content:space-between;gap:10px;padding:12px 18px;border-top:1px solid var(--d-bd);background:var(--d-s1)}
        #dd-pv .set-f .pv-link{margin:0;color:var(--d-mu)}
        #dd-pv .set-f .pv-link:hover{color:var(--d-er)}

        /* ---------- hover preview & viewer ---------- */
        #dd-hover{position:fixed;z-index:2147483003;display:none;pointer-events:none;background:#000;border:1px solid var(--d-bd2);border-radius:14px;overflow:hidden;box-shadow:0 16px 44px rgba(0,0,0,.65);font:11.5px/1.3 var(--d-font)}
        #dd-hover img{display:block;object-fit:contain;background-color:#000;background-position:center;background-repeat:no-repeat;background-size:contain}
        #dd-hover .hv-cap{padding:6px 12px;font-weight:600;color:var(--d-mu);background:var(--d-s1);border-top:1px solid var(--d-bd);white-space:nowrap}
        #dd-view{position:fixed;inset:0;z-index:2147483004;background:rgba(0,0,0,.94);display:flex;align-items:center;justify-content:center;cursor:zoom-out;font:12.5px var(--d-font);color:#fff}
        #dd-view img{max-width:96vw;max-height:94vh;object-fit:contain}
        #dd-view .vw-cap{position:absolute;left:50%;bottom:16px;transform:translateX(-50%);padding:6px 14px;border-radius:999px;background:rgba(30,30,38,.9);border:1px solid var(--d-bd2);font-weight:600;pointer-events:none}
        #dd-view .vw-nav,#dd-view .vw-x{position:absolute;border:1px solid var(--d-bd);border-radius:50%;background:rgba(255,255,255,.08);color:#fff;cursor:pointer;line-height:1;transition:background .12s}
        #dd-view .vw-nav:hover,#dd-view .vw-x:hover{background:rgba(255,255,255,.2)}
        #dd-view .vw-nav{top:50%;width:46px;height:46px;margin-top:-23px;font-size:28px}
        #dd-view .vw-nav.l{left:16px}#dd-view .vw-nav.r{right:16px}
        #dd-view .vw-x{top:16px;right:16px;width:38px;height:38px;font-size:22px}
        #dd-view .pv-spin{position:absolute;top:50%;left:50%;margin:-15px 0 0 -15px;display:none;pointer-events:none}
        #dd-view.load .pv-spin{display:block}

        /* ---------- editor gambar ---------- */
        #dd-edit{position:fixed;inset:0;z-index:2147483006;background:rgba(0,0,0,.55);font:13px/1.4 var(--d-font);color:var(--d-tx);pointer-events:auto}
        #dd-edit .ed-win{position:absolute;pointer-events:auto;z-index:1}
        #dd-edit .ed-win.full{left:0!important;top:0!important;width:100%!important;height:100%!important}
        #dd-edit .ed-win.full .ed-box{border-radius:0}
        #dd-edit .ed-win.full .ed-rz{display:none}
        #dd-edit .ed-box{width:100%;height:100%;display:flex;flex-direction:column;background:var(--d-bg);border:1px solid var(--d-bd2);border-radius:16px;overflow:hidden;box-shadow:0 24px 70px rgba(0,0,0,.65);position:relative}
        #dd-edit .ed-box.gest,#dd-edit .ed-box.gest *{user-select:none;-webkit-user-select:none}
        #dd-edit .ed-box::after{content:'';position:absolute;right:4px;bottom:4px;width:11px;height:11px;pointer-events:none;z-index:5;clip-path:polygon(100% 0,100% 100%,0 100%);background:repeating-linear-gradient(135deg,transparent 0 3px,rgba(255,255,255,.28) 3px 4.5px)}
        #dd-edit .ed-win.full .ed-box::after{display:none}
        #dd-edit .ed-rz{position:absolute;z-index:30;touch-action:none}
        #dd-edit .ed-rz[data-d=n]{top:-6px;left:14px;right:14px;height:8px;cursor:ns-resize}
        #dd-edit .ed-rz[data-d=s]{bottom:-6px;left:14px;right:14px;height:8px;cursor:ns-resize}
        #dd-edit .ed-rz[data-d=e]{right:-6px;top:14px;bottom:14px;width:8px;cursor:ew-resize}
        #dd-edit .ed-rz[data-d=w]{left:-6px;top:14px;bottom:14px;width:8px;cursor:ew-resize}
        #dd-edit .ed-rz[data-d=ne]{top:-6px;right:-6px;width:18px;height:18px;cursor:nesw-resize}
        #dd-edit .ed-rz[data-d=nw]{top:-6px;left:-6px;width:18px;height:18px;cursor:nwse-resize}
        #dd-edit .ed-rz[data-d=se]{bottom:-6px;right:-6px;width:18px;height:18px;cursor:nwse-resize}
        #dd-edit .ed-rz[data-d=sw]{bottom:-6px;left:-6px;width:18px;height:18px;cursor:nesw-resize}
        #dd-edit .ed-top{display:flex;align-items:center;gap:10px;padding:12px 14px;background:var(--d-s1);border-bottom:1px solid var(--d-bd);flex-shrink:0;cursor:grab;user-select:none;-webkit-user-select:none;touch-action:none}
        #dd-edit .ed-box.gest .ed-top{cursor:grabbing}
        #dd-edit .ed-top b{font-size:14px}
        #dd-edit .ed-info{flex:1;color:var(--d-mu);font-size:12px;font-weight:600}
        #dd-edit .ed-stage{flex:1;min-height:0;position:relative;background:#0a0a0e;overflow:hidden}
        #dd-edit .ed-cv{position:absolute;box-shadow:0 0 0 1px rgba(255,255,255,.08)}
        #dd-edit .ed-ov{position:absolute;border:2px dashed var(--d-ac);box-shadow:0 0 0 9999px rgba(0,0,0,.55);cursor:move;touch-action:none}
        #dd-edit .ed-ov i{position:absolute;width:12px;height:12px;background:var(--d-ac);border:2px solid var(--d-bg);border-radius:2px}
        #dd-edit .ed-ov i[data-h=nw]{top:-7px;left:-7px;cursor:nwse-resize}
        #dd-edit .ed-ov i[data-h=n]{top:-7px;left:50%;margin-left:-6px;cursor:ns-resize}
        #dd-edit .ed-ov i[data-h=ne]{top:-7px;right:-7px;cursor:nesw-resize}
        #dd-edit .ed-ov i[data-h=e]{top:50%;right:-7px;margin-top:-6px;cursor:ew-resize}
        #dd-edit .ed-ov i[data-h=se]{bottom:-7px;right:-7px;cursor:nwse-resize}
        #dd-edit .ed-ov i[data-h=s]{bottom:-7px;left:50%;margin-left:-6px;cursor:ns-resize}
        #dd-edit .ed-ov i[data-h=sw]{bottom:-7px;left:-7px;cursor:nesw-resize}
        #dd-edit .ed-ov i[data-h=w]{top:50%;left:-7px;margin-top:-6px;cursor:ew-resize}
        #dd-edit .ed-hint{padding:10px 14px;color:var(--d-dim);font-size:12px;background:var(--d-s1);border-top:1px solid var(--d-bd)}
        #dd-edit .ed-parts{padding:4px 10px;border-radius:999px;background:var(--d-acs);color:var(--d-ac2);font-size:11.5px;font-weight:700;white-space:nowrap}
        #dd-edit .ed-lines{position:absolute;pointer-events:none;z-index:2}
        #dd-edit .ed-line{position:absolute;pointer-events:auto;z-index:3}
        #dd-edit .ed-line.h{left:0;right:0;height:12px;margin-top:-6px;cursor:ns-resize}
        #dd-edit .ed-line.v{top:0;bottom:0;width:12px;margin-left:-6px;cursor:ew-resize}
        #dd-edit .ed-line span{position:absolute;background:none;box-shadow:none}
        #dd-edit .ed-line.h span{left:0;right:0;top:5px;height:0;border-top:2px dashed var(--d-ac);filter:drop-shadow(0 0 1px rgba(0,0,0,.85))}
        #dd-edit .ed-line.v span{top:0;bottom:0;left:5px;width:0;border-left:2px dashed var(--d-ac);filter:drop-shadow(0 0 1px rgba(0,0,0,.85))}
        #dd-edit .ed-line:hover span,#dd-edit .ed-line:active span{border-color:var(--d-ac2);filter:drop-shadow(0 0 1px #fff)}
        #dd-edit .ed-celln{position:absolute;min-width:20px;height:20px;padding:0 6px;display:flex;align-items:center;justify-content:center;border-radius:6px;background:rgba(255,255,255,.9);color:var(--d-bg);font-size:11px;font-weight:800;pointer-events:none;z-index:4}
        #dd-ed-menu{position:fixed;z-index:2147483007;min-width:300px;padding:6px;border-radius:14px;background:var(--d-s1);border:1px solid var(--d-bd2);box-shadow:0 16px 44px rgba(0,0,0,.6);font-family:var(--d-font)}
        #dd-ed-menu button{display:flex;align-items:flex-start;gap:10px;width:100%;padding:10px 12px;border:none;border-radius:10px;background:none;color:var(--d-tx);text-align:left;cursor:pointer}
        #dd-ed-menu button:hover{background:var(--d-s3)}
        #dd-ed-menu button .dd-ic{width:18px;height:18px;flex-shrink:0;margin-top:2px;color:var(--d-ac2)}
        #dd-ed-menu button span{display:flex;flex-direction:column;gap:2px;font:600 12.5px var(--d-font)}
        #dd-ed-menu button small{font:400 11px/1.4 var(--d-font);color:var(--d-dim)}

        #dd-pv .pv-box.narrow .pv-tog{display:inline-flex}
        #dd-pv .pv-box.narrow .pv-logo{display:none}
        #dd-pv .pv-box.narrow .pv-side{position:absolute;left:0;top:0;bottom:0;z-index:6;width:min(94%,440px);transform:translateX(-102%);transition:transform .18s;box-shadow:8px 0 24px rgba(0,0,0,.5)}
        #dd-pv .pv-box.narrow.sd-open .pv-side{transform:none}
        #dd-pv .pv-box.narrow .pv-zoom{margin-left:0}
        #dd-pv .pv-box.narrow .pv-foot{padding:10px 12px}
        #dd-pv .pv-box.narrow .pv-foot .fr{width:100%}
        #dd-pv .pv-box.narrow .pv-foot .fr .pv-split{flex:1}
        #dd-pv .pv-box.narrow .pv-split .pv-sp-main{flex:1}
        #dd-pv .pv-box.nosd .pv-tog{display:none!important}

        /* ---------- jendela: geser & resize ---------- */
        #dd-pv .pv-win{position:absolute;pointer-events:auto}
        #dd-pv .pv-win.full{left:0!important;top:0!important;width:100%!important;height:100%!important}
        #dd-pv .pv-win.full .pv-box{border-radius:0}
        #dd-pv .pv-win.full .rz,#dd-pv .pv-win.full .pv-box::after{display:none}
        #dd-pv .pv-box::after{content:'';position:absolute;right:4px;bottom:4px;width:11px;height:11px;pointer-events:none;z-index:5;clip-path:polygon(100% 0,100% 100%,0 100%);background:repeating-linear-gradient(135deg,transparent 0 3px,rgba(255,255,255,.28) 3px 4.5px)}
        #dd-pv .rz{position:absolute;z-index:30;touch-action:none}
        #dd-pv .rz[data-d=n]{top:-6px;left:14px;right:14px;height:8px;cursor:ns-resize}
        #dd-pv .rz[data-d=s]{bottom:-6px;left:14px;right:14px;height:8px;cursor:ns-resize}
        #dd-pv .rz[data-d=e]{right:-6px;top:14px;bottom:14px;width:8px;cursor:ew-resize}
        #dd-pv .rz[data-d=w]{left:-6px;top:14px;bottom:14px;width:8px;cursor:ew-resize}
        #dd-pv .rz[data-d=ne]{top:-6px;right:-6px;width:18px;height:18px;cursor:nesw-resize}
        #dd-pv .rz[data-d=nw]{top:-6px;left:-6px;width:18px;height:18px;cursor:nwse-resize}
        #dd-pv .rz[data-d=se]{bottom:-6px;right:-6px;width:18px;height:18px;cursor:nwse-resize}
        #dd-pv .rz[data-d=sw]{bottom:-6px;left:-6px;width:18px;height:18px;cursor:nesw-resize}
        #dd-pv .pv-box.gest,#dd-pv .pv-box.gest *{user-select:none;-webkit-user-select:none}
        #dd-pv .pv-box.gest *{pointer-events:none!important}

        /* ---------- tombol jendela (minimize / maximize / close) ---------- */
        #dd-pv .pv-ib{position:relative}
        #dd-pv .lg-dot{position:absolute;top:5px;right:5px;width:8px;height:8px;border-radius:50%;background:var(--d-er);border:2px solid var(--d-s1)}
        #dd-pv .pv-wc{display:flex;align-self:stretch;margin:-12px -14px -12px 6px}
        #dd-pv .pv-wb{width:46px;padding:0;border:none;background:none;color:var(--d-tx);cursor:pointer;display:inline-flex;align-items:center;justify-content:center;transition:background .12s,color .12s}
        #dd-pv .pv-wb:hover{background:rgba(255,255,255,.1)}
        #dd-pv .pv-wb.cls:hover{background:#e5484d;color:#fff}
        #dd-pv .pv-wb svg{width:12px;height:12px;fill:none;stroke:currentColor;stroke-width:1.1;stroke-linecap:round;stroke-linejoin:round;pointer-events:none}
        #dd-pv .pv-wb .ic-rest{display:none}
        #dd-pv .pv-box.is-max .pv-wb .ic-rest{display:block}
        #dd-pv .pv-box.is-max .pv-wb .ic-max{display:none}
        #dd-pv .pv-win.full .pv-wmax{display:none}
        #dd-pv .pv-win.min{height:var(--mh,52px)!important}
        #dd-pv .pv-win.full.min{height:var(--mh,52px)!important}
        #dd-pv .pv-win.min .pv-main,#dd-pv .pv-win.min .pv-foot,#dd-pv .pv-win.min .pv-set,#dd-pv .pv-win.min .rz,#dd-pv .pv-win.min .pv-box::after{display:none!important}
        #dd-pv .pv-win.min .pv-top{border-bottom:none}

        /* ---------- panel log ---------- */
        #dd-pv .log-card{width:min(780px,100%)}
        #dd-pv .log-bar{display:flex;flex-wrap:wrap;align-items:center;gap:8px;padding:0 14px 10px 18px;border-bottom:1px solid var(--d-bd)}
        #dd-pv .log-bar .tx{flex:1;min-width:120px;width:auto;height:30px}
        #dd-pv .log-bar .pv-seg button{padding:0 10px}
        #dd-pv .log-auto{display:inline-flex;align-items:center;gap:6px;color:var(--d-mu);font-size:12px;font-weight:600;cursor:pointer;white-space:nowrap}
        #dd-pv .log-auto input{accent-color:var(--d-ac);margin:0}
        #dd-pv .log-list{flex:1;min-height:0;overflow:auto;padding:8px 0;overscroll-behavior:contain;font:11.5px/1.5 ui-monospace,SFMono-Regular,Menlo,Consolas,monospace;user-select:text;-webkit-user-select:text}
        #dd-pv .lr{display:grid;grid-template-columns:82px 46px 58px 1fr;gap:8px;padding:2px 14px 2px 16px;border-left:2px solid transparent}
        #dd-pv .lr:hover{background:var(--d-s1)}
        #dd-pv .lr .ts{color:var(--d-dim)}
        #dd-pv .lr .lv{font-weight:700}
        #dd-pv .lr .sr{color:var(--d-mu);overflow:hidden;text-overflow:ellipsis;white-space:nowrap}
        #dd-pv .lr .ms{min-width:0;word-break:break-word;white-space:pre-wrap}
        #dd-pv .lr .ms small{display:block;color:var(--d-dim);font-size:10.5px;word-break:break-all}
        #dd-pv .l-debug .lv,#dd-pv .l-debug .ms{color:var(--d-dim)}
        #dd-pv .l-info .lv{color:var(--d-bl)}
        #dd-pv .l-ok .lv{color:var(--d-ok)}
        #dd-pv .l-warn{border-left-color:#fbbf24}
        #dd-pv .l-warn .lv,#dd-pv .l-warn .ms{color:#fbbf24}
        #dd-pv .l-err{border-left-color:var(--d-er);background:rgba(255,90,100,.07)}
        #dd-pv .l-err .lv,#dd-pv .l-err .ms{color:var(--d-er)}
        #dd-pv .log-empty{padding:24px 18px;text-align:center;color:var(--d-dim);font:12.5px var(--d-font)}
        #dd-pv .log-f .fr{display:flex;gap:8px}
        #dd-pv .pv-box.narrow .lr{grid-template-columns:66px 44px 1fr}
        #dd-pv .pv-box.narrow .lr .sr{display:none}

        /* ---------- panel antrian ---------- */
        /* ---------- antrian (v2.6) ---------- */
        #dd-q{position:fixed;inset:0;z-index:2147483005;background:rgba(0,0,0,.55);backdrop-filter:blur(2px);display:flex;align-items:center;justify-content:center;padding:12px;font:13px/1.45 var(--d-font);color:var(--d-tx)}
        #dd-q[hidden]{display:none!important}
        #dd-q [hidden]{display:none!important}
        #dd-q *{box-sizing:border-box}
        #dd-q button{font-family:var(--d-font)}
        #dd-q .q-win{position:absolute;display:flex}
        #dd-q .q-win.full{left:0!important;top:0!important;width:100%!important;height:100%!important}
        #dd-q .q-win.full .q-box{border-radius:0}
        #dd-q .q-win.full .rz{display:none}
        #dd-q .rz{position:absolute;z-index:30;touch-action:none}
        #dd-q .rz[data-d=n]{top:-6px;left:14px;right:14px;height:8px;cursor:ns-resize}
        #dd-q .rz[data-d=s]{bottom:-6px;left:14px;right:14px;height:8px;cursor:ns-resize}
        #dd-q .rz[data-d=e]{right:-6px;top:14px;bottom:14px;width:8px;cursor:ew-resize}
        #dd-q .rz[data-d=w]{left:-6px;top:14px;bottom:14px;width:8px;cursor:ew-resize}
        #dd-q .rz[data-d=ne]{top:-6px;right:-6px;width:18px;height:18px;cursor:nesw-resize}
        #dd-q .rz[data-d=nw]{top:-6px;left:-6px;width:18px;height:18px;cursor:nwse-resize}
        #dd-q .rz[data-d=se]{bottom:-6px;right:-6px;width:18px;height:18px;cursor:nwse-resize}
        #dd-q .rz[data-d=sw]{bottom:-6px;left:-6px;width:18px;height:18px;cursor:nesw-resize}
        #dd-q .q-top{cursor:move;user-select:none}
        #dd-q .q-top button{cursor:pointer}
        #dd-q .q-box.gest{user-select:none}
        #dd-q .q-chi[draggable=true],#dd-q .q-av[draggable=true]{cursor:grab}
        #dd-q .q-chi[draggable=true]:active,#dd-q .q-av[draggable=true]:active{cursor:grabbing}
        #dd-q .q-chi.dragging,#dd-q .q-item.dragging{opacity:.4}
        #dd-q .q-item.drop{outline:2px dashed var(--d-ac);outline-offset:-2px;background:var(--d-acs)}
        #dd-q .q-chi.drop-b{box-shadow:inset 0 2px 0 var(--d-ac)}
        #dd-q .q-chi.drop-a{box-shadow:inset 0 -2px 0 var(--d-ac)}
        #dd-q .q-hint{flex:1 1 0;color:var(--d-dim);font-size:11.5px;margin-left:4px;white-space:nowrap;overflow:hidden;text-overflow:ellipsis;min-width:0}
        #dd-q .q-sel .q-sum,#dd-q .q-sel .q-link,#dd-q .q-sel .q-ck{flex-shrink:0;white-space:nowrap}
        #dd-q .q-hint::before{content:'⠿ ';color:var(--d-ac2)}
        /* jendela lebar: daftar manga di kiri, opsi hasil di kanan */
        #dd-q .q-box.wide{display:grid;grid-template-columns:minmax(0,1fr) 400px;grid-template-rows:auto auto auto minmax(0,1fr) auto;grid-template-areas:"top top" "bar out" "sel out" "list out" "foot foot"}
        #dd-q .q-box.wide .q-bar{grid-area:bar}
        #dd-q .q-box.wide.tab-done{grid-template-columns:minmax(0,1fr);grid-template-areas:"top" "bar" "sel" "list" "foot"}
        #dd-q .q-box.tab-done .q-sel,#dd-q .q-box.tab-done .q-out,#dd-q .q-box.tab-done #dd-q-start,#dd-q .q-box.tab-done #dd-q-stop,#dd-q .q-box.tab-done #dd-q-clr-all{display:none!important}
        #dd-q .q-box:not(.tab-done) #dd-q-clr-done{display:none!important}
        #dd-q .q-bar{display:flex;align-items:center;justify-content:space-between;flex-wrap:wrap;gap:10px 14px;padding:10px 16px;background:var(--d-bg);border-bottom:1px solid var(--d-bd);flex-shrink:0}
        #dd-q .q-tabs{display:flex;gap:2px;padding:3px;background:var(--d-s2);border:1px solid var(--d-bd);border-radius:11px}
        #dd-q .q-tab{display:inline-flex;align-items:center;gap:7px;height:30px;padding:0 13px;border:none;border-radius:8px;background:none;color:var(--d-mu);font-size:12.5px;font-weight:600;cursor:pointer;white-space:nowrap;transition:background .12s,color .12s}
        #dd-q .q-tab:hover{color:var(--d-tx)}
        #dd-q .q-tab .dd-ic{width:14px;height:14px;stroke-width:2.6}
        #dd-q .q-tab b{min-width:20px;padding:1px 6px;border-radius:999px;background:var(--d-s3);color:var(--d-mu);font-size:10.5px;font-weight:700;text-align:center;font-variant-numeric:tabular-nums}
        #dd-q .q-tab.on{background:var(--d-s1);color:var(--d-tx);box-shadow:0 1px 4px rgba(0,0,0,.35),inset 0 0 0 1px var(--d-bd2)}
        #dd-q .q-tab.on b{background:var(--d-acs);color:var(--d-ac2)}
        #dd-q .q-search{flex:1 1 220px;max-width:360px;min-width:160px;height:34px;display:flex;align-items:center;gap:8px;padding:0 6px 0 11px;background:var(--d-s2);border:1px solid var(--d-bd);border-radius:10px;color:var(--d-dim);transition:border-color .12s,box-shadow .12s}
        #dd-q .q-search:focus-within{border-color:var(--d-ac);box-shadow:0 0 0 3px var(--d-acs);color:var(--d-ac2)}
        #dd-q .q-search>.dd-ic{width:15px;height:15px;flex-shrink:0}
        #dd-q .q-search input{flex:1;min-width:0;height:100%;border:none;outline:none;background:none;color:var(--d-tx);font:500 12.5px var(--d-font)}
        #dd-q .q-search input::placeholder{color:var(--d-dim)}
        #dd-q .q-sres{flex-shrink:0;color:var(--d-mu);font-size:11px;font-weight:600;white-space:nowrap}
        #dd-q .q-search .q-ib{width:24px;height:24px}
        #dd-q .q-title mark{background:rgba(255,255,255,.28);color:#fff;border-radius:3px;padding:0 1px}
        #dd-q .q-dck{width:20px;height:20px;flex-shrink:0;display:flex;align-items:center;justify-content:center;border-radius:6px;background:rgba(74,222,128,.15);color:var(--d-ok)}
        #dd-q .q-dck .dd-ic{width:13px;height:13px;stroke-width:3}
        #dd-q .q-chip.ok{background:rgba(74,222,128,.12);border-color:rgba(74,222,128,.3);color:var(--d-ok)}
        #dd-q .q-ib.q-rq:hover{color:var(--d-ok);background:rgba(74,222,128,.12)}
        #dd-q .q-item.st-done .q-title{color:var(--d-tx)}
        #dd-q .q-empty .q-link{margin-top:6px}
        /* ---------- kartu notifikasi selesai download ---------- */
        #dd-done{position:fixed;right:22px;bottom:22px;z-index:2147483008;width:min(370px,calc(100vw - 32px));display:flex;align-items:flex-start;gap:13px;padding:15px 14px 17px 15px;border-radius:16px;background:var(--d-s1);border:1px solid var(--d-bd2);box-shadow:0 18px 50px rgba(0,0,0,.6);color:var(--d-tx);font-family:var(--d-font);overflow:hidden;opacity:0;transform:translateY(18px) scale(.98);pointer-events:none;transition:opacity .22s ease,transform .22s ease}
        #dd-done *{box-sizing:border-box}
        #dd-done.show{opacity:1;transform:none;pointer-events:auto}
        #dd-done.ok{border-color:rgba(74,222,128,.38)}
        #dd-done.warn{border-color:rgba(251,191,36,.42)}
        #dd-done .dn-ic{flex-shrink:0;width:40px;height:40px;border-radius:12px;display:flex;align-items:center;justify-content:center;background:rgba(74,222,128,.15);color:var(--d-ok)}
        #dd-done.warn .dn-ic{background:rgba(251,191,36,.15);color:#fbbf24}
        #dd-done .dn-ic .dd-ic{width:21px;height:21px;fill:none;stroke:currentColor;stroke-width:2.6;stroke-linecap:round;stroke-linejoin:round}
        #dd-done .dn-b{flex:1;min-width:0}
        #dd-done .dn-t{display:block;font-size:14px;font-weight:700;line-height:1.3;padding-right:20px}
        #dd-done .dn-s{margin-top:2px;color:var(--d-mu);font-size:12px;overflow:hidden;text-overflow:ellipsis;white-space:nowrap}
        #dd-done .dn-chips{display:flex;flex-wrap:wrap;gap:6px;margin-top:9px}
        #dd-done .dn-chips span{padding:3px 9px;border-radius:999px;background:var(--d-s2);border:1px solid var(--d-bd);color:var(--d-mu);font-size:11px;font-weight:600;font-variant-numeric:tabular-nums}
        #dd-done .dn-chips span.bad{background:rgba(255,107,120,.12);border-color:rgba(255,107,120,.32);color:var(--d-er)}
        #dd-done .dn-w{display:flex;align-items:center;gap:6px;margin-top:10px;color:var(--d-dim);font-size:11.5px;min-width:0}
        #dd-done .dn-w .dd-ic{width:13px;height:13px;flex-shrink:0;fill:none;stroke:currentColor;stroke-width:2;stroke-linecap:round;stroke-linejoin:round}
        #dd-done .dn-w span{flex-shrink:0}
        #dd-done .dn-w b{min-width:0;overflow:hidden;text-overflow:ellipsis;white-space:nowrap;color:var(--d-mu);font-weight:600}
        #dd-done .dn-x{position:absolute;top:9px;right:9px;width:26px;height:26px;padding:0;display:flex;align-items:center;justify-content:center;border:none;border-radius:8px;background:none;color:var(--d-dim);cursor:pointer}
        #dd-done .dn-x:hover{background:var(--d-s3);color:var(--d-tx)}
        #dd-done .dn-x .dd-ic{width:15px;height:15px;fill:none;stroke:currentColor;stroke-width:2.2;stroke-linecap:round}
        #dd-done .dn-bar{position:absolute;left:0;bottom:0;height:3px;width:100%;transform-origin:left;background:var(--d-ok);opacity:.85;animation:dd-dn-bar 12s linear forwards}
        #dd-done.warn .dn-bar{background:#fbbf24}
        #dd-done:hover .dn-bar{animation-play-state:paused}
        @keyframes dd-dn-bar{from{transform:scaleX(1)}to{transform:scaleX(0)}}
        .dd-noanim #dd-done{transition:none!important}
        .dd-noanim #dd-done .dn-bar{animation:none!important}
        @media (max-width:560px){#dd-done{right:16px;bottom:16px}}
        /* ---------- dialog konfirmasi / peringatan / input ---------- */
        #dd-dlg{position:fixed;inset:0;z-index:2147483600;display:flex;align-items:center;justify-content:center;padding:16px;background:rgba(0,0,0,.62);backdrop-filter:blur(3px);font-family:var(--d-font);animation:dd-dl-fade .14s ease}
        #dd-dlg.out{opacity:0;transition:opacity .12s}
        #dd-dlg *{box-sizing:border-box}
        #dd-dlg .dl-box{width:min(430px,100%);max-height:90vh;overflow:auto;display:flex;flex-direction:column;gap:18px;padding:20px;border-radius:18px;background:var(--d-s1);border:1px solid var(--d-bd2);box-shadow:0 24px 70px rgba(0,0,0,.7);color:var(--d-tx);animation:dd-dl-in .16s ease}
        #dd-dlg .dl-top{display:flex;gap:14px;align-items:flex-start}
        #dd-dlg .dl-ic{flex-shrink:0;width:42px;height:42px;border-radius:13px;display:flex;align-items:center;justify-content:center}
        #dd-dlg .dl-ic .dd-ic{width:21px;height:21px;fill:none;stroke:currentColor;stroke-width:2;stroke-linecap:round;stroke-linejoin:round}
        #dd-dlg .dl-ic.warn{background:rgba(251,191,36,.14);color:#fbbf24}
        #dd-dlg .dl-ic.danger{background:rgba(255,107,120,.14);color:var(--d-er)}
        #dd-dlg .dl-ic.info{background:rgba(125,178,255,.14);color:var(--d-bl)}
        #dd-dlg .dl-ic.ask{background:var(--d-acs);color:var(--d-ac2)}
        #dd-dlg .dl-body{flex:1;min-width:0;display:flex;flex-direction:column;gap:7px;padding-top:2px}
        #dd-dlg .dl-t{font-size:15.5px;font-weight:700;line-height:1.3}
        #dd-dlg .dl-head{font-size:13px;font-weight:600;color:var(--d-ac2);word-break:break-word}
        #dd-dlg .dl-m{font-size:12.5px;line-height:1.65;color:var(--d-mu);white-space:pre-line;word-break:break-word}
        #dd-dlg .dl-f{display:grid;grid-template-columns:1fr 1fr;gap:10px;margin-top:8px}
        #dd-dlg .dl-f label{display:flex;flex-direction:column;gap:5px;font-size:11.5px;font-weight:600;color:var(--d-mu)}
        #dd-dlg .dl-f input{width:100%;height:38px;padding:0 11px;border-radius:10px;border:1px solid var(--d-bd2);background:var(--d-s2);color:var(--d-tx);font:600 13.5px var(--d-font);outline:none}
        #dd-dlg .dl-f input:focus{border-color:var(--d-ac);box-shadow:0 0 0 3px var(--d-acs)}
        #dd-dlg .dl-bt{display:flex;justify-content:flex-end;gap:8px}
        #dd-dlg .dl-b{height:38px;padding:0 18px;border-radius:10px;border:1px solid var(--d-bd2);background:var(--d-s2);color:var(--d-tx);font:600 12.5px var(--d-font);cursor:pointer;transition:background .12s,filter .12s}
        #dd-dlg .dl-b:hover{background:var(--d-s3)}
        #dd-dlg .dl-b:focus-visible{outline:2px solid var(--d-ac2);outline-offset:2px}
        #dd-dlg .dl-b.pri{border-color:transparent;background:linear-gradient(135deg,var(--d-ac2),var(--d-ac));color:var(--d-bg);box-shadow:none}
        #dd-dlg .dl-b.pri:hover{filter:brightness(1.08)}
        #dd-dlg .dl-b.red{border-color:rgba(255,107,120,.55);background:rgba(255,107,120,.15);color:var(--d-er)}
        #dd-dlg .dl-b.red:hover{background:rgba(255,107,120,.28)}
        @keyframes dd-dl-fade{from{opacity:0}to{opacity:1}}
        @keyframes dd-dl-in{from{opacity:0;transform:translateY(10px) scale(.97)}to{opacity:1;transform:none}}
        .dd-noanim #dd-dlg,.dd-noanim #dd-dlg .dl-box{animation:none!important;transition:none!important}
        @media (max-width:480px){#dd-dlg .dl-bt .dl-b{flex:1}#dd-dlg .dl-f{grid-template-columns:1fr}}
        #dd-q .q-box.wide .q-top{grid-area:top}
        #dd-q .q-box.wide .q-sel{grid-area:sel}
        #dd-q .q-box.wide .q-list{grid-area:list;min-height:0}
        #dd-q .q-box.wide .q-out{grid-area:out;border-top:none;border-left:1px solid var(--d-bd);overflow:auto;min-height:0}
        #dd-q .q-box.wide .q-foot{grid-area:foot}
        #dd-q .q-box.wide .q-tiles{grid-template-columns:1fr}
        #dd-q .q-box.wide .q-desc{padding-left:0}
        #dd-q .q-box{display:flex;flex-direction:column;width:100%;min-height:0;background:var(--d-bg);border:1px solid var(--d-bd2);border-radius:16px;overflow:hidden;box-shadow:0 24px 70px rgba(0,0,0,.65)}
        #dd-q .q-top{display:flex;align-items:center;gap:10px;padding:12px 12px 12px 14px;background:var(--d-s1);border-bottom:1px solid var(--d-bd);flex-shrink:0}
        #dd-q .q-logo{width:34px;height:34px;display:flex;align-items:center;justify-content:center;border-radius:10px;background:linear-gradient(135deg,var(--d-ac2),var(--d-ac));color:var(--d-bg);flex-shrink:0}
        #dd-q .q-logo .dd-ic{width:18px;height:18px}
        #dd-q .q-ht{flex:1;min-width:0}
        #dd-q .q-ht b{display:block;font-size:14px}
        #dd-q .q-ht small{color:var(--d-dim);font-size:11.5px}
        #dd-q .q-btn{height:32px;padding:0 13px;display:inline-flex;align-items:center;justify-content:center;gap:7px;border-radius:9px;border:1px solid var(--d-bd2);background:var(--d-s2);color:var(--d-tx);font-size:12px;font-weight:600;cursor:pointer;white-space:nowrap;transition:background .12s,filter .12s}
        #dd-q .q-btn:hover{background:var(--d-s3)}
        #dd-q .q-btn .dd-ic{width:15px;height:15px}
        #dd-q .q-btn.pri{height:36px;padding:0 18px;border-color:transparent;background:linear-gradient(135deg,var(--d-ac2),var(--d-ac));color:var(--d-bg);font-weight:700;box-shadow:none}
        #dd-q .q-btn.pri:hover{filter:brightness(1.08)}
        #dd-q .q-btn.red{height:36px;background:rgba(255,107,120,.12);border-color:rgba(255,107,120,.5);color:var(--d-er)}
        #dd-q .q-btn.red:hover{background:rgba(255,107,120,.2)}
        #dd-q .q-btn:disabled{opacity:.4;cursor:not-allowed;filter:none;box-shadow:none}
        #dd-q .q-ib{width:28px;height:28px;padding:0;display:inline-flex;align-items:center;justify-content:center;border:none;background:none;color:var(--d-mu);border-radius:8px;cursor:pointer;flex-shrink:0;transition:background .12s,color .12s}
        #dd-q .q-ib:hover{background:var(--d-s3);color:var(--d-tx)}
        #dd-q .q-ib:disabled{opacity:.25;cursor:not-allowed;background:none;color:var(--d-mu)}
        #dd-q .q-ib .dd-ic{width:16px;height:16px}
        #dd-q .q-ib.q-dn .dd-ic{transform:rotate(180deg)}
        #dd-q .q-ib.q-tg .dd-ic{transform:rotate(180deg);transition:transform .15s}
        #dd-q .q-ib.q-tg.open .dd-ic{transform:rotate(0)}
        #dd-q .q-ib.q-rm:hover{color:var(--d-er);background:rgba(255,107,120,.12)}
        #dd-q .q-link{border:none;background:none;color:var(--d-ac2);font-size:12px;font-weight:600;cursor:pointer;padding:3px 4px;border-radius:6px}
        #dd-q .q-link:hover{text-decoration:underline}
        #dd-q .q-link:disabled{opacity:.35;cursor:not-allowed;text-decoration:none}
        #dd-q .q-link.dng{color:var(--d-er)}
        #dd-q input[type=checkbox]{width:16px;height:16px;margin:0;accent-color:var(--d-ac);cursor:pointer;flex-shrink:0}
        #dd-q input[type=checkbox]:disabled{cursor:not-allowed;opacity:.5}
        #dd-q .q-ck{display:inline-flex;align-items:center;gap:8px;cursor:pointer;font-size:12px;font-weight:600;color:var(--d-tx);flex-shrink:0}
        #dd-q .q-sel{display:flex;align-items:center;gap:12px;padding:9px 14px;background:var(--d-bg);border-bottom:1px solid var(--d-bd);flex-shrink:0}
        #dd-q .q-sum{flex:1;min-width:0;color:var(--d-mu);font-size:12px;overflow:hidden;text-overflow:ellipsis;white-space:nowrap}
        #dd-q .q-list{flex:1;min-height:140px;overflow:auto;padding:10px 12px;display:flex;flex-direction:column;gap:8px;overscroll-behavior:contain}
        #dd-q .q-empty{margin:auto;text-align:center;padding:30px 16px;color:var(--d-mu);line-height:1.7;display:flex;flex-direction:column;align-items:center;gap:6px}
        #dd-q .q-empty b{color:var(--d-tx);font-size:14px}
        #dd-q .q-empty em{color:var(--d-ac2);font-style:normal;font-weight:600}
        #dd-q .q-empty-ic{width:46px;height:46px;border-radius:14px;background:var(--d-s2);display:flex;align-items:center;justify-content:center;color:var(--d-dim);margin-bottom:4px}
        #dd-q .q-empty-ic .dd-ic{width:22px;height:22px}
        #dd-q .q-item{border:1px solid var(--d-bd);background:var(--d-s1);border-radius:12px;overflow:hidden;transition:border-color .12s,background .12s;flex-shrink:0}
        #dd-q .q-item:hover{border-color:var(--d-bd2)}
        #dd-q .q-item.sel{border-color:rgba(255,255,255,.5);background:linear-gradient(0deg,rgba(255,255,255,.07),rgba(255,255,255,.07)),var(--d-s1)}
        #dd-q .q-item.st-running{border-color:rgba(125,178,255,.5)}
        #dd-q .q-item.st-error{border-color:rgba(255,107,120,.45)}
        #dd-q .q-row{display:flex;align-items:center;gap:10px;padding:10px 8px 10px 12px}
        #dd-q .q-main{flex:1;min-width:0;cursor:pointer}
        #dd-q .q-title{font-weight:700;font-size:13px;overflow:hidden;text-overflow:ellipsis;white-space:nowrap}
        #dd-q .q-meta{margin-top:4px;display:flex;flex-wrap:wrap;gap:6px}
        #dd-q .q-chip{padding:1px 9px;border-radius:999px;background:var(--d-s3);font-size:11px;font-weight:600;color:var(--d-mu);line-height:1.6}
        #dd-q .st-running .q-st{background:rgba(125,178,255,.15);color:var(--d-bl)}
        #dd-q .st-done .q-st{background:rgba(74,222,128,.14);color:var(--d-ok)}
        #dd-q .st-error .q-st{background:rgba(255,107,120,.15);color:var(--d-er)}
        #dd-q .q-acts{display:flex;align-items:center;gap:0;flex-shrink:0}
        #dd-q .q-pb{height:3px;background:var(--d-s3)}
        #dd-q .q-pb i{display:block;height:100%;width:0;background:var(--d-bl);transition:width .25s}
        #dd-q .q-prog{padding:6px 14px 9px;font-size:11.5px;color:var(--d-bl);font-weight:600;overflow:hidden;text-overflow:ellipsis;white-space:nowrap}
        #dd-q .q-err{padding:0 14px 9px;font-size:11.5px;color:var(--d-er)}
        #dd-q .q-err.warn{color:#f5b84b}
        #dd-q .q-chs{border-top:1px solid var(--d-bd);background:var(--d-bg);padding:8px 12px 10px}
        #dd-q .q-chs-h{display:flex;align-items:center;gap:8px;margin-bottom:6px;font-size:12px}
        #dd-q .q-chs-h span{flex:1;color:var(--d-dim);font-size:11.5px}
        #dd-q .q-chl{max-height:190px;overflow:auto;display:grid;grid-template-columns:repeat(auto-fill,minmax(180px,1fr));gap:1px 10px;overscroll-behavior:contain}
        #dd-q .q-chi{display:flex;align-items:center;gap:8px;padding:4px 6px;border-radius:7px;cursor:pointer;font-size:12px;color:var(--d-mu);min-width:0}
        #dd-q .q-chi:hover{background:var(--d-s2);color:var(--d-tx)}
        #dd-q .q-chi span{overflow:hidden;text-overflow:ellipsis;white-space:nowrap}
        #dd-q .q-out{padding:12px 14px;border-top:1px solid var(--d-bd);background:var(--d-s1);display:flex;flex-direction:column;gap:9px;flex-shrink:0}
        #dd-q .q-orow{display:flex;align-items:center;gap:10px;flex-wrap:wrap}
        #dd-q .q-orow[hidden]{display:none}
        #dd-q .q-ol{width:62px;font-size:10.5px;color:var(--d-dim);font-weight:700;text-transform:uppercase;letter-spacing:.05em;flex-shrink:0}
        #dd-q .q-seg{display:inline-flex;padding:3px;gap:2px;background:var(--d-bg);border:1px solid var(--d-bd);border-radius:10px;max-width:100%}
        #dd-q .q-seg button{height:26px;padding:0 12px;border:none;background:none;color:var(--d-mu);border-radius:7px;font-size:12px;font-weight:600;cursor:pointer;white-space:nowrap;transition:background .12s,color .12s}
        #dd-q .q-seg button:hover{color:var(--d-tx)}
        #dd-q .q-seg button[hidden]{display:none}
        #dd-q .q-seg button.on{background:var(--d-ac);color:var(--d-bg)}
        #dd-q .q-in{flex:1;min-width:150px;height:32px;padding:0 11px;border-radius:9px;border:1px solid var(--d-bd2);background:var(--d-bg);color:var(--d-tx);font:12.5px var(--d-font);outline:none}
        #dd-q .q-in:focus{border-color:var(--d-ac)}
        #dd-q .q-in::placeholder{color:var(--d-dim)}
        #dd-q .q-desc{font-size:11.5px;color:var(--d-dim);line-height:1.5;padding-left:72px}
        #dd-q .q-foot{display:flex;align-items:center;gap:6px;padding:10px 14px;border-top:1px solid var(--d-bd);background:var(--d-bg);flex-shrink:0;flex-wrap:wrap}
        #dd-q .q-ghost{height:30px;padding:0 11px 0 9px;display:inline-flex;align-items:center;gap:6px;border:1px solid var(--d-bd);background:var(--d-s1);color:var(--d-mu);border-radius:999px;font-size:12px;font-weight:600;cursor:pointer;white-space:nowrap;transition:background .12s,color .12s,border-color .12s}
        #dd-q .q-ghost .dd-ic{width:14px;height:14px}
        #dd-q .q-ghost:hover{background:var(--d-s3);border-color:var(--d-bd2);color:var(--d-tx)}
        #dd-q .q-ghost:active{transform:translateY(1px)}
        #dd-q .q-ghost.dng:hover{background:rgba(255,107,120,.12);border-color:rgba(255,107,120,.5);color:var(--d-er)}
        #dd-q .q-ghost:disabled{opacity:.35;cursor:not-allowed;background:var(--d-s1);border-color:var(--d-bd);color:var(--d-mu)}
        #dd-q .q-sp{flex:1}
        @media (max-width:560px){
            #dd-q .q-ol{width:100%}
            #dd-q .q-desc{padding-left:0}
            #dd-q .q-top .q-btn span{display:none}
            #dd-q .q-btn.pri{flex:1}
        }


        /* ---------- antrian: baris post (v2.8) ---------- */
        #dd-q .q-chl{grid-template-columns:repeat(auto-fill,minmax(240px,1fr))}
        #dd-q .q-chi{gap:4px;padding:1px 2px 1px 6px;cursor:default}
        #dd-q .q-chi label{flex:1;display:flex;align-items:center;gap:8px;min-width:0;cursor:pointer;padding:4px 0;color:inherit}
        #dd-q .q-chi label span{overflow:hidden;text-overflow:ellipsis;white-space:nowrap}
        #dd-q .q-sk{font-style:normal;font-size:10.5px;font-weight:700;color:#f5b84b;background:rgba(245,184,75,.13);padding:0 7px;border-radius:999px;flex-shrink:0;line-height:1.7}
        #dd-q .q-ib.sm{width:26px;height:26px}
        #dd-q .q-mgb{font-size:13px;font-weight:700;line-height:1}
        #dd-q .q-mgb.on{color:var(--d-ac2)}
        #dd-q .q-sk.q-mg{color:var(--d-ac2);background:var(--d-acs)}
        #dd-q .q-chi.mg label span{opacity:.6}
        #dd-q .q-ib.sm .dd-ic{width:15px;height:15px}
        #dd-q .q-chip.warn{background:rgba(245,184,75,.14);color:#f5b84b}
        #dd-q .q-chip.ed{background:var(--d-acs);color:var(--d-ac2)}
        #dd-q .q-sk.q-ed{background:var(--d-acs);color:var(--d-ac2)}
        @media (max-width:560px){ #dd-q .q-chl{grid-template-columns:1fr} }


        /* ---------- antrian: desain ulang (v2.13.4) ---------- */
        #dd-q .q-win{width:min(720px,100%)}
        #dd-q .q-box{border-radius:18px}
        #dd-q .q-top{padding:14px 14px 14px 16px;background:linear-gradient(180deg,var(--d-s2),var(--d-s1))}
        #dd-q .q-logo{width:62px;height:62px;border-radius:16px;box-shadow:none;background:var(--d-s2) center/100% 100% no-repeat;border:1px solid var(--d-ac);overflow:hidden}
        #dd-q .q-ht b{font-size:15px;letter-spacing:.01em}
        #dd-q .q-ht small{display:block;margin-top:1px;font-size:12px}
        #dd-q .q-top .q-btn{height:34px;border-radius:10px;background:var(--d-acs);border-color:rgba(255,255,255,.45);color:var(--d-ac2)}
        #dd-q .q-top .q-btn:hover{background:rgba(255,255,255,.25)}
        #dd-q .q-top .q-ib{width:34px;height:34px;border-radius:10px}
        /* checkbox kustom */
        #dd-q input[type=checkbox]{-webkit-appearance:none;appearance:none;width:19px;height:19px;border-radius:6px;border:1.5px solid var(--d-bd2);background:var(--d-bg) center/12px no-repeat;transition:background-color .12s,border-color .12s}
        #dd-q input[type=checkbox]:hover:not(:disabled){border-color:var(--d-ac)}
        #dd-q input[type=checkbox]:checked{border-color:var(--d-ac);background-color:var(--d-ac);background-image:url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='none' stroke='%2315151a' stroke-width='3.6' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpath d='M5.5 12.5l4.2 4.2 8.8-9.4'/%3E%3C/svg%3E")}
        #dd-q input[type=checkbox]:indeterminate{border-color:var(--d-ac);background-color:var(--d-ac);background-image:url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='none' stroke='%2315151a' stroke-width='3.6' stroke-linecap='round'%3E%3Cpath d='M6 12h12'/%3E%3C/svg%3E")}
        /* bar pilih semua */
        #dd-q .q-sel{padding:10px 16px;background:var(--d-bg)}
        #dd-q .q-sum{display:inline-flex;align-items:center;flex:0 1 auto;max-width:100%;padding:3px 11px;border-radius:999px;background:var(--d-s1);border:1px solid var(--d-bd);font-size:11.5px;font-weight:600}
        #dd-q .q-sel .q-link.dng{margin-left:auto;padding:4px 10px;border-radius:8px}
        #dd-q .q-sel .q-link.dng:hover:not(:disabled){background:rgba(255,107,120,.12);text-decoration:none}
        /* daftar & kartu */
        #dd-q .q-list{padding:12px 14px;gap:10px;min-height:150px}
        #dd-q .q-item{border-radius:14px;background:var(--d-s1);box-shadow:0 1px 0 rgba(255,255,255,.02) inset}
        #dd-q .q-item.sel{border-color:rgba(255,255,255,.55);background:linear-gradient(0deg,rgba(255,255,255,.08),rgba(255,255,255,.08)),var(--d-s1)}
        #dd-q .q-item.st-done:not(.sel) .q-title{color:var(--d-mu)}
        #dd-q .q-row{gap:12px;padding:12px 10px 12px 14px}
        #dd-q .q-av{width:40px;height:40px;border-radius:12px;display:flex;align-items:center;justify-content:center;flex-shrink:0;font-size:16px;font-weight:800;background:hsl(var(--h) 42% 22%);color:hsl(var(--h) 85% 82%);border:1px solid hsl(var(--h) 40% 34%)}
        #dd-q .q-title{font-size:13.5px}
        #dd-q .q-meta{margin-top:5px;gap:5px}
        #dd-q .q-chip{padding:1px 9px;font-size:11px;background:var(--d-s2);border:1px solid var(--d-bd)}
        #dd-q .q-chip.warn{border-color:rgba(245,184,75,.3)}
        #dd-q .q-chip.ed{border-color:rgba(255,255,255,.35)}
        #dd-q .q-chip.bad{background:rgba(255,107,120,.12);color:var(--d-er);border-color:rgba(255,107,120,.4)}
        #dd-q .q-pill{display:inline-flex;align-items:center;gap:6px;height:24px;padding:0 11px;border-radius:999px;background:var(--d-s2);color:var(--d-mu);font-size:11px;font-weight:700;flex-shrink:0;white-space:nowrap}
        #dd-q .q-pill::before{content:'';width:6px;height:6px;border-radius:50%;background:currentColor}
        #dd-q .st-running .q-pill{background:rgba(125,178,255,.14);color:var(--d-bl)}
        #dd-q .st-running .q-pill::before{animation:dd-blink 1s infinite}
        #dd-q .st-done .q-pill{background:rgba(74,222,128,.13);color:var(--d-ok)}
        #dd-q .st-error .q-pill{background:rgba(255,107,120,.14);color:var(--d-er)}
        #dd-q .q-acts{gap:1px;padding-left:8px;margin-left:2px;border-left:1px solid var(--d-bd)}
        #dd-q .q-acts .q-ib{width:30px;height:30px;border-radius:9px}
        #dd-q .q-mv{display:inline-flex;flex-direction:column;justify-content:center}
        #dd-q .q-mv .q-ib{width:30px;height:15px;border-radius:6px}
        #dd-q .q-mv .q-ib .dd-ic{width:13px;height:13px}
        #dd-q .q-pb{margin:0 14px;height:5px;border-radius:999px;overflow:hidden}
        #dd-q .q-pb i{border-radius:inherit;background:linear-gradient(90deg,var(--d-bl),#a5cbff)}
        #dd-q .q-prog{display:flex;gap:10px;padding:7px 14px 11px}
        #dd-q .q-prog span{flex:1;min-width:0;overflow:hidden;text-overflow:ellipsis;white-space:nowrap}
        #dd-q .q-prog b{font-variant-numeric:tabular-nums}
        #dd-q .q-err{margin:0 14px 11px;padding:7px 11px;border-radius:9px;background:rgba(255,107,120,.1)}
        #dd-q .q-err.warn{background:rgba(245,184,75,.1)}
        /* daftar post */
        #dd-q .q-chs{padding:10px 14px 12px}
        #dd-q .q-chs-h{gap:6px;margin-bottom:8px}
        #dd-q .q-chs-h b{font-size:12px}
        #dd-q .q-chs-h .q-link{padding:3px 11px;border-radius:999px;background:var(--d-s2);border:1px solid var(--d-bd);color:var(--d-tx);font-size:11.5px}
        #dd-q .q-chs-h .q-link:hover:not(:disabled){background:var(--d-s3);text-decoration:none}
        #dd-q .q-chl{grid-template-columns:1fr;gap:3px;max-height:216px}
        #dd-q .q-chi{padding:2px 4px 2px 8px;border-radius:10px;background:var(--d-s1);border:1px solid transparent;color:var(--d-mu)}
        #dd-q .q-chi.on{color:var(--d-tx)}
        #dd-q .q-chi:hover{background:var(--d-s2)}
        #dd-q .q-cn{font-style:normal;min-width:22px;text-align:center;font-size:10.5px;font-weight:700;color:var(--d-dim);font-variant-numeric:tabular-nums}
        /* output */
        #dd-q .q-out{padding:14px 16px;gap:12px;background:var(--d-s1)}
        #dd-q .q-sec{display:flex;flex-direction:column;gap:6px;min-width:0;flex:1}
        #dd-q .q-sec[hidden]{display:none}
        #dd-q .q-two{display:flex;flex-wrap:wrap;gap:12px 18px}
        #dd-q .q-two .q-sec{flex:0 1 auto}
        #dd-q .q-ol{width:auto;font-size:10.5px}
        #dd-q .q-seg{border-radius:11px}
        #dd-q .q-seg button{height:28px;border-radius:8px}
        #dd-q .q-tiles{display:grid;grid-template-columns:repeat(3,1fr);gap:8px;padding:0;background:none;border:none;width:100%}
        #dd-q .q-tiles button{height:auto;padding:10px 12px;display:flex;flex-direction:column;align-items:flex-start;gap:2px;text-align:left;white-space:normal;background:var(--d-bg);border:1px solid var(--d-bd);border-radius:12px}
        #dd-q .q-tiles button b{font-size:12.5px;font-weight:700;color:var(--d-tx)}
        #dd-q .q-tiles button small{font-size:11px;font-weight:500;color:var(--d-dim)}
        #dd-q .q-tiles button:hover{border-color:var(--d-bd2)}
        #dd-q .q-tiles button.on{background:var(--d-acs);border-color:var(--d-ac);box-shadow:0 0 0 1px var(--d-ac) inset}
        #dd-q .q-tiles button.on small{color:var(--d-ac2)}
        #dd-q .q-in{flex:none;width:100%;height:36px;border-radius:10px}
        #dd-q .q-desc{padding:9px 12px;border-radius:10px;background:var(--d-bg);border:1px dashed var(--d-bd2);color:var(--d-mu);font-size:11.5px}
        /* footer */
        #dd-q .q-foot{padding:12px 16px;background:var(--d-bg);gap:4px}
        #dd-q .q-ghost{height:32px;border-color:transparent;background:transparent;border-radius:9px}
        #dd-q .q-ghost:hover{background:var(--d-s2)}
        #dd-q .q-btn.pri,#dd-q .q-btn.red{height:40px;padding:0 22px;border-radius:11px;font-size:13px}
        #dd-q .q-btn.pri:disabled{background:var(--d-s3);color:var(--d-dim);border-color:var(--d-bd)}
        @media (max-width:560px){
            #dd-q .q-av,#dd-q .q-pill{display:none}
            #dd-q .q-tiles{grid-template-columns:1fr}
            #dd-q .q-desc{padding-left:12px}
            #dd-q .q-acts{padding-left:4px}
        }
        .dd-noanim #dd-q .st-running .q-pill::before{animation:none!important}

        /* ---------- panel utama: toolbar lebih rapi + mode antrian (v2.8) ---------- */
        #dd-pv .pv-bar{gap:10px 12px;padding:10px 16px;border-bottom:1px solid var(--d-bd);background:var(--d-bg)}
        #dd-pv .pv-grp{display:inline-flex;align-items:center;gap:8px;flex-wrap:wrap}
        #dd-pv .pv-vsep{width:1px;height:22px;background:var(--d-bd2);flex-shrink:0}
        #dd-pv .pv-editg{margin-left:0;gap:2px;padding:3px;background:var(--d-s1);border:1px solid var(--d-bd);border-radius:11px}
        #dd-pv .pv-editg .pv-b{height:26px;padding:0 10px;border-color:transparent;background:transparent;color:var(--d-mu);font-size:11.5px}
        #dd-pv .pv-editg .pv-b:hover:not(:disabled){background:var(--d-s3);color:var(--d-tx)}
        #dd-pv .pv-editg .pv-b.red{height:26px;background:transparent;border-color:transparent;color:var(--d-er)}
        #dd-pv .pv-editg .pv-b.red:hover:not(:disabled){background:rgba(255,107,120,.15)}
        #dd-pv .pv-editg .pv-b:disabled{opacity:.35}
        #dd-pv .pv-editg .pv-b .dd-ic{width:14px;height:14px}
        #dd-pv .pv-box.narrow .pv-editg .pv-b span{display:none}
        #dd-pv .pv-box.narrow .pv-editg .pv-b{padding:0 8px}
        #dd-pv .pv-box.narrow .pv-vsep{display:none}
        #dd-pv .pv-qtag{flex-shrink:0;padding:3px 10px;border-radius:999px;background:var(--d-acs);color:var(--d-ac2);font-size:11px;font-weight:700;white-space:nowrap}
        #dd-pv .pv-qtag[hidden]{display:none}
        #dd-pv .pv-box.qmode .pv-split,
        #dd-pv .pv-box.qmode #dd-pv-pick{display:none!important}
        #dd-pv .pv-box.narrow .pv-qtag{display:none}

        /* ---------- toast ---------- */
        #dd-toast{position:fixed;left:50%;bottom:26px;transform:translateX(-50%) translateY(20px);opacity:0;z-index:2147483007;max-width:82vw;display:flex;align-items:center;gap:9px;padding:10px 18px;border-radius:999px;background:var(--d-s1);color:var(--d-tx);border:1px solid var(--d-bd2);box-shadow:0 10px 30px rgba(0,0,0,.5);font:600 12.5px var(--d-font);pointer-events:none;transition:opacity .2s,transform .2s}
        #dd-toast::before{content:'';width:8px;height:8px;border-radius:50%;background:var(--d-mu);flex-shrink:0}
        #dd-toast.show{opacity:1;transform:translateX(-50%)}
        #dd-toast.ok::before{background:var(--d-ok)}
        #dd-toast.err::before{background:var(--d-er)}
        #dd-toast.busy::before{background:var(--d-bl);animation:dd-blink 1s infinite}

        /* ---------- matikan semua animasi / transisi ---------- */
        .dd-noanim #dd-pv .pv-box,
        .dd-noanim #dd-pv .pv-mm,
        .dd-noanim #dd-pv .pv-set,
        .dd-noanim #dd-pv .set-card,
        .dd-noanim #dd-fab,
        .dd-noanim #dd-toast,
        .dd-noanim #dd-edit,
        .dd-noanim .dd-btn{animation:none!important;transition:none!important}
        .dd-noanim #dd-fab.run{animation:none!important}
        .dd-noanim #dd-pv .pv-st.busy::before,
        .dd-noanim #dd-toast.busy::before{animation:none!important}
        .dd-noanim #dd-pv .pv-it:not(.rdy){animation:none!important;background:var(--d-s1)}
        .dd-noanim .pv-spin{animation:none!important;border-top-color:var(--d-ac);opacity:.7}
        .dd-noanim #dd-pv .pv-it,
        .dd-noanim #dd-pv .pv-b,
        .dd-noanim #dd-pv .ch,
        .dd-noanim #dd-pv .pv-ib,
        .dd-noanim #dd-pv .sw i,
        .dd-noanim #dd-pv .sw i::after,
        .dd-noanim #dd-fab .fab-t{transition:none!important}
        .dd-noanim #dd-pv .pv-it img{transition:none!important}

        /* ---------- split: garis aktif + label px ---------- */
        #dd-edit .ed-line.on span{border-color:var(--d-ac2);filter:drop-shadow(0 0 1px #fff)}
        #dd-edit .ed-line.h.on span{border-top-width:3px}
        #dd-edit .ed-line.v.on span{border-left-width:3px}
        #dd-edit .ed-line .ed-px{position:absolute;z-index:5;padding:2px 7px;border-radius:6px;background:rgba(255,255,255,.95);color:var(--d-bg);font:700 10.5px/1.2 var(--d-font);white-space:nowrap;pointer-events:none;box-shadow:0 2px 8px rgba(0,0,0,.35)}
        #dd-edit .ed-line.h .ed-px{left:10px;top:-18px}
        #dd-edit .ed-line.v .ed-px{top:10px;left:8px}
        #dd-edit .ed-fine{display:flex;align-items:center;gap:8px;flex-wrap:wrap;padding:8px 14px;background:var(--d-s1);border-top:1px solid var(--d-bd);font-size:12px;color:var(--d-mu)}
        #dd-edit .ed-fine b{color:var(--d-tx);font-weight:700}
        #dd-edit .ed-fine input{width:72px;height:28px;padding:0 8px;border-radius:8px;border:1px solid var(--d-bd2);background:var(--d-s2);color:var(--d-tx);font:600 12.5px var(--d-font);outline:none}
        #dd-edit .ed-fine input:focus{border-color:var(--d-ac)}
        #dd-edit .ed-fine .pv-b{height:28px;padding:0 10px;font-size:11.5px}
        #dd-edit .ed-fine kbd{display:inline-block;padding:0 5px;border-radius:4px;background:var(--d-s3);border:1px solid var(--d-bd2);font:600 10px var(--d-font);color:var(--d-tx)}
        #dd-edit .ed-celln small{display:block;font-size:9px;font-weight:600;opacity:.9;margin-top:1px}
        /* ---------- editor: zoom + geser + tampilan lebih lega ---------- */
        #dd-edit .ed-cv{left:0;top:0;width:100%;height:100%;box-shadow:none}
        #dd-edit .ed-stage{touch-action:none;overscroll-behavior:contain;user-select:none;-webkit-user-select:none}
        #dd-edit .ed-stage.zoomed,#dd-edit .ed-stage.spacepan{cursor:grab}
        #dd-edit .ed-stage.panning,#dd-edit .ed-stage.panning *{cursor:grabbing!important}
        #dd-edit .ed-top{flex-wrap:wrap;row-gap:8px}
        #dd-edit .ed-info{flex:1 1 140px;min-width:0;overflow:hidden;text-overflow:ellipsis;white-space:nowrap}
        #dd-edit .ed-hint{line-height:1.7}
        #dd-edit .ed-hint b{color:var(--d-mu);font-weight:700}
        #dd-edit .ed-hint kbd{display:inline-block;padding:0 5px;border-radius:4px;background:var(--d-s3);border:1px solid var(--d-bd2);font:600 10px var(--d-font);color:var(--d-tx)}
        #dd-edit .ed-cellbg{position:absolute;pointer-events:none;z-index:0;box-shadow:inset 0 0 0 1px rgba(255,255,255,.12);background:rgba(255,255,255,.09)}
        #dd-edit .ed-cellbg.alt{background:rgba(125,178,255,.11)}
        #dd-edit .ed-zoom{position:absolute;right:12px;bottom:12px;z-index:8;display:flex;align-items:center;gap:2px;padding:4px;border-radius:12px;background:rgba(21,21,26,.9);border:1px solid var(--d-bd2);box-shadow:0 6px 20px rgba(0,0,0,.45);user-select:none;-webkit-user-select:none;cursor:default}
        #dd-edit .ed-zoom button{min-width:30px;height:28px;padding:0 8px;border:0;border-radius:8px;background:transparent;color:var(--d-tx);font:700 13px var(--d-font);cursor:pointer}
        #dd-edit .ed-zoom button:hover{background:var(--d-s3)}
        #dd-edit .ed-zoom .ed-zl{display:inline-block;min-width:48px;text-align:center;font:700 11.5px var(--d-font);color:var(--d-mu)}
        #dd-edit .ed-zoom .sep{display:inline-block;width:1px;height:16px;background:var(--d-bd2);margin:0 3px}

        /* ---------- editor: tombol header (dulu hanya ter-style di #dd-pv, jadi tampak polos) ---------- */
        #dd-edit .pv-b{height:32px;padding:0 13px;display:inline-flex;align-items:center;justify-content:center;gap:6px;border-radius:9px;border:1px solid var(--d-bd2);background:var(--d-s2);color:var(--d-tx);font:600 12px var(--d-font);cursor:pointer;white-space:nowrap;flex-shrink:0;transition:background .12s,filter .12s}
        #dd-edit .pv-b:hover{background:var(--d-s3)}
        #dd-edit .pv-b .dd-ic{width:15px;height:15px;stroke-width:2.4}
        #dd-edit .pv-b.pri{height:34px;padding:0 18px;border-color:transparent;background:linear-gradient(135deg,var(--d-ac2),var(--d-ac));color:var(--d-bg);font-weight:700;box-shadow:none}
        #dd-edit .pv-b.pri:hover{filter:brightness(1.08)}
        #dd-edit .pv-ib{width:34px;height:34px;display:inline-flex;align-items:center;justify-content:center;border:1px solid transparent;background:none;color:var(--d-mu);border-radius:9px;cursor:pointer;flex-shrink:0}
        #dd-edit .pv-ib:hover{background:var(--d-s3);color:#fff}
        #dd-edit .pv-ib .dd-ic{width:17px;height:17px}
        #dd-edit .ed-top{gap:10px 12px}
        #dd-edit .ed-top>b{white-space:nowrap}
        #dd-edit .ed-info{flex:1 1 0;min-width:36px}
        #dd-edit .ed-tools{display:inline-flex;align-items:stretch;border:1px solid var(--d-bd2);border-radius:10px;overflow:hidden;background:var(--d-s2);flex-shrink:0}
        #dd-edit .ed-tools .pv-b{height:30px;border:0;border-radius:0;background:transparent}
        #dd-edit .ed-tools .pv-b+.pv-b{border-left:1px solid var(--d-bd)}
        #dd-edit .ed-tools .pv-b:hover{background:var(--d-s3)}
        #dd-edit .ed-acts{display:inline-flex;align-items:center;gap:6px;flex-shrink:0;margin-left:auto}
        #dd-edit .ed-parts{flex-shrink:0}
        #dd-edit .ed-win.full .ed-top{padding:10px 12px}
        #dd-edit .ed-win.full .ed-top>b{order:0}
        #dd-edit .ed-win.full .ed-acts{order:1}
        #dd-edit .ed-win.full .ed-info{order:2;flex:1 0 100%}
        #dd-edit .ed-win.full .ed-tools{order:3}
        #dd-edit .ed-win.full .ed-parts{order:4}
        #dd-edit .ed-win.full .ed-top>b{flex:1}
`;
        (document.head || document.documentElement).appendChild(s);
    }
    // Situs ini SPA: saat pindah halaman tanpa reload, <style> yang kita pasang di <head> bisa terbuang (atau <head>-nya diganti),
    // sehingga tombol Download / Antrian tampil polos. Pasang ulang style (dan tombol) bila hilang.
    function styleKeep() {
        try {
            if (ddStyleEl && !ddStyleEl.isConnected) {
                (document.head || document.documentElement).appendChild(ddStyleEl);
                log('debug', 'sys', 'Style dipasang ulang (dibuang saat pindah halaman)');
            }
            // Situs bisa memulihkan <body> dari salinan HTML (tombol Back): tombol FAB tampil tapi mati (event handler hilang).
            // Salinan mati itu dibuang dan dibangun ulang. Panel / elemen basi lain dibersihkan juga.
            if (document.body) {
                document.querySelectorAll('#dd-fab-wrap').forEach(w => { if (!w.__ddLive) { w.remove(); log('warn', 'sys', 'Tombol Download mati (halaman dipulihkan dari salinan) — dibangun ulang'); } });
                document.querySelectorAll('#dd-pv').forEach(e => { if (!pv || e !== pv.el) e.remove(); });
                if (!$('dd-fab-wrap')) buildFab();
            }
        } catch (e) {}
    }
    function styleWatch() {
        let headObs = null, headEl = null;
        const watchHead = () => {
            if (document.head === headEl) return;
            if (headObs) headObs.disconnect();
            headEl = document.head;
            if (headEl) { headObs = new MutationObserver(styleKeep); headObs.observe(headEl, { childList: true }); }
        };
        new MutationObserver(() => { watchHead(); styleKeep(); }).observe(document.documentElement, { childList: true });
        watchHead();
        setInterval(() => { watchHead(); styleKeep(); }, 1000);   // cadangan bila observer terlewat
    }

    // ------------------------------------------------------------ init
    function init() {
        style();
        styleWatch();
        applyAnim();
        log('info', 'sys', 'Pawchive Downloader v' + VER + ' aktif', location.href);
        if (lang === 'en') { i18nStart(); i18nApplyAll(); }
        if (romaji) { rmStart(); rmApplyAll(false); }
        window.addEventListener('resize', () => {
            if (pv) { pv.geom = fitGeom(pv.geom); applyGeom(pv); }
            if (ED.el && ED.geom) { ED.geom = editFitGeom(ED.geom); editApplyGeom(); }
        });
        buildFab();
        restoreDir();
        injectButtons();
        queueBadge();
        // Otomatis buka panel (jika diaktifkan) — HANYA di halaman creator / post: /<service>/user/<id>[/post/<id>]
        // (bukan beranda, daftar, pencarian, atau halaman reader). Ikut mendeteksi pindah halaman tanpa reload (SPA).
        const isMangaPage = () => PC_USER.test(location.pathname) || PC_POST.test(location.pathname);
        const autoTry = () => {
            if (!autoOpen || !isMangaPage()) return;
            const path = location.pathname;
            const tryAuto = (n) => {
                if (pv || !autoOpen || location.pathname !== path) return;
                if (collectChapters().length) {
                    log('info', 'ui', 'Otomatis membuka panel (halaman manga)', location.href);
                    openPanel();
                    return;
                }
                if (n > 0) setTimeout(() => tryAuto(n - 1), 400);
            };
            setTimeout(() => tryAuto(8), 300);   // ~3.5 dtk max, cukup untuk list chapter muncul
        };
        autoTry();
        let lastPath = location.pathname;
        setInterval(() => { if (location.pathname !== lastPath) { lastPath = location.pathname; pvEnsureAlive(); styleKeep(); autoTry(); } }, 800);
        window.addEventListener('popstate', () => { setTimeout(styleKeep, 50); setTimeout(styleKeep, 400); });
        window.addEventListener('pageshow', () => { styleKeep(); });
        document.addEventListener('mouseup', () => {
            const P = pv;
            if (!P || !P.drag) return;
            const m = P.drag.moved;
            P.drag = null;
            if (m) { P.moved = true; setTimeout(() => { P.moved = false; }, 0); pvUpdate(); }
        });
        document.addEventListener('keydown', (e) => {
            if (ED.el) {
                if (e.key === 'Escape') { editClose(); e.preventDefault(); e.stopPropagation(); }
                return;
            }
            if (VW.el) {
                if (e.key === 'Escape') viewClose();
                else if (e.key === 'ArrowLeft') viewShow(Math.max(0, VW.i - 1));
                else if (e.key === 'ArrowRight') viewShow(Math.min((pv ? pv.items.length : 1) - 1, VW.i + 1));
                else return;
                e.preventDefault(); e.stopPropagation();
                return;
            }
            const qel = $('dd-q');
            if (qel && !qel.hidden) {
                const si = $('dd-q-search');
                if (e.key === 'Escape') {
                    if (si && QV.q && document.activeElement === si) { si.value = ''; QV.q = ''; queueRender(); }
                    else qel.hidden = true;
                    e.preventDefault(); e.stopPropagation();
                } else if (e.key === '/' && si && document.activeElement !== si && !/INPUT|TEXTAREA/.test((e.target && e.target.tagName) || '')) {
                    si.focus(); e.preventDefault(); e.stopPropagation();
                }
                return;
            }
            if (!pv) return;
            if (e.key === 'Escape') {
                const st = $('dd-pv-set'), lg = $('dd-pv-log'), mmE = $('dd-pv-mm');
                if (mmE && !mmE.hidden) mmE.hidden = true; else if (lg && !lg.hidden) lg.hidden = true; else if (st && !st.hidden) st.hidden = true; else closePanel();
                e.preventDefault(); e.stopPropagation();
                return;
            }
            if ((e.ctrlKey || e.metaKey) && (e.key === 'z' || e.key === 'Z') && !e.shiftKey) {
                if (!/INPUT|TEXTAREA/.test((e.target && e.target.tagName) || '')) {
                    editUndo();
                    e.preventDefault(); e.stopPropagation();
                    return;
                }
            }
            if ((e.key === 'a' || e.key === 'A') && !e.ctrlKey && !e.metaKey && !/INPUT|TEXTAREA/.test((e.target && e.target.tagName) || '')) {
                const b = $('dd-pv-sel'); if (b && !b.disabled) b.click();
                e.preventDefault();
            }
        }, true);
        // React SPA: pasang ulang tombol setiap list chapter dirender ulang (mutasi dari UI script ini diabaikan)
        new MutationObserver((muts) => {
            for (const m of muts) {
                const t = m.target && (m.target.nodeType === 1 ? m.target : m.target.parentElement);
                if (t && t.closest && t.closest('#dd-pv, #dd-view, #dd-hover, #dd-toast, #dd-menu, #dd-edit, #dd-ed-menu')) continue;
                clearTimeout(init.t); init.t = setTimeout(injectButtons, 150);
                return;
            }
        }).observe(document.body, { childList: true, subtree: true });
    }
    if (document.body) init(); else document.addEventListener('DOMContentLoaded', init);
})();
