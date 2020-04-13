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
    select(iconsets_index) {
      this.selected.push(iconsets_index);
    },
    unselect(selected_index) {
      this.selected.splice(selected_index, 1);
    },
    handleSelect(iconsets_index) {
      const selected_index = this.selected.indexOf(iconsets_index);
      if (selected_index !== -1) {
        this.unselect(selected_index);
      } else {
        this.select(iconsets_index);
      }
    },
    async handleDelete(iconsets_index) {
      if (window.confirm("Remove?")) {
        const selected_index = this.selected.indexOf(iconsets_index);
        if (selected_index !== -1) {
          this.unselect(selected_index);
          await this.$nextTick();
        }
        this.iconsets.splice(iconsets_index, 1);
      }
    },
    isSelected(iconsets_index) {
      return this.selected.includes(iconsets_index);
    }
  }
};
</script>
<style lang="scss" scoped>
.items {
  &.selected {
    background-color: var(--primary);
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