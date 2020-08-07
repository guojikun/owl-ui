# Form 表单

由输入框、选择器、单选框、多选框等控件组成，用以收集、校验、提交数据</p>

## 典型表单

包括各种表单项，比如输入框、选择器、开关、单选框、多选框等。

<div class="mt-10">
    <fox-form :model="formData" label-position="right">
        <fox-form-item prop="name" label="名称">
            <fox-input v-model="formData.name"></fox-input>
        </fox-form-item>
        <fox-form-item prop="sex" label="性别">
            <fox-radio-group v-model="formData.sex">
                <fox-radio label="1">男</fox-radio>
                <fox-radio label="0">女</fox-radio>
            </fox-radio-group>
        </fox-form-item>
        <fox-form-item prop="like" label="爱好">
            <fox-checkbox-group v-model="formData.like">
                <fox-checkbox label="1">读书</fox-checkbox>
                <fox-checkbox label="2">看报</fox-checkbox>
                <fox-checkbox label="3">玩游戏</fox-checkbox>
                <fox-checkbox label="4">听音乐</fox-checkbox>
            </fox-checkbox-group>
        </fox-form-item>
        <fox-form-item prop="status" label="状态">
            <fox-switch v-model="formData.status"></fox-switch>
        </fox-form-item>
        <fox-form-item>
            <fox-button type="primary" @click="handleSubmit">提交</fox-button>
            <fox-button>重置</fox-button>
        </fox-form-item>
    </fox-form>
</div>

## 表单验证

在防止用户犯错的前提下，尽可能让用户更早地发现并纠正错误。

<div class="mt-10">
    <fox-form :model="formData" :rules="rules" ref="form1" label-position="right">
        <fox-form-item prop="name" label="名称">
            <fox-input v-model="formData.name"></fox-input>
        </fox-form-item>
        <fox-form-item prop="sex" label="性别">
            <fox-radio-group v-model="formData.sex">
                <fox-radio label="1">男</fox-radio>
                <fox-radio label="0">女</fox-radio>
            </fox-radio-group>
        </fox-form-item>
        <fox-form-item prop="like" label="爱好">
            <fox-checkbox-group v-model="formData.like">
                <fox-checkbox label="1">读书</fox-checkbox>
                <fox-checkbox label="2">看报</fox-checkbox>
                <fox-checkbox label="3">玩游戏</fox-checkbox>
                <fox-checkbox label="4">听音乐</fox-checkbox>
            </fox-checkbox-group>
        </fox-form-item>
        <fox-form-item prop="status" label="状态">
            <fox-switch v-model="formData.status"></fox-switch>
        </fox-form-item>
        <fox-form-item>
            <fox-button type="primary" @click="handleSubmit">提交</fox-button>
            <fox-button>重置</fox-button>
        </fox-form-item>
    </fox-form>
</div>

<script>
export default {
    data() {
        return {
            formData: {
                name: "",
                sex: "",
                like: [],
                status: "",
            },
            rules: {
                name: [{ required: true, message: "名称不能为空", tiggers: ["change", "blur"] }],
                sex: [{ required: true, message: "性别为必选项", tiggers: "change" }],
                like: [{ required: true, type: "array", message: "爱好为必选项", tiggers: "change" }],
            },
        };
    },
    methods: {
        handleSubmit(val) {
            this.$refs["form1"].validate(valid => {
                if (valid) {
                    window.alert("提交成功");
                } else {
                    window.alert("表单校验失败");
                }
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
.my-svg-path {
    stroke-dasharray: 252.2px, 252.2px;
    stroke-dashoffset: 110px;
    transition: stroke-dashoffset 0.6s ease 0s, stroke 0.6s ease 0s;
    //     transform: rotateZ(90deg);
    //     transform-origin: 50% 50%;
    transition: stroke-dashoffset 0.6s ease 0s, stroke 0.6s ease 0s;
}
.page-form {
    font-size: 14px;
    background-color: #fff;
}
.page-form-item {
    padding: 20px;
}
h1 {
    font-weight: 500;
    font-size: 1.7em;
}
.page-form-item-content {
    padding: 20px;
    border: 1px solid #eeeeee;
}
.progress-item + .progress-item {
    margin-top: 20px;
}
</style>
