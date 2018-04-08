<template>
  <div class="wrap grey-bg">
      <Header :status.sync="status" />
      <List :status.sync="status"/>
  </div>
</template>

<script>
import Header from './header.vue';
import List from './list.vue';
export default {
  data () {
    return {
      status: 0,
    }
  },
  components: {
    Header,
    List,
  }
}
</script>

<style scoped>

</style>
