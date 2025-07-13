import { NavLink, useNavigation } from "react-router";
import { router } from "../routes";
function Navbar() {
  // Only gets the first level of routes
  const routes = router.routes[0].children;
  const navigation = useNavigation();
  return (
    <nav
      className={`grid grid-flow-col justify-evenly items-center border-b border-black ${
        navigation.state === "loading" ? "global-loading-bar" : ""
      }`}
    >
      {routes.map((route) => (
        <NavLink
          key={route.path}
          to={route.path}
          className={({ isActive }) =>
            `my-2 p-1 rounded h-fit ${
              isActive
                ? "text-cyan-500 font-bold"
                : "hover:bg-slate-500 hover:bg-opacity-50"
            }`}
        >
          {route.path === "/" ? "HOME" : route.path.slice(1).toUpperCase()}
        </NavLink>
      ))}
    </nav>
  );
}
export default Navbar;
