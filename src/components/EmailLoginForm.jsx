"use client";

import React, { useState } from "react";

export default function EmailLoginForm({ onSubmit }) {
  const [email, setEmail] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!email) return alert("Enter your email");
    onSubmit(email);
  };

  return (
    <form onSubmit={handleSubmit} className="mt-4">
      <label className="block mb-2 text-sm font-medium text-gray-700">
        Enter your email
      </label>

      <input
        type="email"
        className="w-full p-3 border rounded-lg mb-4"
        placeholder="example@gmail.com"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />

      <button
        type="submit"
        className="w-full py-3 bg-red-500 text-white rounded-xl font-medium hover:bg-red-600 transition-all"
      >
        Continue
      </button>
    </form>
  );
}
