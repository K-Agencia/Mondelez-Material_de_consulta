import { Swiper, SwiperSlide } from 'swiper/react';
import { EffectCards } from 'swiper/modules';

import Regresar from '../components/Regresar';
import Imagenes from '../components/Imagenes';
import { Images } from '../images/Images';

const AmbientesCompra = () => {
  return (
    <div className='AmbientesCompra'>

      <Swiper
        effect={'cards'}
        grabCursor={true}
        modules={[EffectCards]}
        className="mySwiper"
      >
        <SwiperSlide className='divisor dv_2'>
          <h3>Ambiente de compra</h3>
        </SwiperSlide>

        <SwiperSlide>

          <h5>¿Qué es una misión de compra?</h5>
          <p className='text-slider'>Es la razón original por la cual una persona realiza una compra, existen 3 tipos: (Pequeña, Mediana y Grande)</p>

          <h5>¿Qué es un ambiente de compra?</h5>
          <p className='text-slider'>Puntos de venta y consumo con misiones o razones de compra similares que atienden diferentes necesidades de los compradores.</p>

        </SwiperSlide>

        <SwiperSlide>
          <Imagenes src={Images.Ambientes_de_compra.Hipermecados} />
        </SwiperSlide>

        <SwiperSlide>
          <Imagenes src={Images.Ambientes_de_compra.Supermercados} />
        </SwiperSlide>

        <SwiperSlide>
          <Imagenes src={Images.Ambientes_de_compra.C_Store} />
        </SwiperSlide>

        <SwiperSlide>
          <Imagenes src={Images.Ambientes_de_compra.Tienda_de_descuento} />
        </SwiperSlide>

        <SwiperSlide>
          <Imagenes src={Images.Ambientes_de_compra.Chas_carry} />
        </SwiperSlide>

        <SwiperSlide className='divisor dv_back'>
          <Regresar />
        </SwiperSlide>

      </Swiper>

    </div>
  );
};

export default AmbientesCompra;