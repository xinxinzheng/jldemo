<template>
     <div id="app" class="app">
        <jl-header></jl-header>
        <div class="content">
            <basic-info></basic-info>
            <job-defi></job-defi>
            <education></education>
            <work-back></work-back>
            <technology></technology>
            <award></award>
            <credential></credential>
            <like></like>
            <my-comment></my-comment>
        </div>
    </div>
</template>
<script>
    import jlHeader from './components/header'
    import basicInfo from './components/basicinfo'
    import jobDefi from './components/jobdefi'
    import education from './components/education'
    import workBack from './components/workback'
    import technology from './components/technology'
    import like from './components/like'
    import credential from './components/credential'
    import award from './components/award'
    import myComment from './components/mycomment'
    export default {
        name: 'app',
        mounted(){
           
        },
        components:{
           jlHeader,
           basicInfo,
           jobDefi,
           education,
           workBack,
           technology,
           like,
           myComment,
           credential,
           award
        }
    }
</script>
<style lang="scss" scoped>
    #app {
        width:900px;
        // height: 100%;
        background: white;
        border-radius:3px;
        box-shadow: 0px 0px 5px 0px rgba(0,0,0,.3);
        margin:20px auto;
        font-family: 'Apple Lihei','Microsoft Yahei','Avenir', Helvetica, Arial, sans-serif;
        // font-family: "Helvetica Neue",Helvetica,"PingFang SC","Hiragino Sans GB","Microsoft YaHei","微软雅黑",Arial,sans-serif;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        color: #2c3e50;
        .content{
            padding:48px 40px 40px 60px;
            
        }
    }
</style>