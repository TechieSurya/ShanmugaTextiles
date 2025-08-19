import React, { useState } from 'react';
import { CloudUpload } from 'lucide-react';

const ImageUpload = ({ label }) => {
  const [image, setImage] = useState(null);

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setImage(URL.createObjectURL(file));
    }
  };

  return (
    <div className="flex flex-col items-center justify-center border border-dashed rounded p-4 h-44 text-center">
      {image ? (
        <img src={image} alt="Uploaded" className="object-contain max-h-full" />
      ) : (
        <>
           <label className="flex flex-col items-center justify-center text-gray-500 cursor-pointer w-full h-full">
          <CloudUpload className="text-3xl mb-2" />
          <span className="text-sm">{label}</span>
          <input type="file" className="hidden" onChange={handleImageChange} />
        </label>
        </>
      )}
    </div>
  );
};

const CMS = () => {
  return (
    <div className="p-6 space-y-8">
      <h2 className="text-2xl font-semibold">Content Management System</h2>
      <p className="text-gray-500 mb-4">Manage homepage visuals, promotional offers, and blog content easily.</p>

      {/* Home Page Banner */}
      <div className="bg-white rounded shadow p-6">
        <div className="flex justify-between items-center mb-4">
          <h3 className="text-lg font-semibold">Home Page banner</h3>
          <button className="text-green-600 font-medium">+ Add new slide</button>
        </div>
        <div className="grid md:grid-cols-2 gap-4">
          <ImageUpload label="Upload banner image" />
          <div className="space-y-3">
            <input className="border rounded px-4 py-2 w-full" placeholder="Headline" />
            <input className="border rounded px-4 py-2 w-full" placeholder="Subheadline" />
            <input className="border rounded px-4 py-2 w-full" placeholder="Link" />
            <div className="flex gap-2">
              <input type="date" className="border rounded px-4 py-2" />
              <input type="date" className="border rounded px-4 py-2" />
              <label className="flex items-center gap-2">
                <input type="checkbox" defaultChecked />
                <span className="text-sm">Show on home page</span>
              </label>
            </div>
            <button className="bg-green-600 text-white px-6 py-2 rounded w-full">Save</button>
          </div>
        </div>
      </div>

      {/* Home Page Slide */}
      <div className="bg-white rounded shadow p-6">
        <div className="flex justify-between items-center mb-4">
          <h3 className="text-lg font-semibold">Home Page Slide</h3>
          <button className="text-green-600 font-medium">+ Add new slide</button>
        </div>
        <div className="grid md:grid-cols-2 gap-4">
          <div className="space-y-3">
            <ImageUpload label="Upload image" />
            <ImageUpload label="Upload image" />
          </div>
          <div className="space-y-3">
            <select className="border rounded px-4 py-2 w-full">
              <option>Select Category</option>
            </select>
            <input className="border rounded px-4 py-2 w-full" placeholder="Caption or text" />
            <input className="border rounded px-4 py-2 w-full" placeholder="Link" />
            <label className="flex items-center gap-2">
              <input type="checkbox" defaultChecked />
              <span className="text-sm">Show on home page</span>
            </label>
            <button className="bg-green-600 text-white px-6 py-2 rounded w-full">Save</button>
          </div>
        </div>
      </div>

      {/* Promo Banner & Offers */}
      <div className="bg-white rounded shadow p-6">
        <h3 className="text-lg font-semibold mb-4">Promo Banner & Offers</h3>
        <div className="grid md:grid-cols-2 gap-4">
          <ImageUpload label="Upload banner image" />
          <div className="space-y-3">
            <input className="border rounded px-4 py-2 w-full" placeholder="Buy 1 Get 1 Free" />
            <input className="border rounded px-4 py-2 w-full" placeholder="Buy 2 Get 3 Free" />
            <input className="border rounded px-4 py-2 w-full" placeholder="Description" />
            <div className="flex gap-2">
              <input type="date" className="border rounded px-4 py-2" />
              <input type="date" className="border rounded px-4 py-2" />
              <label className="flex items-center gap-2">
                <input type="checkbox" defaultChecked />
                <span className="text-sm">Show on home page</span>
              </label>
            </div>
            <button className="bg-green-600 text-white px-6 py-2 rounded w-full">Save</button>
          </div>
        </div>
      </div>

      {/* Latest Blog Or Announcement */}
      <div className="bg-white rounded shadow p-6">
        <h3 className="text-lg font-semibold mb-4">Latest Blog Or Announcement</h3>
        <div className="grid md:grid-cols-2 gap-4">
          <ImageUpload label="Upload banner image" />
          <div className="space-y-3">
            <input className="border rounded px-4 py-2 w-full" placeholder="Headline" />
            <input className="border rounded px-4 py-2 w-full" placeholder="Subheadline" />
            <label className="flex items-center gap-2">
              <input type="checkbox" defaultChecked />
              <span className="text-sm">Show on home page</span>
            </label>
            <button className="bg-green-600 text-white px-6 py-2 rounded w-full">Save</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CMS;
