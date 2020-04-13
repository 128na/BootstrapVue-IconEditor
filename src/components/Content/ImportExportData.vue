<template>
  <content-collapse title="Export/Import JSON">
    <b-form-textarea v-model="raw" rows="10" :state="state" />
    <div class="d-flex">
      <b-button @click="handleExport" variant="outline-secondary" class="flex-1">
        <b-icon icon="box-arrow-down" class="mr-1" />Export
      </b-button>
      <b-button @click="handleImport" variant="outline-secondary" :disabled="!state" class="flex-1">
        <b-icon icon="box-arrow-in-down" class="mr-1" />Import
      </b-button>
    </div>
  </content-collapse>
</template>
<script>
export default {
  props: ["iconsets"],
  data() {
    return {
      raw: ""
    };
  },
  computed: {
    state() {
      try {
        if (this.raw) {
          JSON.parse(this.raw);
          return true;
        }
        return null;
      } catch (error) {
        return false;
      }
    }
  },
  methods: {
    handleExport() {
      this.raw = JSON.stringify(this.iconsets, null, "  ");
    },
    handleImport() {
      this.iconsets.splice(0, this.iconsets.length, ...JSON.parse(this.raw));
    }
  }
};
</script>
<style lang="scss" scoped>
textarea,
button {
  border-radius: 0;
}
</style>