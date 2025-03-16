import { useEffect, useState } from "react";
import Header from "../ui/Header";
import { Link } from "react-router-dom";
import ProductCard from "../ui/ProductCard";
import { ProductCardProps } from "../types/ProductCardTypes";


function WishlistPage() {
  const [wishlistItems, setWishlistItems] = useState<ProductCardProps[]>([]);

  useEffect(() => {
    const wishlist = JSON.parse(localStorage.getItem("wishlist") || "[]");

    setWishlistItems(wishlist)
  }, [])

  const handleRemoveFromWishlist = (id: string) => {
    const updatedWishlist = wishlistItems.filter((item: any) => item.id !== id);

    setWishlistItems(updatedWishlist);
    localStorage.setItem("wishlist", JSON.stringify(updatedWishlist));
  };

  return (
    <>
      <Header />
      <main>
        <section className="wishlist">
          <div className="container">
            {wishlistItems.length === 0 ? (
              <div className="wishlist__empty">
                <p className="wishlist__text">No items in your wishlist.</p>
                <Link className="btn wishlist__btn" to="/">See Products</Link>
              </div>
            ) : (
              <>
                <div className="wishlist__top">
                  <span className="wishlist__counter">Wishlist ({wishlistItems.length})</span>
                  <button className="btn btn--stroke">Move All To Bag</button>
                </div>

                <>
                  <ul className="wishlist__catalog">
                    {wishlistItems.map((item) => (
                      <li className="wishlist__item" key={item.id}>
                        <ProductCard
                          {...item}
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

      </main >
    </>
  )
}

export default WishlistPage;