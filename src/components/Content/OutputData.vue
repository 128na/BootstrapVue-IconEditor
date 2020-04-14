<template>
  <content-collapse title="Output">
    <b-form-group class="p-2 m-0 border-bottom">
      <b-form-checkbox v-model="with_template">With Template Element</b-form-checkbox>
    </b-form-group>
    <div class="position-relative bg-white output" id="output" @click="handleOutput">
      <small class="position-absolute btn-copy text-secondary">Click to copy to clipboard</small>
      <pre class="px-2 py-3 m-0">{{ export_data }}</pre>
    </div>
    <b-tooltip target="output" triggers variant="success" ref="tooltip">Copied!</b-tooltip>
  </content-collapse>
</template>
<script>
export default {
  props: ["iconsets"],
  data() {
    return {
      with_template: false
    };
  },
  computed: {
    is_single() {
      return this.iconsets.length < 2;
    },
    icon_htmls() {
      return this.iconsets.map(icon => {
        const opt = icon.options || {};
        const props = [
          opt.variant ? ` variant="${opt.variant}"` : "",
          opt.flipH ? ` flip-h` : "",
          opt.flipV ? ` flip-v` : "",
          opt.rotate != 0 ? ` rotate="${opt.rotate}"` : "",
          !opt.scale || opt.scale == 1 ? "" : ` scale="${opt.scale}"`,
          opt.shiftH != 0 ? ` shift-h="${opt.shiftH}"` : "",
          opt.shiftV != 0 ? ` shift-v="${opt.shiftV}"` : "",
          opt.animation ? ` animation="${opt.animation}"` : ""
        ];

        return `<b-icon icon="${icon.icon}"${props.join("")} />`;
      });
    },
    iconstack_htmls() {
      let html = ["<b-iconstack>"];
      html = html.concat(this.icon_htmls.map(h => `  ${h}`));
      html.push("</b-iconstack>");
      return html;
    },
    export_data() {
      const htmls = this.is_single ? this.icon_htmls : this.iconstack_htmls;

      return this.with_template
        ? this.addTemplate(htmls).join("\n")
        : htmls.join("\n");
    }
  },
  methods: {
    addTemplate(htmls) {
      let html = ["<template>"];
      html = html.concat(htmls.map(h => `  ${h}`));
      html.push("</template>");
      return html;
    },
    handleOutput() {
      this.$copyText(this.export_data);
      this.$refs.tooltip.$emit("open");
      setTimeout(() => {
        this.$refs.tooltip.$emit("close");
      }, 1000);
    }
  }
};
</script>
<style lang="scss" scoped>
.output {
  .btn-copy {
    top: 0.5rem;
    right: 0.5rem;
    display: none;
  }
  &:hover {
    .btn-copy {
      display: block;
    }
  }
}
</style>