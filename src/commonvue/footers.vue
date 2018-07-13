<style lang="sass" scoped>
    
</style>
<template>
    <footer class="toolbar mui-row" v-show="$store.state.appData.isShowFoot">
        <div class="mui-item toolbar-icon">
            <router-link :to="{name: 'index'}" class="toolbar-link" :class="{'router-link-active':attr=='index'}">
                <span class="mui-icon iconfont icon-shouye"></span>
                <span class="footer-txt">首页</span>
            </router-link>
        </div>
        <div class="mui-item toolbar-icon">
            <router-link :to="{name: 'topics'}" class="toolbar-link" :class="{'router-link-active':attr=='topics'}">
                <span class="mui-icon iconfont icon-zhuanti"></span>
                <span class="footer-txt">专题</span>
            </router-link>
        </div>
        <div class="mui-item toolbar-icon">
            <router-link :to="{name: 'classify'}" class="toolbar-link" :class="{'router-link-active':attr=='classify'}">
                <span class="mui-icon iconfont icon-fenlei"></span>
                <span class="footer-txt">分类</span>
            </router-link>
        </div>
        <div class="mui-item toolbar-icon">
            <router-link :to="{name: 'cart'}" class="toolbar-link" :class="{'router-link-active':attr=='cart'}">
                <span class="mui-icon iconfont icon-gouwuche"></span>
                <span class="footer-txt">购物车</span>
            </router-link>
        </div>
        <div class="mui-item toolbar-icon">
            <router-link :to="{name: 'user'}" class="toolbar-link" :class="{'router-link-active':attr=='user'}">
                <span class="mui-icon iconfont icon-wode"></span>
                <span class="footer-txt">我的</span>
            </router-link>
        </div>
    </footer>
</template>
<script>
    export default {
        data(){
            return {

            }
        },
        computed:{
            attr(){
                return this.$store.state.appData.routerName;
            },
        },
        mounted() {
            this.$nextTick(()=>{
                console.log(this.$store.state.appData.routerName)
            })
        },
        methods: {
            
        },
    }
</script>