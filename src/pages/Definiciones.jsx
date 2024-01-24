import { Swiper, SwiperSlide } from 'swiper/react';
import { EffectCards } from 'swiper/modules';

import { Images } from '../images/Images';
import Imagenes from '../components/Imagenes';
import Regresar from '../components/Regresar';

const Definiciones = () => {
  return (
    <div className='Definiciones'>
      <Swiper
        effect={'cards'}
        grabCursor={true}
        modules={[EffectCards]}
        className="mySwiper"
      >

        <SwiperSlide className='divisor dv_1'>
          <h3>Definiciones Generales </h3>
        </SwiperSlide>

        <SwiperSlide>
          <h3 className='title tl_1'>Los 10 principios de los compradores</h3>

          <ol>
            <li>Las misiones de compra conducen a las personas a las tiendas, no las marcas.</li>
            <li>Las personas no tienen una ruta ni pasan por todos los pasillos.</li>
            <li>70% de las decisiones de compra suceden en las tiendas.</li>
            <li>Si no pueden encontrar el producto, no pueden llevarlo.</li>
            <li>Las personas confían en el color y la forma para encontrar lo que necesitan.</li>
            <li>Las personas ignoran la mayoría de lo que ven.</li>
            <li>Las personas compran una y otra vez una marca que conocen y confían en ella.</li>
            <li>La impulsividad se genera en la mente del comprador, no en el producto o canal.</li>
            <li>Si no tienen contacto con el producto, no van a llevarlo.</li>
            <li>Nuestro cerebro procesa más eficientemente imágenes que palabras.</li>
          </ol>

        </SwiperSlide>

        <SwiperSlide className='divisor dv_1'>
          <h3>Definiciones básicas de negocio perfecto</h3>
        </SwiperSlide>

        <SwiperSlide>

          <h5>¿Qué es negocio perfecto?</h5>
          <p className='text-slider'>Proceso que nos permite revolucionar las ventas a través de la ejecución ubicando los productos correctos en el lugar correcto. Porque no solo es importante estar en el punto de venta sino estar de la forma adecuada.</p>

          <h5>¿Qué beneficios trae consigo?</h5>
          <p className='text-slider'>El comprador podrá encontrar sus productos favoritos, debido a que facilitamos la misión de compra, generando lealtad hacia el negocio acciones que resultan en un crecimiento de ventas y categorías.</p>
        </SwiperSlide>

        <SwiperSlide>
          <h5>¿Qué buscamos?</h5>
          <p className='text-slider'>Satisfacer, comprender y vincular las perspectivas de las tres partes interesadas para tener éxito.</p>
          <Imagenes src={Images.Definiciones.circuito} width={"300"} height={"300"} />
        </SwiperSlide>

        <SwiperSlide className='divisor dv_back'>
          <Regresar />
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default Definiciones;