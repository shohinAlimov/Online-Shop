import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import AboutPage from "./pages/AboutPage";
import ContactsPage from "./pages/ContactsPage";
import LoginPage from "./pages/LoginPage";
import RegistrationPage from "./pages/RegistrationPage";
import PageNotFoundPage from "./pages/PageNotFoundPage";
import WishlistPage from "./pages/WishlistPage";
import CartPage from "./pages/CartPage";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/About" element={<AboutPage />} />
        <Route path="/Contacts" element={<ContactsPage />} />
        <Route path="/SignIn" element={<LoginPage />} />
        <Route path="/SignUp" element={<RegistrationPage />} />
        <Route path="/Wishlist" element={<WishlistPage />} />
        <Route path="/Cart" element={<CartPage />} />
        <Route path="*" element={<PageNotFoundPage />} />
      </Routes>
    </Router>
  );
}

export default App;
