
const routes = [
  {
    path: '/',
    component: () => import('layouts/Layout.vue'),
    children: [
      { path: '/', component: () => import('pages/Silos.vue') },
      { path: '/termometria', component: () => import('pages/Termometria.vue') },
      { path: '/estacao_meteorologica', component: () => import('pages/Estacao.vue') },
      { path: '/relatorios', component: () => import('pages/Relatorios.vue') },
      { path: '/configuracoes', component: () => import('pages/Configuracoes.vue') },
    ]
  },
  { path: '/study', component: () =>
  import('../../study/study.vue') },

]

// Always leave this as last one
if (process.env.MODE !== 'ssr') {
  routes.push({
    path: '*',
    component: () => import('pages/Error404.vue')
  })
}

export default routes
