import { Swiper, SwiperSlide } from 'swiper/react';
import { EffectCards } from 'swiper/modules';
import Regresar from '../components/Regresar';

const HotZone = () => {
  return (
    <div className='HotZone'>
      <Swiper
        effect={'cards'}
        grabCursor={true}
        modules={[EffectCards]}
        className="mySwiper"
      >

        <SwiperSlide className='divisor dv_3'>
          <h6>Posición:</h6>
          <h3>Hot Zone</h3>
          <div className="text-slider-header">
            <p>Corresponde a los puntos de pago, donde categorizamos 3 espacios:</p>
            <ul>
              <li className='color-oro'><b>ORO:</b> Zona más importante del HZ, la más accesible a las manos y donde se realiza el pago.</li>
              <li className='color-plata'><b>PLATA:</b> Ubicación más extensa no es la mejor ubicación, pero está en línea de visión del comprador.</li>
              <li className='color-bronce'><b>BRONCE:</b> A la espalda del comprador o debajo de la cintura.</li>
            </ul>
          </div>
        </SwiperSlide>

        <SwiperSlide>
          <p className='text-slider'><i>imagenIlustrativa.svg</i></p>
        </SwiperSlide>

        <SwiperSlide className='divisor dv_3'>
          <h6> Hot Zone:</h6>
          <h3>Arboles de decisión</h3>
          <div className="text-slider-header">
            <p className='text-slider'>El árbol de decisión y momentos de consumo son la base para organizar el planograma de la categoría, ya que ordena el recorrido de decisiones del shopper de la más prioritaria a la menor</p>
          </div>
        </SwiperSlide>

        <SwiperSlide>
          <p className='text-slider'><i>imagenTabla1.svg</i></p>
        </SwiperSlide>
        <SwiperSlide>
          <p className='text-slider'><i>imagenTabla2.svg</i></p>
        </SwiperSlide>
        <SwiperSlide>
          <p className='text-slider'><i>imagenTabla3.svg</i></p>
        </SwiperSlide>

        <SwiperSlide className='divisor dv_3'>
          <h6> Hot Zone:</h6>
          <h3>Pilares de ejecución</h3>
        </SwiperSlide>

        <SwiperSlide>
          <p className='text-slider'><i>imagenTabla1.svg</i></p>
        </SwiperSlide>

        <SwiperSlide className='divisor dv_back'>
          <Regresar url={"/Las5P/3"} />
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default HotZone;