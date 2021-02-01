<template>
    <jl-block title="技能特长">
        <el-row class="tech">
            <el-col :span="24">
                <!-- <ul>
                    <li>
                        <el-row >
                            <el-col class="item" :span="24">英语六级（CET6）, 能够熟练阅读英文技术文档。</el-col>
                        </el-row>
                    </li>
                    <li>
                        <el-row>
                            <el-col class="item" :span="24">熟练掌握前端基本技术 JavaScript (Es5 , Es6)，Html5 ，CSS3 ， NodeJs 的使用 。</el-col>
                        </el-row>
                    </li>
                    <li>
                        <el-row >
                            <el-col class="item" :span="24">熟练掌握 Vue , AngularJs , ReactJs , Angular4 框架的使用 。 熟悉 Webpack , Grunt ，Git 工具的使用</el-col>
                        </el-row>
                    </li>
                    <li>
                        <el-row>
                            <el-col class="item" :span="24">熟悉 SVG , Canvas 的使用 ，熟练掌握可视化工具 Echarts , Highcharts , D3Js 的使用。</el-col>
                        </el-row>
                    </li>
                    <li>
                        <el-row >
                            <el-col class="item" :span="24">熟悉基本的设计模式，了解性能优化解决方案 。熟练掌握 ElementUi , Iview ，Jquery , Bootstrap 插件或模板的使用 。</el-col>
                        </el-row>
                    </li>
                    <li>
                        <el-row >
                            <el-col class="item" :span="24">了解PHP , Linux , Mysql 的基本语法与命令。简单了解WebGL</el-col>
                        </el-row>
                    </li>
                </ul> -->
                <ul>
                    <li>
                        <el-row >
                            <el-col class="item" :span="24">基础技术：熟练掌握Javascript, Html5，Css。</el-col>
                        </el-row>
                    </li>
                    <li>
                        <el-row>
                            <el-col class="item" :span="24">框架：熟练掌握 Vue , React, Express，Wepy 等框架的使用 。</el-col>
                        </el-row>
                    </li>
                    <li>
                        <el-row >
                            <el-col class="item" :span="24">工具：熟练掌握Webpack, Node的使用。</el-col>
                        </el-row>
                    </li>
                    <li>
                        <el-row>
                            <el-col class="item" :span="24">可视化：熟练掌握Echarts , Highcharts , D3Js，了解SVG , Canvas, WebGL，Threejs。</el-col>
                        </el-row>
                    </li>
                    <li>
                        <el-row >
                            <el-col class="item" :span="24">其他：熟悉PHP , Linux , Mysql 的基本语法与命令以及Nginx，Opera, Oracle Report, Splunk，StoryBook。</el-col>
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