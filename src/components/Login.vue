<template>
    <div  class="layui-layout-login">
        <div class="login-bg">
            <div class="cover"><h1 style="color:#FBFBFB;" align="center">MyPetStore后台管理系统</h1></div>
        </div>
        <div class="login-content">
            <h1 class="login-box-title"><i class="fa fa-fw fa-user"></i>登录</h1>
            <div class="layui-form-item" id="unameD">
                <label class="layui-icon layui-icon-username" for="name"></label>
                <input class="layui-input" type="text" name="name" id="name" placeholder="用户名" v-model="username">
                <div id="unameW"></div>
            </div>
            <div class="layui-form-item" id="upassD">
                <label class="layui-icon layui-icon-password" for="password"></label>
                <input class="layui-input" type="password" name="password" id="password" placeholder="密码" v-model="password">
                <div id="upassW"></div>
            </div>
            <div class="layui-form-item">
                <input type="checkbox" name="rememberMe" title="记住我" lay-skin="primary">
                <div class="layui-unselect layui-form-checkbox" lay-skin="primary">
                    <span>记住我</span>
                    <i class="layui-icon layui-icon-ok"></i>
                </div>
                <a class="layui-layout-right forget-password" href="javascript:alert('请联系超级管理员！')">忘记密码?</a>
            </div>
            <button class="layui-btn layui-btn-fluid" @click="login()"><i class="fa fa-sign-in fa-lg fa-fw"></i> 登录
            </button>
        </div>
        <div v-show="isAlive" id="abc" style="background:navajowhite;padding:10px;
            position:absolute; left:40.5%; top:54%;
            width:200px; height:20px; z-index:1">
            {{message}}
        </div>
    </div>
</template>

<script>
    import {request} from "../network/router";

    export default {
        name: "Login",
        data(){
            return {
                username:"",
                password:"",
                isAlive:false,
                message: "",
            }
        },
        methods:{
            login(){
                const Router = this.$router;
                let account=this.username
                let password=this.password
                request({
                    url:"/users",
                    params:{
                        account,
                        password
                    }
                }).then(res =>{
                    console.log(res);
                    if (res.data.judgement){
                        this.message = "登陆成功！"
                        this.$store.commit("changeManger",res.data.data)
                        Router.push('/home')
                        console.log(this.$store.state.manger);
                    }else{
                        this.message = "密码或者用户错误！"
                        this.isAlive= true
                        setTimeout(() => {
                            this.isAlive= false
                        },2000)
                    }
                })
            }
        }
    }
</script>

<style scoped>
    body {
        line-height: 24px;
        font: 14px Helvetica Neue,Helvetica,PingFang SC,\5FAE\8F6F\96C5\9ED1,Tahoma,Arial,sans-serif;
    }
    .layui-layout-login .login-bg {
        background-color: #e7e7e7;
        position: fixed;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        z-index: -1;
    }
    .layui-layout-login .login-bg .cover {
        background-color: #009688;
        height: 50%;
    }
    .layui-layout-login .login-content {
        width: 250px;
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%,-50%);
        background-color: #ffffff;
        padding: 40px;
        padding-top: 32px;
        -webkit-box-shadow: 0px 3px 20px 3px rgba(0, 0, 0, 0.15);
        box-shadow: 0px 3px 20px 3px rgba(0, 0, 0, 0.15);
    }
    .layui-layout-login .login-box-title {
        font-size: 26px;
        margin-bottom: 20px;
        text-align: center;
        color: #444444;
    }
    .fa-fw {
        width: 1.28571429em;
        text-align: center;
    }
    .fa {
        display: inline-block;
        font: normal normal normal 14px/1 FontAwesome;
        font-size: inherit;
        text-rendering: auto;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
    }
    i {
        font-style: italic;
    }
    .layui-layout-login .layui-form-item {
        position: relative;
        margin-bottom: 20px;
        min-height: 18px;
    }

    .layui-form-item {
        margin-bottom: 15px;
        clear: both;
        *zoom: 1;
    }
    .layui-layout-login .layui-form-item label {
        position: absolute;
        top: 0;
        left: 0;
        font-size: 18px;
        width: 38px;
        line-height: 38px;
        text-align: center;
        color: #999999;
    }

    .layui-icon {
        font-family: layui-icon!important;
        font-size: 16px;
        font-style: normal;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
    }
    .layui-btn, .layui-input, .layui-select, .layui-textarea, .layui-upload-button {
        outline: 0;
        -webkit-appearance: none;
        transition: all .3s;
        -webkit-transition: all .3s;
        box-sizing: border-box;
    }
    .layui-layout-login .layui-form-item input[type=text], .layui-layout-login .layui-form-item input[type=password] {
        padding-left: 36px;
        border: 1px solid #ddd;
        transition: all 0s;
        -webkit-transition: all 0s;
    }

    .layui-input, .layui-textarea {
        display: block;
        width: 100%;
        padding-left: 10px;
    }
    .layui-input, .layui-select, .layui-textarea {
        height: 38px;
        line-height: 1.3;
        line-height: 38px\9;
        border-width: 1px;
        border-style: solid;
        background-color: #fff;
        border-radius: 2px;
    }
    .layui-layout-login .layui-form-item .layui-form-checkbox {
        margin-top: 0;
    }
    .layui-form-item .layui-form-checkbox[lay-skin=primary] {
        margin-top: 10px;
    }

    .layui-form-checkbox[lay-skin=primary] {
        height: auto!important;
        line-height: normal!important;
        border: none!important;
        margin-right: 0;
        padding-right: 0;
        background: 0 0;
    }
    .layui-form-item .layui-form-checkbox {
        margin-top: 4px;
    }
    .layui-form-checkbox {
        position: relative;
        height: 30px;
        line-height: 30px;
        margin-right: 10px;
        padding-right: 30px;
        cursor: pointer;
        font-size: 0;
        -webkit-transition: .1s linear;
        transition: .1s linear;
        box-sizing: border-box;
    }
    .layui-form-checkbox, .layui-form-checkbox *, .layui-form-switch {
        display: inline-block;
        vertical-align: middle;
    }
    .layui-form-checkbox, .layui-form-select dl dd.layui-disabled {
        background-color: #fff;
    }
    .layui-layout-login .layui-form-item .forget-password {
        color: #009688;
    }
    .layui-layout-right {
        position: absolute!important;
        right: 0;
        top: 0;
    }
    .layui-btn-fluid {
        width: 100%;
    }

    .layui-btn {
        display: inline-block;
        height: 38px;
        line-height: 38px;
        padding: 0 18px;
        background-color: #009688;
        color: #fff;
        white-space: nowrap;
        text-align: center;
        font-size: 14px;
        border: none;
        border-radius: 2px;
        cursor: pointer;
    }
    .layui-btn, .layui-input, .layui-select, .layui-textarea, .layui-upload-button {
        outline: 0;
        -webkit-appearance: none;
        transition: all .3s;
        -webkit-transition: all .3s;
        box-sizing: border-box;
    }
    .layui-btn, .layui-disabled, .layui-icon, .layui-unselect {
        -webkit-user-select: none;
        -ms-user-select: none;
        -moz-user-select: none;
    }
    .layui-btn, .layui-edge, .layui-inline, img {
        vertical-align: middle;
    }
</style>