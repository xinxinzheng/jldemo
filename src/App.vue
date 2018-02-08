<template>
     <div id="app" class="app">
        <jl-header></jl-header>
        <div class="content">
            
        </div>
    </div>
</template>
<script>
    import jlHeader from './components/header'
    export default {
        name: 'app',
        mounted(){
           
        },
        components:{
           jlHeader 
        }
    }
</script>
<style lang="scss" scoped>
    #app {
        width:900px;
        height: 100%;
        margin:auto;
        font-family: 'Apple Lihei','Microsoft Yahei','Avenir', Helvetica, Arial, sans-serif;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        color: #2c3e50;
    }
</style>