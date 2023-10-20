export default function Main() {
  return (
    <main className='mt-0'>
      <section id='banner' className='relative'>
        <div className='relative bg-hero h-screen text-white bg-cover bg-center flex items-center justify-start'>
          <div className='absolute w-full h-full bg-gradient-to-r top-0 left-0 from-black/50 to-transparent'></div>
          <div className='w-3/4 px-40 z-10 xsm:w-full xsm:pl-8'>
            <p className='text-6xl font-bold pb-6 xsm:text-2xl'>GONBAR</p>
            <p className='text-6xl font-bold pb-6 xsm:text-2xl'>CANADA</p>
            <div className='flex flex-col gap-8'>
              <p className='text-xl'>
                Is a heavy machinery equipment manufacturer&apos;s independent
                representative, specializing in the Latin American market
                development.
              </p>
              <button className='rounded-xl bg-blue-950 text-2xl px-10 py-2 self-start xsm: xsm:text-xl hover:bg-blue-900'>
                <a href='#about'>Read more</a>
              </button>
            </div>
          </div>
        </div>
      </section>
      <section
        id='values'
        className='flex flex-col px-10 py-24 bg-blue-50/50 gap-y-24'
      >
        <h2 className='text-center text-blue-950 font-bold text-5xl'>
          VALUE PROPOSITION
        </h2>
        <div className='grid gap-y-24 sm:grid-cols-2 mx-auto text-blue-950 xs:pl-10 justify-center text-3xl pl-14'>
          <div className='flex items-center gap-5'>
            <img
              className='w-10'
              src='../../public/equipo.png'
              alt='expertise-icon'
            />
            <p>Market expertise</p>
          </div>
          <div className='flex items-center gap-5'>
            <img
              className='w-10'
              src='../../public/rendimiento.png'
              alt='efficiency-icon'
            />
            <p> Efficient distribution</p>
          </div>
          <div className='flex items-center gap-5'>
            <img
              className='w-10'
              src='../../public/rentable.png'
              alt='cost-effective icon'
            />
            <p>Cost-Effective sales</p>
          </div>
          <div className='flex items-center gap-5'>
            <img
              className='w-10'
              src='../../public/confiar.png'
              alt='relationship icon'
            />
            <p>Relationship-Building</p>
          </div>
          <div className='flex items-center gap-5'>
            <img
              className='w-10'
              src='../../public/innovacion.png'
              alt='knowledge icon'
            />
            <p>Product knowledge</p>
          </div>
          <div className='flex items-center gap-5'>
            <img
              className='w-10'
              src='../../public/inversion.png'
              alt='knowledge icon'
            />
            <p>Foreign buyer financing solutions</p>
          </div>
        </div>
        <div className=''></div>
      </section>

      <section id='equipment' className='flex flex-col px-10 py-24 gap-y-20'>
        <h2 className='text-center text-blue-950 font-bold text-5xl'>
          EQUIPMENT
        </h2>
        <div className='grid gap-y-10 sm:grid-cols-3 text-blue-950 gap-10 font-bold text-xl py-10'>
          <div className='flex flex-col text-center gap-6 items-center'>
            <img
              className='w-80 justify-self-center justify-items-end'
              src='../../public/hoisting.jpg'
              alt='hoisting-img'
            />
            <a
              href='http://en.xcmg.com/en-ap/product/Hoisting-Machinery/pro-list-1000117.htm'
              target='_blank'
              rel='noreferrer'
            >
              Hoisting machinery
            </a>
          </div>
          <div className='flex flex-col text-center gap-6 items-center'>
            <img
              className='w-80 justify-self-center justify-items-end'
              src='../../public/mining.jpg'
              alt='mining-img'
            />
            <a
              href='http://en.xcmg.com/en-ap/product/Mining-Machinery/pro-list-1000118.htm'
              target='_blank'
              rel='noreferrer'
            >
              Mining machinery
            </a>
          </div>
          <div className='flex flex-col text-center gap-6 items-center'>
            <img
              className='w-80 justify-self-center justify-items-end'
              src='../../public/excavator.jpg'
              alt='excavator-img'
            />
            <a
              href='http://en.xcmg.com/en-ap/product/Excavators/pro-list-1000119.htm'
              target='_blank'
              rel='noreferrer'
            >
              Excavators
            </a>
          </div>
          <div className='flex flex-col text-center gap-6 items-center'>
            <img
              className='w-80 justify-self-center justify-items-end'
              src='../../public/loaders.jpg'
              alt='loaders-img'
            />
            <a
              href='http://en.xcmg.com/en-ap/product/Loaders/pro-list-1000120.htm'
              target='_blank'
              rel='noreferrer'
            >
              Loaders
            </a>
          </div>
          <div className='flex flex-col text-center gap-6 items-center'>
            <img
              className='w-80 justify-self-center justify-items-end'
              src='../../public/road-machinery.jpg'
              alt='road machinery-img'
            />
            <a
              href='http://en.xcmg.com/en-ap/product/Road-Machinery/pro-list-1000121.htm'
              target='_blank'
              rel='noreferrer'
            >
              Road machinery
            </a>
          </div>
          <div className='flex flex-col text-center gap-6 items-center'>
            <img
              className='w-80 justify-self-center justify-items-end'
              src='../../public/piling.jpg'
              alt='piling-img'
            />
            <a
              href='http://en.xcmg.com/en-ap/product/Piling-Machinery/pro-list-1000123.htm'
              target='_blank'
              rel='noreferrer'
            >
              Piling machinery
            </a>
          </div>
          <div className='flex flex-col text-center gap-6 items-center'>
            <img
              className='w-80 justify-self-center justify-items-end'
              src='../../public/non-excavation.jpg'
              alt='non-excavation-img'
            />
            <a
              href='http://en.xcmg.com/en-ap/product/Non-Excavation-Machinery/pro-list-1000124.htm'
              target='_blank'
              rel='noreferrer'
            >
              Non-Excavation machinery
            </a>
          </div>
          <div className='flex flex-col text-center gap-6 items-center'>
            <img
              className='w-80 justify-self-center justify-items-end'
              src='../../public/concrete-machinery.jpg'
              alt='concrete machinery-img'
            />
            <a
              href='http://en.xcmg.com/en-ap/product/Concrete-Machinery/pro-list-1000125.htm'
              target='_blank'
              rel='noreferrer'
            >
              Concrete machinery
            </a>
          </div>
          <div className='flex flex-col text-center gap-6 items-center'>
            <img
              className='w-80 justify-self-center justify-items-end'
              src='../../public/tunnel.jpg'
              alt='tunnel-img'
            />
            <a
              href='http://en.xcmg.com/en-ap/product/Tunnel-Machinery/pro-list-1001000137.htm'
              target='_blank'
              rel='noreferrer'
            >
              Tunnel machinery
            </a>
          </div>
        </div>
      </section>

      <section
        id='about'
        className=' flex flex-col bg-blue-50/50 gap-14 py-24 text-blue-950 '
      >
        <h2 className='text-center font-bold text-5xl'>ABOUT US</h2>
        <div className='flex items-center gap-8 xsm:flex-col'>
          <img
            className='w-2/5 h-[32rem] object-cover rounded-e-md xsm:w-full xsm:px-5 xsm:rounded-e-md xsm:object-contain'
            src='../../public/about-section2.jpg'
            alt='machinery-pic'
          />
          <p className='flex flex-col w-1/2 pr-5 items-center xsm:w-full xsm:px-5'>
            <br />
            <span className='font-bold text-xl'>
              WE PROVIDE OUR CLIENTS WITH SOLUTIONS OF THE HIGHEST STRUCTURAL,
              FUNCTIONAL AND ARCHITECTURAL LEVEL FOR THE MANAGEMENT OF RAW
              MATERIALS AND CRITICAL INPUTS FOR THEIR OPERATION.{' '}
            </span>
            <br />
            <span className='text-lg'>
              Proven experience in project execution of various magnitudes and
              requirements Our commitment includes conceiving solutions with a
              deep level of analysis, as well as offering the best guidance to
              our clients for their decision-making in the development of
              turnkey projects
            </span>
          </p>
        </div>
      </section>
    </main>
  );
}
