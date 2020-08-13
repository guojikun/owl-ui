import DatePicker from "./src/datepicker.vue";

DatePicker.install = Vue => {
    Vue.component(DatePicker.name, DatePicker);
};

export default DatePicker;
