<template>
    <jl-block title="自我评价">
        <el-row class="my-comment">
            <el-col :span="24">
                <ul>
                    <li>
                        <el-row >
                            <el-col class="item" :span="24">学习能力强，具有创新思维，具有较强的逻辑思维能力，有钻研精神，喜欢钻研技术，攻克难题。</el-col>
                        </el-row>
                    </li>
                    <li>
                        <el-row>
                            <el-col class="item" :span="24">做事踏实认真、责任心强，有追求完美的品质，愿意主动改进工作流程，精益求精。</el-col>
                        </el-row>
                    </li>
                    <li>
                        <el-row>
                            <el-col class="item" :span="24">较强的沟通能力和团队合作能力。</el-col>
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
    .my-comment{
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