<template>
	<div class="container" id="contentArea"> 
        <div class="content">
            <div class="card-columns" v-if="history[0]">
                <div class="card" v-for="item in history" :key="item.id" @click="toDetail(item.id)">
                    <!-- <img src="..." class="card-img-top" alt="..."> -->
                    <div class="card-body">
                    <h5 class="card-title">{{item.articleTitle}}</h5>
                    <p class="card-text">{{item.content}}</p>
                    </div>
                </div>
            </div>
        </div>
	</div>
</template>

<script>
	export default{
		name: "contentArea",
        data () {
            return {
                history : []
            }
        },
        methods : {
            //跳转详细页面
            toDetail : function(id){
                this.$router.push(
                        {
                            name: "contentDetail",
                            params : {
                                id : id
                            }
                        }
                    );
            }
        },
        //初始化方法
        mounted : function(){
            let datas = this.$data;
            this.$nextTick(function () {
                this.$http.get("/history/findByType/01").then(function (response) {
                    datas.history = response.data;
                })
            })
        }
	}
</script>
    
<style>
    .content{margin-top: 30px;}
</style>
