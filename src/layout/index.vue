<template>
  <div>
    <Header/>
    this is layout index.vue
  </div>
</template>

<script>
import Header from './components/header'
export default {
  name: 'layout',
  data() {
    return {
      hello: 'hello world'
    }
  },
  components: {
    Header
  }
}
</script>