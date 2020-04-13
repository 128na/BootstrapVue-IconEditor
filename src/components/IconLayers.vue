<template>
  <div>
    <div
      v-for="(icon,index) in iconsets"
      :key="index"
      @click="handleSelect(index)"
      :class="{selected:isSelected(index)}"
      class="clickable px-2 py-1"
    >
      <b-icon :icon="icon.icon" />
      {{ icon.icon }}
    </div>
  </div>
</template>
<script>
export default {
  props: ["iconsets", "selected"],
  created() {
    this.visible = true;
  },
  methods: {
    handleSelect(index) {
      const i = this.selected.indexOf(index);
      if (i === -1) {
        this.selected.push(index);
      } else {
        this.selected.splice(i, 1);
      }
    },
    isSelected(index) {
      return this.selected.includes(index);
    }
  }
};
</script>
<style scoped>
.selected {
  background-color: var(--secondary);
  color: var(--light);
}
</style>