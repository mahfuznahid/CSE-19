import { useState } from "react";
import students from "../Data/StudentData";
import StudentDetails from "./StudentDetails";

export default function StudentSection() {
  const [showAll, setShowAll] = useState(false);
  const [selectedStudent, setSelectedStudent] = useState(null);

  const visibleStudents = showAll ? students : students.slice(0, 8);
  return (
    <div className="studentsSection py-6 px-4" id="students">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl text-[#1E293B] font-bold mb-10 text-center">
          Our Students
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
          {visibleStudents.map((citem) => (
            <div key={citem.id} className="bg-white p-4 rounded shadow">
              <img
                src={citem.Image}
                className="w-full aspect-square object-cover rounded"
                alt={citem.StudentName}
              />
              <h3 className="mt-2 font-semibold">{citem.StudentName}</h3>
              <p className="text-sm text-gray-600">
                Student ID: {citem.StudentID}
              </p>
              <p className="text-sm text-gray-600">Email: {citem.Email}</p>
              <p className="text-sm text-gray-600">
                Student Type: {citem.StudentType}
              </p>

              <button
                onClick={() => setSelectedStudent(citem)}
                className="w-full bg-blue-600 text-white mt-4 py-2 rounded hover:bg-blue-700 transition"
              >
                See Details
              </button>
            </div>
          ))}
        </div>

        {/* Button */}
        {students.length > 8 && (
          <div className="text-center mt-6">
            <button
              onClick={() => setShowAll(!showAll)}
              className="bg-blue-600 text-white px-6 py-2 rounded hover:bg-blue-700"
            >
              {showAll ? "See Less" : "See More"}
            </button>
          </div>
        )}
      </div>
      <StudentDetails
        student={selectedStudent}
        onClose={() => setSelectedStudent(null)}
      />
    </div>
  );
}
