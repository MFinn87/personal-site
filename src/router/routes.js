import views from '../views/index.js';

const routes = [
    {
      path: '/',
      name: 'About',
      props: true,
      component: views.About,
      meta: {
        title: 'Mike Finnegan - About'
      }
    },
    {
      path: '/about',
      name: 'About',
      props: true,
      component: views.About,
      meta: {
        title: 'Mike Finnegan - About'
      }
    },
    {
      path: '/contact',
      name: 'Contact',
      component: views.Contact,
      props: true,
      meta: {
        title: 'Mike Finnegan - Contact'
      }
    },
    {
      path: '/portfolio',
      name: 'Portfolio',
      component: views.Portfolio,
      props: true,
      meta: {
        title: 'Mike Finnegan - Portfolio'
      }
    },
    {
      path: '/solutions',
      name: 'Solutions',
      component: views.Solutions,
      props: true,
      meta: {
        title: 'Mike Finnegan - Solutions'
      }
    }
];

export default routes;