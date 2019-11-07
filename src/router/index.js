import Vue from 'vue'
import Router from 'vue-router'
// import store from '@/store'

Vue.use(Router)

import Layout from '../layout'
//import Hello from '../components/HelloWorld'

/**
 * 路由相关属性说明
 * hidden: 当设置hidden为true时，意思不在sideBars侧边栏中显示
 * mete{
 * title: xxx,  设置sideBars侧边栏名称
 * icon: xxx,  设置ideBars侧边栏图标
 * noCache: true  当设置为true时不缓存该路由页面
 * }
 */

// 通用路由
export const currencyRoutes = [{
    path: '/',
    name: 'Home',
    component: Layout,
  },
  {
    path: '/login',
    name: 'Login',
    component: () => import('@/views/login'),
    meta: { title: '登陆页' },
    hidden: true
  }
]

const createRouter = () => {
  return new Router({
    routes: currencyRoutes,
    scrollBehavior() {
      return {
        x: 0,
        y: 0
      }
    }
  })
}

const router = createRouter()

export default router