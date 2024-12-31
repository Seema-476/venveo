import React from 'react'
import Header from '../components/Header'
import Description from '../common/Description'

const Hero = () => {
    return (
        <div className='bg-cover bg-no-repeat bg-center lg:bg-hero-bg lg:min-h-screen xl:h-[869px] lg:bg-[100%_100%] max-w-[1440px] max-lg:bg-green max-sm:h-[640px] relative mx-auto'>
            <img className='absolute left-0 top-0 lg:hidden block w-[140px]' src="/assets/images/png/hero-mobile-ellipse.png" alt="hero-vector"/>
            <Header />
            <div className="container">
                <div className='max-w-[822px] mx-auto'>
                    <h1 className='font-shone font-bold text-white xl:text-custom-7xl lg:text-8xl md:text-7xl text-custom-5xl leading-custom-10xl xl:leading-custom-12xl uppercase text-center xl:pt-[79px] pt-14 pb-3'>Make marketing
                        <span className='block'></span>a growth machine</h1>
                    <img className='ml-[164px] max-2xl:ml-[160px] max-md:max-w-[146px] max-sm:ml-10' src="assets/images/svg/heading-bottom-line.svg" alt="line" />
                </div>
                <Description classStyle={'pt-3 text-white sm:max-w-[656px] max-w-[319px] mx-auto font-light text-center sm:text-2xl text-custom-xl leading-7 sm:leading-custom-7xl'} text={'We focus on results. Not just chatter. Elevate your business with our top-tier services and tech. Get a proposal now.'} />
                <form className="border-2 border-white mt-[30px] rounded-[50px] text-center py-4 sm:py-5 px-7 flex max-w-[448px] mx-auto justify-between">
                    <input
                        id="email"
                        type="text"
                        placeholder="Enter Your Website"
                        className="bg-transparent outline-none font-maisonLight text-custom-lg leading-5 flex-grow placeholder:text-light-gray text-light-gray"
                        aria-label="Enter your website"
                        required
                    />
                    <button
                        className="text-white text-custom-lg leading-5 font-semibold text-center">
                        Analyze
                    </button>
                </form>
                <img className='pt-[66px] pointer-events-none sm:block hidden max-w-[924px] mx-auto w-full pb-12' src="/assets/images/png/hero-main-image.png" alt="hero-image" />
                <div className='sm:hidden block py-12'>
                    <img className='max-w-[328px] mx-auto w-full pointer-events-none' src="/assets/images/png/hero-mobile-main-image.png" alt="hero-mobile" />
                </div>
            </div>
        </div>
    )
}

export default Hero