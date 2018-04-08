import Vue from 'vue'
import Router from 'vue-router'
import HomePage from '@/views/home-page';
import Home from '@/views/home-page/home';
import Contract from '@/views/home-page/contract';
import Contacts from '@/views/home-page/contacts';
import My from '@/views/home-page/my';
import companyAuth from '@/views/company-auth';
import companyList from '@/views/company-list';

import Validator from '@/tests/validator.vue';

Vue.use(Router)

const testRoutes = [
  {
    path: '/test/validator',
    component: Validator,
  },
];

const regularRoutes = [
  {
    path: '/home-page',
    name: 'home-page',
    component: HomePage,
    children: [
      {
        name: 'home',
        path: '/home-page/home',
        component: Home,
      },
      {
        name: 'contract',
        path: '/home-page/contract',
        component: Contract,
      },
      {
        name: 'contacts',
        path: '/home-page/contacts',
        component: Contacts,
      },
      {
        name: 'my',
        path: '/home-page/my',
        component: My,
      },
    ],
  },
  {
    path: '/company-auth',
    name: 'company-auth',
    component: companyAuth,
  },
  {
    path: '/company-list',
    name: 'company-list',
    component: companyList,
  },
];

const routes = regularRoutes.concat(testRoutes);

const router = new Router({
  routes,
})

router.beforeEach((to, from, next) => {
  const { matched } = to;
  // url匹配不到任何一条路由
  if (matched.length === 0) {
    from.name ? next({ name: from.name }) : next('/home-page/home');
    return;
  }
  next();
});

export default router;
