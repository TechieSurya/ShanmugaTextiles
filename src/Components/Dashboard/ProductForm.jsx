import React, { useState } from "react"; // ✅ Added React import
import { Plus, X, Upload, Trash2 } from "lucide-react";
import { Button } from "/src/Components/ui/button";
import { Input } from "../../Components/ui/input";
import { Label } from "../../Components/ui/label";
import { Textarea } from "../../Components/ui/textarea";
import {
  Select,
  SelectTrigger,
  SelectValue,
  SelectContent,
  SelectItem,
  SelectGroup,
  SelectLabel
} from "../../Components/ui/select";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "../../Components/ui/card";
import { storage, db } from "../../firebase";
import { collection, addDoc, updateDoc, doc } from "firebase/firestore";
import { ref, uploadBytes, getDownloadURL } from "firebase/storage";

const ProductForm = ({ initialData, onCancel, isEditing = false, productId }) => {
  const [formData, setFormData] = useState({
    title: initialData?.title || "",
    description: initialData?.description || "",
    price: initialData?.price || 0,
    originalPrice: initialData?.originalPrice || 0,
    category: initialData?.category || "",
    status: initialData?.status || "draft",
    images: initialData?.images || [],
    specifications: initialData?.specifications || {},
  });

  const [newSpecKey, setNewSpecKey] = useState("");
  const [newSpecValue, setNewSpecValue] = useState("");
  const [uploading, setUploading] = useState(false);

  // Category data
  const categoryData = [
    {
      name: "Sarees",
      submenu: [
        { name: "Cotton Saree" },
        { name: "Silk Sarees" },
        { name: "Mysore Silk Cotton" },
        { name: "Saree Combo Offer" },
      ],
    },
    {
      name: "Women Wear",
      submenu: [
        { name: "Kurti with Pants" },
        { name: "Bittu Maxi" },
        { name: "Kurti- Reliance Brand" },
        { name: "Plazzo Set" },
        { name: "Cotton Top" },
        { name: "Digital Top" },
        { name: "Western Top" },
        { name: "T-Shirt" },
        { name: "Maxi" },
        { name: "Jeggings" },
        { name: "Night Wear" },
        { name: "Nighty" },
      ],
    },
    { name: "Blouse" },
    {
      name: "Kids Wear",
      sections: [
        {
          title: "Girl Kid",
          items: [
            { name: "Kid Frock" },
            { name: "Kid Cotton Top" },
            { name: "Kid 3 Piece" },
            { name: "Kid Leggings" },
          ],
        },
        {
          title: "Boy Kid",
          items: [
            { name: "Shirt & Jean" },
          ],
        },
      ],
    },
  ];

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      if (isEditing && productId) {
        await updateDoc(doc(db, "products", productId), formData);
      } else {
        await addDoc(collection(db, "products"), {
          ...formData,
          createdAt: new Date(),
        });
      }
      alert("✅ Product saved successfully!");
      setFormData({
        title: "",
        description: "",
        price: 0,
        originalPrice: 0,
        category: "",
        status: "draft",
        images: [],
        specifications: {},
      });
    } catch (error) {
      console.error("Error saving product:", error);
      alert("❌ Failed to save product");
    }
  };

  const addSpecification = () => {
    if (newSpecKey && newSpecValue) {
      setFormData(prev => ({
        ...prev,
        specifications: {
          ...prev.specifications,
          [newSpecKey]: newSpecValue
        }
      }));
      setNewSpecKey("");
      setNewSpecValue("");
    }
  };

  const removeSpecification = (key) => {
    setFormData(prev => ({
      ...prev,
      specifications: Object.fromEntries(
        Object.entries(prev.specifications).filter(([k]) => k !== key)
      )
    }));
  };

 const handleImageUpload = async (e) => {
  const files = Array.from(e.target.files);
  if (!files.length) return;
  setUploading(true);

  try {
    const uploadedURLs = await Promise.all(
      files.map(async (file) => {
        const storageRef = ref(storage, `products/${Date.now()}-${file.name}`);
        await uploadBytes(storageRef, file);
        return await getDownloadURL(storageRef);
      })
    );

    setFormData(prev => ({
      ...prev,
      images: [...prev.images, ...uploadedURLs]
    }));
  } catch (err) {
    console.error("Image upload error:", err);
    alert("❌ Failed to upload one or more images");
  }

  setUploading(false);
};


  const removeImage = (index) => {
    setFormData(prev => ({
      ...prev,
      images: prev.images.filter((_, i) => i !== index)
    }));
  };

  return (
    <div className="max-w-4xl mx-auto">
      <Card>
        <CardHeader>
          <CardTitle>
            {isEditing ? "Edit Product" : "Add New Product"}
          </CardTitle>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleSubmit} className="space-y-6">
            {/* Basic Information */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <div>
                  <Label htmlFor="title">Product Title</Label>
                  <Input
                    id="title"
                    value={formData.title}
                    onChange={(e) => setFormData(prev => ({ ...prev, title: e.target.value }))}
                    placeholder="Enter product title"
                    required
                  />
                </div>

                <div>
                  <Label htmlFor="category">Category</Label>
                  <Select value={formData.category} onValueChange={(value) =>
                    setFormData(prev => ({ ...prev, category: value }))
                  }>
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
                    onChange={(e) => setFormData(prev => ({ ...prev, price: parseFloat(e.target.value) || 0 }))}
                    placeholder="0.00"
                    required
                  />
                </div>

                <div>
                  <Label htmlFor="originalPrice">Original Price (₹)</Label>
                  <Input
                    id="originalPrice"
                    type="number"
                    step="0.01"
                    value={formData.originalPrice}
                    onChange={(e) => setFormData(prev => ({ ...prev, originalPrice: parseFloat(e.target.value) || 0 }))}
                    placeholder="0.00"
                  />
                </div>
              </div>
            </div>

            {/* Description */}
            <div>
              <Label htmlFor="description">Description</Label>
              <Textarea
                id="description"
                value={formData.description}
                onChange={(e) => setFormData(prev => ({ ...prev, description: e.target.value }))}
                placeholder="Enter product description"
                rows={4}
                required
              />
            </div>

            {/* Images */}
            <div>
              <Label>Product Images</Label>
              <div className="space-y-4">
                <input type="file" accept="image/*" multiple onChange={handleImageUpload} />
                {uploading && <p className="text-sm text-gray-500">Uploading...</p>}

                {formData.images.length > 0 && (
                  <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                    {formData.images.map((image, index) => (
                      <div key={index} className="relative group">
                        <img
                          src={image}
                          alt={`Product ${index + 1}`}
                          className="w-full h-24 object-cover rounded border"
                        />
                        <Button
                          type="button"
                          size="icon"
                          variant="destructive"
                          className="absolute top-1 right-1 h-6 w-6 opacity-0 group-hover:opacity-100 transition-opacity"
                          onClick={() => removeImage(index)}
                        >
                          <X className="h-3 w-3" />
                        </Button>
                      </div>
                    ))}
                  </div>
                )}
              </div>
            </div>

            {/* Specifications */}
            <div>
              <Label>Specifications</Label>
              <div className="space-y-4">
                <div className="flex gap-2">
                  <Input
                    placeholder="Specification name"
                    value={newSpecKey}
                    onChange={(e) => setNewSpecKey(e.target.value)}
                  />
                  <Input
                    placeholder="Specification value"
                    value={newSpecValue}
                    onChange={(e) => setNewSpecValue(e.target.value)}
                  />
                  <Button type="button" onClick={addSpecification} size="icon">
                    <Plus className="h-4 w-4" />
                  </Button>
                </div>

                {Object.entries(formData.specifications).length > 0 && (
                  <div className="space-y-2">
                    {Object.entries(formData.specifications).map(([key, value]) => (
                      <div key={key} className="flex items-center justify-between p-3 bg-muted rounded">
                        <div>
                          <span className="font-medium">{key}:</span> {value}
                        </div>
                        <Button
                          type="button"
                          size="icon"
                          variant="ghost"
                          onClick={() => removeSpecification(key)}
                          className="h-6 w-6"
                        >
                          <Trash2 className="h-3 w-3" />
                        </Button>
                      </div>
                    ))}
                  </div>
                )}
              </div>
            </div>

            {/* Form Actions */}
            <div className="flex gap-4 pt-6">
              <Button type="submit" className="flex-1">
                {isEditing ? "Update Product" : "Create Product"}
              </Button>
              <Button type="button" variant="outline" onClick={onCancel} className="flex-1">
                Cancel
              </Button>
            </div>
          </form>
        </CardContent>
      </Card>
    </div>
  );
};

export default ProductForm;
