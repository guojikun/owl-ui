<template>
    <div class="page">
        <div class="page-item">
            <div>
                <h1 class="page-title">Steps 步骤条</h1>
                <p class="page-dec"></p>
            </div>
        </div>
        <div class="page-item">
            <div>
                <h1 class="page-item-title">基础用法</h1>
                <p class="page-item-dec">简单的步骤条。</p>
            </div>
            <div class="page-item-conent">
                <page-demo>
                    <mx-steps :active="active">
                        <mx-step
                            title="步骤一"
                            description="这里是该步骤的描述信息"
                        ></mx-step>
                        <mx-step
                            title="步骤二"
                            description="这里是该步骤的描述信息"
                        ></mx-step>
                        <mx-step
                            title="步骤三"
                            description="这里是该步骤的描述信息"
                        ></mx-step>
                    </mx-steps>
                    <mx-button class="mt-20" type="primary" @click="next">
                        下一步
                    </mx-button>
                </page-demo>
            </div>
        </div>
        <div class="page-item">
            <div>
                <h1 class="page-item-title">设置状态</h1>
                <p class="page-item-dec">
                    通过status设置当前步骤的状态，通过finishStatus设置已完成步骤的状态
                </p>
            </div>
            <div class="page-item-conent">
                <page-demo>
                    <mx-steps :active="active1" status="wait">
                        <mx-step
                            title="步骤一"
                            description="这里是该步骤的描述信息"
                        ></mx-step>
                        <mx-step
                            title="步骤二"
                            description="这里是该步骤的描述信息"
                            status="success"
                        ></mx-step>
                        <mx-step
                            title="步骤三"
                            description="这里是该步骤的描述信息"
                            status="error"
                        ></mx-step>
                    </mx-steps>
                    <mx-button class="mt-20" type="primary" @click="next1">
                        下一步
                    </mx-button>
                </page-demo>
            </div>
        </div>
        <div class="page-item">
            <div>
                <h1 class="page-item-title">竖式步骤条</h1>
                <p class="page-item-dec">
                    竖直方向的步骤条。
                </p>
            </div>
            <div class="page-item-conent">
                <page-demo>
                    <div style="height: 240px;">
                        <mx-steps :active="active1" direction="vertical">
                            <mx-step
                                title="步骤一"
                                description="这里是该步骤的描述信息"
                            ></mx-step>
                            <mx-step
                                title="步骤二"
                                description="这里是该步骤的描述信息"
                            ></mx-step>
                            <mx-step
                                title="步骤三"
                                description="这里是该步骤的描述信息"
                            ></mx-step>
                        </mx-steps>
                    </div>
                    <mx-button class="mt-20" type="primary" @click="next1">
                        下一步
                    </mx-button>
                </page-demo>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    data() {
        return {
            active: 2,
            active1: 1,
        };
    },
    methods: {
        next() {
            if (this.active < 3) {
                this.active += 1;
            } else {
                this.active = 1;
            }
        },
        next1() {
            if (this.active1 < 3) {
                this.active1 += 1;
            } else {
                this.active1 = 1;
            }
        },
    },
};
</script>
