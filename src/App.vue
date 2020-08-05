<template>
    <div id="app">
        测试界面
        <div>
            <fox-icon name="load" spin></fox-icon>
        </div>
        <div>
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
    </div>
</template>

<script>
export default {
    data() {
        return {
            loading: true,
        };
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
</style>
