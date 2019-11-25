<template>
    <div id="Home">
        <!-- 顶部导航栏 -->
        <div id="topbar">
            <Topbar/>
        </div>
        <!-- 侧边栏 -->
        <div id="side">
            <Side/>
        </div>
        <div id="view">
            <router-view/>
        </div>
        <!-- 底部栏 -->
        <div id="bottom"></div>
    </div>
</template>

<script>
export default {
    name:'Home',
    components:{
    },
    data(){
        return {
            text:'nihao'
        }
    }
}
</script>

<style scoped>
#topbar{
    width: 100%;
    margin: 0 auto;
}

</style>
