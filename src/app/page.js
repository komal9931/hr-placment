// import Image from "next/image";
// import Link from "next/link";

// export default function Home() {
//   return (
//     <main className="min-h-screen flex flex-col items-center justify-center bg-gray-50 p-6">
//       {/* Logo */}
//       <div className="mb-10">
//         <Image
//           src="/images/logo.svg"
//           width={120}
//           height={80}
//           alt="Logo"
//           className="opacity-90"
//         />
//       </div>

//       {/* Title */}
//       <h1 className="text-3xl font-bold text-gray-800 mb-6">
//         Welcome to Felix ITs Portal
//       </h1>

//       {/* Buttons */}
//       <div className="flex flex-col gap-4 w-64">
//         <Link
//           href="/login"
//           className="w-full text-center py-3 bg-blue-600 text-white rounded-xl shadow hover:bg-blue-700 transition-all"
//         >
//           Login
//         </Link>

//         <Link
//           href="/attendance"
//           className="w-full text-center py-3 bg-green-600 text-white rounded-xl shadow hover:bg-green-700 transition-all"
//         >
//           Attendance
//         </Link>
//       </div>

//       {/* Footer */}
//       <p className="mt-10 text-gray-500 text-sm">
//         © {new Date().getFullYear()} Felix ITs | Student Portal
//       </p>
//     </main>
//   );
// }

import { redirect } from "next/navigation";

export default function Home() {
  redirect("/login");
}
