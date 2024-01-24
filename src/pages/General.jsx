import { Swiper, SwiperSlide } from 'swiper/react';
import { EffectCards } from 'swiper/modules';
import logo_mondelez from "../images/Logo Mondelez.svg";

import { RoutersLinks } from '../routes/RoutersLinks';
import { Link } from 'react-router-dom';

import '../css/General.css';
import Clic from '../components/Clic';
import Regresar from '../components/Regresar';

function General() {

  return (
    <div className='General'>
      <Swiper
        effect={'cards'}
        grabCursor={true}
        modules={[EffectCards]}
        className="mySwiper"
      >
        <SwiperSlide className='slider-center'>
          <img src={logo_mondelez} className='logo_mondelez' alt="" />
          <h3>Material de consulta</h3>
        </SwiperSlide>

        <SwiperSlide className='divisor'>
          <Link to={RoutersLinks.Definiciones} className='content-swiper dv_1'>
            <h3>Definiciones Generales </h3>
          </Link>

          <Link to={RoutersLinks.AmbientesCompra} className='content-swiper dv_2'>
            <h3>Ambiente de compra</h3>
          </Link>

          <Link to={RoutersLinks.Las5S} className='content-swiper dv_3'>
            <h3>Las 5S</h3>
            <h6>(Procesos de compra)</h6>
          </Link>

          <Link to={"/Las5P/0"} className='content-swiper dv_4'>
            <h3>Las 5P</h3>
            <h6>(Variables en ejecución)</h6>
          </Link>

          <Link to={RoutersLinks.ImagenExito} className='content-swiper dv_1'>
            <h3>Imagen o foto de éxito</h3>
          </Link>

          <Clic />
        </SwiperSlide>

        <SwiperSlide className='divisor dv_back'>
          <Regresar />
        </SwiperSlide>

      </Swiper >
    </div >

  )
}

export default General
