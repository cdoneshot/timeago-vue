import Vue from 'vue';
import TimeAgo from '../lib/timeago-vue.js';

console.log(TimeAgo)
Vue.use(TimeAgo);
new Vue({
    template: '<timeago :datetime="now"></timeago>',
    el: '#el',
    data() {
        return {
            now: new Date()
        }
    }
})