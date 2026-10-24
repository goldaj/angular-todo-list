# Analyse de reprise Angular Todo — 2026-10-24

**Constat de lecture du dépôt :** Angular ~8.2, CLI ~8.3, TypeScript ~3.5,
Karma/Protractor et dépendances figées dans le lockfile.

## Chantiers possibles (pas de migration automatique)
1. Isoler l'environnement historique pour reproduire la compilation et les tests sans réécrire le lockfile.
2. Capturer les comportements des formulaires, routes, tâches et appels JSONPlaceholder par des tests de contrat.
3. Préparer une migration Angular version par version sur une branche distincte avec validation des régressions.
4. Retirer Protractor/TSLint uniquement dans la migration, après remplacement des tests et lint existants.

**Confiance élevée** dans le diagnostic des versions (manifeste), mais
**aucune validation de build ou de sécurité npm** n'a été effectuée.
Ne pas présenter ces étapes comme déjà réalisées.
