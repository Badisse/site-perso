import type { NextComponentType } from 'next';
import Link from 'next/link';
import { Disclosure } from '@headlessui/react';
import { Bars3Icon, BellIcon, XMarkIcon } from '@heroicons/react/24/outline';
import { navMenus } from '../fixtures/navbar.fixttures';
import { useRouter } from 'next/router'
import { socialMedias } from '../fixtures/socialMedia.fictures';
import { SocialIcon } from 'react-social-icons';

const Navbar: NextComponentType = () => {
  const router = useRouter()

  return (
    <Disclosure as="nav" className="bg-gray-800 fixed w-full z-10 top-0">
      {({ open }) => (
        <>
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="flex h-16 items-center justify-between">
              <div className="flex items-center">
                <div className="flex-shrink-0 bg-cyan-500 shadow-lg shadow-cyan-500/50 px-3 py-1 rounded-md">
                  <Link
                    href="/"
                  >
                    <a className='text-white text-xl font-bold'>8ad1sse</a>
                  </Link>

                </div>
                <div className="hidden sm:ml-6 sm:block">
                  <div className="flex space-x-4">
                    {navMenus.map((menu) => {
                      return (
                        <div className='rounded-md px-3 py-2 text-sm font-medium text-gray-300 hover:bg-gray-700 hover:text-white font-bold'>
                          <Link href={menu.href}>
                            {menu.title}
                          </Link>
                        </div>

                      )
                    })}
                    {/* Current: "bg-gray-900 text-white", Default: "text-gray-300 hover:bg-gray-700 hover:text-white" */}
                  </div>
                </div>
              </div>
              <div className="-mr-2 flex sm:hidden">
                {/* Mobile menu button */}
                <Disclosure.Button className="inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white">
                  <span className="sr-only">Open main menu</span>
                  {open ? (
                    <XMarkIcon className="block h-6 w-6" aria-hidden="true" />
                  ) : (
                    <Bars3Icon className="block h-6 w-6" aria-hidden="true" />
                  )}
                </Disclosure.Button>
              </div>
            </div>
          </div>

          <Disclosure.Panel className="sm:hidden">
            <div className="space-y-1 px-2 pt-2 pb-3">
              {/* Current: "bg-gray-900 text-white", Default: "text-gray-300 hover:bg-gray-700 hover:text-white" */

                navMenus.map((menu) => {
                  return (
                    <Disclosure.Button
                      as="a"
                      href={menu.href}
                      className="block rounded-md px-3 py-2 text-xl font-semi-bold text-gray-300 hover:bg-gray-700 hover:text-white"
                    >
                      {menu.title}
                    </Disclosure.Button>
                  )
                })
              }
            </div>
            <div className="border-t border-gray-700 pt-5 pb-4">
              <div className="flex items-center px-5 justify-around">
                {socialMedias.map((media) => {
                  return (
                    <SocialIcon network={media.network} url={media.url} bgColor="#ffffff" />
                  )
                })}
              </div>
            </div>
          </Disclosure.Panel>
        </>
      )}
    </Disclosure>
  )
}

export default Navbar