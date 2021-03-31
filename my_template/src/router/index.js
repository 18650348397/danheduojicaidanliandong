import Vue from "vue";
import VueRouter from "vue-router";
import layOut from '../views/layOut/layOut.vue';     //一二级菜单容器
import thirdLay from '../views/layOut/thirdLay.vue';  //三级菜单容器

Vue.use(VueRouter);


/**
 * hidden:   控制(判断)该路由菜单的显隐(需要不显示的路由配置该项为true即可)
 * meta.title:   菜单名称
 * meta.icon:    菜单图标
 * path:   路由路径(最后一层不需加/)
 * redirect: 重定向
 */

const routes = [
  {
    path: "/",
    redirect: 'home',  //重定向到首页
    hidden: true
  },
  {
    path: '',
    name: '',
    component: layOut,
    children: [{
      path: 'home',
      name: 'home',
      meta: {
        title: '首页',
        icon: 'el-icon-info'
      },
      component: () => import('@/views/Home.vue'),
    }]
  },
  {
    path: '/one',
    name: 'one',
    meta: {
      title: "一级单个",
      icon: "el-icon-goods",
    },
    component: layOut,
    children: [{
      path: 'oone',
      name: 'oone',
      meta: {
        title: '一单',
        icon: 'el-icon-info'
      },
      component: () => import('@/views/components/oneOne/oneOne.vue')
    }]
  },
  {
    path: '/two',
    name: 'test',
    meta: {
      title: "二级下单个",
      icon: "el-icon-goods",
    },
    component: layOut,
    children: [{
      path: 'tone',
      name: 'tone',
      meta: {
        title: '二下单',
        icon: 'el-icon-info'
      },
      component: () => import('@/views/components/twoOne/twoOne.vue')
    }, {
      path: 'tone2',
      name: 'tone2',
      meta: {
        title: '二下单2',
        icon: 'el-icon-info'
      },
      hidden: true,   //可用于多级菜单时只有一个下级菜单的显隐
      component: () => import('@/views/components/twoOne/twoOne.vue'),
    }]
  },
  {
    path: '/twomore',
    name: 'twomore',
    meta: {
      title: "二级下多个",
      icon: "el-icon-goods",
    },
    component: layOut,
    children: [{
      path: 'twomore1',
      name: 'twomore1',
      meta: {
        title: '二下多1',
        icon: 'el-icon-info'
      },
      component: () => import('@/views/components/twomore/twomore1.vue')
    }, {
      path: 'twomore2',
      name: 'twomore2',
      meta: {
        title: '二下多2',
        icon: 'el-icon-info'
      },
      // hidden: true,   //可用于二级菜单时只有一个下级菜单的显隐
      component: () => import('@/views/components/twomore/twomore2.vue'),
    }]
  },
  {
    path: "/threemore",
    name: "threemore",
    component: layOut,
    meta: {
      title: "三下级多个",
      icon: "el-icon-success",
    },
    children: [

      {
        path: "/threemore1",
        name: "threemore1",
        meta: {
          title: "三一",
          icon: "el-icon-goods",
        },
        component: thirdLay,
        children: [{
          path: "threemore11",
          name: "threemore11",
          meta: {
            title: "三一一",
            icon: "el-icon-mobile-phone",
          },
          component: () => import('@/views/components/threemore/threemore11.vue'),
        },
        {
          path: "threemore12",
          name: "threemore12",
          meta: {
            title: "三一二",
            icon: "el-icon-service",
          },
          component: () => import('@/views/components/threemore/threemore12.vue'),
        }
        ]
      },
      {
        path: "/threemore2",
        name: "threemore2",
        meta: {
          title: "三二",
          icon: "el-icon-upload",
        },
        component: thirdLay,
        children: [{
          path: "threemore21",
          name: "threemore21",
          meta: {
            title: "三二一",
            icon: "el-icon-mobile-phone",
          },
          component: () => import('@/views/components/threemore/threemore21.vue'),
        },
        {
          path: "threemore22",
          name: "threemore22",
          meta: {
            title: "三二二",
            icon: "el-icon-mobile-phone",
          },
          hidden: true,   //可用于二级菜单时只有一个下级菜单的显隐
          component: () => import('@/views/components/threemore/threemore22.vue'),
        }
        ]
      },
      {
        path: "threemore3",
        name: "threemore3",
        meta: {
          title: "三三",
          icon: "el-icon-upload",
        },
        component: () => import('@/views/components/threemore/threemore3.vue'),
      },
    ]
  }
];

const router = new VueRouter({
  routes
});

export default router;
