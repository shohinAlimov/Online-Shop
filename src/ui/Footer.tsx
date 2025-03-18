/* Images */
import QRCode from "../assets/images/footer-images/footer-qr-code.png";
import GooglePay from "../assets/images/footer-images/footer-google-play.png";
import Applestore from "../assets/images/footer-images/footer-app-store.png";

/* Icons */
import SendIcon from "../assets/icons/footer-icons/footer-send.svg?react"
import FacebookIcon from "../assets/icons/footer-icons/footer-facebook.svg?react";
import TwitterIcon from "../assets/icons/footer-icons/footer-twitter.svg?react"
import InstgramIcon from "../assets/icons/footer-icons/footer-inst.svg?react";
import LinkedinIcon from "../assets/icons/footer-icons/footer-linkedin.svg?react";
import CopyrightIcon from "../assets/icons/footer-icons/footer-copyright.svg?react";

function Footer() {
  return (
    <>
      <footer className="footer">
        <div className="footer__top">
          <div className="container">
            <div className="footer__wrapper">
              <div className="footer__block">
                <div className="footer__inner">
                  <a className="footer__name-logo" href="#">Exclusive</a>
                  <a className="footer__bold" href="#">Subscribe</a>
                  <a className="footer__normal" href="#">Get 10% off your first order</a>
                </div>
                <div className="footer__send">
                  <input className="footer__send-input" type="search" placeholder="Enter your email" />

                  <SendIcon
                    className="footer__send-icon"
                    width={24}
                    height={24}
                    aria-hidden="true"
                  />
                </div>
              </div>
              <div className="footer__block">
                <div className="footer__inner footer__inner--support">
                  <a className="footer__bold" href="#">Support</a>
                  <ul className="footer__block">
                    <li className="footer__item">
                      <a className="footer__normal" href="#">111 Bijoy sarani, Dhaka, DH 1515, Bangladesh.</a>
                    </li>
                    <li className="footer__item">
                      <a className="footer__normal" href="#">exclusive@gmail.com</a>
                    </li>
                    <li className="footer__item">
                      <a className="footer__normal" href="#">+88015-88888-9999</a>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="footer__block">
                <div className="footer__inner">
                  <a className="footer__bold" href="#">Account</a>
                  <ul className="footer__block">
                    <li className="footer__item">
                      <a className="footer__normal" href="#">My Account</a>
                    </li>
                    <li className="footer__item">
                      <a className="footer__normal" href="#">Login / Register</a>
                    </li>
                    <li className="footer__item">
                      <a className="footer__normal" href="#">Cart</a>
                    </li>
                    <li className="footer__item">
                      <a className="footer__normal" href="#">Wishlist</a>
                    </li>
                    <li className="footer__item">
                      <a className="footer__normal" href="#">Shop</a>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="footer__block">
                <div className="footer__inner">
                  <a className="footer__bold" href="#">Quick Link</a>
                  <ul className="footer__block">
                    <li className="footer__item">
                      <a className="footer__normal" href="#">Privacy Policy</a>
                    </li>
                    <li className="footer__item">
                      <a className="footer__normal" href="#">Terms Of Use</a>
                    </li>
                    <li className="footer__item">
                      <a className="footer__normal" href="#">FAQ</a>
                    </li>
                    <li className="footer__item">
                      <a className="footer__normal" href="#">Contact</a>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="footer__block">
                <div className="footer__inner">
                  <a className="footer__bold" href="#">Download App</a>
                  <div className="footer__app">
                    <span className="footer__sale">Save $3 with App New User Only</span>
                    <div className="footer__app-layout">
                      <a className="footer__app-qr" href="#">
                        <img width={80} height={80} src={QRCode} alt="app layout" />
                      </a>
                      <a href="#">
                        <img src={GooglePay} width={110} height={40} alt="app layout" />
                      </a>
                      <a href="#">
                        <img src={Applestore} width={110} height={40} alt="app layout" />
                      </a>
                    </div>
                    <ul className="socials">
                      <li className="socials__item">
                        <a className="socials__link" href="#">
                          <FacebookIcon
                            width={24}
                            height={24}
                            aria-hidden="true"
                          />
                        </a>
                      </li>
                      <li className="socials__item">
                        <a className="socials__link" href="#">
                          <TwitterIcon
                            width={24}
                            height={24}
                            aria-hidden="true"
                          />
                        </a>
                      </li>
                      <li className="socials__item">
                        <a className="socials__link" href="#">
                          <InstgramIcon
                            width={24}
                            height={24}
                            aria-hidden="true"
                          />
                        </a>
                      </li>
                      <li className="socials__item">
                        <a className="socials__link" href="#">
                          <LinkedinIcon
                            width={24}
                            height={24}
                            aria-hidden="true"
                          />
                        </a>
                      </li>
                    </ul>
                  </div>

                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="footer__bottom">
          <div className="container">
            <div className="footer__copyright">
              <span className="footer__copyright-part">

                <CopyrightIcon
                  width={24}
                  height={24}
                  aria-hidden="true"
                />
                <span className="footer__copyright-text">Copyright Rimel 2022. All right reserved</span>
              </span>
            </div>
          </div>
        </div>
      </footer>
    </>
  )
}

export default Footer;