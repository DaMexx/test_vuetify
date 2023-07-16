import { createRouter, createWebHistory } from 'vue-router'

const routes = [
  {
    path: '/',
    name: 'Vuetify',
    component: ()=> import('@/views/HomeView.vue'),
  },
  {
    path: '/buttons',
    name: 'buttons',
    component: ()=> import('@/views/ButtonsView.vue'),
  },
  {
    path: '/cards',
    name: 'cards',
    component: ()=> import('@/views/CardsView'),
  },
  {
    path: '/chips',
    name: 'Chips',
    component: ()=> import('@/views/ChipsView'),
  },
  {
    path: '/dialogs',
    name: 'dialogs',
    component: ()=> import('@/views/DialogsView'),
  },
  {
    path: '/expansion-panel',
    name: 'expansion-panel',
    component: ()=> import('@/views/ExpansionPanelsView'),
  },
  {
    path: '/list',
    name: 'list',
    component: ()=> import('@/views/ListsView'),
  },
  {
    path: '/menus',
    name: 'menus',
    component: ()=> import('@/views/MenusView'),
  },
  {
    path: '/overlays',
    name: 'overlays',
    component: ()=> import('@/views/OverlaysView'),
  },
  {
    path: '/sheets',
    name: 'sheets',
    component: ()=> import('@/views/SheetsView'),
  },
  {
    path: '/toolbars',
    name: 'toolbars',
    component: ()=> import('@/views/ToolbarsView'),
  },
  {
    path: '/tooltips',
    name: 'tooltips',
    component: ()=> import('@/views/TooltipsView'),
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
})
router.beforeEach((to, from, next) => {
  document.title = to.name;
  next();
});
export default router
