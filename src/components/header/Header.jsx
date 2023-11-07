import styles from "./Header.module.scss";
import logo from "../../assets/images/logo.webp";
import { useState } from "react";

const Header = () => {
  const [toggleMenu, setToggleMenu] = useState(false);
  return (
    <div className={styles.wrapper}>
      <div className={`sw ${styles.desktop_container}`}>
        <img src={logo} alt="logo" />

        <ul>
          <li>Home</li>
          <li>About </li>
          <li>
            Our Services
            <svg
              xmlns="http://www.w3.org/2000/svg"
              height="24"
              viewBox="0 -960 960 960"
              width="24"
            >
              <path d="M480-345 240-585l56-56 184 184 184-184 56 56-240 240Z" />
            </svg>
          </li>
          <li>
            Contact Us
            <svg
              xmlns="http://www.w3.org/2000/svg"
              height="24"
              viewBox="0 -960 960 960"
              width="24"
            >
              <path d="M480-345 240-585l56-56 184 184 184-184 56 56-240 240Z" />
            </svg>
          </li>
          <li>Store</li>
        </ul>

        <div className={styles.buttons}>
          <button>Login</button>
          <button>Get a free demo</button>
          {!toggleMenu ? (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              height="24"
              viewBox="0 -960 960 960"
              width="24"
              className={styles.hamburger}
              onClick={() => setToggleMenu(!toggleMenu)}
            >
              <path d="M120-240v-80h720v80H120Zm0-200v-80h720v80H120Zm0-200v-80h720v80H120Z" />
            </svg>
          ) : (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              height="24"
              viewBox="0 -960 960 960"
              width="24"
              className={styles.times}
              onClick={() => setToggleMenu(!toggleMenu)}
            >
              <path d="m256-200-56-56 224-224-224-224 56-56 224 224 224-224 56 56-224 224 224 224-56 56-224-224-224 224Z" />
            </svg>
          )}
        </div>
      </div>
      {toggleMenu && (
        <div className={`sw ${styles.mobile_container}`}>
          <ul>
            <li>Home</li>
            <li>About </li>
            <li>Our Services</li>
            <li>Contact Us</li>
            <li>Store</li>
          </ul>

          <div className={styles.buttons}>
            <button>Login</button>
            <button>Get a free demo</button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Header;
