import ProductView from "./ProductView";
import { newArrivals } from "../data";

const AlsoLike = () => {
  return (
    <div className="pt-[50px] md:pt-16 ">
      <div className="flex items-center justify-center">
        <h2 className="mb-10 md:mb-[55px] text-center w-[284px] md:w-auto">
          You might also like
        </h2>
      </div>
      <ProductView products={newArrivals} />
    </div>
  );
};

export default AlsoLike;
