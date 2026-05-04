import EventImage from "../assets/Images/IEEESymposium02.jpg";

export default function About() {
  return (
    <section className="aboutSection py-6 px-4 sm:px-6 md:px-8" id="about">
      <div className="max-w-7xl mx-auto p-4 sm:p-6">
        <h2 className="text-2xl sm:text-3xl md:text-4xl text-[#1E293B] font-bold mb-6 text-center">
          About Us
        </h2>

        <div className="flex flex-col gap-8 md:flex-row md:items-center md:gap-10">
          <div className="md:w-1/2 order-2 sm:order-1">
            <p className="text-base sm:text-lg md:text-xl text-[#1E293B] leading-7 sm:leading-8 md:leading-9 text-justify">
              A vibrant community of 70 unique minds, CSE 19th Batch is more
              than just a classroom; it's a family. While we all have our own
              close circles, at the end of the day, we stand united as one. From
              late-night group studies and helping each other master complex
              algorithms to boasting some of the most skillful innovators in the
              field, we take pride in our collective growth. But it’s not all
              about code; we believe in living life to the fullest. Whether it's
              planning the next big tour or finding ways to stay stress-free, we
              know how to balance hard work with the ultimate 'chill' vibe.
            </p>
          </div>

          <div className="md:w-1/2 flex justify-center order-1 sm:order-2">
            <img
              src={EventImage}
              alt="Event"
              className="rounded-2xl object-cover w-full max-w-full h-45 sm:h-90"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
