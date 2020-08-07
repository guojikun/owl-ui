import Icon from "./components/icon";
import Button from "./components/button";

// 布局组件
import Layout from "./components/layout/index.js";
import Header from "./components/header/index.js";
import Footer from "./components/footer/index.js";
import Aside from "./components/aside/index.js";
import Main from "./components/main/index.js";
import Row from "./components/row/index.js";
import Col from "./components/col/index.js";
import Card from "./components/card/index.js";
import Divider from "./components/divider/index.js";
import CellGroup from "./components/cell-group/index.js";
import Cell from "./components/cell/index.js";
import Collapse from "./components/collapse/index.js";
import CollapseItem from "./components/collapse-item/index.js";
// 数据组件
import Table from "./components/table/index.js";
import Tag from "./components/tag/index.js";
import Progress from "./components/progress/index.js";
import Alert from "./components/alert/index.js";
// form组件
import Form from "./components/form/index.js";
import FormItem from "./components/form-item/index.js";
import Input from "./components/input/index.js";
import InputNumber from "./components/input-number/index.js";
import Radio from "./components/radio/index.js";
import RadioGroup from "./components/radio-group/index.js";
import Checkbox from "./components/checkbox/index.js";
import CheckboxGroup from "./components/checkbox-group/index.js";
import Switch from "./components/switch/index.js";
import Rate from "./components/rate/index.js";
// nav组件
import Breadcrumb from "./components/breadcrumb/index.js";
import BreadcrumbItem from "./components/breadcrumb-item/index.js";
import Steps from "./components/steps/index.js";
import Step from "./components/step/index.js";
// 其它组件
import Timeline from "./components/timeline/index.js";
import TimelineItem from "./components/timeline-item/index.js";
import Tooltip from "./components/tooltip/index.js";

import CollapseTransition from "@/utils/collapse-transition.js";

let components = [
    Icon,
    Button,
    Layout,
    Header,
    Footer,
    Aside,
    Main,
    Button,
    Card,
    Icon,
    Divider,
    Row,
    Col,
    CellGroup,
    Cell,
    Collapse,
    CollapseItem,
    CollapseTransition,

    Form,
    FormItem,
    Input,
    InputNumber,
    Radio,
    RadioGroup,
    Checkbox,
    CheckboxGroup,
    Switch,
    Rate,

    Table,
    Tag,
    Progress,
    Alert,
    Breadcrumb,
    BreadcrumbItem,

    Steps,
    Step,

    Timeline,
    TimelineItem,
    Tooltip,
];
// 定义 install 方法，接收 Vue 作为参数
const install = Vue => {
    // 判断是否安装，安装过就不继续往下执行
    if (install.installed) return;
    install.installed = true;
    // 遍历注册所有组件
    components.map(component => Vue.component(`fox${component.name}`, component));
    // 下面这个写法也可以
    // components.map(component => Vue.use(component));
};

// 通过script标签引入时执行
if (typeof window !== "undefined" && window.Vue) {
    install(window.Vue);
}

export default {
    install,
    // 所有组件，必须具有 install，才能使用 Vue.use()
    ...components,
};

export const s = {
    ...components,
};
