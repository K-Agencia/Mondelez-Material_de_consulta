import { Link } from "react-router-dom";
import { RoutersLinks } from "../routes/RoutersLinks";
import Clic from "./Clic";

const Regresar = ({ url = RoutersLinks.General }) => {
  return (
    <Link to={url} className='content-swiper'>
      <h3>Regresar</h3>
      <Clic />
    </Link>
  );
};

export default Regresar;