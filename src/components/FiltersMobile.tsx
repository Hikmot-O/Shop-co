import arrow from "../assets/greaterThan.svg";
import close from "../assets/close.svg";
import arrowUp from "../assets/arrowUp.svg";
import Modal from "./Modal";

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
type FiltersMobileProps={
  onCloseFilter: (val:boolean)=>void
}
const FiltersMobile = (props:FiltersMobileProps) => {
  const closeFilterHandler = () => {
    props.onCloseFilter(false);
  };
  return (
    <Modal>
      <div className="z-100 overflow-y-scroll bottom-0 top-[93px] absolute block md:hidden bg-white w-full py-5 px-6 rounded-t-[20px]">
        <div className="pb-6 flex items-center justify-between ">
          <h4 className="text-xl font-[700]">Filters</h4>
          <div onClick={closeFilterHandler} className="">
            <img src={close} alt="Close Svg" className="" />
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
            <div className="">
              <input
                type="range"
                min="0"
                max="500"
                step="10"
                value="100"
                name=""
                id=""
              />
              {/* <input type="range" min="0" max="500" step='10' value='200' name="" id="" /> */}
            </div>
          </div>
          {/* Colors */}
          <div className="py-6 border-y border-y-[#0000001A]">
            <div className="mb-5 flex items-center justify-between ">
              <h4 className="text-xl font-[700]">Colors</h4>
              <div className="">
                <img src={arrowUp} alt="Arrow-up Svg" className="" />
              </div>
            </div>
            <div className="flex flex-wrap md:grid grid-cols-5 gap-[15.5px] md:gap-x-auto gap-y-4 ">
              {colors.map((color) => (
                <div
                key={color.color}
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
                <div key={size.size} className="px-5 py-2.5 rounded-[62px] bg-[#F0F0F0] text-sm text-[#00000099]">
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
    </Modal>
  );
};

export default FiltersMobile;
