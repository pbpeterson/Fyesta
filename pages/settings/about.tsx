import { AiOutlineGithub } from 'react-icons/ai'
import Link from 'next/link'
import Header from '@ui/settings/header'
import { useRouter } from 'next/router'



export default function About() {
  const router = useRouter()
  const page = router.pathname

  return (
    <>
      <section className='px-96 pt-16' >
        <Header
          Page={page}
        />
        <div className='pt-5 flex flex-col  px-4'>
          <h1 className='text-2xl py-5 '>Porque esse aplicativo existe ? </h1>
          <p className='text-lg tracking-wider'>Esse projeto nasceu da minha vontade de ter um lugar para escrever o meu diário,
            mas eu nunca encontrei um aplicativo para computador da exata maneira que eu queria,
            então por muito tempo eu usei o Google Keep depois acabei migrei para o notion,
            o notion soluciona o problema de ter um lugar para armazenar o meu diário e tem uma interface muito legal,
            mas acabando criando outros problemas enquanto tenta resolver as coisas básicas, visando deixar as coisas da maneira
            que eu sempre quis, esse projeto ganhou vida .
          </p>
          <h1 className='text-2xl py-5 '>O que ele utiliza por debaixo dos panos ? </h1>
          <ul>
            <li><p>- Next Js</p></li>
            <li><p>- Typescirpt</p></li>
            <li><p>- Tailwind Css</p></li>
            <li><p>- Framer motion</p></li>
            <li><p>- mongoDB</p></li>
            <li><p>- Firebase</p></li>
            <li><p>- Jotai</p></li>
          </ul>
          <div className='flex flex-col justify-center items-center pt-10'>
            <p className='text-lg'>Caso queira ver o codigo</p>
            <Link href='https://github.com/YuriSamp/Fyesta' target='_blank' className='pt-3'>
              <AiOutlineGithub className='w-16 h-16' />
            </Link>
          </div>
        </div>
      </section>
    </>
  )
}
