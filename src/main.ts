import "./main.css";

import {createApp} from 'vue'
import { createRouter, createWebHashHistory } from 'vue-router'
import ui from '@nuxt/ui/vue-plugin'

import App from './App.vue'
import HomeView from "@/HomeView.vue";

const router = createRouter({
    routes: [
        { path: '/', component: HomeView }
    ],
    history: createWebHashHistory()
})

createApp(App).use(router).use(ui).mount('#app')
