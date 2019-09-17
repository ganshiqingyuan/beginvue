//import routercomp from "../components/routercomp.vue"
import VueRouter from "vue-router"

export default new VueRouter({
    routes:[
                {   
                    name:'routercomp',
                    path:'/',
                    component:() => import("../components/routercomp.vue")
                },
                {   
                    name:'routercomp2',
                    path:'/2',
                    component:() => import("../components/routercomp2.vue")
                },
                {   
                    name:'routercomp3',
                    path:'/3',
                    component:() => import("../components/rout.vue")
                }
            ]
})