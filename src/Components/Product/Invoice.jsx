import { forwardRef } from "react";
import { Button } from "../../Components/ui/button";
import { Separator } from "../../Components/ui/separator";
import { Card, CardContent } from "../../Components/ui/card";
import { Printer } from "lucide-react";

const Invoice = forwardRef(({ data, onPrint }, ref) => {
  return (
    <div ref={ref} className="max-w-4xl mx-auto bg-white p-8 text-black">
      {/* Print Button - Only visible on screen */}
      <div className="mb-6 print:hidden">
        <Button onClick={onPrint} className="flex items-center gap-2">
          <Printer className="h-4 w-4" />
          Print Invoice
        </Button>
      </div>

      <Card className="border-0 shadow-none">
        <CardContent className="p-8">
          {/* Header */}
          <div className="flex justify-between items-start mb-8">
            <div>
              <h1 className="text-2xl font-bold text-gray-800 mb-2">ShopStore</h1>
              <div className="text-sm text-gray-600">
                <p>123 Business Street</p>
                <p>City, State 12345</p>
                <p>Phone: (555) 123-4567</p>
              </div>
            </div>
            <div className="text-right">
              <h2 className="text-3xl font-bold text-gray-800 mb-4">INVOICE</h2>
              <div className="text-sm">
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <p className="text-gray-600">Invoice #</p>
                    <p className="font-semibold">{data.invoiceNumber}</p>
                  </div>
                  <div>
                    <p className="text-gray-600">Project Name</p>
                    <p className="font-semibold">Order Purchase</p>
                  </div>
                  <div>
                    <p className="text-gray-600">Invoice Date</p>
                    <p className="font-semibold">{data.invoiceDate}</p>
                  </div>
                  <div>
                    <p className="text-gray-600">Due Date</p>
                    <p className="font-semibold">{data.dueDate}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <Separator className="my-8" />

          {/* Bill To */}
          <div className="mb-8">
            <h3 className="text-lg font-semibold text-gray-800 mb-4">Bill To</h3>
            <div className="text-sm text-gray-600">
              <p className="font-semibold text-gray-800">{data.customer.name}</p>
              <p>{data.customer.phone}</p>
              {data.customer.address && <p>{data.customer.address}</p>}
            </div>
          </div>

          {/* Items Table */}
          <div className="mb-8">
            <div className="bg-gray-50 border border-gray-200">
              <div className="grid grid-cols-12 gap-4 p-4 font-semibold text-gray-800 border-b border-gray-200">
                <div className="col-span-1">#</div>
                <div className="col-span-6">Item & Description</div>
                <div className="col-span-1 text-center">Qty</div>
                <div className="col-span-2 text-right">Rate</div>
                <div className="col-span-2 text-right">Amount</div>
              </div>

              {data.items.map((item, index) => (
                <div key={item.id} className="grid grid-cols-12 gap-4 p-4 border-b border-gray-200 last:border-b-0">
                  <div className="col-span-1 text-gray-600">{index + 1}</div>
                  <div className="col-span-6">
                    <p className="font-medium text-gray-800">{item.title}</p>
                  </div>
                  <div className="col-span-1 text-center text-gray-600">{item.quantity}</div>
                  <div className="col-span-2 text-right text-gray-600">${item.price.toFixed(2)}</div>
                  <div className="col-span-2 text-right font-semibold text-gray-800">${item.amount.toFixed(2)}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Totals */}
          <div className="flex justify-end mb-8">
            <div className="w-80">
              <div className="space-y-2">
                <div className="flex justify-between">
                  <span className="text-gray-600">Sub Total</span>
                  <span className="font-semibold">${data.subtotal.toFixed(2)}</span>
                </div>
                {data.discount > 0 && (
                  <div className="flex justify-between">
                    <span className="text-gray-600">Discount</span>
                    <span className="font-semibold">-${data.discount.toFixed(2)}</span>
                  </div>
                )}
                <Separator />
                <div className="flex justify-between text-lg font-bold">
                  <span>Total</span>
                  <span>${data.total.toFixed(2)}</span>
                </div>
              </div>
            </div>
          </div>

          {/* Payment Info */}
          <div className="mb-8">
            <h3 className="text-lg font-semibold text-gray-800 mb-4">Payment Information</h3>
            <div className="text-sm text-gray-600">
              <p>Payment Method: Cash on Delivery / WhatsApp Order</p>
              <p>Please keep this invoice for your records.</p>
            </div>
          </div>

          {/* Notes */}
          <div className="mb-8">
            <h3 className="text-lg font-semibold text-gray-800 mb-2">Notes</h3>
            <p className="text-sm text-gray-600">Thanks for your business.</p>
          </div>

          <Separator className="my-8" />

          {/* Terms */}
          <div className="text-xs text-gray-500">
            <h4 className="font-semibold mb-2">Terms & Conditions</h4>
            <p>Your Company's Terms and Conditions will be disclosed here. You can add it in the invoice preferences page under settings.</p>
          </div>
        </CardContent>
      </Card>
    </div>
  );
});

Invoice.displayName = "Invoice";

export default Invoice;
