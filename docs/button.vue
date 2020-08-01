<template>
    <div class="page-button">
        <div class="page-item">
            <p class="page-title">Button 按钮</p>
            <p class="page-dec">常用的操作按钮。</p>
        </div>
        <div class="page-item">
            <div>
                <p class="page-item-title">基础用法</p>
                <p class="page-item-dec">按钮的基础用法</p>
            </div>
            <div class="page-item-content">
                <page-demo>
                    <div>
                        <mx-button>默认按钮</mx-button>
                        <mx-button type="primary">主要按钮</mx-button>
                        <mx-button type="success">success</mx-button>
                        <mx-button type="warning">warning</mx-button>
                        <mx-button type="danger">danger</mx-button>
                        <mx-button type="info">info</mx-button>
                    </div>
                    <div class="mt-20">
                        <mx-button plain>朴素按钮</mx-button>
                        <mx-button type="primary" plain>主要按钮</mx-button>
                        <mx-button type="success" plain>success</mx-button>
                        <mx-button type="warning" plain>warning</mx-button>
                        <mx-button type="danger" plain>danger</mx-button>
                        <mx-button type="info" plain>info</mx-button>
                    </div>
                    <div class="mt-20">
                        <mx-button round>圆角按钮</mx-button>
                        <mx-button type="primary" round>主要按钮</mx-button>
                        <mx-button type="success" round>success</mx-button>
                        <mx-button type="warning" round>warning</mx-button>
                        <mx-button type="danger" round>danger</mx-button>
                        <mx-button type="info" round>info</mx-button>
                    </div>
                    <high-light slot="highlight" :code="code1"></high-light>
                </page-demo>
            </div>
        </div>
        <div class="page-item">
            <div>
                <p class="page-item-title">禁用状态</p>
                <p class="page-item-dec">按钮的禁用状态</p>
            </div>
            <div class="page-item-content">
                <page-demo>
                    <div>
                        <mx-button disabled>默认按钮</mx-button>
                        <mx-button type="primary" disabled>主要按钮</mx-button>
                        <mx-button type="success" disabled>success</mx-button>
                        <mx-button type="warning" disabled>warning</mx-button>
                        <mx-button type="danger" disabled>danger</mx-button>
                        <mx-button type="info" disabled>info</mx-button>
                    </div>
                    <div class="mt-20">
                        <mx-button plain disabled>朴素按钮</mx-button>
                        <mx-button type="primary" plain disabled>
                            主要按钮
                        </mx-button>
                        <mx-button type="success" plain disabled>
                            success
                        </mx-button>
                        <mx-button type="warning" plain disabled>
                            warning
                        </mx-button>
                        <mx-button type="danger" plain disabled>
                            danger
                        </mx-button>
                        <mx-button type="info" plain disabled>info</mx-button>
                    </div>
                    <high-light slot="highlight" :code="code2"></high-light>
                </page-demo>
            </div>
        </div>
        <div class="page-item">
            <div>
                <p class="page-item-title">文字按钮</p>
                <p class="page-item-dec">没有边框和背景色的按钮。</p>
            </div>
            <div class="page-item-content">
                <page-demo>
                    <mx-button type="text">文字按钮</mx-button>
                    <mx-button disabled type="text">文字按钮</mx-button>
                    <high-light slot="highlight" :code="code3"></high-light>
                </page-demo>
            </div>
        </div>
        <div class="page-item">
            <div>
                <p class="page-item-title">不同尺寸</p>
                <p class="page-item-dec">
                    Button
                    组件提供除了默认值以外的三种尺寸，可以在不同场景下选择合适的按钮尺寸
                </p>
            </div>
            <div class="page-item-content">
                <page-demo>
                    <div>
                        <mx-button size="large">large</mx-button>
                        <mx-button>默认</mx-button>
                        <mx-button size="small">small</mx-button>
                        <mx-button size="mini">mini</mx-button>
                    </div>
                    <div class="mt-20">
                        <mx-button size="large" round>large</mx-button>
                        <mx-button round>默认</mx-button>
                        <mx-button size="small" round>small</mx-button>
                        <mx-button size="mini" round>mini</mx-button>
                    </div>
                    <high-light slot="highlight" :code="code4"></high-light>
                </page-demo>
            </div>
        </div>
        <div class="page-item">
            <div>
                <p class="page-title">API</p>
            </div>
            <div class="page-item">
                <div>
                    <p class="page-item-title">Button Props</p>
                </div>
                <div class="page-item-content">
                    <mx-table :data="tableData" :columns="tableColumn">
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
            tableColumn: columns,
            tableData: [
                {
                    parameter: 'type',
                    explain: '类型',
                    type: 'String',
                    optionalValue:
                        'primary / success / warning / danger / info / text',
                    defaultValue: '—',
                },
                {
                    parameter: 'size',
                    explain: '尺寸',
                    type: 'String',
                    optionalValue: 'large / small / mini',
                    defaultValue: '—',
                },
                {
                    parameter: 'plain',
                    explain: '是否朴素按钮',
                    type: 'boolean',
                    optionalValue: '—',
                    defaultValue: 'false',
                },
                {
                    parameter: 'round',
                    explain: '是否圆角按钮',
                    type: 'boolean',
                    optionalValue: '—',
                    defaultValue: 'false',
                },
                {
                    parameter: 'disabled',
                    explain: '是否禁用状态',
                    type: 'boolean',
                    optionalValue: '—',
                    defaultValue: 'false',
                },
            ],
            code1: `
<mx-button>默认按钮</mx-button>
<mx-button type="primary">主要按钮</mx-button>
<mx-button type="success">success</mx-button>
<mx-button type="warning">warning</mx-button>
<mx-button type="danger">danger</mx-button>
<mx-button type="info">info</mx-button>

<mx-button plain>朴素按钮</mx-button>
<mx-button type="primary" plain>主要按钮</mx-button>
<mx-button type="success" plain>success</mx-button>
<mx-button type="warning" plain>warning</mx-button>
<mx-button type="danger" plain>danger</mx-button>
<mx-button type="info" plain>info</mx-button>

<mx-button round>圆角按钮</mx-button>
<mx-button type="primary" round>主要按钮</mx-button>
<mx-button type="success" round>success</mx-button>
<mx-button type="warning" round>warning</mx-button>
<mx-button type="danger" round>danger</mx-button>
<mx-button type="info" round>info</mx-button>
            `,
            code2: `
<mx-button disabled>默认按钮</mx-button>
<mx-button type="primary" disabled>主要按钮</mx-button>
<mx-button type="success" disabled>success</mx-button>
<mx-button type="warning" disabled>warning</mx-button>
<mx-button type="danger" disabled>danger</mx-button>
<mx-button type="info" disabled>info</mx-button>

<mx-button plain disabled>朴素按钮</mx-button>
<mx-button type="primary" plain disabled>主要按钮</mx-button>
<mx-button type="success" plain disabled>success</mx-button>
<mx-button type="warning" plain disabled>warning</mx-button>
<mx-button type="danger" plain disabled>danger</mx-button>
<mx-button type="info" plain disabled>info</mx-button>
            `,
            code3: `
<mx-button type="text">文字按钮</mx-button>
<mx-button disabled type="text">文字按钮</mx-button>
            `,
            code4: `
<mx-button size="large">large</mx-button>
<mx-button>默认</mx-button>
<mx-button size="small">small</mx-button>
<mx-button size="mini">mini</mx-button>

<mx-button size="large" round>large</mx-button>
<mx-button round>默认</mx-button>
<mx-button size="small" round>small</mx-button>
<mx-button size="mini" round>mini</mx-button>
            `,
        };
    },
};
</script>

<style scoped>
.page-button {
    background-color: #fff;
    padding: 10px;
}
h1 {
    font-weight: 500;
    font-size: 1.7em;
}
</style>
