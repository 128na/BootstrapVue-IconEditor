<template>
  <div>
    <header-menu />
    <preview-area :iconsets="iconsets" :config="config" />
    <b-sidebar id="sidebar-1" title="Menu" shadow right v-model="show_sidebar">
      <preview-config :config="config" />
      <icon-edit :iconsets="iconsets" :selected="selected" @change="handleChange" />
      <add-icon :iconsets="iconsets" class="flex-1" />
      <output-data :iconsets="iconsets" />
      <import-export-data :iconsets="iconsets" />
      <copyright-content />
    </b-sidebar>
    <b-button
      class="vertical clickable"
      variant="outline-secondary"
      @click="show_sidebar = !show_sidebar"
    >
      <span>Show Menu</span>
    </b-button>
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
      scale: "0.5",
      shiftV: "4.4",
      shiftH: "4.4",
      variant: "primary",
      flipV: false,
      flipH: false,
      rotate: "0",
      animation: null
    }
  },
  {
    icon: "check",
    options: {
      scale: "0.3",
      shiftV: "4.7",
      shiftH: "-2.8",
      variant: "success",
      flipV: null,
      flipH: null
    }
  },
  {
    icon: "check",
    options: {
      variant: "success",
      scale: "0.3",
      shiftV: "2.7",
      shiftH: "-2.8"
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
.btn.vertical {
  position: absolute;
  right: 0;
  top: 6rem;
  border-top-right-radius: 0;
  border-bottom-right-radius: 0;
  border-right: none;
  span {
    writing-mode: vertical-lr;
    vertical-align: middle;
  }
}
</style>
