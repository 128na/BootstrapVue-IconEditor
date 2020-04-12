<template>
  <content-collapse title="Search Icons" :beginning_display="true">
    <div v-for="icon in defined_iconsets" :key="icon" class="icon-list">
      <b-icon :icon="icon" class="icon ml-2" />
      {{icon}}
      <div class="btn-add clickable" @click="handleAdd(icon)">
        <b-icon icon="plus-circle" scale="2" variant="secondary" />
      </div>
    </div>
  </content-collapse>
</template>

<script>
import * as icons from "bootstrap-vue/src/icons/icons";
export default {
  props: ["iconsets"],
  data() {
    return {
      defined_iconsets: []
    };
  },
  created() {
    this.importiconsets();
  },
  methods: {
    importiconsets() {
      this.defined_iconsets = Object.entries(icons)
        .map(i =>
          i[0]
            .replace("BIcon", "")
            .replace(/([a-z])([A-Z])/g, "$1-$2")
            .replace(/\s+/g, "-")
            .toLowerCase()
        )
        .filter(i => i !== "blank");
    },
    handleAdd(icon) {
      const icon_data = {
        icon,
        scale: 1,
        shift_v: 0,
        shift_h: 0,
        variant: null,
        flip_v: false,
        flip_h: false,
        rotate: null,
        animation: null
      };
      this.iconsets.push(icon_data);
    }
  }
};
</script>
<style lang="scss" scoped>
.icon-list {
  display: flex;
  align-items: center;
  justify-content: space-between;
  .icon {
    transition: all 0.1s ease;
  }
  .btn-add {
    opacity: 0;
  }

  &:hover {
    background-color: var(--light);
    padding: 1rem 0;
    .icon {
      font-size: 4rem;
    }
    .btn-add {
      padding: 1rem;
      opacity: 1;
    }
  }
}
</style>