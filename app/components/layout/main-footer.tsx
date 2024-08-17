import Link from "next/link";
import React from "react";

const MainFooter = () => {
  return (
    <footer>
      <div>
        <h1>ParaboleHandleWatch</h1>
        <p>Get a handle on the market and hop on the waves </p>
      </div>

      <div>
        <h2>Follow on the socials:</h2>
        <nav>
          <Link href="">twitter</Link>
          <Link href="">youtube</Link>
        </nav>
      </div>
    </footer>
  );
};

export default MainFooter;
