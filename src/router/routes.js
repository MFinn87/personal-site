import views from '../views/index.js';

const routes = [
    {
      path: '/',
      name: 'About',
      props: true,
      component: views.About,
      meta: {
        title: 'Welcome!'
      }
    },
    {
      path: '/about',
      name: 'About',
      props: true,
      component: views.About,
      meta: {
        title: 'Welcome!'
      }
    },
    {
      path: '/contact',
      name: 'Contact',
      component: views.Contact,
      props: true,
      meta: {
        title: 'Contact'
      }
    },
    {
      path: '/portfolio',
      name: 'Portfolio',
      component: views.Portfolio,
      props: true,
      meta: {
        title: 'Portfolio'
      }
    },
    {
      path: '/solutions',
      name: 'Solutions',
      component: views.Solutions,
      props: true,
      meta: {
        title: 'Solutions'
      }
    }
];

export default routes;