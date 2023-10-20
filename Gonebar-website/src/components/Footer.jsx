export default function Footer() {
  return (
    <footer className='py-8 px-20 gap-10 text-blue-950'>
      <div className='flex gap-10 justify-between xsm:flex-col xsm:items-center'>
        <div className='flex items-center gap-10 text-blue-950'>
          <a href='#banner'>
            <img className='w-20' src='../../public/small-logo.jpg' />
          </a>
          <p>Gonbar</p>
        </div>
        <div className='flex flex-col gap-5'>
          <div className='flex gap-5'>
            <img
              className='object-cover w-8'
              src='../../public/telefono.png'
              alt='phone-icon'
            />
            <p>+1 204-410-8386</p>
          </div>
          <div className='flex gap-5'>
            <img
              className='object-cover w-8'
              src='../../public/email.png'
              alt='email-icon'
            />
            <p>contacto@gonbar.com</p>
          </div>
          <div className='flex gap-5'>
            <img
              className='object-cover w-9'
              src='../../public/ubicacion.png'
              alt='email-icon'
            />
            <p>Avenue Road, 1008. Toronto ON Canada</p>
          </div>
        </div>
      </div>
      <p className='text-xs text-center text-gray-400 pt-10'>
        © 2023 Sillevon, SAS. All Rights Reserved
      </p>
    </footer>
  );
}
