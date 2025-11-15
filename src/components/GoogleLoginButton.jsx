"use client";

import Image from "next/image";
import React from "react";

export default function GoogleLoginButton({ onClick }) {
  return (
    <button
      onClick={onClick}
      className="flex items-center justify-center w-full py-3 rounded-xl border border-red-500 text-red-600 text-lg font-medium hover:bg-red-50 transition-all duration-300 shadow-sm"
    >
      <Image
        src="/images/google.svg"
        alt="Google"
        width={28}
        height={28}
        style={{ width: "28px", height: "auto" }}
        className="mr-3"
      />
      Login using Google
    </button>
  );
}
