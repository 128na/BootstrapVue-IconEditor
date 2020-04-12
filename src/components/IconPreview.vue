<template>
  <div class="box">
    <b-iconstack :scale="config.scale">
      <b-icon v-for="(iconset,index) in iconsets" :key="index" v-bind.sync="iconset" />
    </b-iconstack>
  </div>
</template>
<script>
export default {
  props: ["iconsets", "config"],
  data() {
    return {
      scale: 16
    };
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