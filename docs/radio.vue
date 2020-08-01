<template>
    <div class="page">
        <div class="page-item">
            <div>
                <h1 class="page-title">Radio 单选框</h1>
                <p class="page-dec">在一组备选项中进行单选</p>
            </div>
        </div>
        <div class="page-item">
            <div>
                <h1 class="page-item-title">基础用法</h1>
                <p class="page-item-dec">
                    由于选项默认可见，不宜过多，若选项过多，建议使用Select选择器。
                </p>
            </div>
            <div class="page-item-content">
                <page-demo>
                    <mx-radio v-model="value" label="1">选项一</mx-radio>
                    <mx-radio v-model="value" label="2">选项二</mx-radio>
                </page-demo>
            </div>
        </div>
        <div class="page-item">
            <div>
                <h1 class="page-item-title">禁用状态</h1>
                <p class="page-item-dec">单选框不可用的状态。</p>
            </div>
            <div class="page-item-content">
                <page-demo>
                    <mx-radio v-model="value1" label="1" disabled>
                        选项一
                    </mx-radio>
                    <mx-radio v-model="value1" label="2" disabled>
                        选项二
                    </mx-radio>
                </page-demo>
            </div>
        </div>
        <div class="page-item">
            <div>
                <h1 class="page-item-title">单选框组</h1>
                <p class="page-item-dec">适用于在多个互斥的选项中选择的场景</p>
            </div>
            <div class="page-item-content">
                <page-demo>
                    <mx-radio-group v-model="value2">
                        <mx-radio label="1">选项一</mx-radio>
                        <mx-radio label="2">选项二</mx-radio>
                        <mx-radio label="3">选项三</mx-radio>
                    </mx-radio-group>
                </page-demo>
            </div>
        </div>
        <div class="page-item">
            <div>
                <h1 class="page-title">API</h1>
            </div>
            <div class="page-item">
                <div>
                    <h1 class="page-item-title">Radio Props</h1>
                </div>
                <div class="page-item-content">
                    <mx-table :columns="propCol" :data="pcData"></mx-table>
                </div>
            </div>
            <div class="page-item">
                <div>
                    <h1 class="page-item-title">Radio Events</h1>
                </div>
                <div class="page-item-content">
                    <mx-table :columns="eventsCol" :data="ecData"></mx-table>
                </div>
            </div>
            <div class="page-item">
                <div>
                    <h1 class="page-item-title">RadioGroup Props</h1>
                </div>
                <div class="page-item-content">
                    <mx-table :columns="propCol" :data="pcgData"></mx-table>
                </div>
            </div>
            <div class="page-item">
                <div>
                    <h1 class="page-item-title">RadioGroup Events</h1>
                </div>
                <div class="page-item-content">
                    <mx-table :columns="eventsCol" :data="ecData"></mx-table>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import { columns, eventsCol, slotCol } from '@/data/table.js';
export default {
    data() {
        return {
            value: '2',
            value1: '1',
            value2: '1',
            propCol: columns,
            eventsCol,
            slotCol,
            pcData: [
                {
                    parameter: 'value/v-model',
                    explain: '绑定值',
                    type: 'string / number / boolean',
                    optionalValue: '-',
                    defaultValue: '-',
                },
                {
                    parameter: 'label',
                    explain: 'Radio 的 value',
                    type: 'string / number / boolean',
                    optionalValue: '-',
                    defaultValue: '-',
                },
                {
                    parameter: 'disabled',
                    explain: '是否禁用',
                    type: 'boolean',
                    optionalValue: '-',
                    defaultValue: 'false',
                },
                {
                    parameter: 'name',
                    explain: '原生 name 属性',
                    type: 'string',
                    optionalValue: '-',
                    defaultValue: '-',
                },
            ],
            ecData: [
                {
                    name: 'change',
                    explain: '绑定值变化时触发的事件',
                    args: '选中的 Radio label 值',
                },
            ],
            pcgData: [
                {
                    parameter: 'value/v-model',
                    explain: '绑定值',
                    type: 'string / number / boolean',
                    optionalValue: '-',
                    defaultValue: '-',
                },
                {
                    parameter: 'disabled',
                    explain: '是否禁用',
                    type: 'boolean',
                    optionalValue: '-',
                    defaultValue: 'false',
                },
            ],
        };
    },
};
</script>
