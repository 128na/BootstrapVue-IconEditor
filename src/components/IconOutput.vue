<template>
  <content-collapse title="Output">
    <b-form-group class="p-2 m-0 border-bottom">
      <b-form-checkbox v-model="with_template">With Template Element</b-form-checkbox>
    </b-form-group>
    <div class="position-relative bg-white">
      <b-button @click="$copyText(export_data)" size="sm" class="position-absolute btn-copy">Copy</b-button>
      <pre class="px-2 py-3 m-0">{{ export_data }}</pre>
    </div>
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
        const props = [
          icon.variant ? ` variant="${icon.variant}"` : "",
          icon.flip_h ? ` flip-h` : "",
          icon.flip_v ? ` flip-v` : "",
          icon.rotate ? ` rotate="${icon.rotate}"` : "",
          !icon.scale || icon.scale === 1 ? "" : ` scale="${icon.scale}"`,
          icon.shift_h ? ` shift-h="${icon.shift_h}"` : "",
          icon.shift_v ? ` shift-v="${icon.shift_v}"` : "",
          icon.animation ? ` animation="${icon.animation}"` : ""
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
  }
};
</script>
<style scoped>
.btn-copy {
  top: 0.5rem;
  right: 0.5rem;
}
</style>