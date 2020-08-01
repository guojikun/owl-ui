<template>
    <div class="page">
        <div class="page-item">
            <div>
                <p class="page-title">Breadcrumb 面包屑</p>
                <p class="page-dec">
                    显示当前页面的路径，快速返回之前的任意页面。
                </p>
            </div>
        </div>
        <div class="page-item">
            <div>
                <p class="page-item-title">基本用法</p>
                <p class="page-item-dec">适用广泛的基础用法。</p>
            </div>
            <div class="page-item-content">
                <page-demo>
                    <mx-breadcrumb>
                        <mx-breadcrumb-item to="name">首页</mx-breadcrumb-item>
                        <mx-breadcrumb-item to="age">组件</mx-breadcrumb-item>
                        <mx-breadcrumb-item>面包屑</mx-breadcrumb-item>
                    </mx-breadcrumb>
                    <high-light slot="highlight" :code="code1"></high-light>
                </page-demo>
            </div>
        </div>
        <div class="page-item">
            <div>
                <p class="page-item-title">自定义分隔符</p>
            </div>
            <div class="page-item-content">
                <page-demo>
                    <mx-breadcrumb separator="/">
                        <mx-breadcrumb-item to="name">首页</mx-breadcrumb-item>
                        <mx-breadcrumb-item to="age">组件</mx-breadcrumb-item>
                        <mx-breadcrumb-item>面包屑</mx-breadcrumb-item>
                    </mx-breadcrumb>
                    <high-light slot="highlight" :code="code2"></high-light>
                </page-demo>
            </div>
        </div>
        <div class="page-item">
            <div>
                <p class="page-title">API</p>
            </div>
            <div class="page-item">
                <div>
                    <p class="page-item-title">Breadcrumb Props</p>
                </div>
                <div class="page-item-content">
                    <mx-table :data="tableData" :columns="tableColumns">
                    </mx-table>
                </div>
            </div>
            <div class="page-item">
                <div>
                    <p class="page-item-title">BreadcrumbItem Props</p>
                </div>
                <div class="page-item-content">
                    <mx-table :data="tableData2" :columns="tableColumns">
                    </mx-table>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import { columns } from '@/data/table.js';
export default {
    data() {
        return {
            tableColumns: columns,
            tableData: [
                {
                    parameter: 'separator',
                    explain: '自定义分隔符',
                    type: 'String',
                    optionalValue: '—',
                    defaultValue: '>',
                },
            ],
            tableData2: [
                {
                    parameter: 'to',
                    explain: '	链接，不传则没有链接，支持 vue-router 对象',
                    type: 'String | Object	',
                    optionalValue: '—',
                    defaultValue: '—',
                },
                {
                    parameter: 'replace',
                    explain:
                        '路由跳转时，开启 replace 将不会向 history 添加新记录',
                    type: 'Boolean',
                    optionalValue: '—',
                    defaultValue: 'false',
                },
                {
                    parameter: 'append',
                    explain: '同 vue-router append',
                    type: 'Boolean',
                    optionalValue: '—',
                    defaultValue: 'false',
                },
                {
                    parameter: 'target',
                    explain: '相当于 a 链接的 target 属性',
                    type: 'String',
                    optionalValue: '—',
                    defaultValue: '_self',
                },
            ],
            code1: `
<mx-breadcrumb>
    <mx-breadcrumb-item to="name">首页</mx-breadcrumb-item>
    <mx-breadcrumb-item to="age">组件</mx-breadcrumb-item>
    <mx-breadcrumb-item>面包屑</mx-breadcrumb-item>
</mx-breadcrumb>
            `,
            code2: `
<mx-breadcrumb separator="/">
    <mx-breadcrumb-item to="name">首页</mx-breadcrumb-item>
    <mx-breadcrumb-item to="age">组件</mx-breadcrumb-item>
    <mx-breadcrumb-item>面包屑</mx-breadcrumb-item>
</mx-breadcrumb>
            `,
        };
    },
    methods: {},
};
</script>

<style lang="scss" scoped>
.page-table {
    font-size: 14px;
    background-color: #fff;
}
.page-table-item {
    padding: 20px;
}
h1 {
    font-weight: 500;
    font-size: 1.7em;
}
.page-table-item-content {
    padding: 20px;
    border: 1px solid #eeeeee;
}
.progress-item + .progress-item {
    margin-top: 20px;
}
</style>
