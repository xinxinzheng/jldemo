<template>
    <jl-block title="工作&项目经历">
        <el-row class="work-back">
            <el-col :span="24">
                <ul>
                     <li>
                        <el-row >
                            <el-col class="item" :span="6">
                                2020.8 ～ 至今
                            </el-col>
                            <el-col class="item" :span="12">
                                北京辰森科技
                            </el-col>
                            <el-col class="item" :span="6">
                                前端研发工程师
                            </el-col>
                        </el-row>
                        <el-row>
                            <el-col :span="24">
                                <p class="item">项目名称：供应链（SCM）</p>
                                <p class="item">使用技术：React , Webpack, Antd, dva, typescript, 微应用</p>
                                <p class="item">参与任务：</p>
                                <p class="item">（1）高质量完成迭代需求开发并顺利上线，fix了各子应用间module全局变量相互覆盖问题 </p>
                                <p class="item">（2）通过封装Filter Bar组件熟悉了React hooks的使用。</p>
                                <p class="item">（3）通过开发智能秤，APP，小程序，熟悉了移动端的开发。</p>
                                <p class="item">（4）Quick BI 调研，在quick bi 单据列表中跳转回供应链时，通过集中跳转到统一页面进行分发解决了quick bi自身跳转到固定链接的局限（虽最终未使用quickBi）。</p>
                                <p class="item">（5）AEM 调研。</p>
                                <br>
                            </el-col>
                        </el-row>
                    </li>
                    <li>
                        <el-row >
                            <el-col class="item" :span="6">
                                2018.5 ～ 2020.7
                            </el-col>
                            <el-col class="item" :span="12">
                                亿帆环球科技
                            </el-col>
                            <el-col class="item" :span="6">
                                前端研发工程师
                            </el-col>
                        </el-row>
                        <el-row>
                            <el-col :span="24">
                                <p class="item">项目名称：Colleague Advantage（CA）- 酒店前台管理系统</p>
                                <p class="item">使用技术：Javascript , NodeJs, Express, Dust, RequireJs, Jquery, Bootstrap</p>
                                <p class="item">参与任务：</p>
                                <p class="item">（1）高质量完成迭代开发需求并顺利上线，利用requestIdleCallback解决了RoomSwap Modal关闭导致的页面冻结问题</p>
                                <p class="item">（2）从sql小白到能够多次协助后端通过分析log与存储过程,定位线上问题，例如通过分析Splunk log缩小问题定位范围，通过分析存储过程发现业务逻辑bug等</p>
                                <br>
                            </el-col>
                        </el-row>
                    </li>
                    <li>
                        <el-row >
                            <el-col class="item" :span="6">
                                2016.4 ～ 2018.5
                            </el-col>
                            <el-col class="item" :span="12">
                                360企业安全
                            </el-col>
                            <el-col class="item" :span="6">
                                前端研发工程师
                            </el-col>
                        </el-row>
                        <el-row>
                            <el-col :span="24">
                                <p class="item">项目名称：大数据运营管理平台 (BigManager)</p>
                                <p class="item">使用技术：AngularJs , Es6 , Glup , Bootstrap , Echarts</p>
                                <p class="item">参与任务：</p>
                                <p class="item">（1）使用glup独立搭建并完成项目的研发部署工作</p>
                                <p class="item">（2）了解了大数据相关的知识，开阔了眼界。</p>
                                <br>
                            </el-col>
                        </el-row>
                        <el-row>
                            <el-col :span="24">
                                <p class="item">项目名称：广电大数据分析系统 & 大屏 & 知识图谱</p>
                                <p class="item">使用技术：Vue, Es6 , Webpack , ElementUi , Echarts，D3</p>
                                <p class="item">参与任务：</p>
                                <p class="item">（1）搭建并完成项目的研发部署工作</p>
                                <p class="item">（2）完成了广电家庭大数据监控大屏, 使用JS,CSS完成了大屏资源存储柱状组件的开发</p>
                                <p class="item">（3）使用d3 + echarts 优化了知识图谱2000+节点渲染卡顿问题</p>
                                <br>
                            </el-col>
                        </el-row>
                    </li>
                    <!-- <li>
                        <el-row>
                            <el-col class="item" :span="6">2015.7 – 2016.1</el-col>
                            <el-col class="item" :span="12">北京奇虎科技有限公司</el-col>                        
                            <el-col class="item" :span="6">前端研发实习生</el-col>
                        </el-row>
                         <el-row>
                            <el-col :span="24">
                                <p class="item">云图</p>
                                <p class="item">项目简介：云图，是大数据（Hadoop）前端管理平台。云图功能主要分为产品服务和管理服务两大系列，产品服务包含Hive/MapReduce/Hbase/HDFS，管理服务包括权限管理和Storm管理。</p>
                                 <br>
                            </el-col>
                        </el-row>
                    </li> -->
                    <!-- <li>
                        <el-row>
                            <el-col class="item" :span="6">2014.7 – 2015.6</el-col>
                            <el-col class="item" :span="12">百度时代网络技术（北京）有限公司</el-col>                        
                            <el-col class="item" :span="6">研发实习生</el-col>
                        </el-row>
                         <el-row>
                            <el-col :span="24">
                                <p class="item">项目名称：分布式防火墙项目</p>
                                <p class="item">项目简介：主要功能为实现企业内网之间的访问控制。主要分为运营中心、服务端、客户端三个大功能模块。运营中心为该项目的管理系统，实现对逻辑区域的管理、策略规则的管理与Agent的管理。服务端负责连接运营中心、客户端，主要功能为策略的读取和策略文件的生成。客户端执行拉取的策略规则实现主机之间的访问控制。利用ThinkPHP，EasyUI，JavaScript完成分布式防火墙项目前端框架的搭建和前端需求开发,利用PHP，Mysql 完成分布式防火墙项目后端数据开发,合作撰写了分布式防火墙项目的详细设计文档，也为后续开发人员提供了设计理念。</p>
                                 <br>
                            </el-col>
                        </el-row>
                    </li>
                    <li>
                       <el-row>
                            <el-col class="item" :span="6">2013.9 – 2014.7</el-col>
                            <el-col class="item" :span="12">北京邮电大学</el-col>                        
                            <el-col class="item" :span="6">学生</el-col>
                        </el-row>
                        <el-row>
                            <el-col :span="24">
                                <p class="item">项目名称：微信课堂<p>
                                <p class="item">项目简介：微信课堂主要为教师与学生课堂互动提供方便，核心功能有实时消息的推送，手机控制大屏幕，在线讨论组功能；</p>
                                 <br>
                            </el-col>
                        </el-row>
                        <el-row>
                            <el-col :span="24">
                                <p class="item">项目名称：民航安全事故分析平台<p>
                                <p class="item">项目简介：通过将已有的数据分词并进行权值处理得到事故发生的原因等关键信息，并将信息在平台加以展示；作为项目负责人，主要负责分析平台的设计与实现</p>
                                <br>
                            </el-col>
                        </el-row>
                        <el-row>
                            <el-col :span="24">
                                <p class="item">项目名称：应用识别特征库研发<p>
                                <p class="item">项目简介：提取网络数据流特征，通过硬件加载特征规则，实现应用层防火墙的网络协议识别、流量监控、访问控制等功能；主要职责为应用协议提取、特征规则验证，使用工具为wireshark。</p>
                                 <br>
                            </el-col>
                        </el-row>
                    </li> -->
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
    .work-back{
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
            // height:30px;
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