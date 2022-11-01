import type { NextPage } from 'next'
import Navbar from '../components/navbar'
import Image from 'next/image';
import Head from 'next/head';
import Link from 'next/link';
import { sections } from '../fixtures/section.fixtures';
import { socialMedias } from '../fixtures/socialMedia.fictures';
import { SocialIcon } from 'react-social-icons';

const Home: NextPage = () => {
  return (
    <div>
      <Head>
        <title>Badisse Bouabdallah | Web3 X Blockchain X Smart Contracts | Freelance</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <meta name="description" content="Hey ! I'm a blockchain developer passionate about web3 ! Take a look at my personnal website..." />
      </Head>

      <Navbar />
      <div className='bg-gray-800 text-white'>
        <div className='flex justify-center'>
          <div>
            {/** About */}
            <div className="pt-40 max-w-5xl sm:pt-52">
              <div className='flex mx-12 gap-2 sm:gap-5 sm:justify-start'>
                <Image
                  src='/developer.png'
                  alt="developer"
                  width={50}
                  height={50}
                />
                <div className="text-3xl font-bold sm:max-w-3xl sm:text-5xl">
                  <div className='flex gap-3 sm:gap-4'>
                    <p>Hi, I am</p>
                    <p className='animate-bounce'>Badisse</p>
                  </div>
                </div>
              </div>
              <div className='flex mx-12 items-center gap-7 justify-center sm:gap-20'>
                <div>
                  <p className="mt-3 text-xl font-semibold bg-clip-text text-transparent bg-gradient-to-r from-cyan-500 to-white sm:text-4xl sm:mt-5">
                    Blockchain Developer
                  </p>
                  <p className="mt-4 text-lg sm:text-4xl sm:mt-8">
                    <span className='font-semibold'>Web3</span> enthusiast. Currently working as <span className='font-semibold'>Full Stack Developer</span>. Feel free to reach out if you need a <span className='font-semibold'>Blockchain Developer</span> !
                  </p>

                  <div className="mt-7 hover:scale-125 ease-out duration-300 inline-flex bg-gradient-to-r from-cyan-600 to-cyan-500 bg-origin-border px-4 py-2 border border-transparent text-lg font-semibold rounded-md shadow-sm hover:from-cyan-700 hover:to-cyan-600 sm:text-xl sm:mt-16">
                    <Link href="/#contact" >
                      Contact Me
                    </Link>
                  </div>
                </div>
                <div className='flex flex-col gap-6 sm:gap-10'>
                  {socialMedias.map((media) => {
                    return (
                      <div key={media.network} className='animate-pulse hover:scale-125 ease-out duration-300'>
                        <SocialIcon network={media.network} url={media.url} bgColor="#ffffff" />
                      </div>

                    )
                  })}

                </div>
              </div>
            </div>

            {/** Skills */}
            <div className='mt-36'>
              <div className='flex flex-col items-center'>
                <h2 className='font-medium text-3xl'>Skills</h2>
                <h3 className='text-xl'>My Technical Knowledge</h3>
              </div>
              <div>
                <h4>Blockchain</h4>
                <ul>
                  <li>Solidity</li>
                  <li>Hardhat</li>
                  <li>Truffle</li>
                  <li>Ether.js</li>
                  <li>Web3.js</li>
                  <li>Openzeppelin</li>
                  <li>Mocha & Chai</li>
                </ul>
                <h4>Web & Mobile</h4>
                <ul>
                  <li>Next.js</li>
                  <li>React.js</li>
                  <li>Node.js</li>
                  <li>React Native</li>
                  <li>Redux</li>
                  <li>REST API</li>
                  <li>Tailwindcss</li>
                </ul>
                <h4>Data</h4>
                <ul>
                  <li>Python</li>
                  <li>SQL</li>
                </ul>
                <h4>Devops & Cloud</h4>
                <ul>
                  <li>Docker</li>
                  <li>Github Actions</li>
                  <li>Gitlab CI</li>
                  <li>AWS</li>
                </ul>
              </div>
            </div>

            {/** Qualifications */}
            <div className='mt-36'>
              <div className='flex flex-col items-center'>
                <h2 className='font-medium text-3xl'>Qualifications</h2>
                <h3 className='text-xl'>My Personnal Journey</h3>
              </div>
              <div>
                <h4>Education</h4>
                <ul>
                  <li>Blockchain Developer</li>
                  <li>Software Engineer</li>
                </ul>
                <h4>Work</h4>
                <ul>
                  <li>Full Stack Developer</li>
                  <li>Machine Learning Engineer Intern</li>
                </ul>
              </div>
            </div>

            {/** Qualifications */}
            <div className='mt-36'>
              <div className='flex flex-col items-center'>
                <h2 className='font-medium text-3xl'>Portfolio</h2>
                <h3 className='text-xl'>Most Recent Work</h3>
              </div>
              <div>
                <h4>Projet Alyra Voting</h4>
                <h4>Projet Alyra Ticket Tocken</h4>
                <h4>React Nativ Calculator</h4>
                <h4>Slay</h4>
              </div>
            </div>

            {/** Contact */}
            <div className='mt-36'>
              <div className='flex flex-col items-center'>
                <h2 className='font-medium text-3xl'>Contact</h2>
                <h3 className='text-xl'>Reach out</h3>
              </div>
              <div>
                <h4>Contact form</h4>
              </div>
            </div>
          </div>

        </div>

      </div>
    </div>
  )
}

export default Home
