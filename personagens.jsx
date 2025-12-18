import React from "react";

const charactersList = [
  {
    name: "Mario",
    info: "O herói do Reino dos Cogumelos. Sempre pronto para salvar a Princesa Peach.",
    img: "https://upload.wikimedia.org/wikipedia/en/a/a9/MarioNSMBUDeluxe.png",
    video: "https://www.youtube.com/watch?v=K5v8kqDPlsI",
  },
  {
    name: "Luigi",
    info: "Irmão de Mario, alto e corajoso, mesmo sendo tímido.",
    img: "https://upload.wikimedia.org/wikipedia/en/0/0e/Luigi_NSMBU.png",
    video: "https://www.youtube.com/watch?v=l8EwHtOVK7Y",
  },
  {
    name: "Peach",
    info: "Princesa do Reino dos Cogumelos, elegante e determinada.",
    img: "https://upload.wikimedia.org/wikipedia/en/0/0d/Peach_MP10.png",
    video: "https://www.youtube.com/watch?v=Wu3VfEN8U3I",
  },
  {
    name: "Bowser",
    info: "O rei dos Koopas, grande vilão e desafio constante para Mario.",
    img: "https://upload.wikimedia.org/wikipedia/en/2/24/Bowser_Artwork.png",
    video: "https://www.youtube.com/watch?v=QK1kEfr7iGg",
  },
  {
    name: "Yoshi",
    info: "O dinossauro amigo de Mario, especialista em aventuras saltitantes.",
    img: "https://upload.wikimedia.org/wikipedia/en/4/44/Yoshi_MP10.png",
    video: "https://www.youtube.com/watch?v=QqgVYhzl2cU",
  },
  {
    name: "Toad",
    info: "Pequeno habitante do Reino dos Cogumelos, sempre ajudando Mario.",
    img: "https://upload.wikimedia.org/wikipedia/en/8/8f/Toad_MP10.png",
    video: "https://www.youtube.com/watch?v=O3z8o7rVvK0",
  },
  {
    name: "Rosalina",
    info: "Guardião das estrelas e protetora dos Lumas.",
    img: "https://upload.wikimedia.org/wikipedia/en/3/32/Rosalina_MP10.png",
    video: "https://www.youtube.com/watch?v=3kCwOaQj2fQ",
  },
  {
    name: "Wario",
    info: "Rival de Mario, ambicioso e trapaceiro.",
    img: "https://upload.wikimedia.org/wikipedia/en/6/6c/Wario_MP10.png",
    video: "https://www.youtube.com/watch?v=dV9-oxuH3zI",
  },
  {
    name: "Donkey Kong",
    info: "O gorila que começou a carreira de Mario.",
    img: "https://upload.wikimedia.org/wikipedia/en/8/8f/Donkey_Kong_Artwork.png",
    video: "https://www.youtube.com/watch?v=3TZpMlh9O6o",
  },
  {
    name: "Aluigi",
    info: "Versão alternativa de Luigi em mods e jogos.",
    img: "https://upload.wikimedia.org/wikipedia/en/7/7e/Luigi_NS.png",
    video: "https://www.youtube.com/watch?v=VYT0FqPZ_rM",
  },
];

export default function Characters({ setModalData }) {
  return (
    <section id="characters" className="section characters">
      <h2>Personagens</h2>
      <div className="characters-grid">
        {charactersList.map((char) => (
          <div
            key={char.name}
            className="character"
            onClick={() => setModalData(char)}
          >
            <a href={char.video} target="_blank" rel="noopener noreferrer">
              <img src={char.img} alt={char.name} />
              <p>{char.name}</p>
            </a>
          </div>
        ))}
      </div>
    </section>
  );
}
