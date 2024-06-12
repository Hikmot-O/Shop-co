import Header from "./Header";
import Footer from "./Footer";
import PopupHeader from "./PopupHeader";
import star from "../assets/star.svg";
import starhalf from "../assets/starhalf.svg";
import add from "../assets/add.svg";
import minus from "../assets/minus.svg";
import filter from "../assets/filter.svg";

const ProductDetail = () => {
  let product = { ratings: 4.5 };

  return (
    <section className="font-Satoshi">
      <PopupHeader />
      <Header />
      <section className=" mb-20 mx-20 border-t border-t-[#0000001A]">
        <div className="pt-6 pb-9 flex items-center gap-4 text-[#00000099]">
          <a href="" className="">
            Home
          </a>
          <a href="" className="">
            Shop
          </a>
          <a href="" className="">
            Men
          </a>
          <a href="" className="">
            T-shirts
          </a>
        </div>

        <div className="grid grid-cols-[45%_55%]  items-start gap-10">
          {/* Product images */}
          <div className="h-full flex items-center gap-3.5">
            <div className="h-full grid grid-col-1 gap-3.5">
              <div className="product-image-small"></div>
              <div className="product-image-small"></div>
              <div className="product-image-small"></div>
            </div>
            <div className="h-full rounded-[20px] bg-[#F0EEED] w-[444px]"></div>
          </div>
          {/* Product details */}
          <div className="">
            <h3 className="h-12 mb-3.5 uppercase font-IntegralCF font-[700] text-[40px] leading-normal">
              One Life Graphic T-shirt
            </h3>
            {/* Ratings */}
            <div className="text-sm gap-4 flex items-center mb-[14.45px]">
              <div className="flex gap-[7.1px] item-center">
                {Array.from(Array(+product.ratings.toString()[0]).keys()).map(
                  (i) => (
                    <img
                      key={i}
                      src={star}
                      alt="Star Svg"
                      className="h-6 w-6"
                    />
                  )
                )}
                {product.ratings.toString().includes(".") ? (
                  <img
                    key={1}
                    src={starhalf}
                    alt="Half-star Svg"
                    className="h-6 w-3"
                  />
                ) : (
                  ""
                )}
              </div>
              <p className="text-base">
                {product.ratings}/<span className="text-[#00000099]">5</span>
              </p>
            </div>
            <div className="flex items-center gap-3 mb-5">
              <p className="text-[32px] font-[700] h-[43px]">$120</p>
              <p className="text-[32px] font-[700] h-[43px] text-[#0000004D] line-through">
                $300
              </p>
              <p className="py-1.5 px-2.5 h-[34px] rounded-[62px] bg-[#FF33331A] text-[#FF3333] font-[500]">
                -30%
              </p>
            </div>
            <p className=" text-[#00000099] leading-snug">
              This graphic t-shirt which is perfect for any occasion. Crafted
              from a soft and breathable fabric, it offers superior comfort and
              style.
            </p>
            <div className="my-6 py-6 border-y border-y-[#0000001A]">
              <p className="mb-4 text-[#00000099] ">Select Colors</p>
              <div className="flex items-center gap-4">
                <div className="h-9 w-9 rounded-full bg-[#4F4631]"></div>
                <div className="h-9 w-9 rounded-full bg-[#314F4A]"></div>
                <div className="h-9 w-9 rounded-full bg-[#31344F]"></div>
              </div>
            </div>
            <div className="pb-6 border-b border-b-[#0000001A]">
              <p className="text-[#00000099] mb-4">Choose Size</p>
              <div className="flex items-center gap-3">
                <div className="size">Small</div>
                <div className="size">Medium</div>
                <div className="size-active ">Large</div>
                <div className="size">X-Large</div>
              </div>
            </div>
            <div className="pt-6 flex items-center w-full gap-5">
              <button className="w-[170px] h-[52px] flex items-center justify-between rounded-[62px] bg-[#F0F0F0] px-5 py-4">
                <img src={minus} alt="Minus Svg" className="" />
                <p className="font-[500]">1</p>
                <img src={add} alt="Add Svg" className="" />
              </button>
              <button className="h-[52px] py-4 px-[54px] rounded-[62px] w-full bg-black text-white">
                Add to Cart
              </button>
            </div>
          </div>
        </div>
      </section>

      <section className="px-20">
        <div className="grid grid-cols-3 items-center  text-xl text-[#00000099] border-b border-b-[#0000001A]">
          <div className="review-header">Product Details</div>
          <div className="review-header">Rating & Reviews</div>
          <div className="review-header">FAQs</div>
        </div>
        <div className="flex items-center justify-between py-6">
          <p className="text-2xl font-[700]">
            All Reviews
            <span className="text-base text-[#00000099]"> (451)</span>
          </p>
          <div className="flex items-center gap-2.5 font-[500]">
            <div className="bg-[#F0F0F0] rounded-full w-12 h-12 flex items-center justify-center">
              <img src={filter} alt="" className="" />
            </div>
            <button className="bg-[#F0F0F0] px-5 py-4 rounded-[62px] w-[120px] h-12 flex items-center justify-center">
              Latest
            </button>
            <button className="bg-black text-white px-5 py-4 rounded-[62px] w-[166px] h-12 flex items-center justify-center">
              Write a Review
            </button>
          </div>
        </div>
      </section>
      {/* <Footer /> */}
    </section>
  );
};

export default ProductDetail;
