import Header from "./Header";
import PopupHeader from "./PopupHeader";
import ProductView from "./ProductView";
import Footer from "./Footer";
import arrow from "../assets/greaterThan.svg";
import filter from "../assets/filterGray.svg";
import arrowUp from "../assets/arrowUp.svg";
import arrowDown from "../assets/arrowDown.svg";
import arrowBack from "../assets/arrowBack.svg";
import arrowForward from "../assets/arrowForward.svg";
import { topSelling } from "../data";

const colors = [
  {
    color: "#00C12B",
    name: "green",
  },
  {
    color: "#F50606",
    name: "red",
  },
  {
    color: "#F5DD06",
    name: "yellow",
  },
  {
    color: "#F57906",
    name: "orange",
  },
  {
    color: "#06CAF5",
    name: "cyan",
  },
  {
    color: "#063AF5",
    name: "blue",
  },
  {
    color: "#7D06F5",
    name: "purple",
  },
  {
    color: "#F506A4",
    name: "pink",
  },
  {
    color: "#fff",
    name: "white",
  },
  {
    color: "#000",
    name: "black",
  },
];

const sizes = [
  {
    size: "XX-Small",
  },
  {
    size: "X-Small",
  },
  {
    size: "Small",
  },
  {
    size: "Medium",
  },
  {
    size: "Large",
  },
  {
    size: "X-Large",
  },
  {
    size: "XX-Large",
  },
  {
    size: "3X-Large",
  },
  {
    size: "4X-Large",
  },
];

const ProductCollection = () => {
  return (
    <div className="font-Satoshi w-full">
      <PopupHeader />
      <Header />
      <section className="pb-[calc(80px+91px)] border-t border-t-[#0000001A] px-20 pt-6 ">
        {/* Links */}
        <div className="py-5 md:pt-6 md:pb-9 flex items-center gap-4 text-sm md:text-base text-[#00000099]">
          <a href="" className="flex items-center gap-1">
            Home
            <img src={arrow} alt="Greater than Svg" className="" />
          </a>
          <a href="" className="text-black">
            Casual
          </a>
        </div>

        <div className="mt-6 flex gap-5">
          {/* Filters */}
          <div className="w-[295px] py-5 px-6 rounded-[20px] border border-[#0000001A]">
            <div className="pb-6 flex items-center justify-between ">
              <h4 className="text-xl font-[700]">Filters</h4>
              <div className="">
                <img src={filter} alt="Filter Svg" className="" />
              </div>
            </div>
            {/* filter options */}
            <div className="">
              <ul className="py-6 flex flex-col gap-5 border-y border-y-[#0000001A] text-[#00000099] text-base">
                <li className="flex items-center justify-between">
                  T-shirts
                  <img src={arrow} alt="Greater than Svg" className="" />
                </li>
                <li className="flex items-center justify-between">
                  Shorts
                  <img src={arrow} alt="Greater than Svg" className="" />
                </li>
                <li className="flex items-center justify-between">
                  Shirts
                  <img src={arrow} alt="Greater than Svg" className="" />
                </li>
                <li className="flex items-center justify-between">
                  Hoodie
                  <img src={arrow} alt="Greater than Svg" className="" />
                </li>
                <li className="flex items-center justify-between">
                  Jeans
                  <img src={arrow} alt="Greater than Svg" className="" />
                </li>
              </ul>
              {/* Price range */}
              <div className="py-6">
                <div className="mb-5 flex items-center justify-between ">
                  <h4 className="text-xl font-[700]">Price</h4>
                  <div className="">
                    <img src={arrowUp} alt="Arrow-up Svg" className="" />
                  </div>
                </div>
                <input type="range" name="" id="" />
              </div>
              {/* Colors */}
              <div className="py-6 border-y border-y-[#0000001A]">
                <div className="mb-5 flex items-center justify-between ">
                  <h4 className="text-xl font-[700]">Colors</h4>
                  <div className="">
                    <img src={arrowUp} alt="Arrow-up Svg" className="" />
                  </div>
                </div>
                <div className="grid grid-cols-5 gap-x-auto gap-y-4 ">
                  {colors.map((color) => (
                    <div
                      style={{ background: `${color.color}` }}
                      className="color"
                    ></div>
                  ))}
                </div>
              </div>
              {/* Size */}
              <div className="py-6">
                <div className="mb-5 flex items-center justify-between ">
                  <h4 className="text-xl font-[700]">Size</h4>
                  <div className="">
                    <img src={arrowUp} alt="Arrow-up Svg" className="" />
                  </div>
                </div>
                <div className="flex flex-wrap gap-2 items-center">
                  {sizes.map((size) => (
                    <div className="px-5 py-2.5 rounded-[62px] bg-[#F0F0F0] text-sm text-[#00000099]">
                      {size.size}
                    </div>
                  ))}
                </div>
              </div>
              {/* Dress style */}
              <div className="py-6 border-t border-t-[#0000001A]">
                <div className="mb-5 flex items-center justify-between ">
                  <h4 className="text-xl font-[700]">Dress Style</h4>
                  <div className="">
                    <img src={arrowUp} alt="Arrow-up Svg" className="" />
                  </div>
                </div>
                <ul className="text-[#00000099] mt-5 flex flex-col gap-5">
                  <li className="flex items-center justify-between">
                    Casual
                    <img src={arrow} alt="Greater than Svg" className="" />
                  </li>
                  <li className="flex items-center justify-between">
                    Formal
                    <img src={arrow} alt="Greater than Svg" className="" />
                  </li>
                  <li className="flex items-center justify-between">
                    Party
                    <img src={arrow} alt="Greater than Svg" className="" />
                  </li>
                  <li className="flex items-center justify-between">
                    Gym
                    <img src={arrow} alt="Greater than Svg" className="" />
                  </li>
                </ul>
              </div>
            </div>
            <button className="px-[54px] py-4 text-sm font-[500] w-full bg-black text-white rounded-[62px] ">
              Apply Filter
            </button>
          </div>
          {/* Product Display */}
          <div className="w-[calc(100%-295px)]">
            {/* header */}
            <div className="mb-7 flex items-center justify-between">
              <h3 className="text-[32px] font-[700]">Casual</h3>
              <div className="text-[#00000099] text-base flex items-center gap-3">
                <p className="">Showing 1-10 of 100 Products</p>
                <div className="flex items-center gap-1">
                  Sort by: <span className="text-black">Most Popular </span>
                  <img src={arrowDown} alt="Arrow-down Svg" className="" />
                </div>
              </div>
            </div>
            <ProductView products={topSelling} type="collection" />
            {/* Pagination */}
            <div className="mt-8 pt-5 border-t border-t[#0000001A] flex items-center justify-between">
              <button className="flex items-center justify-center gap-2 px-3.5 py-2 text-sm font-[500] border border-[#0000001A] rounded-lg">
                <img
                  src={arrowBack}
                  alt="Backword Arrow Svg"
                  className="h-5 w-5"
                />
                Previous
              </button>
              <div className="flex items-center">
                <div className="pagination">1</div>
                <div className="pagination">2</div>
                <div className="pagination">3</div>
                <div className="pagination">...</div>
                <div className="pagination">8</div>
                <div className="pagination">9</div>
                <div className="pagination">10</div>
              </div>
              <button className="flex items-center justify-center gap-2 px-3.5 py-2 text-sm font-[500] border border-[#0000001A] rounded-lg">
                <img
                  src={arrowForward}
                  alt="Backword Arrow Svg"
                  className="h-5 w-5"
                />
                Next
              </button>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
};

export default ProductCollection;
