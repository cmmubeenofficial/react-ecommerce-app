import React from 'react'

function NewArivals() {
    return (
        <>
            {/* new arivals top text */}
            <div className='new-arivals-text flex justify-between items-center pl-8 lg:px-[10rem] pt-8 lg:pt-12'>
                <p className='font-poppins text-[2.5rem]'>New <br />Arrivals</p>

                {/* more products button */}
                <div className="more-button hidden lg:flex items-center justify-center gap-[0.25rem] border-b cursor-pointer">
                    <p className='font-inter'>More Products</p>
                    <img src="/icons/arrow-right-black.png" alt="arrow right icon" />
                </div>
            </div>

            {/* main container */}
            <div className='main-container py-[3rem] pl-[2rem] lg:pl-[10rem] flex gap-[1.5rem] overflow-hidden'>

                {/* new arival products cards */}
                <div className="product-cards relative">
                    <div className="products w-[262px] h-[433px]">
                        <img src="/imgs/new_arivals/product1.png" alt="product 1" />

                        {/* upper text */}
                        <div className='upper-text-icon flex items-center justify-between'>
                            <div className="text">
                                <p className='bg-white px-[16px] py-[4px] rounded-[4px] absolute top-[15px] left-4'>New</p>
                                <p className='bg-[#38CB89] px-[14px] py-[4px] rounded-[4px] absolute top-14 left-4'>-50%</p>
                            </div>

                            <img className='hidden hover:block absolute left-52 top-[32px] bg-white p-[6px] rounded-full ' src="/icons/like_icon.png" alt="like button" />
                        </div>

                        {/* add to cart button */}
                        <div className="add-to-cart hidden hover:block">
                            <button className=' bg-[#141718] text-white font-inter px-[65px] py-[12px] rounded-[8px] absolute top-[67%] left-[25px]'>Add to cart</button>
                        </div>

                        {/* bottom section (ratings, name, price) */}
                        <div className="bottom-section flex flex-col gap-[12px]">
                            <p className='text-[20px]'>★★★★★</p>
                            <p className='font-inter font-semibold'>Loveseat Sofa</p>
                            <div className="price flex gap-[12px] ">
                                <p className='text-[#141718] text-[14px] font-semibold '>$199.00</p>
                                <p className='text-[#6C7275] text-[14px] line-through'>$400.00</p>
                            </div>
                        </div>
                    </div>
                </div>

                {/* new arival products cards */}
                <div className="product-cards relative">
                    <div className="products w-[262px] h-[433px]">
                        <img src="/imgs/new_arivals/product1.png" alt="product 1" />

                        {/* upper text */}
                        <div className='upper-text-icon flex items-center justify-between'>
                            <div className="text">
                                <p className='bg-white px-[16px] py-[4px] rounded-[4px] absolute top-[15px] left-4'>New</p>
                                <p className='bg-[#38CB89] px-[14px] py-[4px] rounded-[4px] absolute top-14 left-4'>-50%</p>
                            </div>

                            <img className='hidden hover:block absolute left-52 top-[32px] bg-white p-[6px] rounded-full ' src="/icons/like_icon.png" alt="like button" />
                        </div>

                        {/* add to cart button */}
                        <div className="add-to-cart hidden hover:block">
                            <button className=' bg-[#141718] text-white font-inter px-[65px] py-[12px] rounded-[8px] absolute top-[67%] left-[25px]'>Add to cart</button>
                        </div>

                        {/* bottom section (ratings, name, price) */}
                        <div className="bottom-section flex flex-col gap-[12px]">
                            <p className='text-[20px]'>★★★★★</p>
                            <p className='font-inter font-semibold'>Loveseat Sofa</p>
                            <div className="price flex gap-[12px] ">
                                <p className='text-[#141718] text-[14px] font-semibold '>$199.00</p>
                                <p className='text-[#6C7275] text-[14px] line-through'>$400.00</p>
                            </div>
                        </div>
                    </div>
                </div>

                {/* new arival products cards */}
                <div className="product-cards relative">
                    <div className="products w-[262px] h-[433px]">
                        <img src="/imgs/new_arivals/product1.png" alt="product 1" />

                        {/* upper text */}
                        <div className='upper-text-icon flex items-center justify-between'>
                            <div className="text">
                                <p className='bg-white px-[16px] py-[4px] rounded-[4px] absolute top-[15px] left-4'>New</p>
                                <p className='bg-[#38CB89] px-[14px] py-[4px] rounded-[4px] absolute top-14 left-4'>-50%</p>
                            </div>

                            <img className='hidden hover:block absolute left-52 top-[32px] bg-white p-[6px] rounded-full ' src="/icons/like_icon.png" alt="like button" />
                        </div>

                        {/* add to cart button */}
                        <div className="add-to-cart hidden hover:block">
                            <button className=' bg-[#141718] text-white font-inter px-[65px] py-[12px] rounded-[8px] absolute top-[67%] left-[25px]'>Add to cart</button>
                        </div>

                        {/* bottom section (ratings, name, price) */}
                        <div className="bottom-section flex flex-col gap-[12px]">
                            <p className='text-[20px]'>★★★★★</p>
                            <p className='font-inter font-semibold'>Loveseat Sofa</p>
                            <div className="price flex gap-[12px] ">
                                <p className='text-[#141718] text-[14px] font-semibold '>$199.00</p>
                                <p className='text-[#6C7275] text-[14px] line-through'>$400.00</p>
                            </div>
                        </div>
                    </div>
                </div>

                {/* new arival products cards */}
                <div className="product-cards relative">
                    <div className="products w-[262px] h-[433px]">
                        <img src="/imgs/new_arivals/product1.png" alt="product 1" />

                        {/* upper text */}
                        <div className='upper-text-icon flex items-center justify-between'>
                            <div className="text">
                                <p className='bg-white px-[16px] py-[4px] rounded-[4px] absolute top-[15px] left-4'>New</p>
                                <p className='bg-[#38CB89] px-[14px] py-[4px] rounded-[4px] absolute top-14 left-4'>-50%</p>
                            </div>

                            <img className='hidden hover:block absolute left-52 top-[32px] bg-white p-[6px] rounded-full ' src="/icons/like_icon.png" alt="like button" />
                        </div>

                        {/* add to cart button */}
                        <div className="add-to-cart hidden hover:block">
                            <button className=' bg-[#141718] text-white font-inter px-[65px] py-[12px] rounded-[8px] absolute top-[67%] left-[25px]'>Add to cart</button>
                        </div>

                        {/* bottom section (ratings, name, price) */}
                        <div className="bottom-section flex flex-col gap-[12px]">
                            <p className='text-[20px]'>★★★★★</p>
                            <p className='font-inter font-semibold'>Loveseat Sofa</p>
                            <div className="price flex gap-[12px] ">
                                <p className='text-[#141718] text-[14px] font-semibold '>$199.00</p>
                                <p className='text-[#6C7275] text-[14px] line-through'>$400.00</p>
                            </div>
                        </div>
                    </div>
                </div>

                {/* new arival products cards */}
                <div className="product-cards relative">
                    <div className="products w-[262px] h-[433px]">
                        <img src="/imgs/new_arivals/product1.png" alt="product 1" />

                        {/* upper text */}
                        <div className='upper-text-icon flex items-center justify-between'>
                            <div className="text">
                                <p className='bg-white px-[16px] py-[4px] rounded-[4px] absolute top-[15px] left-4'>New</p>
                                <p className='bg-[#38CB89] px-[14px] py-[4px] rounded-[4px] absolute top-14 left-4'>-50%</p>
                            </div>

                            <img className='hidden hover:block absolute left-52 top-[32px] bg-white p-[6px] rounded-full ' src="/icons/like_icon.png" alt="like button" />
                        </div>

                        {/* add to cart button */}
                        <div className="add-to-cart hidden hover:block">
                            <button className=' bg-[#141718] text-white font-inter px-[65px] py-[12px] rounded-[8px] absolute top-[67%] left-[25px]'>Add to cart</button>
                        </div>

                        {/* bottom section (ratings, name, price) */}
                        <div className="bottom-section flex flex-col gap-[12px]">
                            <p className='text-[20px]'>★★★★★</p>
                            <p className='font-inter font-semibold'>Loveseat Sofa</p>
                            <div className="price flex gap-[12px] ">
                                <p className='text-[#141718] text-[14px] font-semibold '>$199.00</p>
                                <p className='text-[#6C7275] text-[14px] line-through'>$400.00</p>
                            </div>
                        </div>
                    </div>
                </div>

            </div>

            {/* bottom slider */}
            <div className="bottom-border pl-8 lg:pl-[10rem]">
                <div className='bg-[#343839] h-[4px] w-[70%]'></div>
            </div>

            {/* more products button */}
            <div className='lg:hidden pl-[2rem] pt-[2.5rem] pb-[2rem]'>
                <div className="btn-cont inline-flex items-center gap-[0.25rem] border-b cursor-pointer">
                    <button className="font-inter cursor-pointer">More Products</button>
                    <img src="/icons/arrow-right-black.png" alt="arrow right button" />
                </div>
            </div>
        </>
    )
}

export default NewArivals