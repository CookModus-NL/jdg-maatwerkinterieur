// Minimal ESLint config — typecheck + next build doen het zware werk.
// Lint kan later worden uitgebreid met @next/eslint-plugin-next zodra dat
// volledig compatibel is met ESLint v9 flat-config.

export default [
  {
    ignores: ['.next/**', 'node_modules/**', 'public/**', '*.config.*'],
  },
]
