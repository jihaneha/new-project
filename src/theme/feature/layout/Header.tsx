import { Button } from "@/components/ui/button";
import React from "react";
import { ThemeToggle } from "../../ThemeToggle";
import { LoginButton } from "./auth/LoginButton";

export const Header = async () => {
  return (
    <header className="border-b border-b-accent fixed top-0 left-0 right-0 bg-background">
      <div className="container flex items-center py-2 max-w-lg gap-1">
        <h2 className="text-2xl font-bold mr-auto">Demo</h2>
        <ThemeToggle />
        <LoginButton />
      </div>
    </header>
  );
};
