// router.js
import { createRouter, createWebHistory } from 'vue-router';
import Peugeot from './components/Peugeot.vue';
import Renault from './components/Renault.vue';

const router = createRouter({
    history: createWebHistory(),
    routes: [
        {
            path: '/peugeot',
            name: 'Peugeot',
            component: Peugeot
        },
        {
            path: '/renault',
            name: 'Renault',
            component: Renault
        }
    ]
});

export default router;


