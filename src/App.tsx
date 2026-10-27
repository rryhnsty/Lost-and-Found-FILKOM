import { useState } from 'react';
import Navbar from './component/Navbar';
import Home from './pages/Home';


export default function App() {
  return (
    <div className="min-h-screen bg-white">
      <Home></Home>
    </div>
  );
}
