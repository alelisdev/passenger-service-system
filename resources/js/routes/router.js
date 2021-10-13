import Vue from 'vue';
import VueRouter from 'vue-router';
import routes from './routes';
import store from '../store';
import VueMeta from 'vue-meta';

Vue.use(VueRouter);
Vue.use(VueMeta, {
  // The component option name that vue-meta looks for meta info on.
  keyName: 'page',
});

// configure router
const router = new VueRouter({
  mode: 'history',
  routes, // short for routes: routes
  linkActiveClass: 'active',
  scrollBehavior: (to, from ,savedPosition) => {
    if (savedPosition) {
      return savedPosition;
    }
    if (to.hash) {
      return { selector: to.hash };
    }
    return { x: 0, y: 0 };
  }
});

// Before each route evaluates...
router.beforeEach((routeTo, routeFrom, next) => {

  // Check if auth is required on this route
  // (including nested routes).
  const authRequired = routeTo.matched.some((route) => route.meta.authRequired)
  // If auth isn't required for the route, just continue.
  if (!authRequired) return next()
  // If auth is required and the user is logged in...
  if (store.getters['isAuthenticated']) {
    // Validate the local user token...
    return store.dispatch('checkAuth').then((validUser) => {
      // Then continue if the token still represents a valid user,
      // otherwise redirect to login.
      validUser ? next() : redirectToLogin()
    })
  }

  // If auth is required and the user is NOT currently logged in,
  // redirect to login.
  redirectToLogin()

  // eslint-disable-next-line no-unused-vars
  function redirectToLogin() {  
    // Pass the original route to the login component
    next({ name: 'Login'})
  }
})

router.beforeResolve(async (routeTo, routeFrom, next) => {
  // Create a `beforeResolve` hook, which fires whenever
  // `beforeRouteEnter` and `beforeRouteUpdate` would. This
  // allows us to ensure data is fetched even when params change,
  // but the resolved route does not. We put it in `meta` to
  // indicate that it's a hook we created, rather than part of
  // Vue Router (yet?).
  try {
    // For each matched route...
    for (const route of routeTo.matched) {
      await new Promise((resolve, reject) => {
        // If a `beforeResolve` hook is defined, call it with
        // the same arguments as the `beforeEnter` hook.
        if (route.meta && route.meta.beforeResolve) {
          route.meta.beforeResolve(routeTo, routeFrom, (...args) => {
            // If the user chose to redirect...
            if (args.length) {
              // If redirecting to the same route we're coming from...
              // Complete the redirect.
              next(...args)
              reject(new Error('Redirected'))
            } else {
              resolve()
            }
          })
        } else {
          // Otherwise, continue resolving the route.
          resolve()
        }    
      })
    }
    // If a `beforeResolve` hook chose to redirect, just return.
  } catch (error) {
    return
  }

  // If we reach this point, continue resolving the route.
  next()
})

export default router;
