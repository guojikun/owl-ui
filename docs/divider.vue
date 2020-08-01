<template>
    <div class="page">
        <div class="page-item">
            <div>
                <p class="page-title">Divider 分割线</p>
                <p class="page-dec">
                    区隔内容的分割线。<br />对不同章节的文本段落进行分割。<br />对行内文字/链接进行分割，例如表格的操作列。
                </p>
            </div>
        </div>
        <div class="page-item">
            <div>
                <p class="page-item-title">基础用法</p>
                <p class="page-item-dec">
                    默认为水平分割线，可在中间加入文字。
                </p>
            </div>
            <div class="page-item-content">
                <page-demo>
                    <p>
                        Steven Paul Jobs was an American entrepreneur and
                        business magnate. He was the chairman, chief executive
                        officer, and a co-founder of Apple Inc.
                    </p>
                    <mx-divider></mx-divider>
                    <p>
                        Steven Paul Jobs was an American entrepreneur and
                        business magnate. He was the chairman, chief executive
                        officer, and a co-founder of Apple Inc.
                    </p>
                    <mx-divider>文字在中间</mx-divider>
                    <p>
                        Steven Paul Jobs was an American entrepreneur and
                        business magnate. He was the chairman, chief executive
                        officer, and a co-founder of Apple Inc.
                    </p>
                    <mx-divider dashed></mx-divider>
                    <p>
                        Steven Paul Jobs was an American entrepreneur and
                        business magnate. He was the chairman, chief executive
                        officer, and a co-founder of Apple Inc.
                    </p>
                    <div slot="highlight">
                        <high-light :code="code1"></high-light>
                    </div>
                </page-demo>
            </div>
        </div>
        <div class="page-item">
            <div>
                <p class="page-item-title">垂直分割线</p>
                <p class="page-item-dec">
                    使用 type="vertical" 设置为行内的垂直分割线。
                </p>
            </div>
            <div class="page-item-content">
                <page-demo>
                    <span>text</span>
                    <mx-divider type="vertical"></mx-divider>
                    <span>image</span>
                    <mx-divider type="vertical"></mx-divider>
                    <span>link</span>
                    <mx-divider type="vertical"></mx-divider>
                    <div slot="highlight">
                        <high-light :code="code2"></high-light>
                    </div>
                </page-demo>
            </div>
        </div>
        <div class="page-item">
            <div>
                <p class="page-item-title">标题位置</p>
                <p class="page-item-dec">修改分割线标题的位置。</p>
            </div>
            <div class="page-item-content">
                <page-demo>
                    <p>
                        Steven Paul Jobs was an American entrepreneur and
                        business magnate. He was the chairman, chief executive
                        officer, and a co-founder of Apple Inc.
                    </p>
                    <mx-divider placement="left">文字在左侧</mx-divider>
                    <p>
                        Steven Paul Jobs was an American entrepreneur and
                        business magnate. He was the chairman, chief executive
                        officer, and a co-founder of Apple Inc.
                    </p>
                    <mx-divider>文字在中间</mx-divider>
                    <p>
                        Steven Paul Jobs was an American entrepreneur and
                        business magnate. He was the chairman, chief executive
                        officer, and a co-founder of Apple Inc.
                    </p>
                    <mx-divider placement="right">文字在右侧</mx-divider>
                    <p>
                        Steven Paul Jobs was an American entrepreneur and
                        business magnate. He was the chairman, chief executive
                        officer, and a co-founder of Apple Inc.
                    </p>
                    <div slot="highlight">
                        <high-light :code="code3"></high-light>
                    </div>
                </page-demo>
            </div>
        </div>
        <div class="page-item">
            <div>
                <p class="page-title">API</p>
            </div>
            <div class="page-item">
                <div>
                    <p class="page-item-title">Divider Props</p>
                </div>
                <div class="page-item-content">
                    <mx-table :data="tableData" :columns="tableColumns">
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
            code1: `
<p>Steven Paul Jobs was an American entrepreneur and business magnate. He was the chairman, chief executive officer, and a co-founder of Apple Inc.</p>
<mx-divider></mx-divider>
<p>Steven Paul Jobs was an American entrepreneur and  business magnate. He was the chairman, chief executive officer, and a co-founder of Apple Inc.</p>
<mx-divider>文字在中间</mx-divider>
<p>Steven Paul Jobs was an American entrepreneur and business magnate. He was the chairman, chief executive officer, and a co-founder of Apple Inc.</p>
<mx-divider dashed></mx-divider>
<p>Steven Paul Jobs was an American entrepreneur and business magnate. He was the chairman, chief executive officer, and a co-founder of Apple Inc.</p>
            `,
            code2: `
<span>text</span>
<mx-divider type="vertical"></mx-divider>
<span>image</span>
<mx-divider type="vertical"></mx-divider>
<span>link</span>
<mx-divider type="vertical"></mx-divider>
            `,
            code3: `
<p>Steven Paul Jobs was an American entrepreneur and business magnate. He was the chairman, chief executive officer, and a co-founder of Apple Inc.</p>
<mx-divider placement="left"></mx-divider>
<p>Steven Paul Jobs was an American entrepreneur and  business magnate. He was the chairman, chief executive officer, and a co-founder of Apple Inc.</p>
<mx-divider>文字在中间</mx-divider>
<p>Steven Paul Jobs was an American entrepreneur and business magnate. He was the chairman, chief executive officer, and a co-founder of Apple Inc.</p>
<mx-divider placement="right"></mx-divider>
<p>Steven Paul Jobs was an American entrepreneur and business magnate. He was the chairman, chief executive officer, and a co-founder of Apple Inc.</p>
            `,
            tableData: [
                {
                    parameter: 'direction',
                    explain: '设置分割线方向',
                    type: 'String',
                    optionalValue: 'horizontal / vertical',
                    defaultValue: 'horizontal',
                },
                {
                    parameter: 'placement',
                    explain: '设置分割线文案的位置',
                    type: 'String',
                    optionalValue: 'left / right / center',
                    defaultValue: 'center',
                },
            ],
        };
    },
    methods: {
        handleClose(val) {
            this.tags = this.tags.filter(cur => {
                return val != cur.name;
            });
        },
        ok1() {
            this.value = false;
        },
        cancel1() {
            this.value = false;
        },
    },
};
</script>

<style lang="scss" scoped>
p {
    line-height: 1.4em;
}
p.light {
    color: #666666;
}
</style>
