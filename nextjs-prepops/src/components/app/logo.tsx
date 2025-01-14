import Image from "next/image";
import Link from "next/link";
import React from "react";

const Logo = () => {
  return (
    <Link href={"/dashboard"}>
      <Image
        src={"/logo-base-256x256.png"}
        width={32}
        height={32}
        alt="logo"
      ></Image>
    </Link>
  );
};

export default Logo;
