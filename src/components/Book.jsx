import Necromancer from "../books/Necromancer";
import DirtyBlood from "../books/DirtyBlood";
import Legacy from "../books/Legacy";
import { useParams } from "react-router-dom";

export default function BookPage() {
    const { slug } = useParams();

    const BookComponent = {
      'dirty-blood': DirtyBlood,
      'legacy': Legacy,
      'necromancer': Necromancer
    }[slug];

    return BookComponent ? <BookComponent /> : <div>Книга не найдена</div>;
};