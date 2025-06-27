import {createRouter, createWebHistory} from 'vue-router';
import Home from '../views/Home.vue';
import Game_ER from '../views/Game-Error_Reboot.vue';
import i18n from '../i18n';

const routes = [
    {path: '/', name: 'Home', component: Home},
    {path: '/error-reboot', name: 'Game_ER', component: Game_ER}
];

const router = createRouter({
    history: createWebHistory(),
    routes
});

router.afterEach((_) => {
    const titleKey = 'app.title';
    document.title = i18n.global.t(titleKey);
});

export default router;