<template>
     <div id="app" class="app">
        <jl-header></jl-header>
        <div class="content">
            <jl-block title="基本信息">
                <el-row class="h-top">
                    <el-col :span="20">
                        
                    </el-col>
                    <el-col :span="4">
                        <div class="grid-content ">
                            
                        </div>
                    </el-col>
                </el-row>
            </jl-block>
        </div>
    </div>
</template>
<script>
    import jlHeader from './components/header'
    import jlBlock from './components/block'
    export default {
        name: 'app',
        mounted(){
           
        },
        components:{
           jlHeader,
           jlBlock
        }
    }
</script>
<style lang="scss" scoped>
    #app {
        width:900px;
        height: 100%;
        background: white;
        border-radius:3px;
        box-shadow: 0px 0px 5px 0px rgba(0,0,0,.3);
        margin:20px auto;
        font-family: 'Apple Lihei','Microsoft Yahei','Avenir', Helvetica, Arial, sans-serif;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        color: #2c3e50;
        .content{
            padding:48px 40px 40px 60px;
        }
    }
</style>