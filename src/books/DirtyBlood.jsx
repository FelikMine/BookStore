import { useParams } from "react-router-dom";
import Markup from "../pages/Markup";
import DB1 from "../dirtyblood/DB1";
import DB2 from "../dirtyblood/DB2";

export default function DirtyBlood () {

    let {page} = useParams () ;

    const PageComponent = {
        '1': DB1,
        '2': DB2,
    }[page || '1'];

    return (
        <Markup>
            <section className=' section bg-stone-200 flex justify-center'>
                    <div className='w-[90%] md:w-[80%] mt-8 md:mt-20'>
                    {PageComponent ? <PageComponent /> : <div>Страница не найдена</div>}
                    </div>
            </section>
        </Markup>
    )
}