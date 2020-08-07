import "@/style/iconfont/iconfont.js";

export default {
    name: "Icon",
    functional: true,
    props: {
        name: String,
        size: {
            type: String,
            default: "16px",
        },
    },
    render: (h, { props }) => {
        console.log(props.style);
        return h(
            "svg",
            {
                class: "fox-icon",
                style: {
                    width: "1em",
                    height: "1em",
                    verticalAlign: "-0.15em",
                    fill: "currentColor",
                    overflow: "hidden",
                    fontSize: props.size,
                },
                attrs: {
                    viewBox: "0 0 1024 1024",
                    ariaHidden: true,
                    xmlns: "http://www.w3.org/2000/svg",
                    "xmlns:xlink": "http://www.w3.org/1999/xlink",
                },
            },
            [
                h("use", {
                    attrs: {
                        "xlink:href": `#fox-icon-${props.name}`,
                    },
                }),
            ]
        );
    },
};
