import React from 'react'
import * as Avatar from '@radix-ui/react-avatar';
import { AiOutlineArrowLeft } from 'react-icons/ai'
import Link from 'next/link';
import AvatarIcon from '@ui/avatar';

export const routes = [
  { name: 'Perfil e visibilidade', link: '/settings/perfil' },
  { name: 'Configurações', link: '/settings' },
  { name: 'Atividade', link: '/settings/activity' },
  { name: 'Atalhos', link: '/settings/shortcuts' },
  { name: 'Sobre', link: '/settings/about' },
]

interface Props {
  Page: string
}

export default function Header({ Page }: Props) {
  return (
    <>
      <Link href='/' className='flex items-center gap-1'>
        <AiOutlineArrowLeft className='h-6 w-6' />
        <p className='text-2xl'>Home</p>
      </Link>
      <section className='pt-10 pb-2  border-b-2 border-gray-800'>
        <div className='flex'>
          <div className='pl-6' >
            <AvatarIcon Width='lg' />
          </div>
          <div className='flex flex-col pl-8 pt-3'>
            <p className='text-3xl'>Yuri Sampaio</p>
            <p>yurisamp123@gmail.com</p>
          </div>
        </div>
        <ul className='flex gap-5 pt-6'>
          {routes.map((item, index) => (
            item.link === Page ?
              <li key={index}>
                <Link href={item.link} className='text-xl cursor-pointer settingUnderline relative text-[#138859]'>{item.name}</Link>
              </li>
              :
              <li key={index}>
                <Link href={item.link} className='text-xl cursor-pointer '>{item.name}</Link>
              </li>
          ))}
        </ul>
      </section>
    </>
  )
}
