<template>
  <div>
    <h5 class="p-2 m-0 border-bottom clickable" @click="visible=!visible">
      <transition name="rotation" mode="out-in">
        <b-icon v-if="visible" icon="chevron-up" key="a" class="mr-1" />
        <b-icon v-else icon="chevron-down" key="b" class="mr-1" />
      </transition>
      {{title}}
    </h5>
    <b-collapse class="border-bottom bg-white" v-model="visible">
      <slot></slot>
    </b-collapse>
  </div>
</template>
<script>
export default {
  props: ["title", "beginning_display"],
  data() {
    return { visible: false };
  },
  created() {
    this.visible = !!this.beginning_display;
  }
};
</script>
<style scoped>
.rotation-leave-active {
  transition: transform 0.25s ease;
}
.rotation-leave-to {
  transform: rotate(180deg);
}
</style>