import React from "react";


const data = [
  {
    id: 0,
    img:"https://m.media-amazon.com/images/W/MEDIAX_849526-T1/images/I/61zaqmpzzCL._SL1500_.jpg",
    name: "Muscle Asylum Raw Whey Protein Concentrate Strawberry",
    link:"https://amzn.eu/d/gJX7uTt",
    price: 13,
  },
  {
    id: 1,
    img:"https://m.media-amazon.com/images/W/MEDIAX_849526-T1/images/I/51ZQSwFr7nL._SL1000_.jpg",
    name: "AS-IT-IS ATOM Whey Protein 1kg",
    link:"https://amzn.eu/d/4dbK17W",
    price: 23,
  },
  {
    id: 2,
    img:"https://m.media-amazon.com/images/W/MEDIAX_849526-T1/images/I/6160m6Vo1PL._SL1500_.jpg",
    name: "MuscleBlaze Biozyme Performance Whey Protein",
    link:"https://amzn.eu/d/57lMl77",
    price: 29,
  },
  {
    id: 3,
    img:"https://m.media-amazon.com/images/W/MEDIAX_849526-T1/images/I/51oQrGnRdTL._SL1500_.jpg",
    name: "HealthKart HK Vitals Multivitamin for Men and Women",
    link:"https://amzn.eu/d/1UVqckd",
    price: 5,
  },
  {
    id: 4,
    img:"https://m.media-amazon.com/images/W/MEDIAX_849526-T1/images/I/51ODisyL9XL._SL1000_.jpg",
    name: "Centrum Men Tablet",
    link:"https://amzn.eu/d/dq57nB9",
    price: 7,
  },
 
];

const Products = () => {
  return (
    <div className="container mx-auto my-8">
      <h1 className="text-3xl font-semibold mb-2 text-center">
        Our Best Sellers
      </h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-8">
        {data.map((item) => (
          <div
            key={item.id}
            className="bg-white shadow-md rounded-md overflow-hidden hover:shadow-lg transition-transform transform hover:scale-105"
          >
            <img
              src={item.img}
              alt={`Product: ${item.name}`} // Include descriptive alt text
              className="w-full h-40 object-cover"
            />
            <div className="p-4">
              <h2 className="text-gray-800 font-semibold text-lg mb-2">
                {item.name}
              </h2>
              <div className="flex justify-between items-center">
                <p className="text-gray-700 font-light">${item.price}</p>
                {item.link && ( // Render link button only if link exists
                  <a
                    href={item.link}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <button
                      className="bg-green-700 text-white py-1 px-2 rounded-md font-semibold"
                      role="button" // Add role for accessibility
                    >
                      BUY
                    </button>
                  </a>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Products
