import Articals from "../../components/Articals/Articals"
import Navbar from "../../components/Navbar/Navbar"
import NewArivals from "../../components/NewArivals/NewArivals"
import WhyChooseUs from "../../components/WhyChooseUs/WhyChooseUs"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faInstagram, faFacebook, faYoutube } from "@fortawesome/free-brands-svg-icons"

function HomePage() {
  return (
    <>
      <div className="page-container flex flex-col">
        {/* Navbar */}
        <div className="order-1 lg:order-0">
          <Navbar />
        </div>
        <div className="order-3 lg:order-0">
          <NewArivals />
        </div>

        {/* SALE UP TO 35% OFF */}
        <div className="sale-disc-container order-5 lg:order-0">
          <div className="sale-dicount-section bg-[#F3F5F7] flex-col lg:flex lg:flex-row items-center lg:h-[38rem] lg:w-auto sm:w-full sm:h-auto">
            {/* left image only */}
            <img src="/imgs/discount_sale.png"
              className="lg:-ml-[15rem] xl:-ml-0 lg:h-[38rem] lg:w-auto sm:w-full sm:h-auto"
              alt="drawing room" />

            {/* right section */}
            <div className="left-section pl-[4.5rem] flex flex-col gap-[1.5rem] lg:gap-[1rem] py-[6.25rem] px-[2rem]">
              <p className="font-bold text-[#377DFF] font-inter">SALE UP TO 35% OFF</p>
              <h4 className="font-poppins text-[2.5rem]">HUNDREDS of <br />New lower prices!</h4>
              <p className="font-inter text-[1.25rem]">It’s more affordable than ever to give every room in your home a stylish makeover</p>

              {/* right section shop now button */}
              <div>
                <div className="btn-cont inline-flex items-center gap-[0.25rem] border-b cursor-pointer">
                  <button className="font-inter cursor-pointer">Shop Now</button>
                  <img src="/icons/arrow-right-black.png" alt="arrow right button" />
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* featured products section */}
        <div className="featured-products order-2 lg:order-0 grid grid-cols-1 md:grid-cols-2 gap-[1.5rem] px-4 lg:px-[7rem]">

          {/* product 1 */}
          <div className="pro-1 relative">
            <img src="/imgs/featured_products/product1.png" alt="featured sofa" />

            {/* heading */}
            <h5 className="font-poppins text-[1.75rem] lg:text-[2.125rem] absolute top-5 left-8">Living Room</h5>

            {/* shop now button */}
            <div className="btn-cont inline-flex items-center gap-[0.25rem] border-b cursor-pointer absolute top-20 left-8">
              <button className="font-inter text-[0.875rem] lg:text-[1rem] cursor-pointer">Shop Now</button>
              <img src="/icons/arrow-right-black.png" alt="arrow right button" />
            </div>
          </div>

          {/* rows 2 and produt 2, 3 */}
          <div className="prod-2-3 grid grid-rows-2 gap-[1.5rem] relative">

            {/* product 2 */}
            <div className="pro-2">
              <img src="/imgs/featured_products/product2.png" alt="featured bedroom" />

              {/* heading + shop now container */}
              <div className="heading-shop flex flex-col justify-center gap-[0.5rem] absolute top-[20%] left-10">
                {/* heading */}
                <h5 className="font-poppins text-[1.75rem] lg:text-[2.125rem]">Bedroom</h5>

                {/* shop now button */}
                <div className="btn-cont inline-flex items-center gap-[0.25rem] border-b cursor-pointer">
                  <button className="font-inter text-[0.875rem] lg:text-[1rem] cursor-pointer">Shop Now</button>
                  <img src="/icons/arrow-right-black.png" alt="arrow right button" />
                </div>
              </div>
            </div>

            {/* product 3 */}
            <div className="pro-3 relative">
              <img src="/imgs/featured_products/product3.png" alt="featured oven" />

              {/* heading + shop now container */}
              <div className="heading-shop flex flex-col justify-center gap-[0.5rem] absolute top-[45%] left-10">
                {/* heading */}
                <h5 className="font-poppins text-[1.75rem] lg:text-[2.125rem]">Kitchen</h5>

                {/* shop now button */}
                <div className="btn-cont inline-flex items-center gap-[0.25rem] border-b cursor-pointer">
                  <button className="font-inter text-[0.875rem] lg:text-[1rem] cursor-pointer">Shop Now</button>
                  <img src="/icons/arrow-right-black.png" alt="arrow right button" />
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* why choose us section */}
        <div className="order-4 lg:order-0">
          <WhyChooseUs />
        </div>

        {/* articles section */}
        <div className="order-6 lg:order-0">
          <Articals />
        </div>

        {/* Join Our Newsletter section */}
        <div className="newsletter-container order-7 lg:order-0 bg-[#F3F5F7] px-8 py-[5.938rem] md:h-[55vh] flex justify-between items-center overflow-hidden">
          <div className="left-img xl:-ml-[8.75rem] md:-ml-[1rem] mt-[5.625rem]">
            <img src="/imgs/bedroom.png" className="h-[36vw] hidden xl:block" alt="Bedroom image" />
          </div>

          {/* Join Our Newsletter form */}
          <div className="joining-form flex flex-col justify-center gap-[2rem]">
            <div className="joining-text">
              <h4 className="font-poppins md:text-[2.5rem] text-[28px]">Join Our Newsletter</h4>
              <p className="font-inter md:text-[1.125rem] text-[14px]">Sign up for deals, new products and promotions</p>
            </div>

            {/* form */}
            <div className="form flex items-center justify-between border-b border-b-gray-300 pb-[0.625rem] w-full max-w-[500px]">
              <img src="/icons/email.png" alt="email icon" />
              <input type="text"
                placeholder="Email address"
                className="flex-1 px-2 focus:outline-none" />
              <button className="font-inter text-[#6C7275] cursor-pointer pl-2 pr-2 lg:pl-4 lg:pr-4">Signup</button>
            </div>

          </div>

          <div className="right-img mt-[6.25rem] lg:-mr-[12.5rem] md:-mr-[12.5rem]">
            <img src="imgs/signup-sofa.png" alt="sofa image" className="hidden md:block" />
          </div>
        </div>

        {/* footer section */}
        <div className="footer-container order-8 lg:order-0 bg-[#141718] lg:px-[10rem] pt-[5rem] pb-[2rem]">

          <div className="first-row flex flex-col lg:flex-row items-center justify-between gap-[2.5rem]">
            {/* wood heaven + tageline */}
            <div className="wood-haven flex flex-col lg:flex-row items-center justify-between gap-[2rem] ">
              <p className="font-poppins text-[1.5rem] text-[#FFFFFF]">Wood Haven</p>
              <div className="bar border border-r-[3rem] lg:border-r-0 lg:border-b-[1.5rem] border-[#6C7275]"></div>
              <p className="font-inter text-[0.875rem] text-[#E8ECEF]">Gift & Decoration Store</p>
            </div>

            {/* menubar */}
            <nav className='main-nav-container'>
              <ul className='manue-options flex flex-col lg:flex-row items-center gap-[2rem] lg:gap-[2.5rem] font-inter text-[#FEFEFE]'>
                {/* manue */}
                <li className='cursor-pointer'>Home</li>
                <li className='cursor-pointer'>Shop</li>
                <li className='cursor-pointer'>Products</li>
                <li className='cursor-pointer'>Contact Us</li>
              </ul>
            </nav>
          </div>

          {/* border bottom */}
          <div className="flex justify-center items-center">
            <div className="border-b-1 border-[#6C7275] pt-[3.063rem] w-[80%] lg:w-full"></div>
          </div>

          {/* copyright policy + social handlers container */}
          <div className="change-order-container flex flex-col">
            {/* copyright policy */}
            <div className="left-align flex flex-col lg:flex-row items-center justify-between gap-[2rem]">
              <div className="copyright-policy order-2 lg:order-0 py-[1rem] flex flex-col lg:flex-row justify-center items-center gap-[1.75rem]">
                <p className="font-poppins text-[0.875rem] text-[#E8ECEF] order-2 lg:order-0">Copyright © 2023 3legant. All rights reserved</p>

                {/* privacy policy + Terms of Use */}
                <ul className="privacy-policy flex gap-[1.75rem] order-1 lg:order-0">
                  <li className="font-poppins text-[0.75rem] text-[#FEFEFE] font-semibold">Privacy Policy</li>
                  <li className="font-poppins text-[0.75rem] text-[#FEFEFE] font-semibold">Terms of Use</li>
                </ul>
              </div>

              {/* social handles */}
              <div className="social-handles mt-[2rem] order-1 lg:order-0 flex gap-[1.5rem]">
                <FontAwesomeIcon icon={faInstagram} className="text-[#FEFEFE] text-[1.5rem]" />
                <FontAwesomeIcon icon={faFacebook} className="text-[#FEFEFE] text-[1.5rem]" />
                <FontAwesomeIcon icon={faYoutube} className="text-[#FEFEFE] text-[1.5rem]" />
              </div>
            </div>
          </div>

        </div>
      </div>
    </>
  )
}

export default HomePage