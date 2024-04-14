import Image from "next/image";
import React from "react";

const Footer = () => {
  return (
    <div className="p-2 bg-black">
      <Image
        src={"/assets/logo/logo.png"}
        width={250}
        height={100}
        className="mx-auto"
      />
    </div>
  );
};

export default Footer;
