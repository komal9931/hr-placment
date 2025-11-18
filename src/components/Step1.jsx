"use client";

export default function Step1({ formData, handleChange, userEmail, errors }) {
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

      {/* FULL NAME */}
      <label className="block font-medium mb-1">
        Full Name <span className="text-red-500">*</span>
      </label>
      <input
        type="text"
        name="fullName"
        value={formData.fullName}
        onChange={handleChange}
        className={`w-full p-2 border rounded mb-1 ${
          errors.fullName ? "border-red-500" : ""
        }`}
        placeholder="Your answer"
      />
      {errors.fullName && (
        <p className="text-red-500 text-sm mb-3">{errors.fullName}</p>
      )}

      {/* EMAIL */}
      <label className="block font-medium mb-1">
        Active Email <span className="text-red-500">*</span>
      </label>
      <input
        type="email"
        name="activeEmail"
        value={formData.activeEmail}
        onChange={handleChange}
        className={`w-full p-2 border rounded mb-1 ${
          errors.activeEmail ? "border-red-500" : ""
        }`}
        placeholder="Your answer"
      />
      {errors.activeEmail && (
        <p className="text-red-500 text-sm mb-3">{errors.activeEmail}</p>
      )}

      {/* CONTACT NUMBER */}
      <label className="block font-medium mb-1">
        Contact Number <span className="text-red-500">*</span>
      </label>
      <input
        type="text"
        name="contact"
        value={formData.contact}
        onChange={handleChange}
        className={`w-full p-2 border rounded mb-1 ${
          errors.contact ? "border-red-500" : ""
        }`}
        placeholder="Your answer"
      />
      {errors.contact && (
        <p className="text-red-500 text-sm mb-3">{errors.contact}</p>
      )}

      {/* COURSE */}
      <label className="block font-medium mb-1">
        Course Name <span className="text-red-500">*</span>
      </label>
      <select
        name="course"
        value={formData.course}
        onChange={handleChange}
        className={`w-full p-2 border rounded mb-1 ${
          errors.course ? "border-red-500" : ""
        }`}
      >
        <option value="">Choose</option>
        <option>UI/UX</option>
        <option>Full Stack Development</option>
        <option>Data Science</option>
        <option>Software Testing</option>
      </select>
      {errors.course && (
        <p className="text-red-500 text-sm mb-3">{errors.course}</p>
      )}

      {/* FACULTY */}
      <label className="block font-medium mb-1">Faculty Name (trainer)</label>
      <input
        type="text"
        name="faculty"
        value={formData.faculty}
        onChange={handleChange}
        className="w-full p-2 border rounded mb-5"
        placeholder="Your answer"
      />

      {/* COUNSELOR */}
      <label className="block font-medium mb-1">
        Counselor Name <span className="text-red-500">*</span>
      </label>
      <input
        type="text"
        name="counselor"
        value={formData.counselor}
        onChange={handleChange}
        className={`w-full p-2 border rounded mb-1 ${
          errors.counselor ? "border-red-500" : ""
        }`}
        placeholder="Your answer"
      />
      {errors.counselor && (
        <p className="text-red-500 text-sm mb-3">{errors.counselor}</p>
      )}
    </>
  );
}
