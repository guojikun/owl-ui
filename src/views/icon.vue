<template>
    <div class="page page-icon">
        <div>
            <h1>Icon 图标</h1>
        </div>
        <div>
            <h2>基础用法</h2>
            <div style="font-size: 24px;padding: 20px;">
                <owl-icon name="ios-search"></owl-icon>
                <owl-icon name="md-happy"></owl-icon>
                <owl-icon name="md-share"></owl-icon>
            </div>
            <div>
                <owl-code lang="html">
                    <owl-icon name="ios-search"></owl-icon>
                    <owl-icon name="md-happy"></owl-icon>
                    <owl-icon name="md-share"></owl-icon>
                </owl-code>
            </div>
        </div>

        <div>
            <div>
                <input type="text" />
            </div>
            <div class="icon-box">
                <div v-for="item in icons" :key="item" class="icon-item">
                    <div class="icon-item-inner">
                        <div class="icon-item-ico">
                            <owl-icon :name="item"></owl-icon>
                        </div>
                        <p>{{ item }}</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import icons from "@/data/icons.js";
export default {
    data() {
        return {
            icons: [],
        };
    },
    mounted() {
        this.icons = Object.freeze(icons);
    },
};
</script>

<style>
.page-icon {
    background-color: #fff;
}
.icon-box {
    font-size: 0;
    display: flex;
    flex-wrap: wrap;
    width: 1000px;
    margin: 0 auto;
}
.icon-item {
    font-size: 14px;
    flex: 0 0 200px;
    text-align: center;
    color: #666666;
}
.icon-item-inner {
    padding: 20px 0;
}
.icon-item-inner:hover {
    box-shadow: 0 2px 12px 0 rgba(0, 0, 0, 0.1);
}
.icon-item-ico {
    font-size: 24px;
    display: flex;
    justify-content: center;
    color: #333;
    margin-bottom: 20px;
}
</style>
