<template>
    <jl-block title="教育背景">
        <el-row class="education">
            <el-col :span="24">
                <el-row >
                    <el-col class="item" :span="5">2013.9 ~ 2016.3</el-col>
                    <el-col class="item" :span="5">北京邮电大学</el-col>
                    <el-col class="item" :span="6">计算机学院</el-col>
                    <el-col class="item" :span="5">信息安全</el-col>
                    <el-col class="item" :span="3">硕士</el-col>
                </el-row>
               <el-row >
                    <el-col class="item" :span="5">2009.9 ~ 2013.7</el-col>
                    <el-col class="item" :span="5">山东师范大学</el-col>
                    <el-col class="item" :span="6">信息科学与工程学院</el-col>
                    <el-col class="item" :span="5">通信工程</el-col>
                    <el-col class="item" :span="3">本科</el-col>
                </el-row>
            </el-col>
        </el-row>
    </jl-block>
</template>
<script>
    import jlBlock from './block'
    export default {
        props:['title'],
        components:{
            jlBlock
        },
        mounted(){
            
        }
    }
</script>
<style scoped lang="scss"> 
    .education{
        .item{
            height:30px;
            line-height:30px;
        }
        .my-name{
            font-size:25px;
            // color:#999999;
            height:30px;
            line-height:30px;
        }
        .my-desc{
            height:30px;
            line-height:30px;
        }
    }
</style>