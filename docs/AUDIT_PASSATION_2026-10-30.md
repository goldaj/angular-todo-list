# Audit GitHub contradictoire — goldaj/angular-todo-list (2026-10-30)

Inspection des refs, PR, fichiers et instructions. Aucune exécution locale ni modernisation du projet durant cette passe.

## Historique des branches
Branche par défaut `master`, commit `b9b354b7122822c0090463e05d0bd06f697617bc`.
- `chatgpt/review-20261024` — behind, avance 0, retard 1. Déjà intégrée au graphe de référence.

## Pull requests
- [#1](https://github.com/goldaj/angular-todo-list/pull/1) : closed, fusionnée ; [ChatGPT] Consignes Codex et migration encadrée Angular 8

## État technique lu
Racine : `.editorconfig`, `.gitignore`, `AGENTS.md`, `README.md`, `angular.json`, `browserslist`, `docs`, `e2e`, `karma.conf.js`, `package-lock.json`, `package.json`, `src`, `tsconfig.app.json`, `tsconfig.json`, `tsconfig.spec.json`, `tslint.json`.

README : # Todo list Angular

Exercice de liste de tâches, navigation, formulaires, services HTTP et tests associés ; utilisation de JSONPlaceholder comme API de démonstration.

Archive pédagogique issue d’une formation Angular, avec squelette généré par Angular CLI 8.3.12. Ce dépôt conserve l’historique Git local existant et ajoute les modifications qui n’avaient pas encore été committées. Les deux sauvegardes locales étaient identiques et ont été dédupliquées.

État : prototype de formation, non maintenu et non validé avec les versions actuelles de Node/Angular. Les dépendances historiques restent dans le manifeste et le lockfile pour préserver la provenance. La migration et la vérification des tests constituent les prochaines étapes.

Les anciennes commandes de développement et de test figurent dans [la documentation Angular CLI d’origine](docs/ANGULAR_CLI_ORIGINAL.md). Aucun répertoire de dépendances, secret ou environnement personnel n’est publié. Les exemples et le squelette du framework restent des supports pédagogiques, avec leurs attributions.


AGENTS : # AGENTS.md — Angular Todo (legacy learning archive)

Read `README.md`, `docs/ANGULAR_CLI_ORIGINAL.md` and
`docs/CHATGPT_PROJECT_HISTORY.md` before changing code.

## Boundaries

- Educational Angular 8.2.x / Angular CLI 8.3.12 application; JSONPlaceholder is a demo dependency, not a production service.
- Preserve the historic `package-lock.json` and dependency provenance. Do not run `npm audit fix` or a framework migration in place without a dedicated plan, compatibility tests and explicit approval.
- Never commit `node_modules/`, tokens, local settings or user data.
- Modern Node compatibility and test execution are **not** verified. Report commands actually run, not assumed results.

## Coordination with Codex

- Changes from the multi-repository ChatGPT pass of 2026-10-24 live only on `chatgpt/review-20261024`. Do not force-push or merge to `master` automatically.
- This is a distinct legacy codebase. Do not rewrite it as Angular 19+ just to satisfy a dependency alert; preserve functionality and separate migration work.
- Update `

## À challenger au prochain passage
- Tester le fonctionnement réel des composants Angular, des formulaires et de la persistance sur les navigateurs supportés.
- Vérifier la dette des dépendances et de l'outillage Angular sans déclencher une migration aveugle ; comparer les risques de rupture.
- Exécuter tests et build puis documenter versions Node et Angular effectivement utilisées.
- L'ancienne branche de revue n'a aucun commit exclusif ; pas de PR à créer pour du contenu déjà intégré. Vérifier qu'aucun workflow ne la référence avant suppression.
