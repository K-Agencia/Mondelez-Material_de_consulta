import '../css/Imagenes.css';

const Imagenes = ({ src}) => {
  return (
    <div className='Imagenes'>
      <img src={src} />
    </div>
  );
};

export default Imagenes;