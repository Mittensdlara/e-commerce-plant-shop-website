import Image from "next/image";
import category1 from "../img/category-1.png";
import category2 from "../img/category-2.png";
import category3 from "../img/category-3.png";
const Categories = () => {
  return (
    <div>
      <div className="space-y-3 py-5 mb-5">
        <h1 className="text-black text-center font-extrabold text-3xl ">
          Categories
        </h1>
        <p className="text-center text-gray-500">
          Find what you are looking for
        </p>
      </div>

      {/* Card */}

      <div className="flex flex-col lg:flex-row bg-blue lg:space-x-20  items-center  pb-5 justify-center">
        <div className="">
          <Image src={category1} className="py-5" />
          <h2 className="card-title text-base  font-extrabold text-black">
            Natural Plants
          </h2>
        </div>
        <div>
          <Image src={category2} className="py-5" />
          <h2 className="card-title text-base font-extrabold text-black">
            Plant Accessories
          </h2>
        </div>
        <div>
          <Image src={category3} className="py-5" />

          <h2 className="card-title text-base font-extrabold text-black">
            Artificial Plants
          </h2>
        </div>
      </div>

      {/* End Card */}
    </div>
  );
};

export default Categories;
