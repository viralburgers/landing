import { Menu } from "lucide-react";
import Image from "next/image";
import React from "react";
import { Button } from "./ui/button";

const Header = () => {
  return (
    <header className="fixed top-5 px-5 xl:px-10 z-10 flex items-center justify-between w-full">
      <Image alt="" width={40} height={40} src="/logo.png" />
      <Button
        size="icon"
        className="bg-background hover:bg-background rounded-full"
      >
        <Menu className="text-secondary" />
      </Button>
    </header>
  );
};

export default Header;
