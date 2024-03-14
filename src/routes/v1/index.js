const express = require('express');
const authRoute = require('./auth.route');
const userRoute = require('./user.route');
const senaServiceRoute = require('./senaService.route');
const senaPostRoute = require('./senaPost.route');

const config = require('../../config/config');

const router = express.Router();

const defaultRoutes = [
  {
    path: '/auth',
    route: authRoute,
  },

  {
    path: '/senaPost',
    route: senaPostRoute,
  },
  {
    path: '/senaService',
    route: senaServiceRoute,
  },
  {
    path: '/users',
    route: userRoute,
  },
];

const devRoutes = [
  // routes available only in development mode
  {
    path: '/docs',
    route: senaServiceRoute,
  },
];

defaultRoutes.forEach((route) => {
  router.use(route.path, route.route);
});

/* istanbul ignore next */
if (config.env === 'development') {
  devRoutes.forEach((route) => {
    router.use(route.path, route.route);
  });
}

module.exports = router;
