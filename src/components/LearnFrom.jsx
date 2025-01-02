import React from "react";
import Heading from "../common/Heading";
import Icon from "../utils/icons";

const LearnFrom = () => {
    return (
        <div className="relative sm:pt-12 pb-[30px] pt-4" id="hero">
            <img src="/assets/images/webp/yellow-learn-line.webp" alt="yellow-line" className="absolute top-[32%] xl:block hidden" />
            <div className="md:container max-w-[1322px] mx-auto">
                <div className="flex flex-col items-center md:pb-[52px] pb-10">
                    <Heading classStyle={'sm:pb-[13px] pb-3 uppercase'} text={'Learn from us.'} />
                    <p className="text-custom-xs font-normal leading-none text-center sm:pb-9 pb-[33px] font-maisonMono">
                        Digital marketing resources from Venveo to help you grow.
                    </p>
                    <button className="font-semibold text-custom-lg leading-5 text-nowrap max-w-[164px] flex gap-[6px] items-center transition-all duration-500 group">
                        See All
                        <Icon
                            classStyle={"group-hover:translate-x-1 transition-all duration-500"}
                            iconName={"arrowIcon"}
                        />
                    </button>
                </div>
                <div className="relative">
                    <img src="/assets/images/webp/learn-from-image.webp" alt="learn-from-image" className="md:block hidden" />
                    <img className="max-md:block hidden" src="/assets/images/webp/mobile-learn-from.webp" alt="learn-from" />
                    <div className="bg-white sm:p-[35px_28px_31px_29px] absolute bottom-[31px] left-[29px] max-md:left-5 max-md:bottom-4 rounded-[25px] max-lg:pt-[30px] max-lg:pb-[26px] max-lg:px-[26px] max-lg:max-w-[339px]">
                        <p className="text-custom-lg font-semibold leading-none text-left text-aqua-green sm:pb-4 pb-[6px] font-MaisonNeue uppercase">
                            Guides
                        </p>
                        <p className="font-light text-2xl leading-custom-5xl sm:text-3xl sm:leading-custom-6xl text-left font-maisonLight max-w-[325px] max-lg:text-2xl max-lg:max-w-[290px]">
                            Marketing to Contractors and Installers: <span className="block">The Ultimate Guide</span>
                        </p>
                        <p className="text-custom-lg leading-5 text-custom-xs font-normal text-left pt-[6px] sm:pt-4 font-maisonMono max-w-[315px]">
                            Understanding the process and maximize the opportunities
                        </p>
                        <button className="font-semibold font-maisonLight text-custom-lg leading-5 text-nowrap max-w-[164px] flex gap-[6px] items-center transition-all duration-500 group mt-5 sm:mt-7">
                            Read More
                            <Icon
                                classStyle={"group-hover:translate-x-1 transition-all duration-500"}
                                iconName={"arrowIcon"}
                            />
                        </button>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default LearnFrom;