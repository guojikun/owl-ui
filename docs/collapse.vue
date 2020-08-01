<template>
    <div class="page-radio">
        <div class="page-item">
            <div>
                <p class="page-title">Collapse 折叠面板</p>
                <p class="page-dec">通过折叠面板收纳内容区域</p>
            </div>
        </div>
        <div class="page-item">
            <div>
                <p class="page-item-title">基础用法</p>
                <p class="page-item-dec">可同时展开多个面板，面板之间不影响</p>
            </div>
            <div class="page-item-content">
                <page-demo>
                    <mx-collapse v-model="value" @change="handleClick">
                        <mx-collapse-item title="史蒂夫·乔布斯">
                            <div>
                                史蒂夫·乔布斯（Steve
                                Jobs），1955年2月24日生于美国加利福尼亚州旧金山，美国发明家、企业家、美国苹果公司联合创办人。
                            </div>
                        </mx-collapse-item>
                        <mx-collapse-item title="盖瑞·沃兹尼亚克">
                            <div>
                                斯蒂夫·盖瑞·沃兹尼亚克（Stephen Gary
                                Wozniak），美国电脑工程师，曾与史蒂夫·乔布斯合伙创立苹果电脑（今之苹果公司）。斯蒂夫·盖瑞·沃兹尼亚克曾就读于美国科罗拉多大学，后转学入美国著名高等学府加州大学伯克利分校（UC
                                Berkeley）并获得电机工程及计算机（EECS）本科学位（1987年）。
                            </div>
                        </mx-collapse-item>
                        <mx-collapse-item title="乔纳森·伊夫">
                            <div>
                                乔纳森·伊夫是一位工业设计师，现任Apple公司设计师兼资深副总裁，英国爵士。他曾参与设计了iPod，iMac，iPhone，iPad等众多苹果产品。除了乔布斯，他是对苹果那些著名的产品最有影响力的人。
                            </div>
                        </mx-collapse-item>
                    </mx-collapse>
                    <div slot="highlight">
                        <high-light :code="codes"></high-light>
                    </div>
                </page-demo>
            </div>
        </div>
        <div class="page-item">
            <div>
                <p class="page-item-title">手风琴效果</p>
                <p class="page-item-dec">每次只能展开一个面板</p>
            </div>
            <div class="page-item-content">
                <page-demo>
                    <mx-collapse
                        v-model="value1"
                        accordion
                        @change="handleClick"
                    >
                        <mx-collapse-item title="史蒂夫·乔布斯">
                            <div>
                                史蒂夫·乔布斯（Steve
                                Jobs），1955年2月24日生于美国加利福尼亚州旧金山，美国发明家、企业家、美国苹果公司联合创办人。
                            </div>
                        </mx-collapse-item>
                        <mx-collapse-item title="盖瑞·沃兹尼亚克">
                            <div>
                                斯蒂夫·盖瑞·沃兹尼亚克（Stephen Gary
                                Wozniak），美国电脑工程师，曾与史蒂夫·乔布斯合伙创立苹果电脑（今之苹果公司）。斯蒂夫·盖瑞·沃兹尼亚克曾就读于美国科罗拉多大学，后转学入美国著名高等学府加州大学伯克利分校（UC
                                Berkeley）并获得电机工程及计算机（EECS）本科学位（1987年）。
                            </div>
                        </mx-collapse-item>
                        <mx-collapse-item title="乔纳森·伊夫">
                            <div>
                                乔纳森·伊夫是一位工业设计师，现任Apple公司设计师兼资深副总裁，英国爵士。他曾参与设计了iPod，iMac，iPhone，iPad等众多苹果产品。除了乔布斯，他是对苹果那些著名的产品最有影响力的人。
                            </div>
                        </mx-collapse-item>
                    </mx-collapse>
                    <div slot="highlight">
                        <high-light :code="codes"></high-light>
                    </div>
                </page-demo>
            </div>
        </div>
        <div class="page-item">
            <div>
                <p class="page-item-title">自定义arrow的位置和显示</p>
                <p class="page-item-dec">适用于在多个互斥的选项中选择的场景</p>
            </div>
            <div class="page-item-content">
                <p>arrow位于右侧</p>
                <mx-collapse v-model="value2" accordion arrow="right">
                    <mx-collapse-item title="史蒂夫·乔布斯">
                        <div>
                            史蒂夫·乔布斯（Steve
                            Jobs），1955年2月24日生于美国加利福尼亚州旧金山，美国发明家、企业家、美国苹果公司联合创办人。
                        </div>
                    </mx-collapse-item>
                    <mx-collapse-item title="盖瑞·沃兹尼亚克">
                        <div>
                            斯蒂夫·盖瑞·沃兹尼亚克（Stephen Gary
                            Wozniak），美国电脑工程师，曾与史蒂夫·乔布斯合伙创立苹果电脑（今之苹果公司）。斯蒂夫·盖瑞·沃兹尼亚克曾就读于美国科罗拉多大学，后转学入美国著名高等学府加州大学伯克利分校（UC
                            Berkeley）并获得电机工程及计算机（EECS）本科学位（1987年）。
                        </div>
                    </mx-collapse-item>
                    <mx-collapse-item title="乔纳森·伊夫">
                        <div>
                            乔纳森·伊夫是一位工业设计师，现任Apple公司设计师兼资深副总裁，英国爵士。他曾参与设计了iPod，iMac，iPhone，iPad等众多苹果产品。除了乔布斯，他是对苹果那些著名的产品最有影响力的人。
                        </div>
                    </mx-collapse-item>
                </mx-collapse>
                <p>arrow不显示</p>
                <mx-collapse v-model="value3" accordion arrow="none">
                    <mx-collapse-item title="史蒂夫·乔布斯">
                        <div>
                            史蒂夫·乔布斯（Steve
                            Jobs），1955年2月24日生于美国加利福尼亚州旧金山，美国发明家、企业家、美国苹果公司联合创办人。
                        </div>
                    </mx-collapse-item>
                    <mx-collapse-item title="盖瑞·沃兹尼亚克">
                        <div>
                            斯蒂夫·盖瑞·沃兹尼亚克（Stephen Gary
                            Wozniak），美国电脑工程师，曾与史蒂夫·乔布斯合伙创立苹果电脑（今之苹果公司）。斯蒂夫·盖瑞·沃兹尼亚克曾就读于美国科罗拉多大学，后转学入美国著名高等学府加州大学伯克利分校（UC
                            Berkeley）并获得电机工程及计算机（EECS）本科学位（1987年）。
                        </div>
                    </mx-collapse-item>
                    <mx-collapse-item title="乔纳森·伊夫">
                        <div>
                            乔纳森·伊夫是一位工业设计师，现任Apple公司设计师兼资深副总裁，英国爵士。他曾参与设计了iPod，iMac，iPhone，iPad等众多苹果产品。除了乔布斯，他是对苹果那些著名的产品最有影响力的人。
                        </div>
                    </mx-collapse-item>
                </mx-collapse>
            </div>
        </div>
        <div class="page-item">
            <div>
                <p class="page-title">API</p>
            </div>
            <div class="page-item">
                <div>
                    <p class="page-title">Collapse Props</p>
                </div>
                <div class="page-item-content">
                    <mx-table :data="collapseProps" :columns="tableColumns">
                    </mx-table>
                </div>
            </div>
            <div class="page-item">
                <div>
                    <p class="page-title">Collapse events</p>
                </div>
                <div class="page-item-content">
                    <mx-table :data="collapseEvents" :columns="tableColumns">
                    </mx-table>
                </div>
            </div>
            <div class="page-item">
                <div>
                    <p class="page-title">Panel Props</p>
                </div>
                <div class="page-item-content">
                    <mx-table :data="panelProps" :columns="tableColumns">
                    </mx-table>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import { columns } from '@/data/table.js';
export default {
    data() {
        return {
            tableColumns: columns,
            value: [2],
            value1: '0',
            value2: '1',
            value3: '2',
            status: true,
            collapseProps: [
                {
                    parameter: 'value',
                    explain: '当前激活的面板的 name，可以使用 v-model 双向绑定',
                    type: 'Array | String',
                    optionalValue: '-',
                    defaultValue: '-',
                },
                {
                    parameter: 'accordion',
                    explain: '是否开启手风琴模式，开启后每次至多展开一个面板',
                    type: 'Boolean',
                    optionalValue: 'true / false',
                    defaultValue: 'false',
                },
                {
                    parameter: 'arrow',
                    explain: '箭头的位置',
                    type: 'String',
                    optionalValue: 'left / right / none',
                    defaultValue: 'left',
                },
            ],
            collapseEvents: [
                {
                    parameter: 'change',
                    explain:
                        '切换面板时触发，返回已展开的面板的key，格式为数组',
                    type: 'Array | String',
                    optionalValue: '-',
                    defaultValue: '[]/null',
                },
            ],
            panelProps: [
                {
                    parameter: 'name',
                    explain: '标题',
                    type: 'String',
                    optionalValue: '-',
                    defaultValue: '',
                },
            ],
            codes: `<mx-collapse v-model="value1" accordion @change="handleClick">
        <mx-collapse-item title="史蒂夫·乔布斯">
            <div>
                史蒂夫·乔布斯（Steve
                Jobs），1955年2月24日生于美国加利福尼亚州旧金山，美国发明家、企业家、美国苹果公司联合创办人。
            </div>
        </mx-collapse-item>
        <mx-collapse-item title="盖瑞·沃兹尼亚克">
            <div>斯蒂夫·盖瑞·沃兹尼亚克（Stephen Gary Wozniak），美国电脑工程师，曾与史蒂夫·乔布斯合伙创立苹果电脑（今之苹果公司）。斯蒂夫·盖瑞·沃兹尼亚克曾就读于美国科罗拉多大学，后转学入美国著名高等学府加州大学伯克利分校（UC Berkeley）并获得电机工程及计算机（EECS）本科学位（1987年）。 </div>
        </mx-collapse-item>
        <mx-collapse-item title="乔纳森·伊夫">
            <div>
                乔纳森·伊夫是一位工业设计师，现任Apple公司设计师兼资深副总裁，英国爵士。他曾参与设计了iPod，iMac，iPhone，iPad等众多苹果产品。除了乔布斯，他是对苹果那些著名的产品最有影响力的人。
            </div>
        </mx-collapse-item>
    </mx-collapse>`,
        };
    },
    methods: {
        handleClick() {},
    },
};
</script>
