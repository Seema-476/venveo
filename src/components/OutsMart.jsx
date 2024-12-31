import React from 'react';

const OutsMart = () => {
    return (
        <div className="bg-outsmart-bg mt-[63px] max-md:mt-12 max-sm:mt-6 bg-cover bg-no-repeat lg:bg-[100%_100%] bg-center pt-[60px] pb-20 xl:ps-[117.43px] xl:pr-[225.9px] max-sm:py-12 relative mb-14">
            <img
                src="/assets/images/svg/outsmart-arrow.svg"
                alt="arrow-image"
                className="absolute pointer-events-none xl:left-[40rem] lg:left-[28rem] xl:block hidden xl:top-[6.5rem] lg:top-[9rem] top-[11rem] sm:left-[26rem] left-[4rem] sm:top-[8rem]"
            />
            <div className="max-xl:container">
                <div className="md:flex justify-between items-center max-lg:flex-col max-w-[1920px] mx-auto">
                    <div className="flex-col">
                        <p className="text-custom-xs font-space font-normal leading-6 text-left pb-2 font-Mono max-lg:text-center">
                            Get a free competitive analysis on your market
                        </p>
                        <p className="text-custom-2xl !font-light font-maisonLight leading-10 text-left max-lg:text-center max-sm:text-2xl">
                            Outsmart your competition
                        </p>
                    </div>
                    <form className="bg-white  max-lg:mt-5 text-white justify-between rounded-[50px] text-center py-4 sm:py-5 px-7 flex max-w-[448px] w-full lg:ml-auto max-lg:mx-auto">
                        <input
                            id="email"
                            type="text"
                            placeholder="Enter Your Website"
                            className="bg-transparent outline-none font-MaisonNeue placeholder:text-black text-custom-lg font-normal leading-5"
                            aria-label="Enter your website"
                            required
                        />
                        <button
                            className="text-black text-custom-lg leading-5 font-semibold text-center">
                            Analyze
                        </button>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default OutsMart;