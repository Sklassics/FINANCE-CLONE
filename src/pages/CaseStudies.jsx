import React from 'react';

const CaseStudies = () => {
  const data = [
    { logo: 'https://mitchelladam.co.uk/wp-content/uploads/2021/06/britvic-plc-logo-vector-2.svg', alt: 'Britvic' },
    { logo: 'https://mitchelladam.co.uk/wp-content/uploads/2021/07/Baldwins-1536x175.png', alt: 'Baldwins' },
    { logo: 'https://mitchelladam.co.uk/wp-content/uploads/2021/07/cogent.png', alt: 'Cogent' },
    { logo: 'https://mitchelladam.co.uk/wp-content/uploads/2021/07/cogent.png', alt: 'Genting Casinos' },
    { logo: 'https://mitchelladam.co.uk/wp-content/uploads/2021/07/MC_original-1536x104.png', alt: 'Moelis & Company' },
    { logo: 'https://mitchelladam.co.uk/wp-content/uploads/2021/06/KingsFerry-Logo.png', alt: 'Kingsferry' },
  ];

  return (
    <div className="bg-[#0B0F19] min-h-screen text-white py-20 px-6 md:px-12 relative">
      {/* Title */}
      <h2 className="text-4xl md:text-5xl font-bold mb-12">
        Case <span className="text-white">Studies</span>
        <span className="text-yellow-400">.</span>
      </h2>

      {/* Grid of cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {data.map((item, idx) => (
          <div
            key={idx}
            className="bg-white rounded-2xl shadow-md p-8 flex flex-col items-center justify-between min-h-[200px]"
          >
            <img src={item.logo} alt={item.alt} className="h-10 mb-6 object-contain" />
            <button className="bg-yellow-400 text-black font-semibold rounded-full px-5 py-2 hover:bg-yellow-500 transition">
              VIEW →
            </button>
          </div>
        ))}
      </div>

      {/* Floating phone button */}
      {/* <div className="fixed bottom-6 right-6 bg-white text-black rounded-full shadow-lg px-4 py-2 flex items-center gap-2">
        <span>📞</span>
        <span className="text-sm md:text-base">0121 651 1235</span>
      </div> */} 
    </div>
  );
};

export default CaseStudies;
