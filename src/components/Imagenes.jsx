import '../css/Imagenes.css';

const Imagenes = ({ src, width = 200, height = 200 }) => {
  return (
    <div className='Imagenes'>
      <img src={src} alt="" width={width} height={height} />
    </div>
  );
};

export default Imagenes;