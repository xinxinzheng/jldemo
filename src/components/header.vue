<template>
    <div class="header-container">
        <el-row class="h-top">
            <el-col :span="6">
                <p class="top-title">哈哈哈哈</p>
            </el-col>
            <el-col :span="18">
                <div class="flex-column right-t">
                    <p class="right-title">细心从每个小细节开始。</p>
                    <p class="right-eng">Personal resume</p>
                </div>
            </el-col>
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
                position: relative;
                &:after{
                    content:'';
                    position: absolute;
                    right:10px;
                    top:50%;
                    transform: translateY(-50%);
                    width:0px;
                    height:40px;
                    border:1px solid #264562;
                }
            }
            .right-t{
                margin-top:30px;
                padding-left:5px;
                color:#254763;
                font-weight: 600;
                .right-title{
                    height:30px;
                    line-height: 30px;
                    font-weight: 600;
                }   
                .right-eng{
                    height:40px;
                    font-weight: 600;
                    line-height: 40px;
                    font-size:24px;
                    margin-top: -8px;
                }
            }
        }
        .h-bottom{
            height:25px;
            line-height: 25px;
            position: relative;
            .bottom-left{
                height:25px;
                line-height: 25px;
                background:#254665;
                background-image: linear-gradient(45deg, transparent 96%, white 96%, white 98%, white 100%);
            }
            .bottom-right{
                height:20px;
                line-height: 20px;
                bottom:0px;
                background:#c29f67;   
                margin-top:5px;
                position: relative;
                background-image: linear-gradient(45deg, white 0% , white 5% , #c29f67 5%, #c29f67 100%);
                &:after{
                    // content:'';
                    height:20px;
                    position: absolute;
                    top:0px;
                    left:-8px;
                    width:25px;
                    background:  #c29f67;
                    clip-path:polygon(0px 0px , 75px 0px , 75px 20px , 0px 0px);
                    // background-image: linear-gradient(45deg, white 0%, white 20%, #c29f67 20%, #c29f67 100%);
                }
            }
        }
    }
</style>