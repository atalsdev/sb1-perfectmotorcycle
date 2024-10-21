import React from 'react';

const motorcycleTypes = [
  {
    name: 'Sport',
    description: 'Built for speed and agility, perfect for thrill-seekers.',
    image: 'https://images.unsplash.com/photo-1568772585407-9361f9bf3a87?ixlib=rb-1.2.1&auto=format&fit=crop&w=300&q=80',
  },
  {
    name: 'Cruiser',
    description: 'Comfortable and stylish, ideal for relaxed rides.',
    image: 'https://images.unsplash.com/photo-1558980394-4c7c9299fe96?ixlib=rb-1.2.1&auto=format&fit=crop&w=300&q=80',
  },
  {
    name: 'Adventure',
    description: 'Versatile bikes ready for on and off-road exploration.',
    image: 'https://images.unsplash.com/photo-1589388684636-5085f4812e4d?ixlib=rb-1.2.1&auto=format&fit=crop&w=300&q=80',
  },
  {
    name: 'Touring',
    description: 'Built for long-distance comfort and storage capacity.',
    image: 'https://images.unsplash.com/photo-1609630875171-b1321377ee65?ixlib=rb-1.2.1&auto=format&fit=crop&w=300&q=80',
  },
];

const MotorcycleTypes: React.FC = () => {
  return (
    <div className="my-12">
      <h2 className="text-3xl font-semibold text-gray-800 mb-6">Explore Motorcycle Types</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {motorcycleTypes.map((type) => (
          <div key={type.name} className="bg-white rounded-lg shadow-md overflow-hidden">
            <img src={type.image} alt={type.name} className="w-full h-48 object-cover" />
            <div className="p-4">
              <h3 className="text-xl font-semibold mb-2">{type.name}</h3>
              <p className="text-gray-600">{type.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MotorcycleTypes;