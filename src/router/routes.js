
const routes = [
  {
    path: '/',
    component: () => import('layouts/Layout.vue'),
    children: [
      { path: '', component: () => import('pages/Index.vue') },
      { path: '/silos', component: () => import('pages/silos.vue') },
      { path: '/estacao', component: () => import('pages/estacao.vue') },
      { path: '/relatorios', component: () => import('pages/relatorios.vue') },
      { path: '/configuracoes', component: () => import('pages/configuracoes.vue') },
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
