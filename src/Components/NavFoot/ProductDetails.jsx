import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

// blouse
import Img0724 from "../../assets/Blouse-Readymade/IMG_0724.jpg";
import Img0725 from "../../assets/Blouse-Readymade/IMG_0725.jpg";
import Img0730 from "../../assets/Blouse-Readymade/IMG_0730.jpg";
import Img0734 from "../../assets/Blouse-Readymade/IMG_0734.jpg";
import Img0735 from "../../assets/Blouse-Readymade/IMG_0735.jpg";
import Img0738 from "../../assets/Blouse-Readymade/IMG_0738.jpg";
import Img0739 from "../../assets/Blouse-Readymade/IMG_0739.jpg";
import Img0742 from "../../assets/Blouse-Readymade/IMG_0742.jpg";
import Img0744 from "../../assets/Blouse-Readymade/IMG_0744.jpg";
import Img0747 from "../../assets/Blouse-Readymade/IMG_0747.jpg";
import Img0749 from "../../assets/Blouse-Readymade/IMG_0749.jpg";
import Img0752 from "../../assets/Blouse-Readymade/IMG_0752.jpg";
import Img0753 from "../../assets/Blouse-Readymade/IMG_0753.jpg";
import Img0755 from "../../assets/Blouse-Readymade/IMG_0755.jpg";
import Img0758 from "../../assets/Blouse-Readymade/IMG_0758.jpg";
import Img0759 from "../../assets/Blouse-Readymade/IMG_0759.jpg";
import Img0760 from "../../assets/Blouse-Readymade/IMG_0760.jpg";
import Img0762 from "../../assets/Blouse-Readymade/IMG_0762.jpg";
import Img0763 from "../../assets/Blouse-Readymade/IMG_0763.jpg";
import Img0765 from "../../assets/Blouse-Readymade/IMG_0765.jpg";
import Img0767 from "../../assets/Blouse-Readymade/IMG_0767.jpg";

//cotton saree
import Img1127 from "/src/assets/Sarees/CottonSaree/IMG_1127.jpg";
import Img1128 from "/src/assets/Sarees/CottonSaree/IMG_1128.jpg";
import Img1129 from "/src/assets/Sarees/CottonSaree/IMG_1129.jpg";
import Img1130 from "/src/assets/Sarees/CottonSaree/IMG_1130.jpg";
import Img1131 from "/src/assets/Sarees/CottonSaree/IMG_1131.jpg";
import Img1133 from "/src/assets/Sarees/CottonSaree/IMG_1133.jpg";
import Img1134 from "/src/assets/Sarees/CottonSaree/IMG_1134.jpg";
import Img1135 from "/src/assets/Sarees/CottonSaree/IMG_1135.jpg";
import Img1136 from "/src/assets/Sarees/CottonSaree/IMG_1136.jpg";
import Img1137 from "/src/assets/Sarees/CottonSaree/IMG_1137.jpg";
import Img1138 from "/src/assets/Sarees/CottonSaree/IMG_1138.jpg";
import Img1139 from "/src/assets/Sarees/CottonSaree/IMG_1139.jpg";
import Img1140 from "/src/assets/Sarees/CottonSaree/IMG_1140.jpg";
import Img1141 from "/src/assets/Sarees/CottonSaree/IMG_1141.jpg";
import Img1142 from "/src/assets/Sarees/CottonSaree/IMG_1142.jpg";
import Img1143 from "/src/assets/Sarees/CottonSaree/IMG_1143.jpg";
import Img1144 from "/src/assets/Sarees/CottonSaree/IMG_1144.jpg";
import Img1145 from "/src/assets/Sarees/CottonSaree/IMG_1145.jpg";
import Img1146 from "/src/assets/Sarees/CottonSaree/IMG_1146.jpg";
import Img1147 from "/src/assets/Sarees/CottonSaree/IMG_1147.jpg";
import Img1148 from "/src/assets/Sarees/CottonSaree/IMG_1148.jpg";
import Img1149 from "/src/assets/Sarees/CottonSaree/IMG_1149.jpg";
import Img1150 from "/src/assets/Sarees/CottonSaree/IMG_1150.jpg";
import Img1151 from "/src/assets/Sarees/CottonSaree/IMG_1151.jpg";
import Img1152 from "/src/assets/Sarees/CottonSaree/IMG_1152.jpg";
import Img1153 from "/src/assets/Sarees/CottonSaree/IMG_1153.jpg";
import Img1154 from "/src/assets/Sarees/CottonSaree/IMG_1154.jpg";
import Img1155 from "/src/assets/Sarees/CottonSaree/IMG_1155.jpg";
import Img1156 from "/src/assets/Sarees/CottonSaree/IMG_1156.jpg";

// silk saree
import Img1221 from "/src/assets/Sarees/Saree/IMG_1221.jpg";
import Img1222 from "/src/assets/Sarees/Saree/IMG_1222.jpg";
import Img1223 from "/src/assets/Sarees/Saree/IMG_1223.jpg";
import Img1224 from "/src/assets/Sarees/Saree/IMG_1224.jpg";
import Img1225 from "/src/assets/Sarees/Saree/IMG_1225.jpg";
import Img1226 from "/src/assets/Sarees/Saree/IMG_1226.jpg";
import Img1227 from "/src/assets/Sarees/Saree/IMG_1227.jpg";
import Img1228 from "/src/assets/Sarees/Saree/IMG_1228.jpg";
import Img1229 from "/src/assets/Sarees/Saree/IMG_1229.jpg";
import Img1230 from "/src/assets/Sarees/Saree/IMG_1230.jpg";
import Img1231 from "/src/assets/Sarees/Saree/IMG_1231.jpg";
import Img1232 from "/src/assets/Sarees/Saree/IMG_1232.jpg";
import Img1233 from "/src/assets/Sarees/Saree/IMG_1233.jpg";
import Img1234 from "/src/assets/Sarees/Saree/IMG_1234.jpg";
import Img1235 from "/src/assets/Sarees/Saree/IMG_1235.jpg";
import Img1236 from "/src/assets/Sarees/Saree/IMG_1236.jpg";
import Img1237 from "/src/assets/Sarees/Saree/IMG_1237.jpg";
import Img1238 from "/src/assets/Sarees/Saree/IMG_1238.jpg";
import Img1239 from "/src/assets/Sarees/Saree/IMG_1239.jpg";
import Img1240 from "/src/assets/Sarees/Saree/IMG_1240.jpg";
import Img1241 from "/src/assets/Sarees/Saree/IMG_1241.jpg";
import Img1242 from "/src/assets/Sarees/Saree/IMG_1242.jpg";
import Img1243 from "/src/assets/Sarees/Saree/IMG_1243.jpg";
import Img1244 from "/src/assets/Sarees/Saree/IMG_1244.jpg";
import Img1245 from "/src/assets/Sarees/Saree/IMG_1245.jpg";
import Img1246 from "/src/assets/Sarees/Saree/IMG_1246.jpg";
import Img1247 from "/src/assets/Sarees/Saree/IMG_1247.jpg";
import Img1248 from "/src/assets/Sarees/Saree/IMG_1248.jpg";
import Img1249 from "/src/assets/Sarees/Saree/IMG_1249.jpg";

//Mysore

import Img1255 from "/src/assets/Sarees/MysoreSilk/IMG_1255.jpg";
import Img1256 from "/src/assets/Sarees/MysoreSilk/IMG_1256.jpg";
import Img1257 from "/src/assets/Sarees/MysoreSilk/IMG_1257.jpg";
import Img1258 from "/src/assets/Sarees/MysoreSilk/IMG_1258.jpg";
import Img1259 from "/src/assets/Sarees/MysoreSilk/IMG_1259.jpg";
import Img1260 from "/src/assets/Sarees/MysoreSilk/IMG_1260.jpg";
import Img1261 from "/src/assets/Sarees/MysoreSilk/IMG_1261.jpg";
import Img1262 from "/src/assets/Sarees/MysoreSilk/IMG_1262.jpg";
import Img1263 from "/src/assets/Sarees/MysoreSilk/IMG_1263.jpg";
import Img1264 from "/src/assets/Sarees/MysoreSilk/IMG_1264.jpg";
import Img1265 from "/src/assets/Sarees/MysoreSilk/IMG_1265.jpg";
import Img1266 from "/src/assets/Sarees/MysoreSilk/IMG_1266.jpg";
import Img1267 from "/src/assets/Sarees/MysoreSilk/IMG_1267.jpg";
import Img1268 from "/src/assets/Sarees/MysoreSilk/IMG_1268.jpg";
import Img1269 from "/src/assets/Sarees/MysoreSilk/IMG_1269.jpg";
import Img1270 from "/src/assets/Sarees/MysoreSilk/IMG_1270.jpg";
import Img1271 from "/src/assets/Sarees/MysoreSilk/IMG_1271.jpg";
import Img1272 from "/src/assets/Sarees/MysoreSilk/IMG_1272.jpg";
import Img1273 from "/src/assets/Sarees/MysoreSilk/IMG_1273.jpg";
import Img1274 from "/src/assets/Sarees/MysoreSilk/IMG_1274.jpg";
import Img1275 from "/src/assets/Sarees/MysoreSilk/IMG_1275.jpg";
import Img1276 from "/src/assets/Sarees/MysoreSilk/IMG_1276.jpg";
import Img1277 from "/src/assets/Sarees/MysoreSilk/IMG_1277.jpg";
import Img1278 from "/src/assets/Sarees/MysoreSilk/IMG_1278.jpg";
import Img1279 from "/src/assets/Sarees/MysoreSilk/IMG_1279.jpg";
import Img1280 from "/src/assets/Sarees/MysoreSilk/IMG_1280.jpg";
import Img1281 from "/src/assets/Sarees/MysoreSilk/IMG_1281.jpg";
import Img1282 from "/src/assets/Sarees/MysoreSilk/IMG_1282.jpg";

//combo saree

import Img1250 from "/src/assets/Sarees/SareeCombo/IMG_1250.jpg";
import Img1251 from "/src/assets/Sarees/SareeCombo/IMG_1251.jpg";
import Img1252 from "/src/assets/Sarees/SareeCombo/IMG_1252.jpg";
import Img1253 from "/src/assets/Sarees/SareeCombo/IMG_1253.jpg";
import Img1254 from "/src/assets/Sarees/SareeCombo/IMG_1254.jpg";

//kurtipant

import Maxi1 from "../../assets/Kurtiwith-Pant/IMG_1157.jpg"
import Maxi2 from "../../assets/Kurtiwith-Pant/IMG_1158.jpg"
import Maxi3 from "../../assets/Kurtiwith-Pant/IMG_1159.jpg"
import Maxi4 from "../../assets/Kurtiwith-Pant/IMG_1160.jpg"
import Maxi5 from "../../assets/Kurtiwith-Pant/IMG_1161.jpg"
import Maxi6 from "../../assets/Kurtiwith-Pant/IMG_1162.jpg"
import Maxi7 from "../../assets/Kurtiwith-Pant/IMG_1163.jpg"
import Maxi8 from "../../assets/Kurtiwith-Pant/IMG_1164.jpg"
import Maxi9 from "../../assets/Kurtiwith-Pant/IMG_1165.jpg"
import Maxi10 from "../../assets/Kurtiwith-Pant/IMG_1166.jpg"

// Buttukurti

import Bittu0805 from "../../assets/Bittukurti/IMG_0805.jpg";
import Bittu0806 from "../../assets/Bittukurti/IMG_0806.jpg";
import Bittu0807 from "../../assets/Bittukurti/IMG_0807.jpg";
import Bittu0808 from "../../assets/Bittukurti/IMG_0808.jpg";
import Bittu0809 from "../../assets/Bittukurti/IMG_0809.jpg";
import Bittu0810 from "../../assets/Bittukurti/IMG_0810.jpg";
import Bittu0811 from "../../assets/Bittukurti/IMG_0811.jpg";
import Bittu0812 from "../../assets/Bittukurti/IMG_0812.jpg";
import Bittu0813 from "../../assets/Bittukurti/IMG_0813.jpg";
import Bittu0814 from "../../assets/Bittukurti/IMG_0814.jpg";
import Bittu0815 from "../../assets/Bittukurti/IMG_0815.jpg";
import Bittu0816 from "../../assets/Bittukurti/IMG_0816.jpg";
import Bittu0817 from "../../assets/Bittukurti/IMG_0817.jpg";
import Bittu0818 from "../../assets/Bittukurti/IMG_0818.jpg";
import Bittu0819 from "../../assets/Bittukurti/IMG_0819.jpg";
import Bittu0820 from "../../assets/Bittukurti/IMG_0820.jpg";
import Bittu0821 from "../../assets/Bittukurti/IMG_0821.jpg";
import Bittu0822 from "../../assets/Bittukurti/IMG_0822.jpg";
import Bittu0823 from "../../assets/Bittukurti/IMG_0823.jpg";
import Bittu0824 from "../../assets/Bittukurti/IMG_0824.jpg";
import Bittu0825 from "../../assets/Bittukurti/IMG_0825.jpg";
import Bittu0826 from "../../assets/Bittukurti/IMG_0826.jpg";
import Bittu0827 from "../../assets/Bittukurti/IMG_0827.jpg";
import Bittu0828 from "../../assets/Bittukurti/IMG_0828.jpg";
import Bittu0829 from "../../assets/Bittukurti/IMG_0829.jpg";
import Bittu0830 from "../../assets/Bittukurti/IMG_0830.jpg";
import Bittu0831 from "../../assets/Bittukurti/IMG_0831.jpg";
import Bittu0832 from "../../assets/Bittukurti/IMG_0832.jpg";
import Bittu0833 from "../../assets/Bittukurti/IMG_0833.jpg";
import Bittu0834 from "../../assets/Bittukurti/IMG_0834.jpg";
import Bittu0835 from "../../assets/Bittukurti/IMG_0835.jpg";
import Bittu0836 from "../../assets/Bittukurti/IMG_0836.jpg";
import Bittu0837 from "../../assets/Bittukurti/IMG_0837.jpg";
import Bittu0838 from "../../assets/Bittukurti/IMG_0838.jpg";

const products = [

  //Blouse
  {
    id: 1,
    title: "Pink Readymade Blouse",
    subtitle: "Readymade Blouse",
    price: 399,
    oldPrice: 500,
    save: "Save 20%",
    thumbnails: [Img0724, Img0725, Img0730,],
    points: [
      "Available in sizes S to XXL",
      "Cash on delivery not available for customized blouses",
    ],
    delivery: "Jul 13 – Jul 17",
    status: "Semi Stitched",
    customizeNote: "Customization available with a ₹300 advance payment",
  },
  {
    id: 2,
    title: "Red Readymade Blouse",
    subtitle: "Readymade Blouse",
    price: 499,
    oldPrice: 599,
    save: "Save 17%",
    thumbnails: [Img0734, Img0735  ],
    points: [
      "Available in sizes S to XXL",
      "Perfect fit and premium quality",
    ],
    delivery: "Jul 13 – Jul 17",
    status: "Fully Stitched",
    customizeNote: "Customization available with a ₹300 advance payment",
  },
  {
    id: 3,
    title: "Elegant Blouse Design",
    subtitle: "Designer Blouse",
    price: 549,
    oldPrice: 649,
    save: "Save 15%",
    thumbnails: [Img0738, Img0739],
    points: [
      "Designer blouse with stylish cuts",
      "Ideal for festive and traditional wear",
    ],
    delivery: "Jul 13 – Jul 17",
    status: "Semi Stitched",
    customizeNote: "Available only on prepaid orders",
  },
  {
    id: 4,
    title: "Silk Embroidered Blouse",
    subtitle: "Silk Blouse",
    price: 599,
    oldPrice: 799,
    save: "Save 25%",
    thumbnails: [Img0742,Img0744],
    points: [
      "Rich silk fabric with embroidery",
      "Perfect for weddings & functions",
    ],
    delivery: "Jul 13 – Jul 17",
    status: "Fully Stitched",
    customizeNote: "Customization available with advance payment",
  },
  {
    id: 5,
    title: "Cotton Daily Wear Blouse",
    subtitle: "Cotton Blouse",
    price: 399,
    oldPrice: 499,
    save: "Save 20%",
    thumbnails: [Img0747, Img0749],
    points: [
      "Comfortable and breathable cotton",
      "Best for everyday wear",
    ],
    delivery: "Jul 13 – Jul 17",
    status: "Semi Stitched",
    customizeNote: "COD available for select pin codes",
  },
  {
    id: 6,
    title: "Mirror Work Blouse",
    subtitle: "Partywear Blouse",
    price: 649,
    oldPrice: 799,
    save: "Save 19%",
    thumbnails: [Img0752, Img0753],
    points: [
      "Trendy mirror work",
      "Best match for lehengas",
    ],
    delivery: "Jul 13 – Jul 17",
    status: "Fully Stitched",
    customizeNote: "Advance customization not available",
  },
  {
    id: 7,
    title: "Traditional Zari Blouse",
    subtitle: "Traditional Blouse",
    price: 499,
    oldPrice: 649,
    save: "Save 23%",
    thumbnails: [Img0755, Img0758],
    points: [
      "Zari and threadwork combo",
      "Looks elegant on silk sarees",
    ],
    delivery: "Jul 13 – Jul 17",
    status: "Semi Stitched",
    customizeNote: "Customization extra ₹250",
  },
  {
    id: 8,
    title: "Sleeveless Blouse",
    subtitle: "Modern Blouse",
    price: 349,
    oldPrice: 450,
    save: "Save 22%",
    thumbnails: [Img0759,Img0760],
    points: [
      "Cool and stylish for summer",
      "Matches georgette and chiffon sarees",
    ],
    delivery: "Jul 13 – Jul 17",
    status: "Fully Stitched",
    customizeNote: "No customization available",
  },
  {
    id: 9,
    title: "Velvet Blouse",
    subtitle: "Luxury Blouse",
    price: 799,
    oldPrice: 999,
    save: "Save 20%",
    thumbnails: [Img0762, Img0763],
    points: [
      "Soft velvet material",
      "Ideal for grand occasions",
    ],
    delivery: "Jul 13 – Jul 17",
    status: "Semi Stitched",
    customizeNote: "Only prepaid custom orders allowed",
  },
  {
    id: 10,
    title: "Green Readymade Blouse",
    subtitle: "Readymade Blouse",
    price: 449,
    oldPrice: 550,
    save: "Save 18%",
    thumbnails: [Img0765, Img0767],
    points: [
      "Available in sizes S to XXL",
      "Cash on delivery not available for customized blouses",
    ],
    delivery: "Jul 13 – Jul 17",
    status: "Semi Stitched",
    customizeNote: "Customization available with a ₹300 advance payment",
  },

  // Cotton Saree
  {
  id: 11,
  title: "Soft Cotton Saree",
  subtitle: "Cotton Saree",
  price: 799,
  oldPrice: 999,
  save: "Save 20%",
  thumbnails: [Img1127, Img1128, Img1129], // Replace with your actual image imports
  points: [
    "Soft breathable cotton material",
    "Perfect for daily and office wear",
  ],
  delivery: "Jul 13 – Jul 17",
  status: "Unstitched",
  customizeNote: "Blouse piece included. No customization required",
},
{
  id: 12,
  title: "Elegant Cotton Saree",
  subtitle: "Cotton Saree",
  price: 899,
  oldPrice: 1099,
  save: "Save 18%",
  thumbnails: [Img1130,Img1131, Img1133],
  points: [
    "Lightweight and breathable fabric",
    "Perfect for daily wear and small functions",
  ],
  delivery: "Jul 13 – Jul 17",
  status: "Unstitched",
  customizeNote: "Blouse piece included",
},
{
  id: 13,
  title: "Sky Blue Cotton Saree",
  subtitle: "Cotton Saree",
  price: 999,
  oldPrice: 1199,
  save: "Save 17%",
  thumbnails: [Img1134, Img1135, Img1136],
  points: [
    "Soft handloom cotton",
    "Gives a rich ethnic look",
  ],
  delivery: "Jul 13 – Jul 17",
  status: "Unstitched",
  customizeNote: "Comes with matching blouse piece",
},
{
  id: 14,
  title: "Classic Grey Cotton Saree",
  subtitle: "Cotton Saree",
  price: 799,
  oldPrice: 999,
  save: "Save 20%",
  thumbnails: [Img1137, Img1138, Img1139],
  points: [
    "Durable, machine-washable cotton",
    "Comfortable for office and travel",
  ],
  delivery: "Jul 13 – Jul 17",
  status: "Unstitched",
  customizeNote: "Blouse piece provided separately",
},
{
  id: 15,
  title: "Peach Soft Cotton Saree",
  subtitle: "Cotton Saree",
  price: 899,
  oldPrice: 1099,
  save: "Save 18%",
  thumbnails: [Img1140, Img1141, Img1142],
  points: [
    "Subtle color and soft weave",
    "Ideal for casual and traditional outings",
  ],
  delivery: "Jul 13 – Jul 17",
  status: "Unstitched",
  customizeNote: "Blouse piece included",
},
{
  id: 16,
  title: "Green Cotton Saree with Border",
  subtitle: "Cotton Saree",
  price: 949,
  oldPrice: 1149,
  save: "Save 17%",
  thumbnails: [Img1143, Img1144,], 
  points: [
    "Elegant golden zari border",
    "Festive-ready comfort saree",
  ],
  delivery: "Jul 13 – Jul 17",
  status: "Unstitched",
  customizeNote: "Blouse piece attached",
},
{
  id: 17,
  title: "Purple Casual Cotton Saree",
  subtitle: "Cotton Saree",
  price: 849,
  oldPrice: 1049,
  save: "Save 19%",
  thumbnails: [Img1145, Img1146, Img1147 ], // Replace manually
  points: [
    "Perfect for daily college wear",
    "Soft and easy to drape",
  ],
  delivery: "Jul 13 – Jul 17",
  status: "Unstitched",
  customizeNote: "Blouse piece available",
},
{
  id: 18,
  title: "Black Border Cotton Saree",
  subtitle: "Cotton Saree",
  price: 799,
  oldPrice: 999,
  save: "Save 20%",
  thumbnails: [Img1148, Img1149, Img1150], // Replace manually
  points: [
    "Rich contrast border design",
    "Elegant choice for evenings",
  ],
  delivery: "Jul 13 – Jul 17",
  status: "Unstitched",
  customizeNote: "Comes with blouse fabric",
},
{
  id: 19,
  title: "Dual Tone Cotton Saree",
  subtitle: "Cotton Saree",
  price: 899,
  oldPrice: 1099,
  save: "Save 18%",
  thumbnails: [Img1151, Img1152, Img1153], // Replace manually
  points: [
    "Two-tone effect with a modern look",
    "Best for light celebrations",
  ],
  delivery: "Jul 13 – Jul 17",
  status: "Unstitched",
  customizeNote: "Blouse piece attached",
},
{
  id: 20,
  title: "Handloom Soft Cotton Saree",
  subtitle: "Cotton Saree",
  price: 999,
  oldPrice: 1199,
  save: "Save 17%",
  thumbnails: [Img1154, Img1155, Img1156], // Replace manually
  points: [
    "Premium handloom quality",
    "Traditional yet stylish",
  ],
  delivery: "Jul 13 – Jul 17",
  status: "Unstitched",
  customizeNote: "Includes matching blouse fabric",
},

// Slik Saree
{
    id: 21,
    title: "Vibrant Printed Cotton Saree",
    subtitle: "Cotton Saree",
    price: 849,
    oldPrice: 1000,
    save: "Save 15%",
    thumbnails: [Img1221, Img1222, Img1223],
    points: [
      "Lightweight and breathable",
      "Perfect for everyday wear",
    ],
    delivery: "Jul 13 – Jul 17",
    status: "Unstitched",
    customizeNote: "Includes matching blouse fabric",
},
{
    id: 22,
    title: "Elegant Block Print Saree",
    subtitle: "Cotton Saree",
    price: 1200,
    oldPrice: 1450,
    save: "Save 17%",
    thumbnails: [Img1224, Img1225,],
    points: [
      "Traditional block print design",
      "Comfortable for all-day wear",
    ],
    delivery: "Jul 13 – Jul 17",
    status: "Unstitched",
    customizeNote: "Includes matching blouse fabric",
},
{
    id: 23,
    title: "Pastel Shade Cotton Saree",
    subtitle: "Cotton Saree",
    price: 950,
    oldPrice: 1100,
    save: "Save 14%",
    thumbnails: [Img1226, Img1227, Img1228],
    points: [
      "Subtle and sophisticated colors",
      "Soft and easy to drape",
    ],
    delivery: "Jul 13 – Jul 17",
    status: "Unstitched",
    customizeNote: "Includes matching blouse fabric",
},
{
    id: 24,
    title: "Geometric Pattern Cotton Saree",
    subtitle: "Cotton Saree",
    price: 1050,
    oldPrice: 1250,
    save: "Save 16%",
    thumbnails: [Img1229, Img1230,Img1231],
    points: [
      "Modern geometric designs",
      "Ideal for casual and semi-formal occasions",
    ],
    delivery: "Jul 13 – Jul 17",
    status: "Unstitched",
    customizeNote: "Includes matching blouse fabric",
},
{
    id: 25,
    title: "Classic Plain Border Saree",
    subtitle: "Cotton Saree",
    price: 799,
    oldPrice: 950,
    save: "Save 16%",
    thumbnails: [Img1232, Img1233, Img1234],
    points: [
      "Simple yet elegant design",
      "Versatile for various occasions",
    ],
    delivery: "Jul 13 – Jul 17",
    status: "Unstitched",
    customizeNote: "Includes matching blouse fabric",
},
{
    id: 26,
    title: "Dual Tone Cotton Saree",
    subtitle: "Cotton Saree",
    price: 1150,
    oldPrice: 1350,
    save: "Save 15%",
    thumbnails: [Img1235, Img1236, Img1237],
    points: [
      "Unique dual-tone effect",
      "Comfortable and stylish",
    ],
    delivery: "Jul 13 – Jul 17",
    status: "Unstitched",
    customizeNote: "Includes matching blouse fabric",
},
{
    id: 27,
    title: "Artistic Motif Cotton Saree",
    subtitle: "Cotton Saree",
    price: 1300,
    oldPrice: 1550,
    save: "Save 16%",
    thumbnails: [Img1238, Img1239, Img1240],
    points: [
      "Intricate artistic motifs",
      "Perfect for festive occasions",
    ],
    delivery: "Jul 13 – Jul 17",
    status: "Unstitched",
    customizeNote: "Includes matching blouse fabric",
},
{
    id: 28,
    title: "Lightweight Daily Wear Saree",
    subtitle: "Cotton Saree",
    price: 699,
    oldPrice: 800,
    save: "Save 13%",
    thumbnails: [Img1241, Img1242, Img1243],
    points: [
      "Extremely light and easy to manage",
      "Ideal for daily use",
    ],
    delivery: "Jul 13 – Jul 17",
    status: "Unstitched",
    customizeNote: "Includes matching blouse fabric",
},
{
    id: 29,
    title: "Contemporary Design Cotton Saree",
    subtitle: "Cotton Saree",
    price: 1099,
    oldPrice: 1300,
    save: "Save 15%",
    thumbnails: [Img1244, Img1245, Img1246],
    points: [
      "Modern patterns and vibrant colors",
      "Makes a fashion statement",
    ],
    delivery: "Jul 13 – Jul 17",
    status: "Unstitched",
    customizeNote: "Includes matching blouse fabric",
},
{
    id: 30,
    title: "Traditional Weave Cotton Saree",
    subtitle: "Cotton Saree",
    price: 1400,
    oldPrice: 1650,
    save: "Save 15%",
    thumbnails: [Img1248, Img1249, Img1247], // Re-using for variety
    points: [
      "Rich traditional weaving techniques",
      "A timeless addition to your wardrobe",
    ],
    delivery: "Jul 13 – Jul 17",
    status: "Unstitched",
    customizeNote: "Includes matching blouse fabric",
},

//mysore 

{
  id: 31,
  title: "Floral Printed Cotton Saree",
  subtitle: "Cotton Saree",
  price: 1199,
  oldPrice: 1399,
  save: "Save 14%",
  thumbnails: [Img1255, Img1256, Img1257, Img1258],
  points: [
    "Beautiful floral patterns",
    "Lightweight and breathable material",
  ],
  delivery: "Jul 13 – Jul 17",
  status: "Unstitched",
  customizeNote: "Blouse piece attached inside",
},
{
  id: 32,
  title: "Block Print Cotton Saree",
  subtitle: "Cotton Saree",
  price: 999,
  oldPrice: 1250,
  save: "Save 20%",
  thumbnails: [Img1259, Img1260, Img1261],
  points: [
    "Hand-block printed designs",
    "Ideal for casual & office wear",
  ],
  delivery: "Jul 13 – Jul 17",
  status: "Unstitched",
  customizeNote: "Matching blouse fabric included",
},
{
  id: 33,
  title: "Ikkat Style Cotton Saree",
  subtitle: "Cotton Saree",
  price: 1399,
  oldPrice: 1599,
  save: "Save 13%",
  thumbnails: [Img1262, Img1263, Img1264],
  points: [
    "Inspired by traditional Ikkat patterns",
    "Soft and durable cotton fabric",
  ],
  delivery: "Jul 13 – Jul 17",
  status: "Unstitched",
  customizeNote: "Pre-attached blouse piece",
},
{
  id: 34,
  title: "Pastel Cotton Saree",
  subtitle: "Cotton Saree",
  price: 1299,
  oldPrice: 1499,
  save: "Save 13%",
  thumbnails: [Img1265, Img1266, Img1267],
  points: [
    "Trendy pastel shades",
    "Comfortable for all-day wear",
  ],
  delivery: "Jul 13 – Jul 17",
  status: "Unstitched",
  customizeNote: "Blouse fabric included inside",
},
{
  id: 35,
  title: "Daily Wear Cotton Saree",
  subtitle: "Cotton Saree",
  price: 899,
  oldPrice: 1100,
  save: "Save 18%",
  thumbnails: [Img1268, Img1269, Img1270],
  points: [
    "Best suited for everyday use",
    "Soft and skin-friendly texture",
  ],
  delivery: "Jul 13 – Jul 17",
  status: "Unstitched",
  customizeNote: "Comes with blouse material",
},
{
  id: 36,
  title: "Geometric Print Cotton Saree",
  subtitle: "Cotton Saree",
  price: 1099,
  oldPrice: 1299,
  save: "Save 15%",
  thumbnails: [Img1271, Img1272, Img1273],
  points: [
    "Modern geometric designs",
    "Perfect blend of style and comfort",
  ],
  delivery: "Jul 13 – Jul 17",
  status: "Unstitched",
  customizeNote: "Includes coordinated blouse fabric",
},
{
  id: 37,
  title: "Elegant Border Cotton Saree",
  subtitle: "Cotton Saree",
  price: 1349,
  oldPrice: 1550,
  save: "Save 13%",
  thumbnails: [Img1274, Img1275, Img1276],
  points: [
    "Detailed border design",
    "Ideal for festive & casual occasions",
  ],
  delivery: "Jul 13 – Jul 17",
  status: "Unstitched",
  customizeNote: "Blouse piece inside the saree",
},
{
  id: 38,
  title: "Soft Mul Cotton Saree",
  subtitle: "Cotton Saree",
  price: 999,
  oldPrice: 1199,
  save: "Save 17%",
  thumbnails: [Img1277, Img1278, Img1279],
  points: [
    "Feather-soft mul cotton material",
    "Great for warm weather",
  ],
  delivery: "Jul 13 – Jul 17",
  status: "Unstitched",
  customizeNote: "Includes soft cotton blouse piece",
},
{
  id: 39,
  title: "Temple Border Cotton Saree",
  subtitle: "Cotton Saree",
  price: 1449,
  oldPrice: 1700,
  save: "Save 15%",
  thumbnails: [Img1280, Img1281, Img1282],
  points: [
    "Classic temple border look",
    "Perfect traditional styling",
  ],
  delivery: "Jul 13 – Jul 17",
  status: "Unstitched",
  customizeNote: "Includes matching blouse material",
},

//combosaree

{
  id: 41,
  title: "Elegant Dual Combo Saree Pack",
  subtitle: "Saree Combo Offer",
  price: 1999,
  oldPrice: 2599,
  save: "Save 23%",
  thumbnails: [Img1250, Img1250],
  points: [
    "Includes 2 soft cotton sarees in vibrant colors",
    "Ideal for gifting and daily wear",
  ],
  delivery: "Jul 13 – Jul 17",
  status: "Unstitched",
  customizeNote: "Blouse fabric included for both sarees",
},
{
  id: 42,
  title: "Festive Wear Combo Sarees",
  subtitle: "Saree Combo Offer",
  price: 2299,
  oldPrice: 2899,
  save: "Save 21%",
  thumbnails: [Img1251, Img1251],
  points: [
    "Traditional designs suitable for festivals",
    "Comes with matching blouse pieces",
  ],
  delivery: "Jul 13 – Jul 17",
  status: "Unstitched",
  customizeNote: "Both sarees have attached blouse fabric",
},
{
  id: 43,
  title: "Daily Comfort Combo Saree Pack",
  subtitle: "Saree Combo Offer",
  price: 1899,
  oldPrice: 2399,
  save: "Save 21%",
  thumbnails: [Img1252, Img1252],
  points: [
    "2 lightweight sarees perfect for everyday use",
    "Comfortable for long hours of wear",
  ],
  delivery: "Jul 13 – Jul 17",
  status: "Unstitched",
  customizeNote: "Includes blouse pieces for both",
},
{
  id: 44,
  title: "Printed Combo Saree Set",
  subtitle: "Saree Combo Offer",
  price: 2099,
  oldPrice: 2599,
  save: "Save 19%",
  thumbnails: [Img1253, Img1253],
  points: [
    "Beautiful block prints on both sarees",
    "Soft cotton fabric ideal for summer",
  ],
  delivery: "Jul 13 – Jul 17",
  status: "Unstitched",
  customizeNote: "Blouse material available with each saree",
},
{
  id: 45,
  title: "Trendy Combo Sarees for Women",
  subtitle: "Saree Combo Offer",
  price: 2399,
  oldPrice: 2899,
  save: "Save 17%",
  thumbnails: [Img1254, Img1254],
  points: [
    "Trendy colors and minimal design",
    "Versatile use – casual or semi-formal",
  ],
  delivery: "Jul 13 – Jul 17",
  status: "Unstitched",
  customizeNote: "Matching blouse pieces included",
},

//Kurtipant
{
  id: 46,
  title: "Elegant Combo Cotton Sarees",
  subtitle: "Kurti With Pant",
  price: 2199,
  oldPrice: 2699,
  save: "Save 19%",
  thumbnails: [Maxi1, Maxi1],
  points: [
    "Perfect dailywear cotton comfort",
    "Combo includes 2 soft cotton sarees",
  ],
  delivery: "Jul 13 – Jul 17",
  status: "Unstitched",
  customizeNote: "Blouse pieces included in each saree",
},
{
  id: 47,
  title: "Trendy Printed Combo Sarees",
  subtitle: "Kurti With Pant",
  price: 1999,
  oldPrice: 2499,
  save: "Save 20%",
  thumbnails: [Maxi2, Maxi2],
  points: [
    "Trendy floral & ethnic prints",
    "Combo of 2 stylish printed sarees",
  ],
  delivery: "Jul 13 – Jul 17",
  status: "Unstitched",
  customizeNote: "Includes matching blouse materials",
},
{
  id: 48,
  title: "Festive Wear Saree Combo Pack",
  subtitle: "Kurti With Pant",
  price: 2699,
  oldPrice: 3199,
  save: "Save 16%",
  thumbnails: [Maxi3, Maxi3],
  points: [
    "Vibrant festive colors",
    "Ideal for special occasions & functions",
  ],
  delivery: "Jul 13 – Jul 17",
  status: "Unstitched",
  customizeNote: "Exclusive designs with blouse pieces",
},
{
  id: 49,
  title: "Workwear Combo Sarees Set",
  subtitle: "Kurti With Pantr",
  price: 1899,
  oldPrice: 2299,
  save: "Save 17%",
  thumbnails: [Maxi4, Maxi4],
  points: [
    "Soft feel suitable for all-day use",
    "Combo includes 2 everyday use sarees",
  ],
  delivery: "Jul 13 – Jul 17",
  status: "Unstitched",
  customizeNote: "Blouse fabrics attached inside",
},
{
  id: 50,
  title: "Elegant Linen Saree Combo",
  subtitle: "Kurti With Pant",
  price: 2499,
  oldPrice: 2999,
  save: "Save 17%",
  thumbnails: [Maxi5, Maxi5],
  points: [
    "Luxurious linen finish",
    "Combo of 2 rich textured sarees",
  ],
  delivery: "Jul 13 – Jul 17",
  status: "Unstitched",
  customizeNote: "Blouse materials included with both",
},
{
  id: 51,
  title: "Floral Designer Saree Combo",
  subtitle: "Kurti With Pant",
  price: 2299,
  oldPrice: 2899,
  save: "Save 21%",
  thumbnails: [Maxi6, Maxi6],
  points: [
    "Graceful floral designs",
    "Combo of 2 elegant partywear sarees",
  ],
  delivery: "Jul 13 – Jul 17",
  status: "Unstitched",
  customizeNote: "Matching blouse pieces included",
},
{
  id: 52,
  title: "Printed Lightweight Combo Sarees",
  subtitle: "Kurti With Pant",
  price: 2099,
  oldPrice: 2599,
  save: "Save 19%",
  thumbnails: [Maxi7, Maxi7],
  points: [
    "Easy to carry and drape",
    "2 sarees perfect for summer outings",
  ],
  delivery: "Jul 13 – Jul 17",
  status: "Unstitched",
  customizeNote: "Blouse attached with both",
},
{
  id: 53,
  title: "Silk Blend Combo Sarees Set",
  subtitle: "Kurti With Pant",
  price: 2799,
  oldPrice: 3399,
  save: "Save 18%",
  thumbnails: [Maxi8, Maxi8],
  points: [
    "Silk finish with rich texture",
    "2 attractive sarees for celebrations",
  ],
  delivery: "Jul 13 – Jul 17",
  status: "Unstitched",
  customizeNote: "Contrast blouse fabric included",
},
{
  id: 54,
  title: "Minimal Printed Saree Combos",
  subtitle: "Kurti With Pant",
  price: 1999,
  oldPrice: 2399,
  save: "Save 17%",
  thumbnails: [Maxi9, Maxi9],
  points: [
    "Simple and subtle prints",
    "Great choice for daily office wear",
  ],
  delivery: "Jul 13 – Jul 17",
  status: "Unstitched",
  customizeNote: "Blouse pieces inside",
},
{
  id: 55,
  title: "Ethnic Combo Sarees - 2 Pack",
  subtitle: "Kurti With Pant",
  price: 2599,
  oldPrice: 3099,
  save: "Save 16%",
  thumbnails: [Maxi10, Maxi10],
  points: [
    "Ethnic motifs & warm colors",
    "Combo of 2 festive-ready sarees",
  ],
  delivery: "Jul 13 – Jul 17",
  status: "Unstitched",
  customizeNote: "Includes 2 matching blouses",
},

//Bittu Kurti
{
  id: 56,
  title: "Elegant Printed Kurti with Pant Set",
  subtitle: "Bittu Kurti",
  price: 1299,
  oldPrice: 1899,
  save: "Save 32%",
  thumbnails: [Bittu0805, Bittu0806, Bittu0807],
  points: [
    "Soft rayon fabric for all-day comfort",
    "Printed kurti with matching pants",
  ],
  delivery: "Jul 13 – Jul 17",
  status: "Ready to Wear",
  customizeNote: "No customization needed",
},
{
  id: 57,
  title: "Floral Anarkali Kurti with Pant",
  subtitle: "Bittu Kurti",
  price: 1499,
  oldPrice: 1999,
  save: "Save 25%",
  thumbnails: [Bittu0808, Bittu0809, Bittu0810, Bittu0811],
  points: [
    "Elegant floral prints",
    "Flared kurti with slim-fit pants",
  ],
  delivery: "Jul 13 – Jul 17",
  status: "Ready to Wear",
  customizeNote: "Available in all standard sizes",
},
{
  id: 58,
  title: "Trendy Checks Kurti with Pant Combo",
  subtitle: "Bittu Kurti",
  price: 1399,
  oldPrice: 1799,
  save: "Save 22%",
  thumbnails: [Bittu0812, Bittu0813, Bittu0814],
  points: [
    "Trendy checked design",
    "Perfect for casual outings and office",
  ],
  delivery: "Jul 13 – Jul 17",
  status: "Ready to Wear",
  customizeNote: "Machine washable fabric",
},
{
  id: 59,
  title: "Straight Kurti with Embroidered Pant",
  subtitle: "Bittu Kurti",
  price: 1599,
  oldPrice: 2099,
  save: "Save 24%",
  thumbnails: [Bittu0815, Bittu0816, Bittu0817],
  points: [
    "Minimalist design with fine embroidery",
    "Comfortable cotton blend",
  ],
  delivery: "Jul 13 – Jul 17",
  status: "Ready to Wear",
  customizeNote: "Slight color variation possible",
},
{
  id: 60,
  title: "Festive Wear Kurti Pant Set",
  subtitle: "Bittu Kurti",
  price: 1799,
  oldPrice: 2299,
  save: "Save 22%",
  thumbnails: [Bittu0818, Bittu0819, Bittu0820],
  points: [
    "Ideal for festive occasions",
    "Includes dupatta for a complete look",
  ],
  delivery: "Jul 13 – Jul 17",
  status: "Ready to Wear",
  customizeNote: "Dry clean recommended",
},
{
  id: 61,
  title: "Casual Wear Cotton Kurti with Pant",
  subtitle: "Bittu Kurti",
  price: 1199,
  oldPrice: 1499,
  save: "Save 20%",
  thumbnails: [Bittu0821, Bittu0822, Bittu0823, Bittu0824],
  points: [
    "Breathable cotton for summer wear",
    "Printed kurti with stretchable pant",
  ],
  delivery: "Jul 13 – Jul 17",
  status: "Ready to Wear",
  customizeNote: "Available in plus sizes",
},
{
  id: 62,
  title: "Chikankari Style Kurti Pant Set",
  subtitle: "Bittu Kurti",
  price: 1899,
  oldPrice: 2399,
  save: "Save 21%",
  thumbnails: [Bittu0825, Bittu0826, Bittu0827, Bittu0828, Bittu0829],
  points: [
    "Lucknowi-style embroidery",
    "Elegant semi-stitched design",
  ],
  delivery: "Jul 13 – Jul 17",
  status: "Semi-stitched",
  customizeNote: "Stitching required before wear",
},
{
  id: 63,
  title: "Designer Kurti with Palazzo Pant",
  subtitle: "Bittu Kurti",
  price: 1699,
  oldPrice: 2199,
  save: "Save 23%",
  thumbnails: [Bittu0830, Bittu0831, Bittu0832],
  points: [
    "Palazzo style bottom wear",
    "Detailed neckline and sleeves",
  ],
  delivery: "Jul 13 – Jul 17",
  status: "Ready to Wear",
  customizeNote: "Dupatta not included",
},
{
  id: 64,
  title: "Printed Cotton Kurti Pant Set",
  subtitle: "Bittu Kurti",
  price: 1099,
  oldPrice: 1499,
  save: "Save 27%",
  thumbnails: [Bittu0833, Bittu0834, Bittu0835],
  points: [
    "Ideal for daily wear",
    "Comfortable and skin-friendly fabric",
  ],
  delivery: "Jul 13 – Jul 17",
  status: "Ready to Wear",
  customizeNote: "Slight shrinkage after wash",
},
{
  id: 65,
  title: "Elegant Embroidered Kurti with Pant",
  subtitle: "Bittu Kurti",
  price: 1899,
  oldPrice: 2499,
  save: "Save 24%",
  thumbnails: [Bittu0836, Bittu0837, Bittu0838],
  points: [
    "Thread embroidered front panel",
    "Set includes straight pants",
  ],
  delivery: "Jul 13 – Jul 17",
  status: "Ready to Wear",
  customizeNote: "Blouse lining optional",
},

];

const ProductDetails = () => {
  const { id } = useParams();
  const product = products.find((p) => p.id === parseInt(id));
  const [mainImage, setMainImage] = useState(product?.thumbnails[0]);
  const [quantity, setQuantity] = useState(1);
  const [pincode, setPincode] = useState("");

  useEffect(() => {
    if (product) setMainImage(product.thumbnails[0]);
    window.scrollTo(0, 0);
  }, [product]);

  if (!product)
    return (
      <p className="text-center text-red-500 mt-10">
        Product not found. Please check the URL.
      </p>
    );

  return (
    <div className="max-w-7xl mx-auto px-4 py-10 font-family grid md:grid-cols-[80px_1fr_1.2fr] gap-4">
      {/* Thumbnails */}
      <div className="flex flex-col gap-4">
        {product.thumbnails.map((thumb, i) => (
          <img
            key={i}
            src={thumb}
            alt=""
            className={`w-20 h-24 object-cover border-2 rounded-lg cursor-pointer ${
              mainImage === thumb ? "border-green-600" : "border-gray-300"
            }`}
            onClick={() => setMainImage(thumb)}
          />
        ))}
      </div>

      {/* Main Image */}
      <div>
        <img
          src={mainImage}
          alt=""
          className="w-full h-[650px] object-cover  rounded-lg border"
        />
        <div className="text-center mt-10">
  <p className="text-2xl font-semibold">Customer Reviews</p>

  <div className="flex items-center justify-center gap-6 mt-4">
    <div className="flex text-green-700 text-2xl">
      <span>☆☆☆☆☆</span>
    </div>
    <button className="bg-green-700 text-white font-semibold px-5 py-2 rounded">
      Write Review
    </button>
  </div>

  <p className="mt-2 font-semibold text-sm">Your feedback could be the first</p>
</div>
      </div>

      {/* Product Info */}
      <div className="space-y-4">
        <p className="text-sm text-gray-500">Women’s Wear / {product.subtitle}</p>
        <h1 className="text-xl font-bold">{product.title}</h1>

        <div className="flex items-center gap-3 text-lg font-semibold text-gray-800">
          ₹{product.price}
          <span className="text-gray-400 line-through text-sm font-normal">
            ₹{product.oldPrice}
          </span>
          <span className="text-blue-500 text-sm">{product.save}</span>
        </div>

        <ul className="text-sm text-gray-700 list-disc list-inside">
          {product.points.map((pt, idx) => (
            <li key={idx}>{pt}</li>
          ))}
        </ul>

        <p className="text-sm text-gray-600">
          🚚 Delivery Expected:{" "}
          <span className="font-semibold">{product.delivery}</span>
        </p>

        <div className="flex gap-4 mt-3">
          <button className="bg-green-100 text-green-700 px-3 py-1 hover:bg-green-300 rounded text-sm cursor-pointer">
            {product.status}
          </button>
          <button className="px-4 py-1  text-sm bg-green-100 text-green-700  rounded hover:bg-green-300 cursor-pointer">
            Customize
          </button>
        </div>

        <p className="text-sm text-gray-600">{product.customizeNote}</p>

        {/* Quantity and Add to Cart */}
        <div className="flex items-center gap-3 mt-4">
          <button
            onClick={() => setQuantity((q) => (q > 1 ? q - 1 : 1))}
            className="bg-gray-200 px-2 rounded"
          >
            −
          </button>
          <span>{quantity}</span>
          <button
            onClick={() => setQuantity((q) => q + 1)}
            className="bg-gray-200 px-2 rounded"
          >
            +
          </button>

          <button className="cursor-pointer ml-4 bg-green-600 hover:bg-green-700 text-white px-4 py-2 rounded text-sm">
            Add To Cart
          </button>
        </div>

        <button className="cursor-pointer bg-green-600 text-white mt-4 w-full py-2 rounded text-sm hover:bg-green-700">
          Buy It Now
        </button>

        {/* Delivery Option */}
        <div className="mt-6">
          <label className="block mb-1 text-sm font-medium text-gray-700">
            Delivery Option
          </label>
          <div className="flex gap-2">
            <input
              type="text"
              placeholder="Enter Pincode"
              value={pincode}
              onChange={(e) => setPincode(e.target.value)}
              className="border px-3 py-2 w-full rounded-md text-sm"
            />
            <button className="px-4 py-2 text-sm bg-black text-white rounded">
              Check
            </button>
          </div>
        </div>

        {/* Accordions */}
        <div className="mt-6 space-y-2">
          {["Specification", "Disclaimer", "Description", "Return & Replacement Policy"].map(
            (section, i) => (
              <details key={i} className="border rounded-md p-3 cursor-pointer">
                <summary className="font-medium">{section}</summary>
                <p className="text-sm mt-2 text-gray-600">
                  Sample content for {section}
                </p>
              </details>
            )
          )}
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;
