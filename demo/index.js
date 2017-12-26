import Vue from 'vue';
import examples from './examples.vue';

new Vue({
    template: '<examples/>',
    el: '#el',
    components: {
        examples
    },
    data() {
        return {
            now: new Date()
        }
    }
})