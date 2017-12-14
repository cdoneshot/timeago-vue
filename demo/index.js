import Vue from 'vue';
import TimeAgo from '../lib/timeago-vue.min.js';


Vue.use(TimeAgo)

console.log(TimeAgo);
new Vue({
    template: '<timeago className="classname" style="width:100px;" :datetime="now"></timeago>',
    el: '#el',
    data() {
        return {
            now: new Date()
        }
    }
})