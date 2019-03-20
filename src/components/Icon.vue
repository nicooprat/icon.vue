<template>
  <component :is="`icon-${icon}`"/>
</template>

<script>
// Use babel-plugin-wildcard to load all icons (need relative path)
// eslint-disable-next-line import/no-unresolved, import/no-extraneous-dependencies
import * as Icons from '../assets/icons'
import upperFirst from 'lodash/upperFirst'
import camelCase from 'lodash/camelCase'
import mapKeys from 'lodash/mapKeys'

export default {
  name: 'Icon',
  components: {
    ...mapKeys(Icons, (icon, name) => `Icon${name}`),
  },
  props: {
    /** Refers to the SVG file name in `@/assets/icons` */
    icon: {
      type: String,
      required: true,
      validator(icon) {
        return Object.keys(Icons).includes(upperFirst(camelCase(icon)))
      },
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
