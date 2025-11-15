"use client";

export default function Step1({ formData, handleChange, userEmail }) {
  return (
    <>
      <div className="mb-5">
        <label className="inline-flex items-center">
          <input
            type="checkbox"
            name="recordEmail"
            checked={formData.recordEmail}
            onChange={handleChange}
            className="form-checkbox h-5 w-5 text-blue-600"
          />
          <span className="ml-2">
            Record <strong>{userEmail || "Loading..."}</strong> as the email to
            be included with my response
          </span>
        </label>
      </div>

      <label className="block font-medium mb-1">
        Full Name <span className="text-red-500">*</span>
      </label>
      <input
        type="text"
        name="fullName"
        required
        value={formData.fullName}
        onChange={handleChange}
        className="w-full p-2 border rounded mb-5"
        placeholder="Your answer"
      />

      <label className="block font-medium mb-1">
        Active Email <span className="text-red-500">*</span>
      </label>
      <input
        type="email"
        name="activeEmail"
        required
        value={formData.activeEmail}
        onChange={handleChange}
        className="w-full p-2 border rounded mb-5"
        placeholder="Your answer"
      />

      <label className="block font-medium mb-1">
        Contact Number <span className="text-red-500">*</span>
      </label>
      <input
        type="text"
        name="contact"
        required
        value={formData.contact}
        onChange={handleChange}
        className="w-full p-2 border rounded mb-5"
        placeholder="Your answer"
      />

      <label className="block font-medium mb-1">
        Course Name <span className="text-red-500">*</span>
      </label>
      <select
        name="course"
        required
        value={formData.course}
        onChange={handleChange}
        className="w-full p-2 border rounded mb-5"
      >
        <option value="">Choose</option>
        <option>UI/UX</option>
        <option>Full Stack Development</option>
        <option>Data Science</option>
        <option>Software Testing</option>
      </select>

      <label className="block font-medium mb-1">
        Faculty Name <span className="text-gray-500">(trainer)</span>
      </label>
      <input
        type="text"
        name="faculty"
        value={formData.faculty}
        onChange={handleChange}
        className="w-full p-2 border rounded mb-5"
        placeholder="Your answer"
      />

      <label className="block font-medium mb-1">
        Counselor Name <span className="text-red-500">*</span>
      </label>
      <input
        type="text"
        name="counselor"
        required
        value={formData.counselor}
        onChange={handleChange}
        className="w-full p-2 border rounded mb-5"
        placeholder="Your answer"
      />
    </>
  );
}
