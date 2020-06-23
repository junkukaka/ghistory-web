<template>
    <div class="container">
        <div class="jumbotron jumbotron-fluid">
            <div class="container">
                <h1 class="display-4">Fluid jumbotron</h1>
                <p class="lead">This is a modified jumbotron that occupies the entire horizontal space of its parent.</p>
            </div>
        </div>
        <div id ="login">
            <div class="form-group">
                <label for="exampleInputEmail1">Email address</label>
                <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" v-model.lazy="mail">
                <small id="emailHelp" class="form-text text-muted">{{msg}}</small>
            </div>
            <div class="form-group">
                <label for="exampleInputPassword1">Password</label>
                <input type="password" class="form-control" id="exampleInputPassword1" v-model.lazy="password">
            </div>
            <!-- <div class="form-group form-check">
                <input type="checkbox" class="form-check-input" id="exampleCheck1">
                <label class="form-check-label" for="exampleCheck1">Check me out</label>
            </div> -->
            <button class="btn btn-primary btn-lg btn-block" @click="login">Login</button>
        </div>
    </div>
</template>

<script>
import store from '../../store/index.js'
import router from '../../router/index.js'
export default {
    name: 'login',
    data () {
        return {
            mail : "",
            password : "",
            id : "",
            msg : ""
        }
    },
    methods : {
        // 登录会员
        login:function(){
            let datas = this.$data;
            let options = this.$options;
            //HTTP GET方法请求可以简写如下：
            this.$http.post("/member/login",
            {
                mail : this.$data.mail,
                password : this.$data.password
            },
            {
                headers:{
                    "Content-Type":"application/json",
                }
            })
            .then(function (response) {
                console.log(response.data.alias);
                if(response.data == ""){
                    datas.msg = "账号或者密码错误"
                }else{
                     //成功 存放到全局变量
                    store.state.alias = response.data.alias;
                    store.state.mail = response.data.mail;
                    store.state.id = response.data.id;
                    store.state.logined = true;
                    //去欢迎页面
                    options.methods.toWelecome();
                }
               
            }).catch(function (error) {
                console.log(error);
            });
        },
        toWelecome:function(){
            router.push({name : "welcome"});
        }
    }
}
</script>

<style>
</style>