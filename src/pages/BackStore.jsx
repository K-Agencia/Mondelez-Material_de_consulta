import { Swiper, SwiperSlide } from 'swiper/react';
import { EffectCards } from 'swiper/modules';
import Regresar from '../components/Regresar';
import Imagenes from '../components/Imagenes';
import { Images } from '../images/Images';


const BackStore = () => {
  return (
    <div className='BackStore'>
      <Swiper
        effect={'cards'}
        grabCursor={true}
        modules={[EffectCards]}
        className="mySwiper"
      >

        <SwiperSlide className='divisor dv_5'>
          <h6>Posición:</h6>
          <h3>Back Store</h3>
          <div className="text-slider-header">
            <p>Corresponde al resto de la tienda diferente al puesto de pago o Checkout y a su vez se divide en dos zonas:</p>
          </div>
        </SwiperSlide>

        <SwiperSlide className='divisor dv_5'>
          <h6>Back Store:</h6>
          <h3>Arboles de decisión</h3>
        </SwiperSlide>

        <SwiperSlide>
          <Imagenes src={Images.Back_Store.BS_Arbol_descision} width={"100%"} height={"100%"} />
        </SwiperSlide>

        <SwiperSlide className='divisor dv_5'>
          <h6>Back Store:</h6>
          <h3>Exhibiciones Primarias</h3>
          <div className="text-slider-header">
            <p className='text-slider'>Es la ubicación donde se exhibe una categoría por naturaleza.</p>
          </div>
        </SwiperSlide>

        <SwiperSlide>
          <Imagenes src={Images.Pilares_ejecucion.PE_estantes_de_mejor_venta} width={"100%"} height={"100%"} />
          <Imagenes src={Images.Pilares_ejecucion.PE_bloques_de_marca} width={"100%"} height={"100%"} />
        </SwiperSlide>

        <SwiperSlide>
          <Imagenes src={Images.Pilares_ejecucion.PE_frentear_productos} width={"100%"} height={"100%"} />
          <Imagenes src={Images.Pilares_ejecucion.PE_evitar_puntos_ciegos} width={"100%"} height={"100%"} />
        </SwiperSlide>

        <SwiperSlide className='divisor dv_5'>
          <h6>Back Store:</h6>
          <h3>Exhibiciones Secundarias</h3>
          <div className="text-slider-header">
            <p className='text-slider'> Exhibición temporal o permanente donde se ubica nuestra categoría fuera de la exhibición primaria. A continuación los pilares de ejecución exhibiciones secundaria:</p>
          </div>
        </SwiperSlide>

        <SwiperSlide>
          <Imagenes src={Images.Exhibiciones.Secundarias.evitar_puntos_ciegos} width={"100%"} height={"100%"} />
          <Imagenes src={Images.Exhibiciones.Secundarias.sin_obstrucciones} width={"100%"} height={"100%"} />
          <Imagenes src={Images.Exhibiciones.Secundarias.visible} width={"100%"} height={"100%"} />
        </SwiperSlide>

        <SwiperSlide>
          <Imagenes src={Images.Exhibiciones.Secundarias.todos_lados} width={"100%"} height={"100%"} />
          <Imagenes src={Images.Exhibiciones.Secundarias.orientado} width={"100%"} height={"100%"} />
        </SwiperSlide>

        <SwiperSlide className='divisor dv_back'>
          <Regresar url={"/Las5P/3"} />
        </SwiperSlide>

      </Swiper>
    </div>
  );
};

export default BackStore;