<style lang="scss">
    .nav { width: 100%;height: 88px;line-height: 88px;color: #ffffff;font-size: 32px;
        position: relative;
        .nav-back,
        .nav-jump { position: absolute;height: 100%;}
        .nav-meta { width: 100%;height: 100%;text-align: center;}

        .nav-jump {font-size: 28px;color: #FFFFFF;right:27px;top:0;height: 100%;}
        .nav-back { 
            height: 100%;left: 30px;top: 0; width: 70px;
            background: url('~@/assets/img/shop/back.png') center center no-repeat;
            background-size: 18.4px 36.8px; 
        }
    }
</style>

<template>
    <div class="nav">
        <div class="nav-back" @click="$router.push({ path : backPath })"></div>
        <div class="nav-meta">{{ $route.meta }}</div>
        <div class="nav-jump" @click="$router.push({ path : jump.path })">{{ jump.name }}</div>
    </div>
</template>

<script>
    export default {
        props : {
            backPath : String,
            jump : Object,
        },
        mounted () {
            
        }
    }
</script>
