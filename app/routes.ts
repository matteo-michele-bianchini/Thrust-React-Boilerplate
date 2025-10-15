import { type RouteConfig, index, route } from '@react-router/dev/routes'

export default [
    index('routes/homepage.tsx'),

    // Guest Area
    route('login', 'routes/login.tsx'),

    // User Area
    route('user', 'routes/user/user.tsx'),

    /* catch-all*/
    route('*', 'routes/notFound.tsx')
] satisfies RouteConfig