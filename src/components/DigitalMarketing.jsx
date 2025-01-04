import React, { useState } from 'react';
import Heading from '../common/Heading';
import Icon from '../utils/icons';
import { DIGITAL_MARKETING_LIST } from '../utils/helper';

const DigitalMarketing = () => {
    const [isViewMore, setIsViewMore] = useState(false);
    const toggleView = () => setIsViewMore((prev) => !prev);
    const displayedCards = isViewMore ? DIGITAL_MARKETING_LIST
        : window.innerWidth <= 1022 
            ? DIGITAL_MARKETING_LIST.slice(0, 1)
            : DIGITAL_MARKETING_LIST.slice(0, 4); 
    return (
        <div className="lg:py-[66px] md:py-12 py-6 relative" id='digital'>
            <img
                className="absolute sm:block hidden sm:top-[17%] lg:top-[29%] w-full z-[-1]"
                src="/assets/images/svg/digital-yellow-line.svg"
                alt="yellow-line"
            />
            <div className='px-4 mx-auto'>
                <p className="font-light sm:text-3xl sm:leading-custom-6xl text-2xl leading-custom-5xl text-center font-maisonLight pb-[3px]">
                    Problems we solve.
                </p>
                <Heading
                    text={`DIGITAL MARKETING FOR TODAY'S BUSINESS`}
                    classStyle={"text-center max-w-[487px] mx-auto"}
                />
                <p className="font-normal text-custom-lg leading-5 font-maisonMono sm:pt-[22px] pt-5 text-center max-w-[293px] sm:max-w-[641px] mx-auto max-sm:pb-[11px]">
                    We help companies scale their strategies across multiple channels to drive more revenue, more quickly, without cutting corners.
                </p>
            </div>
            <img
                src="/assets/images/svg/digital-mobile-yellow-line.svg"
                className="w-full sm:hidden block"
                alt="yellow-line"
            />
            <div className="container">
                <div className="xl:pt-[83px] md:pt-16 pt-11 max-w-[1072px] mx-auto">
                    <div className="grid lg:grid-cols-2 lg:gap-x-[66px] lg:gap-y-14 gap-y-10 justify-center w-full">
                        {displayedCards.map((obj, index) => (
                            <div
                                key={index}
                                className={`border-2 bg-white border-aqua-green w-full max-w-[503px] min-h-[506px] px-[30px] lg:pt-14 lg:pb-[50px] pt-[34px] pb-[36.25px] rounded-[25px]`}
                            >
                                <div className="lg:flex max-lg:flex-wrap gap-6">
                                    <Icon classStyle={"lg:size-[53px] size-[39.57px]"} iconName={obj.iconName} />
                                    <div className="flex flex-col max-lg:mt-3">
                                        <p className="font-maisonLight text-2xl leading-custom-5xl lg:text-3xl lg:leading-custom-6xl font-light lg:max-w-[346px]">
                                            {obj.title}
                                        </p>
                                        <p
                                            className={`font-normal text-custom-lg leading-5 font-maisonMono lg:max-w-[315px] ${index === 0 || index === 1
                                                ? "sm:pt-[22px] pt-[15px]"
                                                : "sm:pt-[42px] pt-[15px]"
                                                }`}
                                        >
                                            {obj.description}
                                        </p>
                                        <ul className="list-disc md:pt-[30px] pl-5 pt-4">
                                            {obj.points.map((point, idx) => (
                                                <li
                                                    key={idx}
                                                    className="text-custom-lg leading-5 font-semibold font-maisonMedium max-w-[285px]"
                                                >
                                                    {point}
                                                </li>
                                            ))}
                                        </ul>
                                        <button
                                            className={`font-semibold font-maisonMedium text-custom-lg leading-5 text-nowrap max-w-[164px] flex gap-[6px] items-center transition-all duration-500 group ${index === 0
                                                ? "sm:pt-[42px] pt-8"
                                                : index === 1
                                                    ? "sm:pt-[24px] pt-8"
                                                    : index === 3
                                                        ? "sm:pt-[24px] pt-8"
                                                        : "sm:pt-[42px] pt-8"
                                                }`}
                                        >
                                            {obj.buttonText}
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
                    <div className="justify-center mt-12 max-sm:flex mx-auto text-center lg:hidden">
                        <button
                            className="font-semibold text-custom-lg text-black leading-custom-lg"
                            onClick={toggleView}>
                            {isViewMore ? "Show Less Solutions ▲" : "Show More Solutions ▼"}
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default DigitalMarketing;