"use client";

import { SignIn } from "@clerk/nextjs";
import { useAuth } from "@clerk/nextjs";
import { useRouter } from "next/navigation";
import { useEffect } from "react";

export default function SignInPage() {
  const { isSignedIn, isLoaded } = useAuth();
  const router = useRouter();

  useEffect(() => {
    if (isLoaded && isSignedIn) {
      router.push("/dashboard");
    }
  }, [isSignedIn, isLoaded, router]);

  return (
    <div className="flex justify-center items-center min-h-screen bg-grey">
      <SignIn
        path="/auth/sign-in"
        routing="path"
        signUpUrl="/auth/sign-in"
      />
    </div>
  );
}
