"use client";
import { useState, useEffect } from "react";

export default function Step3({ formData, handleChange, setIsStepValid }) {
  const [errors, setErrors] = useState({
    testMarks: "",
    normalCV: "",
    digitalCV: "",
    linkedinProfile: "",
  });

  // Validation for each field
  const validateField = (name, value) => {
    let msg = "";

    if (name === "testMarks") {
      if (!value.trim()) msg = "This field is required.";
      else if (value.length < 10)
        msg = "Please enter test marks with dates (minimum 10 characters).";
    }

    if (name === "normalCV") {
      if (!value) msg = "Normal CV link is required.";
      else if (!value.startsWith("http"))
        msg = "URL must start with http or https.";
    }

    if (name === "digitalCV") {
      if (!value) msg = "Digital CV link is required.";
      else if (!value.startsWith("http"))
        msg = "URL must start with http or https.";
    }

    if (name === "linkedinProfile") {
      if (!value) msg = "LinkedIn profile link is required.";
      else if (!value.startsWith("http"))
        msg = "URL must start with http or https.";
    }

    setErrors((prev) => ({ ...prev, [name]: msg }));
  };

  const handleInputChange = (e) => {
    handleChange(e);
    validateField(e.target.name, e.target.value);
  };

  // Auto check if all fields valid
  useEffect(() => {
    const isValid =
      formData.testMarks &&
      formData.normalCV &&
      formData.digitalCV &&
      formData.linkedinProfile &&
      !errors.testMarks &&
      !errors.normalCV &&
      !errors.digitalCV &&
      !errors.linkedinProfile;

    setIsStepValid(isValid);
  }, [formData, errors]);

  return (
    <>
      <div className="bg-red-600 text-white font-semibold p-3 rounded-t-lg">
        📊 Additional Placement Information
      </div>

      <div className="border border-red-300 rounded-b-lg p-6 mb-6">
        {/* Test Marks */}
        <label className="block font-medium mb-1">
          All Mock & Practical Test Marks (Enter marks from all tests with date)
          <span className="text-red-500">*</span>
        </label>
        <textarea
          name="testMarks"
          required
          value={formData.testMarks || ""}
          onChange={handleInputChange}
          className="w-full p-2 border rounded mb-1"
          placeholder="Enter all marks with test dates"
        />
        {errors.testMarks && (
          <p className="text-red-500 text-sm mb-4">{errors.testMarks}</p>
        )}

        {/* Normal CV */}
        <label className="block font-medium mb-1">
          Normal CV (Google Drive Link) <span className="text-red-500">*</span>
        </label>
        <input
          type="url"
          name="normalCV"
          required
          value={formData.normalCV || ""}
          onChange={handleInputChange}
          className="w-full p-2 border rounded mb-1"
          placeholder="Paste Google Drive link"
        />
        {errors.normalCV && (
          <p className="text-red-500 text-sm mb-4">{errors.normalCV}</p>
        )}

        {/* Digital CV */}
        <label className="block font-medium mb-1">
          Digital CV (Google Drive Link) <span className="text-red-500">*</span>
        </label>
        <input
          type="url"
          name="digitalCV"
          required
          value={formData.digitalCV || ""}
          onChange={handleInputChange}
          className="w-full p-2 border rounded mb-1"
          placeholder="Paste Google Drive link"
        />
        {errors.digitalCV && (
          <p className="text-red-500 text-sm mb-4">{errors.digitalCV}</p>
        )}

        {/* LinkedIn */}
        <label className="block font-medium mb-1">
          LinkedIn Profile Link (Ensure it's updated and active)
          <span className="text-red-500">*</span>
        </label>
        <input
          type="url"
          name="linkedinProfile"
          required
          value={formData.linkedinProfile || ""}
          onChange={handleInputChange}
          className="w-full p-2 border rounded mb-1"
          placeholder="Paste your LinkedIn profile link"
        />
        {errors.linkedinProfile && (
          <p className="text-red-500 text-sm mb-4">{errors.linkedinProfile}</p>
        )}
      </div>
    </>
  );
}
