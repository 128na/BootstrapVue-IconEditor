<template>
  <content-collapse title="Preview Config" :beginning_display="true">
    <div class="p-2">
      <b-form-group :label="`Display Scale ${config.scale} rem`">
        <b-form-input type="range" v-model="config.scale" min="1" max="50" />
      </b-form-group>
    </div>
  </content-collapse>
</template>
<script>
export default {
  props: ["config"]
};
</script>