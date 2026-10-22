<template>
    <BasicVerticalFlex gap="unit-s" class="navBarContent">
        <BasicNavlink v-for="route in routes" :key="route.path" :to="route.path" :icon="route.meta.icon" :label="String(route.name)"/>
        <BasicColorSchemeSwitch class="navBarContentSchemeSwitch"/>
    </BasicVerticalFlex>
</template>

<script lang="ts">
import { router } from '../scripts/router'

export default {
    name: "NavbarContent",
    computed: {
        routes() {
            return router.getRoutes().filter((route) => route.meta.showInNavbar)
        },
    },
}
</script>

<style scoped>
.navBarContent {
    height: 100%;
}

.navBarContentSchemeSwitch {
    margin-top: auto;
}
</style>
