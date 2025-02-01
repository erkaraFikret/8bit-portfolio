"use client";

import React, { useState } from "react";

const Header = () => {
  const [showModal, setShowModal] = useState(false);

  const handleShowDialog = () => {
    setShowModal((prevState) => !prevState);
  };

  return (
    <header className="flex w-full justify-end p-5">
      <button
        type="button"
        className="nes-btn is-primary"
        onClick={handleShowDialog}
      >
        <i className="nes-icon trophy"></i>
      </button>
      {showModal && (
        <div className="nes-dialog absolute top-20 bg-white z-10">
          <div className="flex justify-end">
            <i
              className="nes-icon close is-small"
              onClick={handleShowDialog}
            ></i>
          </div>
          <div className="p-3">
            <p className="title text-sm">Join the Mighty Horde!</p>
            <div className="flex items-center justify-center gap-3">
  <a href="https://www.linkedin.com/in/fikret-erkara-280ab3109/" target="_blank" rel="noopener noreferrer">
    <button type="button" className="nes-btn">
      <i className="nes-icon linkedin is-small"></i>
    </button>
  </a>
  <a href="https://github.com/erkaraFikret" target="_blank" rel="noopener noreferrer">
    <button type="button" className="nes-btn">
      <i className="nes-icon github is-small"></i>
    </button>
  </a>
  <a href="mailto:fikreterkara_26@hotmail.com" target="_blank" rel="noopener noreferrer">
    <button type="button" className="nes-btn">
      <i className="nes-icon gmail is-small"></i>
    </button>
  </a>
</div>

          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
