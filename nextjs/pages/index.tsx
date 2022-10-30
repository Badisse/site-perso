import type { NextPage } from 'next'
import Navbar from '../components/navbar'
import Image from 'next/image';
import Head from 'next/head';
import About from '../components/about';

const Home: NextPage = () => {
  return (
    <div>
      <Head>
        <title>Badisse Bouabdallah | Web3 X Blockchain X Smart Contracts | Freelance</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <meta name="description" content="Hey ! I'm a blockchain developer passionate about web3 ! Take a look at my personnal website..." />
      </Head>

      <Navbar />
      <div className='bg-gradient-to-b from-gray-800 to-cyan-900'>
        <About />

      </div>
    </div>
  )
}

export default Home
