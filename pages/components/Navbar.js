import Link from "next/link";
import React from "react";
import styles from "../../styles/Navbar.module.css";

function Navbar() {
  return (
    <div className={styles.navbar}>
      <div className={styles.links}>
        <Link href="/">Home</Link>
        <Link href="/profiles">Profile</Link>
        <Link href="/cats">Cat</Link>
        <Link href="/contact">Contact</Link>
      </div>
    </div>
  );
}

export default Navbar;
