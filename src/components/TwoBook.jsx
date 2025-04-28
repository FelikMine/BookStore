

export default function TwoBook ({title, description, image}) {

    return (
        <>
            <img className="w-[350px] max-w-96 h-auto object-cover -bottom-5 -inset-x-1/4 opacity-10 absolute z-0" src={image} alt="волшебник" />
            <h3 className="relative z-10"> {title} </h3>
            <p className="text-center leading-5 !text-lg relative z-10"> {description} </p>
        </>
    )
}