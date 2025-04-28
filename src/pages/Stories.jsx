import Markup from "./Markup";
import Wizard from "../assets/wizard.png"
import Legacy from "../assets/legacy.png"
import OneBook from "../components/OneBook";

export default function Stories() {

    return (
        <Markup>
             <section className=' section bg-stone-200 flex justify-center'>
                <div className='w-[80%] mt-20'>
                    <h2>Добро пожаловать в Сокровищницу Барда!</h2>
                    <p className="mt-5">Здесь собраны фолианты, достойные пера летописца и внимания искушённого читателя.</p>

                    <div className=" grid grid-cols-4 mt-10 gap-x-14">

                        <OneBook
                            title={"Грязная кровь"}
                            description={"История запретной любви"}
                            image={Wizard}
                            title2={"Грязная кровь"}
                            description2={"Когда любовь становится оружием против системы, а капля \"низкой\" крови в жилах угрожает разрушить трон, построенный на предрассудках."}
                            link={"/dirty-blood"}
                        />

                        <OneBook
                            title={"Наследие"}
                            description={"Продолжение легендарной истории"}
                            image={Legacy}
                            title2={"Наследие"}
                            description2={"Потомки тех, кто когда-то боролся за право любить, теперь сами стоят перед выбором: продолжить борьбу или смириться с правилами, написанными чужими руками."}
                            link={"/legacy"}
                        />

                    </div>
                </div>
            </section>
        </Markup>
    )
}