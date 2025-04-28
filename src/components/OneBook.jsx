

export default function OneBook ({title, description, image}) {

    return (
        <>
            <img className="h-32 w-32" src={image} alt="волшебник" />
            <h3> {title} </h3>
            <p className="text-center !text-lg"> {description} </p>
        </>
    )
}