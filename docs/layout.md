# Layout 布局容器

用于布局的容器组件，方便快速搭建页面的基本结构：

fox-container：外层容器。当子元素中包含 fox-header 或
fox-footer 时，全部子元素会垂直上下排列，否则会水平左右排列。

fox-header：顶栏容器。<br />fox-aside：侧边栏容器。<br />fox-main：主要区域容器。<br />fox-footer：底栏容器。

## 常见页面布局

<fox-layout class="page-layout-item">
<fox-header class="page-layout-hf">Header</fox-header>
<fox-main class="page-layout-main">Main</fox-main>
</fox-layout>

<fox-layout class="page-layout-item">
<fox-header class="page-layout-hf">Header</fox-header>
<fox-main class="page-layout-main">Main</fox-main>
<fox-footer class="page-layout-hf">Footer</fox-footer>
</fox-layout>

<fox-layout class="page-layout-item">
<fox-aside class="page-layout-hf" width="200px">Aside</fox-aside>
<fox-main class="page-layout-main">Main</fox-main>
</fox-layout>

<fox-layout class="page-layout-item">
<fox-header class="page-layout-hf">Header</fox-header>
<fox-layout>
<fox-aside class="page-layout-hf" width="200px">Aside</fox-aside>
<fox-main class="page-layout-main">Main</fox-main>
</fox-layout>
</fox-layout>
<fox-layout class="page-layout-item">
<fox-header class="page-layout-hf">Header</fox-header>
<fox-layout>
<fox-aside class="page-layout-hf" width="200px">Aside</fox-aside>
<fox-layout>
    <fox-main class="page-layout-main">Main</fox-main>
    <fox-footer class="page-layout-hf">Footer</fox-footer>
</fox-layout>
</fox-layout>
</fox-layout>

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
