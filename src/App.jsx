import Header from "./Components/Header";
import Footer from "./Components/Footer";
import Contact from "./Components/Contact";
import Hero from "./Components/Hero";
import About from "./Components/About";
import StudentSection from "./Components/StudentSection";
import PhotoGallerySection from "./Components/PhotoGallerySection";
import Topper from "./Components/Topper";
import CR from "./Components/CR";

function App() {
  return (
    <div>
      <Header
        webname="Computer Science & Engineering [19 Batch]"
        moto="We Code, We Create!"
      />

      <div
        style={{
          backgroundImage: `
      linear-gradient(rgba(229, 231, 235, 0.3) 1px, transparent 1px),
      linear-gradient(90deg, rgba(229, 231, 235, 0.3) 1px, transparent 1px)
    `,
          backgroundSize: "40px 40px",
          minHeight: "100vh",
        }}
      >
        {/*Body Start*/}
        <Hero />
        <About />
        <StudentSection />
        <CR />
        <Topper />
        <PhotoGallerySection />
        <Contact />
        {/*Body End*/}
      </div>

      <Footer webname="CSE 19th Batch" moto="We Code, We Create!" />
    </div>
  );
}

export default App;
