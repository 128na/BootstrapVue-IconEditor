<template>
  <content-collapse title="Add Icon" :beginning_display="false">
    <div>
      <b-form-input v-model="search" placeholder="search" />
    </div>
    <div v-for="icon in filtered_icons" :key="icon" class="icon-list">
      <b-icon :icon="icon" class="icon ml-2" />
      {{icon}}
      <div class="btn-add clickable" @click="handleAdd(icon)">
        <b-icon icon="plus-circle" scale="2" variant="secondary" />
      </div>
    </div>
    <div v-show="filtered_icons.length === 0" class="p-2">No icons.</div>
  </content-collapse>
</template>

<script>
/**
 * @see https://github.com/bootstrap-vue/bootstrap-vue/blob/dev/src/icons/icons.js
 */
import * as icons from "bootstrap-vue/src/icons/icons";
const exclude_icons = [
  "BIconBlank",
  "BIconXCircle",
  "BIconXCircleFill",
  "BIconXDiamond",
  "BIconXDiamondFill",
  "BIconXOctagon",
  "BIconXOctagonFill",
  "BIconXSquare",
  "BIconXSquareFill"
];
export default {
  props: ["iconsets"],
  data() {
    return {
      defined_icons: [],
      search: ""
    };
  },
  created() {
    this.importIcons();
  },
  computed: {
    filtered_icons() {
      return this.defined_icons.filter(icon => icon.includes(this.search));
    }
  },
  methods: {
    importIcons() {
      this.defined_icons = Object.entries(icons)
        .filter(mod => !exclude_icons.includes(mod[0]))
        .map(i =>
          i[0]
            .replace("BIcon", "")
            .replace(/([a-z])([A-Z])/g, "$1-$2")
            .replace(/\s+/g, "-")
            .toLowerCase()
        );
    },
    handleAdd(icon) {
      const icon_data = {
        icon,
        options: {}
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
  transition: all 0.1s ease;
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
input {
  border-radius: 0;
  &:focus {
    box-shadow: none;
  }
}
</style>