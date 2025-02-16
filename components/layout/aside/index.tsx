import { BsSearch, BsGear, BsTrash, BsBook, BsPencil } from 'react-icons/bs'
import { AiOutlineCalendar, AiOutlinePlus, AiOutlineHeart, AiOutlineHome } from 'react-icons/ai'
import { FiTarget } from 'react-icons/fi'
import Link from 'next/link'

const pages = [
  { link: '/', name: "Home", emoji: <AiOutlineHome className='text-xl' /> },
  { link: '/diario', name: "Diario", emoji: <BsBook className='text-xl' /> },
  { link: '/planner', name: "Planner", emoji: <BsPencil className='text-xl' /> },
  { link: '/calendario', name: "Calendario", emoji: <AiOutlineCalendar className='text-xl' /> },
  { link: '/metas', name: "Metas", emoji: <FiTarget className='text-xl' /> },
  { link: '/emocoes', name: "Emoções", emoji: <AiOutlineHeart className='text-xl' /> }
]


export const Sidebar = () => {
  return (
    <aside className='w-64 min-h-screen flex flex-col items-center border-r-2 border-gray-800 justify-between'>
      <section >
        <h1 className='pt-4 pb-1 text-4xl font-semibold italic border-b-2 border-white border-dashed text-center'>FYESTA</h1>
        <div className='flex flex-col gap-7 pt-20'>
          <h2 className='text-lg italic text-center'>Menu</h2>
          <div className='flex gap-3 items-center cursor-pointer buttonaside relative'>
            <BsSearch className='text-xl' />
            <p className='text-xl'>Busca</p>
          </div>
          <div className='flex gap-3 items-center cursor-pointer buttonaside relative '>
            <BsGear className='text-xl' />
            <p className='text-xl'>Configurações</p>
          </div>
          <div className='flex gap-3 items-center cursor-pointer buttonaside relative'>
            <BsTrash className='text-xl' />
            <p className='text-xl'>Lixeira</p>
          </div>
        </div>
        <div className='flex flex-col gap-7 pt-20'>
          <h2 className='text-lg italic text-center'>Páginas</h2>
          {pages.map((item, index) => (
            <Link
              key={index}
              href={item.link}
              className='flex gap-3 items-center cursor-pointer buttonaside relative'>
              {item.emoji}
              <p className='text-xl'>{item.name}</p>
            </Link>
          ))}
        </div>
      </section>

      <div className='flex gap-3 items-center cursor-pointer border-t-2 border-gray-800 w-full justify-center py-4  hover:bg-gray-800'>
        <AiOutlinePlus className='text-2xl' />
        <p>Nova Entrada</p>
      </div>

    </aside>
  )
}
