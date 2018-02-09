<template>
    <jl-block title="求职意向">
        <el-row class="job-defi">
            <el-col :span="18">
                <el-row >
                    <el-col class="item" :span="12">意向岗位：前端工程师</el-col>
                    <el-col class="item" :span="12">意向城市：济南</el-col>
                </el-row>
                <el-row>
                    <el-col class="item" :span="12">期望薪资：10k ~ 15k</el-col>
                    <el-col class="item" :span="12"></el-col>
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
    .job-defi{
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