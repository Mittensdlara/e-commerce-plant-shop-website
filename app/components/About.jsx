import Image from "next/image";
import about1 from "../img/about-us1.png";
import about2 from "../img/about-us2.png";
import about3 from "../img/about-us3.png";

const About = () => {
  return (
    <>
      <div className="space-y-3 py-5">
        <h1 className="text-black text-center font-extrabold text-3xl ">
          About us
        </h1>
        <p className="text-center text-gray-500">
          Order now and appreciate the beauty of nature
        </p>
      </div>
      <div className="cards flex flex-col lg:flex-row justify-center items-center">
        {/* Card */}
        <div className="card w-96 bg-base-100 ">
          <div className="card-body items-center">
            <Image src={about1} alt="Large Assortment" />
            <h2 className="card-title text-base font-extrabold text-black">
              Large Assortment
            </h2>
            <p className="text-center text-sm text-gray-500">
              we offer many different types of products with fewer variations in
              each category.
            </p>
          </div>
        </div>
        {/* End Card */}
        {/* Card */}
        <div className="card w-96 bg-base-100 ">
          <div className="card-body items-center">
            <Image src={about2} alt="Free Shipping" />
            <h2 className=" card-title text-base font-extrabold text-black">
              Fast & Free Shipping
            </h2>
            <p className="text-center text-sm text-gray-500">
              4-day or less delivery time, free shipping and an expedited
              delivery option.
            </p>
          </div>
        </div>
        {/* End Card */}
        {/* Card */}
        <div className="card w-96 bg-base-100 ">
          <div className="card-body items-center">
            <Image src={about3} alt="24/7 Support" />

            <h2 className="card-title text-base font-extrabold text-black">
              24/7 Support
            </h2>
            <p className="text-center text-sm text-gray-500">
              answers to any business related inquiry 24/7 and in real-time.
            </p>
          </div>
        </div>
        {/* End Card */}
      </div>
    </>
  );
};

export default About;
