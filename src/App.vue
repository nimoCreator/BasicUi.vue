<template>
  <BasicSiteLayout>
    <BasicNavbar>
      <NavbarContent />
    </BasicNavbar>
    <BasicMain>
      <RouterView />
    </BasicMain>
  </BasicSiteLayout>
</template>

<script lang="ts">
import NavbarContent from "./components/NavBarContent.vue";

export default {
  name: "App",
  components: { NavbarContent },
  data() {
    return {};
  },
};
</script>

<style></style>
