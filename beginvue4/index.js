import Vue from "vue";
import App from "./app.vue"
import VueRouter from "vue-router"
Vue.use(VueRouter)
import router from "./route/route.js"
import store from "./store/store.js"




new Vue({
    data(){
        return{
            text:123,
        }
    },
    router,
    store,
    el:"#app",
    render:c=>c("App"),
    components:{
        App
    }   
    
    //template:"<h1>123123</h1>"
})
