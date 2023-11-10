import React from "react";
import Link from "next/link";
import styles from "./NavBar.module.scss";

interface NavBarProps {
  heading: string;
  link: {
    title: string;
    url: string;
  };
  children?: React.ReactNode;
}

const NavBar = ({ heading, link, children }: NavBarProps) => {
  return (
    <nav className={styles.navBar}>
      <Link className={styles.link} href={link.url}>
        {link.title}
      </Link>
      <h4 className={styles.title}>{heading}</h4>
      <div className={styles.controls}>{children}</div>
    </nav>
  );
};

export default NavBar;
