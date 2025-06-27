import {createRouter, createWebHashHistory, type RouteRecordRaw} from 'vue-router';
import Home from "./views/Home.vue";
import Game_Error_Reboot from "./views/Game-Error_Reboot.vue";

const routes: RouteRecordRaw[] = [
    {path: '/', name: 'Home', component: Home},
    {path: '/error-reboot', name: 'Error_Reboot', component: Game_Error_Reboot}
];

const router = createRouter({
    history: createWebHashHistory(import.meta.env.BASE_URL),
    routes
});
export default router;