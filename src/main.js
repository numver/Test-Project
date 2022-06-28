import {
    createApp
} from 'vue'
import {
    createRouter,
    createWebHashHistory
} from 'vue-router'
import App from './App.vue'

const router = createRouter({
    history: createWebHashHistory(),
    routes: [{
            path: '/',
            redirect: '/a'
        },
        {
            path: '/a',
            name: 'A',
            component: () => import('./components/A.vue')
        },
        {
            path: '/b',
            name: 'B',
            component: () => import('./components/B.vue')
        },
    ]
})

const app = createApp(App)
app.use(router)
app.mount('#app')