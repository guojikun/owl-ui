# Select 选择器

## 基础用法

适用广泛的基础单选

<fox-select v-model="value">
    <fox-option value="1" label="蛋糕"></fox-option>
    <fox-option value="年糕"></fox-option>
    <fox-option label="雪糕"></fox-option>
</fox-select>

```vue
<template>
    <fox-select v-model="value">
        <fox-option value="1" label="蛋糕"></fox-option>
        <fox-option value="年糕"></fox-option>
        <fox-option label="雪糕"></fox-option>
    </fox-select>
</template>
<script>
export default {
    data() {
        return {
            value: "",
        };
    },
};
</script>
```

<script>
export default {
    data(){
        return {
            value: ''
        }
    }
}
</script>
