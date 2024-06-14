import Header from "./Header";
import Footer from "./Footer";
import PopupHeader from "./PopupHeader";
import AllReviews from "./AllReviews";
import AlsoLike from "./AlsoLike";
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
      <section className="mb-[50px] md:mb-20 mx-4 md:mx-10 xl:mx-20 border-t border-t-[#0000001A]">
        {/* Links */}
        <div className="py-5 md:pt-6 md:pb-9 flex items-center gap-4 text-sm md:text-base text-[#00000099]">
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

        <div className="grid md:grid-cols-[46%_54%] items-start gap-5 md:gap-10">
          {/* Product images */}
          <div className="h-full w-auto flex flex-col-reverse  md:flex-row items-center gap-3 md:gap-3.5">
            <div className="h-[106px] w-full md:w-[152px] md:h-full grid grid-cols-3 md:flex md:flex-col md:grid-cols-0 gap-3 md:gap-3.5">
              <div className="product-image-small"></div>
              <div className="product-image-small"></div>
              <div className="product-image-small"></div>
            </div>
            <div className="h-[290px] md:h-full rounded-[20px] bg-[#F0EEED] w-full md:w-[444px]"></div>
          </div>
          {/* Product details */}
          <div className="">
            <h3 className="md:h-12 mb-3 md:mb-3.5 uppercase font-IntegralCF font-[700] text-2xl md:text-[40px] md:leading-normal leading-7">
              One Life Graphic T-shirt
            </h3>
            {/* Ratings */}
            <div className="text-sm gap-4 flex items-center mb-3 md:mb-[14.45px]">
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
              <p className="text-sm md:text-base">
                {product.ratings}/<span className="text-[#00000099]">5</span>
              </p>
            </div>
            <div className="flex items-center gap-2.5 md:gap-3 mb-5">
              <p className="text-2xl md:text-[32px] font-[700] h-8 md:h-[43px]">$120</p>
              <p className="text-2xl md:text-[32px] font-[700] h-8 md:h-[43px] text-[#0000004D] line-through">
                $300
              </p>
              <p className="py-1.5 px-3 md:px-2.5 h-[31px] md:h-[34px] rounded-[62px] bg-[#FF33331A] text-sm md:text-base text-[#FF3333] font-[500]">
                -30%
              </p>
            </div>
            <p className=" text-[#00000099] text-sm md:text-base leading-snug">
              This graphic t-shirt which is perfect for any occasion. Crafted
              from a soft and breathable fabric, it offers superior comfort and
              style.
            </p>
            <div className="my-6 py-6 border-y border-y-[#0000001A]">
              <p className="mb-4 text-[#00000099] text-sm md:text-base">Select Colors</p>
              <div className="flex items-center gap-4">
                <div className="h-10 w-10 md:h-9 md:w-9 rounded-full bg-[#4F4631]"></div>
                <div className="h-10 w-10 md:h-9 md:w-9 rounded-full bg-[#314F4A]"></div>
                <div className="h-10 w-10 md:h-9 md:w-9 rounded-full bg-[#31344F]"></div>
              </div>
            </div>
            <div className="pb-6 border-b border-b-[#0000001A]">
              <p className="text-[#00000099] text-sm md:text-base mb-4">Choose Size</p>
              <div className="flex items-center gap-3">
                <div className="size">Small</div>
                <div className="size">Medium</div>
                <div className="size-active ">Large</div>
                <div className="size">X-Large</div>
              </div>
            </div>
            <div className="pt-6 flex items-center w-full gap-5">
              <button className="w-[110px] md:w-[170px] h-11 md:h-[52px] flex items-center justify-between rounded-[62px] bg-[#F0F0F0] px-4 md:px-5 py-3 md:py-4">
                <img src={minus} alt="Minus Svg" className="h-5 w-5 md:h-auto md:w-auto" />
                <p className="font-[500] text-sm md:text-base">1</p>
                <img src={add} alt="Add Svg" className="h-5 w-5 md:h-auto md:w-auto" />
              </button>
              <button className="text-sm md:text-base h-11 md:h-[52px] py-4 px-[54px] flex items-center justify-center rounded-[62px] w-auto md:w-[calc(100%-170px)] bg-black text-white">
                Add to Cart
              </button>
            </div>
          </div>
        </div>
      </section>

      <section className="px-4 md:px-10 xl:px-20 pb-[calc(150px+50px)] md:pb-[calc(78px+91px)]">
        <div className="grid grid-cols-3 items-center  text-base md:text-xl text-[#00000099] border-b border-b-[#0000001A]">
          <div className="review-header">Product Details</div>
          <div className="review-header">Rating & Reviews</div>
          <div className="review-header">FAQs</div>
        </div>
        <div className="flex items-center justify-between py-5 md:py-6">
          <p className="text-xl md:text-2xl font-[700]">
            All Reviews
            <span className="text-sm md:text-base text-[#00000099]"> (451)</span>
          </p>
          <div className="flex items-center gap-2 md:gap-2.5 font-[500]">
            <div className="bg-[#F0F0F0] rounded-full w-10 md:w-12 h-10 md:h-12 flex items-center justify-center">
              <img src={filter} alt="" className="w-5 h-5 md:w-auto md:h-auto" />
            </div>
            <button className="bg-[#F0F0F0] px-5 py-4 rounded-[62px] w-[120px] h-12 hidden md:flex items-center justify-center">
              Latest
            </button>
            <button className="bg-black text-xs m:text-base text-white px-4 ms:px-5 py-3 md:py-4 rounded-[62px] w-[113px] md:w-[166px] h-10 md:h-12 flex items-center justify-center">
              Write a Review
            </button>
          </div>
        </div>
          <AllReviews/>
          <AlsoLike/>
      </section>
      <Footer />
    </section>
  );
};

export default ProductDetail;
