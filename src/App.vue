<template>
  <div>
    <header-menu />
    <icon-preview :iconsets="iconsets" :config="config" />
    <b-sidebar id="sidebar-1" title shadow right :visible="true">
      <preview-config :config="config" />
      <icon-layers :iconsets="iconsets" :selected="selected" />
      <icon-edit :iconsets="iconsets" :selected="selected" @change="handleChange" />
      <icon-list :iconsets="iconsets" class="flex-1" />
      <icon-output :iconsets="iconsets" />
    </b-sidebar>
  </div>
</template>
<script>
export default {
  data() {
    return {
      iconsets: [
        {
          icon: "file-text",
          scale: 0.75,
          shift_v: 0,
          shift_h: 0,
          variant: null,
          flip_v: false,
          flip_h: false,
          rotate: null,
          animation: null
        },
        {
          icon: "pencil",
          scale: 0.5,
          shift_v: 5,
          shift_h: 3,
          variant: "danger",
          flip_v: true,
          flip_h: true,
          rotate: 45,
          animation: null
        }
      ],
      selected: [],
      config: {
        scale: 16
      }
    };
  },
  methods: {
    handleChange(values) {}
  }
};
</script>
<style>
body,
html {
  height: 100vh;
}
.flex-1 {
  flex: 1;
}
.clickable {
  cursor: pointer;
  user-select: none;
}
</style>
