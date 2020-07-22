<template>
    <div id="app">
        <div id="sidebar">
            <div id="nav">
                <router-link to="/changelog">更新日志</router-link>
                <router-link to="/">使用引导</router-link>
                <router-link to="/icon">Icon 图标</router-link>
                <router-link to="/button">Button 按钮</router-link>
            </div>
        </div>
        <div id="main">
            <div class="header"></div>
            <div class="main">
                <router-view />
            </div>
        </div>
    </div>
</template>

<style lang="scss">
html,
body {
    margin: 0;
    padding: 0;
}
p,
pre,
h1,
h2,
h3,
h4,
h5,
h6 {
    margin: 0;
}
h1,
h2,
h3,
h4,
h5,
h6 {
    font-weight: 600;
    line-height: 2em;
}
#app {
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    color: #2c3e50;
    display: flex;
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
