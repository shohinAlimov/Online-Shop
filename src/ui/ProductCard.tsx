import Star from "../assets/icons/product-card-icons/product-card-filled-star.svg?react";
import HalfStar from "../assets/icons/product-card-icons/product-card-half-filled-star.svg?react";
import { ProductCardProps } from "../types/ProductCardTypes";

/* Icons */
import Wishlist from "../assets/icons/product-card-icons/product-card-wishlist.svg?react";
import View from "../assets/icons/product-card-icons/product-card-view.svg?react";
import { useState } from "react";


const ProductCard: React.FC<ProductCardProps> = ({
  id,
  title,
  price,
  discountPercentage,
  rating,
  stock,
  thumbnail,
}) => {
  const [isActive, setIsActive] = useState(false);
  const finalPrice = (price * (1 - discountPercentage / 100)).toFixed(2);

  const handleWishlistClick = () => {
    setIsActive(!isActive);
  };

  const handleAddToCart = () => {
    const product = {
      id,
      title,
      price,
      finalPrice,
      rating,
      stock,
      thumbnail,
    }

    const cart = JSON.parse(localStorage.getItem("cart") || "[]");

    cart.push(product);

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
        <span className="product-card__discount">-{discountPercentage.toFixed(0)}%</span>
        <img src={thumbnail} alt={title} className="product-card__image" />
        <div className="product-card__action">
          <button className={`btn product-card__btn ${isActive ? "active" : ""}`} onClick={handleWishlistClick} >
            <Wishlist className="product-card__wishlist" width={24} height={24} />
          </button>
          <button className="btn product-card__btn">
            <View width={24} height={24} />
          </button>
        </div>
        <div className="product-card__add-cart">
          <button
            className="btn product-card__cart-text"
            type="button"
            onClick={handleAddToCart}
          >Add To Cart</button>
        </div>
      </div>
      <a className="product-card__bottom" href="#">
        <span className="product-card__title">{title}</span>
        <span className="product-card__pricing">
          <span className="product-card__current">${finalPrice}</span>
          <span className="product-card__old">${price}</span>
        </span>

        <span className="product-card__inner">
          <span className="product-card__rating">
            {displayStars(rating)}
          </span>
          <span className="product-card__stock">({stock})</span>
        </span>

      </a>
    </div>
  );
};

export default ProductCard;
