// router.js
import { createRouter, createWebHistory } from 'vue-router';
import Home from './components/Home.vue';
import More from './components/About.vue';

const router = createRouter({
    history: createWebHistory(),
    routes: [
        {
            path: '/',
            name: 'Home',
            component: Home
        },
        {
            path: '/more',
            name: 'More',
            component: More
        }
    ]
});

export default router;


