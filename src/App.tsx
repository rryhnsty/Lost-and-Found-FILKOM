import { useState } from 'react'
import Navbar from './component/navbar'


export default function App() {
  return (
    <div className="min-h-screen bg-white">
      {/* 2. Panggil komponen Navbar di sini */}
      <Navbar />

      {/* Tempat untuk konten utama aplikasi Anda */}
      <main className="p-6">
        {/* Konten lain */}
      </main>
    </div>
  );
}
