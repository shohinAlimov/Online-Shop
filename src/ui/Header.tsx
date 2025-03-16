import { Link, NavLink } from 'react-router-dom';
import CartIcon from '../assets/icons/header-icons/header-cart.svg?react';
import SearchIcon from '../assets/icons/header-icons/header-search.svg?react';
import WishlistIcon from "../assets/icons/header-icons/header-wishlist.svg?react";
import { useEffect, useState } from 'react';

function Header() {
  const [isActive, setIsActive] = useState(false);
  const [totalItems, setTotalItems] = useState(0);
  const [totalWishlist, setTotalWishlist] = useState(0);


  const toggleClass = () => {
    setIsActive(!isActive);
  }

  useEffect(() => {
    const updateWishlistCount = () => {
      const wishlist = JSON.parse(localStorage.getItem("wishlist") || "[]");
      setTotalWishlist(wishlist.length);
    };

    updateWishlistCount();

    window.addEventListener("storage", updateWishlistCount);

    return () => {
      window.removeEventListener("storage", updateWishlistCount);
    };
  }, [])

  useEffect(() => {
    const updateCartCount = () => {
      const cart = JSON.parse(localStorage.getItem("cart") || "[]");
      const total = cart.reduce((sum: number, item: any) => sum + item.quantity, 0);
      setTotalItems(total);
    };

    updateCartCount(); // Update on first render

    // Listen for storage updates (if cart is updated in another component)
    window.addEventListener("storage", updateCartCount);

    return () => {
      window.removeEventListener("storage", updateCartCount);
    };
  }, []);

  return (
    <header className="header">
      <div className="header__top">
        <div className="container">
          <div className="header__top-wrapper">
            <span className="header__top-sale">
              <span className="header__top-note">
                Summer Sale For All Swim Suits And Free Express Delivery&nbsp;&mdash;
                OFF&nbsp;50%!
              </span>
              <a className="header__top-shop__now" href="#">ShopNow</a>
            </span>
            <select className="header__top-lang__select" name="lang" id="lang">
              <option className="header__top-option" value="en">English</option>
              <option className="header__top-option" value="ru">Russian</option>
            </select>
          </div>
        </div>
      </div>
      <div className="header__bottom">
        <div className="container">
          <div className="header__bottom-wrapper">
            <Link className="header__logo-link" to="/">
              Exclusive
            </Link>
            <nav className="header__navigation">
              <ul className="header__navigation-list">
                <li className="header__navigation-item">
                  <NavLink className={`header__navigation-link ${isActive}`} to="/">
                    Home
                  </NavLink>
                </li>
                <li className="header__navigation-item">
                  <NavLink className={`header__navigation-link ${isActive}`} to="/Contacts">
                    Contact
                  </NavLink>
                </li>
                <li className="header__navigation-item">
                  <NavLink className={`header__navigation-link ${isActive}`} to="/About">
                    About
                  </NavLink>
                </li>
                <li className="header__navigation-item">
                  <NavLink className={`header__navigation-link ${isActive}`} to="/SignUp">
                    Sign Up
                  </NavLink>
                </li>
              </ul>
            </nav>
            <div className="header__inner">
              <div className="header__search">
                <input className="header__search-input" type="search" placeholder="What are you looking for?"></input>
                <SearchIcon className='header__search-icon' width={24} height={24} color='black' />
              </div>
              <div className="header__buttons">
                <Link className="btn header__btn" to="/Wishlist">
                  <WishlistIcon width={32} height={32} color='black' />
                  <span className='header__cart-counter'>{totalWishlist}</span>

                </Link>
                <Link className="btn header__btn" to="/Cart">
                  <CartIcon width={32} height={32} color='black' />
                  <span className='header__cart-counter'>{totalItems}</span>
                </Link>
                <button className="header__burger" type="button" onClick={toggleClass}>
                  <div className={`menu-icon ${isActive ? 'menu-icon--active' : ''}`}>
                    <span></span>
                    <span></span>
                    <span></span>
                  </div>
                </button>
              </div>
            </div>

            <nav className={`burger-menu ${isActive ? 'burger-menu--active' : ''}`}>
              <ul className="burger-menu__list">
                <li className="burger-menu__nav-item">
                  <a className="burger-menu__nav-link" href="#">
                    Woman's Fashion
                  </a>
                </li>
                <li className="burger-menu__nav-item">
                  <a className="burger-menu__nav-link" href="#">
                    Men's Fashion
                  </a>
                </li>
                <li className="burger-menu__nav-item">
                  <a className="burger-menu__nav-link" href="#">
                    Electronics
                  </a>
                </li>
                <li className="burger-menu__nav-item">
                  <a className="burger-menu__nav-link" href="#">
                    Home &amp;&nbsp;Lifestyle
                  </a>
                </li>
                <li className="burger-menu__nav-item">
                  <a className="burger-menu__nav-link" href="#">
                    Medicine
                  </a>
                </li>
                <li className="burger-menu__nav-item">
                  <a className="burger-menu__nav-link" href="#">
                    Sports &amp;&nbsp;Outdoor
                  </a>
                </li>
                <li className="burger-menu__nav-item">
                  <a className="burger-menu__nav-link" href="#">
                    Baby&rsquo;s &amp;&nbsp;Toys
                  </a>
                </li>
                <li className="burger-menu__nav-item">
                  <a className="burger-menu__nav-link" href="#">
                    Groceries &amp;&nbsp;Pets
                  </a>
                </li>
                <li className="burger-menu__nav-item">
                  <a className="burger-menu__nav-link" href="#">
                    Health &amp;&nbsp;Beauty
                  </a>
                </li>
              </ul>
              <ul className='burger-menu__list'>
                <li className='burger-manu__nav-item'>
                  <Link className='burger-menu__nav-link' to="/">Home</Link>
                </li>

                <li className='burger-manu__item'>
                  <Link className='burger-menu__nav-link' to="/Contacts">Contact</Link>
                </li>

                <li className='burger-manu__item'>
                  <Link className='burger-menu__nav-link' to="/About">About</Link>
                </li>

                <li className='burger-manu__item'>
                  <Link className='burger-menu__nav-link' to="/SignUp">SignUp</Link>
                </li>
              </ul>
            </nav>
          </div>
        </div>
      </div>
    </header>
  )
}

export default Header;