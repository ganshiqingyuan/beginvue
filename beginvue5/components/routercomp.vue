<template>
    <div>
        <h1>{{text}}</h1>
        <h2>store:{{this.$store.state.text}}</h2>
        <img src="../static/img/test.png"/>
        <Router-link to="/2">第二</Router-link>
    </div>
</template>

<script>
import {a} from "../static/lib/dict.js"
export default {
    data(){
        return{
            text:a
        }
    }
}
</script>

<style lang="less">
h2{
    color: red;
}
</style>


