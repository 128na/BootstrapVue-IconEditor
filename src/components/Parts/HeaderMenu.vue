<template>
  <b-navbar toggleable="lg" type="dark" variant="primary">
    <b-container>
      <b-navbar-brand :href="url">
        <b-iconstack class="mr-1">
          <b-icon icon="file-text" variant="light" />
          <b-icon icon="pencil" variant="light" rotate="0" scale="0.7" shift-h="4.4" shift-v="4.4" />
        </b-iconstack>
        {{title}}
      </b-navbar-brand>

      <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

      <b-collapse id="nav-collapse" is-nav>
        <b-navbar-nav>
          <b-nav-item href="https://bootstrap-vue.js.org/">BootstrapVue</b-nav-item>
          <b-nav-item href="https://getbootstrap.com/">Bootstrap</b-nav-item>
          <b-nav-item href="https://vuejs.org/index.html">Vue</b-nav-item>
        </b-navbar-nav>
      </b-collapse>
    </b-container>
  </b-navbar>
</template>
<script>
export default {
  computed: {
    title: () => process.env.VUE_APP_NAME,
    url: () => process.env.VUE_APP_URL
  }
};
</script>