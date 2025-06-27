import {createRouter, createWebHashHistory, type RouteRecordRaw} from 'vue-router';

const routes: RouteRecordRaw[] = [
    {path: '/', name: 'Home', component: () => import('../views/Home.vue')},
    {path: '/error-reboot', name: 'Error_Reboot', component: () => import('../views/Game-Error_Reboot.vue')}
];

const router = createRouter({
    history: createWebHashHistory(import.meta.env.BASE_URL),
    routes
});
export default router;