<template>
  <div>
    <header-menu />
    <preview-area :iconsets="iconsets" :config="config" />
    <b-sidebar id="sidebar-1" title="Menu" shadow right v-model="show_sidebar">
      <preview-config :config="config" />
      <icon-edit :iconsets="iconsets" :selected="selected" @change="handleChange" />
      <add-icon :iconsets="iconsets" class="flex-1" />
      <output-data :iconsets="iconsets" />
      <copyright-content />
    </b-sidebar>
    <b-button
      class="vertical clickable"
      variant="outline-secondary"
      @click="show_sidebar = !show_sidebar"
    >Show Menu</b-button>
  </div>
</template>
<script>
const demo_iconsets = [
  {
    icon: "file-text",
    options: {}
  },
  {
    icon: "pencil",
    options: {
      scale: 0.5,
      shift_v: 5,
      shift_h: 3,
      variant: "danger",
      flip_v: true,
      flip_h: true,
      rotate: 45,
      animation: null
    }
  }
];
export default {
  data() {
    return {
      iconsets: [],
      selected: [],
      config: {
        scale: 16
      },
      show_sidebar: true
    };
  },
  created() {
    this.iconsets = demo_iconsets;
  },
  methods: {
    handleChange(key_value) {
      this.iconsets = this.iconsets.map((iconset, index) => {
        if (this.selected.includes(index)) {
          iconset.options = Object.assign({}, iconset.options, key_value);
        }
        return iconset;
      });
    }
  }
};
</script>
<style lang="scss">
.flex-1 {
  flex: 1;
}
.clickable {
  cursor: pointer;
  user-select: none;
}
.vertical {
  position: absolute;
  right: -2.3rem;
  top: 6rem;
  border-top-right-radius: 0;
  border-top-left-radius: 0;
  border-top: none;
  transform: rotate(90deg);
}
</style>
