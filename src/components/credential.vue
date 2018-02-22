<template>
    <jl-block title="所获证书">
        <el-row class="credential">
            <el-col :span="24">
                <ul>
                    <li>
                        <el-row >
                            <el-col class="item" :span="24">国家大学英语四级证书，国家大学英语六级证书。</el-col>
                        </el-row>
                    </li>
                    <li>
                        <el-row>
                            <el-col class="item" :span="24">全国计算机等级考试二级证书，全国计算机等级考试三级证书。</el-col>
                        </el-row>
                    </li>
                </ul>
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
    .credential{
        li{
            position: relative;
            padding-left:18px;
            &:after{
                content:'';
                width:7px;
                height:7px;
                border-radius:50%;
                border:2px solid #264562;
                position: absolute;
                top:10px;
                left:0px;
            }
        }
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