# Lost & Found FILKOM

Website untuk membantu mahasiswa Fakultas Ilmu Komputer Universitas Brawijaya dalam mencari dan melaporkan barang hilang maupun barang temuan di lingkungan kampus.

## Deskripsi Proyek

Lost & Found FILKOM adalah platform berbasis web yang memungkinkan mahasiswa untuk:

- Melaporkan barang yang hilang
- Melaporkan barang yang ditemukan
- Melihat daftar barang hilang dan temuan
- Mencari informasi terkait barang yang mungkin tertinggal di lingkungan kampus
- Mempermudah komunikasi antara pemilik barang dan penemu barang

Project ini dibangun menggunakan React + TypeScript + Vite dengan Tailwind CSS untuk tampilan yang modern, responsif, dan mudah dikembangkan.

## Fitur Utama

- Halaman utama untuk informasi proyek
- Form pelaporan barang hilang
- Form pelaporan barang temuan
- Daftar barang hilang dan temuan
- Tampilan responsif untuk desktop dan mobile
- Desain yang ramah pengguna dan cocok untuk kebutuhan kampus

## Tech Stack

- React
- TypeScript
- Vite
- Tailwind CSS
- Oxlint

## Struktur Proyek

```bash
lost-and-found-filkom/
├── src/
│   ├── component/
│   ├── App.tsx
│   ├── main.tsx
│   └── index.css
├── public/
├── package.json
├── vite.config.ts
├── tsconfig.json
├── index.html
├── README.md
├── .gitignore
└── .env
```

## Cara Menjalankan Project

1. Clone repository

```bash
git clone https://github.com/rryhnsty/Lost-and-Found-FILKOM.git
cd Lost-and-Found-FILKOM
```

2. Install dependencies

```bash
npm install
```

3. Jalankan project di mode development

```bash
npm run dev
```

4. Buka browser dan akses URL yang ditampilkan oleh Vite, biasanya:

```bash
http://localhost:5173
```

## Build untuk Production

```bash
npm run build
```

Untuk melihat hasil build:

```bash
npm run preview
```

## Instalasi Tailwind CSS di React + Vite

Berikut cara menginstal Tailwind pada project React + Vite.

### 1. Install package Tailwind

```bash
npm install tailwindcss @tailwindcss/vite
```

### 2. Konfigurasi Vite

Buka file `vite.config.ts` lalu tambahkan plugin Tailwind:

```ts
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

export default defineConfig({
  plugins: [react(), tailwindcss()],
})
```

### 3. Import Tailwind di CSS

Buka file `src/index.css` dan tambahkan:

```css
@import "tailwindcss";
```

Pastikan file CSS tersebut sudah di-import di `src/main.tsx`:

```ts
import './index.css'
```

### 4. Coba gunakan Tailwind

```tsx
export default function App() {
  return (
    <main className="min-h-screen bg-slate-100 flex items-center justify-center">
      <h1 className="text-3xl font-bold text-blue-600">Lost & Found FILKOM</h1>
    </main>
  )
}
```

## Cara Menghapus (Uninstall) Tailwind di React + Vite

Jika ingin menghapus Tailwind dari project, lakukan langkah berikut:

### 1. Hapus package Tailwind

```bash
npm uninstall tailwindcss @tailwindcss/vite
```

### 2. Hapus konfigurasi dari `vite.config.ts`

Hapus import berikut:

```ts
import tailwindcss from '@tailwindcss/vite'
```

Hapus juga plugin Tailwind di dalam `plugins`:

```ts
plugins: [react(), tailwindcss()],
```

### 3. Hapus import CSS Tailwind

Pada file `src/index.css`, hapus baris:

```css
@import "tailwindcss";
```

### 4. Hapus class Tailwind yang sudah tidak dipakai

Jika masih ada class seperti `text-blue-600`, `bg-slate-100`, dan lainnya di file komponen, hapus atau sesuaikan dengan style biasa.

## Kontribusi

Kontribusi sangat terbuka untuk pengembangan project ini. Anda dapat:

- Fork repository ini
- Buat branch baru untuk fitur atau perbaikan
- Lakukan perubahan sesuai kebutuhan
- Kirim pull request untuk review

## Lisensi

Project ini dibuat untuk kebutuhan pengembangan website Lost & Found di lingkungan Fakultas Ilmu Komputer Universitas Brawijaya. Silakan gunakan dan kembangkan sesuai kebutuhan project Anda.
