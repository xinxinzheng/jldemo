<template>
    <div class="block-container">
        <div class="block-tag">
            <p class="block-title">{{title}}</p>
        </div>
        <slot></slot>
    </div>
</template>
<script>
    export default {
        props:['title'],
        mounted(){
            
        }
    }
</script>
<style scoped lang="scss"> 
    $block-height:35px;
    .block-container{
        position: relative;
        width:100%;
        border-top:1px solid #254665;
        border-left:1px solid #254665;
        .block-tag{
            position: absolute;
            left:-18px;
            top:-$block-height;
            height:$block-height;
            width:180px;
            background: #254665;
            .block-title{
                color:white;
                height:$block-height;
                line-height:$block-height;
                padding-left:40px;
                font-weight:600;
            }
            &:after{
                content:'';
                height:10px;
                width:18px;
                background: #254665;
                position: absolute;
                clip-path:polygon(0px 0px,18px 0px , 18px 10px , 0px 0px);
                bottom:-10px;
            }
        }
    }
</style>