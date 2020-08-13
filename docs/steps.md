# Steps 步骤条

## 基础用法

简单的步骤条。

<div>
<fox-steps :active="active">
<fox-step title="步骤一" description="这里是该步骤的描述信息"></fox-step>
<fox-step title="步骤二" description="这里是该步骤的描述信息"></fox-step>
<fox-step title="步骤三" description="这里是该步骤的描述信息"></fox-step>
</fox-steps>
<fox-button class="mt-20" type="primary" @click="next">
下一步
</fox-button>
</div>

## 设置状态

通过`status`设置当前步骤的状态，通过`finishStatus`设置已完成步骤的状态

<div>
<fox-steps :active="active1" status="wait">
<fox-step title="步骤一" description="这里是该步骤的描述信息"></fox-step>
<fox-step title="步骤二" description="这里是该步骤的描述信息"></fox-step>
<fox-step title="步骤三" description="这里是该步骤的描述信息"></fox-step>
</fox-steps>
<fox-button class="mt-20" type="primary" @click="next1">
    下一步
</fox-button>
</div>

## 竖式步骤条

竖直方向的步骤条。

<div>
<div style="height: 240px;">
<fox-steps :active="active1" direction="vertical">
<fox-step title="步骤一" description="这里是该步骤的描述信息"></fox-step>
<fox-step title="步骤二" description="这里是该步骤的描述信息"></fox-step>
<fox-step title="步骤三" description="这里是该步骤的描述信息"></fox-step>
</fox-steps>
</div>
<fox-button class="mt-20" type="primary" @click="next1">
下一步
</fox-button>
</div>

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
