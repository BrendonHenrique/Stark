
const routes = [
  {
    path: '/',
    component: () => import('layouts/Layout.vue'),
    children: [
      { path: '', component: () => import('pages/Index.vue') },
      { path: '/silos', component: () => import('pages/Silos.vue') },
      { path: '/estacao', component: () => import('pages/Estacao.vue') },
      { path: '/relatorios', component: () => import('pages/Relatorios.vue') },
      { path: '/configuracoes', component: () => import('pages/Configuracoes.vue') },
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
