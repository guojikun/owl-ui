<template>
    <div id="app">
        测试界面
        <div>
            <p class="title">Icon</p>
            <fox-icon name="arrow-repeat" spin></fox-icon>
        </div>
        <div>
            <p class="title">Button</p>
            <div class="mt-20">
                <fox-button :loading="loading">默认按钮</fox-button>
                <fox-button type="primary" :loading="loading">主要按钮</fox-button>
                <fox-button type="success" :loading="loading">success</fox-button>
                <fox-button type="warning" :loading="loading">warning</fox-button>
                <fox-button type="danger" :loading="loading">danger</fox-button>
                <fox-button type="info" :loading="loading">info</fox-button>
            </div>
            <div class="mt-20">
                <fox-button plain :loading="loading">朴素按钮</fox-button>
                <fox-button type="primary" plain :loading="loading">主要按钮</fox-button>
                <fox-button type="success" plain :loading="loading">success</fox-button>
                <fox-button type="warning" plain :loading="loading">warning</fox-button>
                <fox-button type="danger" plain :loading="loading">danger</fox-button>
                <fox-button type="info" plain :loading="loading">info</fox-button>
            </div>
            <div class="mt-20">
                <fox-button round :loading="loading">圆角按钮</fox-button>
                <fox-button type="primary" round :loading="loading">主要按钮</fox-button>
                <fox-button type="success" round :loading="loading">success</fox-button>
                <fox-button type="warning" round :loading="loading">warning</fox-button>
                <fox-button type="danger" round :loading="loading">danger</fox-button>
                <fox-button type="info" round :loading="loading">info</fox-button>
            </div>
        </div>
        <div>
            <p class="title">Rate</p>
            <fox-rate v-model="rate" tigger="click"></fox-rate>
        </div>
        <div>
            <p class="title">collapse 折叠面板</p>
            <fox-collapse v-model="collapse">
                <fox-collapse-item title="史蒂夫·乔布斯">
                    <div>
                        史蒂夫·乔布斯（Steve Jobs），1955 年 2 月 24
                        日生于美国加利福尼亚州旧金山，美国发明家、企业家、美国苹果公司联合创办人。
                    </div>
                </fox-collapse-item>
                <fox-collapse-item title="盖瑞·沃兹尼亚克">
                    <div>
                        斯蒂夫·盖瑞·沃兹尼亚克（Stephen Gary
                        Wozniak），美国电脑工程师，曾与史蒂夫·乔布斯合伙创立苹果电脑（今之苹果公司）。斯蒂夫·盖瑞·沃兹尼亚克曾就读于美国科罗拉多大学，后转学入美国著名高等学府加州大学伯克利分校（UC
                        Berkeley）并获得电机工程及计算机（EECS）本科学位（1987 年）。
                    </div>
                </fox-collapse-item>
                <fox-collapse-item title="乔纳森·伊夫">
                    <div>
                        乔纳森·伊夫是一位工业设计师，现任 Apple 公司设计师兼资深副总裁，英国爵士。他曾参与设计了 iPod，iMac，iPhone，iPad
                        等众多苹果产品。除了乔布斯，他是对苹果那些著名的产品最有影响力的人。
                    </div>
                </fox-collapse-item>
            </fox-collapse>
        </div>
        <div>
            <p class="title">单元格</p>
            <fox-card style="width: 340px;">
                <div slot="name">选项</div>
                <fox-cell-group>
                    <fox-cell title="只显示标题"></fox-cell>
                    <fox-cell title="显示label" label="label的内容"></fox-cell>
                    <fox-cell title="显示extra" extra="extra"></fox-cell>
                    <fox-cell title="显示向右的icon" is-link name="link"></fox-cell>
                    <fox-cell title="链接" is-link name="link" to="/layout" @click="handleClick" extra="详细信息"></fox-cell>
                    <fox-cell title="新窗口打开" is-link name="link" to="/layout" @click="handleClick" target="\_blank"></fox-cell>
                    <fox-cell title="禁用" disabled></fox-cell>
                    <fox-cell title="选中" selected></fox-cell>
                </fox-cell-group>
            </fox-card>
        </div>
        <div>
            <p class="title">Tag 标签</p>
            <fox-tag closed>Tag 标签</fox-tag>
            <fox-tag closed size="large">Tag 标签</fox-tag>
            <fox-tag closed size="small">Tag 标签</fox-tag>
            <fox-tag closed size="mini">Tag 标签</fox-tag>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            loading: true,
            rate: 2,
            collapse: [],
        };
    },
    methods: {
        handleClick(val) {
            console.log(val);
        },
    },
};
</script>

<style lang="scss">
.mt-20 {
    margin-top: 20px;
}
#app {
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    color: #2c3e50;
    height: 100vh;
    box-sizing: border-box;
    font-size: 14px;
}

#sidebar {
    flex: 0 0 240px;
    height: 100vh;
    box-sizing: border-box;
    border-right: 1px solid #efefef;
}
#nav {
    padding: 10px 0px;
    box-sizing: border-box;
    a {
        font-weight: 600;
        color: #2c3e50;
        display: block;
        padding: 6px 20px;
        border-right: 2px solid transparent;
        text-decoration: none;
        &.router-link-exact-active {
            color: #42b983;
            border-right-color: #42b983;
        }
    }
}
#main {
    flex: 1 0 auto;
    height: 100vh;
    box-sizing: border-box;
}
.main {
    background-color: #efefef;
    padding: 20px;
}
.page {
    background-color: #fff;
    width: 1100px;
    margin: 0 auto;
    padding: 20px;
}
.title {
    font-size: 15px;
    font-size: 600;
    margin: 10px 0;
}
</style>
