<template>
    <div ref="el">{{time}}</div>

</template>

<script>
import timeago from "timeago.js";

export default {
  created() {
    this.timeagoIns = null;
  },
  beforeMount() {
    this.timeagoIns = this.timeagoIns || timeago();
  },
  mounted() {
    this.render();
  },
  updated() {
    this.render();
  },
  beforeDestory() {
    timeago.cancel(this.$refs.el);
    this.timeagoIns = null;
  },
  computed: {
    time() {
      return this.timeagoIns.format(this.datetime, this.locale);
    }
  },
  methods: {
    render() {
      const { live, datetime, locale } = this;
      timeago.cancel(this.$refs.el);
      if (live) {
        let value = datetime instanceof Date ? datetime.getTime() : datetime;
        this.$refs.el.setAttribute("datetime", value);
        this.timeagoIns.render(this.$refs.el, locale);
      }
    }
  },
  props: {
    datetime: {
      type: [String, Date, Number],
      required: true
    },
    live: {
      type: Boolean,
      default: true
    },
    locale: {
      type: String,
      default: "en"
    }
  }
};
</script>