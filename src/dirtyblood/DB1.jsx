import { Link } from "react-router-dom"
import { useParams } from "react-router-dom"


export default function DB1 () {
    const { page = '1' } = useParams(); // Текущая страница
    const nextPage = parseInt(page) + 1;

    return (
        <>
            <p> Глава 1 </p>
            <Link to={`/book/dirty-blood/${nextPage}`}> Следующая страница </Link>
        </>
    )
}