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
                <input type="text" class="form-control" placeholder="articleTitle" aria-label="articleTitle" aria-describedby="basic-addon1">
            </div>
            <div class="input-group mb-3">
                <div class="input-group-prepend">
                    <span class="input-group-text" id="basic-addon1">原文链接</span>
                </div>
                <input type="text" class="form-control" placeholder="origArticleLink" aria-label="origArticleLink" aria-describedby="basic-addon1">
            </div>
            <div class="custom-file margin16">
                <input type="file" class="custom-file-input" id="validatedCustomFile" required>
                <label class="custom-file-label" for="validatedCustomFile">main image</label>
                <div class="invalid-feedback">Example invalid custom file feedback</div>
            </div>
            <div class="input-group margin16">
                <div class="input-group-prepend">
                    <span class="input-group-text">文章内容</span>
                </div>
                <textarea class="form-control" aria-label="With textarea" style="height:200px"></textarea>
            </div>
             <!-- 多选区域 -->
            <h5 class="margin16">文章类型类型</h5>
            <div class="margin16">
                <select class="custom-select" multiple>
                    <option selected>Open this select menu</option>
                    <option value="1">One</option>
                    <option value="2">Two</option>
                    <option value="3">Three</option>
                </select>
            </div>
            <p style="color : #007bff">如果没有视频不用编辑</p>
            <!-- 视频作者名称登录 -->
            <div class="input-group mb-3">
                <div class="input-group-prepend">
                    <span class="input-group-text" id="basic-addon1">视频作者名称</span>
                </div>
                <input type="text" class="form-control" placeholder="videoOwnerName" aria-label="videoOwnerName" aria-describedby="basic-addon1">
            </div>
            <!-- 视频作者名称登录 -->
            <div class="input-group mb-3">
                <div class="input-group-prepend">
                    <span class="input-group-text" id="basic-addon1">视频作者主页</span>
                </div>
                <input type="text" class="form-control" placeholder="videoOwnerPage" aria-label="videoOwnerPage" aria-describedby="basic-addon1">
            </div>
            <!-- 视频登录区域 -->
           <div class="input-group">
                <div class="input-group-prepend">
                    <span class="input-group-text">视频嵌入代码</span>
                </div>
                <textarea class="form-control" aria-label="With textarea"></textarea>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'adminArticle'
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