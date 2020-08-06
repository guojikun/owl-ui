# Rate 评分

## 基本用法

<div class="mt-20"></div>
<fox-rate v-model="value"></fox-rate>

```html
<fox-rate v-model="value"></fox-rate>
```

## click 选择

<div class="mt-20"></div>
<fox-rate v-model="value1" tigger="click"></fox-rate>

```html
<fox-rate v-model="value1" tigger="click"></fox-rate>
```

## 自定义 icon</h1>

<div class="mt-20"></div>
<fox-rate v-model="value1" tigger="click" icon="heart" active-icon="heart-fill"> </fox-rate>

```html
<fox-rate v-model="value1" tigger="click" icon="heart" active-icon="heart-fill"> </fox-rate>
```

## 只读

<div class="mt-20"></div>
<fox-rate v-model="value2" disabled></fox-rate>

```html
<fox-rate v-model="value2" disabled></fox-rate>
```

<script>
export default {
    data() {
        return {
            value: 1,
            value1: 2,
            value2: 2,
            tableData: [
                {
                    parameter: 'value',
                    explain: '绑定值',
                    type: 'Number',
                    optionalValue: '—',
                    defaultValue: '0',
                },
                {
                    parameter: 'disabled',
                    explain: '是否为只读',
                    type: 'Boolean',
                    optionalValue: '—',
                    defaultValue: 'false',
                },
                {
                    parameter: 'allow-half',
                    explain: '是否允许半选',
                    type: 'Boolean',
                    optionalValue: '—',
                    defaultValue: 'false',
                },
                {
                    parameter: 'tigger',
                    explain: '选择方式',
                    type: 'String',
                    optionalValue: 'click,hover',
                    defaultValue: 'hover',
                },
            ],
        };
    },
};
</script>
