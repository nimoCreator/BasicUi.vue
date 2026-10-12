# BasicUi.vue — playground

Aplikacja do podglądu i debugowania biblioteki **BasicUi** (`@nimo/basic-ui`) na żywo.

```
BasicUi.vue/          ← to repo: playground (aplikacja Vue)
├─ src/App.vue        ← demo wszystkich komponentów
├─ vite.config.ts     ← alias @nimo/basic-ui -> BasicUi/src (HMR na źródłach)
└─ BasicUi/           ← OSOBNE repo git: sama biblioteka
   └─ src/components/Basic*.vue
```

## Start

```powershell
npm install        # instaluje playground + bibliotekę (npm workspaces)
npm run dev        # http://localhost:5173, edycja BasicUi/src/*.vue odświeża się od razu
```

## Komendy

| Komenda | Co robi |
|---|---|
| `npm run dev` | playground z HMR |
| `npm run lib:build` | buduje bibliotekę do `BasicUi/dist` |
| `npm run lib:type-check` | sprawdza typy biblioteki |
| `npm run type-check` | sprawdza typy playgroundu i biblioteki |

## Debugowanie

- **Vue DevTools**: przycisk na dole strony w trybie dev (drzewo komponentów, propsy, stan).
- **VS Code**: `npm run dev`, potem F5 („Playground (Chrome)”) i breakpointy w `BasicUi/src/**/*.vue`.
- **Przeglądarka**: F12 → Sources, pliki `.vue` z sourcemapami.

## Biblioteka jako osobne repo

`BasicUi/` jest w `.gitignore` tego repo i ma własne `.git`. Gdy wypchniesz bibliotekę na GitHuba,
możesz zamienić ją w submodule:

```powershell
git submodule add https://github.com/<login>/BasicUi.git BasicUi
```
