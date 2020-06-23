<template>
    <nav class="navbar navbar-expand-lg navbar-dark bg-dark shadow">
        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarTogglerDemo01" aria-controls="navbarTogglerDemo01" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarTogglerDemo01">
            <div class="container">
                <ul class="navbar-nav mr-auto mt-2 mt-lg-0">
                    <li class="nav-item text-white">
                       <a class="navbar-brand" @click="toHome" href="#">The history of china</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="#" tabindex="-1" @click="toContentArea">历史上的今天</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="#" tabindex="-1" @click="toHome" >新闻 </a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link disabled" href="#" tabindex="-1" aria-disabled="true">Disabled</a>
                    </li>
                    
                     <li class="nav-item">
                          <router-link to="/contentDetail">详细页面</router-link>
                    </li>
                    <li class="nav-item">
                          <router-link to="/adminArticle">详细页面</router-link>
                    </li>
                </ul>
                <!-- <form class="form-inline my-2 my-lg-0">
                    <input class="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search">
                    <button class="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
                </form> -->

                <div class="my-lg-0 my-2">
                    <ul class="navbar-nav mr-auto mt-2 mt-lg-0">
                         <li class="nav-item" v-show="!$store.state.logined">
                            <a class="nav-link" href="#" tabindex="-1" @click="toLogin">登录</a>
                        </li>
                        <li class="nav-item" v-show="!$store.state.logined">
                            <a class="nav-link" href="#" tabindex="-1" @click="toRegistered">注册</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="#" tabindex="-1" @click="toUserInfo">
                            {{$store.getters.getAlias}}
                            </a>
                        </li>
                        <li class="nav-item" v-show="$store.state.logined">
                            <a class="nav-link" href="#" tabindex="-1" @click="toLogout">
                            退出登录
                            </a>
                        </li>
                    </ul>
                </div>

            </div>
        </div>
    </nav>
</template>

<script>

export default {
    name : 'topNav',
    methods : {
        toHome(){
            this.$router.push({name: 'home'})
        },
        //内容区域
        toContentArea(){
            this.$router.push({name : 'contentArea' , params :'asd'})
        },
        //登录页面
        toLogin(){
            this.$router.push({name: 'login'})
        },
        //注册页面
        toRegistered(){
            this.$router.push({name : 'registered'})
        },
        //退出登录
        toLogout(){
            //清空用户数据
            this.$store.state.id = "",
            this.$store.state.alias = "",
            this.$store.state.mail = "",
            this.$store.state.logined = false,
            this.$router.push({name: 'home'})
        },
        //会员个人信息
        toUserInfo(){
            this.$router.push({name : 'userInfo'})
        }

    }
}
</script>

<style>
 
</style>