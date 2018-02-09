<template>
    <jl-block title="技能特长">
        <el-row class="tech">
            <el-col :span="24">
                <ul>
                    <li>
                        <el-row >
                            <el-col class="item" :span="24">英语六级（CET6）, 能够熟练阅读英文技术文档。</el-col>
                        </el-row>
                    </li>
                    <li>
                        <el-row>
                            <el-col class="item" :span="24">熟练掌握前端基本技术 JavaScript (Es5 , Es6)，Html5 ，CSS3 的使用 。</el-col>
                        </el-row>
                    </li>
                    <li>
                        <el-row >
                            <el-col class="item" :span="24">熟练掌握Vue , AngularJs , ReactJs , jQuery、Bootstrap、ReactJs、Require.js ThinkPHP框架的使用</el-col>
                        </el-row>
                    </li>
                    <li>
                        <el-row>
                            <el-col class="item" :span="24">熟悉PHP，JavaScript，熟悉Ajax技术，熟悉MYSQL，HTML，CSS，熟悉Linux基本命令，HTML5，Git，了解ThinkJs，NodeJs</el-col>
                        </el-row>
                    </li>
                    <li>
                        <el-row >
                            <el-col class="item" :span="24">熟悉functionchart、highchart、artdialog、easyui、Ztree插件的使用，熟悉Smarty模板，了解JSON</el-col>
                        </el-row>
                    </li>
                    <li>
                        <el-row>
                            <el-col class="item" :span="24">熟悉PHP，JavaScript，熟悉Ajax技术，熟悉MYSQL，HTML，CSS，熟悉Linux基本命令，HTML5，Git，了解ThinkJs，NodeJs</el-col>
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
    .tech{
        li{
            position: relative;
            padding-left:18px;
            &:after{
                content:'';
                width:8px;
                height:8px;
                border-radius:50%;
                border:2px solid #264562;
                position: absolute;
                top:9px;
                // transform: translateY(-50%);
                left:0px;
            }
        }
        .item{
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