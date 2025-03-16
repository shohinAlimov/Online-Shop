import { useEffect, useState } from "react";
import Header from "../ui/Header";
import { Link } from "react-router-dom";
import ProductCard from "../ui/ProductCard";
import { ProductCardProps } from "../types/ProductCardTypes";
import Footer from "../ui/Footer";

function WishlistPage() {
  const [wishlistItems, setWishlistItems] = useState<ProductCardProps[]>([]);

  useEffect(() => {
    const wishlist = JSON.parse(localStorage.getItem("wishlist") || "[]");
    setWishlistItems(wishlist);
  }, []);

  const handleRemoveFromWishlist = (id: string) => {
    const updatedWishlist = wishlistItems.filter((item: any) => item.id !== id);
    setWishlistItems(updatedWishlist);
    localStorage.setItem("wishlist", JSON.stringify(updatedWishlist));
  };

  const handleMoveAllToBag = () => {
    const cart = JSON.parse(localStorage.getItem("cart") || "[]");

    wishlistItems.forEach((wishlistItem) => {
      console.log("Wishlist Item:", wishlistItem);

      const existingProduct = cart.find((item: any) => item.id === wishlistItem.id);
      if (existingProduct) {
        existingProduct.quantity += 1;
      } else {
        // Ensure discountPercentage has a default value (0) if undefined
        const discount = wishlistItem.discountPercentage ?? 0;
        const finalPrice = discount > 0
          ? Number((wishlistItem.price * (1 - discount / 100)).toFixed(2))
          : wishlistItem.price;

        cart.push({ ...wishlistItem, quantity: 1, finalPrice });
      }
    });

    localStorage.setItem("cart", JSON.stringify(cart));
    setWishlistItems([]);
    localStorage.setItem("wishlist", JSON.stringify([]));
  };



  return (
    <>
      <Header />
      <main>
        <section className="wishlist">
          <div className="container">
            {wishlistItems.length === 0 ? (
              <div className="wishlist__empty">
                <span className="wishlist__text">No items in your wishlist.</span>
                <Link className="btn btn--stroke wishlist__btn" to="/">See Products</Link>
              </div>
            ) : (
              <>
                <div className="wishlist__top">
                  <span className="wishlist__counter">Wishlist ({wishlistItems.length})</span>
                  <button className="btn btn--stroke" onClick={handleMoveAllToBag}>Move All To Bag</button>
                </div>

                <>
                  <ul className="wishlist__catalog">
                    {wishlistItems.map((item) => (
                      <li className="wishlist__item" key={item.id}>
                        <ProductCard
                          {...item}
                          price={item.price}
                          showRating={false}
                          showCartIcon={false}
                          showDeleteBtn={true}
                          onRemove={handleRemoveFromWishlist}
                        />
                      </li>
                    ))}
                  </ul>
                </>
              </>
            )}
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}

export default WishlistPage;