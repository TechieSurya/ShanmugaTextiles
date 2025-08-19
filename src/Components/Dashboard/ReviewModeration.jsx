import React, { useState } from "react";
import { FiEye, FiCheckCircle, FiTrash2, FiSearch } from "react-icons/fi";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";

const reviewsData = [
  {
    reviewer: "Priya M",
    email: "priya@gmail.com",
    product: "Aari Work Blouse",
    rating: 4,
    text: "The stitching was neat and fit perfectly. I loved the Aari work and fabric quality. Will definitely order again!",
    status: "Approved",
    date: "01 Jul 2025",
  },
  {
    reviewer: "Manohari",
    email: "manohari@gmail.com",
    product: "Aari Blouse",
    rating: 4,
    text: "Perfect Stitching And Fast Delivery",
    status: "Approved",
    date: "25 Jun 2025",
  },
  {
    reviewer: "Jeeva",
    email: "jeeva@gmail.com",
    product: "Kids Party Frock",
    rating: 2,
    text: "Color Not As Expected.",
    status: "Pending",
    date: "15 Jun 2025",
  },
  {
    reviewer: "Keerthanan",
    product: "Combo dress",
    rating: 4,
    email: "keerthanan@gmail.com",
    text: "Combo Dress Was Adorable And Well-Fitted.",
    status: "Pending",
    date: "31 Jun 2025",
  },
  {
    reviewer: "Lakshmi",
    product: "Lehenga",
    rating: 3,
    email: "lakshmi@gmail.com",
    text: "Quality Is Amazing For The Price.",
    status: "Approved",
    date: "25 Jun 2025",
  },
  {
    reviewer: "Hariharan",
    product: "Birthday frock",
    rating: 4,
    email: "hariharan123@gmail.com",
    text: "My Daughter Loved Her Birthday Frock!",
    status: "Approved",
    date: "01 Jul 2025",
  },
  {
    reviewer: "Lilly",
    product: "Kurti",
    rating: 5,
    email: "lilly123@gmail.com",
    text: "Kurti Set Stitching Was Super Neat And Elegant.",
    status: "Pending",
    date: "25 Jun 2025",
  },
];

const ReviewModeration = () => {
  const [search, setSearch] = useState("");
  const [statusFilter, setStatusFilter] = useState("");
  const [dateFilter, setDateFilter] = useState("");
  const [selectedReview, setSelectedReview] = useState(null);
  const [currentTablePage, setCurrentTablePage] = useState(1);
  const perPage = 4;

  const filteredData = reviewsData.filter((r) => {
    return (
      (search === "" ||
        r.product.toLowerCase().includes(search.toLowerCase())) &&
      (statusFilter === "" || r.status === statusFilter) &&
      (dateFilter === "" || r.date === dateFilter)
    );
  });

  const totalPagesTable = Math.ceil(filteredData.length / perPage);
  const indexOfLastItem = currentTablePage * perPage;
  const indexOfFirstItem = indexOfLastItem - perPage;
  const currentData = filteredData.slice(indexOfFirstItem, indexOfLastItem);

  const renderStars = (count) => {
    const stars = [];
    for (let i = 0; i < 5; i++) {
      stars.push(
        <span
          key={i}
          className={`text-${i < count ? "green" : "gray"}-500 text-lg`}
        >
          ★
        </span>
      );
    }
    return <div className="flex">{stars}</div>;
  };

  return (
    <div className="p-4 sm:p-6">
      <h2 className="text-lg sm:text-xl font-semibold mb-4">
        Review & Rating Moderation
      </h2>
      <div className="bg-white rounded shadow p-4">
        {/* Filters */}
        <div className="flex flex-col md:flex-row justify-between gap-4 mb-4">
          <div className="relative w-full md:w-1/3">
            <input
              type="text"
              placeholder="Search Orders"
              value={search}
              onChange={(e) => {
                setSearch(e.target.value);
                setCurrentTablePage(1);
              }}
              className="w-full px-4 pl-10 py-2 rounded-md shadow-sm border focus:outline-none"
            />
            <FiSearch className="absolute top-1/2 left-3 -translate-y-1/2 text-gray-500" />
          </div>
          <div className="flex flex-col sm:flex-row gap-2 w-full md:w-auto">
            <select
              className="border rounded px-4 py-2"
              value={statusFilter}
              onChange={(e) => {
                setStatusFilter(e.target.value);
                setCurrentTablePage(1);
              }}
            >
              <option value="">Status</option>
              <option value="Approved">Approved</option>
              <option value="Pending">Pending</option>
            </select>
            <select
              className="border rounded px-4 py-2"
              value={dateFilter}
              onChange={(e) => {
                setDateFilter(e.target.value);
                setCurrentTablePage(1);
              }}
            >
              <option value="">All Dates</option>
              <option value="25 Jun 2025">June 25, 2025</option>
              <option value="01 Jul 2025">July 1, 2025</option>
            </select>
          </div>
        </div>

        {/* Table */}
        <div className="overflow-x-auto">
          <table className="min-w-full text-sm text-left">
            <thead className="bg-gray-100 text-gray-700 font-medium whitespace-nowrap">
              <tr>
                <th className="px-4 py-2">Reviewer</th>
                <th className="px-4 py-2">Product</th>
                <th className="px-4 py-2">Rating</th>
                <th className="px-4 py-2">Review</th>
                <th className="px-4 py-2">Status</th>
                <th className="px-4 py-2">Date</th>
                <th className="px-4 py-2">Action</th>
              </tr>
            </thead>
            <tbody>
              {currentData.map((review, idx) => (
                <tr key={idx} className="border-b hover:bg-gray-50">
                  <td className="px-4 py-2">{review.reviewer}</td>
                  <td className="px-4 py-2">{review.product}</td>
                  <td className="px-4 py-2">{renderStars(review.rating)}</td>
                  <td className="px-4 py-2 max-w-sm truncate">{review.text}</td>
                  <td className="px-4 py-2">{review.status}</td>
                  <td className="px-4 py-2">{review.date}</td>
                  <td className="px-4 py-2 flex gap-2 text-lg">
                    <button
                      className="hover:text-blue-600"
                      onClick={() => setSelectedReview(review)}
                    >
                      <FiEye />
                    </button>
                    <button
                      className="hover:text-green-600"
                      onClick={() =>
                        alert(`Approved review by ${review.reviewer}`)
                      }
                    >
                      <FiCheckCircle />
                    </button>
                    <button
                      className="hover:text-red-600"
                      onClick={() =>
                        alert(`Deleted review by ${review.reviewer}`)
                      }
                    >
                      <FiTrash2 />
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Pagination */}
        <div className="flex justify-center sm:justify-end items-center mt-4 flex-wrap gap-2">
          <button
            onClick={() => setCurrentTablePage((p) => Math.max(p - 1, 1))}
            disabled={currentTablePage === 1}
            className="p-2 text-gray-500 hover:bg-gray-200 rounded disabled:opacity-50"
          >
            <FaArrowLeft />
          </button>
          {[...Array(totalPagesTable)].map((_, i) => (
            <button
              key={i}
              onClick={() => setCurrentTablePage(i + 1)}
              className={`px-3 py-1 rounded-md ${
                currentTablePage === i + 1
                  ? "bg-green-600 text-white"
                  : "text-gray-700 hover:bg-gray-200"
              }`}
            >
              {i + 1}
            </button>
          ))}
          <button
            onClick={() =>
              setCurrentTablePage((p) => Math.min(p + 1, totalPagesTable))
            }
            disabled={currentTablePage === totalPagesTable}
            className="p-2 text-gray-500 hover:bg-gray-200 rounded disabled:opacity-50"
          >
            <FaArrowRight />
          </button>
        </div>
      </div>

      {/* Review Detail Section */}
      {selectedReview && (
        <div className="mt-8 p-4 sm:p-6 bg-white shadow rounded">
          <h3 className="text-lg font-semibold mb-4">Review Details</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="space-y-4">
              <div>
                <p className="text-sm font-medium text-gray-500">Name</p>
                <p>{selectedReview.reviewer}</p>
              </div>
              <div>
                {selectedReview.email && (
                  <div>
                    <p className="text-sm font-medium text-gray-500">Email</p>
                    <p>{selectedReview.email}</p>
                  </div>
                )}
              </div>
              <div>
                <p className="text-sm font-medium text-gray-500">
                  Submitted On
                </p>
                <p>{selectedReview.date}</p>
              </div>
              <div>
                <p className="text-sm font-medium text-gray-500">
                  Product Name
                </p>
                <input
                  type="text"
                  className="border rounded px-3 py-2 w-full"
                  value={selectedReview.product}
                  readOnly
                />
              </div>
            </div>
            <div className="space-y-4">
              <div>
                <p className="text-sm font-medium text-gray-500">Star Rating</p>
                {renderStars(selectedReview.rating)}
              </div>
              <div>
                <p className="text-sm font-medium text-gray-500">Review Text</p>
                <textarea
                  className="border rounded px-3 py-2 w-full"
                  value={selectedReview.text}
                  readOnly
                  rows={4}
                />
              </div>
            </div>
          </div>
          <div className="flex flex-wrap justify-end gap-4 mt-6">
            <button className="bg-green-700 text-white px-4 py-2 rounded">
              Approve
            </button>
            <button className="bg-gray-500 text-white px-4 py-2 rounded">
              Spam
            </button>
            <button className="border border-red-500 text-red-600 px-4 py-2 rounded">
              Delete
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default ReviewModeration;
