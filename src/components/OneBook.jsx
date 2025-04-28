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
                className={`p-4 box-border border-amber-500 border-4 h-[340px] rounded-3xl flex items-center justify-between flex-col gap-2.5 overflow-hidden transition-all duration-700 ${isOpen ? 'opacity-0 absolute inset-0 pointer-events-none' : 'opacity-100 relative'}`}
            >
                <img className="h-32 w-32 z-10" src={image} alt="Обложка книги" />
                <h3 className="z-10">{title}</h3>
                <p className="text-center leading-5 !text-lg z-10">{description}</p>
                <button className="text-xl bg-amber-500 text-slate-900 rounded-4xl w-full py-2 hovered actived duration-500">Начать</button>
            </div>
            {/* Block two */}
            <div
                className={`p-4 box-border border-amber-500 border-4 h-[340px] rounded-3xl flex items-center justify-between flex-col gap-2.5 overflow-hidden transition-all duration-700 ${isOpen ? 'opacity-100 relative' : 'opacity-0 absolute inset-0 pointer-events-none'}` }
            >
                <img className="w-[350px] max-w-96 h-auto object-cover -bottom-5 -inset-x-1/4 opacity-10 absolute z-0" src={image} alt="Обложка книги" />
                <h3 className="relative z-10">{title2}</h3>
                <p className="text-center leading-5 !text-lg relative z-10">{description2}</p>
                <Link className='link-p w-full px-auto duration-500 text-center w-auto py-2 bg-amber-500 rounded-4xl active:bg-slate-800 hover:text-white hover:bg-rose-900 relative z-20' to={link}>Начать</Link>
            </div>
        </div>
        </>
    )
}