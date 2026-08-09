"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { authClient } from "@/lib/auth-client";

export function useSocialAuth(onError?: (message: string) => void) {
  const router = useRouter();
  const [isSocialLoading, setIsSocialLoading] = useState(false);

  const loginWithGithub = async () => {
    setIsSocialLoading(true);
    try {
      const data = await authClient.signIn.social({
        provider: "github",
        callbackURL: "/dashboard",
      });

      if (data.error) {
        const errorMsg = data.error.message || "Failed to sign in with GitHub";
        if (onError) {
          onError(errorMsg);
        }
        return;
      }

      router.push("/dashboard");
    } catch (err) {
      if (onError) {
        onError("An unexpected error occurred with GitHub sign in.");
      }
    } finally {
      setIsSocialLoading(false);
    }
  };

  return {
    loginWithGithub,
    isSocialLoading,
  };
}
