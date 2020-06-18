import Modal from "./src/modal.vue";

Modal.install = Vue => {
    Vue.component(`Owl${Modal.name}`, Modal);
};

export default Modal;
