const sections = [
    {
      title: 'Popular Game',
      items: [
        {
            title: 'PlayStation Network Card (HK)',
            region: 'Hong Kong',
            img: '/assets/images/332.webp',
            link: '/playstation-network-card-psn-hongkong',
          },
          {
            title: 'Free Fire Diamonds Pins (Garena)',
            region: 'Global',
            img: '/assets/images/999.webp',
            link: '/free-fire-diamonds-pin-garena',
          },
          {
            title: 'PUBG Mobile UC Redeem Code (Global)',
            region: 'Global',
            img: '/assets/images/843.webp',
            link: '/pubgm-uc-global-code',
          },
      ],
    },
    {
      title: 'New Game Top Up',
      items: [
        {
            title: 'PlayStation Network Card (HK)',
            region: 'Hong Kong',
            img: '/assets/images/332.webp',
            link: '/playstation-network-card-psn-hongkong',
          },
          {
            title: 'Free Fire Diamonds Pins (Garena)',
            region: 'Global',
            img: '/assets/images/999.webp',
            link: '/free-fire-diamonds-pin-garena',
          },
          {
            title: 'PUBG Mobile UC Redeem Code (Global)',
            region: 'Global',
            img: '/assets/images/843.webp',
            link: '/pubgm-uc-global-code',
          },
      ],
    },
    {
      title: 'Bayar Tagihan',
      items: [
        {
            title: 'PlayStation Network Card (HK)',
            region: 'Hong Kong',
            img: '/assets/images/332.webp',
            link: '/playstation-network-card-psn-hongkong',
          },
          {
            title: 'Free Fire Diamonds Pins (Garena)',
            region: 'Global',
            img: '/assets/images/999.webp',
            link: '/free-fire-diamonds-pin-garena',
          },
          {
            title: 'PUBG Mobile UC Redeem Code (Global)',
            region: 'Global',
            img: '/assets/images/843.webp',
            link: '/pubgm-uc-global-code',
          },
      ],
    },
    {
      title: 'Isi Pulsa',
      items: [
        {
            title: 'PlayStation Network Card (HK)',
            region: 'Hong Kong',
            img: '/assets/images/332.webp',
            link: '/playstation-network-card-psn-hongkong',
          },
          {
            title: 'Free Fire Diamonds Pins (Garena)',
            region: 'Global',
            img: '/assets/images/999.webp',
            link: '/free-fire-diamonds-pin-garena',
          },
          {
            title: 'PUBG Mobile UC Redeem Code (Global)',
            region: 'Global',
            img: '/assets/images/843.webp',
            link: '/pubgm-uc-global-code',
          },
      ],
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
                          className="flex items-center gap-3 bg-gray-50 hover:bg-white p-3 rounded-lg border border-gray-200 transition"
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
                              {item.title.length > 30
                                ? item.title.substring(0, 30) + '...'
                                : item.title}
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
        
      </>
    );
  }
  