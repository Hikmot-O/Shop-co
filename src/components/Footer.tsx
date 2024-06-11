import logo from "../assets/Logo.svg";
import social from "../assets/Social.svg";
import visa from "../assets/visa.svg";
import mastercard from "../assets/mastercard.svg";
import paypal from "../assets/paypal.svg";
import applepay from "../assets/applepay.svg";
import googlepay from "../assets/googlepay.svg";
import email from "../assets/email.svg";

const Footer = () => {
  return (
    <section className="w-full pb-[78px] md:pb-[82px] bg-[#F0F0F0] px-4 md:px-10 xl:px-20 pt-[182px] md:pt-[140px] relative">
      <div className="md:flex items-center justify-between pb-10 md:pb-[50px] border-b border-b-[#0000001A]">
        <div className="">
          <img
            src={logo}
            alt="Logo"
            className="w-[144px] h-5 md:w-auto md:h-auto"
          />
          <p className="mb-5 md:mb-[35px] mt-3.5 md:mt-[25px] md:w-[248px] text-sm text-[#00000099]">
            We have clothes that suits your style and which you’re proud to
            wear. From women to men.
          </p>
          <img src={social} alt="Socials Svg" className="mb-6 md:mb-0" />
        </div>

        <div className="pr-9 grid grid-cols-2 justify-between md:grid-cols-4 md:gap-[70px]">
          <ul className="footer-list">
            <li className="footer-list-title">Company</li>
            <li>About</li>
            <li>Features</li>
            <li>Works</li>
            <li>Career</li>
          </ul>
          <ul className="footer-list">
            <li className="footer-list-title">Help</li>
            <li>Customer Support</li>
            <li>Delivery Details</li>
            <li>Terms & Conditions</li>
            <li>Privacy Policy</li>
          </ul>
          <ul className="footer-list mt-6 md:mt-0">
            <li className="footer-list-title">faq</li>
            <li>Account</li>
            <li>Manage Deliveries</li>
            <li>Orders</li>
            <li>Payments</li>
          </ul>
          <ul className="footer-list mt-6 md:mt-0">
            <li className="footer-list-title">resources</li>
            <li>Free eBooks</li>
            <li>Development Tutorial</li>
            <li>How to - Blog</li>
            <li>Youtube Playlist</li>
          </ul>
        </div>
      </div>
      <div className="w-full md:pt-[25px] md:flex items-center justify-between">
        <p className="text-[#00000099] my-4 md:my-0 text-center md:text-start text-sm">
          Shop.co © 2000-2023, All Rights Reserved
        </p>
        <div className="flex items-center gap-2.5 md:gap-2 justify-center md:justify-self-end">
          <img className="payment" src={visa} alt="Visa Logo" />
          <img className="payment" src={mastercard} alt="Mastercard Logo" />
          <img className="payment" src={paypal} alt="PayPal Logo" />
          <img className="payment" src={applepay} alt="ApplePay Logo" />
          <img className="payment" src={googlepay} alt="GooglePay Logo" />
        </div>
      </div>

      <div className="w-[calc(100%-32px)] md:w-[calc(100%-80px)] xl:w-[calc(100%-160px)] top-[calc(-300px/2)] md:top-[-90px] left-20 right-20 mx-[-80px] pt-8 py-7 md:py-9 px-6 md:px-16 bg-black absolute rounded-[20px] md:flex items-center justify-between justify-self-center">
        <h3 className="text-white mb-8 md:mb-0 md:w-[551px] md:leading-[45px] leading-9 text-[32px] md:text-[40px] font-[700] font-IntegralCF">
          STAY UP TO DATE ABOUT OUR LATEST OFFERS
        </h3>
        <div className="flex flex-col gap-3 md:gap-3.5 text-sm md:text-base">
          <div className="flex items-center md:h-12 w-full md:w-[349px] ">
            <div className="bg-white md:h-12 pl-4 rounded-tl-[62px] rounded-bl-[62px] py-3">
              <img
                src={email}
                alt="Email Svg"
                className=" w-5 h-5 md:h-auto md:w-auto "
              />
            </div>
            <input
              placeholder="Enter your email address"
              type="text"
              className="outline-none w-full rounded-[62px] rounded-tl-none rounded-bl-none placeholder:text-[#00000066] placeholder:text-sm md:placeholder:text-base py-3 px-4 pl-3"
            />
          </div>
          <button className="w-full md:w-[349px] bg-white rounded-[62px] py-3 px-4">
            Subscribe to Newsletter
          </button>
        </div>
      </div>
    </section>
  );
};

export default Footer;
