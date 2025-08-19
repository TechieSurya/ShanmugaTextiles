import { useState } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./App.css";
import Navbar from "./Components/NavFoot/Navbar";
import Home from "./Components/Home/Home";
import Contact from "./Components/ContactUs/Contact";
import Footer from "./Components/NavFoot/Footer";
import WomenWear from "./Components/Women/WomenWear";
import StitchingService from "./Components/Stitching/StitchingService";
import KurtiwithPants from "./Components/Women/KurtiwithPants";
import AariWorkPage from "./Components/Stitching/AariWorkPage";
import Kids from "./Components/KidsWear/Kids";
import BirthdayDresses from "./Components/KidsWear/KidFrock";
import MomDaughter from "./Components/Collections/MomDaughter";
import CollectionsCombo from "./Components/Collections/CollectionsCombo";
import MainTab from "./Components/Collections/MainTab";
import SareesCol from "./Components/Sarees/SareesCol";
import LehengaStitching from "./Components/Stitching/LehengaStitching";
import ChudiStitching from "./Components/Stitching/ChudiStitching";
import UmbrellaStitching from "./Components/Stitching/UmbrellaStitching";
import CholiStitching from "./Components/Stitching/CholiStitching";
import SkirtStitching from "./Components/Stitching/SkirtStitching";
import CottonSaree from "./Components/Sarees/CottonSaree";
import MysoreCotton from "./Components/Sarees/MysoreCotton";
import SilkSaree from "./Components/Sarees/SilkSaree";
import SareeComboOffer from "./Components/Sarees/SareeComboOffer";
import Blouse from "./Components/Blouse/Blouse";
import BittuKurti from "./Components/Women/BittuKurti";
import KurtiReliance from "./Components/Women/KurtiReliance";
import PlazzoSet from "./Components/Women/PlazzoSet";
import CottonTop from "./Components/Women/CottonTop";
import DigitalTop from "./Components/Women/DigitalTop";
import WesternTop from "./Components/Women/WesternTop";
import TShirt from "./Components/Women/TShirt";
import MaxiTops from "./Components/Women/MaxiTops";
import Jeggings from "./Components/Women/Jeggings";
import NightWear from "./Components/Women/NightWear";
import Nighty from "./Components/Women/Nighty";
import KidFrock from "./Components/KidsWear/KidFrock";
import KidCottonTop from "./Components/KidsWear/KidCottonTop";
import KidPiece from "./Components/KidsWear/KidPiece";
import KidLeggings from "./Components/KidsWear/KidLeggings";
import BoyKid from "./Components/KidsWear/BoyKid";
import ProductDetails from "./Components/NavFoot/ProductDetails";
import DashBoard from "./Components/Dashboard/DashBoard";
import ProductPage from "./Components/Product/ProductPage";
import { SliderProvider } from "./contexts/SliderContext";
import { CartProvider } from "./contexts/CartContext";
import { OrderProvider } from "./contexts/OrderContext";
import LogIn from "./AdminLogin/LogIn";
import { ProductProvider } from "./contexts/ProductContext";


function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <SliderProvider>
        <CartProvider>
          <OrderProvider>
            <ProductProvider>
          <Router>
            <Navbar />
            <Routes>
              <Route path="/productdetails/:slug" element={<ProductDetails />} />
              <Route path="/" element={<Home />} />
              <Route path="/sarees" element={<SareesCol />} />
              {/*Submenu */}
              <Route path="/sarees/cotton-saree" element={<CottonSaree />} />
              <Route
                path="/sarees/Mysore-Silk-Cotton"
                element={<MysoreCotton />}
              />
              <Route path="/sarees/silk-sarees" element={<SilkSaree />} />
              <Route
                path="/sarees/Saree-Combo-Offer"
                element={<SareeComboOffer />}
              />

              <Route path="/women" element={<WomenWear />} />
              {/*Submenu */}
              <Route path="/kurtis-sets/kurtis-pants" element={<KurtiwithPants />} />
              <Route path="/women/kurti-maxi" element={<BittuKurti />} />
              <Route
                path="/kurtis-sets/kurti-reliance-brand"
                element={<KurtiReliance />}
              />
              <Route path="/kurtis-sets/plazzo-set" element={<PlazzoSet />} />
              <Route path="/women/cotton-top" element={<CottonTop />} />
              <Route path="/women/digital-top" element={<DigitalTop />} />
              <Route path="/women/western-top" element={<WesternTop />} />
              <Route path="/women/t-shirt" element={<TShirt />} />
              <Route path="/women/maxi-tops" element={<MaxiTops />} />
              <Route path="/women/jeggings" element={<Jeggings />} />
              <Route path="/women/night-wear" element={<NightWear />} />
              <Route path="/women/nighty" element={<Nighty />} />

              <Route path="/services" element={<StitchingService />} />
              {/*Stitching designs */}
              <Route path="/aari-work" element={<AariWorkPage />} />
              <Route path="/lehenga-stitching" element={<LehengaStitching />} />
              <Route path="/chudi-stitching" element={<ChudiStitching />} />
              <Route path="/umbrella-frock" element={<UmbrellaStitching />} />
              <Route path="/choli-stitching" element={<CholiStitching />} />
              <Route path="/skirt-and-top" element={<SkirtStitching />} />

              <Route path="/blouse" element={<Blouse />} />

              <Route path="/kids" element={<Kids />} />
              {/*Submenu */}
              <Route path="/kids/kid-frock" element={<KidFrock />} />
              <Route path="/kids/kid-cotton-top" element={<KidCottonTop />} />
              <Route path="/kids/kid-3-piece" element={<KidPiece />} />
              <Route path="/kids/kid-leggings" element={<KidLeggings />} />
              <Route path="/kids/jean-shirt" element={<BoyKid />} />

              <Route path="/collections" element={<CollectionsCombo />} />
              {/*Submenu */}
              <Route
                path="/collections/mom-kid/combo-sets"
                element={<MainTab />}
              />
              <Route path="/contact" element={<Contact />} />
              <Route path="/dashboard" element={<DashBoard />} />
              <Route path="/products/:id" element={<ProductPage />} />
              <Route path="/admin" element={<LogIn />} />
            </Routes>
            <Footer />
          </Router>
          </ProductProvider>
          </OrderProvider>
        </CartProvider>
      </SliderProvider>
    </>
  );
}

export default App;
