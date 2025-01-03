import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes: [
        {
            path: '/', name: 'home', component: () => import('../views/Home.vue'),
        },
        {
            path: '/about', name: 'about', component: () => import('../views/About.vue'),
        },
        {
            path: '/product', name: 'product', component: () => import('../views/Product.vue'),
        },
    ]
})



export default router