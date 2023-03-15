import { Link, useLocation } from 'react-router-dom'
import logo from '/imgs/logo.png'
import { navLinksData, socialMedialinksData } from '../data'
import { useEffect, useState } from 'react'
import { BiX, BiMenuAltRight } from 'react-icons/bi'
import { IoMdArrowDropdown } from 'react-icons/io'
import { MdPhone, MdMailOutline } from 'react-icons/md'

const Header = () => {
  const [menuOn, setMenuOn] = useState(false)
  const [isScrollTop, setIsScrollTop] = useState(false)
  const { pathname } = useLocation()

  // No Scroll when Menu Open
  useEffect(() => {
    document.body.style.overflowY = menuOn ? 'hidden' : 'visible'
  }, [menuOn])

  // Scroll top appear, scroll down disappear
  useEffect(() => {
    let lastScrollTop = window.scrollY
    window.addEventListener(
      'scroll',
      () => {
        if (lastScrollTop < window.scrollY) {
          setIsScrollTop(true)
        } else {
          setIsScrollTop(false)
        }
        lastScrollTop = window.scrollY
      },
      { passive: true }
    )
  }, [])

  return (
    <>
      <header
        className={`bg-white fixed w-full z-50 shadow-xl ${
          isScrollTop ? '-top-[150px] m-0' : ''
        }`}
      >
        {/* Top */}
        <div className='bg-blue-900 py-1.5 px-4'>
          <div className='text-darkblue-900 max-w-6xl gap-2 lg:gap-0 mx-auto flex justify-between items-center'>
            <div className='flex items-center gap-12'>
              <div className='flex items-center gap-2'>
                {socialMedialinksData.map((link) => (
                  <a
                    href={link.url}
                    className='flex items-center justify-center gap-2 text-gray-300 hover:text-white transition'
                    key={link.id}
                    target='_blank'
                    rel='noreferrer'
                  >
                    <span className='text-xs'>{link.title}</span>
                    <link.icon className='w-5 h-5' />
                  </a>
                ))}
              </div>
            </div>
            <div className='flex items-center gap-2 lg:gap-10 flex-wrap'>
              <a
                href='tel:0507648007'
                target='_blank'
                rel='noreferrer'
                className='flex items-center gap-1 tracking-wider text-xs text-gray-200 hover:text-white transition'
              >
                0507648007
                <MdPhone className='text-lg' />
              </a>
              <a
                href='mailto:info@spire.edu.sa'
                target='_blank'
                rel='noreferrer'
                className='flex items-center gap-1 text-xs text-gray-200 hover:text-white transition'
              >
                Info@spire.edu.sa
                <MdMailOutline className='text-lg' />
              </a>
            </div>
          </div>
        </div>
        {/* Bottom */}
        <div className='flex items-center max-w-7xl mx-auto py-1 px-4 text-darkBlue-900'>
          {/* Logo */}
          <div className='flex flex-1'>
            <Link to='/' className='w-fit'>
              <img
                src={logo}
                alt='logo'
                className='w-[85px] md:w-[100px]'
                loading='eager'
              />
            </Link>
          </div>
          {/* Nav links */}
          <div
            className={`flex-grow items-center justify-center lg:justify-start transition-all flex flex-col bg-white fixed z-50 top-0 h-full w-full lg:text-base lg:z-auto lg:h-auto lg:w-auto lg:static md:flex lg:flex-row ${
              menuOn
                ? 'gap-4 text-2xl left-0 overflow-y-auto'
                : 'gap-4 text-base left-[150vh]'
            }`}
          >
            {navLinksData.map((link) => {
              if (link.route) {
                return (
                  <Link
                    to={link.route}
                    onClick={() => setMenuOn(false)}
                    key={link.id}
                    className={`hover:text-darkBlue-900 touch-none select-none md:py-2 lg:text-sm border-b-2 font-medium transition ${
                      pathname === link.route
                        ? 'border-blue-900 text-darkBlue-900'
                        : 'border-transparent text-darkBlue-700'
                    }`}
                  >
                    {link.name}
                  </Link>
                )
              }
              return (
                <div
                  className='relative group flex gap-1 md:block items-center flex-col'
                  key={link.id}
                >
                  <div
                    className={`hover:text-darkBlue-900 touch-none select-none border-b-2 lg:text-sm md:py-2 font-medium flex items-center cursor-pointer transition ${
                      pathname === link.route ||
                      link?.subMenu.some((item) => item.route === pathname)
                        ? 'border-blue-900 text-darkBlue-900'
                        : 'border-transparent text-darkBlue-700'
                    }`}
                  >
                    {link.name}
                    <IoMdArrowDropdown className='text-lg' />
                  </div>
                  <div className='absolute hidden z-50 top-9 group-hover:block bg-white border shadow-lg w-64 rounded-lg'>
                    {link.subMenu.map((item) => (
                      <Link
                        to={item.route}
                        key={item.id}
                        onClick={() => setMenuOn(false)}
                      >
                        <p className='p-3 text-sm text-center md:text-right hover:bg-gray-200 transition'>
                          {item.name}
                        </p>
                      </Link>
                    ))}
                  </div>
                </div>
              )
            })}
          </div>
          {/* Login btn */}
          <div
            className={`flex-1 lg:flex lg:static ${
              menuOn ? 'absolute top-6 right-4 z-[60]' : 'hidden z-auto'
            }`}
          >
            <Link
              to='/contact'
              className='text-gray-100 hidden md:inline bg-blue-900 rounded-md hover:bg-darkBlue-900 transition w-fit py-1.5 px-4'
            >
              تسجيل الدخول
            </Link>
          </div>
          {/* Menu open/close icon */}
          {menuOn ? (
            <BiX
              className='lg:hidden inline z-[60] text-6xl cursor-pointer'
              onClick={() => setMenuOn(false)}
            />
          ) : (
            <BiMenuAltRight
              className='lg:hidden inline text-5xl cursor-pointer'
              onClick={() => setMenuOn(true)}
            />
          )}
        </div>
      </header>
    </>
  )
}

export default Header
