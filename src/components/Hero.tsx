/* Icons */
import DropdownIcon from "../assets/icons/hero-icons/hero-dropdown.svg?react";
import AppleIcon from "../assets/icons/hero-icons/hero-apple-logo.svg?react";
import ArrowRight from "../assets/icons/hero-icons/hero-arrow-right.svg?react";

/* Images */
import IphoneImg from "../assets/images/hero-iphone.png";

function Hero() {
  return (
    <>
      <section className="hero">
        <div className="container">
          <div className="hero__wrapper">
            <aside className="hero-aside">
              <ul className="hero-aside__list">
                <li className="hero-aside__item">
                  <a className="hero-aside__link" href="#">
                    Woman’s Fashion
                  </a>
                  <DropdownIcon width={24} height={24} />
                </li>
                <li className="hero-aside__item">
                  <a className="hero-aside__link" href="#">
                    Men’s Fashion
                  </a>
                  <DropdownIcon width={24} height={24} />
                </li>
                <li className="hero-aside__item">
                  <a className="hero-aside__link" href="#">
                    Electronics
                  </a>
                </li>
                <li className="hero-aside__item">
                  <a className="hero-aside__link" href="#">
                    Home & Lifestyle
                  </a>
                </li>
                <li className="hero-aside__item">
                  <a className="hero-aside__link" href="#">
                    Medicine
                  </a>
                </li>
                <li className="hero-aside__item">
                  <a className="hero-aside__link" href="#">
                    Sports & Outdoor
                  </a>
                </li>
                <li className="hero-aside__item">
                  <a className="hero-aside__link" href="#">
                    Baby’s & Toys
                  </a>
                </li>
                <li className="hero-aside__item">
                  <a className="hero-aside__link" href="#">
                    Groceries & Pets
                  </a>
                </li>
                <li className="hero-aside__item">
                  <a className="hero-aside__link" href="#">
                    Health & Beauty
                  </a>
                </li>
              </ul>
            </aside>
            <div className="hero__banner">
              <div className="hero__banner-info">
                <span className="hero__product">
                  <AppleIcon className="hero__apple-icon" width={40} height={49} />
                  <span className="hero__product-text">iPhone 14 Series</span>
                </span>
                <span className="hero__banner-title">Up to 10% off Voucher</span>
                <a className="hero__shop-now" href="#">
                  Shop Now
                  <ArrowRight width={24} height={24} />
                </a>
                <div className="hero__choice">
                  <button className="btn hero__color"></button>
                  <button className="btn hero__color"></button>
                  <button className="btn hero__color hero__color--selected"></button>
                  <button className="btn hero__color"></button>
                  <button className="btn hero__color"></button>
                </div>
                <img className="hero__banner-img" src={IphoneImg} alt="Banner Image" width={496} height={352} />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default Hero;