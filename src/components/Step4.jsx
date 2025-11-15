"use client";

export default function Step4({ formData, handleChange }) {
  return (
    <>
      {/* Header */}
      <div className="bg-gradient-to-r from-red-600 to-red-500 text-white font-bold text-lg p-4 rounded-t-xl shadow-md mb-4 flex items-center gap-2">
        <span className="text-xl">📜</span>
        <span>Terms & Conditions for Placement Support</span>
      </div>

      {/* Content Box */}
      <div
        className="border-0  rounded-b-xl p-6 mb-6 max-h-[450px] overflow-y-auto 
        text-sm leading-relaxed whitespace-pre-line  transition-shadow duration-300 scrollbar-hide"
      >
        <div className="text-gray-700">
          {`At Felix ITs, we are committed to helping our students secure job opportunities after successfully completing their training. To ensure a smooth and effective placement process, students must adhere to the following Terms & Conditions:

Eligibility for Placement Support
✔️ Students must successfully complete their training and meet all the placement criteria set by the institute.
✔️ A minimum of 5+ / 10+ (UI UX / Development) projects/tasks must be uploaded in the portfolio.
✔️ Students must have created at least 50+ English practice videos to demonstrate communication skills.
✔️ Mock & Practical Test Attendance: Students must have attended all mock and practical tests and secured at least 50% marks in them.

Placement Process Guidelines
📌 Google Form Submission:
To start the placement process, students must fill out the Google Form with accurate details.
All required documents and links (Portfolio, CVs, LinkedIn, etc.) must be submitted correctly.
📌 Interview Attendance:
Once shortlisted for an interview, attending the interview is mandatory.
Excuses such as personal reasons, lack of preparation, or last-minute cancellations will not be entertained.
If a student misses multiple interviews without a valid reason, their placement support will be put on hold.
📌 Job Offers & Joining:
If a student receives a job offer, they must accept or decline it within the given time frame.
If a student accepts an offer but later refuses to join, placement support may be discontinued.

Student Responsibilities
✔️ Inform the Placement Team about any updates, such as changes in availability, interview schedules, or other job-related matters.
✔️ Follow all placement guidelines and deadlines provided by the institute.
✔️ Maintain professional behavior during interviews and interactions with recruiters.
✔️ Regular LinkedIn Activity is required—students must engage in networking, posting, and connecting with recruiters.

🚫 Students who fail to follow these guidelines risk having their placement support revoked.

Important Notes
⚠️ Placement assistance is a support service, not a guarantee of a job.
⚠️ The institute is responsible for providing job opportunities, but securing the job depends on the student's skills, performance, and interview results.
⚠️ Misrepresentation of information or failure to comply with guidelines will lead to immediate disqualification from placement support.

📢 Agreement & Acknowledgment
By submitting the placement form, you confirm that you have read, understood, and agreed to the above terms & conditions.

📞 For any queries, contact HR:
📧 Email: hr.felixits@gmail.com

🚀 Stay committed, follow the process, and secure your future!

Have you read and agreed to all Terms & Conditions and Instructions? (Yes/No - Mandatory to proceed with placement)
`}
        </div>

        {/* Checkbox */}
        <label className="inline-flex items-center mt-6 bg-red-50 px-4 py-3 rounded-lg border border-red-200 cursor-pointer hover:bg-red-100 transition">
          <input
            type="checkbox"
            name="agreeTerms"
            checked={formData.agreeTerms}
            onChange={handleChange}
            className="form-checkbox h-5 w-5 text-red-600 rounded"
          />
          <span className="ml-3 font-semibold text-gray-800 text-base">
            Yes, I Agree
          </span>
        </label>
      </div>
    </>
  );
}
