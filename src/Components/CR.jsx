import { PresentCRs, PreviousCRs } from "../Data/CRData";

export default function CR() {
  return (
    <div
      className="contactSection py-12 px-4 bg-[#1E293B] border-b border-white/30"
      id="crs"
    >
      <div className="max-w-8xl mx-auto text-center">
        <h2 className="text-3xl text-white font-bold mb-6">CRs</h2>
        <h3 className="text-xl text-white font-semibold mb-4">Present CRs</h3>
        <div className="grid gap-4 sm:grid-cols-4">
          {PresentCRs.map((citem) => (
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
                  <span className="font-semibold">Email:</span> {citem.Email}
                </p>
              </div>
            </div>
          ))}
        </div>

        <h3 className="text-xl text-white font-semibold mt-8 mb-4">
          Previous CRs
        </h3>
        <div className="grid gap-4 sm:grid-cols-4">
          {PreviousCRs.map((citem) => (
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
                  <span className="font-semibold">Email:</span> {citem.Email}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
