import React, { useState, useEffect } from "react";
import "./NavBar.css";

function NavBar() {
  const [show, handleShow] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 100) {
        handleShow(true);
      } else {
        handleShow(false);
      }
    });
    return () => {
      window.removeEventListener("scroll", window);
    };
  }, []);

  return (
    <div className={`nav ${show && "nav_black"}`}>
      <img
        className="nav_logo"
        src="https://upload.wikimedia.org/wikipedia/commons/7/7a/Logonetflix.png"
        alt="Netflix"
      />
      <img
        src="https://i.pinimg.com/564x/1b/71/b8/1b71b85dd741ad27bffa5c834a7ed797.jpg"
        alt="Avatar"
        className="nav_avatar"
      />
    </div>
  );
}

export default NavBar;
