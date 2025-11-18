"use client";

export default function Step5({ userEmail }) {
  return (
    <>
      <div className="bg-green-600 text-white font-semibold p-3 rounded-t-lg mb-4">
        📢 Final Confirmation
      </div>

      <div className="border border-green-300 rounded-b-lg p-6 mb-6 text-sm">
        <p>
          📢 Note: All data will be verified before proceeding with placement
          support.
        </p>

        <p className="mt-2">
          ✅ Submit the form only if everything is correct.
        </p>

        <p className="mt-2 font-medium">
          A copy of your responses will be emailed to{" "}
          <span className="font-semibold">{userEmail}</span>.
        </p>
      </div>
    </>
  );
}
