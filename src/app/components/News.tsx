const news = [
  {
    title: 'SEAGM Credits are Upgrading to SEAGM Balance',
    img: 'https://seagm-media.seagmcdn.com/news/fetch/ID-49978-PicName-Introducing-SEAGM-Balance-Article-Featured-Image_Article_1200x630-1.jpg?x-oss-process=image/resize,w_660,limit_0',
  },
  {
    title: 'How to get Discounts on Honor of Kings Tokens',
    img: 'https://seagm-media.seagmcdn.com/news/fetch/ID-50045-PicName-How-to-Get-Discounts-on-Honor-of-Kings-Tokens-FI.png?x-oss-process=image/resize,w_660,limit_0',
  },
  {
    title: 'How to Top Up Marvel Rivals Lattices',
    img: 'https://seagm-media.seagmcdn.com/news/fetch/ID-50056-PicName-How-to-Top-Up-Marvel-Rivals-Lattices-FI.png?x-oss-process=image/resize,w_660,limit_0',
  },
  {
    title: '36,000 MLBB Diamonds Await! Enter the Lucky Draw Now!',
    img: 'https://seagm-media.seagmcdn.com/news/fetch/ID-49655-PicName-MLBB-Lucky-Draw-2025_KV_Article_1200x675.jpg?x-oss-process=image/resize,w_660,limit_0',
  },
];

export default function GameList() {
  return (
    <>
      <section className="py-12 bg-white">
        <div className="container mx-auto px-4 grid grid-cols-1 md:grid-cols-2 gap-10">
          {sections.map((section, i) => (
            <div
              key={i}
              className="bg-white rounded-lg border border-gray-200 shadow hover:shadow-md transition overflow-hidden"
            >
              <div className="px-6 py-4 border-b flex justify-between items-center">
                <h3 className="text-lg font-semibold">{section.title}</h3>
                <a href="#" className="text-sm text-blue-600 hover:underline">
                  View More
                </a>
              </div>
              <div className="p-4">
                <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                  {section.items.map((item, j) => (
                    <li key={j}>
                      <a
                        href={item.link}
                        className="flex items-center gap-3 bg-gray-50 hover:bg-white p-3 rounded-lg border transition"
                      >
                        <img
                          src={item.img}
                          alt={item.title}
                          width={50}
                          height={50}
                          className="rounded shadow"
                        />
                        <div className="text-sm">
                          <div className="font-medium text-gray-800">
                            {item.title}
                          </div>
                          <div className="text-gray-500">{item.region}</div>
                        </div>
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </section>

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
  );
}
