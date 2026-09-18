import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Layout } from '../src/Components/Layout';
import { Home } from './pages/Home';
import { CategoryPage } from './pages/CategoryPage';
import { ProductDetailPage } from './pages/ProductDetailPage';
import { CartPage } from './pages/CartPage';
import { ReturnsPage } from './pages/ReturnsPage';
import { DetailedReturnPolicyPage } from './pages/DetailedReturnPolicyPage';
import { TrackOrderPage } from './pages/TrackOrderPage';
import { ShopByVehiclePage } from './pages/ShopByVehiclePage';
import { LoginPage } from './pages/LoginPage';
import { SignupPage } from './pages/SignupPage';
import { AboutUsPage } from './pages/AboutUsPage';
import { ContactPage } from './pages/ContactPage';
import { FAQPage } from './pages/FAQPage';
import { AdminDashboardPage } from './pages/AdminDashboardPage';
import { AdminLoginPage } from './pages/AdminLoginPage';
import { VehicleProductsPage } from './pages/VehicleProductsPage';
import { CartProvider } from './context/CartContext';
import { AuthProvider } from './context/AuthContext';

function App() {
  return (
    <AuthProvider>
      <CartProvider>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Layout />}>
              <Route index element={<Home />} />
              <Route path="category" element={<CategoryPage />} />
              <Route path="category/:catName" element={<CategoryPage />} />
              <Route path="product/:id" element={<ProductDetailPage />} />
              <Route path="cart" element={<CartPage />} />
              <Route path="returns" element={<ReturnsPage />} />
              <Route path="detailed-return-policy" element={<DetailedReturnPolicyPage />} />
              <Route path="track-order" element={<TrackOrderPage />} />
              <Route path="shop-by-vehicle" element={<ShopByVehiclePage />} />
              <Route path="vehicle/:make/:model" element={<VehicleProductsPage />} />
              <Route path="login" element={<LoginPage />} />
              <Route path="signup" element={<SignupPage />} />
              <Route path="about" element={<AboutUsPage />} />
              <Route path="contact" element={<ContactPage />} />
              <Route path="faqs" element={<FAQPage />} />
              <Route path="admin-login" element={<AdminLoginPage />} />
              <Route path="admin" element={<AdminDashboardPage />} />
            </Route>
          </Routes>
        </BrowserRouter>
      </CartProvider>
    </AuthProvider>
  );
}

export default App;
