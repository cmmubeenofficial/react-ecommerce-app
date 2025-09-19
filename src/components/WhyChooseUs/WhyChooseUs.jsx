import React from 'react'

function WhyChooseUs() {
    return (
        <>
            <div className="why-choose-us py-8 lg:py-[48px] px-8 lg:px-0 flex flex-col lg:flex-row gap-6 lg:gap-6 justify-center items-center">

                {/* two box layout */}
                <div className="two-layout flex gap-2 lg:gap-6 justify-center items-center">
                    {/* Free Shiping */}
                    <div className="reason-1 bg-[#F3F5F7] lg:w-[16.375rem] lg:h-[13.75rem] py-[48px] px-[32px] flex flex-col justify-start items-start gap-[16px]">
                        <img src="/icons/why_choose_us/shiping.png" alt="shiping icon" />
                        <h6 className='font-poppins text-[20px] text-[#141718]'>Free Shipping</h6>
                        <p className='font-poppins text-[14px] text-[#6C7275]'>Order above $200</p>
                    </div>

                    {/* Money-back */}
                    <div className="reason-2 bg-[#F3F5F7] xl:w-[16.375rem] xl:h-[13.75rem] py-[48px] px-[32px] flex flex-col justify-start items-start gap-[16px]">
                        <img src="/icons/why_choose_us/money_back.png" alt="Money Back Icon" />
                        <h6 className='font-poppins text-[20px] text-[#141718]'>Money-back</h6>
                        <p className='font-poppins text-[14px] text-[#6C7275]'>30 days guarantee</p>
                    </div>
                </div>

                {/* two box layout */}
                
                <div className="two-layout flex gap-2 lg:gap-6 justify-center items-center">
                    {/* Secure Payments */}
                    <div className="reason-3 bg-[#F3F5F7] xl:w-[16.375rem] xl:h-[13.75rem] py-[48px] px-[32px] flex flex-col justify-start items-start gap-[16px]">
                        <img src="/icons/why_choose_us/secure_payment.png" alt="security icon" />
                        <h6 className='font-poppins text-[20px] text-[#141718]'>Secure Payments</h6>
                        <p className='font-poppins text-[14px] text-[#6C7275]'>Secured by Stripe</p>
                    </div>


                    {/* 24/7 Support */}
                    <div className="reason-4 bg-[#F3F5F7] xl:w-[16.375rem] xl:h-[13.75rem] py-[48px] px-[32px] flex flex-col justify-start items-start gap-[16px]">
                        <img src="/icons/why_choose_us/call.png" alt="call icon" />
                        <h6 className='font-poppins text-[20px] text-[#141718]'>24/7 Support</h6>
                        <p className='font-poppins text-[14px] text-[#6C7275]'>Phone and Email support</p>
                    </div>
                </div>
            </div>
        </>
    )
}

export default WhyChooseUs