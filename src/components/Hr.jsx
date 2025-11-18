"use client";
import React, { useEffect, useState } from "react";

const Hr = () => {
  const [hrData, setHrData] = useState([]);
  const [loading, setLoading] = useState(true);

  const fetchHrData = async () => {
    try {
      const res = await fetch("/api/hr");
      const data = await res.json();
      setHrData(data);
    } catch (error) {
      console.error("Error fetching HR data:", error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchHrData();
  }, []);

  return (
    <div className="p-6">
      <h2 className="text-2xl font-bold mb-4">HR Data</h2>

      {loading ? (
        <p className="text-gray-600 text-lg">Loading...</p>
      ) : (
        <div className="overflow-x-auto shadow-lg rounded-lg border border-gray-200">
          <table className="min-w-[1300px] w-full text-sm text-left">
            <thead className="bg-blue-600 text-white">
              <tr>
                <th className="p-3">#</th>
                <th className="p-3">Full Name</th>
                <th className="p-3">Email</th>
                <th className="p-3">Active Email</th>
                <th className="p-3">Contact</th>
                <th className="p-3">Course</th>
                <th className="p-3">Faculty</th>
                <th className="p-3">Counselor</th>
                <th className="p-3">Agree Terms</th>
                <th className="p-3">Record Email</th>
                <th className="p-3">English Videos</th>
                <th className="p-3">Portfolio Projects</th>
                <th className="p-3">Test Marks</th>
                <th className="p-3">Portfolio Link</th>
                <th className="p-3">LinkedIn Profile</th>
                <th className="p-3">Digital CV</th>
                <th className="p-3">Normal CV</th>
              </tr>
            </thead>

            <tbody>
              {hrData.length > 0 ? (
                hrData.map((item, index) => (
                  <tr
                    key={index}
                    className="border-b hover:bg-blue-50 transition"
                  >
                    <td className="p-3">{index + 1}</td>
                    <td className="p-3">{item.fullName}</td>
                    <td className="p-3">{item.email}</td>
                    <td className="p-3">{item.activeEmail}</td>
                    <td className="p-3">{item.contact}</td>
                    <td className="p-3">{item.course}</td>
                    <td className="p-3">{item.faculty}</td>
                    <td className="p-3">{item.counselor}</td>
                    <td className="p-3">{item.agreeTerms ? "Yes" : "No"}</td>
                    <td className="p-3">{item.recordEmail ? "Yes" : "No"}</td>
                    <td className="p-3">{item.englishVideos}</td>
                    <td className="p-3">{item.portfolioProjects}</td>
                    <td className="p-3">{item.testMarks}</td>

                    <td className="p-3">
                      <a
                        href={item.portfolioLink}
                        target="_blank"
                        className="text-blue-600 underline"
                      >
                        View
                      </a>
                    </td>

                    <td className="p-3">
                      <a
                        href={item.linkedinProfile}
                        target="_blank"
                        className="text-blue-600 underline"
                      >
                        View
                      </a>
                    </td>

                    <td className="p-3">
                      <a
                        href={item.digitalCV}
                        target="_blank"
                        className="text-blue-600 underline"
                      >
                        View
                      </a>
                    </td>

                    <td className="p-3">
                      <a
                        href={item.normalCV}
                        target="_blank"
                        className="text-blue-600 underline"
                      >
                        View
                      </a>
                    </td>
                  </tr>
                ))
              ) : (
                <tr>
                  <td
                    colSpan="17"
                    className="text-center p-5 text-gray-500 text-lg"
                  >
                    No Data Found
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
};

export default Hr;
