import { useState } from "react";
import {
  ShoppingCart,
  X,
  Plus,
  Minus,
  MessageCircle,
  FileText,
} from "lucide-react";
import { useCart } from "../../contexts/CartContext";
import { Button } from "../../Components/ui/button";
import { Badge } from "../../Components/ui/badge";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "../../Components/ui/card";
import { Separator } from "../../Components/ui/separator";
import { ScrollArea } from "../../Components/ui/scroll-area";
import { Input } from "../../Components/ui/input";
import { Label } from "../../Components/ui/label";
import { useToast } from "../../hooks/use-toast";
import { useInvoice } from "../../hooks/useInvoice";
import { useOrders } from "../../contexts/OrderContext";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "../../Components/ui/dialog";
import Invoice from "../../Components/Product/Invoice";

const FloatingCart = () => {
  const { items, getTotalItems, getTotalPrice, updateQuantity, removeFromCart, clearCart } = useCart();
  const [isOpen, setIsOpen] = useState(false);
  const [customerInfo, setCustomerInfo] = useState({
    name: "",
    phone: "",
    address: ""
  });
  const { toast } = useToast();
  const { addOrder } = useOrders();

  const totalItems = getTotalItems();
  const totalPrice = getTotalPrice();

  const handlePlaceOrder = () => {
    if (items.length === 0) {
      toast({
        title: "Cart is empty",
        description: "Please add some products to your cart first.",
        variant: "destructive",
      });
      return;
    }

    if (!customerInfo.name || !customerInfo.phone) {
      toast({
        title: "Missing information",
        description: "Please fill in your name and phone number.",
        variant: "destructive",
      });
      return;
    }

   

    const orderData = {
      orderNumber: `ORD-${Date.now()}`,
      date: new Date().toLocaleDateString("en-US", {
        day: "2-digit",
        month: "short",
        year: "numeric"
      }),
      customer: customerInfo,
      items: items,
      subtotal: totalPrice,
      discount: 0,
      total: totalPrice,
      status: "pending",
      };

    addOrder(orderData);

    const orderDetails = items.map(item =>
      `• ${item.title} (Qty: ${item.quantity}) - ₹${(item.price * item.quantity).toFixed(2)}`
    ).join('\n');

    const message = `🛒 *New Order from Shanmuga Textiles Online*

👤 *Customer Details:*
Name: ${customerInfo.name}
Phone: ${customerInfo.phone}
${customerInfo.address ? `Address: ${customerInfo.address}` : ''}

📦 *Order Items:*
${orderDetails}

💰 *Total Amount: ₹${totalPrice.toFixed(2)}*`;

    const whatsappNumber = "7210295555"; 
    const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`;

    window.open(whatsappUrl, '_blank');

    setShowInvoice(true);
    clearCart();
    setIsOpen(false);
    setCustomerInfo({ name: "", phone: "", address: "" });

    toast({
      title: "Order placed!",
      description: "Your order has been sent via WhatsApp. Check your invoice!",
    });
  };

  

  if (totalItems === 0 && !isOpen) {
    return null;
  }

  return (
    <>
      <div className="fixed bottom-6 right-6 z-50">
        <Button
          size="lg"
          onClick={() => setIsOpen(true)}
          className="bg-green-800 h-14 w-14 rounded-full shadow-lg hover:shadow-xl 
          transition-all duration-300 relative"
        >
          <ShoppingCart className="h-6 w-6 text-white font-bold" />
          {totalItems > 0 && (
            <Badge className="absolute -top-2 -right-2 h-6 w-6 rounded-full p-0 text-md font-bold">
              {totalItems > 99 ? "99+" : totalItems}
            </Badge>
          )}
        </Button>
      </div>

      {isOpen && (
        <div className="fixed inset-0 z-50 bg-black/10" onClick={() => setIsOpen(false)}>
          <div className="fixed right-0 top-0 h-full w-full max-w-md bg-white" onClick={(e) => e.stopPropagation()}>
            <Card className="h-full rounded-none border-0">
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-xl font-bold">Shopping Cart</CardTitle>
                <Button variant="ghost" size="icon" onClick={() => setIsOpen(false)}>
                  <X className="h-4 w-4" />
                </Button>
              </CardHeader>

              <CardContent className="flex flex-col h-[calc(100vh-80px)]">
                {items.length === 0 ? (
                  <div className="flex-1 flex items-center justify-center">
                    <div className="text-center">
                      <ShoppingCart className="h-12 w-12 mx-auto text-muted-foreground mb-4" />
                      <p className="text-muted-foreground">Your cart is empty</p>
                    </div>
                  </div>
                ) : (
                  <>
                    <ScrollArea className="flex-1">
                      <div className="space-y-4">
                        {items.map((item) => (
                          <div key={item.id} className="flex gap-3 p-3 border rounded-lg">
                            <img
                              src={item.images?.[0]}
                              alt={item.title}
                              className="w-16 h-16 object-cover rounded-md"
                            />
                            <div className="flex-1 space-y-1">
                              <h4 className="text-sm font-medium line-clamp-2">{item.title}</h4>
                              <p className="text-sm text-primary font-semibold">₹{item.price}</p>
                              <div className="flex items-center gap-2">
                                <Button
                                  variant="outline"
                                  size="icon"
                                  className="h-6 w-6"
                                  onClick={() => updateQuantity(item.id, item.quantity - 1)}
                                >
                                  <Minus className="h-3 w-3" />
                                </Button>
                                <span className="text-sm w-8 text-center">{item.quantity}</span>
                                <Button
                                  variant="outline"
                                  size="icon"
                                  className="h-6 w-6"
                                  onClick={() => updateQuantity(item.id, item.quantity + 1)}
                                >
                                  <Plus className="h-3 w-3" />
                                </Button>
                                <Button
                                  variant="ghost"
                                  size="icon"
                                  className="h-6 w-6 ml-auto"
                                  onClick={() => removeFromCart(item.id)}
                                >
                                  <X className="h-3 w-3" />
                                </Button>
                              </div>
                            </div>
                          </div>
                        ))}
                      </div>
                    </ScrollArea>

                    <div className="space-y-4 pt-4 border-t">
                      <div className="space-y-3">
                        <h3 className="font-semibold">Customer Information</h3>
                        <div className="space-y-2">
                          <div>
                            <Label htmlFor="name">Name *</Label>
                            <Input
                              id="name"
                              value={customerInfo.name}
                              onChange={(e) => setCustomerInfo(prev => ({ ...prev, name: e.target.value }))}
                              placeholder="Your full name"
                            />
                          </div>
                          <div>
                            <Label htmlFor="phone">Phone *</Label>
                            <Input
                              id="phone"
                              value={customerInfo.phone}
                              onChange={(e) => setCustomerInfo(prev => ({ ...prev, phone: e.target.value }))}
                              placeholder="Your phone number"
                            />
                          </div>
                          <div>
                            <Label htmlFor="address">Address (Optional)</Label>
                            <Input
                              id="address"
                              value={customerInfo.address}
                              onChange={(e) => setCustomerInfo(prev => ({ ...prev, address: e.target.value }))}
                              placeholder="Your delivery address"
                            />
                          </div>
                        </div>
                      </div>

                      <Separator />

                      <div className="flex justify-between items-center text-lg font-semibold">
                        <span>Total:</span>
                        <span>₹{totalPrice.toFixed(2)}</span>
                      </div>

                      <Button className="w-full bg-green-500 text-white cursor-pointer" size="lg" onClick={handlePlaceOrder}>
                        <MessageCircle className="h-4 w-4 mr-2 " />
                        Place Order via WhatsApp
                      </Button>
                    </div>
                  </>
                )}
              </CardContent>
            </Card>
          </div>
        </div>
      )}

     
    </>
  );
};

export default FloatingCart;
