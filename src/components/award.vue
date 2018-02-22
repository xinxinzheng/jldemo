<template>
    <jl-block title="获奖记录">
        <el-row class="award">
            <el-col :span="24">
                <ul>
                    <li>
                        <el-row >
                            <el-col class="item" :span="24">2013 ~ 2016 北京邮电大学 三等奖学金；</el-col>
                        </el-row>
                    </li>
                    <li>
                        <el-row>
                            <el-col class="item" :span="24">2009 ~ 2013 山东师范大学 二等奖学金一次 三等奖学金（两次）</el-col>
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
    .award{
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