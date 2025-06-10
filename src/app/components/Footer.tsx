export default function Footer() {
    return (
      <footer className="bg-gray-800 text-white py-12">
        <div className="container mx-auto px-4 grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h5 className="font-bold mb-2">Reloadin</h5>
            <p>Layanan pembayaran online terbaik untuk semua kebutuhan Anda.</p>
          </div>
          <div>
            <h5 className="font-bold mb-2">Link Cepat</h5>
            <ul className="space-y-2">
              <li><a href="#" className="hover:underline">Beranda</a></li>
              <li><a href="#layanan" className="hover:underline">Layanan</a></li>
              <li><a href="#tentang" className="hover:underline">Tentang Kami</a></li>
              <li><a href="#kontak" className="hover:underline">Kontak</a></li>
            </ul>
          </div>
          <div>
            <h5 className="font-bold mb-2">Kontak Kami</h5>
            <ul className="space-y-2">
              <li><i className="fas fa-phone"></i> +62 123 4567 890</li>
              <li><i className="fas fa-envelope"></i> info@reloadin.com</li>
              <li><i className="fas fa-map-marker-alt"></i> Jl. Contoh No. 123, Jakarta</li>
            </ul>
          </div>
        </div>
        <div className="text-center mt-8 text-sm">&copy; 2025 Reloadin. All rights reserved.</div>
      </footer>
    );
  }