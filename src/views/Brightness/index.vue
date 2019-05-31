<template>
    <!-- 我的亮度 -->
    <div class="brightness">
        <NavComponent
            back-path="/shop"
            :jump="{
                name : '微光商城',
                path : '/shop'
            }"
        />
        <div class="main-container">
            <div class="m-bright">
                <img src="@/assets/img/shop/brightness.png" alt="">
                <span>200</span>
            </div>
            <div class="mid">
                <div class="l">
                    <div class="pic"></div>
                    <div class="intr">
                        <div class="t">随机抽亮度</div>
                        <div class="b">去抽亮度(0次)</div>
                    </div>
                </div>
                <div class="r" @click="changeing = true">
                    <div class="pic"></div>
                    <div class="intr">
                        <div class="t">光点兑亮度</div>
                        <div class="b">光点余额 120</div>
                    </div>
                </div>
            </div>
            <div class="task">
                <div class="item">
                    <div class="t">每日登录签到（已连续登录2天）</div>
                    <div class="add">+5亮度</div>
                    <div class="issue">连续登录可获更高亮度</div>
                    <div class="btn not">已签到</div>
                </div>
            </div>
        </div>
        <div class="exchange" v-show="changeing">
            <div class="container">
                <div class="t">兑换亮度
                    <div class="close" @click="changeing = false"></div>
                </div>
                <div class="change-list">
                    <div class="l-item active">
                        <div class="icon" />
                        <div class="price">200</div>
                        <div class="unit">亮度</div>
                    </div>
                    <div class="l-item"></div>
                    <div class="l-item"></div>
                    <div class="l-item"></div>
                    <div class="l-item"></div>
                    <div class="l-item"></div>
                </div>
                <div class="l-line"></div>
                <div class="l-has">我的光点:120</div>
                <div class="l-btn">20光点兑换</div>
            </div>
        </div>
    </div>
</template>
<script>
    export default {
        data () {
            return {
                changeing : false, // 兑换亮度
            }
        }
    }
</script>
<style lang="scss">
    @import './index.scss';
    @import './exchange.scss';
</style>