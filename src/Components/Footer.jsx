export default function Footer(props) {
  return (
    <div>
      <footer className="bg-[#1E293B] text-gray-200 text-center py-6">
        <div className="max-w-8xl mx-auto px-4 sm:px-6 md:px-8">
          <div className="flex flex-col gap-8 md:flex-row md:justify-between md:items-start">
            {/* Left Section */}
            <div className="w-full md:w-1/3 text-left">
              <h5 className="font-bold text-2xl sm:text-3xl mb-2">
                {props.webname}
              </h5>
              <p className="text-sm sm:text-base text-gray-300 leading-relaxed">
                {props.moto}
              </p>
            </div>

            {/* Right Section */}
            <div className="w-full md:w-1/2 text-left">
              <h5 className="font-bold text-xl sm:text-2xl mb-4">Links</h5>
              <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 sm:flex gap-3 list-none p-0 m-0">
                <li>
                  <a
                    className="block rounded-xl px-3 py-2 text-sm sm:text-base text-[#F8FAFC] hover:text-[#14B8A6] transition"
                    href="#home"
                  >
                    Home
                  </a>
                </li>
                <li>
                  <a
                    className="block rounded-xl px-3 py-2 text-sm sm:text-base text-[#F8FAFC] hover:text-[#14B8A6] transition"
                    href="#about"
                  >
                    About
                  </a>
                </li>
                <li>
                  <a
                    className="block rounded-xl px-3 py-2 text-sm sm:text-base text-[#F8FAFC] hover:text-[#14B8A6] transition"
                    href="#students"
                  >
                    Students
                  </a>
                </li>
                <li>
                  <a
                    className="block rounded-xl px-3 py-2 text-sm sm:text-base text-[#F8FAFC] hover:text-[#14B8A6] transition"
                    href="#toppers"
                  >
                    Toppers
                  </a>
                </li>
                <li>
                  <a
                    className="block rounded-xl px-3 py-2 text-sm sm:text-base text-[#F8FAFC] hover:text-[#14B8A6] transition"
                    href="#photo-gallery"
                  >
                    Gallery
                  </a>
                </li>
                <li>
                  <a
                    className="block rounded-xl px-3 py-2 text-sm sm:text-base text-[#F8FAFC] hover:text-[#14B8A6] transition"
                    href="#contact"
                  >
                    Contact
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Bottom Text */}
        <div className="mt-6 text-sm sm:text-base text-gray-400">
          CSE 19th Batch; © 2026 Copyright All rights reserved.
        </div>
      </footer>
    </div>
  );
}
