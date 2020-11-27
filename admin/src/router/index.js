import Vue from "vue";
import VueRouter from "vue-router";

Vue.use(VueRouter);

const routes = [
  {
    path: "/login",
    name: "login",
    component: () => import( /* webpackChunkName: "login" */ '../views/login/Login.vue'),
    meta: {
      isPublic: true
    }
  },
  {
    path: "/register",
    name: "register",
    component: () => import('../views/login/Register.vue')
  },
  {
    path: "/admin",
    name: "main",
    component: () => import( /* webpackChunkName: "main" */ '../views/main/Main.vue'),
    children: [
      {
        path: "/admin",
        component: () => import('../views/main/Welcome')
      },
      {
        path: "/categories/create",
        component: () => import( /* webpackChunkName: "category_edit" */ '../views/main/CategoryEdit.vue'),
      },
      {
        path: "/categories/edit/:id",
        component: () => import( /* webpackChunkName: "category_edit" */ '../views/main/CategoryEdit.vue'),
        props: true
      },
      {
        path: "/categories/list",
        component: () => import( /* webpackChunkName: "category_list" */ '../views/main/CategoryList.vue'),
      },
      {
        path: "/articles/create",
        component: () => import( /* webpackChunkName: "article_edit" */ '../views/main/ArticleEdit.vue'),
      },
      {
        path: "/articles/edit/:id",
        component: () => import( /* webpackChunkName: "article_edit" */ '../views/main/ArticleEdit.vue'),
        props: true
      },
      {
        path: "/articles/list",
        component: () => import( /* webpackChunkName: "article_list" */ '../views/main/ArticleList.vue'),
      },
      {
        path: "/comments/list",
        component: () => import( /* webpackChunkName: "comment_list" */ '../views/main/CommentList.vue'),
        props: true
      },
      {
        path: "/links/create",
        component: () => import( /* webpackChunkName: "link_edit" */ '../views/main/LinkEdit.vue'),
      },
      {
        path: "/links/edit/:id",
        component: () => import( /* webpackChunkName: "link_edit" */ '../views/main/LinkEdit.vue'),
        props: true
      },
      {
        path: "/links/list",
        component: () => import( /* webpackChunkName: "link_list" */ '../views/main/LinkList.vue'),
      },
      {
        path: "/messages/list",
        component: () => import( /* webpackChunkName: "message_list" */ '../views/main/MessageList.vue'),
      },
      {
        path: "/message_users/list",
        component: () => import( /* webpackChunkName: "link_list" */ '../views/main/MessageUserList.vue'),
      },
      {
        path: "/admin_users/create",
        component: () => import( /* webpackChunkName: "admin_edit" */ '../views/settings/AdminUserEdit.vue'),
      },
      {
        path: "/admin_users/edit/:id",
        component: () => import( /* webpackChunkName: "admin_edit" */ '../views/settings/AdminUserEdit.vue'),
        props: true
      },
      {
        path: "/admin_users/list",
        component: () => import( /* webpackChunkName: "admin_list" */ '../views/settings/AdminUserList.vue'),
      },
      {
        path: "/users/list",
        component: () => import('../views/settings/UserList'),
      },
      {
        path: "/edit/passwd",
        component: () => import('../views/settings/EditPasswd'),
      }
    ]
  }
]

const router = new VueRouter({
  routes,
  mode: 'history'
})

router.beforeEach((to, from, next) => {
  document.title = to.matched[0].meta.title

  next()
})

export default router;
