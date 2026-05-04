export default function StudentCard({ citem }) {
  return (
    <div className="w-full mb-4 flex">
      <div className="flex-1 bg-white rounded-xl shadow-md hover:shadow-xl transition-all duration-300 p-4">
        {/* Image */}
        <img
          src={citem.Image}
          alt={citem.StudentName}
          className="w-full aspect-square object-cover rounded-lg mb-3"
        />

        {/* Name */}
        <h3 className="text-lg font-bold text-[#1E293B] mb-2">
          {citem.StudentName}
        </h3>

        {/* Details */}
        <p className="text-sm text-gray-600 mb-1">
          <span className="font-semibold">Student ID:</span> {citem.StudentID}
        </p>

        <p className="text-sm text-gray-600 mb-1">
          <span className="font-semibold">Email:</span> {citem.Email}
        </p>

        <p className="text-sm text-gray-600 mb-3">
          <span className="font-semibold">Type:</span> {citem.StudentType}
        </p>

        {/* Button */}
        <button className="w-full bg-blue-600 text-white mt-2 px-4 py-2 rounded-lg hover:bg-blue-700 transition">
          See Details
        </button>
      </div>
    </div>
  );
}
