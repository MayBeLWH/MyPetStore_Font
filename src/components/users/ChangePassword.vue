<template>
    <form @submit.prevent="changePassword">
        <div class="layui-form-item">
            <label class="layui-form-label">原密码</label>
            <div class="layui-input-inline">
                <input type="password" name="passwordDB" id="passwordDB" lay-verify="title" autocomplete="off" placeholder="" class="layui-input" v-model="oldPassword">
                <div id="pdw"></div>
            </div>
        </div>
        <div class="layui-form-item">
            <label class="layui-form-label">新密码</label>
            <div class="layui-input-inline">
                <input type="password" name="password" id="password" lay-verify="title" autocomplete="off" placeholder="" class="layui-input" v-model="newPassword">
                <div id="pw"></div>
            </div>
        </div>
        <div class="layui-form-item">
            <label class="layui-form-label">确认密码</label>
            <div class="layui-input-inline">
                <input type="password" name="password2" id="password2" lay-verify="title" autocomplete="off" placeholder="" class="layui-input" v-model="repeatPassword">
                <div id="pw2"></div>
            </div>
        </div>
        <hr>
        <div class="layui-form-item timo-finally" align="center">
            <button class="layui-btn "><i class="fa fa-check-circle"></i> 保存</button>
            <button class="layui-btn btn-secondary close-popup" @click="closeClick"><i class="fa fa-times-circle"></i> 关闭</button>
        </div>
        <div v-show="isAlive" id="abc" style="background:navajowhite;padding:10px;
            position:absolute; left:40.5%; top:16%;
            width:200px; height:20px; z-index:1">
            {{message}}
        </div>
    </form>
</template>

<script>
    import {request} from "../../network/router";

    export default {
        name: "ChangePassword",
        data(){
            return {
                oldPassword:this.$store.state.manger.password,
                newPassword:"",
                repeatPassword:"",
                isAlive:false,
                message:""
            }
        },
        methods:{
            changePassword(){
                if (this.newPassword == this.repeatPassword){
                    request({
                        url:'/users/userPass',
                        params:{
                            account:this.$store.state.manger.account,
                            password:this.newPassword
                        }
                    }).then(res =>{
                        console.log(res);
                        this.message = "修改密码成功！"
                        this.isAlive= true
                        setTimeout(() => {
                            this.isAlive= false
                        },2000)
                    })
                }else{
                    this.message = "修改的密码不一致！"
                    this.isAlive= true
                    setTimeout(() => {
                        this.isAlive= false
                    },2000)
                }
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