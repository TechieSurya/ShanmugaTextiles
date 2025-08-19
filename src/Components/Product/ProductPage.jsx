import React, { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import { Heart, Minus, Plus, Truck } from "lucide-react";
import { FaStar } from "react-icons/fa";
import { FaRegStar } from "react-icons/fa";
import { FaWhatsapp, FaInstagram } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { IoMdClose } from "react-icons/io";
import { FaShareAlt } from "react-icons/fa";
import saree1 from "../../assets/Sarees/MysoreSilk/IMG_1255.jpg";
import saree2 from "../../assets/Sarees/MysoreSilk/IMG_1256.jpg";
import saree3 from "../../assets/Sarees/MysoreSilk/IMG_1257.jpg";
import saree4 from "../../assets/Sarees/MysoreSilk/IMG_1258.jpg";
import { Dialog } from "@headlessui/react";
import { X } from "lucide-react";
import { Button } from "/src/Components/ui/button";
import { ShoppingCart } from "lucide-react";
import { toast } from "../../hooks/use-toast";
import { useCart } from "../../contexts/CartContext";
import FloatingCart from "./FloatingCart";
import { doc, getDoc, collection, query, where, getDocs } from "firebase/firestore";
import { db } from "/src/firebase";

const ProductPage = () => {
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const [relatedProducts, setRelatedProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [quantity, setQuantity] = useState(1);
  const [showPopup, setShowPopup] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const [form, setForm] = useState({
    name: "",
    phone: "",
    email: "",
    message: "",
  });
  const [showForm, setShowForm] = useState(false);
  const [review, setReview] = useState({
    rating: 0,
    title: "",
    comment: "",
    name: "",
    email: "",
    image: null,
  });
  const [showFormReview, setShowFormReview] = useState(false);
  const [rating, setRating] = useState(0);
  const [hover, setHover] = useState(null);

  const [open, setOpen] = useState(false);

  const [selectedImage, setSelectedImage] = useState("");

  useEffect(() => {
  if (product?.images?.length > 0) {
    setSelectedImage(product.images[0]);
  }
}, [product]);

useEffect(() => {
  const fetchRelatedProducts = async () => {
    try {
      // Example: fetch products from the same category
      const productsRef = collection(db, "products");
      const q = query(productsRef, where("category", "==", product.category));
      const querySnapshot = await getDocs(q);

      const productsList = querySnapshot.docs
        .map(doc => ({ id: doc.id, ...doc.data() }))
        .filter(p => p.id !== id); // Remove current product

      setRelatedProducts(productsList);
    } catch (error) {
      console.error("Error fetching related products:", error);
    }
  };

  if (product?.category) {
    fetchRelatedProducts();
  }
}, [product, id]);




   useEffect(() => {
    const fetchProduct = async () => {
      try {
        const docRef = doc(db, "products", id); // "products" is your Firestore collection name
        const docSnap = await getDoc(docRef);

        if (docSnap.exists()) {
          setProduct({ id: docSnap.id, ...docSnap.data() });
        } else {
          console.error("No such product!");
        }
      } catch (error) {
        console.error("Error fetching product:", error);
      } finally {
        setLoading(false);
      }
    };

    if (id) {
      fetchProduct();
    }
  }, [id]);

  if (loading) {
    return <p className="text-center text-lg">Loading...</p>;
  }

   if (!product) {
    return <p className="text-center text-red-500">Product not found.</p>;
  }

  
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Submitted form:", form);
    // Optional: Add API call or toast here
    setShowPopup(false);
    setForm({ name: "", phone: "", email: "", message: "" });
  };

  

  const handleImageUpload = (e) => {
    const file = e.target.files[0];
    setReview({ ...review, image: file });
  };

  
  const link = window.location.href;

  const copyToClipboard = () => {
    navigator.clipboard.writeText(link);
    alert("Link copied to clipboard!");
  };

  
  const { addToCart } = useCart();

  const handleAdd = () => {
    addToCart(product, 1);
    toast({
      title: `${product.title} added to cart`,
      description: `Price: $${product.price}`,
    });
  };
  
  

  return (
    <div>
      <div className="max-w-7xl mx-auto p-4 mt-5 grid md:grid-cols-2 gap-10">
        {/* Left - Image */}
        <div className="flex flex-col lg:flex-row gap-4">
          {/* Thumbnails */}
         <div className="flex lg:flex-col gap-2">
       {product.images.map((img, index) => (
       <img
       key={index}
        src={img}
        alt={`Thumb ${index}`}
        onClick={() => setSelectedImage(img)}
        className={`w-42 h-36 object-cover cursor-pointer border-2 ${
        selectedImage === img ? "border-blue-500" : "border-transparent"
      } rounded-md`}
    />
  ))}
</div>

          {/* Main Image */}
          <div className="flex justify-center items-center">
            <img
              src={selectedImage}
              alt="Selected Saree"
              className="w-[650px] h-full object-cover rounded cursor-pointer shadow-xl"
              onClick={() => setIsOpen(true)}
            />
          </div>

          {/* Fullscreen Modal */}
          <Dialog
            open={isOpen}
            onClose={() => setIsOpen(false)}
            className="relative z-50"
          >
            <div className="fixed inset-0 bg-black/70 flex items-center justify-center">
              <Dialog.Panel className="relative">
                <img
                  src={selectedImage}
                  alt="Full View"
                  className="max-h-[90vh] rounded shadow-lg"
                />
                <button
                  onClick={() => setIsOpen(false)}
                  className="absolute top-2 right-2 text-white bg-black/50 p-1 rounded"
                >
                  <X size={24} />
                </button>
              </Dialog.Panel>
            </div>
          </Dialog>
        </div>

        {/* Right - Details */}
        <div className="space-y-4">
          <h1 className="text-xl font-semibold text-green-800">
            {product.title}
          </h1>
          <p className="mt-4 text-justify">{product.description}</p>
          <p className="text-green-700 text-xl font-bold">
            Rs.{product.price}{" "}
            <span className="line-through text-gray-500 text-base ml-2">
              Rs. {product.originalPrice}
            </span>
          </p>

          {/* Quantity Selector */}
          <div className="flex items-center gap-3">
            <button
              onClick={() => setQuantity((prev) => Math.max(1, prev - 1))}
              className="p-2 bg-gray-200 rounded"
            >
              <Minus size={18} />
            </button>
            <span>{quantity}</span>
            <button
              onClick={() => setQuantity((prev) => prev + 1)}
              className="p-2 bg-gray-200 rounded"
            >
              <Plus size={18} />
            </button>
          </div>

          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row gap-3">
            <Button
              className=" mt-3 flex items-center justify-center px-4 py-4 text-sm 
          font-medium text-white bg-green-800 hover:bg-green-700 rounded cursor-pointer"
              onClick={handleAdd}
            >
              <ShoppingCart className="w-4 h-4 mr-2" />
              Add to Cart
            </Button>
          </div>

          

          {/* Disclaimer */}
          <p className="text-xs text-gray-600">
            <strong>Disclaimer:</strong> Product color may slightly vary due to
            photographic lighting sources or your monitor settings
          </p>

          {/* Delivery Info */}
          <div className="flex items-start gap-2 mt-2">
            <Truck className="text-green-700 mt-1" size={18} />
            <div className="text-sm text-gray-700">
              <p>
                <strong>Estimated Delivery:</strong> Aug 21 - 25
              </p>
              <p className="text-xs mt-1 text-gray-500">
                Return & Replacements within 5 days of purchase for product
                damages only
                <br />
              </p>
            </div>
          </div>

          {/* Accordion Sections */}
          <div className="mt-6 border-t divide-y">
            <details className="py-3 cursor-pointer">
              <summary className="font-semibold text-sm text-green-700">
                Product Specification
              </summary>
             <p className="mt-4 text-justify">{product.specifications}</p>
            </details>

            <details className="py-3 cursor-pointer">
              <summary className="font-semibold text-sm text-green-700">
                Shipping
              </summary>
              <p className="text-sm mt-2 text-gray-700">
                We usually dispatch within 24–48 hours of order confirmation.
              </p>
            </details>

            <details className="py-3 cursor-pointer">
              <summary className="font-semibold text-sm text-green-700">
                Replacements & Exchanges
              </summary>
              <p className="text-sm mt-2 text-gray-700">
                Products can be returned/exchanged within 5 days if they arrive
                damaged or defective.
              </p>
            </details>
          </div>
        </div>
      </div>

      {/* customer review */}

      <div className="max-w-2xl mx-auto p-6 bg-white rounded shadow">
        <h2 className="text-center text-xl font-semibold mb-6">
          Customer Reviews
        </h2>

        {/* Review Summary */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="flex items-center gap-2 text-green-900">
            {[...Array(5)].map((_, index) => (
              <FaRegStar key={index} />
            ))}
            <span className="text-gray-700 ml-2">
              Be the first to write a review
            </span>
          </div>

          <button
            onClick={() => setShowFormReview(!showForm)}
            className="bg-green-900 cursor-pointer text-white px-5 py-2 font-semibold rounded hover:bg-green-800"
          >
            {showForm ? "Cancel review" : "Write a review"}
          </button>
        </div>

        {/* Review Form */}
        {showFormReview && (
          <div className="mt-10 space-y-6 border-t pt-6">
            <h3 className="text-lg font-bold">Write a review</h3>

            {/* Rating */}
            <div>
              <p className="mb-1 font-medium">Rating</p>
              <div className="flex space-x-1 text-green-900">
                {[...Array(5)].map((_, index) => {
                  const starValue = index + 1;
                  return (
                    <span
                      key={index}
                      onClick={() => setRating(starValue)}
                      onMouseEnter={() => setHover(starValue)}
                      onMouseLeave={() => setHover(null)}
                      className="cursor-pointer"
                    >
                      {starValue <= (hover || rating) ? (
                        <FaStar />
                      ) : (
                        <FaRegStar />
                      )}
                    </span>
                  );
                })}
              </div>
            </div>

            {/* Title */}
            <input
              type="text"
              placeholder="Give your review a title"
              className="w-full border px-3 py-2 rounded text-sm"
            />

            {/* Comment */}
            <textarea
              placeholder="Write your comments here"
              rows="4"
              className="w-full border px-3 py-2 rounded text-sm"
            ></textarea>

            {/* Image Upload */}
            <div className="text-center">
              <p className="text-sm text-gray-600 mb-2">
                Picture/Video (optional)
              </p>
              <label className="inline-block border border-dashed border-gray-400 p-6 rounded cursor-pointer hover:bg-gray-50">
                <input type="file" className="hidden" />
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6 mx-auto text-gray-500"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M12 4v16m8-8H4"
                  />
                </svg>
              </label>
            </div>

            {/* Name and Email */}
            <input
              type="text"
              placeholder="Enter your name (public)"
              className="w-full border px-3 py-2 rounded text-sm"
            />
            <input
              type="email"
              placeholder="Enter your email (private)"
              className="w-full border px-3 py-2 rounded text-sm"
            />

            {/* Policy Text */}
            <p className="text-xs text-gray-600 mt-2">
              How we use your data: We’ll only contact you about the review you
              left, and only if necessary. By submitting your review, you agree
              to our terms, privacy, and content policies.
            </p>

            {/* Buttons */}
            <div className="flex justify-end gap-4">
              <button
                onClick={() => setShowFormReview(false)}
                className="px-4 py-2 border border-gray-400 rounded text-sm hover:bg-gray-100"
              >
                Cancel review
              </button>
              <button className="px-4 py-2 bg-green-900 text-white rounded text-sm hover:bg-green-800">
                Submit Review
              </button>
            </div>
          </div>
        )}
      </div>
      {/* Related Products Section */}
      <div className="max-w-7xl mx-auto p-4 mt-10">
        <h2 className="text-lg font-bold mb-4 text-green-800">Related Products</h2>
        {relatedProducts.length > 0 ? (
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {relatedProducts.map(rp => (
              <Link
                to={`/products/${rp.id}`}
                key={rp.id}
                onClick={()=>window.scrollTo(0,0)}
                className="border-green-800 border-2 shadow-2xl rounded-lg p-3 hover:shadow-lg transition"
              >
                <img
                  src={rp.images?.[0]}
                  alt={rp.title}
                  className="w-full h-48 object-cover rounded"
                />
                <h3 className="mt-2 text-sm font-semibold">{rp.title}</h3>
                <p className="text-justify">
                  {rp.description.length > 50
                      ? rp.description.slice(0, 60) + "..."
                      : rp.description}
                </p>
                <p className="text-green-700 font-bold">Rs.{rp.price}
                  <span className="line-through text-gray-500 text-base ml-2">
                    Rs. {rp.originalPrice}
                  </span>
                </p>
              </Link>
            ))}
          </div>
        ) : (
          <p className="text-gray-500">No related products found.</p>
        )}
      </div>

      <FloatingCart />
    </div>
  );
};

export default ProductPage;
