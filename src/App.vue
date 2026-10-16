<template>
  <BasicSiteLayout>
    <BasicNavber>
      <NavbarContent/>
    </BasicNavber>
    <BasicMain>
      <RouterView/>
    </BasicMain>
  </BasicSiteLayout>
</template>
<script lang="ts">
import { BasicVerticalFlex, BasicPanel } from '@nimo/basic-ui'

export default {
  name: 'App',
  components: {
    BasicVerticalFlex,
    BasicPanel,
  },
  data() {
    return {
    }
  },
};
</script>

<style>

</style>
