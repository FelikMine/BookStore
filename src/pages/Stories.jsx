import Markup from "./Markup";
import Wizard from "../assets/wizard.png"
import OneBook from "../components/OneBook";

export default function Stories() {

    return (
        <Markup>
             <section className=' section bg-stone-200 flex justify-center'>
                <div className='w-[80%] mt-20'>
                    <h2>Добро пожаловать в Сокровищницу Барда!</h2>
                    <p className="mt-5">Здесь собраны фолианты, достойные пера летописца и внимания искушённого читателя.</p>

                    <div className=" grid grid-cols-4 mt-10 gap-x-14">
                        <div className="front col-span-1 p-5 box-border border-amber-500 border-4 h-[340px] rounded-3xl flex items-center justify-center flex-col gap-2.5">
                            <OneBook
                                title={"Грязная кровь"}
                                description={"История запретной любви"}
                                image={Wizard}
                            />
                            <button className="text-xl bg-amber-500 text-slate-900 rounded-4xl w-full py-2 hovered actived"> Начать </button>
                        </div>
                    </div>
                </div>
            </section>
        </Markup>
    )
}