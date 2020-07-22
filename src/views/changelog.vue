<template>
    <div class="changelog">
        <div v-for="item in list" :key="item.v">
            <h1 :id="item.v">{{ item.v.toUpperCase() }}</h1>
            <div>
                <div v-if="item.hasFeat">
                    <h2>Feat</h2>
                    <ul>
                        <li v-for="(c, i) in item.feat" :key="i">{{ c }}</li>
                    </ul>
                </div>
                <div v-if="item.hasFix">
                    <h2>BugFix</h2>
                    <ul>
                        <li v-for="(c, i) in item.fix" :key="i">{{ c }}</li>
                    </ul>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            list: [
                {
                    v: "v0.1.0",
                    hasFeat: true,
                    feat: ["新增icon组件", "新增button组件"],
                    hasFix: false,
                    fix: [],
                },
            ],
        };
    },
    mounted() {
        const list = this.list.reverse();
        this.list = list;
    },
};
</script>
