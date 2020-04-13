<template>
  <content-collapse title="Edit">
    <icon-layers :iconsets="iconsets" :selected="selected" />
    <div v-show="is_selected" class="p-2 border-top">
      <b-form-group label="Variant">
        <b-form-select v-model="values.variant" :options="options.variants" />
      </b-form-group>
      <b-form-group label="Flipping">
        <b-form-checkbox v-model="values.flip_v">Flip Vertical</b-form-checkbox>
        <b-form-checkbox v-model="values.flip_h">Flip Horizontal</b-form-checkbox>
      </b-form-group>
      <b-form-group label="Rotate">
        <b-form-input v-model="values.rotate" type="number" step="15"></b-form-input>
      </b-form-group>
      <b-form-group label="Scale">
        <b-form-input v-model="values.scale" type="number" step="0.1"></b-form-input>
      </b-form-group>
      <b-form-group label="Shift Vertical ">
        <b-form-input v-model="values.shift_v" type="number" step="0.1"></b-form-input>
      </b-form-group>
      <b-form-group label="Shift Horizontal">
        <b-form-input v-model="values.shift_h" type="number" step="0.1"></b-form-input>
      </b-form-group>
      <b-form-group label="Animation">
        <b-form-select v-model="values.animation" :options="options.animations" />
      </b-form-group>
    </div>
    <div v-show="!is_selected" class="p-2 border-top">No icon selected.</div>
  </content-collapse>
</template>
<script>
export default {
  props: ["iconsets", "selected"],
  data() {
    return {
      values: {},
      options: {
        variants: [
          { value: null, text: "" },
          { value: "primary", text: "Primary" },
          { value: "secondary", text: "Secondary" },
          { value: "success", text: "Success" },
          { value: "warning", text: "Warning" },
          { value: "danger", text: "Danger" },
          { value: "info", text: "Info" },
          { value: "light", text: "Light" },
          { value: "dark", text: "Dark" }
        ],
        animations: [
          { value: null, text: "" },
          { value: "spin", text: "Spin" },
          { value: "spin-reverse", text: "Spin reverse" },
          { value: "spin-pulse", text: "Spin pulse" },
          { value: "spin-reverse-pulse", text: "Spin Reverse Pulse" },
          { value: "cylon", text: "Cylon" },
          { value: "cylon-vertical", text: "Cylon Vertical" }
        ]
      }
    };
  },
  watch: {
    selected() {
      console.log("selected watch");
      this.applyValues();
    },
    "values.scale"(scale) {
      this.$emit("change", { scale });
    },
    "values.shift_v"(shift_v) {
      this.$emit("change", { shift_v });
    },
    "values.shift_h"(shift_h) {
      this.$emit("change", { shift_h });
    },
    "values.variant"(variant) {
      this.$emit("change", { variant });
    },
    "values.flip_v"(flip_v) {
      this.$emit("change", { flip_v });
    },
    "values.flip_h"(flip_h) {
      this.$emit("change", { flip_h });
    },
    "values.rotate"(rotate) {
      this.$emit("change", { rotate });
    },
    "values.animation"(animation) {
      this.$emit("change", { animation });
    }
  },
  created() {
    this.values = this.init_values;
  },
  computed: {
    is_selected() {
      return this.selected.length > 0;
    },
    init_values() {
      return {
        scale: 1,
        shift_v: 0,
        shift_h: 0,
        variant: null,
        flip_v: false,
        flip_h: false,
        rotate: 0,
        animation: null
      };
    }
  },
  methods: {
    applyValues() {
      this.values = this.selected.length
        ? Object.assign({}, this.iconsets[this.selected[0]].options)
        : this.init_values;
    }
  }
};
</script>