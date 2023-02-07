import Head from 'next/head';

export default function test() {
  return (
    <>
      <Head>
        <title>Trello</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className='min-h-screen flex justify-center items-center'>
        <p className='text-3xl text-green-400'>Você foi autenticado com sucesso</p>
      </div>
    </>
  )
}