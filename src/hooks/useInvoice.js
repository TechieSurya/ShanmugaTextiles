import { useState, useCallback } from "react";

export const useInvoice = () => {
  const [currentInvoice, setCurrentInvoice] = useState(null);
  const [invoiceHistory, setInvoiceHistory] = useState([]);

  const generateInvoiceNumber = useCallback(() => {
    const date = new Date();
    const year = date.getFullYear();
    const month = String(date.getMonth() + 1).padStart(2, '0');
    const day = String(date.getDate()).padStart(2, '0');
    const time = String(Date.now()).slice(-4);
    return `INV-${year}${month}${day}-${time}`;
  }, []);

  const formatDate = useCallback((date) => {
    return date.toLocaleDateString('en-US', {
      day: '2-digit',
      month: 'short',
      year: 'numeric'
    });
  }, []);

  const generateInvoice = useCallback((items, customer, discount = 0) => {
    const invoiceItems = items.map(item => ({
      ...item,
      amount: item.quantity * item.price
    }));

    const subtotal = invoiceItems.reduce((sum, item) => sum + item.amount, 0);
    const total = subtotal - discount;

    const invoiceDate = new Date();
    const dueDate = new Date();
    dueDate.setDate(dueDate.getDate() + 30); // 30 days due date

    const invoice = {
      invoiceNumber: generateInvoiceNumber(),
      invoiceDate: formatDate(invoiceDate),
      dueDate: formatDate(dueDate),
      customer,
      items: invoiceItems,
      subtotal,
      discount,
      total
    };

    setCurrentInvoice(invoice);
    setInvoiceHistory(prev => [invoice, ...prev]);

    return invoice;
  }, [generateInvoiceNumber, formatDate]);

  const printInvoice = useCallback(() => {
    window.print();
  }, []);

  const clearCurrentInvoice = useCallback(() => {
    setCurrentInvoice(null);
  }, []);

  return {
    currentInvoice,
    invoiceHistory,
    generateInvoice,
    printInvoice,
    clearCurrentInvoice
  };
};
