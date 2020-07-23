<template>
    <pre
        class="owl-code"
    ><div hidden ref="ref"><slot></slot></div><code :class="['owl-code-inner',`lang-${lang}`]" v-html="str" ref="s"></code></pre>
</template>

<script>
import Highlight from "@/directive/highlight.js";
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
    directives: { Highlight },
    data() {
        return {
            str: "",
        };
    },
    mounted() {
        console.log(this.$refs.ref.innerHTML);
        this.$refs.s.insertAdjacentHTML("beforeend", Prism.highlight(this.$refs.ref.innerHTML, Prism.languages.xml, "xml"));
        // this.str = Prism.highlight(this.$refs.ref.innerHTML, Prism.languages[this.lang], this.lang);
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
