<template>
    <div
        class="fox-progress"
        :class="[
            status ? `is-${status}` : '',
            {
                'fox-progress--circle': type === 'circle',
            },
        ]"
    >
        <div :class="['fox-progress-bar', { 'is-text-nside': textInside }]" v-if="type === 'line'">
            <div class="fox-progress-bar__outer" :style="getHeight">
                <div class="fox-progress-bar__inner" :style="[widths]">
                    <span v-if="textInside && showText" class="fox-progress-bar__inner-text"> {{ percentage }}% </span>
                </div>
            </div>
        </div>
        <div v-else class="fox-progress-circle" :style="circleWidth">
            <svg viewBox="0 0 100 100">
                <path :d="getPath" stroke="#e5e9f2" :stroke-width="getCircleWidth" fill="none" class="fox-progress-circle__track"></path>
                <path
                    :d="getPath"
                    stroke-linecap="round"
                    :stroke="getColor"
                    :stroke-width="getCircleWidth"
                    fill="none"
                    class="fox-progress-circle__path"
                    :style="gets"
                ></path>
            </svg>
        </div>
        <div class="fox-progress__text" v-if="!textInside && showText" v-html="text"></div>
    </div>
</template>

<script>
import { prefix } from "@/utils/assist.js";
export default {
    name: `${prefix}Progress`,
    props: {
        type: {
            type: String,
            default: "line",
            validator(value) {
                return ["line", "circle"].indexOf(value) !== -1;
            },
        },
        percentage: {
            type: [String, Number],
            required: true,
        },
        showText: {
            type: Boolean,
            default: true,
        },
        textInside: {
            type: Boolean,
            default: false,
        },
        status: {
            type: String,
            validator(value) {
                return ["success", "danger"].indexOf(value) !== -1;
            },
        },
        color: String,
        strokeWidth: {
            type: Number,
            default: 6,
        },
        width: {
            type: Number,
            default: 126,
        },
    },

    computed: {
        getCircleWidth() {
            const multiple = this.width / 100;
            const r = this.strokeWidth / multiple;
            return r.toFixed(2);
        },
        getPath() {
            const r = 50 - this.getCircleWidth;
            let s = ["M", 50, 50, "m", 0, -r, "a", r, r, 0, 1, 1, 0, 2 * r, "a", r, r, 0, 1, 1, 0, -2 * r];
            return s.join(" ");
        },
        gets() {
            const cr = 50 - this.getCircleWidth;
            const circle = 2 * 3.14 * cr;
            let s = (this.percentage * circle) / 100;
            s = (circle - s).toFixed(2);
            return {
                strokeDasharray: `${circle}px, ${circle}px`,
                strokeDashoffset: `${s}px`,
                transition: "stroke-dashoffset 0.6s ease 0s, stroke 0.6s ease 0s",
            };
        },
        circleWidth() {
            return {
                width: `${this.width}px`,
                height: `${this.width}px`,
            };
        },
        getColor() {
            if (this.color) {
                return this.color;
            } else {
                if (this.status === "success") {
                    return "#67C23A";
                } else if (this.status === "danger") {
                    return "#F56C6C";
                } else {
                    return "#409eff";
                }
            }
        },
        getHeight() {
            return {
                height: `${this.strokeWidth}px`,
            };
        },
        widths() {
            let styles = {
                width: `${this.percentage}%`,
            };
            if (this.color) {
                styles["backgroundColor"] = this.color;
            }
            return styles;
        },
        text() {
            if (this.status === "success") {
                return `<i class="fox-icon-md-checkmark" />`;
            } else if (this.status === "danger") {
                return `<i class="fox-icon-md-close" />`;
            } else {
                return `${this.percentage}%`;
            }
        },
    },
};
</script>
<style lang="scss">
@import "@/style/common/var.scss";
.fox-progress {
    overflow: hidden;
    line-height: 1;
    box-sizing: border-box;
    position: relative;
    &-bar {
        padding-right: 50px;
        display: inline-block;
        vertical-align: middle;
        width: 100%;
        margin-right: -55px;
        box-sizing: border-box;
        &.is-text-nside {
            padding-right: 0;
        }
        &__outer {
            height: 6px;
            border-radius: 100px;
            background-color: #ebeef5;
            overflow: hidden;
            position: relative;
            vertical-align: middle;
        }
        &__inner {
            position: absolute;
            left: 0;
            top: 0;
            height: 100%;
            background-color: #409eff;
            text-align: right;
            border-radius: 100px;
            line-height: 1;
            white-space: nowrap;
            transition: width 0.6s ease;
            &-text {
                display: inline-block;
                vertical-align: text-bottom;
                color: #fff;
                font-size: 12px;
                margin: 0 5px;
            }
        }
    }
    &__text {
        font-size: 14px;
        color: #606266;
        display: inline-block;
        vertical-align: middle;
        margin-left: 10px;
        line-height: 1;
        box-sizing: border-box;
    }
}
.fox-progress.is-success {
    .fox-progress-bar__inner {
        background-color: $fox--color-success;
    }
    .fox-progress__text {
        background-color: $fox--color-success;
        border-radius: 50%;
        color: $fox--color-white;
        [class^="fox-icon-"] {
            transform: scale(0.8);
        }
    }
}
.fox-progress.is-danger {
    .fox-progress-bar__inner {
        background-color: $fox--color-danger;
    }
    .fox-progress__text {
        background-color: $fox--color-danger;
        border-radius: 50%;
        color: $fox--color-white;
        [class^="fox-icon-"] {
            transform: scale(0.8);
        }
    }
}
.fox-progress--circle.is-success {
    .fox-progress-bar__inner {
        background-color: $fox--color-success;
    }
    .fox-progress__text {
        background-color: transparent;
        border-radius: 0;
        color: $fox--color-success;
        [class^="fox-icon-"] {
            transform: scale(1.2);
        }
    }
}
.fox-progress--circle.is-danger {
    .fox-progress-bar__inner {
        background-color: $fox--color-danger;
    }
    .fox-progress__text {
        background-color: transparent;
        border-radius: 0;
        color: $fox--color-danger;
        [class^="fox-icon-"] {
            transform: scale(1.2);
        }
    }
}
.fox-progress--circle {
    display: inline-block;
    .fox-progress__text {
        position: absolute;
        top: 50%;
        left: 0;
        width: 100%;
        text-align: center;
        margin: 0;
        transform: translateY(-50%);
    }
}
</style>
