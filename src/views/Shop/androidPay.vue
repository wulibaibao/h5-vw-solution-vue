<style lang="scss">
    @import './android.scss';
</style>

<template>
    <div class="android-pay" v-show="visible">
        <div class="android-container">
            <div class="t">
                充值光点
                <div class="close" @click="click"></div>
            </div>
            <div class="android-pay-wrapper">
                <div class="select-list">
                    <div 
                        v-for="(item , index ) in data"
                        :key="index"
                        :class="`list-item ${ activeIndex === index ? 'active': '' }`"
                        @click="() => {
                            activeIndex = index
                            payPrice = item.price
                        }"
                    >
                        <div class="a-item-wrapper">
                            <div class="pay-icon"></div>
                            <div class="light-count">{{ item.androidCoin }}</div>
                            <div class="a-add-count">
                                <span></span>光点
                            </div>
                            <div class="a-l-tip"
                                v-show="activeIndex === index"
                            ></div>
                            <!-- <div class="a-c-tip"></div> -->
                        </div>
                    </div>
                </div>
                <div class="pay-class">
                    <div class="a-item wechat">
                        <div class="a-icon"/>
                        <div class="a-class">微信支付</div>
                        <div 
                            :class="`a-select ${ checkPayClass === 'weichat' ? 'isCheck' : ''}`"
                            @click="checkPayClass = 'weichat'"
                        />
                    </div>
                    <div class="a-item alipay">
                        <div class="a-icon"/>
                        <div class="a-class">支付宝支付</div>
                        <div 
                            :class="`a-select ${ checkPayClass === 'alipay' ? 'isCheck' : ''}`"
                            @click="checkPayClass = 'alipay'"
                        />
                    </div>
                    <div class="a-item qqpay">
                        <div class="a-icon"/>
                        <div class="a-class">QQ钱包支付</div>
                        <div 
                            :class="`a-select ${ checkPayClass === 'qqpay' ? 'isCheck' : ''}`"
                            @click="checkPayClass = 'qqpay'"
                        />
                    </div>
                </div>
                <div class="pay-opt">
                    <div class="i-agreen">
                        <img 
                            :src="isIosAgreenProtocol ? SelectCircle : noSelectCircle" 
                            class="select-agreen-icon"
                            @click="isIosAgreenProtocol = !isIosAgreenProtocol"
                        >
                        <span>同意</span>
                        <span 
                            class="protocol"
                            @click="$router.push({ path : `/vg-pay-protocol` })"
                        >
                            微光充值服务协议
                        </span>
                    </div>
                    <div class="i-tip">温馨提示: 未成年人请在监护人的陪同或许可下操作。</div>
                    <div class="a-btn">
                        立即支付{{ payPrice }}元
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    import noSelectCircle from '@/assets/img/shop/no-select.png'
    import SelectCircle from '@/assets/img/shop/select-circle.png'

    export default {
        props : {
            visible : Boolean,
            click : Function ,
            data : Object,
        },
        data () {
            return {
                checkPayClass : 'weichat',
                noSelectCircle,
                SelectCircle,
                isIosAgreenProtocol : false,
                activeIndex : -1,
                payPrice : 0,
            }
        },
    }
</script>
