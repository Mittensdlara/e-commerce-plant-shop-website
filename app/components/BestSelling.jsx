import Image from "next/image";
import planet1 from "../img/planet1.png";
import planet2 from "../img/planet2.png";
import planet3 from "../img/planet3.png";

const BestSelling = () => {
  return (
    <>
      <div className="flex flex-col lg:flex-row p-5">
        <div className=" bg-base-100 basis-1/2 ">
          <div className="card-body  space-y-4">
            <h2 className=" font-extrabold text-3xl text-black ">
              Best Selling Plants
            </h2>
            <p className="text-sm text-gray-500">
              Easiest way to healthy life by buying your favorite plants{" "}
            </p>
            <button className="btn btn-ghost  bg-blue rounded-xl ">
              See more...
            </button>
          </div>
        </div>
        <div className="card  bg-base-100 basis-1/2">
          <figure className="px-10 pt-10">
            <Image src={planet1} alt="planet" className="rounded-xl w-56" />
          </figure>
          <div className="card-body items-center text-center">
            <h2 className="card-title text-base text-black">Natural Plants</h2>
            <p className="text-gray-500">₱ 1,400.00</p>
          </div>
        </div>
        <div className="card  bg-base-100 basis-1/2">
          <figure className="px-10 pt-10">
            <Image src={planet2} alt="planet" className="rounded-xl w-56" />
          </figure>
          <div className="card-body items-center text-center">
            <h2 className="card-title text-base text-black">Artificial Plants</h2>
            <p className="text-gray-500">₱ 900.00</p>
          </div>
        </div>
        <div className="card  bg-base-100 basis-1/2">
          <figure className="px-10 pt-10">
            <Image src={planet3} alt="planet" className="rounded-xl w-56" />
          </figure>
          <div className="card-body items-center text-center">
            <h2 className="card-title text-base text-black">Artificial Plants</h2>
            <p className="text-gray-500">₱ 3,500.00</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default BestSelling;
