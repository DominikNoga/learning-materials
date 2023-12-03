const routes = {
    home: '/',
    admin: '/admin',
    about: '/about',
}

const routesAsConst = {
    home: '/',
    admin: '/admin',
    about: '/about',
    deepRoute: {
        payment: '/payment'
    }
} as const;

// * This is similar to the as const operator BUT it won't help with the nested object
// * The routesFrozen.deepRoute.payment still can be mutated where routesAsConst.deepRoute.payment is still immutable
const routesFrozen = Object.freeze({
    home: '/',
    admin: '/admin',
    about: '/about',
    deepRoute: {
        payment: '/payment'
    }
});

routesFrozen.deepRoute.payment = ''; // allowed
// routesAsConst.deepRoute.payment = '' // not allowed

// this is also not good because we redeclare possible routes and there are multiple source of truth
const goToRotue = (route: '/' | '/admin' | '/about') => {
    console.log(`Going to route: ${route}`);
}

// keys of routesAsConst object
type RoutesKeys = keyof typeof routesAsConst;

// from typeof routesAsConst object we extract values hidden under the keys
type Route = (typeof routesAsConst)[RoutesKeys];
// Here we use the Route type which do not redeclare the possible route values, but uses those already declared in the routesAsConst object
const goToRouteBetter = (route: Route) => {
    console.log(`Going to route: ${route}`);
}

// goToRotue(routes.about);  // * This is forbidden cause routes.about may be changed in the future. Cause objects are MUTABLE
// like that
routes.about = 'some new route';
// as const prevents this situation from happening. When i'd like to change the routesAsConst.about i will get an error message
// routesAsConst.about = 'some new route'; // * This will throw an error, cause with as const it is IMMUTABLE
goToRotue(routesAsConst.about);
goToRouteBetter('/admin');
goToRouteBetter(routesFrozen.about);
