# Button 按钮

常用的操作按钮。

## 基础用法

按钮的基础用法

<div class="mt-20">
<fox-button>默认按钮</fox-button>
<fox-button type="primary">主要按钮</fox-button>
<fox-button type="success">success</fox-button>
<fox-button type="warning">warning</fox-button>
<fox-button type="danger">danger</fox-button>
<fox-button type="info">info</fox-button>
</div>
<div class="mt-20">
<fox-button plain>朴素按钮</fox-button>
<fox-button type="primary" plain>主要按钮</fox-button>
<fox-button type="success" plain>success</fox-button>
<fox-button type="warning" plain>warning</fox-button>
<fox-button type="danger" plain>danger</fox-button>
<fox-button type="info" plain>info</fox-button>
</div>
<div class="mt-20">
<fox-button round>圆角按钮</fox-button>
<fox-button type="primary" round>主要按钮</fox-button>
<fox-button type="success" round>success</fox-button>
<fox-button type="warning" round>warning</fox-button>
<fox-button type="danger" round>danger</fox-button>
<fox-button type="info" round>info</fox-button>
</div>

```html
<fox-button>默认按钮</fox-button>
<fox-button type="primary">主要按钮</fox-button>
<fox-button type="success">success</fox-button>
<fox-button type="warning">warning</fox-button>
<fox-button type="danger">danger</fox-button>
<fox-button type="info">info</fox-button>

<fox-button plain>朴素按钮</fox-button>
<fox-button type="primary" plain>主要按钮</fox-button>
<fox-button type="success" plain>success</fox-button>
<fox-button type="warning" plain>warning</fox-button>
<fox-button type="danger" plain>danger</fox-button>
<fox-button type="info" plain>info</fox-button>

<fox-button round>圆角按钮</fox-button>
<fox-button type="primary" round>主要按钮</fox-button>
<fox-button type="success" round>success</fox-button>
<fox-button type="warning" round>warning</fox-button>
<fox-button type="danger" round>danger</fox-button>
<fox-button type="info" round>info</fox-button>
```

## 禁用状态

按钮的禁用状态

<div class="mt-20">
<fox-button disabled>默认按钮</fox-button>
<fox-button type="primary" disabled>主要按钮</fox-button>
<fox-button type="success" disabled>success</fox-button>
<fox-button type="warning" disabled>warning</fox-button>
<fox-button type="danger" disabled>danger</fox-button>
<fox-button type="info" disabled>info</fox-button>
</div>
<div class="mt-20">
<fox-button plain disabled>朴素按钮</fox-button>
<fox-button type="primary" plain disabled>主要按钮</fox-button>
<fox-button type="success" plain disabled>success</fox-button>
<fox-button type="warning" plain disabled>warning</fox-button>
<fox-button type="danger" plain disabled>danger</fox-button>
<fox-button type="info" plain disabled>info</fox-button>
</div>

```html
<fox-button disabled>默认按钮</fox-button>
<fox-button type="primary" disabled>主要按钮</fox-button>
<fox-button type="success" disabled>success</fox-button>
<fox-button type="warning" disabled>warning</fox-button>
<fox-button type="danger" disabled>danger</fox-button>
<fox-button type="info" disabled>info</fox-button>

<fox-button plain disabled>朴素按钮</fox-button>
<fox-button type="primary" plain disabled>主要按钮</fox-button>
<fox-button type="success" plain disabled>success</fox-button>
<fox-button type="warning" plain disabled>warning</fox-button>
<fox-button type="danger" plain disabled>danger</fox-button>
<fox-button type="info" plain disabled>info</fox-button>
```

## 文字按钮

没有边框和背景色的按钮。

<fox-button type="text">文字按钮</fox-button>
<fox-button disabled type="text">文字按钮</fox-button>

```html
<fox-button type="text">文字按钮</fox-button>

<fox-button disabled type="text">文字按钮</fox-button>
```

## 不同尺寸

`Button`组件提供除了默认值以外的三种尺寸，可以在不同场景下选择合适的按钮尺寸

<div class="mt-20">
<fox-button size="large">large</fox-button>
<fox-button>默认</fox-button>
<fox-button size="small">small</fox-button>
<fox-button size="mini">mini</fox-button>
</div>
<div class="mt-20">
<fox-button size="large" round>large</fox-button>
<fox-button round>默认</fox-button>
<fox-button size="small" round>small</fox-button>
<fox-button size="mini" round>mini</fox-button>
</div>

```html
<fox-button size="large">large</fox-button>
<fox-button>默认</fox-button>
<fox-button size="small">small</fox-button>
<fox-button size="mini">mini</fox-button>

<fox-button size="large" round>large</fox-button>
<fox-button round>默认</fox-button>
<fox-button size="small" round>small</fox-button>
<fox-button size="mini" round>mini</fox-button>
```

## loading 状态

使用 _`loading`_ 图标表示加载中的状态

<fox-button :loading="loading">加载中</fox-button>

```html
<fox-button :loading="loading">加载中</fox-button>
```

## Select Props

| 属性     | 说明           | 类型    | 可选值                                             | 默认值 |
| -------- | -------------- | ------- | -------------------------------------------------- | ------ |
| type     | 类型           | string  | primary / success / warning / danger / info / text | -      |
| size     | 尺寸           | string  | large / small / mini                               | -      |
| plain    | 是否朴素按钮   | boolean | -                                                  | false  |
| round    | 是否圆角按钮   | boolean | -                                                  | false  |
| loading  | 是否加载中状态 | boolean | -                                                  | false  |
| disabled | 是否禁用       | boolean | -                                                  | false  |

<script>
export default {
    data(){
        return {
            loading: true
        }
    }
}
</script>
