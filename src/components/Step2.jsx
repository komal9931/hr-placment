"use client";

export default function Step2({ formData, handleChange }) {
  return (
    <>
      <div className="bg-red-600 text-white font-semibold p-3 rounded-t-lg">
        📊 Learning & Preparation Progress
      </div>
      <div className="border border-red-300 rounded-b-lg p-6 mb-6">
        <label className="block font-medium mb-1">
          How many English videos have you created so far?{" "}
          <span className="text-red-500">*</span>
        </label>
        <input
          type="number"
          name="englishVideos"
          required
          value={formData.englishVideos}
          onChange={handleChange}
          className="w-full p-2 border rounded mb-6"
          placeholder="Your answer"
        />

        <label className="block font-medium mb-1">
          How many projects/tasks uploaded in your portfolio?{" "}
          <span className="text-red-500">*</span>
        </label>
        <input
          type="number"
          name="portfolioProjects"
          required
          value={formData.portfolioProjects}
          onChange={handleChange}
          className="w-full p-2 border rounded mb-6"
          placeholder="Your answer"
        />

        <label className="block font-medium mb-1">
          Portfolio Link <span className="text-red-500">*</span>
        </label>
        <input
          type="url"
          name="portfolioLink"
          required
          value={formData.portfolioLink}
          onChange={handleChange}
          className="w-full p-2 border rounded mb-6"
          placeholder="Your answer"
        />
      </div>
    </>
  );
}
