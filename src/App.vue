<template>
  <BasicWindowLayout>
    <BasicNavigationBar/>
    <RouterView/>
  </BasicWindowLayout>
</template>

<script lang="ts">
import BasicWindowLayout from '@/components/BasicWindowLayout.vue'
import BasicNavigationBar from '@/components/BasicNavigationBar.vue'

export default {
  name: 'App',
  components: {
    BasicWindowLayout: BasicWindowLayout,
    BasicNavigationBar: BasicNavigationBar,
  },
  data() {
    return {
    }
  },
};
</script>

<style>

</style>
