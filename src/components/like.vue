<template>
    <jl-block title="兴趣爱好">
        <el-row class="like">
            <el-col :span="24">
                <ul>
                    <li>
                        <el-row >
                            <el-col class="item" :span="24">喜欢唱歌，喜欢阅读。</el-col>
                        </el-row>
                    </li>
                    <li>
                        <el-row>
                            <el-col class="item" :span="24">热爱运动，喜欢游泳，跑步。</el-col>
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
    .like{
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