<template>
  <component :is="icon"/>
</template>

<script>
// Use babel-plugin-wildcard to load all icons (need relative path)
// eslint-disable-next-line import/no-unresolved, import/no-extraneous-dependencies
import * as Icons from '../assets/icons'

export default {
  name: 'Icon',
  components: {
    ...Icons,
  },
  props: {
    /** Refers to the SVG file name in `@/assets/icons` */
    icon: {
      type: String,
      required: true,
    },
  },
  install(Vue) {
    // Allow for global component with Vue.use()
    Vue.component(this.name, this)
  },
}
</script>

<style scoped>
  path {
    fill: currentColor;
  }
</style>
