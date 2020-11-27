import Vue from 'vue'
import VueRouter from 'vue-router'

const Home = () => import('views/home/Home')
const About = () => import('views/about/About')
const Blog = () => import('views/blog/Blog')
const Detail = () => import('views/detail/Detail')

Vue.use(VueRouter)

const routes = [
  {
    path: '',
    redirect: '/home'
  },
  {
    path: '/home',
    component: () => import('views/home/Home'),
    meta: {
      title: 'Home'
    }
  },
  //  跟上页码
  {
    path: '/blog',
    component: () => import('views/blog/Blog'),
    meta: {
      title: 'Blog'
    }
  },
  {
    path: '/detail',
    component: () => import('views/detail/Detail'),
    meta: {
      title: 'Blog Detail'
    }
  },
  {
    path: '/about',
    component: () => import('views/about/About'),
    meta: {
      title: 'About us'
    }
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

export default router
