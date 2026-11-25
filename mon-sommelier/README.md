# Mon Sommelier (application autonome)

Application web installable (PWA), indépendante de Claude : elle appelle directement l'API Anthropic avec **votre propre clé**.

## Utilisation
1. Hébergez le dossier sur n'importe quel hébergeur statique en HTTPS (GitHub Pages, Netlify, Cloudflare Pages…). HTTPS est requis pour l'appareil photo et l'installation.
2. Ouvrez l'URL, puis « Ajouter à l'écran d'accueil » (iPhone : Partager, puis Sur l'écran d'accueil ; Android : menu, puis Installer l'application).
3. Au premier lancement, ouvrez **Réglages** et collez votre clé API (https://console.anthropic.com/settings/keys).

## Fonctionnement
- `engine.js` : appels à l'API Messages (photo en base64, recherche web native Anthropic pour les prix), dictée et lecture vocale du navigateur.
- `app.js` : interface et logique (fiche, cave, comparaison, apprentissage).
- La cave est stockée dans le navigateur (localStorage) : export/import JSON dans Réglages.
- `sw.js` : fonctionnement hors ligne de l'interface (les analyses demandent internet).

## Limites à connaître
- La clé API est stockée sur l'appareil et envoyée uniquement à api.anthropic.com. Ne publiez pas l'app avec une clé intégrée. Pour un usage multi-utilisateurs, passez par un petit serveur qui garde la clé.
- Les noms de modèles par défaut sont modifiables dans Réglages.
