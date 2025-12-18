import React from "react";

export default function TopBar() {
  return (
    <div className="top-bar">
      <img
        src="https://upload.wikimedia.org/wikipedia/commons/0/03/Mario_Logo.svg"
        alt="Mario Logo"
        className="logo"
      />
      <div>
        <a
          href="https://www.nintendo.com/"
          target="_blank"
          rel="noopener noreferrer"
          className="btn-cadastro"
        >
          Cadastrar
        </a>
        <button
          onClick={() => {
            const music = document.getElementById("bg-music");
            if (music.paused) music.play();
            else music.pause();
          }}
        >
          🎵
        </button>
      </div>
    </div>
  );
}
