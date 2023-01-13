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
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
        <link href="https://fonts.googleapis.com/css2?family=VT323&display=swap" rel="stylesheet" />
      </Head>
      <div className="font-body max-w-screen-xl mx-auto flex flex-col h-screen justify-between scroll-smooth snap-y snap-mandatory">
        <Blackout />
      </div>
    </>
  )
}

export default Home
