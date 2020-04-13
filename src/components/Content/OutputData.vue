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
    icon_htmls() {
      return this.iconsets.map(icon => {
        const opt = icon.options || {};
        const props = [
          opt.variant ? ` variant="${opt.variant}"` : "",
          opt.flipH ? ` flip-h` : "",
          opt.flipV ? ` flip-v` : "",
          opt.rotate ? ` rotate="${opt.rotate}"` : "",
          !opt.scale || opt.scale === 1 ? "" : ` scale="${opt.scale}"`,
          opt.shiftH ? ` shift-h="${opt.shiftH}"` : "",
          opt.shiftV ? ` shift-v="${opt.shiftV}"` : "",
          opt.animation ? ` animation="${opt.animation}"` : ""
        ];

        return `  <b-icon icon="${icon.icon}"${props.join("")} />`;
      });
    },
    iconstack() {
      return `<b-iconstack>
${this.icon_htmls.join("\n")}
</b-iconstack>
`;
    },
    iconstack_with_template() {
      return `<template>
  <b-iconstack>
  ${this.icon_htmls.join("\n  ")}
  </b-iconstack>
</template>
`;
    },
    export_data() {
      return this.with_template ? this.iconstack_with_template : this.iconstack;
    }
  },
  methods: {
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