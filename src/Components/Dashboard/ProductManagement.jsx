import React, { useState, useRef, useEffect } from "react";
import ProductForm from "./ProductForm";
import ProductCard from "./ProductCard";
import { Plus, Filter, Grid, List, Search, Package,Eye, Edit, Trash2, Upload, X } from "lucide-react";
import {  Select,
  SelectTrigger,
  SelectValue,
  SelectContent,
  SelectItem,
  SelectGroup,
  SelectLabel } from "/src/Components/ui/select";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "../../Components/ui/dialog";
import { Button } from "../../Components/ui/button";
import { Input } from "../../Components/ui/input";
import { Label } from "../../Components/ui/label";
import { Textarea } from "../../Components/ui/textarea";
import { Badge } from "../../Components/ui/badge";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "../../Components/ui/card";

import {
  getFirestore,
  collection,
  getDocs,
  addDoc,
  deleteDoc,
  updateDoc,
  doc,
  Timestamp,
} from "firebase/firestore";
import { getStorage, ref, uploadBytes, getDownloadURL } from "firebase/storage";
import { app } from "../../firebase";


const db = getFirestore(app);
const storage = getStorage(app);

const categoryData = [
    {
    name: "Sarees",
   
    submenu: [
      { name: "Cotton Saree", path: "/sarees/cotton-saree" },
      { name: "Silk Sarees", path: "/sarees/silk-sarees" },
      { name: "Mysore Silk Cotton", path: "/sarees/Mysore-Silk-Cotton" },
      { name: "Saree Combo Offer", path: "/sarees/Saree-Combo-Offer" },
    ],
  },
  {
    name: "Kurtis & Sets",
    
    submenu: [
      { name: "Kurti with Pants", path: "/kurtis-sets/kurtis-pants" },
      { name: "Kurti Reliance Brand", path: "/kurtis-sets/kurti-reliance-brand" },
      { name: "Plazzo Set", path: "/kurtis-sets/plazzo-set" },
    ],
  },
  {
    name: "Maxi Dresses",
    path: "/maxi-dresses",
    submenu: [
      { name: "Bittu Maxi", path: "/women/kurti-maxi" },
      { name: "Maxi", path: "/women/maxi-tops" },
    ],
  },
  {
    name: "Tops & Tees",
    path: "/tops",
    submenu: [
      { name: "Cotton Top", path: "/women/cotton-top" },
      { name: "Digital Top", path: "/women/digital-top" },
      { name: "Western Top", path: "/women/western-top" },
      { name: "T-Shirt", path: "/women/t-shirt" },
      { name: "Jeggings", path: "/women/jeggings" },
    ],
  },
  {
    name: "Night Wear",
    path: "/night-wear",
    submenu: [
      { name: "Night Wear", path: "/women/night-wear" },
      { name: "Nighty", path: "/women/nighty" },
    ],
  },
  {
    name: "Blouse",
    submenu:[
      { name: "Readymade Blouse", path: "/blouse" },
    ]
  },

  {
    name: "Kids Wear",
    path: "/kids",
     submenu: [
      { name: "Kid Frock", path: "/kids/kid-frock" },
      { name: "Kid Cotton Top", path: "/kids/kid-cotton-top" },
      { name: "Kid 3 Piece", path: "/kids/kid-3-piece" },
      { name: "Kid Leggings", path: "/kids/kid-leggings" },
      { name: "Shirt & Jean", path: "/kids/jean-shirt" },
    ],
  }, 
];

const subCategory =[
  {name:"None"},
  {name:"Best of Shanmuga"},
  {name:"Exclusive"},
]


const ProductManagement = () => {
  
  const [products, setProducts] = useState([]);
  const [filteredProducts, setFilteredProducts]=useState([]);

 const [isDialogOpen, setIsDialogOpen] = useState(false);
 const [editingProduct, setEditingProduct] = useState(null);
 const [formData, setFormData] = useState({
     title: "",
     description: "",
     price: "",
     originalPrice: "",
     category: "",
     subCategory: "",
     status:"",
     specifications:"",
   });
 const [imageFiles, setImageFiles] = useState([]);
 const [imagePreviews, setImagePreviews] = useState([]);
 const [viewMode, setViewMode]=useState("grid");
 const [searchTerm, setSearchTerm] = useState("");
 const [statusFilter, setStatusFilter] = useState("all");
 const [categoryFilter, setCategoryFilter] = useState("all");

 //Filtered products based on  Search and Filters
 const filterProducts=()=>{
  let filtered = products;

  if(searchTerm)
  {
    filtered=filtered.filter(product =>
      product.title.toLowerCase().includes(searchTerm.toLowerCase())||
      product.description.toLowerCase().includes(searchTerm.toLowerCase())
    );
  }

  if(statusFilter!=="all"){
    filtered=filtered.filter(product => product.status===statusFilter);
  }

  if(categoryFilter!=="all"){
    filtered=filtered.filter(product => product.category===categoryFilter);
  }
  setFilteredProducts(filtered);
 }

 useEffect(() => {
     filterProducts();
     const fetchSlides = async () => {
       const querySnapshot = await getDocs(collection(db, "products"));
       const productsData = [];
       querySnapshot.forEach((doc) =>
         productsData.push({ id: doc.id, ...doc.data() })
       );
       setProducts(productsData);
     };
     fetchSlides();
   }, [searchTerm, statusFilter, categoryFilter, products]);

 const resetForm = () => {
    setFormData({
     title: "",
     description: "",
     price: "",
     originalPrice: "",
     category: "",
     subCategory:"",
     status:"",
     specifications:"",
    });
    setImageFiles(null);
    setImagePreviews(null);
    setEditingProduct(null);
  };

  const handleInputChange = (key, value) => {
    setFormData((prev) => ({ ...prev, [key]: value }));
  };

  const handleFileUpload = (e) => {
  const files = Array.from(e.target.files || []);
  if (!files.length) return;

  const previews = files.map(file => URL.createObjectURL(file));

  setImageFiles(prev => Array.isArray(prev) ? [...prev, ...files] : [...files]);
  setImagePreviews(prev => Array.isArray(prev) ? [...prev, ...previews] : [...previews]);
};

  const removeImage = (index) => {
  setImageFiles(prev => prev.filter((_, i) => i !== index));
  setImagePreviews(prev => prev.filter((_, i) => i !== index));
};

 const uploadImages = async (files) => {
  const uploadPromises = files.map(async (file) => {
    const storageRef = ref(storage, `products/${Date.now()}_${file.name}`);
    await uploadBytes(storageRef, file);
    return await getDownloadURL(storageRef);
  });
  return Promise.all(uploadPromises);
};  
 
  const handleSubmit = async (e) => {
  e.preventDefault();

  try {
    // Upload new images if any
    let uploadedImageUrls = [];
    if (imageFiles && imageFiles.length > 0) {
      uploadedImageUrls = await uploadImages(imageFiles);
    }

    // If editing, keep old URLs too
    if (editingProduct && Array.isArray(imagePreviews)) {
      uploadedImageUrls = [
        ...uploadedImageUrls,
        ...imagePreviews.filter((p) => p.startsWith("https")) // keep old permanent URLs only
      ];
    }

    const { title, description, price, originalPrice, category, subCategory, status, specifications } = formData;

    const productData = {
      title,
      description,
      price,
      originalPrice,
      category,
      subCategory,
      status,
      specifications,
      images: uploadedImageUrls, // store real URLs here
      updatedAt: Timestamp.now(),
    };

    if (editingProduct) {
      const docRef = doc(db, "products", editingProduct.id);
      await updateDoc(docRef, productData);
      setProducts((prev) =>
        prev.map((p) => p.id === editingProduct.id ? { ...p, ...productData } : p)
      );
    } else {
      const docRef = await addDoc(collection(db, "products"), {
        ...productData,
        createdAt: Timestamp.now(),
      });
      setProducts((prev) => [...prev, { id: docRef.id, ...productData }]);
    }

    setIsDialogOpen(false);
    resetForm();
  } catch (err) {
    console.error("Error Saving Product", err);
  }
};




const handleDelete=async(id)=>{
  await deleteDoc(doc(db, "products", id));

  setProducts((prev)=>prev.filter((s)=>s.id!==id));
}

const handleEdit = (product) => {
  setFormData({
    title: product.title || "",
    description: product.description || "",
    price: product.price || "",
    originalPrice: product.originalPrice || "",
    category: product.category || "",
    subCategory: product.subCategory || "",
    status: product.status || "",
    specifications: product.specifications || "",
  });

  // Handle multiple images correctly
  setImagePreviews(product.images || []);
  setImageFiles([]); // Reset file uploads unless you want to prefill them

  setEditingProduct(product);
  setIsDialogOpen(true);
};


  const handleViewProduct = (product) => {
    // In a real app, this would navigate to a detailed view
    toast({
      title: "Product Details",
      description: `Viewing details for: ${product.title}`,
    });
  };

  const handleSearch = (value) => {
    setSearchTerm(value);
    setTimeout(filterProducts, 100);
  };

  const handleStatusFilter = (value) => {
    setStatusFilter(value);
    setTimeout(filterProducts, 100);
  };

  const handleCategoryFilter = (value) => {
    setCategoryFilter(value);
    setTimeout(filterProducts, 100);
  };

  const categories = Array.from(new Set(products.map(p => p.category)));

 


  return (
          <div className="space-y-6">
        {/* Header */}
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
          <div>
            <h1 className="text-3xl font-bold text-foreground">Products</h1>
            <p className="text-muted-foreground">Manage your product inventory</p>
          </div>
          <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
                    <DialogTrigger asChild>
                      <Button onClick={resetForm}>
                        <Plus className="h-4 w-4 mr-2" />
                        Add Product
                      </Button>
                    </DialogTrigger>
                    <DialogContent aria-describedby={undefined} className="max-w-2xl max-h-[90vh] overflow-y-auto bg-white">
                      <DialogHeader>
                        <DialogTitle>
                          {editingProduct ? "Update Product" : "Add New Product"}
                        </DialogTitle>
                     </DialogHeader>
                    <form onSubmit={handleSubmit} className="space-y-6">
            {/* Basic Information */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <div>
                  <Label htmlFor="title">Product Title</Label>
                  <Input
                    id="title"
                    value={formData.title}
                    onChange={(e) => handleInputChange("title", e.target.value)}
                    placeholder="Enter product title"
                    required
                  />
                </div>

                <div>
                  <Label htmlFor="category">Category</Label>
                  <Select value={formData.category} onValueChange={(value) => handleInputChange("category", value)}>
                    <SelectTrigger>
                      <SelectValue placeholder="Select category" />
                    </SelectTrigger>
                    <SelectContent>
                      {categoryData.map((category) => (
                        <SelectGroup key={category.name}>
                          <SelectLabel>{category.name}</SelectLabel>

                          {category.submenu &&
                            category.submenu.map((sub) => (
                              <SelectItem
                                key={`${category.name}-${sub.name}`}
                                value={`${category.name} > ${sub.name}`}
                              >
                                {sub.name}
                              </SelectItem>
                            ))}

                          {category.sections &&
                            category.sections.map((section) => (
                              <React.Fragment key={section.title}>
                                <SelectLabel>— {section.title}</SelectLabel>
                                {section.items.map((item) => (
                                  <SelectItem
                                    key={`${category.name}-${section.title}-${item.name}`}
                                    value={`${category.name} > ${section.title} > ${item.name}`}
                                  >
                                    {item.name}
                                  </SelectItem>
                                ))}
                              </React.Fragment>
                            ))}
                        </SelectGroup>
                      ))}
                    </SelectContent>
                  </Select>
                </div>
                
                

                <div>
                  <Label htmlFor="status">Status</Label>
                  <Select value={formData.status} onValueChange={(value) =>
                    setFormData(prev => ({ ...prev, status: value }))
                  }>
                    <SelectTrigger>
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="draft">Draft</SelectItem>
                      <SelectItem value="active">Active</SelectItem>
                      <SelectItem value="archived">Archived</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>

              <div className="space-y-4">
                <div>
                  <Label htmlFor="price">Price (₹)</Label>
                  <Input
                    id="price"
                    type="number"
                    step="0.01"
                    value={formData.price}
                    onChange={(e) => handleInputChange("price", e.target.value)}
                    placeholder="0.00"
                    required
                  />
                </div>

                <div>
                  <Label htmlFor="originalPrice">Original Price (₹)</Label>
                  <Input
                    id="originalPrice"
                    type="number"
                    step="1"
                    value={formData.originalPrice}
                    onChange={(e) => handleInputChange("originalPrice", e.target.value)}
                    placeholder="0.00"
                  />
                </div>
                <div>
                <Label htmlFor="subCategory">Subcategory</Label>
                <Select
                value={formData.subCategory}
                onValueChange={(value) => handleInputChange("subCategory", value)}
                >
                <SelectTrigger>
                <SelectValue placeholder="Select subcategory" />
                </SelectTrigger>
                <SelectContent>
                {subCategory.map((sub) => (
                <SelectItem key={sub.name} value={sub.name}>
                  {sub.name}
                </SelectItem>
                ))}
              </SelectContent>
          </Select>
          </div>
              </div>
            </div>

            {/* Description */}
            <div>
              <Label htmlFor="description">Description</Label>
              <Textarea
                id="description"
                value={formData.description}
                onChange={(e) => handleInputChange("description", e.target.value)}
                placeholder="Enter product description"
                rows={4}
                required
              />
            </div>
            {/* Specifications */}
            <div>
              <Label htmlFor="specifications">Specifications</Label>
              <Textarea
                id="specifications"
                value={formData.specifications}
                onChange={(e) => handleInputChange("specifications", e.target.value)}
                placeholder="Enter Product Specifications"
                rows={4}
                required
              />
            </div>

            {/* Images */}
           <div>
  <Label>Product Images</Label>
  <div className="space-y-4">
    {/* Upload Button */}
    <div className="flex items-center gap-4">
      <Button
        type="button"
        variant="outline"
        onClick={() => document.getElementById("image-upload").click()}
      >
        <Upload className="h-4 w-4" />
        {Array.isArray(imageFiles) && imageFiles.length > 0
          ? "Add More Images"
          : "Upload Images"}
      </Button>
      <input
        id="image-upload"
        type="file"
        accept="image/*"
        multiple
        className="hidden"
        onChange={handleFileUpload}
      />
    </div>

    {/* Previews */}
    {Array.isArray(imagePreviews) && imagePreviews.length > 0 ? (
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        {imagePreviews.map((preview, index) => (
          <div key={index} className="relative border rounded overflow-hidden">
            <img
              src={preview}
              alt={`Preview ${index}`}
              className="w-full h-32 object-cover"
            />
            <Button
              type="button"
              size="icon"
              variant="destructive"
              className="absolute top-1 right-1 h-6 w-6"
              onClick={() => removeImage(index)}
            >
              <X className="h-3 w-3" />
            </Button>
          </div>
        ))}
      </div>
    ) : (
      <div className="border-2 border-dashed p-8 text-center rounded">
        <Upload className="h-8 w-8 mx-auto mb-2 text-muted-foreground" />
        <p className="text-sm text-muted-foreground">
          Click "Upload Images" to select files
        </p>
      </div>
    )}
  </div>
</div>
              {/* Form Actions */}
            <div className="flex gap-4 pt-6">
              <Button type="submit" className="flex-1">
                {editingProduct ? "Update Product" : "Create Product"}
              </Button>
              <Button type="button" variant="outline" onClick={()=>setIsDialogOpen(false)} className="flex-1">
                Cancel
              </Button>
            </div>
          </form>
               </DialogContent>
            </Dialog>
        </div>

        

        {/* Filters and Search */}
        <div className="flex flex-col lg:flex-row gap-4 bg-card p-4 rounded-lg border">
          <div className="flex-1">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground h-4 w-4" />
              <Input
                placeholder="Search products..."
                value={searchTerm}
                onChange={(e) => handleSearch(e.target.value)}
                className="pl-10"
              />
            </div>
          </div>

          <div className="flex flex-col sm:flex-row gap-2">
            <Select value={statusFilter} onValueChange={handleStatusFilter}>
              <SelectTrigger className="w-full sm:w-32">
                <SelectValue placeholder="Status" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">All Status</SelectItem>
                <SelectItem value="active">Active</SelectItem>
                <SelectItem value="draft">Draft</SelectItem>
                <SelectItem value="archived">Archived</SelectItem>
              </SelectContent>
            </Select>

            <Select value={categoryFilter} onValueChange={handleCategoryFilter}>
              <SelectTrigger className="w-full sm:w-40">
                <SelectValue placeholder="Category" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">All Categories</SelectItem>
                {categories.map(category => (
                  <SelectItem key={category} value={category}>
                    {category}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>

            
          </div>
        </div>

        {/* Results Header */}
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <span className="text-sm text-muted-foreground">
              Showing {filteredProducts.length} of {products.length} products
            </span>
            {(searchTerm || statusFilter !== "all" || categoryFilter !== "all") && (
              <Badge variant="secondary">Filtered</Badge>
            )}
          </div>
        </div>

        {/* Products Grid/List */}
        {filteredProducts.length === 0 ? (
          <div className="text-center py-12">
            <div className="text-muted-foreground mb-4">
              <Package className="mx-auto h-12 w-12 mb-4" />
              <h3 className="text-lg font-medium">No products found</h3>
              <p>Try adjusting your search or filters</p>
            </div>
            <Button onClick={() => setIsDialogOpen(true)}>
              <Plus className="mr-2 h-4 w-4" />
              Add Your First Product
            </Button>
          </div>
        ) : (
          <div className={
            viewMode === "grid" 
              ? "grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6"
              : "space-y-4"
          }>
            {filteredProducts.map((product) => (
              <ProductCard
  key={product.id}
  product={product}
  onEdit={(product) => {
    setEditingProduct(product);

    // Fill form fields with product data
    setFormData({
      title: product.title || "",
      description: product.description || "",
      price: product.price || "",
      originalPrice: product.originalPrice || "",
      category: product.category || "",
      subCategory:product.subCategory || "",
      status: product.status || "draft",
      specifications: product.specifications || [],
    });

    // Set existing images so they preview
    setImagePreviews(product.images || []);

    setIsDialogOpen(true);
  }}
  onDelete={handleDelete}
  onView={handleViewProduct}
/>

            ))}
          </div>
        )}
      </div>
    
  );
};

export default ProductManagement;
