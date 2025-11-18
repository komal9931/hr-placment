"use client";

export default function Step6() {
  return (
    <div className="flex justify-center items-center py-12">
      <div className="bg-white shadow-lg border border-green-200 rounded-xl p-8 w-full max-w-lg text-center">
        <div className="flex justify-center mb-4">
          <div className="h-16 w-16 flex items-center justify-center rounded-full bg-green-100 border border-green-300">
            <span className="text-3xl">🎉</span>
          </div>
        </div>

        <h2 className="text-2xl font-bold text-green-700">
          🎉 Response Submitted!
        </h2>

        <p className="mt-4 text-gray-700 text-sm">
          Thank you for submitting the Placement Readiness Form.
        </p>

        <p className="mt-3 text-gray-800 font-medium">
          📢 Our placement team will review your details soon.
        </p>

        <p className="mt-2 text-gray-600 text-sm">
          Stay active on your email for updates.
        </p>

        <div className="mt-6">
          <span className="text-green-600 font-semibold text-lg">
            ✔ All Done!
          </span>
        </div>
      </div>
    </div>
  );
}
