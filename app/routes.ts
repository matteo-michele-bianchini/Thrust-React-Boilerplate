import { type RouteConfig, index, route } from "@react-router/dev/routes";

export default [
    index("routes/home.tsx"),

    /* GUEST AREA */
    route("login", "./pages/auth/login.tsx")
    /* GUEST AREA */

] satisfies RouteConfig;
