<template>
  <div class="p-2">
    <small>
      Created by
      <a :href="twitter" target="_blank" rel="noopener noreferer">@{{author}}</a>,
      <a :href="github" target="_blank" rel="noopener noreferer">Github</a>
      <br />
      version {{version}}
    </small>
  </div>
</template>
<script>
export default {
  computed: {
    author: () => process.env.VUE_APP_AUTHOR,
    twitter: () => process.env.VUE_APP_TWITTER,
    github: () => process.env.VUE_APP_GITHUB,
    version: () => process.env.VUE_APP_VERSION
  }
};
</script>