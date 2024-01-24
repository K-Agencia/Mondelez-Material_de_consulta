import { RouterProvider, createBrowserRouter } from "react-router-dom";
import General from "../pages/General";
import AmbientesCompra from "../pages/AmbientesCompra";
import Definiciones from "../pages/Definiciones";
import ImagenExito from "../pages/ImagenExito";
import Las5P from "../pages/Las5P";
import Las5S from "../pages/Las5S";
import { RoutersLinks } from "./RoutersLinks";
import HotZone from "../pages/HotZone";
import BackStore from "../pages/BackStore";


const router = createBrowserRouter([
  {
    path: RoutersLinks.General,
    element: <General />
  },
  {
    path: RoutersLinks.AmbientesCompra,
    element: <AmbientesCompra />
  },
  {
    path: RoutersLinks.Definiciones,
    element: <Definiciones />
  },
  {
    path: RoutersLinks.ImagenExito,
    element: <ImagenExito />
  },
  {
    path: RoutersLinks.Las5P,
    element: <Las5P />
  },
  {
    path: RoutersLinks.Las5S,
    element: <Las5S />
  },
  {
    path: RoutersLinks.HotZone,
    element: <HotZone />
  },
  {
    path: RoutersLinks.BackStore,
    element: <BackStore />
  },
])

const RouterMain = () => {
  return (
    <div className="content-app">
      <RouterProvider router={router} />
    </div>
  );
}

export default RouterMain;