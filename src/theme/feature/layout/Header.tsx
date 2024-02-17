import { Button } from "@/components/ui/button";
import React from "react";
import { ThemeToggle } from "../../ThemeToggle";
import { LoginButton } from "./auth/LoginButton";

const Header = async () => {
  return (
    <header className="border-b border-b-accent">
      <div className="container flex items-center py-2 max-w-lg gap-1">
        <h2 className="text-2xl font-bold mr-auto">Demo</h2>
        <ThemeToggle />
        <LoginButton />
      </div>
    </header>
  );
};

export default Header;
