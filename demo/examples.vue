<template>
  <div class="example-container">
      <div class="example">
        <label>Basic:</label>
        <timeago class="inline" :datetime="now"></timeago>
      </div>
    <div class="example">
      <label>international:</label>
      <timeago class="inline" :datetime="now" locale="en"></timeago>
    </div>
    <div class="example">
      <label>international:</label>
      <timeago class="inline" :datetime="now" locale="vi"></timeago>
    </div>

    <div class="example">
      <label>custom class:</label>
      <timeago class="inline with-class" :datetime="now"></timeago>
    </div>

        <div class="example">
      <label>custom style:</label>
      <timeago class="inline" style="color:green" :datetime="now"></timeago>
    </div>
  </div>
</template>

<script>
import Vue from "vue";
import TimeAgo from "../lib/timeago-vue.js";
import timeago from "timeago.js";

// // import it first.
timeago.register("vi", require("timeago.js/locales/vi"));

Vue.use(TimeAgo, {
  locale: "zh_CN"
});

export default {
  computed: {
    now() {
      return new Date();
    }
  }
};
</script>

<style scoped>
.inline {
  display: inline;
}
.example {
  margin-bottom: 10px;
}
.example:last-child {
  margin-bottom: 0;
}
.with-class {
  color: red;
}
</style>
