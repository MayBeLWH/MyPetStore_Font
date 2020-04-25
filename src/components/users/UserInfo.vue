<template>
    <form @submit.prevent="saveUserInfo" method="post">
        <div class="layui-form-item">
            <label class="layui-form-label">用户名</label>
            <div class="layui-input-inline">
                <input type="text" readonly name="account" id="account" lay-verify="title" autocomplete="off" placeholder="" class="layui-input" v-model="manger.account" >
            </div>
        </div>
        <div class="layui-form-item">
            <label class="layui-form-label">名字</label>
            <div class="layui-input-inline">
                <input type="text"  name="username" id="username" lay-verify="title" autocomplete="off" placeholder="" class="layui-input" v-model="manger.username" required>
            </div>
        </div>
        <div class="layui-form-item">
            <label class="layui-form-label">联系方式</label>
            <div class="layui-input-inline">
                <input type="text"  name="telephone" id="telephone" lay-verify="title" autocomplete="off" placeholder="" class="layui-input" v-model="manger.telephone" required>
            </div>
        </div>
        <div class="layui-form-item">
            <label class="layui-form-label">地址</label>
            <div class="layui-input-inline">
                <input type="text"  name="address" id="address" lay-verify="title" autocomplete="off" placeholder="" class="layui-input" v-model="manger.address" required>
            </div>
        </div>
        <div class="layui-form-item">
            <label class="layui-form-label">城市</label>
            <div class="layui-input-inline">
                <input type="text"  name="city" id="city" lay-verify="title" autocomplete="off" placeholder="" class="layui-input" v-model="manger.city" required>
            </div>
        </div>
        <div class="layui-form-item">
            <label class="layui-form-label">权限</label>
            <div class="layui-input-inline">
                <input type="text"  name="power" id="power" lay-verify="title" autocomplete="off" placeholder="" class="layui-input" v-model="manger.power" required>
            </div>
        </div>
        <hr>
        <div class="layui-form-item timo-finally" align="center">
            <button type="submit" class="layui-btn ajax-submit" ><i class="fa fa-check-circle"></i> 保存</button>
            <button class="layui-btn btn-secondary close-popup" @click="closeClick"><i class="fa fa-times-circle"></i> 关闭</button>
        </div>
        <div v-show="isAlive" id="abc" style="background:navajowhite;padding:10px;
            position:absolute; left:40.5%; top:35%;
            width:200px; height:20px; z-index:1">
            {{message}}
        </div>
    </form>

</template>

<script>
    import {request} from "../../network/router";

    export default {
        name: "UserInfo",
        data(){
            return {
                manger: {
                    account: this.$store.state.manger.account,
                    password: this.$store.state.manger.password,
                    username: this.$store.state.manger.username,
                    city: this.$store.state.manger.city,
                    address: this.$store.state.manger.address,
                    telephone: this.$store.state.manger.telephone,
                    power: this.$store.state.manger.power,
                },
                isAlive:false,
                message:""
            }
        },
        methods:{
            saveUserInfo(){
                request({
                    url:'/users/userInfo',
                    params:{
                        account:this.manger.account,
                        password:this.manger.password,
                        username:this.manger.username,
                        city:this.manger.city,
                        address:this.manger.address,
                        power:this.manger.power,
                        telephone:this.manger.telephone,
                    }
                }).then(res =>{
                    if (res.data.judgement){
                        this.$store.commit("changeManger",this.manger)
                        this.message = "修改用户信息成功！"
                        this.isAlive= true
                        setTimeout(() => {
                            this.isAlive= false
                        },2000)
                    }else{
                        this.message = "修改用户信息失败！"
                        this.isAlive= true
                        setTimeout(() => {
                            this.isAlive= false
                        },2000)
                    }


                })
            },
            closeClick(){
                this.$router.push('/home/main')
                this.$store.commit('initManger')
            }
        }
    }
</script>

<style scoped>

</style>