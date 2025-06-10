import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Layanan from './components/Layanan';
import Footer from './components/Footer';
import GameList from './components/GameList';

export default function Home() {
  return (
    <>
      <Navbar />
      <main className="font-sans bg-white text-gray-800">
        <Hero />
        <Layanan />
        {/* Section tambahan kayak Popular Game, News, dll bisa disusul di sini */}
        <GameList />
      </main>
      <Footer />
    </>
  );
}
