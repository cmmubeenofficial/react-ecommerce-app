import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars } from '@fortawesome/free-solid-svg-icons'

function Navbar() {
  return (
    <>
      <div className="main-container pb-[2.5rem] overflow-hidden">
        {/* dicount bar */}
        <div className="disc-bar-container min-h-[4vh] bg-[#F3F5F7] w-full flex justify-center items-center lg:pr-5 absolute top-0 left-0 py-[0.5rem] px-[2rem] gap-[1.375rem]">

          {/* center items */}
          <div className="center-items min-h-[4vh] flex items-center gap-[0.5rem] lg:gap-[0.75rem]">
            <img src="/icons/top_first.png" alt="top first icon" />

            <p className="text-[0.875rem] font-semibold">30% off storewide — Limited time!</p>
            <div className="shop-now-container hidden lg:flex items-center gap-[0.75rem] border-b border-[#377DFF] pb-[0.125rem] pr-2 cursor-pointer">
              <button className="text-[#377DFF] cursor-pointer">Shop Now</button>
              <img className="cursor-pointer" src="/icons/arrow-right.png" alt="right arrow key" />
            </div>

          </div>


          <div className="cancel-btn absolute right-7">
            <img className="cursor-pointer" src="/icons/Union.png" alt="cancel button" />
          </div>

        </div>

        {/* navbar */}
        <nav className='main-nav-container mt-[2.5rem] px-8 lg:px-[10rem] py-[2.5rem]'>
          <div className="navbar flex items-center justify-between">
            {/* bars icon */}
            <div className="bars-logo flex items-center gap-[0.25rem]">
              <div className='lg:hidden block'>
                <FontAwesomeIcon icon={faBars} className='text-[1.75rem]' />
              </div>

              {/* logo */}
              <img className='w-[3.75rem] lg:w-[3.75rem] cursor-pointer' src="/logo_wood_heavem_trs.png" alt="wood heaven logo" />
            </div>
            {/* </div> */}
            <ul className='manue-options hidden lg:flex gap-[2.5rem] font-space-grotesk'>
              {/* manue */}
              <li className='cursor-pointer'>Home</li>
              <li className='cursor-pointer'>Shop</li>
              <li className='cursor-pointer'>Products</li>
              <li className='cursor-pointer'>Contact Us</li>
            </ul>
            {/* icons */}
            <div className='right-icons flex items-center gap-[1rem]'>
              <img className='cursor-pointer hidden lg:block' src="/icons/search.png" alt="search icon" />
              <img className='cursor-pointer hidden lg:block' src="/icons/profile.png" alt="profile icon" />
              <div className='shoping-cart flex'>
                <img className='cursor-pointer' src="/icons/shopping_cart.png" alt="shoping cart icon" />
                <div className='bg-black w-6 h-6 rounded-full text-white text-center font-semibold cursor-pointer'>3</div>
              </div>
            </div>
          </div>
        </nav>

        {/* hero section */}
        <div className='flex justify-center items-center relative'>
          {/* 1030px */}
          <img className='lg:w-[75vw] lg:max-w-full lg:h-auto h-[30.4vh] lg:px-0 px-8' src="/imgs/hero-sction1.png" alt="hero section sofa image 1" />
          <div className="left-arrow-container absolute left-[11.25rem] bg-white h-[52px] w-[52px] rounded-full items-center justify-center cursor-pointer hidden lg:flex">
            <img src="/icons/arrow-left.png" alt="hero section left icon" />
          </div>
          <div className="right-arrow-container absolute right-[11.25rem] bg-white h-[52px] w-[52px] rounded-full items-center justify-center cursor-pointer hidden lg:flex">
            <img src="/icons/arrow-right-black.png" alt="hero section left icon" />
          </div>
        </div>

        {/* hero section main heading */}
        <div className='flex flex-col justify-center items-center md:flex md:flex-row gap-4 md:gap-[1rem] pt-8 px-8 md:px-[4rem]'>
          <h2 className='font-poppins text-[40px] xl:text-[4.5rem] text-[#141718]'>Simply Unique<span className='text-[#6C7275]'>/</span> <br />Simply Better.</h2>
          <p className='text-[#6C7275] font-inter text-[14px]'><span className='text-[#343839] font-semibold'>Wood Heaven</span> is a gift & decorations store based in HCMC, <br /> Vietnam. Est since 2019. </p>
        </div>
      </div>
    </>
  )
}

export default Navbar