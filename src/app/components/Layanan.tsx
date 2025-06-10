import { FaMobileAlt, FaBolt, FaTv, FaGamepad } from 'react-icons/fa';

const layananData = [
  { icon: <FaMobileAlt className="text-4xl text-blue-600 mb-4" />, title: 'Pulsa & Paket Data', href: 'pulsa.html' },
  { icon: <FaBolt className="text-4xl text-yellow-500 mb-4" />, title: 'Listrik PLN', href: 'pln.html' },
  { icon: <FaTv className="text-4xl text-purple-500 mb-4" />, title: 'TV Berlangganan', href: 'tv.html' },
  { icon: <FaGamepad className="text-4xl text-pink-500 mb-4" />, title: 'Voucher Game', href: 'voucher.html' },
];

export default function Layanan() {
  return (
    <section id="layanan" className="py-16 bg-gray-100">
      <div className="container mx-auto px-4">
        <h2 className="text-2xl font-bold text-center mb-8">Layanan Kami</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {layananData.map(({ icon, title, href }, i) => (
            <div
              key={i}
              className="cursor-pointer p-6 bg-white rounded-lg shadow hover:shadow-md text-center transition"
            >
              <div className="flex justify-center">{icon}</div>
              <h4 className="font-semibold text-gray-800">{title}</h4>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
