<template>
    <div class="container">
        <div id ="adminArticle">
            <!-- 多选区域 -->
            <h5 class="margin16">编辑文章</h5>
            <!-- 文章区域 -->
            <div class="input-group mb-3">
                <div class="input-group-prepend">
                    <span class="input-group-text" id="basic-addon1">文章标题</span>
                </div>
                <input type="text" class="form-control" v-model.lazy="article.articleTitle" placeholder="articleTitle" aria-label="articleTitle" aria-describedby="basic-addon1">
            </div>

            <div class="input-group mb-3">
                <div class="input-group-prepend">
                    <span class="input-group-text" id="basic-addon1">原文链接</span>
                </div>
                <input type="text" class="form-control" v-model.lazy="article.origArticleLink" placeholder="origArticleLink" aria-label="origArticleLink" aria-describedby="basic-addon1">
            </div>

             <div class="custom-file" style="margin : 0 0 16px 0 ">
                <input type="file" class="custom-file-input" id="validatedCustomFile" required>
                <label class="custom-file-label" for="validatedCustomFile">mainImage</label>
                <div class="invalid-feedback">Example invalid custom file feedback</div>
            </div>
            

            <div class="margin16">
                <div id="summernote" style="with:100%"></div>
            </div>

           <div id="summernote"></div>

             <!-- 多选区域 -->
            <h5 class="margin16">文章类型类型</h5>
            <div class="margin16">
                <select class="custom-select" v-model.lazy="article.type">
                    <option value="">选择</option>
                    <option v-for="item in gGode" :key="item.code" :value="item.code">
                        {{item.codeName}}
                    </option>
                    <!-- <option value="1">One</option>
                    <option value="2">Two</option>
                    <option value="3">Three</option> -->
                </select>
            </div>
            <p style="color : #007bff">如果没有视频不用编辑</p>
            <!-- 视频作者名称登录 -->
            <div class="input-group mb-3">
                <div class="input-group-prepend">
                    <span class="input-group-text" id="basic-addon1">视频作者名称</span>
                </div>
                <input type="text" class="form-control" v-model.lazy="article.videoOwnerName" placeholder="videoOwnerName" aria-label="videoOwnerName" aria-describedby="basic-addon1">
            </div>
            <!-- 视频作者主页 -->
            <div class="input-group mb-3">
                <div class="input-group-prepend">
                    <span class="input-group-text" id="basic-addon1">视频作者主页</span>
                </div>
                <input type="text" class="form-control" v-model.lazy="article.videoOwnerPage" placeholder="videoOwnerPage" aria-label="videoOwnerPage" aria-describedby="basic-addon1">
            </div>
            <!-- 视频登录区域 -->
           <div class="input-group">
                <div class="input-group-prepend">
                    <span class="input-group-text">视频嵌入代码</span>
                </div>
                <textarea class="form-control" aria-label="With textarea" v-model="article.videoOwnerLink"></textarea>
            </div>
        </div>
        <button class="btn btn-primary btn-lg btn-block" @click="save">SAVE</button>
    </div>
</template>

<script>


export default {
    name: 'adminArticle',
    data() {
        return{
            article:{
                id: "",
                userId:"",
                //标题
                articleTitle:"",
                //原文链接
                origArticleLink:"",
                //主图片
                mainImage:"",
                //文章内容
                content:"",
                //用户ID
                //文章类型
                type:"",
                //视频作者主页
                videoOwnerPage:"",
                //视频作者名称
                videoOwnerName:"",
                //视频嵌入代码
                videoOwnerLink:""
            },
            gGode:{
                code : "",
                codeName : ""
            }
        }
    },
    methods: {
        //插入 & 保存
        save : function(){
            let data = this.$data
            this.$data.article.userId = this.$store.state.id;
            this.$data.article.content = $('#summernote').summernote('code');
            this.$http.post("/history/save",this.$data.article,
                {
                    headers:{
                        "Content-Type":"application/json",
                    }
                }
            ).then(function(response){
                data.article = response.data;
                alert("保存成功");
            })
        }
    },
     //初始化方法
    mounted : function(){
        let datas = this.$data;
        this.$nextTick(function () {
            this.$http.get("/gcode/codes/01").then(function (response) {
                datas.gGode = response.data;
                console.log(datas.gGode);
            })
        })

        //SummerNote
        $('#summernote').summernote({
            height: 300,
            minHeight: 100,
        });
    }
    
}
</script>

<style>
    #adminArticle{
        margin: 20px 0;
        background-color: white;
    }
    .margin16{
        margin : 0 0 16px 0;
    }
</style>