import type { NextComponentType } from 'next';
import Image from 'next/image';
import { sections } from '../fixtures/section.fixtures';

const About: NextComponentType = () => {
    return (
        <div className="pt-40">
            <div className="relative">
                <div className="px-5 lg:mx-auto lg:max-w-7xl lg:px-8 lg:grid lg:grid-cols-2 lg:grid-flow-col-dense lg:gap-24">
                    <div className="sm:mt-16 lg:mt-0">
                        <div className="px-20 sm:pl-6 md:-mr-16 lg:px-0 lg:m-0 lg:relative">
                            <Image
                                src={sections.home.images[0]}
                                alt="developer"
                                width={300}
                                height={300}
                                layout="responsive"
                                className="w-full rounded-full shadow-xl ring-1 ring-black ring-opacity-5"
                            />
                        </div>
                    </div>
                    <div className="mt-12 px-4 max-w-xl mx-auto sm:px-6 lg:py-16 lg:max-w-none lg:mx-0 lg:px-0">
                        <div>
                            {sections.home.content}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default About;