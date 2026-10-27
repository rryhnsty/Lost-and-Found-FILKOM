import Navbar from '../component/Navbar'
import Card from '../component/Card'
import Placeholder from '../assets/placeholder.jpg'

export default function Home() {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <main className="max-w-7xl mx-auto p-6">
        <div className="text-center mt-8 mb-20">
          <h1 className="text-4xl md:text-5xl font-extrabold text-gray-900 tracking-tight leading-tight">
            Temukan barangmu yang hilang. <br />
            Laporkan barang temuan.
          </h1>
        </div>

        <div className="bg-gray-100 border-gray-300 rounded-2xl p-6 md:p-8 shadow-sm">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            <Card
              image={Placeholder}
              title="Laptop Lenovo LOQ"
              location="Gedung FILKOM Lt. 2"
              date="27 Okt 2026"
              tipe="Klaim"
            />
            <Card
              image={Placeholder}
              title="Laptop Lenovo LOQ"
              location="Gedung FILKOM Lt. 2"
              date="27 Okt 2026"
              tipe="Klaim"
            />
            <Card
              image={Placeholder}
              title="Laptop Lenovo LOQ"
              location="Gedung FILKOM Lt. 2"
              date="27 Okt 2026"
              tipe="Klaim"
            />
            <Card
              image={Placeholder}
              title="Laptop Lenovo LOQ"
              location="Gedung FILKOM Lt. 2"
              date="27 Okt 2026"
              tipe="Klaim"
            />
            <Card
              image={Placeholder}
              title="Laptop Lenovo LOQ"
              location="Gedung FILKOM Lt. 2"
              date="27 Okt 2026"
              tipe="Klaim"
            />
            <Card
              image={Placeholder}
              title="Laptop Lenovo LOQ"
              location="Gedung FILKOM Lt. 2"
              date="27 Okt 2026"
              tipe="Klaim"
            />
          </div>
        </div>
      </main>
    </div>
  );
}