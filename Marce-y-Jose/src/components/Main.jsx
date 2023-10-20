export default function Main() {
  return (
    <main className='mt-0'>
      <section id='banner' className='relative'>
        <div className='relative bg-hero h-[600px] xsm:h-[450px] w-full text-white bg-cover bg-center flex items-center justify-start'></div>
      </section>
      <section
        id='bienvenidos'
        className='flex flex-col py-24 px-3 sm:pl-14 sm:pr-0 gap-24'
      >
        <h2 className='text-[#C89E42] text-4xl sm:text-6xl text-center'>
          ¡Bienvenidos!
        </h2>

        <div className='flex flex-col gap-6 text-center justify-center sm:text-start'>
          <p className='text-[#C89E42] text-4xl sm:text-5xl text-center'>
            Marcela <br /> & <br />
            Jose
          </p>
          <p className='text-[#C89E42] text-2xl text-center'>
            <span className='font-semibold'>¡NOS CASAMOS!</span> <br /> 8 de
            diciembre 2023
          </p>
          <p className='text-[#C89E42] text-2xl xsm:text-xl text-center'>
            Barichara, Santander
          </p>
          <p className='text-[#C89E42] text-xs text-center'>
            Te enviaremos tu invitación personalizada
          </p>
        </div>

        <div className='flex gap-4 justify-center xsm:grid xsm:grid-cols-2'>
          <img
            className='rounded-full w-36 h-36 sm:w-64 sm:h-64 object-cover opacity-80 place-self-center'
            alt='Foto Marce y Jose'
            src='https://res.cloudinary.com/jessaleem/image/upload/v1691374044/Marce_Jose/foto_y8c1wy.jpg'
          />
          <img
            className='rounded-full w-36 h-36 sm:w-64 sm:h-64 object-cover opacity-80 place-self-center'
            alt='Foto Marce y Jose'
            src='https://res.cloudinary.com/jessaleem/image/upload/v1691374044/Marce_Jose/Foto2_daimfr.jpg'
          />
          <img
            className='rounded-full w-36 h-36 sm:w-64 sm:h-64 object-cover opacity-80 place-self-center'
            alt='Foto Marce y Jose'
            src='https://res.cloudinary.com/jessaleem/image/upload/v1691374045/Marce_Jose/foto-3_ckteyz.png'
          />
          <img
            className='rounded-full w-36 h-36 sm:w-64 sm:h-64 object-cover opacity-80 place-self-center'
            alt='Foto Marce y Jose'
            src='https://res.cloudinary.com/jessaleem/image/upload/v1691374035/Marce_Jose/foto-5_xr1zuq.png'
          />
        </div>
      </section>
      <section
        id='reservar'
        className='flex flex-col gap-10  h-full py-24 bg-rsvp'
      >
        <h2 className='text-[#C89E42] text-4xl sm:text-6xl text-center'>
          Reserva la fecha
        </h2>
        <article className='flex justify-center py-5 px-4 self-center'>
          <div id='left-rsvp' className=''>
            <div
              id='left-top'
              className='bg-[#bb8c64] py-6 px-3 rounded-t-xl font-bold text-center '
            >
              <p className='tracking-wide'>RESERVA LA FECHA</p>
            </div>
            <div
              id='left-bottom'
              className='flex flex-col gap-4 py-10 px-7 bg-white rounded-b-xl xsm:py-8 xsm:px-5'
            >
              <div className='bg-lime-900 bg-opacity-60 px-3 text-[0.8rem] tracking-wide'>
                <p>FECHA:</p>
                <p>VIERNES 8. 12. 2023</p>
              </div>
              <div className='bg-lime-900 bg-opacity-60 px-3 text-[0.8rem] tracking-wide'>
                <p>LUGAR:</p>
                <p>Barichara, Santander </p>
              </div>
            </div>
          </div>
          <div
            id='right-rsvp'
            className='flex flex-col bg-white rounded-xl py-2 justify-between px-4 border-l-2 border-dashed border-gray-500 xsm:hidden'
          >
            <div id='rigt-top-cont' className='flex pl-10'>
              <div id='rigth-top-left' className='flex flex-col gap-4'>
                <p className='text-gray-600 text-sm text-center tracking-wide'>
                  Tiquete de primera <br /> clase para la boda de
                </p>
                <p className='text-[#C89E42] text-2xl text-center tracking-wide'>
                  {' '}
                  Marcela <br />& <br />
                  Jose
                </p>
              </div>
              <div id='rigth-top-right' className='flex'>
                <img
                  src='https://res.cloudinary.com/jessaleem/image/upload/v1691374038/Marce_Jose/plane1_fqki19.png'
                  alt='Plane'
                  className='h-[10rem]'
                />
              </div>
            </div>
            <div
              id='right-bottom-con'
              className='flex flex-col justify-center align-center'
            >
              <img
                src='https://res.cloudinary.com/jessaleem/image/upload/v1691374036/Marce_Jose/barcode-gold_aourwa.png'
                className='h-[3rem] w-[32rem]'
              />
              <p className='text-gray-600 self-center text-sm tracking-wide'>
                {' '}
                ¡Esperamos nos acompañes!{' '}
              </p>
            </div>
          </div>
          <div
            id='right-rsvp'
            className='sm:hidden flex flex-col bg-white rounded-xl py-2 gap-2 px-2 border-l-2 border-dashed border-gray-500'
          >
            <div id='rigt-top-cont' className='flex justify-center'>
              <div id='rigth-top-left' className='flex flex-col gap-3'>
                <p className='text-gray-600 text-sm text-center tracking-wide'>
                  Tiquete de primera <br /> clase para la boda de
                </p>
                <p className='text-[#C89E42] text-lg text-center tracking-wide'>
                  {' '}
                  Marcela <br />& <br />
                  Jose
                </p>
                <div id='rigth-top-right' className='flex justify-center'>
                  <img
                    alt='Plane'
                    src='https://res.cloudinary.com/jessaleem/image/upload/v1691374038/Marce_Jose/plane1_fqki19.png'
                    className='w-28'
                  />
                </div>
              </div>
            </div>
            <div
              id='right-bottom-con'
              className='flex flex-col justify-center align-center'
            >
              <img
                src='https://res.cloudinary.com/jessaleem/image/upload/v1691374036/Marce_Jose/barcode-gold_aourwa.png'
                alt='Bar-code'
                className='h-[3rem] w-[32rem]'
              />
              <p className='text-gray-600 self-center text-sm whitespace-nowrap'>
                {' '}
                Esperamos nos acompañes!{' '}
              </p>
            </div>
          </div>
        </article>
      </section>
      <section
        id='llegar'
        className=' flex flex-col py-24 px-3 sm:pl-14 sm:pr-0 gap-14'
      >
        <h2 className='text-[#C89E42] text-4xl sm:text-6xl text-center'>
          ¿Cómo llegar a Barichara?
        </h2>
        <p className='text-lime-900 px-12 xsm:px-6 text-justify'>
          {' '}
          Barichara está ubicada en el departamento de Santander, Colombia.
        </p>
        <div
          id='llegar-container'
          className='flex flex-col sm:flex-row justify-between px-6 sm:px-12 gap-16'
        >
          <div
            id='llegar-left'
            className='flex flex-col gap-6 justify-center flex-1'
          >
            <h3 className='text-2xl text-[#C89E42] inline-block self-center'>
              Vía Aerea
              <img
                src='https://res.cloudinary.com/jessaleem/image/upload/v1691374043/Marce_Jose/airplane-svgrepo-com_gxe6su.svg'
                alt='plane-img'
                className='inline pl-3 w-10'
              />
            </h3>
            <div className='text-justify'>
              <p className='text-lime-900 pt-4'>
                Barichara no cuenta con aeropuerto. Si queremos viajar en avión,
                el aeropuerto más cercano a Barichara es el de Bucaramanga
                (Aeropuerto internacional Palonegro).
              </p>
              <p className='text-lime-900 pt-4'>
                El aeropuerto de Bucaramanga recibe vuelos de distintos puntos
                de Colombia con aerolíneas como Avianca, Latam, EasyfLy , así
                como aerolíneas de otros países.
              </p>
              <p className='text-lime-900 pt-4'>
                Del aeropuerto puedes tomar un expreso intermunicipal que te
                llevará a Barichara, el tiempo estimado para llegar al punto
                final es aproximadamente 3 horas, debido a que hay que atravesar
                el Cañón del Chicamocha que es un camino montañoso y precioso a
                partes iguales. De hecho, es una zona muy visitada para realizar
                deportes de aventura.{' '}
              </p>
              <p className='text-lime-900 pt-4'>
                Otra alternativa para llegar a Barichara desde el aeropuerto es
                alquilar un vehículo directamente en el Aeropuerto Internacional
                Palonegro.
              </p>
            </div>
          </div>
          <div id='llegar-right' className='flex flex-col gap-6 flex-1'>
            <h3 className='text-2xl text-[#C89E42] inline-block self-center'>
              Vía Terrestre
              <img
                src='https://res.cloudinary.com/jessaleem/image/upload/v1691374037/Marce_Jose/car_lwvcfl.svg'
                alt='plane-img'
                className='inline pl-3 w-10'
              />
            </h3>
            <div>
              <h4 className='text-lime-900 pt-4 font-bold'>
                <img
                  className='inline pr-4'
                  src='https://res.cloudinary.com/jessaleem/image/upload/v1691374034/Marce_Jose/heart-shine_jcxzjn.svg'
                  alt='heart'
                />
                Transporte Particular
              </h4>
              <p className='text-lime-900 pt-4 text-justify'>
                Revisa tu carro antes de emprender esta aventura, la distancia
                conduciendo entre Barranquilla y Barichara es de 754 kms.
                Recorrer este trayecto toma aproximadamente 12 horas.
              </p>
              <h4 className='text-lime-900 pt-10 font-bold'>
                <img
                  className='inline pr-4'
                  src='https://res.cloudinary.com/jessaleem/image/upload/v1691374034/Marce_Jose/heart-shine_jcxzjn.svg'
                  alt='heart'
                />
                Transporte Público
              </h4>
              <p className='text-lime-900 pt-4 text-justify'>
                Desde el Terminal de Barranquilla hay buses de Copetran o
                Brasilia que hacen el trayecto Barranquilla - san Gil en unas 13
                horas. Luego desde el Terminal de San Gil la empresa Cotrasangil
                presta el servicio hasta Barichara que cuesta $7.000 COP
                aproximadamente y nos lleva a destino en unos 45 minutos.
              </p>
            </div>
          </div>
        </div>
        <article className='flex flex-col gap-10'>
          <h3 className='text-[#C89E42] text-center text-2xl pt-6 flex justify-center align-middle'>
            Enlaces de interés
            <img
              src='https://res.cloudinary.com/jessaleem/image/upload/v1691374039/Marce_Jose/cursor-click_bbd2cd.svg'
              className='inline pl-4'
            />
          </h3>
          <div className='flex justify-center gap-6'>
            <a
              href='https://www.avianca.com/co/es/'
              rel='noreferrer'
              target='_blank'
              className='bg-[#C89E42] px-4 py-2 rounded-lg hover:opacity-70 font-bold'
            >
              Avianca
            </a>
            <a
              href='https://www.latamairlines.com/co/es'
              rel='noreferrer'
              target='_blank'
              className='bg-[#C89E42] px-4 py-2 rounded-lg hover:opacity-70 font-bold'
            >
              Latam
            </a>
            <a
              href='https://www.easyfly.com.co/'
              rel='noreferrer'
              target='_blank'
              className='bg-[#C89E42] px-4 py-2 rounded-lg hover:opacity-70 font-bold'
            >
              Easyfly
            </a>
          </div>
          <div className='flex justify-center gap-6'>
            <a
              href='https://www.rentcars.com/es-co/airports/colombia/bga-palonegro-bucaramanga'
              rel='noreferrer'
              target='_blank'
              className='bg-[#C89E42] px-4 py-2 rounded-lg hover:opacity-70 font-bold'
            >
              RentCars
            </a>
            <a
              href='https://www.localiza.com/colombia/es-co/red-de-agencias/bucaramanga'
              rel='noreferrer'
              target='_blank'
              className='bg-[#C89E42] px-4 py-2 rounded-lg hover:opacity-70 font-bold'
            >
              Localiza
            </a>
          </div>
        </article>
      </section>
      <section
        id='hospedaje'
        className='flex flex-col gap-10 py-24 bg-[#FCFAF7]'
      >
        <h2 className='flex align-middle justify-center items-center gap-4 text-[#C89E42] text-4xl sm:text-6xl text-center'>
          Hospedaje
          <img
            src='https://res.cloudinary.com/jessaleem/image/upload/v1691374034/Marce_Jose/hotel_taub0r.svg'
            alt='hotel'
            className='inline w-16'
          />
        </h2>
        <article id='hotel-victoria' className='sm:pr-20'>
          <div className='py-10 flex gap-40 xsm:flex xsm:flex-col xsm:gap-20 xsm:px-8'>
            <img
              src='https://res.cloudinary.com/jessaleem/image/upload/v1691374035/Marce_Jose/Hotel_Victoria2_vjmhix.jpg'
              alt='hotel-victoria'
              className='w-96 rounded-r-lg xsm:rounded-lg'
            />
            <div className='self-center'>
              <div className='flex flex-col gap-4 text-lime-900'>
                <a
                  href='https://hotelvictoriabarichara.co/'
                  rel='noreferrer'
                  target='_blank'
                >
                  <h3 className='flex gap-4 text-lime-900 font-bold text-xl'>
                    Hotel Victoria
                    <img
                      src='https://res.cloudinary.com/jessaleem/image/upload/v1691374037/Marce_Jose/link_ska7fu.svg'
                      alt='hotel'
                      className='inline w-6'
                    />
                  </h3>
                </a>
                <p className='text-justify'>
                  Dentro de las opciones sugeridas para hospedaje se encuentra
                  el HOTEL VICTORIA BARICHARA, que cuenta con tarifa especial
                  para los días 7, 8 y 9 de diciembre de 2023. Este se encuentra
                  ubicado a dos kilómetros del casco urbano, que es en donde
                  oficiaremos la ceremonia religiosa y a cuatro Kilometros del
                  lugar de la recepción del evento.
                </p>
                <p className='text-justify'>
                  Tarifa especial por evento $95.000 COP por persona por noche.
                </p>
                <p className='text-justify'>
                  Niños de 0 a 3 años tienen cortesía en alojamiento, solo pagan
                  el seguro hotelero por valor de $2.000 COP por noche y el
                  desayuno es adicional.
                </p>
                <p className='text-justify'>
                  Niños de 4 años a 6 años tienen el 20% de descuento en la
                  tarifa especial, para los niños de 7 años en adelante aplica
                  la tarifa hotelera vigente.
                </p>
                <p className='text-justify'>
                  La tarifa incluye desayuno y desayuno para los niños menores
                  de 4 años.
                </p>
              </div>
            </div>
          </div>
        </article>
        <p className='text-[#C89E42] text-3xl font-semibold text-center'>
          Otras opciones
        </p>
        <article
          id='hotel-hicasua'
          className='px-8 sm:px-20 flex flex-col sm:flex-row gap-4 justify-evenly pt-9'
        >
          <img
            src='https://res.cloudinary.com/jessaleem/image/upload/v1691374035/Marce_Jose/hotel-hicasua_adfrxi.webp'
            alt='hotel-hicasua'
            className='w-72 rounded-lg sm:order-2 xsm:w-full'
          />

          <div className='flex flex-col gap-4 text-lime-900 self-center'>
            <a
              href='https://hotelhicasua.com/es/'
              rel='noreferrer'
              target='_blank'
            >
              <h3 className='flex gap-4 text-lime-900 font-bold text-xl'>
                Hotel Hicasua
                <img
                  src='https://res.cloudinary.com/jessaleem/image/upload/v1691374037/Marce_Jose/link_ska7fu.svg'
                  alt='hotel'
                  className='inline w-6'
                />
              </h3>
            </a>
            <p className='text-lg text-justify'>
              Dirección: Calle 7 # 3 – 85 Barichara – Santander – Colombia{' '}
              <br />
              Contacto: reservas@hicasua.com <br />
              +57 60 7 7267700 <br />
              312 419 7154 – 312 419 1536
            </p>
          </div>
        </article>
        <article
          id='hotel-casaPresidente'
          className='px-8 sm:px-20 flex flex-col sm:flex-row gap-6 justify-evenly pt-9'
        >
          <img
            src='https://res.cloudinary.com/jessaleem/image/upload/v1691374035/Marce_Jose/hotel-casadelpresidente_olrvcl.jpg'
            alt='hotel-hicasua'
            className='w-72 rounded-lg xsm:w-full'
          />

          <div className='flex flex-col gap-4 text-lime-900 self-center'>
            <a
              href='https://casadelpresidente.com.co/'
              rel='noreferrer'
              target='_blank'
            >
              <h3 className='flex gap-4 text-lime-900 font-bold text-xl'>
                Hotel Casa del Presidente
                <img
                  src='https://res.cloudinary.com/jessaleem/image/upload/v1691374037/Marce_Jose/link_ska7fu.svg'
                  alt='hotel'
                  className='inline w-6'
                />
              </h3>
            </a>
            <p className='text-lg text-justify'>
              Dirección: Carrera 12 # 7-90 Barichara – Santander – Colombia{' '}
              <br />
              Contacto: info@casadelpresidente.com.co <br />
              +57 321 815 2524 <br />
            </p>
          </div>
        </article>
      </section>
      <section id='evento' className=' py-24 px-8 sm:px-24'>
        <h2 className='text-[#C89E42] text-4xl sm:text-6xl text-center'>
          ¿Cómo llegar al evento?
        </h2>
        <div className='flex flex-col gap-10 items-center'>
          <p className='text-lime-900 text-justify pt-12'>
            <span className='text-xl'>
              Ha llegado el día de celebrar nuestro amor para toda la vida!
            </span>{' '}
            <br /> <br />
            <span className='text-lg'>
              Es nuestro deseo contar con tu valiosa presencia en la ceremonia
              religiosa que se llevará a cabo en la{' '}
              <span className='font-semibold'>
                Catedral De La Inmaculada Concepción
              </span>
              , que se encuentra ubicada frente al parque principal de
              Barichara. Posterior a esta, nos trasladaremos al sitio del
              evento, en el{' '}
              <span className='font-semibold'>Hotel Piedra De Moler</span>,
              ubicado a seis kilómetros del casco urbano del municipio; para
              esto podrás disponer de los medios de trasporte típicos de la
              región, (Tuc Tuc), taxi, o particular/propio.
            </span>
          </p>
          <a
            href='https://goo.gl/maps/4xhYNEMD5CYE6sgW6'
            rel='noreferrer'
            target='_blank'
          >
            <img
              className=' rounded-lg object-cover w-[450px]'
              src='https://res.cloudinary.com/jessaleem/image/upload/v1691374038/Marce_Jose/piedra-moler-ubic_wgu4ne.png'
            />
            <span className='text-xs text-lime-900'>
              Haz click para ver la ubicación
            </span>
          </a>
        </div>
      </section>
      <section
        id='vestuario'
        className='flex flex-col py-24 px-8 sm:px-24 sm:pr-0 gap-10 bg-[#FCFAF7]'
      >
        <h2 className='text-[#C89E42] text-4xl sm:text-6xl text-center'>
          Código de Vestuario
        </h2>
        <article className='flex xsm:flex-col gap-6 justify-between items-center'>
          <div className='flex flex-col gap-10'>
            <p className='text-lime-900 text-2xl font-semibold'>
              Vestimenta formal
            </p>
            <ul className='text-lime-900 flex flex-col gap-10 justify-center text-justify'>
              <li>
                <span className='text-2xl font-semibold'>Ellas:</span>
                <p className='text-lg'>
                  Vestido largo, unicolor, colores arcoíris
                </p>
                <p className='text-sm'>
                  Se reserva el color magenta y estampados
                </p>
              </li>
              <li>
                <span className='text-2xl font-semibold'>Ellos:</span>
                <p className='text-lg'>
                  Camisa manga larga de Lino blanca y pantalón beige
                </p>
              </li>
            </ul>
          </div>
          <img
            className='w-96'
            src='https://res.cloudinary.com/jessaleem/image/upload/v1691374040/Marce_Jose/dress-code_fiykqy.jpg'
            alt='Dress Code'
          />
        </article>
      </section>
      <section
        id='myp'
        className='py-24 flex flex-col px-3 sm:pl-14 sm:pr-0 gap-20'
      >
        <h2 className='text-[#C89E42] text-4xl sm:text-6xl text-center'>
          Maquillaje y Peinado
        </h2>
        <article className='flex xsm:flex-col gap-10 justify-center flex-wrap'>
          <div className='text-lime-900 font-bold flex flex-col gap-2 border-[1px] border-[#C89E42] p-6 rounded-xl'>
            <p className='text-lg'>Alejandra Suárez</p>
            <p>
              <a
                className='flex gap-2'
                rel='noreferrer'
                target='_blank'
                href='https://www.instagram.com/alejandrasuarez.makeupartist/'
              >
                <img
                  className='w-[1.6rem] inline'
                  src='https://res.cloudinary.com/jessaleem/image/upload/v1691374036/Marce_Jose/instagram_pu0cyv.svg'
                  alt='instagramIcon'
                />
                @alejandrasuarez.makeupartist
              </a>
            </p>
            <p className='flex gap-2'>
              <img
                className='w-[1.6rem] inline'
                src='https://res.cloudinary.com/jessaleem/image/upload/v1691374038/Marce_Jose/phone_mcljqe.svg'
                alt='phoneIcon'
              />
              3166270947
            </p>
          </div>
          <div className='text-lime-900 font-bold flex flex-col gap-2 border-[1px] border-[#C89E42] p-6 rounded-xl'>
            <p className='text-lg'>Johanna Jimenez</p>
            <p>
              <a
                className='flex gap-2'
                rel='noreferrer'
                target='_blank'
                href='https://www.instagram.com/johanna_baricharamakeup/'
              >
                <img
                  className='w-[1.6rem] inline'
                  src='https://res.cloudinary.com/jessaleem/image/upload/v1691374036/Marce_Jose/instagram_pu0cyv.svg'
                  alt='instagramIcon'
                />
                @johanna_baricharamakeup
              </a>
            </p>
            <p className='flex gap-2'>
              <img
                className='w-[1.6rem] inline'
                src='https://res.cloudinary.com/jessaleem/image/upload/v1691374038/Marce_Jose/phone_mcljqe.svg'
                alt='phoneIcon'
              />
              3167905992
            </p>
          </div>
          <div className='text-lime-900 font-bold flex flex-col gap-2 border-[1px] border-[#C89E42] p-6 rounded-xl'>
            <p className='text-lg'>Mayra Jimenez</p>
            <p>
              <a
                className='flex gap-2'
                rel='noreferrer'
                target='_blank'
                href='https://www.instagram.com/alejandriabellezayestilo/'
              >
                <img
                  className='w-[1.6rem] inline'
                  src='https://res.cloudinary.com/jessaleem/image/upload/v1691374036/Marce_Jose/instagram_pu0cyv.svg'
                  alt='instagramIcon'
                />
                @alejandriabellezayestilo
              </a>
            </p>
            <p className='flex gap-2'>
              <img
                className='w-[1.6rem] inline'
                src='https://res.cloudinary.com/jessaleem/image/upload/v1691374038/Marce_Jose/phone_mcljqe.svg'
                alt='phoneIcon'
              />
              3213179713
            </p>
          </div>
        </article>
      </section>
      <section
        id='conoce'
        className='py-24 flex flex-col px-3 sm:pl-14 sm:pr-0 gap-14 bg-[#FCFAF7]'
      >
        <h2 className='text-[#C89E42] text-4xl sm:text-6xl text-center'>
          ¡Conoce Santander!
        </h2>
        <img
          className='w-[42rem] place-self-center'
          src='https://res.cloudinary.com/jessaleem/image/upload/v1691374040/Marce_Jose/sitios-turisticos_dnjcq9.jpg'
          alt='sitios-turisticos'
        />
        <article className='grid lg:grid-cols-3 gap-y-20 gap-x-6 px-8 sm:px-12 py-10'>
          <div className='flex flex-col flex-wrap items-center gap-6' id='card'>
            <img
              className='rounded-full w-64 h-64 sm:w-72 sm:h-72 object-cover'
              src='https://res.cloudinary.com/jessaleem/image/upload/v1691374038/Marce_Jose/Chicamocha-Panachi_eorllu.jpg'
              alt='chicamochaImg'
            ></img>
            <div className='text-lime-900'>
              <a
                className='flex gap-4 items-start'
                href='https://parquesdesantander.com/parques/parque-nacional-del-chicamocha/'
                rel='noreferrer'
                target='_blank'
              >
                <img
                  className='inline w-6 '
                  src='https://res.cloudinary.com/jessaleem/image/upload/v1691374037/Marce_Jose/link_ska7fu.svg'
                />
                <p className='font-semibold text-lg text-justify'>
                  {' '}
                  Parque Nacional del Chicamocha - Panachi
                </p>
              </a>
            </div>
          </div>
          <div className='flex flex-col flex-wrap items-center gap-6' id='card'>
            <img
              className='rounded-full w-64 h-64 sm:w-72 sm:h-72 object-cover'
              src='https://res.cloudinary.com/jessaleem/image/upload/v1691374039/Marce_Jose/san-gil_kajety.jpg'
              alt='San Gil Img'
            ></img>
            <div className='text-lime-900 '>
              <a
                className='flex gap-4 items-start'
                href='https://colombia.travel/es/san-gil'
                rel='noreferrer'
                target='_blank'
              >
                <img
                  className='inline w-6'
                  src='https://res.cloudinary.com/jessaleem/image/upload/v1691374037/Marce_Jose/link_ska7fu.svg'
                />
                <p className='font-semibold text-lg text-justify'>
                  {' '}
                  San Gil: Capital de los deportes extremos
                </p>
              </a>
            </div>
          </div>
          <div className='flex flex-col flex-wrap items-center gap-6' id='card'>
            <img
              className='rounded-full w-64 h-64 sm:w-72 sm:h-72 object-cover'
              src='https://res.cloudinary.com/jessaleem/image/upload/v1691374036/Marce_Jose/barichara_dfrw71.jpg'
              alt='Barichara Img'
            ></img>
            <div className='text-lime-900 '>
              <a
                className='flex gap-4 items-start'
                href='https://colombia.travel/es/blog/barichara-colombia-un-destino-de-aventura-e-historia'
                rel='noreferrer'
                target='_blank'
              >
                <img
                  className='inline w-6'
                  src='https://res.cloudinary.com/jessaleem/image/upload/v1691374037/Marce_Jose/link_ska7fu.svg'
                />
                <p className='font-semibold text-lg text-justify'>
                  {' '}
                  Barichara: El pueblito más lindo de Colombia
                </p>
              </a>
            </div>
          </div>
          <div className='flex flex-col flex-wrap items-center gap-6' id='card'>
            <img
              className='rounded-full w-64 h-64 sm:w-72 sm:h-72 object-cover'
              src='https://res.cloudinary.com/jessaleem/image/upload/v1691374038/Marce_Jose/mesa-de-los-santos_tii2lm.jpg'
              alt='Mesa de los Santos'
            ></img>
            <div className='text-lime-900 '>
              <a
                className='flex gap-4 items-start'
                href='https://colombia.travel/es/bucaramanga/visita-la-mesa-de-los-santos'
                rel='noreferrer'
                target='_blank'
              >
                <img
                  className='inline w-6'
                  src='https://res.cloudinary.com/jessaleem/image/upload/v1691374037/Marce_Jose/link_ska7fu.svg'
                />
                <p className='font-semibold text-lg'> La Mesa de los Santos</p>
              </a>
            </div>
          </div>
          <div className='flex flex-col flex-wrap items-center gap-6' id='card'>
            <img
              className='rounded-full w-64 h-64 sm:w-72 sm:h-72 object-cover'
              src='https://res.cloudinary.com/jessaleem/image/upload/v1691374037/Marce_Jose/JuanCuri-2_rl0ka6.jpg'
              alt='Valle de San Jose'
            ></img>
            <div className='text-lime-900 '>
              <a
                className='flex gap-4 items-start'
                href='https://www.facebook.com/weekendsantander/posts/2301655903322290/'
                rel='noreferrer'
                target='_blank'
              >
                <img
                  className='inline w-6'
                  src='https://res.cloudinary.com/jessaleem/image/upload/v1691374037/Marce_Jose/link_ska7fu.svg'
                />
                <p className='font-semibold text-lg'>
                  {' '}
                  Valle de San José: una aventura con cascada
                </p>
              </a>
            </div>
          </div>
          <div className='flex flex-col flex-wrap items-center gap-6' id='card'>
            <img
              className='rounded-full w-64 h-64 sm:w-72 sm:h-72 object-cover'
              src='https://res.cloudinary.com/jessaleem/image/upload/v1691374038/Marce_Jose/Cerro-Santisimo_lmhbio.jpg'
              alt='Mesa de los Santos'
            ></img>
            <div className='text-lime-900 '>
              <a
                className='flex gap-4 items-start'
                href='https://parquesdesantander.com/parques/parque-cerro-del-santisimo/'
                rel='noreferrer'
                target='_blank'
              >
                <img
                  className='inline w-6'
                  src='https://res.cloudinary.com/jessaleem/image/upload/v1691374037/Marce_Jose/link_ska7fu.svg'
                />
                <p className='font-semibold text-lg'>
                  {' '}
                  Ecoparque Cerro el Santísimo
                </p>
              </a>
            </div>
          </div>
        </article>
      </section>
      <section
        id='regalo'
        className='py-24 flex flex-col px-3 sm:pl-14 sm:pr-0 gap-14 bg-wgold h-full'
      >
        <img
          className='w-72 place-self-center'
          src='https://res.cloudinary.com/jessaleem/image/upload/v1691374037/Marce_Jose/logoJ_M_d4ifzz.png'
        />
        <h2 className='text-lime-900 text-3xl sm:text-6xl text-center font-bold'>
          REGALO
        </h2>
        <div>
          <p className='text-lime-900 text-2xl px-16 text-center pb-5 xsm:text-2xl xsm:px-8'>
            ¡Sin ti esto no sería igual!
          </p>
          <p className='text-lime-900 text-2xl px-16 text-center xsm:text-justify xsm:text-xl xsm:px-8'>
            Gracias por tu compañía en esta nueva etapa que comenzamos. <br />{' '}
            El regalo es opcional, la asistencia obligatoria.
          </p>
        </div>
      </section>
    </main>
  );
}
