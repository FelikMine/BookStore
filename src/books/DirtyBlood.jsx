import { useParams } from "react-router-dom";
import Markup from "../pages/Markup";
import DB1 from "../dirtyblood/DB1";
import DB2 from "../dirtyblood/DB2";
import { Link } from "react-router-dom";
import { useEffect , useMemo} from "react";

export default function DirtyBlood () {

    let { page } = useParams();

    let nextPage = useMemo(() => parseInt(page || '1') + 1, [page]);
    let beforePage = useMemo(() => parseInt(page || '1') - 1, [page]);

    useEffect(() => {

    }, [page]);

    const PageComponent = {
        '1': DB1,
        '2': DB2,
    }[page || '1'];

    return (
        <Markup>
            <section className=' section bg-stone-200 flex justify-center'>
                    <div className='w-[90%] md:w-[80%] mt-8 md:mt-20'>
                    {PageComponent ? <PageComponent /> : <div>Страница не найдена</div>}
                    <div className="flex flex-row justify-between content-between my-8 md:my-20">
                        <Link className="underline hover:text-rose-900 text-left active:text-rose-900" to={`/book/dirty-blood/${beforePage}`}> Предыдущая страница </Link>
                        <Link className="underline hover:text-amber-500 text-right active:text-amber-500" to={`/book/dirty-blood/${nextPage}`}> Следующая страница </Link>
                    </div>
                    </div>
            </section>
        </Markup>
    )
}