import Home from "../pages/Home";
import Pets from "../pages/Pets";

export const ROUTES = {
  HOME: "/",
  PETS: "/:id",
};

export const routes = [
  {
    path: ROUTES.HOME,
    Component: Home,
  },
  {
    path: ROUTES.PETS,
    Component: Pets,
  },
];
