import React from "react";

export default function Modal({ data, closeModal }) {
  return (
    <div className="modal" onClick={closeModal}>
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        <span className="close-btn" onClick={closeModal}>
          &times;
        </span>
        <h2>{data.name}</h2>
        <p>{data.info}</p>
      </div>
    </div>
  );
}
