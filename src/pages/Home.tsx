import Navbar from '../component/Navbar'
import Card from '../component/Card'
import Placeholder from '../assets/placeholder.jpg'

export default function Home() {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <main className="p-6">
        <Card
          image={Placeholder}
          title="Laptop Lenovo LOQ"
          location="Gedung FILKOM Lt. 2"
          date="27 Okt 2026"
          tipe="Klaim"
      />
      </main>
    </div>
  );
}
