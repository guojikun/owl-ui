<template>
    <div class="page-card">
        <div class="page-item">
            <div>
                <p class="page-title">Card 卡片</p>
                <p class="page-dec">将信息聚合在卡片容器中展示。</p>
            </div>
        </div>
        <div class="page-item">
            <div>
                <p class="page-item-title">卡片的基础用法</p>
                <p class="page-item-dec">包含标题，内容和操作</p>
            </div>
            <div class="page-item-content">
                <page-demo>
                    <mx-card>
                        <div
                            slot="header"
                            style="display: flex;justify-content: space-between;align-items: center;"
                        >
                            <span>卡片名称</span>
                            <mx-button type="text">操作按钮</mx-button>
                        </div>
                        <div>
                            <p>列表内容 1</p>
                            <p>列表内容 2</p>
                            <p>列表内容 3</p>
                        </div>
                    </mx-card>
                    <high-light slot="highlight" :code="code1"></high-light>
                </page-demo>
            </div>
        </div>
        <div class="page-item">
            <div>
                <p class="page-item-title">卡片的简单用法</p>
                <p class="page-item-dec">卡片可以只有内容区域</p>
            </div>
            <div class="page-item-content">
                <page-demo>
                    <mx-card>
                        <div>
                            <p>列表内容 1</p>
                            <p>列表内容 2</p>
                            <p>列表内容 3</p>
                        </div>
                    </mx-card>
                </page-demo>
            </div>
        </div>
        <div class="page-item">
            <div>
                <p class="page-item-title">卡片阴影</p>
                <p class="page-item-dec">可对阴影的显示进行配置。</p>
            </div>
            <div class="page-item-content">
                <page-demo>
                    <div style="display: inline-block;width: 30%;">
                        <mx-card>
                            <p>总是显示</p>
                        </mx-card>
                    </div>
                    <div style="display: inline-block;width: 30%;margin: 0 5%;">
                        <mx-card shadow="hover">
                            <p>Hover显示</p>
                        </mx-card>
                    </div>
                    <div style="display: inline-block;width: 30%;">
                        <mx-card shadow="never">
                            <p>永不显示</p>
                        </mx-card>
                    </div>
                </page-demo>
            </div>
        </div>
        <div class="page-item">
            <div>
                <p class="page-item-title">Card Attributes</p>
            </div>
            <div class="page-item-content">
                <mx-table :data="ColData" :columns="tableColumns"></mx-table>
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
            ColData: [
                {
                    parameter: 'header',
                    explain: '设置 header',
                    type: 'String',
                    optionalValue: '—',
                    defaultValue: '—',
                },
                {
                    parameter: 'body-style',
                    explain: '设置 body 的样式',
                    type: 'Object',
                    optionalValue: '—',
                    defaultValue: "{ padding: '16px 20px' }",
                },
                {
                    parameter: 'shadow',
                    explain: '设置阴影显示时机',
                    type: 'String',
                    optionalValue: 'always / hover / never',
                    defaultValue: 'always',
                },
            ],
            code1: `
<mx-card>
    <div
        slot="header"
        style="display: flex;justify-content: space-between;align-items: center;"
    >
        <span>卡片名称</span>
        <mx-button type="text">操作按钮</mx-button>
    </div>
    <div>
        <p>列表内容 1</p>
        <p>列表内容 2</p>
        <p>列表内容 3</p>
    </div>
</mx-card>
            `,
        };
    },
};
</script>

<style scoped>
.page-card {
    background-color: #ffffff;
}
p {
    margin: 10px 0;
}
h1 {
    font-weight: 500;
    font-size: 1.7em;
}
</style>
