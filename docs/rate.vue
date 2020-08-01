<template>
    <div class="page">
        <div class="page-item">
            <div>
                <h1 class="page-title">Rate 评分</h1>
            </div>
        </div>
        <div class="page-item">
            <div>
                <h1 class="page-item-title">基本用法</h1>
            </div>
            <div class="page-item-content">
                <page-demo>
                    <mx-rate v-model="value"></mx-rate>
                    <high-light slot="highlight" :code="code1"></high-light>
                </page-demo>
            </div>
        </div>
        <div class="page-item">
            <div>
                <h1 class="page-item-title">click选择</h1>
            </div>
            <div class="page-item-content">
                <page-demo>
                    <mx-rate v-model="value1" tigger="click"></mx-rate>
                    <high-light slot="highlight" :code="code2"></high-light>
                </page-demo>
            </div>
        </div>
        <div class="page-item">
            <div>
                <h1 class="page-item-title">自定义icon</h1>
            </div>
            <div class="page-item-content">
                <page-demo>
                    <mx-rate
                        v-model="value1"
                        tigger="click"
                        icon="ios-heart-empty"
                        active-icon="ios-heart"
                    ></mx-rate>
                    <high-light slot="highlight" :code="code3"></high-light>
                </page-demo>
            </div>
        </div>
        <div class="page-item">
            <div>
                <h1 class="page-item-title">只读</h1>
            </div>
            <div class="page-item-content">
                <page-demo>
                    <mx-rate v-model="value2" disabled></mx-rate>
                    <high-light slot="highlight" :code="code4"></high-light>
                </page-demo>
            </div>
        </div>
        <div class="page-item">
            <div>
                <h1 class="page-item-title">Rate Attributes</h1>
            </div>
            <div class="page-item-content">
                <mx-table :columns="propCol" :data="tableData"></mx-table>
            </div>
        </div>
    </div>
</template>

<script>
import { columns } from '@/data/table.js';
export default {
    data() {
        return {
            value: 1,
            value1: 2,
            value2: 2,
            propCol: columns,
            tableData: [
                {
                    parameter: 'value',
                    explain: '绑定值',
                    type: 'Number',
                    optionalValue: '—',
                    defaultValue: '0',
                },
                {
                    parameter: 'disabled',
                    explain: '是否为只读',
                    type: 'Boolean',
                    optionalValue: '—',
                    defaultValue: 'false',
                },
                {
                    parameter: 'allow-half',
                    explain: '是否允许半选',
                    type: 'Boolean',
                    optionalValue: '—',
                    defaultValue: 'false',
                },
                {
                    parameter: 'tigger',
                    explain: '选择方式',
                    type: 'String',
                    optionalValue: 'click,hover',
                    defaultValue: 'hover',
                },
            ],
            code1: '<mx-rate v-model="value"></mx-rate>',
            code2: '<mx-rate v-model="value1" tigger="click"></mx-rate>',
            code3: `
<mx-rate v-model="value1" icon="ios-heart-empty" active-icon="ios-heart"></mx-rate>
            `,
            code4: '<mx-rate v-model="value2" disabled></mx-rate>',
        };
    },
};
</script>
