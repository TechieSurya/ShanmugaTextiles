import React from "react";
import { Check, Download, Pencil, ChevronDown } from "lucide-react";
import { ArrowRight } from "lucide-react";

const OrderManagement = () => {
  return (
    <div className="p-6 space-y-6 max-w-7xl mx-auto">
      <h2 className="text-3xl font-bold">Order Details</h2>

      {/* Top Section */}
      <div className="grid md:grid-cols-3 gap-6">
        {/* Order Summary Block */}
        <div className="md:col-span-2 space-y-4">
          <div className=" rounded-md shadow-xl p-4">
            <div className="flex justify-between items-center">
              <div className="flex">
                <p className="text-gray-600">#93694</p>
                <span className="text-sm px-2 py-1 bg-green-100 text-green-700 rounded mr-2">
                  Paid
                </span>
                <span className="text-sm px-2 py-1 bg-yellow-100 text-yellow-700 rounded">
                  In Progress
                </span>
              </div>
              <button className=" text-sm px-4 py-1 text-white bg-green-700 border rounded hover:bg-green-900">
                Edit Order
              </button>
            </div>
            <p className="text-sm mt-1 text-gray-500">
              Order / Order Details / 93694 - Jan 20, 2025 at 08:32pm
            </p>

            {/* Progress Steps */}
            <div className="flex justify-between items-start gap-4 py-2">
              {[
                {
                  label: "Order Confirming",
                  color: "bg-green-700",
                  filled: true,
                },
                {
                  label: "Payment Successful",
                  color: "bg-green-600",
                  filled: true,
                },
                { label: "Processing", color: "bg-yellow-600", filled: true },
                { label: "Shipping", color: "bg-gray-300", filled: false },
                { label: "Delivered", color: "bg-gray-300", filled: false },
              ].map((step, idx) => (
                <div key={idx} className="text-center flex-1">
                  <div
                    className={`h-1.5 rounded-full mb-2 ${
                      step.filled ? step.color : "bg-gray-300"
                    }`}
                  ></div>
                  <p className="text-xs text-gray-700">{step.label}</p>
                </div>
              ))}
            </div>

            {/* Delivery Date & Button */}
            <div className="flex justify-between items-center mt-2">
              <div className="flex items-center gap-2 bg-gray-200 px-4 py-2 rounded-md w-fit">
                <ArrowRight className="w-4 h-4 text-gray-600" />
                <span className="text-sm text-gray-700 font-medium">
                  Estimated Delivery Date: Jan,26 2025
                </span>
              </div>
              <button className="px-4 py-2 bg-green-700 text-white rounded hover:bg-green-800 text-sm">
                Make As Ready To Ship
              </button>
            </div>
          </div>

{/* Product */}
         <div className="rounded-md shadow-md overflow-hidden">
      {/* Header */}
      <div className="bg-gray-100 px-6 py-3 font-semibold text-sm text-gray-700">
        Product
      </div>

      {/* Table */}
      <table className="w-full text-sm">
        <thead className="bg-gray-50">
          <tr className="text-left text-sm text-gray-700">
            <th className="px-6 py-3">Product Name</th>
            <th className="px-4 py-3">Qty</th>
            <th className="px-4 py-3">Price</th>
            <th className="px-4 py-3">Status</th>
            <th className="px-4 py-3">Total</th>
          </tr>
        </thead>
        <tbody>
          {/* Row 1 */}
          <tr className="border-t">
            <td className="flex items-start gap-3 px-6 py-4">
              <img
                src="/img1.jpg"
                alt="product1"
                className="w-14 h-14 object-cover rounded"
              />
              <div>
                <p className="font-medium">
                  Kurti with pant semi-stitched
                </p>
                <p className="text-gray-500 text-sm -mt-1">
                  orange and green floral dress
                </p>
              </div>
            </td>
            <td className="px-4">1</td>
            <td className="px-4">₹1,499</td>
            <td className="px-4">
             <div className="flex items-center gap-1">
                <select className="text-yellow-600 font-medium bg-transparent">
                    <option>Ready</option>
                  <option>Packaging</option>
                  
                </select>
               
              </div>
            </td>
            <td className="px-4">₹1,499</td>
          </tr>

          {/* Row 2 */}
          <tr className="border-t">
            <td className="flex items-start gap-3 px-6 py-4">
              <img
                src="/img2.jpg"
                alt="product2"
                className="w-14 h-14 object-cover rounded"
              />
              <div>
                <p className="font-medium">
                  Mom & Daughter Lehenga set
                </p>
              </div>
            </td>
            <td className="px-4">1</td>
            <td className="px-4">₹2,499</td>
            <td className="px-4">
              <div className="flex items-center gap-1">
                <select className="text-yellow-600 font-medium bg-transparent">
                  <option>Packaging</option>
                  <option>Ready</option>
                </select>
               
              </div>
            </td>
            <td className="px-4">₹2,499</td>
          </tr>
        </tbody>
      </table>
    </div>

          {/* Order Timeline */}
          <div className=" rounded-md shadow-xl p-4">
            <h3 className="font-semibold text-lg mb-4">Order Timeline</h3>
            <div className="space-y-6 text-sm">
              <div className="border-l-2 border-green-600 pl-4 relative">
                <div className="absolute -left-[9px] top-1 w-4 h-4 rounded-full bg-green-600"></div>
                <p className="font-medium">The Packing Has Been Started</p>
                <p className="text-gray-500">Confirmed by geetha</p>
                <p className="text-gray-400">April 23, 2024, 09:40 AM</p>
              </div>
              <div className="border-l-2 border-green-600 pl-4 relative">
                <div className="absolute -left-[9px] top-1 w-4 h-4 rounded-full bg-green-600"></div>
                <p className="font-medium">
                  The Invoice Has Been Sent To The Customer
                </p>
                <p className="text-gray-500">
                  Invoice email was sent to geetha1234@gmail.com
                </p>
                <div className="flex gap-2 mt-1">
                  <button className="text-sm text-blue-600 underline">
                    Resend Invoice
                  </button>
                </div>
                <p className="text-gray-400">April 23, 2024, 09:40 AM</p>
              </div>
              <div className="border-l-2 border-green-600 pl-4 relative">
                <div className="absolute -left-[9px] top-1 w-4 h-4 rounded-full bg-green-600"></div>
                <p className="font-medium">The Invoice Has Been Created</p>
                <p className="text-gray-500">Invoice created by geetha</p>
                <div className="flex gap-2 mt-1">
                  <button className="text-sm text-green-700 flex items-center gap-1">
                    <Download size={16} /> Download Invoice
                  </button>
                </div>
                <p className="text-gray-400">April 23, 2024, 09:40 AM</p>
              </div>
              <div className="border-l-2 border-green-600 pl-4 relative">
                <div className="absolute -left-[9px] top-1 w-4 h-4 rounded-full bg-green-600"></div>
                <p className="font-medium">Order Payment</p>
                <p className="text-gray-500">Using Master Card</p>
                <p className="text-green-700 font-medium">Status: Paid</p>
                <p className="text-gray-400">April 23, 2024, 09:40 AM</p>
              </div>
              <div className="border-l-2 border-green-600 pl-4 relative">
                <div className="absolute -left-[9px] top-1 w-4 h-4 rounded-full bg-green-600"></div>
                <p className="font-medium">2 Order Confirm By Geetha</p>
                <p className="text-gray-400">April 23, 2024, 09:40 AM</p>
              </div>
            </div>
          </div>
        </div>

        {/* Right Summary */}
        <div className="space-y-6">
          <div className=" rounded-md shadow-xl p-4 space-y-2">
            <h3 className="font-semibold text-lg mb-2">Order Summary</h3>
            <div className="flex justify-between text-sm">
              <span>Sub Total:</span>
              <span>₹3,998.00</span>
            </div>
            <div className="flex justify-between text-sm">
              <span>Discount:</span>
              <span>₹0.00</span>
            </div>
            <div className="flex justify-between text-sm">
              <span>Delivery Charge:</span>
              <span>₹0.00</span>
            </div>
            <div className="flex justify-between text-sm">
              <span>Estimate Tax (15.5%)</span>
              <span>₹20.00</span>
            </div>
            <div className="flex justify-between font-bold">
              <span>Total Amount</span>
              <span>₹4,018.00</span>
            </div>
          </div>

          <div className=" rounded-md shadow-xl p-4 space-y-2">
            <h3 className="font-semibold text-lg mb-2">Payment Information</h3>
            <div className="flex items-center justify-between">
              <div>
                <p className="font-medium">Master Card</p>
                <p className="text-sm text-gray-500">XXXX XXXX XXXX 9894</p>
              </div>
              <Check className="text-green-600" />
            </div>
            <p className="text-sm text-gray-500">
              Transaction ID: #EDBF935432
              <br />
              Card Holder Name: Geetha
            </p>
          </div>

          <div className=" rounded-md shadow-xl p-4 space-y-2">
            <h3 className="font-semibold text-lg mb-2">Customer Details</h3>
            <div className="flex items-center gap-3">
              <img
                src="https://via.placeholder.com/40"
                alt="Geetha"
                className="w-10 h-10 rounded-full"
              />
              <div>
                <p className="font-medium">Geetha</p>
                <p className="text-sm text-gray-500">geetha1234@gmail.com</p>
              </div>
            </div>
            <div className="mt-2 text-sm space-y-1">
              <div className="flex justify-between">
                <span>Contact Number</span>
                <span className="flex items-center gap-2">
                  +91 987654321 <Pencil size={14} className="cursor-pointer" />
                </span>
              </div>
              <div>
                <p className="text-gray-600 mt-1">
                  <strong>Shipping Address:</strong>
                  <br />
                  18/1 Phinominial Street,
                  <br />
                  3rd Street,
                  <br />
                  South Kattur,
                  <br />
                  Trichy - 19
                </p>
              </div>
              <div className="text-gray-600">
                <strong>Billing Address:</strong> Same as shipping address
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OrderManagement;
