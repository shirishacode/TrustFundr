"use client";

import { SignIn } from "@clerk/nextjs";

export default function SignInPage() {
  return (
    <div className="flex justify-center items-center min-h-screen bg-white">
      <SignIn
        path="/auth/sign-in"
        routing="path"
        signUpUrl="/auth"
        afterSignInUrl="/dashboard"  
      />
    </div>
  );
}
