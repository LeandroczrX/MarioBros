import React from "react";

export default function Header() {
  return (
    <header>
      <nav className="container">
        <ul className="menu">
          <li>
            <a href="#home">Home</a>
          </li>
          <li>
            <a href="#about">Sobre Mario</a>
          </li>
          <li>
            <a href="#history">História</a>
          </li>
          <li>
            <a href="#characters">Personagens</a>
          </li>
        </ul>
      </nav>
    </header>
  );
}
