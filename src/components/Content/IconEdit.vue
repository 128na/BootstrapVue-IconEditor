<template>
  <content-collapse title="Edit" :beginning_display="true">
    <icon-layers :iconsets="iconsets" :selected="selected" />
    <div v-show="is_selected" class="p-2 border-top">
      <b-form-group label="Variant">
        <b-form-select v-model="values.variant" :options="options.variants" />
      </b-form-group>
      <b-form-group label="Flipping">
        <b-form-checkbox v-model="values.flipV">
          <b-icon variant="primary" class="mr-1" icon="vr" />Flip Vertical
        </b-form-checkbox>
        <b-form-checkbox v-model="values.flipH">
          <b-icon variant="primary" class="mr-1" icon="hr" />Flip Horizontal
        </b-form-checkbox>
      </b-form-group>
      <b-form-group>
        <template slot="label">
          <b-icon variant="primary" icon="arrow-clockwise" class="mr-1" />Rotate
        </template>
        <b-form-input v-model="values.rotate" type="number" step="15"></b-form-input>
      </b-form-group>
      <b-form-group>
        <template slot="label">
          <b-iconstack variant="primary" class="mr-1">
            <b-icon icon="square" />
            <b-icon icon="square" scale="0.5" />
          </b-iconstack>Scale
        </template>
        <b-form-input v-model="values.scale" type="number" min="0.1" step="0.1"></b-form-input>
      </b-form-group>
      <b-form-group>
        <template slot="label">
          <b-iconstack variant="primary" class="mr-1">
            <b-icon icon="arrow-down" />
            <b-icon icon="arrow-up" />
          </b-iconstack>Shift Vertical
        </template>

        <b-form-input v-model="values.shiftV" type="number" step="0.1"></b-form-input>
      </b-form-group>
      <b-form-group>
        <template slot="label">
          <b-iconstack variant="primary" class="mr-1">
            <b-icon icon="arrow-left" />
            <b-icon icon="arrow-right" />
          </b-iconstack>Shift Horizontal
        </template>

        <b-form-input v-model="values.shiftH" type="number" step="0.1"></b-form-input>
      </b-form-group>
      <b-form-group>
        <template slot="label">
          <b-iconstack variant="primary" class="mr-1">
            <b-icon icon="clock" animation="spin" />
          </b-iconstack>Animation
        </template>

        <b-form-select v-model="values.animation" :options="options.animations" />
      </b-form-group>
    </div>
    <div v-show="!is_selected" class="p-2 border-top">Please select icons to edit.</div>
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
      this.applyValues();
    },
    "values.scale"(scale) {
      this.$emit("change", { scale });
    },
    "values.shiftV"(shiftV) {
      this.$emit("change", { shiftV });
    },
    "values.shiftH"(shiftH) {
      this.$emit("change", { shiftH });
    },
    "values.variant"(variant) {
      this.$emit("change", { variant });
    },
    "values.flipV"(flipV) {
      this.$emit("change", { flipV });
    },
    "values.flipH"(flipH) {
      this.$emit("change", { flipH });
    },
    "values.rotate"(rotate) {
      this.$emit("change", { rotate });
    },
    "values.animation"(animation) {
      this.$emit("change", { animation });
    }
  },
  created() {
    this.values = this.initValues;
  },
  computed: {
    is_selected() {
      return this.selected.length > 0;
    },
    initValues() {
      return {
        scale: 1,
        shiftV: 0,
        shiftH: 0,
        variant: null,
        flipV: false,
        flipH: false,
        rotate: 0,
        animation: null
      };
    }
  },
  methods: {
    applyValues() {
      this.values = this.selected.length
        ? Object.assign({}, this.iconsets[this.selected[0]].options)
        : this.initValues;
    }
  }
};
</script>