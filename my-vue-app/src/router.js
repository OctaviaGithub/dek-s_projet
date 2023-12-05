// router.js
import { createRouter, createWebHistory } from 'vue-router';
import Peugeot from './components/Peugeot.vue';
import Renault from './components/Renault.vue';
import Nothing from './components/Nothing.vue';
import BasketVue from './components/BasketVue.vue';

import LoginForm from './components/LoginForm.vue';

const router = createRouter({
    history: createWebHistory(),
    routes: [
        /*{
                    path: '/',
                    redirect: '/LoginForm', // Redirige de la page d'accueil vers la page de connexion
                },*/
        {
            path: '/peugeot',
            name: 'Peugeot',
            component: Peugeot
        },
        {
            path: '/renault',
            name: 'Renault',
            component: Renault
        },
        {
            path: '/LoginForm',
            name: 'LoginForm',
            component: LoginForm
        },
        {
            path: '/',
            name: 'Nothing',
            component: Nothing
        },
        {
            path: '/cart',
            name: 'Cart',
            component: BasketVue
        }
    ]
});

export default router;