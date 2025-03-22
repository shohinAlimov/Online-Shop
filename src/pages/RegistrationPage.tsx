import Footer from "../ui/Footer";
import Header from "../ui/Header";

/* Images */
import SidePart from "../assets/images/sign-login-images/side-part-image.png";
import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import { useNotification } from "../hooks/useNotification";

function RegistrationPage() {
  const navigate = useNavigate(); // ✅ Fix: use useNavigate()
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
  })

  const { showModal, modalMessage, showNotification } = useNotification(); // Use it here


  // Handle input change
  const handleChange = (e: any) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // Handle registration
  const handleSignUp = (e: any) => {
    e.preventDefault();

    const { name, email, password } = formData;

    // Simple validation
    if (!name || !email || !password) {
      showNotification("Please fill all fields!");
      return;
    }

    // Check if user already exists
    const users = JSON.parse(localStorage.getItem("users") || "[]");
    const userExists = users.some((user: { email: string; }) => user.email === email);

    if (userExists) {
      showNotification("User already exists. Please log in.");
      return;
    }

    // Save user data
    const newUser = { name, email, password };
    users.push(newUser);
    localStorage.setItem("users", JSON.stringify(users));

    showNotification("Registration successful! Please log in.");
    navigate("/SignIn"); // Redirect to login page
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
              <div className="account-auth__info-part">
                <h2 className="account-auth__heading">Create an account</h2>
                <span className="account-auth__note">Enter your details below</span>

                <form className="account-form" onSubmit={handleSignUp}>
                  <input
                    className="custom-input account-form__input"
                    type="text"
                    name="name"
                    placeholder="Name"
                    value={formData.name}
                    onChange={handleChange}
                  />
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
                  <div className="account-form__actions">
                    <button className="btn btn--primary account-form__btn" type="submit">
                      Create Account
                    </button>
                    <button className="btn btn--stroke account-form__btn account-form__btn--margin">
                      Google
                    </button>
                    <span className="account-form__account">
                      <span className="account-form__account-text">Already have an account?</span>
                      <Link className="account-form__account-link" to="/SignIn">
                        Log in
                      </Link>
                    </span>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}

export default RegistrationPage;

