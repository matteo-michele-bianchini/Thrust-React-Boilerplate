import { type RouteConfig, index, route } from "@react-router/dev/routes";

export default [
    // HOMEPAGE
    index("routes/homepage.tsx"),

    /* GUEST AREA */
    route("login", "routes/login.tsx"),
    /* GUEST AREA */

    /* USER AREA */
    route("user", "routes/user/user.tsx")
    /* USER AREA */

] satisfies RouteConfig;
