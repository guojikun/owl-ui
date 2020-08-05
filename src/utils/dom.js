import Vue from "vue";

const isServer = Vue.prototype.$isServer;

export { isServer };
/* istanbul ignore next */
const trim = string => {
    return (string || "").replace(/^[\s\uFEFF]+|[\s\uFEFF]+$/g, "");
};
/* 添加事件绑定 */
export const on = (() => {
    if (!isServer && document.addEventListener) {
        return (element, event, handler) => {
            if (element && event && handler) {
                element.addEventListener(event, handler, false);
            }
        };
    } else {
        return (element, event, handler) => {
            if (element && event && handler) {
                element.attachEvent("on" + event, handler);
            }
        };
    }
})();

/* 移除事件绑定 */
export const off = (() => {
    if (!isServer && document.removeEventListener) {
        return (element, event, handler) => {
            if (element && event) {
                element.removeEventListener(event, handler, false);
            }
        };
    } else {
        return (element, event, handler) => {
            if (element && event) {
                element.detachEvent("on" + event, handler);
            }
        };
    }
})();

export const once = (el, event, fn) => {
    // eslint-disable-next-line prettier/prettier
    var listener = function s() {
        if (fn) {
            fn.apply(this, arguments);
        }
        off(el, event, listener);
    };
    on(el, event, listener);
};

export function hasClass(el, cls) {
    if (!el || !cls) return false;
    if (cls.indexOf(" ") !== -1) throw new Error("className should not contain space.");
    if (el.classList) {
        return el.classList.contains(cls);
    } else {
        return (" " + el.className + " ").indexOf(" " + cls + " ") > -1;
    }
}
/**
 *
 * @param {*} el 元素
 * @param {*} cls 类名
 */
export function addClass(el, cls) {
    if (!el) return;
    var curClass = el.className;
    var classes = (cls || "").split(" ");

    for (var i = 0, j = classes.length; i < j; i++) {
        var clsName = classes[i];
        if (!clsName) continue;

        if (el.classList) {
            el.classList.add(clsName);
        } else if (!hasClass(el, clsName)) {
            curClass += " " + clsName;
        }
    }
    if (!el.classList) {
        el.className = curClass;
    }
}

/**
 *
 * @param {*} el 元素
 * @param {*} cls 类名
 */
export function removeClass(el, cls) {
    if (!el || !cls) return;
    var classes = cls.split(" ");
    var curClass = " " + el.className + " ";

    for (var i = 0, j = classes.length; i < j; i++) {
        var clsName = classes[i];
        if (!clsName) continue;

        if (el.classList) {
            el.classList.remove(clsName);
        } else if (hasClass(el, clsName)) {
            curClass = curClass.replace(" " + clsName + " ", " ");
        }
    }
    if (!el.classList) {
        el.className = trim(curClass);
    }
}
