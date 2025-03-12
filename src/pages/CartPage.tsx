import { useEffect, useState } from "react";
import Header from "../ui/Header";
import { Link } from "react-router-dom";

interface CartItem {
  id: string;
  title: string;
  thumbnail: string;
  finalPrice: number;
  stock: number;
  quantity: number;
}

function CartPage() {
  const [cartItems, setCartItems] = useState<CartItem[]>([]);

  useEffect(() => {
    // Get the cart items from localStorage
    const cart = JSON.parse(localStorage.getItem("cart") || "[]");
    // Ensure each item has a quantity property
    const cartWithQuantity = cart.map((item: any) => ({
      ...item,
      quantity: item.quantity || 1
    }));
    setCartItems(cartWithQuantity);
  }, []);

  // Function to handle removing an item from the cart
  const handleDeleteItem = (id: string) => {
    // Filter out the item with the given id
    const updatedCart = cartItems.filter(item => item.id !== id);

    // Update the state with the new cart items
    setCartItems(updatedCart);

    // Update localStorage with the new cart
    localStorage.setItem("cart", JSON.stringify(updatedCart));

    alert("Item removed from cart");
  };

  // Function to update item quantity
  const updateQuantity = (id: string, newQuantity: number) => {
    if (newQuantity < 1) return;

    const updatedCart = cartItems.map(item =>
      item.id === id ? { ...item, quantity: newQuantity } : item
    );

    setCartItems(updatedCart);
    localStorage.setItem("cart", JSON.stringify(updatedCart));
  };

  // Calculate subtotal for an item
  const calculateSubtotal = (price: number, quantity: number) => {
    return (price * quantity).toFixed(2);
  };

  // Calculate cart total
  const calculateTotal = () => {
    return cartItems.reduce((total, item) => total + (item.finalPrice * item.quantity), 0).toFixed(2);
  };

  return (
    <>
      <Header />
      <main className="main">
        <section className="cart">
          <div className="container">
            <div className="cart__header">
              <span className="cart__nav">
                <Link className="cart__nav-home" to={"/"}>Home</Link>
                <span className="cart__nav-sep">/</span>
                <Link className="cart__nav-cart" to={"/Cart"}>Cart</Link>
              </span>
            </div>

            {cartItems.length === 0 ? (
              <div className="cart__empty">
                <p>No items in your cart.</p>
                <Link to="/" className="cart__continue-shopping">Continue Shopping</Link>
              </div>
            ) : (
              <div className="cart__content">
                <table className="cart__table">
                  <thead className="cart__table-header">
                    <tr className="cart__row cart__row--header">
                      <th className="cart__cell cart__cell--header cart__cell--product">Product</th>
                      <th className="cart__cell cart__cell--header cart__cell--price">Price</th>
                      <th className="cart__cell cart__cell--header cart__cell--quantity">Quantity</th>
                      <th className="cart__cell cart__cell--header cart__cell--subtotal">Subtotal</th>
                    </tr>
                  </thead>
                  <tbody className="cart__table-body">
                    {cartItems.map((item) => (
                      <tr key={item.id} className="cart__row">
                        <td className="cart__cell cart__cell--product">
                          <button
                            className="cart__remove-btn"
                            onClick={() => handleDeleteItem(item.id)}
                          >
                            ×
                          </button>
                          <div className="cart__product">
                            <img src={item.thumbnail} alt={item.title} className="cart__product-image" />
                            <span className="cart__product-name">{item.title}</span>
                          </div>
                        </td>
                        <td className="cart__cell cart__cell--price">${item.finalPrice}</td>
                        <td className="cart__cell cart__cell--quantity">
                          <div className="cart__quantity">
                            <input
                              type="text"
                              value={item.quantity.toString().padStart(2, '0')}
                              readOnly
                              className="cart__quantity-input"
                            />
                            <div className="cart__quantity-buttons">
                              <button
                                className="cart__quantity-btn cart__quantity-btn--up"
                                onClick={() => updateQuantity(item.id, item.quantity + 1)}
                              >
                                ▲
                              </button>
                              <button
                                className="cart__quantity-btn cart__quantity-btn--down"
                                onClick={() => updateQuantity(item.id, item.quantity - 1)}
                              >
                                ▼
                              </button>
                            </div>
                          </div>
                        </td>
                        <td className="cart__cell cart__cell--subtotal">
                          ${calculateSubtotal(item.finalPrice, item.quantity)}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>

                <div className="cart__footer">
                  <div className="cart__total">
                    <span className="cart__total-label">Total:</span>
                    <span className="cart__total-value">${calculateTotal()}</span>
                  </div>
                  <div className="cart__actions">
                    <Link to="/" className="cart__action cart__action--continue">Continue Shopping</Link>
                    <Link to="/checkout" className="cart__action cart__action--checkout">Proceed to Checkout</Link>
                  </div>
                </div>
              </div>
            )}
          </div>
        </section>
      </main>
    </>
  );
}

export default CartPage;