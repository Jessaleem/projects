export default function Header() {
  return (
    <header
      id='header'
      className='fixed top-0 w-full bg-white z-20 flex gap-6 py-8 px-20 border-b shadow-lg justify-between box-border'
    >
      <a href='#banner'>
        <img
          className='w-32'
          src='../../public/logoGonbar1.png'
          alt='logo Gonbar'
        />
      </a>
      <nav className='xs:hidden'>
        <ul className='flex gap-10 text-blue-950'>
          <li>
            <a
              href='#values'
              className='cursor-pointer rounded-xl py-2 px-3 hover:bg-blue-950 hover:text-white font-bold'
            >
              Value proposition
            </a>
          </li>
          <li>
            <a
              href='#equipment'
              className='cursor-pointer rounded-xl py-2 px-3 hover:bg-blue-950 hover:text-white font-bold'
            >
              Equipment
            </a>
          </li>
          <li>
            <a
              href='#about'
              className='cursor-pointer rounded-xl py-2 px-3 hover:bg-blue-950 hover:text-white font-bold'
            >
              About us
            </a>
          </li>
        </ul>
      </nav>
    </header>
  );
}
