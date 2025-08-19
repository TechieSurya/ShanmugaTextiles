import React, { useState } from "react";
import icon1 from "../../assets/dashbordIcons/icon1.png";
import icon2 from "../../assets/dashbordIcons/icon2.png";
import icon3 from "../../assets/dashbordIcons/icon3.png";
import icon4 from "../../assets/dashbordIcons/icon4.png";
import { FaUser } from "react-icons/fa";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
  Line,
  CartesianGrid,
  Legend,
  PieChart,
  Pie,
  Cell,
} from "recharts";
import ProductForm from "./ProductForm";
import { Button } from "@headlessui/react";

// Sample Data
const salesData = [
  { name: "Jan", revenue: 30, visits: 10, orders: 5 },
  { name: "Feb", revenue: 55, visits: 15, orders: 8 },
  { name: "Mar", revenue: 45, visits: 12, orders: 6 },
  { name: "Apr", revenue: 32, visits: 9, orders: 4 },
  { name: "May", revenue: 40, visits: 11, orders: 6 },
  { name: "Jun", revenue: 25, visits: 8, orders: 3 },
  { name: "Jul", revenue: 35, visits: 10, orders: 5 },
  { name: "Aug", revenue: 70, visits: 18, orders: 10 },
  { name: "Sep", revenue: 33, visits: 9, orders: 4 },
  { name: "Oct", revenue: 22, visits: 7, orders: 3 },
  { name: "Nov", revenue: 50, visits: 14, orders: 7 },
  { name: "Dec", revenue: 30, visits: 10, orders: 5 },
];

const buyerData = [
  { name: "Buyer", value: 70 },
  { name: "Remaining", value: 30 },
];

const COLORS = ["#3b82f6", "#e5e7eb"];

const DashboardContent = () => {
    const [showForm, setShowForm] = useState(false);
    const [editingProduct, setEditingProduct] = useState(null);
  const [currentPage, setCurrentPage] = useState(1);
  const ordersPerPage = 5;

  const cardData = [
    {
      title: "Total Sales",
      value: "34,945",
      percent: "1.56%",
      icon: icon1,
      color: "text-blue-500",
    },
    {
      title: "Total Income",
      value: "37,802",
      percent: "1.56%",
      icon: icon2,
      color: "text-green-500",
    },
    {
      title: "Orders Paid",
      value: "34,945",
      percent: "1.56%",
      icon: icon3,
      color: "text-yellow-500",
    },
    {
      title: "Total Visitors",
      value: "34,945",
      percent: "1.56%",
      icon: icon4,
      color: "text-purple-500",
    },
  ];

  const orders = [
    { orderNo: "#93674", customerName: "Swathi", date: "11/01/25", item: "Kurti With Pant", qty: 1, mobile: "+91 987654321", amount: "₹ 1,499", status: "Completed" },
    { orderNo: "#93675", customerName: "Geeththa", date: "13/01/25", item: "Lehenga", qty: 1, mobile: "+91 987654321", amount: "₹ 2,599", status: "Completed" },
    { orderNo: "#93676", customerName: "Gomathi", date: "15/01/25", item: "Kurti With Pant", qty: 1, mobile: "+91 987654321", amount: "₹ 1,999", status: "Pending" },
    { orderNo: "#93677", customerName: "Kamala", date: "15/01/25", item: "Night Wear", qty: 1, mobile: "+91 987654321", amount: "₹ 799", status: "Completed" },
    { orderNo: "#93678", customerName: "Vasuki", date: "17/01/25", item: "Kurti With Pant", qty: 1, mobile: "+91 987654321", amount: "₹ 1,500", status: "Pending" },
    { orderNo: "#93679", customerName: "Priya", date: "17/01/25", item: "Kurti With Pant", qty: 1, mobile: "+91 987654321", amount: "₹ 2,500", status: "Completed" },
    { orderNo: "#93680", customerName: "Venci", date: "20/01/25", item: "Mom & Daughter", qty: 1, mobile: "+91 987654321", amount: "₹ 1,999", status: "Completed" },
    { orderNo: "#93681", customerName: "Lakshmi", date: "21/01/25", item: "Mom & Daughter", qty: 1, mobile: "+91 987654321", amount: "₹ 1,799", status: "Pending" },
  ];

  const indexOfLastOrder = currentPage * ordersPerPage;
  const indexOfFirstOrder = indexOfLastOrder - ordersPerPage;
  const currentOrders = orders.slice(indexOfFirstOrder, indexOfLastOrder);
  const totalPages = Math.ceil(orders.length / ordersPerPage);

  const handleAddProduct = (data) => {
  const newProduct = {
    ...data,
    id: Date.now().toString(),
    rating: 0,
    sales: 0,
    image:
      data.images && data.images.length > 0
        ? data.images[0]
        : "https://images.unsplash.com/photo-1560472355-536de3962603?w=400&h=400&fit=crop",
  };

  setProducts((prev) => [newProduct, ...prev]);
  setShowForm(false);
  toast({
    title: "Product Added",
    description: "New product has been successfully added.",
  });
  filterProducts();
};

const handleEditProduct = (data) => {
  if (!editingProduct) return;

  const updatedProduct = {
    ...editingProduct,
    ...data,
    image:
      data.images && data.images.length > 0
        ? data.images[0]
        : editingProduct.image,
  };

  setProducts((prev) =>
    prev.map((p) => (p.id === editingProduct.id ? updatedProduct : p))
  );
  setEditingProduct(null);
  setShowForm(false);
  toast({
    title: "Product Updated",
    description: "Product has been successfully updated.",
  });
  filterProducts();
};


  if (showForm) {
  return (
    
      <ProductForm
        initialData={editingProduct || undefined}
        onSubmit={editingProduct ? handleEditProduct : handleAddProduct}
        onCancel={() => {
          setShowForm(false);
          setEditingProduct(null);
        }}
        isEditing={!!editingProduct}
      />
    
  );
}

  return (
    <div className="p-4">
      
      <div className="flex justify-between items-center mb-4">
        <h1 className="text-2xl font-bold">Dash Board</h1>
        <Button onClick={() => setShowForm(true)}
        className="bg-green-700 text-white px-4 py-2 rounded hover:bg-green-800">
          + Add Product
        </Button>
      </div>

      {/* Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
        {cardData.map((card, i) => (
          <div key={i} className="p-4 bg-white rounded-lg shadow flex items-center gap-4">
            <div className="bg-gray-100 p-2 rounded-full">
              <img src={card.icon} alt={card.title} className="w-10 h-10" />
            </div>
            <div>
              <h3 className="text-sm font-medium">{card.title}</h3>
              <p className="text-xl font-bold mt-1">{card.value}</p>
              <p className={`text-xs mt-0.5 ${card.color}`}>↑ {card.percent}</p>
            </div>
          </div>
        ))}
      </div>

      {/* Charts */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Bar Chart */}
        <div className="p-4 bg-white rounded-lg shadow">
          <div className="flex justify-between items-center mb-2">
            <h3 className="font-semibold">Sales Report</h3>
          </div>
          <ResponsiveContainer width="100%" height={250}>
            <BarChart data={salesData} barSize={20}>
              <CartesianGrid strokeDasharray="3 3" vertical={false} />
              <XAxis dataKey="name" tickLine={false} axisLine={false} />
              <YAxis domain={[0, 80]} ticks={[0, 20, 40, 60, 80]} axisLine={false} tickLine={false} />
              <Tooltip />
              <Legend iconType="circle" />
              <Bar dataKey="revenue" fill="#3b82f6" radius={[10, 10, 0, 0]} />
              <Line type="monotone" dataKey="visits" stroke="#22C55E" strokeWidth={2} dot={{ r: 3 }} />
              <Line type="monotone" dataKey="orders" stroke="#FBBF24" strokeWidth={2} dot={{ r: 3 }} />
            </BarChart>
          </ResponsiveContainer>
        </div>

        {/* Pie Chart */}
        <div className="p-4 bg-white rounded-lg shadow w-full flex flex-col items-center">
          <h3 className="w-full text-sm font-semibold mb-2">Total Buyer</h3>
          <div className="relative w-full flex items-center justify-center h-[160px]">
            <ResponsiveContainer width="80%" height="100%">
              <PieChart>
                <Pie
                  data={buyerData}
                  innerRadius={50}
                  outerRadius={70}
                  startAngle={90}
                  endAngle={-270}
                  dataKey="value"
                >
                  {buyerData.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={COLORS[index]} />
                  ))}
                </Pie>
              </PieChart>
            </ResponsiveContainer>
            <p className="absolute text-2xl font-bold text-gray-800">70</p>
          </div>
          <div className="flex items-center gap-2 mt-2">
            <FaUser className="text-gray-600" />
            <p className="text-sm">Buyer: <span className="text-blue-600 font-semibold">70</span></p>
          </div>
        </div>
      </div>

      {/* Recent Orders */}
      <div className="mt-6 mb-10" id="orders-section">
  <div className="bg-white rounded-lg shadow overflow-hidden flex flex-col">
    <h2 className="text-xl font-bold p-4 border-b border-gray-200">
      Recent Orders
    </h2>

    <div className="overflow-x-auto">
      <table className="min-w-full divide-y divide-gray-200">
        <thead className="bg-gray-50">
          <tr>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Order No</th>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Customer Name</th>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Date</th>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Item</th>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Qty</th>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Mobile Number</th>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Amount</th>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Status</th>
          </tr>
        </thead>
        <tbody className="bg-white divide-y divide-gray-200">
          {currentOrders.map((order, index) => (
            <tr key={index}>
              <td className="px-6 py-4 text-sm font-medium text-blue-600">{order.orderNo}</td>
              <td className="px-6 py-4 text-sm">{order.customerName}</td>
              <td className="px-6 py-4 text-sm">{order.date}</td>
              <td className="px-6 py-4 text-sm">{order.item}</td>
              <td className="px-6 py-4 text-sm">{order.qty}</td>
              <td className="px-6 py-4 text-sm">{order.mobile}</td>
              <td className="px-6 py-4 text-sm">{order.amount}</td>
              <td className="px-6 py-4 text-sm">
                <span
                  className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${
                    order.status === "Completed"
                      ? "bg-green-100 text-green-800"
                      : "bg-red-100 text-red-800"
                  }`}
                >
                  <span
                    className={`h-2 w-2 rounded-full mr-1 ${
                      order.status === "Completed"
                        ? "bg-green-500"
                        : "bg-red-500"
                    }`}
                  />
                  {order.status}
                </span>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>

    {/* Pagination */}
    <div className="flex justify-end items-center p-4 border-t border-gray-200 bg-gray-50">
      <button
        onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 1))}
        className="p-2 text-gray-500 hover:bg-gray-200 rounded-md"
      >
        <FaArrowLeft />
      </button>
      {[...Array(totalPages)].map((_, i) => (
        <button
          key={i}
          onClick={() => setCurrentPage(i + 1)}
          className={`px-3 py-1 mx-1 rounded-md ${
            currentPage === i + 1
              ? "bg-green-600 text-white"
              : "text-gray-700 hover:bg-gray-200"
          }`}
        >
          {i + 1}
        </button>
      ))}
      <button
        onClick={() => setCurrentPage((prev) => Math.min(prev + 1, totalPages))}
        className="p-2 text-gray-500 hover:bg-gray-200 rounded-md"
      >
         <FaArrowRight />
      </button>
    </div>
  </div>
</div>
{/* Top Products & Recent Transactions */}
<div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
  {/* Top Products */}
  <div className="bg-white rounded-lg shadow p-4">
    <h2 className="text-xl font-bold mb-4">Top Products</h2>
    <ul className="space-y-3">
      {[...Array(6)].map((_, i) => (
        <li key={i} className="flex items-center justify-between">
          <div className="flex items-center space-x-4">
            <img
              src="https://via.placeholder.com/40"
              alt="Product"
              className="w-12 h-12 rounded object-cover"
            />
            <div>
              <p className="text-sm font-medium">
                Kurti With Pant Semi-Stitched Orange And Green Floral Dress
              </p>
              <p className="text-xs text-gray-500">4567 Sold</p>
            </div>
          </div>
          <span className="bg-green-100 text-green-700 text-sm px-3 py-1 rounded-full">
            ₹ 1,499
          </span>
        </li>
      ))}
    </ul>
  </div>

  {/* Recent Transactions */}
  <div className="bg-white rounded-lg shadow p-4">
    <h2 className="text-xl font-bold mb-4">Recent Transactions</h2>
    <div className="overflow-x-auto">
      <table className="min-w-full text-sm">
        <thead>
          <tr className="text-left text-gray-500 border-b">
            <th className="py-2">ID</th>
            <th className="py-2">Date</th>
            <th className="py-2">Amt</th>
            <th className="py-2">Status</th>
          </tr>
        </thead>
        <tbody>
          {[
            { id: "#93674", date: "11/01/25", amt: "₹ 1,499", status: "Cr" },
            { id: "#93675", date: "12/01/25", amt: "₹ 1,799", status: "Pend" },
            { id: "#93680", date: "13/01/25", amt: "₹ 2,500", status: "Cr" },
            { id: "#93681", date: "14/01/25", amt: "₹ 1,499", status: "Cr" },
            { id: "#93691", date: "15/01/25", amt: "₹ 2,499", status: "Pend" },
            { id: "#93695", date: "17/01/25", amt: "₹ 1,499", status: "Cr" },
            { id: "#936800", date: "21/01/25", amt: "₹ 1,499", status: "Pend" },
          ].map((tx, idx) => (
            <tr key={idx} className="border-b last:border-none">
              <td className="py-2">{tx.id}</td>
              <td className="py-2">{tx.date}</td>
              <td className="py-2">{tx.amt}</td>
              <td className="py-2">
                <span className={`inline-flex items-center gap-2 text-sm ${
                  tx.status === "Cr"
                    ? "text-green-600"
                    : "text-red-500"
                }`}>
                  <span className={`w-2 h-2 rounded-full ${
                    tx.status === "Cr" ? "bg-green-500" : "bg-red-500"
                  }`} />
                  {tx.status}
                </span>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  </div>
</div>

    </div>
  );
};

export default DashboardContent;
