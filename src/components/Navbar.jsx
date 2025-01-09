import { NavLink, useNavigation } from "react-router";
import { router } from "../routes";

function Navbar() {
  // Only gets the first level of routes
  const routes = router.routes[0].children;
  const navigation = useNavigation();

  return (
    <nav
      className={`grid grid-flow-col grid-rows-1 justify-around items-center border-b border-black ${
        navigation.state === "loading" ? "global-loading-bar" : ""
      }`}
    >
      {routes.map((route) => (
        <NavLink
          key={route.path}
          to={route.path}
          className={({ isActive}) =>
            `p-4 grid align-middle justify-evenly h-full min-w-20 ${
              isActive ? "text-cyan-500 font-bold" : "hover:font-semibold"
            }`
          }
        >
          {route.path === "/" ? "HOME" : route.path.slice(1).toUpperCase()}
        </NavLink>
      ))}
    </nav>
  );
}

export default Navbar;
