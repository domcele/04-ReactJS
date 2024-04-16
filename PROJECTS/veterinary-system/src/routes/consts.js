import Home from "../pages/Home";
import PetList from "../pages/PetList";
import Pets from "../pages/Pets";

export const ROUTES = {
  HOME: "/",
  PETLIST: "/petlist",
  PETS: "/pets",
};

export const routes = [
  {
    path: ROUTES.HOME,
    Component: Home,
  },
  {
    path: ROUTES.PETLIST,
    Component: PetList,
  },
  {
    path: ROUTES.PETS,
    Component: Pets,
  },
];
