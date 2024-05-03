import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import BestSelling from "./components/BestSelling";
import About from "./components/About";
import Categories from "./components/Categories";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <div classname="p-5 border-box">
      <Navbar />
      <Hero />
      <BestSelling/>
      <About/>
      <Categories/>
      <Footer/>
    </div>
  );
}
