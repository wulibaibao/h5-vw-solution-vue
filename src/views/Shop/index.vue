
<style lang="scss">
    @import './index.scss';
    @import './preview.scss';
</style>
<template>
    <div class="vg-shop">
        <NavComponent
            back-path="/"
            :jump="{
                name : '记录',
                path : '/record',
            }"
        />
        <div class="shop-main">
            <div class="my">
                <div class="line"></div>
                <div class="light-spot">
                    <div class="t-light">
                        <div class="light-icon" />
                        <h3>980</h3>
                    </div>
                    <div class="t-opt">
                        <div class="t">光点</div>
                        <div class="btn" @click="goPay">充值</div>
                    </div>
                </div>
                <div class="t-brightness">
                    <div class="t-bright">
                        <div class="bright-icon" />
                        <h3>111</h3>
                    </div>
                    <div class="t-opt">
                        <div class="t">亮度</div>
                        <div class="btn" @click="$router.push({path : '/bright'})">获取</div>
                    </div>
                </div>
            </div>
            <ul class="pr-tab">
                <li class="active">
                    挂件
                    <div class="new"></div>
                </li>
                <li>气泡</li>
                <li>道具</li>
            </ul>
            <div class="pr-card">
                <!-- Slider main container -->
                <div class="swiper-container" ref="swiper">
                    <!-- Additional required wrapper -->
                    <div class="swiper-wrapper">
                        <!-- Slides -->
                        <div class="swiper-slide">
                            <div class="pr-item">
                                Slide 1
                                <div class="cov"></div>
                                <div class="intr">
                                    <div class="t"></div>
                                    <div class="u"></div>
                                    <ul class="p"></ul>
                                </div>
                                <div class="btn"></div>
                            </div>
                        </div>
                        <div class="swiper-slide">Slide 2</div>
                        <div class="swiper-slide">Slide 3</div>
                    </div>
                </div>
            </div>
        </div>
        <div class="preview" v-show="preview">
            <div class="container">
                <div class="top"></div>
                <div class="bottom">
                    <div class="t"></div>
                    <div class="i"></div>
                    <div class="btn">

                    </div>
                </div>
            </div>
        </div>
        <ios-pay-component 
            :visible="iosPay"
            :click="() => iosPay = false"
            :data="priceList"
        />
        <android-pay-component 
            :visible="androidPay"
            :click="() => androidPay = false"
            :data="priceList"
        />
    </div>
</template>

<script>
    const Swiper = window.Swiper;
    export default {
        name: 'shop',
        data () {
            return {
                androidPay : true,
                iosPay : false,
                preview : false,
                priceList : [],
            }
        },
        mounted () {
            new Swiper(this.$refs.swiper);
            this.getPriceList()
        },
        methods : {
            goPay () {
                this.iosPay = true;
            },
            getPriceList () {
                this.$http({
                    methods : 'get',
                    url : '/h5/price/list',
                })
                .then(
                    ret => this.priceList = ret.data.data
                )
            },
        },
        components : {
            IosPayComponent : () => import('@/views/Shop/iosPay.vue'),
            AndroidPayComponent : () => import('@/views/Shop/androidPay.vue'),
        }
    }
</script>
