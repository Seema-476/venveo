import React from "react";
import CustomButton from "../common/CustomButton";

const Goals = () => {
    return (
        <div
            className="bg-goals-bg lg:py-[67px] pt-14 pb-[54px] mt-[19px] bg-center bg-no-repeat bg-cover" id="goals">
            <div className="container">
                <div className="flex lg:flex-row flex-col justify-center items-center gap-[29px] sm:gap-11">
                    <p className="sm:text-custom-2xl font-light sm:leading-10 text-3xl leading-custom-6xl text-center text-white max-sm:max-w-[231px] max-sm:mx-auto font-maisonLight">
                        Ready to hit your goals?
                    </p>
                    <div className="flex max-lg:mx-auto justify-center max-sm:w-full">
                        <CustomButton classStyle={'!py-[31px] !px-[31.9px] max-sm:w-full max-sm:flex max-sm:items-center max-sm:justify-center bg-yellow'} text={'Book a Strategy Call'} />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Goals;