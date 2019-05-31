<style lang="scss">
    @import './ios.scss';
</style>

<template>
    <div class="ios-pay" v-show="visible">
        <div class="ios-container">
            <div class="t">充值光点
                <div class="close" @click="click"></div>
            </div>
            <div class="i-pay">
                <div class="i-select">
                    <div class="i-select-item"
                        v-for="item in data"
                        :key="item.id"
                        v-show="item.status === 1"
                    >
                        <div class="i-item-data">
                            <div class="i-icon"></div>
                            <div class="i-light-count">{{ item.iosCoin }}</div>
                            <div class="i-light-add" v-if="item.priceSaleListList.length > 0">
                                <div class="add">
                                    <div class="j"></div>
                                    <div class="f">{{ item.priceSaleListList[0].saleClerk }}</div>
                                </div>
                                <div class="word"><span>+{{ item.priceSaleListList[0].iosCoin }}</span>光点</div>
                            </div>
                        </div>
                        <div class="i-item-btn">¥{{ item.price }}</div>
                    </div>
                </div>
                <div class="i-line"></div>
                <div class="i-issue">
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
            data : Object,
            click : Function,
        },
        data () {
            return {
                noSelectCircle,
                SelectCircle,
                isIosAgreenProtocol : false,
            }
        }
    }
</script>
