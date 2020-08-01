<template>
    <div class="page-modal">
        <div class="page-item">
            <div>
                <p class="page-title">Alert 警告</p>
                <p class="page-dec">用于页面中展示重要的提示信息。</p>
            </div>
        </div>
        <div class="page-item">
            <div>
                <p class="page-item-title">基本用法</p>
                <p class="page-item-dec">页面中的非浮层元素，不会自动消失。</p>
            </div>
            <div class="page-item-content">
                <page-demo>
                    <mx-alert>
                        <div>这是提示信息</div>
                        <div>用来让人注意的提示文字</div>
                    </mx-alert>
                    <high-light slot="highlight" :code="code1"></high-light>
                </page-demo>
            </div>
        </div>
        <div class="page-item">
            <div>
                <p class="page-item-title">有状态的提示信息</p>
            </div>
            <div class="page-item-content">
                <page-demo>
                    <mx-alert type="success">
                        <div>这是提示信息</div>
                        <div>用来让人注意的提示文字</div>
                    </mx-alert>
                    <mx-alert type="danger">
                        <div>这是提示信息</div>
                        <div>用来让人注意的提示文字</div>
                    </mx-alert>
                    <mx-alert type="warning">
                        <div>这是提示信息</div>
                        <div>用来让人注意的提示文字</div>
                    </mx-alert>
                    <mx-alert type="info">
                        <div>这是提示信息</div>
                        <div>用来让人注意的提示文字</div>
                    </mx-alert>
                    <high-light slot="highlight" :code="code2"></high-light>
                </page-demo>
            </div>
        </div>
        <div class="page-item">
            <div>
                <p class="page-item-title">自定义颜色</p>
                <p class="page-item-dec">通过props中的color来自定义颜色</p>
            </div>
            <div class="page-item-content">
                <page-demo>
                    <mx-alert
                        type="success"
                        :color="{
                            background: 'pink',
                            line: 'red',
                            font: 'white',
                        }"
                    >
                        <div>这是提示信息</div>
                        <div>用来让人注意的提示文字</div>
                    </mx-alert>
                    <mx-alert
                        type="danger"
                        :color="{ font: 'white', background: 'black' }"
                    >
                        <div>这是提示信息</div>
                        <div>用来让人注意的提示文字</div>
                    </mx-alert>
                    <mx-alert type="warning">
                        <div>这是提示信息</div>
                        <div>用来让人注意的提示文字</div>
                    </mx-alert>
                    <mx-alert type="info">
                        <div>这是提示信息</div>
                        <div>用来让人注意的提示文字</div>
                    </mx-alert>
                    <div slot="code">
                        <div>
                            <mx-alert>
                                color是一个对象<br />font--字体颜色；line-左侧竖线的颜色；background-背景颜色
                            </mx-alert>
                        </div>
                        <high-light :code="code3"></high-light>
                    </div>
                </page-demo>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            value: '',
            code1: `
<mx-alert>
    <div>这是提示信息</div>
    <div>用来让人注意的提示文字</div>
</mx-alert>
            `,
            code2: `
<mx-alert type="success">
    <div>这是提示信息</div>
    <div>用来让人注意的提示文字</div>
</mx-alert>
<mx-alert type="danger">
    <div>这是提示信息</div>
    <div>用来让人注意的提示文字</div>
</mx-alert>
<mx-alert type="warning">
    <div>这是提示信息</div>
    <div>用来让人注意的提示文字</div>
</mx-alert>
<mx-alert type="info">
    <div>这是提示信息</div>
    <div>用来让人注意的提示文字</div>
</mx-alert>
            `,
            code3: `
<mx-alert
    type="success"
    :color="{
        background: 'pink',
        line: 'red',
        font: 'white',
    }"
>
    <div>这是提示信息</div>
    <div>用来让人注意的提示文字</div>
</mx-alert>
<mx-alert
    type="danger"
    :color="{ font: 'white', background: 'black' }"
>
    <div>这是提示信息</div>
    <div>用来让人注意的提示文字</div>
</mx-alert>
<mx-alert type="warning">
    <div>这是提示信息</div>
    <div>用来让人注意的提示文字</div>
</mx-alert>
<mx-alert type="info">
    <div>这是提示信息</div>
    <div>用来让人注意的提示文字</div>
</mx-alert>
            `,
        };
    },
};
</script>

<style lang="scss" scoped>
.page-modal {
    font-size: 14px;
    background-color: #fff;
}
.page-modal-item {
    padding: 20px;
}
h1 {
    font-weight: 500;
    font-size: 1.7em;
}
.page-modal-item-content {
    padding: 20px;
    border: 1px solid #eeeeee;
    width: 600px;
}
</style>
