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
        <div>
            <div style="width: 400px;">
                <div class="text-center">
                    <fox-tooltip
                        content="Top Left 提示文字"
                        placement="top-start"
                    >
                        <fox-button>上左</fox-button>
                    </fox-tooltip>
                    <fox-tooltip
                        class="ml-10"
                        content="Top Center 提示文字"
                        placement="top"
                    >
                        <fox-button>上边</fox-button>
                    </fox-tooltip>
                    <fox-tooltip
                        class="ml-10"
                        content="Top Right 提示文字"
                        placement="top-end"
                    >
                        <fox-button>上右</fox-button>
                    </fox-tooltip>
                </div>
                <div class="flex-between">
                    <div style="width: 70px;">
                        <fox-tooltip
                            class="mt-20"
                            content="Left Top 提示文字"
                            placement="left-start"
                        >
                            <fox-button>左上</fox-button>
                        </fox-tooltip>
                        <fox-tooltip
                            class="mt-20"
                            content="Left Center 提示文字"
                            placement="left"
                        >
                            <fox-button>左边</fox-button>
                        </fox-tooltip>
                        <fox-tooltip
                            class="mt-20"
                            content="Left Bottom 提示文字"
                            placement="left-end"
                        >
                            <fox-button>左下</fox-button>
                        </fox-tooltip>
                    </div>
                    <div style="width: 70px;">
                        <fox-tooltip
                            class="mt-20"
                            content="Right Top 提示文字"
                            placement="right-start"
                        >
                            <fox-button>右上</fox-button>
                        </fox-tooltip>
                        <fox-tooltip
                            class="mt-20"
                            content="Right Center 提示文字"
                            placement="right"
                        >
                            <fox-button>右边</fox-button>
                        </fox-tooltip>
                        <fox-tooltip
                            class="mt-20"
                            content="Right Bottom 提示文字"
                            placement="right-end"
                        >
                            <fox-button>右下</fox-button>
                        </fox-tooltip>
                    </div>
                </div>
                <div class="text-center">
                    <fox-tooltip
                        class="ml-10"
                        content="Bottom Left 提示文字"
                        placement="bottom-start"
                    >
                        <fox-button>下左</fox-button>
                    </fox-tooltip>
                    <fox-tooltip
                        class="ml-10"
                        content="Bottom Center 提示文字"
                        placement="bottom"
                    >
                        <fox-button>下边</fox-button>
                    </fox-tooltip>
                    <fox-tooltip
                        class="ml-10"
                        content="Bottom Right 提示文字"
                        placement="bottom-end"
                    >
                        <fox-button>下右</fox-button>
                    </fox-tooltip>
                </div>
            </div>
        </div>
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
        <div>
            <fox-tooltip
                content="Bottom Left 提示文字"
                placement="bottom-start"
            >
                <fox-button>dart(default)</fox-button>
            </fox-tooltip>
            <fox-tooltip
                class="ml-20"
                content="Bottom Center 提示文字"
                theme="light"
            >
                <fox-button>light</fox-button>
            </fox-tooltip>
        </div>
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
        <div>
            <fox-tooltip placement="top">
                <fox-button>slot content</fox-button>
                <template v-slot:content>
                    多行信息
                    <br />
                    第二行信息
                </template>
            </fox-tooltip>
        </div>
    </div>
</div>

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
