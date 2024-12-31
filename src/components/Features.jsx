import React, { useEffect, useRef } from 'react';
import { FEATURES_LIST } from '../utils/helper';

const Features = () => {
    const sliderRef = useRef(null);

    useEffect(() => {
        const slider = sliderRef.current;

        if (slider) {
            let animationFrameId;

            const smoothScroll = () => {
                slider.scrollLeft += 1;
                if (slider.scrollLeft >= slider.scrollWidth / 2) {
                    slider.scrollLeft = 0;
                }
                animationFrameId = requestAnimationFrame(smoothScroll);
            };
            animationFrameId = requestAnimationFrame(smoothScroll);
            return () => cancelAnimationFrame(animationFrameId);
        }
    }, []);

    const infiniteImages = [...FEATURES_LIST, ...FEATURES_LIST];

    return (
        <div className="sm:mt-16 mt-64 xl:mt-[21rem] md:mt-20 lg:mb-[50px] md:mb-10 sm:mb-8 mb-[18px]">
            <div className="container mx-auto lg:pb-[73.94px] pb-12">
                <p className="text-center max-w-[212px] lg:ps-[60px] mx-auto font-maisonMono text-custom-lg leading-custom-lg font-normal">Featured in</p>
                <div
                    ref={sliderRef}
                    className="flex gap-12 overflow-hidden lg:hidden pt-5"
                    style={{
                        scrollBehavior: 'auto',
                        whiteSpace: 'nowrap',
                    }}
                >
                    {infiniteImages.map((item, index) => (
                        <img
                            key={index}
                            src={item.src}
                            alt={item.alt}
                            style={{ maxWidth: item.maxWidth }}
                            className="h-auto object-contain inline-block"
                        />
                    ))}
                </div>
                <div className="hidden lg:flex gap-12 max-w-[1025.2px] mx-auto justify-between pt-[49px]">
                    {FEATURES_LIST.map((item, index) => (
                        <img
                            key={index}
                            src={item.src}
                            alt={item.alt}
                            style={{ maxWidth: item.maxWidth }}
                            className="h-auto object-contain pointer-events-none"
                        />
                    ))}
                </div>
            </div>
            <img src="/assets/images/png/features-bottom-green-line.png" alt="line-image" className="w-full sm:block hidden h-[47px] mx-auto pointer-events-none" />
            <img src="/assets/images/png/features-mobile-green-line.png" alt="mobile-line" className='sm:hidden block w-full h-[43px] pointer-events-none' />
        </div>
    );
};

export default Features;