# DRAKU — Korean Drama Universe

Website katalog drama Korea dengan pencarian, watchlist, riwayat, detail, daftar episode, dan pemutar video tertanam.

## API dan pemutaran
- TVMaze public API (`https://api.tvmaze.com`) menyediakan metadata, poster, pencarian, dan daftar episode. API ini tidak menyediakan file video episode.
- `sources.js` adalah registry sumber pemutaran yang telah diverifikasi dan diizinkan untuk di-embed/stream. Pengunjung tidak perlu menyalin atau memasukkan URL.
- YouTube diputar melalui embed resmi. File HTTPS juga dapat diputar dengan HTML5 video.
- Subtitle dapat ditambahkan sebagai file WebVTT (`.vtt`) yang sah di entri sumber episode.

## Penting
Daftar episode TVMaze adalah metadata, bukan jaminan video tersedia. Jika belum ada sumber resmi/berizin yang terdaftar, episode ditandai **Belum tersedia**. DRAKU tidak mengambil video bajakan atau menampilkan trailer seolah-olah episode penuh. Belum ada sumber gratis yang terverifikasi untuk seluruh drakor panjang beserta subtitle Indonesia dan izin penayangan ulang.

## Menambahkan sumber resmi
Pengelola dapat menambahkan sumber yang memiliki izin ke `window.DRAKU_SOURCES` dalam `sources.js`. Format contoh ada di komentar file. Untuk YouTube gunakan ID video resmi yang mengizinkan embedding. Untuk file gunakan URL HTTPS dari pemegang hak.

## GitHub Pages
Upload `index.html`, `style.css`, `sources.js`, `app.js`, dan `README.md` ke root repository. Aktifkan GitHub Pages melalui Settings → Pages → Deploy from branch → `main` → `/ (root)`.

Watchlist dan riwayat tersimpan di `localStorage` browser dan tidak tersinkron antarperangkat.
