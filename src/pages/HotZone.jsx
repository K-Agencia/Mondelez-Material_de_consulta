import { Swiper, SwiperSlide } from 'swiper/react';
import { EffectCards } from 'swiper/modules';
import Regresar from '../components/Regresar';
import Imagenes from '../components/Imagenes';
import { Images } from '../images/Images';

const HotZone = () => {
  return (
    <div className='HotZone'>
      <Swiper
        effect={'cards'}
        grabCursor={true}
        modules={[EffectCards]}
        className="mySwiper"
      >

        <SwiperSlide className='divisor dv_1'>
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
          <Imagenes src={Images.HotZone.arbol} width={"100%"} height={"100%"} />
        </SwiperSlide>

        <SwiperSlide className='divisor dv_1'>
          <h6> Hot Zone:</h6>
          <h3>Arboles de decisión</h3>
        </SwiperSlide>

        <SwiperSlide>
          <Imagenes src={Images.HotZone.gums_and_candies} width={"100%"} height={"100%"} />
        </SwiperSlide>
        <SwiperSlide>
          <Imagenes src={Images.HotZone.chocolate} width={"100%"} height={"100%"} />
        </SwiperSlide>
        <SwiperSlide>
          <Imagenes src={Images.HotZone.biscuits} width={"100%"} height={"100%"} />
        </SwiperSlide>

        <SwiperSlide className='divisor dv_1'>
          <h6> Hot Zone:</h6>
          <h3>Pilares de ejecución</h3>
        </SwiperSlide>

        <SwiperSlide>
          <Imagenes src={Images.HotZone.surtido} width={"100%"} height={"100%"} />
        </SwiperSlide>

        <SwiperSlide>
          <Imagenes src={Images.HotZone.ubicación} width={"100%"} height={"100%"} />
        </SwiperSlide>

        <SwiperSlide>
          <Imagenes src={Images.HotZone.consistencia} width={"100%"} height={"100%"} />
        </SwiperSlide>

        <SwiperSlide className='divisor dv_back'>
          <Regresar url={"/Las5P/3"} />
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default HotZone;