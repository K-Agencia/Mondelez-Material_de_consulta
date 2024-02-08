import { Swiper, SwiperSlide } from 'swiper/react';
import { EffectCards } from 'swiper/modules';

import Regresar from '../components/Regresar';
import Imagenes from '../components/Imagenes';
import { Images } from '../images/Images';
import '../css/Las5S.css';

const Las5S = () => {
  return (
    <div className='Las5S'>
      <Swiper
        effect={'cards'}
        grabCursor={true}
        modules={[EffectCards]}
        className="mySwiper"
      >

        <SwiperSlide className='divisor dv_3'>
          <h3>Las 5S</h3>
          <h6>(Procesos de compra)</h6>
          <div className='text-slider-header'>
            <p className='text-slider'>Proceso de compra que ayuda a detectar oportunidades para aumentar la conversión de más compradores a través de identificar la acción adecuada</p>
          </div>
        </SwiperSlide>

        <SwiperSlide>
          <Imagenes src={Images.infografia_5s} width={"100%"} height={"100%"} />
        </SwiperSlide>

        <SwiperSlide className='divisor dv_back'>
          <Regresar />
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default Las5S;