# Audit GitHub et passation — 30 octobre 2026

Audit **statique** fondé sur les références GitHub, le README et les PR. Tests non exécutés, code non modifié, aucun comportement de production validé. Lire `AGENTS.md` et `docs/CHATGPT_PROJECT_HISTORY.md` à la reprise.

## Branches (base : `master`)
| Branche | SHA | Comparaison | Consigne |
|---|---|---|---|
| `master` | `47bcc259f2fc` | Cible courante | Conserver |
| `chatgpt/review-20261024` | `d506e77ebfff` | `behind`, ahead 0, behind 3 | Entièrement ancêtre : candidate à l'archivage de branche, pas un travail à fusionner |

## PR historiques
- [#1](https://github.com/goldaj/angular-todo-list/pull/1) : fusionnée, `chatgpt/review-20261024` → `master`.

## Analyse critique
Archive Angular 8 avec dépendance de démonstration JSONPlaceholder ; la PR passée est déjà fusionnée, mais un merge ne valide pas compatibilité Node, serveur distant ni sécurité. Ne pas écraser package-lock ou migrer automatiquement vers Angular moderne.

## Priorités pour le prochain agent
1. Lire docs/ANGULAR_CLI_ORIGINAL.md et docs/CHATGPT_PROJECT_HISTORY.md.
2. Vérifier la compatibilité d'une version Node ciblée et les scénarios liste/ajout/filtrage sans mutation silencieuse du lockfile.
3. Si migration nécessaire, l'isoler dans une branche, documenter les régressions et vérifier l'application dans navigateur.

## Prudence Git et test
Aucune suppression de branche ni changement de code exécuté. Contrôler références externes/CI avant tout nettoyage et réactualiser les comparaisons : elles sont datées du 30/10/2026. Distinguer `ahead=0` (aucun commit exclusif) et validation de fonctionnement (non prouvée). Source documentaire : `README.md` (« # Todo list Angular ») et `AGENTS.md`.
