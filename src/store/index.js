import Vue from 'vue'
import Vuex from 'vuex'

//使用Vuex插件
Vue.use(Vuex)

//注意这里创建的是store对象，不是vuex对象
const store = new Vuex.Store({
	state: {
        id:"",
        alias:"",
        mail:"",
        logined: false
	},
	mutations: {},
	actions: {},
	getters: {
        getId(state){
            return state.id;
        },
        getAlias(state){
            return state.alias;
        },
        getMail(state){
            return state.mail;
        }
	},
	modules: {}
})

//导出对象
export default store
