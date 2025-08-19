import React, { useState, useEffect } from 'react';
import { Link } from "react-router-dom";
import { collection, query, where, getDocs } from "firebase/firestore";
import { db } from "/src/firebase";

import PreviouslyExplored from '../Women/PreviouslyExplored';


const PlazzoSet = () => {
  const [filters, setFilters] = useState({});
  const [allProducts, setAllProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  // ✅ Fetch from Firebase, fallback to static
  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const q = query(
          collection(db, "products"),
          where("category", "==", "Kurtis & Sets > Plazzo Set") // exact match
        );
        const querySnapshot = await getDocs(q);
        const productsList = querySnapshot.docs.map(doc => ({
          id: doc.id,
          ...doc.data(),
        }));

        setAllProducts(productsList.length > 0 ? productsList : staticProducts);
      } catch (error) {
        console.error("Error fetching Cotton Saree products:", error);
        setAllProducts(staticProducts); // fallback
      } finally {
        setLoading(false);
      }
    };

    fetchProducts();
  }, []);

  // ✅ Filtering logic
  const filtered = allProducts.filter((p) => {
    const priceMatch = filters.price
      ? p.price >= filters.price.min && p.price <= filters.price.max
      : true;
    const sizeMatch = filters.size ? p.size === filters.size : true;
    const colorMatch = filters.color ? p.color === filters.color : true;
    const sleeveMatch = filters.sleeve ? p.sleeve === filters.sleeve : true;
    const fabricMatch = filters.fabric ? p.fabric === filters.fabric : true;
    const discountMatch = filters.discount
      ? parseInt(p.discount) >= parseInt(filters.discount)
      : true;

    return priceMatch && sizeMatch && colorMatch && sleeveMatch && fabricMatch && discountMatch;
  });

  return (
    <div className="px-6 py-6 font-family">
      <div className="mb-6 text-center">
        <h2 className="text-3xl font-bold mb-1">Kurtis & Sets</h2>
        <h4 className="text-green-700 font-medium">Plazzo Set</h4>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
        
        <div className="col-span-1 md:col-span-3 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {loading ? (
            <p className="text-center col-span-full">Loading products...</p>
          ) : filtered.length > 0 ? (
            filtered.map((product) => (
              <div key={product.id} className="p-2">
                <Link to={`/products/${product.id}`}>
                  <div className="bg-white w-[278px] mx-auto cursor-pointer">
                    <img
                      src={product.images}
                      alt={product.title}
                      className="w-[278px] h-[350px] object-cover rounded-[25px]"
                    />
                    <h3 className="font-sm md:text-md text-sm mt-4">{product.title}</h3>
                    <div className="flex space-x-4">
                      <div className="text-gray-900 mt-1 md:text-md text-sm">₹{product.price}</div>
                      {product.oldPrice && (
                        <div className="text-gray-500 mt-1 line-through flex md:text-md text-sm">
                          ₹{product.oldPrice}
                        </div>
                      )}
                    </div>
                    <button className="mt-4 px-4 w-full py-2 border border-green-800 text-green-800 
                    rounded-full hover:bg-green-800 hover:text-white transition md:text-md text-sm">
                      View More
                    </button>
                  </div>
                </Link>
              </div>
            ))
          ) : (
            <p className="text-gray-500 col-span-full text-center">No products found.</p>
          )}
        </div>
      </div>
      </div>
  );
};

export default PlazzoSet;
