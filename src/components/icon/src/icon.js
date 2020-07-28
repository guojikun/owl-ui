import icon from "@/style/iconfont/iconfont.svg";

export default {
    name: "Icon",
    functional: true,
    props: {
        name: {
            type: String,
            required: true,
        },
    },
    render: (h, { props }) => {
        return h(
            "svg",
            {
                class: "fox-icon",
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
                        "xlink:href": `${icon}#fox-icon-${props.name}`,
                    },
                }),
            ]
        );
    },
};
