const Description = ({ text, classStyle }) => {
    return (
        <p className={`lg:text-2xl text-base text-white lg:leading-custom-7xl font-light ${classStyle}`}>{text}</p>
    )
}

export default Description