import Star from "../assets/icons/product-card-icons/product-card-filled-star.svg?react";
import HalfStar from "../assets/icons/product-card-icons/product-card-half-filled-star.svg?react";
import { ProductCardProps } from "../types/ProductCardTypes";
import { useState } from "react";

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

  const finalPrice = discountPercentage > 0
    ? (price * (1 - discountPercentage / 100)).toFixed(2)
    : price.toFixed(2);

  const handleDeleteItem = () => {
    if (onRemove) {
      onRemove(id);
    }
  };

  const handleWishlistClick = () => {
    setIsActive(!isActive);

    const wishlist = JSON.parse(localStorage.getItem("wishlist") || "[]");

    const existingProduct = wishlist.find((item: any) => item.id === id);

    if (existingProduct) {
      alert("This item is already in your wishlist!");
      return;
    }

    wishlist.push({
      id,
      title,
      price,
      rating,
      stock,
      thumbnail,
      discountPercentage,
    });

    localStorage.setItem("wishlist", JSON.stringify(wishlist));

    alert("Item added tso wishlist!");
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
