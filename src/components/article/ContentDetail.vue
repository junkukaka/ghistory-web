<template>
    <div class="container" id="contentDetail">
        <p class="font-weight-light" style="margin: 10px 0">
            历史 > Lighter weight text (relative to the parent element).
        </p>
        <p>
            <span class="badge badge-primary">Primary</span> 
            <span class="badge badge-secondary">Secondary</span> 
            <span class="badge badge-success">Success</span> 
        </p>
       <h1>{{history.articleTitle}}</h1>
       <p>By username <span>2019-09-19</span></p>

        <div class="embed-responsive embed-responsive-16by9" v-html="history.videoOwnerLink">
            {{history.videoOwnerLink}}
        </div>
        <p class="text-justify" style="font-size:18px;margin:10px 0 0 0" v-html="history.content">
            {{history.content}}
        </p>
        <p>bootstrap textarea html editor</p>
    </div>
</template>

<script>
export default {
    name: 'contentDetail',
    data () {
        return {
            history : {},
            member: {}
        }
    },
    methods : {
       // 回到主页
        toHome(){
            this.$router.push({name: "home"})
        }
    },
    //初始化方法
    mounted : function(){
            let datas = this.$data;
            let id = this.$route.params.id;
            //如果没有id 就不往下执行
            if(id == undefined){
                return false;
            }
            this.$nextTick(function () {
                this.$http.get("/history/findHistoryDetail/" + id).then(function (response) {
                    datas.history = response.data.history;
                    datas.member = response.data.member;
                })
            })
        }
}
</script>

<style>
</style>