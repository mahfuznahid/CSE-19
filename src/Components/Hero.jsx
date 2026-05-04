import BatchImage from "../assets/Images/BirthdayCelebration.jpeg";

export default function Hero() {
  return (
    <section
      id="home"
      className="relative w-full mt-16 sm:mt-0 overflow-hidden"
    >
      <img
        src={BatchImage}
        alt="Computer Science & Engineering Batch"
        className="w-full h-auto object-cover"
      />

      <div className="absolute inset-0 bg-black/40 sm:bg-black/60 flex flex-col items-center justify-center px-4 py-10 text-center sm:px-6 sm:py-14 md:px-8">
        <div className="w-full max-w-5xl mx-auto space-y-1 md:space-y-4">
          <h1 className="text-white text-xl sm:text-4xl md:text-5xl lg:text-6xl font-bold leading-tight sm:leading-tight">
            Computer Science & Engineering
          </h1>
          <h3 className="text-white text-xl sm:text-2xl md:text-3xl font-semibold">
            19th Batch
          </h3>
          <h2 className="text-white text-lg sm:text-xl md:text-2xl font-medium">
            (TechnoRebels)
          </h2>
        </div>
      </div>
    </section>
  );
}
