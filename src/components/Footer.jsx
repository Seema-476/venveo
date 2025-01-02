import React from "react";
import { FOOTER_DATA, FOOTER_LIST } from "../utils/helper";
import Icon from "../utils/icons";

function Footer() {
    const { logo, visit, contact, socialLinks, footerPolicies } = FOOTER_LIST;
    const currentYear = new Date().getFullYear();

    return (
        <footer className="bg-dark-green text-white pt-[57px] lg:pt-[90px] pb-[86px] lg:pb-[104px]">
            <div className="container max-w-[1353px] mx-auto grid grid-cols-1 xl:grid-cols-5 lg:grid-cols-3 md:grid-cols-2 max-sm:gap-4">
                {FOOTER_DATA.map((obj, index) => (
                    <div
                        key={index}
                        className={`max-xl:pb-14 max-w-[169px] ${index === 3 ? 'xl:-ml-[75px]' : ''
                            }`}
                    >
                        <ul>
                            <li className="font-medium text-xs leading-custom-md mb-5 uppercase">
                                {obj.title}
                            </li>
                            {obj.links.map((link, linkIndex) => (
                                <li key={linkIndex} className="font-maisonLight font-light text-custom-lg text-white hover:text-green duration-700 text-nowrap leading-custom-6xl">
                                    <a
                                        className=""
                                        href={link.href}
                                    >
                                        {link.text}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </div>
                ))}
                <div className="text-center md:text-left xl:-ml-[195px]">
                    <p className="text-3xl leading-custom-6xl font-light font-maisonLight">Get weekly data — and insights.</p>
                    <form className="border-2 border-white mt-[35px] text-white rounded-[50px] text-center py-4 sm:pt-[21.92px] sm:pb-[19px] px-5 xl:px-7 flex w-full xl:max-w-[449px] justify-between">
                        <input
                            id="email"
                            type="email"
                            placeholder="Enter Your Email"
                            className="bg-transparent outline-none w-full placeholder:text-white text-white text-custom-lg font-normal leading-5 font-MaisonNeue"
                            aria-label="Enter your website"
                            required />
                        <button
                            className="text-green text-custom-lg text-nowrap leading-5 font-semibold text-center font-maisonDemi hover:text-white transition-all duration-500">
                            Get Started
                        </button>
                    </form>
                </div>
            </div>
            <div className="container max-w-[1353px] pt-14 lg:pt-14 xl:pt-20 mx-auto flex flex-wrap justify-between items-center text-center sm:text-left">
                <div className="lg:w-1/3 md:w-1/2 w-full mb-6 sm:mb-0">
                    <a href="#">
                        <img src={logo.src} alt={logo.alt} className="mx-auto sm:mx-0 mb-[22px] max-w-[44.8px]" />
                    </a>
                    <p className="text-custom-md leading-5 font-normal font-maisonLight max-w-[315px] max-sm:text-center max-sm:mx-auto">
                        {logo.description}
                    </p>
                    <p className="text-custom-md font-normal font-maisonLight leading-5 max-sm:text-center">
                        {`©${currentYear} Venveo`}
                    </p>
                </div>
                <div className="lg:w-1/3 md:w-1/2 w-full flex gap-8 md:gap-14 max-sm:justify-center lg:justify-center max-md:mt-5">
                    <div className="flex flex-col justify-between xl:pl-9">
                        <p className="font-medium text-xs leading-custom-md">{visit.title}</p>
                        <a target="_blank" href={visit.link} className="mt-2 text-custom-md leading-5 hover:text-green duration-700 font-medium font-maisonLight">
                            {visit.address.split("\n").map((line, index) => (
                                <React.Fragment key={index} className="font-normal text-custom-md leading-5 text-white font-maisonLight">
                                    {line}
                                    <br />
                                </React.Fragment>
                            ))}
                        </a>
                    </div>
                    <div className="flex flex-col justify-between">
                        <p className="font-medium font-maisonLight text-xs leading-custom-md">{contact.title}</p>
                        <a
                            target="_blank"
                            href={contact.email.link}
                            className="mt-6 text-custom-md leading-5 font-maisonLight text-white hover:text-green duration-700 relative after:absolute after:bg-green after:left-0 after:w-full after:h-[1px] after:bottom-[-3px] after:ease-in-out after:duration-500">
                            {contact.email.text}
                        </a>
                        <a
                            target="_blank"
                            href={contact.phone.link}
                            className="pt-[21px] text-custom-md leading-5 font-maisonLight hover:text-green duration-700 relative after:absolute after:bg-green after:left-0 after:w-full after:h-[1px] after:bottom-[-3px] after:ease-in-out after:duration-500">
                            {contact.phone.text}
                        </a>
                    </div>
                </div>
                <div className="lg:w-1/3 md:w-1/2 w-full mt-6 lg:mt-0">
                    <div className="flex max-sm:justify-center lg:justify-end space-x-4">
                        {footerPolicies.map((policy, index) => (
                            <p key={index} className="text-custom-md font-maisonLight leading-5 font-medium text-white">
                                {policy}
                            </p>
                        ))}
                    </div>
                    <div className="flex max-sm:justify-center items-center lg:justify-end space-x-[34px] pt-[31px]">
                        {socialLinks.map((link, index) => (
                            <a
                                key={index}
                                href={link.url}
                                className="transition duration-700 hover:scale-125"
                                target="_blank"
                                rel="noopener noreferrer">
                                <Icon iconName={link.name} />
                            </a>
                        ))}
                    </div>
                </div>
            </div>
        </footer>
    );
}

export default Footer;