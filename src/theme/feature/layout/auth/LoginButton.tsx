"use client";

import { Button } from "@/components/ui/button";
import { LogIn } from "lucide-react";
import { signIn } from "next-auth/react";
import { useTransition } from "react";

export const LoginButton = () => {
  const [isPending, startTransition] = useTransition();
  return (
    <Button
      size="sm"
      onClick={() => {
        startTransition(() => signIn());
      }}
    >
      <LogIn className="mr-2 h-4 w-4" />
      {isPending ? "loading" : "login"}
    </Button>
  );
};
