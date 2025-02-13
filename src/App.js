import Navbar from "./components/Navbar";
import { Routes, Route } from "react-router-dom";
import Slider from "./components/Slider";
import ProductsList from "./components/productsList";
import About from "./components/about";
import ProductDetails from "./components/ProductDetails";
function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route
          path="/"
          element={
            <>
              <Slider />
              <ProductsList />
            </>
          }
        />

        <Route path="about" element={<About/>} />

        <Route path="product/:productId" element={<ProductDetails/>}/>
      </Routes>

    </div>
  );
}

export default App;
