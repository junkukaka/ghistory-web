<template>
    <div class="container">
        <div class="jumbotron jumbotron-fluid">
            <div class="container">
                <h1 class="display-4">Fluid jumbotron</h1>
                <p class="lead">This is a modified jumbotron that occupies the entire horizontal space of its parent.</p>
            </div>
        </div>
        <div id ="registered">
             <div class="form-group">
                <label for="username">Username</label>
                <input type="text" class="form-control" id="username" v-model.lazy="alias" aria-describedby="username" @blur="checkUserName">
                <small id="username" class="form-text text-muted">{{msgAlias}}</small>
            </div>    
            <div class="form-group">
                <label for="exampleInputEmail1">Email address</label>
                <input type="email" class="form-control" v-model.lazy="mail" id="exampleInputEmail1" aria-describedby="emailHelp" @blur="checkEmail">
                <small id="emailHelp" class="form-text text-muted">{{msgMail}}</small>
            </div>
            <div class="form-group">
                <label for="exampleInputPassword1">Password</label>
                <input type="password" class="form-control" v-model.lazy="password" id="exampleInputPassword1">
            </div>
            <div class="form-group">
                <label for="exampleInputPassword2">Confirm password</label>
                <input type="password" class="form-control" id="exampleInputPassword2">
            </div>
            <button type="button" class="btn btn-primary btn-lg btn-block" @click="postMember">Submit</button>
            <small id="emailHelp" class="form-text text-muted">{{msgRregister}}</small>
        </div>
    </div>
</template>

<script>


export default {
    name: 'registered',
    data() {
        return{
            alias:"username",
            mail: "xxx@gmail.com",
            password: "******",
            id : "",
            msgAlias:"",
            msgMail:"",
            msgRregister:""
        }   
    },
    methods :{
        // 用户名验证
        checkUserName(){
            let datas = this.$data;
            this.$http.get("/member/members/alias/" + this.$data.alias).then(function (response) {
                if(response.data != ""){
                    datas.msgAlias = "该用户名已经存在。";
                }else{
                    datas.msgAlias = "";
                }
            })

        },
        // 邮箱验证
        checkEmail(){
            let datas = this.$data;
            this.$http.get("/member/members/mail/" + this.$data.mail).then(function (response) {
                if(response.data != ""){
                    datas.msgMail = "该邮箱已经存在。"
                }else{
                    datas.msgMail = "";
                }
            })
        },
        // 会员注册
        postMember(){
            let datas = this.$data;
            let router = this.$router;
            this.$http.post("/member/members/register",
                {
                    alias : this.$data.alias,
                    mail : this.$data.mail,
                    password : this.$data.password
                },
                {
                    headers:{
                        "Content-Type":"application/json",
                    }
                }
            ).then(function (response) {
                //if return data hava id the regist is success
                if(response.data.id != undefined){
                    alert("注册成功");
                    //跳转欢迎页面
                    router.push({name:"welcome"});
                }else{
                    datas.msgRregister = "账号或者邮箱已被注册"
                }
            })
        },
        

    }
}
</script>

<style>
</style>