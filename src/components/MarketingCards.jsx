import React, { useState } from 'react';
import { MARKETING_DATA, MARKETING_MOBILE_DATA } from '../utils/helper'
import Icon from '../utils/icons'

const MarketingCards = () => {
    const [showAll, setShowAll] = useState(false);

    return (
        <div className="max-w-[1920px] mx-auto w-full sm:pt-[29px] pt-2 pb-9" id='market'>
            <div className="sm:flex hidden max-xl:flex-wrap justify-between gap-6 max-xl:justify-center max-w-[1920px] 2xl:container mx-auto w-full">
                {MARKETING_DATA.map((data, index) => (
                    <div
                        key={index}
                        className={`max-w-[440px] w-full p-[202px_29px_29px_29px] bg-cover bg-no-repeat bg-center ${data.bgImage}`}>
                        <div className="w-full max-w-[382px] h-[320px] bg-white p-[35px_29px_24px_28px] shadow-lg rounded-[25px]">
                            <div className="flex flex-col h-full">
                                <p className="text-aqua-green text-custom-lg leading-5 font-semibold uppercase pb-[15px]">
                                    {data.title}
                                </p>
                                <p className="text-black text-2xl leading-custom-5xl sm:text-3xl sm:leading-custom-6xl font-maisonLight font-light pb-3">{data.subtitle}</p>
                                <p className="text-black text-custom-lg leading-5 font-maisonMono font-normal max-w-[315px]">
                                    {data.description}
                                </p>
                                <button
                                    className={`font-semibold font-maisonLight text-custom-lg leading-5 text-nowrap max-w-[164px] flex gap-[6px] items-center transition-all duration-500 group ${index === 0
                                        ? "sm:pt-[81px] pt-8"
                                        : index === 1
                                            ? "sm:pt-[46px] pt-8"
                                            : index === 2
                                                ? "sm:pt-[40px] pt-8"
                                                : "sm:pt-[42px] pt-8"
                                        }`}>
                                    {data.buttonText}
                                    <Icon
                                        classStyle={
                                            "group-hover:translate-x-1 transition-all duration-500"
                                        }
                                        iconName={"arrowIcon"}
                                    />
                                </button>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
            <div className="flex flex-col">
                <div className="flex-col flex gap-6 sm:hidden">
                    {MARKETING_MOBILE_DATA.slice(0, showAll ? MARKETING_MOBILE_DATA.length : 1).map((data, index) => (
                        <div
                            key={index}
                            className={`w-full h-[240px] p-[16px_0_20px_113px] bg-cover bg-no-repeat bg-center ${data.bgImage}`}
                        >
                            <div className="w-full bg-white p-[29px_0_26px_25px] shadow-lg rounded-[25px] rounded-tr-none rounded-br-none">
                                <p className="text-aqua-green text-custom-lg leading-5 font-semibold uppercase pb-[15px]">
                                    {data.title}
                                </p>
                                <p className="text-black text-2xl max-w-[201px] leading-custom-5xl font-maisonLight font-light pb-[19px]">
                                    {data.subtitle}
                                </p>
                                <button className="font-semibold text-custom-lg leading-5 text-nowrap max-w-[164px] flex gap-[6px] items-center transition-all duration-500 group">
                                    {data.buttonText}
                                    <Icon
                                        classStyle={"group-hover:translate-x-1 transition-all duration-500"}
                                        iconName={"arrowIcon"}
                                    />
                                </button>
                            </div>
                        </div>
                    ))}
                </div>
                <div className="justify-center mt-9 max-sm:mb-7 max-sm:flex hidden">
                    <button
                        className="font-semibold text-custom-lg leading-custom-lg"
                        onClick={() => setShowAll(!showAll)}
                    >
                        {showAll ? "Show Less Solutions ▲" : "Show More Solutions ▼"}
                    </button>
                </div>
            </div>
        </div>
    )
}

export default MarketingCards