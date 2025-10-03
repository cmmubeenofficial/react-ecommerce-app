import React from 'react'

function WhyChooseUs() {
    return (
        <>
            <div className="why-choose-us py-8 lg:py-[48px] px-8 lg:px-0 flex flex-col min-[1290px]:flex-row gap-6 min-[412px]:gap-6 justify-center items-center">

                {/* two box layout */}
                <div className="two-layout flex gap-2 min-[625px]:gap-6 justify-center items-center">
                    {/* Free Shiping */}
                    <div className="reason-1 bg-[#F3F5F7] h-[14.875rem] w-[9.704rem] min-[540px]:w-[15rem] min-[540px]:h-[12rem] min-[625px]:w-[16.375rem] min-[625px]:h-[13.75rem] min-[768px]:w-[19rem] min-[768px]:h-[16rem] min-[853px]:w-[24rem] min-[853px]:h-[20rem] min-[912px]:w-[24rem] min-[912px]:h-[21rem] min-[1280px]:w-[32.2rem] min-[1280px]:h-[26rem] min-[1300px]:w-[16.35rem] min-[1300px]:h-[13.5rem] py-8 px-4 min-[625px]:py-[48px] min-[625px]:px-[32px] flex flex-col justify-center items-start gap-[16px]">
                        <img src="/icons/why_choose_us/shiping.png" alt="shiping icon" className='min-[853px]:h-14 min-[1300px]:h-auto' />
                        <h6 className='font-poppins min-[1300px]:text-[14px] text-[14px] min-[625px]:text-[20px] min-[853px]:text-[25px] text-[#141718]'>Free Shipping</h6>
                        <p className='font-poppins min-[1300px]:text-[14px] min-[853px]:text-[20px] text-[#6C7275]'>Order above $200</p>
                    </div>

                    {/* Money-back */}
                    <div className="reason-2 bg-[#F3F5F7] h-[14.875rem] w-[9.704rem] min-[540px]:w-[15rem] min-[540px]:h-[12rem] min-[625px]:w-[16.375rem] min-[625px]:h-[13.75rem] min-[768px]:w-[19rem] min-[768px]:h-[16rem] min-[853px]:w-[24rem] min-[853px]:h-[20rem] min-[912px]:w-[24rem] min-[912px]:h-[21rem] min-[1280px]:w-[32.2rem] min-[1280px]:h-[26rem] min-[1300px]:w-[16.35rem] min-[1300px]:h-[13.5rem] py-8 px-4 min-[625px]:py-[48px] min-[625px]:px-[32px] flex flex-col justify-center items-start gap-[16px]">
                        <img src="/icons/why_choose_us/money_back.png" alt="Money Back Icon" className='min-[853px]:h-14 min-[1300px]:h-auto' />
                        <h6 className='font-poppins min-[1300px]:text-[14px] min-[625px]:text-[20px] min-[853px]:text-[25px] text-[#141718]'>Money-back</h6>
                        <p className='font-poppins min-[1300px]:text-[14px] min-[853px]:text-[20px] text-[#6C7275]'>30 days guarantee</p>
                    </div>
                </div>

                {/* two box layout */}

                <div className="two-layout flex gap-2 min-[625px]:gap-6 justify-center items-center">
                    {/* Secure Payments */}
                    <div className="reason-3 bg-[#F3F5F7] h-[14.875rem] w-[9.704rem] min-[540px]:w-[15rem] min-[540px]:h-[12rem] min-[625px]:w-[16.375rem] min-[625px]:h-[13.75rem] min-[768px]:w-[19rem] min-[768px]:h-[16rem] min-[853px]:w-[24rem] min-[853px]:h-[20rem] min-[912px]:w-[24rem] min-[912px]:h-[21rem] min-[1280px]:w-[32.2rem] min-[1280px]:h-[26rem] min-[1300px]:w-[16.35rem] min-[1300px]:h-[13.5rem] py-8 px-4 min-[625px]:py-[48px]min-[625px]:px-[32px] flex flex-col justify-center items-start gap-[16px]">
                        <img src="/icons/why_choose_us/secure_payment.png" alt="security icon" className='min-[853px]:h-14 min-[1300px]:h-auto' />
                        <h6 className='font-poppins min-[1300px]:text-[14px] min-[625px]:text-[20px] min-[853px]:text-[25px] text-[#141718]'>Secure Payments</h6>
                        <p className='font-poppins min-[1300px]:text-[14px] min-[853px]:text-[20px] text-[#6C7275]'>Secured by Stripe</p>
                    </div>


                    {/* 24/7 Support */}
                    <div className="reason-4 bg-[#F3F5F7] h-[14.875rem] w-[9.704rem] min-[540px]:w-[15rem] min-[540px]:h-[12rem] min-[625px]:w-[16.375rem] min-[625px]:h-[13.75rem] min-[768px]:w-[19rem] min-[768px]:h-[16rem] min-[853px]:w-[24rem] min-[853px]:h-[20rem] min-[912px]:w-[24rem] min-[912px]:h-[21rem] min-[1280px]:w-[32.2rem] min-[1280px]:h-[26rem] min-[1300px]:w-[16.35rem] min-[1300px]:h-[13.5rem] py-8 px-4 in-[412px]:py-[48px]min-[625px]:px-[32px] flex flex-col justify-center items-start gap-[16px]">
                        <img src="/icons/why_choose_us/call.png" alt="call icon" className='min-[853px]:h-14 min-[1300px]:h-auto' />
                        <h6 className='font-poppins min-[1300px]:text-[14px] min-[625px]:text-[20px] min-[853px]:text-[25px] text-[#141718]'>24/7 Support</h6>
                        <p className='font-poppins min-[1300px]:text-[14px] min-[853px]:text-[20px] text-[#6C7275]'>Phone and Email support</p>
                    </div>
                </div>
            </div>
        </>
    )
}

export default WhyChooseUs