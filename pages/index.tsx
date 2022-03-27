import type { NextPage } from 'next'
import Head from 'next/head'
import Main from '../components/Main/Main'

const Home: NextPage = () => {
  return (
    <div className="bg-primary h-[100%] max-w-[1280px] flex justify-center">
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Main />


    </div>
  )
}

export default Home