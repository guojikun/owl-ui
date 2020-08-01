<template>
    <div class="page">
        <div class="page-item">
            <div>
                <h1 class="page-title">Tooltip 文字提示</h1>
                <p class="page-dec">常用于展示鼠标 hover 时的提示信息。</p>
            </div>
        </div>
        <div class="page-item">
            <div>
                <h1 class="page-item-title">基础用法</h1>
                <p class="page-item-dec">
                    在这里我们提供9种不同方向的展示方式，可以通过以下完整示例来理解，选择你要的效果。
                </p>
            </div>
            <div class="page-item-content">
                <page-demo>
                    <div style="width: 400px;">
                        <div class="text-center">
                            <mx-tooltip
                                content="Top Left 提示文字"
                                placement="top-start"
                            >
                                <mx-button>上左</mx-button>
                            </mx-tooltip>
                            <mx-tooltip
                                class="ml-10"
                                content="Top Center 提示文字"
                                placement="top"
                            >
                                <mx-button>上边</mx-button>
                            </mx-tooltip>
                            <mx-tooltip
                                class="ml-10"
                                content="Top Right 提示文字"
                                placement="top-end"
                            >
                                <mx-button>上右</mx-button>
                            </mx-tooltip>
                        </div>
                        <div class="flex-between">
                            <div style="width: 70px;">
                                <mx-tooltip
                                    class="mt-20"
                                    content="Left Top 提示文字"
                                    placement="left-start"
                                >
                                    <mx-button>左上</mx-button>
                                </mx-tooltip>
                                <mx-tooltip
                                    class="mt-20"
                                    content="Left Center 提示文字"
                                    placement="left"
                                >
                                    <mx-button>左边</mx-button>
                                </mx-tooltip>
                                <mx-tooltip
                                    class="mt-20"
                                    content="Left Bottom 提示文字"
                                    placement="left-end"
                                >
                                    <mx-button>左下</mx-button>
                                </mx-tooltip>
                            </div>
                            <div style="width: 70px;">
                                <mx-tooltip
                                    class="mt-20"
                                    content="Right Top 提示文字"
                                    placement="right-start"
                                >
                                    <mx-button>右上</mx-button>
                                </mx-tooltip>
                                <mx-tooltip
                                    class="mt-20"
                                    content="Right Center 提示文字"
                                    placement="right"
                                >
                                    <mx-button>右边</mx-button>
                                </mx-tooltip>
                                <mx-tooltip
                                    class="mt-20"
                                    content="Right Bottom 提示文字"
                                    placement="right-end"
                                >
                                    <mx-button>右下</mx-button>
                                </mx-tooltip>
                            </div>
                        </div>
                        <div class="text-center">
                            <mx-tooltip
                                class="ml-10"
                                content="Bottom Left 提示文字"
                                placement="bottom-start"
                            >
                                <mx-button>下左</mx-button>
                            </mx-tooltip>
                            <mx-tooltip
                                class="ml-10"
                                content="Bottom Center 提示文字"
                                placement="bottom"
                            >
                                <mx-button>下边</mx-button>
                            </mx-tooltip>
                            <mx-tooltip
                                class="ml-10"
                                content="Bottom Right 提示文字"
                                placement="bottom-end"
                            >
                                <mx-button>下右</mx-button>
                            </mx-tooltip>
                        </div>
                    </div>
                </page-demo>
            </div>
        </div>
        <div class="page-item">
            <div>
                <h1 class="page-item-title">主题</h1>
                <p class="page-item-dec">
                    Tooltip 组件提供了两个不同的主题：dark和light。
                </p>
            </div>
            <div class="page-item-content">
                <page-demo>
                    <mx-tooltip
                        content="Bottom Left 提示文字"
                        placement="bottom-start"
                    >
                        <mx-button>dart(default)</mx-button>
                    </mx-tooltip>
                    <mx-tooltip
                        class="ml-20"
                        content="Bottom Center 提示文字"
                        theme="light"
                    >
                        <mx-button>light</mx-button>
                    </mx-tooltip>
                </page-demo>
            </div>
        </div>
        <div class="page-item">
            <div>
                <h1 class="page-item-title">更多 Content</h1>
                <p class="page-item-dec">
                    展示多行文本或者是设置文本内容的格式
                </p>
            </div>
            <div class="page-item-content">
                <page-demo>
                    <mx-tooltip placement="top">
                        <mx-button>slot content</mx-button>
                        <template v-slot:content>
                            多行信息
                            <br />
                            第二行信息
                        </template>
                    </mx-tooltip>
                </page-demo>
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
<style>
.flex-between {
    display: flex;
    justify-content: space-between;
}
.text-center {
    text-align: center;
}
.ml-0 {
    margin-left: 0;
    margin-top: 10px;
}
</style>
