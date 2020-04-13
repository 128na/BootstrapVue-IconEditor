<template>
  <draggable v-model="draggable_items">
    <transition-group>
      <div
        v-for="(iconset,index) in iconsets"
        :key="iconset.icon"
        @click="handleSelect(index)"
        :class="{selected:isSelected(index)}"
        class="clickable px-2 py-1 d-flex align-items-center items"
      >
        <b-icon :icon="iconset.icon" class="mr-1" />
        <div class="flex-1">{{ iconset.icon }}</div>
        <div class="btn-delete" @click.stop="handleDelete(index)">
          <b-icon icon="x-circle" :variant="isSelected(index) ? 'light':'danger'" />
        </div>
      </div>
    </transition-group>
  </draggable>
</template>
<script>
export default {
  props: ["iconsets", "selected"],
  created() {
    this.visible = true;
  },
  computed: {
    draggable_items: {
      get() {
        return this.iconsets;
      },
      set(value) {
        this.iconsets.splice(0, this.iconsets.length, ...value);
      }
    }
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
    handleDelete(index) {
      if (window.confirm("Remove?")) {
        this.iconsets.splice(index, 1);
      }
    },
    isSelected(index) {
      return this.selected.includes(index);
    }
  }
};
</script>
<style lang="scss" scoped>
.items {
  &.selected {
    background-color: var(--secondary);
    color: var(--light);
  }

  .btn-delete {
    display: none;
  }
  &:hover .btn-delete {
    display: block;
  }
}
</style>