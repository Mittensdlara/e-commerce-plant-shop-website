import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import BestSelling from "./components/BestSelling";

export default function Home() {
  return (
    <div classname="p-5 border-box">
      <Navbar />
      <Hero />
      <BestSelling/>
    </div>
  );
}
