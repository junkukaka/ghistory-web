<template>
    <div class="container">
        <div class="clearfix" style="padding:8px 0">
            <h5 style="float:left">共同代码管理</h5>
            <button  type="button" class="btn btn-primary btn-sm" style="float:right"
                    data-target="#exampleModal" data-toggle="modal">add code</button>
        </div>
        <table class="table table-striped">
            <thead>
                <tr>
                    <th scope="col">ty</th>
                    <th scope="col">tyName</th>
                    <th scope="col">code</th>
                    <th scope="col">codeName</th>
                </tr>
            </thead>
            <tbody>
                <tr v-for="item in codes" :key="item.id" @click="editCode(item)" data-toggle="modal" data-target="#exampleModal">
                    <th><span>{{item.ty}}</span></th>
                    <td><span>{{item.tyName}}</span></td>
                    <td><span>{{item.code}}</span></td>
                    <td><span>{{item.codeName}}</span></td>
                </tr>
            </tbody>
        </table>

        <!-- Modal -->
        <div class="modal fade" id="exampleModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
            <div class="modal-dialog">
                <div class="modal-content">
                <div class="modal-header">
                    <h5 class="modal-title" id="exampleModalLabel">{{tmpCode.tyName}} :: {{tmpCode.codeName}}</h5>
                    <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                    <span aria-hidden="true">&times;</span>
                    </button>
                </div>
                <div class="modal-body">

                    <div class="input-group mb-3">
                        <div class="input-group-prepend">
                            <span class="input-group-text" id="basic-addon1">ty</span>
                        </div>
                        <input type="text" class="form-control" aria-describedby="basic-addon1" v-model.lazy="tmpCode.ty">
                    </div>

                    <div class="input-group mb-3">
                        <div class="input-group-prepend">
                            <span class="input-group-text" id="basic-addon1">tyName</span>
                        </div>
                        <input type="text" class="form-control" aria-describedby="basic-addon1" v-model.lazy="tmpCode.tyName">
                    </div>

                    <div class="input-group mb-3">
                        <div class="input-group-prepend">
                            <span class="input-group-text" id="basic-addon1">code</span>
                        </div>
                        <input type="text" class="form-control" aria-describedby="basic-addon1" v-model.lazy="tmpCode.code">
                    </div>

                    <div class="input-group mb-3">
                        <div class="input-group-prepend">
                            <span class="input-group-text" id="basic-addon1">codeName</span>
                        </div>
                        <input type="text" class="form-control" aria-describedby="basic-addon1" v-model.lazy="tmpCode.codeName">
                    </div>

                </div>
                <div class="modal-footer">
                    <button type="button" class="btn btn-secondary" data-dismiss="modal">delete</button>
                    <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
                    <button type="button" class="btn btn-primary">Save changes</button>
                </div>
                </div>
            </div>
        </div>

    </div>    
</template>

<script>
export default {
    name: 'codeManager',
    data () {
        return {
            codes : null,
            tmpCode : {
                id: "",
                ty:"",
                tyName:"",
                code : "",
                codeName : ""
            },
        }
    },
    methods : {
        editCode(item){
            this.$data.tmpCode = item;
        }
    },
    //初始化方法
    mounted : function(){
        let datas = this.$data;
        this.$nextTick(function () {
            this.$http.get("/gcode/codes/findAll").then(function (response) {
                datas.codes = response.data;
            })
        })
    }
}
</script>

<style>
</style>