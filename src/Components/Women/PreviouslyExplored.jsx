import React, { useEffect, useState } from 'react';

const PreviouslyExplored = ({ currentProduct }) => {
  const [explored, setExplored] = useState([]);

  // Save product to localStorage when the component mounts
  useEffect(() => {
    if (!currentProduct) return;

    let existing = JSON.parse(localStorage.getItem("exploredProducts")) || [];

    // Remove duplicate by ID
    existing = existing.filter(item => item.id !== currentProduct.id);

    existing.unshift(currentProduct); // Add current to top
    if (existing.length > 6) existing.pop(); // Keep only 6 items

    localStorage.setItem("exploredProducts", JSON.stringify(existing));
  }, [currentProduct]);

  // Load previously explored from localStorage
  useEffect(() => {
    const data = JSON.parse(localStorage.getItem('exploredProducts')) || [];
    setExplored(data);
  }, [currentProduct]); // reload when new product added

  if (explored.length === 0) return null;

  return (
    <div className="mt-10">
      <h2 className="text-xl font-semibold mb-4">Previously Explored</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {explored.map((item) => (
          <div key={item.id} className="border rounded-xl p-4 shadow">
            <img src={item.image} alt={item.title} className="h-64 w-full object-cover rounded-md mb-2" />
            <h3 className="text-lg font-medium">{item.title}</h3>
            <p className="text-gray-600 line-through">₹ {item.originalPrice}</p>
            <p className="text-black font-bold">₹ {item.price}</p>
            <button className="mt-2 border border-black px-4 py-1 rounded-full hover:bg-black hover:text-white">
              Add to Cart
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PreviouslyExplored;
