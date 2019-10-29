
const routes = [
  {
    path: '/',
    component: () => import('layouts/Layout.vue'),
    children: [
      { path: '/', component: () => import('pages/Silos.vue') },
      { path: '/termometria', name:'termometria', component: () => import('pages/Termometria.vue') },
      { path: '/estacao_meteorologica', name:'estacao_meteorologica', component: () => import('pages/Estacao.vue') },
      { path: '/historicos', name:'historicos', component: () => import('pages/Historicos.vue') },
      { path: '/configuracoes', name:'configuracoes', component: () => import('pages/Configuracoes.vue') },
    ]
  }
]

// Always leave this as last one
if (process.env.MODE !== 'ssr') {
  routes.push({
    path: '*',
    component: () => import('pages/Error404.vue')
  })
}

export default routes
