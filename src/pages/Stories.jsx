import Markup from "./Markup";
import Wizard from "../assets/wizard.png"
import Legacy from "../assets/legacy.png"
import Feather from "../assets/magic.png"
import OneBook from "../components/OneBook";

export default function Stories() {

    return (
        <Markup>
             <section className=' section bg-stone-200 flex justify-center'>
                <div className='w-[90%] md:w-[80%] mt-8 md:mt-20'>
                    <h2>Добро пожаловать в Сокровищницу Барда!</h2>
                    <p className="mt-5">Здесь собраны фолианты, достойные пера летописца и внимания искушённого читателя.</p>

                    <div className=" grid grid-cols-2 mt-5 gap-5 md:grid-cols-4 md:mt-10 md:gap-14">

                        <OneBook
                            title={"Грязная кровь"}
                            description={"История запретной любви"}
                            image={Wizard}
                            description2={"Когда любовь становится оружием против системы, а капля \"низкой\" крови в жилах угрожает разрушить трон, построенный на предрассудках."}
                            descriptionMobile={"Любовь становится оружием против системы, а капля \"низкой\" крови может разрушить трон."}
                            link={"/book/dirty-blood"}
                        />

                        <OneBook
                            title={"Наследие"}
                            description={"Продолжение легендарной истории"}
                            image={Legacy}
                            description2={"Потомки тех, кто когда-то боролся за право любить, теперь сами стоят перед выбором: продолжить борьбу или смириться с правилами."}
                            descriptionMobile={"Потомки тех, кто когда-то боролся за право любить, теперь сами стоят перед выбором."}
                            link={"/legacy"}
                        />

                        <OneBook
                            title={"Некромант"}
                            description={"Повесть о том, кто шепчет с мертвыми"}
                            image={Feather}
                            description2={"Её похитили для тёмного обряда, но побег обернулся роковой встречей — с тем, кто знает, как разговаривать с мёртвыми... и решать судьбы живых."}
                            descriptionMobile={"Её похитили для тёмного обряда, побег обернулся роковой встречей — с тем, кто разговаривает с мёртвыми..."}
                            link={"/necromancer"}
                        />

                    </div>
                </div>
            </section>
        </Markup>
    )
}