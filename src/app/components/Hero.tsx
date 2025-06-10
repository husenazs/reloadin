'use client';

import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';

export default function Hero() {
  return (
    <section className="pt-24 pb-16">
      <div className="container mx-auto px-4 h-100">
        <Carousel showThumbs={false} showStatus={false} infiniteLoop={true}>
          <div className="bg-gray-200 rounded-lg h-64 flex flex-col items-center justify-center text-center h-100">
            <h1 className="text-3xl font-bold mb-2">Selamat Datang di Reloadin</h1>
            <p className="text-gray-600 mb-4">
              Layanan PPOB terbaik untuk semua kebutuhan pembayaran online Anda.
            </p>
            <a
              href="#"
              className="bg-blue-600 text-white px-6 py-2 rounded-full hover:bg-blue-700 transition"
            >
              Lihat Layanan
            </a>
          </div>
          <div className="bg-gray-200 rounded-lg h-64 flex flex-col items-center justify-center text-center h-100">
            <h1 className="text-3xl font-bold mb-2">Paket Internet</h1>
            <p className="text-gray-600 mb-4">
              Dapatkan paket internet terbaik untuk Anda dan keluarga.
            </p>
            <a
              href="#"
              className="bg-blue-600 text-white px-6 py-2 rounded-full hover:bg-blue-700 transition"
            >
              Lihat Paket
            </a>
          </div>
          <div className="bg-gray-200 rounded-lg h-64 flex flex-col items-center justify-center text-center h-100">
            <h1 className="text-3xl font-bold mb-2">Pulsa & Paket Data</h1>
            <p className="text-gray-600 mb-4">
              Dapatkan pulsa dan paket data terbaik untuk Anda dan keluarga.
            </p>
            <a
              href="#"
              className="bg-blue-600 text-white px-6 py-2 rounded-full hover:bg-blue-700 transition"
            >
              Lihat Paket
            </a>
          </div>
        </Carousel>
      </div>
    </section>
  );
}
