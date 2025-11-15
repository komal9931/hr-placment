// "use client";
// import { useState, useEffect } from "react";
// import Image from "next/image";
// import Step1 from "./Step1";
// import Step2 from "./Step2";
// import Step3 from "./Step3";
// import Step4 from "./Step4";
// import Step5 from "./Step5";

// export default function PlacementReadinessForm() {
//   const [step, setStep] = useState(1);
//   const [userEmail, setUserEmail] = useState(""); // dynamic email
//   const [loginEmail, setLoginEmail] = useState("");

//   const initialState = {
//     email: "",
//     fullName: "",
//     activeEmail: "",
//     contact: "",
//     course: "",
//     faculty: "",
//     counselor: "",
//     // Step 2
//     englishVideos: "",
//     portfolioProjects: "",
//     portfolioLink: "",
//     recordEmail: false,

//     // Step 3
//     testMarks: "",
//     normalCV: "",
//     digitalCV: "",
//     linkedinProfile: "",

//     // Step 4
//     agreeTerms: false,
//   };

//   const [formData, setFormData] = useState(initialState);
//   useEffect(() => {
//     const email = localStorage.getItem("loginEmail");
//     if (email) setLoginEmail(email);
//   }, []);
//   // Fetch user email dynamically on mount
//   // useEffect(() => {
//   //   async function fetchUserEmail() {
//   //     try {
//   //       const res = await fetch("http://localhost:3000/api/hr"); // GET endpoint
//   //       if (!res.ok) throw new Error("Failed to fetch user email");
//   //       const data = await res.json();
//   //       console.log(data);
//   //       if (data && data.length > 0) {
//   //         setUserEmail(data[0].email || ""); // take first user's email
//   //         setFormData((prev) => ({ ...prev, email: data[0].email || "" }));
//   //       }
//   //     } catch (err) {
//   //       console.error("Error fetching user email:", err);
//   //     }
//   //   }
//   //   fetchUserEmail();
//   // }, []);

//   const handleChange = (e) => {
//     const { name, type, checked, value } = e.target;
//     setFormData({
//       ...formData,
//       [name]: type === "checkbox" ? checked : value,
//     });
//   };

//   const clearForm = () => setFormData(initialState);

//   // const handleSubmit = async (e) => {
//   //   e.preventDefault();

//   //   try {
//   //     const res = await fetch("http://localhost:3000/api/hr", {
//   //       method: "POST",
//   //       headers: { "Content-Type": "application/json" },
//   //       body: JSON.stringify(formData),
//   //     });

//   //     const result = await res.json();

//   //     if (res.status === 400) {
//   //       // User already exists
//   //       alert(result.message);
//   //       return;
//   //     }

//   //     console.log(result);
//   //     alert("Your response has been recorded");
//   //   } catch (err) {
//   //     console.error("Error submitting form:", err);
//   //     alert("Something went wrong. Please try again later.");
//   //   }

//   //   console.log("Submitted Form Data:", formData);
//   // };

//   // const handleSubmit = async (e) => {
//   //   e.preventDefault();

//   //   try {
//   //     const res = await fetch("http://localhost:3000/api/hr", {
//   //       method: "POST",
//   //       headers: { "Content-Type": "application/json" },
//   //       body: JSON.stringify(formData),
//   //     });

//   //     const result = await res.json();

//   //     if (res.status === 404) {
//   //       alert(result.message); // Email not found
//   //       return;
//   //     }

//   //     if (res.status !== 200) {
//   //       alert("Something went wrong. Please try again later.");
//   //       return;
//   //     }

//   //     alert(result.message);
//   //     console.log("Submitted Form Data:", formData);
//   //   } catch (err) {
//   //     console.error("Error submitting form:", err);
//   //     alert("Something went wrong. Please try again later.");
//   //   }
//   // };

//   // const handleSubmit = async (e) => {
//   //   e.preventDefault();

//   //   try {
//   //     const res = await fetch("http://localhost:3000/api/hr", {
//   //       method: "POST",
//   //       headers: { "Content-Type": "application/json" },
//   //       body: JSON.stringify(formData),
//   //     });

//   //     const result = await res.json();
//   //     console.log("Server response:", result);

//   //     if (res.status === 404) {
//   //       alert(result.message); // Email not found
//   //       return;
//   //     }

//   //     if (res.status === 500) {
//   //       alert(`Server error: ${result.error || "Internal Server Error"}`);
//   //       return;
//   //     }

//   //     if (res.status !== 200) {
//   //       alert(
//   //         result.message || "Something went wrong. Please try again later."
//   //       );
//   //       return;
//   //     }

//   //     alert(result.message || "Form submitted successfully!");
//   //     console.log("Submitted Form Data:", formData);
//   //   } catch (err) {
//   //     console.error("Error submitting form:", err);
//   //     alert(`Network error: ${err.message}`);
//   //   }
//   // };

//   const handleSubmit = async (e) => {
//     e.preventDefault();

//     // ⬅️ NEW: get login email that was stored during login
//     const loginEmail = localStorage.getItem("loginEmail");

//     // ⬅️ NEW: attach it to the form payload
//     const finalFormData = {
//       ...formData,
//       loginEmail: loginEmail, // this will show up in DB/backend console
//     };

//     try {
//       const res = await fetch("http://localhost:3000/api/hr", {
//         method: "POST",
//         headers: { "Content-Type": "application/json" },

//         // ⬅️ CHANGE HERE: send finalFormData instead of formData
//         body: JSON.stringify(finalFormData),
//       });

//       const result = await res.json();
//       console.log("Server response:", result);

//       if (res.status === 404) {
//         alert(result.message); // Email not found
//         return;
//       }

//       if (res.status === 500) {
//         alert(`Server error: ${result.error || "Internal Server Error"}`);
//         return;
//       }

//       if (res.status !== 200) {
//         alert(
//           result.message || "Something went wrong. Please try again later."
//         );
//         return;
//       }

//       alert(result.message || "Form submitted successfully!");

//       // ⬅️ Updated console log
//       console.log("Submitted Form Data:", finalFormData);
//     } catch (err) {
//       console.error("Error submitting form:", err);
//       alert(`Network error: ${err.message}`);
//     }
//   };

//   return (
//     <div className="min-h-screen flex justify-center p-6 bg-gray-50">
//       <div className="w-full max-w-[500px] bg-white p-8 rounded border shadow">
//         {/* HEADER */}
//         <div className="text-center mb-6">
//           <Image
//             src="/images/logo.svg"
//             alt="Felix-ITs"
//             height={80}
//             width={100}
//             className="mx-auto h-20"
//           />
//           <h1 className="text-2xl font-bold mt-4">
//             Felix ITs - Placement Readiness Form
//           </h1>
//           <p className="text-gray-600 mt-2 text-sm">
//             Please fill out this form accurately. Incomplete or incorrect
//             submissions may delay your placement process.
//           </p>
//         </div>

//         {/* ACCOUNT BAR */}
//         <div className="flex justify-start items-center text-sm text-gray-700 mb-4">
//           <span className="mr-2">{loginEmail || "Loading..."}</span>
//           <button
//             className="text-blue-600 hover:underline"
//             onClick={() => router.push("/login")}
//           >
//             Switch account
//           </button>
//         </div>

//         <p className="text-sm text-gray-500 mb-6">
//           * Indicates required question
//         </p>

//         {/* FORM */}
//         <form onSubmit={handleSubmit}>
//           {step === 1 && (
//             <Step1
//               formData={formData}
//               handleChange={handleChange}
//               userEmail={loginEmail}
//             />
//           )}
//           {step === 2 && (
//             <Step2 formData={formData} handleChange={handleChange} />
//           )}
//           {step === 3 && (
//             <Step3 formData={formData} handleChange={handleChange} />
//           )}
//           {step === 4 && (
//             <Step4 formData={formData} handleChange={handleChange} />
//           )}
//           {step === 5 && <Step5 userEmail={loginEmail} />}

//           {/* BUTTONS */}
//           <div className="flex justify-between items-center mt-6">
//             {step > 1 && (
//               <button
//                 type="button"
//                 onClick={() => setStep(step - 1)}
//                 className="px-6 py-2 border rounded bg-gray-100 hover:bg-gray-200"
//               >
//                 Back
//               </button>
//             )}

//             <div>
//               {step < 4 && (
//                 <button
//                   type="button"
//                   onClick={() => setStep(step + 1)}
//                   className="px-6 py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
//                 >
//                   Next
//                 </button>
//               )}
//               {step === 4 && formData.agreeTerms && (
//                 <button
//                   type="button"
//                   onClick={() => setStep(5)}
//                   className="px-6 py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
//                 >
//                   Next
//                 </button>
//               )}
//               {step === 5 && (
//                 <button
//                   type="submit"
//                   className="px-6 py-2 bg-green-600 text-white rounded hover:bg-green-700"
//                 >
//                   Submit
//                 </button>
//               )}
//             </div>

//             <button
//               type="button"
//               onClick={clearForm}
//               className="px-6 py-2 border border-red-600 text-red-600 rounded hover:bg-red-50"
//             >
//               Clear
//             </button>
//           </div>
//         </form>
//       </div>
//     </div>
//   );
// }

"use client";
import { useState, useEffect } from "react";
import Image from "next/image";
import Step1 from "./Step1";
import Step2 from "./Step2";
import Step3 from "./Step3";
import Step4 from "./Step4";
import Step5 from "./Step5";
import { useRouter } from "next/navigation";

export default function PlacementReadinessForm() {
  const [step, setStep] = useState(1);
  const [loginEmail, setLoginEmail] = useState("");
  const router = useRouter();

  const initialState = {
    email: "", // FINAL EMAIL WILL BE FROM localStorage
    fullName: "",
    activeEmail: "",
    contact: "",
    course: "",
    faculty: "",
    counselor: "",
    englishVideos: "",
    portfolioProjects: "",
    portfolioLink: "",
    recordEmail: false,
    testMarks: "",
    normalCV: "",
    digitalCV: "",
    linkedinProfile: "",
    agreeTerms: false,
  };

  const [formData, setFormData] = useState(initialState);

  useEffect(() => {
    const storedEmail = localStorage.getItem("loginEmail");

    // 👉 Redirect if user is not logged in
    if (!storedEmail) {
      router.push("/login");
      return;
    }

    setLoginEmail(storedEmail);
    setFormData((prev) => ({ ...prev, email: storedEmail }));
  }, []);

  const handleChange = (e) => {
    const { name, type, checked, value } = e.target;
    setFormData({
      ...formData,
      [name]: type === "checkbox" ? checked : value,
    });
  };

  const clearForm = () => setFormData(initialState);

  // -----------------------
  // FORM SUBMIT UPDATED
  // -----------------------
  const handleSubmit = async (e) => {
    e.preventDefault();

    const loginEmail = localStorage.getItem("loginEmail") || null;

    const finalFormData = {
      ...formData,
      email: loginEmail, // ensure backend receives email column
    };

    console.log("Submitting payload:", finalFormData);

    try {
      const res = await fetch("http://localhost:3000/api/hr", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(finalFormData),
      });

      const status = res.status;
      let text;
      try {
        // try parse JSON
        const json = await res.json();
        console.log("Server JSON response:", json);
        text = JSON.stringify(json);
      } catch (jsonErr) {
        // not JSON — capture raw text
        const raw = await res.text();
        console.warn("Server returned non-JSON response:", raw);
        text = raw;
      }

      console.log("HTTP status:", status);

      if (status >= 200 && status < 300) {
        alert(JSON.parse(text)?.message || "Form submitted successfully!");
        console.log("Submitted Form Data:", finalFormData);
        // 👉 Reset form and redirect to Step 1
        setStep(1);
        return;
      }

      // handle email already exists
      if (status === 409) {
        alert("This email has already submitted the form!");
        return;
      }

      // Non-2xx: show server text or JSON message
      let serverMsg = "Something went wrong!";
      try {
        serverMsg = JSON.parse(text)?.message || text;
      } catch (err) {
        serverMsg = text || serverMsg;
      }
      alert(`Error ${status}: ${serverMsg}`);
      console.error("Submit error details:", { status, response: text });
    } catch (err) {
      console.error("Network / fetch error:", err);
      alert(`Network error: ${err.message}`);
    }
  };

  return (
    <div className="min-h-screen flex justify-center p-6 bg-gray-50">
      <div className="w-full max-w-[500px] bg-white p-8 rounded border shadow">
        {/* HEADER */}
        <div className="text-center mb-6">
          <Image
            src="/images/logo.svg"
            alt="Felix-ITs"
            height={80}
            width={100}
            className="mx-auto h-20"
          />
          <h1 className="text-2xl font-bold mt-4">
            Felix ITs - Placement Readiness Form
          </h1>
          <p className="text-gray-600 mt-2 text-sm">
            Please fill out this form accurately. Incomplete or incorrect
            submissions may delay your placement process.
          </p>
        </div>

        {/* ACCOUNT BAR */}
        <div className="flex justify-start items-center text-sm text-gray-700 mb-4">
          <span className="mr-2">{loginEmail || "Loading..."}</span>
          <button
            className="text-blue-600 hover:underline"
            onClick={() => router.push("/login")}
          >
            Switch account
          </button>
        </div>

        <p className="text-sm text-gray-500 mb-6">
          * Indicates required question
        </p>

        {/* FORM */}
        <form onSubmit={handleSubmit}>
          {step === 1 && (
            <Step1
              formData={formData}
              handleChange={handleChange}
              userEmail={loginEmail}
            />
          )}
          {step === 2 && (
            <Step2 formData={formData} handleChange={handleChange} />
          )}
          {step === 3 && (
            <Step3 formData={formData} handleChange={handleChange} />
          )}
          {step === 4 && (
            <Step4 formData={formData} handleChange={handleChange} />
          )}
          {step === 5 && <Step5 userEmail={loginEmail} />}

          {/* BUTTONS */}
          <div className="flex justify-between items-center mt-6">
            {step > 1 && (
              <button
                type="button"
                onClick={() => setStep(step - 1)}
                className="px-6 py-2 border rounded bg-gray-100 hover:bg-gray-200"
              >
                Back
              </button>
            )}

            <div>
              {step < 4 && (
                <button
                  type="button"
                  onClick={() => setStep(step + 1)}
                  className="px-6 py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
                >
                  Next
                </button>
              )}
              {step === 4 && formData.agreeTerms && (
                <button
                  type="button"
                  onClick={() => setStep(5)}
                  className="px-6 py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
                >
                  Next
                </button>
              )}
              {step === 5 && (
                <button
                  type="submit"
                  className="px-6 py-2 bg-green-600 text-white rounded hover:bg-green-700"
                >
                  Submit
                </button>
              )}
            </div>

            <button
              type="button"
              onClick={clearForm}
              className="px-6 py-2 border border-red-600 text-red-600 rounded hover:bg-red-50"
            >
              Clear
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
