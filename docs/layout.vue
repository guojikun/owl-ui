<template>
    <div class="page-layout">
        <div style="padding: 20px;">
            <div>
                <p class="page-title">Layout 布局容器</p>
                <p class="page-dec">
                    用于布局的容器组件，方便快速搭建页面的基本结构：
                </p>
                <p class="page-dec">
                    mx-container：外层容器。当子元素中包含 mx-header 或
                    mx-footer 时，全部子元素会垂直上下排列，否则会水平左右排列。
                </p>
                <p class="page-dec">
                    mx-header：顶栏容器。<br />mx-aside：侧边栏容器。<br />mx-main：主要区域容器。<br />mx-footer：底栏容器。
                </p>
            </div>
        </div>
        <div style="padding: 20px;">
            <div>
                <p class="page-item-title">常见页面布局</p>
            </div>
            <div
                style="padding: 20px;width: 800px;border: 1px solid #eeeeee;text-align: center;"
            >
                <mx-layout class="page-layout-item">
                    <mx-header class="page-layout-hf">Header</mx-header>
                    <mx-main class="page-layout-main">Main</mx-main>
                </mx-layout>

                <mx-layout class="page-layout-item">
                    <mx-header class="page-layout-hf">Header</mx-header>
                    <mx-main class="page-layout-main">Main</mx-main>
                    <mx-footer class="page-layout-hf">Footer</mx-footer>
                </mx-layout>

                <mx-layout class="page-layout-item">
                    <mx-aside class="page-layout-hf" width="200px"
                        >Aside</mx-aside
                    >
                    <mx-main class="page-layout-main">Main</mx-main>
                </mx-layout>

                <mx-layout class="page-layout-item">
                    <mx-header class="page-layout-hf">Header</mx-header>
                    <mx-layout>
                        <mx-aside class="page-layout-hf" width="200px"
                            >Aside</mx-aside
                        >
                        <mx-main class="page-layout-main">Main</mx-main>
                    </mx-layout>
                </mx-layout>
                <mx-layout class="page-layout-item">
                    <mx-header class="page-layout-hf">Header</mx-header>
                    <mx-layout>
                        <mx-aside class="page-layout-hf" width="200px"
                            >Aside</mx-aside
                        >
                        <mx-layout>
                            <mx-main class="page-layout-main">Main</mx-main>
                            <mx-footer class="page-layout-hf">Footer</mx-footer>
                        </mx-layout>
                    </mx-layout>
                </mx-layout>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {};
    },
};
</script>

<style scoped>
.page-layout {
    background-color: #ffffff;
    font-size: 14px;
}
p {
    margin: 10px 0;
    line-height: 1.5em;
}
h1 {
    font-weight: 500;
    font-size: 1.7em;
}
.page-layout-item + .page-layout-item {
    margin-top: 20px;
}
.page-layout-hf {
    background-color: #b3c0d1;
    color: #333;
    line-height: 60px;
}
.page-layout-main {
    background-color: #e9eef3;
    color: #333;
    text-align: center;
    line-height: 160px;
}
</style>
