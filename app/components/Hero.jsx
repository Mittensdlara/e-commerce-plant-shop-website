import "../style/Hero.css";
import Image from "next/image";
import Planet from "../img/hero-planet.png";

const Hero = () => {
  return (
    <div className=" bg-blue lg:m-5 lg:p-5 rounded-xl">
      <div className="hero sm:container sm:mx-auto ">
        <div className="hero-content flex-col justify-between min-w-fit lg:flex-row-reverse">
          <Image src={Planet} alt="planet" className=" mb-0" />
          <div className="space-y-5 ">
            <h1 className=" text-3xl  lg:text-5xl font-extrabold text-black">
              Buy your <br />
              dream plants
            </h1>
            <div className="py-6">
              <div className="flex space-x-7">
                <div>
                  <h1 className="font-bold text-2xl">50+</h1> Plant Species
                </div>
                <span className=" text-4xl">|</span>

                <div>
                  <h1 className="font-bold text-2xl">100+</h1> Customers
                </div>
              </div>
            </div>
            <label className="input input-bordered flex  items-center gap-1">
              <input type="text" className="grow" placeholder="Search" />

              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 16 16"
                fill="currentColor"
                className="w-10 h-8 opacity-70 bg-blue p-2 rounded-xl"
              >
                <path
                  fillRule="evenodd"
                  d="M9.965 11.026a5 5 0 1 1 1.06-1.06l2.755 2.754a.75.75 0 1 1-1.06 1.06l-2.755-2.754ZM10.5 7a3.5 3.5 0 1 1-7 0 3.5 3.5 0 0 1 7 0Z"
                  clipRule="evenodd"
                />
              </svg>
            </label>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
