<template>
    <div class="page-radio">
        <div class="page-item">
            <div>
                <p class="page-title">cell 单元格</p>
                <p class="page-dec">在一组备选项中进行单选</p>
            </div>
        </div>
        <div class="page-item">
            <div>
                <p class="page-item-title">基础用法</p>
                <p class="page-item-dec">包含各类用法的综合示例。</p>
            </div>
            <div class="page-item-content">
                <page-demo>
                    <mx-card style="width: 400px;">
                        <div slot="name">选项</div>
                        <mx-cell-group>
                            <mx-cell title="只显示标题"></mx-cell>
                            <mx-cell
                                title="显示label"
                                label="label的内容"
                            ></mx-cell>
                            <mx-cell title="显示extra" extra="extra"></mx-cell>
                            <mx-cell
                                title="显示向右的icon"
                                is-link
                                name="link"
                            ></mx-cell>
                            <mx-cell
                                title="链接"
                                is-link
                                name="link"
                                to="/layout"
                                @click="handleClick"
                                extra="详细信息"
                            ></mx-cell>
                            <mx-cell
                                title="新窗口打开"
                                is-link
                                name="link"
                                to="/layout"
                                @click="handleClick"
                                target="_blank"
                            ></mx-cell>
                            <mx-cell title="禁用" disabled></mx-cell>
                            <mx-cell title="选中" selected></mx-cell>
                            <!-- <mx-cell title="开关">
                                <mx-switch
                                    slot="extra"
                                    v-model="status"
                                ></mx-switch>
                            </mx-cell> -->
                        </mx-cell-group>
                    </mx-card>
                </page-demo>
            </div>
        </div>
        <div class="page-item">
            <div>
                <h1>是否显示border</h1>
                <p>给cell加上边框</p>
            </div>
            <div class="page-item-content">
                <page-demo>
                    <mx-card style="width: 400px;">
                        <mx-cell-group border>
                            <mx-cell title="只显示标题"></mx-cell>
                            <mx-cell
                                title="显示label"
                                label="label的内容"
                            ></mx-cell>
                            <mx-cell title="显示extra" extra="extra"></mx-cell>
                            <mx-cell
                                title="显示向右的icon"
                                is-link
                                name="link"
                            ></mx-cell>
                            <mx-cell
                                title="链接"
                                is-link
                                name="link"
                                to="/layout"
                                @click="handleClick"
                                extra="详细信息"
                            ></mx-cell>
                            <mx-cell
                                title="新窗口打开"
                                is-link
                                name="link"
                                to="/layout"
                                @click="handleClick"
                                target="_blank"
                            ></mx-cell>
                            <mx-cell title="禁用" disabled></mx-cell>
                            <mx-cell title="选中" selected></mx-cell>
                            <!-- <mx-cell title="开关">
                                <mx-switch
                                    slot="extra"
                                    v-model="status"
                                ></mx-switch>
                            </mx-cell> -->
                        </mx-cell-group>
                    </mx-card>
                </page-demo>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            value: '2',
            value2: '1',
            status: true,
        };
    },
    methods: {
        handleClick() {
            return false;
        },
        changeStatus() {
            this.status = !this.status;
        },
        cancel1() {
            this.value = false;
        },
    },
};
</script>

<style lang="scss" scoped>
.page-radio {
    font-size: 14px;
    background-color: #fff;
}
.page-radio-item {
    padding: 20px;
}
h1 {
    font-weight: 500;
    font-size: 1.7em;
}
.page-radio-item-content {
    padding: 20px;
    border: 1px solid #eeeeee;
}
.progress-item + .progress-item {
    margin-top: 20px;
}
</style>
