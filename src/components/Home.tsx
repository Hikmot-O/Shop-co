import Header from "./Header";
import versace from "../assets/Versace.svg";
import zara from "../assets/zara.svg";
import gucci from "../assets/gucci.svg";
import prada from "../assets/prada.svg";
import ck from "../assets/ck.svg";
import star from "../assets/star.svg";
import { newArrivals, topSelling } from "../data";
import ProductView from "./ProductView";

const Home = () => {
  return (
    <div className="font-Satoshi h-screen">
      <div className="text-[14px] font-Satoshi py-2.5 bg-black text-white flex items-center justify-center">
        Sign up and get 20% off to your first order.
        <br></br>
        <a className="pl-[2px] font-[500] underline">Sign Up Now</a>
      </div>
      <Header />
      <section className=" pl-[80px] pr-20 pt-[100px] h-[663px] bg-Hero-bg bg-cover bg-no-repeat bg-center">
        <div className="">
          <h1 className="text-[64px] leading-[64px] font-IntegralCF w-[577px]">
            FIND CLOTHES THAT MATCHES YOUR STYLE
          </h1>
          <p className="text-[#00000099] my-8 max-w-[480px]">
            Browse through our diverse range of meticulously crafted garments,
            designed to bring out your individuality and cater to your sense of
            style.
          </p>
          <button
            // href=""
            className="h-[52px] mb-14 text-white bg-black font-[500] py-4 px-[54px] rounded-[62px] decoration-none"
          >
            Shop Now
          </button>
          <div className="flex items center">
            <div className="flex flex-col gap-3 pr-8 border-r border-r-[#0000001A]">
              <p className="text-[40px] font-[700]">200+</p>
              <p className="text-[#00000099] ">International Brands</p>
            </div>
            <div className="flex flex-col gap-3 px-8 border-r border-r-[#0000001A]">
              <p className="text-[40px] font-[700]">2,000+</p>
              <p className="text-[#00000099] ">High-Quality Products</p>
            </div>
            <div className="flex flex-col gap-3 pl-8">
              <p className="text-[40px] font-[700]">30,000+</p>
              <p className="text-[#00000099] ">Happy Customers</p>
            </div>
          </div>
        </div>
      </section>

      {/* Brands */}
      <div className="bg-black px-[80px] py-11 flex items-center justify-between">
        <img src={versace} alt="Versace logo" className="" />
        <img src={zara} alt="Zara logo" className="" />
        <img src={gucci} alt="Gucci logo" className="" />
        <img src={prada} alt="Prada logo" className="" />
        <img src={ck} alt="Calvin Klein logo" className="" />
      </div>

      {/* New arrivals */}
      <section className="px-[80px] pt-[72px] border-b-[#0000001A] border-b">
        <h2 className="font-IntegralCF text-5xl pb-14 text-center">
          NEW ARRIVALS
        </h2>
        <ProductView products={newArrivals} />
      </section>

      {/* Top selling */}
      <section className="px-[80px] pt-[72px]">
        <h2 className="font-IntegralCF text-5xl pb-14 text-center">
          TOP SELLING
        </h2>
        <ProductView products={topSelling} />
      </section>

      {/* Dress styles */}
      <section className="px-20">
        <div className="bg-[#F0F0F0] w-full px-16 pt-[70px] pb-[76px] rounded-[40px]">
          <h2 className="font-IntegralCF text-5xl pb-14 text-center">
            BROWSE BY DRESS STYLE
          </h2>
          <div className="w-full flex gap-5">
            <div className="bg-white rounded-[20px] h-[289px] w-2/5"></div>
            <div className="bg-white rounded-[20px] h-[289px] w-3/5"></div>
            {/* <div className="bg-white rounded-[20px] h-[190px] w-2/3"></div>
            <div className="bg-white rounded-[20px] h-[190px] w-1/3"></div> */}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
