import React from "react";
import NavBar from "@/components/NavBar/NavBar";
import styles from "./index.module.scss";

import Link from "next/link";

const Home: React.FC = () => {
  return (
    <div>
      <NavBar heading={"homepage"} link={{ url: "/", title: "Contact List" }} />
      <div className={styles.homepageWarpper}>
        <h1>Hello this is homepage</h1>
        <h2>
          <Link href="/contacts">Go to List</Link>
        </h2>
      </div>
    </div>
  );
};

export default Home;
