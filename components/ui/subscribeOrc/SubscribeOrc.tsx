"use client";
import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";

const SubscribeOrc = () => {
  const [showModal, setShowModal] = useState(false);
  return (
    <div className="fixed bottom-0 right-0 w-32 md:w-64">
      {showModal && (
        <div className="nes-balloon from-right w-44">
          <p className="text-sm">Hello Warrior!</p>
        </div>
      )}
      <Link href="#">
        <Image
          src="/pixel-orc.webp"
          alt="pixel orc"
          width={300}
          height={300}
          onMouseEnter={() => setShowModal(true)}
          onMouseLeave={() => setShowModal(false)}
        />
      </Link>
    </div>
  );
};

export default SubscribeOrc;
