import React from "react";
import styles from "../../styles/Navbar.module.css";
import Image from "next/image";
import logo from "../../assets/Images/logo.png";
import Link from "next/link";
import Buttons from "../Buttons/Buttons";

const NavBar = () => {
  return (
    <div className={styles.navbar}>
      <div className={styles.logocontainer}>
        <Image
          src={logo}
          width={80}
          height={60}
          className={styles.logo}
        ></Image>
      </div>
      <ul className={styles.ul}>
        <li className={styles.li}>
          <Link href="/">
            <a>Destinations</a>
          </Link>
        </li>
        <li className={styles.li}>
          <Link href="/">
            <a>Hotels</a>
          </Link>
        </li>
        <li className={styles.li}>
          <Link href="/">
            <a>Flights</a>
          </Link>
        </li>
        <li className={styles.li}>
          <Link href="/">
            <a>Bookings</a>
          </Link>
        </li>
        <li className={styles.li}>
          <Link href="/">
            <Buttons className="login-btn" text="Login" />
          </Link>
        </li>
        <li className={styles.li}>
          <Link href="/">
            <Buttons className="signin-btn" text="Signup" />
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default NavBar;
