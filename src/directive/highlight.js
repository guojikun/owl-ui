// import hljs from "@/assets/libs/highlight/highlight.pack.js";
// import "@/assets/libs/highlight/styles/default.css";
// import "@/assets/libs/highlight/styles/googlecode.css";
import Prism from "@/assets/libs/prism/prism.js";
import "@/assets/libs/prism/prism.css";

let Highlight = {
    bind: function(el) {
        console.log(el);
        console.log(el, "bind");
        // hljs.initHighlightingOnLoad();
        const html = el.innerHTML;
        el.innerHTML = "";
        el.insertAdjacentHTML("beforeend", Prism.highlight(html, Prism.languages.xml, "xml"));
    },
    inserted: function(el) {
        console.log(el, "inserted");
        console.log(el.innerHTML);
        // hljs.highlightBlock(el);
        let child = el.innerHTML;
        child = child.replace(new RegExp("<", "g"), "&lt;").replace(new RegExp(">", "g"), "&gt;");
        console.log(child, "s");
        // el.innerHTML = Prism.highlight(el.innerHTML, Prism.languages.xml, "xml");
    },
    update: function(el) {
        console.log(el, "update");
    },
    componentUpdated: function(el) {
        console.log(el, "componentUpdated");
    },
    unbind: function(el) {
        console.log(el, "unbind");
    },
};

Highlight.install = Vue => {
    Vue.directive("highlight", Highlight);
};

export default Highlight;
