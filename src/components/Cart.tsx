import Header from "./Header";
import PopupHeader from "./PopupHeader";
import Footer from "./Footer";
import arrow from "../assets/greaterThan.svg";
import bin from "../assets/delete.svg";
import minus from "../assets/minus.svg";
import add from "../assets/add.svg";
import label from "../assets/label.svg";
import arrowForwardWhite from "../assets/arrowForwardWhite.svg";

const cartItems = [
  {
    title: "Gradient Graphic T-shirt",
    size: "Large",
    color: "White",
    price: "$145",
    quantity: "1",
    image: "",
  },
  {
    title: "Checkered Shirt",
    size: "Medium",
    color: "Red",
    price: "$180",
    quantity: "1",
    image: "",
  },
  {
    title: "Skinny Fit Jeans",
    size: "Large",
    color: "Blue",
    price: "$240",
    quantity: "1",
    image: "",
  },
];
const Cart = () => {
  return (
    <div className="font-Satoshi ">
      <PopupHeader />
      <Header />
      <div className="mx-4 md:mx-10 xl:mx-20 border-t border-t-[#0000001A] pt-6">
        {/* Links */}
        <div className=" flex items-center gap-1.5 md:gap-4 text-sm md:text-base text-[#00000099]">
          <a href="" className="flex items-center gap-1">
            Home
            <img src={arrow} alt="Greater than Svg" className="" />
          </a>
          <a href="" className="text-black">
            Cart
          </a>
        </div>
        <h2 className="text-start pt-2 pb-5 md:py-6">Your cart</h2>
      </div>
      {/* Cart items */}
      <div className="pb-[200px] md:pb-[calc(80px+91px)] px-4 md:px-10 xl:px-20 grid grid-cols-1 md:grid-cols-[60%_40%] gap-5">
        {/* items */}
        <div className="p-3.5 md:px-6 md:py-5 border rounded-[20px] border-[#0000001A]">
          {cartItems.map((item) => (
            <div className="w-full pt-6 first:pt-0 pb-4 md:pb-6 last:pb-0 border-b last:border-b-0 border-b-[#0000001A]">
              <div className="h-full flex gap-2.5 md:gap-4">
                <div className="bg-[#F0EEED] w-[99px] h-[99px] md:w-[124px] md:h-[124px] rounded-[8.66px]"></div>
                <div className="w-full h-[99px] md:h-[124px] flex flex-col justify-between">
                  <div className="">
                    <div className="w-full flex items-center justify-between">
                      <h5 className="text-base md:text-xl font-[700]">
                        {item.title}
                      </h5>
                      <div className="">
                        <img
                          src={bin}
                          alt="Delete Svg"
                          className="h-5 w-5 md:h-6 md:w-6"
                        />
                      </div>
                    </div>
                    <p className="text-xs md:text-sm">
                      Size:<span className="text-[#00000099]">{item.size}</span>
                    </p>
                    <p className="pt-o.5 md:pt-0 text-xs md:text-sm">
                      Color:
                      <span className="text-[#00000099]">{item.color}</span>
                    </p>
                  </div>
                  <div className="w-full flex items-center justify-between">
                    <p className="pt-[13px] md:pt-0  text-2xl font-[700]">
                      {item.price}
                    </p>
                    <button className="h-[31px] md:h-11 rounded-[62px] py-3.5 md:py-3 px-5 bg-[#F0F0F0] flex items-center justify-center gap-5">
                      <div className="">
                        <img
                          src={minus}
                          alt="Minus Svg"
                          className="h-4 w-4 md:h-5 md:w-5"
                        />
                      </div>
                      <div className="text-sm font-[500]">1</div>
                      <div className="">
                        <img
                          src={add}
                          alt="Plus Svg"
                          className="h-4 w-4 md:h-5 md:w-5"
                        />
                      </div>
                    </button>
                  </div>
                </div>
              </div>
              {/* <div className=""> */}
              {/* <div className="">
                  <img src={bin} alt="Delete Svg" className="" />
                </div> */}
              {/* <button className="rounded-[62px] py-3 px-5 bg-[#F0F0F0] flex items-center gap-5">
                  <div className="">
                    <img src={minus} alt="Minus Svg" className="h-5 w-5" />
                  </div>
                  <div className="text-sm font-[500]">1</div>
                  <div className="">
                    <img src={add} alt="Plus Svg" className="h-5 w-5" />
                  </div>
                </button> */}
              {/* </div> */}
            </div>
          ))}
        </div>
        {/* Summary */}
        <div className="p-5 md:px-6 md:py-5 border rounded-[20px] border-[#0000001A] h-max">
          <h4 className="text-xl md:text-2xl font-[700] mb-4 md:mb-6">
            Order Summary
          </h4>
          <div className="border-b border-[#0000001A]">
            <div className="order-summary">
              <p className="text-[#00000099]">Subtotal</p>
              <p className="font-[700]">$565</p>
            </div>
            <div className="order-summary">
              <p className="text-[#00000099]">Discount (-20%)</p>
              <p className="font-[700] text-[#f33]">-$113</p>
            </div>
            <div className="order-summary">
              <p className="text-[#00000099]">Delivery Fee</p>
              <p className="font-[700]">$15</p>
            </div>
          </div>

          <div className="pt-5 flex items-center justify-between">
            <p className="text-base md:text-xl ">Total</p>
            <p className="text-xl md:text-2xl font-[700]">$467</p>
          </div>
          <div className="pt-4 md:pt-6">
            <form action="" className="flex items-center gap-3">
              <div className="relative h-12 w-full">
                <input
                  type="text"
                  placeholder="Add promo code"
                  className="text-sm md:text-base w-full placeholder:text-sm md:placeholder:text-base placeholder:text-[#00000066] pl-[46px] md:pl-[52px] py-3 pr-4 h-12 rounded-[62px] bg-[#F0F0F0] outline-none"
                />
                <img
                  src={label}
                  alt="Label Svg"
                  className="absolute left-4 top-3 w-5 h-5 md:w-6 md:h-6"
                />
              </div>
              <button className="text-sm md:text-base text-white font-[500] bg-black rounded-[62px] px-4 py-3 h-12 w-[119px]">
                Apply
              </button>
            </form>
            <button className="mt-6 mb-3 w-full flex items-center justify-center gap-3 font-[500] text-sm md:text-base h-[60px] px-[54px] py-4 bg-black rounded-[62px] text-white">
              Go to Checkout{" "}
              <img
                src={arrowForwardWhite}
                alt="Forward Arrow Svg"
                className="w-5 h-5 md:h-6 md:w-6"
              />
            </button>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Cart;
