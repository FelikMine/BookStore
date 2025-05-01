import { useState } from "react"
import { Link } from "react-router-dom"

export default function OneBook ({title, description, image, title2, description2 , link}) {

    const [isOpen, setIsOpen] = useState(false);

    function handleClick () {
        setIsOpen(!isOpen);
    }

    return (
        <>
             <div className="relative col-span-1"
                onMouseEnter={() => setIsOpen(true)}
                onMouseLeave={() => setIsOpen(false)}>
            <div
                className={`p-3 md:p-4 box-border border-amber-500 border-3 md:border-4 h-[250px] md:h-[340px] rounded-3xl flex items-center justify-between flex-col gap-0.5 md:gap-2.5 overflow-hidden transition-all duration-700 ${isOpen ? 'opacity-0 absolute inset-0 pointer-events-none' : 'opacity-100 relative'}`}
            >
                <img className="h-20 w-20 md:h-32 md:w-32 z-10" src={image} alt="Обложка книги" />
                <h3 className="z-10 !text-base md:!text-2xl">{title}</h3>
                <p className="text-center md:leading-5 leading-4 !text-sm md:!text-lg z-10">{description}</p>
                <button className="text-xl bg-amber-500 text-slate-900 rounded-4xl w-full py-1 md:py-2 hovered actived duration-500">Начать</button>
            </div>
            {/* Block two */}
            <div
                className={`p-3 md:p-4 box-border border-amber-500 border-3 md:border-4 h-[250px] md:h-[340px] rounded-3xl flex items-center justify-between flex-col gap-0.5 md:gap-2.5 overflow-hidden transition-all duration-700 ${isOpen ? 'opacity-100 relative' : 'opacity-0 absolute inset-0 pointer-events-none'}` }
            >
                <img className="w-[240px] md:w-[350px] max-w-96 h-auto object-cover -bottom-5 -inset-x-1/4 opacity-10 absolute z-0" src={image} alt="Обложка книги" />
                <h3 className="relative !text-base leading-4 text-center md:!text-2xl z-10">{title}</h3>
                <p className="text-center md:leading-5 leading-4 !text-xs md:!text-lg relative z-10">{description2}</p>
                <Link className='link-p inline-flex justify-center w-full px-2 md:px-auto duration-500 text-center py-1 md:py-2 bg-amber-500 rounded-4xl active:bg-slate-800 hover:text-white hover:bg-rose-900 relative z-20' to={link}>Начать</Link>
            </div>
        </div>
        </>
    )
}