import routercomp from "../components/routercomp.vue"
import VueRouter from "vue-router"

export default new VueRouter({
    routes:[
                {   
                    name:'routercomp',
                    path:'/',
                    component:routercomp
                }
            ]
})