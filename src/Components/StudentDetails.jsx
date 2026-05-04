export default function StudentDetails({ student, onClose }) {
  if (!student) return null;

  return (
    <div
      className="fixed inset-0 bg-black/80 bg-opacity-50 flex items-center justify-center z-50"
      onClick={onClose}
    >
      <div
        className="bg-white p-6 rounded-lg max-w-md w-90 sm:w-full mx-4 shadow-xl"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="flex justify-between items-center mb-4">
          <h3 className="text-xl font-bold text-[#1E293B]">Student Details</h3>
          <button
            onClick={onClose}
            className="text-gray-500 hover:text-gray-700 text-2xl"
          >
            &times;
          </button>
        </div>
        <div className="flex flex-col sm:flex-row items-start sm:items-center">
          <img
            src={student.Image}
            alt={student.StudentName}
            className="w-full sm:w-32 sm:h-32 object-cover rounded-sm mb-4"
          />
          <div className="flex flex-col ml-0 sm:ml-4">
            <h4 className="text-lg font-semibold text-[#1E293B] mb-2">
              {student.StudentName}
            </h4>
            <p className="text-sm text-gray-600 mb-1">
              <span className="font-semibold">Student ID:</span>{" "}
              {student.StudentID}
            </p>
            <p className="text-sm text-gray-600 mb-1">
              <span className="font-semibold">Email:</span> {student.Email}
            </p>
            <p className="text-sm text-gray-600 mb-1">
              <span className="font-semibold">Phone:</span> {student.Phone}
            </p>
            <p className="text-sm text-gray-600 mb-4">
              <span className="font-semibold">Type:</span> {student.StudentType}
            </p>
            <div className="flex space-x-4">
              <a
                href={student.Facebook}
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-600 hover:text-blue-800 transition-colors"
                title="Facebook Profile"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  className="w-6 h-6"
                >
                  <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                </svg>
              </a>

              <a
                href={student.LinkedIn}
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-600 hover:text-blue-800 transition-colors"
                title="LinkedIn Profile"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  className="w-6 h-6"
                >
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                </svg>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
