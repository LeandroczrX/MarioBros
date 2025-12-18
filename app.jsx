import React, { useState } from "react";
import TopBar from "./TopBar";
import Header from "./Header";
import Home from "./Home";
import About from "./About";
import History from "./History";
import Characters from "./Characters";
import Modal from "./Modal";

export default function App() {
  const [modalData, setModalData] = useState(null);

  return (
    <div className="App">
      <TopBar />
      <Header />
      <Home />
      <About />
      <History />
      <Characters setModalData={setModalData} />
      {modalData && <Modal data={modalData} closeModal={() => setModalData(null)} />}
      <audio id="bg-music" autoPlay loop>
        <source
          src="https://www.mariomayhem.com/audio/smb-theme.mp3"
          type="audio/mpeg"
        />
      </audio>
    </div>
  );
}
