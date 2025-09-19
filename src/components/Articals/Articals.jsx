import React from 'react'

function Articals() {
    return (
        <>
            {/* articles top text */}
            <div className='article-top-text flex justify-between items-center py-10 lg:py-[80px] px-8 lg:px-[160px]'>
                <p className='font-poppins text-[40px]'>Articles</p>

                {/* more articles button */}
                <div className="more-button flex items-center justify-center gap-[4px] border-b-1 cursor-pointer">
                    <p className='font-inter'>More Articles</p>
                    <img src="/icons/arrow-right-black.png" alt="arrow right icon" />
                </div>
            </div>

            <div className="main-container lg:px-[160px] pb-10">


                {/* main articles section */}

                <div className="articles-container flex flex-wrap justify-center items-center lg:flex-nowrap gap-[1.563rem]">

                    {/* article 1 */}
                    <div className="articles">
                        <img className='pb-[1.5rem] h-[33rem] lg:h-[20.60rem] w-auto' src="/imgs/articles/ar1.png" alt="7 ways to decor your home" />
                        <h6 className='font-poppins text-[1rem] font-semibold lg:font-normal lg:text-[20px] pb-[8px]'>7 ways to decor your home</h6>

                        {/* read more button */}
                        <div className="more-button inline-flex items-center justify-center gap-[4px] border-b-1 cursor-pointer">
                            <p className='font-inter'>Read More</p>
                            <img src="/icons/arrow-right-black.png" alt="arrow right icon" />
                        </div>
                    </div>

                    {/* article 2 */}
                    <div className="articles">
                        <img className='pb-[24px] h-[33rem] lg:h-[20.60rem] w-auto' src="/imgs/articles/ar1.png" alt="7 ways to decor your home" />
                        <h6 className='font-poppins text-[1rem] font-semibold lg:font-normal lg:text-[20px] pb-[8px]'>7 ways to decor your home</h6>

                        {/* read more button */}
                        <div className="more-button inline-flex items-center justify-center gap-[4px] border-b-1 cursor-pointer">
                            <p className='font-inter'>Read More</p>
                            <img src="/icons/arrow-right-black.png" alt="arrow right icon" />
                        </div>
                    </div>

                    {/* article 3 */}
                    <div className="articles">
                        <img className='pb-[24px] h-[33rem] lg:h-[20.60rem] w-auto' src="/imgs/articles/ar1.png" alt="7 ways to decor your home" />
                        <h6 className='font-poppins text-[1rem] font-semibold lg:font-normal lg:text-[20px] pb-[8px]'>7 ways to decor your home</h6>

                        {/* read more button */}
                        <div className="more-button inline-flex items-center justify-center gap-[4px] border-b-1 cursor-pointer">
                            <p className='font-inter'>Read More</p>
                            <img src="/icons/arrow-right-black.png" alt="arrow right icon" />
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Articals