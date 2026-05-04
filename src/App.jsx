import Header from "./Components/Header";
import Footer from "./Components/Footer";
import Contact from "./Components/Contact";
import Hero from "./Components/Hero";
import About from "./Components/About";
import StudentSection from "./Components/StudentSection";
import PhotoGallerySection from "./Components/PhotoGallerySection";
import Topper from "./Components/Topper";

function App() {
  return (
    <div>
      <Header
        webname="Computer Science & Engineering [19 Batch]"
        moto="We Code, We Create!"
      />

      {/*Body Start*/}
      <Hero />
      <About />
      <StudentSection />
      <Topper />
      <PhotoGallerySection />
      <Contact />
      {/*Body End*/}

      <Footer webname="CSE 19th Batch" moto="We Code, We Create!" />
    </div>
  );
}

export default App;
