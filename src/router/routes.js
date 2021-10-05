import views from '../views/index.js';
const { About, Contact, Portfolio, Solutions } = views;

const routes = [
  {
    path: '/',
    name: 'Root',
    props: true,
    component: About,
    meta: {
      title: 'Mike Finnegan - About'
    }
  },
  {
    path: '/about',
    name: 'About',
    props: true,
    component: About,
    meta: {
      title: 'Mike Finnegan - About'
    }
  },
  {
    path: '/contact',
    name: 'Contact',
    component: Contact,
    props: true,
    meta: {
      title: 'Mike Finnegan - Contact'
    }
  },
  {
    path: '/portfolio',
    name: 'Portfolio',
    component: Portfolio,
    props: true,
    meta: {
      title: 'Mike Finnegan - Portfolio'
    }
  },
  {
    path: '/solutions',
    name: 'Solutions',
    component: Solutions,
    props: true,
    meta: {
      title: 'Mike Finnegan - Solutions'
    }
  }
];

export default routes;