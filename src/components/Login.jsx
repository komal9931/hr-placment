"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { useRouter } from "next/navigation";
import GoogleLoginButton from "@/components/GoogleLoginButton";
import EmailLoginForm from "@/components/EmailLoginForm";
import { ToastContainer, toast } from "react-toastify";
export default function LoginPage({
  role,
  message,
  callbackUrl,
  optionalLink,
  optionalLinkMessage,
}) {
  const router = useRouter();
  const [showEmail, setShowEmail] = useState(false);

  const handleGoogleClick = () => {
    setShowEmail(true); // show email form
  };

  const handleEmailSubmit = (email) => {
    // you can store the email if needed
    // localStorage.setItem("userEmail", email);
    localStorage.setItem("loginEmail", email); // store logged-in email
    router.push("/hr/placement-form"); // redirect
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gradient-to-br from-gray-100 to-gray-300 p-4">
      <div className="w-full max-w-md bg-white rounded p-8 shadow-xl border border-gray-200">
        {/* Logo */}
        <div className="flex flex-col items-center mb-6">
          <Link href="/">
            <Image
              src="/images/logo.svg"
              height={60}
              width={80}
              alt="Felix-ITs"
              className="mb-2"
              priority
            />
          </Link>
          <h6 className="text-xl font-semibold text-gray-800">Felix-ITs</h6>
        </div>

        <h1 className="text-3xl font-bold mb-2 text-center">{message}</h1>
        <h4 className="text-lg mb-6 text-center text-gray-600">
          Let’s log you in
        </h4>

        {!showEmail ? (
          <GoogleLoginButton onClick={handleGoogleClick} />
        ) : (
          <EmailLoginForm onSubmit={handleEmailSubmit} />
        )}
      </div>
    </div>
  );
}
