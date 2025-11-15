const PlacementData = require("../../../models/placementmodel");
const { NextResponse } = require("next/server");
import nodemailer from "nodemailer";
// export async function GET(req) {
//   try {
//     const data = await PlacementData.findAll(); // ✅ fixed
//     return new Response(JSON.stringify(data), { status: 200 });
//   } catch (err) {
//     console.log("Error fetching placements:", err);
//     return new Response(JSON.stringify({ error: err.message }), {
//       status: 500,
//     });
//   }
// }
export async function GET(req) {
  try {
    // Fetch all placement records (or you can filter by query if needed)
    const data = await PlacementData.findAll({
      attributes: ["email"], // Only fetch email column
    });

    if (!data || data.length === 0) {
      return new Response(JSON.stringify({ message: "No emails found" }), {
        status: 404,
        headers: { "Content-Type": "application/json" },
      });
    }

    // Return emails as JSON
    return new Response(JSON.stringify(data), {
      status: 200,
      headers: { "Content-Type": "application/json" },
    });
  } catch (err) {
    console.error("Error fetching placements:", err);
    return new Response(JSON.stringify({ error: err.message }), {
      status: 500,
      headers: { "Content-Type": "application/json" },
    });
  }
}

// export async function POST(req) {
//   try {
//     const data = await req.json();

//     // 1. Check if email already exists
//     const existing = await PlacementData.findOne({
//       where: { email: data.email },
//     });

//     if (existing) {
//       return new Response(
//         JSON.stringify({
//           message: "This email has already submitted the form!",
//         }),
//         { status: 409 } // conflict
//       );
//     }

//     // 2. Create new record
//     await PlacementData.create(data);

//     return new Response(
//       JSON.stringify({ message: "Form submitted successfully!", data }),
//       { status: 201 }
//     );
//   } catch (err) {
//     console.log("Error creating placement:", err);
//     return new Response(JSON.stringify({ error: err.message }), {
//       status: 500,
//     });
//   }
// }

// export async function POST(req) {
//   try {
//     const data = await req.json();

//     // Check if user already exists by email
//     const existingUser = await PlacementData.findOne({
//       where: { email: data.email },
//     });

//     if (existingUser) {
//       return new Response(
//         JSON.stringify({
//           message: "This user already exists. Please use a new email.",
//         }),
//         { status: 400 }
//       );
//     }

//     // If not exists, create new entry
//     const newUser = await PlacementData.create(data);
//     return new Response(JSON.stringify(newUser), { status: 201 });
//   } catch (err) {
//     console.log("Error creating placement:", err);
//     return new Response(JSON.stringify({ error: err.message }), {
//       status: 500,
//     });
//   }
// }

// export async function POST(req) {
//   try {
//     const body = await req.json();
//     console.log("POST /api/hr body:", body);

//     const { email } = body;
//     if (!email) {
//       console.log("No email provided!");
//       return new Response(JSON.stringify({ message: "Email is required" }), {
//         status: 400,
//         headers: { "Content-Type": "application/json" },
//       });
//     }

//     // Verify database connection
//     try {
//       await PlacementData.sequelize.authenticate();
//       console.log("Database connected successfully");
//     } catch (dbErr) {
//       console.error("Database connection failed:", dbErr);
//       return new Response(
//         JSON.stringify({ error: "Database connection failed" }),
//         { status: 500, headers: { "Content-Type": "application/json" } }
//       );
//     }

//     // Check if user exists
//     const user = await PlacementData.findOne({ where: { email } });
//     console.log("User found:", user);

//     if (!user) {
//       return new Response(
//         JSON.stringify({
//           message: "Email not found! Please contact HR/admin.",
//         }),
//         { status: 404, headers: { "Content-Type": "application/json" } }
//       );
//     }

//     // Filter body to allowed fields
//     const allowedFields = [
//       "fullName",
//       "activeEmail",
//       "contact",
//       "course",
//       "faculty",
//       "counselor",
//       "englishVideos",
//       "portfolioProjects",
//       "portfolioLink",
//       "recordEmail",
//       "testMarks",
//       "normalCV",
//       "digitalCV",
//       "linkedinProfile",
//       "agreeTerms",
//     ];

//     const updateData = {};
//     allowedFields.forEach((key) => {
//       if (body[key] !== undefined) updateData[key] = body[key];
//     });

//     console.log("Update data:", updateData);

//     // Update the user record
//     await PlacementData.update(updateData, { where: { email } });

//     return new Response(
//       JSON.stringify({ message: "Form submitted successfully!" }),
//       { status: 200, headers: { "Content-Type": "application/json" } }
//     );
//   } catch (err) {
//     console.error("POST /api/hr error:", err);
//     return new Response(JSON.stringify({ error: err.message }), {
//       status: 500,
//       headers: { "Content-Type": "application/json" },
//     });
//   }
// }
export async function POST(req) {
  try {
    const data = await req.json();

    // 1. Check if email already exists
    const existing = await PlacementData.findOne({
      where: { email: data.email },
    });

    if (existing) {
      return new Response(
        JSON.stringify({
          message: "This email has already submitted the form!",
        }),
        { status: 409 }
      );
    }

    // 2. Save record in DB
    await PlacementData.create(data);

    // -----------------------------
    // 3. SEND EMAIL with all form data
    // -----------------------------
    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: "saurvphawade09@gmail.com",
        pass: "hskp yepi dppr pika",
      },
    });

    const mailBody = `
      <h2>Placement Readiness Form Submission</h2>
      <p><strong>Name:</strong> ${data.fullName}</p>
      <p><strong>Email:</strong> ${data.email}</p>
      <p><strong>Contact:</strong> ${data.contact}</p>
      <p><strong>Course:</strong> ${data.course}</p>
      <p><strong>Faculty:</strong> ${data.faculty}</p>
      <p><strong>Counselor:</strong> ${data.counselor}</p>
      <p><strong>English Videos:</strong> ${data.englishVideos}</p>
      <p><strong>Portfolio Projects:</strong> ${data.portfolioProjects}</p>
      <p><strong>Portfolio Link:</strong> ${data.portfolioLink}</p>
      <p><strong>Test Marks:</strong> ${data.testMarks}</p>
      <p><strong>Normal CV:</strong> ${data.normalCV}</p>
      <p><strong>Digital CV:</strong> ${data.digitalCV}</p>
      <p><strong>LinkedIn Profile:</strong> ${data.linkedinProfile}</p>
      <hr/>
      <p>Submitted on: ${new Date().toLocaleString()}</p>
    `;

    await transporter.sendMail({
      from: "saurvphawade09@gmail.com",
      to: data.email, // send to student
      // OR to: "admin@yourdomain.com" // if you want admin to receive
      subject: "Your Placement Readiness Form Submission",
      html: mailBody,
    });

    // -----------------------------

    return new Response(
      JSON.stringify({ message: "Form submitted successfully!" }),
      { status: 201 }
    );
  } catch (err) {
    console.log("Error creating placement:", err);
    return new Response(JSON.stringify({ error: err.message }), {
      status: 500,
    });
  }
}
