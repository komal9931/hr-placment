"use client";
import { useState, useEffect } from "react";

export default function Step2({ formData, handleChange, setIsStepValid }) {
  const [errors, setErrors] = useState({
    englishVideos: "",
    portfolioProjects: "",
    portfolioLink: "",
  });

  const validateField = (name, value) => {
    let msg = "";

    if (name === "englishVideos") {
      if (!value) msg = "This field is required.";
      else if (value < 0) msg = "Value cannot be negative.";
    }

    if (name === "portfolioProjects") {
      if (!value) msg = "This field is required.";
      else if (value < 0) msg = "Value cannot be negative.";
    }

    if (name === "portfolioLink") {
      if (!value) msg = "Portfolio link is required.";
      else if (!value.startsWith("http"))
        msg = "URL must start with http or https.";
    }

    setErrors((prev) => ({ ...prev, [name]: msg }));
  };

  // 🔥 Auto-check validation whenever formData changes
  useEffect(() => {
    const isValid =
      formData.englishVideos &&
      formData.portfolioProjects &&
      formData.portfolioLink &&
      !errors.englishVideos &&
      !errors.portfolioProjects &&
      !errors.portfolioLink;

    setIsStepValid(isValid);
  }, [formData, errors]);

  const handleInputChange = (e) => {
    handleChange(e);
    validateField(e.target.name, e.target.value);
  };

  return (
    <>
      <div className="bg-red-600 text-white font-semibold p-3 rounded-t-lg">
        📊 Learning & Preparation Progress
      </div>

      <div className="border border-red-300 rounded-b-lg p-6 mb-6">
        {/* English videos */}
        <label className="block font-medium mb-1">
          How many English videos have you created so far?
          <span className="text-red-500">*</span>
        </label>
        <input
          type="number"
          name="englishVideos"
          value={formData.englishVideos}
          required
          onChange={handleInputChange}
          className="w-full p-2 border rounded mb-1"
        />
        {errors.englishVideos && (
          <p className="text-red-500 text-sm mb-4">{errors.englishVideos}</p>
        )}

        {/* Projects */}
        <label className="block font-medium mb-1">
          How many projects/tasks uploaded in your portfolio?
          <span className="text-red-500">*</span>
        </label>
        <input
          type="number"
          name="portfolioProjects"
          value={formData.portfolioProjects}
          required
          onChange={handleInputChange}
          className="w-full p-2 border rounded mb-1"
        />
        {errors.portfolioProjects && (
          <p className="text-red-500 text-sm mb-4">
            {errors.portfolioProjects}
          </p>
        )}

        {/* Portfolio Link */}
        <label className="block font-medium mb-1">
          Portfolio Link <span className="text-red-500">*</span>
        </label>
        <input
          type="url"
          name="portfolioLink"
          value={formData.portfolioLink}
          required
          onChange={handleInputChange}
          className="w-full p-2 border rounded mb-1"
        />
        {errors.portfolioLink && (
          <p className="text-red-500 text-sm mb-4">{errors.portfolioLink}</p>
        )}
      </div>
    </>
  );
}
