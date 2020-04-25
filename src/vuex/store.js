import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
    state:{
        manger:{
            account:"",
            username:"",
            password:"",
            power:"",
            city:"",
            address:"",
            telephone:""
        }
    },
    getters:{

    },
    mutations:{
        changeManger(state,manger){
            state.manger.username=manger.username
            state.manger.password=manger.password
            state.manger.account=manger.account
            state.manger.power=manger.power
            state.manger.city=manger.city
            state.manger.address=manger.address
            state.manger.telephone=manger.telephone
        },
        initManger(state){
            state.manger.username=""
            state.manger.password=""
            state.manger.account=""
            state.manger.power=""
            state.manger.city=""
            state.manger.address=""
            state.manger.telephone=""
        }
    }
})