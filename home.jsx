import React from "react";

export default function Home() {
  return (
    <section id="home" className="section home">
      <div className="home-content">
        <h1>Super Mario Universe</h1>
        <p>
          Entre no mundo mágico de Mario, Luigi e seus amigos. Aventuras,
          desafios e diversão garantida!
        </p>
        <img
          src="https://upload.wikimedia.org/wikipedia/en/a/a9/MarioNSMBUDeluxe.png"
          alt="Mario"
          className="hero-img"
        />
      </div>
    </section>
  );
}
