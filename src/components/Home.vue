<template>
    <div class="layui-layout-body">
        <div class="layui-layout layui-layout-admin">
            <!-- 导航栏 -->
            <div class="layui-header">
                <a href="#" class="layui-logo">
                    <span class="layui-logo-mini">MyPetStore</span>
                    <span class="layui-logo-lg">MyPetStore后台</span>
                </a>
                <a class="side-toggle layui-layout-left" href="#">
                    <i class="layui-icon layui-icon-shrink-right"></i>
                    <i class="layui-icon layui-icon-spread-left"></i>
                </a>
                <ul class="layui-nav layui-layout-right">
                    <li class="layui-nav-item">
                        <a class="timo-screen-full" href="#">
                            <i class="fa layui-icon layui-icon-screen-full"></i>
                        </a>
                    </li>
                    <li class="layui-nav-item timo-nav-user">
                        <a class="timo-header-nickname" id="unameR" @click="userClick()">
                            <span class="layui-nav-more"></span>
                        </a>
                        <div>
                            <div class="timo-nav-child-box" v-show="userIsShow">
                                <div @click="userInfoClick">
                                    <a class="open-popup" style="color: black;margin-top: 1px;font-size: 17px">个人信息</a>
                                </div>
                                <div @click="changePassword">
                                    <a class="open-popup" style="color: black;margin-top: 1px;font-size: 17px">修改密码</a>
                                </div>
                                <div @click="loginOut">
                                    <a  style="color: black;margin-top: 1px;font-size: 17px">退出登录</a>
                                </div>
                            </div>
                        </div>
                    </li>
                </ul>
            </div>
            <!-- 侧边栏 -->
            <div id="side" class="layui-side layui-bg-black">
                <div class="layui-side-scroll">
                    <div class="layui-side-user">
                        <div>
                            <img class="layui-side-user-avatar" src="../assets/images/chat-left-picture.jpg" alt="头像">
                            <div>
                                <p class="layui-side-user-name">{{ $store.state.manger.username }}</p>
                                <p class="layui-side-user-designation">在线</p>
                            </div>
                        </div>
                    </div>
                    <!-- 导航区域 -->
                    <ul class="layui-nav layui-nav-tree" lay-filter="layui-nav-side">
                        <li class="layui-nav-item layui-this">
                            <a href="javascript:;" lay-url="home.html" lay-icon="true"><i class="layui-icon layui-icon-home"></i><span class="layui-nav-title">主页</span></a>
                        </li>
                        <li class="layui-nav-item">
                            <a href=""><i class="fa fa-cog"></i><span class="layui-nav-title">系统管理</span><span class="layui-nav-more"></span></a>
                            <dl class="layui-nav-child">
                                <dd><a href="" ><span class="layui-nav-title">&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp类型管理</span></a></dd>
                                <dd><a href="" ><span class="layui-nav-title">&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp类型归属管理</span></a></dd>
                                <dd><a href="" ><span class="layui-nav-title">&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp文本管理</span></a></dd>
                                <dd><a href="" ><span class="layui-nav-title">&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp合作公司管理</span></a></dd>
                                <dd><a href="" ><span class="layui-nav-title">&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp招聘信息管理</span></a></dd>
                                <dd><a href="" ><span class="layui-nav-title">&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp留言管理</span></a></dd>
                                <dd><a href="" ><span class="layui-nav-title">&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp用户管理</span></a></dd>
                            </dl>
                        </li>
                        <li class="layui-nav-item">
                            <a href=""><i class="fa fa-gavel"></i><span class="layui-nav-title">开发中心</span><span class="layui-nav-more"></span></a>
                            <dl class="layui-nav-child">
                                <dd><a href=""><span class="layui-nav-title">&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp表单构建</span></a></dd>
                            </dl>
                        </li>
                        <span class="layui-nav-bar"></span></ul>
                </div>
            </div>
            <!-- 主体区域 -->
            <div class="layui-body layui-tab layui-tab-brief" lay-allowclose="true" lay-filter="iframe-tabs">
                <!-- 标签栏 -->
                <ul class="layui-tab-title" style="display: none"><li lay-id="home.html" class="layui-this"><i class="layui-icon layui-icon-home"></i><span class="layui-nav-title">主页</span><i class="layui-icon layui-unselect layui-tab-close">ဆ</i></li></ul>
                <!-- 内容区域 -->
                <div class="layui-tab-content">
                    <div class="layui-tab-item layui-show">
                        <div class="layui-layout-iframe">
                            <router-view></router-view>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>

    import Main from "./common/Main";

    import UserInfo from "./users/UserInfo";
    import ChangePassword from "./users/ChangePassword";


    export default {
        name: "Home",
        data(){
            return {
                userIsShow:false,
            }
        },
        methods:{
            userClick(){
                this.userIsShow=!this.userIsShow
            },
            userInfoClick(){
                this.userIsShow=!this.userIsShow
                this.$router.push('/home/userInfo')
            },
            changePassword(){
                this.userIsShow=!this.userIsShow
                this.$router.push('/home/userPass')
            },
            loginOut(){
                this.userIsShow=!this.userIsShow
                this.$router.push('/users')
            },
        },
        components:{
            Main,
            UserInfo,
            ChangePassword
        }
    }
</script>

<style scoped>
    #side {
        width: 220px;
        top: 50px;
    }
    .layui-logo-lg {
        background-color: #007d71;
    }
   .timo-nav-child-box{
       position: fixed;
       z-index: auto;
       right: 10px;
       top: 60px;
   }
</style>