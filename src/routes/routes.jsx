import Home from "../pages/Home/Home";
import About from "../pages/About/About";
import Destination from "../pages/Destination/Destination";

import config from "../config";

const publicRoutes = [
  { path: config.routes.home, component: Home },
  { path: config.routes.about, component: About },
  { path: config.routes.destination, component: Destination },
];

const privateRoutes = [];

export { publicRoutes, privateRoutes };
