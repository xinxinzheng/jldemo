<template>
    <div class="header-container">
        <el-row class="h-top">
            <el-col :span="6">
                <p class="top-title">哈哈哈哈</p>
            </el-col>
            <el-col :span="18"><div class="grid-content "></div></el-col>
        </el-row>
        <el-row class="h-bottom">
            <el-col :span="15">
                <div class="bottom-left"></div>
            </el-col>
            <el-col :span="9">
                <div class="bottom-right"></div>
            </el-col>
        </el-row>
    </div>
</template>
<script>
    export default {
    }
</script>
<style scoped lang="scss">
    $head-height:145px; 
    .header-container{
        height: $head-height;
        .h-top{
            height:$head-height - 25px;
            line-height: $head-height;
            .top-title{
                padding-left:40px;
                font-size:40px;
                color:#264562;
                font-weight: 600;
                line-height: $head-height - 25px;
            }
        }
        .h-bottom{
            height:25px;
            line-height: 25px;
            position: relative;
            .bottom-left{
                height:25px;
                line-height: 25px;
                background:#254665 center / 25px 25px;
            }
            .bottom-right{
                height:20px;
                line-height: 20px;
                bottom:0px;
                background:#c29f67 center / 20px 20px;   
            }
        }
    }
</style>