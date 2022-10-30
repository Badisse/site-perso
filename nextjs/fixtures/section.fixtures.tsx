import { Section } from "../types/section.types";

export let sections = {
    home: {
        content:
            <div className="mt-6">
                <p className="text-3xl font-extrabold text-white">
                    Hi, I am Badisse
                </p>
                <p className="text-xl font-semibold bg-clip-text text-transparent bg-gradient-to-r from-cyan-500 to-violet-500">
                    Blockchain Developer
                </p>
                <p className="mt-4 text-lg text-white">
                    <span className='font-bold'>Web3</span> enthusiast. Currently working
                    as <span className='font-bold'>Full Stack Developer</span> in Freelance. Feel free to reach out if you need a blockchain developer !
                </p>

                <div className="mt-6">
                    <a
                        href="/#contact"
                        className="inline-flex bg-gradient-to-r from-cyan-600 to-cyan-500 bg-origin-border px-4 py-2 border border-transparent text-base font-semibold rounded-md shadow-sm text-white hover:from-cyan-700 hover:to-cyan-600"
                    >
                        Contact Me
                    </a>
                </div>
            </div>,
        images: ['/developer.png']
    } as Section,
    web3: {
        content: <div></div>,
        images: []
    } as Section,
    skills: {
        content: <div></div>,
        images: []
    } as Section,
    qualifications: {
        content: <div></div>,
        images: []
    } as Section,
    portfolio: {
        content: <div></div>,
        images: []
    } as Section,
    blog: {
        content: <div></div>,
        images: []
    } as Section,
    contact: {
        content: <div></div>,
        images: []
    } as Section
}