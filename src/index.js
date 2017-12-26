import TimeagoVue from "./components/timeago-vue.vue";


export default {
    install(Vue, options = {}) {
        TimeagoVue.props.locale.default = options.locale || 'en'
        Vue.component(options.name || 'timeago', TimeagoVue);
    }
}