import Home from "../pages/Home";
import Pet from "../pages/Pet";

export const ROUTES = {
  HOME: "/",
  PET: "/:id",
};

export const routes = [
  {
    path: ROUTES.HOME,
    Component: Home,
  },
  {
    path: ROUTES.PET,
    Component: Pet,
  },
];
