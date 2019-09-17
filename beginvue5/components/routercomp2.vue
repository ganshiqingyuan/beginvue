<template>
    <div>
        <h1>{{text}}</h1>
        <h2>第二个</h2>
        <img src="../static/img/test.png"/>
        <Router-link to="/3">第二</Router-link>
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