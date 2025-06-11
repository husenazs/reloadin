const news = [
    {
      title: 'SEAGM Credits are Upgrading to SEAGM Balance',
      img: '/assets/images/ID-49978-PicName-Introducing-SEAGM-Balance-Article-Featured-Image_Article_1200x630-1.webp',
    },
    {
      title: 'How to get Discounts on Honor of Kings Tokens',
      img: '/assets/images/ID-50045-PicName-How-to-Get-Discounts-on-Honor-of-Kings-Tokens-FI.webp',
    },
    {
      title: 'How to Top Up Marvel Rivals Lattices',
      img: '/assets/images/ID-50056-PicName-How-to-Top-Up-Marvel-Rivals-Lattices-FI.webp',
    },
    {
      title: '36,000 MLBB Diamonds Await! Enter the Lucky Draw Now!',
      img: '/assets/images/ID-49655-PicName-MLBB-Lucky-Draw-2025_KV_Article_1200x675.webp',
    },
  ];


export default function News() {
    return (
        <>
        <section className="py-12 bg-gray-50">
          <div className="container mx-auto px-4">
            <h2 className="text-2xl font-bold text-center mb-8">Berita Terbaru</h2>
            <div className="grid gap-6 grid-cols-1 sm:grid-cols-2 md:grid-cols-4">
              {news.map((item, i) => (
                <div
                  key={i}
                  className="bg-white rounded-xl overflow-hidden shadow hover:shadow-md transition flex flex-col h-full"
                >
                  <div className="h-48 w-full overflow-hidden">
                    <img
                      src={item.img}
                      alt={item.title}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="p-4 flex-1 flex items-center">
                    <h5 className="text-sm font-medium text-gray-800 line-clamp-3">
                      {item.title}
                    </h5>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        </>
    )
}