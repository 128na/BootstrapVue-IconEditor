<template>
  <div class="box">
    <div class="icon-area d-flex justify-content-center align-items-center" :style="icon_area">
      <b-icon v-if="is_single" :icon="getSingleIcon()" v-bind="getSingleOptions()" />
      <b-iconstack v-else :scale="config.scale">
        <b-icon
          v-for="(iconset,index) in iconsets"
          :key="index"
          :icon="iconset.icon"
          v-bind="iconset.options"
        />
      </b-iconstack>
    </div>
  </div>
</template>
<script>
export default {
  props: ["iconsets", "config"],
  computed: {
    icon_area() {
      return {
        width: `${this.config.scale}rem`,
        height: `${this.config.scale}rem`,
        border: `dashed 1px var(--secondary)`
      };
    },
    is_single() {
      return this.iconsets.length === 1;
    }
  },
  methods: {
    getSingleIcon() {
      return this.iconsets[0].icon;
    },
    getSingleOptions() {
      return Object.assign({}, this.iconsets[0].options, {
        scale: this.iconsets[0].options.scale * this.config.scale,
        shiftV: this.iconsets[0].options.shiftV * this.config.scale,
        shiftH: this.iconsets[0].options.shiftH * this.config.scale
      });
    }
  }
};
</script>
<style scoped>
.box {
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  margin-top: 5rem;
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>