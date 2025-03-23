import Footer from "../ui/Footer";
import Header from "../ui/Header";
import { Link, useNavigate } from "react-router-dom";
import { useNotification } from "../hooks/useNotification";
import { useEffect, useState } from "react";
import { FormField } from "../ui/FormField";

function AccountPage() {
  const { showModal, modalMessage, showNotification } = useNotification(); // Notification hook
  const navigate = useNavigate();
  const [userName, setUserName] = useState<string | null>("");

  useEffect(() => {
    // Retrieve user data from localStorage
    const loggedInUser = JSON.parse(localStorage.getItem("loggedInUser") || "null");

    if (loggedInUser && loggedInUser.name) {
      setUserName(loggedInUser.name);
    }
  }, []);

  const handleLogout = () => {
    localStorage.removeItem("loggedInUser");
    showNotification("Logged out successfully.");
    navigate("/");
  };

  // State to track which section is currently active
  const [activeSection, setActiveSection] = useState('profile');

  // Function to handle navigation clicks
  const handleNavClick = (section: any) => {
    setActiveSection(section);
  };

  return (
    <>
      <Header />
      <main>
        <section className="dashboard">
          {showModal && (
            <div className={showModal ? "modal" : "modal hide"}>
              <p>{modalMessage}</p>
            </div>
          )}
          <div className="container">
            <div className="dashboard__header">
              <span className="nav">
                <Link className="nav__home" to={"/"}>Home</Link>
                <span className="nav__sep">/</span>
                <Link className="nav__cart" to={"/myaccount"}>MyAccount</Link>
              </span>
              <span className="nav__welcome">Welcome! <span className="nav__welcome-name">
                {userName}</span> </span>
            </div>
            <div className="dashboard__container">
              <aside className="sidebar">
                <div className="sidebar__header">Manage My Account</div>
                <div className="sidebar__items">
                  <div
                    className={`sidebar__item ${activeSection === 'profile' ? 'active' : ''}`}
                    onClick={() => handleNavClick('profile')}
                  >
                    My Profile
                  </div>
                  <div
                    className={`sidebar__item ${activeSection === 'addressBook' ? 'active' : ''}`}
                    onClick={() => handleNavClick('addressBook')}
                  >
                    Address Book
                  </div>
                  <div
                    className={`sidebar__item ${activeSection === 'paymentOptions' ? 'active' : ''}`}
                    onClick={() => handleNavClick('paymentOptions')}
                  >
                    My Payment Options
                  </div>
                </div>

                <div className="sidebar__header">My Orders</div>
                <div className="sidebar__items">
                  <div
                    className={`sidebar__item ${activeSection === 'returns' ? 'active' : ''}`}
                    onClick={() => handleNavClick('returns')}
                  >
                    My Returns
                  </div>
                  <div
                    className={`sidebar__item ${activeSection === 'cancellations' ? 'active' : ''}`}
                    onClick={() => handleNavClick('cancellations')}
                  >
                    My Cancellations
                  </div>
                </div>

                <div
                  className={`sidebar__header clickable ${activeSection === 'wishlist' ? 'active' : ''}`}
                  onClick={() => handleNavClick('wishlist')}
                >
                  My Wishlist
                </div>
              </aside>

              {/* Main Content Area */}
              <main className="content">
                {activeSection === 'profile' && <ProfileForm />}
                {activeSection === 'addressBook' && <AddressBookForm />}
                {activeSection === 'paymentOptions' && <PaymentOptionsForm />}
                {activeSection === 'returns' && <ReturnsContent />}
                {activeSection === 'cancellations' && <CancellationsContent />}
                {activeSection === 'wishlist' && <WishlistContent />}
              </main>
            </div>
            <div className="account-form__actions">
              <p>You are already logged in.</p>
              <button className="btn btn--primary account-form__btn account-form__btn--small" onClick={handleLogout}>
                Log Out
              </button>
            </div>
          </div>
        </section>
      </main >
      <Footer />
    </>
  )
}

const ProfileForm = () => {
  return (
    <div className="content__container">
      <h2 className="content__header">Edit Your Profile</h2>

      <div className="content__form">
        <div className="content__form-group">
          <FormField label="First Name">
            <input
              type="text"
              name="name"

            />
          </FormField>
        </div>
        <div className="content__form-group">
          <label>Last Name</label>
          <input type="text" placeholder="Rival" />
        </div>
        <div className="content__form-group">
          <label>Email</label>
          <input type="email" placeholder="melrival1@gmail.com" />
        </div>
        <div className="content__form-group">
          <label>Address</label>
          <input type="text" placeholder="Kingston, 5236, United State" />
        </div>
      </div>

      <div className="password-section">
        <h3>Password Changes</h3>
        <div className="form-group full-width">
          <input type="password" placeholder="Current Password" />
        </div>
        <div className="form-group full-width">
          <input type="password" placeholder="New Password" />
        </div>
        <div className="form-group full-width">
          <input type="password" placeholder="Confirm New Password" />
        </div>
      </div>

      <div className="form-actions">
        <button className="btn-cancel">Cancel</button>
        <button className="btn-save">Save Changes</button>
      </div>
    </div>
  );
};

// Placeholder components for other sections
const AddressBookForm = () => <div className="form-container"><h2>Address Book</h2>...</div>;
const PaymentOptionsForm = () => <div className="form-container"><h2>Payment Options</h2>...</div>;
const ReturnsContent = () => <div className="form-container"><h2>My Returns</h2>...</div>;
const CancellationsContent = () => <div className="form-container"><h2>My Cancellations</h2>...</div>;
const WishlistContent = () => <div className="form-container"><h2>My Wishlist</h2>...</div>;


export default AccountPage;