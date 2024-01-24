import { Swiper, SwiperSlide } from 'swiper/react';
import { EffectCards } from 'swiper/modules';
import Regresar from '../components/Regresar';


const ImagenExito = () => {
  return (
    <div className='ImagenExito'>
      <Swiper
        effect={'cards'}
        grabCursor={true}
        modules={[EffectCards]}
        className="mySwiper"
      >

        <SwiperSlide className='divisor dv_1'>
          <h3>Imagen o foto de éxito</h3>
        </SwiperSlide>

        <SwiperSlide>
          <p className='text-slider'>Es la herramienta y guía que nos muestra la ejecución de las 5P’s en todos los ambientes de compra de acuerdo con las necesidades de nuestros compradores para incrementar nuestras ventas. En resumen, es nuestra fotografía de cómo debe verse la tienda perfecta por ambiente de compra.</p>
        </SwiperSlide>

        <SwiperSlide>
          <p className='text-slider'><i>imagenDeExitoHorizontal.svg</i></p>
        </SwiperSlide>

        <SwiperSlide className='divisor dv_back'>
          <Regresar />
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default ImagenExito;