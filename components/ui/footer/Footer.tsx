"use client";

import Link from "next/link";
import React, { useState } from "react";

const Footer = () => {
  const [showModal, setShowModal] = useState(false);

  const handleShowDialog = () => {
    setShowModal((prevState) => !prevState);
  };

  return (
    <div className="fixed bottom-5 left-5">
      <button type="button" onClick={handleShowDialog}>
        <i className="nes-icon is-large  star"></i>
      </button>
      {showModal && (
        <div className="fixed inset-0 bg-gray-500/50 flex justify-center items-center z-10">
          <div className="nes-dialog w-[40rem] bg-white">
            <div className="flex justify-end">
              <i
                className="nes-icon close is-small"
                onClick={handleShowDialog}
              ></i>
            </div>
            <div className="flex flex-col justify-center items-center gap-5">
              <i className="snes-jp-logo"></i>
              <p>My Latest Projects:</p>
              <Link href="/">
                <div className="nes-container is-dark  with-title is-centered">
                  <p className="title">Social Media App</p>
                  <p>
                    A modern social media application built with Next.js 15 (App
                    Router), PostgreSQL, Prisma, Clerk, and TypeScript.
                  </p>
                </div>
              </Link>
              <Link href="/">
                <div className="nes-container with-title is-centered">
                  <p className="title">Redux Shopping Cart</p>
                  <p>
                    A simple shopping cart app built with Next.js and Redux
                    Toolkit, demonstrating state management and dynamic price
                    calculation
                  </p>
                </div>
              </Link>
              <Link href="/">
                <div className="nes-container is-dark  with-title">
                  <p className="title">Color Convert</p>
                  <p>
                    A color converter app built with Next.js, enabling dynamic
                    conversions between RGB and HEX values.
                  </p>
                </div>
              </Link>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Footer;
