"use client";

export default function Step3({ formData, handleChange }) {
  return (
    <>
      <div className="bg-red-600 text-white font-semibold p-3 rounded-t-lg">
        📊 Additional Placement Information
      </div>
      <div className="border border-red-300 rounded-b-lg p-6 mb-6">
        <label className="block font-medium mb-1">
          All Mock & Practical Test Marks (Enter marks from all tests with date) <span className="text-red-500">*</span>
        </label>
        <textarea
          name="testMarks"
          required
          value={formData.testMarks || ""}
          onChange={handleChange}
          className="w-full p-2 border rounded mb-6"
          placeholder="Enter all marks with test dates"
        />

        <label className="block font-medium mb-1">
          Normal CV (Google Drive Link) <span className="text-red-500">*</span>
        </label>
        <input
          type="url"
          name="normalCV"
          required
          value={formData.normalCV || ""}
          onChange={handleChange}
          className="w-full p-2 border rounded mb-6"
          placeholder="Paste Google Drive link"
        />

        <label className="block font-medium mb-1">
          Digital CV (Google Drive Link) <span className="text-red-500">*</span>
        </label>
        <input
          type="url"
          name="digitalCV"
          required
          value={formData.digitalCV || ""}
          onChange={handleChange}
          className="w-full p-2 border rounded mb-6"
          placeholder="Paste Google Drive link"
        />

        <label className="block font-medium mb-1">
          LinkedIn Profile Link (Ensure it's updated and active) <span className="text-red-500">*</span>
        </label>
        <input
          type="url"
          name="linkedinProfile"
          required
          value={formData.linkedinProfile || ""}
          onChange={handleChange}
          className="w-full p-2 border rounded mb-6"
          placeholder="Paste your LinkedIn profile link"
        />
      </div>
    </>
  );
}
