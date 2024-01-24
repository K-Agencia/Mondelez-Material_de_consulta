import { Swiper, SwiperSlide } from 'swiper/react';
import { EffectCards } from 'swiper/modules';

import { Link, useParams } from 'react-router-dom';
import { RoutersLinks } from '../routes/RoutersLinks';
import Clic from '../components/Clic';
import Regresar from '../components/Regresar';

const Las5P = () => {

  const { id } = useParams();

  return (
    <div className='Las5P'>
      <Swiper
        effect={'cards'}
        grabCursor={true}
        modules={[EffectCards]}
        className="mySwiper"
        initialSlide={id}
      >

        <SwiperSlide className='divisor dv_4'>
          <h3>Las 5P</h3>
          <h6>(Variables en ejecución)</h6>
          <div className='text-slider-header'>
            <p className='text-slider'>Estas son herramientas presentes en el punto de venta que nos permiten incentivar cada fase de las conductas de compra hacia nuestros productos</p>
          </div>
        </SwiperSlide>

        <SwiperSlide className='divisor dv_4'>
          <h6>Primera P:</h6>
          <h3>Producto</h3>
          <div className='text-slider-header'>
            <p>Corresponde a todo el portafolio que se vende en un punto de venta, se clasifica en:</p>
            <ul>
              <li><b>Productos infaltables MSL:</b> El listado de productos infaltables contiene nuestros productos más vendidos y de mayor rotación, por lo cual, siempre deben estar disponibles y claramente visibles para el comprador. (Existe uno para cada ambiente de compra).</li>
              <li><b>Nuevos productos NPD:</b>  Productos de lanzamiento e innovaciones en el portafolio.</li>
              <li><b>Productos sugeridos:</b> Listado de productos que se encuentran por fuera del MSL.</li>
            </ul>
          </div>
        </SwiperSlide>

        <SwiperSlide className='divisor dv_4'>
          <h6>Segunda P:</h6>
          <h3>Posición</h3>
          <div className="text-slider-header">
            <p>Dentro del punto de venta podemos encontrar dos pociones descritas a continuación:</p>
            <ul>
              <li>Hot Zone</li>
              <li>Back Store</li>
            </ul>
          </div>
        </SwiperSlide>

        <SwiperSlide className='divisor'>
          <Link to={RoutersLinks.HotZone} className='content-swiper dv_1'>
            <h3>Hot Zone</h3>
          </Link>

          <Link to={RoutersLinks.BackStore} className='content-swiper dv_5'>
            <h3>Back Store</h3>
          </Link>

          <Clic />
        </SwiperSlide>

        <SwiperSlide className='divisor dv_4'>
          <h6>Tercera P:</h6>
          <h3>Precio</h3>
          <div className="text-slider-header">
            <p className='text-slider'>Consiste en el valor a pagar por el comprador para adquirir el producto, este valor debe encontrarse correctamente marcado en el punto de venta garantizando su visibilidad.</p>
          </div>
        </SwiperSlide>

        <SwiperSlide className='divisor dv_4'>
          <h6>Cuarta P:</h6>
          <h3>Promociones</h3>
          <div className="text-slider-header">
            <p className='text-slider'>Acciones que promueven un valor agregado al producto incentivando su venta y atractivo para el comprador.</p>
          </div>
        </SwiperSlide>

        <SwiperSlide className='divisor dv_4'>
          <h6>Quinta P:</h6>
          <h3>POB Comunicación</h3>
          <div className="text-slider-header">
            <p className='text-slider'>Corresponde a los materiales que comunican las campañas realizadas por cada una de las marcas, asimismo, los materiales que promuevan las personalidades de las marcas.</p>
          </div>
        </SwiperSlide>

        <SwiperSlide className='divisor dv_back'>
          <Regresar />
        </SwiperSlide>

      </Swiper>
    </div>
  );
};

export default Las5P;