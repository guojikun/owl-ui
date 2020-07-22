<template>
    <pre class="owl-code">
        <div hidden aria-hidden="true" ref="ref">
            <slot hidden></slot>
        </div>
        <code :class="['owl-code-inner', `language-${lang}`]" v-html="str">
            
        </code>
    </pre>
</template>

<script>
// import hljs from "@/assets/libs/highlight/highlight.pack.js";
// import "@/assets/libs/highlight/styles/default.css";
// import "@/assets/libs/highlight/styles/googlecode.css";

import Prism from "@/assets/libs/prism/prism.js";
import "@/assets/libs/prism/prism.css";
export default {
    name: "Code",
    props: {
        lang: {
            type: String,
            default: "html",
        },
    },
    data() {
        return {
            str: "",
        };
    },
    mounted() {
        this.$nextTick(() => {
            // const s = hljs.highlight(this.$refs.ref.innerHTML, this.lang);
            // console.log(s);
            // hljs.highlightBlock(this.$refs.ref);
            // hljs.initHighlightingOnLoad();
            const code = this.$refs.ref.innerHTML;
            this.str = Prism.highlight(code, Prism.languages[this.lang], this.lang);
        });
    },
    methods: {
        uid() {
            return this._uid;
        },
    },
};
</script>

<style>
.owl-code {
    margin: 0;
    border-radius: 8px;
    overflow: hidden;
    background-color: #f1f1f1;
    position: relative;
}
.owl-code-inner {
    background-color: #f1f1f1;
    font-family: "Courier New", Consolas, monospace;
    font-size: 13px;
}
</style>
