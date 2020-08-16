import Vue from 'vue'
import Router from 'vue-router'
Vue.use(Router)
const router = new Router({
  mode: 'history', // 如果没有这句话，或者它的值为 hash, 为/#/home,如果设置为history, 为/home， 2的脚手架默认为hash模式
  base: process.env.BASE_URL,
  routes: [
    { // 路由的重定向
      path: '/',
      redirect: '/home'
    },
    {
      path: '/home', // 浏览器地址输入/home时
      name: 'home', // 路由的名字----命名路由
      alias: '/ho', // 别名 --- 当你访问 /ho 时，其实和访问 /home是一致的
      // component: () => import('./views/home/index.vue') // 路由的懒加载
      components: {
        default: () => import('./views/home/index.vue')
      },
      meta: {
        keepAlive: true
      }
    }
  ]
})

// 全局导航守卫 ----- 一般不推荐使用 --- 后台管理系统
// router.beforeEach((to, from, next) => {
//   // console.log('from', from)
//   console.log(to)
//   // next() // 必须执行，否则终端路由的跳转
//   // 所有的页面如果需要判断用户已经登陆
//   // if (localStorage.getItem('isLogin') === 'ok') { // 会有内存溢出，登陆也是路由
//   //   next()
//   // } else {
//   //   next('/login')
//   // }
//   if (to.name === 'login' || to.name === 'register') { // 防止内存溢出 --- 为了登陆必须得先注册
//     next()
//   } else {
//     if (localStorage.getItem('isLogin') === 'ok') {
//       next()
//     } else {
//       next('/login')
//     }
//   }
// })
export default router
