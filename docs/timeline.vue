<template>
    <div class="page">
        <div class="page-item">
            <div>
                <h1 class="page-title">Timeline 时间线</h1>
                <p class="page-dec">可视化地呈现时间流信息。</p>
            </div>
        </div>
        <div class="page-item">
            <div>
                <h1 class="page-item-title">基础用法</h1>
                <p class="page-item-dec">
                    <code class="code">Timeline</code>
                    可拆分成多个按照时间戳正序或倒序排列的activity,
                    时间戳是其区分于其他控件的重要特征，使⽤时注意与Steps步骤条等区分。
                </p>
            </div>
            <div class="page-item-content">
                <page-demo>
                    <div style="display: inline-block;width: 280px;">
                        <h4 style="text-indent: 36px;">倒序</h4>
                        <mx-timeline reverse>
                            <mx-timeline-item timestamp="2018-04-15">
                                活动按期开始
                            </mx-timeline-item>
                            <mx-timeline-item timestamp="2018-04-13">
                                通过审核
                            </mx-timeline-item>
                            <mx-timeline-item timestamp="2018-04-11">
                                创建成功
                            </mx-timeline-item>
                        </mx-timeline>
                    </div>
                    <div style="display: inline-block;width: 280px">
                        <h4 style="text-indent: 36px;">正序</h4>
                        <mx-timeline>
                            <mx-timeline-item timestamp="2018-04-15">
                                活动按期开始
                            </mx-timeline-item>
                            <mx-timeline-item timestamp="2018-04-13">
                                通过审核
                            </mx-timeline-item>
                            <mx-timeline-item timestamp="2018-04-11">
                                创建成功
                            </mx-timeline-item>
                        </mx-timeline>
                    </div>
                    <high-light slot="highlight" :code="code1"></high-light>
                </page-demo>
            </div>
        </div>
        <div class="page-item">
            <div>
                <h1 class="page-item-title">⾃定义节点样式</h1>
                <p class="page-item-dec">
                    可根据实际场景⾃定义节点尺⼨、颜⾊，或直接使⽤图标。
                </p>
            </div>
            <div class="page-item-content">
                <page-demo>
                    <mx-timeline>
                        <mx-timeline-item
                            v-for="(activity, index) in activities2"
                            :key="index"
                            :icon="activity.icon"
                            :type="activity.type"
                            :color="activity.color"
                            :size="activity.size"
                            :timestamp="activity.timestamp"
                        >
                            {{ activity.content }}
                        </mx-timeline-item>
                    </mx-timeline>
                    <high-light slot="highlight" :code="code2"></high-light>
                </page-demo>
            </div>
        </div>
        <div class="page-item">
            <div>
                <h1 class="page-item-title">⾃定义时间戳</h1>
                <p class="page-item-dec">
                    当内容在垂直⽅向上过⾼时，可将时间戳置于内容之上。
                </p>
            </div>
            <div class="page-item-content">
                <page-demo>
                    <mx-timeline>
                        <mx-timeline-item
                            timestamp="2018-04-12"
                            placement="top"
                        >
                            <mx-card>
                                <h4>更新 Github 模板</h4>
                                <p>王小虎 提交于 2018/4/12 20:46</p>
                            </mx-card>
                        </mx-timeline-item>
                        <mx-timeline-item timestamp="2018-04-3" placement="top">
                            <mx-card>
                                <h4>更新 Github 模板</h4>
                                <p>王小虎 提交于 2018/4/3 20:46</p>
                            </mx-card>
                        </mx-timeline-item>
                        <mx-timeline-item timestamp="2018-04-2" placement="top">
                            <mx-card>
                                <h4>更新 Github 模板</h4>
                                <p>王小虎 提交于 2018/4/2 20:46</p>
                            </mx-card>
                        </mx-timeline-item>
                    </mx-timeline>
                    <high-light slot="highlight" :code="code3"></high-light>
                </page-demo>
            </div>
        </div>
        <div class="page-item">
            <div>
                <h1 class="page-title">API</h1>
            </div>
            <div class="page-item">
                <div>
                    <h1 class="page-item-title">Timeline Props</h1>
                </div>
                <div class="page-item-content">
                    <mx-table :columns="propsColumns" :data="timelineData">
                    </mx-table>
                </div>
            </div>
            <div class="page-item">
                <div>
                    <h1 class="page-item-title">TimelineItem Props</h1>
                </div>
                <div class="page-item-content">
                    <mx-table :columns="propsColumns" :data="timelineItemData">
                    </mx-table>
                </div>
            </div>
            <div class="page-item">
                <div>
                    <h1 class="page-item-title">TimelineItem Slot</h1>
                </div>
                <div class="page-item-content">
                    <mx-table :columns="slotCol" :data="timelineItemSlot">
                    </mx-table>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import { columns, slotCol } from '@/data/table.js';
export default {
    data() {
        return {
            propsColumns: columns,
            slotCol,
            timelineData: [
                {
                    parameter: 'reverse',
                    explain: '指定节点排序方向，默认为正序',
                    type: 'boolean',
                    optionalValue: '-',
                    defaultValue: 'false',
                },
            ],
            timelineItemData: [
                {
                    parameter: 'timestamp',
                    explain: '时间戳',
                    type: 'string',
                    optionalValue: '-',
                    defaultValue: '-',
                },
                {
                    parameter: 'hide-timestamp',
                    explain: '是否隐藏时间戳',
                    type: 'boolean',
                    optionalValue: '-',
                    defaultValue: 'false',
                },
                {
                    parameter: 'placement',
                    explain: '时间戳位置',
                    type: 'string',
                    optionalValue: 'top / bottom',
                    defaultValue: 'bottom',
                },
                {
                    parameter: 'type',
                    explain: '节点类型',
                    type: 'string',
                    optionalValue:
                        'primary / success / warning / danger / info',
                    defaultValue: '-',
                },
                {
                    parameter: 'color',
                    explain: '节点颜色',
                    type: 'string',
                    optionalValue: 'hsl / hsv / hex / rgb',
                    defaultValue: '-',
                },
                {
                    parameter: 'icon',
                    explain: '节点图标',
                    type: 'string',
                    optionalValue: '-',
                    defaultValue: '-',
                },
            ],
            timelineItemSlot: [
                {
                    name: '-',
                    explain: 'Timeline-Item 的内容',
                },
                {
                    name: 'dot',
                    explain: '自定义节点',
                },
            ],
            activities2: [
                {
                    content: '支持使用图标',
                    timestamp: '2018-04-12 20:46',
                    icon: 'mx-icon-ios-checkmark',
                    type: 'primary',
                },
                {
                    content: '支持自定义颜色',
                    timestamp: '2018-04-03 20:46',
                    color: '#0bbd87',
                },
                {
                    content: '支持自定义尺寸',
                    timestamp: '2018-04-03 20:46',
                    size: 'large',
                },
                {
                    content: '默认样式的节点',
                    timestamp: '2018-04-03 20:46',
                },
            ],
            code1: `
<div style="display: inline-block;width: 280px;">
    <h4 style="text-indent: 36px;">倒序</h4>
    <mx-timeline reverse>
        <mx-timeline-item timestamp="2018-04-15">活动按期开始</mx-timeline-item>
        <mx-timeline-item timestamp="2018-04-13">通过审核</mx-timeline-item>
        <mx-timeline-item timestamp="2018-04-11">创建成功</mx-timeline-item>
    </mx-timeline>
</div>
<div style="display: inline-block;width: 280px">
    <h4 style="text-indent: 36px;">正序</h4>
    <mx-timeline>
        <mx-timeline-item timestamp="2018-04-15">活动按期开始</mx-timeline-item>
        <mx-timeline-item timestamp="2018-04-13">通过审核</mx-timeline-item>
        <mx-timeline-item timestamp="2018-04-11">创建成功</mx-timeline-item>
    </mx-timeline>
</div>
            `,
            code2: `
<mx-timeline reverse>
    <mx-timeline-item timestamp="2018-04-12 20:46" icon="mx-icon-ios-checkmark" type="primary">支持使用图标</mx-timeline-item>
    <mx-timeline-item timestamp="2018-04-03 20:46" color="#0bbd87">支持自定义颜色</mx-timeline-item>
    <mx-timeline-item timestamp="2018-04-03 20:46" size="large">支持自定义尺寸</mx-timeline-item>
    <mx-timeline-item timestamp="2018-04-03 20:46">默认样式的节点</mx-timeline-item>
</mx-timeline>
            `,
            code3: `
<mx-timeline>
    <mx-timeline-item timestamp="2018-04-12" placement="top">
        <mx-card>
            <h4>更新 Github 模板</h4>
            <p>王小虎 提交于 2018/4/12 20:46</p>
        </mx-card>
    </mx-timeline-item>
    <mx-timeline-item timestamp="2018-04-3" placement="top">
        <mx-card>
            <h4>更新 Github 模板</h4>
            <p>王小虎 提交于 2018/4/3 20:46</p>
        </mx-card>
    </mx-timeline-item>
    <mx-timeline-item timestamp="2018-04-2" placement="top">
        <mx-card>
            <h4>更新 Github 模板</h4>
            <p>王小虎 提交于 2018/4/2 20:46</p>
        </mx-card>
    </mx-timeline-item>
</mx-timeline>
            `,
        };
    },
};
</script>
