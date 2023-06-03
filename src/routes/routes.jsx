import Home from "../pages/Home/Home";
import About from "../pages/About/About";
import Destination from "../pages/Destination/Destination";
import Details from "~/pages/Pages/Details/Details";
import Blog from "~/pages/Blog/Blog/Blog";
import SingleBlog from "~/pages/Blog/SingleBlog/SingleBlog";

import config from "../config";

const publicRoutes = [
  { path: config.routes.home, component: Home },
  { path: config.routes.about, component: About },
  { path: config.routes.destination, component: Destination },
  { path: config.routes.details, component: Details },
  { path: config.routes.blog, component: Blog },
  { path: config.routes.single_blog, component: SingleBlog },
];

const privateRoutes = [];

export { publicRoutes, privateRoutes };
