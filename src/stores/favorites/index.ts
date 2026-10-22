import { defineStore } from 'pinia'

const lsKFavorites = 'playground:favorites'

function loadFavorites(): string[] {
    const item = localStorage.getItem(lsKFavorites)
    return item ? JSON.parse(item) : []
}

export const useFavoritesStore = defineStore('favorites', {
    state: () => ({
        paths: loadFavorites() as string[],
    }),
    getters: {
        isFavorited: (state) => (path: string) => state.paths.includes(path),
    },
    actions: {
        toggleFavorite(path: string) {
            const index = this.paths.indexOf(path)
            if (index === -1) {
                this.paths.push(path)
            } else {
                this.paths.splice(index, 1)
            }
            localStorage.setItem(lsKFavorites, JSON.stringify(this.paths))
        },
    },
})
