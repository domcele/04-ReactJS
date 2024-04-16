import Home from "../pages/Home";
import PetList from "../pages/PetList";
import Pet from "../pages/Pet";

export const ROUTES = {
  HOME: "/",
  PETLIST: "/petlist",
  PET: "/pet",
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
    path: ROUTES.PET,
    Component: Pet,
  },
];
