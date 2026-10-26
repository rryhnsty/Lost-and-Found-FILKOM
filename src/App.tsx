import { useState } from 'react'
import './App.css'


export default function App() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-gray-100">
      <div className="rounded-xl bg-white p-8 shadow-lg">
        <h1 className="text-3xl font-bold text-blue-600">
          Halo, React!
        </h1>

        <p className="mt-3 text-gray-600">
          Tailwind CSS berhasil dipasang.
        </p>

        <button className="mt-5 rounded-lg bg-blue-600 px-4 py-2 text-white hover:bg-blue-700">
          Klik Saya
        </button>
      </div>
    </div>
  );
}
