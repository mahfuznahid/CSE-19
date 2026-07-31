import toppers02 from "../Data/TopperData02";
import toppers from "./../Data/TopperData";

export default function Topper() {
  return (
    <div className="contactSection py-12 px-4 bg-[#1E293B]" id="toppers">
      <div className="max-w-8xl mx-auto text-center">
        <h2 className="text-3xl text-white font-bold mb-6">Toppers</h2>
        <h3 className="text-xl text-white font-semibold mb-4">
          First Semester
        </h3>
        <div className="grid gap-4 sm:grid-cols-4">
          {toppers.map((citem) => (
            <div className="flex bg-white rounded-xl shadow-md hover:shadow-xl transition-all duration-300 p-4">
              {/* Image */}
              <img
                src={citem.Image}
                alt={citem.StudentName}
                className="w-24  object-cover rounded-lg mr-4"
              />
              <div className="flex flex-col text-left">
                {/* Name */}
                <h3 className="text-lg font-bold text-[#1E293B] mb-2">
                  {citem.StudentName}
                </h3>

                {/* Details */}
                <p className="text-sm text-gray-600 mb-1">
                  <span className="font-semibold">Student ID:</span>{" "}
                  {citem.StudentID}
                </p>

                <p className="text-sm text-gray-600 mb-1">
                  <span className="font-semibold">CGPA:</span> {citem.CGPA}
                </p>

                <p className="text-sm text-gray-600 mb-3">
                  <span className="font-semibold">Position:</span>{" "}
                  {citem.Position}
                </p>
              </div>
            </div>
          ))}
        </div>

        <h3 className="text-xl text-white font-semibold mb-4">
          Second Semester
        </h3>
        <div className="grid gap-4 sm:grid-cols-4">
          {toppers02.map((citem) => (
            <div className="flex bg-white rounded-xl shadow-md hover:shadow-xl transition-all duration-300 p-4">
              {/* Image */}
              <img
                src={citem.Image}
                alt={citem.StudentName}
                className="w-24  object-cover rounded-lg mr-4"
              />
              <div className="flex flex-col text-left">
                {/* Name */}
                <h3 className="text-lg font-bold text-[#1E293B] mb-2">
                  {citem.StudentName}
                </h3>

                {/* Details */}
                <p className="text-sm text-gray-600 mb-1">
                  <span className="font-semibold">Student ID:</span>{" "}
                  {citem.StudentID}
                </p>

                <p className="text-sm text-gray-600 mb-1">
                  <span className="font-semibold">CGPA:</span> {citem.CGPA}
                </p>

                <p className="text-sm text-gray-600 mb-3">
                  <span className="font-semibold">Position:</span>{" "}
                  {citem.Position}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
