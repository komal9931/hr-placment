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
          support. Make sure all links are accessible and correct.
        </p>
        <p className="mt-2">
          ✅ Submit the form only if you meet all the required criteria.
        </p>
        <p className="mt-2 font-medium">
          A copy of your responses will be emailed to{" "}
          <span className="font-semibold">{userEmail}</span>.
        </p>
      </div>
    </>
  );
}
