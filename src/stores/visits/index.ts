import { defineStore } from 'pinia'

const lsKVisits = 'playground:visits'

interface VisitRecord {
    count: number
    lastVisited: string
}

function loadVisits(): Record<string, VisitRecord> {
    const item = localStorage.getItem(lsKVisits)
    return item ? JSON.parse(item) : {}
}

export const useVisitsStore = defineStore('visits', {
    state: () => ({
        visits: loadVisits() as Record<string, VisitRecord>,
    }),
    getters: {
        visitCount: (state) => (path: string) => state.visits[path]?.count ?? 0,
    },
    actions: {
        recordVisit(path: string) {
            const existing = this.visits[path]
            this.visits[path] = {
                count: (existing?.count ?? 0) + 1,
                lastVisited: new Date().toISOString(),
            }
            localStorage.setItem(lsKVisits, JSON.stringify(this.visits))
        },
    },
})
