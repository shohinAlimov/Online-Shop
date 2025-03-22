import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Footer from "../ui/Footer";
import Header from "../ui/Header";
import SidePart from "../assets/images/sign-login-images/side-part-image.png";
import { useNotification } from "../hooks/useNotification";

function LoginPage() {
  const navigate = useNavigate(); // Hook for navigation
  const { showModal, modalMessage, showNotification } = useNotification(); // Notification hook

  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const [isLoggedIn, setIsLoggedIn] = useState<boolean>(false); // Track login status

  useEffect(() => {
    // Check if user is already logged in
    const loggedInUser = localStorage.getItem("loggedInUser");
    if (loggedInUser) {
      setIsLoggedIn(true);
    }
  }, []);


  // Handle input changes
  const handleChange = (e: any) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // Handle login
  const handleLogin = (e: any) => {
    e.preventDefault();

    const { email, password } = formData;

    if (!email || !password) {
      showNotification("Please enter both email and password.");
      return;
    }

    // Get stored users from localStorage
    const users = JSON.parse(localStorage.getItem("users") || "[]");

    // Check if user exists and password matches
    const user = users.find((user: { email: string; password: string; }) => user.email === email && user.password === password);

    if (user) {
      showNotification("Login successful!");
      localStorage.setItem("loggedInUser", JSON.stringify(user)); // Store logged-in user
      setIsLoggedIn(true);
      navigate("/dashboard"); // Redirect to dashboard
    } else {
      showNotification("Invalid email or password.");
    }
  };

  const handleLogout = () => {
    localStorage.removeItem("loggedInUser");
    setIsLoggedIn(false);
    showNotification("Logged out successfully.");
  };


  return (
    <>
      <Header />
      <main>
        <section className="account-auth">
          {showModal && (
            <div className={showModal ? "modal" : "modal hide"}>
              <p>{modalMessage}</p>
            </div>
          )}
          <div className="container">
            <div className="account-auth__wrapper">
              <img className="account-auth__image" src={SidePart} width={805} height={781} alt="" />
              <div className="account-auth__info-part account-auth__info-part--login">
                <h2 className="account-auth__heading">Log in to Exclusive</h2>
                <span className="account-auth__note">Enter your details below</span>

                {!isLoggedIn ? (
                  <form className="account-form" onSubmit={handleLogin}>
                    <input
                      className="custom-input account-form__input"
                      type="text"
                      name="email"
                      placeholder="Email or Phone Number"
                      value={formData.email}
                      onChange={handleChange}
                    />
                    <input
                      className="custom-input account-form__input"
                      type="password"
                      name="password"
                      placeholder="Password"
                      value={formData.password}
                      onChange={handleChange}
                    />
                    <div className="account-form__actions account-form__actions--login">
                      <button className="btn btn--primary account-form__btn account-form__btn--small" type="submit">
                        Log In
                      </button>
                      <Link to="/" className="account-form__reset-pswrd">
                        Forget Password?
                      </Link>
                    </div>
                  </form>
                ) : (
                  <div className="account-form__actions">
                    <p>You are already logged in.</p>
                    <button className="btn btn--primary account-form__btn account-form__btn--small" onClick={handleLogout}>
                      Log Out
                    </button>
                  </div>
                )}
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}

export default LoginPage;
