<template>
    <jl-block title="基本信息">
        <el-row class="basic-info">
            <el-col :span="18">
                <p class="my-name">郑新新</p>
                <p class="my-desc">如果努力奔跑，只能留在原地，那么我只能拼尽全力向前！</p>
                <el-row >
                    <el-col class="item" :span="10">出生日期：1990-02-01</el-col>
                    <el-col class="item" :span="14">所在城市：北京</el-col>
                </el-row>
                <el-row>
                    <el-col class="item" :span="10">手机号码：155-1016-7150</el-col>
                    <el-col class="item" :span="14">邮箱地址：zhengxinxin1990@163.com</el-col>
                </el-row>
            </el-col>
            <el-col :span="6">
                <div class="grid-content ">
                            
                </div>
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
    .basic-info{
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