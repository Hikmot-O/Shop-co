import Header from "./Header";
import versace from "../assets/Versace.svg";
import zara from "../assets/zara.svg";
import gucci from "../assets/gucci.svg";
import prada from "../assets/prada.svg";
import ck from "../assets/ck.svg";
import arrowForward from "../assets/arrowForward.svg";
import arrowBack from "../assets/arrowBack.svg";
import models from "../assets/models.png";
import { newArrivals, topSelling } from "../data";
import ProductView from "./ProductView";
import HappyCustomers from "./HappyCustomers";
import Footer from "./Footer";
import PopupHeader from "./PopupHeader";

const Home = () => {
  return (
    <div className="font-Satoshi h-screen">
      <PopupHeader />
      <Header />
      <section className="flex flex-col bg-[#F2F0F1] px-0 md:px-10 xl:px-20 pt-10 md:pt-[100px] lg:h-[663px] sm:bg-Hero-bg bg-cover bg-no-repeat bg-center">
        <div className="px-4 md:px-0 xl:px-0">
          <h1 className="text-4xl sm:text-[64px] sm:leading-[64px] font-IntegralCF w-[315px] sm:w-[577px]">
            FIND CLOTHES THAT MATCHES YOUR STYLE
          </h1>
          <p className=" text-[#00000099] text-sm sm:text-base md:leading-[22px] mt-5 mb-6 md:my-8 max-w-[480px]">
            Browse through our diverse range of meticulously crafted garments,
            designed to bring out your individuality and cater to your sense of
            style.
          </p>
          <button
            // href=""
            className="w-full sm:w-auto h-[52px] mb-5 sm:mb-12 text-white bg-black font-[500] py-4 px-[54px] rounded-[62px] decoration-none"
          >
            Shop Now
          </button>
          <div className="flex flex-wrap items-center justify-center sm:justify-start">
            <div className="flex flex-col gap-1 pr-7 sm:pr-8 border-r border-r-[#0000001A]">
              <p className="text-2xl sm:text-[40px] font-[700]">200+</p>
              <p className="text-[#00000099] text-xs sm:text-base">
                International Brands
              </p>
            </div>
            <div className="flex flex-col gap-1 pl-7 sm:px-8 md:border-r border-r-[#0000001A]">
              <p className="text-2xl sm:text-[40px] font-[700]">2,000+</p>
              <p className="text-[#00000099] text-xs sm:text-base">
                High-Quality Products
              </p>
            </div>
            <div className="flex flex-col gap-1 mt-3 md:mt-0 pl-8">
              <p className="text-2xl sm:text-[40px] font-[700]">30,000+</p>
              <p className="text-[#00000099] text-xs sm:text-base">
                Happy Customers
              </p>
            </div>
          </div>
        </div>
        <img
          src={models}
          alt="Two models"
          className="w-[450px] flex sm:hidden"
        />
      </section>

      {/* Brands */}
      <div className="bg-black px-4 md:px-10 xl:px-20 py-11 flex-wrap flex items-center md:justify-between justify-center gap-[34px] md:gap-0">
        {/* <div className="bg-black px-4 md:px-10 xl:px-20 py-11 grid grid-cols-3 md:flex items-center md:justify-between justify-center gap-[34px] md:gap-0"> */}
        <img
          src={versace}
          alt="Versace logo"
          className="w-[116px] h-6 lg:w-auto lg:h-auto justify-self-center"
        />
        <img
          src={zara}
          alt="Zara logo"
          className="h-[27px] w-16 lg:w-auto lg:h-auto justify-self-center"
        />
        <img
          src={gucci}
          alt="Gucci logo"
          className="h-[25px] w-[110px] lg:w-auto lg:h-auto justify-self-center"
        />
        <img
          src={prada}
          alt="Prada logo"
          className="w-[127px] h-[21px] lg:w-auto lg:h-auto justify-self-center"
        />
        <img
          src={ck}
          alt="Calvin Klein logo"
          className="w-[135px] h-[22px] lg:w-auto lg:h-auto justify-self-center"
        />
      </div>

      {/* New arrivals */}
      <section className="mx-4 md:mx-10 xl:mx-20 pt-[50px] md:pt-[72px] border-b-[#0000001A] border-b">
        <h2 className="pb-8 md:pb-14">NEW ARRIVALS</h2>
        <ProductView products={newArrivals} />
        <div className="flex justify-center">
          <button className="font-[500] text-sm sm:text-base w-full sm:w-[218px] text-center mt-6 sm:mt-9 mb-10 sm:mb-16 py-4 px-[54px] rounded-[62px] border border-[#0000001A]">
            View All
          </button>
        </div>
      </section>

      {/* Top selling */}
      <section className="px-4 md:px-10 xl:px-20 pt-10 md:pt-[72px]">
        <h2 className="pb-8 md:pb-14">TOP SELLING</h2>
        <ProductView products={topSelling} />
        <div className="flex justify-center">
          <button className="font-[500] text-sm sm:text-base w-full sm:w-[218px] text-center mt-6 sm:mt-9 mb-10 sm:mb-16 py-4 px-[54px] rounded-[62px] border border-[#0000001A]">
            View All
          </button>
        </div>
      </section>

      {/* Dress styles */}
      <section className="px-4 md:px-10 xl:px-20">
        <div className=" bg-[#F0F0F0] w-full px-6 md:px-16 pt-10 md:pt-[70px] pb-7 md:pb-[76px] rounded-[20px] md:rounded-[40px]">
          <h2 className="pb-7 md:pb-14">BROWSE BY DRESS STYLE</h2>
          <div className=" md:grid grid-cols-[40%_60%] gap-5">
            <div className="dress-style">Casual</div>
            <div className="dress-style">Formal</div>
          </div>
          <div className="md:mt-5 md:grid grid-cols-[60%_40%] gap-5">
            <div className="dress-style">Party</div>
            <div className="dress-style">Gym</div>
          </div>
        </div>
      </section>

      {/* Happy customers */}
      <section className="px-4 md:px-10 xl:px-20 pt-[50px] md:pt-20 pb-[200px] md:pb-[170px]">
        <div className=" pb-10 flex items-center justify-between">
          <h2 className="text-start max-w-[250px] sm:max-w-none">
            OUR HAPPY CUSTOMERS
          </h2>
          <div className="flex items-center gap-4">
            <img src={arrowBack} alt="Back Arrow" className="" />
            <img src={arrowForward} alt="Forward Arrow" className="" />
          </div>
        </div>
        <HappyCustomers />
      </section>

{/* <div className="top-[calc(-300px/2)] md:top-[-90px]"></div> */}
      <Footer />
    </div>
  );
};

export default Home;
