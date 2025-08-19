import React, { useState } from 'react';
import { FaChevronDown, FaChevronUp } from 'react-icons/fa';

const FilterSidebar = ({
  onPriceChange,
  onSizeChange,
  onColorChange,
  onSleeveChange,
  onFabricChange,
  onDiscountChange,
}) => {
  const [openFilter, setOpenFilter] = useState(null);
  const [priceRange, setPriceRange] = useState([0, 880]);
  const [showMobileFilter, setShowMobileFilter] = useState(false); // ✅ mobile view toggle

  const toggleFilter = (filterName) => {
    setOpenFilter(openFilter === filterName ? null : filterName);
  };

  const handlePriceChange = (e, index) => {
    const newRange = [...priceRange];
    newRange[index] = Number(e.target.value);
    setPriceRange(newRange);
    onPriceChange({ min: newRange[0], max: newRange[1] });
  };

  const FilterItem = ({ name, options, onChange }) => (
    <div className="border-b pb-2">
      <button
        className="flex items-center justify-between w-full py-2 font-medium text-left text-black"
        onClick={() => toggleFilter(name)}
      >
        {name}
        {openFilter === name ? <FaChevronUp size={14} /> : <FaChevronDown size={14} />}
      </button>
      {openFilter === name && (
        <div className="mt-2 space-y-2">
          {options.map((opt, i) => (
            <label key={i} className="block text-sm text-gray-700 cursor-pointer pl-2">
              <input
                type="radio"
                name={name}
                className="mr-2"
                onChange={() => onChange(opt)}
              />
              {opt.label || opt}
            </label>
          ))}
        </div>
      )}
    </div>
  );

  const filterContent = (
    <div className="space-y-4 w-full bg-white h-full md:h-auto md:bg-transparent p-4 md:p-0 overflow-y-auto">
      {/* ✅ Custom Price Range Slider */}
      <div className="border-b pb-4">
        <button
          className="flex items-center justify-between w-full py-2 font-medium text-left text-black"
          onClick={() => toggleFilter('Price')}
        >
          Price
          {openFilter === 'Price' ? <FaChevronUp size={14} /> : <FaChevronDown size={14} />}
        </button>

        {openFilter === 'Price' && (
          <div className="mt-4 space-y-2 px-2">
            <div className="text-sm text-gray-600 font-semibold">
              Price: <span className="text-black font-bold">Rs. 0 - Rs. {priceRange}</span>
            </div>
            <input
              type="range"
              min="0"
              max="100000"
              step="100"
              value={priceRange}
              onChange={(e) => {
                const val = parseInt(e.target.value);
                setPriceRange(val);
                onPriceChange({ min: 0, max: val });
              }}
              className="w-full accent-black"
            />
          </div>
        )}
      </div>

      {/* Other Filters */}
      <FilterItem
        name="Size"
        options={['XS', 'S', 'M', 'L', 'XL']}
        onChange={onSizeChange}
      />

      <FilterItem
        name="Color"
        options={['Red', 'Blue', 'Green', 'Black', 'White']}
        onChange={onColorChange}
      />

      <FilterItem
        name="Sleeve Type"
        options={['Sleeveless', 'Half Sleeve', 'Full Sleeve']}
        onChange={onSleeveChange}
      />

      <FilterItem
        name="Fabric"
        options={['Cotton', 'Silk', 'Rayon', 'Linen']}
        onChange={onFabricChange}
      />

      <FilterItem
        name="Discounts"
        options={['10% or more', '20% or more', '30% or more']}
        onChange={(label) => {
          const percentage = parseInt(label);
          onDiscountChange(percentage);
        }}
      />
    </div>
  );

  return (
    <>
      {/* Filter Button - visible only on mobile */}
      <div className="md:hidden flex justify-between mb-4">
        <button
          onClick={() => setShowMobileFilter(true)}
          className="bg-black text-white px-4 py-2 rounded"
        >
          FILTER
        </button>
      </div>

      {/* Desktop Filter */}
      <div className="hidden md:block">{filterContent}</div>

      {/* Mobile Filter Modal */}
      {showMobileFilter && (
        <div className="fixed inset-0 z-50 bg-black bg-opacity-40 flex justify-end">
          <div className="w-3/4 max-w-xs bg-white h-full shadow-lg">
            <div className="flex justify-between items-center px-4 py-3 border-b">
              <h2 className="text-lg font-semibold">Filters</h2>
              <button
                onClick={() => setShowMobileFilter(false)}
                className="text-xl font-bold"
              >
                &times;
              </button>
            </div>
            {filterContent}
          </div>
        </div>
      )}
    </>
  );
};

export default FilterSidebar;
