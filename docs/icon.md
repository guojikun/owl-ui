# Icon 图标

提供了一套常用的图标集合。

## 使用方法

直接通过设置类名为 fox-icon-iconName 来使用即可。

<fox-icon name="load"></fox-icon>
<fox-icon name="angry"></fox-icon>
<fox-icon name="cloud"></fox-icon>

```html
<fox-icon name="load"></fox-icon>
<fox-icon name="angry"></fox-icon>
<fox-icon name="cloud"></fox-icon>
```

## 设置大小

通过 _`size`_ 属性来设置图标的大小

<fox-icon name="load" size="16px"></fox-icon>
<fox-icon name="angry" size="24px"></fox-icon>
<fox-icon name="cloud" size="30px"></fox-icon>

```html
<fox-icon name="load" size="16px"></fox-icon>
<fox-icon name="angry" size="24px"></fox-icon>
<fox-icon name="cloud" size="30px"></fox-icon>
```

## 设置颜色

通过 _`color`_ 属性来设置图标的大小

<fox-icon name="load" color="pink"></fox-icon>
<fox-icon name="angry" color="blue"></fox-icon>
<fox-icon name="cloud" color="purple"></fox-icon>

```html
<fox-icon name="load" color="pink"></fox-icon>
<fox-icon name="angry" color="blue"></fox-icon>
<fox-icon name="cloud" color="purple"></fox-icon>
```

## props

| 属性  | 说明       | 类型           | 可选值 | 默认值 |
| ----- | ---------- | -------------- | ------ | ------ |
| name  | 图标的名称 | String         | -      | -      |
| size  | 图标的大小 | String，Number | -      | -      |
| color | 图标的颜色 | String         | -      | -      |
