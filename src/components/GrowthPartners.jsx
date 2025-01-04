import React, { useState, useEffect } from "react";
import Heading from "../common/Heading";
import CustomButton from "../common/CustomButton";
import { TABS_DATA } from "../utils/helper";

const Tab = ({ activeTab }) => {
    switch (activeTab) {
        case "industry":
            return (
                <div className="relative bg-cover bg-tab-industry-bg !max-w-[1280px] bg-center sm:px-12 xl:ps-[76px] xl:pe-[60px] sm:py-16 px-4 py-6 bg-no-repeat lg:h-[720px]">
                    <div className="lg:flex justify-between">
                        <div className="lg:w-4/12 w-full">
                            <Heading classStyle={'text-white uppercase'} text={'The smartest minds in the industry'} />
                            <p className="text-3xl leading-custom-6xl font-light font-maisonLight text-left text-white pb-8 max-sm:pb-4 max-sm:text-2xl pt-2">
                                Answer our questions and listen to our answers.</p>
                            <p className="font-normal text-custom-lg leading-5 font-maisonMono text-left text-white lg:pb-[98px] md:pb-11 pb-8 max-lg:pb-[57px] max-sm:text-xl max-w-[373px]">
                                This is placeholder but can add more to the business of building, some epic fails (and how to avoid them), and everything building science.
                            </p>
                            <div className="flex max-lg:mb-5 max-sm:w-full items-center">
                                <button className="bg-red max-sm:w-full max-sm:justify-center flex items-center px-[32px] py-[31px] text-white leading-custom-lg text-custom-lg font-maisonMedium font-medium transition duration-700 hover:scale-105">
                                    <img className="mr-[10px]" src="/assets/images/svg/tab-subscribe-svg.svg" alt="subscribe" />
                                    Subscribe to Podcast <span className="text-custom-sm leading-custom-xs ml-1 mt-[6px]"> ▼</span>
                                </button>
                            </div>
                        </div>
                        <div className="lg:w-2/12 w-full">
                             <div className="flex lg:flex-col max-lg:!justify-between items-center max-sm:overflow-auto">
                                 <img src="/assets/images/webp/Home-Depot-Logo.webp" alt="Depot-Logo" className="max-w-[66px] lg:pb-20 pointer-events-none" />
                                 <img src="/assets/images/webp/aia-logo.webp" alt="ai-Logo" className="max-w-[66px] lg:pb-[62px] pointer-events-none" />
                               <img src="/assets/images/webp/lowes-logo.webp" alt="Lowes-Logo" className="max-w-[92px] lg:pb-[10px] pointer-events-none" />
                                 <img src="/assets/images/webp/risinger-build.webp" alt="Build-Logo" className="lg:max-w-[191px] max-w-[100px] lg:pb-[31.77px] pointer-events-none" />
                                <img src="/assets/images/webp/houzz.webp" alt="Houzz-Logo" className="max-w-[117px] pointer-events-none" />
                             </div>
                        </div>
                        <div className="lg:w-5/12 w-full max-lg:mt-5 flex lg:justify-end">
                            <img className="lg:h-[573px] lg:max-w-[440px] w-full" src="/assets/images/webp/tab-image.webp" alt="tab-card" />
                        </div>
                    </div>
                </div>
            );
        case "roi":
            return (
                <div className="relative md:bg-tab-focused-bg bg-cover bg-no-repeat bg-center pt-[37px] md:pt-14 lg:pt-20 max-w-[1280px] h-[720px] max-md:bg-tab-focused-mobile-bg">
                    <Heading classStyle={'text-white ps-[19px] md:ps-20 uppercase'} text={'Proven Results'} />
                    <p className="text-3xl font-light font-maisonLight text-left text-white ps-[19px] md:ps-20">
                        Not hopes and prayers. </p>
                    <div className="md:block hidden lg:max-w-[293px] absolute yellow-circle bottom-0 xl:bottom-[10%] left-[-5%]">
                        <img className="lg:max-w-[293px] md:max-w-[170px] pointer-events-none" src="/assets/images/webp/tab-left-circle.webp" alt="circle" />
                    </div>
                    <div className="md:block hidden lg:max-w-[189px] md:max-w-[149px] green-circle absolute top-[34%] xl:right-[-5%] right-[-2%]">
                        <img className="pointer-events-none" src="/assets/images/webp/tab-right-circle.webp" alt="circle" />
                    </div>
                </div>
            );
        case "proprietary":
            return (
                <div className="max-w-[1280px] bg-tab-proprietary-mobile-bg lg:bg-tab-proprietary-bg bg-cover bg-no-repeat bg-center pl-[79px] pr-[55px] pt-[75px] max-sm:py-9 max-lg:py-[45px] lg:h-[720px] max-md:px-[32px] max-sm:px-4">
                    <div className="lg:flex-row flex justify-between flex-col">
                        <div className="lg:w-5/12 w-full">
                            <Heading classStyle={'text-white uppercase'} text={'Project Radar'} />
                            <img src="/assets/images/webp/tab-three-logo-ipsum.webp" alt="tab-logo" className="pt-[7px] max-w-[72.86px] w-full pointer-events-none" />
                            <p className="sm:text-3xl lg:max-w-[360px] font-light font-maisonLight text-left text-white sm:leading-custom-6xl pt-10 md:pt-20 lg:pt-[10rem] pb-[14px] text-2xl leading-custom-5xl">
                                Lorem ipsum what this product actually does. </p>
                            <p className="text-white text-custom-lg font-normal leading-5 lg:max-w-[373px] font-maisonMono">This is placeholder but can add more the business of building, some epic fails (and how to avoid them) and everything building science.</p>
                            <div className="flex mt-12 max-lg:pb-14 max-sm:pb-[21px] max-sm:w-full max-sm:justify-center max-sm:items-center">
                                <CustomButton classStyle={'!px-8 !py-[31px] max-sm:w-full max-sm:flex max-sm:justify-center max-sm:items-center'} text={'Call to Action Somewhere'} />
                            </div>
                        </div>
                        <div className="lg:w-5/12 w-full flex xl:justify-end max-lg:items-center">
                            <img src="/assets/images/webp/tab-map.webp" alt="Tab-Three-Map" className="pointer-events-none w-full xl:max-w-[440px]" />
                        </div>
                    </div>
                </div>
            );
        default:
            return null;
    }
};

const GrowthPartner = () => {
    const [activeTab, setActiveTab] = useState(() => {
        const queryParams = new URLSearchParams(window.location.search);
        return queryParams.get("tab") || "industry";
    });

    useEffect(() => {
        const queryParams = new URLSearchParams(window.location.search);
        queryParams.set("tab", activeTab);
        window.history.replaceState(null, "", `?${queryParams.toString()}`);
    }, [activeTab]);

    return (
        <div className="sm:py-14 max-sm:pt-8 max-sm:pb-20 flex justify-center relative">
            <div className="container max-w-[1280px] mx-auto">
                <Heading classStyle={'text-center uppercase'} text={'The Growth Partner'} />
                <p className="text-3xl font-light font-maisonLight text-center sm:pb-8 lg:pb-[43px] max-sm:pb-[19px] max-sm:text-2xl">you’ve been looking for.</p>
                <p className="text-custom-lg font-maisonMono font-normal text-center max-sm:max-w-[291px] mx-auto lg:pb-[105px] max-lg:pb-[56px]">Businesses trust Venveo to power grow.</p>
                <div className="nav-tabs">
                    <div className="flex sm:justify-center gap-20 max-sm:gap-10 pb-12 tab-list max-sm:overflow-auto w-full">
                        {TABS_DATA.map((tab) => (
                            <button
                                key={tab.id}
                                className={`tab text-lg font-maisonMedium text-light-black font-semibold whitespace-nowrap relative ${activeTab === tab.id ? "!text-black opacity-100" : ""
                                    }`}
                                onClick={() => setActiveTab(tab.id)}>
                                {tab.label}
                                {activeTab === tab.id && (
                                    <img
                                        className="absolute top-full max-w-[155.12px] left-1/2 transform -translate-x-1/2"
                                        alt="active-line"
                                        src="/assets/images/svg/tab-active-line.svg" />
                                )}
                            </button>
                        ))}
                    </div>
                    <div className="tab-content">
                        <Tab activeTab={activeTab} />
                    </div>
                </div>
            </div>
            <div className="absolute bottom-0 sm:block hidden lg:bottom-7 -z-10 left-0 pointer-events-none w-full"><img src="/assets/images/webp/tabs-bottom-green-line.webp" alt="tab-line" className="w-full" /></div>
            <div className="absolute bottom-0 block sm:hidden lg:bottom-7 -z-10 left-0 pointer-events-none"><img src="/assets/images/webp/tabs-bottom-mobile-green-line.webp" alt="mobile-green-line" /></div>
        </div>
    );
};

export default GrowthPartner;