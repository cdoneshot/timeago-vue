import TimeagoVue from "./components/timeago-vue.vue";


export default {
    install(Vue) {
        Vue.component('timeago', TimeagoVue);
    }
}