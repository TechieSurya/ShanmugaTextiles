import React, { useState } from "react";
import { FiEye, FiPrinter, FiSearch } from "react-icons/fi";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";

const ordersData = [
  { orderNo: "#93674", customer: "Nivetha", paid: true, date: "12 Jun 2025", status: "Completed", itemsDate: "12 Jun 2025" },
  { orderNo: "#93887", customer: "Kowsi", paid: false, date: "15 Jun 2025", status: "Completed", itemsDate: "15 Jun 2025" },
  { orderNo: "#93990", customer: "Durai", paid: true, date: "16 Jun 2025", status: "Packaging", itemsDate: "16 Jun 2025" },
  { orderNo: "#93870", customer: "Vemba", paid: true, date: "21 Jun 2025", status: "Completed", itemsDate: "21 Jun 2025" },
  { orderNo: "#93871", customer: "Krithisha", paid: false, date: "22 Jun 2025", status: "Completed", itemsDate: "22 Jun 2025" },
  { orderNo: "#93881", customer: "Charu", paid: true, date: "25 Jun 2025", status: "Cancelled", itemsDate: "25 Jun 2025" },
  { orderNo: "#93861", customer: "Saravanan", paid: true, date: "28 Jun 2025", status: "Completed", itemsDate: "28 Jun 2025" },
  { orderNo: "#93661", customer: "Muthu", paid: false, date: "30 Jun 2025", status: "Cancelled", itemsDate: "30 Jun 2025" },
  { orderNo: "#93662", customer: "Deepshika", paid: true, date: "01 Jul 2025", status: "Packaging", itemsDate: "01 Jul 2025" },
];

const statusColors = {
  Completed: "text-green-600",
  Cancelled: "text-red-600",
  Packaging: "text-yellow-600",
};

const UserManagement = () => {
  const [search, setSearch] = useState("");
  const [selectedStatus, setSelectedStatus] = useState("");
  const [selectedDate, setSelectedDate] = useState("");
  const [currentTablePage, setCurrentTablePage] = useState(1);
  const perPage = 5;

  const handleView = (order) => {
    alert(`Viewing Order: ${order.orderNo}`);
  };

  const handlePrint = (order) => {
    alert(`Printing Order: ${order.orderNo}`);
  };

  const filteredOrders = ordersData.filter((order) => {
    return (
      (order.orderNo.toLowerCase().includes(search.toLowerCase()) ||
        order.customer.toLowerCase().includes(search.toLowerCase())) &&
      (selectedStatus === "" || order.status === selectedStatus) &&
      (selectedDate === "" || order.date === selectedDate)
    );
  });

  const totalPagesTable = Math.ceil(filteredOrders.length / perPage);
  const indexOfLastItem = currentTablePage * perPage;
  const indexOfFirstItem = indexOfLastItem - perPage;
  const currentOrders = filteredOrders.slice(indexOfFirstItem, indexOfLastItem);

  return (
    <div className="p-4 sm:p-6">
      <h2 className="text-xl font-semibold mb-4">User Management</h2>
      <div className="rounded shadow bg-white">
        
        {/* Search & Filters */}
        <div className="flex flex-col md:flex-row md:justify-between md:items-center gap-4 py-5 px-4">
          
          {/* Search */}
          <div className="relative w-full md:w-1/3">
            <input
              type="text"
              placeholder="Search Orders"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="w-full px-4 pl-10 py-2 rounded-md shadow focus:outline-none border"
            />
            <FiSearch className="absolute top-1/2 left-3 -translate-y-1/2 text-gray-500" />
          </div>

          {/* Filters */}
          <div className="flex flex-col sm:flex-row gap-2">
            <select
              className="border rounded px-2 py-1"
              value={selectedStatus}
              onChange={(e) => {
                setSelectedStatus(e.target.value);
                setCurrentTablePage(1);
              }}
            >
              <option value="">Status</option>
              <option value="Completed">Completed</option>
              <option value="Cancelled">Cancelled</option>
              <option value="Packaging">Packaging</option>
            </select>

            <select
              className="border rounded px-4 py-2"
              value={selectedDate}
              onChange={(e) => {
                setSelectedDate(e.target.value);
                setCurrentTablePage(1);
              }}
            >
              <option value="">All Dates</option>
              <option value="01 Jul 2025">July 1, 2025</option>
            </select>
          </div>
        </div>

        {/* Table - Responsive */}
        <div className="overflow-x-auto">
          <table className="min-w-full text-sm text-left">
            <thead className="bg-gray-100 text-gray-700 font-medium">
              <tr>
                <th className="px-4 py-2">Order No</th>
                <th className="px-4 py-2">Customer</th>
                <th className="px-4 py-2">Paid</th>
                <th className="px-4 py-2">Date</th>
                <th className="px-4 py-2">Status</th>
                <th className="px-4 py-2">Items</th>
                <th className="px-4 py-2">Action</th>
              </tr>
            </thead>
            <tbody className="text-gray-700">
              {currentOrders.map((order, idx) => (
                <tr key={idx} className="border-b hover:bg-gray-50">
                  <td className="px-4 py-2">{order.orderNo}</td>
                  <td className="px-4 py-2">{order.customer}</td>
                  <td className="px-4 py-2">
                    <span
                      className={`px-3 py-1 rounded-full text-white text-xs font-semibold ${
                        order.paid ? "bg-green-500" : "bg-gray-500"
                      }`}
                    >
                      {order.paid ? "Yes" : "No"}
                    </span>
                  </td>
                  <td className="px-4 py-2">{order.date}</td>
                  <td className={`px-4 py-2 ${statusColors[order.status]}`}>
                    {order.status}
                  </td>
                  <td className="px-4 py-2">{order.itemsDate}</td>
                  <td className="px-4 py-2 flex gap-2 text-lg">
                    <button
                      className="hover:text-blue-600"
                      onClick={() => handleView(order)}
                    >
                      <FiEye />
                    </button>
                    <button
                      className="hover:text-gray-700"
                      onClick={() => handlePrint(order)}
                    >
                      <FiPrinter />
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Pagination */}
        <div className="flex justify-end items-center p-4 bg-gray-50 flex-wrap gap-2">
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
              className={`px-3 py-1 mx-1 rounded-md ${
                currentTablePage === i + 1
                  ? "bg-green-600 text-white"
                  : "text-gray-700 hover:bg-gray-200"
              }`}
            >
              {i + 1}
            </button>
          ))}
          <button
            onClick={() => setCurrentTablePage((p) => Math.min(p + 1, totalPagesTable))}
            disabled={currentTablePage === totalPagesTable}
            className="p-2 text-gray-500 hover:bg-gray-200 rounded disabled:opacity-50"
          >
            <FaArrowRight />
          </button>
        </div>
      </div>
    </div>
  );
};

export default UserManagement;
