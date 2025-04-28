import { Link } from 'react-router-dom';
import '../styles/HomePage.css'
import Markup from './Markup';
import books from "../assets/books.png"

function HomePage() {

  return (
    <>
      <Markup>
        <section className=' section bg-stone-200 flex justify-center'>
          <div className='w-[80%] mt-20'>
            <h2 className='dark'>Добро пожаловать в «Записки Странствующего Барда»!
            </h2>
            <p className='dark mt-5'>
            Здесь, среди пожелтевших страниц и эха забытых саг, вы найдете лучшие книги в духе средневековья – от эпичных хроник до мрачных легенд, от рыцарских романов до магических трактатов.
            </p>

            <div className='grid gap-5 grid-cols-4 mt-5'>
              <div className=' col-span-3 flex flex-col gap-12 justify-center'>
                <h3 className='dark'>
                Что ждёт вас в этом свитке?
                </h3>
                <ul className='text-xl dark pl-5 space-y-8 font-medium list-disc'>
                  <li> Обзоры старинных и новых фолиантов – как честный рассказ у камина. </li>
                  <li> Путеводители по мирам – куда отправиться после последней страницы? </li>
                  <li> Скрытые смыслы и символы – что скрывают авторы за строками? </li>
                  <li> Советы для коллекционеров – где найти редкие издания? </li>
                </ul>
                <h3 className='dark'>Каждая книга – это дорога. Давайте странствовать вместе!</h3>
              </div>
               <img className='px-2 col-start-4 col-span-1' src={books} alt="Книжная полка" />
            </div>

            <h2 className='dark text-center mt-20'> Присядьте у огня. История начинается...  </h2>

            <div className='mt-20 h-auto flex items-center justify-center'>
              <Link className='link-p duration-500 text-center w-auto px-[50px] py-[10px] bg-amber-500 rounded-4xl active:bg-slate-800 hover:text-white hover:bg-rose-900' to="/stories"> Начать </Link>
            </div>
          </div>
        </section>
      </Markup>
    </>
  )
}

export default HomePage;
