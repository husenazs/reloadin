import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Layanan from './components/Layanan';
import Footer from './components/Footer';
import GameList from './components/GameList';
import News from './components/News';

export default function Home() {
  return (
    <>
      <Navbar />
      <main className="flex-1 pt-16">
        <Hero />
        <Layanan />
        <GameList />
        <News />
      </main>
      <Footer />
    </>
  );
}
