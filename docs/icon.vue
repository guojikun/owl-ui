<template>
    <div class="page-icon">
        <div class="page-item">
            <div>
                <p class="page-title">Icon 图标</p>
                <p class="page-dec">提供了一套常用的图标集合。</p>
            </div>
        </div>
        <div class="page-item">
            <div>
                <p class="page-item-title">使用方法</p>
                <p class="page-item-dec">
                    直接通过设置类名为mx-icon-iconName来使用即可。
                </p>
            </div>
            <div class="page-item-content">
                <page-demo>
                    <mx-icon name="ios-add-circle-outline" size="24"></mx-icon>
                    <mx-icon
                        name="ios-at"
                        style="margin: 0 30px;"
                        size="24"
                    ></mx-icon>
                    <mx-icon name="ios-attach" size="24"></mx-icon>
                    <high-light slot="highlight" :code="code"></high-light>
                </page-demo>
            </div>
        </div>
        <div class="page-item">
            <div>
                <p class="page-item-title">图标集合</p>
            </div>
            <div
                style="width: 800px;border: 1px solid #eee;padding: 20px 10px;display: flex;flex-wrap: wrap;"
            >
                <div
                    v-for="item in icons"
                    :key="item"
                    class="icon-in-list"
                    @click="copyIcon(item)"
                    :title="item"
                >
                    <mx-icon :name="item"></mx-icon>
                    <p>{{ item }}</p>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import icons from '@/data/icons.js';
export default {
    data() {
        return {
            icons: icons,
            code: `
<mx-icon name="ios-add-circle-outline"></mx-icon>
<mx-icon
    name="ios-at"
    style="margin: 0 30px;"
></mx-icon>
<mx-icon name="ios-attach"></mx-icon>
            `,
        };
    },
    methods: {
        copyIcon(text) {
            window.navigator.clipboard
                .writeText(text)
                .then(
                    () => {
                        alert(`已复制到粘贴板：${text}`);
                    },
                    () => {
                        alert(`复制到粘贴板失败：${text}`);
                    }
                )
                .catch(e => {
                    throw e;
                });
        },
    },
};
</script>

<style lang="scss" scoped>
.icon-in-list {
    display: inline-flex;
    justify-content: center;
    flex-wrap: wrap;
    padding: 10px;
    box-sizing: border-box;
    cursor: pointer;
    color: #606266;
    flex: 0 0 24%;
}
.icon-in-list:hover {
    background-color: #fff;
}
.icon-in-list:hover * {
    color: #409eff;
}
.icon-in-list i {
    font-size: 32px;
}
.icon-in-list p {
    width: 100%;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
    margin: 10px 0 0 0;
    line-height: 32px;
    font-size: 13px;
    text-align: center;
}
</style>
