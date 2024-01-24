import { Swiper, SwiperSlide } from 'swiper/react';
import { EffectCards } from 'swiper/modules';

import Regresar from '../components/Regresar';

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
        </SwiperSlide>

        <SwiperSlide>
          <p className='text-slider'><i>infografiaHorizontal.svg</i></p>
        </SwiperSlide>

        <SwiperSlide className='divisor dv_back'>
          <Regresar />
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default Las5S;