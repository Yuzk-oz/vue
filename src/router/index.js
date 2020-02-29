import Vue from 'vue'
import Router from 'vue-router'

const home = () =>
    import ('../view/home/home')
const animate = () =>
    import ('../view/animate/animate')
const anime = () =>
    import ('../view/anime/anime')
const music = () =>
    import ('../view/music/music')
const native = () =>
    import ('../view/native/native')
Vue.use(Router)
const routes = [{ //routes  必须要叫routes
        path: '',
        redirect: '/home'
    },
    {
        path: '/home',
        component: home
    },
    {
        path: '/animate',
        component: animate
    },
    {
        path: '/anime',
        component: anime
    },
    {
        path: '/music',
        component: music
    },
    {
        path: '/native',
        component: native
    }
]
export default new Router({
    routes,
    mode: 'history',
    linkActiveClass: 'active'
})