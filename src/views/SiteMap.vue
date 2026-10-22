<template>
    <BasicVerticalFlex gap="unit-l">
        <BasicPanel icon="mdi:sitemap" title="Sitemap">
            <BasicVerticalFlex gap="unit-s">
                <div v-for="route in routes" :key="route.path" class="siteMapRow">
                    <BasicNavlink :to="route.path" :icon="route.meta.icon" :label="String(route.name)"/>
                    <button
                        v-if="route.meta.canFavorite"
                        type="button"
                        class="siteMapFavoriteButton"
                        @click="favoritesStore.toggleFavorite(route.path)"
                    >
                        <BasicIcon :icon="favoritesStore.isFavorited(route.path) ? 'mdi:heart' : 'mdi:heart-outline'"/>
                    </button>
                </div>
            </BasicVerticalFlex>
        </BasicPanel>
    </BasicVerticalFlex>
</template>

<script lang="ts">
import { mapStores } from 'pinia'
import { useFavoritesStore } from '../stores/favorites'
import { router } from '../scripts/router'

export default {
    name: "SiteMap",
    computed: {
        ...mapStores(useFavoritesStore),
        routes() {
            return router.getRoutes().filter((route) => route.meta.showInSitemap)
        },
    },
}
</script>

<style scoped>
.siteMapRow {
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: var(--unit-m);
}

.siteMapFavoriteButton {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    border: none;
    background: transparent;
    color: var(--panelTextColor);
    cursor: pointer;
}
</style>
