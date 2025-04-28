import Markup from "./Markup";
import Wizard from "../assets/wizard.png"
import OneBook from "../components/OneBook";
import TwoBook from "../components/TwoBook"

export default function Stories() {

    return (
        <Markup>
             <section className=' section bg-stone-200 flex justify-center'>
                <div className='w-[80%] mt-20'>
                    <h2>Добро пожаловать в Сокровищницу Барда!</h2>
                    <p className="mt-5">Здесь собраны фолианты, достойные пера летописца и внимания искушённого читателя.</p>

                    <div className=" grid grid-cols-4 mt-10 gap-x-14">

                        <div className="group perspective-[1000px] transition-transform duration-500 transform-style-preserve-3d group-hover:rotate-y-[180deg]">
                            <div className=" absolute backface-hidden front col-span-1 p-5 box-border border-amber-500 border-4 h-[340px] rounded-3xl flex items-center justify-center flex-col gap-2.5 overflow-hidden">
                                <OneBook
                                    title={"Грязная кровь"}
                                    description={"История запретной любви"}
                                    image={Wizard}
                                />
                                <button className="text-xl bg-amber-500 text-slate-900 rounded-4xl w-full py-2 hovered actived duration-500"> Начать </button>
                            </div>
                        </div>

                        <div className="group perspective-[1000px] transition-transform duration-500 transform-style-preserve-3d group-hover:rotate-y-[180deg]">
                            <div className=" absolute backface-hidden front col-span-1 p-5 box-border border-amber-500 border-4 h-[340px] rounded-3xl flex items-center justify-center flex-col gap-2.5 overflow-hidden">
                                <TwoBook
                                    title={"Грязная кровь"}
                                    description={"Когда любовь становится оружием против системы, а капля \"низкой\" крови в жилах угрожает разрушить трон, построенный на предрассудках."}
                                    image={Wizard}
                                />
                                <button className="text-xl bg-amber-500 text-slate-900 rounded-4xl w-full py-2 hovered actived duration-500 relative z-10"> Начать </button>
                            </div>
                        </div>

                    </div>
                </div>
            </section>
        </Markup>
    )
}