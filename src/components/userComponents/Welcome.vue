<template>
    <div class="jumbotron container"> 
        <h1 class="display-4">Hello, {{$store.state.alias}}!</h1>
        <p class="lead">This is a simple hero unit, a simple jumbotron-style component for calling extra attention to featured content or information.</p>
        <hr class="my-4">
        <p>It uses utility classes for typography and spacing to space content out within the larger container.</p>
        <a class="btn btn-primary btn-lg" href="#" role="button" @click="toHome">返回主页</a>
    </div>
</template>

<script>
export default {
    name: 'welcome',
    data () {
        return {
            alias : ""
        }
    },
    methods : {
       // 回到主页
        toHome(){
            this.$router.push({name: "home"})
        }
    }
}
</script>

<style>
</style>