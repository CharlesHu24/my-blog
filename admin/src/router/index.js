import Vue from "vue";
import VueRouter from "vue-router";

Vue.use(VueRouter);

const router = new VueRouter({
  routes: [{
      path: "/login",
      name: "login",
      component: () => import( /* webpackChunkName: "login" */ '../views/manage/Login.vue'),
      meta: {
        isPublic: true
      }
    },
    {
      path: "/",
      name: "main",
      component: () => import( /* webpackChunkName: "main" */ '../views/manage/Main.vue'),
      children: [{
          path: "/categories/create",
          component: () => import( /* webpackChunkName: "category_edit" */ '../views/manage/CategoryEdit.vue'),
        },
        {
          path: "/categories/edit/:id",
          component: () => import( /* webpackChunkName: "category_edit" */ '../views/manage/CategoryEdit.vue'),
          props: true
        },
        {
          path: "/categories/list",
          component: () => import( /* webpackChunkName: "category_list" */ '../views/manage/CategoryList.vue'),
        },
        {
          path: "/articles/create",
          component: () => import( /* webpackChunkName: "article_edit" */ '../views/manage/ArticleEdit.vue'),
        },
        {
          path: "/articles/edit/:id",
          component: () => import( /* webpackChunkName: "article_edit" */ '../views/manage/ArticleEdit.vue'),
          props: true
        },
        {
          path: "/articles/list",
          component: () => import( /* webpackChunkName: "article_list" */ '../views/manage/ArticleList.vue'),
        },
        {
          path: "/comments/list",
          component: () => import( /* webpackChunkName: "comment_list" */ '../views/manage/CommentList.vue'),
          props: true
        },
        {
          path: "/links/create",
          component: () => import( /* webpackChunkName: "link_edit" */ '../views/manage/LinkEdit.vue'),
        },
        {
          path: "/links/edit/:id",
          component: () => import( /* webpackChunkName: "link_edit" */ '../views/manage/LinkEdit.vue'),
          props: true
        },
        {
          path: "/links/list",
          component: () => import( /* webpackChunkName: "link_list" */ '../views/manage/LinkList.vue'),
        },
        {
          path: "/messages/list",
          component: () => import( /* webpackChunkName: "message_list" */ '../views/manage/MessageList.vue'),
        },
        {
          path: "/message_users/list",
          component: () => import( /* webpackChunkName: "link_list" */ '../views/manage/MessageUserList.vue'),
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
        }
      ]
    }
  ],
  mode: 'history'
});

router.beforeEach((to, from, next) => {
  // if (!to.meta.isPublic && !localStorage.token) {
  //   return next('/login')
  // }
  next()
})
export default router;
