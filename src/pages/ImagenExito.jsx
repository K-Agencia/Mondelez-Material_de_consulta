import { Swiper, SwiperSlide } from 'swiper/react';
import { EffectCards } from 'swiper/modules';
import Regresar from '../components/Regresar';
import Imagenes from '../components/Imagenes';
import { Images } from '../images/Images';


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
          <div className="text-slider-header">
            <p className='text-slider'>Es la herramienta y guía que nos muestra la ejecución de las 5P’s en todos los ambientes de compra de acuerdo con las necesidades de nuestros compradores para incrementar nuestras ventas. En resumen, es nuestra fotografía de cómo debe verse la tienda perfecta por ambiente de compra.</p>
          </div>
        </SwiperSlide>

        <SwiperSlide>
          <Imagenes src={Images.Foto_exito.IE_exito} width={"100%"} height={"100%"} />
          <Imagenes src={Images.Foto_exito.IE_exito2} width={"100%"} height={"100%"} />
        </SwiperSlide>

        <SwiperSlide className='divisor dv_back'>
          <Regresar />
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default ImagenExito;