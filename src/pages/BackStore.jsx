import { Swiper, SwiperSlide } from 'swiper/react';
import { EffectCards } from 'swiper/modules';
import Regresar from '../components/Regresar';


const BackStore = () => {
  return (
    <div className='BackStore'>
      <Swiper
        effect={'cards'}
        grabCursor={true}
        modules={[EffectCards]}
        className="mySwiper"
      >

        <SwiperSlide className='divisor dv_2'>
          <h6>Posición:</h6>
          <h3>Back Store</h3>
          <div className="text-slider-header">
            <p>Corresponde al resto de la tienda diferente al puesto de pago o Checkout y a su vez se divide en dos zonas:</p>
          </div>
        </SwiperSlide>

        <SwiperSlide className='divisor dv_2'>
          <h6>Back Store:</h6>
          <h3>Arboles de decisión</h3>
        </SwiperSlide>

        <SwiperSlide>
          <p className='text-slider'><i>imagenTabla3.svg</i></p>
        </SwiperSlide>

        <SwiperSlide className='divisor dv_2'>
          <h6>Back Store:</h6>
          <h3>Exhibiciones Primarias</h3>
          <div className="text-slider-header">
            <p className='text-slider'>Es la ubicación donde se exhibe una categoría por naturaleza.</p>
          </div>
        </SwiperSlide>

        <SwiperSlide>
          <p className='text-slider'><i>imagenPilarDeExhibicion1.svg</i></p>
          <p className='text-slider'><i>imagenPilarDeExhibicion2.svg</i></p>
        </SwiperSlide>

        <SwiperSlide>
          <p className='text-slider'><i>imagenPilarDeExhibicion3.svg</i></p>
          <p className='text-slider'><i>imagenPilarDeExhibicion4.svg</i></p>
        </SwiperSlide>

        <SwiperSlide className='divisor dv_2'>
          <h6>Back Store:</h6>
          <h3>Exhibiciones Secundarias</h3>
          <div className="text-slider-header">
            <p className='text-slider'> Exhibición temporal o permanente donde se ubica nuestra categoría fuera de la exhibición primaria. A continuación los pilares de ejecución exhibiciones secundaria:</p>
          </div>
        </SwiperSlide>

        <SwiperSlide>
          <p className='text-slider'><i>imagenPilarDeExhibicion1.svg</i></p>
          <p className='text-slider'><i>imagenPilarDeExhibicion2.svg</i></p>
          <p className='text-slider'><i>imagenPilarDeExhibicion3.svg</i></p>
          <p className='text-slider'><i>imagenPilarDeExhibicion4.svg</i></p>
          <p className='text-slider'><i>imagenPilarDeExhibicion5.svg</i></p>
        </SwiperSlide>

        <SwiperSlide className='divisor dv_back'>
          <Regresar url={"/Las5P/3"} />
        </SwiperSlide>

      </Swiper>
    </div>
  );
};

export default BackStore;