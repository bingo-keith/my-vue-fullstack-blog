/**
 * meta 可配置参数
 * @param {boolean} icon 页面icon
 * @param {boolean} keepAlive 是否缓存页面
 * @param {string} title 页面标题
 */
export default [
  {
    path: '/',
    redirect: '/index'
  },
  {
    path: '/index',
    name: 'index',
    component: () => import('@/views/index/index.vue'),
    meta: {
      icon: '',
      keepAlive: false,
      title: 'index',
      requireAuth: true
    }
  },
  {
    path: '/test',
    name: 'test',
    component: () => import('@/views/test/test.vue'),
    meta: {
      icon: '',
      keepAlive: false,
      title: 'test',
      requireAuth: true
    }
  }
]
