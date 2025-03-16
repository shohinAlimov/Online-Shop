import Star from "../assets/icons/product-card-icons/product-card-filled-star.svg?react";
import HalfStar from "../assets/icons/product-card-icons/product-card-half-filled-star.svg?react";
import { ProductCardProps } from "../types/ProductCardTypes";
import { useEffect, useState } from "react";

/* Icons */
import Wishlist from "../assets/icons/product-card-icons/product-card-wishlist.svg?react";
import View from "../assets/icons/product-card-icons/product-card-view.svg?react";
import CartIcon from "../assets/icons/product-card-icons/product-card-add-cart.svg?react";
import RemoveIcon from "../assets/icons/product-card-icons/product-card-remove.svg?react";

const ProductCard: React.FC<ProductCardProps> = ({
  id,
  title,
  price,
  discountPercentage = 0,
  showRating = true,
  rating = 0,
  stock,
  thumbnail,
  showCartIcon = false,
  showDeleteBtn = false,
  onRemove
}) => {
  const [isActive, setIsActive] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const [modalMessage, setModalMessage] = useState("");

  useEffect(() => {
    const wishlist = JSON.parse(localStorage.getItem("wishlist") || "[]");
    const productExists = wishlist.some((item: any) => item.id === id);
    setIsActive(productExists);
  }, [id]);

  const showNotification = (message: string) => {
    setModalMessage(message);
    setShowModal(true);
    setTimeout(() => setShowModal(false), 2000); // Hide after 2 seconds
  };

  const finalPrice = discountPercentage > 0
    ? (price * (1 - discountPercentage / 100)).toFixed(2)
    : price.toFixed(2);

  const handleDeleteItem = () => {
    if (onRemove) {
      onRemove(id);
    }
  };

  const handleWishlistClick = () => {
    let wishlist = JSON.parse(localStorage.getItem("wishlist") || "[]");
    const productIndex = wishlist.findIndex((item: any) => item.id === id);

    if (productIndex !== -1) {
      // Remove from wishlist
      wishlist.splice(productIndex, 1);
      setIsActive(false);
      showNotification("Removed from wishlist!");
    } else {
      // Add to wishlist
      wishlist.push({ id, title, price, rating, stock, thumbnail, discountPercentage });
      setIsActive(true);
      showNotification("Added to wishlist!");
    }

    localStorage.setItem("wishlist", JSON.stringify(wishlist));
  };

  const handleAddToCart = () => {
    const cart = JSON.parse(localStorage.getItem("cart") || "[]");

    const existingProduct = cart.find((item: any) => item.id === id);

    if (existingProduct) {

      existingProduct.quantity += 1; // Увеличиваем количество
    } else {
      cart.push({
        id,
        title,
        price,
        finalPrice,
        rating,
        stock,
        thumbnail,
        quantity: 1, // Добавляем новый продукт с quantity = 1
      });
    }

    localStorage.setItem("cart", JSON.stringify(cart));
    alert("Product added to cart!");
  }


  function displayStars(rating: number) {
    let wholeNumbers = Math.floor(rating); // Count whole numbers
    let hasHalfStar = rating % 1 >= 0.5; // Check if there's a half star
    let totalStars = 5;

    const starsArray = [];

    // Add full stars
    for (let i = 0; i < wholeNumbers; i++) {
      starsArray.push(<Star key={i} width={20} height={20} color="#FFAD33" />);
    }

    // Add half star if needed
    if (hasHalfStar) {
      starsArray.push(<HalfStar key="half" width={22} height={22} color="#FFAD33" />);
    }

    let remainingStars = totalStars - starsArray.length;
    for (let i = 0; i < remainingStars; i++) {
      starsArray.push(<Star key={`empty-${i}`} width={20} height={20} color="#BFBFBF" />);
    }

    return starsArray;
  }



  return (
    <div className="product-card" key={id}>
      {showModal && (
        <div className={showModal ? "modal" : "modal hide"}>
          <p>{modalMessage}</p>
        </div>
      )}

      <div className="product-card__top">
        {discountPercentage > 0 && (
          <span className="product-card__discount">-{discountPercentage.toFixed(0)}%</span>
        )}
        <img src={thumbnail} alt={title} className="product-card__image" />
        <div className="product-card__action">


          {showDeleteBtn ? (
            <button className="btn product-card__btn" onClick={handleDeleteItem}>
              <RemoveIcon width={24} height={24} />
            </button>
          ) : (
            <>
              <button className={`btn product-card__btn ${isActive ? "active" : ""}`} onClick={handleWishlistClick} >
                <Wishlist className="product-card__wishlist" width={24} height={24} />
              </button>
              <button className="btn product-card__btn">
                <View width={24} height={24} />
              </button>
            </>
          )}
        </div>
        <div className="product-card__add-cart">
          <button
            className="btn product-card__cart-text"
            type="button"
            onClick={handleAddToCart}
          >
            {showCartIcon && (
              <CartIcon width={24} height={24} />
            )}
            Add To Cart</button>
        </div>
      </div>
      <a className="product-card__bottom" href="#">
        <span className="product-card__title">{title}</span>
        <span className="product-card__pricing">
          <span className="product-card__current">${finalPrice}</span>
          <span className="product-card__old">${price}</span>
        </span>
        {showRating ? (
          <span className="product-card__inner">
            <span className="product-card__rating">
              {displayStars(rating)}
            </span>
            <span className="product-card__stock">({stock})</span>
          </span>) : (
          <>

          </>
        )}

      </a>
    </div>
  );
};

export default ProductCard;
