# Alert 警告

用于页面中展示重要的提示信息。

## 基本用法

页面中的非浮层元素，不会自动消失。

<fox-alert>
<div>这是提示信息</div>
<div>用来让人注意的提示文字</div>
</fox-alert>

## 类型

有状态的提示信息

<fox-alert type="success">
<div>这是提示信息</div>
<div>用来让人注意的提示文字</div>
</fox-alert>
<fox-alert type="danger">
    <div>这是提示信息</div>
    <div>用来让人注意的提示文字</div>
</fox-alert>
<fox-alert type="warning">
    <div>这是提示信息</div>
    <div>用来让人注意的提示文字</div>
</fox-alert>
<fox-alert type="info">
    <div>这是提示信息</div>
    <div>用来让人注意的提示文字</div>
</fox-alert>

## 自定义颜色

通过 props 中的 color 来自定义颜色

<fox-alert type="success" :color="{background: 'pink',line: 'red',font: 'white'}">
<div>这是提示信息</div>
<div>用来让人注意的提示文字</div>
</fox-alert>
<fox-alert type="danger" :color="{ font: 'white', background: 'black' }">
    <div>这是提示信息</div>
    <div>用来让人注意的提示文字</div>
</fox-alert>
<fox-alert type="warning">
    <div>这是提示信息</div>
    <div>用来让人注意的提示文字</div>
</fox-alert>
<fox-alert type="info">
    <div>这是提示信息</div>
    <div>用来让人注意的提示文字</div>
</fox-alert>
