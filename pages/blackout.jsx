import Head from 'next/head'
import Image from 'next/image'

// custom imports
import Header from '../components/Header.jsx'
import Blackout from '../components/Blackout.jsx'
import Footer from '../components/Footer.jsx'

const Home = () => {
  return (
    <>
      <Head>
        <title>Blackout</title>
        <meta name="description" content="Retro-terminal web app" />
        <link rel="icon" href="/favicon.png" />
      </Head>
      <div className="max-w-screen-xl mx-auto flex flex-col h-screen justify-between scroll-smooth snap-y snap-mandatory">
        <Blackout />
      </div>
    </>
  )
}

export default Home