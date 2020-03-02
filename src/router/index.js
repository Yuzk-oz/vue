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
const nativeBarInf = () =>
    import ('../view/native/nativeBarItem/Information')
const nativeBarNat = () =>
    import ('../view/native/nativeBarItem/NativeAnimate')
const nativeBarPup = () =>
    import ('../view/native/nativeBarItem/Puppet')
const nativeBarRec = () =>
    import ('../view/native/nativeBarItem/Recommend')
const nativeBarRecNat = () =>
    import ('../view/native/nativeBarItem/RecommendNative')
Vue.use(Router)
const routes = [{ //routes  必须要叫routes
        path: '/',
        redirect: '/home'
    },
    {
        path: '/home',
        component: home,
        meta: { title: '首页' }
    },
    {
        path: '/animate',
        component: animate,
        meta: { title: '动画' }
    },
    {
        path: '/anime',
        component: anime,
        meta: { title: '番剧' }
    },
    {
        path: '/music',
        component: music,
        meta: { title: '音乐' }
    },
    {
        path: '/native',
        component: native,
        meta: { title: '国创' },
        children: [{
                path: '/',
                redirect: 'nativeBarRec'
            }, {
                path: 'nativeBarRec',
                component: nativeBarRec
            }, {
                path: 'nativeBarNat',
                component: nativeBarNat
            }, {
                path: 'nativeBarRecNat',
                component: nativeBarRecNat
            }, {
                path: 'nativeBarPup',
                component: nativeBarPup
            },
            {
                path: 'nativeBarInf',
                component: nativeBarInf
            }
        ]
    }
]
export default new Router({
        routes,
        mode: 'history',
        linkActiveClass: 'active'
    })
    // Router.beforeEach((to, from, next) => {
    //     document.title = to.matched[0].title
    //     next()
    // })