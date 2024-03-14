const express = require('express');
const authRoute = require('./auth.route');
const userRoute = require('./user.route');
const contactUsRoute = require('./contactUs.route');
const docsRoute = require('./docs.route');
const blogRoute = require('./blog.route');
const courseRoute = require('./course.route');
const paymentRoute = require('./payment.route');
const accommodationRoute = require('./accommodation.route');

const config = require('../../config/config');

const router = express.Router();

const defaultRoutes = [
  {
    path: '/auth',
    route: authRoute,
  },
  {
    path: '/payment',
    route: paymentRoute,
  },
  {
    path: '/accommodation',
    route: accommodationRoute,
  },
  {
    path: '/course',
    route: courseRoute,
  },
  {
    path: '/blog',
    route: blogRoute,
  },
  {
    path: '/users',
    route: userRoute,
  },
  {
    path: '/contactUs',
    route: contactUsRoute,
  },
];

const devRoutes = [
  // routes available only in development mode
  {
    path: '/docs',
    route: docsRoute,
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
