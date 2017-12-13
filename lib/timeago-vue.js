"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _timeagoVue = require("./components/timeago-vue.vue");

var _timeagoVue2 = _interopRequireDefault(_timeagoVue);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = {
    install: function install(Vue) {
        Vue.components('timeago', _timeagoVue2.default);
    }
};