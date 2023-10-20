import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/solid';
import { useState } from 'react';

export default function Header() {
  const [showMenu, setShowMenu] = useState(false);

  function handleShow() {
    return () => setShowMenu((prev) => !prev);
  }

  return (
    <>
      <header
        id='header'
        className='fixed top-0 z-20 flex bg-white w-full gap-2 py-4 px-8 border-b shadow-lg justify-between box-border text-[14px] align-middle'
      >
        <a href='#banner'>
          <img
            className='w-16'
            src='https://res.cloudinary.com/jessaleem/image/upload/v1691374037/Marce_Jose/logoJ_M_d4ifzz.png'
          />
        </a>
        <nav className='flex self-center xsm:hidden '>
          <ul className='flex flex-wrap gap-4 align-middle text-lime-900 font-medium'>
            <li>
              <a
                href='#bienvenidos'
                className='cursor-pointer rounded-xl hover:text-lime-700'
              >
                ¡Bienvenidos!
              </a>
            </li>
            <li>
              <a
                href='#reservar'
                className='cursor-pointer rounded-xl py-2 px-3 hover:text-lime-700'
              >
                Reservar
              </a>
            </li>
            <li>
              <a
                href='#llegar'
                className='cursor-pointer rounded-xl py-2 px-3 hover:text-lime-700'
              >
                Llegar a Barichara
              </a>
            </li>
            <li>
              <a
                href='#hospedaje'
                className='cursor-pointer rounded-xl py-2 px-3 hover:text-lime-700'
              >
                Hospedaje
              </a>
            </li>
            <li>
              <a
                href='#evento'
                className='cursor-pointer rounded-xl py-2 px-3 hover:text-lime-700'
              >
                Evento
              </a>
            </li>
            <li>
              <a
                href='#vestuario'
                className='cursor-pointer rounded-xl py-2 px-3 hover:text-lime-700'
              >
                Vestuario
              </a>
            </li>
            <li>
              <a
                href='#myp'
                className='cursor-pointer rounded-xl py-2 px-3 hover:text-lime-700'
              >
                Maquillaje y Peinado
              </a>
            </li>
            <li>
              <a
                href='#conoce'
                className='cursor-pointer rounded-xl py-2 px-3 hover:text-lime-700'
              >
                Conoce Santander
              </a>
            </li>
            <li>
              <a
                href='#regalo'
                className='cursor-pointer rounded-xl py-2 px-3 hover:text-lime-700'
              >
                Regalo
              </a>
            </li>
          </ul>
        </nav>
        <section className=' sm:hidden flex text-lime-900'>
          <button onClick={handleShow()}>
            <Bars3Icon className='w-10 fill-lime-900' />
          </button>
        </section>
      </header>
      {showMenu && (
        <div className='w-full h-screen fixed flex flex-col z-30 text-lime-900 bg-white py-4 px-8'>
          <div className='sm:hidden flex justify-between items-center'>
            <a href='#banner' onClick={handleShow()}>
              <img
                className='w-16'
                src='https://res.cloudinary.com/jessaleem/image/upload/v1691374037/Marce_Jose/logoJ_M_d4ifzz.png'
              />
            </a>
            <button className='' onClick={handleShow()}>
              <XMarkIcon className='w-10' />
            </button>
          </div>
          <ul className='flex flex-col justify-center gap-3 text-center mx-4 my-10 font-bold space-y-4 text-lg'>
            <li className='' onClick={handleShow()}>
              <a
                href='#bienvenidos'
                className='cursor-pointer rounded-xl hover:text-lime-700'
              >
                ¡Bienvenidos!
              </a>
            </li>
            <li className='' onClick={handleShow()}>
              <a
                href='#reservar'
                className='cursor-pointer rounded-xl py-2 px-3 hover:text-lime-700'
              >
                Reservar
              </a>
            </li>
            <li className='' onClick={handleShow()}>
              <a
                href='#llegar'
                className='cursor-pointer rounded-xl py-2 px-3 hover:text-lime-700'
              >
                Llegar a Barichara
              </a>
            </li>
            <li className='' onClick={handleShow()}>
              <a
                href='#hospedaje'
                className='cursor-pointer rounded-xl py-2 px-3 hover:text-lime-700'
              >
                Hospedaje
              </a>
            </li>
            <li className='' onClick={handleShow()}>
              <a
                href='#evento'
                className='cursor-pointer rounded-xl py-2 px-3 hover:text-lime-700'
              >
                Evento
              </a>
            </li>
            <li className='' onClick={handleShow()}>
              <a
                href='#vestuario'
                className='cursor-pointer rounded-xl py-2 px-3 hover:text-lime-700'
              >
                Vestuario
              </a>
            </li>
            <li className='' onClick={handleShow()}>
              <a
                href='#myp'
                className='cursor-pointer rounded-xl py-2 px-3 hover:text-lime-700'
              >
                Maquillaje y Peinado
              </a>
            </li>
            <li className='' onClick={handleShow()}>
              <a
                href='#conoce'
                className='cursor-pointer rounded-xl py-2 px-3 hover:text-lime-700'
              >
                Conoce Santander
              </a>
            </li>
            <li className='' onClick={handleShow()}>
              <a
                href='#regalo'
                className='cursor-pointer rounded-xl py-2 px-3 hover:text-lime-700'
              >
                Regalo
              </a>
            </li>
          </ul>
        </div>
      )}
    </>
  );
}
