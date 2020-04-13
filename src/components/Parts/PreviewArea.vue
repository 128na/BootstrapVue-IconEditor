<template>
  <div class="box">
    <div class="icon-area d-flex justify-content-center align-items-center" :style="icon_area">
      <b-iconstack :scale="config.scale">
        <b-icon
          v-for="(iconset,index) in render_iconsets"
          :key="index"
          :icon="iconset.icon"
          v-bind.sync="iconset.options"
        />
      </b-iconstack>
    </div>
  </div>
</template>
<script>
export default {
  props: ["iconsets", "config"],
  data() {
    return {
      render_iconsets: []
    };
  },
  watch: {
    iconsets: {
      deep: true,
      handler() {
        this.render_iconsets = this.iconsets.map(iconset => {
          const options = {
            variant: iconset.options.variant,
            "flip-h": iconset.options.flip_h,
            "flip-v": iconset.options.flip_v,
            rotate: iconset.options.rotate,
            scale: iconset.options.scale,
            "shift-h": iconset.options.shift_h,
            "shift-v": iconset.options.shift_v,
            animation: iconset.options.animation
          };
          return Object.assign({ icon: iconset.icon }, { options });
        });
      }
    }
  },
  computed: {
    icon_area() {
      return {
        width: `${this.config.scale}rem`,
        height: `${this.config.scale}rem`,
        border: `dashed 1px var(--secondary)`
      };
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