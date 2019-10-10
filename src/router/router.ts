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
      title: 'index'
    }
  },
  {
    path: '/about',
    name: 'about',
    component: () => import('@/views/about/about.vue'),
    meta: {
      icon: '',
      keepAlive: false,
      title: 'about'
    }
  },
  {
    path: '/project',
    name: 'project',
    component: () => import('@/views/project/project.vue'),
    meta: {
      icon: '',
      keepAlive: false,
      title: 'project'
    }
  },
  {
    path: '/advance',
    name: 'advance',
    component: () => import('@/views/advance/advance.vue'),
    meta: {
      icon: '',
      keepAlive: false,
      title: 'advance'
    }
  },
  {
    path: '/essay',
    name: 'essay',
    component: () => import('@/views/essay/essay.vue'),
    meta: {
      icon: '',
      keepAlive: false,
      title: 'essay'
    }
  },
  {
    path: '/contact',
    name: 'contact',
    component: () => import('@/views/contact/contact.vue'),
    meta: {
      icon: '',
      keepAlive: false,
      title: 'contact'
    }
  },
  {
    path: '/test',
    name: 'test',
    component: () => import('@/views/test/test.vue'),
    meta: {
      icon: '',
      keepAlive: false,
      title: 'test'
    }
  }
]
